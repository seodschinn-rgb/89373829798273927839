'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface AppointmentCalendarProps {
  cityName: string
}

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
]

const WEEKDAY_NAMES = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']

export default function AppointmentCalendar({ cityName }: AppointmentCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const nextWeekDates = Array.from({ length: 5 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() + 7 + i)
    return d
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center"
      >
        <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-zinc-900 mb-2">Termin angefragt</h3>
        <p className="text-zinc-600">
          Wir melden uns innerhalb von 24 Stunden bei Ihnen, um den Termin zu bestätigen.
        </p>
      </motion.div>
    )
  }

  return (
    <section
      id="termin"
      className="py-20 px-6 bg-zinc-50/80 scroll-mt-24"
      aria-labelledby="termin-heading"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="termin-heading" className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          Termin vereinbaren
        </h2>
        <p className="text-zinc-600 mb-12">
          Kostenloses 30-Minuten-Gespräch für Unternehmen in {cityName}. Wählen Sie Datum und Uhrzeit.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white border border-zinc-200 shadow-card overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-6 md:p-8">
              <h3 className="font-semibold text-zinc-900 mb-4">Wochentag wählen</h3>
              <div className="flex flex-wrap gap-2">
                {nextWeekDates.map((date) => {
                  const dateStr = date.toISOString().split('T')[0]
                  const label = `${WEEKDAY_NAMES[date.getDay()]}, ${date.getDate()}.${date.getMonth() + 1}.`
                  return (
                    <button
                      key={dateStr}
                      onClick={() => setSelectedDate(dateStr)}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        selectedDate === dateStr
                          ? 'bg-accent text-white'
                          : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                      }`}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>

              {selectedDate && (
                <>
                  <h3 className="font-semibold text-zinc-900 mt-6 mb-4">Uhrzeit wählen</h3>
                  <div className="flex flex-wrap gap-2">
                    {TIME_SLOTS.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          selectedTime === time
                            ? 'bg-accent text-white'
                            : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="bg-zinc-50 p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1.5">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-zinc-900 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1.5">
                    E-Mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-zinc-900 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1.5">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-zinc-900 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
                    placeholder="+49 123 456789"
                  />
                </div>
                {selectedDate && selectedTime && (
                  <p className="text-sm text-zinc-500">
                    Gewählter Termin: {new Date(selectedDate).toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })} um {selectedTime} Uhr
                  </p>
                )}
                <button
                  type="submit"
                  disabled={!selectedDate || !selectedTime}
                  className="w-full rounded-lg bg-accent py-3.5 font-semibold text-white hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Termin anfragen
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
