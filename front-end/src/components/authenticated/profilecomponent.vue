<template>
  <div class="overlay top-44  right-0  items-baseline justify-end">
    <div class=" h-auto pb-8 w-40  bg-slate-700 rounded-md">
      <div class="inline-flex w-auto  border-zinc-900 h-auto justify-center">
        <div class="space-y-2 p-2 h-60">
          <div class="flex justify-end"><button @click="discard"
              class="font-bold text-4xl hover:bg-red-700 h-10 w-10 rounded-md">x</button>
          </div>
          <div class="space-y-3">
              <div>
                  <button 
                    class="w-full h-10 rounded-md text-white hover:bg-red-800">my profile</button>
              </div>
              <div>
                  <button 
                    class="w-full h-10 bg-sky-600 rounded-md text-white hover:bg-emerald-400">my recipe</button>
              </div>
                <div>
                  <button 
                    class="w-full h-10 bg-sky-600 rounded-md text-white hover:bg-emerald-400">edit my profile</button>
              </div>
                <div>
                  <button @click="user.logout"
                    class="w-full h-10 bg-sky-600 rounded-md text-white hover:bg-emerald-400">logout</button>
              </div>
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
