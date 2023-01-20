<script setup>
// import {ProjectCardFailure} from '../features/ProjectCard/domain/ProjectCardFailure.ts'
import fetchTasksData from "../core/application/infrastructure/fetchData"

import HomeComponent from '../components/HomeComponent.vue';
import { useGamesFetchDataStore } from '../core/application/store/data'
const data = useGamesFetchDataStore();
const {changeNextUrl} =data

</script>

<template>
    <div>
        <HomeComponent/>
         {{ data.games[0].text }}
        <button @click="changeNextUrl('hey data changed')">heeeeeeeeeey</button>
        <fetchTasksData/>
    </div>
</template>
