<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, provide } from 'vue'
import { FeatureLayerEvents } from '@vuesri/components/feature-layer'
import { useAddLayer, useView } from '@vuesri/shared/use'
import { useSetFeatureLayerOptions } from '@vuesri/components/feature-layer/src/use'
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
      url: props.url,
      ...props.defaultOptions,
    })
    useSetFeatureLayerOptions(layer, props)
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
