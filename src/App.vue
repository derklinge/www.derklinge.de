<template>
  <div
    id="app"
    class="container mx-auto"

  >
    <primary-nav
      @change-locale="onChangeLocale" />
    <router-view />
    <footer-nav />
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav.vue'
import PrimaryNav from '@/components/PrimaryNav.vue'

import routes from '@/router/routes'

export default {
  name: 'App',

  components: {
    FooterNav,
    PrimaryNav,
  },

  methods: {
    /**
     * Navigate to a route resembling the current route in the requested locale.
     *
     * @param {String} locale
     */
    onChangeLocale(locale) {
      // Find and navigate to the route that shares the same basename as the
      // current route and matches the request locale, too.
      const navigateTo = routes.find(
        route =>
          route.meta.basename == this.$route.meta.basename &&
          route.meta.locale == locale
      )

      // NOTE:
      // The router's afterEach hook makes sure to keep the document as well as
      // the i18n module in sync with the set locale.
      this.$router.push({ name: navigateTo.name })
    },
  },
}
</script>

<style>
body {
  font-family: 'Fjalla One', sans-serif;
}
</style>
