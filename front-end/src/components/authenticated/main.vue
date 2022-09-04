<template>
    <div @click="profile = false" class="relative inset-0 h-full w-full z-10"></div>
    <div class=" bg-cyan-800 h-28  items-center flex justify-center text-6xl font-extrabold">
        <h1><span class="text-yellow-900">Discover</span> Recipe</h1>
    </div>
    <div class="flex justify-between p-3 px-5 shadow-lg">
        <button class="flex p-4 text-orange-700 hover:bg-slate-400 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus"
                viewBox="0 0 16 16">
                <path
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
        </button>
        <div class="flex space-x-3 ">
            <router-link :to="{ name: 'feeds', params: { id: 'recipe' } }">
                <button class="flex p-4 px-8 hover:bg-slate-400 rounded">feeds</button>
            </router-link>
        </div>
        <div class="flex justify-end w-10">
            <div class="">
                <div class="w-44 h-16 flex justify-center space-x-1 items-end rounded p-2 ">
                    <div>Account</div>
                    <button @click="profile = !profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                            class="bi bi-person" viewBox="0 0 16 16">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg>
                    </button>
                </div>
                <div v-if="profile"
                    class="absolute  z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                    <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
                        <div class="font-bold">{{ user.username }}</div>
                        <div class="font-medium text-xs overflow-hidden truncate">betekbebe@.com</div>
                    </div>
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                            <span
                                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My
                                profile</span>
                        </li>
                        <li>
                            <span
                                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My
                                recipe</span>
                        </li>
                        <li>
                            <router-link :to="{ name: 'addrecipe', params: { id: 'createnewecipe' } }">
                                <span
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add
                                    new recipe</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'favorite', params: { id: 'savedrecipe' } }">
                                <span
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Saved
                                    recipe</span>
                            </router-link>
                        </li>
                    </ul>
                    <div class="py-1">
                        <button @click="user.logout"
                            class="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                            out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-center flex-wrap space-y-2 mt-2 ">
        <div class="flex flex-wrap items-center w-1/2 justify-center  border-2  rounded shadow-lg p-4  ">
            <div class="w-80  p-2">
                <div>Title or Ingridient</div>
                <div class="relative w-full h-14">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input type="text" v-model="title"
                        class="block p-2.5 pl-8 w-full h-14 z-20 border-gray-900 text-sm text-gray-900 bg-gray-50 rounded-lg border-2   focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Recipe title,duration(min),ingridient" required>
                </div>
            </div>
            <div class="w-80  p-2">
                <div class="flex justify-between">
                    <div>Duration in minute</div>
                </div>
                <div class="relative w-full h-14">
                    <input type="number" v-model="duration" min="10" 
                        class="block p-2.5 w-full h-14 z-20 border-gray-900 text-sm text-gray-900 bg-gray-50 rounded-lg border-2   focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                     required>
                </div>
            </div>
            <div class="w-50  p-2  justify-start items-end">
                <div class="text-white">here</div>
                <div></div>
                <select v-model="categories"
                    class="bg-gray-50 h-14 px-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">dinner</option>
                </select>
            </div>
            <div class="w-50  p-2">
                <div class="text-white">here</div>
                <button @click="searchrecipe"
                    class="flex justify-center items-center h-14  p-3   w-24 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Filter</button>
            </div>
        </div>
    </div>
    <div class="h-auto">
        <router-view></router-view>
    </div>
</template>
<script setup lang="ts">
import router from '../../router/index'
import { useStore } from '../../stores/store.js';
import { ref } from 'vue';
const title = ref('')
const duration = ref(20)
const categories = ref('lunch')
const profile = ref(false)
const user = useStore()
const searchrecipe = () => {
    router.push({ name: 'search', params: { id: categories.value, duration: duration.value, title: title.value } })
}


</script>