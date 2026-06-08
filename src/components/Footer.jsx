import { business, navLinks } from '../data/site.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-charcoal-900 text-cream-100">
      <div className="container-x py-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <a href="#home" className="inline-flex items-center gap-3" aria-label={`${business.name} home`}>
            <span className="grid h-12 w-12 place-items-center rounded-full bg-spice-gradient text-cream-50 font-display text-xl font-bold">
              L
            </span>
            <span>
              <span className="block font-display text-xl text-cream-50">Lzaza</span>
              <span className="block text-[11px] uppercase tracking-[0.3em] text-gold-300">
                Indo-Pak Cuisine
              </span>
            </span>
          </a>
          <p className="mt-5 text-sm text-cream-100/70 max-w-md leading-relaxed">
            Authentic Indian & Pakistani cuisine, served with care in the heart
            of Des Moines, Iowa. Family recipes, fresh ingredients, and a warm
            welcome for every guest.
          </p>

          <ul className="mt-6 flex items-center gap-3">
            <SocialLink label="Facebook" href="#"><FacebookIcon /></SocialLink>
            <SocialLink label="Instagram" href="#"><InstagramIcon /></SocialLink>
            <SocialLink label="TripAdvisor" href="#"><TripIcon /></SocialLink>
            <SocialLink label="Google" href={business.mapsUrl}><GoogleIcon /></SocialLink>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-300">
            Quick links
          </p>
          <ul className="mt-5 grid gap-2 text-sm">
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-cream-100/80 hover:text-gold-300 transition">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-300">
            Contact
          </p>
          <ul className="mt-5 grid gap-3 text-sm text-cream-100/80">
            <li>
              <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-gold-300">
                {business.address}
              </a>
            </li>
            <li>
              <a href={business.phoneHref} className="hover:text-gold-300">
                {business.phone}
              </a>
            </li>
            <li>Daily Lunch Buffet · 11:00 AM – 2:30 PM</li>
            <li>{business.priceRange}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-100/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-100/60">
          <p>© {year} {business.name}. All rights reserved.</p>
          <p>
            Crafted with care in Des Moines, Iowa ·{' '}
            <a href="#home" className="hover:text-gold-300">Back to top ↑</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <li>
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noreferrer"
        className="grid h-10 w-10 place-items-center rounded-full bg-cream-50/10 text-cream-50 hover:bg-gold-500 hover:text-charcoal-900 transition"
      >
        {children}
      </a>
    </li>
  )
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.4-2 2-2h2V2.2C16.7 2.1 15.3 2 14 2c-3 0-5 1.8-5 5v3H6v4h3v8h4z"/>
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}
function TripIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="7" cy="13" r="3.5" />
      <circle cx="17" cy="13" r="3.5" />
      <path d="M2 9h20l-2 2H4l-2-2z" />
    </svg>
  )
}
function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 11.1H12v3.9h5.5c-.5 2.4-2.5 3.7-5.5 3.7a6.7 6.7 0 1 1 0-13.4c1.7 0 3.2.6 4.4 1.7l2.8-2.8A10.6 10.6 0 1 0 12 22.6c6.1 0 10.2-4.3 10.2-10.4 0-.7-.1-1.4-.2-2.1z"/>
    </svg>
  )
}
