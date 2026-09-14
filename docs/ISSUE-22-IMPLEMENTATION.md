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

1. Native #99 muss echte, befuellte App-Aufnahmen mit ausschliesslich
   synthetischen Daten liefern. Alle bisherigen Produktbilder und Social
   Preview dann pruefen/ersetzen. Das ist die verbliebene W1-Abhaengigkeit.
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
