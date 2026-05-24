# FALLBACK.md — web-energylens

## Wenn energylens.app (Landingpage) nicht erreichbar ist

web-energylens ist eine statische HTML-Landingpage ohne laufende Server-Prozesse.

### Sofortcheck

1. Browser-Cache leeren und Seite neu laden.
2. Provider-Status prüfen (Hostinger oder GitHub Pages, je nach aktivem Deployment-Ziel).
3. DNS-Ausbreitung abwarten bei kürzlichen DNS-Änderungen (bis 48h möglich).

### Recovery

Da die Seite rein statisch ist, gibt es keinen Service zu neustarten.

- **Lokale Kopie:** Repo-Clone enthält alle Site-Dateien unter `site/`.
- **Neuaufschaltung:** Bei Provider-Ausfall Dateien bei alternativem Hosting neu aufschalten.
- **GitHub Pages Fallback:** Repo kann kurzfristig über GitHub Pages published werden.

### Hinweis

Die Landingpage ist von der iOS-App (EnergyLens) technisch unabhängig. Ein Ausfall der Landingpage beeinträchtigt die App-Funktion nicht.

## Deployment-Ziel

> TBD — noch nicht final entschieden. Dieser Abschnitt wird nach Deploy-Entscheidung ergänzt.
