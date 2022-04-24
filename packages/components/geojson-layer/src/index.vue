<script lang="ts">
import { props, emits, createLayerEventsOnEmits } from './ctx'
import { defineComponent, provide, watchEffect } from 'vue'
import { useView } from '@vuesri/shared/use'
import { useSetLayerOptions, useAddLayer } from '@vuesri/components/layer/src/use'
import GeoJSONLayer from 'esri/layers/GeoJSONLayer'
import { GraphicsEvents } from '@vuesri/components/layer'
import { sMitter } from '@vuesri/shared/symbol'
import mitt from 'mitt'
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
    const layerEventsOnEmits = createLayerEventsOnEmits(emit)
    // core
    const layer = new GeoJSONLayer({
      ...props.defaultOptions,
    })

    // https://developers.arcgis.com/javascript/latest/sample-code/sandbox/?sample=layers-geojson-refresh
    // [TODO] emit change 信息 
    layer[sMitter] = mitt()

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
    provide('vaLayer', layer)
    provide('vaGeojsonLayer', layer)
    return {
      layerEventsOnEmits,
    }
  },
})
</script>
<template>
  <GraphicsEvents
    v-on="layerEventsOnEmits"
  ></GraphicsEvents>
  <slot></slot>
</template>
