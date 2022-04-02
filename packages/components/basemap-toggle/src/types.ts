import { UiAddPosition } from '@vuesri/shared/types'
import { ReturnVoid } from 'vunk/shared/types'

export type {
  UiAddPosition,
}
export type LoadEvent = {
  view: __esri.View,
  basemapToggle:__esri.BasemapToggle
}
export type OnLoad = (e:LoadEvent) => ReturnVoid
