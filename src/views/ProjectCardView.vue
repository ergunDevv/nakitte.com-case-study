<script setup>
import CardComponent from "../components/CardComponent.vue";
import { ref } from "vue";
import { useGamesFetchDataStore } from "../core/application/store/data";
import fetchTasksData from "@/core/application/infrastructure/fetchData.vue";

const gamesRef = ref([]);
const data = useGamesFetchDataStore();
gamesRef.value = data.games;
console.log(gamesRef.value);
console.log("data games:" + data.games[0]);
</script>

<template>
  <div>
    <fetchTasksData />

    <div :key="data.games" class="flex justify-center items-center flex-col">
      <CardComponent
        v-for="game in gamesRef"
        v-bind:key="game.id"
        :game="game"
      />
    </div>
  </div>
</template>
