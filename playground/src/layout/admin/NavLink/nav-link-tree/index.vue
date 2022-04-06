<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { RouteLocation, RouteRecordRaw } from 'vue-router'
import NavLink from '../nav-link/index.vue'
function hasChildren (route: RouteRecordRaw) {
  return !!route.children?.length
}
export default defineComponent({
  name: 'AdminLayoutNavLinkTree',
  components: {
    NavLink,
  },
  props: {
    baseUrl: { // 对于叶子节点来说, 需要 将父节点的 fullPath 作为 baseUrl 再拼接 path 作为跳转路径 
      type: String,
      default: '',
    },
    level: {
      type: Number,
      default: 1,
    },
    data: {
      type: Array as PropType<RouteRecordRaw[]>,
      default: () => [],
    },
    expandLevel: {
      type: Number,
      default: 0,
    },
    filterNodeMethod: {
      type: Function,
      default: () => true,
    },
  },
  emits: {
    navigate: (e: RouteLocation & {
        href: string;
    }) => e,
  },
  setup (props) {
    function getFullPath (path: string, pPath?: string) {
      // return path
      // 
      return path.startsWith('/') ? path : (pPath || props.baseUrl) + '/' + path
    }
    function mergeRoute (pRoute: RouteRecordRaw): RouteRecordRaw {
      // 合并 只有一个儿子 的 route
      if (!pRoute.children || pRoute.meta?.alwaysShow) return pRoute
      const routes = pRoute.children.filter(item => !item.meta?.hidden)
      
      // 只处理 routes 唯一的数据
      if (routes.length === 1) {
        const only = { ...routes[0] }

        only.path = getFullPath(only.path, pRoute.path)
        // console.log(only.path)
        if (only.children?.length) { //如果这个route 还有children
          return mergeRoute(only)
        }
        return only
      } else {
        return pRoute
      }
    }
    const genRoutes = computed(() => {
      return function * (routes: RouteRecordRaw[]) {
        const nRoutes = routes.sort((a, b) => {
          if (a.meta?.sorted && b.meta?.sorted) {
            return a.meta.sorted - b.meta.sorted
          } else {
            return 0
          }
        })

        for (const route of nRoutes) {
          const nRoute = mergeRoute(route)
          if (props.filterNodeMethod(nRoute)) {
            yield nRoute
          }
        }

      }
    })
    return {
      hasChildren,
      getFullPath,
      mergeRoute,
      genRoutes,
    }
  },
})
</script>
<template>
  <ul class="admin-layout-nav-link-ul" :class="`level${level}`">
    <!-- 如果meta中有hidden为true, 则隐藏该条  -->
    <template v-for="item of genRoutes(data)">
      <li v-if="!item.meta?.hidden" class="admin-layout-nav-link-li" :key="item.path">
        <!-- 叶子节点可导航, 叶子节点不需要body -->
        <NavLink
          :to="getFullPath(item.path)"
          :linkable="!hasChildren(item)"
          :bodyIf="hasChildren(item)"
          :expand-body="level <= expandLevel"
          @navigate="$emit('navigate', $event)"
        >
          <template #title>
            <p sk-flex="row_center" class="sub-ml-xxxs">
              <SvgIcon v-if="item.meta?.icon" :icon-class="item.meta?.icon"></SvgIcon>
              <span class="admin-layout-nav-link-label">
   
                <span :title="getFullPath(item.path)">{{ item.meta?.title }} </span>

              </span>
            </p>

          </template>

          <template #body>

            <AdminLayoutNavLinkTree
              :baseUrl="getFullPath(item.path)"
              :data="item.children"
              :level="level + 1"
              :expandLevel="expandLevel"
              :filterNodeMethod="filterNodeMethod" 
              @navigate="$emit('navigate', $event)"
            ></AdminLayoutNavLinkTree>

          </template>
        </NavLink>
      </li>
    </template>
  </ul>
</template>
<style>
.admin-layout-nav-link-ul .vk-collapse-body-x {
  margin-left: var(--gap-s);
}
.admin-layout-nav-link-ul a.is-exact-active {
  color: var(--c-text-active);
  background: var(--c-bg-active);
}
.admin-layout-nav-link-label,
.admin-layout-nav-link {
  display: block;
  width: 100%;
}
</style>