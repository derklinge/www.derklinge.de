<template>
  <div
    :class="{ 'dialog--active': is_active }"
    class="dialog"
  >
    <div
      class="dialog__wrapper"
    >
      <div
        v-if="has_title"
        class="dialog__header"
      >
        <h3
          class="dialog__header-text"
        >
          {{ title }}
        </h3>
        <button
          :title="$i18n.t('components.modal-dialog.actions.close')"
          class="dialog__header-action"
          type="button"
          @click="onClickCancel"
        >
          ❌
        </button>
      </div>
      <div class="dialog__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocaleDialog',
  props: {
    is_active: {
      default: false,
      required: false,
      type: Boolean,
    },
    title: {
      default: '',
      required: false,
      type: String,
    },
  },
  computed: {
    has_title() {
      return this.title != null && this.title != ''
    },
  },
  methods: {
    onClickCancel() {
      this.$emit('dialog-cancel')
    }
  }
}
</script>

<style>
.dialog {
  @apply .hidden .fixed .w-full .h-full .overflow-auto .bg-app;
  left: 0;
  top: 0;
  z-index: 1;
}

.dialog--active {
  @apply .block;
}

.dialog__wrapper {
  @apply .mx-auto .my-16 .max-w-xs .bg-app;
}

.dialog__header {
  @apply .flex .items-center .justify-between .pb-2 .border-b .border-purple-dark .text-purple-dark;
}

.dialog__header-text {
  @apply .flex .flex-grow .text-xl
}

.dialog__header-action {
  @apply .flex-shrink-0 .border-transparent .text-purple-dark .text-sm;

  &:hover {
    @apply .text-purple
  }
}

.dialog__content {
  @apply .my-4;
}
</style>
