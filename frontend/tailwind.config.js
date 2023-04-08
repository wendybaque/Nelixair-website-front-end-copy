
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        antonio: ['Antonio', "sans-serif"],
        nunito:['Nunito', "sans-serif"],
        poppins: ['Poppins', "sans-serif"],
      },
    },
    colors: {
      primaryDark: "#F24405",
      primaryLight:"#F25C05",
      contrast:"#F2D2B6",
      secondaryDark:"#F27405",
      secondaryLight:"#F2A341",
      dark:"#242424",
      darkLight:"#1E1E1E",
      light:"#E2E2E2",
      white:"#FFFFFF"
    },
    plugins: [],
  },
};