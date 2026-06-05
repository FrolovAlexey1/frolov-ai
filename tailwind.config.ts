import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0F",
        surface: "#14141C",
        "surface-2": "#1C1C26",
        border: "#2A2A38",
        text: "#F4F4F7",
        muted: "#8A8A99",
        "accent-1": "#5B8DEF",
        "accent-2": "#A78BFA",
        "accent-3": "#2DD4BF",
      },
      fontFamily: {
        display: ["var(--font-unbounded)", "system-ui", "sans-serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(120deg, #5B8DEF 0%, #A78BFA 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
