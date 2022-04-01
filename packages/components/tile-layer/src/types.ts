import { ReturnVoid } from 'vunk/shared/types'
export type LoadEvent = {
  view: __esri.View,
  layer: __esri.TileLayer
}
export type OnLoad = (e:LoadEvent) => ReturnVoid
