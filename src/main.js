import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'
import './assets/main.css'


// Create the Vue app instance only once
const app = createApp(App)

// Register global plugins
app.use(createPinia())
app.use(router)
app.use(i18n)

// Mount the app to the #app element
app.mount('#app')
