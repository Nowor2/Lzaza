export default function LunchBuffet() {
  const highlights = [
    { title: 'Daily Lunch Buffet',  desc: 'A rotating selection of curries, biryani, breads and dessert — every weekday.' },
    { title: 'Fresh Naan, Hot',     desc: 'Served straight from the tandoor to your table while you dine.' },
    { title: 'Vegetarian + Meat',   desc: 'Always a balanced spread with plenty of vegan and vegetarian options.' },
    { title: 'Great Value',         desc: 'A favorite of families, Drake students, business lunches and travelers.' },
  ]

  return (
    <section id="buffet" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-saffron-700 via-saffron-600 to-gold-500" />
      <div className="absolute inset-0 -z-10 opacity-30 mix-blend-overlay">
        <img
          src="https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=2000&q=80"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-charcoal-900/30" />

      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-center text-cream-50">
          <div className="lg:col-span-7">
            <span className="eyebrow text-gold-200 [&::before]:bg-gold-200">Lunch Buffet</span>
            <h2 className="heading-lg mt-4">
              An unhurried lunch,
              <br />
              <span className="italic font-display text-gold-200">an unforgettable spread.</span>
            </h2>
            <p className="mt-5 text-lg text-cream-100/90 max-w-xl">
              Our lunch buffet is the easiest way to fall in love with Indo-Pak
              cuisine — sample everything, eat until you’re happy, and let the
              naan keep coming.
            </p>

            <ul className="mt-10 grid sm:grid-cols-2 gap-4">
              {highlights.map(h => (
                <li
                  key={h.title}
                  className="rounded-2xl bg-cream-50/10 backdrop-blur-sm p-5 border border-cream-50/15
                             transition hover:bg-cream-50/15 hover:-translate-y-0.5"
                >
                  <p className="font-display text-xl">{h.title}</p>
                  <p className="mt-1.5 text-sm text-cream-100/80">{h.desc}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#contact" className="btn-gold">Get directions</a>
              <a href="tel:+15153811121" className="btn-outline">Call us · (515) 381-1121</a>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="relative rounded-3xl bg-cream-50 text-charcoal-900 p-8 shadow-soft ring-1 ring-charcoal-900/10">
              <div className="absolute -top-4 left-8 rounded-full bg-forest-700 text-cream-50 px-4 py-1 text-xs uppercase tracking-widest">
                Served Daily
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-saffron-700">Buffet Hours</p>
              <p className="mt-2 font-display text-3xl font-bold">11:00 AM – 2:30 PM</p>

              <hr className="my-6 border-saffron-200" />

              <p className="text-sm uppercase tracking-[0.3em] text-saffron-700">Typical Spread</p>
              <ul className="mt-3 grid grid-cols-2 gap-y-2 text-sm">
                <li>• Butter Chicken</li>
                <li>• Chicken Biryani</li>
                <li>• Chana Masala</li>
                <li>• Dal Makhani</li>
                <li>• Saag Paneer</li>
                <li>• Tandoori Chicken</li>
                <li>• Fresh Naan</li>
                <li>• Basmati Rice</li>
                <li>• Raita & Chutney</li>
                <li>• Gulab Jamun</li>
              </ul>

              <p className="mt-6 text-xs text-charcoal-800/60">
                Menu rotates weekly. Vegetarian and vegan dishes always included.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
