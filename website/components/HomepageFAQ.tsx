'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    q: 'Was kostet eine SEO Agentur in München?',
    a: 'Die Kosten variieren je nach Umfang: von einer einmaligen SEO-Beratung bis zur monatlichen Full-Service-Betreuung. Wir bieten transparente Pakete – im kostenlosen Erstgespräch klären wir Ihren Bedarf und erstellen ein passendes Angebot.',
  },
  {
    q: 'Wie lange dauert es, bis SEO wirkt?',
    a: 'Erste Verbesserungen zeigen sich meist nach 3–6 Monaten. Nachhaltige Top-10-Rankings für wettbewerbsstarke Keywords benötigen oft 6–12 Monate. Wir setzen auf langfristige Strategien statt kurzfristiger Tricks.',
  },
  {
    q: 'Was ist der Unterschied zwischen SEO und SEA?',
    a: 'SEO (Suchmaschinenoptimierung) bringt organischen, unbezahlten Traffic. SEA sind bezahlte Anzeigen bei Google. SEO wirkt langfristig und kosteneffizient – Sie zahlen keinen Cent pro Klick.',
  },
  {
    q: 'Betreut ihr auch Unternehmen außerhalb von München?',
    a: 'Ja. Von München aus betreuen wir Kunden in ganz Bayern – Garching, Starnberg, Freising, Augsburg, Regensburg und viele weitere Städte. Beratung und Umsetzung erfolgen remote; Vor-Ort-Termine sind bei Bedarf möglich.',
  },
  {
    q: 'Brauche ich Local SEO oder klassisches SEO?',
    a: 'Das hängt von Ihrem Geschäftsmodell ab: Lokale Unternehmen (Handwerk, Gastronomie, Ärzte) profitieren stark von Local SEO und Google Business Profile. E-Commerce oder überregionale Dienstleister brauchen eher klassisches SEO mit Fokus auf Keywords und technische Optimierung.',
  },
]

export default function HomepageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">FAQ</span>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-zinc-900 mt-2">
            Häufige Fragen zu SEO
          </h2>
          <p className="mt-4 text-zinc-600">
            Kurze Antworten auf die wichtigsten Fragen rund um Suchmaschinenoptimierung.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border-2 border-zinc-200 bg-white shadow-sm overflow-hidden hover:border-blue-200 hover:shadow-md transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-zinc-900">{faq.q}</span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-accent transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-5"
                >
                  <p className="text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
