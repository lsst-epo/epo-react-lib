const scss = require('rollup-plugin-scss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      scss({
        inject: false,
        extract: !!options.writeMeta,
      })
    );
    return config;
  },
};
