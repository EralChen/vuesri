import { MitterEvents } from '@vuesri/components/map-view/shared/types'

type LayerBaseEvent = {
  result: __esri.HitTestResultResults | undefined
  layer: __esri.FeatureLayer
}
export type ClickEvent = MitterEvents['click'] & LayerBaseEvent
export type PointerMoveEvent = MitterEvents['pointer-move'] & LayerBaseEvent
