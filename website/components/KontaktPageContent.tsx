'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import BookingCalendar from './BookingCalendar'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID

export default function KontaktPageContent() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined' && new URLSearchParams(location.search).get('success') === '1') {
      setStatus('success')
      window.history.replaceState({}, '', '/kontakt')
    }
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    if (FORMSPREE_ID) {
      const formData = new FormData(form)
      const origin = typeof window !== 'undefined' ? window.location.origin : ''
      formData.append('_next', `${origin}/kontakt?success=1`)
      formData.append('_subject', `Neue Terminanfrage: ${formData.get('name')} – ${formData.get('termin_datum')} ${formData.get('termin_uhrzeit')}`)
      setStatus('sending')
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        })
        const json = await res.json()
        if (json.ok) {
          setStatus('success')
          form.reset()
          setSelectedDate(null)
          setSelectedTime(null)
        } else throw new Error(json.error || 'Fehler')
      } catch (err) {
        setStatus('error')
        setErrorMsg(err instanceof Error ? err.message : 'Fehler beim Senden.')
      }
      return
    }
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('/api/termin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Fehler beim Senden')
      setStatus('success')
      form.reset()
      setSelectedDate(null)
      setSelectedTime(null)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten.')
    }
  }

  return (
    <section className="pt-28 pb-24 px-6">
      <div className="absolute inset-0 top-0 h-64 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Kontakt</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mt-2">
            Termin für Ihr SEO-Gespräch
          </h1>
          <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
            Wählen Sie einen passenden Termin und füllen Sie das Formular aus. Wir melden uns zur Bestätigung innerhalb von 24 Stunden.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14"
        >
          <BookingCalendar
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onDateSelect={(d) => {
              setSelectedDate(d)
              setSelectedTime(null)
            }}
            onTimeSelect={setSelectedTime}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl border border-zinc-200 bg-white p-8 sm:p-10 shadow-lg shadow-zinc-200/50"
        >
          <h2 className="text-xl font-semibold text-zinc-900 mb-6">Ihre Angaben</h2>
          {status === 'success' && (
            <div className="mb-6 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-emerald-800">
              Vielen Dank! Ihre Anfrage wurde gesendet. Wir melden uns in Kürze bei Ihnen.
            </div>
          )}
          {status === 'error' && (
            <div className="mb-6 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-red-800">
              {errorMsg}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="hidden" name="termin_datum" value={selectedDate?.toISOString() ?? ''} />
            <input type="hidden" name="termin_uhrzeit" value={selectedTime ?? ''} />
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1.5">Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors"
                  placeholder="Max Mustermann"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1.5">E-Mail *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors"
                  placeholder="max@firma.de"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1.5">Telefon</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors"
                placeholder="+49 89 123 456"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1.5">Ihr Anliegen</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 resize-none transition-colors"
                placeholder="Kurze Beschreibung Ihres Projekts oder Ihrer Ziele…"
              />
            </div>
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={status !== 'sending' ? { scale: 1.01 } : undefined}
              whileTap={status !== 'sending' ? { scale: 0.99 } : undefined}
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 py-4 px-10 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Wird gesendet…' : 'Termin anfragen'}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center text-sm text-zinc-500"
        >
          <p>Alternativ erreichen Sie uns per E-Mail: <a href="mailto:info@seomuenchen.com" className="text-indigo-600 hover:underline font-medium">info@seomuenchen.com</a></p>
        </motion.div>
      </div>
    </section>
  )
}
