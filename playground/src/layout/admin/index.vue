<script lang="ts" setup>
import SideBar from './side-bar/index.vue'
import HeaderVue from './header/index.vue'
import { Breakpoints, sBreakpoints } from '@/components/AppWrapper/index.vue'
import { inject, onMounted, ref } from 'vue'
import RouterViewWrapper from '_c/RouterViewWrapper/index.vue'
const bp = inject<Breakpoints>(sBreakpoints)
if (!bp) throw new Error()
const smTablet = bp.smaller('tablet')
const hamburgerActive = ref(false)
onMounted(() => {
  hamburgerActive.value = !smTablet.value
})
</script>
<template>
  <div class="admin-layout-x" sk-flex="row">
    <div
      class="admin-layout-side-bar-x"
      :class="{
        'is-hidden': !hamburgerActive,
        'is-absolute': smTablet,
      }"
    >
      <SideBar @navigate="smTablet && (hamburgerActive = false)"></SideBar>
    </div>
    <main sk-flex-grow="hidden">
      <div class="admin-layout-main__header">
        <HeaderVue v-model:hamburger-active="hamburgerActive"></HeaderVue>
      </div>
      <div class="admin-layout-main__inner" sk-flex-grow="hidden">
        <!-- <slot> -->
          <RouterViewWrapper></RouterViewWrapper>
        <!-- </slot> -->
      </div>
    </main>
  </div>
</template> 
<style lang="scss">
.admin-layout-x {
  height: 100%;
  --c-side-bar-bg: white;
  --c-main-bg: #f7f7f7;
}
.admin-layout-x main {
  flex-direction: column;
  background-color: var(--c-main-bg);
}
.admin-layout-main__inner {
  width: 100%;
}
.admin-layout-side-bar-x {
  height: 100%;
  border-radius: 4px;
  padding: 1em;
  background-color: var(--c-side-bar-bg);
  transition: all 0.4s ease-in-out;
  z-index: 2;
  &.is-absolute {
    position: absolute;
  }
  &.is-full {
    width: 100%;
  }
  &.is-hidden {
    position: absolute;
    transform: translateX(-100%);
  }
}
</style>
