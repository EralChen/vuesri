<script lang="ts" setup>
import { computed, ref } from 'vue'
import NavLinkTree from '../NavLink/nav-link-tree/index.vue'
import { useRoutesStore } from '@/store/routes'
import { ElInput } from 'element-plus'
import { RouteLocation, RouteRecordRaw } from 'vue-router'
defineEmits({
  navigate: (e: RouteLocation & {
      href: string;
  }) => e,
})
const routesStore = useRoutesStore()
const routes = computed(() => routesStore.routes)
// filter 过滤菜单
const expandLevel = ref(0)
const filterTitle = ref('')
const filterSymbol = Symbol('filter-true')
const includesTitle = (route: RouteRecordRaw) => !!route.meta?.title?.toLocaleLowerCase().includes(filterTitle.value.toLocaleLowerCase())
const filterNode = computed(() => {
  return (route: RouteRecordRaw) => {
    // 是否已被标记命中
    if (route.meta?.[filterSymbol]) return true
    // 如果命中了父节点，则标记所有子节点为命中
    let currentFlag = includesTitle(route)

    let childFlag = false   // 如果命中了子节点，则展示继续展示该父节点
    let stack = [...route.children || []]
    let index = 0
    let item = stack[index]

    while (item) {
      if (includesTitle(item)) {
        childFlag = true
      }
      if (item.meta) {
        item.meta[filterSymbol] = currentFlag
      } else {
        item.meta = {
          [filterSymbol]: currentFlag,
        }
      }
      if (item.children) {
        stack.push(...item.children)
      }
      item = stack[++index]
    }



    return currentFlag || childFlag
  }
})
// filter 过滤菜单 end

</script>
<template>
  <div class="admin-layout-side-bar sub-mt-xxs">
    <ElInput v-model="filterTitle" @change="expandLevel = 5"></ElInput>
    <NavLinkTree 
      :data="routes"
      :expand-level="expandLevel"
      :filter-node-method="filterNode"
      @navigate="$emit('navigate', $event)"
    >
    </NavLinkTree>
  </div>
</template>
<style>
.admin-layout-side-bar {
  --c-bg: var(--c-bg);
  --c-hover-bg: #f0f0f0;

  --c-dir: #9f9f9f;

  --c-text: var(--c-text);
  --c-text-active: var(--ic-text);
  --c-bg-active: var(--c-info);
}
</style>
<style lang="scss">
.admin-layout-side-bar{
  width: 100%;
  height: 100%;
  color: var(--c-text);
  .admin-layout-nav-link{
    padding-left: .3em;
    line-height: 1.75;
    border-radius: 4px;
    margin-top: .2em;
    margin-bottom: .2em;
    &:not(.is-exact-active):hover{
      background-color: var(--c-hover-bg);
    }
  }
  .vk-collapse-header-x.is-dir{
    color: var(--c-dir);
  }
}
</style>