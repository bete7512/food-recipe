<template>
    <div class="h-20 flex flex-wrap justify-between px-10 w-full bg-cyan-800">
        <div class="flex items-center text-white justify-center text-lg font-bold ">
            <button @click="gotohome" class="hover:bg-pink-600 rounded p-3">Home</button>
            <button class="hover:bg-pink-600 rounded p-3">Service</button>
            <button class="hover:bg-pink-600 rounded p-3">About</button>
        </div>
        <div class="flex px-7 items-center justify-end font-semibold text-lg  text-white ">
            <button @click="signupmodal = true" class="hover:bg-pink-600 flex items-center p-5 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
                <button class="">Register</button>
            </button>
            <button @click="loginmodal = true" class="hover:bg-pink-600 flex items-center p-5 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 flex items-center">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <button class=" rounded">Login</button>
            </button>
        </div>
    </div>
    <slot></slot>
    <Login v-if="loginmodal" v-on:loginSuccess="loginmodal = false" v-on:successfulllogin="successloginmodal = true"></Login>
    <Signup v-if="signupmodal" v-on:signupSuccess="signupmodal = false"
        v-on:successfullsignup="successsignupmodal = true"></Signup>
        <!-- <modalVue :notify=notify v-if="makemodal()" v-on:success="disapear()"></modalVue> -->
</template>
<script setup >
import modalVue from '../modal.vue';
import router from '../../../router/index'
import { ref, computed,onMounted } from 'vue';
import Login from '../login.vue'
import Signup from '../signup.vue'
const notify = ref('')
const notifysignup = ref('You Signed up Succefully')
const notifylogin = ref('You Signed up Succefully')
const successmodal = ref(false)
const successloginmodal = ref(false)
const successsignupmodal = ref(false)
const makemodal = ()=>{
    if(successloginmodal.value){
        notify.value = notifylogin.value
        return true
    }
    else if(successsignupmodal.value){
        notify.value = notifysignup.value
        return true
    }
    else {
        return false
    }
}

const disapear = ()=>{
    // if(successloginmodal.value){
    //     notify.value = ''
        successloginmodal.value = false
//     }
//    if(successsignupmodal.value){
        successsignupmodal.value = false
    // }
}
const loginmodal = ref(false)
const signupmodal = ref(false)
</script>
<style>

</style>