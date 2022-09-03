<template>
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
            <router-link :to="{ name: 'addrecipe',params:{id:'createnewecipe'} }"><span>Create Recipe</span></router-link>
        </button>
        <div class="flex space-x-3 ">
            <router-link :to="{ name: 'favorite' ,params:{id:'savedrecipe'}}">
                <button class="flex p-4 px-8 hover:bg-slate-400 rounded">favorite</button>
            </router-link>
            <router-link :to="{ name: 'feeds' ,params:{id:'recipe'}}">
                <button class="flex p-4 px-8 hover:bg-slate-400 rounded">feeds</button>
            </router-link>
        </div>
        <button  class="w-32 h-16 flex justify-between items-center rounded p-2 bg-gray-400">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person"
                viewBox="0 0 16 16">
                <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg> -->
            <div>there</div>
            <div class="flex  justify-center items-center text-2xl font-bold w-12 h-12 rounded-full bg-orange-700">{{ user.username.charAt(0).toUpperCase() }}</div>
        </button>
        <font-awesome-icon icon="fa-solid fa-angle-down" />
    </div>
    <div class="flex justify-center flex-wrap space-y-2 mt-2 ">
        <div class="flex flex-wrap items-center w-1/2 justify-center  border-2  rounded shadow-lg p-4  ">
            <div class="w-80  p-2">
                <div>Title or Ingridient</div>
                <div class="relative w-full h-14">
                    <input type="text" v-model="title"
                        class="block p-2.5 w-full h-14 z-20 border-gray-900 text-sm text-gray-900 bg-gray-50 rounded-lg border-2   focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Recipe title,duration(min),ingridient" required>
                </div>
            </div>
            <div class="w-80  p-2">
                <div class="flex justify-between">
                    <div>Duration</div>
                    <div>{{duration}}</div>
                </div>
                <div class="relative w-full h-14">
                    <input type="range" v-model="duration" min="10" max="200"
                        class="block p-2.5 w-full h-14 z-20 border-gray-900 text-sm text-gray-900 bg-gray-50 rounded-lg border-2   focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Recipe title,duration(min),ingridient" required>
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
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useStore } from '../../stores/store.js';
import { ref } from 'vue';
const title = ref('')
const duration = ref(20)
const categories = ref('lunch')
const searchrecipe = ()=>{
    router.push({name:'search',params:{id:categories.value,duration:duration.value,title:title.value}})
}
const user = useStore()


</script>