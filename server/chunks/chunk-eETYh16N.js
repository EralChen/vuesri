import { lV as n, aV as e, aX as y, a_ as c$1, bZ as S$1, a$ as b$1, qj as _$1, aT as s$1, ce as d$1, qk as W, ql as h$1, qm as d, qn as o, qo as o$1, gy as c$2, qp as t$1, cf as C, cl as A$1, c8 as u$1, nZ as n$2, qq as Z, qr as m$2, qs as x$1, qt as O, qu as P$1, qv as ds, kH as s, qw as V$1, aI as r$1, nP as c$3, nQ as g$2, aG as u, qx as H$1, qy as E, qz as S, f$ as F, qA as b$2, qB as p, qC as f$1, aH as O$1, m4 as t$3, fE as z$1, m6 as A, g8 as l$1, lo as d$2, qD as t$4, fF as o$2, qE as d$3, qF as c$4, l5 as t$5, qG as _$2, aW as n$3, qH as h$3 } from "./chunk-ejFG4zJ0.js";
import { s as s$2 } from "./chunk-SJe5cJoE.js";
import { x as xi, L as Li, V as Vi, R as Ri, m as m$1, I, H, g as g$1, v as v$1, j as ji, A as Ai, M, r, a as t$2, l as li, _ as _i, b as ri, p as p$1, s as si, c as Mi, e as ei, C as Ci, d as ci, u as ui, f as mi, h as pi, i as gi, k as e$1, n as t$6, o as ai, q as f$2, w as h$2, y as c$5, z as j } from "./chunk-25Z-gFzh.js";
import { t } from "./chunk-feYAbK6R.js";
import { l, n as n$1 } from "./chunk-dLtbcH7z.js";
import { a as a$1, v as v$2 } from "./chunk-GwzlD4zT.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk--_aQKBqP.js";
function a(a2) {
  switch (a2.type) {
    case "building-scene":
    case "catalog":
    case "catalog-dynamic-group":
    case "catalog-footprint":
    case "csv":
    case "dimension":
    case "feature":
    case "geo-rss":
    case "geojson":
    case "graphics":
    case "group":
    case "integrated-mesh":
    case "integrated-mesh-3dtiles":
    case "kml":
    case "knowledge-graph":
    case "link-chart":
    case "knowledge-graph-sublayer":
    case "line-of-sight":
    case "map-notes":
    case "ogc-feature":
    case "oriented-imagery":
    case "point-cloud":
    case "route":
    case "scene":
    case "stream":
    case "voxel":
    case "subtype-group":
    case "unknown":
    case "unsupported":
    case "wfs":
    case null:
      return false;
    case "base-dynamic":
    case "base-elevation":
    case "base-tile":
    case "bing-maps":
    case "elevation":
    case "imagery":
    case "imagery-tile":
    case "map-image":
    case "media":
    case "open-street-map":
    case "tile":
    case "vector-tile":
    case "video":
    case "wcs":
    case "web-tile":
    case "wms":
    case "wmts":
      return true;
    default:
      return n(a2.type), false;
  }
}
let v = class extends S$1 {
  constructor(e2) {
    super(e2), this._internalChange = false, this._currentSlicePlane = null;
  }
  initialize() {
    this.addHandles(this.analysis.excludedLayers.on("before-add", (e2) => {
      const i = e2.item;
      null != i && (i instanceof b$1 || i instanceof _$1) ? i instanceof b$1 && a(i) ? (s$1.getLogger(this).error("excludedLayers", `Layer '${i.title}, id:${i.id}' of type '${i.type}' can not be individually excluded from slicing. Use 'excludeGroundSurface' instead.`), e2.preventDefault()) : this.analysis.excludedLayers.includes(i) && e2.preventDefault() : (s$1.getLogger(this).error("excludedLayers", "Invalid layer type, layer must derive from Layer or BuildingComponentSublayer"), e2.preventDefault());
    })), V(this.view, this), this.addHandles([d$1(() => this.analysisViewData.plane, () => {
      this._internalChange || this._updateSlicePlaneFromBoundedPlane(), this._updateLayerViews();
    }, { sync: true }), d$1(() => this.analysis.excludeGroundSurface, () => this._updateLayerViews(), { sync: true }), this.analysis.excludedLayers.on("change", () => this._updateLayerViews()), d$1(() => [this.analysisViewData.active, this.analysisViewData.visible], () => {
      this._updateActiveController(), this._updateViewSlicePlane();
    }, { sync: true }), d$1(() => this._allLayerAndSubLayerViews, () => this._updateLayerViews())]), this.addHandles([d$1(() => this.analysis.shape, () => {
      this._internalChange || (this._updateBoundedPlaneFromSlicePlane(), this._updateViewSlicePlane());
    }, { sync: true })], "analysis"), this._updateActiveController(), this._updateBoundedPlaneFromSlicePlane(), this._updateViewSlicePlane();
  }
  destroy() {
    this.analysisViewData.active && (this.analysisViewData.active = false, this.view.slicePlane = null, this._updateActiveController(), this._updateViewSlicePlane()), L(this.view, this), this.set("view", null);
  }
  get _allLayerAndSubLayerViews() {
    const e2 = this.view.allLayerViews.items;
    return e2.concat(e2.filter(xi).flatMap(({ sublayerViews: e3 }) => e3.items));
  }
  _updateBoundedPlaneFromSlicePlane() {
    const e2 = this.analysis.shape, i = this._currentSlicePlane;
    if (null == i && null == e2 || null != i && null != e2 && e2.equals(i))
      return;
    let a2 = null, l2 = null;
    if (null != e2?.position) {
      const i2 = e2.position.spatialReference, s2 = Li(e2, this.view);
      null == s2 && t(this.analysis, i2, s$1.getLogger(this)), a2 = Vi(s2, this.view, { tiltEnabled: this.analysis.tiltEnabled }, W()), null != a2 && (l2 = { heading: e2.heading, tilt: e2.tilt, position: e2.position, width: e2.width, height: e2.height });
    }
    this._currentSlicePlane = l2, this._internalChange = true, this.analysisViewData.plane = a2, this._internalChange = false;
  }
  _updateSlicePlaneFromBoundedPlane() {
    const e2 = this.analysisViewData.plane, a2 = Ri(e2, this.view, this.view.spatialReference, new h$1());
    let t2 = null;
    null != a2 && (t2 = { heading: a2.heading, tilt: a2.tilt, position: a2.position, width: a2.width, height: a2.height }), this._currentSlicePlane = t2, this._internalChange = true, this.analysis.shape = a2, this._internalChange = false, this._updateViewSlicePlane();
  }
  _updateActiveController() {
    if (m)
      return;
    const e2 = _(this.view);
    if (!e2)
      return;
    if (this.analysisViewData.active)
      null != e2.activeController && e2.activeController !== this ? (m = true, e2.activeController.analysisViewData.active = false, m = false) : null != e2.activeController && e2.activeController, this._updateLayerViews(), e2.activeController = this;
    else {
      if (null != e2.activeController && e2.activeController !== this)
        return;
      null != e2.activeController && e2.activeController === this && (e2.activeController = null, this._updateLayerViews());
    }
  }
  _updateViewSlicePlane() {
    g(this.view);
  }
  _updateLayerViews() {
    const e2 = null != this.analysisViewData.plane && this.analysisViewData.visible && this.analysisViewData.active, i = [], a2 = (e3) => {
      "layers" in e3 ? e3.layers.forEach(a2) : i.push(e3);
    };
    this.analysis.excludedLayers.forEach(a2), this.view.allLayerViews.forEach((a3) => {
      a3.destroyed || ("slicePlaneEnabled" in a3 && (a3.slicePlaneEnabled = e2 && !i.includes(a3.layer)), "sublayerViews" in a3 && a3.sublayerViews.forEach((a4) => {
        a4.slicePlaneEnabled = e2 && !i.includes(a4.sublayer);
      }));
    }), null != this.view.basemapTerrain && (this.view.basemapTerrain.slicePlaneEnabled = e2 && !this.analysis.excludeGroundSurface);
  }
};
e([y()], v.prototype, "view", void 0), e([y()], v.prototype, "analysis", void 0), e([y()], v.prototype, "analysisViewData", void 0), e([y()], v.prototype, "_allLayerAndSubLayerViews", null), v = e([c$1("esri.views.3d.analysis.Slice.SliceController")], v);
const f = /* @__PURE__ */ new Map();
let m = false;
function g(e2) {
  const i = _(e2), a2 = i?.activeController;
  null != a2?.analysisViewData.plane && a2.analysisViewData.visible ? e2.slicePlane = a2.analysisViewData.plane : e2.slicePlane = null;
}
function V(e2, i) {
  f.has(e2) || f.set(e2, { all: [], activeController: null }), f.get(e2)?.all.push(i);
}
function _(e2) {
  return f.get(e2);
}
function L(e2, i) {
  if (!f.has(e2))
    throw new Error("view expected in global slice register");
  const a2 = f.get(e2), t2 = a2?.all.lastIndexOf(i) ?? -1;
  if (!a2 || -1 === t2)
    throw new Error("controller expected in global slice register");
  a2.all.splice(t2, 1), 0 === a2.all.length && f.delete(e2);
}
var Vt;
let bt = Vt = class extends o {
  constructor(t2) {
    super(t2), this._clock = o$1, this._previewPlaneOpacity = 1, this.removeIncompleteOnCancel = false, this._layersMode = "none", this.shiftManipulator = null, this.rotateHeadingManipulator = null, this.rotateTiltManipulator = null, this.resizeManipulators = null, this._frameTask = null, this._pointerMoveTimerMs = m$1, this._prevPointerMoveTimeout = null, this._previewPlaneGridVisualElement = null, this._previewPlaneOutlineVisualElement = null, this._startPlane = W(), this._previewPlane = null, this._activeKeyModifiers = {}, this._lastCursorPosition = c$2(), this._resizeHandles = [{ direction: [1, 0] }, { direction: [1, 1] }, { direction: [0, 1] }, { direction: [-1, 1] }, { direction: [-1, 0] }, { direction: [-1, -1] }, { direction: [0, -1] }, { direction: [1, -1] }], this._intersector = t$1(t2.view.state.viewingMode);
  }
  initialize() {
    if (null == this.analysis)
      throw new Error("SliceTool requires valid analysis, but null was provided.");
    const t2 = (t3) => {
      this._updateManipulatorsInteractive(t3), t3.grabbing || (null != this.analysisViewData.plane && Z(this.analysisViewData.plane, this._startPlane), this.inputState = null);
    }, e2 = new I(this.view, H.CENTER_ON_ARROW);
    this.shiftManipulator = e2, this.manipulators.add(e2), this.addHandles([this._createShiftDragPipeline(e2), e2.events.on("grab-changed", (i2) => {
      this._onShiftGrab(i2), t2(e2);
    })]);
    const i = !this.view._stage?.renderView.renderingContext.driverTest.svgPremultipliesAlpha.result, a2 = new g$1(this.view, (t3, e3) => l(this.view.textures, { accentColor: t3, contrastColor: e3, preMultiplyAlpha: i }));
    this.rotateHeadingManipulator = a2, this.manipulators.add(a2), this.addHandles([this._createRotateHeadingDragPipeline(a2), a2.events.on("grab-changed", (e3) => {
      this._onRotateHeadingGrab(e3), t2(a2);
    })]);
    const s2 = new g$1(this.view, (t3, e3) => n$1(this.view.textures, { accentColor: t3, contrastColor: e3, preMultiplyAlpha: i }));
    this.rotateTiltManipulator = s2, this.manipulators.add(s2), this.addHandles([this._createRotateTiltDragPipeline(s2), s2.events.on("grab-changed", (e3) => {
      this._onRotateTiltGrab(e3), t2(s2);
    })]), this.resizeManipulators = this._resizeHandles.map((e3, i2) => {
      const a3 = new v$1(this.view, e3);
      return this.addHandles([this._createResizeDragPipeline(a3), a3.events.on("grab-changed", (e4) => {
        this._onResizeGrab(e4, i2), t2(a3);
      })]), a3;
    }), this.manipulators.addMany(this.resizeManipulators), this._previewPlaneGridVisualElement = ji(this.view), this._previewPlaneOutlineVisualElement = Ai(this.view), this._previewPlaneOutlineVisualElement.width = M, this.addHandles(d$1(() => [this.analysisViewData.plane, this.analysis.tiltEnabled], () => this._updateManipulators(), C));
    const o2 = d$1(() => this.state, (t3) => {
      "sliced" === t3 && this.finishToolCreation();
    }, A$1);
    this.addHandles([o2, d$1(() => this.view.state.camera, () => this._onCameraChange())]);
  }
  destroy() {
    this._removeFrameTask(), this._clearPointerMoveTimeout(), this._previewPlaneOutlineVisualElement = u$1(this._previewPlaneOutlineVisualElement), this._previewPlaneGridVisualElement = u$1(this._previewPlaneGridVisualElement);
  }
  get state() {
    const t2 = !!this.analysisViewData.plane, e2 = !!this.inputState;
    return t2 ? t2 && e2 ? "slicing" : t2 && !e2 ? "sliced" : "ready" : "ready";
  }
  get cursor() {
    return this._isPlacingSlicePlane || "exclude" === this.layersMode ? "crosshair" : null != this._creatingPointerId ? "grabbing" : null;
  }
  set analysis(t2) {
    if (null == t2)
      throw new Error("SliceTool requires valid analysis, but null was provided.");
    this.removeHandles("analysis"), this._set("analysis", t2);
  }
  get layersMode() {
    return this._layersMode;
  }
  get inputState() {
    return this._get("inputState");
  }
  set inputState(t2) {
    this._set("inputState", t2), this.analysisViewData.showGrid = null != t2 && "resize" === t2.type, this._updateMaterials();
  }
  get _isPlacingSlicePlane() {
    return !this.inputState && !this.analysisViewData.plane && this.active;
  }
  get _creatingPointerId() {
    return null != this.inputState && "shift" === this.inputState.type ? this.inputState.creatingPointerId : null;
  }
  enterExcludeLayerMode() {
    null != this.analysisViewData.plane && (this._layersMode = "exclude", this.active || (this.view.activeTool = this));
  }
  exitExcludeLayerMode() {
    null != this.analysisViewData.plane && (this._layersMode = "none", this.active && (this.view.activeTool = null));
  }
  onDeactivate() {
    this._updatePreviewPlane(null);
  }
  onShow() {
    this._updateVisibility(true);
  }
  onHide() {
    this._updateVisibility(false);
  }
  _updateVisibility(t2) {
    this._updateManipulators(), t2 || this._clearPointerMoveTimeout();
  }
  onInputEvent(t2) {
    switch (t2.type) {
      case "pointer-drag":
        if (!Et(t2))
          return;
        this._isPlacingSlicePlane ? this._onClickPlacePlane(t2) && t2.stopPropagation() : this._onPointerDrag(t2) && t2.stopPropagation();
        break;
      case "pointer-move":
        this._onPointerMove(t2);
        break;
      case "pointer-up":
        this._onPointerUp(t2) && t2.stopPropagation();
        break;
      case "immediate-click":
        if (!Et(t2))
          return;
        this._onClickPlacePlane(t2) && t2.stopPropagation();
        break;
      case "click":
        if (!Et(t2))
          return;
        this._onClickExcludeLayer(t2) && t2.stopPropagation();
        break;
      case "drag":
        this.inputState && t2.stopPropagation();
        break;
      case "key-down":
        this._onKeyDown(t2) && t2.stopPropagation();
        break;
      case "key-up":
        this._onKeyUp(t2) && t2.stopPropagation();
    }
  }
  onEditableChange() {
    this.analysisViewData.editable = this.internallyEditable;
  }
  _onPointerDrag(t2) {
    const e2 = this.inputState;
    if (t2.pointerId === this._creatingPointerId && null != e2 && "shift" === e2.type) {
      const i = n$2(t2);
      return this.shiftManipulator.events.emit("drag", { action: e2.hasBeenDragged ? "update" : "start", pointerType: t2.pointerType, start: i, screenPoint: i }), e2.hasBeenDragged = true, true;
    }
    return false;
  }
  _onPointerMove(t2) {
    this._lastCursorPosition.x = t2.x, this._lastCursorPosition.y = t2.y, this._resetPointerMoveTimeout(), "touch" !== t2.pointerType && this._updatePreviewPlane(n$2(t2), this._activeKeyModifiers);
  }
  _onCameraChange() {
    this._updatePreviewPlane(this._lastCursorPosition, this._activeKeyModifiers), this._updateManipulators();
  }
  _onPointerUp(t2) {
    if (t2.pointerId === this._creatingPointerId && null != this.analysisViewData.plane) {
      const e2 = n$2(t2);
      return this.shiftManipulator.events.emit("drag", { action: "end", start: e2, screenPoint: e2 }), Z(this.analysisViewData.plane, this._startPlane), this.inputState = null, true;
    }
    return false;
  }
  _onClickPlacePlane(t2) {
    if ("exclude" === this.layersMode)
      return false;
    if (this._isPlacingSlicePlane) {
      const i = n$2(t2), a2 = W();
      if (this._pickPlane(i, false, this._activeKeyModifiers, a2)) {
        if ("pointer-drag" === t2.type) {
          const e2 = m$2(this.view.state.camera, i, St);
          this.inputState = Tt(e2, t2.pointerId, a2.origin, a2);
        }
        return Z(a2, this._startPlane), this.analysis.shape = Ri(a2, this.view, this.view.spatialReference, new h$1()), true;
      }
    }
    return false;
  }
  _onClickExcludeLayer(t2) {
    return !("exclude" !== this.layersMode || !this.created) && (this.view.hitTest(n$2(t2)).then((t3) => {
      if (t3.results.length) {
        const e2 = t3.results[0], i = "graphic" === e2?.type && e2.graphic;
        if (i) {
          const t4 = i.sourceLayer || i.layer;
          t4 && this.analysis.excludedLayers.push(t4);
        }
      } else
        t3.ground.layer ? this.analysis.excludedLayers.push(t3.ground.layer) : this.analysis.excludeGroundSurface = true;
    }), this.exitExcludeLayerMode(), true);
  }
  _onKeyDown(t2) {
    return (t2.key === r || t2.key === t$2) && (this._activeKeyModifiers[t2.key] = true, null != this._previewPlane && this._updatePreviewPlane(this._lastCursorPosition, this._activeKeyModifiers), true);
  }
  _onKeyUp(t2) {
    return !(t2.key !== r && t2.key !== t$2 || !this._activeKeyModifiers[t2.key]) && (delete this._activeKeyModifiers[t2.key], null != this._previewPlane && this._updatePreviewPlane(this._lastCursorPosition, this._activeKeyModifiers), true);
  }
  _onShiftGrab(t2) {
    if ("start" !== t2.action || null == this.analysisViewData.plane || !t2.screenPoint)
      return;
    const e2 = m$2(this.view.state.camera, t2.screenPoint, St);
    Z(this.analysisViewData.plane, this._startPlane), this.inputState = Tt(e2, null, this.shiftManipulator.renderLocation, this.analysisViewData.plane);
  }
  _createShiftDragPipeline(t2) {
    return x$1(t2, (t3, e2, i) => {
      const a2 = this.inputState;
      if (null == a2 || "shift" !== a2.type)
        return;
      const s2 = null != this.analysisViewData.plane ? Z(this.analysisViewData.plane, W()) : null;
      e2.next(O(this.view, a2.shiftPlane)).next(this._shiftDragAdjustSensitivity(a2)).next(this._shiftDragUpdatePlane(a2)), i.next(() => {
        null != s2 && this._updateBoundedPlane(s2);
      });
    });
  }
  _shiftDragAdjustSensitivity(t2) {
    return (e2) => {
      if (null == this.analysisViewData.plane)
        return null;
      const i = 1e-3, a2 = Math.min((1 - Math.abs(P$1(ds(this.analysisViewData.plane), e2.ray.direction) / s(e2.ray.direction))) / i, 1), s$12 = -V$1(this._startPlane.plane, e2.renderEnd), n2 = -V$1(this._startPlane.plane, t2.startPoint);
      return t2.depth = t2.depth * (1 - a2) + s$12 * a2 - n2, e2;
    };
  }
  _shiftDragUpdatePlane(t2) {
    return () => {
      if (null == this.analysisViewData.plane)
        return;
      const e2 = r$1(c$3.get(), this._startPlane.origin), i = r$1(c$3.get(), ds(this._startPlane));
      g$2(i, i, -t2.depth), u(i, i, e2);
      const a2 = H$1(i, this.analysisViewData.plane.basis1, this.analysisViewData.plane.basis2, W());
      this._updateBoundedPlane(a2);
    };
  }
  _onRotateHeadingGrab(t2) {
    if ("start" !== t2.action || null == this.analysisViewData.plane || !t2.screenPoint)
      return;
    const e2 = li(this.analysisViewData.plane, this.view.renderCoordsHelper, _i.HEADING, E()), i = m$2(this.view.state.camera, t2.screenPoint, St), a2 = n$3();
    S(e2, i, a2) && (Z(this.analysisViewData.plane, this._startPlane), this.inputState = { type: "rotate", rotatePlane: e2, startPoint: a2 });
  }
  _createRotateHeadingDragPipeline(t2) {
    return x$1(t2, (t3, e2, i) => {
      const a2 = this.inputState;
      if (null == a2 || "rotate" !== a2.type)
        return;
      const s2 = null != this.analysisViewData.plane ? Z(this.analysisViewData.plane, W()) : null;
      e2.next(O(this.view, a2.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(a2)).next(this._rotateDragUpdatePlaneFromRotate()), i.next(() => {
        null != s2 && this._updateBoundedPlane(s2);
      });
    });
  }
  _onRotateTiltGrab(t2) {
    if ("start" !== t2.action || null == this.analysisViewData.plane || !t2.screenPoint)
      return;
    const e2 = li(this.analysisViewData.plane, this.view.renderCoordsHelper, _i.TILT, E()), i = m$2(this.view.state.camera, t2.screenPoint, St), a2 = n$3();
    S(e2, i, a2) && (Z(this.analysisViewData.plane, this._startPlane), this.inputState = { type: "rotate", rotatePlane: e2, startPoint: a2 });
  }
  _createRotateTiltDragPipeline(t2) {
    return x$1(t2, (t3, e2, i) => {
      const a2 = this.inputState;
      if (null == a2 || "rotate" !== a2.type)
        return;
      const s2 = null != this.analysisViewData.plane ? Z(this.analysisViewData.plane, W()) : null;
      e2.next(O(this.view, a2.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(a2)).next(this._rotateDragUpdatePlaneFromRotate()), i.next(() => {
        null != s2 && this._updateBoundedPlane(s2);
      });
    });
  }
  _rotateDragRenderPlaneToRotate(t2) {
    return (e2) => {
      if (null == this.analysisViewData.plane)
        return null;
      const i = F(t2.rotatePlane), a2 = b$2(t2.startPoint, e2.renderEnd, this.analysisViewData.plane.origin, i);
      return { ...e2, rotateAxis: i, rotateAngle: a2 };
    };
  }
  _rotateDragUpdatePlaneFromRotate() {
    return (t2) => {
      if (null == this.analysisViewData.plane)
        return;
      const e2 = p(f$1.get(), t2.rotateAngle, t2.rotateAxis);
      if (null == e2)
        return;
      const i = O$1(c$3.get(), this._startPlane.basis1, e2), a2 = O$1(c$3.get(), this._startPlane.basis2, e2), s2 = H$1(this.analysisViewData.plane.origin, i, a2, W());
      this._updateBoundedPlane(s2);
    };
  }
  _onResizeGrab(t2, e2) {
    if ("start" !== t2.action || null == this.analysisViewData.plane || !t2.screenPoint)
      return;
    const i = m$2(this.view.state.camera, t2.screenPoint, St), a2 = c$3.get();
    S(this.analysisViewData.plane.plane, i, a2) && (Z(this.analysisViewData.plane, this._startPlane), this.inputState = { type: "resize", activeHandleIdx: e2, startPoint: t$3(a2) });
  }
  _createResizeDragPipeline(t2) {
    return x$1(t2, (t3, e2, i) => {
      const a2 = this.inputState;
      if (null == a2 || "resize" !== a2.type || null == this.analysisViewData.plane)
        return;
      const s2 = Z(this.analysisViewData.plane, W());
      e2.next(O(this.view, this.analysisViewData.plane.plane)).next(this._resizeDragUpdatePlane(a2)), i.next(() => {
        this._updateBoundedPlane(s2);
      });
    });
  }
  _resizeDragUpdatePlane(t2) {
    return (e2) => {
      if (null == this.analysisViewData.plane)
        return;
      const i = this._resizeHandles[t2.activeHandleIdx], a2 = ri(i, t2.startPoint, e2.renderEnd, this.view.state.camera, this._startPlane, Z(this.analysisViewData.plane));
      this._updateBoundedPlane(a2);
    };
  }
  _updateBoundedPlane(t2) {
    const e2 = this.analysisViewData;
    if (null == e2)
      throw new Error("valid internal object expected");
    e2.plane = t2;
  }
  _updatePreviewPlane(t2, e2 = {}) {
    let i = this._previewPlane;
    if (this._previewPlane = null, null == t2)
      return this._removeFrameTask(), void this._updateManipulators();
    if (!this.analysisViewData.plane && this.active) {
      const a2 = null != i ? i : W();
      if (i = null != i ? Z(i, kt) : null, this._pickPlane(t2, true, e2, a2)) {
        const t3 = f$2;
        let e3 = false;
        null != i && (e3 = P$1(F(i.plane), F(a2.plane)) < t3 || P$1(z$1(c$3.get(), i.basis1), z$1(c$3.get(), a2.basis1)) < t3), e3 && (this._previewPlaneOpacity = 0), this._previewPlane = a2;
      }
    }
    null != this._previewPlane && null == this._frameTask && 0 === this._previewPlaneOpacity ? this._frameTask = A({ update: ({ deltaTime: t3 }) => {
      this._previewPlaneOpacity = Math.min(this._previewPlaneOpacity + t3 / (1e3 * p$1), 1), this._updateManipulators(), 1 === this._previewPlaneOpacity && this._removeFrameTask();
    } }) : null == this._previewPlane && null != this._frameTask ? this._removeFrameTask() : null != this._previewPlane && this._updateManipulators();
  }
  _removeFrameTask() {
    this._frameTask = l$1(this._frameTask);
  }
  _pickMinResult(t2) {
    const e2 = d$2(t2, t$4.get());
    return this.view.sceneIntersectionHelper.intersectToolIntersectorScreen(e2, this._intersector), this._intersector.results.min;
  }
  _pickPlane(t2, e2, i, a2) {
    const s2 = this._pickMinResult(t2), n2 = c$3.get();
    if (!s2.getIntersectionPoint(n2))
      return false;
    const r$12 = s2.getTransformedNormal(c$3.get()), l2 = this.view.state.camera;
    P$1(r$12, l2.viewForward) > 0 && g$2(r$12, r$12, -1);
    const o2 = si(n2, l2), h2 = (e2 ? 1 : -1) * o2 * h$2, p2 = g$2(c$3.get(), r$12, h2);
    u(p2, p2, n2);
    const u$12 = this.analysis.tiltEnabled ? Mi.TILTED : Mi.HORIZONTAL_OR_VERTICAL, c2 = i[r] ? Mi.VERTICAL : i[t$2] ? Mi.HORIZONTAL : u$12;
    return ei(p2, r$12, o2, o2, l2, c2, this.view.renderCoordsHelper, a2), true;
  }
  _clearPointerMoveTimeout() {
    this._prevPointerMoveTimeout = l$1(this._prevPointerMoveTimeout);
  }
  _resetPointerMoveTimeout() {
    this._clearPointerMoveTimeout(), this.shiftManipulator.state |= Ci, this.rotateHeadingManipulator.state |= Ci, this.rotateTiltManipulator.state |= Ci, this._prevPointerMoveTimeout = this._clock.setTimeout(() => {
      this.shiftManipulator.state &= ~Ci, this.rotateHeadingManipulator.state &= ~Ci, this.rotateTiltManipulator.state &= ~Ci;
    }, this._pointerMoveTimerMs);
  }
  _updateManipulators() {
    if (Vt.disableEngineLayers)
      return;
    let t2, e2 = false;
    if (null != this.analysisViewData.plane)
      t2 = this.analysisViewData.plane, e2 = false;
    else {
      if (null == this._previewPlane)
        return this.shiftManipulator.available = false, this.rotateHeadingManipulator.available = false, this.rotateTiltManipulator.available = false, this.resizeManipulators.forEach((t3) => t3.available = false), this._previewPlaneOutlineVisualElement.visible = false, void (this._previewPlaneGridVisualElement.visible = false);
      t2 = this._previewPlane, e2 = true;
    }
    const i = ci(t2, f$1.get());
    e2 ? (this.shiftManipulator.available = false, this.rotateHeadingManipulator.available = false, this.rotateTiltManipulator.available = false, this.resizeManipulators.forEach((t3) => t3.available = false), this._previewPlaneOutlineVisualElement.attached = true, this._previewPlaneGridVisualElement.attached = true, this._previewPlaneOutlineVisualElement.visible = true, this._previewPlaneGridVisualElement.visible = true) : (this.shiftManipulator.available = true, this.rotateHeadingManipulator.available = true, this.rotateTiltManipulator.available = this.analysis.tiltEnabled, this.resizeManipulators.forEach((t3) => t3.available = true), ui(this.shiftManipulator, i, t2, this.view.state.camera), mi(this.rotateHeadingManipulator, i, t2, this.view.renderCoordsHelper), pi(this.rotateTiltManipulator, i, t2), this.resizeManipulators.forEach((e3, a3) => gi(e3, this._resizeHandles[a3], i, t2)), this._previewPlaneOutlineVisualElement.visible = false, this._previewPlaneGridVisualElement.visible = false);
    const a2 = o$2(c$3.get(), s(t2.basis1), s(t2.basis2), 1), s$12 = d$3(f$1.get(), a2), n2 = c$4(s$12, i, s$12);
    this._previewPlaneOutlineVisualElement.transform = n2, this._previewPlaneGridVisualElement.transform = n2, this._updateMaterials();
  }
  _updateMaterials() {
    const t2 = e$1(this.view.effectiveTheme);
    t2[3] *= this._previewPlaneOpacity;
    const e2 = t$5(t$6);
    e2[3] *= this._previewPlaneOpacity, this._previewPlaneOutlineVisualElement.color = t2, this._previewPlaneGridVisualElement.backgroundColor = e2, this._previewPlaneGridVisualElement.gridColor = _$2;
  }
  _updateManipulatorsInteractive(t2) {
    if (!t2.grabbing)
      return this.shiftManipulator.interactive = true, this.rotateHeadingManipulator.interactive = true, this.rotateTiltManipulator.interactive = true, void this.resizeManipulators.forEach((t3) => {
        t3.interactive = true;
      });
    this.shiftManipulator.interactive = this.shiftManipulator === t2, this.rotateHeadingManipulator.interactive = this.rotateHeadingManipulator === t2, this.rotateTiltManipulator.interactive = this.rotateTiltManipulator === t2, this.resizeManipulators.forEach((e2) => {
      e2.interactive = e2 === t2;
    });
  }
  testData() {
    return { plane: this.analysisViewData.plane, setPointerMoveTimerMs: (t2) => {
      this._pointerMoveTimerMs = t2;
    } };
  }
};
function Tt(t2, e2, i, a2) {
  const s2 = ai(i, ds(a2), t2.direction, E()), n2 = n$3();
  return S(s2, t2, n2) ? { type: "shift", creatingPointerId: e2, hasBeenDragged: false, shiftPlane: s2, depth: 0, startPoint: n2 } : null;
}
function Et(t2) {
  return "mouse" !== t2.pointerType || 0 === t2.button;
}
bt.disableEngineLayers = false, e([y()], bt.prototype, "_clock", void 0), e([y({ constructOnly: true })], bt.prototype, "view", void 0), e([y()], bt.prototype, "analysisViewData", void 0), e([y({ readOnly: true })], bt.prototype, "state", null), e([y({ readOnly: true })], bt.prototype, "cursor", null), e([y()], bt.prototype, "analysis", null), e([y()], bt.prototype, "removeIncompleteOnCancel", void 0), e([y()], bt.prototype, "_layersMode", void 0), e([y()], bt.prototype, "layersMode", null), e([y({ value: null })], bt.prototype, "inputState", null), e([y()], bt.prototype, "_isPlacingSlicePlane", null), e([y()], bt.prototype, "_creatingPointerId", null), bt = Vt = e([c$1("esri.views.3d.analysis.Slice.SliceTool")], bt);
const kt = W(), St = d(), xt = bt;
let b = class extends S$1 {
  constructor(i) {
    super(i), this._gridVisualElement = null, this._outlineVisualElement = null, this.showGrid = false, this.preview = true;
  }
  initialize() {
    const i = this.analysisViewData;
    if (null == i)
      throw new Error("expected internal object to be valid");
    this._gridVisualElement = ji(this.view), this._outlineVisualElement = Ai(this.view), this.addHandles([d$1(() => {
      const e2 = null != i.plane && this.analysisViewData.visible, { active: t2 } = this.analysisViewData, { preview: s2, showGrid: o2, view: r2 } = this, { effectiveTheme: l2 } = r2;
      return { visible: e2, active: t2, preview: s2, showGrid: o2, gridColor: c$5(l2), outlineColor: e$1(l2) };
    }, (i2) => this._updateMaterials(i2), A$1), d$1(() => i.plane, (i2) => this._updatePlane(i2), A$1)], "internal");
  }
  destroy() {
    this._gridVisualElement = u$1(this._gridVisualElement), this._outlineVisualElement = u$1(this._outlineVisualElement), this.set("view", null);
  }
  _updatePlane(i) {
    if (null == i)
      return;
    this._gridVisualElement.attached = true, this._outlineVisualElement.attached = true;
    const e2 = o$2(c$3.get(), s(i.basis1), s(i.basis2), 1), t2 = d$3(f$1.get(), e2), s$12 = ci(i, f$1.get()), o2 = c$4(t2, s$12, t2);
    this._outlineVisualElement.transform = o2, this._gridVisualElement.transform = o2;
  }
  _updateMaterials({ visible: i, active: e2, preview: t2, showGrid: s2, gridColor: o2, outlineColor: r2 }) {
    this._outlineVisualElement.color = r2, this._outlineVisualElement.width = t2 ? M : j, this._outlineVisualElement.stipplePattern = e2 ? null : h$3(5), this._gridVisualElement.backgroundColor = t$6, this._gridVisualElement.gridColor = s2 ? o2 : _$2, this._gridVisualElement.visible = i, this._outlineVisualElement.visible = i;
  }
};
e([y()], b.prototype, "view", void 0), e([y()], b.prototype, "analysis", void 0), e([y()], b.prototype, "analysisViewData", void 0), e([y()], b.prototype, "showGrid", void 0), e([y()], b.prototype, "preview", void 0), b = e([c$1("esri.views.3d.analysis.Slice.SliceVisualization")], b);
let h = class extends s$2(S$1) {
  constructor(i) {
    super(i), this.type = "slice-view-3d", this.analysis = null, this.tool = null, this.analysisVisualization = null, this.analysisController = null, this.plane = null, this.active = true;
  }
  initialize() {
    this.analysisVisualization = new b({ view: this.view, analysis: this.analysis, analysisViewData: this }), this.analysisController = new v({ view: this.view, analysis: this.analysis, analysisViewData: this }), this.addHandles(a$1(this, xt));
  }
  destroy() {
    v$2(this), this.analysisVisualization = u$1(this.analysisVisualization), this.analysisController = u$1(this.analysisController);
  }
  get showGrid() {
    return this.analysisVisualization?.showGrid ?? false;
  }
  set showGrid(i) {
    this.analysisVisualization && (this.analysisVisualization.showGrid = i);
  }
  get editable() {
    return !this.analysisVisualization.preview;
  }
  set editable(i) {
    this.analysisVisualization.preview = !i;
  }
  get testData() {
    return { visualization: this.analysisVisualization, controller: this.analysisController, tool: this.tool };
  }
};
e([y({ readOnly: true })], h.prototype, "type", void 0), e([y({ constructOnly: true, nonNullable: true })], h.prototype, "analysis", void 0), e([y()], h.prototype, "tool", void 0), e([y()], h.prototype, "plane", void 0), e([y()], h.prototype, "active", void 0), e([y()], h.prototype, "showGrid", null), e([y()], h.prototype, "editable", null), h = e([c$1("esri.views.3d.analysis.SliceAnalysisView3D")], h);
const c = h;
export {
  c as default
};
