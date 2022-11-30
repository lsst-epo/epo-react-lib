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
  },
  staticDirs: [{ from: "../src/assets/locales", to: "/assets/locales" }],
  async viteFinal(config) {
    return mergeConfig(config, {
      base: "/epo-react-lib/",
      resolve: {
        alias: {
          "@/assets": path.resolve(__dirname, "../src/assets"),
          "@/atomic": path.resolve(__dirname, "../src/atomic"),
          "@/form": path.resolve(__dirname, "../src/form"),
          "@/helpers": path.resolve(__dirname, "../src/helpers"),
          "@/hooks": path.resolve(__dirname, "../src/hooks"),
          "@/layout": path.resolve(__dirname, "../src/layout"),
          "@/lib": path.resolve(__dirname, "../src/lib"),
          "@/styles": path.resolve(__dirname, "../src/styles"),
          "@/svg": path.resolve(__dirname, "../src/svg"),
          "@/types": path.resolve(__dirname, "../src/types"),
          path: "path-browserify",
        },
      },
      define: {
        "process.env.STORYBOOK_ENV": JSON.stringify(process.env.STORYBOOK_ENV),
        "process.env.STORYBOOK_PUBLIC_BASE_URL": JSON.stringify(
          process.env.STORYBOOK_PUBLIC_BASE_URL
        ),
      },
    });
  },
};

module.exports = config;
