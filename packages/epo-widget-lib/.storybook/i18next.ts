import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const defaultNS = "epo-widget-lib";
const ns = [defaultNS, "epo-react-lib"];
const supportedLngs = ["en", "es"];

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    ns,
    defaultNS,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    supportedLngs,
  });

export default i18n;
