<script lang="ts" setup>
import { VaSketch, __VaSketch } from '@vuesri/components/sketch'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { nextTick, ref, shallowRef } from 'vue'
import { VaViewUi } from '@vuesri/components/view-ui'
import { VaGraphicsLayer } from '@vuesri/components/graphics-layer'
import { Polygon } from 'esri/geometry'
import { SimpleFillSymbol } from 'esri/symbols'
import Graphic from 'esri/Graphic'
type SkethInit = 'create'|'update'|''
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

const skethInit = ref<SkethInit>('')
const setSkethInit = async (type: SkethInit) => {
  if (skethInit.value && skethInit.value !== type) {
    skethInit.value = ''
    await nextTick()
  }
  skethInit.value = type
}
const sketchLoad = async ({ sketch }: __VaSketch.LoadEvent, type: SkethInit) => {
  const layer = sketch.layer

  if (type === 'update') {
    sketch.update(layer.graphics.at(-1))
  }

  if (type === 'create') {
    sketch.create('polygon')
  }


}

const sketchComplete = async () => {
  defaultGraphics.value = graphics.value
  if (skethInit.value === 'create') {
    skethInit.value = '' 
  }

}

const log = () => {
  console.log(defaultGraphics.value)
}

</script>
<template>
<VaMapView>
  <VaViewUi :position="'top-leading'">
    <el-button @click="log">打印</el-button>
    <el-button :disabled="skethInit === 'update'" @click="setSkethInit('update')"> 编辑</el-button>
    <el-button :disabled="skethInit === 'create'" @click="setSkethInit('create')"> 创建</el-button>
    <el-button :disabled="!skethInit" @click="setSkethInit('')"> 结束</el-button>
  </VaViewUi>

  <VaSkyBasemap></VaSkyBasemap>  

  <VaGraphicsLayer :graphics="defaultGraphics">

    <VaSketch
      v-show="false"
      :orphan="true"
      v-if="skethInit"
      v-model="graphics"
      @load="(e) => sketchLoad(e, skethInit)"
      @complete="sketchComplete"
    ></VaSketch>

  </VaGraphicsLayer>
</VaMapView>
</template>
