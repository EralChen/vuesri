<script lang="ts">
import { props, emits, createEventsOnEmits } from './ctx'
import { defineComponent, provide } from 'vue'
import { useView } from '@vuesri/shared/use'
import GraphicsLayer from 'esri/layers/GraphicsLayer'
import { useSetLayerOptions, useAddLayer } from '@vuesri/components/layer/src/use'
import LayerEvents from './events/index.vue'
export default defineComponent({
  name: 'VaGraphicsLayer',
  components: {
    LayerEvents,
  },
  emits,
  props,
  setup (props, { emit }) {
    const view = useView()
    const map = view.map
    const eventsOnEmits = createEventsOnEmits(emit)
    // core
    const layer = new GraphicsLayer({
      ...props.defaultOptions,
    })
    useSetLayerOptions(layer, props)
    useAddLayer(map, layer, props)

    provide('vaLayer', layer)
    provide('vaGraphicsLayer', layer)

    emit('load', { view, layer })
    return {
      eventsOnEmits,
    }
  },
})
</script>
<template>
  <LayerEvents
    v-on="eventsOnEmits"
  ></LayerEvents>
  <slot></slot>
</template>
