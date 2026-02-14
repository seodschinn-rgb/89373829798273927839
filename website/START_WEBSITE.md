# Website lokal starten

## Voraussetzungen
- Node.js 16.14+ (oder 18+ für Next.js 14)
- npm

## Starten

1. **Terminal öffnen** (PowerShell oder CMD)

2. **In den Website-Ordner wechseln:**
   ```
   cd "C:\Users\julia\OneDrive\Dokumente\SeoMünchen\website"
   ```

3. **Falls noch nicht geschehen – Abhängigkeiten installieren:**
   ```
   npm install
   ```

4. **Entwicklungsserver starten:**
   ```
   npm run dev
   ```

5. **Im Browser öffnen:**
   - **http://localhost:3000** – Hauptseite (SEO Agentur München)
   - **http://localhost:3000/standorte** – alle Standorte
   - **http://localhost:3000/standorte/starnberg** – Beispiel-Stadtseite
   - **http://localhost:3000/standorte/garching** – weitere Stadtseiten

## Beenden
Im Terminal `Strg + C` drücken.

## E-Mail-Benachrichtigungen bei Terminbuchung

**Option A – Formspree (empfohlen):**

1. Kostenlos bei [formspree.io](https://formspree.io) anmelden
2. Neues Formular erstellen
3. Form-ID aus der URL kopieren (z.B. `xyzabc` aus `formspree.io/f/xyzabc`)
4. In `website/.env.local` eintragen:
   ```
   NEXT_PUBLIC_FORMSPREE_FORM_ID=xyzabc
   ```

**Option B – Resend:** API-Key + E-Mail in `.env.local` (Resend benötigt ggf. verifizierte Domain; im Testmodus nur an die bei Resend hinterlegte E-Mail-Adresse).

---

## Alternative: Build für Produktion

```
npm run build
npm start
```

Die Seite läuft dann auf http://localhost:3000 (Standard-Port).
