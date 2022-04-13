import { MitterEvents } from '@vuesri/components/view/src/types'

type LayerBaseEvent = {
  result: __esri.HitTestResultResults | undefined
  layer: __esri.FeatureLayer | __esri.GraphicsLayer
}
export type ClickEvent = MitterEvents['click'] & LayerBaseEvent
export type PointerMoveEvent = MitterEvents['pointer-move'] & LayerBaseEvent
