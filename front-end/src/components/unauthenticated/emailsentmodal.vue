<template>
  
  <div class="overlay bg-fixed bg-white  top-0 left-0 bottom-0 right-0 flex items-center justify-center">
    <div class=" h-1/2 bg-green-800 pb-8 w-full shadow-lg border-2 border-slate-50  rounded-md">
      <div class="inline-flex w-48  border-zinc-900 h-auto justify-center">
        <div class="space-y-0 p-2 h-60">
          <div class="flex justify-center items-center">
            <button class="font-bold text-xl h-10 w-10 rounded-md"></button>
          </div>
          <div class="justify-start">
            <div class="hover:bg-slate-300 p-2 rounded">
              <button
                class="w-full text-sm h-10 rounded-md underline underline-offset-8 text-black ">betekbebe@gmail.com</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, defineProps, ref, defineEmits } from 'vue';

const show = ref(true)
const emit = defineEmits(['success'])
onMounted(() => {
  setTimeout(() => {
    show.value = false
  }, 1000);
})
</script>
<style>
</style>