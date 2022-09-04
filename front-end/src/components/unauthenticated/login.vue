<template>
    <div class=" bg-cyan-800 h-28 items-center flex justify-center text-5xl font-extrabold">
        <h1><span class="text-yellow-900">Discover</span> Recipe</h1>
    </div>
    <!-- <section class="">
        <div class=" items-center px-5 py-6 lg:px-20 ">
            <div
                class="flex flex-col w-full shadow-2xl max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
                <div class="mt-8">
                    <div class="mt-6">
                        <div class="space-y-6">
                            <div>
                                <label for="email" class="block text-sm font-medium text-neutral-600">username</label>
                                <div class="mt-1">
                                    <input
                                        class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                        v-model="username" placeholder="enter your username" type="text" />
                                </div>
                            </div>

                            <div class="space-y-1">
                                <label for="password" class="block text-sm font-medium text-neutral-600"> Password
                                </label>
                                <div class="mt-1">
                                    <input id="password" v-model="password" name="password" type="password"
                                        autocomplete="current-password" placeholder="Your Password"
                                        class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">

                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <input name="remember-me" type="checkbox" placeholder="Your password"
                                        class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500">
                                    <label for="remember-me" class="block ml-2 text-sm text-neutral-600"> Remember
                                        me </label>
                                </div>
                                <div class="text-sm">
                                    <a href="#" class="font-medium text-blue-600 hover:text-blue-500 px-2"> Forgot
                                        your password? </a>
                                </div>
                            </div>
                            <div>
                                <button @click="login"
                                    class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign
                                    in</button>
                            </div>
                        </div>
                        <button class="flex justify-end text-blue-500">create new account</button>
                        <div class="relative my-4">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-gray-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->

    <div class="flex justify-center mt-8 ">
        <Form class=" justify-center space-y-10  rounded shadow-xl items-center  p-10" @submit="onSubmit"
            :validation-schema="schema" v-slot="{ errors }">
            <div class="space-y-10">
        
                <div class="space-y-3">
                    <label>Username</label>
                    <Field name="username" type="text" v-model="username" placeholder="enter username"
                        class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        :class="{ 'is-invalid': errors.username }" />
                    <div class="text-red-700">{{errors.username}}</div>
                </div>

                <div class="space-y-3">
                    <label>Password</label>
                    <Field name="password" type="password" v-model="password" placeholder="enter passwpord"
                        class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        :class="{ 'is-invalid': errors.password }" />
                    <div class="text-red-700">{{errors.password}}</div>
                </div>

                <div class="text-sm">
                    <a href="#" class="font-medium text-blue-600 hover:text-blue-500 px-2"> Forgot your
                        password? </a>
                </div>
            </div>
            <div class="pt-2">
                <button v-on:click="onSubmit" type="submit"
                    class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign in</button>
                <span></span>
            </div>
        </Form>
    </div>
    <!-- </div> -->

</template>
<script setup >
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { useStore } from '../../stores/store.js';
import {ref} from 'vue'
const username = ref('')
const password = ref('')
const schema = Yup.object().shape({
    username: Yup.string()
        .required('username is required'),
     password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    })

const user = useStore()

const login = () => {
    user.login(username.value, password.value)
}
const onSubmit = (values)=>{
    if(values){
        user.login(
           username.value,
           password.value
        )
    }
    else {
        console.log("there is something");
    }
}
</script>
<style scoped>
.overlay {
    position: fixed;
    background-color: rgb(0, 0, 0, 0.3);
}
</style>