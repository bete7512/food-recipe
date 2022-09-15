import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/unauthenticated/home.vue'
import feeds from '../components/authenticated/feeds.vue'
import favorite from '../components/authenticated/favorite.vue'
import detail from '../components/unauthenticated/detail.vue'
import recipedetailVue from '@/components/authenticated/recipedetail.vue'
import searchVue from '@/components/authenticated/search.vue'
import { useStore } from '../stores/store.js'
import userdetail from '../components/unauthenticated/userdetail.vue'
import user from '../components/authenticated/usersrecipe.vue'
import profile from '../components/authenticated/person/editprofile.vue'
import myrecipe from '../components/authenticated/person/myrecipe.vue'

import createrecipe from '../components/authenticated/create-recipe.vue'
import searchunauthenticated from '../components/unauthenticated/searchUnauthenticated.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: home,
    },
    {
      name:'profile',
      path:'/profile/:id',
      component:profile
    },
    {
      name:'myrecipe',
      path:'/my-profile/:id',
      component:myrecipe
    },
    {
      name: 'searchunauthenticated',
      path: '/searchunauth/:id',
      component: searchunauthenticated
    },
    {
      name:'user',
      path:'/user/:id',
      component:user
    },
    {
      name:'userdetail',
      path:'/user-detail/:id',
      component:userdetail
    },
    {
      name: 'recipedetail',
      path: '/recipedetail/:id',
      component: recipedetailVue
    },
    {
      name:'detail',
      path:'/detail/:id',
      component:detail
    },
    {
      name: 'feeds',
      path: '/recipes',
      component: feeds
    },
    {
      name: 'addrecipe',
      path: '/create-new-recipe',
      component: createrecipe
    },
    {
      name: 'favorite',
      path: '/saved-recipe',
      component: favorite
    },
    {
      name: 'search',
      path: '/search/:id',
      component: searchVue
    }
  ]
})
// router.beforeEach(async (to) => {
//   const publicPages = ['/','/main/:id','/searchunauth/:id','/recipedetail/:id','/search/:id'];
//   const authRequired = !publicPages.includes(to.path);
//   const user = useStore();
//   if (authRequired && !user.isauthenticated) {
//     user.returnUrl = to.fullPath;
//     return '/';
//   }
// });
export default router



