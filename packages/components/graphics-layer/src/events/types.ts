import { ReturnVoid } from 'vunk/shared/types'
import * as tLayer from '@vuesri/components/layer/src/graphics-events/types'

export interface ClickEvent extends tLayer.ClickEvent {
  layer: __esri.GraphicsLayer
}
export interface PointerMoveEvent extends tLayer.PointerMoveEvent {
  layer: __esri.GraphicsLayer
}

// handler
export type OnClick = (e: ClickEvent) => ReturnVoid
export type OnPointerMove = (e: PointerMoveEvent) => ReturnVoid
