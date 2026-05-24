# DEPLOYMENT.md — web-energylens

## Aktueller Zielbetrieb

> TBD — Deployment-Ziel noch nicht final entschieden.

Geplantes Ziel: `https://energylens.app/` (statische Landingpage).

Optionen laut Workspace-Doku:
- Hostinger klassisches Hosting (statische Seite, kein Node.js nötig)
- GitHub Pages als temporäre Alternative

## Tech Stack

- Statische HTML/CSS-Landingpage, kein Build-Step
- Kein Framework, keine Datenbank, keine serverseitige Logik
- Assets unter `site/assets/`

## Lokale Prüfung

```bash
# Dateien prüfen
find site -maxdepth 3 -type f | sort

# Seite im Browser öffnen
open site/index.html
```

## Deploy-Regeln (gültig sobald Deployment-Ziel feststeht)

1. Vor Deploy: lokale Sichtprüfung im Browser.
2. Sicherstellen, dass keine falschen App-Store-, Preis- oder Feature-Angaben enthalten sind.
3. GitHub bleibt Source of Truth.

## Health-Check (gültig sobald live)

> TBD — wird nach Deploy-Entscheidung ergänzt.

```bash
# Beispiel nach Livegang:
curl -I https://energylens.app/
```

## Späterer Zielbetrieb

- Domain: `energylens.app`
- HTTPS über Provider-Managed-SSL
- Impressum und Datenschutz auf `flowhrzn.ai` zentral verlinkt
- Vor Launch: Rechtsseiten auf `flowhrzn.ai` müssen final und live sein
