import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: { absolute: 'Blog | SEO Agentur München' },
  description: 'SEO-Tipps, Branchen-Insights und Best Practices für Suchmaschinenoptimierung.',
}

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Startseite', url: '/' },
        { name: 'Blog', url: '/blog' },
      ]} />
      <Header />
      <main className="min-h-[70vh] flex flex-col items-center justify-center px-6 pt-32 pb-24">
        <div className="text-center max-w-md">
          <span className="inline-block text-6xl mb-6">📝</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900">Blog</h1>
          <p className="mt-4 text-zinc-600">
            Hier erscheinen bald SEO-Tipps, Branchen-Insights und Best Practices für Ihre Sichtbarkeit bei Google.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-5 py-2.5 text-sm font-semibold text-indigo-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Coming Soon
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
