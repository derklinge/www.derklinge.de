/*
|-------------------------------------------------------------------------------
| Localized strings for English locale.
|-------------------------------------------------------------------------------
|
*/

const localizations_en = {

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
      title: 'Choose your language',
    },
    'modal-dialog': {
      actions: {
        close: 'Close',
      },
    },
  },

  languages: {
    de: {
      name: 'German',
      native_name: 'Deutsch',
      tooltip: 'Display website in @:languages.de.name (@:languages.de.native_name) language',
    },
    en: {
      name: 'English',
      native_name: 'English',
      tooltip: 'Display website in @:languages.en.name language',
    },
  },

  navigation: {
    about: {
      caption: 'About me',
      tooltip: 'Personal information about me.',
    },
    contact: {
      caption: 'Contact',
      tooltip: 'Get in touch with me',
    },
    resume: {
      caption: 'CV / Resume',
      tooltip: 'Request my formal curriculum vitae / resume',
    },
    imprint: {
      caption: 'Imprint',
      tooltip: 'Display the imprint for derklinge.de',
    },
    privacy: {
      caption: 'Privacy',
      tooltip: 'I rock und so',
    },
    skills: {
      caption: 'Skills',
      tooltip: 'I rock und so',
    },
  },

  pages: {
    skills: {
      no_skills_found: 'I\'m sorry, none of my skills match your keywords.',
    },
  },
}

export default localizations_en
