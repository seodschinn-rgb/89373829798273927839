import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import {
  getLeistungBySlug,
  getLeistungContent,
  getAllLeistungSlugs,
} from '@/lib/leistungen-data'
import LeistungIcons from '@/components/LeistungIcons'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ServiceSchema from '@/components/ServiceSchema'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllLeistungSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const content = getLeistungContent(params.slug)
  if (!content) return { title: 'Leistung' }
  return {
    title: { absolute: `${content.title} | SEO Agentur München` },
    description: content.metaDescription,
    openGraph: {
      title: `${content.title} | SEO Agentur München`,
      description: content.metaDescription,
    },
  }
}

export default function LeistungPage({ params }: PageProps) {
  const leistung = getLeistungBySlug(params.slug)
  const content = getLeistungContent(params.slug)

  if (!leistung || !content) notFound()

  const breadcrumbItems = [
    { name: 'Startseite', url: '/' },
    { name: 'Leistungen', url: '/leistungen' },
    { name: content.title, url: `/leistungen/${params.slug}` },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name={content.title}
        description={content.intro}
        url={`/leistungen/${params.slug}`}
      />
      <Header />
      <main>
        {/* Hero mit Gradient */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-accent/10" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent opacity-50" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          <div className="relative mx-auto max-w-4xl text-center">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-accent transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Zurück zu allen Leistungen
            </Link>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-hover text-white shadow-xl shadow-accent/25 mb-8">
              <LeistungIcons icon={leistung.icon} className="w-8 h-8" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900">
              {content.title}
            </h1>
            <p className="mt-4 text-xl text-accent font-semibold">{content.heroSubline}</p>
            <p className="mt-6 text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              {content.intro}
            </p>
          </div>
        </section>

        {/* Benefits - Bento-Grid Style */}
        <section className="py-24 px-6 bg-zinc-50/50">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 text-center mb-16">
              Was Sie davon haben
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl bg-white p-8 shadow-sm border border-zinc-100 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
                >
                  <span className="absolute top-6 right-6 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-zinc-900 pr-12">{benefit.title}</h3>
                  <p className="mt-3 text-zinc-600 text-sm leading-relaxed">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 text-center mb-16">
              So arbeiten wir
            </h2>
            <div className="space-y-8">
              {content.process.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-8 items-start p-8 rounded-2xl bg-white border border-zinc-100 hover:border-accent/20 hover:shadow-lg transition-all duration-300"
                >
                  <span className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-hover text-white font-bold text-lg flex items-center justify-center shadow-lg shadow-accent/25">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900">{item.title}</h3>
                    <p className="mt-2 text-zinc-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-gradient-to-br from-zinc-900 to-zinc-800">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {content.ctaHeadline}
            </h2>
            <p className="mt-4 text-zinc-400">
              Wir melden uns innerhalb von 24 Stunden und besprechen mit Ihnen die nächsten Schritte.
            </p>
            <Link
              href="/#kontakt"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-all duration-200 shadow-xl shadow-accent/25 hover:shadow-accent/40"
            >
              {content.ctaText}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
