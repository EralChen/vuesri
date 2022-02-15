<script lang="ts" setup>
import { inject } from 'vue'
import VisitedViews from './visited-views/index.vue'
import Hamburger from '_c/Hamburger/index.vue'
import { sBreakpoints, Breakpoints } from '@/components/AppWrapper/index.vue'
import logo from '@/assets/logo.png'
defineProps({
  hamburgerActive: {
    type: Boolean,
    default: true,
  },
})
const bp = inject<Breakpoints>(sBreakpoints)
const lgTablet = bp?.greater('tablet')
</script>
<template>
  <div class="layout-admin-header-x">
    <!-- <Transition name="slide-up"> -->
      <div v-show="lgTablet" class="sub-mt-xxs">
        <Hamburger
          :modelValue="hamburgerActive"
          @update:modelValue="$emit('update:hamburgerActive', $event)"
        ></Hamburger>
        <VisitedViews></VisitedViews>
      </div>
      <div v-show="!lgTablet" sk-flex="row-between-center" class="layout-admin-header-tablet">
        <div class="layout-admin-header-logo sub-ml-xxs" sk-flex="row_center">
          <img :src="logo" />
          <span>Vue.js</span>
        </div>
        <Hamburger
          :modelValue="hamburgerActive"
          @update:modelValue="$emit('update:hamburgerActive', $event)"
        ></Hamburger>
      </div>
    <!-- </Transition> -->
  </div>
</template>
<style lang="scss">
.layout-admin-header-x {
  background-color: var(--c-bg);
  padding: 0.5em;
}
.layout-admin-header-tablet{
  font-size: 1.5em;
  line-height: 1.5;
  padding: .2em .4em;
}
.layout-admin-header-logo{
  font-weight: bold;
  > img {
    width: 1.2em;
    height: 1.2em;
  }
}
</style>