<template>
  <div
    class="primary-nav-locale"
  >
    <button
      class="primary-nav-locale__switch"
      title="Sprache ändern (change language)"
      type="button"
      @click="showDialog"
    >
      {{ $i18n.t(`languages.${$i18n.locale}.caption`) }}
    </button>
    <modal-dialog
      :is_active="is_active"
      :title="$i18n.t('components.language-switcher.title')"
      @dialog-cancel="hideDialog"
    >
      <form
        class="locale-switcher__form"
      >
        <button
          v-for="lang in languages"
          :key="lang"
          :class="{
            'locale-form__option--active': $i18n.locale === lang
          }"
          class="locale-form__option"
          type="button"
          @click="changeLocale(lang)"
        >
          {{ $i18n.t(`languages.${lang}.caption_native`) }}
          <span
            v-if="lang !== $i18n.locale"
          >
            / {{ $i18n.t(`languages.${lang}.caption`) }}
          </span>
        </button>
      </form>
    </modal-dialog>
  </div>
</template>

<script>
import ModalDialog from '@/components/ModalDialog'

export default {
  name: 'LocaleSwitcher',

  components: {
    ModalDialog,
  },

  data() {
    return {
      /**
       * Whether the language selection dialog is currently visible.
       */
      is_active: false,
    }
  },

  computed: {
    /**
     * Available languages.
     *
     * @return {Array}
     */
    languages() {
      return this.$i18n.availableLocales
    },
  },

  methods: {
    /**
     * Hides the language selection dialog and emits the 'change-locale' event.
     *
     * @param {String} locale
     */
    changeLocale(locale) {
      this.hideDialog()
      this.$emit('change-locale', locale)
    },
    /**
     * Hides the language selection dialog.
     */
    hideDialog() {
      this.is_active = false
    },
    /**
     * Shows the language selection dialog.
     */
    showDialog() {
      this.is_active = true
    },
/*    changeLocale(locale) {
      this.hideDialog()
      console.log('Routes:', this.$router.routes)
      this.$emit('el-evento')

      if (locale !== this.$i18n.locale) {
        // Navigate to the localized version of the currently active route.
        this.$router.push({
          name: `${this.$route.meta.basename}-${locale}`,
        })
      }
    },*/
  },
}
</script>

<style lang="scss">
.primary-nav-locale {
  &__switch {
    @apply .inline-block .pb-4 .no-underline .text-primary-nav-text;

    &:hover {
      @apply .text-primary-nav-hover;
    }
  }
  &__switch::before {
    content: "🌏";
  }
}

.locale-form__option {
  @apply .block .py-2 .text-lg .border-0 .outline-none .text-purple-dark;

  &:focus {
    @apply .outline-none;
  }

  &:hover {
    @apply .text-purple;
  }

  &::before {
    @apply .invisible .mr-2;
    content: "✓";
  }
}

.locale-form__option--active::before {
  @apply .visible;
  content: "✓";
}
</style>
