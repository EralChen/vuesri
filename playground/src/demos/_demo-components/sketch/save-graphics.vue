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
const sketchIf = ref(true)
const log = () => {
  console.log(graphics.value, graphics)
}
const setSymbol = (e: __esri.SketchCreateEvent|__esri.SketchUpdateEvent) => {
  const symbol =  new SimpleFillSymbol({
    color: 'red',
  })
  if (e.type === 'create')   {
    e.graphic.symbol = symbol
  } else {
    e.graphics.forEach(item => {
      item.symbol = symbol
    })
  }
}
</script>
<template>
<VaMapView>
  <VaViewUi :position="'top-leading'">
    <button @click="log">log</button>
    <button @click="sketchIf = !sketchIf">change</button>
  </VaViewUi>
  <VaSkyBasemap></VaSkyBasemap>  

  <VaGraphicsLayer>

    <VaSketch
      :available-creature-tools="['polygon']"
      v-model="graphics"
      @create="setSymbol"
      @update="setSymbol"
      v-if="sketchIf"
    ></VaSketch>
  </VaGraphicsLayer>

</VaMapView>
</template>
