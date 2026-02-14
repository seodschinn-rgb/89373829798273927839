import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: { absolute: 'Datenschutz | SEO Agentur München' },
  description: 'Datenschutzerklärung der SEO Agentur München.',
}

export default function DatenschutzPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Startseite', url: '/' },
        { name: 'Datenschutz', url: '/datenschutz' },
      ]} />
      <Header />
      <main className="pt-28 pb-24 px-6">
        <article className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold text-zinc-900">Datenschutzerklärung</h1>
          <p className="mt-2 text-zinc-500 text-sm">Angaben zum Datenschutz gemäß DSGVO</p>

          <section className="mt-10 space-y-8 text-zinc-700 prose prose-zinc max-w-none">
            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-2">1. Verantwortlicher</h2>
              <p>Venus Management GbR, Kevin Ringsdorf<br />E-Mail: info@seomuenchen.com</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-2">2. Erhebung und Speicherung personenbezogener Daten</h2>
              <p>Beim Besuch unserer Website werden durch den Browser Ihres Endgeräts automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-2">3. Kontaktformular</h2>
              <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-2">4. Ihre Rechte</h2>
              <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Sie können sich bei Beschwerden an eine Datenschutz-Aufsichtsbehörde wenden.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-2">5. SSL-Verschlüsselung</h2>
              <p>Diese Seite nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung.</p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
