<script lang="ts">
import { useRoutesStore } from '@/store/routes'
import { lintPath, resolveFullPath } from '@/utils/route'
import { defineComponent, ref, watch } from 'vue'
import { useRoute, RouteLocationNormalizedLoaded, useRouter, RouteRecordRaw } from 'vue-router'
type ViewRoute = Omit<RouteLocationNormalizedLoaded, 'redirectedFrom' | 'matched'>
const filterAffixTags = (routes: RouteRecordRaw[], basePath = '') => {
  let tags: Map<string, ViewRoute> = new Map()

  routes.forEach(route => {
    const fullPath = resolveFullPath(route.path, basePath)
    // console.log(fullPath)
    if (route.meta && route.meta.affix) {
      tags.set(fullPath, {
        fullPath,
        hash: '',
        meta: route.meta,
        name: route.name,
        params: {},
        path: route.path,
        query: {},
      })
    }
    if (route.children) {
      const sTags = filterAffixTags(route.children, fullPath)
      if (sTags.size >= 1) {
        tags = new Map([...tags, ...sTags])
      }
    }
  })
  return tags
}
export default defineComponent({
  setup () {
    const routesStore = useRoutesStore()
    const route = useRoute()
    const router = useRouter()
    const visitedViews = ref<Map<string, ViewRoute>>(filterAffixTags(routesStore.routes))
  
    watch(route, (v) => {
      v = router.resolve(v)
      const doc = JSON.parse(JSON.stringify({
        fullPath: v.fullPath,
        hash: v.hash,
        meta: v.meta,
        params: v.params,
        name: v.name,
        query: v.query,
        path: lintPath(v.path),
      })) as ViewRoute
      
      visitedViews.value.set(doc.path, doc)
    }, { immediate: true })

    const delVisitedViews = (key: string, isExactActive: boolean) => {
      [...visitedViews.value].some(([k], index, arr) => {
        if (k === key) {
          visitedViews.value.delete(key)
          if (isExactActive) {
            const pre = arr[index + 1 >= arr.length ? index - 1 : index + 1][1]
            router.push(pre)
          }
          return true
        }
      })
    }

    return {
      visitedViews,
      delVisitedViews,
    }
  },
})
</script>
<template>
  <ul class="layout-admin-header-link-ul" sk-flex="row">
    <li v-for="([key, item]) of visitedViews" :key="key">
      <router-link :to="item.fullPath">
        <template #default="{ isExactActive }">
          {{ item.meta.title }}
          <svg-icon
            :icon-class="'close'"
            v-show="!item.meta.affix"
          
            @click.prevent="delVisitedViews(key, isExactActive)"
          ></svg-icon>
        </template>
      </router-link>
    </li>
  </ul>
</template>
<style lang="scss">
.layout-admin-header-link-ul {
  flex-wrap: wrap;
  li {
    .icon-close {
      border-radius: 50%;
    }


    a {
      position: relative;
      border-radius: 4px;
      display: block;
      border: 1px solid var(--c-border);
      padding: 0.2em 0.4em;
      &.router-link-exact-active {
        color: var(--ic-text);
        background: var(--c-info);
      }
    }
  }
  > * + * {
    margin-left: var(--gap-xxs);
  }
}
</style>