module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#35393F",
        "dark-gray-2": "#2B2D31",
        "dark-gray-3": "#1D1F22",
        "dark-gray-4": "#151619",
        "light-gray-1/2": "#F5F5F5",
        "light-gray": "#E4E4E4",
        "light-gray-2": "#C1C4CB",
        "light-gray-3": "#7C8187",
        "light-gray-4": "#5A6069",
        orange: "#E46643",
        "orange-light": "#F39765",
      },
      spacing: {
        72: "72px",
        "5-2": "24px",
        95: "95%",
        250: "250px",
        343: "343px",
        56: "56px",
      },
      fontFamily: {
        Roboto: ['"Roboto"', "san-serif"],
        "Roboto-Mono": ['"Roboto Mono"', "monospace"],
        "Roboto-Slab": ['"Roboto Slab"', "serif"],
      },
      letterSpacing: {
        2: "2px",
      },
      keyframes: {
        "pop-in": {
          "0%": { transform: "scale(0.6)", opacity: 0 },
          "100%": { transform: "rotate(1)", opacity: 1 },
        },
      },
      animation: {
        "pop-in": "pop-in 0.3s ease-in-out",
      },
      maxWidth: {
        672: "672px",
      },
      screens: {
        md2: "875px",
        sm2: "695px",
      },
    },
  },
  plugins: [],
};
