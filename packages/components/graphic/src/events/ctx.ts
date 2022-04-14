import { onEmitsFactory } from '@vuesri/shared/helper/ctx'
import { ClickEvent } from './types'

export const emits = {
  click: (e: ClickEvent) => e,
}

export const createOnEmits = onEmitsFactory(emits)
