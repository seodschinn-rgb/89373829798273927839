'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CITIES } from '@/lib/seo-data'

export default function CityLinks() {
  return (
    <section
      id="orte"
      className="py-24 px-6 relative overflow-hidden"
      aria-labelledby="city-links-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-zinc-50/80" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Standorte</span>
          <h2 id="city-links-heading" className="text-3xl sm:text-4xl font-bold text-zinc-900 mt-2">
            Für ganz Bayern
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Suchmaschinenoptimierung und Local SEO aus München für Unternehmen in
            Garching, Starnberg, Augsburg, Freising und vielen weiteren Städten.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <Link
            href="/"
            className="rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all"
          >
            München
          </Link>
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/standorte/${city.slug}`}
              className="rounded-2xl border-2 border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-700 shadow-sm hover:border-blue-200 hover:shadow-md hover:text-zinc-900 transition-all duration-200"
            >
              {city.name}
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-center"
        >
          <Link
            href="/standorte"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-blue-600 transition-colors"
          >
            Alle Standorte anzeigen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
