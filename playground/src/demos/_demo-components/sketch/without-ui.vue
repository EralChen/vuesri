<script lang="ts" setup>
import { VaSketch, __VaSketch } from '@vuesri/components/sketch'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { ref, shallowRef } from 'vue'
import { VaViewUi } from '@vuesri/components/view-ui'
import { VaGraphicsLayer } from '@vuesri/components/graphics-layer'
import { VaGraphic } from '@vuesri/components/graphic'
import { Polygon } from 'esri/geometry'
import { SimpleFillSymbol } from 'esri/symbols'
import { Deferred } from 'vunk/shared/utils-promise'
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
const graphicDef = new Deferred<__esri.Graphic>()

const graphics = shallowRef<__esri.Graphic[]>([])
const updateFlag = ref(false)
const sketchLoad:__VaSketch.OnLoad = async ({ sketch }) => {
  const g = await graphicDef.promise
  sketch.update(g)
}
const sketchComplete = async () => {
  const g = await graphicDef.promise
  const ng = graphics.value.find(item => item === g)
  // 建立 定义时geometry  和视图上 geometry 的引用关系
  if (ng?.geometry && ng.geometry !== geometry.value) geometry.value = ng.geometry as __esri.Polygon

}
const log = () => {
  // console.log(graphics.value[0].geometry === geometry.value)
  console.log(graphics.value.at(0)?.geometry, geometry.value.rings)
}

</script>
<template>
<VaMapView>
  <VaViewUi :position="'top-leading'">
    <button @click="updateFlag = !updateFlag">updateFlag {{updateFlag}}</button>
    <button @click="log">log</button>
  </VaViewUi>
  <VaSkyBasemap></VaSkyBasemap>  

  <VaGraphicsLayer>
    <VaGraphic 
      :geometry="geometry" :symbol="symbol"
      @load="(e) => graphicDef.resolve(e.graphic)"
    ></VaGraphic>
    <VaSketch
      v-show="false"
      :modelValueInitFrom="'layerGraphics'"
      :orphan="true"
      v-if="updateFlag"
      v-model="graphics"
      @load="sketchLoad"
      @complete="sketchComplete"
    ></VaSketch>
  </VaGraphicsLayer>
</VaMapView>
</template>
