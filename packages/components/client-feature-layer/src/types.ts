import { ReturnVoid } from 'vunk/shared/types'
export * from '@vuesri/components/feature-layer/src/events/types'
export type LoadEvent = {
  view: __esri.View,
  layer: __esri.FeatureLayer
}
export type ChangeEvent = {
  view: __esri.View,
  layer: __esri.FeatureLayer
}
export type OnLoad = (e:LoadEvent) => ReturnVoid
export type OnChange = (e: ChangeEvent) => ReturnVoid

export type MitterEvents = {
  change: ChangeEvent
}
