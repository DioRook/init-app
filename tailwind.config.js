/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        raleway: ["var(--font-raleway)"],
        montserrat: ["var(--font-montserrat)"],
        dancingScript: ["var(--font-dancing-script)"],
      },
    },
  },
  plugins: [],
};