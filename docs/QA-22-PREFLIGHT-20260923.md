# Website-Bildabschluss: QA-Preflight 23.09.2026

- Tier exhaustive fuer den vorhandenen #22-Umfang; Maintenance, implement + qa.
- URL http://127.0.0.1:5194, Branch openclaw/issue-22-web-ux-20260913,
  Basis acd20b2 plus vier native Originalbilder und belegte Copy-/Dokudeltas.
- Quelle DESIGN.md: Nacht/Mint, Copy/Coming-soon vor Grafik, unverzerrte Bilder,
  keine neuen Produktclaims oder Storefreigaben. Version unveraendert 0.2.0.
- Szenarien: Nutzen/Status erkennen und Bilder vergleichen; mobil Menue→FAQ
  und Support benutzen; Inhalte bei Bildausfall/No-JS/Observerfehler lesen.
- Zielregionen: Hero .phone-screenshot, vollstaendige .preview-section mit vier
  Bildern plus Herkunftshinweis, .mobile-menu, #faq und Support-Ruecknavigation.
- Soll: fuenf natuerlich proportionierte, geladene Bildplatzierungen; korrekte
  Beispiel-/Premium-Grenze, keine leeren/gestreckten Geraeteflaechen, kein
  horizontaler Seitenueberlauf, 44px-Ziele, Fokus/Escape, lesbarer Bildfallback.
- Viewports 320/375/390/768/1440; Chromium und WebKit streng nacheinander,
  je 12 Faelle; dazu 200%-Text, Reduced Motion, No-JS, Observerfehler, Touch.
- Externe Requests werden geblockt; keine echten Daten/Konten. Die Rechtsziele
  sind separat wegen DNS nicht abgenommen, kein Hostingfix in diesem Auftrag.
- Screenshots muessen angesehen und semantisch bewertet werden. Automatische
  Gruenmeldungen allein sind keine Sichtabnahme. Keine native VoiceOver-/Widget-
  Abnahme durch diese Website-Suite; physische Geraete und Release separat.
