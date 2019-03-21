import Vue from 'vue'
import VueVisible from 'vue-visible'

import App from '@/App.vue'
import '@/assets/css/tailwind.css'

import i18n from '@/i18n'
import router from '@/router'

Vue.config.productionTip = false

Vue.use(VueVisible)

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
