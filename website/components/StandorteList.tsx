'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CITIES } from '@/lib/seo-data'

const MUENCHEN = {
  name: 'München',
  slug: '',
  region: 'Kreisfreie Stadt, Oberbayern',
  highlight: 'Landeshauptstadt Bayerns. Hauptstandort unserer SEO Agentur. Metropolregion mit über 1,5 Mio. Einwohnern.',
  economy: 'Wirtschafts- und Technologiezentrum, zahlreiche DAX-Unternehmen, starker Mittelstand.',
  population: 1500000,
}

export default function StandorteList() {
  return (
    <section
      className="py-16 px-6"
      aria-labelledby="standorte-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 id="standorte-heading" className="sr-only">
            Alle Standorte in Bayern
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/"
              className="group block h-full rounded-xl border-2 border-accent/30 bg-accent/5 p-6 transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:shadow-card-hover"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-accent mb-1">Hauptstandort</p>
                  <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-accent-hover transition-colors">
                    München
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 line-clamp-2">{MUENCHEN.highlight}</p>
                  <p className="mt-3 text-xs text-zinc-400">ca. 1,5 Mio. Einwohner</p>
                </div>
                <span className="shrink-0 text-accent">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </motion.article>
          {CITIES.map((city, i) => (
            <motion.article
              key={city.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (i + 1) * 0.03 }}
            >
              <Link
                href={`/standorte/${city.slug}`}
                className="group block h-full rounded-2xl border border-zinc-200/80 bg-white p-6 transition-all duration-300 hover:border-zinc-300 hover:bg-zinc-50/50 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-1">
                      {city.region}
                    </p>
                    <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                      {city.name}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 line-clamp-2">
                      {city.highlight}
                    </p>
                    <p className="mt-3 text-xs text-zinc-400">
                      {city.population.toLocaleString('de-DE')} Einwohner
                    </p>
                  </div>
                  <span className="shrink-0 text-zinc-300 group-hover:text-zinc-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zur Startseite
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
