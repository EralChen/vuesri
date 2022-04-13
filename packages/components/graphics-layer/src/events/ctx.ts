import { onEmitsFactory } from '@vuesri/shared/helper/ctx'
import { ClickEvent, PointerMoveEvent } from './types'

export const emits = {
  click: (e: ClickEvent) => e,
  pointerMove: (e: PointerMoveEvent) => e,
} 

export const createOnEmits = onEmitsFactory(emits)
