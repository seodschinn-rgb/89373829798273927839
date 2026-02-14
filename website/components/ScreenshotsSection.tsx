'use client'

import { motion } from 'framer-motion'
import { SeoRankingVisual } from './ModernGraphics'

const metrics = [
  {
    value: '+312%',
    label: 'Mehr Traffic',
    desc: 'Durchschnittliche Steigerung',
    icon: 'trend',
  },
  {
    value: 'Erste Seite',
    label: 'bei Google',
    desc: 'typisch in 3–6 Monaten erreichbar',
    icon: 'rank',
  },
  {
    value: '47+',
    label: 'Unternehmen',
    desc: 'vertrauen uns',
    icon: 'trust',
  },
  {
    value: '100+',
    label: 'Projekte',
    desc: 'erfolgreich umgesetzt',
    icon: 'done',
  },
]

export default function ScreenshotsSection() {
  return (
    <section
      id="referenzen"
      className="py-24 px-6 relative overflow-hidden"
      aria-labelledby="screenshots-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-300/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-300/15 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Erfolge</span>
          <h2 id="screenshots-heading" className="text-3xl sm:text-4xl font-bold text-zinc-900 mt-2">
            Messbare Erfolge durch SEO
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Unsere Ziele für Ihre Sichtbarkeit: Mehr Traffic, bessere Rankings und
            eine starke lokale Präsenz in München und Bayern.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative max-w-2xl mx-auto"
        >
          {/* Glasmorphism Card mit Gradient-Border */}
          <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-blue-400/40 via-violet-400/30 to-emerald-400/30 shadow-2xl shadow-blue-500/10">
            <div className="rounded-3xl bg-white/95 backdrop-blur-xl overflow-hidden">
              <div className="flex items-center gap-2 px-8 pt-6 pb-4 border-b border-zinc-100">
                <span className="w-3 h-3 rounded-full bg-red-400 shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-amber-400 shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm" />
                <span className="ml-3 text-zinc-500 text-sm font-medium">Live Ranking-Entwicklung</span>
              </div>
              <div className="p-8 sm:p-10">
                <SeoRankingVisual />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i }}
              className={`relative rounded-2xl backdrop-blur-sm p-6 text-left overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${
                m.icon === 'rank' ? 'bg-gradient-to-br from-indigo-50/80 to-violet-50/60 ring-1 ring-indigo-100' : 'bg-white/90'
              }`}
              style={{
                boxShadow: m.icon === 'rank'
                  ? '0 4px 24px -4px rgba(99, 102, 241, 0.15), 0 0 0 1px rgba(99, 102, 241, 0.08)'
                  : '0 4px 24px -4px rgba(99, 102, 241, 0.08), 0 0 0 1px rgba(99, 102, 241, 0.04)',
              }}
            >
              {/* Dezenter Gradient-Akzent passend zur Grafik */}
              <div
                className="absolute inset-x-0 top-0 h-[2px] opacity-80 group-hover:opacity-100 transition-opacity rounded-t-2xl"
                style={{
                  background: 'linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6)',
                }}
              />
              {m.icon === 'rank' && (
                <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider text-indigo-600/80">
                  Unser Ziel
                </span>
              )}
              {/* Individuelle Icons */}
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-violet-50 text-indigo-600">
                {m.icon === 'trend' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path d="M3 17l6-6 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 7h7v7" strokeLinecap="round" />
                  </svg>
                )}
                {m.icon === 'rank' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path d="M7 17V9M12 17V5M17 17v-4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 20h16" strokeLinecap="round" />
                  </svg>
                )}
                {m.icon === 'trust' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {m.icon === 'done' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <p
                className="text-2xl sm:text-3xl font-bold tabular-nums"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #6366f1, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {m.value}
              </p>
              <p className="text-sm font-semibold text-zinc-800 mt-0.5">{m.label}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{m.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
