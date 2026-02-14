import type { Metadata } from 'next'
import Header from '@/components/Header'
import StandorteList from '@/components/StandorteList'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: { absolute: 'Standorte | SEO aus München für ganz Bayern' },
  description:
    'Unsere Standorte: Von München aus betreuen wir Unternehmen in Garching, Starnberg, Freising, Augsburg, Regensburg und vielen weiteren Städten in Bayern. SEO und Local SEO für ganz Bayern.',
  openGraph: {
    title: 'Standorte | SEO aus München für ganz Bayern',
    description:
      'Von München aus betreuen wir Unternehmen in Garching, Starnberg, Freising, Augsburg und vielen weiteren Städten in Bayern.',
  },
}

export default function StandortePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Startseite', url: '/' },
        { name: 'Standorte', url: '/standorte' },
      ]} />
      <Header />
      <main>
        <section className="pt-32 pb-12 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900">
              Standorte
            </h1>
            <p className="mt-6 text-lg text-zinc-600">
              Mit Sitz in München unterstützen wir Unternehmen in ganz Bayern bei
              Suchmaschinenoptimierung und Local SEO. Wählen Sie Ihren Ort.
            </p>
          </div>
        </section>
        <StandorteList />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
