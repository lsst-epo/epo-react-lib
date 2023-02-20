const path = require("path");
const { mergeConfig } = require("vite");

const config = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-jest",
    "storybook-react-i18next",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
    buildStoriesJson: true,
  },
  staticDirs: [{ from: "../src/assets/locales", to: "/assets/locales" }],
  refs: (config, { configType }) => {
    if (configType === "DEVELOPMENT") {
      return {
        "epo-react-lib": {
          title: "EPO UI Library",
          url: "http://localhost:6006",
        },
      };
    }
    return {
      "epo-react-lib": {
        title: "EPO UI Library",
        url: "https://epo-react-lib.netlify.app",
      },
    };
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      base: "/epo-widget-lib/",
      resolve: {
        alias: {
          path: "path-browserify",
          "@/assets": path.resolve(__dirname, "../src/assets"),
          "@/widgets": path.resolve(__dirname, "../src/widgets"),
        },
      },
    });
  },
};

module.exports = config;
