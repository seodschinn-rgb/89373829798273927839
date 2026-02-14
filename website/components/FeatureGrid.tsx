'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { LEISTUNGEN, LEISTUNGEN_CONTENT } from '@/lib/leistungen-data'
import LeistungIcons from './LeistungIcons'

const homepageLeistungen = LEISTUNGEN.slice(0, 4)

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function FeatureGrid() {
  return (
    <section
      id="leistungen"
      className="py-24 px-6 relative overflow-hidden"
      aria-labelledby="features-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50/60 to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-400/10 rounded-full blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Leistungen</span>
          <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold text-zinc-900 mt-2">
            Suchmaschinenoptimierung München – Ihre Vorteile
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Von der SEO Beratung bis zur Umsetzung: Wir kombinieren strategisches
            Denken mit technischer Expertise für nachhaltige Rankings.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {homepageLeistungen.map((leistung) => {
            const content = LEISTUNGEN_CONTENT[leistung.slug]
            const benefits = content?.benefits?.slice(0, 2) ?? []
            const colorMap: Record<string, string> = {
              blue: 'from-blue-500/15 to-violet-500/10 text-blue-600 group-hover:from-blue-500 group-hover:to-violet-500',
              emerald: 'from-emerald-500/15 to-teal-500/10 text-emerald-600 group-hover:from-emerald-500 group-hover:to-teal-500',
              violet: 'from-violet-500/15 to-purple-500/10 text-violet-600 group-hover:from-violet-500 group-hover:to-purple-500',
              amber: 'from-amber-500/15 to-orange-500/10 text-amber-600 group-hover:from-amber-500 group-hover:to-orange-500',
            }
            const colors = colorMap[leistung.color] || colorMap.blue
            return (
              <motion.article
                key={leistung.slug}
                variants={item}
                className="group"
              >
                <Link
                  href={`/leistungen/${leistung.slug}`}
                  className="block h-full rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg shadow-zinc-200/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-zinc-100/80 hover:border-blue-200 hover:-translate-y-1"
                >
                  <div className={`mb-5 w-12 h-12 rounded-2xl bg-gradient-to-br ${colors} group-hover:text-white flex items-center justify-center transition-all duration-300`}>
                    <LeistungIcons icon={leistung.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                    {leistung.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {leistung.shortDescription}
                  </p>
                  {benefits.length > 0 && (
                    <div className="mt-4 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[100px] transition-all duration-300 ease-out">
                      <ul className="space-y-1">
                        {benefits.map((b) => (
                          <li key={b.title} className="flex items-center gap-2 text-xs text-zinc-500">
                            <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                            {b.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Link>
              </motion.article>
            )
          })}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 rounded-2xl bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-200 hover:text-zinc-900 transition-all"
          >
            Alle Leistungen im Detail
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
