import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fdf8f0",
          100: "#f9edda",
          200: "#f3d9b0",
          300: "#ebc07d",
          400: "#e2a44e",
          500: "#d4892f",
          600: "#c07024",
          700: "#a05620",
          800: "#824520",
          900: "#6a3a1d",
          950: "#3a1d0d",
        },
        dark: {
          50: "var(--dark-50)",
          100: "var(--dark-100)",
          200: "var(--dark-200)",
          300: "var(--dark-300)",
          400: "var(--dark-400)",
          500: "var(--dark-500)",
          600: "var(--dark-600)",
          700: "var(--dark-700)",
          800: "var(--dark-800)",
          900: "var(--dark-900)",
          950: "var(--dark-950)",
          975: "var(--dark-975)",
        },
        cream: "var(--cream)",
        gold: "#C8A87C",
        bronze: "#8B6914",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.4s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
        shimmer: "shimmer 2s infinite",
        "spin-slow": "spin 8s linear infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "drift-slow": "drift 20s ease-in-out infinite",
        "grain": "grain 8s steps(10) infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "reveal-up": "revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "reveal-down": "revealDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "ken-burns": "kenBurns 20s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(30px, -20px)" },
          "50%": { transform: "translate(-20px, 30px)" },
          "75%": { transform: "translate(20px, -10px)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -5%)" },
          "20%": { transform: "translate(-10%, 5%)" },
          "30%": { transform: "translate(5%, -10%)" },
          "40%": { transform: "translate(-5%, 15%)" },
          "50%": { transform: "translate(-10%, 5%)" },
          "60%": { transform: "translate(15%, 0)" },
          "70%": { transform: "translate(0, 10%)" },
          "80%": { transform: "translate(-15%, 0)" },
          "90%": { transform: "translate(10%, 5%)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(200, 168, 124, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(200, 168, 124, 0.25)" },
        },
        revealUp: {
          "0%": { clipPath: "inset(100% 0 0 0)", transform: "translateY(30px)" },
          "100%": { clipPath: "inset(0 0 0 0)", transform: "translateY(0)" },
        },
        revealDown: {
          "0%": { clipPath: "inset(0 0 100% 0)", transform: "translateY(-30px)" },
          "100%": { clipPath: "inset(0 0 0 0)", transform: "translateY(0)" },
        },
        kenBurns: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.1) translate(-10px, -5px)" },
        },
      },
      backgroundImage: {
        "barber-pattern": "url('/images/barber-pattern.png')",
        "hero-gradient":
          "var(--hero-gradient)",
        "gold-gradient":
          "linear-gradient(135deg, #C8A87C 0%, #E2A44E 50%, #C8A87C 100%)",
        "dark-gradient": "linear-gradient(180deg, #080808 0%, #0d0d0d 100%)",
        "warm-glow":
          "radial-gradient(ellipse at 50% 0%, rgba(200,168,124,0.15) 0%, transparent 70%)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
