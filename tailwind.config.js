/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tech: {
          blue: "#1d3557",
          lightBlue: "#457b9d",
          skyBlue: "#a8dadc",
          offWhite: "#f1faee",
          red: "#e63946",
        },
      },
    },
  },
  plugins: [],
};
