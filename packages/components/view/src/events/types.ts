
export interface BaseViewMouseEvent {
  view: __esri.MapView | __esri.SceneView
  hitTestResult: __esri.HitTestResult
}

export interface ClickEvent extends BaseViewMouseEvent {
  event: __esri.ViewClickEvent
}

export interface PointerMoveEvent extends BaseViewMouseEvent {
  event: __esri.ViewPointerMoveEvent
}

export type MitterEvents = {
  click: ClickEvent
  'pointer-move': PointerMoveEvent
}
