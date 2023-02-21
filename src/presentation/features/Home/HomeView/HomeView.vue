<script setup>
// import {ProjectCardFailure} from '../features/ProjectCard/domain/ProjectCardFailure.ts'

import fetchTasksData from "@/core/application/infrastructure/fetchData.vue";
import HomeComponent from "../../../components/HomeComponent.vue";


</script>

<template>
  <div>
    <fetchTasksData/>
    <HomeComponent />
  </div>
</template>
