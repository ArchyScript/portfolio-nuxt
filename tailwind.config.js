/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        orange: 'var(--orange)',
        white: 'var(--white)',
        badge: 'var(--badge)',
        light_orange: 'var(--light_orange)',
      },
      fontFamily: {
        Chakra: ['Chakra Petch', 'sans-serif'],
      },
    },
  },
}
