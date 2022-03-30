import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import voieRoutes from '~pages'
import Layout from '@/layout/admin/index.vue'
import RouterViewWrapper from '_c/RouterViewWrapper/index.vue'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/docs/components/collapse',
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
  {
    path: '/test',
    component: Layout,
    meta: {
      alwaysShow: true,
      title: 'pTest'
    },
    children: [
      { 
        path: 'a', 
        component: RouterViewWrapper, 
        meta: {
          title: 'test',
        },
        children: [
          {
            path: 'b',
            component: () => import('_v/test/index.vue'),
            meta: {
              title: 'test',
            },
          }
        ]
      }
    ]
  },
  ...voieRoutes,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL + '/'),
  routes,
})

export default router