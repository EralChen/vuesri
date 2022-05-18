<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import Map from 'esri/Map'
import { VaGraphic } from '@vuesri/components/graphic'
import Circle from 'esri/geometry/Circle'
import { Point } from 'esri/geometry'
import { SimpleFillSymbol } from 'esri/symbols'
const map:__esri.Map = new Map({
  basemap: 'arcgis-imagery',
})
const defaultOptions: __esri.MapViewProperties = {
  map,
  center: [-109.254161,44.920980],
  zoom: 18,
}
const geometry = new Circle({
  center: new Point({
    longitude: -109.254161,
    latitude: 44.920980,
  }),
  radius: 20,
  geodesic: true,
  radiusUnit: 'meters',
})
const symbol = new SimpleFillSymbol({
  color: [255, 0, 0, .5],
})
</script>
<template>
  <VaMapView :defaultOptions="defaultOptions">
    <VaGraphic :geometry="geometry" :symbol="symbol"></VaGraphic>
    <!-- <VaSkyBasemap></VaSkyBasemap> -->
  </VaMapView>
</template>
