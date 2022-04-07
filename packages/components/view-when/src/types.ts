import { ReturnVoid } from 'vunk/shared/types'
export type LoadEvent = {
  view: __esri.View
}
export type OnLoad = (e:LoadEvent) => ReturnVoid
