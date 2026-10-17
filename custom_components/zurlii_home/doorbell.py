"""Doorbell ring → Home Assistant notification bridge.

The physical Tuya doorbell updates
`event.soneria_inteligenta_doorbell_picture`. This listener turns that event
into a high-priority notification on the configured notify target, so the
phone/HA app rings even when the dashboard is not open.
"""

from __future__ import annotations

import logging
from typing import Any

from homeassistant.config_entries import ConfigEntry
from homeassistant.const import EVENT_STATE_CHANGED
from homeassistant.core import Event, HomeAssistant, State, callback
from homeassistant.exceptions import HomeAssistantError

from .const import DEFAULT_DOORBELL_EVENT, DEFAULT_DOORBELL_NOTIFY

_LOGGER = logging.getLogger(__name__)

DOORBELL_TITLE = "🔔 Sonerie poartă"
DOORBELL_MESSAGE = "Cineva a sunat la poartă."
DOORBELL_NOTIFICATION_ID = "zurlii_home_doorbell"


def _notification_data() -> dict[str, Any]:
    """Return a payload that asks the mobile app to use its doorbell channel."""
    return {
        "ttl": 0,
        "priority": "high",
        "importance": "high",
        "channel": "Doorbell",
        "push": {"sound": "default"},
    }


async def _async_notify(hass: HomeAssistant, target: str) -> None:
    """Send the phone notification, with a persistent fallback."""
    payload = {
        "title": DOORBELL_TITLE,
        "message": DOORBELL_MESSAGE,
        "data": _notification_data(),
    }
    domain, _, service = target.partition(".")

    # Modern notify entities (including notify.tvb on current HA releases).
    if domain == "notify" and hass.services.has_service("notify", "send_message"):
        try:
            await hass.services.async_call(
                "notify",
                "send_message",
                {"entity_id": target, **payload},
                blocking=True,
            )
            return
        except HomeAssistantError as err:
            _LOGGER.debug("notify.send_message failed for %s: %s", target, err)

    # Legacy notify services (notify.tvb style).
    if domain and service and hass.services.has_service(domain, service):
        try:
            await hass.services.async_call(
                domain,
                service,
                payload,
                blocking=True,
            )
            return
        except HomeAssistantError as err:
            _LOGGER.warning("Doorbell notify failed for %s: %s", target, err)

    _LOGGER.warning(
        "Doorbell notify target %s is not available; using persistent notification",
        target,
    )
    await hass.services.async_call(
        "persistent_notification",
        "create",
        {
            "title": DOORBELL_TITLE,
            "message": DOORBELL_MESSAGE,
            "notification_id": DOORBELL_NOTIFICATION_ID,
        },
        blocking=False,
    )


@callback
def async_setup_doorbell(hass: HomeAssistant, entry: ConfigEntry) -> None:
    """Listen for the physical ring and forward it to Home Assistant."""
    event_entity = entry.options.get("doorbell_event", DEFAULT_DOORBELL_EVENT)
    notify_target = entry.options.get("doorbell_notify", DEFAULT_DOORBELL_NOTIFY)

    @callback
    def _handle_state_changed(event: Event) -> None:
        old_state: State | None = event.data.get("old_state")
        new_state: State | None = event.data.get("new_state")
        if new_state is None or new_state.entity_id != event_entity:
            return
        if new_state.state in ("unknown", "unavailable"):
            return
        if old_state is not None and old_state.last_changed == new_state.last_changed:
            return
        # Tuya firmwares report different event types (ring/press/doorbell).
        # The entity itself is doorbell-specific, so every new event rings.
        hass.async_create_task(_async_notify(hass, notify_target))

    entry.async_on_unload(
        hass.bus.async_listen(EVENT_STATE_CHANGED, _handle_state_changed)
    )
    _LOGGER.debug(
        "Doorbell bridge listening on %s → %s", event_entity, notify_target
    )
