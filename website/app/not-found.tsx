import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="font-serif text-4xl text-gray-900">404</h1>
      <p className="mt-2 text-gray-600">Seite nicht gefunden</p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
      >
        Zur Startseite
      </Link>
    </div>
  )
}
