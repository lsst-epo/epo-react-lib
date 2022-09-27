const path = require("path");
const { mergeConfig } = require("vite");

const config = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-jest",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@/assets": path.resolve(__dirname, "../src/assets"),
          "@/components": path.resolve(__dirname, "../src/components"),
          "@/styles": path.resolve(__dirname, "../src/styles"),
          path: "path-browserify",
        },
      },
    });
  },
};

module.exports = config;