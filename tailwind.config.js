/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./src/components/**/*.{html,js,jsx}",
    "./src/pages/**/*.{html,js,jsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#46A578",
        faint: "hsl(153, 33%, 94%)",
        newFaint: "hsl(0, 0%, 96%)",
        customGray: "hsl(0, 0%, 85%)",
        customBlue: "hsla(205, 57%, 54%, 1)",
        faintBlue: "	hsl(192, 45%, 98%)",
      },
    },
  },
  plugins: [],
};
