import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mainBlack: {
          DEFAULT: "#1B1212",
          light: "#1a1a1a",
        },
        mainWhite: {
          DEFAULT: "#e1e3e5",
          dark: "#f8f9fa",
        },
        // Light mode colors
        light: {
          bg: "#FCF5E5",
          card: "#ffffff",
          border: "#d4a574",
          text: "#2c1810",
          muted: "#8b7355",
        },
      },
    },
  },
  plugins: [],
} satisfies Config
