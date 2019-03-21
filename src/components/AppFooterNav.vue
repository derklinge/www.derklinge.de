<template>
  <nav
    class="app-footer-nav"
  >
    <router-link
      v-for="item in secondaryNavItems"
      :key="item.name"
      :to="item.route"
      :title="item.tooltip"
      class="app-footer-nav__item"
    >
      {{ item.caption }}
    </router-link>
  </nav>
</template>

<script>
// import NestedComponent from '@/components/NestedComponent
import routes from '@/router/routes'

export default {
  name: 'AppHeaderNav',

  components: {
    // NestedComponent,
  },

  data() {
    return {
      // ...
    }
  },

  computed: {
    /**
     * All routes meant to be displayed as items in the app's footer navbar.
     *
     * @return {Array}
     */
    secondaryNavItems() {
      // Find all primary navigation routes matching the current locale and
      // extract and translate their meta data for display respectively.
      return routes.filter(route => {
        return route.meta.display_type === 'secondary' &&
               route.meta.locale === this.$i18n.locale
      }).map(route => {
        const i18n_root_key = `navigation.${route.meta.basename}.`
        return {
          caption: this.$t(i18n_root_key + 'caption'),
          display_order: route.meta.display_order,
          name: route.meta.basename,
          route: { name: route.name },
          tooltip: this.$t(i18n_root_key + 'tooltip'),
        }
      }).sort((a,b) => {
        return a.display_order - b.display_order
      })
    },
  },
}
</script>

<style lang="scss">
.app-footer-nav {
  @apply .flex .w-full .items-center .justify-center .bg-transparent .mx-auto;
}

.app-footer-nav__item {
  @apply .inline-block .mx-4 .no-underline .text-grey-dark .text-xl;

  &:hover {
    @apply .text-grey-light;
  }

  &.active {
    @apply .text-purple-dark;
  }

  &.active:hover {
    @apply .text-purple;
  }
}
</style>
