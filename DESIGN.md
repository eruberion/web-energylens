# DESIGN.md — EnergyLens Landing Page

## Zweck
Dieses Dokument beschreibt die visuelle Richtung der EnergyLens-Landing-Page, damit sie die App glaubwürdig und hochwertig verkauft, ohne wie eine generische SaaS-Seite oder ein Tech-Startup-Baukasten auszusehen.

Abgeleitet aus:
- `site/index.html`
- bestehender App-Markenwirkung von EnergyLens
- vorhandenen Produktzielen rund um Strompreise, Verbrauch und Verständlichkeit

## Produktcharakter
EnergyLens hilft Menschen, Energiepreise und Verbrauch besser zu verstehen.
Die Landing Page muss deshalb vor allem:
- Klarheit vermitteln
- Vertrauen aufbauen
- die App hochwertig zeigen
- technische Kompetenz einfach übersetzen
- nicht nerdig oder erklärbärig wirken

## Zielbild
**Ruhige Energie-Intelligenz statt technische Härte.**

Die aktuelle Landing Page nutzt bewusst eine dunkle, hochwertige Produktbühne:
ruhiger Night-Dashboard-Charakter, klare App-Screens, grün-türkise Energieakzente
und warme Preis-/Zeit-Hinweise. Sie soll eher wie ein vertrauenswürdiges
iOS-Energiecockpit wirken als wie eine generische SaaS-Seite.

## Visuelle Richtung

### Bildsprache
- dunkel, modern, ruhig und hochwertig
- große Luft im Hero
- App-Screens als Vertrauensbeweis
- weiche dunkle Flächen, klare türkis-grüne Akzentfarbe und sparsame warme Highlights
- Fokus auf Nutzen statt Buzzwords

### Stimmung
- verständlich
- modern
- ruhig
- kompetent
- alltagstauglich
- vertrauenswürdig

## Designprinzipien

### 1. Die App muss der Held sein
Nicht Textwände, sondern Screens, Nutzen und klare Struktur sollen tragen.

### 2. Energie darf nicht nach Ingenieurs-UI aussehen
Das Produkt muss technische Daten übersetzen, nicht technische Härte reproduzieren.

### 3. Vertrauen vor Marketing-Lärm
Keine aggressiven Growth-Muster, keine überladenen Hero-Versprechen.

### 4. Ein Feature nach dem anderen verkaufen
Preis, Visualisierung, Vergleich, Widgets — jeweils klar, verständlich, konkret.

### 5. Dunkel heißt nicht dramatisch
Der dunkle Look bleibt ruhig und lesbar: keine lauten Neonflächen, keine
dominanten Gradienten, keine übertriebene Energie-/Blitzsymbolik.

## Komponenten-Richtung

### Hero
- große klare Headline
- App-Screenshot als primärer Beweis
- CTA sichtbar, aber nicht aufdringlich
- kurze Nutzenbotschaft statt langer Story
- schwebende Preis-/Zeit-Meter als schnelle Produktbeweise
- Proof-Chips für lokale Token-Speicherung, iOS-Status und Widget-Roadmap

### Preview-Bereich
- Screens sauber gerahmt
- Light/Dark-Mode und Kernfeatures klar vergleichbar
- keine visuelle Unruhe zwischen den Devices

### Feature-Karten
- einfach, verständlich, alltagsnah
- kein Marketingsprech
- Icons klar und ruhig

### Tibber-Integration
- muss Vertrauen auslösen
- Sicherheit, Datenherkunft und Aktualität klar benennen
- nicht wie eine technische API-Ecke wirken

### Stats / Trust
- kurze Statusleisten und Trust-Cards statt langer Erklärtexte
- lokale Speicherung und Datenherkunft sichtbar, aber nicht alarmistisch erklären
- Roadmap-Punkte klar als geplant markieren, nicht als bereits ausgeliefert verkaufen

## Animation / Motion
Für die Landing Page ist `motion` bzw. ähnliche Bewegung **fachlich sinnvoll**, wenn die Seite später als React-Projekt gebaut oder umgebaut wird.

### Sinnvoll für
- Hero-Reveal
- saubere Scroll-Reveals
- Screenshot-Transitions
- CTA-/Hover-Feedback
- leichte Parallax-/Layer-Bewegung sehr sparsam

### Nicht sinnvoll für
- übertriebene Scrollytelling-Effekte
- hektische Energie-/Blitz-Animationen
- animierten Tech-Kitsch

### Regel
Die Seite soll hochwertig wirken, nicht laut.

## Do / Don't

### Do
- App-Screens sauber inszenieren
- verständliche Sprache priorisieren
- ruhige, hochwertige Energie-Bildsprache mit klarem Kontrast nutzen
- Nutzen immer konkreter als Technik formulieren
- App-Store-CTA und Produktstatus ehrlich einordnen

### Don't
- Hacker-/Tech-Look
- überladene Gradient-Show
- zu viele gleich laute CTAs
- abstrakte Zukunfts-Buzzwords ohne Produktbezug
- Roadmap-Features als fertige Funktionen darstellen

## Naheliegende Umsetzungshebel
- Hero- und Screenshot-Inszenierung weiter verfeinern
- visuelle Beziehung zwischen Landing Page und App noch enger ziehen
- Vertrauensbeweise (Datenschutz, Tibber-Bezug, App-Store) klarer staffeln
- bei React-Neuaufbau gezielte Motion-Nutzung einplanen
- App-Store-Link, Launch-Status und Widget-Roadmap vor öffentlicher Bewerbung final prüfen
