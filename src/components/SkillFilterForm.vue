<template>
  <form
    class="my-4 w-full max-w-xs pb-1 border-b border-purple-dark text-purple-dark text-lg"

    @reset="onResetForm"
    @submit.prevent="onSubmitForm"
  >
    <div
      class="flex items-center"
    >
      <label
        class="flex-no-shrink focus:outline-none"
        for="filter"
        tabindex="3010"
        title="Skills nach Schlagworten filtern"
      >
        Schlagworte:
      </label>
      <input
        id="filter"
        v-model.trim="filter"

        class="w-full ml-2 appearance-none bg-transparent border-none focus:outline-none text-grey-dark"
        placeholder="bspw. PHP"
        tabindex="3020"
        type="text"
      >
      <button
        v-visible="has_filter"

        aria-label="Filter zurücksetzen und alle Skills anzeigen"
        class="flex-no-shrink border-transparent text-purple-dark hover:text-purple text-sm"
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
      console.log('Resetting')
      this.filter = null
      this.$emit('reset-filter')
    },
    onSubmitForm() {
      if (this.filter == null || this.filter == '') {
        // Submitting an empty form resets the form to its initial state.
        this.onResetForm()
      } else {
        // Split the filter text into an array of trimmed, lower-cased keywords.
        let keywords = this.filter.split(' ').map(kw => kw.trim().toLowerCase())
        this.$emit('apply-filter', keywords)
      }
    },
    emitApplyFilterEvent() {

    },
    emitResetFilterEvent() {
    },
  },
}
</script>

<style>

</style>
