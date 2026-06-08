export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden bg-cream-100">
      <div className="absolute inset-0 pattern-dots opacity-60" aria-hidden="true" />
      <div className="relative container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=80"
              alt="A spread of authentic Indo-Pak dishes on a rustic wood table"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:-right-10 w-44 sm:w-56 rotate-3 rounded-2xl bg-forest-700 text-cream-50 p-5 shadow-soft">
            <p className="text-3xl font-display font-bold text-gold-300">4.6★</p>
            <p className="mt-1 text-xs uppercase tracking-widest opacity-80">
              From 764+ reviews
            </p>
          </div>
          <div className="absolute -top-6 -left-4 sm:-left-10 hidden sm:block">
            <div className="w-40 rounded-2xl bg-gold-500 text-charcoal-900 p-5 -rotate-3 shadow-soft">
              <p className="font-display text-2xl font-bold leading-tight">Since the first family recipe</p>
            </div>
          </div>
        </div>

        <div>
          <span className="eyebrow">Our Story</span>
          <h2 className="heading-lg mt-4 text-charcoal-900">
            A taste of <span className="text-saffron-700">home</span>,
            <br className="hidden sm:block" /> served in Des Moines.
          </h2>

          <div className="mt-6 space-y-5 text-charcoal-800/80 text-lg leading-relaxed">
            <p>
              Lzaza was born from a single idea: bring the food of our grandmothers’
              kitchens — the deep, slow-simmered curries of Punjab, the fragrant
              biryanis of Karachi, the tandoor-blistered naan of Lahore — to the
              heart of Iowa, with nothing lost in translation.
            </p>
            <p>
              Every spice is ground in-house. Our chefs marinate overnight, our
              cooks tend the tandoor by hand, and our dining room welcomes families,
              students and travelers like our own. Authentic. Fresh. Generous.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
            <Stat label="Recipes" value="40+" />
            <Stat label="Spices ground daily" value="22" />
            <Stat label="Happy guests" value="50k+" />
          </dl>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-saffron-200 bg-white/70 backdrop-blur-sm p-4 sm:p-5 text-center">
      <dt className="sr-only">{label}</dt>
      <dd className="font-display text-2xl sm:text-3xl font-bold text-saffron-700">{value}</dd>
      <p className="mt-1 text-xs uppercase tracking-widest text-charcoal-800/60">{label}</p>
    </div>
  )
}
