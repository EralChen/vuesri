<script lang="ts" setup>
import { VaMaskingLayer } from '@vuesri/components/masking-layer'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { Polygon } from 'esri/geometry'
import { shallowRef } from 'vue'
import { VaGraphicsLayer } from '@vuesri/components/graphics-layer'
import { VaGraphic } from '@vuesri/components/graphic'
import { levelToScale } from '@vuesri/shared/config/tile-info/3857'

const geometry2 = new Polygon({
  rings: [
    [
      [125, 18],
      [20, 18],
      [20, 50],
      [125, 18],
    ],
  ],
})
const geometry1 = new Polygon({
  rings: [
    [
      [125, 18],
      [88, 18],
      [88, 50],
      [125, 18],
    ],
  ],
})
const geometry = shallowRef<__esri.Polygon>() 
setTimeout(() => {
  geometry.value = geometry1
}, 3000)
const change = () => {
  geometry.value = geometry2
}
</script>
<template>
<VaMapView>
  <button @click="change">change </button>
  <VaSkyBasemap :spatial-reference="{wkid: 4326}" :type="'vec_c'"></VaSkyBasemap>


  <VaMaskingLayer
    :color="[0, 0, 0, 0.7]"
    :distance="24"
    :geometry="geometry"
    :index="99"
  ></VaMaskingLayer>


  
  <VaGraphicsLayer :index="98">
    <VaGraphic :geometry="geometry2">
    </VaGraphic>
  </VaGraphicsLayer>
  
</VaMapView>
</template>
