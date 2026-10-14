/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        work: ["Work Sans", "sans-serif"],
      },
      colors: {
        pinky: "#ff5c8f",
        bluey: "#247ba0",
        greeny: "#70c1b3",
        olivy: "#b2dbbf",
        yellowy: "#f3ffbd",
      },
      animation: {
        "spin-slow": "spin-slow 9s linear infinite",
        "bounce-left": "bounce-left 1s infinite",
        // Duration is set from JS in Marquee.tsx to match the content width
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        "bounce-left": {
          "0%, 100%": {
            transform: "translateX(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
