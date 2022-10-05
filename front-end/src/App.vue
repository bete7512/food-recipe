<template>
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
  <!-- Scroll to top -->
  <back-to-top visibleoffset="500" right="30px" bottom="20px" class="shadow-lg">
    <i data-feather="chevron-up"></i>
  </back-to-top>
  <div>
    <footerVue>
    </footerVue>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import footerVue from './components/unauthenticated/footer.vue';
const theme = localStorage.getItem('theme')
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(0, 0, 0, 0.905);
  overflow: scroll;
}
</style>
