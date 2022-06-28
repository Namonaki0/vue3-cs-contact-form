/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    animation: {
      slidein: "slidein .2s linear",
      formSubmitEffect: "formSubmitEffect 1s linear forwards",
      formFadeIn: "formFadeIn 250ms linear forwards",
      modalTitleFadeIn: ".2s modalContentFadeIn 550ms linear forwards",
      modalTextFadeIn: ".5s modalContentFadeIn 550ms linear forwards",
      modalButtonFadeIn: ".5s modalContentFadeIn 500ms linear forwards",
      modalLinksFadeIn: ".6s modalLinksFadeIn 560ms linear forwards",
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
      formSubmitEffect: {
        "0%": { opacity: 0.9, transform: "translateX(0)" },
        "80%": { opacity: 0.2, transform: "scale(0.9)" },
        "100%": {
          opacity: 0,
          transform: "translate(50%, 0%)",
        },
      },
      formFadeIn: {
        "0%": { opacity: 0.2, transform: "translateY(10%)" },
        "100%": {
          opacity: 1,
          transform: "translatY(0)",
        },
      },
      modalTitleFadeIn: {
        "0%": {
          visibility: "hidden",
          opacity: 0,
          transform: "translateY(10%)",
        },
        "100%": {
          visibility: "visible",
          opacity: 1,
          transform: "translatY(0)",
        },
      },
      modalContentFadeIn: {
        "0%": {
          visibility: "hidden",
          opacity: 0,
          transform: "translateY(30%)",
        },
        "100%": {
          visibility: "visible",
          opacity: 1,
          transform: "translatY(0)",
        },
      },
      modalLinksFadeIn: {
        "0%": {
          visibility: "hidden",
          opacity: 0,
          transform: "translateX(-10%)",
        },
        "100%": {
          visibility: "visible",
          opacity: 1,
          transform: "translatX(0)",
        },
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat"],
    },
  },
  plugins: [],
};
