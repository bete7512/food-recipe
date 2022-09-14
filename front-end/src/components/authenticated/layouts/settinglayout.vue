<template>
    <div class="flex justify-end items-center p-3 px-5 shadow-lg">
        <div class="flex justify-end w-10">
            <div class="">
                <div class="w-44 h-16 flex justify-center space-x-1 items-end rounded p-2 ">
                    <button class="p-3 h-16 w-16 rounded-full bg-gray-400 flex justify-center items-center"
                        @click="profile = !profile">
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
                                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit
                                My
                                profile</span>
                        </li>
                        <li>
                            <span
                                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                notification</span>
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

<div class="h-auto flex justify-center">
    <slot></slot>
</div>
</template>
<script setup lang="ts">
import router from '@/router/index'
import { useStore } from '../../../stores/store.js';
import { ref } from 'vue';
const title = ref('')
const duration = ref(3000)
const categories = ref('lunch')
const profile = ref(false)
const user =useStore()
</script>