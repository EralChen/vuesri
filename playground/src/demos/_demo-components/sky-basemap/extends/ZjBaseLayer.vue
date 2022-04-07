<script lang="ts">
import { defineComponent } from 'vue'
import { VaWebTileLayer } from '@vuesri/components/web-tile-layer'
import { VaBasemapBaseLayers } from '@vuesri/components/basemap-base-layers'
import { lods, levelToScale } from '@vuesri/shared/config/tile-info/4490'
import { useBasemap, useView } from '@vuesri/shared/use'

// import { useView } from '@vuesri/shared/use'
export default defineComponent({
  components: {
    VaWebTileLayer,
    VaBasemapBaseLayers,
  },
  setup () {
    const view = useView()
    const defaultOptions:__esri.WebTileLayerProperties & { spatialReference?: __esri.SpatialReferenceProperties } = {
      title: 'zjLayer',
      urlTemplate: `https://ditu.zjzwfw.gov.cn/services/wmts/imgmap/default/oss` + 
          `?service=WMTS&request=GetTile&version=1.0.0&layer=0&style=default` +
          `&tileMatrixSet=default&format=tiles&height=256&width=256&token=3006a6d9-1aee-46b0-93f4-d3334b7ec6d9` + 
          `&tilecol={col}&tilerow={row}&tilematrix={level}`,
      tileInfo: {
        lods: lods.slice(9, 19),
        origin: {
          x: -180,
          y: 90,
        },
        spatialReference: view.spatialReference,
      },
      spatialReference: view.spatialReference,
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
    :minScale="levelToScale[9]"
    :maxScale="levelToScale[18]"

  >
    <VaBasemapBaseLayers />
  </VaWebTileLayer>
</template>
