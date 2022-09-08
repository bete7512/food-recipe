<template>
       <div class="h-20 flex justify-between px-10 w-full bg-cyan-800">
        <div class="flex items-center text-white justify-center text-lg font-bold ">
            <button class="hover:bg-pink-600 rounded p-3">Home</button>
            <button class="hover:bg-pink-600 rounded p-3">Service</button>
            <button class="hover:bg-pink-600 rounded p-3">About</button>
        </div>
        <div class="flex px-7 items-center justify-end font-semibold text-lg  text-white ">
            <button @click="signupmodal = true"  class="hover:bg-pink-600 flex items-center p-5 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
                <button class="">Register</button>
            </button>
            <button @click="loginmodallisten" class="hover:bg-pink-600 flex items-center p-5 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 flex items-center">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <button class=" rounded">Login</button>
            </button>
        </div>
    </div>
    <div class="relative mt-0 flex h-96">
        <div class="absolute h-32 top-10 right-auto  text-white w-auto   rounded text-6xl font-bold  flex items-center justify-center ">We Make You Faster</div>
        <div class="absolute h-16 bottom-1/4 hover:bg-white right-0  p-10 border border-white w-72  left-1/4 rounded text-4xl font-bold flex items-center justify-center  ">
                More
        </div>
        <img src="../../assets/cover2.png" class="w-full" alt="">
    </div>
    <div class="flex px-5 w-auto justify-center space-x-3 items-center  mt-0 ">
        <div class=" justify-end">
            <div class="flex text-2xl space-x-3 font-extrabold font-serif">
                <span>Search</span>
                <span class="italic text-green-800">Food</span>
                <span>Recipe</span>
            </div>
        </div>
        <div class="flex items-center  w-3/4  justify-center  p-4  ">
            <div
                class="relative flex w-full h-14 rounded-lg border-black focus:ring-blue-500 focus:border-blue-500">
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
    <div
        class="flex text-teal-800 pt-2 items-center justify-center font-extrabold lg:text-4xl md:text-2xl sm:text-xl lg:pt-16 lg:pb-8 md:pt-14 md:pb-7 sm:pt-8 sm:pb-4">
        Most Featured Food Recipe
    </div>
    <div v-if="error" class="flex justify-center items-center">error</div>
    <div v-if="loading" class="flex justify-center items-center">

        <div role="status">
            <svg class="flex items-center justify-center  w-32 h-32 my-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor" />
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill" />
            </svg>
            <span class="sr-only">Loading...</span>
        </div>

    </div>
    <div v-else class="flex">
        <div class="flex justify-center w-3/12">
        </div>
        <div class="flex  w-10/12 flex-wrap  justify-center items-center space-x-3 ">
            <div class="card hover:border hover:border-sky-800 duration-100 mt-2 hover:scale-100 max-w-sm h-96 w-80 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                v-for="(rec, index) in result.recipe" :key="rec.id">
                <div class="relative">
                    <img class="rounded-t-lg w-full h-44" :src="JSON.parse(rec.images).split(',,,,')[0]" />
                    <button @click="managefavorite(rec.id, rec.isfavorite)"
                        class="absolute top-5 right-0 pr-3 w-16 h-16 rounded-full hover:shadow-transparent hover:bg-slate-800 bg-white ">
                        <div class="flex justify-center  pt-1 pl-3">
                            <svg v-if="rec.isfavorite" style="color: red" xmlns="http://www.w3.org/2000/svg" width="32"
                                height="32" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                    fill="red">
                                </path>
                            </svg>
                            <svg v-else style="color: red" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                                    fill="red"></path>
                            </svg>
                        </div>
                    </button>
                </div>
                <div class="p-5">
                    <router-link :to="'/recipedetail/' + rec.id">
                        <div>
                            <h5
                                class="mb-2 hover:underline text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                <strong>{{ rec.title }}</strong>
                            </h5>
                        </div>
                    </router-link>
                    <div class="flex justify-between">
                        <StarRating v-model:rating="rec.rating" :read-only="true" :increment="0.01" :star-size="12">
                        </StarRating>
                        <div class="flex space-x-1 items-center">
                            <button @click="managelikes(rec.id, rec.isliked)">
                                <svg v-if="rec.isliked" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                    <path
                                        d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                                </svg>
                            </button>
                            <div class="text-xs">Helpfull({{ rec.Like_number }})</div>
                        </div>
                    </div>
                    <div class="mb-1font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                        {{ rec.descriptions }}</div>
                    <div class="text-xs bottom-1 mb-3 ">By <button
                            class="font-bold text-xs italic underline hover:underline">{{ rec.user.full_name }}</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-3/12 flex justify-start">
        </div>
    </div>
</template>
<script setup >
import StarRating from 'vue-star-rating'
import router from '../../router/index'
import { useStore } from '../../stores/store.js';
import { recipeStore } from '../../stores/recipestore.js';
import { favoriteStore } from '../../stores/favoritestore.js';
import { likeStore } from '../../stores/likeStore.js'
import { ref, reactive, computed, onMounted } from 'vue'
import { searchunauthenticated } from '@/tools/queries';
import { useMutation, useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { useRoute } from 'vue-router';
const route = useRoute()
const title = route.params.title ? `%${route.params.title}%` : ''
const categories = route.params.id
const ingridient = route.params.title ? `%${route.params.title}%` : ''
const duration = route.params.duration
const pages = ref(0)
const limit = ref(10)
const offset = ref(0)
const loadmore = () => {
    pages.value++;
    offset.value = limit.value * pages.value

}
const variables2 = ref({
    offset: offset.value,
    limit: limit.value
})
const searchrecipe = () => {
    refetch()
}

const { error, loading, result, refetch } = useQuery(
    searchunauthenticated,
    () => ({
        title: route.params.title ? `%${route.params.title}%` : '',
        categories: route.params.id,
        ingridient: route.params.title ? `%${route.params.title}%` : '',
        durations: route.params.duration
    }),
    {
        pollInterval: 100,
    },
    { enabled: true }
);
const user = useStore()
const favorite = favoriteStore()
const managefavorite = (id, isfavorite) => {
    if (!isfavorite) {
        favorite.addtofavor(id)
    }
    else {
        favorite.deletefavorite(id)
    }
}
const likes = likeStore()
const managelikes = (id, isliked) => {
    if (isliked) {
        likes.deletelikes(id)
    }
    else {
        likes.addtolike(id)
    }
}
const singlerecipe = (id) => {
    router.push('/recipedetail')
}
</script>
<style>
</style>