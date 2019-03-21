import Vue from 'vue'
import VueRouter from 'vue-router'

/*
|-------------------------------------------------------------------------------
| Import Localization Module
|-------------------------------------------------------------------------------
|
| Redundantly included here to have access to localization services during
| route changes, see the router.afterEach hook definition below.
|
| Usually this is available through injection into the Vue view-model which does
| not work here, though.
|
*/

import i18n from '@/i18n'

/*
|-------------------------------------------------------------------------------
| Import Application Routes
|-------------------------------------------------------------------------------
|
| These are all routes registered for the application.
|
*/

import routes from './routes'

/*
|-------------------------------------------------------------------------------
| Register Router
|-------------------------------------------------------------------------------
|
| This hook will ensure that the current i18n locale matches the current route.
|
| Also the <html>-tag will be updated with the new locale, so its lang-attribute
| matches the new route's locale.
|
| Finally the document's <title>-tag is updated, too, using the new route's
| localized title.
|
*/

Vue.use(VueRouter)
const router = new VueRouter({
  routes: routes,

  // Use HTML5 history mode instead of hash-bangs.
  mode: 'history',

  // Do not add a CSS class to partially matched routes.
  linkActiveClass: '',

  // Add a CSS class to exactly matched routes, though.
  linkExactActiveClass: 'active',

  scrollBehavior: () => ({ y: 0 }),
})

/*
|-------------------------------------------------------------------------------
| Global Router afterEach-Hook
|-------------------------------------------------------------------------------
|
| This hook is called upon successful navigation to a new route and will ensure
| the i18n module's current locale matches the new route's locale.
|
| Also the <html>-tag will be updated with the new locale, so its lang-attribute
| matches the new route's locale.
|
| Finally the document's <title>-tag is updated, too, using the new route's
| localized title.
|
*/

router.afterEach((to, from) => {
  // Change the currently active locale first.
  i18n.locale = to.meta.locale

  // Update the lang-attribute of the document's <html>-tag.
  document.getElementsByTagName("html")[0].lang = i18n.locale

  // Update the document's <title>-tag with the new route's localized title.
  document.getElementsByTagName("title")[0].innerText =
    i18n.t(`navigation.${to.meta.basename}.caption`) +
    i18n.t('page_title_suffix')
})

export default router
