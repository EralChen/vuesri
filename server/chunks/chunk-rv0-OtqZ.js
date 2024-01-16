import { bv as w$1, jB as S$1, x8 as b$2, jA as u$5, hE as h$1, jz as c$1, x9 as c$2, bh as V, hF as h$2, xa as e$3, xb as c$3, xc as i, cU as i$1, bo as e$4, bp as y$2, br as c$4, bs as g$1, d1 as o, vn as z, pr as I, hS as t$2, h2 as t$3, xd as m, xe as e$5, is as _$2, b1 as s$2, bD as u$6, xf as w, vF as O, bS as e$6, aq as has, d2 as Z, pw as b$3, ng as t$4, xg as E$1, n3 as W, n4 as r$1, bb as s$4, eK as P, nK as S$2, hw as r$2, eM as h$3, ar as D, eQ as n$1, bG as C$1, xh as d$2, bV as S$3, xi as m$1, xj as o$2, ap as M$1, kx as F, as as l$2, xk as e$7, xl as A$1, xm as L, xn as l$3, xo as _$3, kj as d$3, kk as a$2, bJ as d$4, eg as p$1, e3 as v$1, bR as A, qV as C$2, eV as I$1, kr as l$4, aM as s$5, nT as a$3, mk as n$2, xp as g$2, xq as t$5, b7 as C$3, sd as E$2, dS as w$2, eP as o$3, eL as t$6, l6 as u$7, mL as g$3, cy as x$1, xr as l$5, bH as a$4, xs as y$3, xt as N, c4 as d$5, xu as t$7, hV as r$3, bI as b$4, xv as f, mo as S$4, eT as u$8, xw as r$4, xx as b$5, bA as m$2, cP as D$1, bO as c$5, xy as u$9, xz as i$2, sg as w$3, dK as i$3, bN as b$6, bX as k$1, jx as A$2, xA as e$8, dx as k, aw as u$a, xB as u$b, cY as B, gr as n, bm as h$4, uU as s$7, sk as t$9, kd as e$9, rw as l$6, d6 as m$3, it as R, uV as b$7, xC as N$1, bK as C$4, bn as P$1, nH as R$1, bP as t$a } from "./chunk-KFNcxJaF.js";
import { t as t$8, s as s$6 } from "./chunk-pMG-yMIH.js";
import { o as o$1 } from "./chunk-MT1PWqgL.js";
import { s as s$3 } from "./chunk-tNARKRa3.js";
const a$1 = w$1.fromSimpleMarkerSymbol(S$1), c = b$2.fromSimpleLineSymbol(u$5), u$4 = h$1.fromSimpleFillSymbol(c$1), S = new c$2({ symbolLayers: new V([new h$2({ material: { color: e$3 }, edges: new c$3({ size: "1px", color: i }) })]) });
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
let e$2 = class e {
  constructor(e4, m2, t2) {
    this.maximumTotalNumberOfVertices = e4, this.maximumNumberOfFeatures = m2, this.averageSymbolComplexity = t2;
  }
};
const u$3 = i$1();
let d$1 = class d extends g$1 {
  constructor(t2) {
    super(t2), this.events = new o(), this.hasZ = null, this.hasM = null, this.objectIdField = null, this.featureAdapter = { getAttribute: (t3, e4) => "graphic" in t3 ? t3.graphic.attributes[e4] : o$1.getAttribute(t3, e4), getAttributes: (t3) => "graphic" in t3 ? t3.graphic.attributes : o$1.getAttributes(t3), getObjectId: (t3) => "graphic" in t3 ? z(t3.graphic, this.objectIdField) ?? void 0 : o$1.getObjectId(t3), getGeometry: (t3) => "graphic" in t3 ? t3.getAsOptimizedGeometry(this.hasZ, this.hasM) : o$1.getGeometry(t3), getCentroid: (t3, e4) => {
      if ("graphic" in t3) {
        let r2 = null;
        null != t3.centroid ? r2 = t3.centroid : "point" === t3.graphic.geometry.type && I(t3.graphic.geometry, l$1, this.viewSpatialReference) && (r2 = l$1);
        const o2 = new Array(2 + (e4.hasZ ? 1 : 0) + (e4.hasM ? 1 : 0));
        return null == r2 ? (o2[0] = 0, o2[1] = 0, o2[2] = 0, o2[3] = 0) : (o2[0] = r2.x, o2[1] = r2.y, e4.hasZ && (o2[2] = r2.hasZ ? r2.z : 0), e4.hasM && (o2[e4.hasZ ? 3 : 2] = r2.hasM ? r2.m : 0)), new t$2([], o2);
      }
      return o$1.getCentroid(t3, e4);
    }, cloneWithGeometry: (t3, e4) => "graphic" in t3 ? new t$3(e4, this.featureAdapter.getAttributes(t3), null, this.featureAdapter.getObjectId(t3)) : o$1.cloneWithGeometry(t3, e4) };
  }
  forEachInBounds(t2, e4) {
    this.getSpatialIndex().forEachInBounds(t2, e4);
  }
  forEachBounds(t2, e4) {
    const r2 = this.getSpatialIndex();
    for (const o2 of t2) {
      const t3 = this.featureAdapter.getObjectId(o2);
      null != r2.getBounds(t3, u$3) && e4(u$3);
    }
  }
};
e$4([y$2({ constructOnly: true })], d$1.prototype, "getSpatialIndex", void 0), e$4([y$2({ constructOnly: true })], d$1.prototype, "forEach", void 0), e$4([y$2({ constructOnly: true })], d$1.prototype, "hasZ", void 0), e$4([y$2({ constructOnly: true })], d$1.prototype, "hasM", void 0), e$4([y$2({ constructOnly: true })], d$1.prototype, "objectIdField", void 0), e$4([y$2({ constructOnly: true })], d$1.prototype, "viewSpatialReference", void 0), e$4([y$2({ constructOnly: true })], d$1.prototype, "featureSpatialReference", void 0), d$1 = e$4([c$4("esri.views.3d.layers.graphics.Graphics3DFeatureStore")], d$1);
const l$1 = { type: "point", x: 0, y: 0, hasZ: false, hasM: false, spatialReference: null };
let s$1 = class s extends m {
  constructor(r2, o2, t2) {
    super(r2, o2, t2), this._calloutSymbolLayer = null, this.symbol.hasVisibleCallout() && (this._calloutSymbolLayer = e$5(this.symbol, o2));
  }
  async doLoad(o2) {
    const a2 = this._calloutSymbolLayer ? _$2(this._calloutSymbolLayer.load()) : null;
    try {
      await super.doLoad(o2), s$2(o2);
    } catch (l2) {
      throw this._calloutSymbolLayer?.abortLoad(), l2;
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
  return "point-3d" === t2.type ? new s$1(t2, i2, n2) : new m(t2, i2, n2);
}
let e$1 = class e2 {
  constructor(t2) {
    this._graphicsCore = t2, this._idToState = /* @__PURE__ */ new Map(), this._states = /* @__PURE__ */ new Set();
    const i2 = t2.owner.layer?.objectIdField;
    i2 ? (this._getGraphicId = (t3) => z(t3, i2), this._getGraphics3DGraphicById = (t3) => this._graphicsCore.getGraphics3DGraphicByObjectId(t3)) : (this._getGraphicId = (t3) => t3.uid, this._getGraphics3DGraphicById = (t3) => this._graphicsCore.getGraphics3DGraphicById(t3));
  }
  destroy() {
    this._idToState.clear(), this._states.forEach((t2, i2) => this.remove(i2));
  }
  add(t2) {
    const s3 = e$6(() => this.remove(t2));
    if (this._states.has(t2))
      return s3;
    const e4 = this._getGraphicId(t2.graphic), a2 = this._getGraphics3DGraphicById(e4);
    this._states.has(t2) || this._states.add(t2);
    return this._ensureStateList(e4).push(t2), t2.displaying = null != a2 && a2.isVisible(), t2.isDraped = null != a2 && a2.isDraped, t2.tracking = true, null != a2 && t2.emit("changed"), s3;
  }
  remove(i2) {
    if (this._states.has(i2)) {
      if (this._idToState.size) {
        const s3 = this._getGraphicId(i2.graphic), e4 = this._idToState.get(s3);
        e4 && (O(e4, i2), 0 === e4.length && this._idToState.delete(s3));
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
    this._states.forEach((t2) => {
      t2.displaying = false;
    });
  }
  _ensureStateList(t2) {
    const i2 = this._idToState.get(t2);
    if (i2)
      return i2;
    const s3 = new Array();
    return this._idToState.set(t2, s3), s3;
  }
  _forEachState(t2, i2) {
    if (0 === this._states.size || 0 === this._idToState.size)
      return;
    const s3 = this._getGraphicId(t2.graphic), e4 = this._idToState.get(s3);
    null != e4 && e4.forEach(i2);
  }
};
let d2 = class extends g$1 {
  constructor(t2) {
    super(t2), this._index = new s$3(9, has("esri-csp-restrictions") ? (t3) => ({ minX: t3.extent[0], minY: t3.extent[1], maxX: t3.extent[2], maxY: t3.extent[3] }) : [".extent[0]", ".extent[1]", ".extent[2]", ".extent[3]"]), this._missing = /* @__PURE__ */ new Set(), this._boundsByFeature = /* @__PURE__ */ new Map(), this.spatialReference = null, this.hasZ = null, this.hasM = null, this.objectIdField = null, this.updating = false;
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
  queryGraphicUIDsInExtent(t2, e4, s3) {
    null != e4 && e4.equals(this.spatialReference) && (u$2.minX = t2[0], u$2.minY = t2[1], u$2.maxX = t2[2], u$2.maxY = t2[3], this.update(), this._index.search(u$2, (t3) => s3(t3.graphic.uid)));
  }
  add(t2) {
    this._missing.add(t2), this.updating = true;
  }
  remove(t2) {
    if (this._missing.delete(t2))
      return void (this.updating = this._missing.size > 0);
    this._index.remove(t2);
    const e4 = z(t2.graphic, this._get("objectIdField"));
    null != e4 && this._boundsByFeature.delete(e4);
  }
  _addMany(t2) {
    if (0 === t2.length)
      return;
    const e4 = this._get("objectIdField");
    for (const s3 of t2) {
      s3.computeExtent(this.spatialReference);
      const t3 = z(s3.graphic, e4);
      null != t3 && this._boundsByFeature.set(t3, s3.extent);
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
    const s3 = this._boundsByFeature.get(t2);
    return s3 ? Z(e4, s3) : null;
  }
};
e$4([y$2({ constructOnly: true })], d2.prototype, "spatialReference", void 0), e$4([y$2({ constructOnly: true })], d2.prototype, "hasZ", void 0), e$4([y$2({ constructOnly: true })], d2.prototype, "hasM", void 0), e$4([y$2({ constructOnly: true })], d2.prototype, "objectIdField", void 0), e$4([y$2()], d2.prototype, "updating", void 0), e$4([y$2({ readOnly: true })], d2.prototype, "updatingRemaining", null), d2 = e$4([c$4("esri.views.3d.layers.graphics.SpatialIndex2D")], d2);
const u$2 = { minX: 0, minY: 0, maxX: 0, maxY: 0 };
const _$1 = 1;
let y$1 = class y extends o.EventedMixin(g$1) {
  get spatialReference() {
    return this.view?.spatialReference;
  }
  constructor(e4) {
    super(e4), this._elevationOffset = 0, this._layerHandlesKey = "layerHandles";
  }
  initialize() {
    this._renderCoordsHelper = this.view.renderCoordsHelper, this._intersectLayers = [this.stageLayer], this._intersector = b$3(this.view.state.viewingMode), this._intersector.options.store = t$4.MIN;
    const e4 = this._computeLayerExtent(this.spatialReference, this.stageLayer);
    this._zmin = e4[2], this._zmax = e4[5];
    const t2 = this.stageLayer.events;
    this.addHandles([t2.on("layerObjectAdded", ({ object: e5 }) => this._objectChanged(e5)), t2.on("layerObjectRemoved", ({ object: e5 }) => this._objectChanged(e5)), t2.on("geometryAdded", ({ object: e5 }) => this._objectChanged(e5)), t2.on("geometryRemoved", ({ object: e5 }) => this._objectChanged(e5)), t2.on("attributesChanged", ({ attribute: e5, object: t3 }) => E$1(e5) && this._objectChanged(t3)), t2.on("transformationChanged", (e5) => this._objectChanged(e5))], this._layerHandlesKey);
  }
  dispose() {
    this.removeHandles(this._layerHandlesKey);
  }
  elevationInfoChanged() {
    const e4 = null != this.layer ? this.layer.elevationInfo : null;
    if (null != e4 && "on-the-ground" !== e4.mode) {
      const t2 = W(this.layer.spatialReference), r2 = r$1(e4.unit ?? "meters");
      this._elevationOffset = (e4.offset ?? 0) * r2 / t2;
    } else
      this._elevationOffset = 0;
  }
  getElevation(e4, t2, r2, s3) {
    if (x[0] = e4, x[1] = t2, x[2] = r2, !this._renderCoordsHelper.toRenderCoords(x, s3, x))
      return s$4.getLogger(this).error("could not project point for elevation alignment"), null;
    const n2 = this._elevationOffset, i2 = this._zmin + n2, a2 = this._zmax + n2;
    this._renderCoordsHelper.setAltitude(C, a2, x), this._renderCoordsHelper.setAltitude(E, i2, x);
    const l2 = (e5) => !!e5.lastValidElevationBB;
    return this._intersector.reset(C, E, null), this._intersector.intersect(this._intersectLayers, null, _$1, null, l2), this._intersector.results.min.getIntersectionPoint(x) ? this._renderCoordsHelper.getAltitude(x) : null;
  }
  _objectChanged(e4) {
    const t2 = this.spatialReference;
    if (!e4.lastValidElevationBB || !t2)
      return;
    P(j);
    const r2 = e4.lastValidElevationBB;
    r2.isEmpty() || this._expandExtent(t2, r2.min, r2.max, j);
    const { min: o2, max: s3 } = e4.boundingVolumeWorldSpace;
    this._expandExtent(t2, o2, s3, j), S$2(j, v), this._zmin = Math.min(this._zmin, j[2]), this._zmax = Math.max(this._zmax, j[5]), b$1.extent = v, b$1.spatialReference = t2, this.emit("elevation-change", b$1), r$2(r2.min, o2), r$2(r2.max, s3);
  }
  _computeLayerExtent(e4, t2) {
    return P(j), null != e4 && t2.objects.forAll((t3) => this._expandExtent(e4, t3.boundingVolumeWorldSpace.min, t3.boundingVolumeWorldSpace.max, j)), j;
  }
  _expandExtent(e4, t2, r2, o2) {
    for (let s3 = 0; s3 < 8; ++s3)
      x[0] = 1 & s3 ? t2[0] : r2[0], x[1] = 2 & s3 ? t2[1] : r2[1], x[2] = 4 & s3 ? t2[2] : r2[2], this._renderCoordsHelper.fromRenderCoords(x, x, e4), h$3(o2, x);
    return o2;
  }
};
e$4([y$2({ constructOnly: true })], y$1.prototype, "layer", void 0), e$4([y$2({ constructOnly: true })], y$1.prototype, "stageLayer", void 0), e$4([y$2({ constructOnly: true })], y$1.prototype, "view", void 0), e$4([y$2()], y$1.prototype, "spatialReference", null), y$1 = e$4([c$4("esri.views.3d.layers.support.StageLayerElevationProvider")], y$1);
const j = P(), v = D(), b$1 = { spatialReference: null, extent: v, context: "scene" }, x = n$1(), C = n$1(), E = n$1();
var Ae;
const je = n$1(), Le = i$1(), Oe = "esri.views.3d.layers.graphics.Graphics3DCore", Ve = s$4.getLogger(Oe);
let Fe = Ae = class extends g$1 {
  get _viewSpatialReference() {
    return this.owner.view.spatialReference;
  }
  get spatialIndex() {
    return this._spatialIndex || (this._spatialIndex = new d2({ objectIdField: this.owner.layer?.objectIdField, spatialReference: this._viewSpatialReference, hasZ: !!this.hasZ, hasM: !!this.hasM }), this._spatialIndex.setup(Array.from(this.graphics3DGraphics.values()))), this._spatialIndex.update(), this._spatialIndex;
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
    return !!(this._graphicsWaitingForSymbol.size > 0 || this.running || this._elevationAlignment?.updating || this._scaleVisibility?.updating || this._filterVisibility?.updating || this._rendererChangeAbortController || this._elevationInfoChangeAbortController || this._updatingPendingLoadedGraphicsChange || this._frameTask.updating || this._loadingSymbols > 0);
  }
  get running() {
    return this._pendingUpdates.size > 0 || !!this._spatialIndex?.updating;
  }
  get suspendedOrOutsideOfView() {
    return this.owner.suspended || !!this.owner.suspendInfo?.outsideOfView;
  }
  get updatingRemaining() {
    return this.updating ? this._pendingUpdates.size + 0.1 * (this._spatialIndex?.updatingRemaining || 0) + 0.1 * (this._elevationAlignment?.updatingRemaining || 0) : 0;
  }
  get displayFeatureLimit() {
    const e4 = this.owner && this.owner.view && this.owner.view.qualitySettings, t2 = e4?.graphics3D.minTotalNumberOfFeatures ?? 0, i2 = e4?.graphics3D.maxTotalNumberOfFeatures ?? 0, r2 = e4?.graphics3D.maxNumberOfDrawCalls ?? 0, s3 = e4?.graphics3D.maxTotalNumberOfVertices ?? 0, a2 = this.averageSymbolComplexity, n2 = Math.max(1, a2?.verticesPerFeature ?? 1), o2 = a2 && a2.drawCallsPerFeature > 0 && r2 > 0 ? r2 / a2.drawCallsPerFeature : i2, l2 = Math.ceil(s3 / n2), h2 = Math.max(t2, Math.min(i2, l2, o2)), d3 = this._get("displayFeatureLimit");
    return d3 && d3.maximumTotalNumberOfVertices === s3 && d3.averageSymbolComplexity === a2 && d3.maximumNumberOfFeatures === h2 ? d3 : new e$2(s3, h2, a2);
  }
  get averageSymbolComplexity() {
    const e4 = d$2(this._symbolComplexities), t2 = this._get("averageSymbolComplexity");
    return 0 === e4.numComplexities || null != t2 && (e4.estimated && (t2.verticesPerFeature >= e4.verticesPerFeature || t2.verticesPerCoordinate >= e4.verticesPerCoordinate || t2.drawCallsPerFeature >= e4.drawCallsPerFeature) || t2.verticesPerFeature === e4.verticesPerFeature && t2.verticesPerCoordinate === e4.verticesPerCoordinate && t2.drawCallsPerFeature === e4.drawCallsPerFeature) ? t2 : e4;
  }
  get usedMemory() {
    const e4 = null != this.averageSymbolComplexity && this.labelsEnabled ? this.averageSymbolComplexity.memory.bytesPerFeatureLabel * this._numberOfGraphics : 0, t2 = this._getSymbolComplexitiesUsed().reduce((e5, t3) => e5 + t3.memory.resourceBytes, 0), i2 = this.owner.view._stage.renderer, r2 = this.owner.view.basemapTerrain.overlayManager.renderer, s3 = Array.from(this._symbols.values()).reduce((e5, t3) => e5 + (t3?.symbolLayers.reduce((e6, t4) => e6 + (t4?.materials.reduce((e7, t5) => e7 + i2.getMemoryForMaterial(t5) + r2.getMemoryForMaterial(t5), 0) ?? 0), 0) ?? 0), 0);
    return this._usedMemory + e4 + t2 + s3;
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
    const i2 = S$3(e4, { geometryType: this.layer?.geometryType ?? void 0, retainId: true, hasLabelingContext: this._hasLabelingContext(e4) }), r2 = i2.symbol || null;
    return null == r2 && i2.error && Ve.error(i2.error.message), this._symbolConversionCache.set(e4.id, r2), r2;
  }
  _getSymbolComplexitiesUsedOrRenderer(e4) {
    if (null == e4)
      return [];
    const t2 = e4.getSymbols(), i2 = "backgroundFillSymbol" in e4 ? e4.backgroundFillSymbol : null;
    if (!i2 && !t2?.length)
      return [];
    const r2 = [], s3 = this._getSymbolComplexityUsedOrRenderer(i2);
    null != s3 && r2.push(s3);
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
    super(e4), this._propertiesPool = new o$2({ computedExtent: M$1 }, this), this.computedExtent = null, this.currentRenderer = null, this.rendererHasGeometryOperations = false, this._graphicStateTracking = null, this.graphics3DGraphics = /* @__PURE__ */ new Map(), this.stageLayer = null, this.stage = null, this._graphicsDrapedUids = /* @__PURE__ */ new Set(), this._graphicsBySymbol = /* @__PURE__ */ new Map(), this._symbolConversionCache = /* @__PURE__ */ new Map(), this._symbols = /* @__PURE__ */ new Map(), this._graphicsWithoutSymbol = /* @__PURE__ */ new Map(), this._graphicsWaitingForSymbol = /* @__PURE__ */ new Map(), this._graphicsUpdateId = 0, this._frameTask = F, this._suspendSymbolCleanup = false, this._arcadeOnDemand = null, this._rendererChangeAbortController = null, this._elevationInfoChangeAbortController = null, this._initializeAbortController = null, this._scaleVisibility = null, this._filterVisibility = null, this._spatialIndex = null, this.extentPadding = 0, this._updatingPendingLoadedGraphicsChange = null, this._featureStore = null, this._deconflictor = null, this._labeler = null, this._objectStates = null, this._viewElevationProvider = null, this._stageLayerElevationProvider = null, this._sharedSymbolResourcesOwnerHandle = null, this._whenGraphics3DGraphicRequests = {}, this._pendingUpdates = /* @__PURE__ */ new Map(), this._numberOfGraphics = 0, this._numberOfGraphicsProvidingElevation = 0, this._pendingAdds = 0, this._pendingRemoves = 0, this._applyPendingRemovesFirst = false, this._loadingSymbols = 0, this._pendingUpdatesPool = new l$2({ allocator: (e5) => e5 || new ke(), deallocator: (e5) => (e5.clear(), e5) }), this._symbolWarningLogged = false, this._geometryWarningLogged = false, this._objectIdInvisibleSet = /* @__PURE__ */ new Set(), this._whenSymbolRemoved = new l$2(), this.preferredUpdatePolicy = C$1.SYNC, this._forcedUpdatePolicy = null, this.elevationFeatureExpressionEnabled = true, this.owner = null, this.layer = null, this.graphicSymbolSupported = true, this.getRenderingInfoWithoutRenderer = false, this.setUidToIdOnAdd = true, this.hasZ = null, this.hasM = null, this._usedMemory = 0, this._visible = false, this._startCreateGraphics = false, this.symbolCreationContext = new e$7(e4.owner.view.resourceController.scheduler, (e5, t2) => this._frameTask.schedule(e5, t2));
  }
  initialize() {
    this._featureStore = new d$1({ objectIdField: this.owner.layer?.objectIdField, hasZ: !!this.hasZ, hasM: !!this.hasM, viewSpatialReference: this._viewSpatialReference, featureSpatialReference: this.owner.featureSpatialReference, getSpatialIndex: () => this.spatialIndex, forEach: (e5) => this.graphics3DGraphics.forEach(e5) });
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
      const e5 = t2.filterVisibility({ featureStore: this._featureStore, getFeatureCount: () => this.graphics3DGraphics.size, updateFeatureVisibilities: (e6) => this.modifyGraphics3DGraphicVisibilities((t3) => t3.setVisibilityFlag(A$1.GRAPHIC, L.FILTER, e6(z(t3.graphic, this._objectIdField)))), setAllFeaturesVisibility: (e6) => this.modifyGraphics3DGraphicVisibilities((t3) => t3.setVisibilityFlag(A$1.GRAPHIC, L.FILTER, e6)), clearFeaturesVisibility: () => this.modifyGraphics3DGraphicVisibilities((e6) => e6.setVisibilityFlag(A$1.GRAPHIC, L.FILTER, true)) });
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
    const i2 = t2.sharedSymbolResources;
    this.symbolCreationContext.sharedResources = i2, this._sharedSymbolResourcesOwnerHandle = i2.addGraphicsOwner(this.owner), null != this.currentRenderer && (this.symbolCreationContext.renderer = this.currentRenderer), this.symbolCreationContext.stage = this.stage, this.symbolCreationContext.streamDataRequester = i2.streamDataRequester, this.symbolCreationContext.renderCoordsHelper = t2.renderCoordsHelper, this.symbolCreationContext.layer = this.layer, this.symbolCreationContext.graphicsCoreOwner = this.owner, this.symbolCreationContext.localOriginFactory = new _$3(t2.renderSpatialReference), this.symbolCreationContext.elevationProvider = t2.elevationProvider, this.symbolCreationContext.notifyGraphicGeometryChanged = (e5) => this.notifyGraphicGeometryChanged(e5), this.symbolCreationContext.notifyGraphicVisibilityChanged = (e5) => this.notifyGraphicVisibilityChanged(e5);
    const r2 = d$3(this.layer.elevationInfo, this.elevationFeatureExpressionEnabled);
    if (this.symbolCreationContext.featureExpressionInfoContext = await a$2(r2, this._viewSpatialReference, e4, Ve), s$2(e4), this.symbolCreationContext.screenSizePerspectiveEnabled = t2.screenSizePerspectiveEnabled && !!this.layer.screenSizePerspectiveEnabled, this.symbolCreationContext.slicePlaneEnabled = !!this.owner.slicePlaneEnabled, this.symbolCreationContext.physicalBasedRenderingEnabled = !!this.owner.view.qualitySettings?.physicallyBasedRenderingEnabled, this.symbolCreationContext.skipHighSymbolLods = !!this.owner.view.qualitySettings?.graphics3D?.skipHighSymbolLods, "drapeSourceType" in this.owner) {
      const { owner: e5 } = this;
      this.symbolCreationContext.drapeSourceRenderer = t2.basemapTerrain.overlayManager.registerGeometryDrapeSource(e5), this.addHandles(e$6(() => t2.basemapTerrain.overlayManager.unregisterDrapeSource(e5)));
    }
    this.addHandles([d$4(() => this.suspendedOrOutsideOfView, () => this._frameTask.reschedule(() => this._updateLayerVisibility())), d$4(() => [this.layer?.screenSizePerspectiveEnabled, this.owner.view?.screenSizePerspectiveEnabled], () => {
      const e5 = t2.screenSizePerspectiveEnabled && !!this.layer.screenSizePerspectiveEnabled;
      e5 !== this.symbolCreationContext.screenSizePerspectiveEnabled && (this.symbolCreationContext.screenSizePerspectiveEnabled = e5, this._labeler?.reset(), this.recreateAllGraphicsAndSymbols());
    }), d$4(() => this.owner.slicePlaneEnabled, (e5) => this._slicePlaneEnabledChange(!!e5)), d$4(() => this.owner.view.state?.rasterPixelRatio, () => this._pixelRatioChange()), d$4(() => !!this.owner.view.qualitySettings?.physicallyBasedRenderingEnabled, (e5) => this._physicalBasedRenderingChange(e5)), d$4(() => !!this.owner.view.qualitySettings?.graphics3D?.skipHighSymbolLods, (e5) => this._skipHighSymbolLoDsChange(e5)), p$1(() => t2.basemapTerrain?.tilingScheme, (e5) => {
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
    }, { initial: true }), d$4(() => this.effectiveUpdatePolicy, (e5) => {
      null != this.stageLayer && (this.stageLayer.updatePolicy = e5), this.symbolCreationContext.isAsync = this.effectiveUpdatePolicy === C$1.ASYNC, e5 === C$1.SYNC && this.runTask(C$2);
    }, A)]), this._frameTask = t2.resourceController.scheduler.registerTask(I$1.GRAPHICS_CORE, this), this.layer && "featureReduction" in this.layer && this.addHandles(d$4(() => this.layer.featureReduction, () => this._deconflictor.featureReductionChange())), this.notifyChange("averageSymbolComplexity"), this.rendererChange(this.owner.renderer).catch(() => {
    }), this._initializeAbortController = null;
  }
  _abortInitialize() {
    this._initializeAbortController && (this._initializeAbortController.abort(), this._initializeAbortController = null);
  }
  destroy() {
    this._abortInitialize(), this._abortRendererChange(), this._abortElevationInfoChange(), this._frameTask.remove(), this._frameTask = F, this.owner.view?.deconflictor?.removeGraphicsOwner(this), this.owner.view?.labeler?.removeGraphicsOwner(this), this._elevationAlignment = u$6(this._elevationAlignment), this._scaleVisibility = u$6(this._scaleVisibility), this._filterVisibility = u$6(this._filterVisibility), this._deconflictor = null, this._labeler = null, this._objectStates = u$6(this._objectStates), this.clear(), this._featureStore = u$6(this._featureStore), this._updatingPendingLoadedGraphicsChange = l$4(this._updatingPendingLoadedGraphicsChange), this._graphicStateTracking = u$6(this._graphicStateTracking), this.stage && (this.stageLayer = u$6(this.stageLayer), this.stage = null), this._set("owner", null);
    for (const e4 in this._whenGraphics3DGraphicRequests)
      this._whenGraphics3DGraphicRequests[e4].reject(new s$5("graphic:layer-destroyed", "Layer has been destroyed"));
    this._whenGraphics3DGraphicRequests = null, this._sharedSymbolResourcesOwnerHandle = l$4(this._sharedSymbolResourcesOwnerHandle), this._propertiesPool = u$6(this._propertiesPool), this._pendingUpdatesPool = null, this._symbolConversionCache.clear(), this._objectIdInvisibleSet.clear(), this._spatialIndex = u$6(this._spatialIndex);
  }
  clear() {
    this._objectStates?.allGraphicsDeleted(), null != this._graphicStateTracking && this._graphicStateTracking.allGraphicsDeleted(), this.graphics3DGraphics.forEach((e4) => e4.destroy()), this._spatialIndex?.clear(), this.graphics3DGraphics.clear(), this._numberOfGraphics = 0, this._usedMemory = 0, this._updateLayerVisibility(), this._symbols.forEach(u$6), this._symbols.clear(), this._graphicsBySymbol.clear(), this._graphicsWithoutSymbol.clear(), this._graphicsWaitingForSymbol.clear(), this._pendingUpdates.clear(), this._pendingUpdatesPool.clear(), this._pendingAdds = 0, this._pendingRemoves = 0, this._applyPendingRemovesFirst = false, this.notifyChange("updating"), this.notifyChange("running"), this.notifyChange("updatingRemaining"), this._featureStore.events.emit("changed");
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
    const e4 = this.displayFeatureLimit.maximumNumberOfFeatures, t2 = this._numberOfGraphics > e4 * ze, i2 = !this.suspendedOrOutsideOfView && !t2;
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
    return z(e4, t2);
  }
  get graphics3DGraphicsByObjectID() {
    const e4 = this.owner.layer?.objectIdField;
    if (!e4)
      return;
    const t2 = /* @__PURE__ */ new Map();
    return this.graphics3DGraphics.forEach((i2) => {
      if (!i2)
        return;
      const r2 = i2.graphic, s3 = this._getGraphicObjectID(r2, e4);
      null != s3 && t2.set(s3, i2);
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
        const s3 = i2.getFastUpdateStatus();
        if (s3.loading > 0)
          return true;
        this._graphicsBySymbol.has(r2) && (t2 += s3.fast, e4 += s3.slow);
      }
      return false;
    }) ? "unknown" : t2 >= 0 && 0 === e4 ? "fast" : e4 >= 0 && 0 === t2 ? "slow" : "mixed";
  }
  runTask(e4) {
    if (this._frameTask.processQueue(e4), this._applyPendingUpdates(e4), this.notifyChange("running"), this.running || this.notifyChange("updating"), this.notifyChange("updatingRemaining"), !e4.hasProgressed)
      return g$2.YIELD;
  }
  setObjectIdVisibility(e4, t2) {
    t2 ? this._objectIdInvisibleSet.delete(e4) : this._objectIdInvisibleSet.add(e4);
    const i2 = this._findGraphics3DGraphicByObjectId(e4);
    null != i2 && this._updateUserVisibility(i2);
  }
  _findGraphics3DGraphicByObjectId(e4) {
    return t$5(this.graphics3DGraphics, (t2) => this._getGraphicObjectID(t2.graphic) === e4);
  }
  _updateUserVisibility(e4) {
    if (null == e4)
      return false;
    const t2 = e4.graphic, i2 = this._getGraphicObjectID(t2), r2 = t2.visible && !this.owner.suspended && (null == i2 || !this._objectIdInvisibleSet.has(i2));
    return e4.setVisibilityFlag(A$1.GRAPHIC, L.USER, r2);
  }
  _whenGraphics3DGraphic(e4) {
    const t2 = this.graphics3DGraphics.get(e4.uid);
    if (t2)
      return Promise.resolve(t2);
    const i2 = this._whenGraphics3DGraphicRequests[e4.uid];
    if (i2)
      return i2.promise;
    const r2 = C$3();
    return this._whenGraphics3DGraphicRequests[e4.uid] = r2, r2.promise;
  }
  async _boundsForGraphics3DGraphic(e4, t2) {
    const i2 = this._viewSpatialReference, r2 = this.owner.view.renderSpatialReference, s3 = this.owner.view.basemapTerrain.spatialReference, a2 = (e5, t3, s4) => n(e5, r2, t3, e5, i2, t3, s4), n$12 = (e5, t3, r3) => n(e5, s3, t3, e5, i2, t3, r3), o2 = this._viewElevationProvider ? { service: this._viewElevationProvider, useViewElevation: null != t2 && !!t2.useViewElevation, minDemResolution: null != t2 ? t2.minDemResolution : null, minDemResolutionForPoints: this.owner.view.resolution } : null, l2 = await e4.getProjectedBoundingBox(a2, n$12, o2, t2?.signal);
    if (!l2)
      return null;
    const h2 = l2.boundingBox;
    if (l2.requiresDrapedElevation) {
      const e5 = this.symbolCreationContext.elevationProvider;
      if (e5) {
        E$2(h2, je);
        const t3 = e5.getElevation(je[0], je[1], 0, i2, "ground") ?? 0;
        h2[2] = Math.min(h2[2], t3), h2[5] = Math.max(h2[5], t3);
      }
    }
    return { boundingBox: h2, screenSpaceObjects: l2.screenSpaceObjects };
  }
  async whenGraphicBounds(e4, t2) {
    await w$2(() => this.owner?.loadedGraphics);
    const i2 = this.owner.layer?.objectIdField, r2 = this.owner.loadedGraphics.find((t3) => t3 === e4 || null != i2 && null != t3.attributes && e4.attributes && t3.attributes[i2] === e4.attributes[i2]);
    if (!r2)
      throw new s$5("internal:graphic-not-part-of-view", "Graphic is not part of this view");
    const s3 = await this._whenGraphics3DGraphic(r2);
    return this._boundsForGraphics3DGraphic(s3, t2);
  }
  computeAttachmentOrigin(e4, t2) {
    const i2 = this.graphics3DGraphics.get(e4.uid);
    if (!i2)
      return null;
    const r2 = i2.computeAttachmentOrigin();
    if (0 === r2.render.num && 0 === r2.draped.num)
      return null;
    o$3(Me, 0, 0, 0);
    let s3 = 0;
    if (r2.render.num > 0) {
      if (!t$6(r2.render.origin, this.symbolCreationContext.renderCoordsHelper.spatialReference, We, t2))
        return null;
      u$7(Me, Me, We), s3++;
    }
    if (r2.draped.num > 0) {
      const [e5, i3] = r2.draped.origin, a2 = this._viewElevationProvider.getElevation(e5, i3, "ground") ?? 0;
      if (o$3(We, e5, i3, a2), !t$6(We, this._viewElevationProvider.spatialReference, We, t2))
        return null;
      u$7(Me, Me, We), s3++;
    }
    return s3 > 1 && g$3(Me, Me, 1 / s3), new x$1({ x: Me[0], y: Me[1], z: Me[2], spatialReference: t2 });
  }
  getSymbolLayerSize(e4, t2) {
    const i2 = this._symbols.get(e4.id);
    if (null == i2)
      throw new s$5("internal:symbol-not-part-of-view", "Symbol is not part of this view");
    const r2 = e4.symbolLayers.indexOf(t2);
    if (-1 === r2)
      throw new s$5("internal:missing-symbol-layer", "Symbol layer is not in symbol");
    const s3 = i2.getSymbolLayerSize(r2);
    if (null == s3)
      throw new s$5("internal:missing-size", "Symbol layer has no valid size");
    return s3;
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
    const s3 = r2.symbol, a2 = this._getConvertedSymbol(t2.newValue);
    if (null != a2 && (a2.type !== s3.type || "web-style" === a2.type) || "web-style" === s3.type)
      return void this._recreateGraphic(i2);
    const n2 = this._graphicsBySymbol.get(s3.id);
    if (n2 && 1 !== n2.size)
      return void this._recreateGraphic(i2);
    const o2 = a$4(s3, a2);
    if (null == o2)
      return void this._updateSymbolMapping(s3.id, a2);
    const l2 = { diff: o2, graphics3DGraphicPatches: [], symbolStatePatches: [] };
    if (r2.prepareSymbolPatch(l2), !y$3(l2.diff))
      return void this._recreateGraphic(i2);
    const h2 = this._getRenderingInfo(i2);
    if (null == h2)
      return void this._recreateGraphic(i2);
    const d3 = r2.extentPadding;
    for (const p2 of l2.symbolStatePatches)
      p2();
    if (d3 !== r2.extentPadding && this._recomputeExtentPadding(), null != e4)
      for (const p2 of l2.graphics3DGraphicPatches)
        p2(e4, h2);
    this._updateSymbolMapping(s3.id, a2);
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
    return this._graphicsUpdateId++, this._graphicsWaitingForSymbol.set(e4.uid, t2), 1 === this._graphicsWaitingForSymbol.size && this.notifyChange("updating"), t2;
  }
  _endGraphicUpdate(e4) {
    e4 && (this._graphicsWaitingForSymbol.delete(e4.uid), 0 === this._graphicsWaitingForSymbol.size && (this._cleanupSymbols(), this.notifyChange("updating")));
  }
  _recomputeExtentPadding() {
    let e4 = 0;
    this._symbols.forEach((t2) => {
      null != t2 && (e4 = Math.max(e4, t2.extentPadding));
    }), this._set("extentPadding", e4);
  }
  _expandComputedExtent(e4) {
    const t2 = Le, i2 = e4.spatialReference;
    N(e4, t2);
    const r2 = this._viewSpatialReference, s3 = Ae.tmpVec;
    if (d$5(i2, r2) || t$7(t2[0], t2[1], 0, i2, s3, r2) && (t2[0] = s3[0], t2[1] = s3[1], t$7(t2[3], t2[4], 0, i2, s3, r2), t2[3] = s3[0], t2[4] = s3[1]), !(isFinite(t2[0]) && isFinite(t2[3]) && isFinite(t2[1]) && isFinite(t2[4])))
      return;
    const a2 = this.computedExtent;
    let n2 = null;
    const o2 = isFinite(t2[2]) && isFinite(t2[5]), l2 = o2 && (null == a2?.zmin || t2[2] < a2.zmin), h2 = o2 && (null == a2?.zmax || t2[5] > a2.zmax);
    if (a2) {
      (t2[0] < a2.xmin || t2[1] < a2.ymin || t2[3] > a2.xmax || t2[4] > a2.ymax || l2 || h2) && (n2 = this._propertiesPool.get("computedExtent"), n2.xmin = Math.min(t2[0], a2.xmin), n2.ymin = Math.min(t2[1], a2.ymin), n2.xmax = Math.max(t2[3], a2.xmax), n2.ymax = Math.max(t2[4], a2.ymax), n2.spatialReference = r2);
    } else
      n2 = this._propertiesPool.get("computedExtent"), n2.xmin = t2[0], n2.ymin = t2[1], n2.xmax = t2[3], n2.ymax = t2[4], n2.spatialReference = r2;
    n2 && (l2 && (n2.zmin = t2[2]), h2 && (n2.zmax = t2[5]), this._set("computedExtent", n2));
  }
  _abortElevationInfoChange() {
    this._elevationInfoChangeAbortController && (this._elevationInfoChangeAbortController.abort(), this._elevationInfoChangeAbortController = null);
  }
  async elevationInfoChange() {
    this._abortElevationInfoChange();
    const e4 = new AbortController();
    this._elevationInfoChangeAbortController = e4;
    const t2 = d$3(this.layer.elevationInfo, this.elevationFeatureExpressionEnabled);
    this.symbolCreationContext.featureExpressionInfoContext = await a$2(t2, this._viewSpatialReference, e4.signal, Ve), s$2(e4.signal), this._elevationInfoChangeAbortController = null, this._labeler?.elevationInfoChange(), this.forEachGraphics3DSymbol((e5, t3, i2) => {
      e5.globalPropertyChanged("elevationInfo", t3) ? t3.forEach((e6) => {
        const t4 = e6.graphic, i3 = e6.labelLayers;
        for (const r2 of i3) {
          r2.graphics3DSymbolLayer.updateGraphicElevationContext(t4, r2);
        }
      }) : this._recreateSymbol(i2);
    }), this.updateStageLayerElevationProvider(), this._elevationAlignment?.elevationInfoChange();
  }
  updateStageLayerElevationProvider() {
    this._stageLayerElevationProvider ? (this.layer.elevationInfo && "relative-to-scene" === this.layer.elevationInfo.mode || 0 === this._numberOfGraphicsProvidingElevation) && (this.owner.view.elevationProvider.unregister(this._stageLayerElevationProvider), this._stageLayerElevationProvider = r$3(this._stageLayerElevationProvider)) : (!this.layer.elevationInfo || this.layer.elevationInfo && "relative-to-scene" !== this.layer.elevationInfo.mode) && this._numberOfGraphicsProvidingElevation > 0 && (this._stageLayerElevationProvider = new y$1({ layer: this.layer, stageLayer: this.stageLayer, view: this.owner.view }), this.owner.view.elevationProvider.register("scene", this._stageLayerElevationProvider));
  }
  _clearSymbolsAndGraphics() {
    this.clear(), null != this._filterVisibility && this._filterVisibility.clear(), this._labeler?.reset(), this._deconflictor?.clear(), this._elevationAlignment?.clear(), this.stageLayer?.invalidateSpatialQueryAccelerator(), this._stageLayerElevationProvider && (this.owner.view.elevationProvider.unregister(this._stageLayerElevationProvider), this._stageLayerElevationProvider = r$3(this._stageLayerElevationProvider));
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
    e4 && 0 !== e4.length && (this.owner.view.basemapTerrain?.tilingScheme ? (this._updatePolicyForGraphics(e4) === C$1.ASYNC ? this._addDelayed(e4) : this._addImmediate(e4), this.notifyChange("updating")) : Ve.error("#add()", "Cannot add graphics before terrain surface has been initialized"));
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
      this._addGraphic(t2, this._getRenderingInfo(t2, Ve), C$1.SYNC);
    this._cleanupSymbols(), this._labeler && (this.owner.view.labeler.setDirty(), this._cleanupSymbols()), this.owner.view.deconflictor.setDirty();
  }
  _addDelayed(e4) {
    for (const t2 of e4) {
      const e5 = t2.uid;
      let i2 = this._pendingUpdates.get(e5);
      i2 ? i2.add ? i2.state !== Te.NEW && i2.abortController?.abort() : this._pendingAdds++ : (i2 = this._pendingUpdatesPool.pushNew(), this._pendingAdds++, this._pendingUpdates.set(e5, i2)), i2.add = t2;
    }
    this.notifyChange("running"), this.notifyChange("updatingRemaining");
  }
  remove(e4) {
    this.effectiveUpdatePolicy === C$1.ASYNC ? this._removeDelayed(e4) : this._removeImmediate(e4), this.notifyChange("updating");
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
        i2.add && (i2.remove ? i2.add = null : this._pendingUpdates.delete(e5), i2.state === Te.LOADING && i2.abortController?.abort(), this._pendingAdds--);
      else {
        const i3 = this._pendingUpdatesPool.pushNew();
        i3.remove = t2, this._pendingUpdates.set(e5, i3), this._pendingRemoves++, this._applyPendingRemovesFirst = true;
      }
    }
    0 === this._pendingUpdates.size && this._finishPendingUpdates(), this.notifyChange("running"), this.notifyChange("updatingRemaining");
  }
  _finishPendingUpdates() {
    this._pendingUpdatesPool.clear(), this._cleanupSymbols(), (this._pendingAdds || this._pendingRemoves) && Ve.warn("pendingAdds/Removes in inconsistent state!"), this._pendingAdds = 0, this._pendingRemoves = 0, this._applyPendingRemovesFirst = false;
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
      i2.add && i2.state === Te.NEW && this._processPendingUpdateNew(i2);
      let r2 = this.effectiveUpdatePolicy;
      if (!i2.remove || i2.add && i2.state !== Te.READY || (this._pendingRemoves--, e4.madeProgress(), this._removeGraphic(i2.remove), i2.remove = null, r2 = C$1.SYNC), i2.add)
        switch (i2.state) {
          case Te.READY:
            this._addGraphic(i2.add, i2.renderingInfo, r2), i2.add = null, this._pendingAdds--, e4.madeProgress();
            break;
          case Te.REJECTED:
            i2.add = null, this._pendingAdds--;
          case Te.LOADING:
        }
      null == i2.remove && null == i2.add && this._pendingUpdates.delete(t2);
    }
    0 === this._pendingUpdates.size && (this._finishPendingUpdates(), this.notifyChange("running"));
  }
  _processPendingUpdateNew(e4) {
    if (!e4.add)
      return void (e4.state = Te.READY);
    const t2 = e4.add.geometry;
    null == t2 || "mesh" !== t2.type || t2.loaded ? this._processPendingUpdateNewRenderingInfo(e4) : this._processPendingUpdateNewMesh(e4, t2);
  }
  async _processPendingUpdateNewMesh(e4, t2) {
    e4.state = Te.LOADING, e4.abortController = new AbortController();
    const i2 = e4.abortController.signal;
    try {
      await t2.load({ signal: i2 });
    } catch (r2) {
      return this._processPendingUpdateNewError(e4, r2);
    }
    e4.abortController = null, this._processPendingUpdateNewRenderingInfo(e4);
  }
  _processPendingUpdateNewError(e4, t2) {
    e4.abortController = null, b$4(t2) ? e4.state = Te.NEW : e4.state = Te.REJECTED;
  }
  async _processPendingUpdateNewRenderingInfo(e4) {
    if (null == this.layer.renderer || "dictionary" !== this.layer.renderer.type)
      return e4.renderingInfo = this._getRenderingInfo(e4.add, Ve), void (e4.state = Te.READY);
    e4.state = Te.LOADING, e4.abortController = new AbortController();
    let t2 = null;
    try {
      t2 = await this._getRenderingInfoAsync(e4.add, { signal: e4.abortController.signal });
    } catch (i2) {
      return e4.abortController = null, void (b$4(i2) ? e4.state = Te.NEW : e4.state = Te.REJECTED);
    }
    null == t2?.symbol ? (Ve && !this._symbolWarningLogged && (this._symbolWarningLogged = true, Ve.warn(`Graphic in layer ${this.layer.id} has no symbol and will not render`)), e4.renderingInfo = null) : e4.renderingInfo = t2, e4.state = Te.READY;
  }
  _addGraphic(e4, t2, i2) {
    if (this._graphicsWithoutSymbol.set(e4.uid, e4), null == t2?.symbol || !f(e4))
      return;
    if (null != this.stage.renderView.objectAndLayerIdRenderHelper && this.setUidToIdOnAdd) {
      const t3 = S$4(this.owner.view.map, this.layer.uid);
      this.stage.renderView.objectAndLayerIdRenderHelper.setUidToObjectAndLayerId(e4.objectId, e4.uid, this.layer.id, this.layer.uid, !!this.layer.popupEnabled && !t3 && u$8(this.layer, this.owner.view.popup?.defaultPopupTemplateEnabled));
    }
    const r2 = t2.symbol, s3 = this.getOrCreateGraphics3DSymbol(r2, t2.renderer);
    if (null == s3)
      return;
    this._expandComputedExtent(e4.geometry);
    const a2 = this._beginGraphicUpdate(e4), n2 = new r$4(e4, t2, this.layer);
    let o2 = false;
    const l2 = (e5) => {
      e5 === s3.symbol.id && (o2 = true);
    };
    this._whenSymbolRemoved.push(l2);
    const h2 = () => {
      if (--this._loadingSymbols, this.destroyed)
        return;
      this._whenSymbolRemoved.removeUnordered(l2);
      if (this._graphicsWaitingForSymbol.get(e4.uid) !== a2 || o2 || s3.destroyed || this.graphicSymbolSupported && e4.symbol && e4.symbol.id !== s3.symbol.id)
        --s3.referenced, this._cleanupSymbols();
      else {
        const t3 = this._createGraphics3DGraphic(s3, n2);
        this._spatialIndex && null != t3 && this._spatialIndex.add(t3), --s3.referenced, this._endGraphicUpdate(e4);
      }
      this._featureStore.events.emit("changed"), this._labeler && this.owner.view.labeler.setDirty();
    }, d3 = (t3) => {
      --this._loadingSymbols, this.destroyed || (this._whenSymbolRemoved.removeUnordered(l2), o2 || (b$4(t3) ? this.add([e4]) : s3.destroyed || this._endGraphicUpdate(e4)));
    };
    ++this._loadingSymbols, i2 === C$1.ASYNC ? s3.load(() => this._frameTask.schedule(h2), (e5) => this._frameTask.schedule(() => d3(e5))) : s3.load(h2, d3);
  }
  _removeGraphic(e4) {
    const t2 = e4.uid, i2 = this.graphics3DGraphics.get(t2);
    if (i2) {
      i2.graphics3DSymbol.onRemoveGraphic(i2);
      const e5 = i2.usedMemory, r2 = i2.isElevationSource;
      this._conditionalRemove(i2, t2), this._spatialIndex?.remove(i2);
      const s3 = i2.graphics3DSymbol.symbol.id;
      this._graphicsBySymbol.get(s3)?.delete(t2), this._graphicsWithoutSymbol.delete(t2), this._removeGraphics3DGraphic(t2, e5, r2), i2.destroy(), this._featureStore.events.emit("changed");
    } else
      this._graphicsWithoutSymbol.delete(t2), this._graphicsWaitingForSymbol.delete(t2), 0 === this._graphicsWaitingForSymbol.size && (this._cleanupSymbols(), this.notifyChange("updating"));
  }
  _hasLabelingContext(e4) {
    if (e4 instanceof b$5 || e4 instanceof m$2) {
      const t2 = this.symbolCreationContext.layer;
      return !!t2.labelingInfo && t2.labelingInfo.some((t3) => t3.symbol === e4);
    }
    return false;
  }
  _hasValidSymbolCreationContext(e4) {
    return !(e4 instanceof b$5 && !this._hasLabelingContext(e4)) || (Ve.error("LabelSymbol3D is only valid as part of a LabelClass. Using LabelSymbol3D as a renderer symbol is not supported."), false);
  }
  _getRenderingInfo(e4, t2) {
    const i2 = e4.geometry;
    if (null == i2)
      return t2 && !this._geometryWarningLogged && (this._geometryWarningLogged = true, t2.warn(`Graphic in layer ${this.layer.id} has no geometry and will not render`)), null;
    if (!D$1(i2.spatialReference, this._viewSpatialReference))
      return t2 && !this._geometryWarningLogged && (this._geometryWarningLogged = true, t2.warn(`Graphic in layer ${this.layer.id} has incompatible spatial reference and will not render`)), null;
    if (!this.graphicSymbolSupported && null != e4.symbol)
      return t2 && !this._symbolWarningLogged && (this._symbolWarningLogged = true, t2.warn(`Graphic in layer ${this.layer.id} is not allowed to have a symbol, use a renderer instead`)), null;
    const r2 = this.rendererHasGeometryOperations ? c$5(e4, this.layer) : e4;
    let s3;
    if (this.owner.getRenderingInfo && (this.getRenderingInfoWithoutRenderer || null != this.currentRenderer))
      s3 = this.owner.getRenderingInfo(r2, this.currentRenderer, this._arcadeOnDemand);
    else {
      s3 = { symbol: r2.symbol || j$1(r2.geometry) };
    }
    return null == s3?.symbol ? (t2 && !this._symbolWarningLogged && (this._symbolWarningLogged = true, t2.warn(`Graphic in layer ${this.layer.id} has no symbol and will not render`)), null) : s3;
  }
  _getRenderingInfoAsync(e4, t2) {
    if (null == e4.geometry)
      return Ve && !this._geometryWarningLogged && (this._geometryWarningLogged = true, Ve.warn(`Graphic in layer ${this.layer.id} has no geometry and will not render`)), null;
    if (!this.graphicSymbolSupported && null != e4.symbol)
      return Ve && !this._symbolWarningLogged && (this._symbolWarningLogged = true, Ve.warn(`Graphic in layer ${this.layer.id} is not allowed to have a symbol, use a renderer instead`)), null;
    const i2 = this.rendererHasGeometryOperations ? c$5(e4, this.layer) : e4;
    return this.owner.getRenderingInfoAsync(i2, this.currentRenderer, this._arcadeOnDemand, t2);
  }
  _createGraphics3DSymbol(e4, t2) {
    if (!this._hasValidSymbolCreationContext(e4))
      return null;
    const i2 = this._getConvertedSymbol(e4);
    if (!i2)
      return null;
    let r2;
    if (null != t2 && "backgroundFillSymbol" in t2 && t2.backgroundFillSymbol) {
      const e5 = S$3(t2.backgroundFillSymbol, { ignoreDrivers: true });
      null != e5.symbol && "web-style" !== e5.symbol.type && "cim" !== e5.symbol.type && (r2 = e5.symbol.symbolLayers);
    }
    const s3 = t$1(i2, this.symbolCreationContext, r2);
    return s3.load(() => {
      const e5 = s3.extentPadding;
      e5 > this.extentPadding && this._set("extentPadding", e5), this.notifyChange("averageSymbolComplexity");
    }, () => {
    }), s3;
  }
  getOrCreateGraphics3DSymbol(e4, t2) {
    let i2 = this._symbols.get(e4.id);
    return void 0 === i2 && (i2 = e4 instanceof u$9 ? new i$2(e4, (e5) => this._frameTask.schedule(e5), (e5) => this._createGraphics3DSymbol(e5, t2)) : this._createGraphics3DSymbol(e4, t2), this._symbols.set(e4.id, i2)), null != i2 && ++i2.referenced, i2;
  }
  trackGraphicState(e4) {
    return null == this._graphicStateTracking && (this._graphicStateTracking = new e$1(this)), this._graphicStateTracking.add(e4);
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
    const s3 = e4.symbol.id;
    this._graphicsBySymbol.has(s3) || this._graphicsBySymbol.set(s3, /* @__PURE__ */ new Map()), this._graphicsBySymbol.get(s3).set(i2.uid, r2);
    if (r2.isDraped && this._graphicsDrapedUids.add(i2.uid), r2.centroid = null, null != i2.geometry && "point" !== i2.geometry.type && (r2.centroid = w$3(i2.geometry, this._viewSpatialReference)), this._updateUserVisibility(r2), null != this._scaleVisibility && this._scaleVisibility.updateVisibility(r2), null != this._filterVisibility) {
      const { defaultVisibility: e5 } = this._filterVisibility;
      r2.setVisibilityFlag(A$1.GRAPHIC, L.FILTER, e5), e5 || this._filterVisibility.reapply();
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
      if (this._validateRenderer(e4), null == e4 && this._currentRendererChange(null, false), t$8(e4))
        if (null != e4 && e4.arcadeRequired) {
          const t2 = new AbortController();
          this._rendererChangeAbortController = t2;
          const { arcadeUtils: i2 } = await this._ensureArcade();
          s$2(t2);
          const r2 = i2.hasGeometryOperations(e4);
          r2 && (await i2.enableGeometryOperations(), s$2(t2)), this.effectiveUpdatePolicy === C$1.ASYNC ? await this._frameTask.schedule(() => this._currentRendererChange(e4, r2), t2.signal) : this._currentRendererChange(e4, r2), this._rendererChangeAbortController = null;
        } else if (this.effectiveUpdatePolicy === C$1.ASYNC) {
          const t2 = new AbortController();
          this._rendererChangeAbortController = t2, await this._frameTask.schedule(() => this._currentRendererChange(e4, false), t2.signal), this._rendererChangeAbortController = null;
        } else
          this._currentRendererChange(e4, false);
      else
        this._currentRendererChange(e4, false);
  }
  async _ensureArcade() {
    return null == this._arcadeOnDemand ? (this._arcadeOnDemand = await i$3(), this._arcadeOnDemand) : this._arcadeOnDemand;
  }
  _currentRendererChange(e4, t2) {
    this.currentRenderer = e4, this.rendererHasGeometryOperations = t2, this.symbolCreationContext.arcade = this._arcadeOnDemand;
    const i2 = this.symbolCreationContext.renderer;
    if (e4 === i2)
      return;
    if (this._symbolConversionCache.clear(), null == e4)
      return this.symbolCreationContext.renderer = null, void this.recreateAllGraphicsAndSymbols();
    const r2 = a$4(i2, e4);
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
    for (const s3 of t2) {
      const t3 = this._graphicsBySymbol.get(s3.id);
      t3 && t3.forEach((a2, n2) => {
        const o2 = a2.graphic, l2 = this.layer instanceof b$6 ? this.layer : null, h2 = this._arcadeOnDemand;
        if (s3 === i2.defaultSymbol && i2.getSymbol(c$5(o2, l2), { arcade: h2 }) === i2.defaultSymbol)
          return;
        const d3 = a2.usedMemory;
        e4.length || i2.defaultSymbol ? r2.push(o2) : this._graphicsWithoutSymbol.set(n2, o2);
        const p2 = this.graphics3DGraphics.get(n2);
        this._conditionalRemove(p2, n2), a2.destroy(), t3.delete(n2), this._removeGraphics3DGraphic(n2, d3), this._updateLayerVisibility();
      }), this._whenSymbolRemoved.forAll((e5) => e5(s3.id));
    }
    (e4.length || r2.length) && (this._graphicsWithoutSymbol.forEach((e5) => r2.push(e5)), this._graphicsWithoutSymbol.clear(), this.add(r2)), this._cleanupSymbols(), this._labeler && this.owner.view.labeler.setDirty(), this.owner.view.deconflictor.setDirty();
  }
  _applyUniqueValueRendererDiff(e4, t2, i2) {
    const r2 = e4.diff.defaultSymbol, a2 = e4.diff.uniqueValueInfos;
    if (r2 || a2) {
      const n2 = a2 ? a2.added.map((e5) => e5.symbol).filter(k$1) : [], o2 = a2 ? a2.removed.map((e5) => e5.symbol).filter(k$1) : [];
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
    const r2 = (e5) => null != e5 ? e5.id : null, s3 = e4 && e4.diff, a2 = s3?.defaultSymbol, n2 = s3 && s3.uniqueValueInfos;
    let o2;
    if (n2)
      o2 = n2.unchanged.map((e5) => ({ oldId: r2(e5.oldValue.symbol), newId: r2(e5.newValue.symbol) }));
    else {
      o2 = [];
      for (const e5 of i2.uniqueValueInfos ?? []) {
        const i3 = r2(e5.symbol), s4 = t2.uniqueValueInfos?.find((t3) => t3.value === e5.value);
        s4 && i3 !== r2(s4.symbol) && o2.push({ oldId: i3, newId: r2(s4.symbol) });
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
    const s3 = this._symbols.get(e4);
    if (void 0 !== s3 && (this._symbols.delete(e4), this._symbols.set(i2, s3), null != s3)) {
      const e5 = "string" == typeof t2 ? null : t2;
      null != e5 ? s3.symbol = e5 : s3.symbol.id = i2;
    }
  }
  _updateUnchangedSymbolMappings(e4, t2, i2) {
    const r2 = this._calculateUnchangedSymbolMapping(e4, t2, i2);
    for (const { oldId: s3, newId: a2 } of r2)
      this._updateSymbolMapping(s3, a2);
  }
  _applyRendererDiff(e4, i2, r2) {
    if (this._diffHasSymbolChange(e4))
      return false;
    if (i2 instanceof A$2 && r2 instanceof A$2 && this._applyUniqueValueRendererDiff(e4, i2, r2) && 0 === Object.keys(e4.diff).length)
      return true;
    for (const [t2] of this._graphicsBySymbol) {
      const r3 = this._symbols.get(t2);
      if (null != r3)
        switch (r3.applyRendererDiff(e4, i2)) {
          case e$8.RecreateSymbol:
            this._recreateSymbol(t2);
            break;
          case e$8.RecreateGraphics:
            this._recreateGraphicsForSymbol(t2);
          case e$8.FastUpdate:
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
    this._updatingPendingLoadedGraphicsChange && this._updatingPendingLoadedGraphicsChange.remove(), this._updatingPendingLoadedGraphicsChange = k(() => {
      this._updatingPendingLoadedGraphicsChange = null;
    });
  }
  setClippingExtent(e4, t2) {
    const i2 = this.symbolCreationContext.clippingExtent, r2 = u$a();
    return u$b(e4, r2, t2) ? this.symbolCreationContext.clippingExtent = Z(i$1(), r2) : this.symbolCreationContext.clippingExtent = null, !B(this.symbolCreationContext.clippingExtent, i2);
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
      e4(i2, this._graphicsBySymbol.get(t2) || He, t2);
    }
  }
  updateAllGraphicsVisibility() {
    null != this._filterVisibility && this._filterVisibility.reapply(), this.modifyGraphics3DGraphicVisibilities((e4) => {
      const t2 = this._updateUserVisibility(e4), i2 = null != this._scaleVisibility && this._scaleVisibility.updateVisibility(e4);
      return t2 || i2;
    });
  }
  _hideAllGraphics() {
    this.modifyGraphics3DGraphicVisibilities((e4) => e4.setVisibilityFlag(A$1.GRAPHIC, L.USER, false));
  }
  _validateRenderer(e4) {
    const t2 = s$6(e4, { geometryType: this.layer?.geometryType });
    if (t2) {
      const e5 = `Renderer for layer '${this.layer.title ? `${this.layer.title}, ` : ""}, id:${this.layer.id}' is not supported in a SceneView`;
      Ve.warn(e5, t2.message);
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
      r2 && 0 !== r2.size || (this._graphicsBySymbol.delete(i2), this._symbols.delete(i2), u$6(t2), e4 = true);
    }), e4 && (this._recomputeExtentPadding(), this.notifyChange("averageSymbolComplexity"));
  }
  get test() {
    return { snapshotInternals: () => ({ graphics: [...this.graphics3DGraphics.keys()].sort(), symbols: [...this._symbols.keys()].sort(), graphicsBySymbol: [...this._graphicsBySymbol.keys()].sort().map((e4) => ({ symbolId: e4, graphics: [...this._graphicsBySymbol.get(e4).keys()].sort() })), graphicsWithoutSymbol: [...this._graphicsWithoutSymbol.keys()].sort(), graphicsDrapedUids: [...this._graphicsDrapedUids].sort(), pendingUpdates: this._pendingUpdates }), symbols: this._symbols, filterVisibility: this._filterVisibility, numPending: this._pendingUpdates.size, forceUpdatePolicy: (e4) => {
      this._forcedUpdatePolicy = e4;
    } };
  }
  get performanceInfo() {
    return { visible: this.graphics3DGraphics.size, missing: this._graphicsWithoutSymbol.size, pending: this._pendingUpdates.size };
  }
};
var Te;
Fe.tmpVec = n$1(), e$4([y$2({ readOnly: true })], Fe.prototype, "computedExtent", void 0), e$4([y$2()], Fe.prototype, "currentRenderer", void 0), e$4([y$2()], Fe.prototype, "rendererHasGeometryOperations", void 0), e$4([y$2()], Fe.prototype, "_frameTask", void 0), e$4([y$2({ readOnly: true })], Fe.prototype, "_viewSpatialReference", null), e$4([y$2()], Fe.prototype, "_rendererChangeAbortController", void 0), e$4([y$2()], Fe.prototype, "_elevationInfoChangeAbortController", void 0), e$4([y$2()], Fe.prototype, "_initializeAbortController", void 0), e$4([y$2()], Fe.prototype, "_elevationAlignment", void 0), e$4([y$2()], Fe.prototype, "_scaleVisibility", void 0), e$4([y$2()], Fe.prototype, "_filterVisibility", void 0), e$4([y$2()], Fe.prototype, "_initializePromise", void 0), e$4([y$2()], Fe.prototype, "_spatialIndex", void 0), e$4([y$2({ readOnly: true })], Fe.prototype, "extentPadding", void 0), e$4([y$2()], Fe.prototype, "_updatingPendingLoadedGraphicsChange", void 0), e$4([y$2()], Fe.prototype, "_featureStore", void 0), e$4([y$2()], Fe.prototype, "_deconflictor", void 0), e$4([y$2()], Fe.prototype, "_labeler", void 0), e$4([y$2()], Fe.prototype, "_objectStates", void 0), e$4([y$2()], Fe.prototype, "_loadingSymbols", void 0), e$4([y$2()], Fe.prototype, "preferredUpdatePolicy", void 0), e$4([y$2()], Fe.prototype, "_forcedUpdatePolicy", void 0), e$4([y$2({ readOnly: true })], Fe.prototype, "effectiveUpdatePolicy", null), e$4([y$2({ constructOnly: true })], Fe.prototype, "elevationFeatureExpressionEnabled", void 0), e$4([y$2({ constructOnly: true })], Fe.prototype, "owner", void 0), e$4([y$2({ constructOnly: true })], Fe.prototype, "layer", void 0), e$4([y$2({ constructOnly: true })], Fe.prototype, "graphicSymbolSupported", void 0), e$4([y$2({ constructOnly: true })], Fe.prototype, "getRenderingInfoWithoutRenderer", void 0), e$4([y$2({ constructOnly: true })], Fe.prototype, "componentFactories", void 0), e$4([y$2({ constructOnly: true })], Fe.prototype, "setUidToIdOnAdd", void 0), e$4([y$2()], Fe.prototype, "featureStore", null), e$4([y$2()], Fe.prototype, "initializePromise", null), e$4([y$2()], Fe.prototype, "scaleVisibility", null), e$4([y$2()], Fe.prototype, "elevationAlignment", null), e$4([y$2()], Fe.prototype, "objectStates", null), e$4([y$2()], Fe.prototype, "filterVisibility", null), e$4([y$2({ readOnly: true })], Fe.prototype, "updating", null), e$4([y$2({ readOnly: true })], Fe.prototype, "running", null), e$4([y$2({ readOnly: true })], Fe.prototype, "suspendedOrOutsideOfView", null), e$4([y$2({ readOnly: true, dependsOn: [] })], Fe.prototype, "updatingRemaining", null), e$4([y$2({ readOnly: true })], Fe.prototype, "displayFeatureLimit", null), e$4([y$2({ readOnly: true, dependsOn: [] })], Fe.prototype, "averageSymbolComplexity", null), e$4([y$2({ constructOnly: true })], Fe.prototype, "hasZ", void 0), e$4([y$2({ constructOnly: true })], Fe.prototype, "hasM", void 0), e$4([y$2()], Fe.prototype, "_objectIdField", null), Fe = Ae = e$4([c$4(Oe)], Fe), function(e4) {
  e4[e4.NEW = 0] = "NEW", e4[e4.LOADING = 1] = "LOADING", e4[e4.READY = 2] = "READY", e4[e4.REJECTED = 3] = "REJECTED";
}(Te || (Te = {}));
class ke {
  constructor() {
    this.add = null, this.renderingInfo = null, this.state = Te.NEW, this.abortController = null, this.remove = null;
  }
  clear() {
    this.add = null, this.renderingInfo = null, this.state = Te.NEW, this.abortController = null, this.remove = null;
  }
}
const ze = 10, Me = n$1(), We = n$1(), He = /* @__PURE__ */ new Map();
const u$1 = s$4.getLogger("esri.views.3d.layers.graphics.Graphics3DScaleVisibility");
let y2 = class extends g$1 {
  constructor(e4) {
    super(e4), this._scaleRangeActive = false, this._layerScaleRangeVisibilityQuery = false, this._extent = null, this._updatingHandles = new h$4(), this.graphicsCoreOwner = null, this.layer = null, this.queryGraphicUIDsInExtent = null, this.graphicsCore = null, this.basemapTerrain = null, this.layerScaleEnabled = true, this.suspended = false, this._dirty = true;
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
      const r2 = u$a();
      s$7(e4, i2, r2, t2) ? this._extent = r2 : this._extent = null;
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
    return this._scaleRangeActive = t2, t2 && !this.hasHandles(b) && this.basemapTerrain ? (this.addHandles(this.basemapTerrain.on("scale-change", (e5) => this._scaleUpdateHandler(e5)), b), this.layerScaleEnabled && this.addHandles(this.basemapTerrain.on("tiles-visibility-changed", () => this._setDirty()), b)) : !t2 && this.hasHandles(b) && this.removeHandles(b), r2;
  }
  get running() {
    return !(!this.graphicsCoreOwner.view.basemapTerrain || !this.updating);
  }
  runTask(e4) {
    const i2 = this.graphicsCoreOwner.view.basemapTerrain;
    if (this._extent && i2 && i2.ready && this._scaleRangeActive && this.layerScaleEnabled) {
      if (this._layerScaleRangeVisibilityQuery)
        return g$2.YIELD;
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
    return !this.layerScaleEnabled || t$9(e4, i2.minScale || 0, i2.maxScale || 0);
  }
  _visibleAtLabelScale(e4, i2) {
    return t$9(e4, i2.minScale || 0, i2.maxScale || 0);
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
      return e4.setVisibilityFlag(A$1.GRAPHIC, L.SCALE_RANGE, i2);
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
      if (e4.setVisibilityFlag(A$1.LABEL, L.SCALE_RANGE, r2))
        return true;
    }
    return false;
  }
  _scaleUpdateHandler(e4) {
    if (this._setDirty(), !this.graphicsCore.visible)
      return;
    const i2 = e4.extent, t2 = e4.scale, r2 = this._visibleAtLayerScale(t2);
    let s3 = false;
    const a2 = this.graphicsCoreOwner.view.spatialReference, n2 = e4.spatialReference;
    if (null == n2)
      return void u$1.error("scaleUpdate: Internal error, no SpatialReference given for tiles");
    const h2 = !n2.equals(a2);
    if (h2) {
      if (!s$7(i2, n2, _, a2))
        return void u$1.error("scaleUpdate: Internal error, cannot project AABR from " + n2 + " to wkid " + a2);
    }
    const p2 = h2 ? _ : i2;
    this.queryGraphicUIDsInExtent(p2, a2, (e5) => {
      const a3 = this.graphicsCore.getGraphics3DGraphicById(e5);
      if (null == a3)
        return;
      const l2 = a3.centroid;
      null != l2 && (i2[0] > l2.x || i2[1] > l2.y || i2[2] < l2.x || i2[3] < l2.y) || (a3.setVisibilityFlag(A$1.GRAPHIC, L.SCALE_RANGE, r2) && (s3 = true), this._updateLabelScaleVisibility(a3, t2) && (s3 = true));
    }), s3 && (this.graphicsCoreOwner.view.deconflictor.setDirty(), this.graphicsCoreOwner.view.labeler.setDirty());
  }
  layerMinMaxScaleChangeHandler() {
    this.updateScaleRangeActive() && !this._scaleRangeActive ? this.graphicsCore.modifyGraphics3DGraphicVisibilities((e4) => e4.setVisibilityFlag(A$1.GRAPHIC, L.SCALE_RANGE, true)) : this._scaleRangeActive && this.graphicsCore.updateAllGraphicsVisibility(), this._setDirty();
  }
};
function g(e4, i2) {
  return e4 > 0 || i2 > 0;
}
e$4([y$2()], y2.prototype, "graphicsCoreOwner", void 0), e$4([y$2()], y2.prototype, "layer", void 0), e$4([y$2()], y2.prototype, "queryGraphicUIDsInExtent", void 0), e$4([y$2()], y2.prototype, "graphicsCore", void 0), e$4([y$2()], y2.prototype, "basemapTerrain", void 0), e$4([y$2({ constructOnly: true })], y2.prototype, "layerScaleEnabled", void 0), e$4([y$2({ readOnly: true })], y2.prototype, "suspended", void 0), e$4([y$2({ readOnly: true })], y2.prototype, "updating", null), e$4([y$2()], y2.prototype, "_dirty", void 0), y2 = e$4([c$4("esri.views.3d.layers.graphics.Graphics3DScaleVisibility")], y2);
const b = "terrain-events", _ = u$a();
const a = 0.05;
class l {
  constructor() {
    this._extents = new l$2({ allocator: (t2) => t2 || u$a() }), this._tmpExtent = u$a(), this._dirty = false;
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
    this._contains(t2) || (this._removeContained(t2), e$9(this._extents.pushNew(), t2), this._dirty = true);
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
            const l2 = l$6(h2), _2 = l$6(i4), c2 = this._tmpExtent;
            m$3(h2, i4, c2);
            const d3 = l2 + _2;
            (l$6(c2) - d3) / d3 < a && (e$9(h2, c2), o2.delete(i4), e4.remove(i4), t2.madeProgress());
          }), o2.add(h2);
        }
      }
    }
    this._dirty = false;
  }
  _contains(t2) {
    return this._extents.some((e4) => R(e4, t2));
  }
  _removeContained(t2) {
    this._extents.filterInPlace((e4) => !R(t2, e4));
  }
  get test() {
    const t2 = this;
    return { containsPoint: (e4) => t2._extents.some((t3) => b$7(t3, e4)) };
  }
}
let p = class extends g$1 {
  constructor(e4) {
    super(e4), this._dirtyExtents = new l(), this._globalDirty = false, this._averageExtentUpdateSize = 0, this._dirtyGraphicsSet = /* @__PURE__ */ new Set(), this._updateElevation = false, this.graphicsCoreOwner = null, this.graphicsCore = null, this.events = new o();
  }
  initialize() {
    const e4 = this.elevationProvider, t2 = this.graphicsCoreOwner.view.resourceController.scheduler;
    this.addHandles([e4.on("elevation-change", (e5) => this._elevationChanged(e5)), d$4(() => this.graphicsCoreOwner.suspended, () => this._suspendedChange()), t2.registerTask(I$1.ELEVATION_ALIGNMENT, this)]);
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
  runTask(e4) {
    for (this._globalDirty && (this._markAllGraphicsElevationDirty(), this._globalDirty = false, e4.madeProgress()), e4.run(() => this._dirtyExtents.merge(e4)); this.running && !e4.done; )
      this._updateDirtyGraphics(e4), this._updateDirtyExtents(e4);
    this.notifyChange("updating");
  }
  _updateDirtyGraphics(e4) {
    const t2 = this.graphicsCoreOwner.view.renderCoordsHelper, i2 = this.graphicsCore.effectiveUpdatePolicy === C$1.ASYNC;
    for (const r2 of this._dirtyGraphicsSet.keys()) {
      const s3 = this.graphicsCore.getGraphics3DGraphicById(r2);
      if (this._dirtyGraphicsSet.delete(r2), null != s3 && (s3.alignWithElevation(this.elevationProvider, t2, i2), this.graphicsCoreOwner.view.deconflictor.setDirty(), e4.madeProgress()), e4.done)
        return;
    }
  }
  _updateDirtyExtents(e4) {
    for (; !this._dirtyExtents.empty && !e4.done; ) {
      const t2 = this._dirtyExtents.pop(), i2 = this.elevationProvider.spatialReference;
      this.events.emit("invalidate-elevation", { extent: t2, spatialReference: i2 });
      const r2 = this._dirtyGraphicsSet.size;
      this.queryGraphicUIDsInExtent(t2, i2, (e5) => {
        const t3 = this.graphicsCore.getGraphics3DGraphicById(e5);
        null != t3 && t3.needsElevationUpdates() && this._dirtyGraphicsSet.add(e5);
      }), this._averageExtentUpdateSize = 0.1 * (this._dirtyGraphicsSet.size - r2) + 0.9 * this._averageExtentUpdateSize, e4.madeProgress();
    }
  }
  _markAllGraphicsElevationDirty() {
    this._dirtyExtents.clear(), this._dirtyGraphicsSet.clear(), this.graphicsCore.graphics3DGraphics.forEach((e4, t2) => this._dirtyGraphicsSet.add(t2));
  }
  _elevationChanged(e4) {
    if ("scene" === e4.context && (!this.graphicsCore.layer.elevationInfo || "relative-to-scene" !== this.graphicsCore.layer.elevationInfo.mode))
      return;
    const { extent: t2, spatialReference: i2 } = e4;
    if (this.graphicsCoreOwner.suspended) {
      if (!this._updateElevation) {
        const e5 = this.graphicsCore.computedExtent;
        e5 && t2[2] > e5.xmin && t2[0] < e5.xmax && t2[3] > e5.ymin && t2[1] < e5.ymax && (this._updateElevation = true);
      }
      this.events.emit("invalidate-elevation", { extent: t2, spatialReference: i2 });
    } else
      t2[0] === -1 / 0 ? this._globalDirty = true : this._dirtyExtents.add(t2), this.notifyChange("updating");
  }
};
e$4([y$2()], p.prototype, "graphicsCoreOwner", void 0), e$4([y$2()], p.prototype, "graphicsCore", void 0), e$4([y$2()], p.prototype, "queryGraphicUIDsInExtent", void 0), e$4([y$2()], p.prototype, "elevationProvider", void 0), e$4([y$2({ readOnly: true })], p.prototype, "updating", null), e$4([y$2({ readOnly: true })], p.prototype, "updatingRemaining", null), p = e$4([c$4("esri.views.3d.layers.graphics.Graphics3DElevationAlignment")], p);
const h = 1.2;
let u = class extends g$1 {
  constructor(e4) {
    super(e4), this.suspended = false, this._extent = null, this._extentIntersectionDirty = true, this._isVisibleBelowSurfaceInternal = false, this.graphicsCoreOwner = null, this.updating = true;
  }
  initialize() {
    const { graphicsCoreOwner: e4 } = this;
    this._extentIntersection = new N$1({ renderCoordsHelper: e4.view.renderCoordsHelper });
    const t2 = e4.view, n2 = t2.basemapTerrain, o2 = t2.resourceController.scheduler;
    this.addHandles([t2.on("resize", () => this._viewChange()), d$4(() => t2.state.camera, () => this._viewChange(), C$4), o2.registerTask(I$1.FRUSTUM_VISIBILITY, this), d$4(() => n2.visibleElevationBounds, () => this._elevationBoundsChange())]), "local" === t2.viewingMode ? this._isVisibleBelowSurface = true : this.addHandles([d$4(() => [n2.baseOpacity, n2.wireframe, t2.map?.ground?.navigationConstraint?.type], () => this._updateIsVisibleBelowSurface(), P$1)]);
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
    const e4 = this.graphicsCoreOwner.view, t2 = e4.basemapTerrain, s3 = "local" === e4.viewingMode, i2 = "none" === e4.map.ground?.navigationConstraint?.type;
    this._isVisibleBelowSurface = s3 || !t2.opaque || i2;
  }
  _updateExtentIntersection() {
    if (!this._extentIntersectionDirty)
      return;
    this._extentIntersectionDirty = false;
    const e4 = this.graphicsCoreOwner.view;
    let t2;
    if (this._isVisibleBelowSurfaceInternal)
      t2 = -0.3 * R$1(e4.spatialReference).radius;
    else {
      const { min: s3, max: i2 } = e4.basemapTerrain.visibleElevationBounds;
      t2 = s3 - Math.max(1, (i2 - s3) * (h - 1));
    }
    this._extentIntersection.update(this._extent, e4.spatialReference, t2);
  }
  get running() {
    return this.updating;
  }
  runTask(e4) {
    if (this._set("updating", false), !this._extent)
      return this._set("suspended", false), g$2.YIELD;
    this._updateExtentIntersection();
    const t2 = this.graphicsCoreOwner.view.frustum, s3 = R$1(this.graphicsCoreOwner.view.spatialReference).radius;
    this._set("suspended", !this._extentIntersection.isVisibleInFrustum(t2, s3)), e4.madeProgress();
  }
};
e$4([y$2({ readOnly: true })], u.prototype, "suspended", void 0), e$4([y$2({ constructOnly: true })], u.prototype, "graphicsCoreOwner", void 0), e$4([y$2({ readOnly: true })], u.prototype, "updating", void 0), u = e$4([c$4("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")], u);
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
        r2.objectStateId.channel === t$a.Highlight ? r2.object.removeHighlight(r2.objectStateId) : r2.objectStateId.channel === t$a.MaskOccludee && r2.object.removeOcclude(r2.objectStateId);
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
class s2 {
  constructor(t2) {
    this._graphicsCore = t2, this._stateSets = new Array();
  }
  destroy() {
    this.reset(), this._stateSets = null;
  }
  reset() {
    this._stateSets && (this._stateSets.forEach((t2) => t2.objectStateSet.removeAll()), this._stateSets.length = 0);
  }
  acquireSet(s3, a2) {
    const i2 = new e3(s3, a2);
    this._stateSets.push(i2);
    const h2 = e$6(() => this.releaseSet(i2));
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
    const s3 = this._graphicsCore.graphics3DGraphics.get(e4);
    s3 && this._addObjectStateSet(s3, t2);
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
    }) : t2.ids.forEach((s3) => {
      const a2 = e4.get(s3);
      a2 && this._addObjectStateSet(a2, t2);
    });
  }
  get test() {
    return { states: this._stateSets };
  }
}
export {
  Fe as F,
  e$2 as e,
  l,
  p,
  s2 as s,
  u,
  y2 as y
};
