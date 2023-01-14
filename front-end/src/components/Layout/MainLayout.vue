<template>
    <div>
       <Nav class="sm:block hidden"></Nav>
       <Mobile class="block sm:hidden"></Mobile>
       <div class="bg-[#E3DCC9] ">

           <slot></slot>
       </div>
    </div>
    <Footer></Footer>
</template>
<script setup lang="ts">
import Footer from '../common/Footer.vue'
import Nav from '../common/Nav.vue';
import Mobile from '../common/Mobile/Nav.vue';
</script>
<style>
    
</style>