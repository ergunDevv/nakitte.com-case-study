<script setup>
import { ref,toRaw,defineEmits,defineProps,watch} from 'vue';
const gamesRef = ref([]);
const fetchURL = ref("https://api.rawg.io/api/games?key=257ad12aa1114c9b8f5a7f8ab2f6ce83");
const gameNextURL=ref("https://api.rawg.io/api/games?key=257ad12aa1114c9b8f5a7f8ab2f6ce83&page=2");


const props = defineProps(['fetchDataURL']);
watch(()=>{
    console.log("props FETCHDATA : " ,props.fetchDataURL)
    if(props.fetchDataURL) fetchURL.value = props.fetchDataURL;
    console.log("FETCH URL in FETCHDATA : " , fetchURL.value)
    fetchTasksData();
  })

  /*  Emitting the data*/
  const emit = defineEmits(["apiGamesRef","apiFetchURL","apiGameNextURL"])



  /*   FETCH DATA             */
    fetchTasksData();
    async function fetchTasksData() {
      console.log("fetch task data url : ",fetchURL.value)
      const res = await fetch(`${fetchURL.value}`);
      const data = await res.json();
      gamesRef.value= toRaw(data.results);
      gameNextURL.value=toRaw(data.next)
      console.log(gamesRef.value)
      console.log(gameNextURL.value)


      return data;
    }
    emitt();
     async function emitt(){
      await fetchTasksData();
      await emit("apiGamesRef",gamesRef);
      await emit('apiFetchURL', fetchURL)
      await emit('apiGameNextURL', gameNextURL)
    }

</script>

<template>
<div>

</div>
  </template>


  