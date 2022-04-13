import { ReturnVoid } from 'vunk/shared/types'
import { ClickEvent, PointerMoveEvent } from './view/types'

export {
  ClickEvent, PointerMoveEvent,
}

// handler
export type OnClick = (e: ClickEvent) => ReturnVoid
export type OnPointerMove = (e: PointerMoveEvent) => ReturnVoid
