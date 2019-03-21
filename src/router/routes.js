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
| Each route has to include the following meta information:
|
| basename:
|   the application's localization object.
|   See contents of folder /i18n.
|
| display_order:
|   Display order priority of the route within its display_type.
|
| display_type:
|   Where this route's generated router-link is displayed automatically.
|   Allowed values: 'primary', 'secondary'
|
| locale:
|   The locale this route uses, i.e. 'de' for German.
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
      display_order: 100,
      display_type: 'primary',
      locale: 'de',
    },
  },
  {
    name: 'NAME-en',
    path: '/en/PATH',
    component: SomeComponentPage,
    meta: {
      basename: 'NAME',
      display_order: 100,
      display_type: 'primary',
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
      display_order: 110,
      display_type: 'primary',
      locale: 'de',
    },
  },
  {
    name: 'about-en',
    path: '/en/',
    component: AboutPage,
    meta: {
      basename: 'about',
      display_order: 110,
      display_type: 'primary',
      locale: 'en',
    },
  },

  {
    name: 'contact-de',
    path: '/kontakt',
    component: ContactPage,
    meta: {
      basename: 'contact',
      display_order: 140,
      display_type: 'primary',
      locale: 'de',
    },
  },
  {
    name: 'contact-en',
    path: '/en/contact',
    component: ContactPage,
    meta: {
      basename: 'contact',
      display_order: 140,
      display_type: 'primary',
      locale: 'en',
    },
  },

  {
    name: 'imprint-de',
    path: '/impressum',
    component: ImprintPage,
    meta: {
      basename: 'imprint',
      display_order: 220,
      display_type: 'secondary',
      locale: 'de',
    },
  },
  {
    name: 'imprint-en',
    path: '/en/imprint',
    component: ImprintPage,
    meta: {
      basename: 'imprint',
      display_order: 220,
      display_type: 'secondary',
      locale: 'en',
    },
  },

  {
    name: 'privacy-de',
    path: '/datenschutz',
    component: PrivacyPage,
    meta: {
      basename: 'privacy',
      display_order: 210,
      display_type: 'secondary',
      locale: 'de',
    },
  },
  {
    name: 'privacy-en',
    path: '/en/privacy',
    component: PrivacyPage,
    meta: {
      basename: 'privacy',
      display_order: 210,
      display_type: 'secondary',
      locale: 'en',
    },
  },

  {
    name: 'resume-de',
    path: '/lebenslauf',
    component: ResumePage,
    meta: {
      basename: 'resume',
      display_order: 130,
      display_type: 'primary',
      locale: 'de',
    },
  },
  {
    name: 'resume-en',
    path: '/en/resume',
    component: ResumePage,
    meta: {
      basename: 'resume',
      display_order: 130,
      display_type: 'primary',
      locale: 'en',
    },
  },

  {
    name: 'skills-de',
    path: '/skills',
    component: SkillsPage,
    meta: {
      basename: 'skills',
      display_order: 120,
      display_type: 'primary',
      locale: 'de',
    },
  },
  {
    name: 'skills-en',
    path: '/en/skills',
    component: SkillsPage,
    meta: {
      basename: 'skills',
      display_order: 120,
      display_type: 'primary',
      locale: 'en',
    },
  },
]

export default routes
