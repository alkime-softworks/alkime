module.exports = {
  siteMetadata: {
    title: `ALKIME LLC`,
    description: `ALKIME LLC is an independent software company designing and developing practical web and mobile applications.`,
    siteUrl: `https://alkime.co/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `alkime`,
        short_name: `alkime`,
        start_url: `/`,
        background_color: `#10120f`,
        theme_color: `#10120f`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
