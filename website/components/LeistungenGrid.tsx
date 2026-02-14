'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { LEISTUNGEN, LEISTUNGEN_CONTENT } from '@/lib/leistungen-data'
import LeistungIcons from './LeistungIcons'

const colorStyles: Record<string, { icon: string; border: string; link: string; bullet: string }> = {
  blue: { icon: 'bg-blue-500/15 text-blue-600 group-hover:bg-blue-500 group-hover:text-white', border: 'border-blue-200 hover:border-blue-400', link: 'text-blue-600', bullet: 'bg-blue-500' },
  emerald: { icon: 'bg-emerald-500/15 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white', border: 'border-emerald-200 hover:border-emerald-400', link: 'text-emerald-600', bullet: 'bg-emerald-500' },
  violet: { icon: 'bg-violet-500/15 text-violet-600 group-hover:bg-violet-500 group-hover:text-white', border: 'border-violet-200 hover:border-violet-400', link: 'text-violet-600', bullet: 'bg-violet-500' },
  amber: { icon: 'bg-amber-500/15 text-amber-600 group-hover:bg-amber-500 group-hover:text-white', border: 'border-amber-200 hover:border-amber-400', link: 'text-amber-600', bullet: 'bg-amber-500' },
  rose: { icon: 'bg-rose-500/15 text-rose-600 group-hover:bg-rose-500 group-hover:text-white', border: 'border-rose-200 hover:border-rose-400', link: 'text-rose-600', bullet: 'bg-rose-500' },
  cyan: { icon: 'bg-cyan-500/15 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white', border: 'border-cyan-200 hover:border-cyan-400', link: 'text-cyan-600', bullet: 'bg-cyan-500' },
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function LeistungenGrid() {
  return (
    <section
      id="leistungen"
      className="py-24 px-6 relative overflow-hidden"
      aria-labelledby="leistungen-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50/50 to-blue-50/30" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 id="leistungen-heading" className="text-3xl sm:text-4xl font-bold text-zinc-900">
            Unsere SEO-Leistungen im Überblick
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Von der Keyword-Recherche bis zum Reporting: Wir bieten die Leistungen,
            die Ihr Unternehmen für mehr Sichtbarkeit bei Google braucht.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {LEISTUNGEN.map((leistung) => {
            const colors = colorStyles[leistung.color] || colorStyles.blue
            const content = LEISTUNGEN_CONTENT[leistung.slug]
            const benefits = content?.benefits?.slice(0, 3) ?? []
            return (
              <motion.article
                key={leistung.slug}
                id={leistung.slug}
                variants={item}
                className="group scroll-mt-28"
              >
                <Link
                  href={`/leistungen/${leistung.slug}`}
                  className={`flex flex-col h-full rounded-3xl bg-white p-8 shadow-md border-2 ${colors.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
                >
                  <span className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colors.icon} transition-all duration-300 mb-6 shrink-0`}>
                    <LeistungIcons icon={leistung.icon} className="w-8 h-8" />
                  </span>
                  <h3 className="text-xl font-bold text-zinc-900 group-hover:text-zinc-800 transition-colors shrink-0">
                    {leistung.title}
                  </h3>
                  <p className="mt-3 text-zinc-600 text-sm leading-relaxed shrink-0">
                    {leistung.shortDescription}
                  </p>
                  <div className="mt-4 flex-1 min-h-0">
                    <div className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[140px] transition-all duration-300 ease-out">
                      <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Im Überblick:</p>
                      <ul className="space-y-1.5">
                        {benefits.map((b) => (
                          <li key={b.title} className="flex items-start gap-2 text-sm text-zinc-600">
                            <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${colors.bullet}`} />
                            <span>{b.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <span className={`mt-6 inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all shrink-0 ${colors.link}`}>
                    Mehr erfahren
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
