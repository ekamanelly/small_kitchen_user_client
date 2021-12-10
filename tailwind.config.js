const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "pmy-lime": "#318c27",
        white: "#F8FFF7",
        // "regal-blue": "#243c5a",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
