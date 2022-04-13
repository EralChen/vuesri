<script lang="ts">
import { props, emits, createFeatureLayerBindProps, createClientFeatureLayerOnEmits } from './ctx'
import { defineComponent, Ref, shallowRef, watch } from 'vue'
import { VaClientFeatureLayer } from '@vuesri/components/client-feature-layer'
import { VaLayerWhen } from '@vuesri/components/layer-when'
import { useFeatureLayer } from '@vuesri/shared/use'
export default defineComponent({
  name: 'VaDerivedFeatureLayer',
  components: {
    VaClientFeatureLayer,
    VaLayerWhen,
  },
  emits,
  props,
  setup (props, { emit }) {
    const layer = useFeatureLayer() 
    const featureLayerProps = createFeatureLayerBindProps(props, ['renderer'])
    const clientFeatureLayerOnEmit = createClientFeatureLayerOnEmits(emit)
    
    const source = shallowRef([]) as Ref<__esri.Graphic[]>
    watch(() => {
      return props.query && {...props.query}
    }, v => {
      if (v) {
        layer.queryFeatures({
          where: '1=1',
          returnGeometry: true,
          outFields: ['*'],
          ...v,
        }).then(res => {
          source.value = res.features
        })
      } else {
        source.value = []
      }
    }, { immediate: true })

    // core
    return {
      source,
      featureLayerProps,
      clientFeatureLayerOnEmit,
    }
  },
})
</script>
<template>
  <VaLayerWhen>
    <template #default="{layer:featureLayer}">
      <VaClientFeatureLayer
        :object-id-field="featureLayer.objectIdField"
        :geometry-type="featureLayer.geometryType"
        :fields="featureLayer.fields"
        :source="source"
        :renderer="renderer||featureLayer.renderer"
        v-bind="featureLayerProps"
        v-on="clientFeatureLayerOnEmit"
      >
        <slot></slot>
      </VaClientFeatureLayer>
    </template>
  </VaLayerWhen>
</template>
