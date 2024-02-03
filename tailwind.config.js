/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./index.html",
    "./src/**/*.{jsx,js}"],
  theme: {
    extend: {},
    screens: {
      "desktop": "1800px",
      "laptops": "1500px",
      "tablets": "900px",
      "mobiles": "400px"
    }
  },
  plugins: [],
}

