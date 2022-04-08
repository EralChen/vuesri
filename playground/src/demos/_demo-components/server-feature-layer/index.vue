<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { VaServerFeatureLayer } from '@vuesri/components/server-feature-layer'
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaServerFeatureLayer 
    :url="'http://116.63.63.191:6080/arcgis/rest/services/test_server/test_point2/MapServer'"
  >
  </VaServerFeatureLayer>
</VaMapView>
</template>
