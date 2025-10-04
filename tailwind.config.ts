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
          base: "#1f130d",
          surface: "#26150f",
          overlay: "#3a2014",
          border: "#4c2a18",
          accent: {
            100: "#d9772a",
            200: "#f29849",
            300: "#f7b36f",
          },
          neutral: {
            100: "#f6ede3",
            200: "#f1dfd0",
            300: "#e4c6ad",
            400: "#c4a489",
            500: "#8d715a",
          },
          text: {
            primary: "#f9f2e9",
            secondary: "#e6d8cc",
            muted: "#cbb7a6",
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
