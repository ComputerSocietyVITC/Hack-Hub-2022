module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        Ally: ["Alliance"],
        Cons:["Consolas"],
      },
      colors: {
        bgBrand: "#0F1642",
        oran:"#E74E1F",
      },
      borderRadius:{
        large:'10px',
        cards:'30px'
      },
    },
  },
  plugins: [],
};
