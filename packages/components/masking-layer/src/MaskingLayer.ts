import Layer from 'esri/layers/Layer'
import TileInfo from 'esri/layers/support/TileInfo'
import { MaskingLayerView2D } from './MaskingLayerView2D'
// export const MaskingLayer = Layer.createSubclass({
//   properties: {
//     color: [] as number[],
//     geometry: {} as __esri.Geometry,
//     distance: 0 as number, 
//   },
//   constructor () {
//     this.color = [0, 0, 0, 1]
//     this.distance = 10
//     console.log('cx')
//   },
//   createLayerView (view) {
//     console.log('cx')
//     if (view.type === '2d') {
//       return new MaskingLayerView2D({
//         view: view,
//         layer: this,
//       })
//     }
//   },
//   tileInfo: TileInfo.create({
//     size: 512,
//     spatialReference: { wkid: 3857 } as any,
//   }),
// }) as __esri.MaskingLayerConstructor



export const MaskingLayer = Layer.createSubclass({
  tileInfo: TileInfo.create({
    size: 512,
    spatialReference: { wkid: 3857 },
  }),

  constructor ()  {
    // this.color = [0, 0, 0, 1]
    // this.distance = 10
  },

  createLayerView: function (view) {
    if (view.type === '2d') {
      return new MaskingLayerView2D({
        view: view,
        layer: this,
      })
    }
  },

  properties: {
    color: {},
    geometry: {},
    distance: {},
  },
})  as __esri.MaskingLayerConstructor