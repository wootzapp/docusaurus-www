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
          base: "#140c09",
          surface: "#1c110d",
          overlay: "#2b190f",
          border: "#3d2316",
          accent: {
            100: "#f28b32",
            200: "#ffb15f",
            300: "#ffd0a1",
          },
          neutral: {
            100: "#f7ede3",
            200: "#f0dccb",
            300: "#e4c4a8",
            400: "#c8a184",
            500: "#8d6f59",
          },
          text: {
            primary: "#fff4e6",
            secondary: "#ead6c6",
            muted: "#c9b09e",
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
