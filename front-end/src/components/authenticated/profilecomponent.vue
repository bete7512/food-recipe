<template>
  <div class="overlay bg-fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center">
    <!-- overlay top-48 z-50 right-5  items-baseline justify-end -->
    <div class=" h-60 pb-8 w-48 shadow-lg border-2 border-slate-50  bg-white rounded-md">
      <div class="inline-flex w-48  border-zinc-900 h-auto justify-center">
        <div class="space-y-0 p-2 h-60">
          <div class="flex justify-center items-center">
            <button @click="discard"
              class="font-bold text-xl h-10 w-10 rounded-md">{{user.username.charAt(0).toUpperCase() + user.username.slice(1)}}</button>
          </div>
          <div class="justify-start">
              <div class="hover:bg-slate-300 p-2 rounded">
                  <button 
                    class="w-full text-sm h-10 rounded-md underline underline-offset-8 text-black ">betekbebe@gmail.com</button>
              </div>
              <!-- <div class="underline text-black">__________________</div> -->
              <ul class="justify-start">
                <li class="flex justify-start">
                    <button 
                      class="w-full h-10  rounded-md  hover:bg-slate-300">My recipe</button>
                </li>
                  <li>
                    <button 
                      class="w-full h-10  rounded-md  hover:bg-slate-300">Edit profile</button>
                </li>
                  <li class="bottom-2">
                    <button @click="user.logout"
                      class="w-full h-10  rounded-md text-black hover:bg-slate-300">Logout</button>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup >
import { useStore } from '../../stores/store.js';
import { onMounted } from 'vue';
import { defineProps, defineEmits } from 'vue';
const emit = defineEmits(['cancelprofile'])
const user = useStore()
const discard = (event) => {
  emit('cancelprofile')
}
</script>
<style scoped>
.overlay {
  position: fixed;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 100;
}
</style>
Footer
