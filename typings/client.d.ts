
import { sCursor, sMitter } from '@vuesri/shared/symbol'
import { MitterEvents } from '@vuesri/components/view/src/types'
import { MitterEvents as FeatureLayerMitterEvents } from '@vuesri/components/client-feature-layer/src/types'
import { Emitter } from 'mitt'
declare global {
  namespace __esri {
    interface PictureLayerProperties {
      url: string,
      view?:__esri.MapView | __esri.SceneView,
      extent?:  __esri.Extent,
      image?:  HTMLImageElement,
      canvas?: HTMLCanvasElement,
      spatialReference?: __esri.SpatialReferenceProperties,
    }

    interface PictureLayer extends Layer {
      url: string,
      view:__esri.MapView | __esri.SceneView,
      extent:  __esri.Extent,
      image:  HTMLImageElement,
      canvas: HTMLCanvasElement,
      spatialReference: __esri.SpatialReferenceProperties,
    }


    interface View {
      [sMitter]: Emitter<MitterEvents>
    }
    interface Layer {
      [sCursor]: string
    }
    interface FeatureLayer {
      [sMitter]: Emitter<FeatureLayerMitterEvents>
    }
    interface ClassDefinition<T extends  Record<string, any>> {
      properties: T,
      getImageUrl: (this: T,  extend:__esri.Extent, width: number, height: number) => string
    }
    interface BaseDynamicLayerConstructor {
      createSubclass: <T extends Record<string, any>>(options: Partial<ClassDefinition<T>>) => LayerConstructor
    }
  }
}
