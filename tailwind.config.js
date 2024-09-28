
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Use 'class' based dark mode

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      colors: {
        bg: "#181818",
        primary: "#f2932c",
        shadow : "#202020",
        lightprimary: "#000080",
      },
    },
  },
  plugins: [],
};
