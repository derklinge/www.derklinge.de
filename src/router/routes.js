/*
|-------------------------------------------------------------------------------
| Route Components
|-------------------------------------------------------------------------------
|
*/

import AboutPage from '@/components/pages/AboutPage.vue'
import ContactPage from '@/components/pages/ContactPage.vue'
import ImprintPage from '@/components/pages/ImprintPage.vue'
import PrivacyPage from '@/components/pages/PrivacyPage.vue'
import ResumePage from '@/components/pages/ResumePage.vue'
import SkillsPage from '@/components/pages/SkillsPage.vue'

/*
|-------------------------------------------------------------------------------
| Route Definitions
|-------------------------------------------------------------------------------
|
| Each route has to include the following information:
|
| name:
|   An application-unique name of the route, suffixed with the locale used.
|   The locale identifier has to match the one specified within the meta object.
|
| meta:
|
|   basename:
|     Must refer to a localization object nested within the 'navigation' tree of
|     the application's localization object.
|     See contents of folder /i18n.
|
|   locale:
|     The locale this route uses, i.e. 'de' for German.
|
*/
const routes = [

  // Template for new route definitions.
  /*
  {
    name: 'NAME-de',
    path: '/PATH',
    component: SomeComponentPage,
    meta: {
      basename: 'NAME',
      locale: 'de',
    },
  },
  {
    name: 'NAME-en',
    path: '/en/PATH',
    component: SomeComponentPage,
    meta: {
      basename: 'NAME',
      locale: 'en',
    },
  },
  */

  {
    name: 'about-de',
    path: '/',
    component: AboutPage,
    meta: {
      basename: 'about',
      locale: 'de',
    },
  },
  {
    name: 'about-en',
    path: '/en/',
    component: AboutPage,
    meta: {
      basename: 'about',
      locale: 'en',
    },
  },

  {
    name: 'contact-de',
    path: '/kontakt',
    component: ContactPage,
    meta: {
      basename: 'contact',
      locale: 'de',
    },
  },
  {
    name: 'contact-en',
    path: '/en/contact',
    component: ContactPage,
    meta: {
      basename: 'contact',
      locale: 'en',
    },
  },

  {
    name: 'imprint-de',
    path: '/impressum',
    component: ImprintPage,
    meta: {
      basename: 'imprint',
      locale: 'de',
    },
  },
  {
    name: 'imprint-en',
    path: '/en/imprint',
    component: ImprintPage,
    meta: {
      basename: 'imprint',
      locale: 'en',
    },
  },

  {
    name: 'privacy-de',
    path: '/datenschutz',
    component: PrivacyPage,
    meta: {
      basename: 'privacy',
      locale: 'de',
    },
  },
  {
    name: 'privacy-en',
    path: '/en/privacy',
    component: PrivacyPage,
    meta: {
      basename: 'privacy',
      locale: 'en',
    },
  },

  {
    name: 'resume-de',
    path: '/lebenslauf',
    component: ResumePage,
    meta: {
      basename: 'resume',
      locale: 'de',
    },
  },
  {
    name: 'resume-en',
    path: '/en/resume',
    component: ResumePage,
    meta: {
      basename: 'resume',
      locale: 'en',
    },
  },

  {
    name: 'skills-de',
    path: '/skills',
    component: SkillsPage,
    meta: {
      basename: 'skills',
      locale: 'de',
    },
  },
  {
    name: 'skills-en',
    path: '/en/skills',
    component: SkillsPage,
    meta: {
      basename: 'skills',
      locale: 'en',
    },
  },
]

export default routes
