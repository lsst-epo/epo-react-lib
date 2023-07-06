import { globalDecorators } from "./decorators";
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
import i18n from "./i18next.js";

const viewports = { ...INITIAL_VIEWPORTS, ...MINIMAL_VIEWPORTS };

export const parameters = {
  i18n,
  locale: "en",
  locales: {
    en: "English",
    es: "Español",
  },
  viewport: { viewports },
};

export const decorators = globalDecorators;
////
