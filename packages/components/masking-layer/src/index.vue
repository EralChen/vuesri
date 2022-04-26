<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, watchEffect } from 'vue'
import { MaskingLayer } from './MaskingLayer'
import { useAddLayer, useSetLayerOptions } from '@vuesri/components/layer/src/use'
import { useView } from '@vuesri/shared/use'
export default defineComponent({
  name: 'VaMaskingLayer',
  emits,
  props,
  setup (props, { emit }) {
    const view = useView()
    const map = view.map

    // core
    const layer = new MaskingLayer({
      color: props.color,
      distance: props.distance,
      geometry: props.geometry,
    })
    watchEffect(() => {
      layer.geometry = props.geometry as __esri.Geometry
    })
    watchEffect(() => {
      layer.color = props.color
    })
    watchEffect(() => {
      layer.distance = props.distance
    })

    useSetLayerOptions(layer, props)
    useAddLayer(map, layer, props)

    emit('load', { view, layer })
    return {}
  },
})
</script>
<template>
  <slot></slot>
</template>
