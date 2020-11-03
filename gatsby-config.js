const prismicOptions = require("./src/prismic/config.js")

module.exports = {
  siteMetadata: {
    title: `AccuIndex - Trade Forex, Shares, Commodities and CFDs | AccuIndex`,
    description: `Accuindex provides over 200 financial instruments: currency, commodity, share CFDs  and more. Learn more about the benefits and sign up for an account today. Transparent Fee Structure.`,
    author: `Accuindex | Exiniti`,
    siteUrl: `https://accuindex.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/Icons/favicon.png`, // This path is relative to the root of the site.
      },
    },

    // Prismic CMS configuration
    {
      resolve: "gatsby-source-prismic",
      options: prismicOptions,
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
