module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],

  darkMode: "class",

  theme: {
    extend: {
      screens: {
        desktop: "855px",
      },
      cursor: {
        pointer2: "url('/icons/cursor.png'), pointer",
      },
      colors: {
        primary: "#0f172a", // deep navy
        accent: "#38bdf8", // cyan highlight
        light: "#f8fafc", // near white
        Orange: "hsl(26, 100%, 55%)",
        "Pale-orange": "hsl(25, 100%, 94%)",
        "Dark-grayish-blue": "hsl(219, 9%, 45%)",
        "Grayish-blue": "hsl(220, 14%, 72%)",
        "Light-grayish-blue": "hsl(223, 64%, 98%)",
        White: "hsl(0, 0%, 100%)",
        Black75: "hsl(0, 0%, 0%)", //(with 75% opacity for lightbox background)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        kumbh: ["Kumbh Sans", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px rgba(56,189,248,0.2)",
      },
      keyframes: {
        bounce: {
          "0%": { transform: "translateY(0)", opacity: "0.6" },
          "100%": { transform: "translateY(-10px)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-soft": {
          "0%": { opacity: "0", transform: "translateY(-2%)" },
          "100%": { opacity: "1", transform: "translateY(0.1%)" },
        },
        slideRight100: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideLeft100: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(-100%)", opacity: "1" },
        },
        "slide-left": {
          "0%": { transform: "translateX(0)" },
          "60%": { transform: "translateX(-12px)" }, // overshoot
          "80%": { transform: "translateX(6px)" }, // rebound
          "100%": { transform: "translateX(0)" },
        },
        "slide-right": {
          "0%": { transform: "translateX(0)" },
          "60%": { transform: "translateX(12px)" },
          "80%": { transform: "translateX(-6px)" },
          "100%": { transform: "translateX(0)" },
        },

        "pop-in": {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },

        "fade-in-out": {
          "0%, 20%": { opacity: "0", transform: "translateY(20px)" },
          "25%, 45%": { opacity: "1", transform: "translateY(0)" },
          "50%, 100%": { opacity: "0", transform: "translateY(-20px)" },
        },

        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        glowpulse: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(56,189,248,0)" },
          "50%": { boxShadow: "0 0 30px rgba(56,189,248,0.35)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.1)" },
        },
        drift: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(60px)" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.4)", opacity: "0.2" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(40px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(40px) rotate(-360deg)",
          },
        },
        'border-glow': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        }
      },
      animation: {
        'border-glow': 'border-glow 1.5s linear forwards',
        "fade-in-out": "fade-in-out 9s ease-out infinite",
        orbit: "orbit 12s linear infinite",
        drift: "drift 10s linear infinite alternate",
        pulse: "pulse 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "fade-in-soft": "fade-in-soft 1.5s ease-in-out",
        "pop-in": "pop-in 0.3s ease-out forwards",
        bounce: "bounce 0.6s infinite alternate",
        "fade-in": "fade-in 1s ease forwards",
        "slide-right": "slide-right 0.5s cubic-bezier(0.22,1,0.36,1)",
        "slide-left": "slide-left 0.5s cubic-bezier(0.22,1,0.36,1)",
        "slide-right-100": "slideRight100 0.4s ease-out",
        "slide-left-100": "slideLeft100 0.5s ease-out",
        gradient: "gradient 6s ease infinite",
        glowpulse: "glowpulse 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "pulse-slow": "pulse 6s infinite",
      },
    },
  },
  plugins: [],
};
