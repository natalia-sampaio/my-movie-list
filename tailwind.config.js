/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/main.js",
    "./src/App.vue"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          background: '#05004E',
          accent: '#76B39D'
        },
        orange: '#FD5F00',
        beige: '#F9F8EB'
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif']
      }
    },
  },
  plugins: [],
}
