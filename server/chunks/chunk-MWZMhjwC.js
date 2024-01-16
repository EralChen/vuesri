import { pU as W, si as $, sj as as, eP as o$1, s4 as n$1, bo as e$1, bp as y, br as c$2, bs as g$1, sk as t, bJ as d$1, bK as C, ir as t$1, bn as P$1, sl as s, bS as e$2, bq as j, da as c$3, bm as h$1, ej as k, em as e$3, ki as e$4, g_ as h$2, bX as k$1, h3 as o, mj as h$3, nF as a$3, du as j$1, cy as x$1, dw as p$2, sm as o$2, sn as R, b1 as s$1, gX as m, kz as d$2, e3 as v, er as c$4, bR as A, so as p$3, el as d$3 } from "./chunk-KFNcxJaF.js";
import { t as t$2 } from "./chunk-Jk46lvUq.js";
import { o as o$3, a as a$4 } from "./chunk-RMUEgZa6.js";
import { d } from "./chunk-Iqdi-Y9L.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-73GSp-ey.js";
import "./chunk-x5arQHJi.js";
function c$1(n2, o2) {
  return $(o2.extent, e), as(e, o$1(a$2, n2.x, n2.y, 0));
}
const e = W(), a$2 = n$1();
let p$1 = class p extends g$1 {
  get tiles() {
    const e2 = this.tilesCoveringView, t2 = null != this.pointOfInterest ? this.pointOfInterest : this.view.center;
    return e2.sort((e3, r) => c$1(t2, e3) - c$1(t2, r)), e2;
  }
  _scaleEnabled() {
    return t(this.view.scale, this.layer.minScale || 0, this.layer.maxScale || 0);
  }
  get tilesCoveringView() {
    if (!this.view.ready || !this.view.featuresTilingScheme || !this.view.state || null == this.tileInfo)
      return [];
    if (!this._scaleEnabled)
      return [];
    const { spans: e2, lodInfo: t2 } = this.view.featuresTilingScheme.getTileCoverage(this.view.state, 0), { level: r } = t2, i = [];
    for (const { row: o2, colFrom: s2, colTo: n2 } of e2)
      for (let e3 = s2; e3 <= n2; e3++) {
        const s3 = t2.normalizeCol(e3), n3 = new t$1(null, r, o2, s3);
        this.tileInfo.updateTileInfo(n3), i.push(n3);
      }
    return i;
  }
  get tileInfo() {
    return this.view.featuresTilingScheme?.tileInfo ?? null;
  }
  get tileSize() {
    return null != this.tileInfo ? this.tileInfo.size[0] : 256;
  }
  constructor(e2) {
    super(e2), this.pointOfInterest = null;
  }
  initialize() {
    this.addHandles(d$1(() => this.view?.state?.viewpoint, () => this.notifyChange("tilesCoveringView"), C));
  }
};
e$1([y({ readOnly: true })], p$1.prototype, "tiles", null), e$1([y({ readOnly: true })], p$1.prototype, "_scaleEnabled", null), e$1([y({ readOnly: true })], p$1.prototype, "tilesCoveringView", null), e$1([y({ readOnly: true })], p$1.prototype, "tileInfo", null), e$1([y({ readOnly: true })], p$1.prototype, "tileSize", null), e$1([y({ constructOnly: true })], p$1.prototype, "view", void 0), e$1([y({ constructOnly: true })], p$1.prototype, "layer", void 0), e$1([y()], p$1.prototype, "pointOfInterest", void 0), p$1 = e$1([c$2("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")], p$1);
let p2 = class extends g$1 {
  get tiles() {
    const e2 = this.tilesCoveringView, t2 = this._effectivePointOfInterest;
    if (null != t2) {
      const r = e2.map((e3) => c$1(t2, e3));
      for (let i = 1; i < r.length; i++)
        if (r[i - 1] > r[i])
          return e2.sort((e3, r2) => c$1(t2, e3) - c$1(t2, r2)), e2.slice();
    }
    return e2;
  }
  get tilesCoveringView() {
    return this._filterTiles(this.view.featureTiles?.tiles?.toArray()).map(u);
  }
  get tileInfo() {
    return this.view.featureTiles?.tilingScheme.toTileInfo() ?? null;
  }
  get tileSize() {
    return this.view.featureTiles?.tileSize ?? 256;
  }
  get _effectivePointOfInterest() {
    const e2 = this.pointOfInterest;
    return null != e2 ? e2 : this.view.pointsOfInterest?.focus.location;
  }
  constructor(e2) {
    super(e2), this.pointOfInterest = null;
  }
  initialize() {
    this.addHandles(d$1(() => this.view.featureTiles, (e2) => {
      this.removeHandles(f), e2 && this.addHandles(e2.addClient(), f);
    }, P$1));
  }
  _filterTiles(e2) {
    if (null == e2)
      return [];
    return e2.filter((e3) => Math.abs(e3.measures.screenRect[3] - e3.measures.screenRect[1]) > a$1 && e3.measures.visibility === s.VISIBLE_ON_SURFACE);
  }
};
function u({ lij: [e2, t2, r], extent: i }) {
  return new t$1(`${e2}/${t2}/${r}`, e2, t2, r, i);
}
e$1([y({ readOnly: true })], p2.prototype, "tiles", null), e$1([y({ readOnly: true })], p2.prototype, "tilesCoveringView", null), e$1([y({ readOnly: true })], p2.prototype, "tileInfo", null), e$1([y({ readOnly: true })], p2.prototype, "tileSize", null), e$1([y({ constructOnly: true })], p2.prototype, "view", void 0), e$1([y()], p2.prototype, "pointOfInterest", void 0), e$1([y()], p2.prototype, "_effectivePointOfInterest", null), p2 = e$1([c$2("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")], p2);
const a$1 = 50, f = "feature-tiles";
let n = class extends d {
  constructor(e2) {
    super(e2);
  }
  initialize() {
    const e2 = setInterval(() => this._fetchDebugInfo(), 2e3);
    this.addHandles(e$2(() => clearInterval(e2)));
  }
  getTiles() {
    if (!this._debugInfo)
      return [];
    const e2 = /* @__PURE__ */ new Map(), t2 = /* @__PURE__ */ new Map();
    this._debugInfo.storedTiles.forEach((t3) => {
      e2.set(t3.data.id, t3.featureCount);
    }), this._debugInfo.pendingTiles.forEach((r2) => {
      e2.set(r2.data.id, r2.featureCount), t2.set(r2.data.id, r2.state);
    });
    const r = (r2) => {
      const o3 = t2.get(r2), s2 = e2.get(r2) ?? "?";
      return o3 ? `${o3}:${s2}
${r2}` : `store:${s2}
${r2}`;
    }, o2 = /* @__PURE__ */ new Map();
    return this._debugInfo.storedTiles.forEach((e3) => {
      o2.set(e3.data.id, e3.data);
    }), this._debugInfo.pendingTiles.forEach((e3) => {
      o2.set(e3.data.id, e3.data);
    }), Array.from(o2.values()).map((e3) => ({ lij: [e3.level, e3.row, e3.col], geometry: j.fromExtent(c$3(e3.extent, this.view.spatialReference)), label: r(e3.id) }));
  }
  _fetchDebugInfo() {
    this.handle.getDebugInfo(null).then((e2) => {
      this._debugInfo = e2, this.update();
    });
  }
};
e$1([y({ constructOnly: true })], n.prototype, "handle", void 0), n = e$1([c$2("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")], n);
let h = class extends g$1 {
  get updating() {
    return this._updatingHandles.updating || this._workerHandleUpdating;
  }
  constructor(e2) {
    super(e2), this._updatingHandles = new h$1(), this._suspendController = null, this.schedule = null, this.hasZ = false, this.elevationAlignPointsInFeatures = async (e3) => {
      const t2 = [];
      for (const { points: i } of e3.pointsInFeatures)
        for (const { z: e4 } of i)
          t2.push(e4);
      return { elevations: t2, drapedObjectIds: /* @__PURE__ */ new Set(), failedObjectIds: /* @__PURE__ */ new Set() };
    }, this.queryForSymbologySnapping = async () => ({ candidates: [], sourceCandidateIndices: [] }), this.availability = 0, this._workerHandleUpdating = true, this._editId = 0, this.updateOutFields = k(async (e3, t2) => {
      await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateOutFields", [...e3], t2)), this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating", {}, t2));
    });
  }
  destroy() {
    this._suspendController = e$3(this._suspendController), this._workerHandle.destroy(), this._updatingHandles.destroy();
  }
  initialize() {
    this._workerHandle = new c(this.schedule, { alignElevation: async (e2, { signal: t2 }) => ({ result: await this.elevationAlignPointsInFeatures(e2.query, t2) }), getSymbologyCandidates: async (e2, { signal: t2 }) => ({ result: await this.queryForSymbologySnapping(e2, t2) }) }), this.addHandles([this._workerHandle.on("notify-updating", ({ updating: e2 }) => this._workerHandleUpdating = e2), this._workerHandle.on("notify-availability", ({ availability: e2 }) => this._set("availability", e2))]);
  }
  async setup(e2, t2) {
    const i = this._serviceInfoFromLayer(e2.layer);
    if (null == i)
      return;
    const o2 = { configuration: this._convertConfiguration(e2.configuration), serviceInfo: i, spatialReference: e2.spatialReference.toJSON(), hasZ: this.hasZ, elevationInfo: e2.layer.elevationInfo?.toJSON() };
    await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setup", o2, t2)), this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating", {}, t2));
  }
  async configure(e2, t2) {
    const i = this._convertConfiguration(e2);
    await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("configure", i, t2)), this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating", {}, t2));
  }
  async refresh(e2) {
    await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh", {}, e2)), this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating", {}, e2));
  }
  async fetchCandidates(e2, t2) {
    const { point: i, filter: o2, coordinateHelper: n2 } = e2, a2 = { ...e2, point: e$4(i[0], i[1], i[2], n2.spatialReference.toJSON()), filter: o2?.toJSON() };
    return this._workerHandle.invoke(a2, t2);
  }
  async updateTiles(e2, t2) {
    const i = { tiles: e2.tiles, tileInfo: null != e2.tileInfo ? e2.tileInfo.toJSON() : null, tileSize: e2.tileSize };
    await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles", i, t2)), this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating", {}, t2));
  }
  async applyEdits(e2, t2) {
    const o2 = this._editId++, n2 = { id: o2 };
    await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("beginApplyEdits", n2, t2));
    const r = await this._updatingHandles.addPromise(h$2(e2.result, t2)), s2 = { id: o2, edits: { addedFeatures: r.addedFeatures?.map(({ objectId: e3 }) => e3).filter(k$1) ?? [], deletedFeatures: r.deletedFeatures?.map(({ objectId: e3, globalId: t3 }) => ({ objectId: e3, globalId: t3 })) ?? [], updatedFeatures: r.updatedFeatures?.map(({ objectId: e3 }) => e3).filter(k$1) ?? [] } };
    await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("endApplyEdits", s2, t2)), this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating", {}, t2));
  }
  getDebugInfo(e2) {
    return this._workerHandle.invokeMethod("getDebugInfo", {}, e2);
  }
  async notifyElevationSourceChange() {
    await this._workerHandle.invokeMethod("notifyElevationSourceChange", {});
  }
  async notifySymbologyChange() {
    await this._workerHandle.invokeMethod("notifySymbologyChange", {});
  }
  async setSymbologySnappingSupported(e2) {
    await this._workerHandle.invokeMethod("setSymbologySnappingSupported", e2);
  }
  async setSuspended(e2) {
    this._suspendController?.abort(), this._suspendController = new AbortController(), await this._workerHandle.invokeMethod("setSuspended", e2, this._suspendController.signal);
  }
  _convertConfiguration(e2) {
    return { filter: null != e2.filter ? e2.filter.toJSON() : null, customParameters: e2.customParameters, viewType: e2.viewType };
  }
  _serviceInfoFromLayer(e2) {
    return "multipatch" === e2.geometryType || "mesh" === e2.geometryType ? null : { url: e2.parsedUrl?.path ?? "", fieldsIndex: e2.fieldsIndex.toJSON(), geometryType: o.toJSON(e2.geometryType), capabilities: e2.capabilities, objectIdField: e2.objectIdField, globalIdField: e2.globalIdField, spatialReference: e2.spatialReference.toJSON(), timeInfo: e2.timeInfo?.toJSON() };
  }
};
e$1([y({ constructOnly: true })], h.prototype, "schedule", void 0), e$1([y({ constructOnly: true })], h.prototype, "hasZ", void 0), e$1([y({ constructOnly: true })], h.prototype, "elevationAlignPointsInFeatures", void 0), e$1([y({ constructOnly: true })], h.prototype, "queryForSymbologySnapping", void 0), e$1([y({ readOnly: true })], h.prototype, "updating", null), e$1([y({ readOnly: true })], h.prototype, "availability", void 0), e$1([y()], h.prototype, "_workerHandleUpdating", void 0), h = e$1([c$2("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")], h);
class c extends h$3 {
  constructor(e2, t2) {
    super("FeatureServiceSnappingSourceWorker", "fetchCandidates", {}, e2, { strategy: "dedicated", client: t2 });
  }
}
let a = class extends g$1 {
  get tiles() {
    return [new t$1("0/0/0", 0, 0, 0, a$3(-1e8, -1e8, 1e8, 1e8))];
  }
  get tileInfo() {
    return new j$1({ origin: new x$1({ x: -1e8, y: 1e8, spatialReference: this.layer.spatialReference }), size: [512, 512], lods: [new p$2({ level: 0, scale: 1, resolution: 390625 })], spatialReference: this.layer.spatialReference });
  }
  get tileSize() {
    return this.tileInfo.size[0];
  }
  constructor(e2) {
    super(e2), this.pointOfInterest = null;
  }
};
e$1([y({ readOnly: true })], a.prototype, "tiles", null), e$1([y({ readOnly: true })], a.prototype, "tileInfo", null), e$1([y({ readOnly: true })], a.prototype, "tileSize", null), e$1([y({ constructOnly: true })], a.prototype, "layer", void 0), e$1([y()], a.prototype, "pointOfInterest", void 0), a = e$1([c$2("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")], a);
let F = class extends g$1 {
  get _updateTilesParameters() {
    return { tiles: this._tilesOfInterest.tiles, tileInfo: this._tilesOfInterest.tileInfo, tileSize: this._tilesOfInterest.tileSize };
  }
  get _layerView() {
    return this.view?.allLayerViews.find((e2) => e2.layer === this._layer);
  }
  get _isSuspended() {
    if (o$2(this._layer)) {
      if (!this._layer.sublayers.find((e2) => e2.visible))
        return true;
    }
    return !!this.view && (false !== this._layerView?.suspended || !this.layerSource.enabled);
  }
  get updating() {
    return this._workerHandle?.updating || this._updatingHandles.updating;
  }
  get _outFields() {
    const { view: e2, _layerView: t2, layerSource: r } = this, { layer: i } = r, { fieldsIndex: s2, timeInfo: o2, floorInfo: a2, subtypeField: n2 } = i, l = t2 && "filter" in t2 ? t2.filter : null, u2 = l?.where && "1=1" !== l.where ? this._getOrLoadWhereFields(l.where, s2) : [];
    if (l?.timeExtent && o2) {
      const { startField: e3, endField: t3 } = o2, r2 = s2.get(e3)?.name ?? e3, i2 = s2.get(t3)?.name ?? t3;
      r2 && u2.push(r2), i2 && u2.push(i2);
    }
    if (e2?.map && R(e2.map) && e2.map.utilityNetworks?.find((e3) => e3.isUtilityLayer(i))) {
      const e3 = i.fieldsIndex.get("assetGroup")?.name, t3 = i.fieldsIndex.get("assetType")?.name;
      e3 && t3 && (u2.push(e3), u2.push(t3));
    }
    if (i && a2?.floorField && e2?.floors?.length) {
      const e3 = s2.get(a2.floorField)?.name ?? a2.floorField;
      e3 && u2.push(e3);
    }
    if (n2) {
      const e3 = s2.get(n2)?.name ?? n2;
      e3 && u2.push(e3);
    }
    return new Set(u2);
  }
  get configuration() {
    const { view: e2 } = this, t2 = null != e2 ? e2.type : "2d";
    return { filter: this._layer.createQuery(), customParameters: this._layer.customParameters, viewType: t2 };
  }
  get availability() {
    return this._workerHandle?.availability ?? 0;
  }
  get _layer() {
    return this.layerSource.layer;
  }
  constructor(e2) {
    super(e2), this._updatingHandles = new h$1(), this._workerHandle = null, this._debug = null, this._memoizedMakeGetGroundElevation = t$2(o$3);
  }
  initialize() {
    let e2;
    const t2 = this.view;
    if (null != t2)
      switch (t2.type) {
        case "2d":
          this._tilesOfInterest = new p$1({ view: t2, layer: this._layer }), e2 = this._workerHandle = new h();
          break;
        case "3d": {
          const { resourceController: r } = t2, i = this._layer;
          this._tilesOfInterest = new p2({ view: t2 }), e2 = this._workerHandle = new h({ schedule: (e3) => r.immediate.schedule(e3), hasZ: this._layer.hasZ && (this._layer.returnZ ?? true), elevationAlignPointsInFeatures: async (e3, r2) => {
            const s2 = await t2.whenLayerView(i);
            return s$1(r2), s2.elevationAlignPointsInFeatures(e3, r2);
          }, queryForSymbologySnapping: async (e3, r2) => {
            const s2 = await t2.whenLayerView(i);
            return s$1(r2), s2.queryForSymbologySnapping(e3, r2);
          } }), this.addHandles([t2.elevationProvider.on("elevation-change", ({ context: t3 }) => {
            const { elevationInfo: r2 } = i;
            m(t3, r2) && d$2(e2.notifyElevationSourceChange());
          }), d$1(() => i.elevationInfo, () => d$2(e2.notifyElevationSourceChange()), P$1), d$1(() => this._layerView?.processor?.renderer, () => d$2(e2.notifySymbologyChange()), P$1), d$1(() => this._layerView?.symbologySnappingSupported ?? false, (t3) => d$2(e2.setSymbologySnappingSupported(t3)), P$1), v(() => this._layerView?.layer, ["edits", "apply-edits", "graphic-update"], () => e2.notifySymbologyChange())]);
          break;
        }
      }
    else
      this._tilesOfInterest = new a({ layer: this._layer }), e2 = this._workerHandle = new h();
    this.addHandles([c$4(e2)]), d$2(e2.setup({ layer: this._layer, spatialReference: this.spatialReference, configuration: this.configuration }, null)), this._updatingHandles.add(() => this._updateTilesParameters, () => d$2(e2.updateTiles(this._updateTilesParameters, null)), P$1), this.addHandles([d$1(() => this.configuration, (t3) => d$2(e2.configure(t3, null)), C), d$1(() => this._outFields, (t3) => d$2(e2.updateOutFields(t3)), P$1), d$1(() => this._isSuspended, (t3) => d$2(e2.setSuspended(t3)), A)]), null != t2 && this.addHandles(d$1(() => p$3.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES, (r) => {
      r && !this._debug ? (this._debug = new n({ view: t2, handle: e2 }), this.addHandles(c$4(this._debug), "debug")) : !r && this._debug && this.removeHandles("debug");
    }, P$1)), this.addHandles(this.layerSource.layer.on("apply-edits", (t3) => {
      d$2(e2.applyEdits(t3, null));
    }));
  }
  destroy() {
    this._updatingHandles.destroy();
  }
  refresh() {
    this._workerHandle?.refresh(null);
  }
  async fetchCandidates(e2, t2) {
    const { coordinateHelper: r, point: i } = e2;
    this._tilesOfInterest.pointOfInterest = r.arrayToPoint(i);
    const s2 = this._memoizedMakeGetGroundElevation(this.view, r.spatialReference);
    return (await this._workerHandle.fetchCandidates({ ...e2 }, t2)).candidates.map((e3) => a$4(e3, s2));
  }
  getDebugInfo(e2) {
    return this._workerHandle.getDebugInfo(e2);
  }
  _getOrLoadWhereFields(e2, t2) {
    const { _whereModule: i } = this;
    if (!this._loadWhereModuleTask && !i) {
      const e3 = d$3(async () => {
        const e4 = await import("./chunk-ewxQmXoN.js").then((n2) => n2.W);
        return this._whereModule = e4.WhereClause, this._whereModule;
      });
      return this._loadWhereModuleTask = e3, this._updatingHandles.addPromise(e3.promise), [];
    }
    if (!i)
      return [];
    try {
      return i.create(e2, t2).fieldNames;
    } catch (s2) {
      return [];
    }
  }
};
e$1([y({ constructOnly: true })], F.prototype, "spatialReference", void 0), e$1([y({ constructOnly: true })], F.prototype, "layerSource", void 0), e$1([y({ constructOnly: true })], F.prototype, "view", void 0), e$1([y()], F.prototype, "_tilesOfInterest", void 0), e$1([y({ readOnly: true })], F.prototype, "_updateTilesParameters", null), e$1([y()], F.prototype, "_layerView", null), e$1([y()], F.prototype, "_isSuspended", null), e$1([y({ readOnly: true })], F.prototype, "updating", null), e$1([y()], F.prototype, "_outFields", null), e$1([y({ readOnly: true })], F.prototype, "configuration", null), e$1([y({ readOnly: true })], F.prototype, "availability", null), e$1([y()], F.prototype, "_loadWhereModuleTask", void 0), e$1([y()], F.prototype, "_whereModule", void 0), F = e$1([c$2("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")], F);
export {
  F as FeatureServiceSnappingSource
};
