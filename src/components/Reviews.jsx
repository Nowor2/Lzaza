import { reviews, business } from '../data/site.js'

export default function Reviews() {
  return (
    <section id="reviews" className="section bg-forest-700 text-cream-50 relative overflow-hidden">
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-gold-500/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-saffron-700/30 blur-3xl" aria-hidden="true" />

      <div className="relative container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow text-gold-300 [&::before]:bg-gold-300">Customer Reviews</span>
            <h2 className="heading-lg mt-4">
              Loved by Des Moines,
              <br />
              <span className="italic font-display text-gold-300">trusted by 764+ guests.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 rounded-2xl bg-cream-50/10 backdrop-blur-sm p-5 border border-cream-50/15">
            <div className="text-5xl font-display font-bold text-gold-300">{business.rating}</div>
            <div>
              <Stars rating={business.rating} />
              <p className="mt-1 text-xs uppercase tracking-widest text-cream-100/80">
                {business.reviewCount.toLocaleString()}+ Google reviews
              </p>
            </div>
          </div>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <li
              key={r.name}
              className="rounded-2xl bg-cream-50/[0.04] border border-cream-50/10 p-6 backdrop-blur-sm
                         transition hover:-translate-y-1 hover:bg-cream-50/[0.08]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Quote />
              <Stars rating={r.rating} small />
              <blockquote className="mt-4 text-cream-100/90 leading-relaxed">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-500 text-charcoal-900 font-display font-bold">
                  {r.name[0]}
                </span>
                <span>
                  <span className="block font-medium text-cream-50">{r.name}</span>
                  <span className="block text-xs text-cream-100/60">{r.role}</span>
                </span>
              </figcaption>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Quote() {
  return (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true" className="text-gold-300/70">
      <path d="M10 24V12c0-6 4-10 10-12v4c-4 1-6 4-6 8h6v12H10zM-2 24V12c0-6 4-10 10-12v4c-4 1-6 4-6 8h6v12H-2z"
            transform="translate(4)" fill="currentColor"/>
    </svg>
  )
}

function Stars({ rating = 0, small = false }) {
  const full = Math.round(rating)
  const size = small ? 14 : 18
  return (
    <span className="flex gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"
             className={i < full ? 'fill-gold-300' : 'fill-cream-100/25'}>
          <path d="M12 2.5l2.94 6.16 6.78.74-5.05 4.6 1.42 6.66L12 17.77l-6.09 2.89 1.42-6.66L2.28 9.4l6.78-.74L12 2.5z" />
        </svg>
      ))}
    </span>
  )
}
