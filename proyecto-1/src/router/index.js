import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Tienda from '../views/Tienda.vue'
import Cocina from '../views/Cocina.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/tienda',
    name: 'tienda',
    component: Tienda
  },
  {
    path: '/cocina',
    name: 'cocina',
    component: Cocina
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
