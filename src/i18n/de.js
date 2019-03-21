/*
|-------------------------------------------------------------------------------
| Localized strings for German locale.
|-------------------------------------------------------------------------------
|
*/

const localizations_de = {

  /*
  |-----------------------------------------------------------------------------
  | Document's Page Title
  |-----------------------------------------------------------------------------
  |
  | Upon navigation to a new route, the new route's localized caption is
  | prepended to this string to compose the HTML document's new page title.
  |
  | DO NOT FORGET to change the initial <title> tag value in index.html, too!
  |
  */
  page_title_suffix: ' - Sebastian Klinge, Software Entwickler :: derklinge.de',

  components: {
    'language-switcher': {
      title: 'Wählen Sie Ihre Sprache',
    },
    'modal-dialog': {
      actions: {
        close: 'Schließen',
      },
    },
  },
  languages: {
    de: {
      caption: 'Deutsch',
      caption_native: 'Deutsch',
    },
    en: {
      caption: 'Englisch',
      caption_native: 'English',
    },
  },
  navigation: {
    about: {
      caption: 'Über mich',
      tooltip: 'Zu meiner Person und meiner Motivation',
    },
    contact: {
      caption: 'Kontakt',
      tooltip: 'Persönlichen Kontakt aufnehmen',
    },
    resume: {
      caption: 'Lebenslauf',
      tooltip: 'Lebenslauf anfordern',
    },
    imprint: {
      caption: 'Impressum',
      tooltip: 'Impressum für derklinge.de anzeigen',
    },
    privacy: {
      caption: 'Datenschutz',
      tooltip: 'Datenschutzerklärung für derklinge.de anzeigen',
    },
    skills: {
      caption: 'Skills',
      tooltip: 'Persönliche und fachliche Fähigkeiten anzeigen.',
    },
  },
}

export default localizations_de
