import { localeStrings } from "@rubin-epo/epo-react-lib";
import en from "./en/translation.json";
import es from "./es/translation.json";

en.translation = { ...en.translation, ...localeStrings.en.translation };
es.translation = { ...es.translation, ...localeStrings.es.translation };

export default { en, es };
