<template>
    <div class="flex justify-end items-center p-3 px-5 shadow-lg">
        <div class="flex justify-end w-10">
            <div class="">
                <div class="w-44 h-16 flex justify-center space-x-1 items-end rounded p-2 ">
                    <button class=" h-16 w-16 rounded-full  flex justify-center items-center"
                        @click="profile = !profile">
                        <div v-if="user.profile_image" class="text-5xl h-16 w-16 rounded-full  text-white flex items-center justify-center">
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
                        <div class="font-bold">{{ user.username }}</div>
                        <div class="font-medium text-xs overflow-hidden truncate">{{user.email}}</div>
                    </div>
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                        <router-link :to="{name:'profile',params:{id:parseInt(user.userid)}}">
                            <li>
                                <span
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit
                                    My
                                    profile</span>
                            </li>
                        </router-link>

                        <router-link to="">
                            <li>
                                <span
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    notification</span>
                            </li>
                        </router-link>
                        <router-link to="">
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
<script setup>
import router from '@/router/index'
import { useStore } from '../../../stores/store.js';
import { ref,computed,onMounted } from 'vue';
const title = ref('')
const duration = ref(3000)
const categories = ref('lunch')
const profile = ref(false)
const user =useStore()
// onMounted(async () => { await user.user_profile() })
</script>