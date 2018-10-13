const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  onCreateWebpackConfig({ actions, getConfig }) {
    const { setWebpackConfig } = actions;

    setWebpackConfig({
      resolve: {
        plugins: [
          new TsConfigPathsPlugin({ extensions: ['.tsx'] })
        ]
      }
    });
  }
};
