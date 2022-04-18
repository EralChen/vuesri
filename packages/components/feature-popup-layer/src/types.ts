import { ReturnVoid } from 'vunk/shared/types'
export type LoadEvent = {
  featureSet: __esri.FeatureSet,
  view: __esri.View,
  layer: __esri.FeatureLayer
}
export type OnLoad = (e:LoadEvent) => ReturnVoid
