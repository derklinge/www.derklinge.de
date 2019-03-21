<template>
  <footer
    class="app-footer"
  >
    <app-footer-nav />

    <p
      class="mt-8 text-grey-darkest text-sm text-center"
    >
      Copyright &copy; 2019 Sebastian Klinge
    </p>
  </footer>
</template>

<script>
import AppFooterNav from '@/components/AppFooterNav'

export default {
  name: 'AppFooter',

  components: {
    AppFooterNav,
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
.app-footer {
  @apply .mt-16 .pt-4 .border-t .border-black;
}

.app-footer__nav {

}
</style>
