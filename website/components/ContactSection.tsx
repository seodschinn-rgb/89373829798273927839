'use client'

import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section
      id="kontakt"
      className="py-24 px-6 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="relative mx-auto max-w-3xl text-center">
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Kostenloses SEO-Gespräch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-zinc-400"
        >
          Erzählen Sie uns von Ihrem Projekt. Wir melden uns innerhalb von 24
          Stunden.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 space-y-4"
          action="#"
          method="POST"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full rounded-2xl border-2 border-zinc-600/50 bg-zinc-800/50 px-5 py-3.5 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              required
              className="w-full rounded-2xl border-2 border-zinc-600/50 bg-zinc-800/50 px-5 py-3.5 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-colors"
            />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Telefon"
            className="w-full rounded-2xl border-2 border-zinc-600/50 bg-zinc-800/50 px-5 py-3.5 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-colors"
          />
          <textarea
            name="message"
            placeholder="Ihr Anliegen"
            rows={4}
            className="w-full rounded-2xl border-2 border-zinc-600/50 bg-zinc-800/50 px-5 py-3.5 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 resize-none transition-colors"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto sm:px-12 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 py-4 px-8 text-base font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all"
          >
            Beratung anfragen
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
