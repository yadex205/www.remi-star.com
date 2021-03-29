const fiber = require('fibers');
const sass = require('sass');
const sassGlobImporter = require('node-sass-glob-importer');

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://remi-star.com',
        stripQueryString: true,
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: sass,
        sassOptions: {
          fiber: fiber,
          importer: sassGlobImporter(),
        },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_CDA_ACCESS_TOKEN,
        downloadLocal: process.env.NODE_ENV === 'development',
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-SEF9ZJ0DD6'],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
};
