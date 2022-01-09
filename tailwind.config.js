module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Atmos: ["Atmospheric"],
        Sansation: ["Sansation"],
        SanBold: ["Sansation-Bold"],
        Saira: ["Saira-Condensed"],
        Arya: ["Arya"],
      },
      colors: {
        gradPink: "#FF005D",
        gradViolet: "#440089",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
      },
      dropShadow: { white: "0 35px 35px #FFF" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
