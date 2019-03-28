<template>
  <nav
    class="container app-header-nav"
  >
    <div
      class="app-header-nav__primary"
    >
      <router-link
        v-for="item in primaryNavItems"
        :key="item.name"
        :to="item.route"
        :title="item.tooltip"
        class="app-header-nav__primary__item"
      >
        {{ item.caption }}
      </router-link>
    </div>

    <div
      class="app-header-nav__languages"
    >
      <router-link
        v-for="item in languageNavItems"
        :key="item.locale"
        :to="item.route"
        :title="item.tooltip"
        class="app-header-nav__languages__item"
      >
        {{ item.caption }}
      </router-link>
    </div>

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
     * All routes meant to be displayed as items in the app's primary navbar.
     *
     * @return {Array}
     */
    primaryNavItems() {
      // Find all primary navigation routes matching the current locale and
      // extract and translate their meta data for display respectively.
      return routes.filter(route => {
        return route.meta.display_type === 'primary' &&
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
    /**
     * All languages meant to be displayed for quick switching between locales.
     *
     * @return {Array}
     */
    languageNavItems() {
      return this.$i18n.availableLocales.map(locale => {
        const basename = this.$route.meta.basename
        const route = this.localizedRoute(basename, locale)
        return {
          caption: this.$t('languages.' + locale + '.name'),
          locale: locale,
          route: { name: route.name },
          tooltip: this.$t('languages.' + locale + '.tooltip'),
        }
      })
    },
  },

  methods: {
    /**
     * Returns the route definition for the given route basename and locale.
     *
     * TODO: Move to a helper function coupled with the router module.
     *
     * @return {Object}
     */
    localizedRoute(basename, locale) {
      return routes.find(route => {
        return route.meta.basename === basename &&
               route.meta.locale === locale
      })
    }
  },
}
</script>

<style lang="scss">
.app-header-nav {
  @apply .flex .items-center .justify-between .bg-transparent .mx-auto .mb-4;
}

.app-header-nav__primary {
  @apply .w-full .text-base;
  @screen lg {
    @apply .text-2xl;
  }
}

.app-header-nav__primary__item {
  @apply .inline-block .ml-2 .mb-2 .no-underline .text-grey-dark;

  @screen lg {
    @apply .ml-8 .mb-4
  }

  &:first-child {
    @apply .ml-0;
  }

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

.app-header-nav__languages {
  @apply .flex .flex-grow .items-center .w-auto .text-sm;

  @screen lg {
    @apply .text-xl;
  }
}

.app-header-nav__languages__item {
  @apply .inline-block .ml-1 .pl-1 .mb-2 .border-l .border-grey-darker .no-underline .text-grey-dark;

  @screen lg {
    @apply .ml-2 .pl-2 .mb-4
  }

  &.active {
    @apply .text-purple-dark;

    &:hover {
      @apply .text-purple;
    }
  }

  &:hover {
    @apply .text-grey-light;
  }

  &:first-child {
    @apply .ml-0 .pl-0 .border-0;
  }
}

.app-header-nav__languages__item.active {
  @apply .text-purple-dark;

  &:hover {
    @apply .text-purple;
  }
}
</style>
