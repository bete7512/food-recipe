<template>
  <div class="overlay bg-fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center">
    <div class="bg-white w-1/3 h-96  rounded shadow-xl p-5">
      <div class="items-center  flex justify-between px-5 pt-1 ">
        <div class="text-green-600 text-lg font-serif">Thank You for registering</div>
        <button @click="emitsuccessfullsignup" class="  text-3xl text-black rounded  ">X</button>
      </div>
      <div class=" flex justify-center  items-center mt-5">
        <div class="">
          <div>
            <svg class="h-40 w-40" style="color: rgb(28, 202, 80);" viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg">
              <path fill="#1cca50"
                d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z">
              </path>
            </svg>
          </div>
          <div class=" font-sans text-lg">
            You are registered successfully
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup >
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { useStore } from '../../stores/store.js';
import { ref } from 'vue'
import { defineEmits } from 'vue';
const username = ref('')
const password = ref('')

const emit = defineEmits(['successfullsignup'])
const emitsuccessfullsignup = (event) => {
  emit('successfullsignup')
}


</script>
<style scoped>
.overlay {
  position: fixed;
  background-color: rgb(0, 0, 0, 0.3);
}
</style>