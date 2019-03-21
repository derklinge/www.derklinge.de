<template>
  <div
    id="app"
    class="container mx-auto"

  >
    <primary-nav />
    <router-view />
    <footer-nav />
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav.vue'
import PrimaryNav from '@/components/PrimaryNav.vue'

export default {
  name: 'App',
  components: {
    FooterNav,
    PrimaryNav,
  },
}
</script>

<style>
body {
  font-family: 'Fjalla One', sans-serif;
}
</style>
