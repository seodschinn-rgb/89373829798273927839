import { NextResponse } from 'next/server'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const NOTIFY_EMAIL = process.env.TERMIN_NOTIFY_EMAIL || process.env.ADMIN_EMAIL

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message, termin_datum, termin_uhrzeit } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name und E-Mail sind erforderlich.' },
        { status: 400 }
      )
    }

    // Option A: Mit Resend (wenn API-Key gesetzt)
    if (RESEND_API_KEY && NOTIFY_EMAIL) {
      const formattedDate = termin_datum
        ? new Date(termin_datum).toLocaleDateString('de-DE', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })
        : '–'
      const terminText = termin_datum && termin_uhrzeit
        ? `${formattedDate} um ${termin_uhrzeit} Uhr`
        : 'Nicht angegeben'

      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || 'SEO Agentur <onboarding@resend.dev>',
          to: NOTIFY_EMAIL,
          replyTo: email,
          subject: `📅 Neuer Termin: ${name} – ${terminText}`,
          html: `
            <h2>Neue Terminanfrage</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone || '–'}</p>
            <p><strong>Gewünschter Termin:</strong> ${terminText}</p>
            <h3>Anliegen:</h3>
            <p>${message || '–'}</p>
          `,
        }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        console.error('Resend error:', err)
        const msg = err?.message || err?.msg || (typeof err === 'string' ? err : 'E-Mail konnte nicht gesendet werden.')
        return NextResponse.json({ error: msg }, { status: 500 })
      }
      return NextResponse.json({ success: true })
    }

    // Option B: Ohne Resend – nur Log (für lokale Tests)
    console.log('Terminanfrage (kein RESEND_API_KEY):', { name, email, phone, message, termin_datum, termin_uhrzeit })
    return NextResponse.json({
      success: true,
      message: 'Zum E-Mail-Versand RESEND_API_KEY und TERMIN_NOTIFY_EMAIL in .env setzen.',
    })
  } catch (e) {
    console.error('Termin API error:', e)
    return NextResponse.json({ error: 'Ein Fehler ist aufgetreten.' }, { status: 500 })
  }
}
