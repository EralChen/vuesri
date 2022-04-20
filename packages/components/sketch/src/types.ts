import type { UiAddPosition } from '@vuesri/shared/types'
import type { ReturnVoid } from 'vunk/shared/types'
export type AvailableCreatureTool = ['point', 'polyline', 'polygon', 'rectangle', 'circle'][number]
export type LoadEvent = {
  view: __esri.View
  sketch: __esri.Sketch
}
export type OnLoad = (e:LoadEvent) => ReturnVoid
export type  {
  UiAddPosition,
}