<script setup>
import CardComponent from "../components/CardComponent.vue";
import { ref } from "vue";

import fetchData from "../fetchData/fetchData.vue";

const gamesRef = ref([]);

function getGameRef(gameref) {
  gamesRef.value = gameref._rawValue;
}
</script>

<template>
  <div>
    <fetchData
      @apiGameNextURL="(i) => apiGameNextURL(i)"
      @apiGamesRef="(i) => getGameRef(i)"
    />

    <div :key="route" class="flex justify-center items-center flex-col">
      <CardComponent
        v-for="game in gamesRef"
        v-bind:key="game.id"
        :game="game"
      />
    </div>
  </div>
</template>
