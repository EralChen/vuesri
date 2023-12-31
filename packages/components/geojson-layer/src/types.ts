import { ReturnVoid } from 'vunk/shared/types'
export * from '@vuesri/components/layer/src/graphics-events/types'
export type LoadEvent = {
  view: __esri.View,
  layer: __esri.GeoJSONLayer
}
export type OnLoad = (e:LoadEvent) => ReturnVoid
