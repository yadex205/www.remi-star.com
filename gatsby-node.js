const { join } = require('path');

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
};
