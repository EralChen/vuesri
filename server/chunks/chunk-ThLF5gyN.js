import { bs as g$1, bm as h$1, bn as P$1, gX as m, bJ as d$1, e3 as v, g$ as P, b1 as s$1, h0 as m$1, gZ as E, el as d$2, c2 as F, bq as j, h1 as J, cP as D, de as b$1, dq as rt, h2 as t$1, h3 as o$1, dj as Z, eV as I, bo as e, bp as y, br as c, g_ as h$2, h4 as z$1 } from "./chunk-KFNcxJaF.js";
import { t } from "./chunk-Jk46lvUq.js";
import { a as a$1 } from "./chunk-NkuZ7t90.js";
import { m as m$2 } from "./chunk-UzDyJefO.js";
import { W } from "./chunk-mk4KSkT-.js";
import { o, a } from "./chunk-RMUEgZa6.js";
import { i, r, n } from "./chunk-HH1t1DW9.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-vP0bHkve.js";
import "./chunk-tNARKRa3.js";
import "./chunk-I8SN0CZW.js";
import "./chunk-XCl2NxdK.js";
import "./chunk-H58sM9yM.js";
import "./chunk-MT1PWqgL.js";
import "./chunk-ewxQmXoN.js";
import "./chunk-Tt9yuqqG.js";
import "./chunk-73GSp-ey.js";
import "./chunk-x5arQHJi.js";
const z = "graphics-collections";
let O = class extends g$1 {
  get updating() {
    return this._updatingHandles.updating;
  }
  get _hasZ() {
    const e2 = this.view;
    return null != e2 && "3d" === e2.type && "map-notes" !== this.layerSource.layer.type;
  }
  get _snappingElevationAligner() {
    const { view: e2 } = this, { layer: t2 } = this.layerSource, s = null != e2 && "3d" === e2.type;
    if (!s || "map-notes" === t2.type)
      return i();
    const o2 = async (s2, o3) => (await h$2(e2.whenLayerView(t2), o3)).elevationAlignPointsInFeatures(s2, o3);
    return i(s, { elevationInfo: t2.elevationInfo, alignPointsInFeatures: o2 });
  }
  get _snappingElevationFilter() {
    const { view: e2 } = this, t2 = null != e2 && "3d" === e2.type && "map-notes" !== this.layerSource.layer.type;
    return r(t2);
  }
  get _symbologySnappingFetcher() {
    const { view: e2 } = this, { layer: t2 } = this.layerSource, s = null != e2 && "3d" === e2.type, o2 = this._extrudedPolygonSymbolsCount > 0;
    return s && "map-notes" !== t2.type && o2 ? n(o2, async (s2, o3) => {
      const r2 = await e2.whenLayerView(t2);
      return s$1(o3), r2.queryForSymbologySnapping({ candidates: s2, spatialReference: e2.spatialReference }, o3);
    }) : n();
  }
  constructor(e2) {
    super(e2), this.availability = 1, this._sources = { multipoint: null, point: null, polygon: null, polyline: null }, this._loadedWkids = /* @__PURE__ */ new Set(), this._loadedWkts = /* @__PURE__ */ new Set(), this._pendingAdds = [], this._extrudedPolygonSymbolsCount = 0, this._updatingHandles = new h$1(), this._memoizedMakeGetGroundElevation = t(o);
  }
  destroy() {
    for (const e2 of this._pendingAdds)
      e2.task.abort();
    this._pendingAdds.length = 0, this._mapSources((e2) => this._destroySource(e2)), this._updatingHandles.destroy();
  }
  initialize() {
    this._updatingHandles.add(() => this.getGraphicsLayers(), (e3) => {
      this._updatingHandles.removeHandles(z);
      for (const t3 of e3)
        this._addMany(t3.graphics.toArray()), this.addHandles([t3.on("graphic-update", (e4) => this._onGraphicUpdate(e4)), this._updatingHandles.addOnCollectionChange(() => t3.graphics, (e4) => this._onGraphicsChanged(e4))], z);
    }, P$1);
    const { view: e2 } = this, { layer: t2 } = this.layerSource;
    null != e2 && "3d" === e2.type && "map-notes" !== t2.type && this.addHandles([e2.elevationProvider.on("elevation-change", ({ context: e3 }) => {
      m(e3, t2.elevationInfo) && this._snappingElevationAligner.notifyElevationSourceChange();
    }), d$1(() => t2.elevationInfo, () => this._snappingElevationAligner.notifyElevationSourceChange(), P$1), v(() => t2, ["edits", "apply-edits", "graphic-update"], () => this._symbologySnappingFetcher.notifySymbologyChange())]);
  }
  async fetchCandidates(e2, t2) {
    const { point: s, coordinateHelper: { spatialReference: o2 } } = e2, r2 = await P(this._mapSources((s2) => this._fetchCandidatesForSource(s2, e2, t2)));
    s$1(t2);
    const a$12 = this._memoizedMakeGetGroundElevation(this.view, o2), p = r2.flat().map((e3) => a(e3, a$12));
    return m$1(s, p), p;
  }
  async _fetchCandidatesForSource(e2, t2, s) {
    const o2 = E(t2, this.view?.type ?? "2d"), r2 = await e2.queryEngine.executeQueryForSnapping(o2, s);
    s$1(s);
    const n2 = await this._snappingElevationAligner.alignCandidates(r2.candidates, t2.coordinateHelper.spatialReference, s);
    s$1(s);
    const a2 = await this._symbologySnappingFetcher.fetch(n2, s);
    s$1(s);
    const p = 0 === a2.length ? n2 : [...n2, ...a2];
    return this._snappingElevationFilter.filter(o2, p);
  }
  refresh() {
  }
  _onGraphicUpdate(e2) {
    if (this.getGraphicsLayers().some((t2) => t2.graphics.includes(e2.graphic)))
      switch (e2.property) {
        case "geometry":
        case "visible":
          this._remove(e2.graphic), this._addMany([e2.graphic]);
      }
  }
  _onGraphicsChanged(e2) {
    for (const t2 of e2.removed)
      this._remove(t2);
    this._addMany(e2.added);
  }
  _addMany(e2) {
    const t2 = [], s = /* @__PURE__ */ new Map();
    for (const o2 of e2)
      null != o2.geometry && (this._needsInitializeProjection(o2.geometry.spatialReference) ? (t2.push(o2.geometry.spatialReference), s.set(o2.uid, o2)) : this._add(o2));
    this._createPendingAdd(t2, s);
  }
  _createPendingAdd(e2, t2) {
    if (!e2.length)
      return;
    const r2 = d$2(async (s) => {
      await F(e2.map((e3) => ({ source: e3, dest: this.spatialReference })), { signal: s }), this._markLoadedSpatialReferences(e2);
      for (const [, e3] of t2)
        this._add(e3);
    });
    this._updatingHandles.addPromise(r2.promise);
    const i2 = { task: r2, graphics: t2 }, n2 = () => z$1(this._pendingAdds, i2);
    r2.promise.then(n2, n2), this._pendingAdds.push(i2);
  }
  _markLoadedSpatialReferences(e2) {
    for (const t2 of e2) {
      null != t2.wkid && this._loadedWkids.add(t2.wkid);
      const e3 = t2.wkt2 || t2.wkt;
      e3 && this._loadedWkts.add(e3);
    }
  }
  _add(e2) {
    if (null == e2.geometry || !e2.visible)
      return;
    let t2 = e2.geometry;
    if ("mesh" === t2.type)
      return;
    "extent" === t2.type && (t2 = j.fromExtent(t2));
    const s = this._ensureSource(t2.type);
    if (null == s)
      return;
    const o2 = this._createOptimizedFeature(e2.uid, t2);
    null != o2 && (s.featureStore.add(o2), J(e2.symbol) && this._extrudedPolygonSymbolsCount++);
  }
  _needsInitializeProjection(e2) {
    if (null != e2.wkid && this._loadedWkids.has(e2.wkid))
      return false;
    const t2 = e2.wkt2 || e2.wkt;
    return (!t2 || !this._loadedWkts.has(t2)) && !D(e2, this.spatialReference);
  }
  _createOptimizedFeature(e2, t2) {
    const s = b$1(a$1(t2), this.spatialReference);
    if (!s)
      return null;
    const o2 = this._ensureGeometryHasZ(s), r2 = rt(o2, this._hasZ, false);
    return new t$1(r2, { [U]: e2 }, null, e2);
  }
  _ensureGeometryHasZ(e2) {
    if (!this._hasZ)
      return e2;
    const t2 = (e3) => {
      for (; e3.length < 3; )
        e3.push(0);
    }, s = e2.clone();
    switch (s.hasZ = true, s.type) {
      case "point":
        s.z = s.z ?? 0;
        break;
      case "multipoint":
        s.points.forEach(t2);
        break;
      case "polyline":
        s.paths.forEach((e3) => e3.forEach(t2));
        break;
      case "polygon":
        s.rings.forEach((e3) => e3.forEach(t2));
    }
    return s;
  }
  _ensureSource(e2) {
    const t2 = this._sources[e2];
    if (null != t2)
      return t2;
    const s = this._createSource(e2);
    return this._sources[e2] = s, s;
  }
  _createSource(e2) {
    const t2 = o$1.toJSON(e2), s = this._hasZ, o2 = new m$2({ geometryType: t2, hasZ: s, hasM: false });
    return { featureStore: o2, queryEngine: new W({ featureStore: o2, fieldsIndex: Z.fromLayerJSON({ fields: [{ name: U, type: "esriFieldTypeOID", alias: U }] }), geometryType: t2, hasM: false, hasZ: s, objectIdField: U, spatialReference: this.spatialReference, priority: I.SNAPPING, scheduler: null != this.view && "3d" === this.view.type ? this.view.resourceController.scheduler : null }), type: e2 };
  }
  _remove(e2) {
    this._mapSources((t2) => this._removeFromSource(t2, e2));
    for (const t2 of this._pendingAdds)
      t2.graphics.delete(e2.uid), 0 === t2.graphics.size && t2.task.abort();
  }
  _removeFromSource(e2, t2) {
    const s = t2.uid;
    e2.featureStore.has(s) && (e2.featureStore.removeById(t2.uid), J(t2.symbol) && this._extrudedPolygonSymbolsCount--);
  }
  _destroySource(e2) {
    e2.queryEngine.destroy(), this._sources[e2.type] = null;
  }
  _mapSources(e2) {
    const { point: t2, polygon: s, polyline: o2, multipoint: r2 } = this._sources, i2 = [];
    return null != t2 && i2.push(e2(t2)), null != s && i2.push(e2(s)), null != o2 && i2.push(e2(o2)), null != r2 && i2.push(e2(r2)), i2;
  }
};
e([y()], O.prototype, "getGraphicsLayers", void 0), e([y({ constructOnly: true })], O.prototype, "layerSource", void 0), e([y({ constructOnly: true })], O.prototype, "spatialReference", void 0), e([y({ constructOnly: true })], O.prototype, "view", void 0), e([y({ readOnly: true })], O.prototype, "updating", null), e([y({ readOnly: true })], O.prototype, "availability", void 0), e([y()], O.prototype, "_hasZ", null), e([y()], O.prototype, "_snappingElevationAligner", null), e([y()], O.prototype, "_snappingElevationFilter", null), e([y()], O.prototype, "_symbologySnappingFetcher", null), e([y()], O.prototype, "_extrudedPolygonSymbolsCount", void 0), O = e([c("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")], O);
const U = "OBJECTID";
export {
  O as GraphicsSnappingSource
};
