<template>
    <div v-if="error">error</div>
    <div v-if="loading">loading...</div>
    <div v-else class="flex flex-wrap p-5 justify-center items-center space-x-3 ">
        <div class="card max-w-sm h-96 w-80 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            v-for="(rec, index) in result.favorite" :key="rec.recipe.id">
            <div class="relative">
                <img class="rounded-t-lg "
                    src="https://media.istockphoto.com/photos/paleo-diet-healthy-food-background-picture-id1301565375?b=1&k=20&m=1301565375&s=170667a&w=0&h=D-u_kxPS9SL5MWmhN0xbwfNxPmqbqzhyjYvypM7V7xU="
                    alt="" />
                <button @click="managefavorite(rec.recipe.id, rec.recipe.isfavorite)"
                    class="absolute top-5 right-0 pr-3 w-16 h-16 rounded-full hover:shadow-transparent hover:bg-slate-800 bg-white ">
                    <div class="flex justify-center  pt-1 pl-3">
                        <svg v-if="rec.recipe.isfavorite" style="color: red" xmlns="http://www.w3.org/2000/svg" width="32"
                            height="32" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" fill="red">
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
                <div>
                    <h5 class="mb-2 hover:underline text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <strong>{{ rec.recipe.title }}</strong>
                    </h5>
                </div>
                <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                    {{ rec.recipe.descriptions }}</div>
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
            </div>
        </div>
    </div>
</template>
<script setup >
import { useStore } from '../../stores/store.js';
import { recipeStore } from '../../stores/recipestore.js';
import { favoriteStore } from '../../stores/favoritestore.js';
import { likeStore } from '../../stores/likeStore.js'
import { ref, reactive, computed, onMounted } from 'vue'
import { favoritequery } from '@/tools/queries';
import { useMutation, useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
const { error, loading, result } = useQuery(
    favoritequery, null, {
    pollInterval: 100,
}
)

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
const manalikes = (id, isliked) => {
    if (isliked) {
        likes.deletelikes(id)
    }
    else {
        likes.addtolike(id)
    }
}
</script>