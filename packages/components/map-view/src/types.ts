import { ReturnVoid } from 'vunk/shared/types'
export type LoadEvent = {
  view: __esri.MapView
}
export type OnLoad = (e:LoadEvent) => ReturnVoid
