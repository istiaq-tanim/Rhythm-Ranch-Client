/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: 
    {
      primary: ["Libre Baskerville", "serif"],
      secondary: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
}