module.exports = {
  siteMetadata: {
    title: `Dankbar`,
    description: `Sabrina Lindauer - Description`,
    author: `@luiskunz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "@sofa-boys/gatsby-theme-podcast",
      options: {
        rssUrl: "https://dankbarkeits-enthusiastin.podigee.io/feed/aac",
        disqusShortName: "sofa-boys",
        spotifyUrl: "https://open.spotify.com/show/5NdbGuXj6NRjtZZfeXZka6",
          "https://podcasts.apple.com/ch/podcast/dankbar-dein-podcast-f%C3%BCr-mehr-dankbarkeit-selbstliebe/id1522143401",
      }
    },
    // {
    //   resolve: "@sofa-boys/gatsby-theme-podcast",
    //   options: {
    //     rssUrl: "https://dankbarkeits-enthusiastin.podigee.io/feed/aac",
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
