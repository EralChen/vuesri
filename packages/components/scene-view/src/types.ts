import { ReturnVoid } from 'vunk/shared/types'
export type LoadEvent = {
  view: __esri.SceneView
}

export type OnLoad = (e:LoadEvent) => ReturnVoid
