'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const INITIAL_RESULTS = [
  { domain: 'seokratie.de', title: 'SEO Agentur München | Seokratie', position: 1 },
  { domain: 'timospecht.de', title: 'SEO Agentur München - Timo Specht', position: 2 },
  { domain: 'jsh.marketing', title: 'SEO Agentur München | JSH Marketing', position: 3 },
  { domain: 'netzbekannt.de', title: 'SEO Agentur München - Netzbekannt', position: 4 },
  { domain: 'suchhelden.de', title: 'SEO Agentur München - Suchhelden', position: 5 },
  { domain: 'ithelps-digital.com', title: 'SEO Agentur München | ithelps', position: 6 },
  { domain: 'seomuenchen.com', title: 'SEO Agentur München | Suchmaschinenoptimierung', position: 7, highlight: true },
]

const FINAL_RESULTS = [
  { domain: 'seomuenchen.com', title: 'SEO Agentur München | Suchmaschinenoptimierung', position: 1, highlight: true },
  { domain: 'seokratie.de', title: 'SEO Agentur München | Seokratie', position: 2 },
  { domain: 'timospecht.de', title: 'SEO Agentur München - Timo Specht', position: 3 },
  { domain: 'jsh.marketing', title: 'SEO Agentur München | JSH Marketing', position: 4 },
  { domain: 'netzbekannt.de', title: 'SEO Agentur München - Netzbekannt', position: 5 },
]

export default function GoogleSearchAnimation() {
  const [searchText, setSearchText] = useState('')
  const [phase, setPhase] = useState<'typing' | 'searching' | 'results' | 'ranking'>('typing')
  const [displayResults, setDisplayResults] = useState(INITIAL_RESULTS)
  const fullText = 'SEO Agentur München'

  useEffect(() => {
    const timer = setTimeout(() => {
      if (phase === 'typing' && searchText.length < fullText.length) {
        setSearchText(fullText.slice(0, searchText.length + 1))
      } else if (phase === 'typing') {
        setPhase('searching')
      }
    }, 80)
    return () => clearTimeout(timer)
  }, [searchText, phase])

  useEffect(() => {
    if (phase === 'searching') {
      const timer = setTimeout(() => {
        setPhase('results')
        setDisplayResults(INITIAL_RESULTS)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'results') {
      const timer = setTimeout(() => {
        setPhase('ranking')
        setDisplayResults(FINAL_RESULTS)
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [phase])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="rounded-2xl bg-white border border-zinc-200 shadow-xl overflow-hidden">
        {/* Google-like header */}
        <div className="flex items-center gap-4 px-5 py-4 border-b border-zinc-100">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Google</span>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div className="px-4 py-5">
          <div className="flex items-center gap-3 px-4 py-3 rounded-full border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
            <svg className="w-5 h-5 text-zinc-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-zinc-900 text-sm">{searchText}</span>
            {phase === 'typing' && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="w-0.5 h-4 bg-accent"
              />
            )}
          </div>
        </div>

        {/* Results */}
        {(phase === 'results' || phase === 'ranking') && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.5 }}
            className="border-t border-zinc-100"
          >
            <div className="px-4 pb-4 space-y-1">
              {displayResults.map((result) => (
                <motion.div
                  key={result.domain}
                  layout
                  layoutId={result.domain}
                  initial={phase === 'ranking' && result.highlight ? { opacity: 0, y: 20 } : false}
                  animate={{
                    opacity: 1,
                    y: 0,
                    backgroundColor: result.highlight ? 'rgba(37, 99, 235, 0.06)' : 'transparent',
                  }}
                  transition={{
                    layout: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
                    result.highlight ? 'ring-2 ring-accent/30' : ''
                  }`}
                >
                  <span className="text-zinc-400 text-sm font-medium w-5">
                    {result.position}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-emerald-700 truncate">{result.domain}</p>
                    <p className="text-sm text-zinc-800 font-medium truncate">{result.title}</p>
                  </div>
                  {result.highlight && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.3 }}
                      className="shrink-0 w-7 h-7 rounded-full bg-accent flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 'ranking' ? 1 : 0 }}
        className="mt-4 text-center text-sm text-zinc-500"
      >
        So stellen wir Sie auf Platz 1.
      </motion.p>
    </motion.div>
  )
}
