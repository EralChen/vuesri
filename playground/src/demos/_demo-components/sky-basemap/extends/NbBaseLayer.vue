<script lang="ts">
import { defineComponent } from 'vue'
import { VaWebTileLayer } from '@vuesri/components/web-tile-layer'
import { VaBasemapBaseLayers } from '@vuesri/components/basemap-base-layers'
import { levelToScale } from '@vuesri/shared/config/tile-info/4490'
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
      urlTemplate: `https://ditu.zjzwfw.gov.cn/services/wmts/emap_lab/default/oss`
        + `?service=WMTS&request=GetTile&version=1.0.0&layer=TDT_ZJEMAPANNO&style=default` 
        + `&tileMatrixSet=c&format=tiles&height=256&width=256&token=2c92920471b56e640171be7537bd0074`
        + `&tilecol={col}&tilerow={row}&tilematrix={level}`,
      tileInfo: baseLayer.tileInfo,
      spatialReference: baseLayer.spatialReference,
    }
    return {
      defaultOptions,
      levelToScale,
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
