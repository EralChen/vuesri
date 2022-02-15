import { RouteRecordRaw } from 'vue-router'
export default [
  {
    path: '/_demo-el-plus',
    component: () => import('_v/_demo-el-plus/index.vue'),
  },
] as RouteRecordRaw[]