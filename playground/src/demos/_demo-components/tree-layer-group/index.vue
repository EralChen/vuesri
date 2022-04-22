<script lang="ts" setup>
import { VaTreeLayerGroup, __VaTreeLayerGroup } from '@vuesri/components/tree-layer-group'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { ElTree } from 'element-plus'
import { VaTreeLayerItem } from '@vuesri/components/tree-layer-item'
import { VaViewUi } from '@vuesri/components/view-ui'
import { VaMapImageLayer } from '@vuesri/components/map-image-layer'
import { VaServerFeatureLayer } from '@vuesri/components/server-feature-layer'
import { VaTileLayer } from '@vuesri/components/tile-layer'
const treeData:__VaTreeLayerGroup.TreeNode[] = [
  {
    label: '我的图层',
    children: [
      { 
        label: '宁波',
        children: [
          {
            label: '河流',
            layer: {
              type: 'MapImageLayer',
              url: 'http://116.63.63.191:6080/arcgis/rest/services/test_server/test_polygon1/MapServer',
            },
          },

          {
            label: '森林',
            layer: {
              type: 'FeatureLayer',
              url: 'http://116.63.63.191:6080/arcgis/rest/services/test_server/test_polygon2/MapServer',
            },
          },
        ],
      },
      {
        label: '点位',
        layer: {
          type: 'FeatureLayer',
          url: 'http://116.63.63.191:6080/arcgis/rest/services/test_server/test_point2/MapServer',
        },
      },
    ],

  },
  {
    label: '他的图层',
    layer: {
      type: 'TileLayer',
      url: 'http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer',
    },
  },
]
</script>
<template>
<VaMapView>
  <VaSkyBasemap :type="'img_w'" :spatial-reference="{wkid: 102100}"></VaSkyBasemap>
  <VaViewUi>
    <ElTree :data="treeData" show-checkbox></ElTree>
  </VaViewUi>

  <VaTreeLayerGroup :data="treeData">

    <VaTreeLayerItem :type="'MapImageLayer'">
      <template v-slot="{layer}">
        <VaMapImageLayer v-bind="layer"></VaMapImageLayer>
      </template>
    </VaTreeLayerItem>

    <VaTreeLayerItem :type="'FeatureLayer'">
      <template v-slot="{layer}">
        <VaServerFeatureLayer v-bind="layer"></VaServerFeatureLayer>
      </template>
    </VaTreeLayerItem>

    <VaTreeLayerItem :type="'TileLayer'">
      <template v-slot="{layer}">
        <VaTileLayer v-bind="layer"></VaTileLayer>
      </template>
    </VaTreeLayerItem>

  </VaTreeLayerGroup>
</VaMapView>
</template>
