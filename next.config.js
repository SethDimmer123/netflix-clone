/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
}
// image with src error because i am using a next.js image component

// it needs me to use either width or height of image but in this case i am using 
// layout fill when using fill the outer parent should be position absolute or relative.