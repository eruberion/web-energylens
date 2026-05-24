# web-energylens

Statische Landingpage für [EnergyLens](https://energylens.app) — die Strompreis- und Verbrauchs-App für Tibber-Nutzer.

## Live-URL

Zielbetrieb: `https://energylens.app/` (geplant)

## Struktur

```
site/
  index.html          — Landingpage (reines HTML, kein Framework)
  assets/
    css/styles.css    — Styles
    images/           — App-Icons, Screenshots, Grafiken
DESIGN.md             — Design-Richtlinien und visuelle Direktionen
AGENTS.md / CLAUDE.md — Agentenregeln für KI-gestützte Arbeit
```

## Lokal testen

```bash
# Dateien prüfen
find site -maxdepth 3 -type f | sort

# Seite im Browser öffnen
open site/index.html
```

Nach Änderungen: Seite im Browser prüfen oder Screenshot erstellen.

## Regeln

- Ruhige, hochwertige Consumer-App-Landingpage — kein generisches Aussehen
- Keine falschen App-Store-, Preis- oder Feature-Behauptungen
- Datenschutz- und Tracking-Aussagen nur, wenn im Produkt gedeckt
- Statische Dateien direkt unter `site/` — kein Framework ohne bewusste Entscheidung
- Assets und Links nach Änderungen lokal prüfen

## GitHub-Repo

`eruberion/web-energylens`

## Verwandtes Projekt

App-Repo: [EnergyLens (iOS)](../../../Entwicklung/Apps/EnergyLens) — SwiftUI, WidgetKit, Tibber GraphQL
