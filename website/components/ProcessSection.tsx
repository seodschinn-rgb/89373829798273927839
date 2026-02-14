'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const steps = [
  { num: '01', title: 'Analyse & Strategie', desc: 'Wir prüfen Ihre Website, Ihre Konkurrenz und definieren Ziele.' },
  { num: '02', title: 'Keyword-Recherche', desc: 'Die richtigen Suchbegriffe für Ihre Zielgruppe.' },
  { num: '03', title: 'Technik & OnPage', desc: 'Optimierung von Struktur, Geschwindigkeit und Inhalten.' },
  { num: '04', title: 'Monitoring & Skalierung', desc: 'Regelmäßige Auswertung und Ausbau der Erfolge.' },
]

export default function ProcessSection() {
  return (
    <section className="py-24 px-6 bg-zinc-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent/90">So arbeiten wir</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Unser SEO-Prozess in vier Schritten
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Transparent, strukturiert und mit Fokus auf messbare Ergebnisse – von der ersten Analyse bis zum nachhaltigen Ranking.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="rounded-2xl border border-zinc-700/50 bg-zinc-800/50 p-8 hover:border-accent/40 hover:bg-zinc-800/80 transition-all duration-300">
                <span className="text-4xl font-bold text-accent/40">{step.num}</span>
                <h3 className="text-xl font-semibold mt-4 mb-3">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-zinc-600" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-colors"
          >
            Alle Leistungen im Detail
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
