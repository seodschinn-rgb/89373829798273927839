'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Logo from './Logo'
import LeistungIcons from './LeistungIcons'
import { LEISTUNGEN } from '@/lib/leistungen-data'

const iconColors: Record<string, string> = {
  blue: 'bg-blue-500/15 text-blue-600 group-hover:bg-blue-500 group-hover:text-white',
  emerald: 'bg-emerald-500/15 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white',
  violet: 'bg-violet-500/15 text-violet-600 group-hover:bg-violet-500 group-hover:text-white',
  amber: 'bg-amber-500/15 text-amber-600 group-hover:bg-amber-500 group-hover:text-white',
  rose: 'bg-rose-500/15 text-rose-600 group-hover:bg-rose-500 group-hover:text-white',
  cyan: 'bg-cyan-500/15 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white',
}

const navLinks = [
  { href: '/leistungen', label: 'Leistungen', hasDropdown: true },
  { href: '/blog', label: 'Blog', hasDropdown: false },
  { href: '/standorte', label: 'Standorte', hasDropdown: false },
  { href: '/kontakt', label: 'Kontakt', hasDropdown: false },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [leistungenOpen, setLeistungenOpen] = useState(false)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleLeistungenEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    setLeistungenOpen(true)
  }
  const handleLeistungenLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setLeistungenOpen(false), 120)
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-100"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Hauptnavigation"
      >
        <Logo />

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="relative"
              onMouseEnter={() => link.hasDropdown && handleLeistungenEnter()}
              onMouseLeave={() => link.hasDropdown && handleLeistungenLeave()}
            >
              {link.hasDropdown ? (
                <>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <AnimatePresence>
                    {leistungenOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full pt-2"
                      >
                        <div className="min-w-[360px] rounded-2xl bg-white border border-zinc-200 shadow-xl overflow-hidden">
                          <Link
                            href="/leistungen"
                            className="flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors"
                          >
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-white">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                              </svg>
                            </span>
                            <div>
                              <span className="block text-sm font-semibold text-zinc-900">Alle Leistungen</span>
                              <span className="block text-xs text-zinc-500">Übersicht anzeigen</span>
                            </div>
                            <svg className="w-4 h-4 ml-auto text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                          <div className="p-2 grid grid-cols-2 gap-1">
                            {LEISTUNGEN.map((l) => (
                              <Link
                                key={l.slug}
                                href={`/leistungen/${l.slug}`}
                                className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
                              >
                                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${iconColors[l.color] || iconColors.blue}`}>
                                  <LeistungIcons icon={l.icon} className="w-4 h-4" />
                                </span>
                                <span className="font-medium truncate">{l.title}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/kontakt"
            className="hidden sm:inline-flex rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-all duration-200 shadow-card"
          >
            Termin buchen
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-zinc-100 bg-white"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.hasDropdown ? (
                    <div className="py-2">
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-base font-medium text-zinc-700"
                      >
                        {link.label}
                      </Link>
                      <ul className="ml-4 mt-2 space-y-0.5 border-l-2 border-zinc-200 pl-3">
                        {LEISTUNGEN.map((l) => (
                          <li key={l.slug}>
                            <Link
                              href={`/leistungen/${l.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="group flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                            >
                              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${iconColors[l.color] || iconColors.blue}`}>
                                <LeistungIcons icon={l.icon} className="w-4 h-4" />
                              </span>
                              {l.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 text-base font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 -mx-2 px-2 rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-2 border-t border-zinc-100 mt-2">
                <Link
                  href="/kontakt"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-center rounded-lg bg-accent text-white font-semibold hover:bg-accent-hover transition-colors"
                >
                  Termin buchen
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
