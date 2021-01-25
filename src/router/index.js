import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GoPiano88 from '../views/GoPiano88.vue'
import Rd88 from '../views/Rd88.vue'
import Xe20 from '../views/Xe20.vue'
import Sv2 from '../views/Sv2.vue'
import NotFoundComponent from "../views/NotFoundComponent.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gopiano88',
    name: 'gopiano88',
    component: GoPiano88
  },
  {
    path: '/rd88',
    name: 'rd88',
    component: Rd88
  },
  {
    path: '/xe20',
    name: 'xe20',
    component: Xe20
  },
  {
    path: '/sv2',
    name: 'sv2',
    component: Sv2
  },
  { path: "/:pathMatch(.*)", component: NotFoundComponent },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
