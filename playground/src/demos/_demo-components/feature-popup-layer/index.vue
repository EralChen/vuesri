<script lang="ts" setup>
import { VaFeaturePopupLayer } from '@vuesri/components/feature-popup-layer'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { VaServerFeatureLayer } from '@vuesri/components/server-feature-layer'
import { ref } from 'vue'
const where = ref('1=0')
setTimeout(() => {
  where.value = '1=1'
}, 3000)
</script>
<template>
<VaMapView>
  
  <VaSkyBasemap :type="'vec_c'"></VaSkyBasemap>
  <VaServerFeatureLayer

    :url="'http://116.63.63.191:6080/arcgis/rest/services/test_server/test_point2/MapServer'"
  >
    <VaFeaturePopupLayer :query="{
      where: where
    }">
      <template v-slot="{attributes}">
        {{ attributes.OBJECTID }}
      </template>
    </VaFeaturePopupLayer>
  </VaServerFeatureLayer>

</VaMapView>
</template>
