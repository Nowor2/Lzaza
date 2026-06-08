import { business } from '../data/site.js'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden text-cream-50">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=2000&q=80"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover animate-slow-zoom"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-warm-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-saffron-900/30 via-transparent to-forest-900/40" />
      </div>

      {/* Decorative spice ring */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-saffron-700/30 blur-3xl" />

      <div className="relative container-x flex min-h-[100svh] flex-col justify-center pt-28 pb-20">
        <div className="max-w-3xl animate-fade-up">
          <span className="eyebrow text-gold-300 [&::before]:bg-gold-400">
            Des Moines · Since family recipes began
          </span>

          <h1 className="heading-xl mt-5">
            <span className="block">Lzaza</span>
            <span className="block font-display italic font-medium text-gold-300">
              Indo-Pak Cuisine
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-cream-100/90 max-w-2xl">
            {business.tagline}. Tandoor-fired naan, slow-simmered curries and
            biryani made the way our grandmothers taught us — in the heart of Iowa.
          </p>

          <div className="mt-5 flex items-center gap-3 text-sm text-cream-100/80">
            <Stars rating={business.rating} />
            <span className="font-semibold text-cream-50">{business.rating}</span>
            <span>· {business.reviewCount.toLocaleString()}+ Google reviews</span>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#menu" className="btn-glass-light">
              View Menu
              <Arrow />
            </a>
            <a href={business.phoneHref} className="btn-glass">
              Order Online
            </a>
            <a href="#contact" className="btn-glass-outline">
              Reserve a Table
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <Pill icon="🌶️">Authentic spice</Pill>
            <Pill icon="🥬">Vegetarian friendly</Pill>
            <Pill icon="🍴">Lunch buffet daily</Pill>
            <Pill icon="🤝">Catering available</Pill>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-cream-100/70 hover:text-gold-300 transition"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Discover</span>
        <span className="mt-2 block h-10 w-px bg-current animate-pulse" />
      </a>
    </section>
  )
}

function Stars({ rating = 0 }) {
  const full = Math.round(rating)
  return (
    <span className="flex" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"
             className={i < full ? 'fill-gold-400' : 'fill-cream-100/30'}>
          <path d="M12 2.5l2.94 6.16 6.78.74-5.05 4.6 1.42 6.66L12 17.77l-6.09 2.89 1.42-6.66L2.28 9.4l6.78-.74L12 2.5z" />
        </svg>
      ))}
    </span>
  )
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Pill({ icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cream-100/20 bg-cream-50/5 px-3 py-1.5 backdrop-blur-sm">
      <span aria-hidden="true">{icon}</span>
      <span className="text-cream-100/90">{children}</span>
    </span>
  )
}
