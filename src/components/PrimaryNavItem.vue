<template>
  <router-link
    :to="to"
    class="primary-nav-items__item"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'PrimaryNavItem',
  props: {
    to: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style lang="scss">
.primary-nav-items__item {
  @apply .inline-block .mx-4 .pb-4 .no-underline .text-grey-dark;

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
</style>
