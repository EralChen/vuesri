<script lang="ts">
import { props, emits, createEventsOnEmits } from './ctx'
import { defineComponent, inject, provide, watchEffect } from 'vue'
import { useSetVisible, useView } from '@vuesri/shared/use'
import Graphic from 'esri/Graphic'
import { useAddGraphic } from './use'
import Events from './events/index.vue'

export default defineComponent({
  name: 'VaGraphic',
  components: {
    Events,
  },
  emits,
  props,
  setup (props, { emit }) {
    const view = useView()
    const layer = inject<__esri.GraphicsLayer|null>('vaGraphicsLayer', null)
    const graphics = layer?.graphics || view.graphics
    const eventsOnEmits = createEventsOnEmits(emit)
    // core
    const graphic = new Graphic({
      ...props.defaultOptions,
    })

    useSetVisible(graphic, props)
    watchEffect(() => {
      const hasSpatial = props.geometry?.spatialReference

      // 如果是 null 会清除 geometry
      // 如果 是 polygon,polygon.rings.length < 3 会被忽略
      graphic.geometry = props.geometry as __esri.Geometry

      !hasSpatial && graphic.geometry && view.when(() => {
        graphic.geometry.spatialReference = (props.spatialReference || view.spatialReference) as __esri.SpatialReference
      })

    })
    watchEffect(() => {
      graphic.attributes = props.attributes
    })
    watchEffect(() => {
      if (!props.symbol) return
      graphic.symbol = props.symbol
    })

    useAddGraphic(graphics, graphic, props)

    provide('vaGraphic', graphic)


    emit('load', { view, graphic })
    return {
      eventsOnEmits,
      graphic,
    }
  },
})
</script>
<template>
  <Events v-on="eventsOnEmits"></Events>
  <slot
    :graphic="graphic"
    :geometry="graphic.geometry"
    :attributes="graphic.attributes"
  ></slot>
</template>
