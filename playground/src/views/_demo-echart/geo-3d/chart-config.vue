<script lang="ts">
import { ECharts, EChartsOption } from 'echarts'
import { defineComponent, inject, nextTick } from 'vue'
import chinaGeoJson from './chinaGeo.json'
import * as echarts from 'echarts'
import 'echarts-gl'
echarts.registerMap('china', {geoJSON: chinaGeoJson } as any)
export default defineComponent({
  setup () {
    const echart = inject<ECharts>('echart')
    if (!echart) throw new Error()
    const options = {
      // geo3D: {

      // },
      series: [
        {
          type: 'map3D',
          map: 'china',
          viewControl: {
            distance: 50,
            panMouseButton: 'left',
            rotateMouseButton: 'right',
          },
          label: {
            show: true,
            color: 'red',
          },
          itemStyle: {
            areaColor: '#666',
            borderColor: '#222',
            borderWidth: 1,
          },
  
          regions: [
            {   // 可对单个地图区域进行设置
              name: '浙江省',    // 所对应的地图区域的名称
              regionHeight: '10', // 区域的高度，可以设置不同的高度用来表达数据的大小。当 GeoJSON 为建筑的数据时，也可以通过这个值表示简直的高度。
              itemStyle: {    // 单个区域的样式设置
                color: '#00FF00',
                opacity: 1,
                borderWidth: 0.4,
                borderColor: '#5F9EA0',
              },
            }, {
              name: '新疆维吾尔自治区',
              itemStyle: {
                color: '#EEEE00',
                opacity: 1,
                borderWidth: 0.4,
                borderColor: '#5F9EA0',
              },
            },
          ],
        },
      ],
    } as EChartsOption
    nextTick(() => {
      echart.setOption(options)
    })
    return {}
  },
})
</script>
<template>
  <slot></slot>
</template>