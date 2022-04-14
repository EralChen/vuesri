<script lang="ts" setup>
import { VaViewUi } from '@vuesri/components/view-ui'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
</script>
<template>
<VaMapView>
  <VaSkyBasemap :type="'vec_c'"></VaSkyBasemap>
  <VaViewUi :position="'bottom-leading'">
    1111
  </VaViewUi>
</VaMapView>
</template>
