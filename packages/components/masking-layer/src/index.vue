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
    const baseLayer = view.map.basemap.baseLayers.getItemAt(0) as __esri.TileLayer
    // core
    const layer = new MaskingLayer({
      color: props.color,
      distance: props.distance,
      geometry: props.geometry,
    })
    watchEffect(() => {
      layer.geometry = props.geometry as __esri.Geometry
      if (props.geometry && !props.geometry.spatialReference) {
        view.when(() => {
          layer.geometry.spatialReference = (props.spatialReference || view.spatialReference) as __esri.SpatialReference
        })
      }
    })
    watchEffect(() => {
      layer.color = props.color
    })
    watchEffect(() => {
      layer.distance = props.distance
    })
    
    watchEffect(() => {

      view.when(() => {
        layer.tileInfo = props.tileInfo ? props.tileInfo : baseLayer.tileInfo
      })
      // layer.tileInfo = props.tileInfo
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
