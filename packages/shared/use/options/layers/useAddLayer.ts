import { onUnmounted, watch } from 'vue'
const sIndex = Symbol('index')
export function useAddLayer (map:__esri.Map, layer:__esri.Layer, props: {
  index?: number
  orphan: boolean
}) {
  if (props.orphan) return // 
  layer[sIndex] = props.index // 记录期望顺序
  map.add(layer, props.index)

  // 遍历当前的layers 根据期望顺序重排图层
  const reorder = (ni: number) => {
    map.layers.forEach(item => {
      if (item[sIndex] > ni) {
        map.reorder(item, item[sIndex])
      }
    })
  }
  if (typeof props.index === 'number') reorder(props.index)

  watch(() => props.index, v => {
    if (typeof v === 'number') {
      layer[sIndex] = props.index // 更新期望顺序
      map.reorder(layer, v)
      reorder(v)
    }
  })

  onUnmounted(() => {
    map.remove(layer)
  })
  
}
