# PUBLIC-URLS.md - web-energylens

Verbindliche URL-Matrix fuer EnergyLens-Landingpage und spaetere App-Store-Connect-Pflege.

## Status

Die Ziel-Domain `https://energylens.app/` loest per HTTPS auf, aber der aktuell
ausgelieferte Live-Stand ist noch nicht der durch dieses Repository kontrollierte
statische Stand. App-Store-Connect-Werte duerfen erst gesetzt werden, wenn die
Ziel-URLs live, per HTTPS erreichbar und inhaltlich gegen dieses Repository
geprueft sind.

## App Store Connect Zielwerte

| Feld | Zielwert | Status | Hinweis |
| --- | --- | --- | --- |
| Marketing URL | `https://energylens.app/` | Domain erreichbar, Inhalt nicht repo-synchron | Erst nach Live-Inhaltsabgleich setzen. |
| Support URL | `https://energylens.app/support.html` | vorbereitet, Live-Inhalt pruefen | Muss live per HTTPS erreichbar und repo-synchron sein. |
| Privacy Policy URL | `https://flowhrzn.ai/legal/datenschutz.html` | zentral | Fachkundige Rechtsfreigabe bleibt erforderlich. |
| Kontakt | `hello@flowhrzn.ai` | vorbereitet | Keine Tokens, Passwoerter oder Zugangsdaten per E-Mail anfordern. |

## Wahrheitsgrenzen

- Landingpage und Supportseite duerfen keine aktive App-Store-Verfuegbarkeit behaupten,
  solange EnergyLens nicht verifiziert im App Store gelistet ist.
- Datenschutz beschreibt nur tatsaechlich aktive Datenfluesse und Dienste.
- iCloud-, Backend-, Tracking-, Tibber- und In-App-Kauf-Aussagen duerfen nur erscheinen,
  wenn sie mit dem iOS-App-Stand und den zentralen Rechtsseiten uebereinstimmen.
- Support gibt Produktstatus, bekannte Grenzen und allgemeine Hilfestellung; keine Rechts-,
  Energie-, Vertrags- oder individuelle Sparberatung.

## Pre-Live Smoke

Vor App-Store-Connect-Eintragung:

```bash
python3 scripts/check_site.py
python3 scripts/check_site.py --production-origin https://energylens.app
curl -I https://energylens.app/
curl -I https://energylens.app/support.html
curl -I https://flowhrzn.ai/legal/datenschutz.html
```

Browserpruefung:
- Startseite zeigt Coming-soon statt aktivem App-Store-Download.
- Supportseite zeigt `hello@flowhrzn.ai` und warnt vor Token-/Passwortversand.
- Datenschutz-URL fuehrt zur zentralen `flowhrzn.ai`-Rechtsseite.
- Mobilansicht bleibt lesbar und ohne horizontalen Overflow.
