import { features } from '../data/site.js'

const icons = {
  recipe: (
    <path d="M6 3h9a3 3 0 0 1 3 3v15l-6-3-6 3V6a3 3 0 0 1 0-3z" />
  ),
  leaf: (
    <path d="M20 4S9 5 6 9s-2 11-2 11 7 1 11-3 5-13 5-13zM4 20l8-8" />
  ),
  veg: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6v12M6 12h12" />
    </>
  ),
  family: (
    <>
      <circle cx="8" cy="9" r="3" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M2 20c1-4 4-6 6-6s5 2 6 6M13 20c.7-2.8 2.6-4.5 4-4.5s3.3 1.7 4 4.5" />
    </>
  ),
  catering: (
    <>
      <path d="M3 11h18a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8z" />
      <path d="M12 7V3M9 7h6" />
    </>
  ),
  tea: (
    <>
      <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8z" />
      <path d="M17 10h2a2 2 0 0 1 0 4h-2M8 3c0 1 1 1 1 2s-1 1-1 2M12 3c0 1 1 1 1 2s-1 1-1 2" />
    </>
  ),
}

export default function WhyChooseUs() {
  return (
    <section className="section bg-cream-100">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">Why Choose Lzaza</span>
          <h2 className="heading-lg mt-4 text-charcoal-900">
            Crafted with care, <span className="text-forest-700">served with heart.</span>
          </h2>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <li
              key={f.title}
              className="group relative rounded-2xl bg-white p-7 shadow-soft transition-all duration-500
                         hover:-translate-y-1.5 hover:shadow-glow overflow-hidden"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-saffron-50 transition-transform duration-500 group-hover:scale-150" aria-hidden="true" />
              <div className="relative">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-spice-gradient text-cream-50 shadow-soft">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                       aria-hidden="true">
                    {icons[f.icon]}
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-xl text-charcoal-900">{f.title}</h3>
                <p className="mt-2 text-charcoal-800/70 leading-relaxed">{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
