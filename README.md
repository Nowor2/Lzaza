# Lzaza Indo-Pak Cuisine — Website

Premium, mobile-first marketing site for **Lzaza Indo-Pak Cuisine** in Des Moines, Iowa.

Built with **React 18 + Vite + Tailwind CSS**.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the production build
```

> **Note (OneDrive users):** `npm install` is extremely slow inside a OneDrive-synced
> folder because OneDrive watches every one of the thousands of files npm writes.
> If install hangs, either pause OneDrive sync, exclude `node_modules` from
> OneDrive backup, or move the project to a non-synced path like
> `C:\Projects\Lzaza` and run `npm install` there.

## Structure

```
index.html                 # SEO meta + Restaurant JSON-LD schema
src/
  main.jsx                 # React entry
  App.jsx                  # Page composition
  index.css                # Tailwind layers + design tokens
  data/site.js             # All copy: dishes, hours, reviews, gallery
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    PopularDishes.jsx
    LunchBuffet.jsx
    WhyChooseUs.jsx
    Reviews.jsx
    Services.jsx
    Accessibility.jsx
    Gallery.jsx
    Contact.jsx
    Footer.jsx
tailwind.config.js         # Custom palette: saffron, gold, forest, cream
vite.config.js
```

## Editing content

All copy and pricing live in `src/data/site.js` — no component edits needed for
the menu, reviews, hours, gallery or services. Images use Unsplash CDN; swap the
URLs for your own photography for production.

## Design tokens

- **Saffron / Orange** — primary warmth, calls-to-action
- **Gold** — accents, hover states
- **Forest green** — trust signals, accessibility section
- **Cream** — backgrounds
- **Charcoal** — dark sections, headings

Typography: *Playfair Display* (headings) + *Inter* (body).

## SEO

- Meta title, description, OG/Twitter tags in `index.html`
- `Restaurant` schema markup with address, rating, hours, geo, cuisine
- Semantic landmarks (`<main>`, `<header>`, `<footer>`, `<section>`)
- Skip-to-content link, accessible focus states, ARIA labels
