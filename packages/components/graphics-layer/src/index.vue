<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, provide } from 'vue'
import { useView } from '@vuesri/shared/use'
import GraphicsLayer from 'esri/layers/GraphicsLayer'
import { useSetLayerOptions, useAddLayer } from '@vuesri/components/layer/src/use'
export default defineComponent({
  name: 'VaGraphicsLayer',
  emits,
  props,
  setup (props, { emit }) {
    const view = useView()
    const map = view.map

    // core
    const layer = new GraphicsLayer({
      ...props.defaultOptions,
    })
    useSetLayerOptions(layer, props)
    useAddLayer(map, layer, props)

    provide('vaLayer', layer)
    provide('vaGraphicsLayer', layer)

    emit('load', { view, layer })
    return {}
  },
})
</script>
<template>
  <slot></slot>
</template>
