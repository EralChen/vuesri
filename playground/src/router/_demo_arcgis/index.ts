import { RouteRecordRaw } from 'vue-router'
export default [
  {
    path: '/_demo-arcgis',
    component: () => import('_v/_demo-arcgis/index.vue'),
  },
] as RouteRecordRaw[]
