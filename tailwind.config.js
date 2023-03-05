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
        showCart: {
          '0%': { right: '-100%' },
          '100%': { right: '0%' },
        },
        hideCart: {
          '0%': { right: '0%' },
          '100%': { right: '-100%' },
        },
        showMask: {
          '0%': { opacity: 0, 'z-index': 51 },
          '100%': { opacity: 1, 'z-index': 51 },
        },
        hideMask: {
          '0%': { opacity: 1, 'z-index': 0 },
          '100%': { opacity: 0, 'z-index': 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        showCart: 'showCart 0.5s ease-in-out forwards',
        hideCart: 'hideCart 0.5s ease-in-out forwards',
        showMask: 'showMask 0.5s ease-in-out forwards',
        hideMask: 'hideMask 0.5s ease-in-out forwards',
        marquee: 'marquee 20s linear infinite',
      },
    },
    fontFamily: {
      AudioWide: ["'Audiowide'", 'sans-serif'],
      fat: ["'Noto Sans TC'", "'Tilt Warp'", 'sans-serif', 'cursive'],
    },
  },
  plugins: [myUtilities],
};
