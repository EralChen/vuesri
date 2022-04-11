<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { VaLimitExtent } from '@vuesri/components/limit-extent'
import Extent from 'esri/geometry/Extent'
const limitExtent = new Extent({
  // xmax: 121.5041884991781,
  // xmin: 121.19622979659954,
  // ymax: 29.874038474025863,
  // ymin: 29.70256926323602,
  xmax: 9999,
  xmin: -9999,
  ymax: 90,
  ymin: -90,
})
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaLimitExtent :limitExtent="limitExtent"></VaLimitExtent>
</VaMapView>
</template>
