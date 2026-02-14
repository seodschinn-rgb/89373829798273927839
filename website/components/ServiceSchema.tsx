const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seomuenchen.com'

interface ServiceSchemaProps {
  name: string
  description: string
  url: string
}

export default function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'SEO Agentur München',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'München',
        addressRegion: 'Bayern',
        addressCountry: 'DE',
      },
    },
    areaServed: {
      '@type': 'State',
      name: 'Bayern',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
