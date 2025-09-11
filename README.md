# Quadratwurzel – CLI und Web-Widget

Kleines Lernprojekt: Quadratwurzel-Berechnung als Python-CLI und als Web-Widget.

## Struktur

```
C:\Users\Ken\Cursor
├─ python\
│  └─ quadratwurzel.py
└─ web\
   ├─ index.html
   ├─ style.css
   └─ script.js
```

## Nutzung

### Python (CLI)
```bash
cd python
python quadratwurzel.py
```

### Web-Widget lokal
- `web/index.html` im Browser öffnen
- Eingabe: Dezimalpunkt oder Komma möglich
- Ergebnis erscheint live; Copy-Button kopiert die Darstellung (z.B. "√2 = 1,414214")

## GitHub Pages (optional)
Wenn du das Widget online zugänglich machen möchtest:
1. In deinem GitHub-Repo: Settings → Pages
2. Build and deployment → Source: "Deploy from a branch"
3. Branch: `main`, Folder: `/docs`
4. Speichern. Die Seite ist nach wenigen Minuten unter `https://<dein-user>.github.io/<repo>/` erreichbar.

Damit das funktioniert, liegt ein Redirect in `docs/index.html`, der auf `web/index.html` weiterleitet.

## Lizenz
MIT
