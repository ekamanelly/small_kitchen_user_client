const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "pmy-lime": "#318c27",
      white: "#F8FFF7",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
