const path = require('path');
const postcss = require('postcss');

module.exports = {
  stories: ['../src/stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-postcss',
      options: {
        styleLoaderOptions: {},
        cssLoaderOptions: {
          modules: true,
          sourceMap: true,
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: postcss,
        },
      },
    },
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader?url=false', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.resolve.alias['@components'] = path.resolve(
      __dirname,
      '../src/components'
    );
    config.resolve.alias['@styles'] = path.resolve(
      __dirname,
      '../src/assets/styles'
    );
    config.resolve.alias['@stories'] = path.resolve(
      __dirname,
      '../src/stories'
    );

    // Return the altered config
    return config;
  },
};
