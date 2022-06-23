/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    animation: {
      slidein: "slidein .5s cubic-bezier(.17,.67,.83,.67)",
    },
    keyframes: {
      slidein: {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(0)" },
      },
      fadeup: {
        "0%": { transform: "translateY(-100%)", opacity: 0.8 },
        "100%": { transform: "translateY(0)", opacity: 1 },
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat"],
    },
  },
  plugins: [],
};
