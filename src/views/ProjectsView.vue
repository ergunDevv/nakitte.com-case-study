<script setup>
import ProjectsComponent from '../components/ProjectsComponent.vue'
import fetchData from '@/fetchData/fetchData.vue';
import { ref,toRaw} from 'vue';


const gamesRef = ref([]);
const fetchDataURL = ref("");
const gameNextURL = ref("")
const firstObjectOfGamesRef=ref([]);

  function apiGameNextURL(fetchGameNextURL){
     gameNextURL.value = fetchGameNextURL._rawValue;

}
function fetchURLSetter(){
        console.log("gamenext url : " ,gameNextURL.value)
        fetchDataURL.value=toRaw(gameNextURL.value);
        console.log("fetch setter : " ,fetchDataURL)
    }
    function getGameRef(gameref){
      gamesRef.value=gameref._rawValue;
      firstObjectOfGamesRef.value=toRaw(gamesRef.value[0]);
}
</script>

<template>
    <div>
        <fetchData @apiGamesRef="(i)=>getGameRef(i)" @apiGameNextURL="(i)=>apiGameNextURL(i)" :fetchDataURL="fetchDataURL" :key="fetchURL"/>
        <button @click="fetchURLSetter">fetch the dataaa</button>
        <ProjectsComponent :firstObjectOfGamesRef="toRaw(firstObjectOfGamesRef)" :key="firstObjectOfGamesRef.id"/>
    </div>
</template>