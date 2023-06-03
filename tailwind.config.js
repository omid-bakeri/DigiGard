/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ["iransans_medium", "sans-serif"],
        display: ["iransans_black", "sans-serif"],
        default: ["iransans_light", "sans-serif"],
      },
      colors: {
        DigiRed: "#f91a47",
        DigiBlack: "#111827",
        DigiBlackLight: "#1e293b",
        DigiWhite: "#f8fafc",
        DigiInputBG: "#334155",
        DigiColorize: "#374151",
        DigiElement: "#0f172a",
        DigiGray: "#9ca3af",
      },
    },
  },
  plugins: [],
};
