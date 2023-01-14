<template>
    <div class="overlay top-0 lg:hidden w-full z-50   right-0 flex items-center justify-center ">
        <div class="space-y-5 h-screen w-full  bg-[#E3DCC9] shadow-lg  rounded-md">
            <div class="w-full flex justify-end px-2 pt-4">
                <button @click="emit('cancel')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                        <path fill-rule="evenodd"
                            d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                    </svg>
                </button>
            </div>
            <div  v-if="!isLogged" class=" w-full  border-zinc-900 h-auto space-y-4 px-2">
                <div class="flex space-x-1  items-center">
                    <button class="text-lg flex space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                            class="bi bi-cart" viewBox="0 0 16 16">
                            <path
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        <div>
                            Cart
                        </div>
                    </button>
                </div>
                <div class="flex  space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                        <path fill-rule="evenodd"
                            d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                    </svg>
                    <router-link to="/signin" class="text-lg">signin</router-link>
                </div>
            </div>
            <div v-else>
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
        </div>
    </div>
</template>
<script setup >
import { defineEmits,computed } from 'vue';
import { useStore } from '@/stores/store';
const emit = defineEmits(['cancel'])
const isLogged = computed(()=> localStorage.getItem('Apollotoken') ?  true : false )

const user = useStore()
</script>
<style scoped>
.overlay {
    position: fixed;
    background-color: rgb(0, 0, 0, 0.3);
}
</style>