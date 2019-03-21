<template>
  <form
    class="w-full max-w-xs"

    @submit.prevent="onSubmit"
    @reset.prevent="onReset"
  >
    <div
      class="flex items-center border-b border-b-2 border-teal py-1"
    >

      <input
        ref="search_term_field"
        v-model="search_term"
        :autofocus="autofocus"

        aria-label="Skills nach Thema oder Schlagwort durchsuchen."
        class="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 leading-tight focus:outline-none"
        placeholder="🔍 Skills filtern"
        type="text"
      >
      <button
        v-visible="has_search_term"

        aria-label="Filter zurücksetzen"
        class="flex-no-shrink border-transparent border-4 text-teal hover:text-teal-darker text-sm py-1 rounded"
        title="Filter zurücksetzen"
        type="reset"
      >
        ❌
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    autofocus: {
      default: false,
      required: false,
      type: Boolean,
    },
  },
  data() {
    return {
      search_term: null,
    }
  },
  computed: {
    has_search_term() {
      return this.search_term != null && this.search_term != ''
    },
  },
  methods: {
    onReset() {
      this.search_term = null
      this.$refs.search_term_field.focus()
      this.$emit('search', null)
    },
    onSubmit() {
      this.$emit('search', this.search_term == '' ? null : this.search_term)
    },
  },
}
</script>

<style>

</style>
