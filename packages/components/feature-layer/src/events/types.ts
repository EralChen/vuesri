import { ReturnVoid } from 'vunk/shared/types'
import * as tMapView from './map-view/types'

export type ClickEvent = tMapView.ClickEvent
export type PointerMoveEvent = tMapView.PointerMoveEvent

// handler
export type OnClick = (e: ClickEvent) => ReturnVoid
export type OnPointerMove = (e: PointerMoveEvent) => ReturnVoid
