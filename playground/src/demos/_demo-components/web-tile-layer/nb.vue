<script lang="ts" setup>
import { VaWebTileLayer } from '@vuesri/components/web-tile-layer'
import { VaMapView } from '@vuesri/components/map-view'
import { VaBasemap } from '@vuesri/components/basemap'
import { VaBasemapBaseLayers } from '@vuesri/components/basemap-base-layers'
import { lods } from '@vuesri/shared/config/tile-info/4490'

const type = 'vec_c' as 'img_c'|'vec_c'|'ter_c'|'img_w'|'vec_w'|'ter_w'

const baseTypeInfo = type.split('_')
const baseLayer = baseTypeInfo[0] as 'img'|'vec'|'ter'
const typeSR = baseTypeInfo[1] as 'w'|'c'
const subDomains = ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7']

const spatialReference = {
  wkid: 4326,
}
const defaultOptions:__esri.WebTileLayerProperties & { spatialReference?: __esri.SpatialReferenceProperties } = {
  subDomains,
  urlTemplate: `https://{subDomain}.tianditu.gov.cn`
    + `/${type}/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0`
    + `&LAYER=${baseLayer}&STYLE=default`
    + `&TILEMATRIXSET=${typeSR}&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}`
    + `&tk=f0175927031c1e12cb804b0c3b8cce4d`,

  tileInfo: {
    lods: lods.slice(1, 19),
    origin: {
      x: -180,
      y: 90,
    },
    spatialReference,
  },
  spatialReference,
}

const nbOptions: __esri.WebTileLayerProperties & { spatialReference?: __esri.SpatialReferenceProperties } = {
  urlTemplate: `https://www.nbmap.gov.cn/wmts/nbemapyzsHB` +
              `?service=WMTS&request=GetTile&version=1.0.0&layer=0&style=default` +
              `&tileMatrixSet=default&format=tiles&height=256&width=256&token=sy-8e74552f-0433-4682-a226-fe238d2e82ad` +
              `&tilecol={col}&tilerow={row}&tilematrix={level}`,
  tileInfo: {
    lods: lods.slice(1, 19),
    origin: {
      x: -180,
      y: 90,
    },
    spatialReference,
  },
  spatialReference,
}

</script>
<template>
<VaMapView>
  <VaBasemap>
    <VaWebTileLayer :default-options="defaultOptions" :orphan="true">
      <VaBasemapBaseLayers />
    </VaWebTileLayer>
  </VaBasemap>
  <VaWebTileLayer :default-options="nbOptions">

  </VaWebTileLayer>
</VaMapView>
</template>
