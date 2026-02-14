import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllCitySlugs, getCityBySlug } from '@/lib/seo-data'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeatureGrid from '@/components/FeatureGrid'
import CityLinks from '@/components/CityLinks'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import CityFAQ from '@/components/CityFAQ'
import AppointmentCalendar from '@/components/AppointmentCalendar'
import FAQSchema from '@/components/FAQSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import type { Metadata } from 'next'

interface PageProps {
  params: { stadt: string }
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ stadt: slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getCityBySlug(params.stadt)
  if (!city) return {}

  const title = `SEO Agentur ${city.name} | Suchmaschinenoptimierung aus München`
  const description = `SEO Agentur für ${city.name}: Suchmaschinenoptimierung und Local SEO aus München. Mehr Sichtbarkeit bei Google für Unternehmen in ${city.name} und Umgebung.`

  return {
    title: { absolute: title },
    description,
    keywords: [
      `SEO Agentur ${city.name}`,
      `SEO ${city.name}`,
      `Suchmaschinenoptimierung ${city.name}`,
      'SEO Agentur München',
    ],
    openGraph: {
      title,
      description,
    },
  }
}

export default function CityPage({ params }: PageProps) {
  const city = getCityBySlug(params.stadt)
  if (!city) notFound()

  const headline = `SEO Agentur ${city.name}`
  const subheadline = `Suchmaschinenoptimierung für Unternehmen in ${city.name} und Umgebung. Als SEO Agentur mit Sitz in München betreuen wir Sie professionell – von Local SEO bis technischem SEO.`

  return (
    <>
      <FAQSchema cityName={city.name} />
      <BreadcrumbSchema items={[
        { name: 'Startseite', url: '/' },
        { name: 'Standorte', url: '/standorte' },
        { name: `SEO Agentur ${city.name}`, url: `/standorte/${city.slug}` },
      ]} />
      <LocalBusinessSchema
        name={`SEO Agentur ${city.name}`}
        city={city.name}
        description={`Professionelle Suchmaschinenoptimierung für ${city.name}. Local SEO, technisches SEO und SEO Beratung aus München für Unternehmen in ${city.name}.`}
      />
      <Header />
      <main>
        <Hero headline={headline} subheadline={subheadline} />

        <section className="py-20 px-6 bg-white scroll-mt-24">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Über die Stadt</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-zinc-900 mt-2 mb-8">
              {city.name} im Überblick
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              {city.cityAbout}
            </p>
            <ul className="mt-10 grid sm:grid-cols-2 gap-3">
              {city.facts.map((fact, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 px-6 bg-zinc-900">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent/80">Die Herausforderung</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-6">
              Was Unternehmen in {city.name} zu schlagen haben
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              {city.challenge}
            </p>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-b from-zinc-50 to-white">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Warum SEO</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-zinc-900 mt-2 mb-8">
              Warum Unternehmen in {city.name} SEO brauchen
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-10">
              {city.whySeoNeeded}
            </p>
            <div className="rounded-2xl bg-white p-8 border border-zinc-100 shadow-card">
              <h3 className="font-semibold text-zinc-900 mb-4">Unsere Leistungen für {city.name}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Local SEO & Google Business Profile', 'Technische Suchmaschinenoptimierung', 'Keyword-Strategie & Content', 'Backlink-Aufbau & Reputation'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FeatureGrid />

        <AppointmentCalendar cityName={city.name} />

        <CityFAQ cityName={city.name} />

        <nav className="py-12 px-6 bg-zinc-50/80" aria-label="Seitennavigation">
          <div className="mx-auto max-w-4xl flex flex-wrap gap-6">
            <Link href="#termin" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900">
              Termin buchen
            </Link>
            <Link href="#faq" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900">
              FAQ
            </Link>
            <Link href="/standorte" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Alle Standorte
            </Link>
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900">
              Startseite
            </Link>
            <Link href="#kontakt" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover">
              Kontakt
            </Link>
          </div>
        </nav>

        <CityLinks />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
