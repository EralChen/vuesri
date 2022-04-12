import { ReturnVoid } from 'vunk/shared/types'
export type LoadEvent = {
  view: __esri.View,
  layer: __esri.Layer
}
export type OnLoad = (e:LoadEvent) => ReturnVoid
