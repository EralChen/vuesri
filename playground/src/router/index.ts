import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import EXAMPLE from './_demo-components'
import ECHRAT from './_demo-echart'
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
  ...ECHRAT,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL + '/'),
  routes,
})

export default router