const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { Roboto: "'Roboto'" },
    },
    colors: { ...colors, net: { 1: "#0b0b0b" } },
    screens: {
      xs: "400px",
      sm: "580px",
      md: "820px",
    },
  },
  important: true,
  plugins: [],
};
