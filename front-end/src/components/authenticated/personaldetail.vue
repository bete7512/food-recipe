<template>
 <div class="flex justify-center py-4 ">
        <div class="flex flex-wrap space-x-3">
            <div class="w-80 space-y-2  justify-start">
                <div>Filter by</div>
                <select id="categories"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Title"><button>Title</button></option>
                    <option value="ingridient"><button>ingredient</button></option>
                    <option value="duration"><button>duration</button></option>
                </select>
            </div>
            <div class="w-80">
                <div>search by</div>
                <div class="relative w-full">
                    <input type="search" id="search-dropdown"
                        class="block p-2.5 w-full  z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="search by title ingredient" required>
                </div>
            </div>
        </div>
    </div>
    <div class="flex">
        <div class="w-2/12">

        </div>
        <div class="w-10/12 flex justify-center">
            <button
                class="flex  w-auto p-10 py-4 my-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Filter</button>
        </div>
        <div class="2/12">

        </div>
    </div>
    <div>
        personal detaails
    </div>
</template>
<script setup lang="ts">
import { user_query } from '@/tools/queries';
import { useMutation,useQuery } from '@vue/apollo-composable';
import router from '@/router';
import { useRoute } from 'vue-router';
const route = useRoute()
const id = route.params.id
const {error,loading,result} = useQuery(
    user_query,
    () => ({
        id: id
    }),
)
</script>