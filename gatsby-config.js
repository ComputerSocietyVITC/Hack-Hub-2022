const path = require(`path`);
module.exports = {
  siteMetadata: {
    siteUrl: "https://AbhijithGanesh.tech",
    url: "https://AbhijithGanesh.tech",
    title: "Abhijith Ganesh's Portfolio",
    titleTemplate: "",
    image: "./src/images/logo.png",
    icon: "src/images/logo.png",
    crossOrigin: `use-credentials`,
    description:
      " Abhijith Ganesh is a freshman student who is currently pursuing Engineering from VIT Chennai    ",

    twitterUsername: "@GaneshAbhijith",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `./src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
        tailwind: true, // Enable tailwindcss support
        ignore: ["/ignored.css", "prismjs/", "docsearch.js/"], // Ignore files/folders
        purgeOnly: ["components/", "/main.css", "bootstrap/"], // Purge only these files/folders
        purgeCSSOptions: {},
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Abhijith Ganesh's Website",
        short_name: "AG's Website",
        start_url: "/",
        background_color: "#060D37",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
