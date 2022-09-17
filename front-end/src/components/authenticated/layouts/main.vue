<template>
    <div class="flex justify-end items-center p-3 px-5 shadow-lg">
        <div class="flex justify-end w-10">
            <div class="">
                <div class="w-44 h-16 flex justify-center space-x-1 items-end rounded p-2 ">
                    <button class=" h-16 w-16 rounded-full  flex justify-center items-center"
                        @click="profile = !profile">
                        <div v-if="user.profile_image"
                            class="text-5xl h-16 w-16 rounded-full  text-white flex items-center justify-center">
                            <div class="">
                                <img :src="user.profile_image" class=" h-16 w-16  rounded-full" alt="insert image">
                            </div>
                        </div>
                        <div v-else
                            class="text-5xl h-16 w-16 rounded-full bg-orange-700 text-white flex items-center justify-center">
                            <div>
                                {{ user.full_name.charAt(0).toUpperCase() }}
                            </div>
                        </div>
                    </button>
                </div>
                <div v-if="profile"
                    class="absolute  z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                    <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
                        <div class="font-bold">{{ user.email }}</div>
                        <div class="font-medium text-xs overflow-hidden truncate">{{user.full_name}}</div>
                    </div>
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                        <router-link :to="{name:'profile',params:{id:parseInt(user.userid)}}">
                            <li>
                                <span
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit
                                    My profile</span>
                            </li>
                        </router-link>

                        <router-link to="">
                            <li>
                                <span
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    notification</span>
                            </li>
                        </router-link>
                        <router-link :to="{name:'myrecipe',params:{id:parseInt(user.userid)}}">
                            <li>
                                <span
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My
                                    recipe</span>
                            </li>
                        </router-link>
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
                        <button @click="logout"
                            class="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                            out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class=" flex justify-center items-center my-3">
        <div
            class="flex  py-5 shadow-lg rounded px-10 space-x-3  border border-amber-500 justify-center items-center  ">
            <div class=" rounded h-16 border-none">
                <select v-model="categories"
                    class="bg-gray-50 h-16 px-2 pt-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">dinner</option>
                </select>
            </div>
            <div class="flex  h-16 rounded-lg border-black focus:ring-blue-500 focus:border-blue-500">
                <div class="w-full  rounded-r-lg border-none ">
                    <div class="relative">
                        <div class="flex absolute inset-y-0 pt-2 items-center pl-2 justify-center pointer-events-none">
                            <svg class="w-7 h-7 text-gray-500 dark:text-gray-400" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div>
                            <input type="text" v-model="title"
                                class="block p-3 pl-8   w-full outline-none transition duration-700 ease-in-out focus:shadow-outline hover:w-full h-16 z-20 border-gray-900  text-sm text-gray-900 border bg-gray-50 rounded dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                placeholder="Search" required>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="w-50 h-16 bg-blue-600 rounded-l-none rounded-r-lg flex justify-center items-center rounded-t-lg rounded-b-lg ">
                <button @click="searchrecipe"
                    class="flex justify-center items-center   p-3   w-24 text-base font-medium text-center text-white transition duration-500 transform  ">Search</button>
            </div>
        </div>
    </div>
    <div class="h-auto ">
        <slot></slot>
    </div>
</template>
<script setup >
import router from '@/router/index'
import { useStore } from '../../../stores/store.js';
import { ref, onMounted, reactive } from 'vue';
const title = ref('')
const duration = ref(3000)
const categories = ref('lunch')
const profile = ref(false)
const user = useStore()
const logout = () => {
    user.logout()
    user.$reset()
}
const searchrecipe = () => {
    router.push({ name: 'search', params: { id: categories.value, duration: duration.value, title: title.value } })
}
</script>
<style scoped>

</style>