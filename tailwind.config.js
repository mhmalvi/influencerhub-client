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

      colors: {
        "dark-blue": "#151D48",
      },
    },
  },
  plugins: [],
};
