import type { Metadata } from 'next'
import Header from '@/components/Header'
import LeistungenHero from '@/components/LeistungenHero'
import LeistungenGrid from '@/components/LeistungenGrid'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ItemListSchema from '@/components/ItemListSchema'

export const metadata: Metadata = {
  title: { absolute: 'SEO Leistungen | Suchmaschinenoptimierung München & Bayern' },
  description:
    'Unsere SEO-Leistungen: Keyword-Recherche, Local SEO, Technisches SEO, Linkaufbau, OnPage-Optimierung und Reporting. Professionelle Suchmaschinenoptimierung für Unternehmen in München und Bayern.',
  openGraph: {
    title: 'SEO Leistungen | Suchmaschinenoptimierung München & Bayern',
    description:
      'Keyword-Recherche, Local SEO, Technisches SEO, Linkaufbau, OnPage-Optimierung und Reporting – alle Leistungen im Überblick.',
  },
}

export default function LeistungenPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Startseite', url: '/' },
        { name: 'Leistungen', url: '/leistungen' },
      ]} />
      <ItemListSchema />
      <Header />
      <main>
        <LeistungenHero />
        <LeistungenGrid />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
