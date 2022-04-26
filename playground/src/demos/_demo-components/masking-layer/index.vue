<script lang="ts" setup>
import { VaMaskingLayer } from '@vuesri/components/masking-layer'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { Extent, Polygon } from 'esri/geometry'
import { shallowRef } from 'vue'
import { VaGraphicsLayer } from '@vuesri/components/graphics-layer'
import { VaGraphic } from '@vuesri/components/graphic'
import { levelToScale } from '@vuesri/shared/config/tile-info/3857'
import { VaViewWhen } from '@vuesri/components/view-when'
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
const geometry = shallowRef(new Polygon({
  rings: [
    [
      [125, 18],
      [88, 18],
      [88, 50],
      [125, 18],
    ],
  ],
})) 

const change = () => {
  console.log(geometry2)
  geometry.value = geometry2
}
</script>
<template>
<VaMapView>
  <button @click="change">change </button>
  <VaSkyBasemap :spatial-reference="{wkid: 3857}" :type="'vec_w'"></VaSkyBasemap>

  <VaViewWhen>
    <template v-slot="{spatialReference}">
      <VaMaskingLayer
        :max-scale="levelToScale[9]"
        :min-scale="levelToScale[2]"
        :color="[0, 0, 0, 0.2]"
        :distance="0.6"
        :geometry="geometry"
        :index="99"
        :spatialReference="spatialReference"
      ></VaMaskingLayer>
    </template>
  </VaViewWhen>

  
  <VaGraphicsLayer :index="98">
    <VaGraphic :geometry="geometry2">

    </VaGraphic>
  </VaGraphicsLayer>
  
</VaMapView>
</template>
