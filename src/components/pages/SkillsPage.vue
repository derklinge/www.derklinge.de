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

export default {
  name: 'SkillsPage',
  components: {
    SkillCard,
    SkillFilterForm,
  },
  data() {
    return {
      all_skills: [
        {
          keywords: ['c', 'c++'],
          title: 'C/C++',
          content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        },
        {
          keywords: ['c#', '.net', 'microsoft'],
          title: 'C#',
          content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        },
        {
          keywords: ['rest', 'api', 'webservice', 'webservices', 'json'],
          title: 'REST APIs / Web Services',
          content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        },
        {
          keywords: ['python'],
          title: 'Python',
          content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        },
        {
          keywords: ['c#', 'vb.net', '.net', 'microsoft'],
          title: '.NET Framework',
          content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        },
        {
          keywords: ['php', 'web', 'rest', 'json', 'internet'],
          title: 'PHP',
          content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        },
        {
          keywords: ['php', 'web', 'rest', 'json', 'internet', 'laravel'],
          title: 'Laravel Framework',
          content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        },
      ],
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
