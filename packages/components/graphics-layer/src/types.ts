import { ReturnVoid } from 'vunk/shared/types'
export * from './events/types'
export type LoadEvent = {
  view:__esri.View,
  layer: __esri.GraphicsLayer
}
export type OnLoad = (e:LoadEvent) => ReturnVoid
