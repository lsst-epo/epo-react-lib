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
    getAbsolutePath("storybook-react-i18next"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
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

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
