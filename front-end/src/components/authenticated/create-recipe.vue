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
                    <img src="" alt="">
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
                        <div class="">
                            <div class="text-2xl font  border-b-gray-900">images</div>
                            <div>
                                <div class="grid grid-cols-3 space-x-3" v-for="(imageurl, index) in path">
                                    <img :src="imageurl" alt="no image" class="w-20 m-2 h-20" />
                                </div>
                                <div class="flex items-center mt-2 bg-grey-lighter">

                                    <div class="block mb-2 w-20 text-xs font-medium text-gray-900 dark:text-gray-300">
                                        Upload file</div>
                                    <input
                                        class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                        ref="file" type="file" @change="changefile">
                                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300"> PNG,JPG </p>

                                </div>
                                <button @click="fileUpload"
                                    class="flex items-center justify-center w-auto p-7 py-4 my-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">upload
                                    image
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
                <button @click="addnewrecipe"
                    class="flex mx-auto align-middle items-center justify-center w-auto p-10 py-4 my-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">publish</button>
            </div>
        </div>
    </settinglayoutVue>
</template>
<script setup>
import settinglayoutVue from './layouts/settinglayout.vue';
import { useMutation } from '@vue/apollo-composable';
import { ref, computed, onMounted, reactive } from 'vue'
import { addrecipe, file_upload } from '@/tools/queries';
const title = ref('')
const duration = ref('')
const description = ref('')
const instructions = ref([])
const ingridient = ref([])
const ingredientcounter = ref(3)
const instructioncounter = ref(3)
const categories = ref('')
const file = ref('')
const path = ref([])
const base64str = ref('')

const fileUpload = () => {
    const fileName = file.value.name;
    const fileType = file.value.type;
    const { mutate: uploadfile, onDone } = useMutation(file_upload, () => ({
        variables: {
            name: fileName,
            type: fileType,
            base64str: base64str.value
        }
    }))
    uploadfile()
    onDone((response, error) => {
        if (error) {
            console.log(error);
        }
        path.value.push(response["data"]["fileupload"]["file_path"])
    })
}
const changefile = async (e) => {
    file.value = e.target.files[0];
    const reader = new FileReader();
    if (e.target.files[0]) {
        reader.readAsBinaryString(e.target.files[0]);
    }
    reader.onload = () => {
        base64str.value = btoa(reader.result);
    };
    // reader.onload()
    reader.onerror = function () {
    };
    // reader.onerror()
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
const { mutate: addnewrecipe, onDone } = useMutation(addrecipe, () => ({
    variables: {
        title: title.value,
        instructions: JSON.stringify(instructions.value.join(',,,,')),
        images: JSON.stringify(path.value.join(',,,,')),
        descriptions: description.value,
        categories: categories.value,
        ingredient: JSON.stringify(ingridient.value.join(',,,,')),
        durations: duration.value
    }
}))


</script>
<style scoped>

</style>