<script setup>
import ProjectsComponent from '../components/ProjectsComponent.vue'
import { ref,toRaw} from 'vue';
import fetchTasksData from "@/core/application/infrastructure/fetchData.vue";
import { useGamesFetchDataStore } from "../core/application/store/data";
const data = useGamesFetchDataStore();

const firstObjectOfGamesRef=ref([]);

firstObjectOfGamesRef.value = data.games[0]
</script>

<template>
    <div>
        <fetchTasksData/>
        <ProjectsComponent :firstObjectOfGamesRef="toRaw(firstObjectOfGamesRef)" :key="firstObjectOfGamesRef.id"/>
    </div>
</template>