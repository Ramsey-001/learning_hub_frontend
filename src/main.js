import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory} from "vue-router"

import App from './App.vue'
import router from './router'
import Login from "./views/Login.vue"
import Posts from "./views/Posts.vue"

const app = createApp(App)

const routes = [
  { path: "/", component: Login },
  { path: "/posts", component: Posts}
];



app.use(createPinia())
app.use(router)

app.mount('#app')
