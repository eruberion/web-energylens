# Issue 22 · Umsetzungs- und Abnahmevertrag

Stand: 2026-09-14. Basis `e3bcadbbb5d6bce82e02ba146fd3341007565717`.
Umsetzung beauftragt; kein Merge-/Deploymentauftrag. Native Aenderungen bleiben
in EnergyLens #99. Website-Arbeit ist separat per Work-Claim und RepoGuard reserviert.

## Visuelle Zielinvarianten vor Umsetzung

1. **Mobiler Einstieg:** Bei 320×568 und 375×812 stehen Zweck und primaere
   Launchstatus-Aktion vor der Produktgrafik und im ersten Bildschirm. Desktop
   behaelt die zweispaltige Nacht-/Mint-Gestaltung und vorhandene Produktassets.
2. **Navigation:** Features, Tibber, FAQ, Launchstatus und Support sind mit
   hoechstens zwei Aktionen erreichbar. Geschlossenes Menue hat keine verborgenen
   Tabziele; Escape bringt den Fokus zur Oeffnung zurueck. FAQ bleibt natives HTML.
3. **Robuste Inhalte:** Features, FAQ und CTA bleiben ohne JavaScript, ohne
   IntersectionObserver, bei Initialisierungsfehler und mit Reduced Motion sichtbar.

Unveraendert: statisches HTML/CSS, lokale Fonts, keine neuen Dienste/Dependencies,
keine Preise/Storefreigaben/Ergebniszusagen, keine native Fehlerbehebung behaupten,
keine produktiven Daten oder Formulare. Rechtstexte bleiben zentral verlinkt.

Pruefmatrix: 320/375/390/768/1440px, 200%-Textvergroesserung, Tastatur/Touch,
Reduced Motion, No-JS, Observer-Ausfall, Assetfehler, Support und FAQ.
Chromium und WebKit getrennt protokollieren. Screenshots tatsaechlich ansehen.

## Alt → Neu

| Bisher | Ziel |
|---|---|
| Mobile Geraetegrafik vor Nutzen/CTA | Copy und Launchstatus zuerst, Grafik danach |
| Hauptnavigation mobil ausgeblendet | Natives aufklappbares Menue inkl. Support |
| Reveal standardmaessig unsichtbar | Sichtbarer Default, optionale Animation |
| Pauschale Stunden-/Widget-Roadmap-Claims | Quellengebundene, releasebewusste Formulierungen |
| Unpassender Gesundheitsdaten-/Lokaltext | App-/Website-Datenfluesse klar getrennt |

## Status

| Planpunkt | Stand |
|---|---|
| W1 | Mobile Hierarchie korrigiert; neue synthetische App-Bilder noch offen |
| W2 | Native Navigation, Tastatur/Fokus, erreichbare Support-/Launchziele umgesetzt |
| W3 | Sichtbarer Default, No-JS/Observer-/Reduced-Motion-Absicherung umgesetzt |
| W4/W5 | Quellenmatrix, Texte und Metadaten auf verifizierten Entwicklungsstand abgestimmt |
| Doku/Version | Projekttexte und Spiegel auf Quellversion 0.2.0; kein Live-Release behauptet |
| QS | 24/24 Browserfaelle, statischer Checker, Diff-Check und unabhaengiger Code-Review bestanden; Grenzen in `QA-22.md` |
| GitHub | Branch `openclaw/issue-22-web-ux-20260913`; exakter Remote-HEAD und PR werden in der GitHub-Uebergabe protokolliert |

## Weiterarbeit / offene Grenzen

### Aktuell: GitHub-Sicherung und Nutzerpause am 21.09.2026

Der neueste Nutzerauftrag beschraenkt die Arbeit auf Sicherung bei knappem
Wochenkontingent. Kandidat **0.2.0** bleibt unveroeffentlicht in Draft-PR #23;
kein Merge, kein Deployment, keine neue Browser-/Sichtabnahme. Die unten
beschriebene Bilduebernahme ist weiter offen: vier finale native Aufnahmen
fehlen; EnergyLens-Draft-PR #100 muss sie erst mit Provenienz liefern.
Die erweiterten Bildproportionschecks sind gesichert, aber noch nicht erneut
ausgefuehrt. Alte 24/24-Browserergebnisse bleiben historische Nachweise.
Rechtsziele weiter mit dokumentierter DNS-Grenze. Nach Push regulaer pausieren;
vor Fortsetzung Nutzerfreigabe und freie Zustaendigkeit pruefen.

### Historische Wiederaufnahme am 21.09.2026: enger W1-Bildwechsel

Bestehenden Branch und PR #23 fortgesetzt, Ausgangs-HEAD `8b9dc6c`.
Der lokale repo-weite Claim und das bestehende pausierte RepoGuard-Work-Item
wurden regulaer wieder aufgenommen. Kein Parallelbranch und keine neue
Produktrichtung. Die nachfolgende Matrix ist ein Abnahmeplan, noch kein PASS.

Visueller Vertrag (`design-agent`: Maintenance, implement + qa):

- Vier frisch erstellte native PNGs fuer Dashboard hell/dunkel, Beste Zeiten
  und Analyse ersetzen die vier bisherigen Produktbilder; das helle Dashboard
  wird zusaetzlich im Hero verwendet. Keine alten Bilder als neue Fixtures
  deklarieren und keine realen Tibber-/Kundendaten erneut exportieren.
- Vor Uebernahme jede Aufnahme ansehen und an exakten App-Quell-SHA,
  Buildversion, Reviewroute/-zustand und SHA-256 binden. Sichtbar befuellte
  synthetische Werte, Einheiten und Modellgrenzen muessen erkennbar sein.
- Nacht-/Mint-Gestaltung, mobile Copy-vor-Grafik-Hierarchie, Navigation,
  Coming-soon-Status und bestehende Feature-/Datenschutzgrenzen bleiben
  unveraendert. Alttexte und Bildhinweis werden an den belegten Satz angepasst.
- Alle fuenf Bildplatzierungen behalten ihre natuerlichen Proportionen.
  Hero und gesamte Produktvorschau bei 375, 768 und 1440 px ansehen;
  320/390 px und die bisherigen Ausfall-/Accessibility-Szenarien regressionspruefen.
- Site-Checker, Chromium/WebKit, echter Menue-/FAQ-/Supportpfad, Console/
  Network, 200%-Text, Reduce Motion, No-JS und absichtlicher Bildausfall
  bilden die finale QA. Generierte Screenshots allein sind keine Sichtabnahme.

Dokumentations-/Versionsplan: Nach erfolgreicher Bilduebernahme Produktfakten,
`DESIGN.md`, QA und Changelog aktualisieren. Die noch nicht integrierte
Quellversion `0.2.0` bleibt fuer denselben PR-23-Kandidaten erhalten;
README-, Deployment- und Footer-Spiegel bleiben konsistent. Kein weiterer
Release pro Umsetzungsschritt und kein Deployment-/Store-Releaseclaim.
Zentrale Dokumentation wird vom koordinierenden Owner getrennt bearbeitet.
In dieser Arbeitskopie existiert kein lokaler `graphify-out/graph.json`;
der zentrale Graph darf nicht auf diesen Featurebranch umgestempelt werden.
Ein finaler Quellen-/Commit-Handoff erlaubt dessen regulaere Aktualisierung
nach Integration. Externe semantische Backends und private Rohdaten bleiben aus.

1. Native #99 muss echte, befuellte App-Aufnahmen mit ausschliesslich
   synthetischen Daten liefern. Alle bisherigen App-Produktbilder dann
   pruefen/ersetzen. Das ist die verbliebene W1-Abhaengigkeit. Die Social
   Preview ist bereits als datensparsame Markenkarte ersetzt und geprueft.
2. Code-Review dieses Teilstands bestanden; erneute QS nach Assetwechsel.
3. Zentrale Finn-/Graphify-Doku separat und unter eigenen Claims aktualisieren.
   Finns bisherige Doku-PR ist gemergt; kanonische lokale Doku-Checkouts enthalten
   aber fremde ungesicherte Aenderungen und werden nicht ueberschrieben.
4. Der zentrale Graphify-Generator liest festgelegte Quellcheckouts und deren
   committed HEAD, nicht automatisch diesen Featurebranch. Erst nach Integration
   und erlaubtem Sync dort neu generieren; einen alten Graph nicht als aktuellen
   Branch-Nachweis ausgeben. Private Finanzdaten gehoeren niemals in diesen Graph.
5. Issue bleibt offen. Ein Draft-PR ist ein sicherer GitHub-Zwischenstand,
   nicht vollstaendige Planerfuellung, Merge, Deployment oder App-Store-Freigabe.
