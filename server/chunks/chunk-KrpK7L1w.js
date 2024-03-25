import { c0 as w$1, k7 as S$1, zo as b$2, k6 as u$5, ir as h$1, k5 as c$1, zp as c$2, bQ as V, it as h$2, zq as e$4, zr as c$3, zs as i, dh as i$1, aV as e$5, aX as y$2, a_ as c$4, bZ as S$2, ds as o$1, qe as I, zt as L, ct as e$6, cs as t$2, zu as m, zv as e$7, j5 as _$1, cU as s$3, c8 as u$6, zw as w, v_ as R, cm as e$8, b0 as has, dt as Z, kK as T, kL as t$3, zx as E$1, o3 as L$1, m7 as r$2, aT as s$5, fA as P, pb as S$3, aI as r$3, fC as h$3, kJ as e$9, aW as n$1, cb as C$1, zy as d$3, cp as S$4, zz as m$1, zA as o$3, aC as M, vF as F, wm as i$2, b2 as l$2, zB as e$a, zC as A$1, zD as L$2, zE as l$3, zF as _$2, kS as d$4, kT as a$2, ce as d$5, f6 as p$1, eV as v$1, cl as A$2, rL as C$2, fL as I$1, g8 as l$4, aO as s$6, zG as a$3, nq as n$2, z9 as o$4, zH as t$4, bC as L$3, zI as E$2, ex as w$2, fF as o$5, fB as n, aG as u$7, nQ as g$1, cY as x$1, zJ as l$5, cc as m$2, zK as h$4, zL as N, bO as G, zM as t$5, ma as r$4, cd as b$3, zN as y$3, nu as S$5, fJ as u$8, zO as r$5, zP as b$4, c5 as m$3, dc as H$1, ci as c$5, zQ as h$5, zR as i$3, zS as b$5, ee as i$4, a$ as b$6, cr as q$1, k3 as A, zT as e$b, e3 as v$2, b6 as u$9, xn as u$a, dl as B, rQ as e$c, aJ as n$3, bW as h$6, vK as i$5, fG as t$7, kz as e$d, s9 as l$6, dx as m$4, j7 as R$1, ws as b$7, zU as N$1, cf as C$3, bX as P$1, pa as s$8, cj as t$8 } from "./chunk-ejFG4zJ0.js";
import { t as t$6, s as s$7 } from "./chunk-t40IK_QY.js";
import { o as o$2 } from "./chunk-ISSNghJ_.js";
import { s as s$4 } from "./chunk-E1ai5rf5.js";
const a$1 = w$1.fromSimpleMarkerSymbol(S$1), c = b$2.fromSimpleLineSymbol(u$5), u$4 = h$1.fromSimpleFillSymbol(c$1), S = new c$2({ symbolLayers: new V([new h$2({ material: { color: e$4 }, edges: new c$3({ size: "1px", color: i }) })]) });
function j$1(o2) {
  if (null == o2)
    return null;
  switch (o2.type) {
    case "mesh":
      return S;
    case "point":
    case "multipoint":
      return a$1;
    case "polyline":
      return c;
    case "polygon":
    case "extent":
      return u$4;
  }
  return null;
}
let e$3 = class e {
  constructor(e4, m2, t2) {
    this.maximumTotalNumberOfVertices = e4, this.maximumNumberOfFeatures = m2, this.averageSymbolComplexity = t2;
  }
};
const d$2 = i$1();
let l$1 = class l extends S$2 {
  constructor(t2) {
    super(t2), this.events = new o$1(), this.hasZ = null, this.hasM = null, this.objectIdField = null, this.featureAdapter = { getAttribute: (t3, e4) => "graphic" in t3 ? t3.graphic.attributes[e4] : o$2.getAttribute(t3, e4), getAttributes: (t3) => "graphic" in t3 ? t3.graphic.attributes : o$2.getAttributes(t3), getObjectId: (t3) => "graphic" in t3 ? I(t3.graphic, this.objectIdField) ?? void 0 : o$2.getObjectId(t3), getGeometry: (t3) => "graphic" in t3 ? t3.getAsOptimizedGeometry(this.hasZ, this.hasM) : o$2.getGeometry(t3), getCentroid: (t3, e4) => {
      if ("graphic" in t3) {
        let r2 = null;
        null != t3.centroid ? r2 = t3.centroid : "point" === t3.graphic.geometry.type && L(t3.graphic.geometry, u$3, this.viewSpatialReference) && (r2 = u$3);
        const o2 = new Array(2 + (e4.hasZ ? 1 : 0) + (e4.hasM ? 1 : 0));
        return null == r2 ? (o2[0] = 0, o2[1] = 0, o2[2] = 0, o2[3] = 0) : (o2[0] = r2.x, o2[1] = r2.y, e4.hasZ && (o2[2] = r2.hasZ ? r2.z : 0), e4.hasM && (o2[e4.hasZ ? 3 : 2] = r2.hasM ? r2.m : 0)), new e$6([], o2);
      }
      return o$2.getCentroid(t3, e4);
    }, cloneWithGeometry: (t3, e4) => "graphic" in t3 ? new t$2(e4, this.featureAdapter.getAttributes(t3), null, this.featureAdapter.getObjectId(t3)) : o$2.cloneWithGeometry(t3, e4) };
  }
  forEachInBounds(t2, e4) {
    this.getSpatialIndex().forEachInBounds(t2, e4);
  }
  forEachBounds(t2, e4) {
    const r2 = this.getSpatialIndex();
    for (const o2 of t2) {
      const t3 = this.featureAdapter.getObjectId(o2);
      null != r2.getBounds(t3, d$2) && e4(d$2);
    }
  }
};
e$5([y$2({ constructOnly: true })], l$1.prototype, "getSpatialIndex", void 0), e$5([y$2({ constructOnly: true })], l$1.prototype, "forEach", void 0), e$5([y$2({ constructOnly: true })], l$1.prototype, "hasZ", void 0), e$5([y$2({ constructOnly: true })], l$1.prototype, "hasM", void 0), e$5([y$2({ constructOnly: true })], l$1.prototype, "objectIdField", void 0), e$5([y$2({ constructOnly: true })], l$1.prototype, "viewSpatialReference", void 0), e$5([y$2({ constructOnly: true })], l$1.prototype, "featureSpatialReference", void 0), l$1 = e$5([c$4("esri.views.3d.layers.graphics.Graphics3DFeatureStore")], l$1);
const u$3 = { type: "point", x: 0, y: 0, hasZ: false, hasM: false, spatialReference: null };
let s$2 = class s extends m {
  constructor(r2, o2, t2) {
    super(r2, o2, t2), this._calloutSymbolLayer = null, this.symbol.hasVisibleCallout() && (this._calloutSymbolLayer = e$7(this.symbol, o2));
  }
  async doLoad(o2) {
    const a2 = this._calloutSymbolLayer ? _$1(this._calloutSymbolLayer.load()) : null;
    try {
      await super.doLoad(o2), s$3(o2);
    } catch (l3) {
      throw this._calloutSymbolLayer?.abortLoad(), l3;
    }
    a2 && await a2;
  }
  destroy() {
    super.destroy(), this._calloutSymbolLayer = u$6(this._calloutSymbolLayer);
  }
  createGraphics3DGraphic(r2, o2) {
    const t2 = super.createGraphics3DGraphic(r2, o2);
    if (null != this._calloutSymbolLayer && null != t2) {
      const o3 = this._createCalloutGraphic(r2);
      o3 && t2.setCalloutGraphic(o3);
    }
    return t2;
  }
  globalPropertyChanged(r2, o2) {
    return !!super.globalPropertyChanged(r2, o2) && (!this._calloutSymbolLayer || this._calloutSymbolLayer.globalPropertyChanged(r2, o2, (r3) => r3.calloutLayer));
  }
  updateGeometry(r2, o2) {
    const t2 = super.updateGeometry(r2, o2);
    if (t2 && this._calloutSymbolLayer) {
      const t3 = r2.calloutLayer;
      if (t3)
        return this._calloutSymbolLayer.updateGeometry(t3, o2);
    }
    return t2;
  }
  _createCalloutGraphic(r2) {
    const o2 = r2.renderingInfo;
    return r2.renderingInfo = new w(o2.renderer, o2.symbol), this._calloutSymbolLayer.createGraphics3DGraphic(r2);
  }
};
function t$1(t2, i2, n2) {
  return "point-3d" === t2.type ? new s$2(t2, i2, n2) : new m(t2, i2, n2);
}
let s$1 = class s2 {
  constructor(s4, i2, t2) {
    this.visible = s4, this.missing = i2, this.pending = t2;
  }
};
let e$2 = class e2 {
  constructor(t2) {
    this._graphicsCore = t2, this._idToState = /* @__PURE__ */ new Map(), this._states = /* @__PURE__ */ new Set();
    const i2 = t2.owner.layer?.objectIdField;
    i2 ? (this._getGraphicId = (t3) => I(t3, i2), this._getGraphics3DGraphicById = (t3) => this._graphicsCore.getGraphics3DGraphicByObjectId(t3)) : (this._getGraphicId = (t3) => t3.uid, this._getGraphics3DGraphicById = (t3) => this._graphicsCore.getGraphics3DGraphicById(t3));
  }
  destroy() {
    this._idToState.clear(), this._states.forEach((t2, i2) => this.remove(i2));
  }
  add(t2) {
    const s4 = e$8(() => this.remove(t2));
    if (this._states.has(t2))
      return s4;
    const e4 = this._getGraphicId(t2.graphic), a2 = this._getGraphics3DGraphicById(e4);
    this._states.has(t2) || this._states.add(t2);
    return this._ensureStateList(e4).push(t2), t2.displaying = null != a2 && a2.isVisible(), t2.isDraped = null != a2 && a2.isDraped, t2.tracking = true, null != a2 && t2.emit("changed"), s4;
  }
  remove(i2) {
    if (this._states.has(i2)) {
      if (this._idToState.size) {
        const s4 = this._getGraphicId(i2.graphic), e4 = this._idToState.get(s4);
        e4 && (R(e4, i2), 0 === e4.length && this._idToState.delete(s4));
      }
      this._states.delete(i2), i2.tracking = false, i2.displaying = false;
    }
  }
  addGraphic(t2) {
    this._forEachState(t2, (i2) => {
      i2.displaying = t2.isVisible(), i2.isDraped = t2.isDraped, i2.emit("changed");
    });
  }
  removeGraphic(t2) {
    this._forEachState(t2, (t3) => {
      t3.displaying = false, t3.isDraped = false;
    });
  }
  updateGraphicGeometry(t2) {
    this._forEachState(t2, (t3) => t3.emit("changed"));
  }
  updateGraphicVisibility(t2) {
    this._forEachState(t2, (i2) => i2.displaying = t2.isVisible());
  }
  allGraphicsDeleted() {
    this._states.forEach((t2) => t2.displaying = false);
  }
  _ensureStateList(t2) {
    const i2 = this._idToState.get(t2);
    if (i2)
      return i2;
    const s4 = new Array();
    return this._idToState.set(t2, s4), s4;
  }
  _forEachState(t2, i2) {
    if (0 === this._states.size || 0 === this._idToState.size)
      return;
    const s4 = this._getGraphicId(t2.graphic), e4 = this._idToState.get(s4);
    null != e4 && e4.forEach(i2);
  }
};
let d$1 = class d extends S$2 {
  constructor(t2) {
    super(t2), this._index = new s$4(9, has("esri-csp-restrictions") ? (t3) => ({ minX: t3.extent[0], minY: t3.extent[1], maxX: t3.extent[2], maxY: t3.extent[3] }) : [".extent[0]", ".extent[1]", ".extent[2]", ".extent[3]"]), this._missing = /* @__PURE__ */ new Set(), this._boundsByFeature = /* @__PURE__ */ new Map(), this.spatialReference = null, this.hasZ = null, this.hasM = null, this.objectIdField = null, this.updating = false;
  }
  setup(t2) {
    this._addMany(t2);
  }
  destroy() {
    this._missing.clear(), this._index = u$6(this._index), this._boundsByFeature.clear(), this._boundsByFeature = null;
  }
  update() {
    this._missing.size > 0 && (this._addMany(Array.from(this._missing.values())), this.updating = false, this._missing.clear());
  }
  get updatingRemaining() {
    return this._missing.size;
  }
  queryGraphicUIDsInExtent(t2, e4, s4) {
    null != e4 && e4.equals(this.spatialReference) && (u$2.minX = t2[0], u$2.minY = t2[1], u$2.maxX = t2[2], u$2.maxY = t2[3], this.update(), this._index.search(u$2, (t3) => s4(t3.graphic.uid)));
  }
  add(t2) {
    this._missing.add(t2), this.updating = true;
  }
  remove(t2) {
    if (this._missing.delete(t2))
      return void (this.updating = this._missing.size > 0);
    this._index.remove(t2);
    const e4 = I(t2.graphic, this._get("objectIdField"));
    null != e4 && this._boundsByFeature.delete(e4);
  }
  _addMany(t2) {
    if (0 === t2.length)
      return;
    const e4 = this._get("objectIdField");
    for (const s4 of t2) {
      s4.computeExtent(this.spatialReference);
      const t3 = I(s4.graphic, e4);
      null != t3 && this._boundsByFeature.set(t3, s4.extent);
    }
    this._index.load(t2);
  }
  clear() {
    this._index.clear(), this._missing.clear(), this._boundsByFeature.clear(), this.updating = false;
  }
  forEachInBounds(t2, e4) {
    u$2.minX = t2[0], u$2.minY = t2[1], u$2.maxX = t2[2], u$2.maxY = t2[3], this.update(), this._index.search(u$2, (t3) => {
      e4(t3);
    });
  }
  getBounds(t2, e4) {
    this.update();
    const s4 = this._boundsByFeature.get(t2);
    return s4 ? Z(e4, s4) : null;
  }
};
e$5([y$2({ constructOnly: true })], d$1.prototype, "spatialReference", void 0), e$5([y$2({ constructOnly: true })], d$1.prototype, "hasZ", void 0), e$5([y$2({ constructOnly: true })], d$1.prototype, "hasM", void 0), e$5([y$2({ constructOnly: true })], d$1.prototype, "objectIdField", void 0), e$5([y$2()], d$1.prototype, "updating", void 0), e$5([y$2({ readOnly: true })], d$1.prototype, "updatingRemaining", null), d$1 = e$5([c$4("esri.views.3d.layers.graphics.SpatialIndex2D")], d$1);
const u$2 = { minX: 0, minY: 0, maxX: 0, maxY: 0 };
const e$1 = 2216, o = 4096;
function r$1(r2) {
  return e$1 + o * r2.symbolLayers.length + r2.complexity.memory.resourceBytes;
}
const _ = 1, v = Symbol("layerHandles");
let y$1 = class y extends o$1.EventedMixin(S$2) {
  get spatialReference() {
    return this.view?.spatialReference;
  }
  constructor(e4) {
    super(e4), this._elevationOffset = 0;
  }
  initialize() {
    this._renderCoordsHelper = this.view.renderCoordsHelper, this._intersectLayers = [this.stageLayer], this._intersector = T(this.view.state.viewingMode), this._intersector.options.store = t$3.MIN;
    const e4 = this._computeLayerExtent(this.spatialReference, this.stageLayer);
    this._zmin = e4[2], this._zmax = e4[5];
    const t2 = this.stageLayer.events;
    this.addHandles([t2.on(["layerObjectAdded", "layerObjectRemoved", "geometryAdded", "geometryRemoved"], ({ object: e5 }) => this._objectChanged(e5)), t2.on("attributesChanged", ({ attribute: e5, object: t3 }) => E$1(e5) && this._objectChanged(t3)), t2.on(["transformationChanged", "shaderTransformationChanged"], (e5) => this._objectChanged(e5))], v);
  }
  dispose() {
    this.removeHandles(v);
  }
  elevationInfoChanged() {
    const e4 = null != this.layer ? this.layer.elevationInfo : null;
    if (null != e4 && "on-the-ground" !== e4.mode) {
      const t2 = L$1(this.layer.spatialReference), r2 = r$2(e4.unit ?? "meters");
      this._elevationOffset = (e4.offset ?? 0) * r2 / t2;
    } else
      this._elevationOffset = 0;
  }
  getElevation(e4, t2, r2, s4) {
    if (x[0] = e4, x[1] = t2, x[2] = r2, !this._renderCoordsHelper.toRenderCoords(x, s4, x))
      return s$5.getLogger(this).error("could not project point for elevation alignment"), null;
    const i2 = this._elevationOffset, n2 = this._zmin + i2, a2 = this._zmax + i2;
    this._renderCoordsHelper.setAltitude(C, a2, x), this._renderCoordsHelper.setAltitude(E, n2, x);
    const l3 = (e5) => !!e5.lastValidElevationBB;
    return this._intersector.reset(C, E, null), this._intersector.intersect(this._intersectLayers, null, _, null, l3), this._intersector.results.min.getIntersectionPoint(x) ? this._renderCoordsHelper.getAltitude(x) : null;
  }
  _objectChanged(e4) {
    const t2 = this.spatialReference;
    if (!e4.lastValidElevationBB || !t2)
      return;
    P(j);
    const r2 = e4.lastValidElevationBB;
    r2.isEmpty() || this._expandExtent(t2, r2.min, r2.max, j);
    const { min: o2, max: s4 } = e4.boundingVolumeWorldSpace;
    this._expandExtent(t2, o2, s4, j), S$3(j, b$1.extent), this._zmin = Math.min(this._zmin, j[2]), this._zmax = Math.max(this._zmax, j[5]), b$1.spatialReference = t2, this.emit("elevation-change", b$1), r$3(r2.min, o2), r$3(r2.max, s4);
  }
  _computeLayerExtent(e4, t2) {
    return P(j), null != e4 && t2.objects.forAll((t3) => this._expandExtent(e4, t3.boundingVolumeWorldSpace.min, t3.boundingVolumeWorldSpace.max, j)), j;
  }
  _expandExtent(e4, t2, r2, o2) {
    for (let s4 = 0; s4 < 8; ++s4)
      x[0] = 1 & s4 ? t2[0] : r2[0], x[1] = 2 & s4 ? t2[1] : r2[1], x[2] = 4 & s4 ? t2[2] : r2[2], this._renderCoordsHelper.fromRenderCoords(x, x, e4), h$3(o2, x);
    return o2;
  }
};
e$5([y$2({ constructOnly: true })], y$1.prototype, "layer", void 0), e$5([y$2({ constructOnly: true })], y$1.prototype, "stageLayer", void 0), e$5([y$2({ constructOnly: true })], y$1.prototype, "view", void 0), e$5([y$2()], y$1.prototype, "spatialReference", null), y$1 = e$5([c$4("esri.views.3d.layers.support.StageLayerElevationProvider")], y$1);
const j = P(), b$1 = new e$9(), x = n$1(), C = n$1(), E = n$1();
var Ve;
const Fe = n$1(), Te = i$1();
let ke = Ve = class extends S$2 {
  get _viewSpatialReference() {
    return this.owner.view.spatialReference;
  }
  get spatialIndex() {
    return this._spatialIndex || (this._spatialIndex = new d$1({ objectIdField: this.owner.layer?.objectIdField, spatialReference: this._viewSpatialReference, hasZ: !!this.hasZ, hasM: !!this.hasM }), this._spatialIndex.setup(Array.from(this.graphics3DGraphics.values()))), this._spatialIndex.update(), this._spatialIndex;
  }
  get numberOfGraphics() {
    return this._numberOfGraphics;
  }
  get effectiveUpdatePolicy() {
    return null != this.currentRenderer && "dictionary" === this.currentRenderer.type ? C$1.ASYNC : this._forcedUpdatePolicy ?? this.preferredUpdatePolicy;
  }
  get featureStore() {
    return this._featureStore;
  }
  get initializePromise() {
    return this._initializePromise;
  }
  get scaleVisibility() {
    return this._scaleVisibility;
  }
  get elevationAlignment() {
    return this._elevationAlignment;
  }
  get objectStates() {
    return this._objectStates;
  }
  get filterVisibility() {
    return this._filterVisibility;
  }
  get updating() {
    return !!(this.dataUpdating || this._elevationAlignment?.updating || this._scaleVisibility?.updating || this._filterVisibility?.updating || this._rendererChangeAbortController || this._elevationInfoChangeAbortController || this._frameTaskHandle.updating || this.running);
  }
  get dataUpdating() {
    return !!(this._graphicsWaitingForSymbol.size > 0 || this._pendingUpdates.size > 0 || this._spatialIndex?.updating || this._updatingPendingLoadedGraphicsChange || this._dataUpdateQueue.running || this._loadingSymbols > 0);
  }
  get running() {
    return this._pendingUpdates.size > 0 || !!this._spatialIndex?.updating || this._dataUpdateQueue.running || this._updateQueue.running;
  }
  get suspendedOrOutsideOfView() {
    return this.owner.suspended || !!this.owner.suspendInfo?.outsideOfView;
  }
  get updatingRemaining() {
    return this.updating ? this._pendingUpdates.size + 0.1 * (this._spatialIndex?.updatingRemaining || 0) + 0.1 * (this._elevationAlignment?.updatingRemaining || 0) : 0;
  }
  get displayFeatureLimit() {
    const e4 = this.owner && this.owner.view && this.owner.view.qualitySettings, t2 = e4?.graphics3D.minTotalNumberOfFeatures ?? 0, i2 = e4?.graphics3D.maxTotalNumberOfFeatures ?? 0, r2 = e4?.graphics3D.maxNumberOfDrawCalls ?? 0, s4 = e4?.graphics3D.maxTotalNumberOfVertices ?? 0, a2 = this.averageSymbolComplexity, n2 = Math.max(1, a2?.verticesPerFeature ?? 1), o2 = a2 && a2.drawCallsPerFeature > 0 && r2 > 0 ? r2 / a2.drawCallsPerFeature : i2, l3 = Math.ceil(s4 / n2), h2 = Math.max(t2, Math.min(i2, l3, o2)), d3 = this._get("displayFeatureLimit");
    return d3 && d3.maximumTotalNumberOfVertices === s4 && d3.averageSymbolComplexity === a2 && d3.maximumNumberOfFeatures === h2 ? d3 : new e$3(s4, h2, a2);
  }
  get averageSymbolComplexity() {
    const e4 = d$3(this._symbolComplexities), t2 = this._get("averageSymbolComplexity");
    return 0 === e4.numComplexities || null != t2 && (e4.estimated && (t2.verticesPerFeature >= e4.verticesPerFeature || t2.verticesPerCoordinate >= e4.verticesPerCoordinate || t2.drawCallsPerFeature >= e4.drawCallsPerFeature) || t2.verticesPerFeature === e4.verticesPerFeature && t2.verticesPerCoordinate === e4.verticesPerCoordinate && t2.drawCallsPerFeature === e4.drawCallsPerFeature) ? t2 : e4;
  }
  get usedMemory() {
    const e4 = null != this.averageSymbolComplexity && this.labelsEnabled ? this.averageSymbolComplexity.memory.bytesPerFeatureLabel * this._numberOfGraphics : 0, t2 = this._getSymbolComplexitiesUsed().reduce((e5, t3) => e5 + t3.memory.resourceBytes, 0), i2 = this.owner.view._stage.renderer, r2 = this.owner.view.basemapTerrain.overlayManager.renderer, s4 = Array.from(this._symbols.values()).reduce((e5, t3) => e5 + (t3?.symbolLayers.reduce((e6, t4) => e6 + (t4?.materials.reduce((e7, t5) => t5 ? e7 + (i2.plugins.getMaterialRenderer(t5)?.usedMemory ?? 0) + r2.getMemoryForMaterial(t5) : e7, 0) ?? 0), 0) ?? 0), 0);
    return this._usedMemory + e4 + t2 + s4;
  }
  get usedMemoryPerGraphic() {
    if (this._usedMemory && this._numberOfGraphics) {
      const e4 = this._numberOfGraphics / (this._numberOfGraphics + Math.max(this._pendingAdds, this._pendingRemoves));
      return this._usedMemory / this._numberOfGraphics * e4;
    }
    if (null != this.averageSymbolComplexity) {
      const e4 = this.labelsEnabled ? this.averageSymbolComplexity.memory.bytesPerFeatureLabel : 0;
      return this.averageSymbolComplexity.memory.bytesPerFeature + e4;
    }
    return 0;
  }
  get unprocessedMemoryEstimate() {
    return (this._pendingAdds - this._pendingRemoves) * this.usedMemoryPerGraphic;
  }
  get _symbolComplexities() {
    return this.currentRenderer ? this._getSymbolComplexitiesUsedOrRenderer(this.currentRenderer) : this._getSymbolComplexitiesUsed();
  }
  get visible() {
    return this._visible;
  }
  _getConvertedSymbol(e4) {
    if ("web-style" === e4.type)
      return e4.clone();
    const t2 = this._symbolConversionCache.get(e4.id);
    if (null != t2)
      return t2;
    const r2 = S$4(e4, { geometryType: this.layer?.geometryType ?? void 0, retainId: true, hasLabelingContext: this._hasLabelingContext(e4) }), s4 = r2.symbol || null;
    return null == s4 && r2.error && s$5.getLogger(this).error(r2.error.message), this._symbolConversionCache.set(e4.id, s4), s4;
  }
  _getSymbolComplexitiesUsedOrRenderer(e4) {
    if (null == e4)
      return [];
    const t2 = e4.getSymbols(), i2 = "backgroundFillSymbol" in e4 ? e4.backgroundFillSymbol : null;
    if (!i2 && !t2?.length)
      return [];
    const r2 = [], s4 = this._getSymbolComplexityUsedOrRenderer(i2);
    null != s4 && r2.push(s4);
    for (const a2 of t2) {
      const e5 = this._getSymbolComplexityUsedOrRenderer(a2);
      null != e5 && r2.push(e5);
    }
    return r2;
  }
  _getSymbolComplexityUsedOrRenderer(e4) {
    if (null == e4)
      return null;
    const t2 = this._symbols.get(e4.id);
    if (null != t2)
      return t2.complexity;
    const i2 = this._getConvertedSymbol(e4);
    return null != i2 ? m$1(i2) : null;
  }
  _getSymbolComplexitiesUsed() {
    const e4 = [];
    return this._symbols.forEach((t2) => {
      null != t2 && e4.push(t2.complexity);
    }), e4;
  }
  get _objectIdField() {
    return this.layer.objectIdField;
  }
  constructor(e4) {
    super(e4), this._propertiesPool = new o$3({ computedExtent: M }, this), this.computedExtent = null, this.currentRenderer = null, this.rendererHasGeometryOperations = false, this._graphicStateTracking = null, this.graphics3DGraphics = /* @__PURE__ */ new Map(), this.stageLayer = null, this.stage = null, this._graphicsDrapedUids = /* @__PURE__ */ new Set(), this._graphicsBySymbol = /* @__PURE__ */ new Map(), this._symbolConversionCache = /* @__PURE__ */ new Map(), this._symbols = /* @__PURE__ */ new Map(), this._graphicsWithoutSymbol = /* @__PURE__ */ new Map(), this._graphicsWaitingForSymbol = /* @__PURE__ */ new Map(), this._graphicsUpdateId = 0, this._frameTaskHandle = F, this._dataUpdateQueue = new i$2(), this._updateQueue = new i$2(), this._suspendSymbolCleanup = false, this._arcadeOnDemand = null, this._rendererChangeAbortController = null, this._elevationInfoChangeAbortController = null, this._initializeAbortController = null, this._scaleVisibility = null, this._filterVisibility = null, this._spatialIndex = null, this.extentPadding = 0, this._updatingPendingLoadedGraphicsChange = null, this._featureStore = null, this._deconflictor = null, this._labeler = null, this._objectStates = null, this._viewElevationProvider = null, this._stageLayerElevationProvider = null, this._sharedSymbolResourcesOwnerHandle = null, this._whenGraphics3DGraphicRequests = {}, this._pendingUpdates = /* @__PURE__ */ new Map(), this._numberOfGraphics = 0, this._numberOfGraphicsProvidingElevation = 0, this._pendingAdds = 0, this._pendingRemoves = 0, this._applyPendingRemovesFirst = false, this._loadingSymbols = 0, this._pendingUpdatesPool = new l$2({ allocator: (e5) => e5 || new Me(), deallocator: (e5) => (e5.clear(), e5) }), this._symbolWarningLogged = false, this._geometryWarningLogged = false, this._objectIdInvisibleSet = /* @__PURE__ */ new Set(), this._whenSymbolRemoved = new l$2(), this.preferredUpdatePolicy = C$1.SYNC, this._forcedUpdatePolicy = null, this.elevationFeatureExpressionEnabled = true, this.owner = null, this.layer = null, this.graphicSymbolSupported = true, this.getRenderingInfoWithoutRenderer = false, this.setUidToIdOnAdd = true, this.hasZ = null, this.hasM = null, this._usedMemory = 0, this._visible = false, this._startCreateGraphics = false, this._unusedSymbolsCache = e4.owner.view.resourceController.memoryController.newCache("graphics-3d-unused-symbols", (e5) => e5.destroy()), this.symbolCreationContext = new e$a(e4.owner.view.resourceController.scheduler, (e5, t2) => this._updateQueue.push(e5, t2));
  }
  initialize() {
    this._featureStore = new l$1({ objectIdField: this.owner.layer?.objectIdField, hasZ: !!this.hasZ, hasM: !!this.hasM, viewSpatialReference: this._viewSpatialReference, featureSpatialReference: this.owner.featureSpatialReference, getSpatialIndex: () => this.spatialIndex, forEach: (e5) => this.graphics3DGraphics.forEach(e5) });
    const e4 = (e5, t3, i2) => this.spatialIndex.queryGraphicUIDsInExtent(e5, t3, i2), { componentFactories: t2 } = this;
    if (null != t2.elevationAlignment) {
      const i2 = t2.elevationAlignment(this, e4);
      this._elevationAlignment = i2;
    }
    if (null != t2.scaleVisibility) {
      const i2 = t2.scaleVisibility(this, e4);
      this._scaleVisibility = i2;
    }
    if (null != t2.filterVisibility) {
      const e5 = t2.filterVisibility({ featureStore: this._featureStore, getFeatureCount: () => this.graphics3DGraphics.size, updateFeatureVisibilities: (e6) => this.modifyGraphics3DGraphicVisibilities((t3) => t3.setVisibilityFlag(A$1.GRAPHIC, L$2.FILTER, e6(I(t3.graphic, this._objectIdField)))), setAllFeaturesVisibility: (e6) => this.modifyGraphics3DGraphicVisibilities((t3) => t3.setVisibilityFlag(A$1.GRAPHIC, L$2.FILTER, e6)), clearFeaturesVisibility: () => this.modifyGraphics3DGraphicVisibilities((e6) => e6.setVisibilityFlag(A$1.GRAPHIC, L$2.FILTER, true)) });
      this._filterVisibility = e5;
    }
    if (null != t2.deconflictor) {
      const e5 = t2.deconflictor(this);
      this._deconflictor = e5;
    }
    if (null != t2.labeler && null != this._scaleVisibility) {
      const e5 = t2.labeler(this, this._scaleVisibility);
      this._labeler = e5;
    }
    if (null != t2.objectStates) {
      const e5 = t2.objectStates(this);
      this._objectStates = e5;
    }
    this._initializeAbortController = new AbortController(), this._initializePromise = this._initializeAsync();
  }
  async _initializeAsync() {
    const e4 = this._initializeAbortController?.signal, t2 = this.owner.view;
    this._viewElevationProvider = new l$3(this._viewSpatialReference, t2), this._initializeStage(t2, this.layer.uid);
    const r2 = t2.sharedSymbolResources;
    this.symbolCreationContext.sharedResources = r2, this._sharedSymbolResourcesOwnerHandle = r2.addGraphicsOwner(this.owner), null != this.currentRenderer && (this.symbolCreationContext.renderer = this.currentRenderer), this.symbolCreationContext.stage = this.stage, this.symbolCreationContext.streamDataRequester = r2.streamDataRequester, this.symbolCreationContext.renderCoordsHelper = t2.renderCoordsHelper, this.symbolCreationContext.layer = this.layer, this.symbolCreationContext.graphicsCoreOwner = this.owner, this.symbolCreationContext.localOriginFactory = new _$2(t2.renderSpatialReference), this.symbolCreationContext.elevationProvider = t2.elevationProvider, this.symbolCreationContext.notifyGraphicGeometryChanged = (e5) => this.notifyGraphicGeometryChanged(e5), this.symbolCreationContext.notifyGraphicVisibilityChanged = (e5) => this.notifyGraphicVisibilityChanged(e5);
    const s4 = d$4(this.layer.elevationInfo, this.elevationFeatureExpressionEnabled);
    if (this.symbolCreationContext.featureExpressionInfoContext = await a$2(s4, this._viewSpatialReference, e4, s$5.getLogger(this)), s$3(e4), this.symbolCreationContext.screenSizePerspectiveEnabled = t2.screenSizePerspectiveEnabled && !!this.layer.screenSizePerspectiveEnabled, this.symbolCreationContext.slicePlaneEnabled = !!this.owner.slicePlaneEnabled, this.symbolCreationContext.physicalBasedRenderingEnabled = !!this.owner.view.qualitySettings?.physicallyBasedRenderingEnabled, this.symbolCreationContext.skipHighSymbolLods = !!this.owner.view.qualitySettings?.graphics3D?.skipHighSymbolLods, "drapeSourceType" in this.owner) {
      const { owner: e5 } = this;
      this.symbolCreationContext.drapeSourceRenderer = t2.basemapTerrain.overlayManager.registerGeometryDrapeSource(e5), this.addHandles(e$8(() => t2.basemapTerrain.overlayManager.unregisterDrapeSource(e5)));
    }
    this.addHandles([d$5(() => this.suspendedOrOutsideOfView, () => this._updateQueue.unshift(() => this._updateLayerVisibility(), null)), d$5(() => [this.layer?.screenSizePerspectiveEnabled, this.owner.view?.screenSizePerspectiveEnabled], () => {
      const e5 = t2.screenSizePerspectiveEnabled && !!this.layer.screenSizePerspectiveEnabled;
      e5 !== this.symbolCreationContext.screenSizePerspectiveEnabled && (this.symbolCreationContext.screenSizePerspectiveEnabled = e5, this._labeler?.reset(), this.recreateAllGraphicsAndSymbols());
    }), d$5(() => this.owner.slicePlaneEnabled, (e5) => this._slicePlaneEnabledChange(!!e5)), d$5(() => this.owner.view.state?.rasterPixelRatio, () => this._pixelRatioChange()), d$5(() => !!this.owner.view.qualitySettings?.physicallyBasedRenderingEnabled, (e5) => this._physicalBasedRenderingChange(e5)), d$5(() => !!this.owner.view.qualitySettings?.graphics3D?.skipHighSymbolLods, (e5) => this._skipHighSymbolLoDsChange(e5)), p$1(() => t2.basemapTerrain?.tilingScheme, (e5) => {
      if (e5.spatialReference.equals(this.symbolCreationContext.overlaySR) || null == t2.basemapTerrain.spatialReference || (this.symbolCreationContext.overlaySR = t2.basemapTerrain.spatialReference), this.hasHandles("loaded-graphics"))
        this.recreateAllGraphics();
      else {
        const e6 = () => this.owner?.loadedGraphics;
        this.addHandles([v$1(e6, "change", (e7) => {
          this._graphicsCollectionChanged(e7), this._signalUpdatingDuringAsyncLoadedGraphicsChange();
        }, { onListenerAdd: () => {
          this.recreateAllGraphics(), this._signalUpdatingDuringAsyncLoadedGraphicsChange();
        } })], "loaded-graphics");
      }
    }, { initial: true }), d$5(() => this.effectiveUpdatePolicy, (e5) => {
      null != this.stageLayer && (this.stageLayer.updatePolicy = e5), this.symbolCreationContext.isAsync = this.effectiveUpdatePolicy === C$1.ASYNC, e5 === C$1.SYNC && this.runTask(C$2);
    }, A$2)]), this._frameTaskHandle = t2.resourceController.scheduler.registerTask(I$1.GRAPHICS_CORE, this), this.layer && "featureReduction" in this.layer && this.addHandles(d$5(() => this.layer.featureReduction, () => this._deconflictor.featureReductionChange())), this.notifyChange("averageSymbolComplexity"), this.rendererChange(this.owner.renderer).catch(() => {
    }), this._initializeAbortController = null;
  }
  _abortInitialize() {
    this._initializeAbortController && (this._initializeAbortController.abort(), this._initializeAbortController = null);
  }
  destroy() {
    this._unusedSymbolsCache.destroy(), this._abortInitialize(), this._abortRendererChange(), this._abortElevationInfoChange(), this._frameTaskHandle.remove(), this._frameTaskHandle = F, this._dataUpdateQueue.cancelAll(), this._updateQueue.cancelAll(), this.owner.view?.deconflictor?.removeGraphicsOwner(this), this.owner.view?.labeler?.removeGraphicsOwner(this), this._elevationAlignment = u$6(this._elevationAlignment), this._scaleVisibility = u$6(this._scaleVisibility), this._filterVisibility = u$6(this._filterVisibility), this._deconflictor = null, this._labeler = null, this._objectStates = u$6(this._objectStates), this.clear(), this._featureStore = u$6(this._featureStore), this._updatingPendingLoadedGraphicsChange = l$4(this._updatingPendingLoadedGraphicsChange), this._graphicStateTracking = u$6(this._graphicStateTracking), this.stage && (this.stageLayer = u$6(this.stageLayer), this.stage = null), this._set("owner", null);
    for (const e4 in this._whenGraphics3DGraphicRequests)
      this._whenGraphics3DGraphicRequests[e4].reject(new s$6("graphic:layer-destroyed", "Layer has been destroyed"));
    this._whenGraphics3DGraphicRequests = null, this._sharedSymbolResourcesOwnerHandle = l$4(this._sharedSymbolResourcesOwnerHandle), this._propertiesPool = u$6(this._propertiesPool), this._pendingUpdatesPool = null, this._symbolConversionCache.clear(), this._objectIdInvisibleSet.clear(), this._spatialIndex = u$6(this._spatialIndex);
  }
  clear() {
    this._objectStates?.allGraphicsDeleted(), null != this._graphicStateTracking && this._graphicStateTracking.allGraphicsDeleted(), this.graphics3DGraphics.forEach((e4) => e4.destroy()), this._spatialIndex?.clear(), this.graphics3DGraphics.clear(), this._numberOfGraphics = 0, this._usedMemory = 0, this._updateLayerVisibility(), this._symbols.forEach(u$6), this._symbols.clear(), this._graphicsBySymbol.clear(), this._graphicsWithoutSymbol.clear(), this._graphicsWaitingForSymbol.clear(), this._pendingUpdates.clear(), this._pendingUpdatesPool.clear(), this._pendingAdds = 0, this._pendingRemoves = 0, this._applyPendingRemovesFirst = false, this.notifyChange("dataUpdating"), this.notifyChange("running"), this.notifyChange("updatingRemaining"), this._featureStore.events.emit("changed");
  }
  _initializeStage(e4, t2) {
    this.stage = e4._stage, this.stageLayer = new a$3(this.stage, { pickable: !this.suspendedOrOutsideOfView, updatePolicy: this.effectiveUpdatePolicy }, t2);
    const i2 = this.stageLayer.events;
    i2.on("transformationChanged", (e5) => this.notifyGraphicGeometryChanged(e5.graphicUid)), i2.on("shaderTransformationChanged", (e5) => this.notifyGraphicGeometryChanged(e5.graphicUid)), i2.on("visibilityChanged", (e5) => this.notifyGraphicVisibilityChanged(e5.graphicUid)), i2.on("geometryAdded", (e5) => this.notifyGraphicGeometryChanged(e5.object.graphicUid)), i2.on("geometryRemoved", (e5) => this.notifyGraphicGeometryChanged(e5.object.graphicUid)), i2.on("attributesChanged", (e5) => E$1(e5.attribute) && this.notifyGraphicGeometryChanged(e5.object.graphicUid));
  }
  notifyGraphicGeometryChanged(e4) {
    if (null == this._graphicStateTracking || null == e4)
      return;
    const t2 = this.graphics3DGraphics.get(e4);
    t2 && this._graphicStateTracking.updateGraphicGeometry(t2);
  }
  notifyGraphicVisibilityChanged(e4) {
    if (null == this._graphicStateTracking || null == e4)
      return;
    const t2 = this.graphics3DGraphics.get(e4);
    t2 && this._graphicStateTracking.updateGraphicVisibility(t2);
  }
  _updateLayerVisibility() {
    const e4 = this.displayFeatureLimit.maximumNumberOfFeatures, t2 = this._numberOfGraphics > e4 * We, i2 = !this.suspendedOrOutsideOfView && !t2;
    i2 !== this._visible && (this._visible = i2, i2 ? (this.stageLayer.pickable = true, this.updateAllGraphicsVisibility()) : (this.stageLayer.pickable = false, this._hideAllGraphics()), this._updateStageLayerVisibility());
  }
  _updateStageLayerVisibility() {
    this.stageLayer.visible = this._visible && (null == this.layer.opacity || this.layer.opacity > 0);
  }
  getGraphics3DGraphicById(e4) {
    return null != e4 ? this.graphics3DGraphics.get(e4) : void 0;
  }
  getGraphics3DGraphicByObjectId(e4) {
    return this.owner.layer?.objectIdField ? this._findGraphics3DGraphicByObjectId(e4) : null;
  }
  _getGraphicObjectID(e4, t2 = this.owner.layer?.objectIdField) {
    return I(e4, t2);
  }
  get graphics3DGraphicsByObjectID() {
    const e4 = this.owner.layer?.objectIdField;
    if (!e4)
      return;
    const t2 = /* @__PURE__ */ new Map();
    return this.graphics3DGraphics.forEach((i2) => {
      if (!i2)
        return;
      const r2 = i2.graphic, s4 = this._getGraphicObjectID(r2, e4);
      null != s4 && t2.set(s4, i2);
    }), t2;
  }
  get labelsEnabled() {
    return !(!this._labeler || !this._labeler.layerLabelsEnabled());
  }
  async updateLabelingInfo(e4) {
    const t2 = this._deconflictor && this._deconflictor.labelingInfoChange(e4), i2 = this._labeler && this._labeler.labelingInfoChange(e4);
    await Promise.allSettled([t2, i2]);
  }
  updateVisibilityInfo() {
    this._deconflictor && this._deconflictor.labelingInfoChange(), this._labeler && this._labeler.visibilityInfoChange();
  }
  get symbolUpdateType() {
    if (this._pendingUpdates.size > 0)
      return "unknown";
    let e4 = 0, t2 = 0;
    return n$2(this._symbols, (i2, r2) => {
      if (null != i2) {
        const s4 = i2.getFastUpdateStatus();
        if (s4.loading > 0)
          return true;
        this._graphicsBySymbol.has(r2) && (t2 += s4.fast, e4 += s4.slow);
      }
      return false;
    }) ? "unknown" : t2 >= 0 && 0 === e4 ? "fast" : e4 >= 0 && 0 === t2 ? "slow" : "mixed";
  }
  runTask(e4) {
    if (this._dataUpdateQueue.runTask(e4), this._updateQueue.runTask(e4), this._applyPendingUpdates(e4), this.notifyChange("running"), this.running || this.notifyChange("dataUpdating"), this.notifyChange("updatingRemaining"), !e4.hasProgressed)
      return o$4;
  }
  setObjectIdVisibility(e4, t2) {
    t2 ? this._objectIdInvisibleSet.delete(e4) : this._objectIdInvisibleSet.add(e4);
    const i2 = this._findGraphics3DGraphicByObjectId(e4);
    null != i2 && this._updateUserVisibility(i2);
  }
  _findGraphics3DGraphicByObjectId(e4) {
    return t$4(this.graphics3DGraphics, (t2) => this._getGraphicObjectID(t2.graphic) === e4);
  }
  _updateUserVisibility(e4) {
    if (null == e4)
      return false;
    const t2 = e4.graphic, i2 = this._getGraphicObjectID(t2), r2 = t2.visible && !this.owner.suspended && (null == i2 || !this._objectIdInvisibleSet.has(i2));
    return e4.setVisibilityFlag(A$1.GRAPHIC, L$2.USER, r2);
  }
  _whenGraphics3DGraphic(e4) {
    const t2 = this.graphics3DGraphics.get(e4.uid);
    if (t2)
      return Promise.resolve(t2);
    const i2 = this._whenGraphics3DGraphicRequests[e4.uid];
    if (i2)
      return i2.promise;
    const r2 = L$3();
    return this._whenGraphics3DGraphicRequests[e4.uid] = r2, r2.promise;
  }
  async _boundsForGraphics3DGraphic(e4, t2) {
    const i2 = this._viewSpatialReference, r2 = this.owner.view.renderSpatialReference, s4 = this.owner.view.basemapTerrain.spatialReference, a2 = (e5, t3, s5) => n$3(e5, r2, t3, e5, i2, t3, s5), n2 = (e5, t3, r3) => n$3(e5, s4, t3, e5, i2, t3, r3), o2 = this._viewElevationProvider ? { service: this._viewElevationProvider, useViewElevation: null != t2 && !!t2.useViewElevation, minDemResolution: null != t2 ? t2.minDemResolution : null, minDemResolutionForPoints: this.owner.view.resolution } : null, l3 = await e4.getProjectedBoundingBox(a2, n2, o2, t2?.signal);
    if (!l3)
      return null;
    const h2 = l3.boundingBox;
    if (l3.requiresDrapedElevation) {
      const e5 = this.symbolCreationContext.elevationProvider;
      if (e5) {
        E$2(h2, Fe);
        const t3 = e5.getElevation(Fe[0], Fe[1], 0, i2, "ground") ?? 0;
        h2[2] = Math.min(h2[2], t3), h2[5] = Math.max(h2[5], t3);
      }
    }
    return { boundingBox: h2, screenSpaceObjects: l3.screenSpaceObjects };
  }
  async whenGraphicBounds(e4, t2) {
    await w$2(() => this.owner?.loadedGraphics);
    const i2 = this.owner.layer?.objectIdField, r2 = this.owner.loadedGraphics.find((t3) => t3 === e4 || null != i2 && null != t3.attributes && e4.attributes && t3.attributes[i2] === e4.attributes[i2]);
    if (!r2)
      throw new s$6("internal:graphic-not-part-of-view", "Graphic is not part of this view");
    const s4 = await this._whenGraphics3DGraphic(r2);
    return this._boundsForGraphics3DGraphic(s4, t2);
  }
  computeAttachmentOrigin(e4, t2) {
    const i2 = this.graphics3DGraphics.get(e4.uid);
    if (!i2)
      return null;
    const r2 = i2.computeAttachmentOrigin();
    if (0 === r2.render.num && 0 === r2.draped.num)
      return null;
    o$5(He, 0, 0, 0);
    let s4 = 0;
    if (r2.render.num > 0) {
      if (!n(r2.render.origin, this.symbolCreationContext.renderCoordsHelper.spatialReference, Ne, t2))
        return null;
      u$7(He, He, Ne), s4++;
    }
    if (r2.draped.num > 0) {
      const [e5, i3] = r2.draped.origin, a2 = this._viewElevationProvider.getElevation(e5, i3, "ground") ?? 0;
      if (o$5(Ne, e5, i3, a2), !n(Ne, this._viewElevationProvider.spatialReference, Ne, t2))
        return null;
      u$7(He, He, Ne), s4++;
    }
    return s4 > 1 && g$1(He, He, 1 / s4), new x$1({ x: He[0], y: He[1], z: He[2], spatialReference: t2 });
  }
  getSymbolLayerSize(e4, t2) {
    const i2 = this._symbols.get(e4.id);
    if (null == i2)
      throw new s$6("internal:symbol-not-part-of-view", "Symbol is not part of this view");
    const r2 = e4.symbolLayers.indexOf(t2);
    if (-1 === r2)
      throw new s$6("internal:missing-symbol-layer", "Symbol layer is not in symbol");
    const s4 = i2.getSymbolLayerSize(r2);
    if (null == s4)
      throw new s$6("internal:missing-size", "Symbol layer has no valid size");
    return s4;
  }
  _graphicsCollectionChanged(e4) {
    this._startCreateGraphics && (this.add(e4.added), this.remove(e4.removed));
  }
  graphicUpdateHandler(e4) {
    const t2 = e4.graphic.uid, i2 = this.graphics3DGraphics.get(t2);
    if (null != i2 || null != this._graphicsWithoutSymbol.get(t2))
      switch (e4.property) {
        case "visible":
          this._graphicUpdateVisibleHandler(i2);
          break;
        case "geometry":
          this._graphicUpdateGeometryHandler(i2, e4);
          break;
        case "symbol":
          this._graphicUpdateSymbolHandler(i2, e4);
          break;
        case "attributes":
          break;
        case "origin-transform":
          this._graphicUpdateTransformHandler(i2, e4);
      }
  }
  _graphicUpdateGeometryHandler(e4, t2) {
    this._graphicUpdateGeometryOrTransformHandler(e4, t2, () => null != t2.newValue && null != e4 && e4.graphics3DSymbol.updateGeometry(e4, t2.newValue));
    const i2 = t2.graphic.geometry;
    null != i2 && this._expandComputedExtent(i2);
  }
  _graphicUpdateTransformHandler(e4, t2) {
    const i2 = t2.graphic.geometry;
    this._graphicUpdateGeometryOrTransformHandler(e4, t2, () => null != t2.newValue && null != e4 && null != i2 && e4.graphics3DSymbol.updateTransform(e4, i2.spatialReference, t2.newValue, t2.action));
  }
  _graphicUpdateGeometryOrTransformHandler(e4, t2, i2) {
    if (null != t2.graphic.geometry)
      if (null != e4)
        i2() || this._recreateGraphic(e4.graphic);
      else {
        const e5 = t2.graphic.symbol?.id;
        if (e5) {
          const t3 = this._symbols.get(e5);
          if (null != t3 && t3.loadStatus === l$5.LOADING)
            return;
        }
        this._recreateGraphic(t2.graphic);
      }
    else
      this._recreateGraphic(t2.graphic);
  }
  _graphicUpdateSymbolHandler(e4, t2) {
    const i2 = t2.graphic, r2 = null != e4 ? e4.graphics3DSymbol : null != t2.oldValue ? this._symbols.get(t2.oldValue.id) : null;
    if (null == r2 || null == t2.newValue)
      return void this._recreateGraphic(i2);
    const s4 = r2.symbol, a2 = this._getConvertedSymbol(t2.newValue);
    if (null != a2 && (a2.type !== s4.type || "web-style" === a2.type) || "web-style" === s4.type)
      return void this._recreateGraphic(i2);
    const n2 = this._graphicsBySymbol.get(s4.id);
    if (n2 && 1 !== n2.size)
      return void this._recreateGraphic(i2);
    const o2 = m$2(s4, a2);
    if (null == o2)
      return void this._updateSymbolMapping(s4.id, a2);
    const l3 = { diff: o2, graphics3DGraphicPatches: [], symbolStatePatches: [] };
    if (r2.prepareSymbolPatch(l3), !h$4(l3.diff))
      return void this._recreateGraphic(i2);
    const h2 = this._getRenderingInfo(i2);
    if (null == h2)
      return void this._recreateGraphic(i2);
    const d3 = r2.extentPadding;
    for (const p2 of l3.symbolStatePatches)
      p2();
    if (d3 !== r2.extentPadding && this._recomputeExtentPadding(), null != e4)
      for (const p2 of l3.graphics3DGraphicPatches)
        p2(e4, h2);
    this._updateSymbolMapping(s4.id, a2);
  }
  _graphicUpdateVisibleHandler(e4) {
    this._updateUserVisibility(e4) && (this._labeler && this.owner.view.labeler.setDirty(), this.owner.view.deconflictor.setDirty());
  }
  recreateGraphics(e4) {
    this._suspendSymbolCleanup = true, this.remove(e4), this.add(e4), this._suspendSymbolCleanup = false, this.effectiveUpdatePolicy === C$1.SYNC && this._cleanupSymbols();
  }
  _recreateGraphic(e4) {
    this.recreateGraphics([e4]);
  }
  _beginGraphicUpdate(e4) {
    const t2 = this._graphicsUpdateId;
    return this._graphicsUpdateId++, this._graphicsWaitingForSymbol.set(e4.uid, t2), 1 === this._graphicsWaitingForSymbol.size && this.notifyChange("dataUpdating"), t2;
  }
  _endGraphicUpdate(e4) {
    e4 && (this._graphicsWaitingForSymbol.delete(e4.uid), 0 === this._graphicsWaitingForSymbol.size && (this._cleanupSymbols(), this.notifyChange("dataUpdating")));
  }
  _recomputeExtentPadding() {
    let e4 = 0;
    this._symbols.forEach((t2) => {
      null != t2 && (e4 = Math.max(e4, t2.extentPadding));
    }), this._set("extentPadding", e4);
  }
  _expandComputedExtent(e4) {
    const t2 = Te, i2 = e4.spatialReference;
    N(e4, t2);
    const r2 = this._viewSpatialReference, s4 = Ve.tmpVec;
    if (G(i2, r2) || t$5(t2[0], t2[1], 0, i2, s4, r2) && (t2[0] = s4[0], t2[1] = s4[1], t$5(t2[3], t2[4], 0, i2, s4, r2), t2[3] = s4[0], t2[4] = s4[1]), !(isFinite(t2[0]) && isFinite(t2[3]) && isFinite(t2[1]) && isFinite(t2[4])))
      return;
    const a2 = this.computedExtent;
    let n2 = null;
    const o2 = isFinite(t2[2]) && isFinite(t2[5]), l3 = o2 && (null == a2?.zmin || t2[2] < a2.zmin), h2 = o2 && (null == a2?.zmax || t2[5] > a2.zmax);
    if (a2) {
      (t2[0] < a2.xmin || t2[1] < a2.ymin || t2[3] > a2.xmax || t2[4] > a2.ymax || l3 || h2) && (n2 = this._propertiesPool.get("computedExtent"), n2.xmin = Math.min(t2[0], a2.xmin), n2.ymin = Math.min(t2[1], a2.ymin), n2.xmax = Math.max(t2[3], a2.xmax), n2.ymax = Math.max(t2[4], a2.ymax), n2.spatialReference = r2);
    } else
      n2 = this._propertiesPool.get("computedExtent"), n2.xmin = t2[0], n2.ymin = t2[1], n2.xmax = t2[3], n2.ymax = t2[4], n2.spatialReference = r2;
    n2 && (l3 && (n2.zmin = t2[2]), h2 && (n2.zmax = t2[5]), this._set("computedExtent", n2));
  }
  _abortElevationInfoChange() {
    this._elevationInfoChangeAbortController && (this._elevationInfoChangeAbortController.abort(), this._elevationInfoChangeAbortController = null);
  }
  async elevationInfoChange() {
    this._abortElevationInfoChange();
    const e4 = new AbortController();
    this._elevationInfoChangeAbortController = e4;
    const t2 = d$4(this.layer.elevationInfo, this.elevationFeatureExpressionEnabled);
    this.symbolCreationContext.featureExpressionInfoContext = await a$2(t2, this._viewSpatialReference, e4.signal, s$5.getLogger(this)), s$3(e4.signal), this._elevationInfoChangeAbortController = null, this._labeler?.elevationInfoChange(), this.forEachGraphics3DSymbol((e5, t3, i2) => {
      e5.globalPropertyChanged("elevationInfo", t3) ? t3.forEach((e6) => {
        const t4 = e6.graphic, i3 = e6.labelLayers;
        for (const r2 of i3) {
          r2.graphics3DSymbolLayer.updateGraphicElevationContext(t4, r2);
        }
      }) : this._recreateSymbol(i2);
    }), this.updateStageLayerElevationProvider(), this._elevationAlignment?.elevationInfoChange();
  }
  updateStageLayerElevationProvider() {
    this._stageLayerElevationProvider ? (this.layer.elevationInfo && "relative-to-scene" === this.layer.elevationInfo.mode || 0 === this._numberOfGraphicsProvidingElevation) && (this.owner.view.elevationProvider.unregister(this._stageLayerElevationProvider), this._stageLayerElevationProvider = r$4(this._stageLayerElevationProvider)) : (!this.layer.elevationInfo || this.layer.elevationInfo && "relative-to-scene" !== this.layer.elevationInfo.mode) && this._numberOfGraphicsProvidingElevation > 0 && (this._stageLayerElevationProvider = new y$1({ layer: this.layer, stageLayer: this.stageLayer, view: this.owner.view }), this.owner.view.elevationProvider.register("scene", this._stageLayerElevationProvider));
  }
  _clearSymbolsAndGraphics() {
    this.clear(), null != this._filterVisibility && this._filterVisibility.clear(), this._labeler?.reset(), this._deconflictor?.clear(), this._elevationAlignment?.clear(), this.stageLayer?.invalidateSpatialQueryAccelerator(), this._stageLayerElevationProvider && (this.owner.view.elevationProvider.unregister(this._stageLayerElevationProvider), this._stageLayerElevationProvider = r$4(this._stageLayerElevationProvider));
  }
  startCreateGraphics() {
    this._startCreateGraphics = true, this.recreateAllGraphics();
  }
  recreateAllGraphics() {
    this._recreateAllGraphics(false);
  }
  recreateAllGraphicsAndSymbols() {
    this._recreateAllGraphics(true);
  }
  _recreateAllGraphics(e4 = false) {
    if (!this._startCreateGraphics)
      return;
    const { loadedGraphics: t2, view: i2 } = this.owner, r2 = i2.basemapTerrain.tilingScheme && t2?.length ? t2.toArray() : null;
    !e4 && r2 || this._clearSymbolsAndGraphics(), this.symbolCreationContext.screenSizePerspectiveEnabled = this.owner.view.screenSizePerspectiveEnabled && !!this.layer.screenSizePerspectiveEnabled, this.symbolCreationContext.slicePlaneEnabled = !!this.owner.slicePlaneEnabled, this._set("computedExtent", null), r2 && (e4 ? this.add(r2) : this.recreateGraphics(r2));
  }
  _recreateSymbol(e4) {
    const t2 = this._graphicsBySymbol.get(e4), i2 = [];
    t2 && (t2.forEach((e5, t3) => {
      const r3 = e5.usedMemory;
      this._conditionalRemove(e5, t3), this._spatialIndex?.remove(e5), i2.push(e5.graphic), e5.destroy(), this._removeGraphics3DGraphic(t3, r3), this._updateLayerVisibility(), this._featureStore.events.emit("changed");
    }), this._graphicsBySymbol.set(e4, /* @__PURE__ */ new Map()));
    const r2 = this._symbols.get(e4);
    u$6(r2), this._symbols.delete(e4), this.add(i2);
  }
  _recreateGraphicsForSymbol(e4) {
    const t2 = this._graphicsBySymbol.get(e4);
    if (t2) {
      const e5 = [];
      t2.forEach((t3) => e5.push(t3.graphic)), this.recreateGraphics(e5);
    }
  }
  _conditionalRemove(e4, t2) {
    this._graphicsDrapedUids.delete(t2), this._objectStates?.removeGraphic(e4), this._labeler?.removeGraphic(e4), this._deconflictor?.removeGraphic(e4), null != this._graphicStateTracking && this._graphicStateTracking.removeGraphic(e4);
  }
  add(e4) {
    e4 && 0 !== e4.length && (this.owner.view.basemapTerrain?.tilingScheme ? (this._updatePolicyForGraphics(e4) === C$1.ASYNC ? this._addDelayed(e4) : this._addImmediate(e4), this.notifyChange("dataUpdating")) : s$5.getLogger(this).error("#add()", "Cannot add graphics before terrain surface has been initialized"));
  }
  _updatePolicyForGraphics(e4) {
    if (this.effectiveUpdatePolicy === C$1.SYNC && ("mesh" === this.layer.geometryType || null == this.layer.geometryType)) {
      for (const t2 of e4)
        if (null != t2.geometry && "mesh" === t2.geometry.type && !t2.geometry.loaded)
          return C$1.ASYNC;
    }
    return this.effectiveUpdatePolicy;
  }
  _addImmediate(e4) {
    this._geometryWarningLogged = false, this._symbolWarningLogged = false;
    for (const t2 of e4)
      this._addGraphic(t2, this._getRenderingInfo(t2, s$5.getLogger(this)), C$1.SYNC);
    this._cleanupSymbols(), this._labeler && (this.owner.view.labeler.setDirty(), this._cleanupSymbols()), this.owner.view.deconflictor.setDirty();
  }
  _addDelayed(e4) {
    for (const t2 of e4) {
      const e5 = t2.uid;
      let i2 = this._pendingUpdates.get(e5);
      i2 ? i2.add ? i2.state !== ze.NEW && i2.abortController?.abort() : this._pendingAdds++ : (i2 = this._pendingUpdatesPool.pushNew(), this._pendingAdds++, this._pendingUpdates.set(e5, i2)), i2.add = t2;
    }
    this.notifyChange("running"), this.notifyChange("updatingRemaining"), this.notifyChange("dataUpdating");
  }
  remove(e4) {
    this.effectiveUpdatePolicy === C$1.ASYNC ? this._removeDelayed(e4) : this._removeImmediate(e4), this.notifyChange("dataUpdating");
  }
  _removeImmediate(e4) {
    for (const t2 of e4)
      this._removeGraphic(t2);
    this._cleanupSymbols(), this._labeler && this.owner.view.labeler.setDirty(), this.owner.view.deconflictor.setDirty();
  }
  _removeDelayed(e4) {
    for (const t2 of e4) {
      const e5 = t2.uid, i2 = this._pendingUpdates.get(e5);
      if (i2)
        i2.add && (i2.remove ? i2.add = null : this._pendingUpdates.delete(e5), i2.state === ze.LOADING && i2.abortController?.abort(), this._pendingAdds--);
      else {
        const i3 = this._pendingUpdatesPool.pushNew();
        i3.remove = t2, this._pendingUpdates.set(e5, i3), this._pendingRemoves++, this._applyPendingRemovesFirst = true;
      }
    }
    0 === this._pendingUpdates.size && this._finishPendingUpdates(), this.notifyChange("running"), this.notifyChange("updatingRemaining"), this.notifyChange("dataUpdating");
  }
  _finishPendingUpdates() {
    this._pendingUpdatesPool.clear(), this._cleanupSymbols(), (this._pendingAdds || this._pendingRemoves) && s$5.getLogger(this).warn("pendingAdds/Removes in inconsistent state!"), this._pendingAdds = 0, this._pendingRemoves = 0, this._applyPendingRemovesFirst = false;
  }
  _applyPendingUpdates(e4) {
    if (this._geometryWarningLogged = false, this._symbolWarningLogged = false, 0 === this._pendingUpdates.size && this._spatialIndex?.updating)
      return this._spatialIndex.update(), void e4.madeProgress();
    if (this._applyPendingRemovesFirst) {
      this._applyPendingRemovesFirst = false;
      for (const [t2, i2] of this._pendingUpdates) {
        if (e4.done) {
          this._applyPendingRemovesFirst = true;
          break;
        }
        if (i2.remove && !i2.add && (this._pendingRemoves--, e4.madeProgress(), this._removeGraphic(i2.remove), i2.remove = null, this._pendingUpdates.delete(t2), 0 === this._pendingRemoves))
          break;
      }
    }
    for (const [t2, i2] of this._pendingUpdates) {
      if (e4.done)
        break;
      i2.add && i2.state === ze.NEW && this._processPendingUpdateNew(i2);
      let r2 = this.effectiveUpdatePolicy;
      if (!i2.remove || i2.add && i2.state !== ze.READY || (this._pendingRemoves--, e4.madeProgress(), this._removeGraphic(i2.remove), i2.remove = null, r2 = C$1.SYNC), i2.add)
        switch (i2.state) {
          case ze.READY:
            this._addGraphic(i2.add, i2.renderingInfo, r2), i2.add = null, this._pendingAdds--, e4.madeProgress();
            break;
          case ze.REJECTED:
            i2.add = null, this._pendingAdds--;
          case ze.LOADING:
        }
      null == i2.remove && null == i2.add && this._pendingUpdates.delete(t2);
    }
    0 === this._pendingUpdates.size && (this._finishPendingUpdates(), this.notifyChange("running"), this.notifyChange("dataUpdating"));
  }
  _processPendingUpdateNew(e4) {
    if (!e4.add)
      return void (e4.state = ze.READY);
    const t2 = e4.add.geometry;
    null == t2 || "mesh" !== t2.type || t2.loaded ? this._processPendingUpdateNewRenderingInfo(e4) : this._processPendingUpdateNewMesh(e4, t2);
  }
  async _processPendingUpdateNewMesh(e4, t2) {
    e4.state = ze.LOADING, e4.abortController = new AbortController();
    const i2 = e4.abortController.signal;
    try {
      await t2.load({ signal: i2 });
    } catch (r2) {
      return this._processPendingUpdateNewError(e4, r2);
    }
    e4.abortController = null, this._processPendingUpdateNewRenderingInfo(e4);
  }
  _processPendingUpdateNewError(e4, t2) {
    e4.abortController = null, b$3(t2) ? e4.state = ze.NEW : e4.state = ze.REJECTED;
  }
  async _processPendingUpdateNewRenderingInfo(e4) {
    if (null == this.layer.renderer || "dictionary" !== this.layer.renderer.type)
      return e4.renderingInfo = this._getRenderingInfo(e4.add, s$5.getLogger(this)), void (e4.state = ze.READY);
    e4.state = ze.LOADING, e4.abortController = new AbortController();
    let t2 = null;
    try {
      t2 = await this._getRenderingInfoAsync(e4.add, { signal: e4.abortController.signal });
    } catch (r2) {
      return e4.abortController = null, void (b$3(r2) ? e4.state = ze.NEW : e4.state = ze.REJECTED);
    }
    null == t2?.symbol ? (this._symbolWarningLogged || (this._symbolWarningLogged = true, s$5.getLogger(this).warn(`Graphic in layer ${this.layer.id} has no symbol and will not render`)), e4.renderingInfo = null) : e4.renderingInfo = t2, e4.state = ze.READY;
  }
  _addGraphic(e4, t2, i2) {
    if (this._graphicsWithoutSymbol.set(e4.uid, e4), null == t2?.symbol || !y$3(e4))
      return;
    if (null != this.stage.renderView.objectAndLayerIdRenderHelper && this.setUidToIdOnAdd) {
      const t3 = S$5(this.owner.view.map, this.layer.uid);
      this.stage.renderView.objectAndLayerIdRenderHelper.setUidToObjectAndLayerId(e4.objectId, e4.uid, this.layer.id, this.layer.uid, !!this.layer.popupEnabled && !t3 && u$8(this.layer, this.owner.view.popup?.defaultPopupTemplateEnabled));
    }
    const r2 = t2.symbol, s4 = this.getOrCreateGraphics3DSymbol(r2, t2.renderer);
    if (null == s4)
      return;
    this._expandComputedExtent(e4.geometry);
    const a2 = this._beginGraphicUpdate(e4), n2 = new r$5(e4, t2, this.layer);
    let o2 = false;
    const l3 = (e5) => {
      e5 === s4.symbol.id && (o2 = true);
    };
    this._whenSymbolRemoved.push(l3);
    const h2 = () => {
      if (--this._loadingSymbols, this.destroyed)
        return;
      this._whenSymbolRemoved.removeUnordered(l3);
      if (this._graphicsWaitingForSymbol.get(e4.uid) !== a2 || o2 || s4.destroyed || this.graphicSymbolSupported && e4.symbol && e4.symbol.id !== s4.symbol.id)
        --s4.referenced, this._cleanupSymbols();
      else {
        const t3 = this._createGraphics3DGraphic(s4, n2);
        this._spatialIndex && null != t3 && this._spatialIndex.add(t3), --s4.referenced, this._endGraphicUpdate(e4);
      }
      this._featureStore.events.emit("changed"), this._labeler && this.owner.view.labeler.setDirty();
    }, d3 = (t3) => {
      --this._loadingSymbols, this.destroyed || (this._whenSymbolRemoved.removeUnordered(l3), o2 || (b$3(t3) ? this.add([e4]) : s4.destroyed || this._endGraphicUpdate(e4)));
    };
    ++this._loadingSymbols, i2 === C$1.ASYNC ? s4.load(() => this._dataUpdateQueue.push(h2, null), (e5) => this._dataUpdateQueue.push(() => d3(e5), null)) : s4.load(h2, d3);
  }
  _removeGraphic(e4) {
    const t2 = e4.uid, i2 = this.graphics3DGraphics.get(t2);
    if (i2) {
      i2.graphics3DSymbol.onRemoveGraphic(i2);
      const e5 = i2.usedMemory, r2 = i2.isElevationSource;
      this._conditionalRemove(i2, t2), this._spatialIndex?.remove(i2);
      const s4 = i2.graphics3DSymbol.symbol.id;
      this._graphicsBySymbol.get(s4)?.delete(t2), this._graphicsWithoutSymbol.delete(t2), this._removeGraphics3DGraphic(t2, e5, r2), i2.destroy(), this._featureStore.events.emit("changed");
    } else
      this._graphicsWithoutSymbol.delete(t2), this._graphicsWaitingForSymbol.delete(t2), 0 === this._graphicsWaitingForSymbol.size && (this._cleanupSymbols(), this.notifyChange("dataUpdating"));
  }
  _hasLabelingContext(e4) {
    if (e4 instanceof b$4 || e4 instanceof m$3) {
      const t2 = this.symbolCreationContext.layer;
      return !!t2.labelingInfo && t2.labelingInfo.some((t3) => t3.symbol === e4);
    }
    return false;
  }
  _hasValidSymbolCreationContext(e4) {
    return !(e4 instanceof b$4 && !this._hasLabelingContext(e4)) || (s$5.getLogger(this).error("LabelSymbol3D is only valid as part of a LabelClass. Using LabelSymbol3D as a renderer symbol is not supported."), false);
  }
  _getRenderingInfo(e4, t2) {
    const i2 = e4.geometry;
    if (null == i2)
      return t2 && !this._geometryWarningLogged && (this._geometryWarningLogged = true, t2.warn(`Graphic in layer ${this.layer.id} has no geometry and will not render`)), null;
    if (!H$1(i2.spatialReference, this._viewSpatialReference))
      return t2 && !this._geometryWarningLogged && (this._geometryWarningLogged = true, t2.warn(`Graphic in layer ${this.layer.id} has incompatible spatial reference and will not render`)), null;
    if (!this.graphicSymbolSupported && null != e4.symbol)
      return t2 && !this._symbolWarningLogged && (this._symbolWarningLogged = true, t2.warn(`Graphic in layer ${this.layer.id} is not allowed to have a symbol, use a renderer instead`)), null;
    const r2 = this.rendererHasGeometryOperations ? c$5(e4, this.layer) : e4;
    let s4;
    if (this.owner.getRenderingInfo && (this.getRenderingInfoWithoutRenderer || null != this.currentRenderer))
      s4 = this.owner.getRenderingInfo(r2, this.currentRenderer, this._arcadeOnDemand);
    else {
      s4 = { symbol: r2.symbol || j$1(r2.geometry) };
    }
    return null == s4?.symbol ? (t2 && !this._symbolWarningLogged && (this._symbolWarningLogged = true, t2.warn(`Graphic in layer ${this.layer.id} has no symbol and will not render`)), null) : s4;
  }
  _getRenderingInfoAsync(e4, t2) {
    if (null == e4.geometry)
      return this._geometryWarningLogged || (this._geometryWarningLogged = true, s$5.getLogger(this).warn(`Graphic in layer ${this.layer.id} has no geometry and will not render`)), null;
    if (!this.graphicSymbolSupported && null != e4.symbol)
      return this._symbolWarningLogged || (this._symbolWarningLogged = true, s$5.getLogger(this).warn(`Graphic in layer ${this.layer.id} is not allowed to have a symbol, use a renderer instead`)), null;
    const r2 = this.rendererHasGeometryOperations ? c$5(e4, this.layer) : e4;
    return this.owner.getRenderingInfoAsync(r2, this.currentRenderer, this._arcadeOnDemand, t2);
  }
  _createGraphics3DSymbol(e4, t2) {
    if (!this._hasValidSymbolCreationContext(e4))
      return null;
    const i2 = this._getConvertedSymbol(e4);
    if (!i2)
      return null;
    let r2;
    if (null != t2 && "backgroundFillSymbol" in t2 && t2.backgroundFillSymbol) {
      const e5 = S$4(t2.backgroundFillSymbol, { ignoreDrivers: true });
      null != e5.symbol && "web-style" !== e5.symbol.type && "cim" !== e5.symbol.type && (r2 = e5.symbol.symbolLayers);
    }
    const s4 = t$1(i2, this.symbolCreationContext, r2);
    return s4.load(() => {
      const e5 = s4.extentPadding;
      e5 > this.extentPadding && this._set("extentPadding", e5), this.notifyChange("averageSymbolComplexity");
    }, () => {
    }), s4;
  }
  getOrCreateGraphics3DSymbol(e4, t2) {
    let i2 = this._symbols.get(e4.id);
    if (void 0 === i2) {
      const r2 = this._unusedSymbolsCache.pop(e4.id);
      i2 = null != r2 ? r2 : e4 instanceof h$5 ? new i$3(e4, (e5) => this._dataUpdateQueue.push(e5, null), (e5) => this._createGraphics3DSymbol(e5, t2)) : this._createGraphics3DSymbol(e4, t2), this._symbols.set(e4.id, i2);
    }
    return null != i2 && ++i2.referenced, i2;
  }
  trackGraphicState(e4) {
    return null == this._graphicStateTracking && (this._graphicStateTracking = new e$2(this)), this._graphicStateTracking.add(e4);
  }
  _addGraphics3DGraphic(e4) {
    this._usedMemory += e4.usedMemory, this.graphics3DGraphics.set(e4.graphic.uid, e4), this._numberOfGraphics++, e4.isElevationSource && (this._numberOfGraphicsProvidingElevation++, this.updateStageLayerElevationProvider()), this._updateLayerVisibility();
  }
  _removeGraphics3DGraphic(e4, t2, i2 = false) {
    this._usedMemory -= t2, this.graphics3DGraphics.delete(e4), this._numberOfGraphics--, i2 && (this._numberOfGraphicsProvidingElevation--, this.updateStageLayerElevationProvider()), this._updateLayerVisibility();
  }
  _createGraphics3DGraphic(e4, t2) {
    const i2 = t2.graphic;
    if (this._graphicsWithoutSymbol.delete(i2.uid), !this._symbols.has(e4.symbol.id))
      return this.add([i2]), null;
    if (this.graphics3DGraphics.has(i2.uid))
      return null;
    const r2 = e4.createGraphics3DGraphic(t2);
    if (null == r2)
      return null;
    this._addGraphics3DGraphic(r2);
    const s4 = e4.symbol.id;
    this._graphicsBySymbol.has(s4) || this._graphicsBySymbol.set(s4, /* @__PURE__ */ new Map()), this._graphicsBySymbol.get(s4).set(i2.uid, r2);
    if (r2.isDraped && this._graphicsDrapedUids.add(i2.uid), r2.centroid = null, null != i2.geometry && "point" !== i2.geometry.type && (r2.centroid = b$5(i2.geometry, this._viewSpatialReference)), this._updateUserVisibility(r2), null != this._scaleVisibility && this._scaleVisibility.updateVisibility(r2), null != this._filterVisibility) {
      const { defaultVisibility: e5 } = this._filterVisibility;
      r2.setVisibilityFlag(A$1.GRAPHIC, L$2.FILTER, e5), e5 || this._filterVisibility.reapply();
    }
    this._deconflictor?.addGraphic(r2), this._labeler?.addGraphic(r2), this._objectStates?.addGraphic(r2), this._deconflictor && this.owner.view.deconflictor.setInitialIconVisibilityFlag(this, r2), r2.initialize(this.stageLayer, this.owner), null != this._graphicStateTracking && this._graphicStateTracking.addGraphic(r2);
    const a2 = this._whenGraphics3DGraphicRequests[i2.uid];
    return a2 && (delete this._whenGraphics3DGraphicRequests[i2.uid], a2.resolve(r2)), r2;
  }
  _abortRendererChange() {
    this._rendererChangeAbortController && (this._rendererChangeAbortController.abort(), this._rendererChangeAbortController = null);
  }
  async rendererChange(e4) {
    if (this._abortRendererChange(), e4 !== this.currentRenderer)
      if (this._validateRenderer(e4), null == e4 && this._currentRendererChange(null, false), t$6(e4))
        if (null != e4 && e4.arcadeRequired) {
          const t2 = new AbortController();
          this._rendererChangeAbortController = t2;
          const { arcadeUtils: i2 } = await this._ensureArcade();
          s$3(t2);
          const r2 = i2.hasGeometryOperations(e4);
          r2 && (await i2.enableGeometryOperations(), s$3(t2)), this.effectiveUpdatePolicy === C$1.ASYNC ? await this._updateQueue.push(() => this._currentRendererChange(e4, r2), t2.signal) : this._currentRendererChange(e4, r2), this._rendererChangeAbortController = null;
        } else if (this.effectiveUpdatePolicy === C$1.ASYNC) {
          const t2 = new AbortController();
          this._rendererChangeAbortController = t2, await this._updateQueue.push(() => this._currentRendererChange(e4, false), t2.signal), this._rendererChangeAbortController = null;
        } else
          this._currentRendererChange(e4, false);
      else
        this._currentRendererChange(e4, false);
  }
  async _ensureArcade() {
    return null == this._arcadeOnDemand ? (this._arcadeOnDemand = await i$4(), this._arcadeOnDemand) : this._arcadeOnDemand;
  }
  _currentRendererChange(e4, t2) {
    this.currentRenderer = e4, this.rendererHasGeometryOperations = t2, this.symbolCreationContext.arcade = this._arcadeOnDemand;
    const i2 = this.symbolCreationContext.renderer;
    if (e4 === i2)
      return;
    if (this._symbolConversionCache.clear(), this._unusedSymbolsCache.clear(), null == e4)
      return this.symbolCreationContext.renderer = null, void this.recreateAllGraphicsAndSymbols();
    const r2 = m$2(i2, e4);
    this._updateUnchangedSymbolMappings(r2, e4, i2), this.symbolCreationContext.renderer = e4, null != r2 && ("complete" === r2.type ? this.recreateAllGraphicsAndSymbols() : "partial" === r2.type && (this._applyRendererDiff(r2, e4, i2) ? this._labeler?.reset() : this.recreateAllGraphicsAndSymbols()), this.notifyChange("averageSymbolComplexity"));
  }
  _diffHasSymbolChange(e4) {
    for (const t2 in e4.diff)
      switch (t2) {
        case "visualVariables":
        case "defaultSymbol":
        case "uniqueValueInfos":
          break;
        case "uniqueValueGroups":
        case "authoringInfo":
        case "fieldDelimiter":
          delete e4.diff[t2];
          break;
        default:
          return true;
      }
    return false;
  }
  _applySymbolSetDiff(e4, t2, i2) {
    e4 = e4 || [], t2 = t2 || [];
    const r2 = [];
    for (const s4 of t2) {
      const t3 = this._graphicsBySymbol.get(s4.id);
      t3 && t3.forEach((a2, n2) => {
        const o2 = a2.graphic, l3 = this.layer instanceof b$6 ? this.layer : null, h2 = this._arcadeOnDemand;
        if (s4 === i2.defaultSymbol && i2.getSymbol(c$5(o2, l3), { arcade: h2 }) === i2.defaultSymbol)
          return;
        const d3 = a2.usedMemory;
        e4.length || i2.defaultSymbol ? r2.push(o2) : this._graphicsWithoutSymbol.set(n2, o2);
        const p2 = this.graphics3DGraphics.get(n2);
        this._conditionalRemove(p2, n2), a2.destroy(), t3.delete(n2), this._removeGraphics3DGraphic(n2, d3), this._updateLayerVisibility();
      }), this._whenSymbolRemoved.forAll((e5) => e5(s4.id));
    }
    (e4.length || r2.length) && (this._graphicsWithoutSymbol.forEach((e5) => r2.push(e5)), this._graphicsWithoutSymbol.clear(), this.add(r2)), this._cleanupSymbols(), this._labeler && this.owner.view.labeler.setDirty(), this.owner.view.deconflictor.setDirty();
  }
  _applyUniqueValueRendererDiff(e4, t2, i2) {
    const r2 = e4.diff.defaultSymbol, a2 = e4.diff.uniqueValueInfos;
    if (r2 || a2) {
      const n2 = a2 ? a2.added.map((e5) => e5.symbol).filter(q$1) : [], o2 = a2 ? a2.removed.map((e5) => e5.symbol).filter(q$1) : [];
      if (a2)
        for (let e5 = 0; e5 < a2.changed.length; e5++)
          n2.push(a2.changed[e5].newValue.symbol), o2.push(a2.changed[e5].oldValue.symbol);
      return r2 ? (i2.defaultSymbol && o2.push(i2.defaultSymbol), t2.defaultSymbol && n2.push(t2.defaultSymbol)) : i2.defaultSymbol && n2.length && o2.push(t2.defaultSymbol), this._applySymbolSetDiff(n2, o2, t2), delete e4.diff.defaultSymbol, delete e4.diff.uniqueValueInfos, true;
    }
    return false;
  }
  _calculateUnchangedSymbolMapping(e4, t2, i2) {
    if ("unique-value" !== t2?.type || "unique-value" !== i2?.type || null != e4 && "partial" !== e4.type)
      return [];
    const r2 = (e5) => null != e5 ? e5.id : null, s4 = e4 && e4.diff, a2 = s4?.defaultSymbol, n2 = s4 && s4.uniqueValueInfos;
    let o2;
    if (n2)
      o2 = n2.unchanged.map((e5) => ({ oldId: r2(e5.oldValue.symbol), newId: r2(e5.newValue.symbol) }));
    else {
      o2 = [];
      for (const e5 of i2.uniqueValueInfos ?? []) {
        const i3 = r2(e5.symbol), s5 = t2.uniqueValueInfos?.find((t3) => t3.value === e5.value);
        s5 && i3 !== r2(s5.symbol) && o2.push({ oldId: i3, newId: r2(s5.symbol) });
      }
    }
    return !a2 && i2.defaultSymbol && o2.push({ oldId: r2(i2.defaultSymbol), newId: r2(t2.defaultSymbol) }), o2;
  }
  _updateSymbolMapping(e4, t2) {
    const i2 = null != t2 && t2 ? "string" == typeof t2 ? t2 : t2.id : null;
    if (null == e4 || e4 === i2)
      return;
    const r2 = this._graphicsBySymbol.get(e4);
    this._graphicsBySymbol.delete(e4), void 0 !== r2 && this._graphicsBySymbol.set(i2, r2);
    const s4 = this._symbols.get(e4);
    if (void 0 !== s4 && (this._symbols.delete(e4), this._symbols.set(i2, s4), null != s4)) {
      const e5 = "string" == typeof t2 ? null : t2;
      null != e5 ? s4.symbol = e5 : s4.symbol.id = i2;
    }
  }
  _updateUnchangedSymbolMappings(e4, t2, i2) {
    const r2 = this._calculateUnchangedSymbolMapping(e4, t2, i2);
    for (const { oldId: s4, newId: a2 } of r2)
      this._updateSymbolMapping(s4, a2);
  }
  _applyRendererDiff(e4, i2, r2) {
    if (this._diffHasSymbolChange(e4))
      return false;
    if (i2 instanceof A && r2 instanceof A && this._applyUniqueValueRendererDiff(e4, i2, r2) && 0 === Object.keys(e4.diff).length)
      return true;
    for (const [t2] of this._graphicsBySymbol) {
      const r3 = this._symbols.get(t2);
      if (null != r3)
        switch (r3.applyRendererDiff(e4, i2)) {
          case e$b.RecreateSymbol:
            this._recreateSymbol(t2);
            break;
          case e$b.RecreateGraphics:
            this._recreateGraphicsForSymbol(t2);
          case e$b.FastUpdate:
        }
    }
    return true;
  }
  opacityChange() {
    this.forEachGraphics3DSymbol((e4, t2) => e4.globalPropertyChanged("opacity", t2)), this._updateStageLayerVisibility();
  }
  _slicePlaneEnabledChange(e4) {
    e4 !== this.symbolCreationContext.slicePlaneEnabled && (this.symbolCreationContext.slicePlaneEnabled = e4, this.stageLayer.sliceable = e4, this.forEachGraphics3DSymbol((e5, t2) => e5.globalPropertyChanged("slicePlaneEnabled", t2)), this._deconflictor && this._deconflictor.slicePlaneEnabledChange(), this._labeler && this._labeler.slicePlaneEnabledChange());
  }
  _physicalBasedRenderingChange(e4) {
    this.symbolCreationContext.physicalBasedRenderingEnabled = e4, this.forEachGraphics3DSymbol((e5, t2, i2) => {
      e5.globalPropertyChanged("physicalBasedRenderingEnabled", t2) || this._recreateSymbol(i2);
    });
  }
  _skipHighSymbolLoDsChange(e4) {
    this.symbolCreationContext.skipHighSymbolLods = e4, this.forEachGraphics3DSymbol((e5, t2, i2) => {
      e5.globalPropertyChanged("skipHighSymbolLods", t2) || this._recreateSymbol(i2);
    });
  }
  _pixelRatioChange() {
    this.forEachGraphics3DSymbol((e4, t2, i2) => {
      e4.globalPropertyChanged("pixelRatio", t2) || this._recreateSymbol(i2);
    });
  }
  _signalUpdatingDuringAsyncLoadedGraphicsChange() {
    this._updatingPendingLoadedGraphicsChange && this._updatingPendingLoadedGraphicsChange.remove(), this._updatingPendingLoadedGraphicsChange = v$2(() => {
      this._updatingPendingLoadedGraphicsChange = null;
    });
  }
  setClippingExtent(e4, t2) {
    const i2 = this.symbolCreationContext.clippingExtent, r2 = u$9();
    return u$a(e4, r2, t2) ? this.symbolCreationContext.clippingExtent = Z(i$1(), r2) : this.symbolCreationContext.clippingExtent = null, !B(this.symbolCreationContext.clippingExtent, i2);
  }
  modifyGraphics3DGraphicVisibilities(e4) {
    if (this.destroyed)
      return;
    let t2 = false;
    this.graphics3DGraphics.forEach((i2) => {
      e4(i2) && (t2 = true);
    }), t2 && (this.owner.view.labeler?.setDirty(), this.owner.view.deconflictor?.setDirty());
  }
  forEachGraphics3DSymbol(e4) {
    for (const [t2, i2] of this._symbols) {
      if (null == i2)
        return;
      e4(i2, this._graphicsBySymbol.get(t2) || Be, t2);
    }
  }
  updateAllGraphicsVisibility() {
    null != this._filterVisibility && this._filterVisibility.reapply(), this.modifyGraphics3DGraphicVisibilities((e4) => {
      const t2 = this._updateUserVisibility(e4), i2 = null != this._scaleVisibility && this._scaleVisibility.updateVisibility(e4);
      return t2 || i2;
    });
  }
  _hideAllGraphics() {
    this.modifyGraphics3DGraphicVisibilities((e4) => e4.setVisibilityFlag(A$1.GRAPHIC, L$2.USER, false));
  }
  _validateRenderer(e4) {
    const t2 = s$7(e4, { geometryType: this.layer?.geometryType });
    if (t2) {
      const e5 = `Renderer for layer '${this.layer.title ? `${this.layer.title}, ` : ""}, id:${this.layer.id}' is not supported in a SceneView`;
      s$5.getLogger(this).warn(e5, t2.message);
    }
  }
  _cleanupSymbols() {
    if (this._graphicsWaitingForSymbol.size > 0 || this._suspendSymbolCleanup)
      return;
    let e4 = false;
    this._symbols.forEach((t2, i2) => {
      if (null == t2 || t2.referenced > 0)
        return;
      const r2 = this._graphicsBySymbol.get(i2);
      r2 && 0 !== r2.size || (this._graphicsBySymbol.delete(i2), this._symbols.delete(i2), this._unusedSymbolsCache.put(i2, t2, r$1(t2), e$c), e4 = true);
    }), e4 && (this._recomputeExtentPadding(), this.notifyChange("averageSymbolComplexity"));
  }
  get test() {
    return { snapshotInternals: () => ({ graphics: [...this.graphics3DGraphics.keys()].sort(), symbols: [...this._symbols.keys()].sort(), graphicsBySymbol: [...this._graphicsBySymbol.keys()].sort().map((e4) => ({ symbolId: e4, graphics: [...this._graphicsBySymbol.get(e4).keys()].sort() })), graphicsWithoutSymbol: [...this._graphicsWithoutSymbol.keys()].sort(), graphicsDrapedUids: [...this._graphicsDrapedUids].sort(), pendingUpdates: this._pendingUpdates }), symbols: this._symbols, filterVisibility: this._filterVisibility, numPending: this._pendingUpdates.size, forceUpdatePolicy: (e4) => {
      this._forcedUpdatePolicy = e4;
    } };
  }
  get performanceInfo() {
    return new s$1(this.graphics3DGraphics.size, this._graphicsWithoutSymbol.size, this._pendingUpdates.size);
  }
};
var ze;
ke.tmpVec = n$1(), e$5([y$2({ readOnly: true })], ke.prototype, "computedExtent", void 0), e$5([y$2()], ke.prototype, "currentRenderer", void 0), e$5([y$2()], ke.prototype, "rendererHasGeometryOperations", void 0), e$5([y$2()], ke.prototype, "_frameTaskHandle", void 0), e$5([y$2()], ke.prototype, "_dataUpdateQueue", void 0), e$5([y$2()], ke.prototype, "_updateQueue", void 0), e$5([y$2({ readOnly: true })], ke.prototype, "_viewSpatialReference", null), e$5([y$2()], ke.prototype, "_rendererChangeAbortController", void 0), e$5([y$2()], ke.prototype, "_elevationInfoChangeAbortController", void 0), e$5([y$2()], ke.prototype, "_initializeAbortController", void 0), e$5([y$2()], ke.prototype, "_elevationAlignment", void 0), e$5([y$2()], ke.prototype, "_scaleVisibility", void 0), e$5([y$2()], ke.prototype, "_filterVisibility", void 0), e$5([y$2()], ke.prototype, "_initializePromise", void 0), e$5([y$2()], ke.prototype, "_spatialIndex", void 0), e$5([y$2({ readOnly: true })], ke.prototype, "extentPadding", void 0), e$5([y$2()], ke.prototype, "_updatingPendingLoadedGraphicsChange", void 0), e$5([y$2()], ke.prototype, "_featureStore", void 0), e$5([y$2()], ke.prototype, "_deconflictor", void 0), e$5([y$2()], ke.prototype, "_labeler", void 0), e$5([y$2()], ke.prototype, "_objectStates", void 0), e$5([y$2()], ke.prototype, "_loadingSymbols", void 0), e$5([y$2()], ke.prototype, "preferredUpdatePolicy", void 0), e$5([y$2()], ke.prototype, "_forcedUpdatePolicy", void 0), e$5([y$2({ readOnly: true })], ke.prototype, "effectiveUpdatePolicy", null), e$5([y$2({ constructOnly: true })], ke.prototype, "elevationFeatureExpressionEnabled", void 0), e$5([y$2({ constructOnly: true })], ke.prototype, "owner", void 0), e$5([y$2({ constructOnly: true })], ke.prototype, "layer", void 0), e$5([y$2({ constructOnly: true })], ke.prototype, "graphicSymbolSupported", void 0), e$5([y$2({ constructOnly: true })], ke.prototype, "getRenderingInfoWithoutRenderer", void 0), e$5([y$2({ constructOnly: true })], ke.prototype, "componentFactories", void 0), e$5([y$2({ constructOnly: true })], ke.prototype, "setUidToIdOnAdd", void 0), e$5([y$2()], ke.prototype, "featureStore", null), e$5([y$2()], ke.prototype, "initializePromise", null), e$5([y$2()], ke.prototype, "scaleVisibility", null), e$5([y$2()], ke.prototype, "elevationAlignment", null), e$5([y$2()], ke.prototype, "objectStates", null), e$5([y$2()], ke.prototype, "filterVisibility", null), e$5([y$2({ readOnly: true })], ke.prototype, "updating", null), e$5([y$2({ readOnly: true })], ke.prototype, "dataUpdating", null), e$5([y$2({ readOnly: true })], ke.prototype, "running", null), e$5([y$2({ readOnly: true })], ke.prototype, "suspendedOrOutsideOfView", null), e$5([y$2({ readOnly: true, dependsOn: [] })], ke.prototype, "updatingRemaining", null), e$5([y$2({ readOnly: true })], ke.prototype, "displayFeatureLimit", null), e$5([y$2({ readOnly: true, dependsOn: [] })], ke.prototype, "averageSymbolComplexity", null), e$5([y$2({ constructOnly: true })], ke.prototype, "hasZ", void 0), e$5([y$2({ constructOnly: true })], ke.prototype, "hasM", void 0), e$5([y$2()], ke.prototype, "_objectIdField", null), ke = Ve = e$5([c$4("esri.views.3d.layers.graphics.Graphics3DCore")], ke), function(e4) {
  e4[e4.NEW = 0] = "NEW", e4[e4.LOADING = 1] = "LOADING", e4[e4.READY = 2] = "READY", e4[e4.REJECTED = 3] = "REJECTED";
}(ze || (ze = {}));
class Me {
  constructor() {
    this.add = null, this.renderingInfo = null, this.state = ze.NEW, this.abortController = null, this.remove = null;
  }
  clear() {
    this.add = null, this.renderingInfo = null, this.state = ze.NEW, this.abortController = null, this.remove = null;
  }
}
const We = 10, He = n$1(), Ne = n$1(), Be = /* @__PURE__ */ new Map();
let u$1 = class u extends S$2 {
  constructor(e4) {
    super(e4), this._scaleRangeActive = false, this._layerScaleRangeVisibilityQuery = false, this._extent = null, this._updatingHandles = new h$6(), this.graphicsCoreOwner = null, this.layer = null, this.queryGraphicUIDsInExtent = null, this.graphicsCore = null, this.basemapTerrain = null, this.layerScaleEnabled = true, this.suspended = false, this._dirty = true;
  }
  initialize() {
    this.updateScaleRangeActive();
    const e4 = this.graphicsCoreOwner.view.resourceController.scheduler;
    this.addHandles(e4.registerTask(I$1.SCALE_VISIBILITY, this)), this._updatingHandles.add(() => this.layer.effectiveScaleRange, () => this.layerMinMaxScaleChangeHandler());
  }
  destroy() {
    this._updatingHandles.destroy(), this.removeHandles(), this._dirty = false, this._extent = null, this.graphicsCoreOwner = null, this.layer = null, this.queryGraphicUIDsInExtent = null, this.graphicsCore = null, this.basemapTerrain = null;
  }
  get updating() {
    return this._dirty || this._updatingHandles.updating;
  }
  _setDirty() {
    this._dirty = true;
  }
  setExtent(e4) {
    const i2 = this.graphicsCoreOwner.view.spatialReference, t2 = this.graphicsCoreOwner.view.basemapTerrain.spatialReference;
    if (i2 === t2)
      this._extent = e4 ?? null;
    else {
      const r2 = u$9();
      i$5(e4, i2, r2, t2) ? this._extent = r2 : this._extent = null;
    }
    this._setDirty();
  }
  scaleRangeActive() {
    return this._scaleRangeActive;
  }
  updateScaleRangeActive() {
    const e4 = this.layer, i2 = e4.effectiveScaleRange;
    let t2 = this.layerScaleEnabled && null != i2 && g(i2.minScale, i2.maxScale);
    e4.labelingInfo && !t2 && (t2 = e4.labelingInfo.some((e5) => e5 && g(e5.minScale ?? 0, e5.maxScale ?? 0)));
    const r2 = this._scaleRangeActive !== t2;
    return this._scaleRangeActive = t2, t2 && !this.hasHandles(y2) && this.basemapTerrain ? (this.addHandles(this.basemapTerrain.on("scale-change", (e5) => this._scaleUpdateHandler(e5)), y2), this.layerScaleEnabled && this.addHandles(this.basemapTerrain.on("tiles-visibility-changed", () => this._setDirty()), y2)) : !t2 && this.hasHandles(y2) && this.removeHandles(y2), r2;
  }
  get running() {
    return !(!this.graphicsCoreOwner.view.basemapTerrain || !this.updating);
  }
  runTask(e4) {
    const i2 = this.graphicsCoreOwner.view.basemapTerrain;
    if (this._extent && i2 && i2.ready && this._scaleRangeActive && this.layerScaleEnabled) {
      if (this._layerScaleRangeVisibilityQuery)
        return o$4;
      {
        this._layerScaleRangeVisibilityQuery = true;
        const { minScale: e5, maxScale: t2 } = this.layer.effectiveScaleRange;
        i2.queryVisibleScaleRange(this._extent, e5, t2, (e6) => this._finishUpdate(e6));
      }
    } else
      this._finishUpdate(true);
    e4.madeProgress();
  }
  _finishUpdate(e4) {
    this._layerScaleRangeVisibilityQuery = false, this._set("suspended", !e4), this._dirty = false;
  }
  _visibleAtLayerScale(e4) {
    const i2 = this.layer.effectiveScaleRange;
    return !this.layerScaleEnabled || t$7(e4, i2.minScale || 0, i2.maxScale || 0);
  }
  _visibleAtLabelScale(e4, i2) {
    return t$7(e4, i2.minScale || 0, i2.maxScale || 0);
  }
  _graphicScale(e4) {
    let i2;
    if (null != e4.centroid ? i2 = e4.centroid : null != e4.graphic.geometry && "point" === e4.graphic.geometry.type && (i2 = e4.graphic.geometry), i2) {
      return this.graphicsCoreOwner.view.basemapTerrain ? this.graphicsCoreOwner.view.basemapTerrain.getScale(i2) : 1;
    }
    return null;
  }
  _graphicVisible(e4) {
    if (!this.layerScaleEnabled)
      return true;
    const i2 = this._graphicScale(e4);
    return this._visibleAtLayerScale(i2);
  }
  updateVisibility(e4) {
    if (this._scaleRangeActive) {
      const i2 = this._graphicVisible(e4);
      return e4.setVisibilityFlag(A$1.GRAPHIC, L$2.SCALE_RANGE, i2);
    }
    return false;
  }
  updateGraphicLabelScaleVisibility(e4) {
    if (!this._scaleRangeActive)
      return false;
    if (!e4.labelLayers || 0 === e4.labelLayers.length)
      return false;
    const i2 = this._graphicScale(e4), t2 = this._updateLabelScaleVisibility(e4, i2);
    return t2 && (this.graphicsCoreOwner.view.deconflictor.setDirty(), this.graphicsCoreOwner.view.labeler.setDirty()), t2;
  }
  _updateLabelScaleVisibility(e4, i2) {
    if (!e4.labelLayers || 0 === e4.labelLayers.length)
      return false;
    const t2 = e4.labelLayers[0]._labelClass;
    if (null != t2?.minScale && null != t2.maxScale) {
      const r2 = this._visibleAtLabelScale(i2, t2);
      if (e4.setVisibilityFlag(A$1.LABEL, L$2.SCALE_RANGE, r2))
        return true;
    }
    return false;
  }
  _scaleUpdateHandler(e4) {
    if (this._setDirty(), !this.graphicsCore.visible)
      return;
    const i2 = e4.extent, r2 = e4.scale, s4 = this._visibleAtLayerScale(r2);
    let a2 = false;
    const n2 = this.graphicsCoreOwner.view.spatialReference, h2 = e4.spatialReference;
    if (null == h2)
      return void s$5.getLogger(this).error("scaleUpdate: Internal error, no SpatialReference given for tiles");
    const p2 = !h2.equals(n2);
    if (p2) {
      if (!i$5(i2, h2, b, n2))
        return void s$5.getLogger(this).error("scaleUpdate: Internal error, cannot project AABR from " + h2 + " to wkid " + n2);
    }
    const d3 = p2 ? b : i2;
    this.queryGraphicUIDsInExtent(d3, n2, (e5) => {
      const t2 = this.graphicsCore.getGraphics3DGraphicById(e5);
      if (null == t2)
        return;
      const l3 = t2.centroid;
      null != l3 && (i2[0] > l3.x || i2[1] > l3.y || i2[2] < l3.x || i2[3] < l3.y) || (t2.setVisibilityFlag(A$1.GRAPHIC, L$2.SCALE_RANGE, s4) && (a2 = true), this._updateLabelScaleVisibility(t2, r2) && (a2 = true));
    }), a2 && (this.graphicsCoreOwner.view.deconflictor.setDirty(), this.graphicsCoreOwner.view.labeler.setDirty());
  }
  layerMinMaxScaleChangeHandler() {
    this.updateScaleRangeActive() && !this._scaleRangeActive ? this.graphicsCore.modifyGraphics3DGraphicVisibilities((e4) => e4.setVisibilityFlag(A$1.GRAPHIC, L$2.SCALE_RANGE, true)) : this._scaleRangeActive && this.graphicsCore.updateAllGraphicsVisibility(), this._setDirty();
  }
};
function g(e4, i2) {
  return e4 > 0 || i2 > 0;
}
e$5([y$2()], u$1.prototype, "graphicsCoreOwner", void 0), e$5([y$2()], u$1.prototype, "layer", void 0), e$5([y$2()], u$1.prototype, "queryGraphicUIDsInExtent", void 0), e$5([y$2()], u$1.prototype, "graphicsCore", void 0), e$5([y$2()], u$1.prototype, "basemapTerrain", void 0), e$5([y$2({ constructOnly: true })], u$1.prototype, "layerScaleEnabled", void 0), e$5([y$2({ readOnly: true })], u$1.prototype, "suspended", void 0), e$5([y$2({ readOnly: true })], u$1.prototype, "updating", null), e$5([y$2()], u$1.prototype, "_dirty", void 0), u$1 = e$5([c$4("esri.views.3d.layers.graphics.Graphics3DScaleVisibility")], u$1);
const y2 = "terrain-events", b = u$9();
const a = 0.05;
class l2 {
  constructor() {
    this._extents = new l$2({ allocator: (t2) => t2 || u$9() }), this._tmpExtent = u$9(), this._dirty = false;
  }
  get empty() {
    return 0 === this._extents.length;
  }
  get size() {
    return this._extents.length;
  }
  clear() {
    this._extents.clear();
  }
  add(t2) {
    this._contains(t2) || (this._removeContained(t2), e$d(this._extents.pushNew(), t2), this._dirty = true);
  }
  pop() {
    return this._dirty && this._mergeTight(), this._extents.pop();
  }
  merge(t2) {
    return this._mergeTight(t2), t2.hasProgressed;
  }
  _mergeTight(t2 = C$2) {
    const e4 = this._extents, o2 = /* @__PURE__ */ new Set();
    let i2 = 0;
    for (; i2 !== e4.length; ) {
      e4.sort((t3, e5) => t3[0] - e5[0]), i2 = e4.length, o2.clear();
      for (let i3 = 0; i3 < e4.length; ++i3) {
        if (t2.done)
          return;
        const h2 = e4.at(i3);
        if (h2) {
          for (let t3 = i3 + 1; t3 < e4.length; ++t3) {
            const r2 = e4.at(t3);
            if (null == r2 || r2[0] >= h2[2])
              break;
            o2.add(r2);
          }
          o2.forEach((i4) => {
            if (h2 === i4)
              return;
            if (i4[2] <= h2[0])
              return void o2.delete(i4);
            const l3 = l$6(h2), _2 = l$6(i4), c2 = this._tmpExtent;
            m$4(h2, i4, c2);
            const d3 = l3 + _2;
            (l$6(c2) - d3) / d3 < a && (e$d(h2, c2), o2.delete(i4), e4.remove(i4), t2.madeProgress());
          }), o2.add(h2);
        }
      }
    }
    this._dirty = false;
  }
  _contains(t2) {
    return this._extents.some((e4) => R$1(e4, t2));
  }
  _removeContained(t2) {
    this._extents.filterInPlace((e4) => !R$1(t2, e4));
  }
  get test() {
    const t2 = this;
    return { containsPoint: (e4) => t2._extents.some((t3) => b$7(t3, e4)) };
  }
}
let p = class extends S$2 {
  constructor(t2) {
    super(t2), this._dirtyExtents = new l2(), this._globalDirty = false, this._averageExtentUpdateSize = 0, this._dirtyGraphicsSet = /* @__PURE__ */ new Set(), this._updateElevation = false, this.graphicsCoreOwner = null, this.graphicsCore = null, this.events = new o$1();
  }
  initialize() {
    const t2 = this.elevationProvider, e4 = this.graphicsCoreOwner.view.resourceController.scheduler;
    this._task = e4.registerTask(d2(this.graphicsCore.layer.elevationInfo?.mode), this), this.addHandles([t2.on("elevation-change", (t3) => this._elevationChanged(t3)), d$5(() => this.graphicsCoreOwner.suspended, () => this._suspendedChange()), this._task, d$5(() => d2(this.graphicsCore.layer.elevationInfo?.mode), (t3) => this._task.priority = t3)]);
  }
  destroy() {
    this._dirtyGraphicsSet.clear(), this.graphicsCoreOwner = null, this.graphicsCore = null, this.queryGraphicUIDsInExtent = null, this.elevationProvider = null;
  }
  clear() {
    this._dirtyGraphicsSet.clear(), this.notifyChange("updating");
  }
  _suspendedChange() {
    true === this.graphicsCoreOwner.suspended ? this._updateElevation = false : false === this.graphicsCoreOwner.suspended && this._updateElevation && (this._globalDirty = true, this.notifyChange("updating"));
  }
  elevationInfoChange() {
    this._globalDirty = true, this.notifyChange("updating");
  }
  get updating() {
    return this.running;
  }
  get running() {
    return this._dirtyGraphicsSet.size > 0 || this._dirtyExtents && !this._dirtyExtents.empty || this._globalDirty;
  }
  get updatingRemaining() {
    return this._dirtyGraphicsSet.size + this._dirtyExtents.size * this._averageExtentUpdateSize;
  }
  runTask(t2) {
    for (this._globalDirty && (this._markAllGraphicsElevationDirty(), this._globalDirty = false, t2.madeProgress()), t2.run(() => this._dirtyExtents.merge(t2)); this.running && !t2.done; )
      this._updateDirtyGraphics(t2), this._updateDirtyExtents(t2);
    this.notifyChange("updating");
  }
  _updateDirtyGraphics(t2) {
    const e4 = this.graphicsCoreOwner.view.renderCoordsHelper, i2 = this.graphicsCore.effectiveUpdatePolicy === C$1.ASYNC;
    for (const r2 of this._dirtyGraphicsSet.keys()) {
      const s4 = this.graphicsCore.getGraphics3DGraphicById(r2);
      if (this._dirtyGraphicsSet.delete(r2), null != s4 && (s4.alignWithElevation(this.elevationProvider, e4, i2), this.graphicsCoreOwner.view.deconflictor.setDirty(), t2.madeProgress()), t2.done)
        return;
    }
  }
  _updateDirtyExtents(t2) {
    for (; !this._dirtyExtents.empty && !t2.done; ) {
      const e4 = this._dirtyExtents.pop(), i2 = this.elevationProvider.spatialReference;
      this.events.emit("invalidate-elevation", { extent: e4, spatialReference: i2 });
      const r2 = this._dirtyGraphicsSet.size;
      this.queryGraphicUIDsInExtent(e4, i2, (t3) => {
        const e5 = this.graphicsCore.getGraphics3DGraphicById(t3);
        null != e5 && e5.needsElevationUpdates() && this._dirtyGraphicsSet.add(t3);
      }), this._averageExtentUpdateSize = 0.1 * (this._dirtyGraphicsSet.size - r2) + 0.9 * this._averageExtentUpdateSize, t2.madeProgress();
    }
  }
  _markAllGraphicsElevationDirty() {
    this._dirtyExtents.clear(), this._dirtyGraphicsSet.clear(), this.graphicsCore.graphics3DGraphics.forEach((t2, e4) => this._dirtyGraphicsSet.add(e4));
  }
  _elevationChanged(t2) {
    if ("scene" === t2.context && (!this.graphicsCore.layer.elevationInfo || "relative-to-scene" !== this.graphicsCore.layer.elevationInfo.mode))
      return;
    const e4 = t2.extent;
    if (this.graphicsCoreOwner.suspended) {
      if (!this._updateElevation) {
        const t3 = this.graphicsCore.computedExtent;
        t3 && e4[2] > t3.xmin && e4[0] < t3.xmax && e4[3] > t3.ymin && e4[1] < t3.ymax && (this._updateElevation = true);
      }
      this.events.emit("invalidate-elevation", t2);
    } else
      e4[0] === -1 / 0 ? this._globalDirty = true : this._dirtyExtents.add(e4), this.notifyChange("updating");
  }
};
function d2(t2) {
  return null == t2 ? I$1.ELEVATION_ALIGNMENT : "relative-to-scene" === t2 ? I$1.ELEVATION_ALIGNMENT_SCENE : I$1.ELEVATION_ALIGNMENT;
}
e$5([y$2()], p.prototype, "graphicsCoreOwner", void 0), e$5([y$2()], p.prototype, "graphicsCore", void 0), e$5([y$2()], p.prototype, "queryGraphicUIDsInExtent", void 0), e$5([y$2()], p.prototype, "elevationProvider", void 0), e$5([y$2({ readOnly: true })], p.prototype, "updating", null), e$5([y$2({ readOnly: true })], p.prototype, "updatingRemaining", null), p = e$5([c$4("esri.views.3d.layers.graphics.Graphics3DElevationAlignment")], p);
const h = 1.2;
let u2 = class extends S$2 {
  constructor(e4) {
    super(e4), this.suspended = false, this._extent = null, this._extentIntersectionDirty = true, this._isVisibleBelowSurfaceInternal = false, this.graphicsCoreOwner = null, this.updating = true;
  }
  initialize() {
    const { graphicsCoreOwner: e4 } = this;
    this._extentIntersection = new N$1({ renderCoordsHelper: e4.view.renderCoordsHelper });
    const t2 = e4.view, n2 = t2.basemapTerrain, o2 = t2.resourceController.scheduler;
    this.addHandles([t2.on("resize", () => this._viewChange()), d$5(() => t2.state.camera, () => this._viewChange(), C$3), o2.registerTask(I$1.FRUSTUM_VISIBILITY, this), d$5(() => n2.visibleElevationBounds, () => this._elevationBoundsChange())]), "local" === t2.viewingMode ? this._isVisibleBelowSurface = true : this.addHandles([d$5(() => [n2.baseOpacity, n2.wireframe, t2.map?.ground?.navigationConstraint?.type], () => this._updateIsVisibleBelowSurface(), P$1)]);
  }
  destroy() {
    this._set("graphicsCoreOwner", null), this._extent = null, this._extentIntersection = null;
  }
  _setDirty() {
    this.updating || this._set("updating", true);
  }
  setExtent(e4) {
    this._extent = e4, this._extentIntersectionDirty = true, this._setDirty();
  }
  _viewChange() {
    this._setDirty();
  }
  _elevationBoundsChange() {
    this._setDirty(), this._extentIntersectionDirty = true;
  }
  set _isVisibleBelowSurface(e4) {
    this._isVisibleBelowSurfaceInternal = e4, this._setDirty(), this._extentIntersectionDirty = true;
  }
  _updateIsVisibleBelowSurface() {
    const e4 = this.graphicsCoreOwner.view, t2 = e4.basemapTerrain, s4 = "local" === e4.viewingMode, i2 = "none" === e4.map.ground?.navigationConstraint?.type;
    this._isVisibleBelowSurface = s4 || !t2.opaque || i2;
  }
  _updateExtentIntersection() {
    if (!this._extentIntersectionDirty)
      return;
    this._extentIntersectionDirty = false;
    const e4 = this.graphicsCoreOwner.view;
    let t2;
    if (this._isVisibleBelowSurfaceInternal)
      t2 = -0.3 * s$8(e4.spatialReference).radius;
    else {
      const { min: s4, max: i2 } = e4.basemapTerrain.visibleElevationBounds;
      t2 = s4 - Math.max(1, (i2 - s4) * (h - 1));
    }
    this._extentIntersection.update(this._extent, e4.spatialReference, t2);
  }
  get running() {
    return this.updating;
  }
  runTask(e4) {
    if (this._set("updating", false), !this._extent)
      return this._set("suspended", false), o$4;
    this._updateExtentIntersection();
    const t2 = this.graphicsCoreOwner.view.frustum, s4 = s$8(this.graphicsCoreOwner.view.spatialReference).radius;
    this._set("suspended", !this._extentIntersection.isVisibleInFrustum(t2, s4)), e4.madeProgress();
  }
};
e$5([y$2({ readOnly: true })], u2.prototype, "suspended", void 0), e$5([y$2({ constructOnly: true })], u2.prototype, "graphicsCoreOwner", void 0), e$5([y$2({ readOnly: true })], u2.prototype, "updating", void 0), u2 = e$5([c$4("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")], u2);
var t;
!function(e4) {
  e4[e4.Object = 0] = "Object", e4[e4.RenderGeometry = 1] = "RenderGeometry", e4[e4.External = 2] = "External", e4[e4.COUNT = 3] = "COUNT";
}(t || (t = {}));
class r {
  constructor() {
    this._items = [];
  }
  addObject(e4, r2) {
    this._items.push({ type: t.Object, objectStateId: r2, object: e4 });
  }
  addRenderGeometry(e4, r2, o2) {
    this._items.push({ type: t.RenderGeometry, objectStateId: r2, renderGeometry: e4, owner: o2 });
  }
  addExternal(e4, r2) {
    this._items.push({ type: t.External, objectStateId: r2, remove: e4 });
  }
  remove(e4) {
    for (let t2 = this._items.length - 1; t2 >= 0; --t2) {
      const r2 = this._items[t2];
      r2.objectStateId === e4 && (this._removeObjectStateItem(r2), this._items.splice(t2, 1));
    }
  }
  removeObject(e4) {
    for (let r2 = this._items.length - 1; r2 >= 0; --r2) {
      const o2 = this._items[r2];
      o2.type === t.Object && o2.object === e4 && (this._removeObjectStateItem(o2), this._items.splice(r2, 1));
    }
  }
  removeRenderGeometry(e4) {
    for (let r2 = this._items.length - 1; r2 >= 0; --r2) {
      const o2 = this._items[r2];
      o2.type === t.RenderGeometry && o2.renderGeometry === e4 && (this._removeObjectStateItem(o2), this._items.splice(r2, 1));
    }
  }
  removeAll() {
    this._items.forEach((e4) => {
      this._removeObjectStateItem(e4);
    }), this._items = [];
  }
  _removeObjectStateItem(r2) {
    switch (r2.type) {
      case t.Object:
        r2.objectStateId.channel === t$8.Highlight ? r2.object.removeHighlight(r2.objectStateId) : r2.objectStateId.channel === t$8.MaskOccludee && r2.object.removeOcclude(r2.objectStateId);
        break;
      case t.RenderGeometry:
        r2.owner.removeRenderGeometryObjectState(r2.renderGeometry, r2.objectStateId);
        break;
      case t.External:
        r2.remove(r2.objectStateId);
    }
  }
}
class e3 {
  constructor(e4, i2) {
    this.stateType = e4, this.objectIdField = i2, this.objectStateSet = new r(), this.ids = /* @__PURE__ */ new Set(), this.paused = false;
  }
  hasGraphic(t2) {
    if (this.objectIdField) {
      const e4 = t2.graphic.attributes[this.objectIdField];
      return this.ids.has(e4);
    }
    return this.ids.has(t2.graphic.uid);
  }
}
class s3 {
  constructor(t2) {
    this._graphicsCore = t2, this._stateSets = new Array();
  }
  destroy() {
    this.reset(), this._stateSets = null;
  }
  reset() {
    this._stateSets && (this._stateSets.forEach((t2) => t2.objectStateSet.removeAll()), this._stateSets.length = 0);
  }
  acquireSet(s4, a2) {
    const i2 = new e3(s4, a2);
    this._stateSets.push(i2);
    const h2 = e$8(() => this.releaseSet(i2));
    return { set: i2, handle: h2 };
  }
  releaseSet(t2) {
    t2.objectStateSet.removeAll();
    const e4 = this._stateSets ? this._stateSets.indexOf(t2) : -1;
    -1 !== e4 && this._stateSets.splice(e4, 1);
  }
  _addObjectStateSet(t2, e4) {
    t2.addObjectStateSet(e4.stateType, e4.objectStateSet);
  }
  _removeObjectStateSet(t2, e4) {
    t2.removeObjectState(e4.objectStateSet);
  }
  setUid(t2, e4) {
    t2.ids.add(e4);
    const s4 = this._graphicsCore.graphics3DGraphics.get(e4);
    s4 && this._addObjectStateSet(s4, t2);
  }
  setUids(t2, e4) {
    e4.forEach((e5) => this.setUid(t2, e5));
  }
  setObjectIds(t2, e4) {
    e4.forEach((e5) => t2.ids.add(e5)), this._initializeSet(t2);
  }
  addGraphic(t2) {
    this._stateSets.forEach((e4) => {
      !e4.paused && e4.hasGraphic(t2) && this._addObjectStateSet(t2, e4);
    });
  }
  removeGraphic(t2) {
    this._stateSets.forEach((e4) => {
      e4.hasGraphic(t2) && this._removeObjectStateSet(t2, e4);
    });
  }
  allGraphicsDeleted() {
    this._stateSets && this._stateSets.forEach((t2) => t2.objectStateSet.removeAll());
  }
  _initializeSet(t2) {
    const e4 = this._graphicsCore.graphics3DGraphics;
    t2.objectIdField ? e4.forEach((e5) => {
      e5 && t2.hasGraphic(e5) && this._addObjectStateSet(e5, t2);
    }) : t2.ids.forEach((s4) => {
      const a2 = e4.get(s4);
      a2 && this._addObjectStateSet(a2, t2);
    });
  }
  get test() {
    return { states: this._stateSets };
  }
}
export {
  u2 as a,
  s$1 as b,
  e$3 as e,
  ke as k,
  l2 as l,
  p,
  s3 as s,
  u$1 as u
};
