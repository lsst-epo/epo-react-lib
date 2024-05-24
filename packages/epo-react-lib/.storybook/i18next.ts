import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import Backend, { HttpBackendOptions } from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

export const locales = {
  en: "English",
  es: "Español",
  fr: "Français",
};

export const defaultLocale = "en";

const ns = ["epo-react-lib"];

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init<HttpBackendOptions>({
    backend: { loadPath: "./locales/{{lng}}/{{ns}}.json" },
    debug: process.env.NODE_ENV === "development",
    lng: defaultLocale,
    fallbackLng: defaultLocale,
    ns,
    defaultNS: "epo-react-lib",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    supportedLngs: Object.keys(locales),
  });

export default i18n;
