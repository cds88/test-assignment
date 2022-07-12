/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          main: "rgb(31,33,54)"
        }
      }
    },
  },
  plugins: [],
}
