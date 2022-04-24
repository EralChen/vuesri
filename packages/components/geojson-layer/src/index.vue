<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, watchEffect } from 'vue'
import { useView } from '@vuesri/shared/use'
import { useSetLayerOptions, useAddLayer } from '@vuesri/components/layer/src/use'
import GeoJSONLayer from 'esri/layers/GeoJSONLayer'
import { GraphicsEvents } from '@vuesri/components/layer'
export default defineComponent({
  name: 'VaGeojsonLayer',
  components: {
    GraphicsEvents,
  },
  emits,
  props,

  setup (props, { emit }) {
    const view = useView()
    const map = view.map

    // core
    const layer = new GeoJSONLayer({
      ...props.defaultOptions,
    })
    useSetLayerOptions(layer, props)

    watchEffect(() => {
      layer.geometryType = props.geometryType
    })
    watchEffect(() => {
      layer.url = props.url
    })
    watchEffect(() => {
      if (props.renderer === undefined) return
      layer.renderer = props.renderer
    })
    watchEffect(() => {
      layer.definitionExpression = props.definitionExpression
    })

    useAddLayer(map, layer, props)

    emit('load', { view, layer })
    return {}
  },
})
</script>
<template>
  <GraphicsEvents></GraphicsEvents>
  <slot></slot>
</template>
