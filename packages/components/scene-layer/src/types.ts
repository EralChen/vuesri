import { ReturnVoid } from 'vunk/shared/types'
export type LoadEvent = {
  view: __esri.SceneView
  layer: __esri.SceneLayer
}
export type OnLoad = (e:LoadEvent) => ReturnVoid
