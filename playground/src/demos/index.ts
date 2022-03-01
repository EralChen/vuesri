export default {
  
    '_demo-components/tileset-layer/index.vue': () => import('./_demo-components/tileset-layer/index.vue'),
} as Record<string, () => Promise<typeof import("*.vue")>>
