module.exports = {
  mode: "jit",
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
        NunitoSans: ["Nunito-Sans"],
      },
      fontSize: {
        xxs: '0.65rem',
      },
      colors: {
        gradPink: "#FF005D",
        gradViolet: "#440089",
      },
      backgroundImage: {
        'bgimage': "url('../images/bgimage.png')",
        'stars': "url('../images/starsbg.png')",
      },
      dropShadow: { white: "0 35px 35px #FFF" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
