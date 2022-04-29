<script lang="ts" setup>
import { VaSublayer } from '@vuesri/components/sublayer'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { VaMapImageLayer } from '@vuesri/components/map-image-layer'
import { VaPopupTemplate } from '@vuesri/components/popup-template'
import { SimpleRenderer } from 'esri/renderers'
import { SimpleMarkerSymbol } from 'esri/symbols'
const renderer = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    color: 'red',
  }),
})
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaMapImageLayer :sublayers="[]" :url="'http://116.63.63.191:6080/arcgis/rest/services/test_server/test_point2/MapServer'">
  
    <template #when>
      <VaSublayer :id="0" :renderer="renderer" :visible="true">
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
