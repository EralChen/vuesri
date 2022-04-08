<script lang="ts">
import { defineComponent } from 'vue'
import { VaWebTileLayer } from '@vuesri/components/web-tile-layer'
import { VaBasemapBaseLayers } from '@vuesri/components/basemap-base-layers'
import { useView } from '@vuesri/shared/use'
export default defineComponent({
  inheritAttrs: false,
  components: {
    VaWebTileLayer,
    VaBasemapBaseLayers,
  },
  setup () {
    const view = useView()
    const baseLayer = view.map.basemap.baseLayers.getItemAt(0) as __esri.TileLayer
    const defaultOptions:__esri.WebTileLayerProperties & { spatialReference?: __esri.SpatialReferenceProperties } = {
      title: 'zjLayer',
      urlTemplate: `https://ditu.zjzwfw.gov.cn/services/wmts/imgmap/default/oss` + 
          `?service=WMTS&request=GetTile&version=1.0.0&layer=0&style=default` +
          `&tileMatrixSet=default&format=tiles&height=256&width=256&token=3006a6d9-1aee-46b0-93f4-d3334b7ec6d9` + 
          `&tilecol={col}&tilerow={row}&tilematrix={level}`,
      tileInfo: baseLayer.tileInfo,
      spatialReference: baseLayer.spatialReference,
    }
    return {
      defaultOptions,
    }
  },
})
</script>
<template>
  <VaWebTileLayer 
    :defaultOptions="defaultOptions" 
    :orphan="true" 
    v-bind="$attrs"

  >
    <VaBasemapBaseLayers />
  </VaWebTileLayer>
</template>
