import { RouteRecordRaw } from 'vue-router'
export default [

  {
    path: '/_demo-components/button',
    component: () => import('_v/_demo-components/button/index.vue'),
  },
] as RouteRecordRaw[]