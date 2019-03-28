<template>
  <header
    class="app-header"
  >
    <div
      class="container mx-auto pb-2 mt-2 mb-4 border-b border-black"
    >
      <div
        class="leading-tight text-purple-dark text-2xl lg:text-5xl"
      >
        Sebastian Klinge
      </div>
      <div
        class="text-grey-darkest text-sm lg:text-xl"
      >
        Software-Entwickler, Paranoid Parrot und Nordish by Nature!
      </div>
    </div>
    <app-header-nav />
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
  @apply .fixed .bg-app .w-full;
  left: 0;
  top: 0;
  z-index: 9999;
}
</style>
