/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["opensans-bold", "sans-serif"],
    },
    extend: {
      colors: {
        primaryBeige: "#e9d5a1",
        primaryBlack: "#1f1f1f",
        darkModeColor0: "#494949",
        darkModeColor1: "#7f7f7f",
        darkModeColor2: "#5b5b5b",
        darkModeColor3: "#dfdfdf",
        darkModeColor4: "#6d6d6d",
      },
    },
  },
  plugins: [],
};
