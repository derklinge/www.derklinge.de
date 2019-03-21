<template>
  <header
    class="app-header"
  >
    <app-header-nav
    />
  </header>
</template>

<script>
import AppHeaderNav from '@/components/AppHeaderNav'

export default {
  name: 'AppHeader',

  components: {
    AppHeaderNav,
  },

  data() {
    return {
      // ...
    }
  },

  methods: {
    // ...
  },
}
</script>

<style lang="scss">
.app-header {
  @apply .fixed .mx-auto .w-full .bg-app;
  z-index: 1000;
}
</style>
