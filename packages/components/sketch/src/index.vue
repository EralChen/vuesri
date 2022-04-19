<script lang="ts">
import { props, emits, createEventsBindProps, createEventsOnEmits } from './ctx'
import { defineComponent, inject, onMounted, provide, ref, watchEffect } from 'vue'
import { useView } from '@vuesri/shared/use'
import GraphicsLayer from 'esri/layers/GraphicsLayer'
import Sketch from 'esri/widgets/Sketch'
import { useAddUi } from '@vuesri/components/view-ui/src/use'
import Events from './events/index.vue'
export default defineComponent({
  name: 'VaSketch',
  components: {
    Events,
  },
  emits,
  props,
  setup (props, { emit }) {
    const view = useView() as __esri.MapView | __esri.SceneView
    const map = view.map
    let layer = inject('vaGraphicsLayer', null) as unknown as __esri.GraphicsLayer
    if (!layer) { // 如果不存在graphicsLayer 则生成一个
      layer = new GraphicsLayer()
      map.add(layer)
    }
    const eventsBindProps = createEventsBindProps(props)
    const eventsOnEmits = createEventsOnEmits(emit)

    // data
    const sketchNode = ref()
    const ready = ref(false)

    // core
    onMounted(() => {
      const sketch = new Sketch({
        container: sketchNode.value,
        view,
        layer,
        creationMode: 'single',
        ...props.defaultOptions,
      })
      watchEffect(() => {
        if (!props.availableCreatureTools) return
        sketch.availableCreateTools = props.availableCreatureTools
      })

      useAddUi(view.ui, sketch, props)
      provide('vaGraphicsLayer', layer)
      provide('vaSketch', sketch)
      ready.value = true
      emit('load', { sketch, view })
    })

    return {
      eventsBindProps,
      eventsOnEmits,
      sketchNode,
      ready,
    }
  },
})
</script>
<template>
  <div ref="sketchNode">
    <template v-if="ready">
      <Events v-bind="eventsBindProps" v-on="eventsOnEmits"></Events>
      <slot></slot>
    </template>
  </div>
</template>