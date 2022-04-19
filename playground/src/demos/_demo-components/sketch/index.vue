<script lang="ts" setup>
import { VaSketch } from '@vuesri/components/sketch'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { shallowRef } from 'vue'
import { VaViewUi } from '@vuesri/components/view-ui'
const graphics = shallowRef([])
const log = () => {
  console.log(graphics.value)
}
</script>
<template>
<VaMapView>
  <VaViewUi :position="'top-leading'">
    <button @click="log">log</button>
  </VaViewUi>
  <VaSkyBasemap></VaSkyBasemap>
  <VaSketch
    v-model="graphics"
  ></VaSketch>
</VaMapView>
</template>
