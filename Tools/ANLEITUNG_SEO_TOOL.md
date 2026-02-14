# SEO Keyword Tool – Nutzung

**Script-Pfad:** `Tools/seo_keyword_tool.py`  
(Vollpfad: `c:\Users\julia\OneDrive\Dokumente\SeoMünchen\Tools\seo_keyword_tool.py`)

## Abhängigkeit installieren

```bash
pip install requests
```

oder:

```bash
pip install -r Tools/requirements.txt
```

---

## Aufruf (Deutsch / Deutschland)

```bash
python Tools/seo_keyword_tool.py domain.de --seeds "keyword1,keyword2" --lang de --country Germany
```

- **domain.de** durch die gewünschte Domain ersetzen  
- **--seeds** optional: kommagetrennte Suchbegriffe für die Keyword-Recherche  
- **--lang de** und **--country Germany** für deutschsprachige Auswertung

---

## Aufruf (Englisch / USA)

```bash
python Tools/seo_keyword_tool.py example.com --seeds "keyword1,keyword2" --lang en --country "United States"
```

---

## Ausgabe

Das Tool erstellt einen **SEO-Report als Markdown-Datei** im aktuellen Verzeichnis:

- Dateiname: `{domain}_seo_report.md` (z. B. `domain_de_seo_report.md`)
- Inhalt: Domain-Übersicht, Rankings, Keyword-Ideen, Konkurrenz, Keyword Difficulty, Traffic-Vergleich

---

## Kurzbeispiele

```bash
# Nur Domain (Seed = erster Teil der Domain)
python Tools/seo_keyword_tool.py example.com

# Mit Seeds, Deutschland
python Tools/seo_keyword_tool.py example.de --seeds "seo,keyword research" --lang de --country Germany

# Englisch, USA
python Tools/seo_keyword_tool.py example.com --lang en --country "United States"
```
