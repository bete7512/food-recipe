<template>
    <div class="flex px-5 w-auto justify-center space-x-3 items-center  mt-0 ">
        <div class=" justify-end">
            <div class="flex text-2xl space-x-3 font-extrabold font-serif">
                <span>Search</span>
                <span class="italic text-green-800">Food</span>
                <span>Recipe</span>
            </div>
        </div>
        <div class="flex items-center  w-3/4  justify-center  p-4  ">
            <div class="relative flex w-full h-14 rounded-lg border-black focus:ring-blue-500 focus:border-blue-500">
                <div class="w-full  rounded-r-lg border-none ">
                    <div class="absolute rounded h-16 w-32 border-none">
                        <select v-model="categories"
                            class="bg-gray-50 h-16 px-2 pt-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="breakfast">All Categories</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">dinner</option>
                        </select>
                    </div>
                    <div class="flex absolute inset-y-0 pt-2 items-center pl-32 justify-center pointer-events-none">
                        <svg class="w-8 h-8 text-blue-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div>
                        <input type="text" v-model="title"
                            class="block p-2.5  pl-40 w-full h-16 z-20 border-gray-900 border-r-0 text-sm text-gray-900 border bg-gray-50 rounded-r-none rounded-t-lg rounded-b-lg    dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                            placeholder="Search" required>
                    </div>
                </div>
                <div
                    class="w-50 h-16 bg-blue-600 rounded-l-none rounded-r-lg flex justify-center items-center rounded-t-lg rounded-b-lg ">
                    <button @click="searchrecipe"
                        class="flex justify-center items-center   p-3   w-24 text-base font-medium text-center text-white transition duration-500 transform  ">Search</button>
                </div>
            </div>
        </div>
    </div>
    <slot></slot>
</template>
<script setup >
import {ref} from 'vue'
import router from '@/router';
const title = ref('')
const duration = ref(20)
const categories = ref('lunch')
const searchrecipe = () => {
    router.push({ name: 'searchunauthenticated', params: { id: categories.value, duration: duration.value, title: title.value } });
}
</script>
<style lang="">
    
</style>