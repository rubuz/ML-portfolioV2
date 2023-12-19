/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};
