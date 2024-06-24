import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const defaultNS = "epo-widget-lib";
const ns = [defaultNS, "epo-react-lib"];
export const locales = {
  en: "English",
  es: "Español",
  fr: "Français",
};

export const defaultLocale = "en";

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    backend: { loadPath: "./locales/{{lng}}/{{ns}}.json" },
    // debug: process.env.NODE_ENV === "development",
    lng: defaultLocale,
    fallbackLng: defaultLocale,
    ns,
    defaultNS,
    fallbackNS: ns,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    supportedLngs: Object.keys(locales),
  });

export default i18n;
