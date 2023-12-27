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
        main: 'var(--main)',
        "main-deep": 'var(--main-deep)',
        light: 'var(--light)',
        dark: 'var(--dark)',
        "semi-dark": 'var(--semi-dark)',
        gray: 'var(--gray)',
      },
      fontFamily: {
        Chakra: ['Chakra Petch', 'sans-serif'],
      },
    },
  },
}
