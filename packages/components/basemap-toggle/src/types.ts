import { ReturnVoid } from 'vunk/shared/types'
export type LoadEvent = {
  view: __esri.View,
  basemapToggle:__esri.BasemapToggle
}
export type OnLoad = (e:LoadEvent) => ReturnVoid
