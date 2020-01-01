const tw = require('tailwindcss/defaultTheme');
const customForms = require('@tailwindcss/custom-forms');

module.exports = {
  theme: {
    extend: {
      colors: {
        'transparent-black': 'hsla(0, 0%, 0%, 0.5)',
      },
      fontFamily: {
        sans: [`Helvetica Neue`, ...tw.fontFamily.sans],
        serif: [`Pistilli`, ...tw.fontFamily.serif],
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
      },
      spacing: {
        full: '100%',
      },
    },
    customForms: () => ({
      default: {
        textarea: {
          '&:focus': {
            boxShadow: undefined,
            borderColor: undefined,
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [
    customForms,
    function({ addUtilities }) {
      const newUtilities = {
        '.blur': {
          'backdrop-filter': 'blur(4px)',
        },
        '.transition-colors': {
          'transition-property': 'background-color, border-color, color',
        },
        '.ease-in': {
          'transition-timing-function': 'cubic-bezier(0.4, 0, 1, 1)',
        },
        '.transition-medium': {
          'transition-duration': '200ms',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
