/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
  require('tailwindcss-textshadow'),
  require('tailwind-scrollbar-hide'),
  require('tailwind-scrollbar'),
  ],
}

// i get a 2nd error (continued from next.config.js) image.tmdb.org is not configured
// under images in your next.config.js component

// i need to config my host name 
// in next.config.js images:{
// domains: ['assets.example.com']
// }