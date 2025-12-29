import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TimestampConverter from '../views/TimestampConverter.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/timestamp-converter',
    name: 'TimestampConverter',
    component: TimestampConverter
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
