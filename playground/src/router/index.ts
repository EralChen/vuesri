import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import voieRoutes from '~pages'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/docs/components/collapse',
    meta: {
      hidden: true,
    },
  },
  ...voieRoutes,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL + '/'),
  routes,
})

export default router