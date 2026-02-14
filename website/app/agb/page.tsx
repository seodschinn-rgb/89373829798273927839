import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: { absolute: 'AGB | SEO Agentur München' },
  description: 'Allgemeine Geschäftsbedingungen der SEO Agentur München.',
}

export default function AGBPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Startseite', url: '/' },
        { name: 'AGB', url: '/agb' },
      ]} />
      <Header />
      <main className="pt-28 pb-24 px-6">
        <article className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold text-zinc-900">Allgemeine Geschäftsbedingungen</h1>
          <p className="mt-2 text-zinc-500 text-sm">AGB der Venus Management GbR</p>

          <section className="mt-10 space-y-8 text-zinc-700 prose prose-zinc max-w-none">
            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-2">§ 1 Geltungsbereich</h2>
              <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen Venus Management GbR (Kevin Ringsdorf) und dem Kunden über SEO-Dienstleistungen.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-2">§ 2 Vertragsschluss</h2>
              <p>Der Vertrag kommt durch schriftliche Auftragsbestätigung durch Venus Management GbR zustande.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-2">§ 3 Leistungsumfang</h2>
              <p>Der Leistungsumfang ergibt sich aus dem individuellen Angebot bzw. der Auftragsbestätigung.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-2">§ 4 Vergütung und Zahlung</h2>
              <p>Die Vergütung richtet sich nach dem jeweiligen Angebot. Rechnungen sind innerhalb von 14 Tagen ohne Abzug zahlbar.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-2">§ 5 Laufzeit und Kündigung</h2>
              <p>Bei laufenden Verträgen gelten die vereinbarten Laufzeiten. Die Kündigungsfrist beträgt mindestens einen Monat zum Monatsende.</p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
