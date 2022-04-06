<script lang="ts">
import { props, emits } from './ctx'
import { computed, defineComponent } from 'vue'
import { VaWebTileLayer } from '@vuesri/components/web-tile-layer'
export default defineComponent({
  name: 'VaTdtWebTileLayer',
  components: {
    VaWebTileLayer,
  },
  emits,
  props,
  setup (props, { emit }) {
    const subDomains = ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7']
    
    const baseTypeInfo = props.type.split('_')
    const baseLayer = baseTypeInfo[0]
    const typeSR = baseTypeInfo[1]

    const defaultOptions = computed<__esri.WebTileLayerProperties & {spatialReference?: __esri.SpatialReferenceProperties}>(() => {
      return {
        subDomains,
        urlTemplate: `https://{subDomain}.tianditu.gov.cn`
          + `/${props.type}/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0`
          + `&LAYER=${baseLayer}&STYLE=default`
          + `&TILEMATRIXSET=${typeSR}&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}`
          + `&tk=${props.token}`,
        
      }
    })
    return {
      defaultOptions,
    }
  },
})
</script>
<template>
  <VaWebTileLayer 
    :defaultOptions="defaultOptions"
    :cursor="cursor"
    :maxScale="maxScale"
    :minScale="minScale"
    :visible="visible"
    :opacity="opacity"
    :index="index"
    :orphan="orphan"
    :title="title"
    @load="$emit('load', $event)"
  >
    <slot></slot>
  </VaWebTileLayer>
</template>
