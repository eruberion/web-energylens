# DEPLOYMENT.md — web-energylens

## Aktueller Zielbetrieb

> BLOCKIERT — Deployment-Ziel und Domain-Zuordnung sind noch nicht final entschieden.

Geplantes Ziel: `https://energylens.app/` (statische Landingpage).

Aktueller Release Candidate: `0.1.3`; `VERSION` ist die Quelle und die sichtbare Footer-Angabe der Auslieferungsspiegel.

Beim Audit am 13.07.2026 lieferte die Domain nicht den durch dieses Repository
kontrollierten Stand. Ein Upload ist deshalb bis zur bestaetigten DNS-/Hosting-
Zuordnung gesperrt; vorhandene fremde Inhalte duerfen nicht ueberschrieben werden.

Optionen laut Workspace-Doku:
- Hostinger klassisches Hosting (statische Seite, kein Node.js nötig)
- GitHub Pages als temporäre Alternative

## Tech Stack

- Statische HTML/CSS-Landingpage, kein Build-Step
- Kein Framework, keine Datenbank, keine serverseitige Logik
- Assets unter `site/assets/`
- SEO-/Plattformdateien im Web-Root: `robots.txt`, `sitemap.xml`, `apple-touch-icon.png`

## Lokale Prüfung

```bash
python3 scripts/check_site.py
python3 -m http.server 4173 --directory site
```

## Deploy-Regeln (gültig sobald Deployment-Ziel feststeht)

1. Domain-Inhaber, DNS-Ziel und Hosting-Verzeichnis schriftlich bestaetigen.
2. Erst danach Canonical, `og:url`, `og:image` und `twitter:image` auf die
   bestaetigte HTTPS-Origin setzen und mit
   `python3 scripts/check_site.py --production-origin https://energylens.app`
   prüfen. Vor der Domainfreigabe bleiben die Bildpfade absichtlich relativ.
3. `python3 scripts/check_site.py` und Desktop-/Mobil-Sichtpruefung bestehen lassen.
4. Snapshot/Backup des aktuell ausgelieferten Webroots erstellen.
5. Ausschliesslich den Inhalt von `site/` in einen eindeutig zugeordneten Webroot ausrollen.
6. Canonical-, OG-, Support- und zentrale Rechtslinks ueber HTTPS pruefen.
7. Bei Abweichung sofort auf den vorherigen Webroot-Snapshot zurueckrollen.

## Health-Check (gültig sobald live)

Erst nach bestaetigter Domain-Zuordnung ausfuehren:

```bash
# Beispiel nach Livegang:
curl -I https://energylens.app/
curl -I https://energylens.app/support.html
```

## Späterer Zielbetrieb

- Domain: `energylens.app`
- HTTPS über Provider-Managed-SSL
- Impressum und Datenschutz auf `flowhrzn.ai` zentral verlinkt
- Vor Launch: Rechtsseiten auf `flowhrzn.ai` müssen final und live sein
