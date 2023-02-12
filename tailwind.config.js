/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        graphikBold: "'GraphikBold', serif",
        graphikLight: "'GraphikLight', serif",
        graphikMedium: "'GraphikMedium', serif",
        graphikRegular: "'GraphikRegular', serif",
        graphikSemibold: "'GraphikSemibold', serif",
      },
      spacing: {
        is01px: '1px',
        529: '529px',
      },
      colors: {
        'yourproject-red': '#ED2025',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
