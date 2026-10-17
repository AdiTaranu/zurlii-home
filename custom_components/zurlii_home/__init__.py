"""Zurlii Home — premium glassmorphism dashboard for Home Assistant."""

from __future__ import annotations

import logging

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .const import DOMAIN
from .doorbell import async_setup_doorbell
from .frontend import (
    async_register_frontend,
    async_register_static,
    async_unregister_frontend,
    build_config,
)

_LOGGER = logging.getLogger(__name__)


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Register the static assets and config endpoint once."""
    hass.data.setdefault(DOMAIN, {})
    await async_register_static(hass)
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Zurlii Home from a config entry."""
    hass.data.setdefault(DOMAIN, {})
    hass.data[DOMAIN]["entry"] = entry

    configuration = build_config(entry)
    hass.data[DOMAIN]["config"] = configuration

    await async_register_frontend(hass, entry)
    async_setup_doorbell(hass, entry)
    entry.async_on_unload(entry.add_update_listener(_async_update_listener))
    _LOGGER.debug(
        "Zurlii Home frontend registered (version %s)", configuration.get("version")
    )
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Remove the panel/resource when the entry is unloaded or removed."""
    await async_unregister_frontend(hass, entry)
    hass.data.get(DOMAIN, {}).pop("entry", None)
    hass.data.get(DOMAIN, {}).pop("config", None)
    return True


async def _async_update_listener(hass: HomeAssistant, entry: ConfigEntry) -> None:
    """Reload on options changes so panel and backgrounds refresh."""
    await hass.config_entries.async_reload(entry.entry_id)
