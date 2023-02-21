import { createApp } from 'vue'
import App from './App.vue'
import router from './features/router'
import { createPinia } from 'pinia';
import './index.css'

const app = createApp(App)


app.use(createPinia())
app.use(router)


app.mount('#app')


