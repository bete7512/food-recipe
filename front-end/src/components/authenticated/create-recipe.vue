<template>
    <settinglayoutVue>
        <div class="flex justify-center ">
            <div class="popup-content align-middle">
                <h2 class="text-center text-lg font-bold pt-2">Add new recipe</h2>
                <div class="flex flex-wrap space-x-10">
                    <div class="mx-10">
                        <div class="">
                            <div class="text-2xl font  border-b-gray-900 bg">Title</div>
                            <input type="text" class="border-2 px-3 bg-slate-300 border-black h-10 w-80 rounded "
                                placeholder="recipe title" v-model="title" />
                        </div>
                        <div class="">
                            <div class="text-2xl font  border-b-gray-900">Duration</div>
                            <input type="text" class="border-2 px-3 bg-slate-300 border-black h-10 w-80 rounded"
                                v-model="duration" />
                        </div>
                        <div class="w-80">
                            <label for="countries"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select
                                Categories</label>
                            <select v-model="categories"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="breakfast">breakfast</option>
                                <option value="lunch">lunch</option>
                                <option value="dinner">dinner</option>
                            </select>
                        </div>
                        <div class="group  w-80">
                            <div class="text-2xl font  border-b-gray-900">Description</div>
                            <textarea class="border-2 p-3 bg-slate-300 border-black h-40 w-80 rounded"
                                v-model="description"></textarea>
                        </div>
                        <div class="">
                            <div class="text-2xl font  border-b-gray-900">Ingridient</div>
                            <div class="space-x-2 py-2" v-for="(key, index) in ingredientcounter" :key="key">
                                <div class="flex space-x-2">
                                    <input type="text"
                                        class="border-2 p-3 bg-slate-300 border-black h-10 py-2 w-80 rounded"
                                        v-model="ingridient[index]" placeholder="Add ingredient" :key="key">
                                    <button @click="removeingridient" class="flex items-center justify-center "><span
                                            class="text-base h-8 w-8 font-extrabold text-center text-black border-2 border-slate-900 rounded-full">x</span></button>
                                </div>
                            </div>
                            <button @click="addNewIngredient"
                                class="flex items-center justify-center w-auto p-10 py-4 my-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">add
                                ingridient</button>
                        </div>
                    </div>
                    <div class="">
                        <div class="text-2xl  font  border-b-gray-900">Instructions</div>
                        <div class=" space-x-2  py-2" v-for="(key, index) in instructioncounter" :key="key">
                            <div><strong>step {{ key }}</strong></div>
                            <div class="flex space-x-2">
                                <textarea class="border-2 p-3 bg-slate-300 border-black h-20 w-80 rounded"
                                    v-model="instructions[index]"></textarea>
                                <button @click="removenewinstructions" class="flex items-center justify-center "><span
                                        class="text-base h-8 w-8 font-extrabold text-center text-black border-2 border-slate-900 rounded-full">x</span></button>
                            </div>
                        </div>
                        <button @click="addnewinstructions"
                            class="flex items-center p-7 justify-center w-auto  py-4 my-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">add
                            instructions
                        </button>
                        <div class="flex items-center justify-center">
                            <div class="">
                                <div class="space-y-3" v-for="(key, index) in url.length" :key="key">
                                    <div class="my-3">
                                        <img :src="url[index]" class="bg-black py-2" width="150" height="150"
                                            alt="insert image">
                                    </div>
                                </div>
                                <div class="flex justify-center items-center w-64 mt-5">
                                    <label for="dropzone-file"
                                        class="flex flex-col justify-center items-center w-full h-16 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div class="flex flex-col justify-center items-center py-5">

                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="py-auto w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24"
                                                strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>


                                        </div>
                                        <input @change="changefile" id="dropzone-file" type="file" class="hidden" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button @click="createrecipe"
                    class="flex mx-auto align-middle items-center justify-center w-auto p-10 py-4 my-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">publish</button>
            </div>
        </div>
    </settinglayoutVue>
</template>
<script setup>
import settinglayoutVue from './layouts/settinglayout.vue';
import { useMutation } from '@vue/apollo-composable';
import { ref, computed, onMounted, reactive } from 'vue'
import { recipeStore } from '../../stores/recipestore.js';
import { addrecipe, file_upload } from '@/tools/queries';
const title = ref('')
const recipe = recipeStore()
const duration = ref('')
const description = ref('')
const instructions = ref([])
const ingridient = ref([])
const ingredientcounter = ref(3)
const instructioncounter = ref(3)
const categories = ref('')
const file = ref('')
const base64str = ref('')

const objectfile = reactive([])
const path = reactive([])
const url = reactive([])
const fileUpload = async () => {
    for (let i = 0; i < objectfile.length; i++) {
        var hold = objectfile[i]
        var tempourl = await recipe.upload_file(hold)
        path.push(tempourl)
    }
}
const changefile = async (e) => {
    file.value = e.target.files[0];
    const newurl = URL.createObjectURL(file.value);
    url.push(newurl);
    console.log("I am not proxy");
    const reader = new FileReader();
    if (e.target.files[0]) {
        reader.readAsBinaryString(e.target.files[0]);
    }
    reader.onload = () => {
        base64str.value = btoa(reader.result);
        objectfile.push({file:file.value,base64str:base64str.value});
    };
}

const addNewIngredient = () => {
    ingredientcounter.value++
}
const addnewinstructions = () => {
    instructioncounter.value++;
}
const removenewinstructions = () => {
    instructioncounter.value--
}
const removeingridient = () => {
    ingredientcounter.value--
}
const createrecipe = async () => {
    await fileUpload();
    addnewrecipes();
}
const addnewrecipes = () => {
    console.log("at the inside of recipe " + path);
    const { mutate: addnewrecipe, onDone } = useMutation(addrecipe, () => ({
        variables: {
            title: title.value,
            instructions: JSON.stringify(instructions.value.join(',,,,')),
            images: JSON.stringify(path.join(',,,,')),
            descriptions: description.value,
            categories: categories.value,
            ingredient: JSON.stringify(ingridient.value.join(',,,,')),
            durations: duration.value
        }
    }))
    addnewrecipe();
}
</script>
<style scoped>

</style>