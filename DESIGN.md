# EnergyLens Web Design-System V2

Stand: 2026-09-23 · Website-Quellversion 0.2.0 (kein Deploymentnachweis)
Status: verbindliche Designquelle fuer die statische Produkt-, Support- und Vertrauensoberflaeche

## Scope und Oberflaechen

Das System gilt fuer:

- Navigation, Hero, Produktvorschau und Coming-soon-CTA
- App-Screenshot-/Phone-Inszenierung, Zahlen-/Trust-Streifen und Featurebereiche
- Tibber-/Datenschutz-Erklaerung, FAQ und Kontakt
- Supportseite, Fehler-/Fallback-Seiten und Social Preview
- Desktop-, Tablet- und Mobile-Darstellung der statischen Site

Die Website vermarktet und erklaert die iOS-App. Sie ist weder App-Dashboard noch Store-Listing und darf keine ungepruefte Verfuegbarkeit, Echtzeitfunktion, Einsparung, kostenlose Nutzung oder offizielle Tibber-Zugehoerigkeit behaupten.

## Leitidee und Prinzipien

**Energy after dark:** Eine konzentrierte, technisch vertrauenswuerdige Nachtoberflaeche, in der Mint-Energiepfade die App-Idee erklaeren.

1. Nutzen und Launchstatus sind im ersten Viewport eindeutig.
2. Produktbilder belegen reale Funktionen; sie ersetzen keine erklaerende Copy.
3. Dunkle Flaechen und Mint schaffen Eigenstaendigkeit, aber Lesbarkeit geht vor Glow.
4. Datenschutz, Token und Tibber-Grenze sind Produktargumente, keine Fussnoten.
5. FAQ und Support beantworten reale Unsicherheiten ohne Marketinguebertreibung.

## Farben und semantische Tokens

Implementierungsquelle: `site/assets/css/styles.css`; Struktur und Copy liegen in `site/index.html`.

| Rolle | Token | Wert / Verwendung |
|---|---|---|
| Seitenhintergrund | `--bg` | `#080D14` |
| Primaerflaeche | `--surface` | `#0F1824` |
| Erhoehte Flaeche | `--surface-2` | `#161F2E` |
| Linie | `--border` | `rgba(255,255,255,.07)` |
| Primaertext | `--text` | `#F1F5F9` |
| Sekundaertext | `--text-2` | `#94A3B8` |
| Gedämpfter Text | `--muted` | `#475569` |
| Primaerakzent | `--accent` | `#22D3A5` |
| Akzent dunkel | `--accent-dk` | `#16A37E` |
| Warmer Hinweis | `--warm` | `#F59E0B` |

- Mint markiert Primaeraktion, Energiepfad und positive Produktinformation.
- Warm/Orange kennzeichnet Launch-/Pruefhinweise, nicht generisch jede wichtige Zahl.
- Die aktuelle CSS-Baseline besitzt noch kein eigenes Fehler-Token. Ein kuenftiger Fehlerzustand braucht eine kontrastreiche rote Systemrolle plus Text/Icon; Erfolg und Warnung duerfen niemals farbexklusiv sein.
- Glow bleibt lokal an Hero/Phone-Stage und darf keinen Textkontrast reduzieren.

## Typografie

- Lokal gebuendelte Inter-Schnitte 400 / 500 / 600 / 700; System-Fallback muss dieselbe Hierarchie erhalten.
- Hero-H1: responsive Displaygroesse, stark gewichtet, kurze Zeilen und klarer Nutzen.
- Section-H2: praegnante, aber kleinere Stufe; Featuretitel deutlich vom Body getrennt.
- Body: 16–18 px mit ruhiger Zeilenhoehe; FAQ/Support nicht in Kleindruck.
- Meta/Status: mindestens 14 px und semibold, wenn launchrelevant.
- Zahlen und Energieeinheiten bleiben gemeinsam lesbar; keine Zahl ohne Zeitraum/Einheit.
- Textbreite wird begrenzt, damit Erklaerungen nicht ueber die gesamte 1100-px-Flaeche laufen.

## Layout, Abstand und Responsive

Verifizierte Baseline:

- Inhaltsbreite: maximal 1100 px
- Navigation: ca. 64 px Hoehe
- Desktop-Hero: zwei Spalten aus Copy und Phone-Stage
- Phone-Stage: ca. 420 × 560 px; Device-Darstellung ca. 282 px breit
- Feature-/FAQ-Bereiche: zwei Spalten auf Desktop
- Breakpoints: 768 px und 460 px

Regeln:

- Desktop: Copy zuerst in Leserichtung, Produktvorschau als Beleg daneben.
- Bis einschliesslich 768 px: Hero, Features und FAQ einspaltig. Copy und
  Launchstatus stehen vor der Grafik; die Hauptnavigation wechselt zu einem
  nativen Details-Menue mit allen fuenf Zielen statt Links zu entfernen.
- Unter 460 px: Aussenraum und Displaygroessen sinken, Touchziele bleiben mindestens 44 × 44 px.
- Kein horizontales Scrollen durch Phone-Stage, Glow oder lange URLs.
- Abschnitte haben deutlich mehr vertikalen als inneren Card-Abstand; Cards werden nicht in jeder Ebene verschachtelt.
- Supporttexte nutzen lineare Lesereihenfolge und sichtbare Ruecknavigation.

## Komponenten und Zustaende

### Navigation und CTA

- Logo/Wortmarke, Ankerlinks und Launchstatus bilden eine kompakte Leiste.
- Mobiles Menue: `details/summary` mit nativer Zustandsemantik und 44-px-Zielen;
  Escape schliesst und gibt Fokus zurueck, Anker aktivieren das Ziel unter dem
  Header. Kein modaler Fokusfang; beim Desktopwechsel keine versteckten Ziele.
- Textvergroesserung darf Leiste und Buttons wachsen lassen. Lange deutsche
  Woerter duerfen umbrechen; keine feste Hoehe schneidet Haupttexte ab.
- Aktueller Coming-soon-Zustand ist nicht interaktiv und sieht nicht wie ein funktionierender Store-Download aus.
- Ein kuenftiger Store-Link darf erst nach verifiziertem Ziel, Claim- und Live-QA aktiv werden.

### Hero und Phone-Stage

- Hero erklaert Nutzen, Tibber-Voraussetzung und Plattformstatus.
- Phone/Screenshot ist ein reales Produktasset mit sinnvollem Beschnitt und Alt-Text; keine erfundene App-UI.
- Bei fehlendem Bild bleibt Copy, Status und CTA vollstaendig; kein leerer schwarzer Container.
- Bei geladenem JavaScript wird ein fehlendes Produktbild durch einen lesbaren
  Hinweis ersetzt. Ohne JavaScript bleiben Alttext und separate Produkt-Copy.
- Die vier aktuellen Originalaufnahmen zeigen App-Entwicklungsstand 1.10.0/19
  mit ausschliesslich synthetischen Fixtures. Das helle Dashboard erscheint
  auch im Hero. Natuerliche Proportionen erhalten; keine Bildbearbeitung oder
  Livepreis-/Store-Freigabe daraus ableiten. Herkunft: `docs/PRODUCT-IMAGES.md`.

### Trust, Features und FAQ

- Trust-/Stat-Zeilen nennen Einheit und belegbare Bedeutung.
- Feature-Card: Icon, konkreter Titel, kurze Erklaerung; kein generisches KI-/Realtime-Versprechen.
- FAQ-Antworten sind per Tastatur und Screenreader zugaenglich; geoeffneter Zustand ist semantisch erkennbar.
- Kontakt/Support zeigt sichere Kontaktart und Produktgrenze, ohne Zugangsdaten oder Token abzufragen.

### Loading, Fehler und externe Ziele

- Statische Kernseite braucht keinen kuenstlichen Loader.
- Fehlendes Asset wird im Site-Check und visuell als Fehler behandelt.
- Externe Rechts-/Support-/Store-Ziele erhalten sichtbaren Linktext und werden vor Release geprueft.
- Social Preview hat eigenstaendigen Zuschnitt; sie ist kein Screenshot der gesamten Seite.
- Die aktuelle 1200 × 630-Markenkarte zeigt vorhandenes App-Icon, Nutzen,
  Tibber-/iPhone-Kontext und Entwicklungsstatus. Keine Kundendaten oder
  historischen App-Screenshots; reproduzierbar nach `docs/SOCIAL-PREVIEW.md`.

## Accessibility und Motion

- Ziel: WCAG 2.2 AA fuer Text, Fokus, Landmarken und interaktive Controls.
- Sichtbarer `:focus-visible`-Ring, Skip-Link und semantische Heading-Reihenfolge sind der verbindliche Zielstandard.
- FAQ-/Nav-Zustaende verwenden `aria-expanded`/passende Semantik, wenn interaktiv.
- Bilder haben zweckbezogenen Alt-Text; dekorative Glows sind fuer Assistenztechnik verborgen.
- Reveal-/Glow-/Hover-Motion ist optional. `prefers-reduced-motion` muss sie auf direkte statische Zustaende reduzieren.
- Keine dauernd pulsierende Kernaktion; Animation darf Launchstatus oder Lesereihenfolge nicht verschleiern.
- Kontrast wird auf realem Hintergrund, nicht nur gegen Tokenwerte geprueft.

Umgesetzte Absicherung in 0.2.0:

- `:focus-visible` und Skip-Link auf Start- und Supportseite vorhanden.
- Reduce Motion deaktiviert Smooth Scroll und Animationen/Transitions.
- Reveal startet sichtbar (`opacity: 1`); optionale Bewegung ist kein Ladegate.
- Native `<details>/<summary>` liefern FAQ- und Menuesemantik; keine
  widerspruechlich manuell gepflegten `aria-expanded`-Attribute.

Die automatisierten Tests ersetzen keine WCAG-Zertifizierung oder vollstaendige
VoiceOver-Abnahme. Tatsächlich gepruefte Szenarien stehen in `docs/QA-22.md`.

## No-Gos

- Keine App-Store-, Echtzeit-, Gratis-, Einspar- oder Android-Aussage ohne belegten Produktstand.
- Keine offizielle Tibber-Anmutung und keine fremden Markenassets als eigenes Branding.
- Kein generisches AI-Glow-/Cyberpunk-Layout; Mint-Energie bleibt diszipliniert.
- Keine erfundene App-Oberflaeche oder unberechtigtes Stockbild.
- Keine leere Screenshot-/Embed-Region als bestandene QA.
- Keine Kontaktform, die Tibber-Token oder andere Geheimnisse anfordert.
- Keine Fonts, Tracker oder Drittanbieter-Embeds ohne Datenschutz-/Performanceentscheidung.

## Agenten- und QA-Leitfaden

1. Vor sichtbaren Aenderungen `DESIGN.md`, `PRODUCT.md`, `README.md`, betroffene HTML/CSS/Assets und Claim-Grenzen lesen.
2. `design-agent` im passenden Modus verwenden; Wartung bleibt Konformitaetsarbeit, Gold/Redesign braucht ausdruecklichen Auftrag.
3. Visuellen Akzeptanzvertrag festhalten: Zielregion, Copy-/CTA-Hierarchie, unveraenderte Claims, messbare Invariante und Asset-/Link-Fallback.
4. Site-Checker und semantische Browser-QA ausfuehren. Zielregion bei 1440, 768 und 375 px, Tastatur und Reduce Motion pruefen.
5. Screenshot-/Phone-Asset auf natuerliche Groesse, Beschnitt, Alt-Text und Fallback pruefen; FAQ, Anker, Kontakt und externe Links ausloesen.
6. Screenshots tatsaechlich ansehen; HTTP 200, fehlerfreie Konsole oder erzeugte Datei allein sind kein visueller Pass.
7. Neue dauerhafte Token-, Komponenten- oder Claim-Darstellung hier und in der Implementierung synchronisieren.

## Pflege und Quellenhierarchie

`DESIGN.md` ist der Designvertrag. `site/index.html`, Supportseite und Assets sind Implementierungsquellen; `PRODUCT.md` und gepruefte App-Dokumentation bestimmen Produktclaims. Bei Drift darf Design keinen Claim „schoener“ machen: Quelle pruefen und Vertrag plus Implementierung im selben Change angleichen.
