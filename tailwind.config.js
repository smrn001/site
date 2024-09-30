/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Use 'class' based dark mode

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //for light mode
        lighttext: "#111111",
        lightshadow: "#eeeeee",
        lightprimary: "#000080",
        lightborder: "#eeeeee",
        

        //for dark mode
        darktext: "#ebe9e1",
        darkshadow: "#202020",
        primary: "#f2932c",
        darkborder: "#252525",
        darkborderhover: "#404040",
        bg: "#181818",
      },
    },
  },
  plugins: [],
};
