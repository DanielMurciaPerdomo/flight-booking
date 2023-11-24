import {createApp} from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Navbar from './views/Navbar.vue'

const routes = [
    {path: "/inicio", component: Login},
    {path: "/", component: Login},
    {path: "/registro", component: SignUp},
    {path: "/principal", component: Navbar}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })
  
  const app = createApp(App)
  app.use(router)

  app.mount('#app')
