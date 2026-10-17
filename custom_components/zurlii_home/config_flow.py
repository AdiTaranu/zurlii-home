"""Config and options flow for Zurlii Home."""

from __future__ import annotations

import json
from typing import Any

import voluptuous as vol
from homeassistant import config_entries
from homeassistant.core import callback
from homeassistant.helpers import selector

from .const import (
    DEFAULT_BACKGROUNDS,
    DEFAULT_DOORBELL_EVENT,
    DEFAULT_DOORBELL_NOTIFY,
    DEFAULT_LANGUAGE,
    DEFAULT_LOCAL_BACKGROUND_BASE,
    DEFAULT_SIDEBAR_TITLE,
    DEFAULT_SUBTITLE,
    DEFAULT_TITLE,
    DOMAIN,
    ROOM_KEYS,
)
from .frontend import _sanitize_overrides

LANGUAGES = ["ro", "en"]


def _defaults(entry: config_entries.ConfigEntry | None = None) -> dict[str, Any]:
    """Return merged defaults for the form."""
    data = {**entry.data, **entry.options} if entry else {}
    return {
        "title": data.get("title", DEFAULT_TITLE),
        "subtitle": data.get("subtitle", DEFAULT_SUBTITLE),
        "sidebar_title": data.get("sidebar_title", DEFAULT_SIDEBAR_TITLE),
        "language": data.get("language", DEFAULT_LANGUAGE),
        "use_bundled_backgrounds": bool(data.get("use_bundled_backgrounds", True)),
        "local_background_base": data.get(
            "local_background_base", DEFAULT_LOCAL_BACKGROUND_BASE
        ),
        "show_panel": bool(data.get("show_panel", True)),
        "register_card": bool(data.get("register_card", True)),
    }


def _background_defaults(entry: config_entries.ConfigEntry | None) -> dict[str, str]:
    data = {**entry.data, **entry.options} if entry else {}
    return {
        key: str(data.get(f"bg_{key}") or filename)
        for key, filename in DEFAULT_BACKGROUNDS.items()
    }


def _base_schema(defaults: dict[str, Any]) -> dict[Any, Any]:
    schema: dict[Any, Any] = {
        vol.Required("title", default=defaults["title"]): str,
        vol.Required("subtitle", default=defaults["subtitle"]): str,
        vol.Required("sidebar_title", default=defaults["sidebar_title"]): str,
        vol.Required("language", default=defaults["language"]): vol.In(LANGUAGES),
        vol.Required(
            "use_bundled_backgrounds",
            default=defaults["use_bundled_backgrounds"],
        ): bool,
        vol.Required(
            "local_background_base",
            default=defaults["local_background_base"],
        ): str,
        vol.Required("show_panel", default=defaults["show_panel"]): bool,
        vol.Required("register_card", default=defaults["register_card"]): bool,
    }
    return schema


def _validate_settings(data: dict[str, Any]) -> str | None:
    """Validate common fields and return an error key on failure."""
    if not str(data.get("title", "")).strip():
        return "invalid_title"
    if not data.get("use_bundled_backgrounds"):
        base = str(data.get("local_background_base", "")).strip()
        if not base.startswith(("/", "http://", "https://")):
            return "invalid_background_base"
    return None


class ZurliiHomeConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle the initial setup."""

    VERSION = 1

    async def async_step_user(self, user_input: dict[str, Any] | None = None):
        """Ask for the base configuration."""
        errors: dict[str, str] = {}
        defaults = _defaults()

        if user_input is not None:
            error = _validate_settings(user_input)
            if error:
                errors["base"] = error
            else:
                await self.async_set_unique_id(DOMAIN)
                self._abort_if_unique_id_configured()
                return self.async_create_entry(
                    title=user_input["title"],
                    data=user_input,
                )

        return self.async_show_form(
            step_id="user",
            data_schema=vol.Schema(_base_schema(defaults)),
            errors=errors,
        )

    @staticmethod
    @callback
    def async_get_options_flow(
        config_entry: config_entries.ConfigEntry,
    ) -> ZurliiHomeOptionsFlow:
        """Return the options flow."""
        return ZurliiHomeOptionsFlow()


class ZurliiHomeOptionsFlow(config_entries.OptionsFlow):
    """Edit backgrounds, panel behaviour and advanced mappings without YAML."""

    async def async_step_init(self, user_input: dict[str, Any] | None = None):
        """Manage integration options."""
        errors: dict[str, str] = {}
        current = {**self.config_entry.data, **self.config_entry.options}
        defaults = _defaults(self.config_entry)
        backgrounds = _background_defaults(self.config_entry)

        if user_input is not None:
            error = _validate_settings(user_input)
            if error:
                errors["base"] = error
            raw = user_input.get("room_overrides_json", "{}")
            try:
                parsed = json.loads(raw or "{}")
                _sanitize_overrides(parsed)
            except json.JSONDecodeError:
                errors["base"] = "invalid_json"
            except vol.Invalid:
                errors["base"] = "invalid_overrides"
            else:
                if not errors:
                    data = dict(user_input)
                    data.pop("room_overrides_json", None)
                    data["room_overrides"] = parsed
                    return self.async_create_entry(title="", data=data)

        existing_overrides = current.get("room_overrides") or {}
        schema: dict[Any, Any] = {
            **_base_schema(defaults),
            vol.Optional(
                "doorbell_event",
                default=current.get("doorbell_event", DEFAULT_DOORBELL_EVENT),
            ): str,
            vol.Optional(
                "doorbell_notify",
                default=current.get("doorbell_notify", DEFAULT_DOORBELL_NOTIFY),
            ): str,
            vol.Optional("bg_home", default=backgrounds["home"]): str,
        }
        for key in ROOM_KEYS:
            schema[vol.Optional(f"bg_{key}", default=backgrounds[key])] = str

        schema[
            vol.Optional(
                "room_overrides_json",
                default=json.dumps(existing_overrides, ensure_ascii=False, indent=2),
            )
        ] = selector.TextSelector(
            selector.TextSelectorConfig(
                multiline=True,
                type=selector.TextSelectorType.TEXT,
            )
        )

        return self.async_show_form(
            step_id="init",
            data_schema=vol.Schema(schema),
            errors=errors,
        )
