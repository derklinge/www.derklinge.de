<template>
  <article
    class="skill-card"
  >
    <h2
      class="skill-card__title"
    >
      {{ title }}
    </h2>
    <div
      class="skill-card__content"
    >
      <slot />
    </div>
  </article>
</template>

<script>
export default {
  name: 'SkillCard',
  props: {
    title: {
      required: true,
      type: String,
    },
  }
}
</script>

<style>
.skill-card {
  @apply .w-full .max-w-xs .mt-8 .ml-2;

  &:first-child {
    @apply .ml-0;
  }
}

.skill-card__title {
  @apply .text-purple-dark .text-2xl .mb-2;
}

.skill-card__content {
  @apply .text-grey-dark .text-base .text-justify;
}
</style>
