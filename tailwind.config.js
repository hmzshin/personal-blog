/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter"],
      playfair: ["Playfair Display"],
    },
    extend: {
      colors: {
        grayishYellow: "#f8f3f0",
        strongRed: "#d32335",
        darkCyan: "#002c32",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
