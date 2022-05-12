const { colors } = require(`tailwindcss/defaultTheme`)

module.exports = {
  mode: "jit", // see https://tailwindcss.com/docs/just-in-time-mode
  purge: ["./components/**/*.{js,jsx}", "./pages/**/*.{js,jsx}","./utils/**/*.{js,jsx}"],
  darkMode: false, // or "media" or "class"
  theme: {
    spacing: {
      0: "0",
      1: "100px",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    extend: {
      colors: {
        primary: {
          1: "#E51E31",
          2: "#202020",
        },
        secondary: {
          1: "#010E88",
          2: "#FF9C00",
        },
        date: "#6B6B6B",
        default: "#F9F9F9",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          // sm:"0px"
          // sm: "0 100px",
        },
      },
    },
    fontFamily: {
      DosisRegular: ["DosisRegular", "sans-serif"],
      DosisBold: ["DosisBold", "sans-serif"],
      DosisSemiBold: ["DosisSemiBold", "sans-serif"],
      DosisMedium: ["DosisMedium" ,"sans-serif"],
      KarlaBold: ["KarlaBold", "sans-serif"],
      KarlaSemiBold: ["KarlaSemiBold", "sans-serif"],
      KarlaRegular: ["KarlaRegular", "sans-serif"],
      KarlaMedium: ["KarlaMedium", "sans-serif"],
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
}
