const config = require("./config")

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    titleTemplate: "%s . Matrixblend",
    description: `Media that influence, Insight, Ideas, and Inspiration.`,
    keywords: "music, web, tech ",
    image: "/src/assets/images/img/website-icon.png",
    url: "http://matrixblendmedia.com",
    twitterUsername: "@matrixblend",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    { resolve: `gatsby-transformer-remark` },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://matrixblend.us7.list-manage.com/subscribe/post?u=b44d90c3fc2c65dc71a43e11a&amp;id=2cf9f09e3f", // add your MC list endpoint here; see instructions below
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
  ],
}
