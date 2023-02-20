import { createApp } from 'vue'
import {createPinia} from 'pinia'
import App from '../../../App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

import { useGamesFetchDataStore } from '../store/data'
const data = useGamesFetchDataStore();
// const {changeNextUrl} =data

const fetchTasksData = ()=> {
   console.log(data.games[0].text)
   // const res = await fetch(`${fetchURL.value}`);
   // const data = await res.json();
   // console.log("Data results:",data)
   
   // gamesRef.value= toRaw(data.results);
   // gameNextURL.value=toRaw(data.next)
   
   
   return 
}
fetchTasksData()
export default fetchTasksData
