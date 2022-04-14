import type { UiAddPosition } from '@vuesri/shared/types'
import { ReturnVoid } from 'vunk/shared/types'
export type LoadEvent = {
  view:__esri.View
  el: HTMLDivElement
}
export type OnLoad = (e:LoadEvent) => ReturnVoid


export {
  UiAddPosition,
}
