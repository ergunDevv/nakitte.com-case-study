
<script setup>
import { useGamesFetchDataStore } from "../store/data";
import Failure from "../failure/ProjectCardFailure";

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
  // throw new Error("parameter problem")
} catch (error) {
  console.log("ERRRORRR ERGUN : ", error);
  console.log(Failure.nameTooLong);
}
</script>

<template>
  <div>
  </div>
</template>