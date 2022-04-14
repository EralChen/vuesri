<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, onMounted, provide, ref } from 'vue'
import { useView, useSetVisible } from '@vuesri/shared/use'
import BasemapToggle from 'esri/widgets/BasemapToggle'
import { useAddUi } from '@vuesri/components/view-ui/src/use'
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
    provide('vaBasemapToggle', basemapToggle)
    onMounted(() => {
      basemapToggle.container = toggleNode.value
      useAddUi(view.ui, basemapToggle, props)
      emit('load', { view, basemapToggle })
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
