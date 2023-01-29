<template>
    <div class="w-full fixed z-50">
        <div class="flex justify-between items-center text-slate-900 bg-[#E3DCC9]  shadow-lg px-10 h-20">
            <div class="text-4-xl font-bold"></div>
            <div>
                <div>
                    <div class="flex relative justify-center items-center ">
                        <div class="flex justify-center items-center">
                            <div>
                                Categories
                            </div>
                            <div class="flex pl-2">
                                <select class=p-4 id="">
                                    <option value="">
                                        <select name="" id="">
                                            <option value=""></option>
                                        </select>
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="relative sm:w-80 md:96 ">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input type="search" id="default-search"
                                class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search products" required>
                            <button type="submit"
                                class="text-white absolute right-0 bottom-0 top-0 bg-orange-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex h-full justify-between items-center space-x-3">
                <div v-if="!isLogged" class="flex h-full justify-center items-center space-x-1">
                    <router-link to="/signin"
                        class="flex h-full justify-center items-center hover:bg-red-700 hover:text-white px-3 space-x-2">

                        <div>
                            signin
                        </div>
                    </router-link>
                </div>
                <div class="relative" v-if="isLogged">
                    <button @click="dropdownOpen = !dropdownOpen"
                        class="relative z-10 block w-12 h-12 bg-red-500 overflow-hidden rounded-full shadow focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            class="bi bi-person inline-flex" viewBox="0 0 16 16">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg>
                    </button>
                    <div v-show="dropdownOpen" @click="dropdownOpen = false" class="fixed inset-0 z-10 w-full h-full">
                    </div>

                    <transition enter-active-class="transition duration-150 ease-out transform"
                        enter-from-class="scale-95 opacity-0" enter-to-class="scale-100 opacity-100"
                        leave-active-class="transition duration-150 ease-in transform"
                        leave-from-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0">
                        <div v-show="dropdownOpen"
                            class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                                <router-link to="/profile">
                                    <li>
                                        <span
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit
                                            My
                                            profile</span>
                                    </li>
                                </router-link>

                                <router-link to="/">
                                    <li>
                                        <span
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            notification</span>
                                    </li>
                                </router-link>
                                <router-link to="/myrecipe">
                                    <li>
                                        <span
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My
                                            recipe</span>
                                    </li>
                                </router-link>
                                <li>
                                    <router-link to="/createrecipe">
                                        <span
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add
                                            new recipe</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/savedrecipe">
                                        <span
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Saved
                                            recipe</span>
                                    </router-link>
                                </li>
                            </ul>
                            <button @click="logout"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">
                                Log out
                            </button>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useStore } from '@/stores/store';
import { ref,computed } from 'vue'
import router from '../../router';
const user = useStore();
const dropdownOpen = ref(false)
const isLogged = computed(()=> localStorage.getItem('Apollotoken') ?  true : false )
const logout = () => {
    localStorage.removeItem('Apollotoken')
    user.userLoggedin = false
    router.push('/')
}
</script>
<style>

</style>