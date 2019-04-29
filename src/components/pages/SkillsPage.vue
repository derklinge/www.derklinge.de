<template>
  <div>
    <skill-filter-form
      @apply-filter="onApplyFilter"
      @reset-filter="onResetFilter"
    />

    <!-- List all (possibly filtered) skills. -->
    <section
      v-if="has_skills"
      class="flex flex-wrap items-center justify-between"
    >
      <skill-card
        v-for="(value, key, index) in skills"
        :key="index"
        :title="value.title"
      >
        {{ value.content }}
      </skill-card>
    </section>

    <!-- No skill matches the given filters. -->
    <section
      v-else
    >
      <p
        v-t="'pages.skills.no_skills_found'"
        class="text-grey-dark text-lg"
      />
    </section>

  </div>
</template>

<script>
import SkillCard from '@/components/SkillCard'
import SkillFilterForm from '@/components/SkillFilterForm'
import SkillsData from '@/assets/data/SkillsData'

export default {
  name: 'SkillsPage',
  components: {
    SkillCard,
    SkillFilterForm,
  },
  data() {
    return {
      all_skills: SkillsData,
      skills: [],
    }
  },
  computed: {
    has_skills() {
      return this.skills.length > 0
    },
  },
  created() {
    this.skills = this.all_skills
  },
  methods: {
    onApplyFilter(keywords) {
      console.log('Applying filter keywords: ', keywords)
      // Display any skill matching at least one of the given keywords.
      this.skills = this.all_skills.filter(skill => {
        let include_skill = false
        keywords.forEach(keyword => {
          if (skill.keywords.includes(keyword)) {
            include_skill = true
          }
        })
        return include_skill
      })
      console.log(this.skills)
    },
    onResetFilter() {
      console.log('Resetting filter now')
      this.skills = this.all_skills
    },
  },
}
</script>

<style>

</style>
