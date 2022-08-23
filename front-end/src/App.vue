<template>
<router-view></router-view>
<div>
  <footerVue></footerVue>
</div>
</template>
<script setup lang="ts">
import footerVue from './components/unauthenticated/footer.vue';
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
