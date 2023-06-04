/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: ["iransans_medium", "sans-serif"],
        display: ["iransans_black", "sans-serif"],
        default: ["iransans_light", "sans-serif"],
      },
      colors: {
        // black
        DigiRed: "#f91a47",
        DigiBlack: "#111827",
        DigiBlackLight: "#1e293b",
        DigiWhite: "#f8fafc",
        DigiInputBG: "#334155",
        DigiColorize: "#374151",
        DigiElement: "#0f172a",
        DigiGray: "#9ca3af",
        // white
        DigiWhiteLevel5: "#6b7280",
        DigiWhiteLevel4: "#9ca3af",
        DigiWhiteLevel3: "#d1d5db",
        DigiWhiteLevel2: "#e5e7eb",
        DigiWhiteLevel1: "#f3f4f6",
        DigiWhiteLevel0: "#f9fafb",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
