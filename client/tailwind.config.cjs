/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        police:"url('https://www.rbp.gov.bt/im_age/53392939_630929060676938_1949856367166619648_n.jpg')"
      }
    },
  },
  plugins: [],
}
