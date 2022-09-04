<template>
    <div class="h-40 w-full bg-cyan-800">
        <div class="flex space-x-4 justify-end font-semibold text-xl pt-4 pr-4 text-white ">
            <router-link :to="{ name: 'login' }">
                <button class=" hover:bg-orange-900  p-4 rounded">Signin</button>
            </router-link>
            <router-link :to="{ name: 'signup' }">
                <button class="  hover:bg-orange-800 p-4 rounded">signup</button>
            </router-link>
        </div>
        <div class="flex justify-center items-center text-5xl   font-extrabold">
            <h1><span class="text-yellow-900 items-center  ">Discover</span> Recipe</h1>
        </div>
    </div>
    <div class="flex justify-center flex-wrap space-y-2 mt-2 ">
        <div class="flex flex-wrap items-center w-1/2 justify-center  border-2  rounded shadow-lg p-4  ">
            <div class="w-80  p-2">
                <div>Title or Ingridient</div>
                <div class="relative w-full h-14">
                    <input type="text" v-model="title"
                        class="block p-2.5 w-full h-14 z-20 border-gray-900 text-sm text-gray-900 bg-gray-50 rounded-lg border-2   focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Recipe title,duration(min),ingridient" required>
                </div>
            </div>
            <div class="w-80  p-2">
                <div class="flex justify-between">
                    <div>Duration</div>
                    <div>{{ duration }}</div>
                </div>
                <div class="relative w-full h-14">
                    <input type="range" v-model="duration" min="10" max="200"
                        class="block p-2.5 w-full h-14 z-20 border-gray-900 text-sm text-gray-900 bg-gray-50 rounded-lg border-2   focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Recipe title,duration(min),ingridient" required>
                </div>
            </div>
            <div class="w-50  p-2  justify-start items-end">
                <div class="text-white">here</div>
                <div></div>
                <select v-model="categories"
                    class="bg-gray-50 h-14 px-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">dinner</option>
                </select>
            </div>
            <div class="w-50  p-2">
                <div class="text-white">here</div>

                <button @click="searchrecipe"
                    class="flex justify-center items-center h-14  p-3   w-24 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Filter</button>
            </div>
        </div>
    </div>


    <div class="flex text-teal-800 mt-4 items-center justify-center font-extrabold lg:text-4xl md:text-2xl sm:text-xl lg:pt-16 lg:pb-8 md:pt-14 md:pb-7 sm:pt-8 sm:pb-4">
        Most Featured Food Recipe
    </div>

    <div v-if="error" class="flex justify-center items-center">error</div>
    <div v-if="loading" class="flex justify-center items-center">loading...</div>
    <div v-else class="flex">
        <div class="w-2/12">
        </div>
        <div class="flex w-10/12 flex-wrap p-5 justify-center items-center space-x-3 ">
            <div class="card hover:border hover:shadow-xl hover:border-sky-800 duration-100 mt-4  max-w-sm h-96 w-80 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                v-for="(rec, index) in recipes" :key="rec.id">
                <div class="relative">
                    <img class="rounded-t-lg w-full h-44" :src="JSON.parse(rec.images).split(',,,,')[2]" />
                    <button @click="managefavorite"
                        class="absolute top-5 right-0 pr-3 w-16 h-16 rounded-full hover:shadow-transparent hover:bg-slate-800 bg-white ">
                        <div class="flex justify-center  pt-1 pl-3">
                            <svg  style="color: red" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                                    fill="red"></path>
                            </svg>
                        </div>
                    </button>
                </div>
                <div class="p-4">
                    <router-link :to="'/recipedetail/' + rec.id">
                        <div>
                            <h5
                                class="mb-2 hover:underline text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                <strong>{{ rec.title }}</strong>
                            </h5>
                        </div>
                    </router-link>
                    <div class="flex justify-between text-black">
                        <StarRating v-model:rating="rec.rating" :read-only="true" :increment="0.01" :star-size="12">
                        </StarRating>
                        <div class="flex space-x-1 items-center">
                            <button >
                                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                    <path
                                        d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                                </svg>
                            </button>
                            <div class="text-xs">Helpfull({{ rec.Like_number }})</div>
                        </div>
                    </div>
                    <div class="mb-1 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                        {{ rec.descriptions }}</div>
                    <div class="text-xs bottom-1 mb-3 ">By <button
                            class="font-bold text-xs italic underline hover:underline">{{ rec.user.full_name }}</button>
                    </div>

                </div>
            </div>
        </div>
        <button @click="loadmore" class="flex items-center justify-center">fetchMore</button>
        <div class="w-2/12">
        </div>
    </div>
    <div class="flex text-teal-800 mt-4 items-center justify-center font-extrabold lg:text-4xl md:text-2xl sm:text-xl lg:pt-16 lg:pb-8 md:pt-14 md:pb-7 sm:pt-8 sm:pb-4">
        To Recipe Organizer
    </div>
    <div>
        <div class="flex justify-center items-center  space-x-10">
            <div class="space-y-2 m-2" v-for="user in users">
                <div class="text-5xl h-24 w-24 rounded-full bg-orange-700 text-white flex items-center justify-center">
                <div>
                    {{user.full_name.charAt(0).toUpperCase()}}
                </div>
            </div>
            <div class="font-bold">{{user.full_name}}</div>
            <div>posted {{user.users_counted_recipe}} recipes</div>
            </div>
        </div>
    </div>
</template>
<script setup >
import StarRating from 'vue-star-rating'
import { unauthenticatedquery } from '@/tools/queries';
import { useMutation, useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { useStore } from '../../stores/store.js';
import { recipeStore } from '../../stores/recipestore.js';
import { favoriteStore } from '../../stores/favoritestore.js';
import { likeStore } from '../../stores/likeStore.js'
import router from '../../router/index'
import { ref,computed } from 'vue';
const title = ref('')
const duration = ref(20)
const categories = ref('lunch')
const pages = ref(0)
const limit = ref(3)
const offset = ref(0)
const searchrecipe = () => {
    router.push({ name: 'search', params: { id: categories.value, duration: duration.value, title: title.value } })
}
const user = useStore()
const { error,loading, result,fetchMore } = useQuery(
    unauthenticatedquery, () => ({
        offset: offset.value,
        limit: limit.value
    }), {
        fetchPolicy:'cache-and-network'
    },{
    pollInterval: 1000,
}
);
const users = computed(() => result.value?.users)
const recipes = computed(() => result.value?.recipe)
const loadmore = () => {
    offset.value = limit.value * pages.value,
    pages.value++;
    fetchMore({
        variables: {
            offset: offset.value,
            limit: limit.value
        },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              if (!fetchMoreResult || fetchMoreResult.recipe.length === 0) return previousResult
             return {
                // recipes : previousResult.recipe.concat(fetchMoreResult.recipe),
                ...previousResult,
                recipes: [
                  ...previousResult.recipe,
                  ...fetchMoreResult.recipe,
                ],
            }
            },
    })
}
const managefavorite = () => {
    router.push('/login')
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