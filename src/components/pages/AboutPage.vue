<template>
  <h1
    class="text-grey-dark text-3xl"
  >
    About
  </h1>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>

<style lang="scss">
.button {
  @apply .inline-block .p-4 .border-2 .border-blue-dark .rounded-lg .text-xl .text-blue-dark;

  &:hover {
    @apply .border-blue .text-blue;
  }
}

.button__inner {
  &::before {
    content: "» ";
    visibility: hidden;

    &:hover {
      visibility: visible;
    }
  }

  &::after {
    content: " «";
    visibility: hidden;

    &:hover {
      visibility: visible;
    }
  }
}
</style>
