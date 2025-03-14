import { Preview } from "@storybook/react";
import { globalDecorators as decorators } from "./decorators";
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
import i18n, { locales, defaultLocale } from "./i18next";
import theme from "./theme";
import "@/styles/css/index.css";

const viewports = { ...INITIAL_VIEWPORTS, ...MINIMAL_VIEWPORTS };

const preview: Preview = {
  parameters: {
    i18n,
    viewport: { viewports },
    docs: {
      theme,
    },
  },

  decorators,

  tags: ["autodocs"],
  initialGlobals: {
    locale: defaultLocale,
    locales,
  }
};

export default preview;
