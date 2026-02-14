'use client'

import { motion } from 'framer-motion'
import { GradientBlobs, GridPattern } from './ModernGraphics'

const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: '93 % der Online-Erlebnisse starten bei Google',
    text: 'Nutzer finden Produkte und Dienstleister zuerst über die Suchmaschine. Ohne gute Rankings bleiben Sie unsichtbar.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Organischer Traffic kostet keinen Klick',
    text: 'Im Gegensatz zu bezahlter Werbung zahlen Sie pro Besucher nichts – nachhaltige Sichtbarkeit ohne laufende Anzeigenkosten.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: 'Zielgerichtete Besucher mit Kaufabsicht',
    text: 'Nutzer, die gezielt suchen, sind näher am Kaufentscheid. SEO bringt qualifizierte Leads – keine Streuverluste.',
  },
]

export default function WhySeoSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white">
      <GradientBlobs />
      <GridPattern />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Warum SEO?</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mt-2">
            Warum Suchmaschinenoptimierung für Ihr Unternehmen entscheidend ist
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            SEO ist keine Option mehr – es ist die Grundlage für Sichtbarkeit, Vertrauen und nachhaltigen Geschäftserfolg im digitalen Raum.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl bg-white/80 backdrop-blur-sm p-8 border border-zinc-100 shadow-sm hover:shadow-xl hover:border-accent/20 hover:bg-white transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 text-accent group-hover:from-accent group-hover:to-accent-hover group-hover:text-white transition-all duration-300 mb-6">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">{item.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
