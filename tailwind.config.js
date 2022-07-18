/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "3.5xl": "2rem",
        "4.5xl": "2.5rem",
      },
      width: {
        17: "4.3rem",
        19: "4.5rem",
        22: "5.5rem",
        29: "7.5rem",
        38: "9.4rem",
        42: "10.75rem",
        50: "12.5rem",
        58: "14.5rem",
        68: "18rem",
        73: "18.4rem",
        79: "19rem",
        82: "20.5rem",
        86: "22.3rem",
        98: "25.7rem",
      },
      height: {
        22: "5.5rem",
        29: "7.5rem",
        39: "9.5rem",
        50: "12.5rem",
        68: "17rem",
        74: "19rem",
        76: "19.5rem",
        92: "23rem",
        100: "27rem",
      },
      inset: {
        84: "22rem",
      },
      padding: {
        13: "3.125rem",
        18: "4.5rem",
        21: "5.5rem",
        27: "6.875rem",
        30: "7.5rem",
      },
      colors: {
        "dark-blue": "#151D48",
        "milky-white": "#F5F5F5",
        "light-gray": "rgba(51, 51, 51, 0.75)",
        "sea-green": "#3F729B",
      },
      lineHeight: {
        4.5: "1.125rem",
        12: "3.125rem",
      },
      margin: {
        29: "7.125rem",
        30: "7.5rem",
      },
    },
  },
  plugins: [],
};
