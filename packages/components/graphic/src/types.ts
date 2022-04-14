import { ReturnVoid } from 'vunk/shared/types'
export type LoadEvent = {
  view: __esri.View,
  graphic: __esri.Graphic
}
export type OnLoad = (e:LoadEvent) => ReturnVoid
