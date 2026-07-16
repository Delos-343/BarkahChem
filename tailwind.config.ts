import type { Config } from "tailwindcss";

/**
 * BarkahChem Solutions design tokens.
 * Palette lifted directly from the approved prototype:
 *  - Deep navy canvas   #0A2540 / #061A2A / #0D2F4A
 *  - Teal brand accent  #00A896 / #1ABC9C / #006D6D
 *  - Gold call-to-action #F4A835
 *  - WhatsApp green      #25D366
 * Category accents keep each product family visually distinct.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        navy: {
          DEFAULT: "#0A2540",
          950: "#04121F",
          900: "#061A2A",
          800: "#0A2540",
          700: "#0D2F4A",
          600: "#0D4F6C",
          500: "#14618A",
        },
        teal: {
          DEFAULT: "#00A896",
          light: "#1ABC9C",
          dark: "#006D6D",
        },
        gold: {
          DEFAULT: "#F4A835",
          light: "#F7C46B",
          dark: "#D98E1F",
        },
        wa: {
          DEFAULT: "#25D366",
          dark: "#1EBE5A",
        },
        mist: "#B8D4DF",
        cat: {
          auto: "#2E86C1",
          fragrance: "#A569BD",
          dish: "#1ABC9C",
          rosin: "#27AE60",
        },
      },
      backgroundImage: {
        "grid-navy":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "gold-teal": "linear-gradient(135deg, #F4A835 0%, #00A896 100%)",
        "teal-gold": "linear-gradient(135deg, #00A896 0%, #F4A835 100%)",
        "hero-glow":
          "radial-gradient(60% 60% at 70% 30%, rgba(0,168,150,0.35) 0%, rgba(10,37,64,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(0,168,150,0.45)",
        "glow-gold": "0 0 40px -8px rgba(244,168,53,0.5)",
        card: "0 18px 50px -20px rgba(0,0,0,0.55)",
        "card-hover": "0 30px 70px -24px rgba(0,168,150,0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-22px) rotate(3deg)" },
        },
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-40px) scale(1.1)" },
          "66%": { transform: "translate(-25px,25px) scale(0.95)" },
        },
        "gradient-x": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "80%,100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        blob: "blob 18s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        shimmer: "shimmer 2.5s infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.2,0.6,0.3,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
