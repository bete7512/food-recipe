<div class="flex justify-center py-4 ">
<div class="flex flex-wrap items-center    rounded shadow-xl p-4  ">
    <div class="w-80 space-y-2  p-5">
        <div class="relative space-y-3  w-full h-auto">
            <div>
                Title
            </div>
            <input type="text" v-model="title"
                class="block p-2.5 w-full h-14 z-20 border-gray-900 text-sm text-gray-900 bg-gray-50 rounded-lg border   focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Recipe title,ingridient" required>
        </div>
        
        <div class="relative space-y-3 w-full h-auto">

            <div>
                Duration

            </div>

            <input type="text" v-model="duration"
                class="block p-2.5 w-full h-14 z-20 border-gray-900 text-sm text-gray-900 bg-gray-50 rounded-lg border   focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Duration in minute" required>
        </div>
    </div>
    <div>
        <div class="w-50  p-5  justify-start">
            <div class="py-2">
                categories
            </div>
            <select v-model="categories" 
                class="bg-gray-50 h-14 px-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">dinner</option>
            </select>
        </div>
        <div class="w-50  p-5">
            <button @click="refetch()"
                class="flex justify-center items-center h-14  p-3   w-24 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Filter</button>
        </div>
    </div>
</div>
</div>