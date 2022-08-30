<template>
    <div class=" bg-blue-600 h-28 items-center flex justify-center text-6xl font-extrabold">
        <h1><span class="text-yellow-900">Discover</span> Recipe</h1>
    </div>
    <div class="flex flex-wrap justify-center mt-5 ">
        <div class=" p-5 lg:w-auto md:w-full sm:w-full ">
            <div class="flex justify-center font-extrabold text-3xl font-serif">Some images about the food</div>
            <img class="rounded-t-lg "
                src="https://media.istockphoto.com/photos/paleo-diet-healthy-food-background-picture-id1301565375?b=1&k=20&m=1301565375&s=170667a&w=0&h=D-u_kxPS9SL5MWmhN0xbwfNxPmqbqzhyjYvypM7V7xU="
                alt="" />
        </div>
        <div class="p-5 lg:w-1/2 md:w-full sm:w-full border-2 ">
            <div v-if="error">something were wrong</div>
            <div v-if="loading">loading</div>
            <div v-else>
                <div class=" font-extrabold text-3xl font-serif">Title</div>
                <div>
                    {{  result.recipe_by_pk.title  }}
                </div>
                <div class=" font-extrabold text-3xl font-serif">Descriptions</div>
                <div>{{  result.recipe_by_pk.descriptions  }}</div>
                <div class=" font-extrabold text-3xl font-serif">Ingridients</div>
                <div v-for="(ingredient, index) in JSON.parse(result.recipe_by_pk.ingredient).split(',,,,')"
                    :key="ingredient">
                    <span class="font-bold">{{  index + 1  }},</span> {{  ingredient  }}
                </div>
                <div class=" font-extrabold text-3xl font-serif">Instructions</div>
                <div v-for="(instruction, index) in JSON.parse(result.recipe_by_pk.instructions).split(',,,,')"
                    :key="instruction"><span class="font-bold">Step {{  index + 1  }},</span> {{  instruction  }}</div>
                <div class=" font-extrabold text-3xl font-serif">Duration</div>
                <div>{{  result.recipe_by_pk.durations  }}</div>
                <div class=" font-extrabold text-3xl font-serif">Categories</div>
                <div>{{  result.recipe_by_pk.categories  }}</div>
                <div class=" font-extrabold text-3xl font-serif">Reviews</div>
                <div v-for="comment in result.recipe_by_pk.comments" :key="comment">
                    <div class="flex space-x-2 items-center">
                        <div class="w-12 h-12 bg-gray-500 rounded-full flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-person" viewBox="0 0 16 16">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg></div>
                        <div class="font-bold underline text-orange-600">{{ comment.user.name }}</div>
                    </div>
                    <div class="flex space-x-2 px-2">
                        <div>
                            <StarRating class="justify-end" :read-only="true" v-model:rating="comment.star" :increment="0.05"
                                active-color="#d6612d" :star-size="8"></StarRating>
                        </div>
                        <div>
                            {{ comment.commented_at }}
                        </div>
                    </div>
                    <div>{{  comment.comment  }}</div>
                </div>

            </div>
        </div>
    </div>
    <div class="flex justify-center  mt-2">
        <div class="lg:w-1/2 md:w-full  sm:w-full p-8 border-2 h-auto space-y-3">
            <div>Write your comment</div>
            <textarea class="rounded border-2 px-2 h-20 py-1 w-full" v-model="comment" type="text"
                placeholder="write your comment"></textarea>


            <StarRating class="justify-end" v-model:rating="rating" :increment="0.5" active-color="#d6612d"
                :star-size="20"></StarRating>
            <button @click="addcomment"
                class="flex  w-auto p-10 py-4 my-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">submit</button>
        </div>
    </div>
</template>
<script setup >
import StarRating from 'vue-star-rating'

import router from '../../router/index'
import { useRoute } from 'vue-router'
import { useStore } from '../../stores/store.js';
import { recipeStore } from '../../stores/recipestore.js';
import { favoriteStore } from '../../stores/favoritestore.js';
import { likeStore } from '../../stores/likeStore.js'
import { ref, reactive, computed, onMounted } from 'vue'
import { recipe_by_id, comment_mutation } from '@/tools/queries';
import { useMutation, useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
const route = useRoute()
const rating = ref(0)

const comment = ref('')
const id = route.params.id


const { error, loading, result } = useQuery(recipe_by_id
    ,
    () => ({
        id: id
    }),
    null, {
    pollInterval: 100,
}
);
// console.log(result);
// console.log("hello"+typeof parseFloat(rating.value))
const { mutate: addcomment } = useMutation(
    comment_mutation,
    () => ({
        variables: {
            recipe_id: id,
            comment: comment.value,
            star: rating.value
        },
    })
)


</script>