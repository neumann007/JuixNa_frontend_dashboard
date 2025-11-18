import type { Config } from "tailwindcss";
import scrollbarHide from 'tailwind-scrollbar-hide'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        foeGreen: "#53b886",
        foeGreenLight: "#73ffb9",
        foeBlue: "#98c4ff",
        foeBlueLight: "#b4e3ff",
        foeYellow: "#f8e27c",
        foeYellowLight: "#f3ff7f",
        foePurple: "#acadff",
        foeSkyBlue: "#cce8ff"
      }
    },
  },
  plugins: [scrollbarHide],
};
export default config;
