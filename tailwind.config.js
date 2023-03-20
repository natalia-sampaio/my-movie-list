/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
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
      },
      boxShadow: {
        accent: 'rgba(253, 95, 0, 0.4) 5px 5px, rgba(253, 95, 0, 0.3) 10px 10px, rgba(253, 95, 0, 0.2) 15px 15px, rgba(253, 95, 0, 0.1) 20px 20px, rgba(253, 95, 0, 0.05) 25px 25px',
        mobile: 'rgba(253, 95, 0, 0.4) 0px 5px, rgba(253, 95, 0, 0.3) 0px 10px, rgba(253, 95, 0, 0.2) 0px 15px, rgba(253, 95, 0, 0.1) 0px 20px, rgba(253, 95, 0, 0.05) 0px 25px;'
      },
      screens: {
        'xs': '365px'
      }
    },
  },
  plugins: [],
}
