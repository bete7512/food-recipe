<template>
    <div class="sm:py-20 pt-20">
        <div v-if="error" class="flex justify-center items-center">error</div>
        <div v-else-if="loading" class="flex justify-center items-center">
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
        <div v-else-if="recipes.length === 0" class="flex justify-center ">
            <button @click="goback" class="rounded-full h-16 w-16 bg-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                <div>Go back</div>
            </button>
            <img class="w-1/3 h-1/3"
                src="https://img.freepik.com/premium-vector/illustrations-arms-crossed-angry-woman-oops-404-error-design-concept-landing-page_576269-337.jpg?size=626&ext=jpg&ga=GA1.2.804308726.1663395081"
                alt="">
        </div>
        <div v-else class="flex justify-center items-center ">
            <div class="container lg:mt-20">
                <div class="flex flex-wrap justify-center  space-x-2">
                    <div class="pt-5 sm:px-4 px-0 " v-for="recipe in recipes" :key="recipe.id">
                        <Card :recipe="recipe"></Card>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup >
import Card from '../components/common/Card.vue'
import { ref, defineProps, onMounted, computed } from 'vue'
import { recipequery, search_query, addlikes } from '@/tools/queries';
import { useMutation, useQuery } from '@vue/apollo-composable';
const { error, loading, result, fetchMore } = useQuery(recipequery,
{
    fetchPolicy: 'network-only'
},
);
const recipes = computed(() => result.value?.recipe ?? [])




</script>
<style>

</style>