/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.svelte'],
  theme: {
    extend: {},
    colors: {
        transparent: 'transparent',
        current: 'currentColor',

        'white': '#ffffff',

        'black': {
            'lightest': "#262626",
            'lighter': "#121212",
            'light': "#1B1A1A",
            'focus': '#0B0B0B',
        },
        
        'accent':  {
            "regular": "#8951FF",
            "darker": "#6d40c9",
        },
    },
  },
  plugins: [],
}
