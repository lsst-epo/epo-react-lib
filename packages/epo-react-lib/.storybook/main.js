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
      base: "/epo-react-lib/",
      resolve: {
        alias: {
          "@/assets": path.resolve(__dirname, "../src/assets"),
          "@/atomic": path.resolve(__dirname, "../src/atomic"),
          "@/helpers": path.resolve(__dirname, "../src/helpers"),
          "@/styles": path.resolve(__dirname, "../src/styles"),
          "@/svg": path.resolve(__dirname, "../src/svg"),
          "@/types": path.resolve(__dirname, "../src/types"),
          path: "path-browserify",
        },
      },
    });
  },
};

module.exports = config;
