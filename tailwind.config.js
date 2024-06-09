/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(75, 94%, 57%)",
        neutral: {
          white: "hsl(0, 0%, 100%)",
          grey: "hsl(0, 0%, 20%)",
          darkgrey: "hsl(0, 0%, 12%)",
          offblack: "hsl(0, 0%, 8%)",
        },
      },
      screens: {
        xs: "375px",
        desktop: "1440px",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [],
};
