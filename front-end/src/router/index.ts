import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/Home.vue'
import login from '../pages/logIn.vue'
import signup from '../pages/signUp.vue'
import createRecipe from '../pages/addNewRecipe.vue'
import editRecipe from '../pages/edit_self_recipe.vue'
import editProfile from '../pages/editProfile.vue'
import recipeDetail from '../pages/recipeDetail.vue'
import savedRecipe from '../pages/savedRecipe.vue'
import searchRecipe from '../pages/searchedRecipe.vue'
import selfRecipe from '../pages/selfRecipe.vue'
import usersrecipe from '../pages/usersRecipe.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: home,
      meta: { layout: 'main' }
    },
    {
      name: 'login',
      path: '/signin',
      component: login,
      meta: { layout: 'empty' }
    },
    {
      name: 'signup',
      path: '/signup',
      component: signup,
      meta: { layout: 'empty' }
    },
    {
      name: 'createRecipe',
      path: '/createrecipe',
      component: createRecipe,
      meta: { layout: 'main' },
    },
    {
      name: 'editRecipe',
      path: '/editrecipe/:id',
      component: editRecipe,
      meta: { layout: 'main' },
    },
    {
      name: 'editProfile',
      path: '/editprofile',
      component: editProfile,
      meta: { layout: 'main' },
    },
    {
      name: 'recipeDetail',
      path: '/recipedetail/:id',
      component: recipeDetail,
      meta: { layout: 'main' },
    },
    {
      name: 'savedRecipe',
      path: '/savedrecipe',
      component: savedRecipe,
      meta: { layout: 'main' },
    },
    {
      name: 'searchRecipe',
      path: '/searchrecipe/:data',
      component: searchRecipe,
      meta: { layout: 'main' },
    },
    {
      name: 'myRecipe',
      path: '/myrecipe',
      component: selfRecipe,
      meta: { layout: 'main' },
    },
    {
      name: 'userRecipe',
      path: '/userrecipe/:id',
      component: usersrecipe,
      meta: { layout: 'main' },
    },
  ]
})

export default router



