/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('./assets/hero-bg.webp')",
        'hero-background-layer':  "url('./assets/hero-layer.webp')"
      },
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}