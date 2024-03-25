import { bZ as S$1, bW as h$1, hR as t, bX as P$1, hQ as E, ce as d$1, eV as v, hV as g, cU as s$1, hW as f, hT as y, fb as d$2, hX as I$1, bY as j, hY as J, dc as H$1, dF as U$1, dR as ot, cs as t$1, hZ as o$1, dL as Z, fL as I, aV as e, aX as y$1, a_ as c, hU as h$2, h_ as I$2 } from "./chunk-ejFG4zJ0.js";
import { a as a$1 } from "./chunk-X6Yd3gQb.js";
import { m } from "./chunk-HoJyfhBe.js";
import { $ } from "./chunk-P_v7gizd.js";
import { o, a } from "./chunk-SrbIdaY6.js";
import { i, r, n } from "./chunk-vJhIHpbR.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-XuSN4Qyd.js";
import "./chunk-E1ai5rf5.js";
import "./chunk-pZO3UCge.js";
import "./chunk-H58sM9yM.js";
import "./chunk-ISSNghJ_.js";
import "./chunk-stE6bWuO.js";
import "./chunk-KyVc0M84.js";
import "./chunk-KfB6QvrM.js";
import "./chunk-s09znI9e.js";
const z = "graphics-collections";
let O = class extends S$1 {
  get updating() {
    return this._updatingHandles.updating;
  }
  get _hasZ() {
    const e2 = this.view;
    return null != e2 && "3d" === e2.type && "map-notes" !== this.layerSource.layer.type;
  }
  get _snappingElevationAligner() {
    const { view: e2 } = this, { layer: t2 } = this.layerSource, o2 = null != e2 && "3d" === e2.type;
    if (!o2 || "map-notes" === t2.type)
      return i();
    const s = async (o3, s2) => (await h$2(e2.whenLayerView(t2), s2)).elevationAlignPointsInFeatures(o3, s2);
    return i(o2, { elevationInfo: t2.elevationInfo, alignPointsInFeatures: s });
  }
  get _snappingElevationFilter() {
    const { view: e2 } = this, t2 = null != e2 && "3d" === e2.type && "map-notes" !== this.layerSource.layer.type;
    return r(t2);
  }
  get _symbologySnappingFetcher() {
    const { view: e2 } = this, { layer: t2 } = this.layerSource, o2 = null != e2 && "3d" === e2.type, s = this._extrudedPolygonSymbolsCount > 0;
    return o2 && "map-notes" !== t2.type && s ? n(s, async (o3, s2) => {
      const r2 = await e2.whenLayerView(t2);
      return s$1(s2), r2.queryForSymbologySnapping({ candidates: o3, spatialReference: e2.spatialReference }, s2);
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
    null != e2 && "3d" === e2.type && "map-notes" !== t2.type && e2.elevationProvider && this.addHandles([e2.elevationProvider.on("elevation-change", ({ context: e3 }) => {
      E(e3, t2.elevationInfo) && this._snappingElevationAligner.notifyElevationSourceChange();
    }), d$1(() => t2.elevationInfo, () => this._snappingElevationAligner.notifyElevationSourceChange(), P$1), v(() => t2, ["edits", "apply-edits", "graphic-update"], () => this._symbologySnappingFetcher.notifySymbologyChange())]);
  }
  async fetchCandidates(e2, t2) {
    const { point: o2, coordinateHelper: { spatialReference: s } } = e2, r2 = await g(this._mapSources((o3) => this._fetchCandidatesForSource(o3, e2, t2)));
    s$1(t2);
    const a$12 = this._memoizedMakeGetGroundElevation(this.view, s), p = r2.flat().map((e3) => a(e3, a$12));
    return f(o2, p), p;
  }
  async _fetchCandidatesForSource(e2, t2, o2) {
    const s = y(t2, this.view?.type ?? "2d"), r2 = await e2.queryEngine.executeQueryForSnapping(s, o2);
    s$1(o2);
    const n2 = await this._snappingElevationAligner.alignCandidates(r2.candidates, t2.coordinateHelper.spatialReference, o2);
    s$1(o2);
    const a2 = await this._symbologySnappingFetcher.fetch(n2, o2);
    s$1(o2);
    const p = 0 === a2.length ? n2 : [...n2, ...a2];
    return this._snappingElevationFilter.filter(s, p);
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
    const t2 = [], o2 = /* @__PURE__ */ new Map();
    for (const s of e2)
      null != s.geometry && (this._needsInitializeProjection(s.geometry.spatialReference) ? (t2.push(s.geometry.spatialReference), o2.set(s.uid, s)) : this._add(s));
    this._createPendingAdd(t2, o2);
  }
  _createPendingAdd(e2, t2) {
    if (!e2.length)
      return;
    const r2 = d$2(async (o2) => {
      await I$1(e2.map((e3) => ({ source: e3, dest: this.spatialReference })), { signal: o2 }), this._markLoadedSpatialReferences(e2);
      for (const [, e3] of t2)
        this._add(e3);
    });
    this._updatingHandles.addPromise(r2.promise);
    const i2 = { task: r2, graphics: t2 }, n2 = () => I$2(this._pendingAdds, i2);
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
    const o2 = this._ensureSource(t2.type);
    if (null == o2)
      return;
    const s = this._createOptimizedFeature(e2.uid, t2);
    null != s && (o2.featureStore.add(s), J(e2.symbol) && this._extrudedPolygonSymbolsCount++);
  }
  _needsInitializeProjection(e2) {
    if (null != e2.wkid && this._loadedWkids.has(e2.wkid))
      return false;
    const t2 = e2.wkt2 || e2.wkt;
    return (!t2 || !this._loadedWkts.has(t2)) && !H$1(e2, this.spatialReference);
  }
  _createOptimizedFeature(e2, t2) {
    const o2 = U$1(a$1(t2), this.spatialReference);
    if (!o2)
      return null;
    const s = this._ensureGeometryHasZ(o2), r2 = ot(s, this._hasZ, false);
    return new t$1(r2, { [U]: e2 }, null, e2);
  }
  _ensureGeometryHasZ(e2) {
    if (!this._hasZ)
      return e2;
    const t2 = (e3) => {
      for (; e3.length < 3; )
        e3.push(0);
    }, o2 = e2.clone();
    switch (o2.hasZ = true, o2.type) {
      case "point":
        o2.z = o2.z ?? 0;
        break;
      case "multipoint":
        o2.points.forEach(t2);
        break;
      case "polyline":
        o2.paths.forEach((e3) => e3.forEach(t2));
        break;
      case "polygon":
        o2.rings.forEach((e3) => e3.forEach(t2));
    }
    return o2;
  }
  _ensureSource(e2) {
    const t2 = this._sources[e2];
    if (null != t2)
      return t2;
    const o2 = this._createSource(e2);
    return this._sources[e2] = o2, o2;
  }
  _createSource(e2) {
    const t2 = o$1.toJSON(e2), o2 = this._hasZ, s = new m({ geometryType: t2, hasZ: o2, hasM: false });
    return { featureStore: s, queryEngine: new $({ featureStore: s, fieldsIndex: Z.fromLayerJSON({ fields: [{ name: U, type: "esriFieldTypeOID", alias: U }] }), geometryType: t2, hasM: false, hasZ: o2, objectIdField: U, spatialReference: this.spatialReference, priority: I.SNAPPING, scheduler: null != this.view && "3d" === this.view.type ? this.view.resourceController.scheduler : null }), type: e2 };
  }
  _remove(e2) {
    this._mapSources((t2) => this._removeFromSource(t2, e2));
    for (const t2 of this._pendingAdds)
      t2.graphics.delete(e2.uid), 0 === t2.graphics.size && t2.task.abort();
  }
  _removeFromSource(e2, t2) {
    const o2 = t2.uid;
    e2.featureStore.has(o2) && (e2.featureStore.removeById(t2.uid), J(t2.symbol) && this._extrudedPolygonSymbolsCount--);
  }
  _destroySource(e2) {
    e2.queryEngine.destroy(), this._sources[e2.type] = null;
  }
  _mapSources(e2) {
    const { point: t2, polygon: o2, polyline: s, multipoint: r2 } = this._sources, i2 = [];
    return null != t2 && i2.push(e2(t2)), null != o2 && i2.push(e2(o2)), null != s && i2.push(e2(s)), null != r2 && i2.push(e2(r2)), i2;
  }
};
e([y$1()], O.prototype, "getGraphicsLayers", void 0), e([y$1({ constructOnly: true })], O.prototype, "layerSource", void 0), e([y$1({ constructOnly: true })], O.prototype, "spatialReference", void 0), e([y$1({ constructOnly: true })], O.prototype, "view", void 0), e([y$1({ readOnly: true })], O.prototype, "updating", null), e([y$1({ readOnly: true })], O.prototype, "availability", void 0), e([y$1()], O.prototype, "_hasZ", null), e([y$1()], O.prototype, "_snappingElevationAligner", null), e([y$1()], O.prototype, "_snappingElevationFilter", null), e([y$1()], O.prototype, "_symbologySnappingFetcher", null), e([y$1()], O.prototype, "_extrudedPolygonSymbolsCount", void 0), O = e([c("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")], O);
const U = "OBJECTID";
export {
  O as GraphicsSnappingSource
};
