import { ReturnVoid } from 'vunk/shared/types'
export type LoadEvent = {
  view: __esri.View,
  sublayer: __esri.Sublayer,
  sublayers: __esri.Collection<__esri.Sublayer>
}
export type OnLoad = (e:LoadEvent) => ReturnVoid
