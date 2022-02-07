module.exports = {
  siteMetadata: {
    siteUrl: "https://hackhub.ieeecsvitc.com/",
    url: "https://hackhub.ieeecsvitc.com/",
    title: "HackHub2022 - IEEE Computer Society's Premier Hackathon",
    titleTemplate: " ",
    image: "./src/images/hackhubsquarelogo.png",
    crossOrigin: "use-credentials",
    twitterUsername: "@ieeecsvitc",
    description:
      "IEEE Computer Society's Premier Hackathon which is scheduled to happen between 04-06 March, Check out our website to learn more.",
  },
  pathPrefix: "/Hack-Hub-2022",
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "HackHub 2022",
        short_name: "HackHub22",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/hackhubsquarelogo.png", // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: true,
        tailwind: true,
        purgeCSSOptions: {},
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
