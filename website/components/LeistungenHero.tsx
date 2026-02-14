'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { LEISTUNGEN } from '@/lib/leistungen-data'
import LeistungIcons from './LeistungIcons'

const colorClasses: Record<string, string> = {
  blue: 'bg-blue-500/15 text-blue-600 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500',
  emerald: 'bg-emerald-500/15 text-emerald-600 border-emerald-200 hover:bg-emerald-500 hover:text-white hover:border-emerald-500',
  violet: 'bg-violet-500/15 text-violet-600 border-violet-200 hover:bg-violet-500 hover:text-white hover:border-violet-500',
  amber: 'bg-amber-500/15 text-amber-600 border-amber-200 hover:bg-amber-500 hover:text-white hover:border-amber-500',
  rose: 'bg-rose-500/15 text-rose-600 border-rose-200 hover:bg-rose-500 hover:text-white hover:border-rose-500',
  cyan: 'bg-cyan-500/15 text-cyan-600 border-cyan-200 hover:bg-cyan-500 hover:text-white hover:border-cyan-500',
}

export default function LeistungenHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Bunter Hintergrund */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-emerald-50/60" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-violet-300/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-amber-300/15 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-200/10 via-transparent to-rose-200/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* Logos / Service-Icons ganz oben */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
        >
          {LEISTUNGEN.map((leistung, i) => (
            <motion.div
              key={leistung.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 + 0.2 }}
            >
              <Link
                href={`#${leistung.slug}`}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl border-2 transition-all duration-300 ${colorClasses[leistung.color]}`}
              >
                <span className="w-8 h-8 rounded-lg bg-white/50 flex items-center justify-center shrink-0">
                  <LeistungIcons icon={leistung.icon} className="w-4 h-4" />
                </span>
                <span className="text-sm font-semibold">{leistung.title}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white text-sm font-semibold mb-6">
            Unsere Leistungen
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-clip-text text-transparent">
              SEO Leistungen
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Von der Keyword-Recherche bis zum technischen SEO: Wir bieten
            ganzheitliche Suchmaschinenoptimierung für Unternehmen in München
            und ganz Bayern.
          </p>
          <Link
            href="/kontakt"
            className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-200"
          >
            Kostenloses SEO-Gespräch
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
