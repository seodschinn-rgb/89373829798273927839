'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { GradientBlobs } from './ModernGraphics'

const GoogleSearchAnimation = dynamic(() => import('./GoogleSearchAnimation'), {
  ssr: true,
  loading: () => <div className="w-full max-w-2xl h-[280px] rounded-2xl bg-zinc-100/50 animate-pulse" />,
})

interface HeroProps {
  headline?: string
  subheadline?: string
  showCTA?: boolean
  showSearchAnimation?: boolean
}

const defaultProps = {
  headline: 'SEO Agentur München',
  subheadline:
    'Suchmaschinenoptimierung für Unternehmen in Bayern. Mehr Sichtbarkeit bei Google, mehr Kunden – mit messbarem Erfolg.',
  showCTA: true,
  showSearchAnimation: false,
}

export default function Hero({
  headline = defaultProps.headline,
  subheadline = defaultProps.subheadline,
  showCTA = defaultProps.showCTA,
  showSearchAnimation = defaultProps.showSearchAnimation,
}: HeroProps) {
  return (
    <section
      className="relative min-h-[95vh] flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {showSearchAnimation && (
        <>
          <GradientBlobs />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </>
      )}
      <div className="relative mx-auto max-w-6xl w-full">
        {showSearchAnimation ? (
          <>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-12">
              <div className="flex-1 lg:max-w-xl">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-1.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 mb-6"
                >
                  #1 SEO Agentur München
                </motion.span>
                <motion.h1
                  id="hero-heading"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
                >
                  <span className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-clip-text text-transparent">
                    {headline}
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-6 text-lg text-zinc-600"
                >
                  {subheadline}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100/80 px-4 py-2 text-sm text-zinc-700 ring-1 ring-zinc-200/60 backdrop-blur-sm">
                    <span className="inline-flex h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                    47+ Unternehmen vertrauen uns
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm text-zinc-800 ring-1 ring-accent/20">
                    <span className="font-bold text-accent">+312%</span> mehr Traffic
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm text-zinc-700 ring-1 ring-amber-200/60">
                    <span className="font-semibold text-zinc-900">Erste Seite Google</span> in 3–6 Monaten
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100/80 px-4 py-2 text-sm text-zinc-700 ring-1 ring-zinc-200/60">
                    <span className="font-bold text-accent">100+</span> Projekte abgeschlossen
                  </span>
                </motion.div>
                {showCTA && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 flex flex-col sm:flex-row gap-4"
                  >
                    <motion.a
                      href="/kontakt"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-200"
                    >
                      Kostenloses SEO-Gespräch
                    </motion.a>
                    <motion.a
                      href="/leistungen"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center rounded-2xl border-2 border-zinc-200 bg-white/80 backdrop-blur-sm px-8 py-4 text-base font-semibold text-zinc-900 hover:border-zinc-300 hover:bg-white transition-all duration-200"
                    >
                      Unsere Leistungen
                    </motion.a>
                  </motion.div>
                )}
              </div>
              <div className="mt-10 lg:mt-0 lg:shrink-0 lg:w-[420px]">
                <GoogleSearchAnimation />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="text-center">
              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-900 leading-[1.1] tracking-tight"
              >
                {headline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed"
              >
                {subheadline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-8 flex flex-wrap justify-center gap-3"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100/80 px-4 py-2 text-sm text-zinc-700 ring-1 ring-zinc-200/60 backdrop-blur-sm">
                  <span className="inline-flex h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                  47+ Unternehmen vertrauen uns
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm text-zinc-800 ring-1 ring-accent/20">
                  <span className="font-bold text-accent">+312%</span> mehr Traffic
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm text-zinc-700 ring-1 ring-amber-200/60">
                  <span className="font-semibold text-zinc-900">Erste Seite Google</span> in 3–6 Monaten
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100/80 px-4 py-2 text-sm text-zinc-700 ring-1 ring-zinc-200/60">
                  <span className="font-bold text-accent">100+</span> Projekte abgeschlossen
                </span>
              </motion.div>

              {showCTA && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
                  className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <motion.a
                    href="/kontakt"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-all duration-200 shadow-card hover:shadow-card-hover"
                  >
                    Kostenloses SEO-Gespräch
                  </motion.a>
                  <motion.a
                    href="/leistungen"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center rounded-lg border-2 border-zinc-200 bg-white px-8 py-4 text-base font-semibold text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50 transition-colors duration-200"
                  >
                    Unsere Leistungen
                  </motion.a>
                </motion.div>
              )}
            </div>
          </>
        )}
      </div>

      {!showSearchAnimation && (
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-8 h-12 rounded-full border-2 border-zinc-300 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 rounded-full bg-zinc-400"
          />
        </motion.div>
      </div>
      )}
    </section>
  )
}
