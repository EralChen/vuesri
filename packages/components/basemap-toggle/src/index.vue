<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { useView, useSetVisible } from '@vuesri/shared/use'
import BasemapToggle from 'esri/widgets/BasemapToggle'
export default defineComponent({
  name: 'VaBasemapToggle',
  emits,
  props,
  setup (props, { emit }) {
    const view = useView()
    const toggleNode = ref()
    const basemapToggle = new BasemapToggle({
      view: view as __esri.MapView | __esri.SceneView,
      ...props.defaultOptions,
    })

    useSetVisible(basemapToggle, props)
  
    onMounted(() => {
      basemapToggle.container = toggleNode.value
      view.ui.add(basemapToggle, props.position)
      emit('load', { view, basemapToggle })
    })

    onUnmounted(() => {
      view.ui.remove(basemapToggle)
    })

    return {
      toggleNode,
    }
  },
})
</script>
<template>
  <div ref="toggleNode">
    <slot></slot>
  </div>
</template>
