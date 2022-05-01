module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#35393F",
        "dark-gray-2": "#2B2D31",
        "dark-gray-3": "#1D1F22",
        "light-gray-1/2": "#F5F5F5",
        "light-gray": "#E4E4E4",
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
      },
      fontFamily: {
        Roboto: ['"Roboto"', "san-serif"],
        "Roboto-Mono": ['"Roboto Mono"', "monospace"],
      },
      letterSpacing: {
        2: "2px",
      },
    },
  },
  plugins: [],
};
