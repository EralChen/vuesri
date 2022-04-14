<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { VaLimitExtent } from '@vuesri/components/limit-extent'
import Extent from 'esri/geometry/Extent'
import { SimpleFillSymbol } from 'esri/symbols'
import { VaGraphic } from '@vuesri/components/graphic'
import { VaGraphicsLayer } from '@vuesri/components/graphics-layer'
const limitExtent = new Extent({
  xmax: 189.83973615699625,
  xmin: -169.8999245727299,

  ymax: 88.13649929457745,
  ymin: -90.42600300213113 ,
})
const symbol = new SimpleFillSymbol({
  color: 'green',
})
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaLimitExtent :limitExtent="limitExtent"></VaLimitExtent>
      <VaGraphicsLayer :opacity=".5">
    <VaGraphic :geometry="limitExtent" :symbol="symbol"></VaGraphic>
    </VaGraphicsLayer>
</VaMapView>
</template>
