'use client'

import { motion } from 'framer-motion'
/**
 * SEO-optimierte Sektion mit den Top 20 Keywords natürlich eingebettet.
 * Natürlich eingebettet für bessere Indexierung.
 */
export default function KeywordSection() {
  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      aria-labelledby="keywords-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-zinc-50/50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />
      <div className="relative mx-auto max-w-4xl">
        <motion.h2
          id="keywords-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-10 text-center"
        >
          SEO aus München für Bayern
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-none space-y-6 rounded-3xl bg-white/80 backdrop-blur-sm p-8 sm:p-10 shadow-xl shadow-zinc-200/50 border border-zinc-100/80"
        >
          <p className="text-zinc-600 leading-relaxed">
            Als SEO Agentur München bieten wir Suchmaschinenoptimierung und SEO
            Beratung München für Unternehmen in ganz Bayern. Unser Service umfasst
            Local SEO München, technisches SEO und strategische
            Suchmaschinenoptimierung Agentur München. Ob SEO Agentur Bayern,
            SEO Dienstleister München oder ein SEO Agentur München Test – wir
            liefern transparente Preise (SEO Agentur München Preis) und messbare
            Ergebnisse.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            Von München aus betreuen wir Kunden in Garching, Starnberg,
            Traunstein, Freising, Dachau, Germering, Fürstenfeldbruck, Rosenheim,
            Kempten und Landshut. Unser Fokus liegt auf nachhaltigen Rankings:
            durch zielgerichtete Keyword-Recherche, technische Optimierung
            (Core Web Vitals, mobile Usability), Local SEO für Google Maps und
            strategischen Linkaufbau. Jedes Projekt startet mit einer fundierten
            Analyse – ohne verbindliche Verpflichtung im kostenlosen Erstgespräch.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
