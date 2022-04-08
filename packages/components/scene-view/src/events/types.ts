
export interface BaseMapViewMouseEvent {
  view: __esri.SceneView
  hitTestResult: __esri.HitTestResult
}

export interface ClickEvent extends BaseMapViewMouseEvent {
  event: __esri.ViewClickEvent
}

export interface PointerMoveEvent extends BaseMapViewMouseEvent {
  event: __esri.ViewPointerMoveEvent
}

export type MitterEvents = {
  click: ClickEvent
  'pointer-move': PointerMoveEvent
}
