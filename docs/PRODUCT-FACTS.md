# Website-Faktenmatrix · Bildabschluss 23.09.2026

Historischer nativer Quellstand des Claim-Abgleichs: `eruberion/EnergyLens` main
`ad7a4bfbe1c86b0b69e4cfb23c4deb249b4d9d6b` (1.9.12, Build 18).
Implementiert ist nicht gleich veroeffentlicht. GitHub-Releases waren bei der
Pruefung leer; App-Store-Verfuegbarkeit ist damit weder bestaetigt noch widerlegt.
Massgeblich fuer den weiterhin konservativen Prelaunch-Zustand sind die offenen
Freigaben in `docs/APP_STORE_LAUNCH_CHECKLIST.md:16` und
`docs/APP_STORE_LISTING_DRAFT.md:119` des nativen Repos.

| Thema | Implementierungsbeleg im nativen Repo | Zulaessige Aussage / Grenze |
|---|---|---|
| Preise | `ios/Tibber Companion/TibberAPIClient.swift:225` | Viertelstundenaufloesung wird angefragt; tatsaechliche Intervalle markt-/home-/datenabhaengig. Keine pauschale stuendliche Aktualisierungszusage. |
| Widgets | `ios/EnergyLensWidget/EnergyLensWidget.swift:222` | Implementiert im Entwicklungsstand; oeffentlicher Umfang erst mit Release bestaetigt. Native #99-Befunde weiterhin offen. |
| Token | `ios/Tibber Companion/TibberTokenStore.swift:59` | iOS-Keychain, ohne absolute Sicherheitsgarantie oder Zusage ueber alle Legacywerte. |
| Tibber | `ios/Tibber Companion/TibberAPIClient.swift:49` und `:145` | Direkter Abruf bei Tibber, Token fuer Verbindung; unabhaengige App. |
| iCloud | `SettingsView.swift:458`, `ConsumptionStore.swift:71`, jeweils in `ios/Tibber Companion/` | Default lokal; neuer Opt-in derzeit deaktiviert. Alte gespeicherte Opt-ins koennen weiterhin wirken. PR #90 ist offen, keine abgeschlossene Migration behaupten. |
| Wetter | `DashboardViewModel.swift:341`, `WeatherService.swift:317`, jeweils in `ios/Tibber Companion/` | Aus Tibber-Stadt abgeleitete Koordinaten an Open-Meteo, kein Tibber-Token. Nicht ueberall verfuegbar; kein GPS-Claim. |
| Free/Premium | `PRODUCT.md:33`, `docs/PREMIUM_ROADMAP.md:34` | Geplanter Umfang, keine verifizierten Preise/Trials/Kaufbarkeit. Standard-Widgets nicht als separates Premiumprodukt darstellen. |
| Pulse | `TibberAPIClient.swift:575`, `DashboardView.swift:24`, jeweils in `ios/Tibber Companion/` | Livewerte brauchen passende Pulse-Daten; Historie und Schaetzung davon trennen. |
| Prognose | `PRODUCT.md:18` | Orientierung, keine garantierte Ersparnis, Rechnung oder automatische Geraetesteuerung. |
| Website | `site/index.html`, `site/assets/css/styles.css` | Statische lokale Assets/Fonts, keine Tracker im Seiten-Code, kein Tibber-Login. Kein Audit unbekannter Hosting-Logs/Live-Injections. |

## Aktuelle Bildherkunft

Alle vier Website-Produktbilder sind am 23.09.2026 ersetzt: unveraenderte,
befuellte synthetische Aufnahmen aus App 1.10.0/19, sauberer Quellcommit
`1c1c8dc31dcade2a8b991cd590c96d6a96f0619a`. Dashboard hell/dunkel, Beste Zeiten
und Analyse (synthetischer Premium-Zustand) sind tatsaechlich angesehen.
Keine Kunden-/Live-/Netzwerkdaten. Exakte Zuordnung, Fixture-/Binary-/Bildhashes
und Grenzen stehen in `PRODUCT-IMAGES.md`; Website-Darstellung in `QA-22.md`.
Der historische Claim-Abgleich oben wird durch einen Bildwechsel nicht zu
einer erneuten Gesamtabnahme des nativen Produkts. Widget-/VoiceOver- und
Releasegates bleiben getrennt beim nativen Abschluss.

## Historische Bildherkunft vor dem Ersatz

Die frueher vorhandenen Bilder wurden **nicht** als synthetische Fixture-Aufnahmen
ausgegeben. Website-Commit `80556d0422f03660dfcbebd08ef331430a7406f2` beschreibt
reale Tibber-Daten mit verwischtem Ort. Fuer das Dashboard aus `730a077` fehlt
ein vollstaendiger Herkunftsnachweis; die gepruefte Aufnahme zeigt die noch
nicht verbundene App. Der native Demo-Token-Satz aus April ist ebenfalls kein
rein synthetischer Fixture-Satz und hat andere Hashes.

Diese Bilder wurden nun vollstaendig aus den vier Produktdateien ersetzt,
nicht nachtraeglich als synthetisch umetikettiert. Historische QA-Bilder mit
den alten Assets bleiben kein Veroeffentlichungsnachweis des neuen Stands.
Das Social-Preview-Bild wurde am 14.09.2026 unabhaengig davon ersetzt:
Markenkarte aus vorhandenem App-Icon, Nutzen und Entwicklungsstatus, ohne
App-Aufnahme oder Kundendaten. Herkunft, Input-/Output-Hashes und Sichtabnahme
stehen in `docs/SOCIAL-PREVIEW.md` und dessen QA-Bericht.

## Nicht vorweggenommene Freigaben

- Der Website-Abschluss behauptet weder die Integration von PR #90 noch eine
  vollstaendige native #99-Abnahme. Der neue Bild-Quellstand ist oben exakt
  benannt; Merge-/Releasezustand wird getrennt im nativen Repo nachgewiesen.
- Kein App-Store-Release, TestFlight-Zugang, Datum oder konkreter Preis zugesagt.
- Zentrale Rechtstexte bleiben fachkundig freigabepflichtig. Der Quellenabgleich
  der Website ist keine juristische Vollpruefung.
- Hosting/Domain #11 und Consent #3 bleiben eigene Vorgänge. Kein Deployment.
