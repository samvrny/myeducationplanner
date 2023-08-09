import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../views/Notes.vue')
    },
    {
      path: '/archive',
      name: 'archive',
      component: () => import('../views/ScheduleArchive.vue')
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('../views/Resources.vue')
    }
  ],
  linkExactActiveClass: 'active-color'
})

export default router
