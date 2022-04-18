import { useSetLayerOptions } from '@vuesri/components/layer/src/use'
import { watchEffect } from 'vue'
import { AnyFunc } from 'vunk/shared/types'
import { ToggleHandler } from 'vunk/shared/utils-class/ToggleHandler'
import { sMitter } from '@vuesri/shared/symbol'
import { EmitterValue } from '@vuesri/shared/types'


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

export function useSetFeatureLayerSpatialReference (view: __esri.View, layer:__esri.FeatureLayer, props: {
  spatialReference?: __esri.SpatialReferenceProperties 
}) {
  
  watchEffect(() => {
    view.when(() => {
      layer.spatialReference = (props.spatialReference || view.spatialReference) as __esri.SpatialReference
    })
  })

}

type MitterEvents = EmitterValue<__esri.FeatureLayer[typeof sMitter]>  
export function useFeatureLayerMitterToggleHandler (mitter) {
  return class MitterToggleHandler<T extends keyof MitterEvents> extends ToggleHandler {
    name: T
    handler: AnyFunc
    cacheData: any
    constructor (name: T, handler: (e: MitterEvents[T]) => void) {
      super()
      this.name = name
      this.handler = handler
    }
    add () {
      mitter.on(this.name, this.handler)
      this.removeHandler = () => mitter.off(this.name, this.handler)
    }
  }
}
