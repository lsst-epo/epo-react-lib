import { Preview } from "@storybook/react";
import { globalDecorators as decorators } from "./decorators";
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
import i18n, { locales, defaultLocale } from "./i18next";
import theme from "./theme";
import "@rubin-epo/epo-react-lib/styles.css";
import { CustomDocsPage } from "./CustomDocsPage";

const viewports = { ...INITIAL_VIEWPORTS, ...MINIMAL_VIEWPORTS };

const preview: Preview = {
  parameters: {
    i18n,
    viewport: { viewports },
    docs: {
      theme,
      page: CustomDocsPage
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
