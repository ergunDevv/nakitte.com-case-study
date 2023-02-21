<script setup>
import { RouterView } from "vue-router";
import NavbarComponent from "./presentation/components/NavbarComponent.vue";
</script>

<template>
  <div>
    <NavbarComponent />
    <RouterView />
  </div>
</template>


<style scoped>
</style>