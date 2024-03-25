import { aV as e$1, aX as y$1, a_ as c$1, bZ as S$1, sA as n$2, gl as m$1, l9 as i, fV as c$2, sB as T$1, sC as l, sD as w, ek as j, sE as j$1, sF as h$2, g2 as a, ds as o$1, sG as l$1, gm as l$2, dG as h$3, ce as d$3, sH as i$1, c8 as u$2, o3 as L, sI as n$3, bJ as c$3, cm as e$2, sJ as F$1, sK as L$1, sL as v$3, sM as T$2, sN as b, sO as j$2, sP as R, sQ as a$1, sR as d$4, sS as M, sT as x, sU as U, sV as w$1, sW as s, sX as m$3, cl as A$1, sY as t$1, sZ as t$2, s_ as e$3, s$ as c$5, aE as r$2, aG as u$4, t0 as J$1, t1 as k, l4 as l$3, nQ as g, t2 as k$1, qk as W$1, iy as o$2, qD as t$3, t3 as j$3, t4 as f, t5 as M$1, gc as e$4, nG as u$5, nH as l$4 } from "./chunk-ejFG4zJ0.js";
import { r as r$1, u as u$1 } from "./chunk-IhjTEMBX.js";
import { u as u$3 } from "./chunk-Dwvm8fnS.js";
import { c as c$4, m as m$2, R as R$1, v as v$4 } from "./chunk-MIHgBujt.js";
function e(e2, l2) {
  switch (e2) {
    case "point":
    case "multipoint":
      return n$1();
    case "polyline":
      return t(l2);
    case "polygon":
      return o(l2);
    default:
      return;
  }
}
function n$1(e2) {
  return "point";
}
function t(e2) {
  return (null != e2 && "polyline" === e2.type && e2.paths.length ? e2.paths[0].length : 0) < 2 ? "polylineZeroVertices" : "polylineOneVertex";
}
function o(e2) {
  const n2 = null != e2 && "polygon" === e2.type && e2.rings.length ? e2.rings[0].length : 0;
  return n2 < 3 ? "polylineZeroVertices" : n2 < 4 ? "polygonOneVertex" : "polygonTwoVertices";
}
let p$1 = class p extends S$1 {
  constructor(t2) {
    super(t2), this.actual = null, this.committed = null, this.id = n$2(), this.inputValue = null, this.readOnly = false, this.unlockOnVertexPlacement = true, this.visible = true;
  }
  get dirty() {
    return null != this.inputValue;
  }
  get locked() {
    return null != this.committed;
  }
  lock(t2) {
    this.inputValue = null, this.committed = t2 ?? this.actual;
  }
  unlock() {
    this.committed = null, this.inputValue = null;
  }
};
e$1([y$1()], p$1.prototype, "actual", void 0), e$1([y$1()], p$1.prototype, "committed", void 0), e$1([y$1()], p$1.prototype, "createQuantity", void 0), e$1([y$1()], p$1.prototype, "dirty", null), e$1([y$1()], p$1.prototype, "format", void 0), e$1([y$1()], p$1.prototype, "id", void 0), e$1([y$1()], p$1.prototype, "inputValue", void 0), e$1([y$1()], p$1.prototype, "locked", null), e$1([y$1()], p$1.prototype, "name", void 0), e$1([y$1()], p$1.prototype, "readOnly", void 0), e$1([y$1()], p$1.prototype, "suffix", void 0), e$1([y$1()], p$1.prototype, "title", void 0), e$1([y$1()], p$1.prototype, "toInputUnits", void 0), e$1([y$1()], p$1.prototype, "unlockOnVertexPlacement", void 0), e$1([y$1()], p$1.prototype, "visible", void 0), p$1 = e$1([c$1("esri.views.interactive.tooltip.fields.TooltipField")], p$1);
let n = class extends p$1 {
  constructor(t2) {
    super(t2), this.mode = "absolute-height";
  }
  normalizeCtorArgs(t2) {
    const s2 = (t3) => t3.inputUnitInfos.verticalLength.unit;
    return { name: "elevation", actual: m$1, createQuantity: (t3, o2) => i(t3, s2(o2)), toInputUnits: (t3, o2) => c$2(t3, s2(o2)), format: (t3, o2) => o2.formatters.verticalLength(t3), suffix: (t3) => t3.inputUnitInfos.verticalLength.abbreviation, title: (t3) => t3.messages.sketch.elevation, unlockOnVertexPlacement: false, ...t2 };
  }
};
e$1([y$1()], n.prototype, "mode", void 0), n = e$1([c$1("esri.views.interactive.tooltip.fields.TooltipFieldElevation")], n);
const p2 = (i2) => {
  const n2 = (t2) => t2.inputUnitInfos.direction.unit;
  return new p$1({ name: "direction", actual: T$1, createQuantity: (t2, i3) => l(t2, n2(i3), "geographic"), toInputUnits: ({ value: t2, unit: i3, rotationType: a2 }, r) => {
    const o2 = w(l(t2, i3, a2), r.sketchOptions.values.effectiveDirectionMode), c2 = n2(r), u2 = j(o2.value, "degrees", c2);
    return l(u2, c2, "geographic");
  }, format: (t2, { formatters: e2, sketchOptions: i3 }) => {
    const n3 = i3.values.effectiveDirectionMode, a2 = w(t2, n3);
    switch (n3) {
      case j$1.Absolute:
        return e2.direction(a2);
      case j$1.Relative:
        return e2.directionRelative(a2);
      case j$1.RelativeBilateral:
        return e2.directionRelativeBilateral(a2);
    }
  }, suffix: (t2) => t2.inputUnitInfos.direction.abbreviation, title: ({ messages: t2, sketchOptions: e2 }) => {
    switch (e2.values.effectiveDirectionMode) {
      case j$1.Absolute:
        return t2.sketch.direction.absolute;
      case j$1.Relative:
      case j$1.RelativeBilateral:
        return t2.sketch.direction.relative;
    }
  }, ...i2 });
}, m = (t2) => {
  const e2 = (t3) => t3.inputUnitInfos.length.unit;
  return new p$1({ name: "distance", actual: m$1, createQuantity: (t3, i$12) => {
    const a2 = Math.max(t3, 0);
    return i(a2, e2(i$12));
  }, toInputUnits: (t3, i2) => c$2(t3, e2(i2)), format: (t3, e3) => e3.formatters.length(t3), suffix: (t3) => t3.inputUnitInfos.length.abbreviation, title: (t3) => t3.messages.sketch.distance, ...t2 });
}, v$2 = (t2) => new n(t2), d$2 = (t2) => {
  const e2 = (t3) => t3.inputUnitInfos.area.unit;
  return new p$1({ name: "area", actual: h$2, createQuantity: (t3, i2) => a(t3, e2(i2)), toInputUnits: (t3, i2) => c$2(t3, e2(i2)), format: (t3, e3) => e3.formatters.area(t3), suffix: (t3) => t3.inputUnitInfos.area.abbreviation, title: (t3) => t3.messages.sketch.area, ...t2 });
};
let d$1 = class d extends r$1 {
  constructor(t2) {
    super(t2), this.type = "draw-point", this.elevation = v$2();
  }
  get allFields() {
    return [this.elevation];
  }
};
e$1([y$1()], d$1.prototype, "type", void 0), e$1([y$1()], d$1.prototype, "elevation", void 0), e$1([y$1()], d$1.prototype, "allFields", null), e$1([y$1()], d$1.prototype, "helpMessage", void 0), d$1 = e$1([c$1("esri.views.interactive.tooltip.DrawPointTooltipInfo")], d$1);
let c = class extends r$1 {
  constructor(t2) {
    super(t2), this.type = "draw-polyline", this.direction = p2(), this.distance = m({ title: (t3) => t3.messages.sketch.distance }), this.elevation = v$2(), this.totalLength = m({ format: (t3, e2) => e2.formatters.totalLength(t3), title: (t3) => t3.messages.sketch.totalLength, readOnly: true });
  }
  get allFields() {
    return [this.direction, this.distance, this.elevation, this.totalLength];
  }
};
e$1([y$1()], c.prototype, "type", void 0), e$1([y$1()], c.prototype, "direction", void 0), e$1([y$1()], c.prototype, "distance", void 0), e$1([y$1()], c.prototype, "elevation", void 0), e$1([y$1()], c.prototype, "totalLength", void 0), e$1([y$1()], c.prototype, "allFields", null), e$1([y$1()], c.prototype, "helpMessage", void 0), c = e$1([c$1("esri.views.interactive.tooltip.DrawPolylineTooltipInfo")], c);
let y = class extends r$1 {
  constructor(t2) {
    super(t2), this.type = "draw-polygon", this.direction = p2(), this.distance = m({ title: (t3) => t3.messages.sketch.distance }), this.elevation = v$2(), this.area = d$2({ readOnly: true });
  }
  get allFields() {
    return [this.direction, this.distance, this.elevation, this.area];
  }
};
e$1([y$1()], y.prototype, "type", void 0), e$1([y$1()], y.prototype, "distance", void 0), e$1([y$1()], y.prototype, "elevation", void 0), e$1([y$1()], y.prototype, "area", void 0), e$1([y$1()], y.prototype, "allFields", null), e$1([y$1()], y.prototype, "helpMessage", void 0), y = e$1([c$1("esri.views.interactive.tooltip.DrawPolygonTooltipInfo")], y);
let v$1 = class v extends r$1 {
  constructor(t2) {
    super(t2), this.type = "draw-mesh", this.elevation = v$2();
  }
  get allFields() {
    return [this.elevation];
  }
};
e$1([y$1()], v$1.prototype, "type", void 0), e$1([y$1()], v$1.prototype, "elevation", void 0), e$1([y$1()], v$1.prototype, "allFields", null), e$1([y$1()], v$1.prototype, "helpMessage", void 0), v$1 = e$1([c$1("esri.views.interactive.tooltip.DrawMeshTooltipInfo")], v$1);
let h$1 = class h extends r$1 {
  constructor(t2) {
    super(t2), this.type = "draw-rectangle", this.xSize = m$1, this.ySize = m$1, this.area = h$2;
  }
  get allFields() {
    return [];
  }
};
e$1([y$1()], h$1.prototype, "type", void 0), e$1([y$1()], h$1.prototype, "xSize", void 0), e$1([y$1()], h$1.prototype, "ySize", void 0), e$1([y$1()], h$1.prototype, "area", void 0), e$1([y$1()], h$1.prototype, "allFields", null), h$1 = e$1([c$1("esri.views.interactive.tooltip.DrawRectangleTooltipInfo")], h$1);
let u = class extends r$1 {
  constructor(t2) {
    super(t2), this.type = "draw-circle", this.radius = null, this.xSize = null, this.ySize = null, this.area = h$2;
  }
  get allFields() {
    return [];
  }
};
e$1([y$1()], u.prototype, "type", void 0), e$1([y$1()], u.prototype, "radius", void 0), e$1([y$1()], u.prototype, "xSize", void 0), e$1([y$1()], u.prototype, "ySize", void 0), e$1([y$1()], u.prototype, "area", void 0), e$1([y$1()], u.prototype, "allFields", null), u = e$1([c$1("esri.views.interactive.tooltip.DrawCircleTooltipInfo")], u);
class B {
  constructor() {
    this.committedVertices = null, this.cursorVertex = null, this.full = null, this.outline = null, this.cursorEdge = null, this.circle = null, this.rectangle = null;
  }
}
let J = class extends o$1.EventedMixin(l$1) {
  constructor(e2) {
    super(e2), this._graphic = null, this._createOperationGeometry = null, this.defaultZ = 0, this.directionOptions = null, this.geometryType = null, this.hasZ = true, this.geometryToPlace = null, this.mode = null, this.snappingManager = null, this.snapToScene = false, this.sketchOptions = new l$2();
  }
  initialize() {
    this.internalGraphicsLayer = new h$3({ listMode: "hide", internal: true }), this.view.map.layers.add(this.internalGraphicsLayer);
    const e2 = this.drawOperation = this.makeDrawOperation(), { sketchOptions: t2 } = this, o2 = this.view.type;
    this.tooltipInfos = { point: new d$1({ sketchOptions: t2, viewType: o2 }), polyline: new c({ sketchOptions: t2, viewType: o2 }), polygon: new y({ sketchOptions: t2, viewType: o2 }), mesh: new v$1({ sketchOptions: t2, viewType: o2 }), rectangle: new h$1({ sketchOptions: t2 }), circle: new u({ sketchOptions: t2 }) }, this.tooltip = new u$1({ view: this.view }), this._initializeConstraints(), this.addHandles([e2.on("vertex-add", (e3) => this.onVertexAdd(e3)), e2.on("vertex-remove", (e3) => this.onVertexRemove(e3)), e2.on("vertex-update", (e3) => this.onVertexUpdate(e3)), e2.on("cursor-update", (e3) => this.onCursorUpdate(e3)), e2.on("cursor-remove", () => this._updateGraphic()), e2.on("complete", (e3) => this.onComplete(e3)), d$3(() => this.cursor, (t3) => e2.cursor = t3, A$1), i$1(() => this._updateTooltipInfo()), i$1(() => {
      e2.constraintZ = this._constraintZ;
    })]), this.finishToolCreation();
  }
  destroy() {
    this.drawOperation = u$2(this.drawOperation), this.tooltip = u$2(this.tooltip), this._destroyAllVisualizations(), this.view.map.remove(this.internalGraphicsLayer), this.internalGraphicsLayer = u$2(this.internalGraphicsLayer), this._set("view", null);
  }
  get _defaultElevation() {
    const e2 = L(this.drawOperation.coordinateHelper.spatialReference);
    return i(this.defaultZ * e2, "meters");
  }
  get _inputModeAvailable() {
    const { inputEnabled: e2, visibleElements: t2 } = this.sketchOptions.tooltips;
    return e2 && true === this.activeTooltipInfo?.editableFields.some((e3) => true === t2[e3.name]);
  }
  get canRedo() {
    return this.drawOperation.canRedo;
  }
  get canUndo() {
    return this.drawOperation.canUndo;
  }
  set centered(e2) {
    this._set("centered", e2), this._updateGraphic();
  }
  get cursor() {
    return this._get("cursor");
  }
  set cursor(e2) {
    this._set("cursor", e2);
  }
  set enabled(e2) {
    this.drawOperation.interactive = e2, this._set("enabled", e2);
  }
  set forceUniformSize(e2) {
    this._set("forceUniformSize", e2), this._updateGraphic();
  }
  get graphic() {
    return this._graphic;
  }
  set graphicSymbol(e2) {
    this._set("graphicSymbol", e2), null != this._graphic && (this._graphic.symbol = e2);
  }
  get updating() {
    return this.drawOperation?.updating ?? false;
  }
  completeCreateOperation() {
    this.drawOperation.complete();
  }
  onInputEvent(e2) {
    if (!this.destroyed)
      return "key-down" === e2.type && e2.key === n$3.enterInputMode && this._inputModeAvailable ? (this.tooltip.enterInputMode(), void e2.stopPropagation()) : void this.drawOperation.onInputEvent(e2);
  }
  redo() {
    this.drawOperation.redo();
  }
  reset() {
  }
  undo() {
    this.drawOperation.undo(), 0 === this.drawOperation.numCommittedVertices && this._initializeConstraints();
  }
  _destroyAllVisualizations() {
    this.removeHandles(Q.outline), this.removeHandles(Q.regularVertices), this.removeHandles(Q.activeVertex), this.removeHandles(Q.activeEdge), this.removeHandles(K);
  }
  _createOrUpdateGraphic(e2) {
    if (null != this._graphic)
      return this.updateGraphicGeometry(e2), this._graphic;
    const o2 = new c$3({ ...this.graphicProperties, symbol: this.graphicSymbol });
    return this._graphic = o2, this.updateGraphicGeometry(e2), this.internalGraphicsLayer.add(o2), this.addHandles(this.initializeGraphic(o2)), this.notifyChange("graphic"), this.addHandles(e$2(() => {
      this.internalGraphicsLayer.remove(o2), this._graphic === o2 && (this._graphic = null);
    }), K), o2;
  }
  updateGraphicGeometry(e2) {
    this._graphic.geometry = e2;
  }
  _getCreateOperationGeometry(e2 = { operationComplete: false }) {
    if (null == this.drawOperation)
      return;
    const { coordinateHelper: t2, view: o2, visualizationCursorVertex: i2, lastVertex: r, committedVertices: n2, geometryIncludingUncommittedVertices: s2, numCommittedVertices: a2 } = this.drawOperation;
    if (!(a2 > 0 || null != i2))
      return;
    const l2 = e2.operationComplete ? n2 : s2, c2 = l2.length, p3 = null != i2 ? t2.pointToArray(i2) : null, u2 = o2.spatialReference, h3 = "3d" === o2.type && "global" === o2.viewingMode, d3 = new B();
    d3.committedVertices = n2, d3.cursorVertex = p3;
    const { geometryType: m2 } = this;
    switch (m2) {
      case "point":
      case "mesh":
        d3.full = t2.arrayToPoint(l2[0]);
        break;
      case "multipoint":
        d3.full = c2 > 0 ? d$4(l2, u2) : null;
        break;
      case "polyline":
      case "polygon":
        c2 > 0 && (d3.full = "polygon" === m2 ? j$2([l2], u2, h3, true) : R([l2], u2, h3), d3.cursorEdge = null != p3 && r && !a$1(i2, r) ? R([[p3, t2.pointToArray(r)]], u2, h3) : null, d3.outline = c2 > 1 ? d3.full : null);
        break;
      case "circle":
      case "rectangle": {
        if (d3.committedVertices = d3.cursorVertex = null, !c2)
          break;
        const t3 = F$1(o2, l2[0]), i3 = l2[0], r2 = t3.makeMapPoint(i3[0] + X * o2.resolution, i3[1]);
        "circle" === m2 ? 1 === c2 && e2.operationComplete ? d3.circle = L$1([i3, r2], t3, true) : 2 === c2 && (this.forceUniformSize ? d3.circle = L$1(l2, t3, this.centered) : d3.rectangle = v$3(l2, t3, this.centered)) : 1 === c2 && e2.operationComplete ? d3.rectangle = T$2([i3, r2], t3, true) : 2 === c2 && (d3.rectangle = this.forceUniformSize ? T$2(l2, t3, this.centered) : b(l2, t3, this.centered)), d3.full = null != d3.circle ? d3.circle.geometry : d3.rectangle?.geometry, d3.outline = "polygon" === d3.full?.type ? d3.full : null;
        break;
      }
      default:
        return null;
    }
    return d3;
  }
  initializeGraphic(e2) {
    return e$2();
  }
  onComplete(e2) {
    if (!this.drawOperation)
      return;
    this._updateGraphic();
    let t2 = null;
    if (this.drawOperation.isCompleted) {
      const e3 = this._getCreateOperationGeometry({ operationComplete: true });
      null != e3 && (t2 = this._createOrUpdateGraphic(e3.full));
    }
    this._createOperationGeometry = null, this.emit("complete", { graphic: t2, ...e2 });
  }
  onCursorUpdate(e2) {
    this._updateGraphic(), this.emit("cursor-update", e2);
  }
  onDeactivate() {
    const { drawOperation: e2 } = this;
    e2 && (e2.isCompleted || e2.cancel());
  }
  onOutlineChanged(e2) {
    return e$2();
  }
  onCursorEdgeChanged(e2) {
    return e$2();
  }
  onVertexAdd(e2) {
    this._updateGraphic(), this._unlockConstraintsOnVertexAddOrRemove(), this._lockElevationOnVertexAdd(e2.vertices.at(0)?.coordinates), this.emit("vertex-add", e2);
  }
  onVertexRemove(e2) {
    this._updateGraphic(), this._unlockConstraintsOnVertexAddOrRemove(), this.emit("vertex-remove", e2);
  }
  onVertexUpdate(e2) {
    this._updateGraphic(), this.emit("vertex-update", e2);
  }
  _updateGraphic() {
    const e2 = this._getCreateOperationGeometry();
    this._createOperationGeometry = e2, null != e2 ? (null != e2.cursorEdge ? this.addHandles(this.onCursorEdgeChanged(e2.cursorEdge), Q.activeEdge) : this.removeHandles(Q.activeEdge), null != e2.outline ? this.addHandles(this.onOutlineChanged(e2.outline), Q.outline) : this.removeHandles(Q.outline), null != e2.committedVertices ? this.addHandles(this.onRegularVerticesChanged(e2.committedVertices), Q.regularVertices) : this.removeHandles(Q.regularVertices), null != e2.cursorVertex ? this.addHandles(this.onActiveVertexChanged(e2.cursorVertex), Q.activeVertex) : this.removeHandles(Q.activeVertex), null != e2.full ? this._createOrUpdateGraphic(e2.full) : this.removeHandles(K)) : this._destroyAllVisualizations();
  }
  get activeTooltipInfo() {
    const { drawOperation: e2, graphic: t2, view: o2 } = this;
    if (!e2)
      return null;
    const i2 = this.tooltipInfos, r = t2?.geometry?.type;
    switch (this.geometryType) {
      case "point":
        return "2d" === o2.type && 0 === this.defaultZ ? null : "point" === r ? i2.point : null;
      case "polyline":
        return "polyline" === r ? i2.polyline : null;
      case "polygon":
        return "polygon" === r ? i2.polygon : null;
      case "rectangle":
        return "polygon" === r ? i2.rectangle : null;
      case "circle":
        return "polygon" === r ? i2.circle : null;
      case "mesh":
        return "mesh" === r ? i2.mesh : null;
      default:
        return null;
    }
  }
  _updateTooltipInfo() {
    const { activeTooltipInfo: e2, tooltip: t2, sketchOptions: o2 } = this;
    switch (e2?.type) {
      case "draw-point":
        this._updateDrawPointTooltipInfo(e2);
        break;
      case "draw-polyline":
        this._updateDrawPolylineTooltipInfo(e2);
        break;
      case "draw-polygon":
        this._updateDrawPolygonTooltipInfo(e2);
        break;
      case "draw-rectangle":
        this._updateDrawRectangleTooltipInfo(e2);
        break;
      case "draw-circle":
        this._updateDrawCircleTooltipInfo(e2);
        break;
      case "draw-mesh":
        this.updateDrawMeshTooltipInfo(e2);
    }
    t2.view = this.view, t2.info = o2.tooltips.effectiveEnabled ? e2 : null;
  }
  _updateDrawPointTooltipInfo(e$12) {
    const { drawOperation: t2, graphic: o2, view: i2, sketchOptions: r } = this, { coordinateHelper: n2, cursorVertex: s2 } = t2;
    if (e$12.sketchOptions = r, e$12.viewType = i2.type, e$12.helpMessage = e("point", o2?.geometry), this.updateElevation(e$12.elevation), !s2)
      return void (t2.constraintInfo = void 0);
    const a2 = M(s2, i2, n2.spatialReference, this._constraintElevationInfo, n2.hasZ(), r.values.effectiveDirectionMode);
    t2.constraintInfo = { context: a2, distance: null, direction: null, elevation: e$12.elevation.committed };
  }
  _updateDrawPolylineTooltipInfo(e$12) {
    const t2 = this._createOperationGeometry, o2 = null != t2 ? t2.full : null;
    if ("polyline" !== o2?.type)
      return;
    this._updatePolylineOrPolygonCommon(e$12);
    const i2 = c$4(o2);
    e$12.totalLength.actual = i2 ?? m$1, e$12.sketchOptions = this.sketchOptions, e$12.viewType = this.view.type, e$12.helpMessage = e("polyline", o2);
  }
  _updateDrawPolygonTooltipInfo(e$12) {
    const t2 = this._createOperationGeometry, o2 = null != t2 ? t2.full : null;
    if ("polygon" !== o2?.type)
      return;
    this._updatePolylineOrPolygonCommon(e$12);
    const i2 = u$3(o2);
    e$12.area.actual = i2 ?? h$2, e$12.sketchOptions = this.sketchOptions, e$12.viewType = this.view.type, e$12.helpMessage = e("polygon", o2);
  }
  _updatePolylineOrPolygonCommon(e2) {
    const { view: t2, drawOperation: o2, sketchOptions: i2 } = this, { coordinateHelper: r, cursorVertex: n2, lastVertex: a2, secondToLastVertex: c2 } = o2, p3 = i2.values.effectiveDirectionMode, u2 = a2 && n2 ? m$2(a2, n2) : null;
    if (e2.distance.actual = u2 ?? m$1, e2.distance.readOnly = null == a2, e2.direction.actual = null, e2.direction.readOnly = true, a2 && n2 && ("absolute" === p3 || c2)) {
      const t3 = x(c2, a2, n2, p3);
      e2.direction.actual = t3 ?? U, e2.direction.readOnly = false;
    }
    this.updateElevation(e2.elevation);
    const h3 = n2 ?? a2;
    if (h3) {
      const i3 = M(h3, t2, r.spatialReference, this._constraintElevationInfo, r.hasZ(), p3);
      o2.constraintInfo = { context: i3, distance: e2.distance.committed, direction: e2.direction.committed, elevation: e2.elevation.committed };
    } else
      o2.constraintInfo = void 0;
  }
  updateDrawMeshTooltipInfo(e2) {
  }
  _updateDrawRectangleTooltipInfo(e2) {
    e2.sketchOptions = this.sketchOptions, e2.xSize = this._xSize ?? m$1, e2.ySize = this._ySize ?? m$1, e2.area = this._fullGeometryArea ?? h$2;
  }
  _updateDrawCircleTooltipInfo(e2) {
    const { forceUniformSize: t2 } = this;
    e2.sketchOptions = this.sketchOptions, e2.radius = t2 ? this._circleRadius ?? m$1 : null, e2.xSize = t2 ? null : this._xSize ?? m$1, e2.ySize = t2 ? null : this._ySize ?? m$1, e2.area = this._fullGeometryArea ?? h$2;
  }
  get _circleRadius() {
    const e2 = this._createOperationGeometry;
    return null != e2?.circle?.center && null != e2.circle.edge ? m$2(e2.circle.center, e2.circle.edge) : null;
  }
  get _xSize() {
    const e2 = this._createOperationGeometry?.rectangle?.midpoints;
    return null != e2 ? m$2(e2.left, e2.right) : null;
  }
  get _ySize() {
    const e2 = this._createOperationGeometry?.rectangle?.midpoints;
    return null != e2 ? m$2(e2.top, e2.bottom) : null;
  }
  get _fullGeometryArea() {
    const e2 = this._createOperationGeometry?.full;
    return "polygon" !== e2?.type ? null : u$3(e2);
  }
  updateElevation(e2) {
    const { drawOperation: t2 } = this, o2 = t2?.cursorVertex ?? t2?.lastVertex;
    e2.actual = R$1(o2) ?? this._defaultElevation, e2.visible = "3d" === this.view.type && this.hasZ, e2.readOnly = false;
  }
  get _constraintElevationInfo() {
    return this.drawOperation?.elevationInfo ?? w$1;
  }
  get _constraintZ() {
    const { geometryType: e2 } = this;
    switch (e2) {
      case "point":
      case "mesh":
      case "polyline":
      case "polygon": {
        const t2 = this.tooltipInfos[e2].elevation.committed;
        if (!t2)
          return;
        const o2 = this.drawOperation.coordinateHelper.spatialReference;
        return s(t2, "meters") / L(o2);
      }
      default:
        return;
    }
  }
  _initializeConstraints() {
    const { directionOptions: e2, drawOperation: t2, geometryType: o2, tooltipInfos: i2, sketchOptions: r } = this, n2 = (e3) => {
      const o3 = t2.elevationInfo?.mode, r2 = i2[e3].elevation;
      "relative-to-ground" === o3 || "relative-to-scene" === o3 || "on-the-ground" === o3 ? r2.lock(this._defaultElevation) : r2.unlock();
    }, s2 = (t3) => {
      if (e2) {
        const o3 = i2[t3].direction;
        o3.committed = e2.angle, o3.unlockOnVertexPlacement = false, r.values.directionMode = e2.mode;
      }
    };
    switch (o2) {
      case "polygon":
      case "polyline":
        n2(o2), s2(o2);
        break;
      case "point":
      case "mesh":
        n2(o2);
    }
  }
  _lockElevationOnVertexAdd(e2) {
    const { activeTooltipInfo: t2, drawOperation: o2, view: i2 } = this, r = this._constraintElevationInfo;
    if ("2d" === i2.type || !e2 || "absolute-height" !== r.mode || 1 !== o2?.numCommittedVertices || !t2 || "draw-polyline" !== t2.type && "draw-polygon" !== t2.type || t2.elevation.locked)
      return;
    const [n2, s2, a2] = e2, l2 = this._getConvertedVertexElevation(n2, s2, a2, r);
    null != l2 && t2.elevation.lock(l2);
  }
  _unlockConstraintsOnVertexAddOrRemove() {
    this.activeTooltipInfo?.allFields.forEach((e2) => {
      e2.unlockOnVertexPlacement && e2.unlock();
    });
  }
  _getConvertedVertexElevation(e2, t2, o2, i2) {
    const { view: r, drawOperation: n2 } = this;
    if ("3d" !== r.type || !n2)
      return;
    const { spatialReference: s2 } = n2.coordinateHelper;
    o2 ??= 0;
    const a2 = n2.elevationInfo, l2 = m$3(r, e2, t2, o2, s2, a2, i2);
    return v$4(l2, s2) ?? this._defaultElevation;
  }
};
e$1([y$1()], J.prototype, "_createOperationGeometry", void 0), e$1([y$1()], J.prototype, "_defaultElevation", null), e$1([y$1()], J.prototype, "_inputModeAvailable", null), e$1([y$1({ value: true })], J.prototype, "centered", null), e$1([y$1()], J.prototype, "cursor", null), e$1([y$1({ nonNullable: true })], J.prototype, "defaultZ", void 0), e$1([y$1({ constructOnly: true })], J.prototype, "directionOptions", void 0), e$1([y$1()], J.prototype, "drawOperation", void 0), e$1([y$1({ value: true })], J.prototype, "enabled", null), e$1([y$1({ value: true })], J.prototype, "forceUniformSize", null), e$1([y$1({ constructOnly: true })], J.prototype, "geometryType", void 0), e$1([y$1()], J.prototype, "graphic", null), e$1([y$1({ constructOnly: true })], J.prototype, "graphicProperties", void 0), e$1([y$1()], J.prototype, "graphicSymbol", null), e$1([y$1({ constructOnly: true })], J.prototype, "hasZ", void 0), e$1([y$1({ constructOnly: true })], J.prototype, "geometryToPlace", void 0), e$1([y$1({ constructOnly: true })], J.prototype, "mode", void 0), e$1([y$1()], J.prototype, "snappingManager", void 0), e$1([y$1()], J.prototype, "snapToScene", void 0), e$1([y$1()], J.prototype, "tooltip", void 0), e$1([y$1()], J.prototype, "tooltipInfos", void 0), e$1([y$1({ constructOnly: true, type: l$2 })], J.prototype, "sketchOptions", void 0), e$1([y$1({ readOnly: true })], J.prototype, "updating", null), e$1([y$1({ constructOnly: true, nonNullable: true })], J.prototype, "view", void 0), e$1([y$1()], J.prototype, "activeTooltipInfo", null), e$1([y$1()], J.prototype, "_circleRadius", null), e$1([y$1()], J.prototype, "_xSize", null), e$1([y$1()], J.prototype, "_ySize", null), e$1([y$1()], J.prototype, "_fullGeometryArea", null), e$1([y$1()], J.prototype, "_constraintElevationInfo", null), e$1([y$1()], J.prototype, "_constraintZ", null), J = e$1([c$1("esri.views.draw.DrawGraphicTool")], J);
const K = Symbol("create-operation-graphic"), Q = { outline: Symbol("outline-visual"), regularVertices: Symbol("regular-vertices-visual"), activeVertex: Symbol("active-vertex-visual"), activeEdge: Symbol("active-edge-visual") };
function W(e2) {
  switch (e2) {
    case "point":
    case "polyline":
    case "polygon":
    case "multipoint":
      return e2;
    case "circle":
    case "rectangle":
      return "segment";
    case "mesh":
      return "point";
  }
}
const X = 48;
function d2(o2, i2) {
  return T(o2, i2, false);
}
function E(o2, i2) {
  return T(o2, i2, true);
}
function T(o2, i2, r) {
  if (o2 instanceof t$1) {
    if (o2.operation instanceof t$2)
      return V(o2.operation, i2, r), true;
    if (o2.operation instanceof e$3)
      return h2(o2.operation, i2, r), true;
    if (o2.operation instanceof c$5)
      return v2(o2.operation, i2, r), true;
  }
  return false;
}
function V(o2, i2, r = false) {
  const t2 = r ? -1 : 1, s2 = r$2(t2 * o2.dx, t2 * o2.dy, t2 * o2.dz);
  u$4(i2.origin, i2.origin, s2), J$1(i2);
}
function h2(o2, i2, r = false) {
  const t2 = r ? -o2.angle : o2.angle;
  k(i2.basis1, i2.basis1, l$3, t2), k(i2.basis2, i2.basis2, l$3, t2), J$1(i2);
}
function v2(i2, r, t2 = false) {
  const s2 = t2 ? 1 / i2.factor1 : i2.factor1, n2 = t2 ? 1 / i2.factor2 : i2.factor2;
  g(r.basis1, r.basis1, s2), g(r.basis2, r.basis2, n2), k$1(r.origin, r.origin, i2.origin, i2.axis1, s2), k$1(r.origin, r.origin, i2.origin, i2.axis2, n2), J$1(r);
}
function F(o2, c2, f$1, m2) {
  m2 || (m2 = W$1());
  const p3 = o$2(t$3.get(), o2[1], -o2[0]), g2 = o$2(t$3.get(), Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), N = o$2(t$3.get(), Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY), j2 = t$3.get();
  c2.components.forEach((n2) => n2.vertices.forEach(({ pos: n3 }) => {
    o$2(j2, j$3(o2, n3), j$3(p3, n3)), f(g2, g2, j2), M$1(N, N, j2);
  }));
  const l2 = 1e-6, x2 = o$2(t$3.get(), N[0] - g2[0] < l2 ? f$1 / 2 : 0, N[1] - g2[1] < l2 ? f$1 / 2 : 0);
  return e$4(g2, g2, x2), u$5(N, N, x2), l$4(m2.basis1, o2, (N[0] - g2[0]) / 2), l$4(m2.basis2, p3, (N[1] - g2[1]) / 2), o$2(m2.origin, g2[0] * o2[0] + g2[1] * p3[0], g2[0] * o2[1] + g2[1] * p3[1]), u$5(m2.origin, m2.origin, m2.basis1), u$5(m2.origin, m2.origin, m2.basis2), J$1(m2), m2;
}
export {
  E,
  F,
  J,
  W,
  d2 as d,
  v$2 as v
};
