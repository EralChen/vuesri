<script lang="ts">
import { defineComponent, provide } from 'vue'
import { useBreakpoints } from '@vueuse/core'
const breakpointsHelper = () => useBreakpoints({
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
})
export type Breakpoints = ReturnType<typeof breakpointsHelper>
export const sBreakpoints = Symbol('breakpoints')
export default defineComponent({
  setup () {
    const breakpoints = breakpointsHelper()
    provide(sBreakpoints, breakpoints)
    return {

    }
  },
})
</script>
<template>
  <slot></slot>
</template>
