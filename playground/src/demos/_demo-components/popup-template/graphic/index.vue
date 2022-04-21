<script lang="ts" setup>
import { VaGraphic, __VaGraphic } from '@vuesri/components/graphic'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { Polygon } from 'esri/geometry'
import { SimpleFillSymbol } from 'esri/symbols'
import { VaPopupTemplate } from '@vuesri/components/popup-template'
import AddToGraphic from './AddToGraphic.vue'
const geometry = new Polygon({
  rings: [
    [
      [125, 18],
      [88, 18],
      [88, 50],
      [125, 18],
    ],
  ],
})
const symbol = new SimpleFillSymbol({
  color: 'red',
})
const gClick:__VaGraphic.OnClick = ({ result }) => {
  if (result) {
    console.log(result)
  }
}
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaGraphic 
    :geometry="geometry" 
    :symbol="symbol"
    :attributes="{
      'name': 'cx'
    }"
    @click="gClick"
  >
    <VaPopupTemplate :orphan="true">

      <template v-slot="{attributes}">
        {{ attributes }}
      </template>
      
      <template #extends>
        <AddToGraphic></AddToGraphic>
      </template>

    </VaPopupTemplate>
  </VaGraphic>
</VaMapView>
</template>
