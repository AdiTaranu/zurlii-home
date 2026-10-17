"""Frontend registration for Zurlii Home."""

from __future__ import annotations

import logging
from inspect import signature
from pathlib import Path
from typing import Any

import voluptuous as vol
from homeassistant.components import frontend, panel_custom
from homeassistant.components.http import HomeAssistantView
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

try:
    from homeassistant.components.http import StaticPathConfig
except ImportError:  # Home Assistant < 2024.7
    StaticPathConfig = None  # type: ignore[assignment,misc]

from .const import (
    CONFIG_URL,
    DEFAULT_BACKGROUNDS,
    DEFAULT_GREETING_NAME,
    DEFAULT_LANGUAGE,
    DEFAULT_LOCAL_BACKGROUND_BASE,
    DEFAULT_SIDEBAR_TITLE,
    DEFAULT_SUBTITLE,
    DEFAULT_TITLE,
    DOMAIN,
    FRONTEND_FILE,
    OVERRIDE_KEYS,
    PANEL_ELEMENT,
    PANEL_ICON,
    PANEL_URL,
    STATIC_URL,
    VERSION,
)

_LOGGER = logging.getLogger(__name__)

FRONTEND_DIR = Path(__file__).parent / "frontend"
DATA_FRONTEND_READY = f"{DOMAIN}_frontend_ready"


def _as_bool(value: Any, default: bool = False) -> bool:
    """Coerce config-entry values to bool."""
    if value is None:
        return default
    if isinstance(value, bool):
        return value
    return str(value).strip().lower() in {"1", "true", "yes", "on"}


def _settings(entry: ConfigEntry) -> dict[str, Any]:
    """Return merged entry data and options (options win)."""
    return {**entry.data, **entry.options}


def _sanitize_overrides(value: Any) -> dict[str, Any]:
    """Validate the advanced room override payload stored in options."""
    if value is None:
        return {}
    if not isinstance(value, dict):
        raise vol.Invalid("room_overrides must be an object")
    unknown = set(value) - OVERRIDE_KEYS
    if unknown:
        raise vol.Invalid(f"unsupported room override keys: {sorted(unknown)}")
    rooms = value.get("rooms")
    if rooms is not None and not isinstance(rooms, list):
        raise vol.Invalid("room_overrides.rooms must be a list")
    for key in ("global", "labels", "remote_commands", "features", "clock"):
        if key in value and not isinstance(value[key], dict):
            raise vol.Invalid(f"room_overrides.{key} must be an object")
    if "greeting_name" in value and not isinstance(value["greeting_name"], str):
        raise vol.Invalid("room_overrides.greeting_name must be a string")
    return value


def build_config(entry: ConfigEntry) -> dict[str, Any]:
    """Build the JSON configuration consumed by the Lit frontend."""
    settings = _settings(entry)

    use_bundled = _as_bool(settings.get("use_bundled_backgrounds"), True)
    local_base = str(
        settings.get("local_background_base") or DEFAULT_LOCAL_BACKGROUND_BASE
    ).rstrip("/")
    background_base = f"{STATIC_URL}/backgrounds" if use_bundled else local_base

    backgrounds = {}
    for key, filename in DEFAULT_BACKGROUNDS.items():
        value = str(settings.get(f"bg_{key}") or filename)
        if (
            use_bundled
            and "?" not in value
            and not value.startswith(("http://", "https://"))
        ):
            value = f"{value}?v={VERSION}"
        backgrounds[key] = value

    try:
        overrides = _sanitize_overrides(settings.get("room_overrides"))
    except vol.Invalid as err:
        _LOGGER.error("Ignoring invalid Zurlii Home room overrides: %s", err)
        overrides = {}

    config: dict[str, Any] = {
        "title": str(settings.get("title") or DEFAULT_TITLE),
        "subtitle": str(settings.get("subtitle") or DEFAULT_SUBTITLE),
        "language": (
            "en" if str(settings.get("language") or DEFAULT_LANGUAGE) == "en" else "ro"
        ),
        "greeting_name": str(
            settings.get("greeting_name")
            or overrides.get("greeting_name")
            or DEFAULT_GREETING_NAME
        ),
        "background_base": background_base,
        "backgrounds": backgrounds,
        "panel_mode": True,
        "version": VERSION,
    }

    for key in OVERRIDE_KEYS:
        if key in overrides:
            config[key] = overrides[key]

    # Backgrounds are deliberately not an override key: the per-room filename
    # options keep the integration UI as the single source of truth.
    return config


def _frontend_url() -> str:
    return f"{STATIC_URL}/{FRONTEND_FILE}?v={VERSION}"


def _panel_exists(hass: HomeAssistant) -> bool:
    """Return whether our custom panel is currently registered."""
    panels = hass.data.get("frontend_panels", {})
    return PANEL_URL in panels


async def async_register_static(hass: HomeAssistant) -> None:
    """Register the bundled JS and backgrounds once per Home Assistant run."""
    if hass.data.get(DATA_FRONTEND_READY):
        return
    if not FRONTEND_DIR.is_dir():
        _LOGGER.error("Zurlii Home frontend directory is missing: %s", FRONTEND_DIR)
    elif StaticPathConfig is not None:
        await hass.http.async_register_static_paths(
            [StaticPathConfig(STATIC_URL, str(FRONTEND_DIR), True)]
        )
    else:
        hass.http.register_static_path(
            STATIC_URL, str(FRONTEND_DIR), cache_headers=True
        )
    hass.http.register_view(ZurliiConfigView(hass))
    hass.data[DATA_FRONTEND_READY] = True


async def async_register_frontend(hass: HomeAssistant, entry: ConfigEntry) -> None:
    """Register the Lovelace resource and the sidebar panel."""
    js_url = _frontend_url()
    register_card = _as_bool(
        entry.options.get("register_card", entry.data.get("register_card")), True
    )
    show_panel = _as_bool(
        entry.options.get("show_panel", entry.data.get("show_panel")), True
    )

    if register_card:
        add_js = getattr(frontend, "add_extra_js_url", None)
        if add_js:
            add_js(hass, js_url)
        else:
            _LOGGER.warning(
                "This Home Assistant version cannot auto-register the Lovelace card; "
                "add %s as a module resource manually",
                js_url,
            )

    if not show_panel:
        return

    if _panel_exists(hass):
        frontend.async_remove_panel(hass, PANEL_URL)

    kwargs: dict[str, Any] = {
        "frontend_url_path": PANEL_URL,
        "webcomponent_name": PANEL_ELEMENT,
        "sidebar_title": str(
            entry.options.get("sidebar_title")
            or entry.data.get("sidebar_title")
            or DEFAULT_SIDEBAR_TITLE
        ),
        "sidebar_icon": PANEL_ICON,
        "module_url": js_url,
        "config": {"config_url": CONFIG_URL, "panel_mode": True},
        "embed_iframe": False,
        "trust_external": False,
        "require_admin": False,
    }

    # `handle_safe_area` was added in 2026.2. Only pass it when supported so the
    # same integration works on older HA releases.
    if "handle_safe_area" in signature(panel_custom.async_register_panel).parameters:
        kwargs["handle_safe_area"] = True

    try:
        await panel_custom.async_register_panel(hass, **kwargs)
    except ValueError as err:
        _LOGGER.error("Unable to register Zurlii Home panel: %s", err)


async def async_unregister_frontend(hass: HomeAssistant, entry: ConfigEntry) -> None:
    """Remove the sidebar panel and Lovelace resource."""
    if _panel_exists(hass):
        frontend.async_remove_panel(hass, PANEL_URL)

    js_url = _frontend_url()
    remove_js = getattr(frontend, "remove_extra_js_url", None)
    if remove_js:
        try:
            remove_js(hass, js_url)
        except (KeyError, ValueError):
            pass


class ZurliiConfigView(HomeAssistantView):
    """Authenticated endpoint for the sidebar panel configuration."""

    url = CONFIG_URL
    name = "api:zurlii_home:config"
    requires_auth = True

    def __init__(self, hass: HomeAssistant) -> None:
        """Store Home Assistant for entry lookup."""
        self.hass = hass

    async def get(self, request):
        """Return the frontend configuration."""
        data = self.hass.data.get(DOMAIN, {})
        entry: ConfigEntry | None = data.get("entry")
        if entry is None:
            return self.json_message("Zurlii Home is not configured", status_code=404)
        return self.json(data.get("config") or build_config(entry))
