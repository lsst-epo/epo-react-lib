import { Preview } from "@storybook/react";
import { globalDecorators as decorators } from "./decorators";
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
import i18n from "./i18next";
import theme from "./theme";

const viewports = { ...INITIAL_VIEWPORTS, ...MINIMAL_VIEWPORTS };

const preview: Preview = {
  globals: {
    locale: "en",
    locales: {
      en: "English",
      es: "Español",
    },
  },
  parameters: {
    i18n,
    viewport: { viewports },
    docs: {
      theme,
    },
  },
  decorators,
};

export default preview;
