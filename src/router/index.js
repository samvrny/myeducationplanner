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
      path: '/notes',
      name: 'notes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
  ]
})

export default router
