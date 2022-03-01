<script lang="ts" setup>
import { VumaTilesetLayer,__VumaTilesetLayer } from '@vuesium-mars3d/components/tileset-layer'
import { VumViewer } from 'vuesium'
import { VumaMap } from '@vuesium-mars3d/components/map'
</script>
<template>
<VumViewer>
  <VumaMap>
    <VumaTilesetLayer :default-options="{
      url: 'http://112.16.181.129:180/web/tileset/wlsq/djsq/tileset.json'
    }"></VumaTilesetLayer>
  </VumaMap>
 
</VumViewer>

</template>
