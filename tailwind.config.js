module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      kaushan: ["Kaushan Script"],
    },
    extend: {
      colors: {
        indigo: {
          light: "#b3bcf5",
          DEFAULT: "#5c6ac4",
          dark: "#202e78",
        },
        green: {
          DEFAULT: "#00f260",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
