<template>
  <div
    id="app"
    class="container mx-auto"

  >
    <app-header
    />
    <router-view />
    <footer-nav />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import FooterNav from '@/components/FooterNav.vue'

import routes from '@/router/routes'

export default {
  name: 'App',

  components: {
    AppHeader,
    FooterNav,
  },
}
</script>

<style>
body {
  font-family: 'Fjalla One', sans-serif;
}
</style>
