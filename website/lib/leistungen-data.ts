/**
 * Zentrale Daten für SEO-Leistungen – Basis für Übersichts- und Detailseiten
 */

export interface LeistungContent {
  title: string
  metaDescription: string
  shortDescription: string
  heroSubline: string
  intro: string
  benefits: { title: string; text: string }[]
  process: { step: number; title: string; description: string }[]
  ctaHeadline: string
  ctaText: string
}

export interface Leistung {
  slug: string
  title: string
  shortDescription: string
  icon: 'search' | 'map' | 'cog' | 'chart' | 'link' | 'document'
  color: 'blue' | 'emerald' | 'violet' | 'amber' | 'rose' | 'cyan'
}

export const LEISTUNGEN: Leistung[] = [
  {
    slug: 'keyword-recherche',
    title: 'Keyword-Recherche',
    shortDescription: 'Zielgruppenorientierte Analyse für maximalen Traffic und die richtigen Suchanfragen.',
    icon: 'search',
    color: 'blue',
  },
  {
    slug: 'local-seo',
    title: 'Local SEO',
    shortDescription: 'Google Business Profile, lokale Suchergebnisse und Maps-Optimierung für München und Bayern.',
    icon: 'map',
    color: 'emerald',
  },
  {
    slug: 'technisches-seo',
    title: 'Technisches SEO',
    shortDescription: 'Core Web Vitals, Indexierung und technische Grundlagen für beste Rankings.',
    icon: 'cog',
    color: 'violet',
  },
  {
    slug: 'reporting-kpis',
    title: 'Reporting & KPIs',
    shortDescription: 'Transparente Erfolgsmessung mit klaren Kennzahlen und regelmäßigen Reports.',
    icon: 'chart',
    color: 'amber',
  },
  {
    slug: 'linkaufbau',
    title: 'Linkaufbau',
    shortDescription: 'Strategischer Aufbau hochwertiger Backlinks für mehr Autorität und bessere Rankings.',
    icon: 'link',
    color: 'rose',
  },
  {
    slug: 'onpage-optimierung',
    title: 'OnPage-Optimierung',
    shortDescription: 'Content-Strategien, Meta-Daten und interne Verlinkung für maximale Sichtbarkeit.',
    icon: 'document',
    color: 'cyan',
  },
]

export const LEISTUNGEN_CONTENT: Record<string, LeistungContent> = {
  'keyword-recherche': {
    title: 'Keyword-Recherche',
    metaDescription: 'Professionelle Keyword-Recherche für München und Bayern. Zielgruppenorientierte Analyse für maximale Sichtbarkeit bei Google.',
    shortDescription: 'Zielgruppenorientierte Keyword-Analyse für maximalen Traffic.',
    heroSubline: 'Das Fundament jeder SEO-Strategie',
    intro:
      'Die Keyword-Recherche ist der erste und wichtigste Schritt jeder Suchmaschinenoptimierung. Wir analysieren, wie Ihre Zielgruppe wirklich sucht – mit welchen Begriffen, in welcher Absicht und mit welchem Wettbewerbsumfeld. Nur wer die richtigen Keywords kennt, kann Inhalte erstellen, die gefunden werden.',
    benefits: [
      {
        title: 'Zielgruppenorientierung',
        text: 'Wir ermitteln die Suchbegriffe Ihrer potenziellen Kunden – nicht nur hohes Volumen, sondern echte Kaufabsicht und Conversion-Potenzial.',
      },
      {
        title: 'Long-Tail-Strategie',
        text: 'Spezifische Suchphrasen wie „SEO Agentur München Garching“ haben weniger Konkurrenz und bringen oft besser qualifizierten Traffic.',
      },
      {
        title: 'Wettbewerbsanalyse',
        text: 'Wir prüfen, welche Keywords Ihre Konkurrenten ranken und identifizieren Lücken, die Sie besetzen können.',
      },
      {
        title: 'Suchergebnis-Analyse',
        text: 'Für jedes Keyword analysieren wir die Top-10 bei Google – welche Inhalte funktionieren und wie wir sie übertreffen.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Briefing & Zieldefinition',
        description: 'Wir klären Ihre Geschäftsziele, Zielgruppe und den geografischen Fokus (z.B. München, Bayern).',
      },
      {
        step: 2,
        title: 'Tool-gestützte Recherche',
        description: 'Mit Ahrefs, SEMrush und Google Keyword Planner identifizieren wir relevante Keywords mit Traffic- und Wettbewerbs-Potenzial.',
      },
      {
        step: 3,
        title: 'Priorisierung & Cluster',
        description: 'Keywords werden nach Priorität sortiert und in thematische Cluster gruppiert für die Content-Planung.',
      },
      {
        step: 4,
        title: 'Strategie-Report',
        description: 'Sie erhalten einen detaillierten Report mit empfohlenen Keywords, Suchvolumen und konkreten Umsetzungshinweisen.',
      },
    ],
    ctaHeadline: 'Starten Sie mit der richtigen Keyword-Strategie',
    ctaText: 'Kostenloses SEO-Gespräch vereinbaren',
  },

  'local-seo': {
    title: 'Local SEO',
    metaDescription: 'Local SEO München & Bayern: Google Business Profile optimieren, lokale Suchergebnisse dominieren. Mehr Sichtbarkeit in Maps und lokalen Suchen.',
    shortDescription: 'Dominieren Sie lokale Suchergebnisse in München und Bayern.',
    heroSubline: 'Sichtbar sein, wenn Kunden vor Ort suchen',
    intro:
      'Über die Hälfte aller Google-Suchanfragen hat einen lokalen Bezug. Wer „Friseur München Schwabing“ oder „Steuerberater Garching“ sucht, will ein Unternehmen in der Nähe finden. Local SEO sorgt dafür, dass Ihre Firma in Google Maps und den lokalen Suchergebnissen prominent erscheint – gerade für Unternehmen mit Ladengeschäft, Praxis oder regionalem Einzugsgebiet unverzichtbar.',
    benefits: [
      {
        title: 'Google Business Profile',
        text: 'Wir optimieren Ihr Unternehmensprofil vollständig: Öffnungszeiten, Kategorien, Fotos, Posts und die richtigen Keywords in der Beschreibung.',
      },
      {
        title: 'Lokale Landingpages',
        text: 'Für mehrere Standorte oder Einzugsgebiete erstellen wir dedizierte Seiten – wichtig für regionale Rankings und die lokale Suche.',
      },
      {
        title: 'Bewertungen & Reputation',
        text: 'Kundenbewertungen beeinflussen Rankings und Klickrate. Wir beraten Sie zu Bewertungsstrategien und Antwort-Templates.',
      },
      {
        title: 'NAP-Konsistenz',
        text: 'Name, Adresse, Telefon – überall identisch. Wir prüfen und korrigieren Ihre Unternehmensdaten in Verzeichnissen und auf der Website.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Profil-Audit',
        description: 'Wir prüfen Ihr Google Business Profile und weitere Einträge (Bing, Apple Maps, Branchenverzeichnisse).',
      },
      {
        step: 2,
        title: 'Optimierung & Vervollständigung',
        description: 'Kategorien, Beschreibungen, Fotos und regelmäßige Posts werden optimiert und standardisiert.',
      },
      {
        step: 3,
        title: 'Website-Integration',
        description: 'Lokale Keywords, strukturierte Daten (Schema.org) und klare regionale Signale auf der Website.',
      },
      {
        step: 4,
        title: 'Monitoring & Weiterentwicklung',
        description: 'Ranking-Tracking für lokale Keywords, Bewertungsüberwachung und kontinuierliche Anpassungen.',
      },
    ],
    ctaHeadline: 'Mehr Sichtbarkeit in München und Bayern',
    ctaText: 'Local SEO Beratung anfragen',
  },

  'technisches-seo': {
    title: 'Technisches SEO',
    metaDescription: 'Technisches SEO München: Core Web Vitals, Indexierung, Ladegeschwindigkeit. Solide technische Grundlagen für bessere Rankings.',
    shortDescription: 'Solide technische Grundlagen für beste Rankings.',
    heroSubline: 'Die unsichtbare Basis für Top-Rankings',
    intro:
      'Technisches SEO kümmert sich um alles, was unter der Oberfläche passiert: Ladegeschwindigkeit, Indexierung, mobile Darstellung, strukturierte Daten. Google belohnt Seiten, die technisch einwandfrei funktionieren – und bestraft langsame, fehlerhafte oder schlecht strukturierte Websites. Ohne solides technisches Fundament bleiben auch die besten Inhalte unsichtbar.',
    benefits: [
      {
        title: 'Core Web Vitals',
        text: 'LCP, FID, CLS – wir optimieren die Messgrößen, die Google für Nutzererlebnis und Ranking nutzt. Schnelle Ladezeiten, keine Ruckler.',
      },
      {
        title: 'Indexierung & Crawling',
        text: 'Sicherstellen, dass alle wichtigen Seiten indexiert werden, und problematische Bereiche (z.B. Duplicate Content) bereinigen.',
      },
      {
        title: 'Mobile-First',
        text: 'Google crawlt primär die mobile Version. Wir prüfen Responsiveness, Touch-Targets und mobile Performance.',
      },
      {
        title: 'Strukturierte Daten',
        text: 'Schema.org-Markup hilft Google, Ihre Inhalte zu verstehen – und kann zu Rich Snippets (Sterne, FAQs) in den Suchergebnissen führen.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Technisches Audit',
        description: 'Crawl-Analyse, Core Web Vitals, Indexierungsstatus – wir identifizieren alle technischen Schwachstellen.',
      },
      {
        step: 2,
        title: 'Priorisierte Maßnahmen',
        description: 'Kritische Fehler zuerst, dann Performance, dann strukturelle Optimierungen. Klare Reihenfolge nach Impact.',
      },
      {
        step: 3,
        title: 'Umsetzung',
        description: 'Wir setzen die Maßnahmen um oder koordinieren mit Ihrem Technik-Team – je nach Ihren Ressourcen.',
      },
      {
        step: 4,
        title: 'Nachkontrolle & Monitoring',
        description: 'Verifizierung der Fixes, erneutes Crawling und dauerhaftes Monitoring der technischen KPIs.',
      },
    ],
    ctaHeadline: 'Lassen Sie Ihre Website technisch aufräumen',
    ctaText: 'Technisches SEO Audit anfragen',
  },

  'reporting-kpis': {
    title: 'Reporting & KPIs',
    metaDescription: 'Transparentes SEO-Reporting für München und Bayern. Klare KPIs, regelmäßige Reports und messbare Erfolge.',
    shortDescription: 'Transparente Erfolgsmessung mit klaren Kennzahlen.',
    heroSubline: 'Transparenz und messbare Erfolge',
    intro:
      'SEO braucht Zeit – aber Sie wollen wissen, ob sich die Investition lohnt. Mit klarem Reporting und aussagekräftigen KPIs zeigen wir Ihnen genau, was sich verbessert: mehr organischer Traffic, bessere Rankings, mehr Conversions. Keine Black Box, sondern nachvollziehbare Zahlen und verständliche Erklärungen – so können Sie intern Rechenschaft ablegen und strategische Entscheidungen treffen.',
    benefits: [
      {
        title: 'Traffic & Rankings',
        text: 'Organischer Traffic, Positionen für Zielkeywords und Sichtbarkeits-Index – die Kernmetriken, die den SEO-Erfolg abbilden.',
      },
      {
        title: 'Conversion-Tracking',
        text: 'Nicht nur Klicks, sondern Buchungen, Anfragen, Downloads. Wir verknüpfen SEO-Daten mit Ihrem Conversion-Ziel.',
      },
      {
        title: 'Regelmäßige Reports',
        text: 'Monatliche oder quartalsweise Reports mit Vergleich zum Vormonat, Kennzahlen und konkreten Handlungsempfehlungen.',
      },
      {
        title: 'Zielgerichtete Dashboards',
        text: 'Übersichtliche Dashboards (z.B. Google Looker Studio) mit den für Sie relevanten KPIs – jederzeit einsehbar.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'KPI-Definition',
        description: 'Gemeinsam legen wir fest, welche Kennzahlen für Sie wichtig sind und wie wir sie messen.',
      },
      {
        step: 2,
        title: 'Tracking-Aufbau',
        description: 'Google Search Console, Analytics, eventuell weitere Tools – wir richten die Datenerfassung korrekt ein.',
      },
      {
        step: 3,
        title: 'Reporting-Struktur',
        description: 'Report-Vorlage, Frequenz und Empfänger – alles wird auf Ihre Bedürfnisse zugeschnitten.',
      },
      {
        step: 4,
        title: 'Kontinuierliche Auswertung',
        description: 'Regelmäßige Auswertung, Trend-Analyse und Empfehlungen basierend auf den neuesten Daten.',
      },
    ],
    ctaHeadline: 'Erfolge messbar machen',
    ctaText: 'Reporting-Demo anfragen',
  },

  'linkaufbau': {
    title: 'Linkaufbau',
    metaDescription: 'Professioneller Linkaufbau für München und Bayern. Hochwertige Backlinks für mehr Domain-Autorität und bessere Google-Rankings.',
    shortDescription: 'Hochwertige Backlinks für mehr Autorität.',
    heroSubline: 'Autorität aufbauen – nachhaltig und echt',
    intro:
      'Backlinks sind einer der stärksten Ranking-Faktoren von Google. Websites mit vielen hochwertigen Links von vertrauenswürdigen Quellen werden als autoritativ eingestuft und ranken besser. Linkaufbau bedeutet nicht Spam oder gekaufte Links – wir setzen auf redaktionelle Platzierungen, Gastbeiträge, Partnerschaften und echtem Mehrwert. So wächst Ihre Domain-Autorität nachhaltig.',
    benefits: [
      {
        title: 'Qualität vor Quantität',
        text: 'Ein Link von einer seriösen Branchenseite oder einem bekannten Portal wiegt mehr als Dutzende von zweifelhaften Verzeichnissen.',
      },
      {
        title: 'Relevante Anchor-Texte',
        text: 'Natürlich und themenrelevant – wir vermeiden überoptimierte Anchor-Texte, die von Google abgestraft werden.',
      },
      {
        title: 'Redaktionelle Platzierungen',
        text: 'Gastbeiträge, Expertentipps, Erwähnungen in Ratgebern – Links, die echten Content bieten und von Redaktionen veröffentlicht werden.',
      },
      {
        title: 'Risikominimierung',
        text: 'Keine Link-Käufe, keine PBNs, keine manipulativen Taktiken. Unser Linkaufbau ist Google-konform und langfristig sicher.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Link-Profiling',
        description: 'Analyse Ihrer aktuellen Backlinks und der Ihrer Konkurrenten – Stärken, Schwächen, Chancen.',
      },
      {
        step: 2,
        title: 'Zielquellen identifizieren',
        description: 'Relevante Websites, Branchenportale, lokale Medien – wir listen potenzielle Link-Partner auf.',
      },
      {
        step: 3,
        title: 'Outreach & Content',
        description: 'Professionelle Anfragen, Gastbeiträge oder kooperativer Content – wir setzen die Platzierungen um.',
      },
      {
        step: 4,
        title: 'Monitoring & Anpassung',
        description: 'Überwachung des Link-Wachstums, Qualitätskontrolle und laufende Optimierung der Strategie.',
      },
    ],
    ctaHeadline: 'Autorität und Sichtbarkeit steigern',
    ctaText: 'Linkaufbau-Strategie besprechen',
  },

  'onpage-optimierung': {
    title: 'OnPage-Optimierung',
    metaDescription: 'OnPage-SEO München: Content-Strategien, Meta-Daten, interne Verlinkung. Ihre Inhalte optimal für Suchmaschinen aufbereiten.',
    shortDescription: 'Inhalte optimal für Suchmaschinen aufbereiten.',
    heroSubline: 'Das Beste aus Ihren Inhalten herausholen',
    intro:
      'OnPage-Optimierung bedeutet: Ihre Inhalte so gestalten, dass Google sie versteht und bewertet. Titel, Überschriften, Meta-Beschreibungen, interne Verlinkung, Content-Struktur – alles wirkt zusammen. Wir bringen Ihre Texte und Seiten in Form, damit sie für die richtigen Suchanfragen ranken und Nutzer überzeugen. Content und Technik gehen Hand in Hand.',
    benefits: [
      {
        title: 'Meta-Daten & Titel',
        text: 'Title Tags und Meta Descriptions, die klicken – mit Zielkeywords und überzeugendem Call-to-Action für höhere CTR.',
      },
      {
        title: 'Content-Struktur',
        text: 'Überschriften-Hierarchie (H1–H6), Absätze, Listen – wir strukturieren Inhalte für Suchmaschinen und Lesbarkeit.',
      },
      {
        title: 'Interne Verlinkung',
        text: 'Sinnvolle Verlinkung zwischen relevanten Seiten verteilt Linkjuice und hilft Google, Ihre Website-Themen zu verstehen.',
      },
      {
        title: 'Content-Strategie',
        text: 'Welche Inhalte fehlen? Wo können wir bestehende Seiten erweitern? Wir entwickeln eine Content-Roadmap für mehr Rankings.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Content-Audit',
        description: 'Analyse aller relevanten Seiten: Keywords, Struktur, Meta-Daten – wo gibt es Optimierungspotenzial?',
      },
      {
        step: 2,
        title: 'Optimierungsplan',
        description: 'Priorisierte Liste von Maßnahmen: welche Seiten zuerst, welche Keywords, welche Änderungen.',
      },
      {
        step: 3,
        title: 'Umsetzung',
        description: 'Wir überarbeiten Texte, Meta-Daten und interne Links – oder geben Ihnen klare Anweisungen für Ihr Team.',
      },
      {
        step: 4,
        title: 'Content-Erweiterung',
        description: 'Neue Seiten, FAQ-Bereiche, Ratgeber – wo sinnvoll erweitern wir Ihr Angebot um suchoptimierte Inhalte.',
      },
    ],
    ctaHeadline: 'Ihre Inhalte auf Erfolgskurs bringen',
    ctaText: 'OnPage-Audit anfragen',
  },
}

export function getLeistungBySlug(slug: string): Leistung | undefined {
  return LEISTUNGEN.find((l) => l.slug === slug)
}

export function getLeistungContent(slug: string): LeistungContent | undefined {
  return LEISTUNGEN_CONTENT[slug]
}

export function getAllLeistungSlugs(): string[] {
  return LEISTUNGEN.map((l) => l.slug)
}
