import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/unauthenticated/Home.vue'
import login from '../components/unauthenticated/login.vue'
import signup from '../components/unauthenticated/signup.vue'
import feeds from '../components/authenticated/feeds.vue'
import saved from '../components/authenticated/favorite.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name:'home',
      path:'/',
      component:Home
    },
    {
      name:'login',
      path:'/login',
      component:login
    },
    {
      name:'signup',
      path:'/signup',
      component:signup
    },
    {
      name:'feeds',
      path:'/feeds',
      component:feeds
    },
    {
      name:'favorite',
      path:'saved recipe',
      component:saved
    }
  ]
})

export default router
