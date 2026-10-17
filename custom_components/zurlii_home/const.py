"""Constants for the Zurlii Home UI integration."""

from __future__ import annotations

DOMAIN = "zurlii_home"
NAME = "Zurlii Home"
VERSION = "2.1.0"
DEFAULT_DOORBELL_EVENT = "event.soneria_inteligenta_doorbell_picture"
DEFAULT_DOORBELL_NOTIFY = "notify.tvb"

STATIC_URL = "/zurlii_home_static"
FRONTEND_FILE = "zurlii-home.js"
CONFIG_URL = "/api/zurlii_home/config"

PANEL_URL = "zurlii-home"
PANEL_ELEMENT = "zurlii-home-panel"
PANEL_ICON = "mdi:home-lightning-bolt-outline"

DEFAULT_TITLE = "Zurli Family"
DEFAULT_SUBTITLE = "AdiHouse · Smart Home"
DEFAULT_SIDEBAR_TITLE = "Zurlii Home"
DEFAULT_LANGUAGE = "ro"
DEFAULT_LOCAL_BACKGROUND_BASE = "/local/backgrounds"
DEFAULT_GREETING_NAME = "Adi"

DEFAULT_BACKGROUNDS: dict[str, str] = {
    "home": "casa.jpg",
    "garaj": "garaj.jpg",
    "curte": "curte.jpg",
    "hol_mare": "hol_mare.jpg",
    "hol_mic": "hol_mic.jpg",
    "bucatarie": "bucatarie.jpg",
    "dormitor_adi": "dormitor_adi.jpg",
    "dormitor_adina": "dormitor_adina.jpg",
    "dormitor_alexandra": "dormitor_alexandra.jpg",
}

ROOM_KEYS: tuple[str, ...] = tuple(key for key in DEFAULT_BACKGROUNDS if key != "home")

OVERRIDE_KEYS = {
    "rooms",
    "global",
    "labels",
    "remote_commands",
    "features",
    "clock",
    "greeting_name",
}
