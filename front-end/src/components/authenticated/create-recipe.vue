<template>
    <div class="flex justify-center">
        <div class="align-middle ">
            <div class="popup-content align-middle">
                <h2 class="text-center text-lg font-bold pt-2">Add new recipe</h2>
                <form @submit.prevent="">
                    <div class="grid sm:grid-cols-1 lg:grid-cols-2 space-x-10">
                        <div class="">
                            <div class="">
                                <div class="text-2xl font  border-b-gray-900 bg">Title</div>
                                <input type="text" class="border-2 px-3 bg-slate-300 border-black h-10 w-80 rounded "
                                    placeholder="recipe title" v-model="title" />
                            </div>
                            <div class="">
                                <div class="text-2xl font  border-b-gray-900">Duration</div>
                                <input type="text" class="border-2 px-3 bg-slate-300 border-black h-10 w-80 rounded"
                                    v-model="title" />
                            </div>
                            <div class="w-80">
                                <label for="countries"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select
                                    Categories</label>
                                <select id="categories"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Choose a categories</option>
                                    <option value="US">breakfast</option>
                                    <option value="CA">lunch</option>
                                    <option value="FR">dinner</option>
                                </select>
                            </div>
                            <div class="group  w-80">
                                <div class="text-2xl font  border-b-gray-900">Description</div>
                                <textarea class="border-2 p-3 bg-slate-300 border-black h-40 w-80 rounded"
                                    v-model="description"></textarea>
                            </div>
                            <div class="">
                                <div class="text-2xl font  border-b-gray-900">Ingridient</div>
                                <input type="text" class="border-2 p-3 bg-slate-300 border-black h-10 py-2 w-80 rounded"
                                    v-model="ingridient[0]" size="50" placeholder="ingredient" :id="key">
                                <div class="space-x-2" v-for="key in ingredientcounter" :key="key">
                                    <input type="text"
                                        class="border-2 p-3 bg-slate-300 border-black h-10 py-2 w-80 rounded"
                                        v-model="ingridient['dynamic-field-' + key]" placeholder="Another Field"
                                        :id="key">
                                    <button @click="remove"
                                        class="w-auto p-10 py-4 my-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">remove</button>
                                </div>
                                <button @click="addNewIngredient"
                                    class="flex items-center justify-center w-auto p-10 py-4 my-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">add
                                    ingridient</button>
                            </div>
                        </div>
                        <div class="">
                            <div class="text-2xl font  border-b-gray-900">Instructions</div>
                            <div class="flex space-x                                                                                                                                                     " v-for="key in instructioncounter" :key="key">
                                <textarea class="border-2 p-3 bg-slate-300 border-black h-40 w-80 rounded"
                                    v-model="instructions['dynamic-field-' + key]"></textarea>
                                    <button @click="removenewinstructions"
                                        class="w-auto p-10 py-4 my-3 h-16 items-center text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">remove</button>
                            </div>
                                <button @click="addnewinstructions" class="flex items-center p-7 justify-center w-auto  py-4 my-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">add
                                    instructions
                                </button>
                            <div class="">
                                <div class="text-2xl font  border-b-gray-900">images</div>
                                <div>
                                    <input type="file"  class="border-2 bg-slate-300 border-black h-10 w-80 rounded" />
                                </div>
                                <button @click=""
                                    class="flex items-center justify-center w-auto p-10 py-4 my-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">add
                                    images
                                </button>
                            </div>
                        </div>
                    </div>
                    <button
                        class="flex mx-auto align-middle items-center justify-center w-auto p-10 py-4 my-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup >

import { ref } from 'vue'
const title = ref('')
const duration = ref('')
const description = ref('')
const instructions = ref([])
const ingredientcounter = ref(1)
const instructioncounter = ref(1)


const fileUpload = (file) => {
    const fileName = file.name;
    const fileType = file.type;
    const variables = { name: fileName, type: fileType, base64str: base64Str };
    
  }

const addnewimages = ()=>{

}
const removeaddedimages = ()=>{

}
const imagecounter = ()=>{

}
const addnewinstructions = ()=>{
    instructioncounter.value++
}
const removenewinstructions = ()=>{
    instructioncounter.value--
}
const ingridient = ref([])
const images = ref([])
const submit = () => {
    for (var key of Object.keys(ingridient.value)) {
        console.log(key + " -> " + ingridient.value[key])
    }
}
const addNewIngredient = () => {
    ingredientcounter.value++
}

const stringifiedinstructions = () => {

}
const stringifiedingridient = () => {

}
const stringifiedimages = () => {

}
const remove = () => {
    ingredientcounter.value--
}
</script>
<style scoped>
</style>