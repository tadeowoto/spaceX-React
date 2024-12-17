/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['Orbitron', 'sans-serif'],
        secondaryFont: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

