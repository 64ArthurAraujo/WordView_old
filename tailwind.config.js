/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.svelte'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      'white': {
        'regular': '#ffffff',
        'darker': '#b5b5b5',
      },

      'black': {
        'select': '#404040',
        'divborder': '#333333',
        'lightest': "#262626",
        'lighter': "#121212",
        'light': "#1B1A1A",
        'focus': '#0B0B0B',
      },

      'accent': {
        "regular": "#8951FF",
        "darker": "#6d40c9",
      },

      'blue': {
        "regular": "#5199ff"
      },

      'red': {
        "regular": "#ff5151",
        "darker": "#c94040",
      },
    },
  },
  plugins: [],
}
