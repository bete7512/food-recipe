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
                            <div class="text-red-600">{{titleerror}}</div>
                        </div>
                        <div class="">
                            <div class="text-2xl font  border-b-gray-900">Duration</div>
                            <input type="text" class="border-2 px-3 bg-slate-300 border-black h-10 w-80 rounded"
                                v-model="duration" />
                            <div class="text-red-600">{{durationerror}}</div>
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
                            <div class="w-64">
                                <div class="space-y-3 w-full flex flex-wrap" v-for="(key, index) in url.length"
                                    :key="key">
                                    <div class="my-3 flex flex-wrap">
                                        <img :src="url[index]" class="bg-black py-2" width="150" height="150"
                                            alt="insert image">
                                    </div>
                                </div>
                                <div class="flex justify-center items-center w-64 mt-5">
                                    <label for="dropzone-file"
                                        class="flex flex-col justify-center items-center w-full h-32 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div class="flex flex-col justify-center items-center py-5">

                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="py-auto w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24"
                                                strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>
                                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                                    class="font-semibold">Click to add image</span> or drag and drop</p>
                                        </div>
                                        <input @change="changefile" id="dropzone-file" type="file" class="hidden" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-2">
                    <button @click="createrecipe"
                        class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <div v-if="addingprocess" class="text-2xl">
                            <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101"
                                fill="none" xmlns="http://www.w3.org/2000/svg">

                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor" />
                            </svg>
                            creating recipe
                        </div>
                        <div v-else>
                            create recipe
                        </div>
                    </button>
                </div>
                <!-- <button @click="createrecipe"
                    class="flex mx-auto align-middle items-center justify-center w-auto p-10 py-4 my-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">publish</button> -->
            </div>
        </div>
    </settinglayoutVue>
</template>
<script setup>
import router from '@/router';
import settinglayoutVue from './layouts/settinglayout.vue';
import { useMutation } from '@vue/apollo-composable';
import { ref, reactive } from 'vue'
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
const titleerror = ref('')
const durationerror = ref('')
const base64str = ref('')
const addingprocess = ref(false)
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
    const reader = new FileReader();
    if (e.target.files[0]) {
        reader.readAsBinaryString(e.target.files[0]);
    }
    reader.onload = () => {
        base64str.value = btoa(reader.result);
        objectfile.push({ file: file.value, base64str: base64str.value });
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
    if (!title.value) {
        titleerror.value = "title is empty";
        return
    }
    if (!duration.value) {
        durationerror.value = "duration is empty please add it"
        return
    }
    addingprocess.value = true
    await fileUpload();
    addnewrecipes();
    addingprocess.value = false
}
const addnewrecipes = () => {
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