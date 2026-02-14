const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'

interface LocalBusinessSchemaProps {
  name?: string
  city?: string
  description?: string
}

export default function LocalBusinessSchema({
  name = 'SEO Agentur München',
  city = 'München',
  description = 'Professionelle Suchmaschinenoptimierung und Local SEO für Unternehmen in München und Bayern.',
}: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: 'Bayern',
      addressCountry: 'DE',
    },
    areaServed: [
      'München',
      'Garching',
      'Starnberg',
      'Freising',
      'Augsburg',
      'Bayern',
    ],
    serviceType: [
      'Suchmaschinenoptimierung',
      'SEO Beratung',
      'Local SEO',
      'Technisches SEO',
    ],
    url: SITE_URL,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
