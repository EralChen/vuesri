import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import EXAMPLE from './_demo-components'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('_v/home.vue'),
  },
  ...EXAMPLE,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL + '/'),
  routes,
})

export default router