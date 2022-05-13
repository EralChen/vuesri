<script lang="ts" setup>
import { VaSublayer } from '@vuesri/components/sublayer'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { VaMapImageLayer } from '@vuesri/components/map-image-layer'
import { VaPopupTemplate } from '@vuesri/components/popup-template'
import { SimpleRenderer } from 'esri/renderers'
import { SimpleMarkerSymbol } from 'esri/symbols'
import SublayerOptions from './sublayer-options.vue'
import { ref } from 'vue'
const renderer = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    color: 'red',
  }),
})
const definitionExpression = ref('1=1')
</script>
<template>
<VaMapView>
    <button @click="definitionExpression = '1=0'">change</button>
  <VaSkyBasemap></VaSkyBasemap>
  <VaMapImageLayer :sublayers="[]" :url="'http://116.63.63.191:6080/arcgis/rest/services/test_server/test_point2/MapServer'">
  
    <template #when>
      <VaSublayer :id="0" :renderer="renderer" :visible="true" :definitionExpression="definitionExpression">
        <!-- <SublayerOptions :definitionExpression="'1=0'"></SublayerOptions> -->
        <VaPopupTemplate>
          <template #default="{ attributes }">
            {{ attributes }}
          </template>
        </VaPopupTemplate>
      </VaSublayer>
    </template>

  </VaMapImageLayer>

</VaMapView>
</template>
