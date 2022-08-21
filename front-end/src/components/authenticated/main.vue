<template>
    <div class=" bg-blue-600 h-28 items-center flex justify-center text-6xl font-extrabold">
        <h1><span class="text-yellow-900">Discover</span> Recipe</h1>
    </div>
    <div class="flex justify-between p-3 px-5 shadow-lg">
        <button class="flex p-4 text-orange-700 hover:bg-slate-400 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus"
                viewBox="0 0 16 16">
                <path
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            <router-link to="/main/addrecipe"><span>Post an event</span></router-link>
            </button>
            <div class="flex space-x-3 ">
                <button  class="flex p-4 px-8 hover:bg-slate-400 rounded">favorite</button>
                <button  class="flex p-4 px-8 hover:bg-slate-400 rounded">feeds</button>
            </div>
        <button >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person"
                viewBox="0 0 16 16">
                <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
        </button>
    </div>
    <div class="">
        <router-view></router-view>
    </div>

</template>


<script setup lang="ts">


</script>