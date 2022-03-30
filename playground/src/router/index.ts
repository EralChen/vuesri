import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import voieRoutes from '~pages'
import Layout from '@/layout/admin/index.vue'
import RouterViewWrapper from '_c/RouterViewWrapper/index.vue'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/docs',
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