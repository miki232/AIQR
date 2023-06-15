/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [require("nightwind"),
  require('@tailwindcss/typography'),
],
}