<template>
  <div v-if="show" class="fixed bottom-5 right-5  z-50 place-items-end justify-end">
    <div class=" h-16 w-60 bg-green-600 rounded-md">
        <div class="text-white inline-flex p-4 py-2 mt-2"> Email is sent to your email check it and register
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, defineProps,ref, defineEmits } from 'vue';

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