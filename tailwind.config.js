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
      fontFamily: {
        'franklin': ['Franklin Gothic Medium', 'Arial Narrow', 'Arial', 'sans-serif'],
        'calibri': ['Calibri', 'Arial', 'sans-serif'],
        'times': ['Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}