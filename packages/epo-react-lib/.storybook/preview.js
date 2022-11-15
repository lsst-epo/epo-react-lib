import { globalDecorators } from "./decorators";
import i18n from "./i18next.js";

export const parameters = {
  i18n,
  locale: "en",
  locales: {
    en: "English",
    es: "Español",
  },
};

export const decorators = globalDecorators;
////
