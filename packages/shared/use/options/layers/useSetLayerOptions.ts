import { watchEffect } from 'vue'
import { sCursor } from '@vuesri/shared/symbol'

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
  watchEffect(() => {
    layer[sCursor] = props.cursor
  })
  watchEffect(() => {
    layer.title = props.title
  })
  watchEffect(() => {
    layer.visible = props.visible
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
