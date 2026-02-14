export interface FAQItem {
  question: string
  answer: string
}

export function getCityFAQs(cityName: string): FAQItem[] {
  return [
    {
      question: `Was kostet SEO für Unternehmen in ${cityName}?`,
      answer: `Die Kosten für SEO in ${cityName} variieren je nach Umfang und Zielen. Wir bieten transparente Pakete – von der einmaligen SEO-Beratung bis zur monatlichen Betreuung. Ein kostenloses Erstgespräch hilft, den Bedarf zu klären.`,
    },
    {
      question: `Wie lange dauert es, bis SEO in ${cityName} wirkt?`,
      answer: `Erste Verbesserungen zeigen sich meist nach 3–6 Monaten. Nachhaltige Rankings für wettbewerbsstarke Keywords benötigen oft 6–12 Monate. Wir setzen auf langfristige Strategien statt schneller Tricks.`,
    },
    {
      question: `Was bringt Local SEO für ${cityName}?`,
      answer: `Local SEO optimiert Ihr Google Business Profile und Ihre Sichtbarkeit bei lokalen Suchen wie „[Branche] ${cityName}“. Besonders wichtig für Handwerker, Gastronomie, Ärzte und Einzelhandel.`,
    },
    {
      question: `Betreut die SEO Agentur München auch Kunden in ${cityName}?`,
      answer: `Ja. Von München aus betreuen wir Unternehmen in ganz Bayern – inklusive ${cityName}. Beratung und Umsetzung erfolgen remote; bei Bedarf sind Vor-Ort-Termine möglich.`,
    },
    {
      question: `Brauche ich SEO, wenn ich schon bei Google erscheine?`,
      answer: `Wenn Sie auf Seite 2 oder 3 stehen, verpassen Sie den Großteil der Klicks. Nur die Top-3-Positionen erhalten den Löwenanteil des Traffics. SEO hilft, systematisch aufzusteigen.`,
    },
    {
      question: `Was ist der Unterschied zwischen SEO und SEA?`,
      answer: `SEO (Suchmaschinenoptimierung) bringt organischen, unbezahlten Traffic. SEA (Suchmaschinenwerbung) sind bezahlte Anzeigen. Beide ergänzen sich – SEO wirkt langfristig und kosteneffizient.`,
    },
    {
      question: `Kann ich SEO selbst machen?`,
      answer: `Grundlagen ja – technisches SEO, Keyword-Strategie und Link-Building erfordern aber Erfahrung. Wir übernehmen die strategische und technische Umsetzung, Sie konzentrieren sich auf Ihr Business.`,
    },
  ]
}
