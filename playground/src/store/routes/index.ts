import { defineStore } from 'pinia'
import { routes as staticRoutes } from '@/router'
import { ref } from 'vue'
import { RouteRecordRaw } from 'vue-router'
export const useRoutesStore = defineStore('routes', () => {
  // all routes
  const routes = ref([...staticRoutes])

  // 异步加载的routes
  const addRoutes = ref<RouteRecordRaw[]>([])
  
  return { 
    routes,
    addRoutes,
  }
})

