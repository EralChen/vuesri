<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { VaMapImageLayer } from '@vuesri/components/map-image-layer'
import { ref } from 'vue'
import { FlowRenderer } from 'esri/rasterRenderers'
import ColorVariable from 'esri/renderers/visualVariables/ColorVariable'
const renderer = new FlowRenderer({
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
})

</script>
<template>
  <VaMapView>
    <VaSkyBasemap></VaSkyBasemap>
    <VaMapImageLayer 
      :url="'http://116.63.63.191:6080/arcgis/rest/services/fc_merge/ImageServer'"
      :defaultOptions="{
        renderer
      }"
    >
    </VaMapImageLayer>

  </VaMapView>
</template>
