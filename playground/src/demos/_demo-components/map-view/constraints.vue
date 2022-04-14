<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { lods } from '@vuesri/shared/config/tile-info/4490'
import { Extent, Polygon } from 'esri/geometry'
import { VaGraphic } from '@vuesri/components/graphic'
import { VaGraphicsLayer } from '@vuesri/components/graphics-layer'
import { SimpleFillSymbol } from 'esri/symbols'
const geometry = new Extent({
  xmax: 189.83973615699625,
  xmin: -169.8999245727299,

  ymax: 88.13649929457745,
  ymin: -90.42600300213113 ,
})
const symbol = new SimpleFillSymbol({
  color: 'green',
})
const defaultOptions:__esri.MapViewProperties = {
  constraints: {
    lods: lods.slice(1, 18) as any,
    geometry: geometry,
  },
}
</script>
<template>
  <VaMapView :default-options="defaultOptions">
    <VaSkyBasemap></VaSkyBasemap>
    <VaGraphicsLayer :opacity=".5">
    <VaGraphic :geometry="geometry" :symbol="symbol"></VaGraphic>
    </VaGraphicsLayer>

  </VaMapView>
</template>
