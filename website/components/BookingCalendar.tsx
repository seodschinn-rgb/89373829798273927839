'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MONTHS = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
]
const WEEKDAYS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']
const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00',
]

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}
function isPast(date: Date) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return date < today
}

export default function BookingCalendar({
  selectedDate,
  selectedTime,
  onDateSelect,
  onTimeSelect,
}: {
  selectedDate: Date | null
  selectedTime: string | null
  onDateSelect: (d: Date) => void
  onTimeSelect: (t: string) => void
}) {
  const [viewDate, setViewDate] = useState(() => {
    const d = new Date()
    d.setDate(1)
    return d
  })

  const calendarDays = useMemo(() => {
    const year = viewDate.getFullYear()
    const month = viewDate.getMonth()
    const first = new Date(year, month, 1)
    const last = new Date(year, month + 1, 0)
    const startOffset = first.getDay() === 0 ? 6 : first.getDay() - 1
    const daysInMonth = last.getDate()
    const total = Math.ceil((startOffset + daysInMonth) / 7) * 7
    const days: { date: Date; inMonth: boolean }[] = []
    for (let i = 0; i < total; i++) {
      const d = new Date(year, month, i - startOffset + 1)
      days.push({ date: d, inMonth: d.getMonth() === month })
    }
    return days
  }, [viewDate])

  const prevMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1))
  const nextMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1))

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-zinc-900">Datum wählen</h3>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={prevMonth}
              className="p-2 rounded-lg text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 transition-colors"
              aria-label="Vorheriger Monat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="min-w-[140px] text-center font-medium text-zinc-800">
              {MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}
            </span>
            <button
              type="button"
              onClick={nextMonth}
              className="p-2 rounded-lg text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 transition-colors"
              aria-label="Nächster Monat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {WEEKDAYS.map((d) => (
            <div key={d} className="py-2 text-center text-xs font-medium text-zinc-500">
              {d}
            </div>
          ))}
          {calendarDays.map(({ date, inMonth }) => {
            const disabled = !inMonth || isPast(date)
            const selected = selectedDate && isSameDay(date, selectedDate)
            return (
              <button
                key={date.toISOString()}
                type="button"
                onClick={() => !disabled && onDateSelect(date)}
                disabled={disabled}
                className={`
                  aspect-square rounded-xl text-sm font-medium transition-all
                  ${disabled ? 'text-zinc-300 cursor-not-allowed' : 'hover:bg-indigo-50 hover:text-indigo-700'}
                  ${selected ? 'bg-indigo-600 text-white hover:bg-indigo-600 hover:text-white shadow-md' : ''}
                  ${inMonth && !disabled && !selected ? 'text-zinc-800' : ''}
                `}
              >
                {date.getDate()}
              </button>
            )
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-zinc-900 mb-4">Uhrzeit wählen</h3>
        <AnimatePresence mode="wait">
          {selectedDate ? (
            <motion.div
              key={selectedDate.toISOString()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-wrap gap-2"
            >
              {TIME_SLOTS.map((time) => {
                const active = selectedTime === time
                return (
                  <button
                    key={time}
                    type="button"
                    onClick={() => onTimeSelect(time)}
                    className={`
                      px-4 py-2.5 rounded-xl text-sm font-medium transition-all
                      ${active ? 'bg-indigo-600 text-white shadow-md' : 'bg-zinc-100 text-zinc-700 hover:bg-indigo-50 hover:text-indigo-700'}
                    `}
                  >
                    {time}
                  </button>
                )
              })}
            </motion.div>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-zinc-500 text-sm"
            >
              Bitte zuerst ein Datum auswählen.
            </motion.p>
          )}
        </AnimatePresence>
        {selectedDate && selectedTime && (
          <p className="mt-4 text-sm text-zinc-600">
            Termin:{' '}
            <span className="font-semibold text-zinc-900">
              {selectedDate.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} um {selectedTime} Uhr
            </span>
          </p>
        )}
      </div>
    </div>
  )
}
