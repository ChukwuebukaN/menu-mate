/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        plusJakartaSans: ["Plus Jakarta Sans"],
        lato: ["Lato"],
      },
      spacing: {
        is01px: "1px",
        529: "529px",
        menuMateButtonWidth: "319px",
        menuMateButtonHeight: "53px",
      },
      colors: {
        menuMateTextGrey: "#575757",
        menuMateOrange: "#FF8C4F",
        menuMateDeepOrange: "#FF7C37",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
