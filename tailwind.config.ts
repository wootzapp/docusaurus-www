import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.md", "./blog/**/*.md"],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      colors: {
        brand: {
          home_bg: "#FEF7F3",
          green: {
            100: "#7EC124",
            200: "#202B11",
          },
          black: {
            100: "#201A17",
            200: "#4D4846",
          },

          white: {
            100: "#FFFFFF",
            200: "#FEFAF8",
            300: "#FFFFFF",
            400: "#D2D1D1",
            500: "#EEEFE9",
            600: "#FEF6F2",
            700: "#E9E8E8",
          },

          orange: {
            100: "#D2820D",
            200: "#F54E00",
            300: "#FCAF3E",
          },
        },
      },

      fontFamily: {
        matter: ["Matter", ...fontFamily.sans],
      },
    },
  },
  plugins: [fluid],
} satisfies Config;
