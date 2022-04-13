import { ReturnVoid } from 'vunk/shared/types'
import * as tLayer from '@vuesri/components/layer/src/events/types'

export interface ClickEvent extends tLayer.ClickEvent {
  layer: __esri.FeatureLayer
}
export interface PointerMoveEvent extends tLayer.PointerMoveEvent {
  layer: __esri.FeatureLayer
}

// handler
export type OnClick = (e: ClickEvent) => ReturnVoid
export type OnPointerMove = (e: PointerMoveEvent) => ReturnVoid
