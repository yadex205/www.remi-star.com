const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  onCreateWebpackConfig({ stage, actions }) {
    const { setWebpackConfig } = actions;

    if (['develop', 'develop-html', 'build-html', 'build-javascript'].includes(stage)) {
      setWebpackConfig({
        resolve: {
          plugins: [new TsConfigPathsPlugin({ extensions: ['.tsx'] })]
        },
      });
    };
  },
};
