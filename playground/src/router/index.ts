import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('_v/home.vue'),
  },
  {
    path: '/_demo-master',
    component: () => import('_v/_demo-master/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL + '/'),
  routes,
})

export default router