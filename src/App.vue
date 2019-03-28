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

    <app-footer />

  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'App',

  components: {
    AppFooter,
    AppHeader,
  },
}
</script>

<style>
body {
  @apply .m-0 .p-0 .leading-none;
  font-family: 'Fjalla One', sans-serif;
}

.app-content {
  @apply .m-0 .p-0;
  padding-top: 170px;
}
</style>
