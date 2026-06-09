/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      robo: ["Roboto", "Noto Sans TC", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        banner: "url('../images/banner.png')",
      },
      colors: {
        primary: "#891818",
      },
    },
  },
  plugins: [],
};
