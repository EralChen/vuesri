<script lang="ts">
import { props, emits, createFeatureLayerOnEmits } from './ctx'
import { defineComponent, nextTick, provide, watch, watchEffect } from 'vue'
import { useView } from '@vuesri/shared/use'
import { useAddLayer } from '@vuesri/components/layer/src/use'
import FeatureLayer from 'esri/layers/FeatureLayer'
import { useSetFeatureLayerOptions, useSetFeatureLayerSpatialReference } from '@vuesri/components/feature-layer/src/use'
import { FeatureLayerEvents } from '@vuesri/components/feature-layer'
import Graphic from 'esri/Graphic'
import mitt from 'mitt'
import { sMitter } from '@vuesri/shared/symbol'
export default defineComponent({
  name: 'VaClientFeatureLayer',
  components: {
    FeatureLayerEvents,
  },
  emits,
  props,
  setup (props, { emit }) {
    const view = useView()
    const map = view.map
    const onFeatureLayerEmits = createFeatureLayerOnEmits(emit)
    // core
    const layer = new FeatureLayer({
      source: props.source,
      ...props.defaultOptions,
    })
    layer[sMitter] = mitt()

    const mitter = layer[sMitter]

    useSetFeatureLayerOptions(layer, props)
    useSetFeatureLayerSpatialReference(view, layer, props)
    
    watchEffect(() => {
      layer.geometryType = props.geometryType
    })
    watchEffect(() => {
      layer.objectIdField = props.objectIdField
    })
    watchEffect(() => {
      layer.fields = props.fields as unknown as __esri.Field[]
    })

    useAddLayer(map, layer, props)

    watch(() => props.source, (v, ov) => {
      nextTick().then(() => {  // 让defaultFields生成
        const updateFeatures: Graphic[] = []
        // 从 v中减去 ov中有的id
        // 从 ov中减去 v中有的id
        const addMap = (v as Graphic[]).reduce((a, c) => {
          const id = c.attributes[props.objectIdField]
          a[id] = c
          return a
        }, {} as Record<string, Graphic>)

        const delMap = (ov as Graphic[]).reduce((a, c) => {
          const id = c.attributes[props.objectIdField]
          if (Reflect.has(addMap, id)) {
            updateFeatures.push(c)
            Reflect.deleteProperty(addMap, id)
          } else {
            a[id] = c
        
          }
          return a
        }, {} as Record<string, Graphic>)


        const addFeatures: Graphic[] = []
        const deleteFeatures: Graphic[] = []
        for (const key in addMap) {
          addFeatures.push(addMap[key])
        }
        for (const key in delMap) {
          deleteFeatures.push(delMap[key])
        }

        return {
          addFeatures,
          deleteFeatures,
          updateFeatures,
        }
      }).then((editObj) => {
        return layer.applyEdits(editObj)
      }).then(() => {
        // [TODO] 为了刷新某些renderer
        if (props.forceUpdate) {
          layer.visible = false
          layer.visible = true
        }
        return { view, layer }
      }).then(changeEvent => {
        mitter.emit('change', changeEvent)
        emit('change', changeEvent)
      })

    })

    provide('vaLayer', layer)
    provide('vaFeatureLayer', layer)
    emit('load', { view, layer })
    return {
      onFeatureLayerEmits,
    }
  },
})
</script>
<template>
  <FeatureLayerEvents
    v-on="onFeatureLayerEmits"
  ></FeatureLayerEvents>
  <slot></slot>
</template>
