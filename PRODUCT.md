# PRODUCT.md - web-energylens

## Produktscope

web-energylens ist die statische Landingpage fuer EnergyLens. Sie erklaert Nutzen, Status und Vertrauensgrundlagen der iOS-App fuer Tibber-Nutzer und bereitet die spaetere oeffentliche Produktkommunikation unter `energylens.app` vor.

Die Seite ist kein eigenstaendiges Energieprodukt, sondern Marketing- und Informationsflaeche fuer die App.

## Zielnutzen

- EnergyLens schnell verstaendlich positionieren.
- App-Screens, Strompreis-/Verbrauchsnutzen und Tibber-Bezug glaubwuerdig zeigen.
- Datenschutz- und Produktstatus klar kommunizieren.
- Spaeter App-Store-, Support- und Rechtslinks sauber aufnehmen.
- Bis zum verifizierten Store-Release jeden Download-CTA als nicht interaktiven
  Coming-soon-Status darstellen.
- App Store Connect darf nur die in `PUBLIC-URLS.md` gepflegten URL-Ziele
  verwenden.

## Grenzen

- Keine falschen App-Store-, Preis- oder Launch-Behauptungen.
- Keine Aussage, dass EnergyLens eine offizielle Tibber-App ist.
- Keine Stromkostenersparnis versprechen, die nicht im Produkt belastbar belegt ist.
- Keine rechtlichen Seiten oder Supportablaeufe doppelt pflegen; zentrale Links laufen ueber flowhrzn.ai bzw. projektspezifische Supportadresse.
- Keine Referral-, Bonus-, Echtzeit- oder lokale-Exklusivitaets-Claims ohne
  belastbare Produkt- beziehungsweise Vertragsgrundlage.
- Kein Supportkanal darf zur Einsendung von Tibber-Token, Passwoertern oder
  sonstigen Zugangsdaten auffordern.

## Erfolgskriterien

- Besucher verstehen innerhalb weniger Sekunden, was EnergyLens bietet.
- Seite wirkt hochwertig, ruhig und nah an der iOS-App.
- Produktstatus, Roadmap und Datenschutz sind ehrlich eingeordnet.
- Die statische Seite bleibt einfach deploybar und ohne unnoetigen Build-/Node-Overhead.

## Nicht-Funktionale Anforderungen

- Statische HTML/CSS-Basis ohne Tracking als Default.
- Mobile Darstellung ohne horizontalen Overflow.
- Assets und Links muessen vor oeffentlichem Launch geprueft sein.
- Claims muessen mit dem iOS-App-Stand und den Tibber-API-Grenzen konsistent bleiben.

## Verifizierter Claim-Vertrag (2026-09-14)

- Historische Referenz des Claim-Abgleichs: 1.9.12, Build 18, Commit `ad7a4bf`.
  Die neuen synthetischen Produktaufnahmen stammen aus 1.10.0, Build 19,
  Commit `1c1c8dc` (23.09.2026); siehe `docs/PRODUCT-IMAGES.md`.
  Die Website-Version 0.2.0 liefert keine nativen Fehlerkorrekturen und
  bestaetigt keinen App-Store-Release oder vollstaendige native QA.
- Viertelstundenpreise werden angefragt; Datenverfuegbarkeit und Markt bestimmen
  tatsaechliche Intervalle. Keine universelle Aktualisierungszusage.
- Widgets existieren im Entwicklungsstand. Free/Premium bleibt eine geplante
  Produktaufteilung ohne erfundene Preise oder bestellbaren Store-Zugang.
- Tibber-Token liegt im iOS-Schluesselbund; Tibber-Abrufe und Open-Meteo-
  Wetterabrufe verlassen das Geraet. Neuer iCloud-Opt-in ist deaktiviert,
  bereits gespeicherte Opt-ins koennen bestehen. Keine lokale Exklusivitaet.
- Diese statische Website verarbeitet keinen Tibber-Login und bindet im
  geprueften Quellcode keine Tracker ein. Hosting-/Rechtsfreigabe bleibt separat.

Quellen, Assetherkunft und offene Freigaben: `docs/PRODUCT-FACTS.md`.
