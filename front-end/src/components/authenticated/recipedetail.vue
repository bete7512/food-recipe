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
                <div v-for="(ingredient, index) in JSON.parse(result.recipe_by_pk.ingredient).split(',')"
                    :key="ingredient">
                    <span class="font-bold">{{  index + 1  }},</span> {{  ingredient  }}
                </div>
                <div class=" font-extrabold text-3xl font-serif">Instructions</div>
                <div v-for="(instruction, index) in JSON.parse(result.recipe_by_pk.instructions).split(',')"
                    :key="instruction"><span class="font-bold">Step {{  index + 1  }},</span> {{ instruction }}</div>
                <div class=" font-extrabold text-3xl font-serif">Duration</div>
                <div>{{  result.recipe_by_pk.durations  }}</div>
                <div class=" font-extrabold text-3xl font-serif">Categories</div>
                <div>{{  result.recipe_by_pk.categories  }}</div>

            </div>
        </div>
    </div>
    <div class="flex justify-center  mt-2">
        <div class="lg:w-1/2 md:w-full  sm:w-full p-8 border-2 h-auto space-y-3">
            <div>Write your comment</div>
            <textarea class="rounded border-2 px-2 h-20 py-1 w-full" type="text" placeholder="write your comment"></textarea>
            <button class="flex  w-auto p-10 py-4 my-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">submit</button>
        </div>
    </div>
</template>
<script setup >
import router from '../../router/index'
import { useRoute } from 'vue-router'
import { useStore } from '../../stores/store.js';
import { recipeStore } from '../../stores/recipestore.js';
import { favoriteStore } from '../../stores/favoritestore.js';
import { likeStore } from '../../stores/likeStore.js'
import { ref, reactive, computed, onMounted } from 'vue'
import { recipe_by_id } from '@/tools/queries';
import { useMutation, useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
const route = useRoute()
const id = route.params.id
console.log(id);

const { error, loading, result } = useQuery(recipe_by_id
    ,
    () => ({
        id: id
    }),
    null, {
    pollInterval: 100,
}
);
console.log(result);


</script>