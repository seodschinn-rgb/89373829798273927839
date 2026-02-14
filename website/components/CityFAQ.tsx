'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getCityFAQs } from '@/lib/faq-data'

interface CityFAQProps {
  cityName: string
}

export default function CityFAQ({ cityName }: CityFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const faqs = getCityFAQs(cityName)

  return (
    <section
      id="faq"
      className="py-20 px-6 bg-white scroll-mt-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          Häufige Fragen
        </h2>
        <p className="text-zinc-600 mb-12">
          Die wichtigsten Antworten rund um SEO für {cityName}
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-zinc-200 overflow-hidden transition-colors hover:border-zinc-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-zinc-50/50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-zinc-900 pr-4">{faq.question}</span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-accent transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180 bg-accent/10' : 'bg-zinc-100'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0 text-zinc-600 leading-relaxed border-t border-zinc-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
