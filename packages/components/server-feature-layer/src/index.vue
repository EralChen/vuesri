<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, provide, watchEffect } from 'vue'
import { FeatureLayerEvents } from '@vuesri/components/feature-layer'
import { useView } from '@vuesri/shared/use'
import { useAddLayer } from '@vuesri/components/layer/src/use'
import { useSetFeatureLayerOptions, useSetFeatureLayerSpatialReference } from '@vuesri/components/feature-layer/src/use'
import FeatureLayer from 'esri/layers/FeatureLayer'
export default defineComponent({
  name: 'VaServerFeatureLayer',
  components: {
    FeatureLayerEvents,
  },
  emits,
  props,
  setup (props, { emit }) {
    const view = useView()
    const map = view.map
    // core
    const layer = new FeatureLayer({
      ...props.defaultOptions,
    })
    watchEffect(() => {
      layer.url = props.url
    })
    watchEffect(() => {
      props.layerId && (layer.layerId = props.layerId)
    })
    
    useSetFeatureLayerOptions(layer, props)
    useSetFeatureLayerSpatialReference(view, layer, props)
    useAddLayer(map, layer, props)

    provide('vaLayer', layer)
    provide('vaFeatureLayer', layer)
    emit('load', { view, layer })
    return {}
  },
})
</script>
<template>
  <FeatureLayerEvents 
    @click="$emit('click', $event)"
    @pointerMove="$emit('pointerMove', $event)"
  ></FeatureLayerEvents>
   <slot></slot>
</template>
