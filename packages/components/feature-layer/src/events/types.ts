import { ReturnVoid } from 'vunk/shared/types'
import * as tView from './view/types'

export type ClickEvent = tView.ClickEvent
export type PointerMoveEvent = tView.PointerMoveEvent

// handler
export type OnClick = (e: ClickEvent) => ReturnVoid
export type OnPointerMove = (e: PointerMoveEvent) => ReturnVoid
