/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      sans: "Epilogue",
    },
    extend: {
      colors: {
        almostWhite: "hsl(0, 0%, 98%)",
        mediumGray: "hsl(0, 0%, 41%)",
        almostBlack: "hsl(0, 0%, 8%)",
      },
      spacing: {
        120: "30rem",
      },
    },
  },
  plugins: [],
};
