import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      colors: {
        "ink": "#0a0a0a",
        "slate-ink": "#111827",
        "muted": "#6b7280",
        "accent": "#2563eb",
        "accent-light": "#3b82f6",
        "surface": "#f9fafb",
        "card": "#ffffff",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(37,99,235,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(37,99,235,0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
