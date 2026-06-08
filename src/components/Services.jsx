import { services } from '../data/site.js'

const icons = {
  dine: (
    <>
      <path d="M4 4v8a4 4 0 0 0 4 4v4M8 4v8" />
      <path d="M16 4c-2 2-2 6 0 8v8" />
    </>
  ),
  bag: (
    <>
      <path d="M5 8h14l-1 12H6L5 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  truck: (
    <>
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  tray: (
    <>
      <path d="M3 10h18l-2 8H5l-2-8z" />
      <path d="M7 10V7a5 5 0 0 1 10 0v3" />
    </>
  ),
  cal: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </>
  ),
}

export default function Services() {
  return (
    <section className="section bg-cream-50">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Services</span>
          <h2 className="heading-lg mt-4 text-charcoal-900">
            However you like to eat — <span className="text-saffron-700">we’ve got you.</span>
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map(s => (
            <li
              key={s.title}
              className="group flex flex-col items-start gap-4 rounded-2xl bg-white p-6 ring-1 ring-charcoal-900/5
                         transition hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-forest-50 text-forest-700
                               transition group-hover:bg-forest-700 group-hover:text-cream-50">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                     aria-hidden="true">
                  {icons[s.icon]}
                </svg>
              </span>
              <div>
                <h3 className="font-display text-xl text-charcoal-900">{s.title}</h3>
                <p className="mt-1 text-sm text-charcoal-800/70">{s.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
