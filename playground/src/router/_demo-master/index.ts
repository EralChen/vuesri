import { RouteRecordRaw } from 'vue-router'
export default [
  {
    path: '/_demo-master',
    component: () => import('_v/_demo-master/index.vue'),
  },
] as RouteRecordRaw[]