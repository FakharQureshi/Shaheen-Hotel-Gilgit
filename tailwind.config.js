/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'], // Add Oswald font here
      },
      letterSpacing: {
        tighter: '-0.05em', // Custom tight letter spacing
        wide: '0.1em', // Custom wide letter spacing
        wider: '0.15em', // Custom wider letter spacing
        widest: '0.25em', // Custom widest letter spacing
      },
    },
  },
  plugins: [],
}
