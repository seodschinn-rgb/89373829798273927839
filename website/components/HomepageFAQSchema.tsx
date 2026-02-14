const faqs = [
  {
    q: 'Was kostet eine SEO Agentur in München?',
    a: 'Die Kosten variieren je nach Umfang: von einer einmaligen SEO-Beratung bis zur monatlichen Full-Service-Betreuung. Wir bieten transparente Pakete – im kostenlosen Erstgespräch klären wir Ihren Bedarf und erstellen ein passendes Angebot.',
  },
  {
    q: 'Wie lange dauert es, bis SEO wirkt?',
    a: 'Erste Verbesserungen zeigen sich meist nach 3–6 Monaten. Nachhaltige Top-10-Rankings für wettbewerbsstarke Keywords benötigen oft 6–12 Monate. Wir setzen auf langfristige Strategien statt kurzfristiger Tricks.',
  },
  {
    q: 'Was ist der Unterschied zwischen SEO und SEA?',
    a: 'SEO (Suchmaschinenoptimierung) bringt organischen, unbezahlten Traffic. SEA sind bezahlte Anzeigen bei Google. SEO wirkt langfristig und kosteneffizient – Sie zahlen keinen Cent pro Klick.',
  },
  {
    q: 'Betreut ihr auch Unternehmen außerhalb von München?',
    a: 'Ja. Von München aus betreuen wir Kunden in ganz Bayern – Garching, Starnberg, Freising, Augsburg, Regensburg und viele weitere Städte. Beratung und Umsetzung erfolgen remote; Vor-Ort-Termine sind bei Bedarf möglich.',
  },
  {
    q: 'Brauche ich Local SEO oder klassisches SEO?',
    a: 'Das hängt von Ihrem Geschäftsmodell ab: Lokale Unternehmen (Handwerk, Gastronomie, Ärzte) profitieren stark von Local SEO und Google Business Profile. E-Commerce oder überregionale Dienstleister brauchen eher klassisches SEO mit Fokus auf Keywords und technische Optimierung.',
  },
]

export default function HomepageFAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
