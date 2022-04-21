<script lang="ts" setup>
import { VaMapImageLayer } from '@vuesri/components/map-image-layer'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaMapImageLayer
     :url="'http://116.63.63.191:6080/arcgis/rest/services/test_server/test_point2/MapServer'"
  ></VaMapImageLayer>
</VaMapView>
</template>
