const { join } = require('path');
let buildStartedAt = new Date();

const dayReadableStrings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

module.exports = {
  onCreateWebpackConfig({ stage, actions }) {
    const { setWebpackConfig } = actions;

    if (['develop', 'develop-html', 'build-html', 'build-javascript'].includes(stage)) {
      setWebpackConfig({
        resolve: {
          modules: [join(__dirname, 'src'), 'node_modules'],
          extensions: ['.js', '.ts', '.tsx'],
        },
      });
    }
  },

  onPreBootstrap() {
    buildStartedAt = new Date();
  },

  onCreateNode({ node, actions }) {
    const { createNodeField } = actions;

    if (node.internal.type === 'ContentfulLive') {
      const liveDate = new Date(node.date);
      const isFutureLive = !isNaN(liveDate.getDate()) ? liveDate > buildStartedAt : false;
      const liveDateJst = new Date(liveDate.getTime() + (540 + liveDate.getTimezoneOffset()) * 60 * 1000);
      const liveDateReadableString = `${liveDateJst.getFullYear()}.${(liveDateJst.getMonth() + 1)
        .toString()
        .padStart(2, '0')}.${liveDateJst.getDate().toString().padStart(2, '0')} ${
        dayReadableStrings[liveDateJst.getDay()]
      }`;
      createNodeField({ node, name: 'isFutureLive', value: isFutureLive });
      createNodeField({ node, name: 'liveDateReadableString', value: liveDateReadableString });
    }
  },
};
