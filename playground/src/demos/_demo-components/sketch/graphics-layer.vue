<script lang="ts" setup>
import { VaSketch } from '@vuesri/components/sketch'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { ref, shallowRef } from 'vue'
import { VaViewUi } from '@vuesri/components/view-ui'
import { VaGraphicsLayer } from '@vuesri/components/graphics-layer'
import { VaGraphic } from '@vuesri/components/graphic'
import { Polygon } from 'esri/geometry'
import { SimpleFillSymbol } from 'esri/symbols'
import Graphic from 'esri/Graphic'
const graphics = shallowRef<__esri.Graphic[]>([])
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
const symbol = new SimpleFillSymbol({
  color: 'red',
})
const graphicIf = ref(true)
const log = () => {
  console.log(graphics.value, geometry.value.rings)
}
const change = () => {
  graphics.value = [
    new Graphic({
      geometry: new Polygon({
        rings: [
          [
            [125, 18],
            [44, 18],
            [44, 50],
            [125, 18],
          ],
        ],
      }),
    }),
  ]
}
const changeG = () => {
  geometry.value = new Polygon({
    rings: [
      [
        [125, 18],
        [44, 18],
        [44, 50],
        [125, 18],
      ],
    ],
  })
}
</script>
<template>
<VaMapView>
  <VaViewUi :position="'top-leading'">
    <button @click="log">log</button>

    <button @click="change">change</button>
    <button @click="changeG">changeG</button>
  </VaViewUi>
  <VaSkyBasemap></VaSkyBasemap>  

  <VaGraphicsLayer>
    <VaGraphic :geometry="geometry" :symbol="symbol" v-if="graphicIf"></VaGraphic>
    <VaSketch
      :model-value-init-from="'layerGraphics'"
      :available-creature-tools="['polygon']"
      :default-options="{
        visibleElements: {
          selectionTools: {
            'lasso-selection': false,
            'rectangle-selection': false
          }
        }
      }"
      v-model="graphics"
    ></VaSketch>
  </VaGraphicsLayer>
</VaMapView>
</template>
