<script lang="ts" setup>
import { VaPictureLayer } from '@vuesri/components/picture-layer'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSceneView } from '@vuesri/components/scene-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import Extent from 'esri/geometry/Extent'
import { VaGraphic } from '@vuesri/components/graphic'
import { PictureFillSymbol, PictureMarkerSymbol, SimpleFillSymbol } from 'esri/symbols'
import { levelToScale } from '@vuesri/shared/config/tile-info/3857'
const url = import.meta.env.VITE_BASE_URL + '/data/1.jpg'
const extent = new Extent({
  xmin: 7792364.355529149,
  ymin: -7.081154551613622E-10,
  xmax: 1.6697923618991036E7,
  ymax: 4865942.279503176,
})
const symbol = new SimpleFillSymbol({
  color: 'red',
})
</script>
<template>
<VaMapView>
  <VaSkyBasemap :spatial-reference="{wkid: 3857}" :type="'vec_w'"></VaSkyBasemap>
  <VaPictureLayer :url="url"
    :extent="extent"
    :default-options="{
      maxScale: levelToScale[10],
      minScale: levelToScale[9]
    }"
  ></VaPictureLayer>

  <!-- <VaGraphic :symbol="symbol" :geometry="extent"> 

 </VaGraphic> -->
</VaMapView>
</template>
