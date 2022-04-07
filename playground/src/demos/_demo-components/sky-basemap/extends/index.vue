<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { levelToScale } from '@vuesri/shared/config/tile-info/4490'
import ZjBaseLayer from './ZjBaseLayer.vue'
</script>
<template>
<VaMapView>
  <VaSkyBasemap :type="'vec_c'" :lods-level="[1, 18]" :min-scale="levelToScale[1]" :max-scale="levelToScale[8]">
    <Suspense>
      <ZjBaseLayer></ZjBaseLayer>
    </Suspense>
  </VaSkyBasemap>
</VaMapView>
</template>
