import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import DEMO_MASTER from './_demo-master'
// import DEMO_EL_PLUS from './_demo-el-plus'
// import DEMO_EL_PLUS__ADMIN from './_demo-el-plus.admin'
import voieRoutes from '~pages'
export const routes: Array<RouteRecordRaw> = [
  // ...DEMO_EL_PLUS,
  // ...DEMO_MASTER,
  // ...DEMO_EL_PLUS__ADMIN,
  {
    path: '/',
    redirect: '/vunk/components/card',
    meta: {
      hidden: true,
    },
  },
  {
    path: '/home',
    component: () => import('_v/home.vue'),
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