/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        invinsible: '0 0 0 0 transparent',
      },
      screens: {
        'xs':  {'max': '500px' }, 
        'xsh': { 'raw': '(min-height: 520px)' },
      },
      fontFamily: {
        'heading':['playfair-display', 'serif'],
        'franklin': ['Franklin Gothic Medium', 'Arial Narrow', 'Arial', 'sans-serif'],
        'calibri': ['Calibri', 'Arial', 'sans-serif'],
        'times': ['Times New Roman', 'serif'],
        'subheading':['Georgia', 'Franklin Gothic Medium', 'Arial Narrow', 'Arial'],
      },
    },
  },
  plugins: [],
}