<template>
    <settinglayoutVue>
        <div class="w-1/2 m-3">
            <div class="font-bold flex justify-center items-center">Public Profile Setting</div>
            <div class="border m-5 flex  border-black w-full rounded  items-center">
                <div class="w-full p-5">
                    <div class="flex space-x-3 items-center  my-5">
                        <div class="">
                            <div>
                                <div>Enter your pulic name</div>
                                <textarea class="border p-3 border-black h-20 w-96" name=""></textarea>
                            </div>
                            <div>
                                <div>Enter your Bios</div>
                                <textarea class="border p-3 border-black h-44 w-96" name=""></textarea>
                            </div>
                        </div>

                        <div class="flex justify-center items-center w-full">
                            <label for="dropzone-file"
                                class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                                        </path>
                                    </svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                            class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX.
                                        800x400px)</p>
                                </div>
                                <input
                                    class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    ref="file" type="file" @change="changefile">
                            </label>
                        </div>
                        <img :src="url" class="w-20 h-20" alt="">
                        <div><button @click="fileUpload">something {{url}}</button></div>
                    </div>
                    <button
                        class="flex mx-auto align-middle items-center justify-center w-auto p-10 py-4 my-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">update
                        profile</button>
                </div>
            </div>
        </div>
    </settinglayoutVue>
</template>
<script setup>
import settinglayoutVue from '../layouts/settinglayout.vue';
import { ref } from 'vue'
const file = ref([])
const base64str = ref('')
const url = ref('')
const fileUpload = () => {
    // const fileName = file.value.name;
    // const fileType = file.value.type;
    for (let i = 0; i <= file.value.length; i++) {
        console.log("here " + file.value[0].name);
    }
}

const changefile = async (e) => {
    file.value = e.target.files[0];
    url.value = URL.createObjectURL(file.value);
    const reader = new FileReader();
    if (e.target.files[0]) {
        reader.readAsBinaryString(e.target.files[0]);
    }

    reader.onload = () => {
        base64str.value = btoa(reader.result);
    };

    reader.onload()
    reader.onerror = function () {
    };

    reader.onerror()
}
</script>