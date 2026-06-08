import { useState } from 'react'
import { business } from '../data/site.js'

export default function Contact() {
  const [status, setStatus] = useState(null) // null | 'sent'
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    // No backend wired in this template — show a thank-you state.
    setStatus('sent')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="section bg-cream-50 relative">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">Visit · Call · Reserve</span>
          <h2 className="heading-lg mt-4 text-charcoal-900">
            We’d love to <span className="text-saffron-700">host you.</span>
          </h2>
          <p className="mt-5 text-lg text-charcoal-800/70">
            Stop in for the lunch buffet, call ahead for takeout, or book a table
            for dinner. We’re right on 23rd Street in Des Moines.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-10">
          {/* Info + Map */}
          <div className="lg:col-span-5 space-y-6">
            <InfoCard
              icon={<PinIcon />}
              title="Address"
              lines={[business.address]}
              cta={{ href: business.mapsUrl, label: 'Open in Google Maps', external: true }}
            />
            <InfoCard
              icon={<PhoneIcon />}
              title="Phone"
              lines={[business.phone]}
              cta={{ href: business.phoneHref, label: 'Tap to call' }}
            />
            <InfoCard
              icon={<ClockIcon />}
              title="Hours"
              lines={business.hours.map(h => `${h.day} · ${h.time}`)}
            />

            <div className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-charcoal-900/5">
              <iframe
                title={`Map to ${business.name}`}
                src={business.mapEmbedSrc}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl bg-white p-7 sm:p-10 shadow-soft ring-1 ring-charcoal-900/5"
              aria-label="Contact form"
            >
              <h3 className="font-display text-2xl text-charcoal-900">
                Send us a message
              </h3>
              <p className="mt-1 text-sm text-charcoal-800/60">
                Reservations, catering inquiries, dietary questions — we’ll get back within a day.
              </p>

              <div className="mt-7 grid sm:grid-cols-2 gap-5">
                <Field label="Your name" required>
                  <input
                    type="text" required value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className={inputCls} autoComplete="name"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    type="tel" value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className={inputCls} autoComplete="tel"
                  />
                </Field>
                <Field label="Email" required className="sm:col-span-2">
                  <input
                    type="email" required value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className={inputCls} autoComplete="email"
                  />
                </Field>
                <Field label="Message" required className="sm:col-span-2">
                  <textarea
                    required rows={4} value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className={inputCls + ' resize-y'}
                    placeholder="Reservation for 4 on Friday at 7pm…"
                  />
                </Field>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-charcoal-800/60">
                  By submitting you agree to be contacted about your inquiry.
                </p>
                <button type="submit" className="btn-glass-dark">
                  Send message
                </button>
              </div>

              {status === 'sent' && (
                <div
                  role="status"
                  className="mt-5 rounded-xl bg-forest-50 border border-forest-200 text-forest-700 p-4 text-sm"
                >
                  Thank you — we received your message and will reach out soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const inputCls =
  'w-full rounded-xl border border-charcoal-100 bg-cream-50 px-4 py-3 text-charcoal-900 placeholder:text-charcoal-800/40 ' +
  'focus:border-saffron-600 focus:bg-white focus:ring-2 focus:ring-saffron-600/20 outline-none transition'

function Field({ label, required, className = '', children }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm font-medium text-charcoal-900 mb-1.5">
        {label} {required && <span className="text-saffron-700">*</span>}
      </span>
      {children}
    </label>
  )
}

function InfoCard({ icon, title, lines, cta }) {
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-charcoal-900/5 shadow-soft">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-saffron-50 text-saffron-700">
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs uppercase tracking-[0.25em] text-charcoal-800/60">{title}</p>
          <div className="mt-1 space-y-0.5">
            {lines.map(line => (
              <p key={line} className="text-charcoal-900">{line}</p>
            ))}
          </div>
          {cta && (
            <a
              href={cta.href}
              target={cta.external ? '_blank' : undefined}
              rel={cta.external ? 'noreferrer' : undefined}
              className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-saffron-700 hover:text-saffron-600"
            >
              {cta.label} →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 5a2 2 0 0 1 2-2h2l2 5-2 1a11 11 0 0 0 6 6l1-2 5 2v2a2 2 0 0 1-2 2A14 14 0 0 1 4 5z" strokeLinejoin="round" />
    </svg>
  )
}
function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </svg>
  )
}
