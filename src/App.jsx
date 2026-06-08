import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import PopularDishes from './components/PopularDishes.jsx'
import LunchBuffet from './components/LunchBuffet.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Reviews from './components/Reviews.jsx'
import Services from './components/Services.jsx'
import Accessibility from './components/Accessibility.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]
                   focus:bg-gold-500 focus:text-charcoal-900 focus:px-4 focus:py-2 focus:rounded-full"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <PopularDishes />
        <LunchBuffet />
        <WhyChooseUs />
        <Reviews />
        <Services />
        <Accessibility />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
