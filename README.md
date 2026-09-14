# web-energylens

Statische Landingpage für [EnergyLens](https://energylens.app) — die Strompreis- und Verbrauchs-App für Tibber-Nutzer.

> **Aktuelle Quellversion:** 0.2.0 — sichtbar im Footer der Website; `VERSION` ist die kanonische Quelle. Ein Featurebranch ist kein Nachweis einer Live-Auslieferung.

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
PUBLIC-URLS.md        — verbindliche Privacy-/Support-/App-Store-URL-Matrix
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

Die wiederholbare Browser-QS liegt in `scripts/browser_qa.cjs`. Eine bereits
installierte Playwright-Laufzeit ueber `PLAYWRIGHT_MODULE` angeben, optional
`CHROMIUM_EXECUTABLE`, `QA_URL` und `QA_OUTPUT`. Das Skript installiert nichts
und blockiert alle Requests ausserhalb der lokalen Test-Origin.
Chromium und WebKit werden getrennt geprueft; fehlende Browser sind ein Blocker,
kein PASS. Bilder in `qa-evidence/*-browser/` bleiben lokal, bis ihre Herkunft
als synthetisch und veroeffentlichbar bestaetigt ist.

Das Teilen-Vorschaubild wird mit `node scripts/render_social_preview.cjs`
und derselben vorhandenen Playwright-Laufzeit reproduziert. Es verwendet nur
das lokale Marken-Icon und Text, keine App-/Kundendaten. Nach jedem Lauf das
Bild tatsaechlich ansehen; Herkunft und Abnahme in `docs/SOCIAL-PREVIEW.md`.

Umsetzung und Nachweisgrenzen: [Issue-22-Vertrag](docs/ISSUE-22-IMPLEMENTATION.md),
[Produktfakten](docs/PRODUCT-FACTS.md), [QS-Bericht](docs/QA-22.md).

## Regeln

- Ruhige, hochwertige Consumer-App-Landingpage — kein generisches Aussehen
- Keine falschen App-Store-, Preis- oder Feature-Behauptungen
- Datenschutz- und Tracking-Aussagen nur, wenn im Produkt gedeckt
- Statische Dateien direkt unter `site/` — kein Framework ohne bewusste Entscheidung
- Assets und Links nach Änderungen lokal prüfen

## GitHub-Repo

`eruberion/web-energylens`

## Verwandtes Projekt

App-Repo: [EnergyLens (iOS)](https://github.com/eruberion/EnergyLens) — SwiftUI, WidgetKit, Tibber GraphQL
