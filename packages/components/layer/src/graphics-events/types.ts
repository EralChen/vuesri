import { ReturnVoid } from 'vunk/shared/types'
import type { ClickEvent, PointerMoveEvent } from './view/types'

export type {
  ClickEvent, PointerMoveEvent,
}

// handler
export type OnClick = (e: ClickEvent) => ReturnVoid
export type OnPointerMove = (e: PointerMoveEvent) => ReturnVoid
