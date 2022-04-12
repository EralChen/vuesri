<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import SubNode from './sub-node.vue'
import { VaLayerWhen } from '@vuesri/components/layer-when'
import { VaServerFeatureLayer } from '@vuesri/components/server-feature-layer'
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaServerFeatureLayer
    :url="'http://116.63.63.191:6080/arcgis/rest/services/test_server/test_point2/MapServer'"
  >
    <VaLayerWhen>
      <SubNode></SubNode>
    </VaLayerWhen>
  </VaServerFeatureLayer>
</VaMapView>

</template>
