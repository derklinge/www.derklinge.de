<template>
  <div
    id="app"
    class="container mx-auto"

  >
    <app-header />
    <main
      class="app-content"
    >
      <router-view />
    </main>
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
  @apply .m-0 .p-0;
  font-family: 'Fjalla One', sans-serif;
}

.app-content {
  @apply .m-0 .p-0;
  padding-top: 170px;
}
</style>
