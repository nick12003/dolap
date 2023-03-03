/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,css,scss}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#8aaaaa",
          DEFAULT: "#2f4f4f",
          dark: "#0a2a2a",
        },
      },
    },
    fontFamily: {
      AudioWide: ["'Audiowide'", "sans-serif"],
    },
  },
  plugins: [],
};
