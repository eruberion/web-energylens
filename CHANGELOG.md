# CHANGELOG — web-energylens

Alle sichtbaren, funktionalen oder relevanten Änderungen an der EnergyLens-Landingpage.

---

## [Unreleased]

## [0.1.5] - 2026-07-26

- FAQ- und Kontaktbereich auf der Startseite ergänzt: Tibber-Vertrag, Access
  Token, Pulse-Abhängigkeit, iOS-Version, Premium-Richtung, Datenspeicherung,
  Android-Status und sichere Kontaktaufnahme.
- iOS-Mindestversionsclaim bewusst entschärft, bis der App-Store-Build final
  gegen die EnergyLens-iOS-Konfiguration abgeglichen ist.
- Produktions-Metadaten der Startseite für `https://energylens.app/`
  vervollständigt: Canonical-URL, `og:url` sowie absolute Open-Graph- und
  Twitter-Previewbilder.
- Site-Checker an die bestätigte Produktions-Origin angepasst, damit lokale und
  produktionsnahe Metadatenprüfungen dieselbe Canonical-Quelle nutzen.
- Deployment- und Public-URL-Doku aktualisiert: Domain ist erreichbar, der
  Live-Inhalt bleibt aber bis zum repo-synchronen Webroot-Abgleich blockiert.

## [0.1.4] - 2026-07-18

- Deployment-Runbook konkretisiert: Source-of-truth-Branch, Publish-Verzeichnis,
  DNS-/TLS-Verantwortung, Cache-Invalidierung, Preflight, Live-Smoke und
  Rollback fuer die statische `energylens.app`-Landingpage dokumentiert.
- Verbindliche Public-URL-Matrix fuer App Store Connect vorbereitet:
  Marketing-, Support- und Datenschutz-URL inklusive Status, Scope und
  fachkundiger Rechtsfreigabegrenze.
- Site-Checker gegen Drift bei Support-/Privacy-URL, verbotenen Secret-Mustern,
  Coming-soon-App-Store-Status und URL-Matrix gehaertet.
- Supportseite um Scope- und Datenschutz-Hinweis erweitert; sichtbare
  Website-Version auf `0.1.4` synchronisiert.

## [0.1.3] - 2026-07-13

- Website-Version im Footer von Start- und Supportseite sichtbar gemacht und den Site-Checker gegen Drift zur `VERSION`-Quelle abgesichert.
- App-Store-CTAs bis zum verifizierten Release durch einen nicht interaktiven
  Coming-soon-Status ersetzt und den Launchstatus in Navigation und Hero
  eindeutig gemacht.
- Nicht belegte Referral-, Echtzeit- und lokale-Exklusivitaets-Claims entfernt
  beziehungsweise auf stündliche Tibber-Preisdaten und geschützten
  Gerätespeicher präzisiert.
- Rechtslinks auf `flowhrzn.ai` zentralisiert und eine stabile, indexierbare
  Supportseite mit sicherem Kontakt-Hinweis ergänzt.
- Open-Graph-/Twitter-Metadaten und ein geprüftes Social Preview im Format
  1200 × 630 hinzugefügt.
- Absolute Canonical-/Social-URLs bleiben bis zur bestätigten Domainzuordnung
  absichtlich deaktiviert; der Checker besitzt dafür ein striktes Produktions-Origin-Gate.
- Deterministischen Site-Checker und GitHub-Actions-Gate für lokale Links,
  Anker, Pflichtdateien, Metadaten, Preview-Dimension und Launch-Claims ergänzt.
- Deployment bleibt wegen ungeklärter Domain-/Hosting-Zuordnung gesperrt; das
  Runbook dokumentiert Preflight, Backup und Rollback.

- SEO-Basics ergänzt: `robots.txt`, `sitemap.xml`, Apple-Touch-Icon und Head-Link für iOS-Homescreen-Shortcuts.
- CTA-Text im Download-Bereich neutralisiert: kein irreführender Kostenlos-Eindruck, Hinweis auf optionale In-App-Käufe ergänzt.
- `PRODUCT.md` als fachlicher Produkt-Steckbrief für die EnergyLens-Landingpage mit Scope, Grenzen, Erfolgskriterien und Claim-Grenzen ergänzt.
- `VERSION` als Repo-Level-SemVer-Quelle eingefuehrt.
- Landingpage entlang `DESIGN.md` sichtbar verfeinert: Hero-Headline, App-Screenshot-Inszenierung, Energie-/Preis-Signature, Preview-Texte und Tibber-Trust-Sektion.
- Widget-Claims vereinheitlicht: Homescreen-Widgets werden konsistent als geplant/Roadmap kommuniziert.

---

## 2026-05-24 — Hygiene-Fix: CHANGELOG.md, DEPLOYMENT.md, FALLBACK.md angelegt

- `CHANGELOG.md` initial erstellt.
- `DEPLOYMENT.md` mit Skeleton und TBD-Deployment-Ziel erstellt.
- `FALLBACK.md` mit Recovery-Notizen für statische Site erstellt.

## 2026-05-22 — README.md erstellt

- `README.md` initial angelegt (Hygiene-Fix, project-hygiene-check).
