/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron: {
          50:  '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#E25822',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        gold: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#F5C518',
          500: '#D4A017',
          600: '#B08410',
          700: '#8A6708',
        },
        forest: {
          50:  '#F1F6F1',
          100: '#DCEADC',
          200: '#B5D2B5',
          300: '#86B286',
          400: '#578F57',
          500: '#3A6E3A',
          600: '#2D5016',
          700: '#1F3D1F',
          800: '#163016',
          900: '#0E1F0E',
        },
        cream: {
          50:  '#FFFCF5',
          100: '#FFF8E7',
          200: '#FAF3E0',
          300: '#F1E4C1',
          400: '#E8D29A',
        },
        charcoal: {
          50:  '#F5F4F2',
          100: '#E5E3DF',
          800: '#26241F',
          900: '#181612',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'spice-gradient': 'linear-gradient(135deg, #C2410C 0%, #D4A017 100%)',
        'warm-overlay': 'linear-gradient(180deg, rgba(24,22,18,0.35) 0%, rgba(24,22,18,0.75) 100%)',
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(0,0,0,0.25)',
        glow: '0 0 0 1px rgba(212,160,23,0.4), 0 12px 32px -12px rgba(212,160,23,0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-zoom': {
          '0%':   { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        'fade-up':   'fade-up 0.8s ease-out both',
        'fade-in':   'fade-in 1.2s ease-out both',
        'slow-zoom': 'slow-zoom 18s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
