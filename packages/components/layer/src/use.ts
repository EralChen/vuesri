import { watchEffect } from 'vue'
import EsriMap from 'esri/Map'
import { sCursor, sIndex } from '@vuesri/shared/symbol'
import { useSetVisible } from '@vuesri/shared/use'
import { onUnmounted, watch } from 'vue'

export function useAddLayer (map:__esri.Map|__esri.Collection<__esri.Layer>, layer:__esri.Layer, props: {
  index?: number
  orphan?: boolean
}) {
  if (props.orphan) return // 如果当前组件被标记为孤儿，则不添加该节点
  layer[sIndex] = props.index // 记录期望顺序
  map.add(layer, props.index)

  // 遍历当前的layers 根据期望顺序重排图层
  const reorder = (ni: number) => {
    
    const layers = map instanceof EsriMap ? map.layers : map

    layers.forEach(item => {
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

export function useSetLayerOptions (
  layer:
    __esri.WebTileLayer
  | __esri.FeatureLayer
  | __esri.MapImageLayer
  | __esri.GraphicsLayer
  | __esri.GeoJSONLayer
  | __esri.VectorTileLayer
  | __esri.TileLayer
  ,
  props: {
  visible: boolean
  maxScale: number
  minScale: number
  title: string
  cursor: string
  opacity: number
}) {
  useSetVisible(layer, props)
  watchEffect(() => {
    layer[sCursor] = props.cursor
  })
  watchEffect(() => {
    layer.title = props.title
  })
  watchEffect(() => {
    layer.maxScale = props.maxScale
  })
  watchEffect(() => {
    layer.minScale = props.minScale
  })
  watchEffect(() => {
    layer.opacity = props.opacity
  })
}
