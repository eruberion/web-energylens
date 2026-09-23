# Produktaufnahmen · 23.09.2026

Vier unveraenderte PNG-Originale ersetzen die alten Website-App-Bilder.
Realer nativer Build, aber ausschliesslich algorithmische In-Memory-Beispiele:
keine Tibber-, Wetter- oder StoreKit-Netzwerkdaten, keine Kundendaten.

- App-Quellcommit: `1c1c8dc31dcade2a8b991cd590c96d6a96f0619a`, sauberer Quellstand.
- Version 1.10.0, Build 19; Xcode 27.0 (27A266a).
- iPhone 17e Simulator, iOS 26.5 (23F77), 1170 × 2532 px, normale Textgroesse.
- Fixture-Zeit: 2026-09-14T12:07:00Z, Europe/Berlin; kein aktueller Livepreis.
- Quell-SHA-256: `769193a4fc45a8d30745ce5f624cbd75938d29fed578f034441674b5f4714140`.
- Fixture-SHA-256: `e7cea9df33cb081275a6ff43f3e435942cafa2f459d0e555496de951057d0b4e`.
- Executable-SHA-256: `954b3ef7d0c235000b39b17f930522dd866420be96d947c3c98da9739bb1dc2b`.
- Debug-Dylib-SHA-256: `4f2af346c15d6fbab19689f8104b895d4f505aff9a0b6eab208d94242c88518a`.
- Herkunft im nativen Repo: `ios/artifacts/ui-review/20260923-website-final/provenance.json`.
  Pflicht-Lane `fastlane ui_review` lieferte das helle Dashboard; drei weitere
  uneditierte `simctl`-Screenshots stammen aus demselben installierten Binary,
  jeweils nach explizitem Route-/Theme-Start. Kein Widget-Fixture-Flag.

| Website-Datei unter `site/assets/images/` | Native Datei / Route / Theme | SHA-256 |
|---|---|---|
| `screenshot-dashboard.png` | dashboard-light.png / dashboard / light | `36b660c9bde702fe5899f73278f51af21f86f3b1a0afd698558f4c364486ae91` |
| `screenshot-dashboard-dark.png` | dashboard-dark.png / dashboard / dark | `48253895c0078a8401555dc965eb3876de4ca41ac8c8fb641785c23ee4a3c6a5` |
| `screenshot-beste-zeiten.png` | best-times.png / best-times / light | `80f67959481e888a79182e635111bec587ed38c58ac4df69c4416de2280bac0e` |
| `screenshot-analyse.png` | analysis.png / analysis-premium / light | `9c9cfecb708484683718937e79dedbd53a3a97e2e2192332eac54e295a15c710` |

Alle vier nativen Originale vom koordinierenden Owner und vom Website-Agenten
tatsaechlich angesehen: Dashboard befuellt (25,4 ct/kWh, Zeitfenster,
Monatswerte samt Modellgrenze), Beste Zeiten mit Geraet/Laufzeit/Preisfenster,
Analyse mit Verbrauch/Kosten und zwoelf Monaten statt Paywall. Scrollinhalte
setzen sich unter der nativen Tableiste fort; horizontale Auswahl ist scrollbar.
Keine Bildbearbeitung, kein Verschweigen dieser nativen Darstellung.

Das helle Dashboard wird zweimal verwendet, insgesamt fuenf Platzierungen.
Dies bestaetigt Bildherkunft und Aufnahmestand, nicht App-Store-Freigabe,
vollstaendige native QA, Widget- oder VoiceOver-Abnahme. Analyse zeigt einen
synthetischen Premium-Zustand ohne Preis-, Kauf- oder Verfuegbarkeitsversprechen.
Finale Website-Darstellungspruefung separat in `QA-22.md`.
