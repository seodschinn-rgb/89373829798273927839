import { getCityFAQs } from '@/lib/faq-data'

interface FAQSchemaProps {
  cityName: string
}

export default function FAQSchema({ cityName }: FAQSchemaProps) {
  const faqs = getCityFAQs(cityName)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
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
