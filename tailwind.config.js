/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs':  {'min': '400px', 'max': '639px' }, // Custom screen size for 400px
        'xsh': { 'raw': '(min-height: 520px)' },
      },
    },
  },
  plugins: [],
}