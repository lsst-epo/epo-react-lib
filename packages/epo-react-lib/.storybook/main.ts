import { mergeConfig } from "vite";
import { resolve } from "path";
import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-jest",
    "storybook-react-i18next",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {},
  features: {
    storyStoreV7: true,
  },
  staticDirs: [
    {
      from: "../public/localeStrings",
      to: "/locales",
    },
  ],
  async viteFinal(config) {
    return mergeConfig(config, {
      base: "/epo-react-lib/@rubin-epo/epo-react-lib/",
      resolve: {
        alias: {
          path: "path-browserify",
          "@/storybook": resolve(__dirname, "./"),
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
  docs: {
    autodocs: true,
  },
};
export default config;
