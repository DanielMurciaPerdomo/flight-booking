import {createApp} from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Principal from './views/Principal.vue'

const routes = [
    {path: "/inicio", component: Login},
    {path: "/", component: Login},
    {path: "/registro", component: SignUp},
    {path: "/principal", component: Principal},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })
  
  const app = createApp(App)
  app.use(router)

  app.mount('#app')
