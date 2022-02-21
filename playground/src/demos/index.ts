export default {
  'card/index.vue': () => import('./card/index.vue'),
} as Record<string, () => Promise<typeof import('*.vue')>>