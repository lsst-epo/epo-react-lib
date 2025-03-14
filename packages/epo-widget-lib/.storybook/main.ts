import { mergeConfig } from "vite";
import { resolve, dirname, join } from "path";
import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-jest"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("storybook-react-i18next"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  core: {},
  typescript: {
    reactDocgen: "react-docgen-typescript", // 👈 react-docgen configured here.
  },
  staticDirs: [
    {
      from: "../../../node_modules/@rubin-epo/epo-react-lib/dist/fonts",
      to: "/fonts",
    },
    {
      from: "../../../node_modules/@rubin-epo/epo-react-lib/dist/localeStrings",
      to: "/locales",
    },
    { from: "../public/localeStrings", to: "/locales" },
  ],
  async viteFinal(config, { configType }) {
    config.plugins = config.plugins?.filter((p) => p?.name !== "vite:dts");

    return mergeConfig(config, {
      base:
        configType === "PRODUCTION" ? "/epo-react-lib/epo-widget-lib/" : "/",
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
  docs: {},
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
