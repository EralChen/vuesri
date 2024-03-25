import { aV as e, aX as y, a_ as c, bZ as S$1, b6 as u$1, fb as d$1, qg as b$2, iC as o, kt as E$1, rZ as t$1, r_ as f, r$ as e$1, bW as h$1, bm as a, cf as C$1, f6 as p$1, iT as w$3, s0 as x$1, ck as b$3, aC as M, aP as a$1, aT as s$1, cm as e$2, s1 as f$1, s2 as a$2, s3 as it, qc as c$1, s4 as ct, qa as u$2, dB as c$2, el as E$2, s5 as o$2, du as gt, s6 as S$2, as as j$3, s7 as t$2, s8 as c$3, s9 as l$1, j4 as t$3, ds as o$3, bC as L$1, cU as s$2, aB as f$2, jW as h, ce as d$2, ex as w$4, cX as y$1 } from "./chunk-ejFG4zJ0.js";
import { m } from "./chunk-HoJyfhBe.js";
import { $ } from "./chunk-P_v7gizd.js";
import { i, r as r$2, n } from "./chunk-vJhIHpbR.js";
import { o as o$1 } from "./chunk-XuSN4Qyd.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-pZO3UCge.js";
import "./chunk-H58sM9yM.js";
import "./chunk-ISSNghJ_.js";
import "./chunk-stE6bWuO.js";
import "./chunk-KyVc0M84.js";
import "./chunk-KfB6QvrM.js";
import "./chunk-E1ai5rf5.js";
let r$1 = class r extends S$1 {
  constructor() {
    super(...arguments), this.updating = false, this._pending = [];
  }
  push(s, t2) {
    this._pending.push({ promise: s, callback: t2 }), 1 === this._pending.length && this._process();
  }
  _process() {
    if (!this._pending.length)
      return void (this.updating = false);
    this.updating = true;
    const s = this._pending[0];
    s.promise.then((t2) => s.callback(t2)).catch(() => {
    }).then(() => {
      this._pending.shift(), this._process();
    });
  }
};
e([y()], r$1.prototype, "updating", void 0), r$1 = e([c("esri.core.AsyncSequence")], r$1);
class r2 {
  constructor(t2, e2) {
    this.data = t2, this.resolution = e2, this.state = { type: u.CREATED }, this.alive = true;
  }
  process(t2) {
    switch (this.state.type) {
      case u.CREATED:
        return this.state = this._gotoFetchCount(this.state, t2), this.state.task.promise.then(t2.resume, t2.resume);
      case u.FETCH_COUNT:
        break;
      case u.FETCHED_COUNT:
        return this.state = this._gotoFetchFeatures(this.state, t2), this.state.task.promise.then(t2.resume, t2.resume);
      case u.FETCH_FEATURES:
        break;
      case u.FETCHED_FEATURES:
        this.state = this._goToDone(this.state, t2);
      case u.DONE:
    }
    return null;
  }
  get debugInfo() {
    return { data: this.data, featureCount: this._featureCount, state: this._stateToString };
  }
  get _featureCount() {
    switch (this.state.type) {
      case u.CREATED:
      case u.FETCH_COUNT:
        return 0;
      case u.FETCHED_COUNT:
        return this.state.featureCount;
      case u.FETCH_FEATURES:
        return this.state.previous.featureCount;
      case u.FETCHED_FEATURES:
        return this.state.features.length;
      case u.DONE:
        return this.state.previous.features.length;
    }
  }
  get _stateToString() {
    switch (this.state.type) {
      case u.CREATED:
        return "created";
      case u.FETCH_COUNT:
        return "fetch-count";
      case u.FETCHED_COUNT:
        return "fetched-count";
      case u.FETCH_FEATURES:
        return "fetch-features";
      case u.FETCHED_FEATURES:
        return "fetched-features";
      case u.DONE:
        return "done";
    }
  }
  _gotoFetchCount(s, a2) {
    return { type: u.FETCH_COUNT, previous: s, task: d$1(async (t2) => {
      const s2 = await b$2(a2.fetchCount(this, t2));
      this.state.type === u.FETCH_COUNT && (this.state = this._gotoFetchedCount(this.state, s2.ok ? s2.value : 1 / 0));
    }) };
  }
  _gotoFetchedCount(t2, e2) {
    return { type: u.FETCHED_COUNT, featureCount: e2, previous: t2 };
  }
  _gotoFetchFeatures(s, a2) {
    return { type: u.FETCH_FEATURES, previous: s, task: d$1(async (t2) => {
      const E2 = await b$2(a2.fetchFeatures(this, s.featureCount, t2));
      this.state.type === u.FETCH_FEATURES && (this.state = this._gotoFetchedFeatures(this.state, E2.ok ? E2.value : []));
    }) };
  }
  _gotoFetchedFeatures(t2, e2) {
    return { type: u.FETCHED_FEATURES, previous: t2, features: e2 };
  }
  _goToDone(t2, e2) {
    return e2.finish(this, t2.features), { type: u.DONE, previous: t2 };
  }
  reset() {
    const t2 = this.state;
    switch (this.state = { type: u.CREATED }, t2.type) {
      case u.CREATED:
      case u.FETCHED_COUNT:
      case u.FETCHED_FEATURES:
      case u.DONE:
        break;
      case u.FETCH_COUNT:
      case u.FETCH_FEATURES:
        t2.task.abort();
    }
  }
  intersects(t2) {
    return null == t2 || !this.data.extent || (o(t2, T$1), E$1(this.data.extent, T$1));
  }
}
var u;
!function(t2) {
  t2[t2.CREATED = 0] = "CREATED", t2[t2.FETCH_COUNT = 1] = "FETCH_COUNT", t2[t2.FETCHED_COUNT = 2] = "FETCHED_COUNT", t2[t2.FETCH_FEATURES = 3] = "FETCH_FEATURES", t2[t2.FETCHED_FEATURES = 4] = "FETCHED_FEATURES", t2[t2.DONE = 5] = "DONE";
}(u || (u = {}));
const T$1 = u$1();
let x = class extends S$1 {
  get _minimumVerticesPerFeature() {
    switch (this.store?.featureStore.geometryType) {
      case "esriGeometryPoint":
      case "esriGeometryMultipoint":
        return 1;
      case "esriGeometryPolygon":
        return 4;
      case "esriGeometryPolyline":
        return 2;
    }
  }
  get _mandatoryOutFields() {
    const e2 = /* @__PURE__ */ new Set();
    return this.objectIdField && e2.add(this.objectIdField), this.globalIdField && e2.add(this.globalIdField), e2;
  }
  set outFields(e2) {
    const t2 = this._get("outFields"), i2 = t$1(e2, this._mandatoryOutFields);
    f(i2, t2) || (this._set("outFields", i2), e$1(i2, t2) || this.refresh());
  }
  get outFields() {
    return this._get("outFields") ?? this._mandatoryOutFields;
  }
  set filter(e2) {
    const t2 = this._get("filter"), i2 = this._filterProperties(e2);
    JSON.stringify(t2) !== JSON.stringify(i2) && this._set("filter", i2);
  }
  set customParameters(e2) {
    const t2 = this._get("customParameters");
    JSON.stringify(t2) !== JSON.stringify(e2) && this._set("customParameters", e2);
  }
  get _configuration() {
    return { filter: this.filter, customParameters: this.customParameters, tileInfo: this.tileInfo, tileSize: this.tileSize };
  }
  set tileInfo(e2) {
    const t2 = this._get("tileInfo");
    t2 !== e2 && (null != e2 && null != t2 && JSON.stringify(e2) === JSON.stringify(t2) || (this._set("tileInfo", e2), this.store.tileInfo = e2));
  }
  set tileSize(e2) {
    this._get("tileSize") !== e2 && this._set("tileSize", e2);
  }
  get updating() {
    return this.updatingExcludingEdits || this._pendingEdits.updating;
  }
  get updatingExcludingEdits() {
    return this._updatingHandles.updating;
  }
  get hasZ() {
    return this.store.featureStore.hasZ;
  }
  constructor(e2) {
    super(e2), this.suspended = true, this.tilesOfInterest = [], this.availability = 0, this._pendingTiles = /* @__PURE__ */ new Map(), this._updatingHandles = new h$1(), this._pendingEdits = new r$1(), this._pendingEditsAbortController = new AbortController();
  }
  initialize() {
    this._initializeFetchExtent(), this._updatingHandles.add(() => this._configuration, () => this.refresh()), this._updatingHandles.add(() => this.tilesOfInterest, (e2, t2) => {
      a(e2, t2, ({ id: e3 }, { id: t3 }) => e3 === t3) || this._process();
    }, C$1), this.addHandles(p$1(() => !this.suspended, () => this._process()));
  }
  destroy() {
    this._pendingTiles.forEach((e2) => this._deletePendingTile(e2)), this._pendingTiles.clear(), this.store.destroy(), this.tilesOfInterest.length = 0, this._pendingEditsAbortController.abort(), this._pendingEditsAbortController = null, this._updatingHandles.destroy();
  }
  refresh() {
    this.store.refresh(), this._pendingTiles.forEach((e2) => this._deletePendingTile(e2)), this._process();
  }
  applyEdits(e2) {
    this._pendingEdits.push(e2, async (e3) => {
      if (0 === e3.addedFeatures.length && 0 === e3.updatedFeatures.length && 0 === e3.deletedFeatures.length)
        return;
      for (const [, i2] of this._pendingTiles)
        i2.reset();
      const t2 = { ...e3, deletedFeatures: e3.deletedFeatures.map(({ objectId: e4, globalId: t3 }) => e4 && -1 !== e4 ? e4 : this._lookupObjectIdByGlobalId(t3)) };
      await this._updatingHandles.addPromise(this.store.processEdits(t2, (e4, t3) => this._queryFeaturesById(e4, t3), this._pendingEditsAbortController.signal)), this._processPendingTiles();
    });
  }
  _initializeFetchExtent() {
    if (!this.capabilities.query.supportsExtent || !w$3(this.url))
      return;
    const e2 = d$1(async (e3) => {
      try {
        const t2 = await x$1(this.url, new b$3({ where: "1=1", outSpatialReference: this.spatialReference, cacheHint: this.capabilities.query.supportsCacheHint ?? void 0 }), { query: this._configuration.customParameters, signal: e3 });
        this.store.extent = M.fromJSON(t2.data?.extent);
      } catch (t2) {
        a$1(t2), s$1.getLogger(this).warn("Failed to fetch data extent", t2);
      }
    });
    this._updatingHandles.addPromise(e2.promise.then(() => this._process())), this.addHandles(e$2(() => e2.abort()));
  }
  get debugInfo() {
    return { numberOfFeatures: this.store.featureStore.numFeatures, tilesOfInterest: this.tilesOfInterest, pendingTiles: Array.from(this._pendingTiles.values()).map((e2) => e2.debugInfo), storedTiles: this.store.debugInfo };
  }
  _process() {
    this._markTilesNotAlive(), this._createPendingTiles(), this._deletePendingTiles(), this._processPendingTiles();
  }
  _markTilesNotAlive() {
    for (const [, e2] of this._pendingTiles)
      e2.alive = false;
  }
  _createPendingTiles() {
    if (this.suspended)
      return;
    const e2 = this._collectMissingTilesInfo();
    if (this._setAvailability(null == e2 ? 1 : e2.coveredArea / e2.fullArea), null != e2)
      for (const { data: t2, resolution: i2 } of e2.missingTiles) {
        const e3 = this._pendingTiles.get(t2.id);
        e3 ? (e3.resolution = i2, e3.alive = true) : this._createPendingTile(t2, i2);
      }
  }
  _collectMissingTilesInfo() {
    let e2 = null;
    for (let t2 = this.tilesOfInterest.length - 1; t2 >= 0; t2--) {
      const i2 = this.tilesOfInterest[t2], s = this.store.process(i2, (e3, t3) => this._verifyTileComplexity(e3, t3), this.outFields);
      null == e2 ? e2 = s : e2.prepend(s);
    }
    return e2;
  }
  _deletePendingTiles() {
    for (const [, e2] of this._pendingTiles)
      e2.alive || this._deletePendingTile(e2);
  }
  _processPendingTiles() {
    const e2 = { fetchCount: (e3, t2) => this._fetchCount(e3, t2), fetchFeatures: (e3, t2, i2) => this._fetchFeatures(e3, t2, i2), finish: (e3, t2) => this._finishPendingTile(e3, t2), resume: () => this._processPendingTiles() };
    if (this._ensureFetchAllCounts(e2))
      for (const [, t2] of this._pendingTiles)
        this._verifyTileComplexity(this.store.getFeatureCount(t2.data), t2.resolution) && this._updatingHandles.addPromise(t2.process(e2));
  }
  _verifyTileComplexity(e2, t2) {
    return this._verifyVertexComplexity(e2) && this._verifyFeatureDensity(e2, t2);
  }
  _verifyVertexComplexity(e2) {
    return e2 * this._minimumVerticesPerFeature < q;
  }
  _verifyFeatureDensity(e2, t2) {
    if (null == this.tileInfo)
      return false;
    const i2 = this.tileSize * t2;
    return e2 * (A$1 / (i2 * i2)) < H;
  }
  _ensureFetchAllCounts(e2) {
    let t2 = true;
    for (const [, i2] of this._pendingTiles)
      i2.state.type < u.FETCHED_COUNT && this._updatingHandles.addPromise(i2.process(e2)), i2.state.type <= u.FETCH_COUNT && (t2 = false);
    return t2;
  }
  _finishPendingTile(e2, t2) {
    this.store.add(e2.data, t2), this._deletePendingTile(e2), this._updateAvailability();
  }
  _updateAvailability() {
    const e2 = this._collectMissingTilesInfo();
    this._setAvailability(null == e2 ? 1 : e2.coveredArea / e2.fullArea);
  }
  _setAvailability(e2) {
    this._set("availability", e2);
  }
  _createPendingTile(e2, t2) {
    const i2 = new r2(e2, t2);
    return this._pendingTiles.set(e2.id, i2), i2;
  }
  _deletePendingTile(e2) {
    e2.reset(), this._pendingTiles.delete(e2.data.id);
  }
  async _fetchCount(e2, t2) {
    return this.store.fetchCount(e2.data, this.url, this._createCountQuery(e2), { query: this.customParameters, timeout: w$2, signal: t2 });
  }
  async _fetchFeatures(e2, t2, i2) {
    let s = 0;
    const r3 = [];
    let o2 = 0, n2 = t2;
    for (; ; ) {
      const l = this._createFeaturesQuery(e2), a2 = this._setPagingParameters(l, s, n2), { features: u2, exceededTransferLimit: d } = await this._queryFeatures(l, i2);
      a2 && (s += l.num), o2 += u2.length;
      for (const e3 of u2)
        r3.push(e3);
      if (n2 = t2 - o2, !a2 || !d || n2 <= 0)
        return r3;
    }
  }
  _filterProperties(e2) {
    return null == e2 ? { where: "1=1", gdbVersion: void 0, timeExtent: void 0 } : { where: e2.where || "1=1", timeExtent: e2.timeExtent, gdbVersion: e2.gdbVersion };
  }
  _lookupObjectIdByGlobalId(e2) {
    const t2 = this.globalIdField, i2 = this.objectIdField;
    if (null == t2)
      throw new Error("Expected globalIdField to be defined");
    let s = null;
    if (this.store.featureStore.forEach((r3) => {
      e2 === r3.attributes[t2] && (s = r3.objectId ?? r3.attributes[i2]);
    }), null == s)
      throw new Error(`Expected to find a feature with globalId ${e2}`);
    return s;
  }
  _queryFeaturesById(e2, t2) {
    const i2 = this._createFeaturesQuery();
    return i2.objectIds = e2, this._queryFeatures(i2, t2);
  }
  _queryFeatures(e2, t2) {
    return this.capabilities.query.supportsFormatPBF ? this._queryFeaturesPBF(e2, t2) : this._queryFeaturesJSON(e2, t2);
  }
  async _queryFeaturesPBF(e2, t2) {
    const { sourceSpatialReference: i2 } = this, { data: s } = await f$1(this.url, e2, new a$2({ sourceSpatialReference: i2 }), { query: this._configuration.customParameters, timeout: w$2, signal: t2 });
    return it(s);
  }
  async _queryFeaturesJSON(e2, t2) {
    const { sourceSpatialReference: i2 } = this, { data: s } = await c$1(this.url, e2, i2, { query: this._configuration.customParameters, timeout: w$2, signal: t2 });
    return ct(s, this.objectIdField);
  }
  _createCountQuery(e2) {
    const t2 = this._createBaseQuery(e2);
    return this.capabilities.query.supportsCacheHint && (t2.cacheHint = true), t2;
  }
  _createFeaturesQuery(e2 = null) {
    const t2 = this._createBaseQuery(e2), i2 = null != e2?.data ? this.store.getAttributesForTile(e2?.data?.id) : null, s = t$1(u$2(this.outFields, i2 ?? /* @__PURE__ */ new Set()), this._mandatoryOutFields);
    return t2.outFields = Array.from(s), t2.returnGeometry = true, null != e2 && (this.capabilities.query.supportsResultType ? t2.resultType = "tile" : this.capabilities.query.supportsCacheHint && (t2.cacheHint = true)), t2;
  }
  _createBaseQuery(e2) {
    const t2 = new b$3({ returnZ: this.hasZ, returnM: false, geometry: null != this.tileInfo && null != e2 ? c$2(e2.data.extent, this.tileInfo.spatialReference) : void 0 }), i2 = this._configuration.filter;
    return null != i2 && (t2.where = i2.where, t2.gdbVersion = i2.gdbVersion, t2.timeExtent = i2.timeExtent), t2.outSpatialReference = this.spatialReference, t2;
  }
  _setPagingParameters(e2, t2, i2) {
    if (!this.capabilities.query.supportsPagination)
      return false;
    const { supportsMaxRecordCountFactor: s, supportsCacheHint: r3, tileMaxRecordCount: o2, maxRecordCount: n2, supportsResultType: l } = this.capabilities.query, a2 = s ? b$3.MAX_MAX_RECORD_COUNT_FACTOR : 1, u2 = a2 * ((l || r3) && o2 ? o2 : n2 || j$2);
    return e2.start = t2, s ? (e2.maxRecordCountFactor = Math.min(a2, Math.ceil(i2 / u2)), e2.num = Math.min(i2, e2.maxRecordCountFactor * u2)) : e2.num = Math.min(i2, u2), true;
  }
};
e([y({ constructOnly: true })], x.prototype, "url", void 0), e([y({ constructOnly: true })], x.prototype, "objectIdField", void 0), e([y({ constructOnly: true })], x.prototype, "globalIdField", void 0), e([y({ constructOnly: true })], x.prototype, "capabilities", void 0), e([y({ constructOnly: true })], x.prototype, "sourceSpatialReference", void 0), e([y({ constructOnly: true })], x.prototype, "spatialReference", void 0), e([y({ constructOnly: true })], x.prototype, "store", void 0), e([y({ readOnly: true })], x.prototype, "_minimumVerticesPerFeature", null), e([y()], x.prototype, "_mandatoryOutFields", null), e([y()], x.prototype, "outFields", null), e([y()], x.prototype, "suspended", void 0), e([y()], x.prototype, "filter", null), e([y()], x.prototype, "customParameters", null), e([y({ readOnly: true })], x.prototype, "_configuration", null), e([y()], x.prototype, "tileInfo", null), e([y()], x.prototype, "tileSize", null), e([y()], x.prototype, "tilesOfInterest", void 0), e([y({ readOnly: true })], x.prototype, "updating", null), e([y({ readOnly: true })], x.prototype, "updatingExcludingEdits", null), e([y({ readOnly: true })], x.prototype, "availability", void 0), e([y()], x.prototype, "hasZ", null), x = e([c("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")], x);
const j$2 = 2e3, w$2 = 6e5, q = 1e6, A$1 = 25, H = 1;
class t {
  constructor() {
    this._store = /* @__PURE__ */ new Map(), this._byteSize = 0;
  }
  set(t2, e2) {
    this.delete(t2), this._store.set(t2, e2), this._byteSize += e2.byteSize;
  }
  delete(t2) {
    const e2 = this._store.get(t2);
    return !!this._store.delete(t2) && (null != e2 && (this._byteSize -= e2.byteSize), true);
  }
  get(t2) {
    return this._used(t2), this._store.get(t2);
  }
  has(t2) {
    return this._used(t2), this._store.has(t2);
  }
  clear() {
    this._store.clear();
  }
  applyByteSizeLimit(t2, e2) {
    for (const [s, r3] of this._store) {
      if (this._byteSize <= t2)
        break;
      this.delete(s), e2(r3);
    }
  }
  values() {
    return this._store.values();
  }
  [Symbol.iterator]() {
    return this._store[Symbol.iterator]();
  }
  _used(t2) {
    const e2 = this._store.get(t2);
    e2 && (this._store.delete(t2), this._store.set(t2, e2));
  }
}
let v = class extends S$1 {
  constructor(e2) {
    super(e2), this.tileInfo = null, this.extent = null, this.maximumByteSize = 10 * E$2.MEGABYTES, this._tileBounds = new o$1(), this._tiles = new t(), this._refCounts = /* @__PURE__ */ new Map(), this._tileFeatureCounts = /* @__PURE__ */ new Map(), this._tmpBoundingRect = u$1();
  }
  add(e2, t2) {
    for (const r3 of t2)
      this._referenceFeature(r3.objectId);
    const s = this.featureStore.upsertMany(t2), i2 = s.map((e3) => new Set(Object.keys(e3.attributes))).reduce((e3, t3) => o$2(e3, t3), new Set(Object.keys(s[0]?.attributes ?? [])));
    this._addTileStorage(e2, new Set(s.map((e3) => e3.objectId)), C(s), i2), this._tiles.applyByteSizeLimit(this.maximumByteSize, (e3) => this._removeTileStorage(e3));
  }
  getAttributesForTile(e2) {
    return e2 ? this._tiles.get(e2)?.attributeKeys : null;
  }
  destroy() {
    this.clear(), this._tileFeatureCounts.clear();
  }
  clear() {
    this.featureStore.clear(), this._tileBounds.clear(), this._tiles.clear(), this._refCounts.clear();
  }
  refresh() {
    this.clear(), this._tileFeatureCounts.clear();
  }
  processEdits(e2, t2, s) {
    return this._processEditsDelete(e2.deletedFeatures.concat(e2.updatedFeatures)), this._processEditsRefetch(e2.addedFeatures.concat(e2.updatedFeatures), t2, s);
  }
  _addTileStorage(e2, t2, s, i2) {
    const r3 = e2.id;
    this._tiles.set(r3, new T(e2, t2, s, i2)), this._tileBounds.set(r3, e2.extent), this._tileFeatureCounts.set(r3, t2.size);
  }
  _remove({ id: e2 }) {
    const t2 = this._tiles.get(e2);
    t2 && this._removeTileStorage(t2);
  }
  _removeTileStorage(e2) {
    const t2 = [];
    for (const i2 of e2.objectIds)
      this._unreferenceFeature(i2) === A.REMOVED && t2.push(i2);
    this.featureStore.removeManyById(t2);
    const s = e2.data.id;
    this._tiles.delete(s), this._tileBounds.delete(s);
  }
  _processEditsDelete(e2) {
    this.featureStore.removeManyById(e2);
    for (const [, t2] of this._tiles) {
      for (const s of e2)
        t2.objectIds.delete(s);
      this._tileFeatureCounts.set(t2.data.id, t2.objectIds.size);
    }
    for (const t2 of e2)
      this._refCounts.delete(t2);
  }
  async _processEditsRefetch(e2, t2, s) {
    const i2 = (await t2(e2, s)).features, { hasZ: r3, hasM: o2 } = this.featureStore;
    for (const n2 of i2) {
      const e3 = gt(this._tmpBoundingRect, n2.geometry, r3, o2);
      null != e3 && this._tileBounds.forEachInBounds(e3, (e4) => {
        const t3 = this._tiles.get(e4);
        this.featureStore.add(n2);
        const s2 = n2.objectId;
        t3.objectIds.has(s2) || (t3.objectIds.add(s2), this._referenceFeature(s2), this._tileFeatureCounts.set(t3.data.id, t3.objectIds.size));
      });
    }
  }
  process(e2, t2 = () => true, s) {
    if (null == this.tileInfo || !e2.extent || null != this.extent && !E$1(o(this.extent, this._tmpBoundingRect), e2.extent))
      return new F(e2);
    const i2 = this.getAttributesForTile(e2.id);
    if (e$1(s, i2))
      return new F(e2);
    const r3 = this._createTileTree(e2, this.tileInfo);
    return this._simplify(r3, t2, null, 0, 1), this._collectMissingTiles(e2, r3, this.tileInfo, s);
  }
  get debugInfo() {
    return Array.from(this._tiles.values()).map(({ data: e2 }) => ({ data: e2, featureCount: this._tileFeatureCounts.get(e2.id) || 0 }));
  }
  getFeatureCount(e2) {
    return this._tileFeatureCounts.get(e2.id) ?? 0;
  }
  async fetchCount(e2, t2, s, i2) {
    const r3 = this._tileFeatureCounts.get(e2.id);
    if (null != r3)
      return r3;
    const o2 = await S$2(t2, s, i2);
    return this._tileFeatureCounts.set(e2.id, o2.data.count), o2.data.count;
  }
  _createTileTree(e2, t2) {
    const s = new w$1(e2.level, e2.row, e2.col);
    return t2.updateTileInfo(s, j$3.ExtrapolateOptions.POWER_OF_TWO), this._tileBounds.forEachInBounds(e2.extent, (i2) => {
      const r3 = this._tiles.get(i2)?.data;
      r3 && this._tilesAreRelated(e2, r3) && this._populateChildren(s, r3, t2, this._tileFeatureCounts.get(r3.id) || 0);
    }), s;
  }
  _tilesAreRelated(e2, t2) {
    if (!e2 || !t2)
      return false;
    if (e2.level === t2.level)
      return e2.row === t2.row && e2.col === t2.col;
    const s = e2.level < t2.level, i2 = s ? e2 : t2, r3 = s ? t2 : e2, o2 = 1 << r3.level - i2.level;
    return Math.floor(r3.row / o2) === i2.row && Math.floor(r3.col / o2) === i2.col;
  }
  _populateChildren(e2, t2, s, i2) {
    const r3 = t2.level - e2.level - 1;
    if (r3 < 0)
      return void (e2.isLeaf = true);
    const o2 = t2.row >> r3, n2 = t2.col >> r3, l = e2.row << 1, u2 = n2 - (e2.col << 1) + (o2 - l << 1), a2 = e2.children[u2];
    if (null != a2)
      this._populateChildren(a2, t2, s, i2);
    else {
      const r4 = new w$1(e2.level + 1, o2, n2);
      s.updateTileInfo(r4, j$3.ExtrapolateOptions.POWER_OF_TWO), e2.children[u2] = r4, this._populateChildren(r4, t2, s, i2);
    }
  }
  _simplify(e2, t2, s, i2, r3) {
    const o2 = r3 * r3;
    if (e2.isLeaf)
      return t2(this.getFeatureCount(e2), r3) ? 0 : (this._remove(e2), null != s && (s.children[i2] = null), o2);
    const n2 = r3 / 2, l = n2 * n2;
    let u2 = 0;
    for (let a2 = 0; a2 < e2.children.length; a2++) {
      const s2 = e2.children[a2];
      u2 += null != s2 ? this._simplify(s2, t2, e2, a2, n2) : l;
    }
    return 0 === u2 ? this._mergeChildren(e2) : 1 - u2 / o2 < b$1 && (this._purge(e2), null != s && (s.children[i2] = null), u2 = o2), u2;
  }
  _mergeChildren(e2) {
    const t2 = /* @__PURE__ */ new Set();
    let s, i2 = 0;
    this._forEachLeaf(e2, (e3) => {
      const r3 = this._tiles.get(e3.id);
      if (r3) {
        s = s ? o$2(s, r3.attributeKeys) : new Set(r3.attributeKeys), i2 += r3.byteSize;
        for (const e4 of r3.objectIds)
          t2.has(e4) || (t2.add(e4), this._referenceFeature(e4));
        this._remove(e3);
      }
    }), this._addTileStorage(e2, t2, i2, s ?? /* @__PURE__ */ new Set()), e2.isLeaf = true, e2.children[0] = e2.children[1] = e2.children[2] = e2.children[3] = null, this._tileFeatureCounts.set(e2.id, t2.size);
  }
  _forEachLeaf(e2, t2) {
    for (const s of e2.children)
      null != s && (s.isLeaf ? t2(s) : this._forEachLeaf(s, t2));
  }
  _purge(e2) {
    if (null != e2)
      if (e2.isLeaf)
        this._remove(e2);
      else
        for (let t2 = 0; t2 < e2.children.length; t2++) {
          const s = e2.children[t2];
          this._purge(s), e2.children[t2] = null;
        }
  }
  _collectMissingTiles(e2, t2, s, i2) {
    const r3 = new j$1(s, e2, this.extent);
    return this._collectMissingTilesRecurse(t2, r3, 1, i2), r3.info;
  }
  _collectMissingTilesRecurse(e2, t2, s, i2) {
    const r3 = this.getAttributesForTile(e2.id), o2 = r3 && !e$1(i2, r3);
    if (o2 && t2.addMissing(e2.level, e2.row, e2.col, s), e2.isLeaf)
      return;
    if (!e2.hasChildren)
      return void (o2 || t2.addMissing(e2.level, e2.row, e2.col, s));
    const l = s / 2;
    for (let n2 = 0; n2 < e2.children.length; n2++) {
      const s2 = e2.children[n2];
      null == s2 ? t2.addMissing(e2.level + 1, (e2.row << 1) + ((2 & n2) >> 1), (e2.col << 1) + (1 & n2), l) : this._collectMissingTilesRecurse(s2, t2, l, i2);
    }
  }
  _referenceFeature(e2) {
    const t2 = (this._refCounts.get(e2) || 0) + 1;
    return this._refCounts.set(e2, t2), 1 === t2 ? A.ADDED : A.UNCHANGED;
  }
  _unreferenceFeature(e2) {
    const t2 = (this._refCounts.get(e2) || 0) - 1;
    return 0 === t2 ? (this._refCounts.delete(e2), A.REMOVED) : (t2 > 0 && this._refCounts.set(e2, t2), A.UNCHANGED);
  }
  get test() {
    return { tiles: Array.from(this._tiles.values()).map((e2) => `${e2.data.id}:[${Array.from(e2.objectIds)}]`), featureReferences: Array.from(this._refCounts.keys()).map((e2) => `${e2}:${this._refCounts.get(e2)}`) };
  }
};
function C(e2) {
  return e2.reduce((e3, t2) => e3 + S(t2), 0);
}
function S(e2) {
  return 32 + E(e2.geometry) + t$2(e2.attributes);
}
function E(e2) {
  if (null == e2)
    return 0;
  const t2 = c$3(e2.lengths, 4);
  return 32 + c$3(e2.coords, 8) + t2;
}
e([y({ constructOnly: true })], v.prototype, "featureStore", void 0), e([y()], v.prototype, "tileInfo", void 0), e([y()], v.prototype, "extent", void 0), e([y()], v.prototype, "maximumByteSize", void 0), v = e([c("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")], v);
class T {
  constructor(e2, t2, s, i2) {
    this.data = e2, this.objectIds = t2, this.byteSize = s, this.attributeKeys = i2;
  }
}
let w$1 = class w {
  constructor(e2, t2, s) {
    this.level = e2, this.row = t2, this.col = s, this.isLeaf = false, this.extent = null, this.children = [null, null, null, null];
  }
  get hasChildren() {
    return !this.isLeaf && (null != this.children[0] || null != this.children[1] || null != this.children[2] || null != this.children[3]);
  }
};
class F {
  constructor(e2, t2 = []) {
    this.missingTiles = t2, this.fullArea = 0, this.coveredArea = 0, this.fullArea = l$1(e2.extent), this.coveredArea = this.fullArea;
  }
  prepend(e2) {
    this.missingTiles = e2.missingTiles.concat(this.missingTiles), this.coveredArea += e2.coveredArea, this.fullArea += e2.fullArea;
  }
}
let j$1 = class j {
  constructor(e2, t2, s) {
    this._tileInfo = e2, this._extent = null, this.info = new F(t2), null != s && (this._extent = o(s));
  }
  addMissing(e2, t2, s, i2) {
    const r3 = new t$3(null, e2, t2, s);
    this._tileInfo.updateTileInfo(r3, j$3.ExtrapolateOptions.POWER_OF_TWO), null == r3.extent || null != this._extent && !E$1(this._extent, r3.extent) || (this.info.missingTiles.push({ data: r3, resolution: i2 }), this.info.coveredArea -= l$1(r3.extent));
  }
};
const b$1 = 0.18751;
var A;
!function(e2) {
  e2[e2.ADDED = 0] = "ADDED", e2[e2.REMOVED = 1] = "REMOVED", e2[e2.UNCHANGED = 2] = "UNCHANGED";
}(A || (A = {}));
let w2 = class extends o$3.EventedAccessor {
  constructor() {
    super(...arguments), this._isInitializing = true, this.remoteClient = null, this._whenSetup = L$1(), this._elevationAligner = i(), this._elevationFilter = r$2(), this._symbologyCandidatesFetcher = n(), this._updatingHandles = new h$1(), this._editsUpdatingHandles = new h$1(), this._pendingApplyEdits = /* @__PURE__ */ new Map(), this._alignPointsInFeatures = async (e2, t2) => {
      const i2 = { query: e2 }, r3 = await this.remoteClient.invoke("alignElevation", i2, { signal: t2 });
      return s$2(t2), r3;
    }, this._getSymbologyCandidates = async (e2, t2) => {
      const i2 = { candidates: e2, spatialReference: this._spatialReference.toJSON() }, r3 = await this.remoteClient.invoke("getSymbologyCandidates", i2, { signal: t2 });
      return s$2(t2), r3;
    };
  }
  get updating() {
    return this.updatingExcludingEdits || this._editsUpdatingHandles.updating || this._featureFetcher.updating;
  }
  get updatingExcludingEdits() {
    return this._featureFetcher.updatingExcludingEdits || this._isInitializing || this._updatingHandles.updating;
  }
  destroy() {
    this._featureFetcher?.destroy(), this._queryEngine?.destroy(), this._featureStore?.clear();
  }
  async setup(e2) {
    if (this.destroyed)
      return { result: {} };
    const { geometryType: t2, objectIdField: i$1, timeInfo: s, fieldsIndex: n2 } = e2.serviceInfo, { hasZ: o2 } = e2, l = f$2.fromJSON(e2.spatialReference);
    this._spatialReference = l, this._featureStore = new m({ ...e2.serviceInfo, hasZ: o2, hasM: false }), this._queryEngine = new $({ spatialReference: e2.spatialReference, featureStore: this._featureStore, geometryType: t2, fieldsIndex: n2, hasZ: o2, hasM: false, objectIdField: i$1, timeInfo: s }), this._featureFetcher = new x({ store: new v({ featureStore: this._featureStore }), url: e2.serviceInfo.url, objectIdField: e2.serviceInfo.objectIdField, globalIdField: e2.serviceInfo.globalIdField, capabilities: e2.serviceInfo.capabilities, spatialReference: l, sourceSpatialReference: f$2.fromJSON(e2.serviceInfo.spatialReference), customParameters: e2.configuration.customParameters });
    const d = "3d" === e2.configuration.viewType;
    return this._elevationAligner = i(d, { elevationInfo: null != e2.elevationInfo ? h.fromJSON(e2.elevationInfo) : null, alignPointsInFeatures: this._alignPointsInFeatures }), this._elevationFilter = r$2(d), this.addHandles([d$2(() => this._featureFetcher.availability, (e3) => this.emit("notify-availability", { availability: e3 }), C$1), d$2(() => this.updating, () => this._notifyUpdating())]), this._whenSetup.resolve(), this._isInitializing = false, this.configure(e2.configuration);
  }
  async configure(e2) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), this._updateFeatureFetcherConfiguration(e2), j2;
  }
  async setSuspended(e2, t2) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), s$2(t2), this._featureFetcher.suspended = e2, j2;
  }
  async updateOutFields(e2, t2) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), s$2(t2), this._featureFetcher.outFields = new Set(e2 ?? []), j2;
  }
  async fetchCandidates(e2, t2) {
    await this._whenSetup.promise, s$2(t2);
    const i2 = b(e2), r3 = t2?.signal, n2 = await this._queryEngine.executeQueryForSnapping(i2, r3);
    s$2(r3);
    const a2 = await this._elevationAligner.alignCandidates(n2.candidates, f$2.fromJSON(e2.point.spatialReference) ?? f$2.WGS84, r3);
    s$2(r3);
    const o2 = await this._symbologyCandidatesFetcher.fetch(a2, r3);
    s$2(r3);
    const l = 0 === o2.length ? a2 : a2.concat(o2);
    return { result: { candidates: this._elevationFilter.filter(i2, l) } };
  }
  async updateTiles(e2, t2) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), s$2(t2), this._featureFetcher.tileSize = e2.tileSize, this._featureFetcher.tilesOfInterest = e2.tiles, this._featureFetcher.tileInfo = null != e2.tileInfo ? j$3.fromJSON(e2.tileInfo) : null, j2;
  }
  async refresh(e2, t2) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), s$2(t2), this._featureFetcher.refresh(), j2;
  }
  async whenNotUpdating(e2, t2) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), s$2(t2), await w$4(() => !this.updatingExcludingEdits, t2), s$2(t2), j2;
  }
  async getDebugInfo(e2, t2) {
    return s$2(t2), { result: this._featureFetcher.debugInfo };
  }
  async beginApplyEdits(e2, t2) {
    this._updatingHandles.addPromise(this._whenSetup.promise), s$2(t2);
    const r3 = L$1();
    return this._pendingApplyEdits.set(e2.id, r3), this._featureFetcher.applyEdits(r3.promise), this._editsUpdatingHandles.addPromise(r3.promise), j2;
  }
  async endApplyEdits(e2, t2) {
    const i2 = this._pendingApplyEdits.get(e2.id);
    return i2 && i2.resolve(e2.edits), s$2(t2), j2;
  }
  async notifyElevationSourceChange(e2, t2) {
    return this._elevationAligner.notifyElevationSourceChange(), j2;
  }
  async notifySymbologyChange(e2, t2) {
    return this._symbologyCandidatesFetcher.notifySymbologyChange(), j2;
  }
  async setSymbologySnappingSupported(e2) {
    return this._symbologyCandidatesFetcher = n(e2, this._getSymbologyCandidates), j2;
  }
  _updateFeatureFetcherConfiguration(e2) {
    this._featureFetcher.filter = null != e2.filter ? b$3.fromJSON(e2.filter) : null, this._featureFetcher.customParameters = e2.customParameters;
  }
  _notifyUpdating() {
    this.emit("notify-updating", { updating: this.updating });
  }
};
e([y({ readOnly: true })], w2.prototype, "updating", null), e([y({ readOnly: true })], w2.prototype, "updatingExcludingEdits", null), e([y()], w2.prototype, "_isInitializing", void 0), w2 = e([c("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")], w2);
const I = w2;
function b(e2) {
  if (!e2.filter)
    return { ...e2, query: { where: "1=1" } };
  const { distance: t2, units: i2, spatialRel: s, where: r3, timeExtent: n2, objectIds: a2 } = e2.filter, o2 = { geometry: e2.filter.geometry ? y$1(e2.filter.geometry) : void 0, distance: t2, units: i2, spatialRel: s, timeExtent: n2, objectIds: a2, where: r3 ?? "1=1" };
  return { ...e2, query: o2 };
}
const j2 = { result: {} };
export {
  I as default
};
