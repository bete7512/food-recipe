<template >
    <div class="sm:pt-20">
        <div class="flex  justify-center items-center">
            <div class="container  space-y-3">
                <div class="space-y-2 ">
                    <div class="text-2xl  flex items-center space-x-3  text-orange-500 p-5">
                        <div v-if="users.profile_image"> <img :src="users.profile_image" class=" h-16 w-16  rounded-full"
                                alt="insert image">
                        </div>
                        <div v-else
                            class="text-5xl h-16 w-16 rounded-full bg-orange-700 text-white flex items-center justify-center">
                            <div>
                                {{ users.full_name.charAt(0).toUpperCase() }}
                            </div>
                        </div>
                        <div>
                            <span class="text-gray-800"></span>your Posted
                            Recipe
                        </div>
                    </div>
                    <div class="border p-10 rounded border-orange-500">
                        <div>
                            your Bios
                            <div>{{ users.bios }}</div>
                        </div>
                    </div>
                    <div class="border p-10 rounded border-orange-500">
                        <div>
                            You have <span class="text-orange-500">{{ users.users_counted_recipe }}</span> total
                            published recipe
                            <div>Thank You</div>
                        </div>
                    </div>
                </div>
                <div class="w-full ">
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
                    <div v-else class="flex w-full ">
                        <!-- <div class=" w-full  "> -->
                        <div class="flex flex-wrap space-x-3 border p-10 rounded border-orange-500 w-full">
                            <div class="card hover:border hover:shadow-xl h-auto hover:border-sky-800 duration-100 mt-2 hover:scale-100 max-w-sm sm:w-80 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                                v-for="(recipe, index) in result.users_by_pk.recipes" :key="recipe.id">
                                <div class="">
                                    <img class="rounded-t-lg w-full h-44"
                                        :src="JSON.parse(recipe.images).split(',,,,')[0]" />
                                </div>
                                <div class="p-5">
                                    <router-link :to="'/recipedetail/' + recipe.id">
                                        <div>
                                            <h5
                                                class="mb-2 hover:underline text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                                <strong>{{ recipe.title }}</strong>
                                            </h5>
                                        </div>
                                    </router-link>
                                    <div class="flex justify-between">
                                        <StarRating v-model:rating="recipe.rating" :read-only="true" :increment="0.01"
                                            :star-size="12">
                                        </StarRating>
                                        <div class="flex space-x-1 items-center">
                                            <button @click="managelikes(recipe.id, recipe.isliked)">
                                                <svg v-if="recipe.isliked" xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                                                </svg>
                                                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-hand-thumbs-up"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                                                </svg>
                                            </button>
                                            <div class="text-xs">Helpfull({{ recipe.Like_number }})</div>
                                        </div>
                                    </div>
                                    <div class=" font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                                        {{ recipe.descriptions }}
                                    </div>
                                </div>
                                <div class="relative h-auto mb-3 py-5 flex  mt-3 items-baseline">
                                    <div class="absolute bottom-0  right-0 pr-2 w-16 h-16     ">
                                        <div class="flex space-x-2 justify-center ">
                                            <button @click="deletebyid(recipe.id)">
                                                <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>
                                            <button>
                                                <router-link :to="{ name: 'editRecipe', params: { id: recipe.id, } }">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-10 h-10">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>
                                                </router-link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>>

                </div>
            </div>
        </div>
    </div>
    <Delete v-if="deleterecipe" :id="parseInt(delete_id)" v-on:deletenotify="successmodal = true"
        v-on:canceldelete="deleterecipe = false"></Delete>
</template>
<script setup >
import Delete from '../components/common/reuasble/Delete.vue';
import StarRating from 'vue-star-rating'
import { useStore } from '@/stores/store';
import router from '../router/index'
import { favoriteStore } from '../stores/favoritestore.js';
import { likeStore } from '../stores/likeStore.js'
import { ref, onMounted, computed } from 'vue'
import { user_query } from '@/tools/queries';
import { useMutation, useQuery } from '@vue/apollo-composable';
import { useRoute } from 'vue-router';
const route = useRoute()
const delete_id = ref('')
const deleterecipe = ref(false)
const deletebyid = (id) => {
    delete_id.value = id
    deleterecipe.value = true
}
const id = localStorage.getItem('id')

const users = JSON.parse(localStorage.getItem('user'))
const recipes = computed(() => result.value?.users_by_pk.recipes ?? [])
const user = computed(() => result.value?.users_by_pk ?? [])
const { error, loading, result } = useQuery(user_query,
    () => ({
        id: id
    }),
    {
        fetchPolicy: 'cache-and-network'
    });
</script>
<style>

</style>