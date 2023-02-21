
<script setup>
import { useGamesFetchDataStore } from "../store/data";

const store = useGamesFetchDataStore();
const { changeNextUrl, changeGamesObject } = store;


async function fetchTasksData() {
  const res = await fetch(store.fetchURL);
  const data = await res.json();
  changeNextUrl(data.next);
  changeGamesObject(data.results);
  return data;
}
try {
  
  fetchTasksData();
} catch (error) {
  console.log("ERRRORRR ERGUN : ",error)
}

</script>

<template>
  <div>
    
  </div>
</template>