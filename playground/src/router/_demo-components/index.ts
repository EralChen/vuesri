import { RouteRecordRaw } from 'vue-router'
export default [

  {
    path: '/_demo-components/tab-group',
    component: () => import('_v/_demo-components/tab-group/index.vue'),
  },
  {
    path: '/_demo-components/tab-item',
    component: () => import('_v/_demo-components/tab-item/index.vue'),
  },
  {
    path: '/_demo-components/box-handler',
    component: () => import('_v/_demo-components/box-handler/index.vue'),
  },
  {
    path: '/_demo-components/card',
    component: () => import('_v/_demo-components/card/index.vue'),
  },
] as RouteRecordRaw[]