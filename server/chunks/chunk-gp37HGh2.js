import { fr as d$1, cL as y$1, bJ as d$2, bS as e$1, cy as x$1, bf as c$1, dz as u, bo as e, bp as y$2, bn as P$1, bD as u$1, br as c$2, bu as u$2, df as h, c3 as W$1, de as b$1, uh as I, fC as l$2, c2 as F$1, ui as e$2, fl as m$1, rZ as M, mz as e$3, eQ as n$3, hw as r$2, pU as W$2, fw as n$4, pX as Z, ax as G$1, f5 as q$1, mJ as e$5, hK as r$3, mD as v$2, pq as s$2, pv as P$2, fp as o, c4 as d$4, ie as z, mL as g$1, bq as j$1, eO as z$1, l6 as u$3, mI as A, bt as S$4, sB as G$2, mW as n$5, uj as r$4, uk as l$4, bs as g$2 } from "./chunk-KFNcxJaF.js";
import { S as S$2 } from "./chunk--zBqtsY2.js";
import { K, k as k$1, X as X$1, c, V as V$1, l as l$3 } from "./chunk-GdVukjg-.js";
import { d as d$3, v as v$1, l as l$1, U } from "./chunk-FKMfLf6u.js";
import { s as s$1, S as S$3 } from "./chunk-WQPcs7l9.js";
import { E as E$1, V, e as e$4, p } from "./chunk-ntY6_aOQ.js";
import { m as m$2 } from "./chunk-s_1zK5-o.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-tNL5i2kK.js";
import "./chunk-x5arQHJi.js";
import "./chunk-Jk46lvUq.js";
import "./chunk-KXkDk_IW.js";
import "./chunk-WuibsuuF.js";
import "./chunk-Z0Yk6-wB.js";
import "./chunk-8M1zBeVZ.js";
import "./chunk-z9Tnkksn.js";
import "./chunk-GM3bx0Bh.js";
import "./chunk-sO9RJjHR.js";
import "./chunk-Jwrw72Py.js";
import "./chunk-7pOsGJCN.js";
import "./chunk-J84yWr0C.js";
import "./chunk-OvdaIYdh.js";
import "./chunk-vWiGr0Yr.js";
const t$1 = new d$1({ data: { type: "CIMSymbolReference", symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMSolidStroke", effects: [{ type: "CIMGeometricEffectDashes", dashTemplate: [3.75, 3.75], lineDashEnding: "HalfPattern", controlPointEnding: "NoConstraint" }], enable: true, capStyle: "Butt", joinStyle: "Round", miterLimit: 10, width: 1.6, color: [255, 255, 255, 255] }, { type: "CIMSolidStroke", enable: true, capStyle: "Butt", joinStyle: "Round", miterLimit: 10, width: 2, color: [0, 0, 0, 255] }] } } }), l = new y$1({ style: "circle", size: 6, color: [127, 127, 127, 1], outline: { color: [50, 50, 50], width: 1 } }), i = new y$1({ style: "circle", size: 6, color: [255, 127, 0, 1], outline: { color: [50, 50, 50], width: 1 } });
let G = class extends K {
  constructor(e2) {
    super(e2), this._visualElementGraphics = { outline: null, regularVertices: null, activeVertex: null }, this.activeFillSymbol = null, this.type = "draw-2d", this._visualElementSymbols = { outline: e2.activeLineSymbol ?? t$1, regularVertices: e2.regularVerticesSymbol ?? l, activeVertex: e2.activeVertexSymbol ?? i, fill: e2.activeFillSymbol }, e2.activeVertexSymbol || this.addHandles(d$2(() => this.view?.effectiveTheme?.accentColor, (e3) => {
      if (!e3)
        return;
      const t2 = this._visualElementSymbols.activeVertex.clone().set({ color: e3 });
      this._visualElementGraphics.activeVertex?.set("symbol", t2), this._visualElementSymbols = { ...this._visualElementSymbols, activeVertex: t2 };
    }, P$1));
  }
  normalizeCtorArgs(e2) {
    const t2 = { ...e2 };
    return delete t2.activeFillSymbol, delete t2.activeVertexSymbol, delete t2.regularVerticesSymbol, delete t2.activeLineSymbol, t2;
  }
  initializeGraphic(e2) {
    return null != this._visualElementSymbols.fill && (e2.symbol = this._visualElementSymbols.fill), e$1();
  }
  makeDrawOperation() {
    const { defaultZ: e2, hasZ: t2, view: i2 } = this;
    return this._createOrUpdateGraphic(null), new k$1({ view: i2, manipulators: this.manipulators, geometryType: X$1(this.geometryType), drawingMode: this.mode, hasZ: t2, defaultZ: e2, snapToSceneEnabled: this.snapToScene, drawSurface: new c(i2, t2, e2), hasM: false, snappingManager: this.snappingManager, snappingVisualizer: new S$2(this.internalGraphicsLayer), tooltipOptions: this.tooltipOptions, graphic: this.graphic, cursor: this.cursor });
  }
  onActiveVertexChanged(e2) {
    if ("point" === this.geometryType)
      return e$1();
    const [s2, a] = e2, l2 = new x$1({ x: s2, y: a, spatialReference: this.view.spatialReference });
    return null != this._visualElementGraphics.activeVertex ? (this._visualElementGraphics.activeVertex.geometry = l2, e$1()) : (this._visualElementGraphics.activeVertex = new c$1({ geometry: l2, symbol: this._visualElementSymbols.activeVertex, attributes: { displayOrder: 2 } }), this.internalGraphicsLayer.add(this._visualElementGraphics.activeVertex), this.internalGraphicsLayer.graphics.sort(_), e$1(() => {
      null != this._visualElementGraphics.activeVertex && (this.internalGraphicsLayer.remove(this._visualElementGraphics.activeVertex), this._visualElementGraphics.activeVertex = u$1(this._visualElementGraphics.activeVertex));
    }));
  }
  onOutlineChanged(e2) {
    const s2 = e2.clone();
    if ("polyline" === s2.type) {
      const e3 = s2.paths[s2.paths.length - 1];
      e3.splice(0, e3.length - 2);
    }
    return null != this._visualElementGraphics.outline ? (this._visualElementGraphics.outline.geometry = s2, e$1()) : (this._visualElementGraphics.outline = new c$1({ geometry: s2, symbol: this._visualElementSymbols.outline, attributes: { displayOrder: 0 } }), this.internalGraphicsLayer.add(this._visualElementGraphics.outline), this.internalGraphicsLayer.graphics.sort(_), e$1(() => {
      null != this._visualElementGraphics.outline && (this.internalGraphicsLayer.remove(this._visualElementGraphics.outline), this._visualElementGraphics.outline = u$1(this._visualElementGraphics.outline));
    }));
  }
  onRegularVerticesChanged(e2) {
    const s2 = new u({ points: e2, spatialReference: this.view.spatialReference });
    return null != this._visualElementGraphics.regularVertices ? (this._visualElementGraphics.regularVertices.geometry = s2, e$1()) : (this._visualElementGraphics.regularVertices = new c$1({ geometry: s2, symbol: this._visualElementSymbols.regularVertices, attributes: { displayOrder: 1 } }), this.internalGraphicsLayer.add(this._visualElementGraphics.regularVertices), this.internalGraphicsLayer.graphics.sort(_), e$1(() => {
      null != this._visualElementGraphics.regularVertices && (this.internalGraphicsLayer.remove(this._visualElementGraphics.regularVertices), this._visualElementGraphics.regularVertices = u$1(this._visualElementGraphics.regularVertices));
    }));
  }
};
function _(e2, t2) {
  return (e2.attributes?.displayOrder ?? -1 / 0) - (t2.attributes?.displayOrder ?? -1 / 0);
}
e([y$2()], G.prototype, "activeFillSymbol", void 0), e([y$2({ readOnly: true })], G.prototype, "type", void 0), e([y$2({ constructOnly: true, nonNullable: true })], G.prototype, "view", void 0), G = e([c$2("esri.views.2d.interactive.draw.DrawGraphicTool2D")], G);
let r$1 = class r {
  get hovering() {
    return this.someManipulator((r3) => r3.hovering);
  }
  get grabbing() {
    return this.someManipulator((r3) => r3.grabbing);
  }
  get dragging() {
    return this.someManipulator((r3) => r3.dragging);
  }
  hasManipulator(r3) {
    return this.someManipulator((t2) => t2 === r3);
  }
  someManipulator(r3) {
    let t2 = false;
    return this.forEachManipulator((a) => {
      !t2 && r3(a) && (t2 = true);
    }), t2;
  }
};
var t;
!function(r3) {
  r3[r3.TRANSLATE_XY = 0] = "TRANSLATE_XY", r3[r3.SCALE = 1] = "SCALE", r3[r3.ROTATE = 2] = "ROTATE";
}(t || (t = {}));
let n$2 = class n extends r$1 {
  constructor(t2) {
    super(), this._view = t2.view, this._tool = t2.tool, this._graphic = t2.graphic, this._manipulator = this._createManipulator(), this.forEachManipulator((t3) => this._tool.manipulators.add(t3));
  }
  destroy() {
    this.forEachManipulator((t2) => {
      this._tool.manipulators.remove(t2), t2.destroy();
    }), this._tool = null, this._view = null, this._manipulator = null, this._graphic = null;
  }
  forEachManipulator(t$12) {
    t$12(this._manipulator, t.TRANSLATE_XY);
  }
  createDragPipeline(t2, i2) {
    let o2 = null, n3 = null, c2 = 0, l2 = 0, p2 = 0;
    const { offsetX: m2, offsetY: h2, size: u2 } = s$1(this._graphic.symbol);
    return d$3(this._manipulator, (r3, s2) => {
      s2.next((i3) => {
        if ("start" === i3.action) {
          const i4 = t2();
          o2 = i4.editGeometryOperations, n3 = i4.constraints;
        }
        return i3;
      }).next(v$1(this._view)).next((t3) => {
        const { x: r4, y: a, z: s3 } = t3.mapEnd;
        if (n3 && (r4 + m2 < n3.xmin || a + h2 - u2 < n3.ymin || r4 + m2 > n3.xmax || a + h2 - u2 > n3.ymax))
          return t3;
        ("start" === t3.action || 0 === c2 && 0 === l2 && 0 === p2) && (c2 = t3.mapStart.x, l2 = t3.mapStart.y, p2 = t3.mapStart.z);
        const _2 = r4 - c2, f = a - l2, v2 = s3 - p2;
        c2 = r4, l2 = a, p2 = s3;
        const x = [];
        for (const i3 of o2.data.components)
          x.push(...i3.vertices);
        const d2 = "start" === t3.action ? E$1.NEW_STEP : E$1.ACCUMULATE_STEPS, E2 = o2.moveVertices(x, _2, f, v2, d2);
        return i2(t3, E2), t3;
      });
    });
  }
  _createManipulator() {
    const t2 = this._view, i2 = this._graphic;
    return new S$3({ view: t2, graphic: i2, selectable: true, cursor: "move" });
  }
};
const P = { up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", toggleOpacity: "t", shift: "Shift", primaryKey: e$2 }, v = 1, S$1 = 10, k = new u$2("#009AF2");
let b = class extends l$1 {
  constructor(t2) {
    super(t2), this._isOpacityToggled = false, this._isModifierActive = false, this._factor = 1, this._initialControlPoints = null, this._graphicsLayer = new h({ internal: true, listMode: "hide", visible: false, effect: "drop-shadow(0px, 0px, 3px)" }), this._undoStack = [], this._redoStack = [], this._sharedUndoStack = [], this._sharedRedoStack = [], this._highlightHandle = null, this.activeHandle = 0;
  }
  initialize() {
    this._initialize();
  }
  destroy() {
    const { map: t2 } = this.view;
    this._controlPointManipulations.forEach((t3) => t3.destroy()), this._controlPointEditGeometryOperations.forEach((t3) => t3.destroy()), t2.removeMany([this._graphicsLayer]), this._graphicsLayer.removeAll(), this._graphicsLayer = u$1(this._graphicsLayer), this._georeference = null, this._controlPointGraphics = null, this._controlPointManipulations = null, this._graphicsLayer = null, this._controlPointEditGeometryOperations = null, this._undoStack = null, this._redoStack = null, this._initialControlPoints = null, this._sharedUndoStack = null, this._sharedRedoStack = null;
  }
  get _hasValidSpatialReference() {
    return W$1(this.view.spatialReference);
  }
  onActivate() {
    this.visible = true;
  }
  onDeactivate() {
    this.visible = false;
  }
  onShow() {
    this._graphicsLayer.visible = true;
  }
  onHide() {
    this._graphicsLayer.visible = false;
  }
  canUndo() {
    const t2 = this._undoStack[this._undoStack.length - 1];
    return null != t2 && this._controlPointEditGeometryOperations[t2].canUndo;
  }
  canRedo() {
    const t2 = this._redoStack[this._redoStack.length - 1];
    return null != t2 && this._controlPointEditGeometryOperations[t2].canRedo;
  }
  undo() {
    if (this._undoStack.length > 0) {
      const t2 = this._undoStack.pop();
      this._controlPointEditGeometryOperations[t2].undo(), this.updateGraphics(), this._redoStack.push(t2);
    }
  }
  redo() {
    if (this._redoStack.length > 0) {
      const t2 = this._redoStack.pop();
      this._controlPointEditGeometryOperations[t2].redo(), this.updateGraphics(), this._undoStack.push(t2);
    }
  }
  refresh() {
    const { mediaElement: t2 } = this;
    if (null == t2.georeference)
      return;
    const e2 = t2.georeference;
    "control-points" === e2.type && null != e2.coords && (this._georeference = e2, this._georeference.controlPoints.forEach(({ mapPoint: t3 }, e3) => {
      const i2 = this._controlPointEditGeometryOperations[e3], o2 = i2.data.components[0].vertices[0];
      i2.setVertexPosition(o2, i2.data.coordinateHelper.pointToVector(t3));
    }), this.updateGraphics());
  }
  reset() {
    this._georeference.controlPoints = this._initialControlPoints, this.refresh(), this._sharedUndoStack.length = 0, this._sharedRedoStack.length = 0;
  }
  updateGraphics() {
    const t2 = this._georeference, e2 = t2.controlPoints, i2 = e2[0].mapPoint.spatialReference, o2 = this._hasValidSpatialReference;
    this._georeference.controlPoints = this._controlPointEditGeometryOperations.map((r3, s2) => {
      const n3 = r3.data.geometry;
      return this._controlPointGraphics[s2].geometry = n3, { mapPoint: b$1(n3, i2), sourcePoint: o2 ? e2[s2].sourcePoint : t2.toSource(n3) };
    });
  }
  updateActiveHandle(t2) {
    if (this.activeHandle === t2)
      return;
    const e2 = this._controlPointGraphics[this.activeHandle].symbol.clone();
    I(e2, this.view.effectiveTheme.accentColor), this._controlPointGraphics[this.activeHandle].symbol = e2;
    const i2 = this._controlPointGraphics[t2].symbol.clone();
    I(i2, k), this._controlPointGraphics[t2].symbol = i2, this.activeHandle = t2, this.view.surface === document.activeElement && this.highlightActiveHandle();
  }
  async highlightActiveHandle() {
    this.removeHighlightActiveHandle();
    const t2 = await this.view.whenLayerView(this._graphicsLayer);
    this._highlightHandle = t2.highlight(this._controlPointGraphics[this.activeHandle]);
  }
  removeHighlightActiveHandle() {
    this._highlightHandle && this._highlightHandle.remove();
  }
  setSharedUndoStack(t2) {
    this._sharedUndoStack = t2;
  }
  setSharedRedoStack(t2) {
    this._sharedRedoStack = t2;
  }
  async _initialize() {
    const { view: t2, mediaElement: e2 } = this;
    if (null == e2.georeference)
      return;
    const o2 = e2.georeference;
    "control-points" === o2.type && null != o2.coords && (this._georeference = o2, this._initialControlPoints = this._georeference.controlPoints, t2.map.addMany([this._graphicsLayer]), t2.focus(), this.visible = false, this.finishToolCreation(), await this._loadProjectionEngine(), this._controlPointEditGeometryOperations = this._georeference.controlPoints.map(({ mapPoint: e3 }) => V.fromGeometry(b$1(e3, t2.spatialReference), l$2.Local)), this._controlPointGraphics = this._controlPointEditGeometryOperations.map((t3, e3) => new c$1({ symbol: new d$1({ data: { type: "CIMSymbolReference", symbol: { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, colorLocked: true, anchorPoint: { x: 0, y: -15.75 }, anchorPointUnits: "Absolute", dominantSizeAxis3D: "Y", size: 9, billboardMode3D: "FaceNearPlane", frame: { xmin: 0, ymin: 0, xmax: 84.3, ymax: 84.3 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { rings: [[[83.2, 32.5], [84.3, 40.7], [83.8, 48.9], [81.7, 56.9], [78.1, 64.3], [73, 70.9], [66.9, 76.4], [59.7, 80.5], [51.9, 83.2], [43.7, 84.3], [35.4, 83.8], [27.4, 81.7], [20, 78], [13.4, 73], [7.9, 66.8], [3.8, 59.7], [1.1, 51.9], [0, 43.7], [0.5, 35.4], [2.6, 27.4], [6.3, 20], [11.3, 13.4], [17.5, 7.9], [24.7, 3.8], [32.5, 1.1], [39.8, 0.1], [47.1, 0.3], [54.3, 1.8], [61.1, 4.5], [67.4, 8.4], [72.9, 13.3], [77.4, 19.1], [80.9, 25.5], [83.2, 32.5]]] }, symbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: [255, 255, 255, 255] }] } }], scaleSymbolsProportionally: true, respectFrame: true, clippingPath: { type: "CIMClippingPath", clippingType: "Intersect", path: { rings: [[[0, 0], [84.3, 0], [84.3, 84.3], [0, 84.3], [0, 0]]] } }, rotation: 0 }, { type: "CIMVectorMarker", enable: true, anchorPoint: { x: 0, y: -11.25 }, anchorPointUnits: "Absolute", dominantSizeAxis3D: "Y", size: 22.5, billboardMode3D: "FaceNearPlane", frame: { xmin: 0, ymin: 0, xmax: 197.7, ymax: 294.7 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { rings: [[[98.9, 0], [119.4, 23.2], [139.4, 49.3], [156.8, 75.2], [171.2, 100.8], [182.4, 125.3], [190.6, 148.8], [195.7, 171.4], [197.7, 192.9], [197.7, 195.8], [197.7, 200.3], [197.6, 202.5], [197.5, 204.8], [197.3, 207.1], [197, 209.4], [196.7, 211.7], [196.4, 214.1], [196, 216.4], [195.5, 218.7], [195, 221.1], [194.4, 223.4], [193.7, 225.8], [193, 228.1], [192.2, 230.5], [191.4, 232.8], [190.5, 235.1], [189.5, 237.5], [188.5, 239.7], [187.4, 242], [186.2, 244.3], [185, 246.5], [183.7, 248.7], [182.4, 250.9], [181, 253.1], [179.5, 255.2], [178, 257.3], [176.4, 259.4], [174.7, 261.4], [173.1, 263.3], [171.3, 265.3], [169.5, 267.2], [167.7, 269], [165.8, 270.8], [163.9, 272.5], [161.9, 274.2], [159.9, 275.8], [157.8, 277.4], [155.7, 278.9], [153.6, 280.4], [151.4, 281.7], [149.2, 283.1], [147, 284.4], [144.8, 285.6], [142.5, 286.7], [140.3, 287.8], [138, 288.8], [135.7, 289.8], [133.4, 290.7], [131, 291.5], [128.7, 292.3], [126.4, 293], [124, 293.6], [121.7, 294.2], [119.4, 294.7], [117, 295.2], [114.7, 295.6], [112.4, 296], [110.1, 296.3], [107.8, 296.5], [105.5, 296.7], [103.3, 296.8], [101.1, 296.9], [98.8, 296.9], [83.1, 295.7], [67.8, 292], [53.3, 285.9], [39.9, 277.5], [28.1, 267.2], [18, 255.1], [10, 241.5], [4.2, 226.9], [0.9, 211.5], [0, 195.8], [0.1, 192.9], [2.1, 171.4], [7.2, 148.8], [15.4, 125.3], [26.6, 100.8], [41, 75.2], [58.4, 49.3], [78.4, 23.2], [98.9, 0]]] }, symbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: e3 === this.activeHandle ? k.toArray() : this.view.effectiveTheme.accentColor.toArray() }] } }], scaleSymbolsProportionally: true, respectFrame: true, clippingPath: { type: "CIMClippingPath", clippingType: "Intersect", path: { rings: [[[0, 0], [197.7, 0], [197.7, 294.7], [0, 294.7], [0, 0]]] } }, rotation: 0 }], haloSize: 1, scaleX: 1, angleAlignment: "Display", angle: 0 } } }), geometry: t3.data.geometry })), this._graphicsLayer.graphics.addMany([...this._controlPointGraphics]), this._controlPointManipulations = this._controlPointGraphics.map((e3) => new n$2({ tool: this, view: t2, graphic: e3 })), this.addHandles([...this._controlPointManipulations.map((t3, e3) => t3.createDragPipeline(this._getInfo.bind(this, e3), (t4, i2) => {
      "start" === t4.action && (this._undoStack.push(e3), this._redoStack = [], this._sharedUndoStack.push({ tool: this, operation: i2 }), this._sharedRedoStack.length = 0), this.updateGraphics();
    })), d$2(() => this.view.scale, () => this.active ? this.updateGraphics() : null)]), this._controlPointManipulations.forEach((t3, e3) => {
      const i2 = (t4) => {
        this.addHandles([t4.events.on(["click", "grab-changed"], (t5) => this.updateActiveHandle(e3))]);
      };
      t3.forEachManipulator(i2);
    }), this.addHandles([t2.on("key-down", (i2) => {
      t2.activeTool === this && (i2.key !== P.shift || i2.repeat || (this._isModifierActive = true, i2.stopPropagation()), i2.key !== P.toggleOpacity || i2.repeat || (e2.opacity *= this._isOpacityToggled ? 2 : 0.5, this._isOpacityToggled = !this._isOpacityToggled, i2.stopPropagation()), i2.key !== P.primaryKey || i2.repeat || (this._factor = S$1, i2.stopPropagation()), this._isModifierActive && (i2.key === P.up && (this._move(0, this._factor), i2.stopPropagation()), i2.key === P.down && (this._move(0, -this._factor), i2.stopPropagation()), i2.key === P.left && (this._move(-this._factor, 0), i2.stopPropagation()), i2.key === P.right && (this._move(this._factor, 0), i2.stopPropagation())));
    }), t2.on("key-up", (e3) => {
      t2.activeTool === this && (e3.key === P.shift && (this._isModifierActive = false, e3.stopPropagation()), e3.key === P.primaryKey && (this._factor = v, e3.stopPropagation()));
    })]));
  }
  async _loadProjectionEngine() {
    const t2 = this._georeference.controlPoints[0].mapPoint;
    return F$1(t2.spatialReference, this.view.spatialReference);
  }
  _getInfo(t2) {
    return { editGeometryOperations: this._controlPointEditGeometryOperations[t2], constraints: this._hasValidSpatialReference ? null : { xmin: 0, ymin: 0, xmax: this._georeference.width, ymax: this._georeference.height } };
  }
  _move(t2, e2) {
    const i2 = this._controlPointEditGeometryOperations[this.activeHandle], o2 = [];
    for (const s2 of i2.data.components)
      o2.push(...s2.vertices);
    const r3 = i2.moveVertices(o2, t2 * this.view.resolution, e2 * this.view.resolution, 0, E$1.NEW_STEP);
    this._sharedUndoStack.push({ tool: this, operation: r3 }), this._sharedRedoStack.length = 0, this.updateGraphics();
  }
};
e([y$2()], b.prototype, "_hasValidSpatialReference", null), e([y$2()], b.prototype, "activeHandle", void 0), e([y$2({ constructOnly: true, nonNullable: true })], b.prototype, "mediaElement", void 0), e([y$2({ constructOnly: true })], b.prototype, "view", void 0), b = e([c$2("esri.views.2d.interactive.editingTools.ControlPointsTransformTool")], b);
function n$1(t2, e2) {
  "start" === t2.action ? e2.cursor = "grabbing" : e2.cursor = "grab";
}
class s {
  constructor() {
    this._lastDragEvent = null, this.next = new U(), this._enabled = false;
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(t2) {
    if (this._enabled !== t2 && null != this._lastDragEvent) {
      const e2 = { ...this._lastDragEvent, action: "update" };
      t2 && this._adjustScaleFactors(e2), this.next.execute(e2);
    }
    this._enabled = t2;
  }
  createDragEventPipelineStep() {
    return this._lastDragEvent = null, (t2) => (this._lastDragEvent = "end" !== t2.action ? { ...t2 } : null, this._enabled && this._adjustScaleFactors(t2), t2);
  }
  _adjustScaleFactors(t2) {
    const e2 = 0 !== t2.direction[0] && 0 !== t2.direction[1] ? Math.max(Math.abs(t2.factor1), Math.abs(t2.factor2)) : 0 === t2.direction[0] ? Math.abs(t2.factor2) : Math.abs(t2.factor1);
    t2.factor1 = t2.factor1 < 0 ? -e2 : e2, t2.factor2 = t2.factor2 < 0 ? -e2 : e2;
  }
}
class r2 {
  constructor() {
    this._lastDragEvent = null, this.next = new U(), this._enabled = false;
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(t2) {
    if (this._enabled !== t2 && null != this._lastDragEvent) {
      const e2 = { ...this._lastDragEvent, action: "update" };
      t2 && this._adjustRotateAngle(e2), this.next.execute(e2);
    }
    this._enabled = t2;
  }
  createDragEventPipelineStep() {
    return this._lastDragEvent = null, (t2) => (this._lastDragEvent = "end" !== t2.action ? { ...t2 } : null, this._enabled && this._adjustRotateAngle(t2), t2);
  }
  _adjustRotateAngle(a) {
    const n3 = m$1(a.rotateAngle);
    a.rotateAngle = M(5 * Math.round(n3 / 5));
  }
}
class m extends r$1 {
  constructor(i2) {
    super(), this._handles = new e$3(), this._originCache = n$3(), this._view = i2.view, this._tool = i2.tool, this._graphic = i2.graphic, this._snapRotation = i2.snapRotation, this._manipulator = this._createManipulator(), this._handles.add([this._manipulator.events.on("grab-changed", (t2) => n$1(t2, this._manipulator))]), this.forEachManipulator((t2) => this._tool.manipulators.add(t2));
  }
  destroy() {
    this._handles.destroy(), this.forEachManipulator((t2) => {
      this._tool.manipulators.remove(t2), t2.destroy();
    }), this._tool = null, this._view = null, this._manipulator = null, this._snapRotation = null, this._graphic = null, this._handles = null, this._originCache = null;
  }
  forEachManipulator(t$12) {
    t$12(this._manipulator, t.ROTATE);
  }
  createDragPipeline(t2, r3) {
    let e2 = null, o2 = null;
    return d$3(this._manipulator, (a, s2) => {
      s2.next((i2) => {
        if ("start" === i2.action) {
          a.cursor = "grabbing";
          const i3 = t2();
          e2 = i3.plane, o2 = i3.editGeometryOperations;
        }
        return i2;
      }).next(v$1(this._view)).next((t3) => ({ ...t3, rotateAngle: m$2(t3.mapStart, t3.mapEnd, { x: e2.origin[0], y: e2.origin[1] }, true) })).next(this._snapRotation.createDragEventPipelineStep(), this._snapRotation.next).next((t3) => {
        const a2 = r$2(this._originCache, e2.origin), n3 = [];
        for (const i2 of o2.data.components)
          n3.push(...i2.vertices);
        const s3 = "start" === t3.action ? E$1.NEW_STEP : E$1.ACCUMULATE_STEPS, l2 = o2.rotateVertices(n3, a2, t3.rotateAngle, s3, e$4.REPLACE);
        return V$1(l2, e2), r3(t3, l2), t3;
      }).next((t3) => ("end" === t3.action && (a.cursor = "grab"), t3));
    });
  }
  _createManipulator() {
    const t2 = this._view, i2 = this._graphic;
    return new S$3({ view: t2, graphic: i2, selectable: true, cursor: "grab" });
  }
}
const E = 10, S = 1e-6, j = 0.3;
function y(t2) {
  const i2 = s$2(t2.basis1), e2 = s$2(t2.basis2);
  return j * Math.min(i2, e2);
}
class w extends r$1 {
  constructor(i2) {
    super(), this._handles = new e$3(), this._planeStart = W$2(), this._displayPlaneStart = W$2(), this._originCache = n$3(), this._axisCache = n$4(), this._renderStartCache = n$3(), this._renderEndCache = n$3(), this._resizeOriginCache = n$3(), this._view = i2.view, this._tool = i2.tool, this._graphic = i2.graphic, this._direction = i2.direction, this._preserveAspectRatio = i2.preserveAspectRatio, this._manipulator = this._createManipulator(), this._handles.add([this._manipulator.events.on("grab-changed", (t2) => n$1(t2, this._manipulator))]), this.forEachManipulator((t2) => this._tool.manipulators.add(t2));
  }
  destroy() {
    this._handles.destroy(), this.forEachManipulator((t2) => {
      this._tool.manipulators.remove(t2), t2.destroy();
    }), this._tool = null, this._view = null, this._graphic = null, this._manipulator = null, this._direction = null, this._handles = null, this._planeStart = null, this._displayPlaneStart = null, this._originCache = null, this._axisCache = null, this._renderStartCache = null, this._renderEndCache = null, this._resizeOriginCache = null, this._preserveAspectRatio = null;
  }
  forEachManipulator(t$12) {
    t$12(this._manipulator, t.SCALE);
  }
  createDragPipeline(t2, s2) {
    let c2 = null, h2 = null, _2 = null, d2 = 0, m2 = null, g = null;
    const j2 = this._planeStart, w2 = this._displayPlaneStart, P2 = this._direction;
    return d$3(this._manipulator, (f, M2) => {
      M2.next((i2) => {
        if ("start" === i2.action) {
          f.cursor = "grabbing";
          const i3 = t2();
          c2 = i3.plane, h2 = i3.displayPlane, _2 = i3.editGeometryOperations, d2 = E * this._view.resolution, Z(c2, j2), Z(h2, w2);
          const e2 = G$1(_2.data.spatialReference);
          m2 = e2 ? e2.valid[1] - e2.valid[0] - 3 * E * this._view.resolution : null;
        }
        return i2;
      }).next(v$1(this._view)).next((t3) => {
        const i2 = r$2(this._renderStartCache, [t3.mapStart.x, t3.mapStart.y, 0]), e2 = r$2(this._renderEndCache, [t3.mapEnd.x, t3.mapEnd.y, 0]), s3 = r$2(this._resizeOriginCache, w2.origin);
        q$1(s3, s3, w2.basis1, -P2[0]), q$1(s3, s3, w2.basis2, -P2[1]), e$5(e2, e2, s3), e$5(i2, i2, s3);
        const c3 = 0 !== P2[0] && 0 !== P2[1], p2 = y(w2), u2 = y(h2) / p2, _3 = (t4, s4) => {
          if (0 === t4)
            return 1;
          let a = s$2(s4), n3 = 0.5 * t4 * P$2(s4, e2) / a;
          const o2 = n3 < 0 ? -1 : 1;
          if (c3) {
            n3 += (a - 0.5 * t4 * P$2(s4, i2) / a) * o2 * u2;
          }
          const h3 = a < 1.5 * d2 ? 1 : S;
          return a = Math.max(a - d2, S), o2 > 0 && (n3 -= E * this._view.resolution), o2 * Math.max(o2 * (n3 / a), h3);
        }, m3 = _3(P2[0], w2.basis1), f2 = _3(P2[1], w2.basis2);
        return { ...t3, direction: P2, factor1: m3, factor2: f2 };
      }).next(this._preserveAspectRatio.createDragEventPipelineStep(), this._preserveAspectRatio.next).next((t3) => {
        const r3 = r$2(this._originCache, j2.origin);
        q$1(r3, r3, j2.basis1, -P2[0]), q$1(r3, r3, j2.basis2, -P2[1]);
        const o2 = r$3(this._axisCache, j2.basis1[0], j2.basis1[1]);
        v$2(o2, o2);
        const l2 = [];
        for (const i2 of _2.data.components)
          l2.push(...i2.vertices);
        const h3 = "start" === t3.action ? E$1.NEW_STEP : E$1.ACCUMULATE_STEPS, u2 = _2.scaleVertices(l2, r3, o2, t3.factor1, t3.factor2, h3, e$4.REPLACE);
        return m2 && m2 < _2.data.geometry.extent.width && g ? _2.updateVertices(l2, g) : (Z(j2, c2), V$1(u2, c2), g = u2.operation, s2(t3, u2)), t3;
      }).next((t3) => ("end" === t3.action && (f.cursor = "grab"), t3));
    });
  }
  _createManipulator() {
    return new S$3({ view: this._view, graphic: this._graphic, selectable: true, cursor: "grab" });
  }
}
const N = { up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", plus: "+", minus: "-", toggleOpacity: "t", shift: "Shift", primaryKey: e$2 }, W = 80, q = 10, F = 30, J = [[1, 1], [1, -1], [-1, -1], [-1, 1], [1, 0], [0, -1], [-1, 0], [0, 1]], Q = 1, X = 10;
let Y = class extends l$1 {
  constructor(e2) {
    super(e2), this._initialControlPoints = null, this._initialGeometry = null, this._graphic = null, this._planeCache = W$2(), this._displayPlaneCache = W$2(), this._mainAxisCache = n$4(), this._rotationHandleCache = n$3(), this._cornerA = n$3(), this._cornerB = n$3(), this._cornerC = n$3(), this._cornerD = n$3(), this._avgAB = n$3(), this._avgBC = n$3(), this._avgCD = n$3(), this._avgDA = n$3(), this._preserveAspectRatio = new s(), this._snapRotation = new r2(), this._graphicsLayer = new h({ internal: true, listMode: "hide", visible: false }), this._sharedUndoStack = [], this._sharedRedoStack = [], this._isOpacityToggled = false, this._isModifierActive = false, this._factor = 1, this.preserveAspectRatio = null, this.snapRotation = null;
  }
  initialize() {
    this._initialize();
  }
  destroy() {
    const { map: e2 } = this.view;
    this._dragManipulation.destroy(), this._rotateManipulation.destroy(), this._scaleManipulations.forEach((e3) => e3.destroy()), this._editGeometryOperations.destroy(), e2.removeMany([this._graphicsLayer]), this._graphicsLayer.removeAll(), this._graphicsLayer = u$1(this._graphicsLayer), this._initialControlPoints = null, this._initialGeometry = null, this._graphic = null, this._preserveAspectRatio = null, this._snapRotation = null, this._planeCache = null, this._displayPlaneCache = null, this._rotationHandleCache = null, this._mainAxisCache = null, this._cornerA = null, this._cornerB = null, this._cornerC = null, this._cornerD = null, this._avgAB = null, this._avgBC = null, this._avgCD = null, this._avgDA = null, this._sharedUndoStack = null, this._sharedRedoStack = null;
  }
  get _plane() {
    const e2 = this._graphic.geometry;
    if (null == e2)
      return null;
    const t2 = this._editGeometryOperations.data, i2 = t2.components[0].edges[0], s2 = o(this._mainAxisCache, i2.leftVertex.pos, i2.rightVertex.pos);
    v$2(s2, s2);
    let o$1 = W * this.view.resolution;
    const a = this.view.spatialReference;
    return d$4(a, e2.spatialReference) && (o$1 *= z(a) / z(e2.spatialReference)), l$3(s2, t2, o$1, this._planeCache);
  }
  get _displayPlane() {
    const e2 = this._plane;
    if (!e2)
      return null;
    const t2 = this._displayPlaneCache;
    Z(e2, t2);
    const i2 = q * this.view.resolution;
    return g$1(t2.basis1, t2.basis1, 1 + i2 / s$2(t2.basis1)), g$1(t2.basis2, t2.basis2, 1 + i2 / s$2(t2.basis2)), t2;
  }
  get _backgroundGraphicGeometry() {
    const e2 = this._displayPlane;
    if (!e2)
      return null;
    const t2 = this.view.spatialReference;
    return this._updateDisplayPlaneConrers(e2), new j$1({ spatialReference: t2, rings: [[this._cornerA, this._cornerB, this._cornerC, this._cornerD, this._cornerA]] });
  }
  get _rotateGraphicGeometry() {
    const e2 = this._plane;
    if (!e2)
      return null;
    const t2 = this._rotationHandleCache;
    return z$1(t2, e2.basis1), g$1(t2, t2, F * this.view.resolution), u$3(t2, t2, e2.origin), u$3(t2, t2, e2.basis1), new x$1({ x: t2[0], y: t2[1], spatialReference: this.view.spatialReference });
  }
  get _scaleGraphicGeometries() {
    const e2 = this._displayPlane;
    if (!e2)
      return [];
    const t2 = this.view.spatialReference;
    this._updateDisplayPlaneConrers(e2);
    const { _cornerA: i2, _cornerB: s2, _cornerC: o2, _cornerD: r3 } = this, a = A(this._avgAB, i2, s2, 0.5), n3 = A(this._avgBC, s2, o2, 0.5), h2 = A(this._avgCD, o2, r3, 0.5), c2 = A(this._avgDA, r3, i2, 0.5);
    return [new x$1({ x: i2[0], y: i2[1], spatialReference: t2 }), new x$1({ x: s2[0], y: s2[1], spatialReference: t2 }), new x$1({ x: o2[0], y: o2[1], spatialReference: t2 }), new x$1({ x: r3[0], y: r3[1], spatialReference: t2 }), new x$1({ x: a[0], y: a[1], spatialReference: t2 }), new x$1({ x: n3[0], y: n3[1], spatialReference: t2 }), new x$1({ x: h2[0], y: h2[1], spatialReference: t2 }), new x$1({ x: c2[0], y: c2[1], spatialReference: t2 })];
  }
  onActivate() {
    this.visible = true;
  }
  onDeactivate() {
    this.visible = false;
  }
  onShow() {
    this._graphicsLayer.visible = true;
  }
  onHide() {
    this._graphicsLayer.visible = false;
  }
  canUndo() {
    return this._editGeometryOperations.canUndo;
  }
  canRedo() {
    return this._editGeometryOperations.canRedo;
  }
  undo() {
    this._editGeometryOperations.undo(), this.updateGraphics();
  }
  redo() {
    this._editGeometryOperations.redo(), this.updateGraphics();
  }
  refresh() {
    const { view: e2, target: t2 } = this, i2 = "georeference" in t2 ? t2.georeference.coords : t2.geometry, s2 = this._editGeometryOperations, o2 = s2.data.components[0].vertices, r3 = p.fromGeometry(b$1(i2, e2.spatialReference), l$2.Local).components[0].vertices;
    o2.forEach((e3, t3) => {
      s2.setVertexPosition(e3, r3[t3].pos);
    }), this.updateGraphics();
  }
  reset() {
    const { target: e2 } = this;
    if ("georeference" in e2) {
      const t2 = e2.georeference;
      "control-points" === t2.type && (t2.controlPoints = this._initialControlPoints);
    } else
      e2.geometry = this._initialGeometry;
    this.refresh(), this._sharedUndoStack.length = 0, this._sharedRedoStack.length = 0;
  }
  updateGraphics() {
    const e2 = this._editGeometryOperations.data.geometry;
    if ("georeference" in this.target) {
      this.target.georeference.coords = e2;
    }
    this._graphic.geometry = e2, this._backgroundGraphic.geometry = this._backgroundGraphicGeometry, this._rotateGraphic.geometry = this._rotateGraphicGeometry, this._scaleGraphicGeometries.forEach((e3, t2) => {
      this._scaleGraphics[t2].geometry = e3;
    });
  }
  setSharedUndoStack(e2) {
    this._sharedUndoStack = e2;
  }
  setSharedRedoStack(e2) {
    this._sharedRedoStack = e2;
  }
  async _initialize() {
    const { view: e2, target: s2 } = this;
    if ("georeference" in s2) {
      const e3 = s2.georeference;
      this._graphic = new c$1({ geometry: e3.coords }), this._initialControlPoints = "control-points" === e3.type ? e3.controlPoints : null;
    } else
      this._graphic = s2, this._initialGeometry = s2.geometry;
    e2.map.addMany([this._graphicsLayer]), e2.focus(), this.visible = false, this.finishToolCreation(), await this._loadProjectionEngine(), this._editGeometryOperations = V.fromGeometry(b$1(this._graphic.geometry, e2.spatialReference), l$2.Local), this._backgroundGraphic = new c$1({ symbol: new S$4({ color: "transparent", outline: { type: "simple-line", color: e2.effectiveTheme.accentColor, width: 2 } }), geometry: this._backgroundGraphicGeometry }), this._rotateGraphic = new c$1({ symbol: new y$1({ color: G$2(e2.effectiveTheme.accentColor), outline: { type: "simple-line", color: e2.effectiveTheme.accentColor, width: 1 } }), geometry: this._rotateGraphicGeometry }), this._scaleGraphics = this._scaleGraphicGeometries.map((s3) => new c$1({ symbol: new y$1({ size: 6, style: "square", color: G$2(e2.effectiveTheme.accentColor), outline: { type: "simple-line", color: e2.effectiveTheme.accentColor, width: 1 } }), geometry: s3 })), this._graphicsLayer.graphics.addMany([this._backgroundGraphic, this._rotateGraphic, ...this._scaleGraphics]), this._dragManipulation = new n$2({ tool: this, view: e2, graphic: this._graphic }), this._rotateManipulation = new m({ tool: this, view: e2, graphic: this._rotateGraphic, snapRotation: this._snapRotation }), this._scaleManipulations = this._scaleGraphics.map((t2, i2) => new w({ tool: this, view: e2, graphic: t2, direction: J[i2], preserveAspectRatio: this._preserveAspectRatio })), this.addHandles([this._dragManipulation.createDragPipeline(this._getInfo.bind(this), this._updateGraphics.bind(this)), this._rotateManipulation.createDragPipeline(this._getInfo.bind(this), this._updateGraphics.bind(this)), ...this._scaleManipulations.map((e3) => e3.createDragPipeline(this._getInfo.bind(this), this._updateGraphics.bind(this))), d$2(() => this.view.scale, () => this.active ? this.updateGraphics() : null), e2.on("click", async (t2) => {
      if (null != e2.activeTool && e2.activeTool !== this)
        return;
      const i2 = n$5(t2), o2 = [];
      e2.map.allLayers.forEach((e3) => {
        "vector-tile" !== e3.type && "imagery" !== e3.type || o2.push(e3);
      });
      const r4 = await this.view.hitTest(i2, { exclude: o2 }), a = r4.results;
      if (0 === a.length)
        e2.activeTool = null;
      else {
        const t3 = r$4(r4.results), i3 = "georeference" in s2, o3 = a.map((e3) => "media" === e3.type ? e3.element : null).filter(Boolean), n3 = new Set([...this._graphicsLayer.graphics, i3 ? null : s2].filter(Boolean));
        i3 && o3.includes(s2) || null != t3 && n3.has(t3.graphic) ? null == e2.activeTool && (e2.activeTool = this) : e2.activeTool = null;
      }
    })]);
    const r3 = (e3) => {
      this.addHandles(e3.events.on("grab-changed", (e4) => {
        "georeference" in s2 && ("start" === e4.action ? s2.opacity *= 0.5 : "end" === e4.action && (s2.opacity *= 2));
      }));
    };
    this._dragManipulation.forEachManipulator(r3), this._rotateManipulation.forEachManipulator(r3), this._scaleManipulations.forEach((e3) => e3.forEachManipulator(r3)), this.addHandles([e2.on("key-down", (t2) => {
      e2.activeTool === this && (t2.key !== N.shift || t2.repeat || (null == this.preserveAspectRatio && (this._preserveAspectRatio.enabled = !this._preserveAspectRatio.enabled), null == this.snapRotation && (this._snapRotation.enabled = !this._snapRotation.enabled), this._isModifierActive = true, t2.stopPropagation()), t2.key !== N.toggleOpacity || t2.repeat || ("georeference" in s2 && (s2.opacity *= this._isOpacityToggled ? 2 : 0.5, this._isOpacityToggled = !this._isOpacityToggled), t2.stopPropagation()), t2.key !== N.primaryKey || t2.repeat || (this._factor = X, t2.stopPropagation()), this._isModifierActive && (t2.key === N.plus && (this._scale(this._factor), t2.stopPropagation()), t2.key === N.minus && (this._scale(-this._factor), t2.stopPropagation()), t2.key === N.up && (this._move(0, this._factor), t2.stopPropagation()), t2.key === N.down && (this._move(0, -this._factor), t2.stopPropagation()), t2.key === N.left && (this._move(-this._factor, 0), t2.stopPropagation()), t2.key === N.right && (this._move(this._factor, 0), t2.stopPropagation())));
    }), e2.on("key-up", (t2) => {
      e2.activeTool === this && (t2.key === N.shift && (null == this.preserveAspectRatio && (this._preserveAspectRatio.enabled = !this._preserveAspectRatio.enabled), null == this.snapRotation && (this._snapRotation.enabled = !this._snapRotation.enabled), this._isModifierActive = false, t2.stopPropagation()), t2.key === N.primaryKey && (this._factor = Q, t2.stopPropagation()));
    })]);
  }
  async _loadProjectionEngine() {
    const e2 = this._graphic.geometry;
    return F$1(e2.spatialReference, this.view.spatialReference);
  }
  _updateDisplayPlaneConrers(e2) {
    const { basis1: t2, basis2: i2, origin: s2 } = e2, o2 = this._cornerA;
    u$3(o2, s2, t2), u$3(o2, o2, i2);
    const r3 = this._cornerB;
    u$3(r3, s2, t2), e$5(r3, r3, i2);
    const a = this._cornerC;
    e$5(a, s2, t2), e$5(a, a, i2);
    const n3 = this._cornerD;
    e$5(n3, s2, t2), u$3(n3, n3, i2);
  }
  _getInfo() {
    return { editGeometryOperations: this._editGeometryOperations, plane: this._plane, displayPlane: this._displayPlane };
  }
  _updateGraphics(e2, t2) {
    "start" === e2.action && (this._sharedUndoStack.push({ tool: this, operation: t2 }), this._sharedRedoStack.length = 0), this.updateGraphics();
  }
  _scale(e2) {
    const t2 = this._editGeometryOperations, i2 = [];
    for (const a of t2.data.components)
      i2.push(...a.vertices);
    const s2 = t2.data.geometry.extent?.width, o2 = (s2 + e2 * this.view.resolution) / s2, r3 = t2.scaleVertices(i2, this._plane.origin, l$4, o2, o2, E$1.NEW_STEP, e$4.REPLACE);
    this._sharedUndoStack.push({ tool: this, operation: r3 }), this._sharedRedoStack.length = 0, this.updateGraphics();
  }
  _move(e2, t2) {
    const i2 = this._editGeometryOperations, s2 = [];
    for (const r3 of i2.data.components)
      s2.push(...r3.vertices);
    const o2 = i2.moveVertices(s2, e2 * this.view.resolution, t2 * this.view.resolution, 0, E$1.NEW_STEP);
    this._sharedUndoStack.push({ tool: this, operation: o2 }), this._sharedRedoStack.length = 0, this.updateGraphics();
  }
};
e([y$2()], Y.prototype, "_plane", null), e([y$2()], Y.prototype, "_backgroundGraphicGeometry", null), e([y$2()], Y.prototype, "_rotateGraphicGeometry", null), e([y$2()], Y.prototype, "_scaleGraphicGeometries", null), e([y$2()], Y.prototype, "preserveAspectRatio", void 0), e([y$2()], Y.prototype, "snapRotation", void 0), e([y$2({ constructOnly: true, nonNullable: true })], Y.prototype, "target", void 0), e([y$2({ constructOnly: true })], Y.prototype, "view", void 0), Y = e([c$2("esri.views.2d.interactive.editingTools.TransformTool")], Y);
const n2 = { redo: "r", undo: "z" };
let d = class extends g$2 {
  constructor(o2) {
    super(o2), this._transformTool = null, this._controlPointsTransformTool = null, this._advancedModeTransformTool = null, this._activeTool = null, this._sharedUndoStack = [], this._sharedRedoStack = [], this._originalOpacity = null, this.activeHandle = 0;
  }
  initialize() {
    const { view: o2, mediaElement: t2, preserveAspectRatio: s2, snapRotation: i2, advancedMode: d2 } = this;
    this._originalOpacity = t2.opacity, this._transformTool = new Y({ target: t2, view: o2, preserveAspectRatio: s2, snapRotation: i2 }), this._controlPointsTransformTool = new b({ mediaElement: t2, view: o2 }), this._advancedModeTransformTool = new b({ mediaElement: d2.mediaElement, view: d2.view }), this._transformTool.setSharedUndoStack(this._sharedUndoStack), this._transformTool.setSharedRedoStack(this._sharedRedoStack), this._controlPointsTransformTool.setSharedUndoStack(this._sharedUndoStack), this._controlPointsTransformTool.setSharedRedoStack(this._sharedRedoStack), this._advancedModeTransformTool.setSharedUndoStack(this._sharedUndoStack), this._advancedModeTransformTool.setSharedRedoStack(this._sharedRedoStack);
    const l2 = t2.georeference, c2 = d2.mediaElement.georeference;
    d2.view.tools.addMany([this._advancedModeTransformTool]), "controlPoints" in c2 && "controlPoints" in l2 && this.addHandles([d2.view.on("key-down", (o3) => {
      o3.key === n2.undo && this.canUndo() && (this.undo(), o3.stopPropagation()), o3.key === n2.redo && this.canRedo() && (this.redo(), o3.stopPropagation());
    }), d2.view.on("focus", async (o3) => {
      this._controlPointsTransformTool.removeHighlightActiveHandle(), this._advancedModeTransformTool.highlightActiveHandle();
    }), d$2(() => c2.controlPoints, (o3) => {
      l2.controlPoints = o3.map(({ sourcePoint: o4 }, t3) => ({ sourcePoint: o4, mapPoint: l2.controlPoints[t3].mapPoint })), this._activeTool?.refresh();
    }), d$2(() => this._controlPointsTransformTool.activeHandle, (o3) => {
      this._advancedModeTransformTool.updateActiveHandle(o3), this.activeHandle = o3;
    }), d$2(() => this._advancedModeTransformTool.activeHandle, (o3) => {
      this._controlPointsTransformTool.updateActiveHandle(o3), this.activeHandle = o3;
    })]), this.addHandles([o2.on("key-down", (o3) => {
      o3.key === n2.undo && this.canUndo() && (this.undo(), o3.stopPropagation()), o3.key === n2.redo && this.canRedo() && (this.redo(), o3.stopPropagation());
    }), o2.on("focus", async (o3) => {
      this._advancedModeTransformTool.removeHighlightActiveHandle(), this._controlPointsTransformTool.highlightActiveHandle();
    })]), o2.tools.addMany([this._transformTool, this._controlPointsTransformTool]), o2.activeTool = this._transformTool, this._activeTool = this._transformTool, o2.focus();
  }
  destroy() {
    this._transformTool?.destroy(), this._controlPointsTransformTool?.destroy(), this._transformTool = null, this._controlPointsTransformTool = null, this._advancedModeTransformTool = null, this._activeTool = null, this._sharedUndoStack = null, this._sharedRedoStack = null;
  }
  canUndo() {
    return this._sharedUndoStack.length > 0;
  }
  canRedo() {
    return this._sharedRedoStack.length > 0;
  }
  undo() {
    if (this._sharedUndoStack.length > 0) {
      const { tool: o2, operation: t2 } = this._sharedUndoStack.pop();
      o2 !== this._activeTool && o2.refresh(), t2.undo(), o2.updateGraphics(), this._sharedRedoStack.push({ tool: o2, operation: t2 }), this._activeTool !== o2 && this._activeTool?.refresh();
    }
  }
  redo() {
    if (this._sharedRedoStack.length > 0) {
      const { tool: o2, operation: t2 } = this._sharedRedoStack.pop();
      o2 !== this._activeTool && o2.refresh(), t2.apply(), o2.updateGraphics(), this._sharedUndoStack.push({ tool: o2, operation: t2 }), this._activeTool !== o2 && this._activeTool?.refresh();
    }
  }
  refresh() {
    this._activeTool.refresh();
  }
  reset() {
    this._activeTool.reset(), this._advancedModeTransformTool.reset();
  }
  async enableAdvancedMode() {
    this.view.activeTool = this._controlPointsTransformTool, this._activeTool = this._controlPointsTransformTool, this._activeTool.refresh(), await this.advancedMode.view.when(), this.advancedMode.view.activeTool = this._advancedModeTransformTool, this._originalOpacity = this._controlPointsTransformTool.mediaElement.opacity, this._controlPointsTransformTool.mediaElement.opacity = 0.25 * this._originalOpacity;
  }
  disableAdvancedMode() {
    this.view.activeTool = this._transformTool, this._activeTool = this._transformTool, this._activeTool.refresh(), this.advancedMode.view.activeTool = null, this._controlPointsTransformTool.mediaElement.opacity = this._originalOpacity;
  }
};
e([y$2()], d.prototype, "activeHandle", void 0), e([y$2({ constructOnly: true })], d.prototype, "advancedMode", void 0), e([y$2()], d.prototype, "preserveAspectRatio", void 0), e([y$2()], d.prototype, "snapRotation", void 0), e([y$2({ constructOnly: true, nonNullable: true })], d.prototype, "mediaElement", void 0), e([y$2({ constructOnly: true })], d.prototype, "view", void 0), d = e([c$2("esri.views.2d.interactive.editingTools.MediaTransformToolsWrapper")], d);
export {
  b as ControlPointsTransformTool,
  G as DrawGraphicTool2D,
  d as MediaTransformToolsWrapper,
  Y as TransformTool
};
