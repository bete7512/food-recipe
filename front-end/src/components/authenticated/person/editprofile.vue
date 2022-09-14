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
 
                                            <svg xmlns="http://www.w3.org/2000/svg" class="py-auto w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24"
                                                strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>


                                        </div>
                                        <input @change="changefile" id="dropzone-file" type="file" class="hidden" />
                                    </label>
                                </div>
                                <!-- <input
                                    class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    ref="file" type="file" > -->
                                <!-- <button @click="addmore" class="text-black">add more image</button> -->
                            </div>
                        </div>

                    </div>
                    <button @click="fileUpload"
                        class="flex mx-auto align-middle items-center justify-center w-auto p-10 py-4 my-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">update
                        profile</button>
                </div>
            </div>
        </div>
    </settinglayoutVue>
</template>
<script setup >
import {  file_upload } from '@/tools/queries';
import settinglayoutVue from '../layouts/settinglayout.vue';
import { useMutation } from '@vue/apollo-composable';
import { ref, reactive } from 'vue'
const file = ref('')
const base64str = ref('')
const objectfile = reactive([])
const files = reactive({})
const path = ref([])
const url = reactive([])
const fileUpload = () => {
    for (let i = 0; i < objectfile.length; i++) {
        const hold = objectfile[i]
        console.log("from for loop"+hold.base64str);
        const { mutate: uploadfile, onDone } = useMutation(file_upload, () => ({
            variables: {
                name:hold.file.name,
                type:hold.file.type,
                base64str:hold.base64str
            }
        }))
        uploadfile()
        onDone((response, error) => {
            if (error) {
                console.log(error);
            }
            console.log(response["data"]["fileupload"]["file_path"]);
            path.value.push(response["data"]["fileupload"]["file_path"])
            console.log(path.value);
        })
    }
}
const imagecounter = ref(1)
const addmore = () => {
    imagecounter.value++
}
const changefile = async (e) => {
    file.value = e.target.files[0];
    files.file = file.value
    const newurl = URL.createObjectURL(file.value);
    url.push(newurl);
    console.log("I am not proxy");
    const reader = new FileReader();
    if (e.target.files[0]) {
        reader.readAsBinaryString(e.target.files[0]);
    }

    reader.onload = () => {
        base64str.value = btoa(reader.result);
        // console.log(base64str.value);
        files.base64str = base64str.value
    };
    reader.onerror = function () {
    };
    objectfile.push(files)
    // console.log("from here"+objectfile.base64str);
}
</script>