module.exports = {
  siteMetadata: {
    // siteUrl: "https://www.yourdomain.tld",
    title: "HackHub2022",
  },
  pathPrefix: "/Hack-Hub-2022",
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/hackhubsquarelogo.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, 
        tailwind: true,
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          // safelist: ['safelist'], // Don't remove this selector
        },
        // More options defined here https://purgecss.com/configuration.html#options
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
