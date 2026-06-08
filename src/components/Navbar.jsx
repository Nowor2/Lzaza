import { useEffect, useState } from 'react'
import { business, navLinks } from '../data/site.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-charcoal-900/90 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5',
      ].join(' ')}
    >
      <div className="container-x flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group" aria-label={`${business.name} home`}>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-spice-gradient text-cream-50 font-display text-xl font-bold shadow-soft">
            L
          </span>
          <span className="text-cream-50 leading-tight hidden sm:block">
            <span className="block font-display text-lg font-semibold">Lzaza</span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-gold-300">
              Indo-Pak Cuisine
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="relative px-4 py-2 text-sm font-medium text-cream-100/90 hover:text-gold-300 transition-colors"
            >
              {label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 origin-left bg-gold-400 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
          <a href="#contact" className="btn-glass-light ml-3 text-sm">
            Reserve
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className="lg:hidden grid place-items-center h-11 w-11 rounded-full bg-cream-50/10 text-cream-50 backdrop-blur-md hover:bg-cream-50/20 transition"
        >
          <Burger open={open} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          'lg:hidden overflow-hidden transition-[max-height,opacity] duration-500',
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <nav className="container-x pb-6 pt-4" aria-label="Mobile">
          <ul className="grid gap-1 rounded-2xl bg-charcoal-900/95 backdrop-blur p-3 shadow-soft">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-cream-100 font-medium hover:bg-saffron-700/40 hover:text-gold-300 transition"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={business.phoneHref}
                className="btn-gold w-full"
                onClick={() => setOpen(false)}
              >
                Call {business.phone}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function Burger({ open }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d={open ? 'M4 4l14 14M18 4L4 18' : 'M3 6h16M3 11h16M3 16h16'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
