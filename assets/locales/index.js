import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import en from 'assets/locales/en.json'
import fr from 'assets/locales/fr.json'

i18n.fallbacks = true;
i18n.defaultLocale = 'en'
i18n.locale = RNLocalize.getLocales()?.[0]?.languageCode;

i18n.translations = {
  en,
  fr
}

export default i18n
