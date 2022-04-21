<script lang="ts" setup>
import { VkAsyncTeleport } from 'vunk'
import { VaSketch } from '@vuesri/components/sketch'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaSketch class="esri-sketch-with-save">
    <VkAsyncTeleport :to="'.esri-sketch-with-save .esri-sketch__panel'" :sleep="800" >
        <div
          class="esri-sketch-ui-save esri-widget--button"
        >
          保存
        </div>
    </VkAsyncTeleport>
  </VaSketch>
</VaMapView>

</template>
<style>
.esri-sketch-ui-save {
  padding: 0 .5em;
  box-sizing: content-box;
}
</style>