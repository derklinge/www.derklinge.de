import Vue from 'vue';
import VueI18n from 'vue-i18n';
import localizations_de from './de'
import localizations_en from './en'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'de',
  fallbackLocale: 'en',
  messages: {
    de: localizations_de,
    en: localizations_en,
  },
})

export default i18n
