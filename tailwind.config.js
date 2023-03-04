const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */

const myUtilities = plugin(function ({ addUtilities }) {
  addUtilities({
    '.scrollbar-hide': {
      /* IE and Edge */
      '-ms-overflow-style': 'none',

      /* Firefox */
      'scrollbar-width': 'none',

      /* Safari and Chrome */
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    '.animate-paused': {
      'animation-play-state': 'paused',
    },
  });
});

module.exports = {
  content: ['./src/**/*.{js,jsx,css,scss}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#8aaaaa',
          DEFAULT: '#2f4f4f',
          dark: '#0a2a2a',
        },
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
    },
    fontFamily: {
      fat: ["'Noto Sans TC'", "'Tilt Warp'", 'sans-serif', 'cursive'],
    },
  },
  plugins: [myUtilities],
};
