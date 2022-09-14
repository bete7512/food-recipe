<template>
    <mainVue>
        <div class="flex flex-wrap justify-center mt-5 ">
            <div class=" p-5 lg:w-auto md:w-full sm:w-full ">
                <div class="flex justify-center font-extrabold text-3xl font-serif">Some images about the food</div>
                <a :href="JSON.parse(result.recipe_by_pk.images).split(',,,,')[imageat]">
                    <img class="rounded-t-lg w-full h-80" :src="JSON.parse(result.recipe_by_pk.images).split(',,,,')[imageat]" />
                </a>
                <div class="flex flex-wrap">
                    <div class="flex space-x-3"
                        v-for="(image, index) in JSON.parse(result.recipe_by_pk.images).split(',,,,')" :key="image">
                        <button @click="imageat = index">
                            <img :src="image" class="w-36 h-28 flex px-2 my-2 " alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="p-5 lg:w-1/2 md:w-full sm:w-full border border-cyan-600 ">
                <div v-if="error">something were wrong</div>
                <div v-if="loading">
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
                <div v-else>
                    <div class=" font-extrabold text-3xl font-serif">{{ result.recipe_by_pk.title }}</div>
                    <StarRating v-model:rating="result.recipe_by_pk.rating" :read-only="true" :increment="0.01"
                        :star-size="20">
                    </StarRating>
                    <div class="font-bold  text-3xl"> Likes({{result.recipe_by_pk.Like_number}}) </div>
                    <div class="relative my-4">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300"></div>
                        </div>
                    </div>
                    <div class=" font-extrabold text-3xl font-serif">Descriptions</div>
                    <div class="font-thin text-xl">{{ result.recipe_by_pk.descriptions }}</div>
                    <div class=" font-extrabold text-3xl font-serif mb-3">Ingridients</div>
    
                    <div v-for="(ingredient, index) in JSON.parse(result.recipe_by_pk.ingredient).split(',,,,')"
                        :key="ingredient">
                        <div class="flex space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                class="bi bi-check" viewBox="0 0 16 16">
                                <path
                                    d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                            <div class="font-thin text-xl">
                                {{ ingredient }}
                            </div>
                        </div>
                    </div>
                    <div class=" font-extrabold text-3xl font-serif mb-3">Instructions</div>
                    <div class="my-5"
                        v-for="(instruction, index) in JSON.parse(result.recipe_by_pk.instructions).split(',,,,')"
                        :key="instruction">
                        <div class="">
                            <div class="flex font-bold text-2xl space-x-2 items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                    class="bi bi-check-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path
                                        d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                </svg>
                                <div class="">
                                    Step {{ index + 1 }}
                                </div>
                            </div>
                            <div class="text-xl font-thin">
                                {{ instruction }}
                            </div>
                        </div>
                    </div>
                    <div class=" font-extrabold text-3xl font-serif">Duration</div>
                    <div class="font-thin text-xl">{{ result.recipe_by_pk.durations }}</div>
                    <div class=" font-extrabold text-3xl font-serif">Categories</div>
                    <div class="font-thin text-xl">{{ result.recipe_by_pk.categories }}</div>
                    <div class=" font-extrabold text-3xl mb-4 text-gray-500 font-serif ">Reviews</div>
                    <div class="relative my-4">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300"></div>
                        </div>
                    </div>
                    <div class="py-2" v-for="comment in result.recipe_by_pk.comments" :key="comment">
                        <div class=" space-x-2 ">
                            <div class="flex space-x-2 items-center">
                                <div class="w-12 h-12 bg-gray-500 rounded-full flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                        class="bi bi-person" viewBox="0 0 16 16">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    </svg>
                                </div>
                                <button class="text-orange-600 hover:underline ">{{ comment.user.full_name }}</button>
                            </div>
                            <div class="font-bold  pl-9">
                                <div class="flex space-x-2 ">
                                    <StarRating class="justify-end" :read-only="true" v-model:rating="comment.star"
                                        :increment="0.05" active-color="#d6612d" :star-size="8"></StarRating>
                                    <div>
                                        {{ comment.commented_at }}
                                    </div>
                                </div>
                                <div class="">{{ comment.comment }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center  mt-2">
            <div class="lg:w-1/2 md:w-full  sm:w-full p-8 border border-slate-800 h-auto space-y-3">
                <div>Write your comment</div>
                <textarea class="rounded border border-black px-2 h-20 py-1 w-full" v-model="comment" type="text"
                    placeholder="write your comment"></textarea>
                <StarRating class="justify-end" v-model:rating="rating" :increment="0.5" active-color="#d6612d"
                    :star-size="20"></StarRating>
                <button 
                    class="flex  w-auto p-10 py-4 my-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">submit</button>
            </div>
        </div>
    </mainVue>
</template>
<script setup >
import mainVue from './layouts/main.vue';
import StarRating from 'vue-star-rating'
import { useRoute } from 'vue-router'
import { recipeStore } from '../../stores/recipestore.js';
import { ref, reactive, computed, onMounted } from 'vue'
import { recipe_by_id} from '@/tools/queries';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
const route = useRoute()
const rating = ref(0)
const imageat = ref(0)
const comment = ref('')
const id = route.params.id
const { error, loading, result } = useQuery(recipe_by_id,
    () => ({
        id: id
    }), {
    pollInterval: 100,
});
</script>