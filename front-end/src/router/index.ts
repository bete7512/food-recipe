import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/unauthenticated/Home.vue'
import login from '../components/unauthenticated/login.vue'
import signup from '../components/unauthenticated/signup.vue'
import feeds from '../components/authenticated/feeds.vue'
import favorite from '../components/authenticated/favorite.vue'
import main from '../components/authenticated/main.vue'
import createrecipe from '../components/authenticated/create-recipe.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'login',
      path: '/login',
      component: login
    },
    {
      name: 'signup',
      path: '/signup',
      component: signup
    },
    {
      name: 'main',
      path: '/main',
      component: main,
      children:[
        {
          name:'addrecipe',
          path:'addnewrecipe',
          component:createrecipe
        },
        {
          name:'favorite',
          path:'savedrecipe',
          component:favorite
        },
        {
          name:'feeds',
          path:'feeds',
          component:feeds
        }
      ]
    },

  ]
})

export default router
