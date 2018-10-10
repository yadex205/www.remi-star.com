const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  onCreateWebpackConfig({ actions, getConfig }) {
    const config = getConfig();
    config.resolve = {
      ...config.resolve,
      plugins: [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({ extensions: ['.tsx'] })
      ]
    };
    actions.replaceWebpackConfig(config);
  }
};
