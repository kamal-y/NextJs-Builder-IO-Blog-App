import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navyBlue : "#212433",
        lightBlue : "#00C7BE"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Primary font
        poppins:['Poppins','sans-serif'],

      },
    },
  },
  plugins: [],
} satisfies Config;
