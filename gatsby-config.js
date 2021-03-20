const fiber = require('fibers');
const sass = require('sass');
const sassGlobImporter = require('node-sass-glob-importer');

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
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
    // {
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_CDA_ACCESS_TOKEN
    //   }
    // },
    'gatsby-transformer-remark',
  ],
};
