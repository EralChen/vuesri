import { useSetLayerOptions } from '@vuesri/shared/use'
import { watchEffect } from 'vue'

export function useSetFeatureLayerOptions (layer:__esri.FeatureLayer, props: {
  renderer: __esri.Renderer | undefined
  visible: boolean
  definitionExpression: string
  popupEnabled: boolean
  maxScale: number
  minScale: number
  title: string
  cursor: string
  opacity: number
}) {
  
  useSetLayerOptions(layer, props)
  watchEffect(() => {
    if (props.renderer === undefined) return
    layer.renderer = props.renderer
  })
  watchEffect(() => {
    layer.definitionExpression = props.definitionExpression
  })
  watchEffect(() => {
    layer.popupEnabled = props.popupEnabled
  })

}
