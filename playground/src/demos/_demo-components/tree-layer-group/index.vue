<script lang="ts" setup>
import { VaTreeLayerGroup, __VaTreeLayerGroup } from '@vuesri/components/tree-layer-group'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { ElTree } from 'element-plus'
import { VaTreeLayerItem } from '@vuesri/components/tree-layer-item'
import { VaViewUi } from '@vuesri/components/view-ui'
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
  <VaSkyBasemap></VaSkyBasemap>
  <VaViewUi>
    <ElTree :data="treeData"></ElTree>
  </VaViewUi>

  <VaTreeLayerGroup></VaTreeLayerGroup>
</VaMapView>
</template>
