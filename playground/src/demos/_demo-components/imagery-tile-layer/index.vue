<script lang="ts" setup>
import { VaImageryTileLayer } from '@vuesri/components/imagery-tile-layer'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { FlowRenderer } from 'esri/rasterRenderers'
import ColorVariable from 'esri/renderers/visualVariables/ColorVariable'
const defaultOpitons:__esri.ImageryTileLayerProperties = {
  url: 'http://116.63.63.191:6080/arcgis/rest/services/fc_merge/ImageServer',
  title: 'spddir',
  renderer: new FlowRenderer({
    trailWidth: '2px',
    // color: [50, 120, 240, 1],
    density: 1,
    visualVariables: [
      new ColorVariable({
        field: 'Magnitude',
        stops: [
          { color: [40, 146, 199, 1], value: 0 },
          { color: [160, 194, 155, 1], value: 5 },
          { color: [218, 230, 119, 1], value: 10 },
        ],
      }),

    ],
  }),
  effect: 'bloom(1.5, 0.5px, 0)',
}
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaImageryTileLayer
    :defaultOptions="defaultOpitons"
  ></VaImageryTileLayer>
</VaMapView>
</template>
