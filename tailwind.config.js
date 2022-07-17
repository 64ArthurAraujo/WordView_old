/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.svelte'],
  theme: {
    extend: {},
    colors: {
        transparent: 'transparent',
        current: 'currentColor',

        'white': '#ffffff',

        'focus-black': '#0B0B0B',
        'back-black': '#1B1A1A',
    },
  },
  plugins: [],
}
