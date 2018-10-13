const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  /**
   * @see {@link https://github.com/jacobmischka/gatsby-plugin-react-svg/blob/master/gatsby-node.js} to replace loader for svg files.
   */
  onCreateWebpackConfig({ stage, actions, rules, getConfig }, { rule: ruleProps = {} }) {
    const { setWebpackConfig, replaceWebpackConfig } = actions;
    const { include, exclude } = ruleProps;

    if (['develop', 'develop-html', 'build-html', 'build-javascript'].includes(stage)) {
      setWebpackConfig({
        resolve: {
          plugins: [new TsConfigPathsPlugin({ extensions: ['.tsx'] })]
        },
        module: {
          rules: [
            {
              test: /\.svg$/,
              use: {
                loader: 'svg-url-loader',
                options: {
                  encoding: 'base64'
                }
              }
            }
          ]
        }
      });


      const config = getConfig();
      const imgsRule = rules.images();
      const newUrlLoaderRule = (include || exclude) ? {
        ...imgsRule,
        include: include,
        exclude: exclude
      } : {
        ...imgsRule,
        test: new RegExp(imgsRule.test.toString().replace('svg|', '').slice(1, -1))
      };

      config.module.rules = [
        ...config.module.rules.filter(rule => {
          if (rule.test) {
            return rule.test.toString() !== imgsRule.test.toString();
          }
          return true;
        }),
        newUrlLoaderRule
      ];

      replaceWebpackConfig(config);
    }
  }
};
