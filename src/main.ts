import { createApp } from 'vue'
import App from './presentation/App.vue'
import router from './presentation/router'
import { createPinia } from 'pinia';
import './presentation/index.css'

const app = createApp(App)


app.use(createPinia())
app.use(router)


app.mount('#app')


