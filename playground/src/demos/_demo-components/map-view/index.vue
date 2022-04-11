<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { lods } from '@vuesri/shared/config/tile-info/4490'
import { Extent, Polygon } from 'esri/geometry'
const defaultOptions:__esri.MapViewProperties = {
  constraints: {
    lods: lods.slice(1, 18) as any,
    geometry: new Extent({
      xmax: 203.34946600898905,
      xmin: -136.93324043399093,
      ymax: 88.13649929457745,
      ymin: -87.44797255422543,
    }),
  },
}
</script>
<template>
  <VaMapView :default-options="defaultOptions">
    <VaSkyBasemap></VaSkyBasemap>
  </VaMapView>
</template>
