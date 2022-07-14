/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "main": "url('./src/frontend/public/background3.png')"
      },
      colors:{
        primary:{
          main: "rgb(31,33,54)"
        }
      }
    },
  },
  plugins: [],
}
