import { onEmitsFactory } from '@vuesri/shared/helper/ctx'
import * as viewCtx from './view/ctx'

export const emits = {
  ...viewCtx.emits,
} 
export const createOnEmits = onEmitsFactory(emits)