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
const url = ref('http://119.3.132.67:6080/arcgis/rest/services/ZSQCSJJ/ZSZHGC5/MapServer/8') 
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
      <template #default="{attributes}">
        {{ attributes }}
      </template>
    </VaFeaturePopupLayer>
  </VaServerFeatureLayer>

</VaMapView>
</template>
