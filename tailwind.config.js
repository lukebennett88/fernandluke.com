const tw = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        "transparent-black": "hsla(0, 0%, 0%, 0.5)"
      },
      fontFamily: {
        sans: [`Helvetica Neue`, ...tw.fontFamily.sans],
        serif: [`Pistilli`, ...tw.fontFamily.serif]
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem"
      },
      spacing: {
        full: "100%"
      }
    }
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".blur": {
          "backdrop-filter": "blur(4px)"
        },
      };
      addUtilities(newUtilities);
    }
  ]
};
