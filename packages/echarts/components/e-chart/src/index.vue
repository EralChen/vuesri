<script lang="ts">
import { defineComponent, onActivated, onMounted, onUnmounted, provide, ref } from 'vue'
import * as echarts from 'echarts'
import ResizeObserver from 'resize-observer-polyfill'
export default defineComponent({
  name: 'EChart',
  inheritAttrs: false,
  setup () {
    const chartNode = ref<HTMLDivElement | null>(null)
    const ready = ref(false)
    onMounted(() => {
      const dom = chartNode.value
      if (!dom) return
      const chart = echarts.init(dom)
      provide('echart', chart)
      ready.value = true
      const resize = () => chart.resize()
      onActivated(() => {
        resize()
      })
      onUnmounted(() => {
        chart.dispose()
      })
      // if (window.ResizeObserver) {
      const observer = new ResizeObserver(() => window.requestAnimationFrame(resize))
      observer.observe(dom)
      onUnmounted(() => {
        observer.unobserve(dom)
        observer.disconnect()
      })
      // }

    })
   
    return {
      chartNode,
      ready,
    }
  },
})
</script>
<template>
  <div ref="chartNode" class="e-chart-x" v-bind="$attrs"></div>
  <slot v-if="ready"></slot>
</template>
<style scoped>
.e-chart-x {
  height: 100%;
}
</style>
