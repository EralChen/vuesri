<script lang="ts" setup>
import { VaViewWhen } from '@vuesri/components/view-when'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import SubNode from './sub-node.vue'
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaViewWhen>
    <SubNode></SubNode>
  </VaViewWhen>
</VaMapView>
</template>
