# web-energylens

Statische Landingpage für [EnergyLens](https://energylens.app) — die Strompreis- und Verbrauchs-App für Tibber-Nutzer.

> **Aktuelle Version:** 0.1.3 — sichtbar im Footer der Website; `VERSION` ist die kanonische Quelle.

## Live-URL

Zielbetrieb: `https://energylens.app/` (geplant)

## Struktur

```
site/
  index.html          — Landingpage (reines HTML, kein Framework)
  support.html        — stabile Support- und Kontaktadresse
  robots.txt          — Crawler-Regeln mit Sitemap-Verweis
  sitemap.xml         — Sitemap fuer energylens.app
  apple-touch-icon.png — iOS-Homescreen-Icon
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

# deterministische Links-, Metadaten-, Asset- und Claim-Pruefung
python3 scripts/check_site.py

# danach lokal per HTTP im Browser pruefen
python3 -m http.server 4173 --directory site
```

Nach Änderungen: Checker ausführen und Desktop sowie Mobilansicht per HTTP im Browser prüfen.

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
