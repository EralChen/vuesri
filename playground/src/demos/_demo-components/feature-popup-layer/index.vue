<script lang="ts" setup>
import { VaFeaturePopupLayer } from '@vuesri/components/feature-popup-layer'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { VaServerFeatureLayer } from '@vuesri/components/server-feature-layer'
import { ref, version } from 'vue'

const where = ref('1=1')
console.log(version)
// setTimeout(() => {
//   where.value = '1=1'
// }, 3000)
const url = 'http://119.3.132.67:6080/arcgis/rest/services/MLLH/MLLH2/MapServer/21'
</script>
<template>
<VaMapView>
  
  <VaSkyBasemap></VaSkyBasemap>
  <VaServerFeatureLayer

    :url="url"
  >
    <VaFeaturePopupLayer :query="{
      where: where
    }">
      <template v-slot="{attributes}">
        {{ attributes.objectid_1 }}
      </template>
    </VaFeaturePopupLayer>
  </VaServerFeatureLayer>

</VaMapView>
</template>
