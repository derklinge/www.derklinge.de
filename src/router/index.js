import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: '',
  linkExactActiveClass: 'active',
  routes: routes,
  scrollBehavior: () => ({ y: 0 }),
})

export default router
