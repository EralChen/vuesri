<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent } from 'vue'
import WMSLayer from 'esri/layers/WMSLayer'
import { useAddLayer } from '@vuesri/components/layer/src/use'
import { useView } from '@vuesri/shared/use'

export default defineComponent({
  name: 'VaWmsLayer',
  emits,
  props,
  setup (props, { emit }) {
    const view = useView()
    const map = view.map
    // core
    const layer = new WMSLayer({
      url: 'http://192.168.110.135:8080/map/sophon/MapServer',
      customParameters: {
        key: 1,
      },
      // featureInfoUrl: ''
      
      sublayers: [
        {
          name: 'region',
        },
      ],
    })
    useAddLayer(map, layer, props)
    emit('load', { })
    return {}
  },
})
</script>
<template>
  <slot></slot>
</template>
