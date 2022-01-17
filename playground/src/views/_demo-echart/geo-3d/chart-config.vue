<script lang="ts">
import { ECharts, EChartsOption } from 'echarts'
import { defineComponent, inject, nextTick } from 'vue'
import chinaGeoJson from './chinaGeo.json'
import * as echarts from 'echarts'
import 'echarts-gl'
echarts.registerMap('china', {geoJSON: chinaGeoJson } as any)
function getRandomColor (){
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const  b = Math.floor(Math.random() * 255)
  const color = 'rgba(' + r + ',' + g + ',' + b + ',0.4)'
  return color
}
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

          data: chinaGeoJson.features.map(item => {
            return {
              name: item.properties.name,
              label: {
                show: true,
                color: getRandomColor(),
              },
              itemStyle: {
          
                color: getRandomColor(),
              },
            }
          }),
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