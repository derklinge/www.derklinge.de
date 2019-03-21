import AboutPage from '@/components/pages/AboutPage.vue'
import ContactPage from '@/components/pages/ContactPage.vue'
import ImprintPage from '@/components/pages/ImprintPage.vue'
import PrivacyPage from '@/components/pages/PrivacyPage.vue'
import ResumePage from '@/components/pages/ResumePage.vue'
import SkillsPage from '@/components/pages/SkillsPage.vue'

/**
 * Definition of all available Vue routes.
 */
const routes = [

  {
    name: 'about-de',
    path: '/',
    component: AboutPage,
    meta: {
      basename: 'about',
    },
  },
  {
    name: 'about-en',
    path: '/en/',
    component: AboutPage,
    meta: {
      basename: 'about',
    },
  },

  {
    name: 'contact-de',
    path: '/kontakt',
    component: ContactPage,
    meta: {
      basename: 'contact',
    },
  },
  {
    name: 'contact-en',
    path: '/en/contact',
    component: ContactPage,
    meta: {
      basename: 'contact',
    },
  },

  {
    name: 'imprint-de',
    path: '/impressum',
    component: ImprintPage,
    meta: {
      basename: 'imprint',
    },
  },
  {
    name: 'imprint-en',
    path: '/en/imprint',
    component: ImprintPage,
    meta: {
      basename: 'imprint',
    },
  },

  {
    name: 'privacy-de',
    path: '/datenschutz',
    component: PrivacyPage,
    meta: {
      basename: 'imprint',
    },
  },
  {
    name: 'privacy-en',
    path: '/en/privacy',
    component: PrivacyPage,
    meta: {
      basename: 'imprint',
    },
  },

  {
    name: 'resume-de',
    path: '/lebenslauf',
    component: ResumePage,
    meta: {
      basename: 'resume',
    },
  },
  {
    name: 'resume-en',
    path: '/en/resume',
    component: ResumePage,
    meta: {
      basename: 'resume',
    },
  },

  {
    name: 'skills-de',
    path: '/skills',
    component: SkillsPage,
    meta: {
      basename: 'skills',
    },
  },
  {
    name: 'skills-en',
    path: '/en/skills',
    component: SkillsPage,
    meta: {
      basename: 'skills',
    },
  },
]

export default routes
