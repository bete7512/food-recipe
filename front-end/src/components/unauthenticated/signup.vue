<template>
    <div class=" bg-cyan-800 h-28 items-center flex justify-center text-5xl font-extrabold">
        <h1><span class="text-yellow-900">Discover</span> Recipe</h1>
    </div>
    <div class="flex justify-center ">
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
                        :class="{ 'is-invalid': errors.email }" />
                    <div class="text-red-700">{{errors.email}}</div>
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
                <div class="pt-2">
                    <button v-on:click="onSubmit" type="submit"
                        class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign
                        up</button>
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
const registersuccessfully = () => {
   
}
const onSubmit = (values)=>{
    if(values){
        user.signup(
            fname.value,
            lname.value,
           username.value,
           email.value,
           password1.value
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
    z-index: 100;
}
</style>