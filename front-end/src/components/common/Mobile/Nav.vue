<template>
    <div class="lg:hidden w-full  fixed flex z-50 justify-between items-center px-10 border-b-2 shadow-2xl bg-[#E3DCC9]  py-5">
        <div class="text-lg font-bold">
            BS
        </div>
        <button @click="()=>isNav=true">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-list"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
        </button>
    </div>
    <Dropped v-if="isNav" v-on:cancel="isNav = false"></Dropped>
</template>
<script setup>
import Dropped from './Drawer.vue';
import {ref,computed} from 'vue';

const isLogged = computed(()=> localStorage.getItem('Apollotoken') ?  true : false )
const isNav = ref(false)
</script>
<style lang="">
    
</style>