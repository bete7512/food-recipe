import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/unauthenticated/Home.vue'
import login from '../components/unauthenticated/login.vue'
import signup from '../components/unauthenticated/signup.vue'
import feeds from '../components/authenticated/feeds.vue'
import favorite from '../components/authenticated/favorite.vue'
import main from '../components/authenticated/main.vue'
import recipedetailVue from '@/components/authenticated/recipedetail.vue'
// import { useStore } from '../stores/store.js';
import searchVue from '@/components/authenticated/search.vue'
import emailsentmodal from '../components/unauthenticated/emailsentmodal.vue'
import { useStore } from '../stores/store.js'
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
      name:'recipedetail',
      path:'/recipedetail/:id',
      component:recipedetailVue
    },
    {
      name: 'main',
      path: '/main/:id',
      component: main,
      children: [
        {
          name: 'feeds',
          path: '',
          component: feeds
        },
        {
          name: 'addrecipe',
          path: '',
          component: createrecipe
        },
        {
          name: 'favorite',
          path: '',
          component: favorite
        },
        {
          name:'search',
          path:'/search/:id',
          component:searchVue
        }
      ]
    },

  ]
})
router.beforeEach(async (to) => {
  const publicPages = ['/', '/login', '/signup','/recipedetail/:id','search/:id'];
  const authRequired = !publicPages.includes(to.path);
  const user = useStore();
  if (authRequired && !window.localStorage.getItem("Apollotoken")) {
    user.returnUrl = to.fullPath;
    return '/login';
  }
});
export default router


/*
const search_query = gql`
query MyQuery($ingridient: String="", $categories: String="", $title: String="", $durations: Int = 10) {
  recipe(where:_and:[{_and:[{categories: {_eq: $categories}},{durations: {_eq: $durations}}]}, {_or:[{ingredient: {_ilike: $ingridient}}, {title: {_ilike: $title}}]}]) {
  id
  */
