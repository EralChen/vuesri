
import { sCursor, sMitter } from '@vuesri/shared/symbol'
import { MitterEvents } from '@vuesri/components/view/src/types'
import { MitterEvents as FeatureLayerMitterEvents } from '@vuesri/components/client-feature-layer/src/types'
import { Emitter } from 'mitt'
import { AnyObject } from 'vunk/shared/types'

declare global {
  namespace __esri {

    interface View {
      [sMitter]: Emitter<MitterEvents>
    }
    interface Layer {
      [sCursor]: string
    }
    interface FeatureLayer {
      [sMitter]: Emitter<FeatureLayerMitterEvents>
    }


    /* for lab */

    interface PictureLayerProperties {
      url: string,
      view?: __esri.MapView | __esri.SceneView,
      extent?: __esri.Extent,
      image?: HTMLImageElement,
      canvas?: HTMLCanvasElement,
      spatialReference?: __esri.SpatialReferenceProperties,
    }
    interface PictureLayer extends Layer {
      url: string,
      view: __esri.MapView | __esri.SceneView,
      extent: __esri.Extent,
      image: HTMLImageElement,
      canvas: HTMLCanvasElement,
      spatialReference: __esri.SpatialReferenceProperties,
    }

    /* for lab end*/

    /* custom */

    interface ClassDefinition<T extends AnyObject> {
      constructor: (this: T) => void
      /* 这里的属性会初始化挂载到 this 上 */
      properties: T,
    }

    interface BaseDynamicLayerClassDefinition<T extends AnyObject> extends ClassDefinition<T> {
      getImageUrl: (this: T, extend: __esri.Extent, width: number, height: number) => string
    }
    interface BaseDynamicLayerConstructor {
      createSubclass: <T extends AnyObject>(options: Partial<BaseDynamicLayerClassDefinition<T>>) => LayerConstructor
    }

    interface RenderState {
      rotation: number
      pixelRatio: number
      size: [number, number]
      resolution: number
      toScreenNoRotation: (out: number[], from:number[]) => void
    }
    interface BaseLayerView2DClassDefinition<T extends AnyObject> extends ClassDefinition<T> {

      /* Called when the layer is added to the map. */
      attach: (this: T & __esri.BaseLayerView2D &{ layer: __esri.Layer } & BaseLayerView2DClassDefinition<T>) => void

      // Called to regenerate a tile.
      drawGeometry: (this: T, ctx: CanvasRenderingContext2D, bounds: number[]) => void

      // Creates the images for new tiles that don't have a texture yet, and destroys the images
      // of tiles that are not on screen anymore.
      manageTileImages: (this: T & __esri.BaseLayerView2D &{ context: CanvasRenderingContext2D, layer: __esri.Layer  } & BaseLayerView2DClassDefinition<T>) => void

      // Destroy the shader program, the buffers and all the tile images.
      detach: (this: T) => void


      render: (this: T & __esri.BaseLayerView2D &{ context: CanvasRenderingContext2D, layer: __esri.Layer } & BaseLayerView2DClassDefinition<T>,
        renderParameters: {
          context: CanvasRenderingContext2D,
          globalOpacity: number,
          pixelRatio: number,
          state: RenderState,
          stationary: boolean
        }  
      ) => void
      // Required when using tiling; this methods is called every time that `this.tiles`
      // changes, to give the derived class a chance to perform per-tile work as needed;
      // This is where, for instance, tile data could be fetched from a server.
      tilesChanged: () => void

    }
    interface BaseLayerView2DConstructor {
      createSubclass: <T extends AnyObject>(options: Partial<BaseLayerView2DClassDefinition<T>>) => __esri.LayerViewConstructor
    }


    interface LayerClassDefinition<T extends AnyObject> extends ClassDefinition<T> {
      tileInfo: __esri.TileInfoProperties,
      implement: (l:__esri.LayerConstructor) => __esri.LayerConstructor
      createLayerView: (this: __esri.Layer, view: __esri.View) => __esri.LayerView | undefined,
    }
    interface LayerConstructor {
      createSubclass: <T extends AnyObject>(options: Partial<LayerClassDefinition<T>>) => unknown
    }


    /* custom end */


    /* custom class */

    /* MaskingLayerView2D */

    interface MaskingLayerView2D extends __esri.LayerView {
      view: __esri.View

    }
    interface MaskingLayerView2DProperties extends __esri.LayerViewProperties {
      view: __esri.View,
      layer: __esri.Layer
    }
    interface MaskingLayerView2DConstructor extends __esri.LayerViewConstructor {
      new(options: MaskingLayerView2DProperties): MaskingLayerView2D
    }

    /* MaskingLayerView2D end */

    /* MaskingLayer */

    interface MaskingLayer extends __esri.Layer, __esri.ScaleRangeLayer  {
      tileInfo: __esri.TileInfo
      geometry: __esri.Geometry,
      color: number[],
      distance: number
    }
    interface MaskingLayerProperties extends __esri.LayerProperties, __esri.ScaleRangeLayerProperties {
      geometry?: __esri.Geometry,
      color?: number[],
      distance?: number
    }
    interface MaskingLayerConstructor {
      new(options?: MaskingLayerProperties): MaskingLayer
    }


    /* MaskingLayer end */

    /* custom class end */
  }

  
}


