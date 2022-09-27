<template>
    <div class="flex px-5 w-auto justify-center space-x-3 items-center  mt-0 ">
        <div class=" flex mt-7 justify-center items-center my-3">
            <div
                class="flex  py-5 shadow-lg rounded px-10 space-x-3  border  justify-center items-center  ">
            
                <div class="flex  h-16 rounded-lg border-black focus:ring-blue-500 focus:border-blue-500">
                    <div class="w-full  rounded-r-lg border-none ">
                        <div class="relative">
                            <div
                                class="flex absolute inset-y-0 pt-2 items-center pl-2 justify-center pointer-events-none">
                                <svg class="w-7 h-7 text-gray-500 dark:text-gray-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>

    
                            <div>
                                <input type="text" v-model="searchvalue"
                                    class="block p-3 pl-8   w-full outline-none transition duration-700 ease-in-out focus:shadow-outline hover:w-full h-16 z-20 border-gray-900  text-sm text-gray-900 border bg-gray-50 rounded dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                    placeholder="Search" required>
                            </div>
                        </div>
                        <span class="text-red-600 text-xs">{{searcherror}}</span>
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
import { ref } from 'vue'
import router from '@/router';
const searchvalue = ref('')
const searcherror = ref('')
const searchrecipe = () => {
    if(!searchvalue.value){
        searcherror.value = "please insert something to search"
        return
    }
    else{
        router.push({ name: 'searchunauthenticated', params: { id: searchvalue.value } });
    }
}
</script>
<style lang="">
    
</style>