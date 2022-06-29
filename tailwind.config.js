/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["opensans-bold", "sans-serif"],
    },
    extend: {
      colors: {
        primaryBeige: "#e9d5a1",
      },
    },
  },
  plugins: [],
};
