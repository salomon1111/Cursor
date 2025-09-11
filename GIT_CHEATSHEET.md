# Git & GitHub Kurzüberblick

## Grundbegriffe
- **Working Directory**: Deine Dateien aktuell auf der Platte
- **Staging Area (Warenkorb)**: Auswahl, was in den nächsten Schnappschuss soll
- **Repository (History)**: Dauerhafte Commit-Historie

Ablauf: Working Directory → `git add` → Staging → `git commit` → History → `git push` → GitHub

## Lokale Basics
- `git init` — lokales Repo anlegen (erst dann kann Git tracken)
- `git status` — Überblick: geändert, gestaged, untracked
- `git add -A` — alle Änderungen in den Warenkorb
- `git commit -m "Nachricht"` — Schnappschuss in die lokale Historie
- `git log --oneline -n 5` — letzte Commits kurz anzeigen

## Änderungen zurücknehmen (kurz)
- Aus Staging entfernen (unstage):
  - `git restore --staged <datei>` oder `git reset HEAD <datei>`
- Arbeitskopie verwerfen (Datei-Inhalt zurücksetzen):
  - `git restore <datei>`
- Historie/Zeiger versetzen (vorsichtig):
  - `git reset --soft|--mixed|--hard <commit>`

## Verbindung zu GitHub
- Remote setzen (einmalig):
  - `git remote add origin https://github.com/<user>/<repo>.git`
  - prüfen: `git remote -v`
- Standard-Branch setzen (empfohlen):
  - `git branch -M main`

## Hochladen (Push)
Erstes Mal (Upstream setzen):
```bash
git push -u origin main
```
Danach reicht in der Regel:
```bash
git push
```
Hinweis bei HTTPS: GitHub fragt ggf. nach Personal Access Token statt Passwort.

## Änderungen holen (Pull)
- Remote-Änderungen integrieren (saubere Historie):
```bash
git pull --rebase origin main
```

## Minimaler Tages-Workflow
```bash
git status
# Dateien ändern/neu anlegen
git add -A
git commit -m "Kurz, aber aussagekräftig"
git push
```

## GitHub Pages (statische Website)
- Zweck: Statische Seiten (HTML/CSS/JS) direkt aus dem Repo hosten
- Quelle: z.B. Branch `main` + Ordner `/docs`
- Schritte (Repo → Settings → Pages):
  1. Source: "Deploy from a branch"
  2. Branch: `main`, Folder: `/docs`
  3. Warten bis Deployment fertig ist
  4. Aufrufen: `https://<user>.github.io/<repo>/`

Für dieses Projekt:
- Seiten-URL: `https://salomon1111.github.io/Cursor/`
- Veröffentlichungsordner: `/docs` (enthält `index.html`, `style.css`, `script.js`)
