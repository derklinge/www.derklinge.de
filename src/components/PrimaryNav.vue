<template>
  <nav
    class="primary-nav"
  >
    <div
      class="primary-nav-items"
    >
      <div
        class="primary-nav-items__links"
      >
        <primary-nav-item
          v-for="item in navigation_items"
          :key="item.caption"
          :title="item.tooltip"
          :to="item.route"
        >
          {{ item.caption }}
        </primary-nav-item>
      </div>
      <locale-switcher />
    </div>
  </nav>
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher'
import LocaleSwitcherSimple from '@/components/LocaleSwitcherSimple'
import PrimaryNavItem from '@/components/PrimaryNavItem'

export default {
  name: 'PrimaryNav',
  components: {
    LocaleSwitcher,
    LocaleSwitcherSimple,
    PrimaryNavItem,
  },
  computed: {
    navigation_items() {
      const locale = this.$i18n.locale
      const route_basenames = [
        'about',
        'skills',
        'resume',
        'contact',
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

<style lang="scss">
.primary-nav {
  @apply .flex .items-center .justify-between .bg-primary-nav .pt-2;
}

.primary-nav-items {
  @apply .flex .flex-grow .items-center .w-auto .text-3xl;
}

.primary-nav-items__links {
  @apply .flex-grow;
}
</style>
