<script lang="ts">
import { props, emits } from './ctx'
import { computed, defineComponent, nextTick, ref, watch } from 'vue'
import { VaWebTileLayer } from '@vuesri/components/web-tile-layer'
import { lods } from '@vuesri/shared/config/tile-info/4490'
export default defineComponent({
  name: 'VaTdtWebTileLayer',
  components: {
    VaWebTileLayer,
  },
  emits,
  props,
  setup (props) {
    const subDomains = ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7']
    const urlParams = computed(() => {
      const baseTypeInfo = props.type.split('_')
      const baseLayer = baseTypeInfo[0]
      const typeSR = baseTypeInfo[1]
      return {
        baseLayer,
        typeSR,
      }
    })

    const defaultOptions = computed<__esri.WebTileLayerProperties & {spatialReference?: __esri.SpatialReferenceProperties}>(() => {
      const tileInfo: __esri.TileInfoProperties = {
        origin: {
          x: -180,
          y: 90,
        },
        spatialReference: props.spatialReference,
      }
      tileInfo.lods = lods.slice(props.lodsLevel[0], props.lodsLevel[1] + 1)
      
      return {
        subDomains,
        urlTemplate: `https://{subDomain}.tianditu.gov.cn`
          + `/${props.type}/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0`
          + `&LAYER=${urlParams.value.baseLayer}&STYLE=default`
          + `&TILEMATRIXSET=${urlParams.value.typeSR}&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}`
          + `&tk=${props.token}`,
        tileInfo,
        spatialReference: props.spatialReference,
      }
    })

    /* reload */
    const ready = ref(true)
    watch(() => props.type, async () => {
      ready.value = false
      await nextTick()
      ready.value = true
    })
    /* reload end */

    return {
      defaultOptions,
      ready,
    }
  },
})
</script>
<template>
  <VaWebTileLayer 
    v-if="ready"
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
