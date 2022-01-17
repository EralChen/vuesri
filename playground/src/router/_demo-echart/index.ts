import { RouteRecordRaw } from 'vue-router'
export default [
  {
    path: '/_demo-echart/geo-3d',
    component: () => import('_v/_demo-echart/geo-3d/index.vue'),
  },
] as RouteRecordRaw[]