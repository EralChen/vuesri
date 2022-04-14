<script lang="ts" setup>
import { VaGraphic } from '@vuesri/components/graphic'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { VaGraphicsLayer } from '@vuesri/components/graphics-layer'
import { Polygon } from 'esri/geometry'
import { SimpleFillSymbol } from 'esri/symbols'
const geometry = new Polygon({
  rings: [
    [
      [120, 30],
      [121, 30],
      [121, 31],
      [120, 30],
    ],
  ],
})
const symbol = new SimpleFillSymbol({
  color: 'red',
})
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaGraphicsLayer>
    <VaGraphic :geometry="geometry" :symbol="symbol" ></VaGraphic>
  </VaGraphicsLayer>

</VaMapView>
</template>
