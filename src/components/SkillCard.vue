<template>
  <article
    class="w-full max-w-xs mt-8"
  >
    <h2
      class="text-purple-dark text-2xl mb-2"
    >
      {{ title }}
    </h2>
    <div
      class="text-grey-dark text-base text-justify"
    >
      {{ content }}
    </div>
  </article>
</template>

<script>
export default {
  name: 'SkillCard',
  props: {
    content:{
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
  }
}
</script>

<style>

</style>
