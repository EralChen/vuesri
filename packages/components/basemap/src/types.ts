import { ReturnVoid } from 'vunk/shared/types'
export type LoadEvent = {
  view: __esri.View
  basemap: __esri.Basemap
}
export type OnLoad = (e:LoadEvent) => ReturnVoid
