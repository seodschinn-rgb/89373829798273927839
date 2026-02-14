const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'

interface Item {
  name: string
  url: string
  description: string
}

interface ItemListSchemaProps {
  name?: string
  description?: string
  items?: Item[]
}

const DEFAULT_ITEMS: Item[] = [
  { name: 'Keyword-Recherche', url: '/leistungen/keyword-recherche', description: 'Zielgruppenorientierte Keyword-Analyse für maximalen Traffic.' },
  { name: 'Local SEO', url: '/leistungen/local-seo', description: 'Google Business Profile und Maps-Optimierung für München und Bayern.' },
  { name: 'Technisches SEO', url: '/leistungen/technisches-seo', description: 'Core Web Vitals, Indexierung und technische Grundlagen.' },
  { name: 'Reporting & KPIs', url: '/leistungen/reporting-kpis', description: 'Transparente Erfolgsmessung mit klaren Kennzahlen.' },
  { name: 'Linkaufbau', url: '/leistungen/linkaufbau', description: 'Strategischer Aufbau hochwertiger Backlinks.' },
  { name: 'OnPage-Optimierung', url: '/leistungen/onpage-optimierung', description: 'Content-Strategien, Meta-Daten und interne Verlinkung.' },
]

export default function ItemListSchema({
  name = 'SEO Leistungen',
  description = 'Unsere SEO-Leistungen für Unternehmen in München und Bayern.',
  items = DEFAULT_ITEMS,
}: ItemListSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: item.name,
        description: item.description,
        url: `${SITE_URL}${item.url}`,
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
