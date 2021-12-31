module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        Atmos : ["Atmospheric"],
        Sansation: ["Sansation"],
        SanBold: ["Sansation-Bold"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
