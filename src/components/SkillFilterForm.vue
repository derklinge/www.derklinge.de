<template>
  <form
    class="skill-filter-form"
    @reset="onResetForm"
    @submit.prevent="onSubmitForm"
  >
    <div
      class="skill-filter-form__wrapper"
    >
      <label
        class="skill-filter-form__label"
        for="filter"
        tabindex="3010"
        title="Skills nach Schlagworten filtern"
      >
        Schlagworte:
      </label>
      <input
        id="filter"
        v-model.trim="filter"
        autocomplete="off"
        class="skill-filter-form__input"
        placeholder="bspw. PHP"
        tabindex="3020"
        type="text"
      >
      <button
        v-visible="has_filter"
        aria-label="Filter zurücksetzen und alle Skills anzeigen"
        class="skill-filter-form__reset"
        tabindex="3030"
        title="Filter zurücksetzen und alle Skills anzeigen"
        type="reset"
      >
        ❌
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SkillFilterForm',
  data() {
    return {
      filter: null,
    }
  },
  computed: {
    has_filter() {
      return this.filter != null && this.filter != ''
    },
  },
  methods: {
    onResetForm() {
      this.filter = null
      this.$emit('reset-filter')
    },
    onSubmitForm() {
      if (this.has_filter) {
        // Split the filter text into an array of trimmed, lower-cased keywords.
        const keywords = this.filter.split(' ').map(kw =>
          kw.trim().toLowerCase()
        )
        this.$emit('apply-filter', keywords)
      } else {
        // Submitting an empty form resets the form to its initial state.
        this.onResetForm()
      }
    },
  },
}
</script>

<style lang="scss">
.skill-filter-form {
  @apply .my-4 .w-full .max-w-xs .pb-1 .border-b .border-purple-dark .text-purple-dark .text-lg;
}

.skill-filter-form__wrapper {
  @apply .flex .items-center;
}

.skill-filter-form__label {
  @apply .flex-shrink-0 .outline-none;

  &:focus {
    @apply .outline-none;
  }
}

.skill-filter-form__input {
  @apply .w-full .ml-2 .appearance-none .outline-none .bg-transparent .border-none .text-grey-dark;

  &:focus {
    @apply .outline-none;
  }
}

.skill-filter-form__reset {
  @apply .flex-shrink-0 .border-transparent .text-purple-dark .text-sm;

  &:focus {
    @apply .outline-none;
  }

  &:hover {
    @apply .text-purple;
  }
}
</style>
