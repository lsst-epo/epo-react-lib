const path = require("path");
const { mergeConfig } = require("vite");

const config = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-jest",
    "@storybook/addon-a11y",
    "storybook-react-i18next",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
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
        url: "https://lsst-epo.github.io/epo-react-lib/@rubin-epo/epo-react-lib",
      },
    };
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      base: "/epo-react-lib/@rubin-epo/epo-widget-lib/",
      resolve: {
        alias: {
          path: "path-browserify",
          "@/assets": path.resolve(__dirname, "../src/assets"),
          "@/atomic": path.resolve(__dirname, "../src/atomic"),
          "@/hooks": path.resolve(__dirname, "../src/hooks"),
          "@/lib": path.resolve(__dirname, "../src/lib"),
          "@/storybook": path.resolve(__dirname, "./"),
          "@/styles": path.resolve(__dirname, "../src/styles"),
          "@/types": path.resolve(__dirname, "../src/types"),
          "@/widgets": path.resolve(__dirname, "../src/widgets"),
        },
      },
    });
  },
};

module.exports = config;
