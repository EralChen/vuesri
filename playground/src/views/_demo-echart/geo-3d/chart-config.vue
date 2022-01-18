<script lang="ts">
import { ECharts, EChartsOption } from 'echarts'
import { defineComponent, inject, nextTick, onMounted } from 'vue'
import chinaGeoJson from './chinaGeo.json'
import usaGeoJson from './usaGeo.json'
import * as echarts from 'echarts'
import 'echarts-gl'
import { getBoundry } from '@/api/demo/arcgis'
import { FeatureCollection } from 'geojson'
import wealth from './wealth.json'
const wealthMap = wealth.reduce((a, c) => {
  return (a[c.name] = c.wealth, a)
}, {} as Record<string, number>)
function registerMap (name: string, data: any) {
  if (!echarts.getMap(name)) {
    echarts.registerMap(name, {geoJSON: data } as any)
  }
}
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
    const itemConfig = {
      emphasis: {
        label: { 
          show: true,
          color: 'red',
        },
      },
      // itemStyle: {
      //   color: getRandomColor(),
      // },
    }
    onMounted(async () => {
      const nbjson = await getBoundry()
      registerMap('宁波市', nbjson)
      const options = {
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c} (p / km2)',
        },
        visualMap: {
          type: 'continuous',
          min: 0,
          max: 45180,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered'],
          },
        },
        
        series: [
          {
            type: 'map3D',
            map: '宁波市',
            viewControl: {
              distance: 120,
              panMouseButton: 'left',
              rotateMouseButton: 'right',
              alpha: 60,
            },

            data: nbjson.features.map(item => {
              return {
                name: item.properties.name,
                value: wealthMap[item.properties.name] || 0,
              
                ...itemConfig,

              }
            }),
          },
        ],
      } as EChartsOption
      nextTick(() => {
        echart.setOption(options)
      })
    })

    echart.on('click', function (params) {
      const data = params.data as { name: string }
      // 
      console.log(data) 
      registerMap('鄞州区', usaGeoJson)
      echart.setOption({
        series: [
          { map: '鄞州区' },
        ],
      })
    })

    return {}
  },
})
</script>
<template>
  <slot></slot>
</template>