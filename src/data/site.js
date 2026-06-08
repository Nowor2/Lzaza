// Central data for the site. Edit copy/prices/images here.

export const business = {
  name: 'Lzaza Indo-Pak Cuisine',
  tagline: 'Authentic Indian & Pakistani Flavors in Des Moines',
  phone: '+1 515-381-1121',
  phoneHref: 'tel:+15153811121',
  address: '1409 23rd St, Des Moines, IA 50311',
  rating: 4.6,
  reviewCount: 764,
  priceRange: '$10–$20 per person',
  mapsUrl:
    'https://www.google.com/maps/place/1409+23rd+St,+Des+Moines,+IA+50311',
  mapEmbedSrc:
    'https://www.google.com/maps?q=1409+23rd+St,+Des+Moines,+IA+50311&output=embed',
  hours: [
    { day: 'Monday – Thursday', time: '11:00 AM – 9:30 PM' },
    { day: 'Friday – Saturday', time: '11:00 AM – 10:30 PM' },
    { day: 'Sunday',            time: '11:00 AM – 9:30 PM' },
    { day: 'Daily Lunch Buffet', time: '11:00 AM – 2:30 PM' },
  ],
}

export const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Menu',     href: '#menu' },
  { label: 'Buffet',   href: '#buffet' },
  { label: 'Gallery',  href: '#gallery' },
  { label: 'Reviews',  href: '#reviews' },
  { label: 'Contact',  href: '#contact' },
]

export const dishes = [
  {
    name: 'Butter Chicken',
    desc: 'Tandoor-roasted chicken simmered in a silky tomato, butter and cream sauce, finished with fenugreek.',
    price: '$15.99',
    tag: 'Signature',
    image:
      'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Goat Curry',
    desc: 'Bone-in goat slow-cooked with onions, ginger, garlic and our house-ground Pakistani spice blend.',
    price: '$17.49',
    tag: 'House Favorite',
    image:
      'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Chicken Biryani',
    desc: 'Long-grain basmati layered with saffron, marinated chicken and fried onions — sealed and dum-cooked.',
    price: '$14.99',
    tag: 'Must Try',
    image:
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Garlic Naan',
    desc: 'Hand-stretched dough baked in our tandoor, brushed with garlic butter and fresh cilantro.',
    price: '$3.49',
    tag: 'Fresh Daily',
    image:
      'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Vegetarian Thali',
    desc: 'A platter of paneer tikka masala, dal makhani, chana masala, basmati rice and naan.',
    price: '$13.99',
    tag: 'Vegetarian',
    image:
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Masala Chai',
    desc: 'Loose-leaf Assam tea brewed with cardamom, clove, ginger and milk — served piping hot.',
    price: '$2.99',
    tag: 'Traditional',
    image:
      'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=900&q=80',
  },
]

export const features = [
  {
    title: 'Authentic Recipes',
    desc: 'Family recipes from the Punjab region, prepared exactly as they have been for generations.',
    icon: 'recipe',
  },
  {
    title: 'Fresh Ingredients',
    desc: 'Spices ground in-house, produce sourced locally, and naan baked fresh to order.',
    icon: 'leaf',
  },
  {
    title: 'Vegetarian Options',
    desc: 'A full menu of paneer, dal, chana and seasonal vegetable specialties.',
    icon: 'veg',
  },
  {
    title: 'Family Friendly',
    desc: 'A warm, welcoming dining room with seating that comfortably fits families and groups.',
    icon: 'family',
  },
  {
    title: 'Catering Services',
    desc: 'Weddings, corporate lunches and private events — we cater parties of 10 to 500.',
    icon: 'catering',
  },
  {
    title: 'Large Tea Selection',
    desc: 'From masala chai to Kashmiri pink tea, an entire menu devoted to the perfect cup.',
    icon: 'tea',
  },
]

export const reviews = [
  {
    name: 'Amelia R.',
    role: 'Drake University',
    quote:
      'The lunch buffet is incredible — endless fresh naan, perfectly spiced butter chicken and the friendliest staff in Des Moines.',
    rating: 5,
  },
  {
    name: 'Jordan M.',
    role: 'Local Guide · 412 reviews',
    quote:
      'Genuinely authentic Pakistani flavors. The goat curry is the real deal and the biryani has just the right amount of heat.',
    rating: 5,
  },
  {
    name: 'Priya K.',
    role: 'Visiting Des Moines',
    quote:
      'It tastes like home. Cozy atmosphere, generous portions and the chai is exactly how my mother makes it.',
    rating: 5,
  },
  {
    name: 'Michael T.',
    role: 'Regular Customer',
    quote:
      'Best value lunch in the city. Hot fresh naan keeps coming, and the vegetarian dishes are every bit as good as the meat ones.',
    rating: 4,
  },
]

export const services = [
  { title: 'Dine-In',      desc: 'Relaxed, full-service seating for couples, families and groups.',           icon: 'dine' },
  { title: 'Takeout',      desc: 'Order ahead by phone — your meal will be hot and ready when you arrive.',  icon: 'bag'  },
  { title: 'Delivery',     desc: 'Doorstep delivery across the Des Moines metro via your favorite apps.',    icon: 'truck'},
  { title: 'Catering',     desc: 'Buffet trays, live-station chai bars and full event catering packages.',   icon: 'tray' },
  { title: 'Reservations', desc: 'Reserve a table for date nights, birthdays and private gatherings.',       icon: 'cal'  },
]

export const accessibility = [
  'Wheelchair Accessible Entrance',
  'Accessible Seating',
  'Accessible Parking',
  'Accessible Restrooms',
]

export const gallery = [
  { src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80', alt: 'Assorted Indian curries with naan' },
  { src: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80', alt: 'Chicken biryani served on a brass platter' },
  { src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80', alt: 'Tandoori chicken on skewers' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80', alt: 'Restaurant dining room interior' },
  { src: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80', alt: 'Samosas with chutney' },
  { src: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=900&q=80', alt: 'Naan being baked in a tandoor oven' },
  { src: 'https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=900&q=80', alt: 'Buffet line of Indian dishes' },
  { src: 'https://images.unsplash.com/photo-1571805341302-f857308690e3?auto=format&fit=crop&w=900&q=80', alt: 'Mango lassi in a chilled glass' },
]
