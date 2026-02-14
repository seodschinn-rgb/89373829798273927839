# SEO Agentur München – Deployment auf Netlify

## Voraussetzungen

- GitHub-Account
- Netlify-Account (kostenlos unter [netlify.com](https://netlify.com))

---

## Schritt 1: Projekt auf GitHub hochladen

### 1.1 Git initialisieren (falls noch nicht geschehen)

```bash
cd "c:\Users\julia\OneDrive\Dokumente\SeoMünchen"
git init
```

### 1.2 Alle Dateien committen

```bash
git add .
git commit -m "Initial: SEO Agentur München für Netlify bereit"
```

### 1.3 Repository auf GitHub erstellen

1. Gehe zu [github.com/new](https://github.com/new)
2. Repository-Name z.B. `seo-agentur-muenchen`
3. **Nicht** „Initialize with README“ auswählen (Projekt existiert bereits)
4. Erstellen

### 1.4 Mit GitHub verbinden

```bash
git remote add origin https://github.com/DEIN_USERNAME/seo-agentur-muenchen.git
git branch -M main
git push -u origin main
```

---

## Schritt 2: Netlify verbinden

1. Einloggen unter [app.netlify.com](https://app.netlify.com)
2. **Add new site** → **Import an existing project**
3. **Deploy with GitHub** wählen
4. GitHub-Account autorisieren
5. Repository `seo-agentur-muenchen` auswählen

### Build-Einstellungen (wichtig)

Die `netlify.toml` im Projekt liefert bereits die richtigen Werte. Falls Netlify sie nicht übernimmt, manuell setzen:

| Einstellung    | Wert           |
|----------------|----------------|
| Base directory | `website`      |
| Build command  | `npm run build`|
| Publish directory | *(leer – wird vom Next.js-Plugin gesetzt)* |

---

## Schritt 3: Umgebungsvariablen in Netlify setzen

Unter **Site settings** → **Environment variables** folgende Variablen hinzufügen:

### Für Kontaktformular (Formspree – empfohlen)

| Variable                        | Wert              | Hinweis                              |
|--------------------------------|-------------------|--------------------------------------|
| `NEXT_PUBLIC_FORMSPREE_FORM_ID`| `xvzbgggb`        | Deine Formspree-Form-ID              |

### Optional: Eigene Domain / Schema

| Variable              | Wert                          |
|-----------------------|-------------------------------|
| `NEXT_PUBLIC_SITE_URL`| `https://deine-domain.de`     |

### Optional: E-Mail über Resend (statt Formspree)

| Variable            | Wert           |
|---------------------|----------------|
| `RESEND_API_KEY`    | `re_xxxxxxxx`  |
| `TERMIN_NOTIFY_EMAIL` | `deine@email.de` |
| `EMAIL_FROM`        | `termine@deine-domain.de` (optional) |

> **Hinweis:** Wenn `NEXT_PUBLIC_FORMSPREE_FORM_ID` gesetzt ist, wird Formspree für das Kontaktformular genutzt. Ohne Formspree wird die API-Route `/api/termin` mit Resend verwendet (falls `RESEND_API_KEY` gesetzt ist).

---

## Schritt 4: Deploy starten

Nach dem Speichern der Einstellungen startet Netlify automatisch einen Build. Der erste Build dauert oft 2–5 Minuten.

---

## Schritt 5: Domain einrichten (optional)

1. **Site settings** → **Domain management**
2. Eigene Domain verbinden oder Netlify-Subdomain (z.B. `random-name-123.netlify.app`) nutzen

---

## Checkliste vor dem ersten Deploy

- [ ] `package.json` enthält keine `"seo-agentur-muenchen": "file:"` Referenz
- [ ] `.env.local` und andere `.env*` Dateien sind **nicht** im Repo (stehen in `.gitignore`)
- [ ] `NEXT_PUBLIC_FORMSPREE_FORM_ID` in Netlify gesetzt (für Kontaktformular)
- [ ] Repository auf GitHub gepusht
- [ ] Base directory `website` in Netlify eingetragen

---

## Häufige Probleme

### Build schlägt fehl

- Base directory muss `website` sein (nicht das Root-Verzeichnis)
- In den Netlify-Logs prüfen, ob `npm install` und `npm run build` erfolgreich laufen

### Kontaktformular funktioniert nicht

- `NEXT_PUBLIC_FORMSPREE_FORM_ID` muss in Netlify gesetzt sein
- Nach Änderung von Env-Variablen einen neuen Deploy auslösen

### 404 bei Unterseiten

- Mit dem `@netlify/plugin-nextjs` sollte das nicht passieren. Bei Problemen: Netlify-Support prüfen bzw. Framework auf „Next.js“ stellen.
