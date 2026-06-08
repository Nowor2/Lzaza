import { dishes } from '../data/site.js'

export default function PopularDishes() {
  return (
    <section id="menu" className="section bg-charcoal-900 text-cream-50 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-saffron-700/20 blur-3xl" />

      <div className="relative container-x">
        <div className="max-w-3xl">
          <span className="eyebrow text-gold-300 [&::before]:bg-gold-400">Popular Dishes</span>
          <h2 className="heading-lg mt-4">
            Crowd favorites from <span className="text-gold-300 italic font-display">our kitchen</span>
          </h2>
          <p className="mt-5 text-cream-100/80 text-lg max-w-2xl">
            From silky butter chicken to slow-cooked goat curry — these are the
            dishes our guests order again and again.
          </p>
        </div>

        <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map(dish => (
            <li key={dish.name} className="group card bg-charcoal-800 ring-1 ring-cream-50/5 hover:ring-gold-400/40">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-charcoal-900">
                  {dish.tag}
                </span>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal-900 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-cream-50">{dish.name}</h3>
                  <span className="font-display text-xl text-gold-300">{dish.price}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-cream-100/70">
                  {dish.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-cream-50/10 bg-cream-50/[0.03] p-6 sm:p-8">
          <div>
            <p className="font-display text-2xl text-cream-50">Looking for the full menu?</p>
            <p className="mt-1 text-cream-100/70">
              60+ dishes including breads, biryanis, vegetarian thalis and desserts.
            </p>
          </div>
          <a href="tel:+15153811121" className="btn-glass-light">
            Call to order
          </a>
        </div>
      </div>
    </section>
  )
}
