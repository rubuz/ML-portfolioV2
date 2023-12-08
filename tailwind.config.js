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
        greny: "#70c1b3",
        olivy: "#b2dbbf",
        yellowy: "#f3ffbd",
      },
    },
  },
  plugins: [],
};
