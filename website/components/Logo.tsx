'use client'

import Link from 'next/link'

interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      <span className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-hover text-white shadow-lg transition-transform group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </span>
      <span className="font-bold text-lg text-zinc-900 group-hover:text-zinc-600 transition-colors tracking-tight">
        SEO München
      </span>
    </Link>
  )
}
