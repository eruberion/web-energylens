# Teilen-Vorschaubild zu #22

## Akzeptanzvertrag

- Maintenance nach `DESIGN.md`: Nachtflaeche, Mint, lokale Inter-Schrift und
  vorhandenes App-Icon. Kein neues Logo und keine erfundene App-Oberflaeche.
- Eigenstaendige 1200 × 630-Pixel-Markenkarte fuer Open Graph/Twitter.
  Produktzweck, Tibber-/iPhone-Kontext und nicht veroeffentlichter Status lesbar.
- Ausschliesslich bestehendes Markenasset und Text. Keine Kundendaten,
  frueheren Tibber-Aufnahmen, Preise, Messwerte oder neuen externen Assets.
- Keine abgeschnittene Schrift, Ueberlagerung oder verzerrtes Icon;
  sichtbare Abnahme plus Layout-/Bild-/Laufzeit-Invarianten.

## Wiederholung

`node scripts/render_social_preview.cjs` mit der vorhandenen
`PLAYWRIGHT_MODULE`-Laufzeit und optional `CHROMIUM_EXECUTABLE` ausfuehren.
Der Generator installiert nichts und erlaubt keine Netzwerkrequests.
Er ersetzt genau `site/assets/images/energylens-social-preview.png`;
die vorherige Fassung bleibt in Git wiederherstellbar.

Der Renderer erzeugt die Karte aus HTML/CSS und uebernimmt das bestehende
Icon unveraendert. Er bearbeitet keine App-Screenshots. Eingabe-Hashes,
Ausgabe-Hash, Browserstand und Layoutpruefung stehen im zugehoerigen
`qa-evidence/social-preview/report.json`. Eine automatische Erzeugung
gilt ausdruecklich noch nicht als Sichtpruefung.

## Abnahme

Am 14.09.2026: **pass** fuer die abgegrenzte Markenkarte. Frische PNG
tatsaechlich angesehen: Nutzen links vor Zusatztext, Bestands-Icon rechts
unverzerrt, Entwicklungsstatus lesbar, keine Ueberlagerung oder abgeschnittene
Schrift. Automatische 1200 × 630-/Layout-/Bild-/Laufzeitpruefung sowie Site-,
Syntax- und Diff-Checks bestanden. Keine Aussage ueber Live-Caches oder die
Vorschau in externen Social-Plattformen.

Unabhaengiges Code-Review des abgegrenzten Folge-Diffs am 14.09.2026:
`codex-review-closeout --mode local` mit parallelem Site-Check bestanden;
keine handlungsrelevanten Findings im 20.206-Zeichen-Aenderungsbundle.
Geprueft wurden Renderer, bestehende lokale Eingaben, Metadaten und
Konsistenz der dokumentierten Bildherkunft. Kein Ersatz fuer native App-QS.

Gepruefter PNG-SHA256:
`8feb5bd2d29496c58a3cabd55f98bb773c612a1a87bfab2d65bdd9466cee1717`.
Neue native synthetische App-Screenshots bleiben ein separater W1-Nachweis.
