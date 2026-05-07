# web-energylens Agent Rules

## Projektkontext

Statische Landingpage fuer EnergyLens unter `energylens.app`.

## Grundregeln

- Ruhige, hochwertige Consumer-App-Landingpage; Design nicht generisch wirken lassen.
- Keine falschen App-Store-, Preis- oder Feature-Behauptungen einbauen.
- Datenschutz- und Tracking-Aussagen nur verwenden, wenn sie im Produkt/Doku gedeckt sind.
- Statische Dateien direkt unter `site/` pflegen; kein Framework einfuehren, ohne es bewusst zu entscheiden.
- Assets und Links nach Aenderungen lokal pruefen.

## Wichtige Pfade

- `site/index.html` — Landingpage
- `site/assets/` — Styles, Bilder und statische Assets
- `DESIGN.md` — Design-/Richtungsnotizen

## Tests / Checks

```bash
find site -maxdepth 3 -type f | sort
```

Bei UI-Aenderungen: Seite im Browser pruefen oder Screenshot erstellen.
