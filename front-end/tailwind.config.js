const { plugin } = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main.jsx", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
 
  plugins: []
}