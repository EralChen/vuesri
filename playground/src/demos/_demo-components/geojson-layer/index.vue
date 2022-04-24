<script lang="ts" setup>
import { VaGeojsonLayer } from '@vuesri/components/geojson-layer'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaGeojsonLayer></VaGeojsonLayer>
</VaMapView>
</template>
