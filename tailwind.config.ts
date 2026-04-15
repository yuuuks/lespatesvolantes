import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        cream: '#F9F5EF',
        'warm-gray': '#8C7B6B',
        charcoal: '#2C2C2C',
        terracotta: '#C1440E',
      },
    },
  },
} satisfies Config
