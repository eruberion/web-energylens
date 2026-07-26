# DEPLOYMENT.md — web-energylens

## Aktueller Zielbetrieb

> BLOCKIERT — Domain ist erreichbar, aber der Live-Inhalt ist noch nicht
> repo-synchron ausgeliefert.

Ziel: `https://energylens.app/` (statische Landingpage).

Aktueller Release Candidate: `0.1.4`; `VERSION` ist die Quelle und die sichtbare Footer-Angabe der Auslieferungsspiegel.

Beim Audit am 26.07.2026 loesten `energylens.app` und `www.energylens.app`
per HTTPS auf, der Live-HTML-Stand war aber weiterhin nicht der durch dieses
Repository kontrollierte Stand. Ein Upload bleibt bis zur bestaetigten
Webroot-/Hosting-Zuordnung gesperrt; vorhandene fremde Inhalte duerfen nicht
unkontrolliert ueberschrieben werden.

Optionen laut Workspace-Doku:
- Hostinger klassisches Hosting (statische Seite, kein Node.js nötig)
- GitHub Pages als temporäre Alternative

## Source of Truth

- GitHub-Repo: `eruberion/web-energylens`
- Branch: `main`
- Publish-Verzeichnis: `site/`
- Build-Step: keiner; es werden ausschliesslich statische Dateien ausgeliefert.
- Deployment-Inhalt: nur Dateien unter `site/`, keine Repo-Metadaten,
  keine Doku-Quellen, keine Zugangsdaten.
- Verantwortlicher Domain-/DNS-Entscheid: Diego; OpenClaw bereitet nur den
  geprueften statischen Stand vor.

## Tech Stack

- Statische HTML/CSS-Landingpage, kein Build-Step
- Kein Framework, keine Datenbank, keine serverseitige Logik
- Assets unter `site/assets/`
- SEO-/Plattformdateien im Web-Root: `robots.txt`, `sitemap.xml`, `apple-touch-icon.png`

## Lokale Prüfung

```bash
python3 scripts/check_site.py
python3 scripts/check_site.py --production-origin https://energylens.app
python3 -m http.server 4173 --directory site
```

Der zweite Checker ist das Produktions-Metadaten-Gate. Er muss gruene
Canonical-, `og:url`-, Open-Graph- und Twitter-URLs fuer `energylens.app`
erzwingen, bevor die Seite livegestellt oder in App Store Connect hinterlegt wird.

## Deploy-Regeln (gültig sobald Deployment-Ziel feststeht)

1. Domain-Inhaber, DNS-Ziel und Hosting-Verzeichnis schriftlich bestaetigen.
2. A-/AAAA-/CNAME-Ziel, HTTPS-Erzwingung, Zertifikatsaussteller und
   Cache-/CDN-Verhalten dokumentieren.
3. Canonical, `og:url`, `og:image` und `twitter:image` muessen auf die
   bestaetigte HTTPS-Origin zeigen und mit
   `python3 scripts/check_site.py --production-origin https://energylens.app`
   geprueft werden.
4. `python3 scripts/check_site.py`, Desktop- und Mobil-Sichtpruefung bestehen lassen.
5. Preflight auf verbotene Secrets/Repo-Artefakte:
   `find site -maxdepth 3 -type f | sort` und keine `.git`, `.env`,
   Tokens, Backups oder privaten Daten im Webroot.
6. Snapshot/Backup des aktuell ausgelieferten Webroots erstellen.
7. Ausschliesslich den Inhalt von `site/` in einen eindeutig zugeordneten Webroot ausrollen.
8. Provider-/CDN-Cache invalidieren oder TTL abwarten; danach Live-Smoke ausfuehren.
9. Canonical-, OG-, Support-, Datenschutz- und zentrale Rechtslinks ueber HTTPS pruefen.
10. Bei Abweichung sofort auf den vorherigen Webroot-Snapshot zurueckrollen.

## Health-Check (gültig sobald live)

Erst nach bestaetigter Domain-Zuordnung ausfuehren:

```bash
# Beispiel nach Livegang:
curl -I https://energylens.app/
curl -I https://energylens.app/support.html
curl -I https://flowhrzn.ai/legal/datenschutz.html
curl -I https://flowhrzn.ai/legal/impressum.html
```

Browser-Smoke:
- Startseite: Titel, Hero, Coming-soon-Status, Supportlink und Footer-Version pruefen.
- Support: Mailto-Link, Datenschutzlink und Hinweis gegen Token-/Passwortversand pruefen.
- Mobil: kein horizontaler Overflow, CTA nicht als aktiver App-Store-Download.
- Social: `og:image`/`twitter:image` nach Produktionsfreigabe absolut und erreichbar.

## Späterer Zielbetrieb

- Domain: `energylens.app`
- HTTPS über Provider-Managed-SSL
- Impressum und Datenschutz auf `flowhrzn.ai` zentral verlinkt
- Vor Launch: Rechtsseiten auf `flowhrzn.ai` müssen final und live sein

## Rollback

Rollback ist Webroot-basiert:

1. Vor jedem Upload den bestehenden Webroot als datierten Snapshot sichern.
2. Bei falscher Domainzuordnung, kaputtem TLS, falschen Rechtslinks oder
   fremden Inhalten sofort Snapshot zurueckspielen.
3. Danach Cache invalidieren und Health-Check erneut laufen lassen.
4. Fehlerursache in `CHANGELOG.md` oder einem Issue dokumentieren, bevor ein
   zweiter Upload erfolgt.
