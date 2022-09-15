<template>
    <settinglayoutVue>
        <div class="w-1/2 shadow-xl mt-5 p-10">
            <div class="font-extrabold text-4xl flex justify-center items-center"><span class="">Update</span><span
                    class="px-2 text-3xl font-serif text-orange-400">Profile</span></div>
            <div class="justify-center flex   w-full rounded  items-center">
                <div class="flex justify-center  items-center">
                    <div class="">
                        <div v-if="profile_image_added" class="" >
                            <div class="my-3">
                                <img :src="url" class="bg-black h-32 w-32  rounded-full" alt="insert image">
                            </div>
                        </div>
                        <div v-else class="flex justify-center items-center h-32 w-32 rounded0full mt-5">
                            <label for="dropzone-file"
                                class="flex flex-col justify-center items-center w-full h-full rounded-full bg-gray-50 border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col justify-center items-center py-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="py-auto w-10 h-10 text-gray-400"
                                        fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                        className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />

                                    </svg>
                                    <p class="text-xs">add your profile</p>
                                </div>
                                <input @change="changefile" id="dropzone-file" type="file" class="hidden " />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" w-full  ">
                <div class="w-full flex flex-wrap justify-center items-center p-5">
                    <div class="flex flex-wrap space-x-1   mt-5">
                        <div class="">
                            <div>
                                <div>First name</div>
                                <input v-model="fname" class="border p-3 border-gray-400 rounded h-10 w-full" name="" />
                            </div>
                            <div>
                                <div>Last name</div>
                                <input v-model="lname" class="border  p-3 border-gray-400 rounded h-10 w-full"
                                    name="" />
                            </div>
                            <div>
                                <div>email</div>
                                <input v-model="email" class="border  p-3 border-gray-400 rounded h-10 w-full"
                                    name="" />
                            </div>
                        </div>
                        <div class="px-2">
                            <div>
                                <div>Enter your pulic name</div>
                                <input v-model="publicname" class="border  p-3 border-gray-400 rounded h-10 w-full"
                                    name="" />
                            </div>
                        </div>
                        <div class=" w-full">
                            <div>Enter your Bios</div>
                            <textarea v-model="bios" class="border p-3 border-gray-400 rounded h-44 w-full"
                                name=""></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pt-2">
                <button @click="updateprofile"
                    class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <div v-if="updating" class="text-2xl">
                        <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101"
                            fill="none" xmlns="http://www.w3.org/2000/svg">

                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor" />
                        </svg>
                        updating profile
                    </div>
                    <div v-else>
                        update profile
                    </div>
                </button>
            </div>
        </div>
    </settinglayoutVue>
</template>
<script setup >
import { recipeStore } from '../../../stores/recipestore.js';
import { useStore } from '../../../stores/store.js';

import { file_upload, update_profile } from '@/tools/queries';
import settinglayoutVue from '../layouts/settinglayout.vue';
import { useMutation, useQuery } from '@vue/apollo-composable';
import { ref, reactive } from 'vue'
const recipe = recipeStore()
const file = ref('')
const base64str = ref('')
const objectfile = reactive({})
const path = ref('')
const url = ref('')
const profile_image_added = ref(false)
const updating = ref(false)
const updateprofile = async () => {
    console.log(objectfile);
    updating.value = true
    path.value = await recipe.upload_file(objectfile)
    update_profiles()
}
const { mutate: update_profiles, onDone } = useMutation(update_profile, () => ({
    variables: {
        fname: fname,
        lnam: lanme,
        email: email,
        profile_image: path,
        id: id,
    }
}))

const changefile = async (e) => {
    file.value = e.target.files[0];
    url.value = URL.createObjectURL(file.value);
    const reader = new FileReader();
    if (e.target.files[0]) {
        reader.readAsBinaryString(e.target.files[0]);
    }
    reader.onload = () => {
        base64str.value = btoa(reader.result);
        objectfile.file = file.value,
        objectfile.base64str = base64str.value;
        profile_image_added.value = true
    };
}
</script>