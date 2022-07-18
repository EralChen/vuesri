import { MitterEvents } from '@vuesri/components/view/src/types'

export type LayerBaseEvent = {
  result: __esri.GraphicHit | undefined
  layer: __esri.FeatureLayer | __esri.GraphicsLayer
}
export type ClickEvent = MitterEvents['click'] & LayerBaseEvent
export type PointerMoveEvent = MitterEvents['pointer-move'] & LayerBaseEvent
