<template>
    <div class=" bg-cyan-800 h-28 items-center flex justify-center text-5xl font-extrabold">
        <h1><span class="text-yellow-900">Discover</span> Recipe</h1>
    </div>
    <div v-if="success" class="flex justify-center bg-green-700 h-96 w-full">
        <div>
            {{modal}}
        </div>
    </div>
    <div v-else class="flex justify-center ">
        <Form class="flex justify-center rounded shadow-xl items-center space-y-2 p-10" @submit="onSubmit"
            :validation-schema="schema" v-slot="{ errors }">
            <div>
                <div class="form-row">
                    <div class="form-group col-5">
                        <label>First Name</label>
                        <Field name="firstName" type="text" v-model="fname"
                            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                            :class="{ 'is-invalid': errors.firstName }" />
                        <div class="text-red-700">{{errors.firstName}}</div>
                    </div>
                    <div class="form-group col-5">
                        <label>Last Name</label>
                        <Field name="lastName" type="text" v-model="lname"
                            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                            :class="{ 'is-invalid': errors.lastName }" />
                        <div class="text-red-700">{{errors.lastName}}</div>
                    </div>
                </div>
                <div class="form-group col">
                    <label>Username</label>
                    <Field name="username" type="text" v-model="username"
                        class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        :class="{ 'is-invalid': errors.username }" />
                    <div class="text-red-700">{{errors.username}}</div>
                </div>
                <div class="form-group col">
                    <label>Email</label>
                    <Field name="email" type="text" v-model="email"
                        class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        :class="{ 'is-invalid': errors.email }" />
                    <div class="text-red-700">{{errors.email}}</div>
                </div>
                <div class="form-row">
                    <div class="form-group col">
                        <label>Password</label>
                        <Field name="password" type="password" v-model="password1"
                            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                            :class="{ 'is-invalid': errors.password }" />
                        <div class="text-red-700">{{errors.password}}</div>
                    </div>
                    <div class="form-group col">
                        <label>Confirm Password</label>
                        <Field name="confirmPassword" type="password" v-model="password2"
                            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                            :class="{ 'is-invalid': errors.confirmPassword }" />
                        <div class="text-red-700">{{errors.confirmPassword}}</div>
                    </div>
                </div>

                <div class="flex justify-between">
                    <div class="">
                        <div class="flex">
                            <Field name="acceptTerms" type="checkbox" id="acceptTerms" value="true"
                                class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                :class="{ 'is-invalid': errors.acceptTerms }" />
                            <label for="acceptTerms" class="block ml-2 text-sm text-neutral-600">Accept Terms &
                                Conditions</label>
                        </div>
                        <div class="text-red-700">{{errors.acceptTerms}}</div>
                    </div>

                    <div class="text-sm">
                        <a href="#" class="font-medium text-blue-600 hover:text-blue-500 px-2"> Forgot your
                            password? </a>
                    </div>
                </div>
                <div class="text-cyan-600">{{modal}}</div>
                <div class="pt-2">
                    <!-- <button v-on:click="onSubmit" type="submit"
                        class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign
                        up</button> -->
                    <button v-on:click="onSubmit" type="submit"
                        class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <div v-if="signupprocess" class="text-2xl">
                            <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101"
                                fill="none" xmlns="http://www.w3.org/2000/svg">

                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor" />
                            </svg>
                            signingup...
                        </div>
                        <div v-else>
                            Sign up
                        </div>
                    </button>


                    <span></span>
                </div>
            </div>
        </Form>
    </div>

</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { useMutation,} from '@vue/apollo-composable';
import { useStore } from '../../stores/store.js';
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    firstName: Yup.string()
        .required('First Name is required'),
    lastName: Yup.string()
        .required('Last name is required'),
    username: Yup.string()
        .required('username is required'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    acceptTerms: Yup.string()
        .required('Accept Ts & Cs is required')
});
const fname = ref('')
const lname = ref('')
const email = ref('')
const username = ref('')
const password1 = ref('')
const password2 = ref('')
const user = useStore()
const modal = ref('')
const success = ref(false)
const signupprocess  = ref(false)
const onSubmit = async ()=>{
    if(fname.value&&lname.value&&username.value&&email.value&&password1.value&&password2.value){
        signupprocess.value = true
        try {
        const success = await user.signup(fname.value,lname.value,username.value, email.value, password1.value )
         modal.value = success  
   
        } catch (error){
            modal.value = error.message
            signupprocess.value = false
        }
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
    z-index: 100;
}
</style>