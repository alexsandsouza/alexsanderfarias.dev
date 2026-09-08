import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: "#06080D",
        surface: {
          DEFAULT: "#0E131F",
          elevated: "#161D2E",
          hover: "#1D273D",
        },
        border: {
          subtle: "#1E2638",
          muted: "#2A364F",
          highlight: "#384766",
        },
        accent: {
          DEFAULT: "#00E5FF",
          hover: "#38BDF8",
          subtle: "rgba(0, 229, 255, 0.08)",
          glow: "rgba(0, 229, 255, 0.25)",
        },
        slate: {
          850: "#131A29",
          950: "#06080D",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
      },
      keyframes: {
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
