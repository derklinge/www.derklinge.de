<template>
  <footer
    class="w-full mt-16 mb-8"
  >
    <nav
      class="flex items-center justify-center text-2xl"
    >
      <router-link
        v-for="item in navigation_items"
        :key="item.caption"
        :title="item.tooltip"
        :to="item.route"

        class="inline-block mx-8 no-underline text-grey-dark hover:text-grey-light"
      >
        {{ item.caption }}
      </router-link>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    navigation_items() {
      const locale = this.$i18n.locale
      const route_basenames = [
        'privacy',
        'imprint'
      ]
      return route_basenames.map(name => {
        const nav_item = {
          caption: this.$i18n.t('navigation.' + name + '.caption'),
          route: {
            name: `${name}-${locale}`,
          },
          tooltip: this.$i18n.t('navigation.' + name + '.tooltip'),
        }
        return nav_item
      })
    },
  },
}
</script>

<style>

</style>
