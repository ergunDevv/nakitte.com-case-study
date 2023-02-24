<script setup>
import ProjectsComponent from "../../../components/ProjectsComponent.vue";
import { ref, toRaw ,watch} from "vue";
import fetchTasksData from "../../../../core/application/infrastructure/fetchData.vue";
import { useGamesFetchDataStore } from "../../../../core/application/store/data";
const data = useGamesFetchDataStore();
const firstObjectOfGamesRef = ref([]);
firstObjectOfGamesRef.value = data.games[0];
watch(() => {
  firstObjectOfGamesRef.value = data.games[0];
});
</script>

<template>
  <div>
    <fetchTasksData :key="data.fetchURL"/>
    <ProjectsComponent
      :firstObjectOfGamesRef="toRaw(firstObjectOfGamesRef)"
      :key="firstObjectOfGamesRef.id"
    />
  </div>
</template>