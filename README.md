# Zurlii Home

A full-screen, glass-morphism Home Assistant dashboard inspired by the Zurlii Home reference video, with the **Zurli Family** room renders already wired in.

The project is packaged as **one HACS custom integration** that ships and registers both:

- a sidebar panel (`/zurlii-home`) that opens the dashboard full-screen;
- the Lovelace card `type: custom:zurlii-home`, registered automatically so it is available in any dashboard.

No `ui-lovelace.yaml`, no manual resource entry, no copy/paste of a 2,000-line YAML dashboard.

![Zurlii Home desktop](screenshots/01-home-desktop.jpg)

---

## 1. What is included

| Feature | Implementation |
|---|---|
| Full-screen room backgrounds | 9 optimized renders bundled with the integration, overridable per room |
| Clock widget | Top-left live clock, Romanian/English date, time-of-day greeting |
| 10-module command deck | Acasă · Lumini · Jaluzele · Climă · Camere · Vremea · Energie · Media · Rutine · Sistem |
| Sliding glass pop-ups | Animated, draggable, focus-trapped bottom sheets with backdrop blur |
| Room templates | Curte, Garaj, Hol mare, Hol mic, Bucătărie, Dormitor Adi, Dormitor Adina, Dormitor Alexandra |
| Premium weather | Auto-detected `weather.*`, current conditions, 7 detail tiles, 5-day forecast, sun timeline |
| Energy hub | Live power, consumed energy, savings and mapped appliance sensors |
| Media hub | All TVs, channels and remotes in one global panel |
| Smart routines | Cinema, Noapte, Plecare, Dimineață generated from mapped devices |
| Live cameras | Every `camera.*` (Imou, Tapo, Sonerie) auto-plays live on Home via `ha-camera-stream`; snapshot fallback |
| Gate doorbell | Ring overlay with live camera, battery, recording mode, night vision and video switch |
| Find My family map | OpenStreetMap map with distinct people, battery, status and distance |
| K1C 3D printer | Auto-discovered Creality entities, progress, temperatures, controls and tuning |
| Plugs & power | Tuya plug card with on/off and live wattage |
| Music anywhere | Tablet or any `media_player`, URL, local file and presets |
| YouTube | Paste link, optional API search, embedded tablet player, playlist and cast to TV |
| Cameras only | The Camere dock contains filming cameras, never room/area cards |
| Full control | Every mapped entity with domain-specific buttons, attributes and HA link |
| Voice + text assistant | Romanian/English commands execute real HA actions; conversation fallback |
| Tablet / kiosk | Direct `/zurlii-home` URL, 100vh fallback and Chrome 80-compatible bundle |
| Raspberry Pi health | Power-status strip in Sistem & rețea |
| Pill controls | Yellow lights, blue covers, cyan climate, green energy/appliances |
| Active-only mode | Unavailable/unknown entities are hidden; exact duplicate IDs are removed |
| Empty-state skeletons | Rooms/pages without mapped entities still exist and show the final layout |
| Real entity mapping | Only the entities supplied in the brief are pre-mapped; weather is optional/auto-detected |
| Home status | Person, zone, sun timeline, WAN, external IP, tracker, notification channel, updates, Assist, shopping list |
| Lovelace + panel | Same LitElement bundle powers both surfaces |
| HACS install | HACS-ready `hacs.json`, installs from `main`, optional release workflow |

### The new command deck

Every module is visible in the bottom hub, not hidden behind a “more” menu:

- **Acasă** — live cameras, music bar, family map, rooms and quick routines.
- **Lumini / Jaluzele / Climă** — generated global pages.
- **Camere** — **only filming cameras**, live, with no room/area cards. Rooms are accessed from **Acasă → Încăperi → Vezi tot**.
- **Topbar tools** — music, voice assistant, full control and system, available from every main screen.
- **Vremea** — current weather, 7 detail tiles, 5-day forecast and the real sun timeline. It auto-detects the first `weather.*` entity; if none exists it shows a premium empty state instead of fake data.
- **Energie** — live power, total energy, savings and the supplied TV energy sensors.
- **Media** — both televisions, channels, remote, music and YouTube in one panel.
- **Rutine** — Cinema, Noapte, Plecare and Dimineață, generated from whatever is mapped.
- **Sistem** — sun, network, updates, Assist and shopping list.

On desktop the deck is one row of ten. On tablets and phones it becomes a symmetric 5×2 command pad, so all ten stay visible.

The device experiences are contextual instead of adding extra tiny dock icons:

- **Live cameras** are the first card row on **Acasă**, and the dedicated **Camere** menu contains only camera streams.
- **Sonerie poartă** opens with **Curte**; its `camera.soneria_inteligenta` is part of the live wall.
- **Find My family map** follows the cameras on **Acasă**.
- **K1C** opens with **Dormitor Adi**, where the printer physically lives.
- **Priza Televizor Adi** is a dedicated plug card with power toggle and wattage.

This keeps the command deck readable while every device still has a dedicated premium surface.

### Screens

| Home popup | Premium weather | Smart routines |
|---|---|---|
| ![Home popup](screenshots/02-home-sheet.jpg) | ![Weather](screenshots/06-weather.jpg) | ![Routines](screenshots/08-routines.jpg) |

| Energy hub | Media hub | Mobile command deck |
|---|---|---|
| ![Energy](screenshots/07-energy.jpg) | ![Media](screenshots/09-media.jpg) | ![Mobile](screenshots/10-mobile.jpg) |

| Room with devices | Empty room skeleton | Empty lights page |
|---|---|---|
| ![Dormitor Adi](screenshots/03-room-adi.jpg) | ![Empty room](screenshots/04-room-empty.jpg) | ![Lights empty](screenshots/12-lights-empty.jpg) |

| System & network | Mobile weather |
|---|---|
| ![System](screenshots/05-system.jpg) | ![Mobile weather](screenshots/11-weather-mobile.jpg) |

| Find My family map | Gate doorbell | K1C 3D printer |
|---|---|---|
| ![Family map](screenshots/02-home-sheet.jpg) | ![Doorbell](screenshots/13-doorbell.jpg) | ![K1C printer](screenshots/14-printer.jpg) |

| Live cameras on Home | Camera wall + rooms | Plug control |
|---|---|---|
| ![Live cameras](screenshots/35-home-live.jpg) | ![Camera wall](screenshots/36-cameras-only.jpg) | ![Plug](screenshots/25-plug.jpg) |

| Incoming doorbell ring | Doorbell options |
|---|---|
| ![Doorbell ring](screenshots/26-doorbell-ring.jpg) | ![Doorbell call](screenshots/34-doorbell-call.jpg) |

| Music anywhere | YouTube | Full control | Voice + text assistant |
|---|---|---|---|
| ![Music](screenshots/27-music.jpg) | ![YouTube](screenshots/37-youtube.jpg) | ![Full control](screenshots/28-controls.jpg) | ![Assistant](screenshots/30-assistant.jpg) |

| Tablet 1024 | Tablet Home sheet |
|---|---|
| ![Tablet](screenshots/32-tablet-home.jpg) | ![Tablet sheet](screenshots/33-tablet-home-sheet.jpg) |

| Mobile camera wall | Mobile family map | Mobile doorbell | Mobile printer |
|---|---|---|---|
| ![Mobile cameras](screenshots/20-mobile-cameras.jpg) | ![Mobile family](screenshots/15-mobile-family.jpg) | ![Mobile doorbell](screenshots/16-mobile-doorbell.jpg) | ![Mobile printer](screenshots/17-mobile-printer.jpg) |

---

## 2. Why an integration instead of only a card?

HACS installs a repository in **one** category. A repository cannot be both an “Integration” and a “Lovelace plugin” at the same time. This repository chooses the stronger path:

1. HACS installs the **integration**.
2. The integration serves the bundled JS from `/zurlii_home_static/zurlii-home.js`.
3. It registers the Lovelace card resource automatically.
4. It registers a full-screen sidebar panel automatically.
5. The panel fetches its configuration from an authenticated endpoint at `/api/zurlii_home/config`.

That is why the result feels like a 1-click dashboard instead of a card plus a manual resource.

> The same `dist/zurlii-home.js` can still be used manually as a standalone card (see §5). The integration is simply the zero-YAML route.

---

## 3. Entity inventory (strictly the supplied entities)

The default configuration uses **only** these entity IDs. No mock lights, covers, climate devices or sensors are invented.

### Dormitor Adi

| Group | Entity |
|---|---|
| Media | `media_player.camera_de_zi_televizor_adi` |
| Media | `media_player.dormitor_adi_televizor_adi` |
| Remote | `remote.dormitor_adi_televizor_adi` |
| Plug | `climate.dormitor_adi_imprimanta_priza` |
| Energy | `sensor.camera_de_zi_televizor_adi_putere` |
| Energy | `sensor.camera_de_zi_televizor_adi_energie` |
| Energy | `sensor.camera_de_zi_televizor_adi_power_energy` |
| Energy | `sensor.camera_de_zi_televizor_adi_energy_saved` |
| Energy | `sensor.camera_de_zi_televizor_adi_energy_difference` |
| TV channel | `sensor.camera_de_zi_televizor_adi_tv_channel` |
| TV channel | `sensor.camera_de_zi_televizor_adi_tv_channel_name` |

### Curte — gate doorbell

| Purpose | Entity |
|---|---|
| Camera | `camera.soneria_inteligenta` |
| Picture event | `event.soneria_inteligenta_doorbell_picture` |
| Recording mode | `select.soneria_inteligenta_mod_inregistrare` |
| Night vision | `select.soneria_inteligenta_vedere_nocturna` |
| Battery | `sensor.soneria_inteligenta_baterie` |
| Video recording | `switch.soneria_inteligenta_inregistrare_video` |

The event image is shown when the event entity exposes `entity_picture` or `picture`; otherwise the `camera.soneria_inteligenta` snapshot is used. Selects expose their real `options`; the switch uses `switch.toggle`.

### Ringing in Home Assistant

When the physical Tuya doorbell fires `event.soneria_inteligenta_doorbell_picture` with `event_type: ring`:

1. The integration sends a **high-priority notification** to `notify.tvb` with the Android/iOS doorbell sound payload.
2. If that notify target is unavailable, it falls back to a persistent notification.
3. If the dashboard is open, a full-screen incoming-call card appears with the camera snapshot and a Web Audio ding-dong chime.
4. The phone notification works even when the dashboard is closed.

The default target is `notify.tvb`. You can override it in the config entry options (`doorbell_notify`) or change `DEFAULT_DOORBELL_NOTIFY` in `const.py`.

### Live cameras

The supplied complete inventory contains **one** camera entity, `camera.soneria_inteligenta`. There are no `camera.*` entities for Imou or Tapo in that list, so they cannot be hardcoded without inventing IDs.

The live wall auto-discovers **every** `camera.*` entity. If Imou/Tapo are exposed by Home Assistant, they appear automatically on **Acasă** (first four) and in the dedicated **Camere** menu. Clicking a card opens the full-screen live camera sheet.

To pin an exact order/list:

```yaml
global:
  cameras:
    - camera.soneria_inteligenta
    # - camera.<imou_entity_id>
    # - camera.<tapo_entity_id>
```

Leaving `global.cameras` empty keeps auto-discovery active. The K1C printer camera is excluded from the generic wall because it already lives in the printer section.

> Important: a camera can only be displayed after Home Assistant exposes a `camera.*` entity for it. The supplied inventory has `camera.soneria_inteligenta`, but no Imou/Tapo camera entity. If the Imou/Tapo integrations are added later, they appear automatically; otherwise send their exact `camera.*` IDs and pin them under `global.cameras`.

### Plugs & power

The Tuya plug is mapped as a dedicated card, not as a thermostat:

```yaml
rooms:
  - id: dormitor_adi
    entities:
      plugs:
        - climate.dormitor_adi_imprimanta_priza
```

The card shows on/off and `current_power_w` / `power` / `wattage` when exposed.

### Music anywhere

Open the **music note** in the topbar or the player strip on **Acasă**.

- Output **Tabletă** plays inside the dashboard (local file picker or direct URL).
- Output **Dispozitive asociate** sends `media_player.play_media` to any selected `media_player.*` (TV, speaker).
- Controls: play/pause, stop, volume, presets.

```yaml
global:
  music:
    url: "https://example.com/radio.mp3"
    title: "Zurlii Music"
    volume: 0.8
    presets:
      - name: "Radio"
        url: "https://example.com/radio.mp3"
```

### YouTube

Open **Media → YouTube** (or the YouTube strip in Music).

- Paste any YouTube link (`watch`, `youtu.be`, `shorts`, `embed`).
- Video plays embedded on the tablet using the normal YouTube player.
- Optional **YouTube Data API key** enables direct search inside the dashboard (stored in the browser, not sent anywhere except Google).
- Save videos to a local playlist.
- **Trimite la TV** sends the YouTube URL to the selected `media_player`; if `media_extractor` is installed it is used first.

```yaml
global:
  youtube:
    api_key: ""      # optional; enables in-dashboard search
    region: "RO"
    max_results: 8
```

Without an API key, paste the link or use **Deschide pe YouTube**. The in-app search field explains this instead of showing fake results.

### Full control

The topbar **sliders** button opens **Control total**:

- search across every mapped entity;
- domain-specific buttons for lights, covers, climate, media, cameras, switches, fans, locks, selects, numbers, buttons, scenes, scripts, vacuums and updates;
- full attribute JSON and a direct **Mai multe în HA** link.

### Voice + text assistant

The topbar **microphone** opens the assistant. Type or press the mic.

Examples that execute directly:

- „Arată-mi camera Curte” → opens the live camera sheet.
- „Pornește muzica pe tabletă” / „Pornește muzica pe Televizor Adi”.
- „Oprește muzica”.
- „Aprinde lumina din hol” / „Stinge lumina”.
- „Deschide jaluzeaua” / „Închide jaluzeaua”.
- „Setează temperatura la 22”.
- „Deschide vremea” / „Deschide camerele”.

Anything not handled locally is sent to `conversation.home_assistant`, so your existing Assist intents/scripts still work. Voice uses the browser Web Speech API; text works everywhere. Speech output is controlled by:

```yaml
global:
  assistant:
    speak: true
```

### Tablet / kiosk

The dashboard is a `panel_custom` panel at the direct path:

```text
http://<HOME-ASSISTANT-IP>:8123/zurlii-home
```

On a tablet:

1. Open that URL directly (or add it to the home screen / Fully Kiosk).
2. If the sidebar is hidden, the direct URL still works.
3. If the panel is disabled: **Settings → Devices & Services → Zurlii Home → Configure → Create sidebar panel**.
4. After an update: HACS → Redownload, restart HA, then clear the tablet WebView cache / hard-refresh.
5. The bundle target is Chrome 80-compatible and the panel has a `100vh` fallback for WebViews without `dvh`.

If the tablet is completely blank while desktop works, open the browser console/WebView remote debugging and send the first JavaScript error. That is almost always an old WebView or a stale cached bundle, not the HA server.

Full tablet checklist: [docs/tablet.md](docs/tablet.md).

### Whole home / system

| Purpose | Entity |
|---|---|
| Person | `person.adihouse` |
| Zone | `zone.home` |
| Sun | `sun.sun` |
| Next dawn | `sensor.sun_next_dawn` |
| Next dusk | `sensor.sun_next_dusk` |
| Next midnight | `sensor.sun_next_midnight` |
| Next noon | `sensor.sun_next_noon` |
| Next rising | `sensor.sun_next_rising` |
| Next setting | `sensor.sun_next_setting` |
| WAN status | `binary_sensor.upnp_igd_wan_status` |
| External IP | `sensor.upnp_igd_external_ip` |
| Tracker | `device_tracker.tvb` |
| Notifications | `notify.tvb` |
| Conversation | `conversation.home_assistant` |
| Shopping list | `todo.shopping_list` |
| Raspberry Pi power | `binary_sensor.raspberry_pi_power_status` |
| Updates | `update.stack_in_card_update` |
| Updates | `update.samba_share_update` |
| Updates | `update.swipe_card_update` |
| Updates | `update.terminal_ssh_update` |

### Optional weather

No weather entity was included in the supplied inventory, so the dashboard does **not** hardcode one. It auto-detects the first `weather.*` entity present in Home Assistant. To pin a specific station:

```yaml
global:
  weather: weather.<entity_id>
```

If no weather entity exists, the Vremea module still opens and shows a premium empty state plus the real sun timeline.

### Family / Find My

The family map auto-detects `person.*` and `device_tracker.*` entities that have latitude/longitude. Each person gets a distinct color, battery (when exposed), status and distance from home. To pin only specific trackers:

```yaml
global:
  family:
    auto_discover: false
    trackers:
      - person.adrian_stefan
      - device_tracker.fonex30_yahoo_com
    map_zoom: 13
```

Apple iCloud trackers normally appear as `device_tracker.*` and will be picked up automatically. The map uses OpenStreetMap tiles; set `family.map_tiles: false` if you prefer the offline radar-grid fallback.

### K1C 3D printer

The printer entities were supplied as names, not entity IDs, so K1C uses **auto-discovery**:

- finds the device whose name/model contains `K1C`;
- maps its Creality entities by friendly name (`Print Status`, `Bed Temperature`, `Nozzle Target`, etc.);
- renders progress, camera/preview, temperatures, pause/resume/stop/home/reconnect, light, fans and tuning.

It is attached to **Dormitor Adi** because that is the printer’s area. If auto-discovery is ambiguous, map explicitly:

```yaml
rooms:
  - id: dormitor_adi
    printer:
      device_name: K1C
      auto_discover: false
      entities:
        print_status: sensor.k1c_print_status
        print_progress: sensor.k1c_print_progress
        nozzle_temperature: sensor.k1c_nozzle_temperature
        nozzle_target: number.k1c_nozzle_target
        pause_print: button.k1c_pause_print
```

Supported keys follow the entity list: `bed_target`, `bed_temperature`, `case_fan`, `chamber_temperature`, `current_object`, `current_print_preview`, `filament_status`, `flow_factor`, `flow_rate`, `home`, `light`, `max_bed_temperature`, `max_chamber_temperature`, `max_nozzle_temperature`, `model`, `model_fan`, `nozzle_target`, `nozzle_temperature`, `object_count`, `pause_print`, `print_control`, `print_job_time`, `print_progress`, `print_speed`, `print_status`, `print_time_left`, `printer_camera`, `real_time_flow`, `reconnect`, `resume_print`, `side_fan`, `speed_factor`, `stop_print`, `total_layers`, `used_material_length`, `working_layer`.

### Rooms without smart devices

Garaj, Hol mare, Hol mic, Bucătărie, Dormitor Adina and Dormitor Alexandra intentionally render **complete empty-state popups** with a ghost grid. Their data model is already present:

```yaml
rooms:
  - id: dormitor_adina
    entities:
      lights: []
      covers: []
      climate: []
      media: []
      remote: []
      appliances: []
      sensors: []
```

When devices are added later, only the relevant array changes. The popup, room card, background and responsive layout already exist.

---

## 4. Installation

### A. HACS (recommended)

No release/tag is required. This repository uses `hacs.json` without `zip_release`, so HACS installs directly from the default branch.

> Dacă ai instalat versiunea anterioară, șterge folderul vechi din `/config/custom_components/` și integrarea veche din **Devices & Services** înainte de instalarea Zurlii Home. Numele tehnic s-a schimbat în `zurlii_home`.

1. Create a **public** GitHub repository named `zurlii-home`.
2. Upload the project so this path exists exactly:
   ```
   custom_components/zurlii_home/manifest.json
   ```
   Do **not** upload a ZIP through the GitHub web UI and do not create an extra `zurlii-home` nesting level. The repo root must contain `custom_components`, `hacs.json`, `README.md`.
   Optionally update `documentation`, `issue_tracker` and `codeowners` in `manifest.json` if your GitHub username is not `AdiBUBBLE`.
3. In Home Assistant: **HACS → Integrations → ⋮ → Custom repositories**.
4. Add:
   ```
   https://github.com/<YOUR-GITHUB-USER>/zurlii-home
   ```
   Category: **Integration** → **Add**.
5. Open the new **Zurlii Home** repository in HACS and press **Download/Install**.
6. Restart Home Assistant.
7. **Settings → Devices & Services → Add Integration → search “Zurlii Home” → Submit.**
8. A **Zurlii Home** entry appears in the sidebar; the card is already registered for Lovelace.

> The integration is declared as `"integration_type": "service"` and has `"version": "2.1.0"`, `"domain": "zurlii_home"`, `config_flow: true`, plus `async_setup` and `async_setup_entry` in `__init__.py`. These are the fields Home Assistant uses to list it in **Add Integration**.

The exact GitHub/HACS click-through is also documented in [docs/github-hacs.md](docs/github-hacs.md). Background files can be changed later in **Configure**.

If **Zurlii Home** still does not appear:

1. Check the folder is `/config/custom_components/zurlii_home/manifest.json`, not `.../zurlii_home/zurlii_home/manifest.json`.
2. Open **Settings → System → Logs** and search for `zurlii_home` or `Error loading custom integration`.
3. Restart Home Assistant fully (not only reload Lovelace).
4. Hard-refresh the browser (`Ctrl+F5`).
5. Confirm `manifest.json` starts with `"domain": "zurlii_home"` and has a `"version"` key.

### B. Studio Code Server drag-and-drop (no GitHub required)

1. Open Studio Code Server.
2. Copy the entire `custom_components/zurlii_home` folder into:
   ```
   /config/custom_components/zurlii_home
   ```
   The final layout must be:
   ```
   /config/custom_components/zurlii_home/
     __init__.py
     config_flow.py
     const.py
     frontend.py
     manifest.json
     translations/
     frontend/
       zurlii-home.js
       backgrounds/
   ```
3. Restart Home Assistant.
4. **Settings → Devices & Services → Add Integration → Zurlii Home**.
5. Open **Zurlii Home** in the sidebar.

No Lovelace resource needs to be added manually. The integration registers it during setup.

If you use the supplied `zurlii_home.zip`, extract its **contents** directly into `/config/custom_components/zurlii_home/`. The ZIP is intentionally flat: `manifest.json` is at the ZIP root, not inside a second `zurlii_home/` folder.

### C. Card-only install (optional)

Use this if you already manage Lovelace resources yourself and do not want the sidebar panel.

1. Copy `dist/zurlii-home.js` to:
   ```
   /config/www/zurlii_home/zurlii-home.js
   ```
2. Copy the backgrounds to:
   ```
   /config/www/zurlii_home/backgrounds/
   ```
3. Add the resource:
   ```yaml
   url: /local/zurlii_home/zurlii-home.js?v=2.1.0
   type: module
   ```
4. Use the card:
   ```yaml
   type: custom:zurlii-home
   title: Zurli Family
   subtitle: AdiHouse · Smart Home
   greeting_name: Adi
   background_base: /local/zurlii_home/backgrounds
   ```
   For a full-screen view, put it in a **Panel (1 card)** dashboard.

---

## 5. Configuration

### 5.1 Card configuration

The card accepts partial overrides. Defaults live in [`src/config.js`](src/config.js); the integration adds branding and background paths on top.

```yaml
type: custom:zurlii-home
title: Zurli Family
subtitle: AdiHouse · Smart Home
greeting_name: Adi
language: ro
background_base: /local/backgrounds
backgrounds:
  home: casa.jpg
  dormitor_adina: dormitor_adina.jpg
clock:
  show_seconds: false
global:
  weather: weather.<entity_id>   # optional; otherwise first weather.* is used
  energy: []                    # optional extra energy sensors
rooms:
  - id: dormitor_adina
    entities:
      lights:
        - light.<entity_id>
      covers:
        - cover.<entity_id>
```

Important details:

- `rooms` merges **by `id`**. You never repeat the full room list.
- `entities` merges **by group**. If you send only `lights`, the existing media/remote/energy mappings are preserved.
- Send an explicit empty array (`lights: []`) to clear a group.
- `background` can be an absolute path (`/local/...`) or a URL; otherwise it is resolved against `background_base`.
- Room groups are auto-rendered: `lights`, `covers`, `climate`, `media`, `remote`, `appliances`, `sensors`.
- `global.weather` is optional. The module auto-detects the first `weather.*` entity if this is omitted.
- `global.energy` adds extra energy sensors; the `appliances` groups are always included.
- Routines are generated from mapped entities only. A routine with no matching devices stays visible but disabled under “Necesită mapare”.
- **Active-only mode** is on by default (`features.hide_unavailable: true`). Unavailable/unknown entities are hidden; buttons and event entities whose normal state is `unknown` remain usable.
- Exact duplicate entity IDs are removed at config normalization. The two TV media players are distinct entities and are labelled separately; remove one from `rooms[].entities.media` if your instance reports them as an actual duplicate.

### 5.2 Integration options (no YAML)

Open **Settings → Devices & Services → Zurlii Home → Configure**. You can change:

- house title, subtitle, sidebar label;
- Romanian/English UI;
- bundled vs `/local` backgrounds;
- one background filename per room;
- sidebar panel and automatic card registration;
- advanced JSON overrides.

The advanced JSON accepts only these top-level keys:

```json
{
  "rooms": [],
  "global": {},
  "labels": {},
  "remote_commands": {},
  "features": {},
  "clock": {},
  "greeting_name": "Adi"
}
```

Room entries are merged by id, exactly like the card configuration.

### 5.3 Background files

The nine bundled renders are already included:

```
custom_components/zurlii_home/frontend/backgrounds/
  casa.jpg          # home / default
  garaj.jpg
  curte.jpg
  hol_mare.jpg
  hol_mic.jpg
  bucatarie.jpg
  dormitor_adi.jpg
  dormitor_adina.jpg
  dormitor_alexandra.jpg
```

Two ways to use your own renders:

1. **Keep bundled mode:** overwrite the files in that folder (same filenames), then hard-refresh the browser.
2. **Use `/local/backgrounds`:** upload your files to `/config/www/backgrounds/`, disable bundled backgrounds in the integration options, set the base to `/local/backgrounds`, and keep/adjust the filenames.

The JS also accepts a direct `/local/...` value for a single room background.

---

## 6. Controls and services used

| UI | Service |
|---|---|
| Light power | `light.turn_on` / `light.turn_off` |
| Light brightness | `light.turn_on` with `brightness_pct` |
| Cover open/stop/close | `cover.open_cover`, `cover.stop_cover`, `cover.close_cover` |
| Cover position | `cover.set_cover_position` |
| Climate power | `climate.turn_on` / `climate.turn_off` |
| Climate target | `climate.set_temperature` |
| Climate mode | `climate.set_hvac_mode` |
| TV power | `media_player.toggle` |
| TV play/pause | `media_player.media_play_pause` |
| TV volume | `media_player.volume_set` |
| Remote power | `remote.toggle` |
| Remote buttons | `remote.send_command` |
| Weather forecast | `weather.get_forecasts` (`daily`, response optional) |
| Energy hub | Read-only from mapped `appliances` sensors |
| Routine Cinema | `light.turn_on` 15%, `cover.close_cover`, `climate.set_temperature` 22, `media_player.turn_on` |
| Routine Noapte / Plecare | `light.turn_off`, `cover.close_cover`, `climate.turn_off`, `media_player.turn_off` |
| Routine Dimineață | `light.turn_on` 30%, `cover.set_cover_position` 30, `climate.set_temperature` 22 |
| Doorbell selects | `select.select_option` |
| Doorbell video | `switch.toggle` |
| K1C print actions | `button.press` |
| K1C fans / light | `fan.toggle` / `light.toggle` (or `switch.toggle` if mapped as a switch) |
| K1C tuning | `number.set_value` |
| Family map | Read-only from `person.*` / `device_tracker.*` |
| Update install | `update.install` |
| Notify test | `notify.send_message` targeting `notify.tvb` |
| Assist | `conversation.process` with `agent_id: conversation.home_assistant` |
| Shopping list | `todo.get_items`, `todo.add_item`, `todo.update_item` |

### Remote command mapping

The D-pad uses `remote.send_command` with configurable command names. Defaults are in `src/config.js`:

```js
remote_commands: {
  up: "UP",
  down: "DOWN",
  left: "LEFT",
  right: "RIGHT",
  select: "CENTER",
  back: "BACK",
  home: "HOME",
  volume_up: "VOLUME_UP",
  volume_down: "VOLUME_DOWN"
}
```

If your TV integration uses different names, override them in the card config or advanced JSON. The two media players are deliberately both shown because both were supplied; label them differently via `labels` if needed.

---

## 7. Empty-state design

A room with zero entities is **not** a dead end:

- its room card is clickable and shows “Pregătit pentru mapare”;
- the popup opens with the correct header, icon, accent and background;
- a ghost grid previews the future layout;
- an expandable “Cum mapez?” panel shows a copyable YAML skeleton.

This is also true for the global **Lumini**, **Jaluzele**, **Climă**, **Energie** and **Media** popups. They are fully generated; they simply have no real entity cards yet.

**Vremea** is a special case: with no weather entity it shows a dedicated empty state, a layout skeleton and the real sun timeline. **Rutine** always render the four moments; routines without mapped actions are visibly disabled and marked “Necesită mapare”.

---

## 8. Architecture

```
zurlii-home/
├── custom_components/zurlii_home/   # HACS integration
│   ├── __init__.py                   # setup, reload, unload
│   ├── config_flow.py                # initial + options flow
│   ├── const.py
│   ├── frontend.py                   # static path, panel, card resource, API
│   ├── manifest.json
│   ├── translations/
│   └── frontend/
│       ├── zurlii-home.js           # built LitElement bundle
│       └── backgrounds/
├── src/                              # readable frontend source
│   ├── zurlii-home.js               # card + all views
│   ├── zurlii-panel.js              # sidebar panel wrapper
│   ├── config.js                     # rooms, entities, merge logic
│   ├── format.js
│   ├── i18n.js
│   ├── icons.js
│   ├── styles.js
│   └── components/clock.js
├── demo/                             # standalone browser demo with mock hass
├── dist/                             # card-only bundle
├── docs/
├── screenshots/
├── build.mjs
├── hacs.json
└── package.json
```

### Data flow

```
HACS integration
  ├─ serves /zurlii_home_static/*
  ├─ registers /api/zurlii_home/config (auth required)
  ├─ registers Lovelace resource
  └─ registers sidebar panel
        │
        ▼
<zurlii-home-panel> ── fetch config ──► <zurlii-home>
                                              │
                                              ├─ normalizeConfig()
                                              ├─ mergeRooms() by id
                                              ├─ render dock / sheet / cards
                                              └─ hass.callService()
```

The UI never reads `.storage`, never edits Lovelace storage, and never needs `configuration.yaml`.

---

## 9. Development

```bash
npm install
npm run build     # dist + integration bundle
npm run watch     # rebuild on change
npm run demo      # serve at http://127.0.0.1:8099/demo/
```

The demo uses a mock `hass` object with the exact supplied entity IDs, so the visual can be reviewed without a Home Assistant instance. It is not part of the integration.

Optional manual release (HACS installs from `main` and does not require this):

```bash
git tag v2.1.0
git push origin v2.1.0
```

The GitHub Action builds the bundle and publishes a `zurlii_home.zip` asset. The archive is a convenience artifact; `hacs.json` intentionally does not depend on it.

---

## 10. Troubleshooting

| Symptom | Fix |
|---|---|
| Sidebar entry missing | Restart HA after installing, then add the integration. Check **Settings → Devices & Services** for an error. |
| Background 404 | The integration serves bundled images at `/zurlii_home_static/backgrounds`; if you switched to `/local/backgrounds`, upload the files to `/config/www/backgrounds/`. |
| Card does not appear in Lovelace | The card resource is registered automatically unless “Register Lovelace card automatically” is off. Hard-refresh the browser after an update. |
| Remote buttons do nothing | Change `remote_commands` to the command names expected by your TV integration. |
| Assist does not answer | Check that `conversation.home_assistant` supports `conversation.process` and that the user has permission. |
| Shopping list fails | The `todo.get_items` service must be available; check that `todo.shopping_list` is not disabled. |
| Notify test fails | `notify.tvb` must support `notify.send_message` (or use an advanced override to target a modern notify entity). |
| Popup is offset on a tablet | Use the sidebar panel (full bleed) rather than a normal Lovelace section; the panel sets `handle_safe_area` automatically on newer HA releases. |
| Stale UI after update | The JS URL is versioned (`?v=2.1.0`); restart HA and hard-refresh. |

### Security notes

- The config endpoint requires an authenticated Home Assistant session.
- No secrets or tokens are sent to the browser; only entity IDs, labels and background paths.
- The integration does not create users, bypass permissions or call services beyond those listed above.
- Review any advanced JSON before saving; it can change labels and entity mappings, but cannot execute arbitrary code.

---

## 11. Phase 2 — automations

Four advanced scene/automation proposals are documented in [docs/automations.md](docs/automations.md). They are intentionally **not installed** yet; choose the ones you want and they can be wired into the component’s logic in the next iteration.

---

## 12. License

MIT. The bundled room renders belong to the project owner; replace them before redistributing publicly if they are private.
