import TileInfo from 'esri/layers/support/TileInfo'
import { MaskingLayerView2D } from './MaskingLayerView2D'
import { ScaleRangeLayer } from 'esri/layers/mixins/ScaleRangeLayer'
import Layer from 'esri/layers/Layer'
// Layer
export const MaskingLayer = ScaleRangeLayer(Layer).createSubclass({

  properties: {
    color: {},
    geometry: {},
    distance: {},
  },

  tileInfo: TileInfo.create({
    size: 512,
  }),

  constructor () {
    // this.color = [0, 0, 0, 1]
    // this.distance = 10
  },

  createLayerView (view) {
    if (view.type === '2d') {
      return new MaskingLayerView2D({
        view: view,
        layer: this,
      })
    }
  },


})  as __esri.MaskingLayerConstructor
