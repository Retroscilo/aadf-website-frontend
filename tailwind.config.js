const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  mode: "jit", // see https://tailwindcss.com/docs/just-in-time-mode
  purge: ["./components/**/*.{js,jsx}", "./pages/**/*.{js,jsx}","./utils/**/*.{js,jsx}"],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#E51E31",
          2: "#202020",
        },
        secondary: {
          1: "#010E88",
          2: "#FF9C00"
        },
        date: "#6B6B6B",
        default: "#F9F9F9"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
    },
    fontFamily: {
      DosisRegular: ["DosisRegular","sans-serif"],
      DosisBold: ["DosisBold","sans-serif"],
      DosisSemiBold: ["DosisSemiBold","sans-serif"],
      KarlaBold: ["KarlaBold","sans-serif"],
      KarlaSemiBold: ["KarlaSemiBold","sans-serif"],
      KarlaRegular: ["KarlaRegular","sans-serif"],
      KarlaMedium: ["KarlaMedium","sans-serif"],

    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
