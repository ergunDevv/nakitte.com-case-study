/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  content: [],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'green-rgba': 'rgba(67, 211, 163, 1)',
        'dark-rgba': 'rgba(37, 43, 66, 1)',
        'dark-green-rgba':'rgba(34, 84, 66, 1)',
      },
    },
  },
  plugins: [],
}
