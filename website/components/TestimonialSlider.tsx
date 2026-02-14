'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote:
      'Endlich eine SEO Agentur in München, die verständlich erklärt und liefert, was sie verspricht. Unsere Rankings haben sich in 6 Monaten deutlich verbessert.',
    author: 'Thomas M.',
    role: 'Geschäftsführer, B2B-Dienstleister München',
  },
  {
    quote:
      'Die Local SEO Optimierung hat unsere Sichtbarkeit bei Google Maps massiv gesteigert. Mehr Anfragen, weniger Streuverlust.',
    author: 'Sarah K.',
    role: 'Inhaberin, Handwerksbetrieb Bayern',
  },
  {
    quote:
      'Transparente Preise, kein Kleingedrucktes. Genau das, was wir als Mittelständler gesucht haben. Klare Empfehlung für die SEO Beratung München.',
    author: 'Michael R.',
    role: 'Marketing-Leiter, E-Commerce Augsburg',
  },
]

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 to-white" />
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Referenzen</span>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-zinc-900 mt-2">
            Was Kunden über uns sagen
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-white p-8 sm:p-12 shadow-xl shadow-zinc-200/50 border-2 border-zinc-100 min-h-[220px] overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-violet-500" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="text-lg sm:text-xl text-zinc-700 leading-relaxed italic"
            >
              „{testimonials[activeIndex].quote}"
            </motion.blockquote>
          </AnimatePresence>

          <motion.div
            key={`author-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6"
          >
            <p className="font-semibold text-zinc-900">
              {testimonials[activeIndex].author}
            </p>
            <p className="text-sm text-zinc-500">{testimonials[activeIndex].role}</p>
          </motion.div>

          <div className="flex gap-2 mt-8 justify-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Testimonial ${i + 1} anzeigen`}
                className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                    ? 'w-8 bg-gradient-to-r from-blue-500 to-violet-500'
                    : 'w-2 bg-zinc-200 hover:bg-zinc-300'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
