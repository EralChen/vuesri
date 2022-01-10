import { RouteRecordRaw } from 'vue-router'
export default [

  {
    path: '/_demo-components/card',
    component: () => import('_v/_demo-components/card/index.vue'),
  },
] as RouteRecordRaw[]