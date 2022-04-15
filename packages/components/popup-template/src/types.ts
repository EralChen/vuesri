import { ReturnVoid } from 'vunk/shared/types'

 type ContentOption = {
  el: HTMLDivElement|null
  attributes: Record<string, any>
}
export type GraphicToNode = Map<__esri.Graphic, ContentOption>

export type LoadEvent = {
  view: __esri.View,
  popupTemplate: __esri.PopupTemplate
}
export type OnLoad = (e:LoadEvent) => ReturnVoid


