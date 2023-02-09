import { localeStrings } from "@rubin-epo/epo-react-lib";
import en from "./en/translation.json";
import es from "./es/translation.json";

export default {
  en: { ...localeStrings.en, ...en },
  es: { ...localeStrings.es, ...es },
};
