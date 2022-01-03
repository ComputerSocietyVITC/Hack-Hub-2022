module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Atmos: ["Atmospheric"],
        Sansation: ["Sansation"],
        SanBold: ["Sansation-Bold"],
      },
      colors: {
        'color1': '#FF005D',
        'color2': '#5000A4'
      },
      fontSize: {
        'xxs': '.6rem',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
