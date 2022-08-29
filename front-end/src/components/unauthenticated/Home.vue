<template>
    <div class="h-40 w-full bg-blue-800">
        <div class="flex space-x-4 justify-end font-semibold text-xl pt-4 pr-4 text-white ">
            <router-link :to="{ name: 'login' }">
                <button class=" border-2 hover:bg-orange-900 border-blue-800 p-4 rounded">Signin</button>
            </router-link>
            <router-link :to="{ name: 'signup' }">
                <button class=" border-2 hover:bg-orange-800 border-blue-800 p-4 rounded">signup</button>
            </router-link>
        </div>
        <div class="flex justify-center items-center text-6xl font-extrabold">
            <h1><span class="text-yellow-900 items-center">Discover</span> Recipe</h1>
        </div>
    </div>
    <div class="flex justify-center py-4 ">
        <div class="flex space-x-3">

            <div class="w-80 space-y-2 justify-start">
                <div selected><button>Filter by</button></div>
                <select id="categories"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="US"><button>ingredient</button></option>
                    <option value="CA"><button>duration</button></option>
                    <option value="CA"><button>duration</button></option>
                </select>
            </div>
            <div>
                <div selected>search by</div>
                <div class="relative w-full">
                    <input type="search" id="search-dropdown"
                        class="block p-2.5 w-full  z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="search by title ingredient" required>
                    <button type="submit"
                        class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        <span class="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div v-if="error">error</div>
    <div v-if="loading">loading...</div>
    <div v-else class="flex flex-wrap p-5 justify-center items-center space-x-3 ">
        <button class="card mt-2 hover:scale-105 max-w-sm h-96 w-80 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            v-for="(rec, index) in result.recipe" :key="rec.id">
            <div class="relative">
                <img class="rounded-t-lg "
                    src="https://media.istockphoto.com/photos/paleo-diet-healthy-food-background-picture-id1301565375?b=1&k=20&m=1301565375&s=170667a&w=0&h=D-u_kxPS9SL5MWmhN0xbwfNxPmqbqzhyjYvypM7V7xU="
                    alt="" />
                <button 
                    class="absolute top-5 right-0 pr-3 w-16 h-16 rounded-full hover:shadow-transparent hover:bg-slate-800 bg-white ">
                    <div class="flex justify-center  pt-1 pl-3">
                        <!-- <svg v-if="rec.isfavorite" style="color: red" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                            fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" fill="red">
                            </path>
                        </svg> -->
                        <svg style="color: red" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                            fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path
                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                                fill="red"></path>
                        </svg>
                    </div>
                </button>

            </div>
            <div class="p-5">
                <div>
                    <h5 class="mb-2 hover:underline text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <strong>{{ rec.title }}</strong>
                    </h5>
                </div>
                <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                    {{ rec.descriptions }}</div>
                <button
                    class="inline-flex bottom-1 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" id="mainIconPathAttribute" fill="blue"></path> </svg>-->
            </div>
        </button>
    </div>
</template>
<script setup >
import { unauthenticatedquery } from '@/tools/queries';
import { useMutation, useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { useStore } from '../../stores/store.js';
import { recipeStore } from '../../stores/recipestore.js';
import { favoriteStore } from '../../stores/favoritestore.js';
import { likeStore } from '../../stores/likeStore.js'
const { loading, result, error } = useQuery(
    unauthenticatedquery,null, {
    pollInterval: 1000,
}
);
const managefavorite = (id, isfavorite) => {
    if (!isfavorite) {
        favorite.addtofavor(id)
    }
    else {
        favorite.deletefavorite(id)
    }
}
const likes = likeStore()
const manalikes = (id, isliked) => {
    if (isliked) {
        likes.deletelikes(id)
    }
    else {
        likes.addtolike(id)
    }
}
</script>

<style>
</style>