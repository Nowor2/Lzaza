import { accessibility } from '../data/site.js'

export default function Accessibility() {
  return (
    <section className="section bg-cream-100">
      <div className="container-x">
        <div className="rounded-3xl bg-white shadow-soft p-8 sm:p-12 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <span className="eyebrow">Accessibility</span>
            <h2 className="heading-lg mt-4 text-charcoal-900">
              Everyone is <span className="text-saffron-700">welcome</span>.
            </h2>
            <p className="mt-5 text-charcoal-800/70 text-lg leading-relaxed">
              Our dining room and facilities are designed so every guest can
              enjoy Lzaza comfortably and independently.
            </p>
          </div>

          <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {accessibility.map(item => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-forest-100 bg-forest-50/60 p-5"
              >
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest-700 text-cream-50">
                  <CheckIcon />
                </span>
                <span className="font-medium text-charcoal-900">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.5l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
