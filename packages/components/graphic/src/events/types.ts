import { ClickEvent as ViewClickEvent } from '@vuesri/components/view/src/events/types'
import { ReturnVoid } from 'vunk/shared/types'

export interface ClickEvent extends ViewClickEvent {
  result: __esri.HitTestResultResults | undefined
}
export type OnClick = (e:ClickEvent) => ReturnVoid
