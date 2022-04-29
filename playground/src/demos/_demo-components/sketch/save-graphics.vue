<script lang="ts" setup>
import { VaSketch } from '@vuesri/components/sketch'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { ref, shallowRef } from 'vue'
import { VaViewUi } from '@vuesri/components/view-ui'
import { VaGraphicsLayer } from '@vuesri/components/graphics-layer'
import { SimpleFillSymbol } from 'esri/symbols'
import Graphic from 'esri/Graphic'
import Polygon from 'esri/geometry/Polygon'
const symbol = new SimpleFillSymbol({
  color: 'red',
})
const defaultGraphics = shallowRef<__esri.Graphic[]>([
  new Graphic({
    geometry: new Polygon({
      rings: [
        [
          [125, 18],
          [88, 18],
          [88, 50],
          [125, 18],
        ],
      ],
    }),
    symbol,
  }),
])
const graphics = shallowRef<__esri.Graphic[]>(defaultGraphics.value)
const sketchIf = ref(false)

const log = () => {
  console.log('当前graphics',graphics.value)
}
const setSymbol = (e: __esri.SketchCreateEvent|__esri.SketchUpdateEvent) => {
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
    <button @click="log">打印</button>
    <button @click="sketchIf = !sketchIf">{{ sketchIf ? '结束' : '开始' }}</button>
  </VaViewUi>
  <VaSkyBasemap></VaSkyBasemap>  

  <VaGraphicsLayer :graphics="defaultGraphics">
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
