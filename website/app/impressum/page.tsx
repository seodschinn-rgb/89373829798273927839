import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: { absolute: 'Impressum | SEO Agentur München' },
  description: 'Impressum und rechtliche Angaben der SEO Agentur München.',
}

export default function ImpressumPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Startseite', url: '/' },
        { name: 'Impressum', url: '/impressum' },
      ]} />
      <Header />
      <main className="pt-28 pb-24 px-6">
        <article className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold text-zinc-900">Impressum</h1>
          <p className="mt-2 text-zinc-500 text-sm">Angaben gemäß § 5 TMG</p>

          <section className="mt-10 space-y-8 text-zinc-700">
            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-2">Anbieter</h2>
              <p className="font-medium">Venus Management GbR</p>
              <p>Kevin Ringsdorf</p>
              <p>Ulmenweg 15</p>
              <p>51766 Engelskirchen</p>
              <p>Deutschland</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-2">Kontakt</h2>
              <p>E-Mail: info@seomuenchen.com</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-2">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz wird bei Bedarf nachgeliefert.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-2">Verantwortlich für den Inhalt</h2>
              <p>Kevin Ringsdorf, Venus Management GbR</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-2">Streitschlichtung</h2>
              <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">https://ec.europa.eu/consumers/odr/</a></p>
              <p className="mt-2">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-2">Haftung für Inhalte</h2>
              <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-2">Haftung für Links</h2>
              <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-2">Urheberrecht</h2>
              <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.</p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
