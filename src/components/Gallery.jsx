import { gallery } from '../data/site.js'

export default function Gallery() {
  return (
    <section id="gallery" className="section bg-charcoal-900 text-cream-50 relative overflow-hidden">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow text-gold-300 [&::before]:bg-gold-300">Gallery</span>
            <h2 className="heading-lg mt-4">
              A feast for the <span className="italic font-display text-gold-300">eyes too.</span>
            </h2>
          </div>
          <p className="text-cream-100/70 max-w-md">
            From the tandoor flames to the steam rising off a bowl of biryani —
            a glimpse of what awaits you at Lzaza.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {gallery.map((img, i) => {
            // Vary aspect ratios for a magazine layout.
            const spans = [
              'row-span-2',
              '',
              '',
              'md:row-span-2',
              '',
              '',
              'lg:col-span-2',
              '',
            ]
            return (
              <li
                key={img.src}
                className={`group relative overflow-hidden rounded-2xl ${spans[i] || ''} ${i === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute bottom-3 left-4 right-4 text-xs text-cream-100 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  {img.alt}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
