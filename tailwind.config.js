module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@themesberg/flowbite/**/*.js",
  ],
  darkMode: "media",
  theme: {
    screens: {
      sm: { max: "640px" },
      md: { min: "640px", max: "768px" },
      lg: { min: "768px" },
    },
    extend: {
      fontFamily: {
        Ally: ["Alliance"],
        Cons: ["Consolas"],
      },
      colors: {
        bgBrand: "#060D37",
        oran: "#E74E1F",
      },
      borderRadius: {
        large: "10px",
        cards: "30px",
      },
    },
  },
  plugins: [require("@themesberg/flowbite/plugin")],
};
