/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        heading: "2.5rem",
      },
      width: {
        19: "4.5rem",
        22: "5.5rem",
        29: "7.5rem",
        38: "9.4rem",
        50: "12.5rem",
        68: "18rem",
        82: "20.5rem",
      },
      height: {
        22: "5.5rem",
        29: "7.5rem",
        39: "9.5rem",
        50: "12.5rem",
      },
      inset: {
        84: "22rem",
      },
      padding: {
        13: "3.125rem",
        18: "4.5rem",
        21: "5.5rem",
        30: "7.5rem",
      },
      colors: {
        "dark-blue": "#151D48",
        "milky-white": "#F5F5F5",
        // "light-gray": "#F5F5F5",
      },
      lineHeight: {
        12: "3.125rem",
      },
    },
  },
  plugins: [],
};
