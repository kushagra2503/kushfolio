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
          DEFAULT: "#28282B",
          light: "#1a1a1a",
        },
        mainWhite: {
          DEFAULT: "#e1e3e5",
          dark: "#f8f9fa",
        },
        // Light mode colors
        light: {
          bg: "#ffffff",
          card: "#f8f9fa",
          border: "#e9ecef",
          text: "#212529",
          muted: "#6c757d",
        },
      },
    },
  },
  plugins: [],
} satisfies Config
