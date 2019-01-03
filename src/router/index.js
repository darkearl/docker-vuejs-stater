import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)
var router = new VueRouter({
  routes,
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior: function( o, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const requiresNotAuth = to.matched.some(x => x.meta.requiresNotAuth)
  // const currentUser = FireStoreAPI.getAuth()

  // if (requiresAuth && !currentUser) {
  //   next('/login')
  // }
  // else if (requiresNotAuth && currentUser) {
  //   next('/dashboard')
  // }
  // else {
  //   next()
  // }
  next()
})

export default router
