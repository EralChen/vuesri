import { ReturnVoid } from 'vunk/shared/types'
export type LoadEvent = {
  view: __esri.View,
  print: __esri.Print
}
export type OnLoad = (e:LoadEvent) => ReturnVoid
