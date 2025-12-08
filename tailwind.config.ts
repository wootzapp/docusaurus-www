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
    extend: {
      fontSize: {
        // Stripe-style typography
        'hero-sm': ['48px', { lineHeight: '1.04', letterSpacing: '-0.04em' }],
        'hero-md': ['72px', { lineHeight: '1.04', letterSpacing: '-0.04em' }],
        'hero-lg': ['94px', { lineHeight: '1.04', letterSpacing: '-0.04em' }],
        'section': ['34px', { lineHeight: '1.29', letterSpacing: '-0.004em' }],
        'section-lg': ['38px', { lineHeight: '1.29', letterSpacing: '-0.004em' }],
        'subsection': ['24px', { lineHeight: '1.33' }],
        'subsection-lg': ['26px', { lineHeight: '1.33' }],
        'body': ['18px', { lineHeight: '1.56', letterSpacing: '0.01em' }],
        'body-sm': ['16px', { lineHeight: '1.56', letterSpacing: '0.01em' }],
        'nav': ['15px', { lineHeight: '1.4' }],
        'btn': ['15px', { lineHeight: '1.4' }],
      },
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
