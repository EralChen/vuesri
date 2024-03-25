import { y$ as h$2, b6 as u$1, z0 as M, eP as r$1, nz as Z, iC as o$1, kt as E$2, kC as U$1, kz as e, z1 as J, qe as I$3, z2 as N$1, aV as e$1, aX as y, a_ as c$3, bZ as S$1, aT as s$2, vF as F$1, z3 as s$3, eV as v$1, fL as I$4, cd as b$3, dz as I$5, nq as n$1, z4 as x$1, z5 as i$1, dx as m$2, ck as b$4, cU as s$4, dB as c$4, gs as l$1, z6 as a$1, z7 as k, e3 as v$2, eL as r$2, z8 as v$3, ir as h$3, bQ as V$2, it as h$4, bY as j$1, bJ as c$5, c0 as w$1, c1 as p, c2 as d$4, c4 as z$1, fU as n$2, bW as h$5, bX as P$2, bF as O$3, aO as s$5, c8 as u$2, g8 as l$2, fc as e$2, ex as w$2, ce as d$5, cl as A$3, cf as C, kx as t$3, ky as u, wA as m$3, iT as w, bD as a$2, eD as a$3, b0 as has, j5 as _$1, aC as M$1, dm as d$6, hZ as o$2, dL as Z$1, aP as a$4, eY as o$3, eT as d$7, fb as d$8, z9 as o$4, ca as e$3, cb as C$1, cc as m$4, za as y$1, zb as e$4, cj as t$4, cm as e$6, cg as i$2, ch as l$3, lV as n$3, f6 as p$2, sv as x$2, dS as g$2, cn as P$3, co as r$3, mE as o$5, zc as o$6, zd as d$9, mK as s$7, mL as o$7, mH as o$8, mS as t$5, mR as r$4, mU as r$5, mV as r$6, ux as O$4, mW as S$2, tn as c$6, n0 as _$2, mc as E$3, mT as t$6, uz as n$4, ze as R, lG as e$7, fq as D$1, x as x$3, zf as i$4, cJ as U$2, m as m$5, cR as t$7, ma as r$7, zg as _$3, zh as i$5, mF as d$a, fk as e$8, mQ as s$8, zi as T$2, mb as R$1, nh as u$5, to as H$3, tp as c$7, n6 as A$4, mM as o$9, iy as o$a, lp as b$5, tq as t$8, zj as b$6, nf as d$b, gk as n$5, cL as G$1, fG as t$9, s7 as t$a, s8 as c$8, id as u$6, q8 as o$b, zk as f$3, dX as pe, kB as u$7, cs as t$b, zl as O$5, cr as q$3, ff as E$4, lr as c$9, fo as te, zm as l$4, fl as t$c, fm as m$7, fj as I$6, zn as e$9, fn as I$7, xv as n$7, ct as e$a, aW as n$8, hY as J$1, ci as c$a, eB as t$d } from "./chunk-ejFG4zJ0.js";
import { m as m$8, r as r$8 } from "./chunk-nxkTbLqW.js";
import { i as i$3 } from "./chunk-uS4nEbwW.js";
import { k as ke, p as p$1, u as u$3, s as s$6, a as u$4, e as e$5, b as s$9 } from "./chunk-KrpK7L1w.js";
import { $ as $$1 } from "./chunk-P_v7gizd.js";
import { m as m$6 } from "./chunk-HoJyfhBe.js";
import { n as n$6 } from "./chunk-drfK378b.js";
import { l as l$5 } from "./chunk-315ILBUn.js";
let t$2 = class t {
  get isReferenced() {
    return 0 !== this.versions.length;
  }
  get isSingle() {
    return 1 === this.versions.length && 1 === this.versions[0].refCount;
  }
  constructor(e2, t3) {
    this._highestResolutionVersion = null, this.versions = [], this.ref(e2, t3);
  }
  ref(t3, s3) {
    const r2 = this.feature;
    i.oldVersion = r2, this.feature && Object.defineProperty(t3, "uid", { value: this.feature.uid, configurable: true });
    for (const n2 of this.versions)
      if (n2.resolution === s3) {
        n2.refCount++;
        const s4 = this._highestResolutionVersion === n2 && !h$2(t3, n2.feature);
        return (s4 || this._highestResolutionVersion !== n2) && (n2.feature = t3), i.newVersion = s4 ? t3 : r2, i;
      }
    const o2 = { feature: t3, resolution: s3, refCount: 1 };
    return this.versions.push(o2), !this._highestResolutionVersion || s3 < this._highestResolutionVersion.resolution ? (i.newVersion = t3, this._highestResolutionVersion = o2) : i.newVersion = r2, i;
  }
  unref(e2) {
    for (let t3 = 0; t3 < this.versions.length; t3++) {
      const s3 = this.versions[t3];
      if (s3.resolution === e2)
        return s3.refCount--, i.oldVersion = this.feature, 0 === s3.refCount && (this.versions[t3] = this.versions[this.versions.length - 1], this.versions.length--, this._highestResolutionVersion === s3 && (this._recalculateHighestResolutionVersion(), i.oldVersion = s3.feature)), i.newVersion = this.feature, i;
    }
    return null;
  }
  get feature() {
    return this._highestResolutionVersion ? this._highestResolutionVersion.feature : null;
  }
  _recalculateHighestResolutionVersion() {
    if (0 === this.versions.length)
      return void (this._highestResolutionVersion = null);
    let e2 = this.versions[0];
    for (let t3 = 1; t3 < this.versions.length; t3++) {
      const s3 = this.versions[t3];
      s3.resolution < e2.resolution && (e2 = s3);
    }
    this._highestResolutionVersion = e2;
  }
};
let s$1 = class s {
  get isReferenced() {
    return 0 !== this._refCount;
  }
  get isSingle() {
    return 1 === this._refCount;
  }
  constructor(e2) {
    this._feature = e2, this._refCount = 1;
  }
  ref(t3) {
    return ++this._refCount, i.oldVersion = this._feature, this.feature && Object.defineProperty(t3, "uid", { value: this.feature.uid, configurable: true }), h$2(this._feature, t3) || (this._feature = t3), i.newVersion = this._feature, i;
  }
  unref() {
    return i.oldVersion = this._feature, this._refCount > 0 && (this._refCount--, !this.isReferenced) ? (i.newVersion = null, i) : (i.newVersion = this._feature, i);
  }
  get feature() {
    return this._feature;
  }
};
const i = { oldVersion: null, newVersion: null };
const _ = 16438, d$3 = /* @__PURE__ */ new Set();
let m$1 = class m {
  get featuresMissing() {
    return this._featuresMissing.value;
  }
  set featuresMissing(t3) {
    this._featuresMissing.value = t3;
  }
  get missingAttributes() {
    return this._missingAttributes;
  }
  get fetchFailed() {
    return this._fetchFailed.value;
  }
  set fetchFailed(t3) {
    this._fetchFailed.value = t3;
  }
  get displayingFeatures() {
    return this._displayingFeatures;
  }
  set displayingFeatures(t3) {
    this._displayingFeatures = t3, this.extentIncludingBorrowedFeatures = null;
  }
  get perTileMaximumNumberOfFeaturesExceeded() {
    const t3 = (this.fetchStatus === c$2.DONE || this.fetchStatus === c$2.FULL) && this.featuresMissing;
    return !this.filtered && (t3 || this.hasFeatureLimit);
  }
  get features() {
    return this._features;
  }
  get featureLimit() {
    return this._featureLimit.value;
  }
  set featureLimit(t3) {
    this._featureLimit.value !== t3 && (this._featureLimit.value = t3, this._estimatedUnusedSizeDirty = true);
  }
  get hasFeatureLimit() {
    return this.featureLimit !== this._featuresLength.value;
  }
  get hasAllFeatures() {
    return !(this.featuresMissing || this.fetchFailed || this.hasFeatureLimit);
  }
  get availableFields() {
    return this._availableFields;
  }
  setFeatures(t3, e2, s3, i2) {
    this._availableFields = s3 ?? d$3, this._features = t3, this._featuresLength.value = t3?.length ?? 0, this._shuffled = false, this._estimatedSize = -1, this._estimatedUnusedSizeDirty = true, this._missingAttributes = i2, t3 && t3.length > 0 ? (this._emptyFeatureRatio.value = e2 / (t3.length + e2), this._numVertices = t3.reduce((t4, e3) => t4 + M(e3.geometry), 0)) : (this._emptyFeatureRatio.value = 0, this._numVertices = 0);
  }
  get emptyFeatureRatio() {
    return this._emptyFeatureRatio.value;
  }
  get numFeatures() {
    return this.hasPreciseFeatureCount ? this._numFeatures : this._features ? this._features.length : 0;
  }
  set numFeatures(t3) {
    this._numFeatures = t3;
  }
  get hasPreciseFeatureCount() {
    return this._numFeatures > F;
  }
  get needsFeatureCount() {
    return this._numFeatures === F;
  }
  get numVertices() {
    return this._numVertices;
  }
  constructor(t3) {
    this.descriptor = t3, this.fetchStatus = c$2.FETCH_NEEDED, this._features = null, this._featuresLength = r$1(0), this._numVertices = 0, this._featureLimit = r$1(0), this._featuresMissing = r$1(true), this._fetchFailed = r$1(false), this._shuffled = false, this._numFeatures = F, this._emptyFeatureRatio = r$1(0), this._estimatedSize = -1, this._estimatedUnusedSize = 0, this._estimatedUnusedSizeDirty = false, this._availableFields = d$3, this._displayingFeatures = null, this.alive = true, this.filtered = false;
  }
  get id() {
    return this.descriptor.id;
  }
  get estimatedSize() {
    return this.updateMemoryEstimates(), this._estimatedSize;
  }
  get estimatedUnusedSize() {
    return this._estimatedUnusedSize;
  }
  updateMemoryEstimates() {
    if (this._estimatedSize < 0) {
      if (this._estimatedSize = 0, this._estimatedUnusedSize = 0, this._features)
        for (let t3 = 0; t3 < this._features.length; ++t3) {
          const e2 = Z(this._features[t3]);
          this._estimatedSize += e2, t3 >= this.featureLimit && (this._estimatedUnusedSize += e2);
        }
      return true;
    }
    if (this._estimatedUnusedSizeDirty) {
      if (this._estimatedUnusedSize = 0, this._estimatedUnusedSizeDirty = false, this._features)
        for (let t3 = this.featureLimit; t3 < this._features.length; ++t3)
          this._estimatedUnusedSize += Z(this._features[t3]);
      return true;
    }
    return false;
  }
  get isFetching() {
    return this.fetchStatus === c$2.FETCHING || this.fetchStatus === c$2.REFETCHING;
  }
  get isRefetching() {
    return this.fetchStatus === c$2.REFETCHING;
  }
  get needsFetching() {
    return this.fetchStatus === c$2.FETCH_NEEDED || this.fetchStatus === c$2.REFETCH_NEEDED;
  }
  get needsRefetching() {
    return this.fetchStatus === c$2.REFETCH_NEEDED;
  }
  get isFetched() {
    return this.fetchStatus === c$2.DONE || this.fetchStatus === c$2.FULL;
  }
  resetFetching() {
    this.fetchStatus = this.fetchStatus === c$2.REFETCHING ? c$2.REFETCH_NEEDED : c$2.FETCH_NEEDED;
  }
  get needsDisplayUpdate() {
    return !!this._features && !E$1(this._features, this.displayingFeatures, this.featureLimit);
  }
  intersects(t3) {
    return null == t3 || !this.descriptor.extent || (o$1(t3, o), E$2(this.descriptor.extent, o));
  }
  intersectionIncludingBorrowed(t3, e$12) {
    const s3 = null != this.extentIncludingBorrowedFeatures ? this.extentIncludingBorrowedFeatures : this.descriptor.extent;
    return t3 || s3 ? (null != t3 ? (o$1(t3, e$12), U$1(e$12, s3, e$12)) : e(e$12, s3), e$12) : (e(e$12, J), e$12);
  }
  _shuffle(e2) {
    this._features && (this._features.sort((t3, s3) => I$3(t3, e2) - I$3(s3, e2)), N$1(this._features, _), this._shuffled = true, this._estimatedUnusedSizeDirty = true);
  }
  reduceFeatures(t3, e2, s3) {
    if (t3 <= 0)
      return false;
    if (!this._features)
      return this.featureLimit = 0, false;
    let i2 = false;
    this.featureLimit = Math.ceil(this.numFeatures * t3), this.featureLimit > this._features.length && (this.featureLimit = this._features.length, this.fetchStatus === c$2.DONE && this._features.length > 0 && (this.fetchStatus = c$2.REFETCH_NEEDED, i2 = true)), !this._shuffled && t3 < 1 && this._shuffle(s3);
    const r2 = Math.max(this.featureLimit, Math.ceil(e2 * this.numFeatures));
    return this._features.length > r2 && (this._features.length = r2, this._featuresLength.value = r2, this.featuresMissing = true, this.fetchStatus === c$2.FULL && (this.fetchStatus = c$2.DONE)), i2;
  }
  get cache() {
    return { availableFields: this._availableFields, features: this._features, numFeatures: this._numFeatures, emptyFeatureRatio: this._emptyFeatureRatio.value, fetchStatus: this.fetchStatus, featuresMissing: this.featuresMissing };
  }
  set cache(t3) {
    this.requestController = null, this._availableFields = t3.availableFields, this._features = t3.features, this._featuresLength.value = t3.features?.length ?? 0, this._numFeatures = t3.numFeatures, this._emptyFeatureRatio.value = t3.emptyFeatureRatio, this.fetchStatus = t3.fetchStatus, this.featuresMissing = t3.featuresMissing, this._estimatedSize = -1, this._estimatedUnusedSizeDirty = true;
  }
};
const F = -1, g$1 = -2;
var c$2;
function E$1(t3, e2, s3) {
  if (null == e2 || null == t3 || s3 !== e2.length || s3 > t3.length)
    return false;
  for (let i2 = 0; i2 < s3; ++i2)
    if (t3[i2] !== e2[i2])
      return false;
  return true;
}
!function(t3) {
  t3[t3.FETCH_NEEDED = 0] = "FETCH_NEEDED", t3[t3.REFETCH_NEEDED = 1] = "REFETCH_NEEDED", t3[t3.FETCHING = 2] = "FETCHING", t3[t3.REFETCHING = 3] = "REFETCHING", t3[t3.DONE = 4] = "DONE", t3[t3.FULL = 5] = "FULL";
}(c$2 || (c$2 = {}));
const o = u$1();
let j = class extends S$1 {
  set maximumNumberOfFeatures(e2) {
    e2 = e2 || 1 / 0;
    const t3 = this._get("maximumNumberOfFeatures");
    e2 === t3 || e2 < 1 || (this._set("maximumNumberOfFeatures", e2), this._maximumFeaturesUpdated(t3, e2));
  }
  set memoryFactor(e2) {
    this.memoryFactor !== e2 && (this._set("memoryFactor", e2), this._setDirty());
  }
  set lodFactor(e2) {
    this.lodFactor !== e2 && (this._set("lodFactor", e2), this._supportsResolution && this.refetch());
  }
  get useTileCount() {
    return this._useTileCount && null != this.context.query.queryFeatureCount;
  }
  set useTileCount(e2) {
    this._useTileCount = e2, this.notifyChange("useTileCount");
  }
  get updating() {
    return this._dirty || !!this._pendingEdits || this._isFetching || (this.tileDescriptors?.updating ?? false);
  }
  get memoryForUnusedFeatures() {
    let e2 = 0;
    return this._featureTiles.forEach((t3) => e2 += t3.estimatedUnusedSize), e2;
  }
  get totalVertices() {
    let e2 = 0;
    return this._featureTiles.forEach((t3) => e2 += t3.numVertices), e2;
  }
  get totalFeatures() {
    let e2 = 0;
    return this._featureTiles.forEach((t3) => e2 += t3.numFeatures), e2;
  }
  get hasAllFeatures() {
    if (this._paused || this.dataUpdating)
      return false;
    for (const [, e2] of this._featureTiles)
      if (!this.hasFullGeometries && 0 !== e2.emptyFeatureRatio || !e2.hasAllFeatures)
        return false;
    return true;
  }
  get hasFullGeometries() {
    if (!this._supportsResolution)
      return true;
    return !this.tileDescriptors.find((e2) => null != e2.resolution) || !this.context.capabilities.supportsQuantization && "polyline" !== this.context.geometryType;
  }
  set filterExtent(e2) {
    if (null != e2 && this.context.tilingScheme && !e2.spatialReference.equals(this.context.tilingScheme.spatialReference))
      return void s$2.getLogger(this).error("#filterExtent=", "extent needs to be in the same spatial reference as the tiling scheme");
    const t3 = this._get("filterExtent");
    if (t3 === e2 || null != t3 && e2 && t3.equals(e2))
      return;
    const i2 = null != e2 ? e2.clone() : null;
    this._set("filterExtent", i2), this._reclip(i2, t3);
  }
  constructor(e2) {
    super(e2), this._useTileCount = false, this.dataUpdating = false, this.running = false, this.updatingTotal = 0, this.updatingRemaining = 0, this.expectedFeatureDiff = 0, this.maximumNumberOfFeaturesExceeded = false, this._fullRatio = 1, this._farRatio = 1, this._changes = { updates: { adds: new Array(), removes: new Array() }, adds: new Array(), removes: new Array() }, this._frameTask = F$1, this._dirty = false, this._featureTiles = new s$3(), this._displayingFeatureReferences = /* @__PURE__ */ new Map(), this._numDisplayingFeatureReferences = 0, this._suspended = true, this._pendingEdits = null, this._applyEditsTilesUpdated = false, this._isFetching = false;
  }
  initialize() {
    this.addHandles(v$1(() => this.tileDescriptors, "change", () => this._setDirty(), { sync: true, onListenerAdd: () => this._setDirty() })), this._objectIdField = this.context.objectIdField, this.FeatureReferenceClass = this.context.capabilities.supportsMultipleResolutions ? t$2 : s$1;
    const e2 = this.context.scheduler;
    null != e2 && (this._frameTask = e2.registerTask(I$4.FEATURE_TILE_FETCHER, this)), this._setDirty();
  }
  destroy() {
    this._frameTask.remove(), this._featureTiles.forEach((e2) => {
      this._cancelFetchTile(e2), this._removeTile(e2);
    }), this._featureTiles.clear(), this._displayingFeatureReferences.clear(), this._pendingEdits?.controller.abort(), this._pendingEdits = null;
  }
  get _paused() {
    return this._suspended || !!this._pendingEdits;
  }
  restart() {
    this._featureTiles.forEach((e2) => {
      this._cancelFetchTile(e2), this._clearTile(e2), this._resetFetchTile(e2);
    }), null != this.context.memoryCache && this.context.memoryCache.clear(), this._setDirty();
  }
  refetch() {
    this._featureTiles.forEach((e2) => {
      this._cancelFetchTile(e2), this._resetFetchTile(e2);
    }), null != this.context.memoryCache && this.context.memoryCache.clear(), this._setDirty();
  }
  suspend() {
    this._suspended || (this._suspended = true, this._pause(), this._setDirty());
  }
  resume() {
    this._suspended && (this._suspended = false, this._unpause());
  }
  getMissingAttributesForFeature(e2) {
    for (const [, t3] of this._featureTiles) {
      const s3 = t3.missingAttributes?.get(e2);
      if (null != s3)
        return s3;
    }
  }
  _pause() {
    this._paused && (this._featureTiles.forEach((e2) => this._cancelFetchTile(e2)), this._updated());
  }
  _unpause() {
    this._paused || (this._setDirty(), this._updated());
  }
  get availableFields() {
    let e2 = null;
    return this._featureTiles.forEach((t3) => {
      null != t3.displayingFeatures && 0 !== t3.displayingFeatures.length && (null == e2 ? e2 = new Set(t3.availableFields) : e2.forEach((s3) => {
        t3.availableFields.has(s3) || e2.delete(s3);
      }));
    }), null != e2 ? e2 : /* @__PURE__ */ new Set();
  }
  applyEdits(e2) {
    this._pendingEdits || (this._pendingEdits = { edits: Promise.resolve(), count: 0, controller: new AbortController() }, this._pause());
    const t3 = this._pendingEdits;
    t3.count++;
    const s3 = t3.edits.then(() => e2.result.catch((e3) => {
      if (b$3(e3))
        throw e3;
      return null;
    }).then((e3) => e3 ? (this._applyEditsDeleteFeatures(e3.deletedFeatures), this._applyEditsAddUpdateFeatures(e3.addedFeatures, e3.updatedFeatures, t3.controller.signal).then(() => e3)) : e3).then((e3) => (0 == --t3.count && (this._pendingEdits === t3 && (this._pendingEdits = null), null != this.context.memoryCache && this.context.memoryCache.clear(), this._applyEditsTilesUpdated = false, this._unpause()), e3)));
    return t3.edits = s3, this._updated(), s3;
  }
  _applyEditsDeleteFeatures(e2) {
    if (0 === e2.length)
      return;
    const t3 = this.context.globalIdField, i2 = t3 && this.availableFields.has(t3), r2 = /* @__PURE__ */ new Set(), a2 = this._objectIdField;
    e2.forEach(({ objectId: e3, globalId: n2 }) => {
      (!e3 || e3 < 0) && t3 && n2 && (i2 || s$2.getLogger(this).errorOncePerTick(`Editing the specified service requires the layer's globalIdField, ${t3} to be included the layer's outFields for updates to be reflected in the view`), e3 = this._objectIdFromGlobalId(n2, a2, t3)), null != e3 && e3 >= 0 && r2.add(e3);
    }), this._featureTiles.forEach((e3) => {
      if (!e3.features)
        return;
      const t4 = e3.features.filter((e4) => !r2.has(I$3(e4, this._objectIdField)));
      t4.length !== e3.features.length && (this._applyEditsTileUpdated(), e3.setFeatures(t4, 0, e3.availableFields, e3.missingAttributes), this._invalidateCounts());
    });
  }
  _objectIdFromGlobalId(e2, t3, s3) {
    if (null == e2)
      return null;
    const i2 = this.features.find((t4) => t4.attributes?.[s3] === e2);
    return i2 ? I$3(i2, t3) : null;
  }
  async _applyEditsAddUpdateFeatures(e2, t3, i2) {
    const { objectIdField: r2, globalIdField: a2 } = this.context, n2 = a2 && this.availableFields.has(a2), o2 = /* @__PURE__ */ new Set(), u2 = /* @__PURE__ */ new Set();
    for (const s3 of e2) {
      const e3 = s3.objectId;
      null != e3 && o2.add(e3);
    }
    for (const { objectId: h3, globalId: d4 } of t3) {
      let e3 = h3;
      (null == e3 || e3 < 0) && a2 && (n2 || s$2.getLogger(this).errorOncePerTick(`Editing the specified service requires the layer's globalIdField, ${a2} to be included the layer's outFields for updates to be reflected in the view`), e3 = this._objectIdFromGlobalId(d4, r2, a2)), null != e3 && e3 >= 0 && (o2.add(e3), u2.add(e3));
    }
    if (0 === o2.size)
      return;
    const l2 = [];
    this._featureTiles.forEach((e3) => {
      const t4 = this._applyEditsAddUpdateTile(e3, o2, u2, i2);
      t4 && l2.push(t4);
    }), this._updated(), await Promise.allSettled(l2);
  }
  async _applyEditsAddUpdateTile(e2, t3, s3, i2) {
    if (!e2.features)
      return;
    const r2 = this._createQuery(e2);
    r2.resultType = void 0, r2.cacheHint = false, r2.objectIds = Array.from(t3);
    const a2 = await this._queryFeatures(r2, i2);
    let n2 = null;
    if (s3.size > 0) {
      const t4 = e2.features.filter((e3) => !s3.has(I$3(e3, this._objectIdField)));
      t4.length !== e2.features.length && (n2 = t4);
    }
    if (a2.features.length > 0) {
      n2 || (n2 = e2.features.slice());
      for (const e3 of a2.features)
        n2.push(e3);
    }
    n2 && (e2.hasPreciseFeatureCount && (e2.numFeatures = Math.max(e2.numFeatures, n2.length)), this._applyEditsTileUpdated(), e2.setFeatures(n2, 0, q$2(e2.availableFields, a2.fields), L$1(e2.missingAttributes, a2.missingAttributes)), this._invalidateCounts());
  }
  _applyEditsTileUpdated() {
    this._applyEditsTilesUpdated || (this._applyEditsTilesUpdated = true, this._updated());
  }
  _queryFeatures(e2, t3) {
    return this.context.query.queryFeaturesDehydrated(e2, { signal: t3, timeout: V$1 });
  }
  _setDirty() {
    this._dirty = true, this._updated();
  }
  runTask(e2) {
    const t3 = this._frameTask.processQueue(e2);
    if (!this._dirty || !this.initialized)
      return t3;
    this._dirty = false;
    const s3 = this._getListOfTiles();
    if (this._markTilesNotAlive(s3), !e2.run(() => this._addTiles(s3, e2)) || !e2.run(() => this._filterExtentTiles(s3, e2)) || !e2.run(() => this._removeTiles(s3, e2)) || e2.done)
      return void this._setDirty();
    const i2 = this._sortTiles(s3);
    e2.run(() => this._showTiles(i2, e2)) && e2.run(() => this._fetchTiles(i2, e2)) && e2.run(() => this._updateMemoryEstimates(i2, e2)) || this._setDirty(), this._updated(), this.updating || this._updateMaximumNumberOfFeaturesExceeded();
  }
  _markTilesNotAlive(e2) {
    for (const t3 of e2)
      t3.alive = false;
  }
  _addTiles(e2, t3) {
    return !(this._suspended || !this.tileDescriptors) && (this.tileDescriptors.forEach((s3) => {
      const i2 = this._featureTiles.get(s3.id);
      i2 ? i2.alive = true : t3.done || (e2.push(this._addTile(s3)), t3.madeProgress());
    }), t3.hasProgressed);
  }
  _filterExtentTiles(e2, t3) {
    for (const s3 of e2) {
      if (t3.done)
        break;
      s3.alive && (s3.filtered = !s3.intersects(this.filterExtent), s3.filtered && (this._clearTile(s3), t3.madeProgress()));
    }
    return t3.hasProgressed;
  }
  _removeTiles(e2, t3) {
    for (let s3 = e2.length - 1; s3 >= 0 && !t3.done; s3--) {
      const i2 = e2[s3];
      i2.alive || (this._removeTile(i2), s3 !== e2.length - 1 && (e2[s3] = e2[e2.length - 1]), e2.pop(), t3.madeProgress());
    }
    return t3.hasProgressed;
  }
  _sortTiles(e2) {
    return e2.sort((e3, t3) => (e3.descriptor.loadPriority ?? 0) - (t3.descriptor.loadPriority ?? 0)), e2;
  }
  _showTiles(e2, t3) {
    const s3 = this._updateRatio(e2), i2 = (e3) => {
      const t4 = this._fullRatio < 1 ? s3(e3) * this._farRatio : 1;
      return e3.reduceFeatures(t4, this.memoryFactor, this._objectIdField) && this._setDirty(), this._showTile(e3);
    };
    for (const r2 of e2)
      if (!t3.run(() => i2(r2))) {
        this._setDirty();
        break;
      }
    return t3.hasProgressed;
  }
  _fetchTiles(e2, t3) {
    if (this._paused)
      return false;
    let i2 = false;
    for (const s3 of e2) {
      if (!s3.needsFetching)
        continue;
      const e3 = null != this.context.memoryCache ? this.context.memoryCache.pop(s3.id) : null;
      if (null == e3) {
        if (this._needsNumFeatures(s3)) {
          const e4 = new AbortController(), r2 = this._fetchTileCount(s3, e4.signal);
          this._handleRequest(s3, r2, e4, () => s3.numFeatures = g$1), i2 = true, t3.madeProgress();
        }
        if (t3.done)
          return true;
      } else
        s3.cache = e3, this._setDirty(), this._scheduleUpdated(), t3.madeProgress();
    }
    if (i2)
      return t3.hasProgressed;
    for (const r2 of e2)
      if (r2.needsFetching) {
        const e3 = new AbortController(), i3 = this._fetchTile(r2, e3.signal);
        if (this._handleRequest(r2, i3, e3, (e4) => {
          r2.setFeatures([], 0, null, void 0), this._invalidateCounts(), r2.featuresMissing = false, r2.fetchFailed = true, this.context.logFetchError(s$2.getLogger(this), e4);
        }), t3.madeProgress())
          return true;
      }
    return t3.hasProgressed;
  }
  _updateMemoryEstimates(e2, t3) {
    return e2.some((e3) => !t3.run(() => e3.updateMemoryEstimates()) && (this._setDirty(), true)), t3.hasProgressed;
  }
  _reclip(e2, t3) {
    if (!this.initialized)
      return;
    const s3 = new Array();
    this._featureTiles.forEach((i2) => {
      null != i2.displayingFeatures && 0 !== i2.displayingFeatures.length && (i2.intersectionIncludingBorrowed(t3, Q), i2.intersectionIncludingBorrowed(e2, H$2), I$5(Q, H$2) || s3.push(i2));
    }), this._refreshDisplayingFeatures(s3), this._updated();
  }
  _refreshDisplayingFeatures(e2) {
    const t3 = /* @__PURE__ */ new Set(), s3 = this._changes.updates;
    for (const i2 of e2)
      if (null != i2.displayingFeatures)
        for (const e3 of i2.displayingFeatures) {
          const i3 = I$3(e3, this._objectIdField);
          if (t3.has(i3))
            continue;
          t3.add(i3);
          const r2 = this._displayingFeatureReferences.get(i3).feature;
          s3.removes.push(r2), s3.adds.push(r2);
        }
    this._applyChanges();
  }
  _updated() {
    let e2 = 0;
    if (this._paused || this._featureTiles.forEach((t3) => t3.isFetching ? ++e2 : 0), this._isFetching = e2 > 0, this._set("running", this._dirty), e2 > 0 || this._applyEditsTilesUpdated ? this._set("dataUpdating", true) : this._dirty || this._set("dataUpdating", false), this.updating) {
      let t3 = 0, s3 = 0, i2 = 0, r2 = 0, a2 = 0;
      const n2 = this._displayingFeatureReferences.size / this._numDisplayingFeatureReferences;
      this._featureTiles.forEach((e3) => {
        if (++s3, e3.isFetching && e3.hasPreciseFeatureCount) {
          const t4 = this._maximumFeaturesForTile(e3) * (1 - e3.emptyFeatureRatio), s4 = null != e3.displayingFeatures ? e3.displayingFeatures.length * n2 : 0;
          a2 += t4 - s4;
        }
        e3.needsFetching ? ++r2 : e3.numFeatures > 0 && (++i2, t3 += e3.numFeatures);
      }), r2 += e2;
      let o2 = 0, u2 = 0;
      t3 ? (u2 = t3, o2 = Math.min(r2 * t3 / i2, t3)) : (u2 = s3, o2 = r2), a2 = Math.min(this.maximumNumberOfFeatures - this.features.length, a2), this._set("updatingTotal", u2), this._set("updatingRemaining", o2), this._set("expectedFeatureDiff", a2);
    } else
      this._set("updatingTotal", 0), this._set("updatingRemaining", 0), this._set("expectedFeatureDiff", 0);
    this.debugger && this.debugger.update();
  }
  _updateMaximumNumberOfFeaturesExceeded() {
    const e2 = n$1(this._featureTiles, (e3) => e3.perTileMaximumNumberOfFeaturesExceeded);
    this._set("maximumNumberOfFeaturesExceeded", e2);
  }
  _updateRatio(e2) {
    const t3 = U(e2), s3 = (e3) => 1 / (1 << Math.max(0, t3 - e3.descriptor.lij[0]));
    let i2 = 0, r2 = 0;
    for (const a2 of e2) {
      const e3 = a2.numFeatures;
      i2 += e3, r2 += e3 * s3(a2);
    }
    return this._fullRatio = Math.min(1, this.maximumNumberOfFeatures / i2), this._farRatio = this.maximumNumberOfFeatures / r2, this._scheduleUpdated(), s3;
  }
  _maximumFeaturesUpdated(e2, t3) {
    e2 !== t3 && (t3 > e2 && this._featureTiles.forEach((e3) => {
      if (!e3.featuresMissing)
        return;
      const t4 = this._maximumFeaturesForTile(e3);
      e3.features && (e3.features.length >= t4 || e3.fetchStatus === c$2.FULL) || (this._cancelFetchTile(e3), this._resetFetchTile(e3));
    }), this._setDirty());
  }
  _addTile(e2) {
    const t3 = new m$1(e2);
    return this._featureTiles.set(t3.id, t3), this._resetFetchTile(t3), this._referenceDisplayingFeaturesFromRelatedTiles(t3), t3;
  }
  _referenceDisplayingFeaturesFromRelatedTiles(e2) {
    const t3 = e2.descriptor.resolution;
    this._featureTiles.forEach((s3) => {
      if (!(null == s3.displayingFeatures || e2 === s3 || e2.descriptor.lij && s3.descriptor.lij && !x$1(e2.descriptor.lij, s3.descriptor.lij))) {
        null == e2.displayingFeatures && (e2.displayingFeatures = []), e2.descriptor.extent && s3.descriptor.extent && (null == e2.extentIncludingBorrowedFeatures && (e2.extentIncludingBorrowedFeatures = i$1(e2.descriptor.extent)), m$2(e2.extentIncludingBorrowedFeatures, s3.descriptor.extent, e2.extentIncludingBorrowedFeatures));
        for (const i2 of s3.displayingFeatures) {
          e2.displayingFeatures.push(i2);
          const s4 = this._displayingFeatureReferences.get(I$3(i2, this._objectIdField));
          s4.ref(s4.feature, t3), this._numDisplayingFeatureReferences++;
        }
      }
    }), e2.featureLimit = null != e2.displayingFeatures ? e2.displayingFeatures.length : 0;
  }
  _removeTile(e2) {
    this._clearTile(e2), this._featureTiles.delete(e2.id);
  }
  _resetFetchTile(e2) {
    e2.filtered = !e2.intersects(this.filterExtent), e2.filtered ? e2.needsFetching && (e2.fetchStatus = c$2.DONE) : e2.fetchStatus = c$2.FETCH_NEEDED;
  }
  _cancelFetchTile(e2) {
    const t3 = e2.requestController;
    null != t3 && (e2.requestController = null, e2.resetFetching(), t3.abort());
  }
  async _fetchTileCount(e2, t3) {
    return e2.numFeatures = await this._fetchCount(e2, t3), this._updateRatio(this._getListOfTiles()), e2.fetchStatus === c$2.REFETCHING ? c$2.REFETCH_NEEDED : c$2.FETCH_NEEDED;
  }
  async _fetchTile(e2, t3) {
    e2.fetchFailed = false;
    const s3 = this._maximumFeaturesForTile(e2);
    if (s3 <= 0)
      return e2.hasPreciseFeatureCount && 0 === e2.numFeatures || (e2.fetchFailed = true), A$2(e2);
    const i2 = this._getMaxRecordCount(e2), r2 = Math.ceil(s3 / i2);
    if (O$2(e2) || !this.context.capabilities.supportsMaxRecordCountFactor || e2.numFeatures <= s3 && r2 > b$4.MAX_MAX_RECORD_COUNT_FACTOR)
      return this._fetchPagedTile(e2, t3);
    const a2 = this._createQuery(e2);
    if (a2.maxRecordCountFactor = Math.ceil(s3 / i2), e2.isRefetching && e2.features && e2.features.length > 0) {
      const t4 = Math.ceil(e2.features.length / (1 - e2.emptyFeatureRatio) / i2);
      a2.maxRecordCountFactor = Math.max(t4 + 1, a2.maxRecordCountFactor);
    }
    const { features: o2, exceededTransferLimit: u2, fields: l2, missingAttributes: h3 } = await this._queryFeatures(a2, t3), d4 = u2 ? a2.maxRecordCountFactor >= b$4.MAX_MAX_RECORD_COUNT_FACTOR ? c$2.FULL : c$2.DONE : c$2.FULL;
    return await this._frameTask.schedule(() => {
      e2.featuresMissing = e2.hasPreciseFeatureCount && o2.length < e2.numFeatures || !!u2;
      const t4 = this._removeEmptyFeatures(o2);
      e2.setFeatures(o2, t4, N(l2), L$1(void 0, h3));
    }, t3), s$4(t3), this._invalidateCounts(), d4;
  }
  async _fetchCount(e2, t3) {
    return this.context.query.queryFeatureCount(this._createFeatureCountQuery(e2), { signal: t3 });
  }
  async _fetchPagedTile(e2, t3) {
    let s3, i2 = 0, r2 = 0, a2 = 0, o2 = this._maximumFeaturesForTile(e2) - a2;
    const u2 = this._getMaxRecordCount(e2);
    let l2, h3 = null;
    for (; ; ) {
      const d4 = this._createQuery(e2), c2 = this._setPagingParameters(d4, i2, o2, u2), { features: p2, exceededTransferLimit: f4, fields: _2, missingAttributes: m3 } = await this._queryFeatures(d4, t3);
      if (await this._frameTask.schedule(() => {
        c2 && (i2 += d4.num), a2 += p2.length, r2 += this._removeEmptyFeatures(p2), e2.featuresMissing = c2 && e2.hasPreciseFeatureCount && i2 < e2.numFeatures || !!f4, s3 = s3 ? s3.concat(p2) : p2, h3 = q$2(h3, _2), l2 = L$1(l2, m3), e2.setFeatures(s3, r2, h3, l2);
      }, t3), s$4(t3), this._invalidateCounts(), this._setDirty(), o2 = this._maximumFeaturesForTile(e2) - a2, !c2 || !f4 || o2 <= 0)
        return f4 ? c$2.DONE : c$2.FULL;
    }
  }
  _createFeatureCountQuery(e2) {
    const t3 = this._createQuery(e2);
    return this.context.capabilities.supportsCacheHint && (t3.resultType = void 0, t3.cacheHint = true), t3;
  }
  _createQuery(e2) {
    const t3 = this.context.createQuery(), s3 = e2.descriptor.extent;
    if (s3) {
      const e3 = this.context.tilingScheme.spatialReference;
      t3.geometry = c$4(s3, e3);
    }
    return this._setResolutionParams(t3, e2), this._useTileQuery(e2) ? t3.resultType = "tile" : this.context.capabilities.supportsCacheHint && (t3.cacheHint = true), t3;
  }
  _setPagingParameters(e2, t3, s3, i2) {
    return !!this.context.capabilities.supportsPagination && (e2.start = t3, s3 > 0 && this.context.capabilities.supportsMaxRecordCountFactor ? (e2.maxRecordCountFactor = Math.ceil(s3 / i2), e2.num = Math.min(e2.maxRecordCountFactor * i2, s3)) : e2.num = Math.min(i2), true);
  }
  _getEffectiveTileResolution(e2) {
    if (null == e2.descriptor.resolution)
      return null;
    const t3 = this.context.viewingMode === l$1.Global ? this.context.tilingScheme.resolutionAtLevel(3) : 1 / 0;
    return Math.min(e2.descriptor.resolution, t3) / this.lodFactor;
  }
  get _supportsResolution() {
    return this.context.capabilities.supportsMultipleResolutions && "point" !== this.context.geometryType;
  }
  _setResolutionParams(e2, t3) {
    if (!this._supportsResolution)
      return;
    const s3 = this._getEffectiveTileResolution(t3);
    null != s3 && (this.context.capabilities.supportsQuantization ? e2.quantizationParameters = new a$1({ mode: "view", originPosition: "upper-left", tolerance: s3, extent: this.context.fullExtent }) : "polyline" === this.context.geometryType && (e2.maxAllowableOffset = s3));
  }
  _removeEmptyFeatures(e2) {
    const t3 = e2.length;
    for (let s3 = 0; s3 < e2.length; ) {
      const t4 = e2[s3];
      k(t4.geometry) ? ++s3 : (e2[s3] = e2[e2.length - 1], --e2.length);
    }
    return t3 - e2.length;
  }
  _needsNumFeatures(e2) {
    return this.useTileCount && e2.needsFeatureCount && !O$2(e2);
  }
  _getMaxRecordCount(e2) {
    const { tileMaxRecordCount: t3, maxRecordCount: s3 } = this.context;
    return this._useTileQuery(e2) && null != t3 && t3 > 0 && this.context.capabilities.supportsResultType ? t3 : null != s3 && s3 > 0 ? s3 : S;
  }
  _useTileQuery(e2) {
    return (!O$2(e2) || !this.context.capabilities.supportsCacheHint) && this.context.capabilities.supportsResultType;
  }
  _handleRequest(e2, t3, s3, i2) {
    e2.fetchStatus = e2.needsRefetching ? c$2.REFETCHING : c$2.FETCHING, e2.requestController = s3;
    let r2 = false;
    t3.then((t4) => {
      e2.requestController = null, e2.fetchStatus = t4;
    }).catch((t4) => {
      e2.requestController === s3 && (e2.requestController = null, e2.fetchStatus = c$2.DONE), b$3(t4) ? r2 = true : i2(t4);
    }).then(() => {
      r2 || this._setDirty(), this._scheduleUpdated();
    });
  }
  _scheduleUpdated() {
    this.hasHandles("scheduleUpdated") || this.addHandles(v$2(() => {
      this.removeHandles("scheduleUpdated"), this._updated();
    }), "scheduleUpdated");
  }
  _showTile(e2) {
    if (null != e2.displayingFeatures && !e2.needsDisplayUpdate)
      return false;
    const t3 = e2.features;
    if (0 === e2.featureLimit || !t3) {
      const t4 = null != e2.displayingFeatures && e2.displayingFeatures.length > 0;
      return this._hideTileFeatures(e2), e2.displayingFeatures = [], t4;
    }
    const s3 = e2.descriptor.resolution, i2 = this._changes.updates, r2 = this._changes.adds, a2 = Math.min(e2.featureLimit, t3.length);
    e2.featureLimit = a2;
    for (let n2 = 0; n2 < a2; ++n2) {
      const e3 = t3[n2], a3 = I$3(e3, this._objectIdField), o2 = this._displayingFeatureReferences.get(a3);
      if (o2) {
        const t4 = o2.ref(e3, s3);
        t4.oldVersion !== t4.newVersion && (t4.oldVersion && i2.removes.push(t4.oldVersion), t4.newVersion && i2.adds.push(t4.newVersion));
      } else
        this._displayingFeatureReferences.set(a3, new this.FeatureReferenceClass(e3, s3)), r2.push(e3);
      this._numDisplayingFeatureReferences++;
    }
    return this._hideTileFeatures(e2), this._applyChanges(), e2.displayingFeatures = t3.slice(0, a2), true;
  }
  _hideTile(e2) {
    this._cancelFetchTile(e2), this._hideTileFeatures(e2);
  }
  _hideTileFeatures(e2) {
    if (null == e2.displayingFeatures)
      return;
    const t3 = this._changes.updates, s3 = this._changes.removes;
    for (const i2 of e2.displayingFeatures) {
      const r2 = I$3(i2, this._objectIdField), a2 = this._displayingFeatureReferences.get(r2);
      if (!a2)
        continue;
      const n2 = a2.unref(e2.descriptor.resolution);
      this._numDisplayingFeatureReferences--, n2 ? n2.oldVersion !== n2.newVersion && (null == n2.newVersion ? (this._displayingFeatureReferences.delete(r2), n2.oldVersion && s3.push(n2.oldVersion)) : (t3.adds.push(n2.newVersion), n2.oldVersion && t3.removes.push(n2.oldVersion))) : console.error("Hiding unreferenced feature");
    }
    this._applyChanges(), e2.displayingFeatures = null;
  }
  _applyChanges() {
    const e2 = this._changes.updates;
    e2.removes.length > 0 && (this.features.removeMany(e2.removes), e2.removes.length = 0), e2.adds.length > 0 && (this.features.addMany(e2.adds), e2.adds.length = 0);
    const t3 = this._changes.adds, s3 = this._changes.removes, i2 = Math.min(t3.length, s3.length);
    let r2 = 0;
    for (; r2 < i2; ) {
      const e3 = Math.min(r2 + z, i2);
      this.features.addMany(t3.slice(r2, e3)), this.features.removeMany(s3.slice(r2, e3)), r2 = e3;
    }
    t3.length > i2 && this.features.addMany(0 === r2 ? t3 : t3.slice(r2)), s3.length > i2 && this.features.removeMany(0 === r2 ? s3 : s3.slice(r2)), t3.length = 0, s3.length = 0;
  }
  _clearTile(e2) {
    if (this._hideTile(e2), e2.features && null != this.context.memoryCache) {
      const t3 = 16 + e2.estimatedSize;
      this.context.memoryCache.put(e2.id, e2.cache, t3);
    }
    e2.setFeatures(null, 0, null, void 0), this._invalidateCounts();
  }
  _invalidateCounts() {
    this.notifyChange("totalVertices"), this.notifyChange("totalFeatures"), this.notifyChange("memoryForUnusedFeatures");
  }
  _getListOfTiles() {
    return Array.from(this._featureTiles.values());
  }
  get storedFeatures() {
    return this._getListOfTiles().reduce((e2, t3) => e2 + (t3.features ? t3.features.length : 0), 0);
  }
  get missingTiles() {
    return Array.from(this._featureTiles.values()).reduce((e2, t3) => e2 + (t3.needsFetching || t3.isFetching ? 1 : 0), 0);
  }
  _maximumFeaturesForTile(e2) {
    const t3 = e2.hasPreciseFeatureCount ? e2.numFeatures : 1 / 0, s3 = e2.hasPreciseFeatureCount ? t3 : this.maximumNumberOfFeatures, i2 = this._fullRatio < 1 ? this._farRatio : 1;
    return Math.min(Math.ceil(s3 * i2 / (1 - e2.emptyFeatureRatio)), t3);
  }
  get test() {
    return { process: (e2) => this.runTask(e2), getFeatureTileById: (e2) => this._featureTiles.get(e2), forEachFeatureTile: (e2) => this._featureTiles.forEach(e2) };
  }
};
function O$2(e2) {
  return "dummy-tile-full-extent" === e2.id;
}
function U(e2) {
  let t3 = 0;
  for (const s3 of e2)
    s3.features && s3.features.length > 0 && s3.alive && (t3 = Math.max(t3, s3.descriptor.lij[0]));
  return t3;
}
function P$1(e2) {
  const t3 = e2.capabilities.query;
  return { supportsMultipleResolutions: I$2(e2), supportsPagination: !(!t3 || !t3.supportsPagination), supportsResultType: !(!t3 || !t3.supportsResultType), supportsCacheHint: !(!t3 || !t3.supportsCacheHint), supportsQuantization: !(!t3 || !t3.supportsQuantization), supportsQuantizationEditMode: !(!t3 || !t3.supportsQuantizationEditMode), supportsMaxRecordCountFactor: !(!t3 || !t3.supportsMaxRecordCountFactor), supportsFormatPBF: !(!t3 || !t3.supportsFormatPBF) };
}
function I$2(e2) {
  switch (e2.geometryType) {
    case "polyline":
      return true;
    case "polygon":
      return e2.capabilities && e2.capabilities.query && e2.capabilities.query.supportsQuantization;
    default:
      return false;
  }
}
function A$2(e2) {
  return e2.setFeatures([], 0, null, void 0), e2.featuresMissing = false, c$2.DONE;
}
function N(e2) {
  return null == e2 ? /* @__PURE__ */ new Set() : new Set(e2.map((e3) => e3.name));
}
function q$2(e2, t3) {
  if (null == e2 || null == t3)
    return N(t3);
  const s3 = /* @__PURE__ */ new Set();
  for (const { name: i2 } of t3)
    e2.has(i2) && s3.add(i2);
  return s3;
}
function L$1(e2, t3) {
  if (!t3?.length)
    return e2;
  e2 ??= /* @__PURE__ */ new Map();
  const s3 = () => /* @__PURE__ */ new Set();
  for (const { objectId: i2, attribute: a2 } of t3)
    r$2(e2, i2, s3).add(a2);
  return e2;
}
e$1([y({ constructOnly: true })], j.prototype, "features", void 0), e$1([y()], j.prototype, "tileDescriptors", void 0), e$1([y({ value: 1 / 0 })], j.prototype, "maximumNumberOfFeatures", null), e$1([y({ value: 1 })], j.prototype, "memoryFactor", null), e$1([y({ value: 1 })], j.prototype, "lodFactor", null), e$1([y()], j.prototype, "useTileCount", null), e$1([y({ readOnly: true })], j.prototype, "updating", null), e$1([y({ readOnly: true })], j.prototype, "dataUpdating", void 0), e$1([y({ readOnly: true })], j.prototype, "running", void 0), e$1([y({ readOnly: true })], j.prototype, "updatingTotal", void 0), e$1([y({ readOnly: true })], j.prototype, "updatingRemaining", void 0), e$1([y({ readOnly: true })], j.prototype, "expectedFeatureDiff", void 0), e$1([y({ readOnly: true })], j.prototype, "memoryForUnusedFeatures", null), e$1([y({ readOnly: true })], j.prototype, "maximumNumberOfFeaturesExceeded", void 0), e$1([y({ readOnly: true })], j.prototype, "totalVertices", null), e$1([y({ readOnly: true })], j.prototype, "totalFeatures", null), e$1([y({ readOnly: true })], j.prototype, "hasAllFeatures", null), e$1([y({ readOnly: true })], j.prototype, "hasFullGeometries", null), e$1([y()], j.prototype, "filterExtent", null), e$1([y({ constructOnly: true })], j.prototype, "context", void 0), e$1([y()], j.prototype, "_dirty", void 0), e$1([y()], j.prototype, "_suspended", void 0), e$1([y()], j.prototype, "_pendingEdits", void 0), e$1([y()], j.prototype, "_applyEditsTilesUpdated", void 0), e$1([y()], j.prototype, "_paused", null), e$1([y()], j.prototype, "_isFetching", void 0), j = e$1([c$3("esri.views.3d.layers.support.FeatureTileFetcher3D")], j);
const S = 2e3, Q = u$1(), H$2 = u$1(), V$1 = 6e5, z = 200;
const c$1 = [[0, 179, 255], [117, 62, 128], [0, 104, 255], [215, 189, 166], [32, 0, 193], [98, 162, 206], [102, 112, 129], [52, 125, 0], [142, 118, 246], [138, 83, 0], [92, 122, 255], [122, 55, 83], [0, 142, 255], [81, 40, 179], [0, 200, 244], [13, 24, 127], [0, 170, 147], [19, 58, 241], [22, 44, 35]];
class m2 {
  constructor(e2, i2, o2) {
    this._loadingGraphics = /* @__PURE__ */ new Map(), this._loadedGraphics = /* @__PURE__ */ new Map(), this._pendingGraphics = /* @__PURE__ */ new Map(), this._dataExtentGraphic = null, this._enabled = true, this._tileFetcher = e2, this._view = o2, this._tilingScheme = new v$3(i2), this._loadedSymbols = c$1.map((e3) => new h$3({ symbolLayers: new V$2([new h$4({ material: { color: [e3[0], e3[1], e3[2], 0.6] }, outline: { color: "black", size: 1 } })]) })), this._loadingSymbols = [new h$3({ symbolLayers: new V$2([new h$4({ material: { color: [200, 200, 200, 0.4] }, outline: { color: [30, 30, 30], size: 1 } })]) })], this._pendingSymbols = [new h$3({ symbolLayers: new V$2([new h$4({ material: { color: [100, 100, 100, 0.4] }, outline: { color: [30, 30, 30], size: 1 } })]) })], this._dataExtentSymbol = new h$3({ symbolLayers: new V$2([new h$4({ material: { color: [0, 0, 0, 0] }, outline: { color: "green", size: 4 } })]) });
  }
  destroy() {
    this.enabled = false;
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(e2) {
    this._enabled = e2, this.update();
  }
  update() {
    this._enabled ? (this._synchronizeMaps(this._loadingGraphics, { filter: (e2) => e2.isFetching, symbols: this._loadingSymbols }), this._synchronizeMaps(this._loadedGraphics, { filter: (e2) => !e2.isFetching, symbols: this._loadedSymbols }), this._synchronizeMaps(this._pendingGraphics, { filter: (e2) => !e2.isFetching, symbols: this._pendingSymbols }), this.showDataExtent(this._tileFetcher.filterExtent)) : (this._loadingGraphics.forEach((e2) => {
      this._view.graphics.removeMany(e2);
    }), this._loadingGraphics.clear(), this._loadedGraphics.forEach((e2) => {
      this._view.graphics.removeMany(e2);
    }), this._loadedGraphics.clear(), this._pendingGraphics.forEach((e2) => {
      this._view.graphics.removeMany(e2);
    }), this._pendingGraphics.clear(), this._dataExtentGraphic && (this._view.graphics.remove(this._dataExtentGraphic), this._dataExtentGraphic = null));
  }
  showDataExtent(t3) {
    if (this._dataExtentGraphic && (this._view.graphics.remove(this._dataExtentGraphic), this._dataExtentGraphic = null), null == t3)
      return;
    const s3 = j$1.fromExtent(t3);
    this._dataExtentGraphic = new c$5({ geometry: s3, symbol: this._dataExtentSymbol }), this._view.graphics.add(this._dataExtentGraphic);
  }
  _synchronizeMaps(i2, s3) {
    const r2 = [];
    i2.forEach((e2, t3) => {
      const i3 = this._tileFetcher.test.getFeatureTileById(t3);
      i3 && s3.filter(i3) || (this._view.graphics.removeMany(e2), r2.push(t3));
    }), r2.forEach((e2) => i2.delete(e2)), this._tileFetcher.test.forEachFeatureTile((r3) => {
      if (s3.filter(r3) && !i2.has(r3.id)) {
        const [h3, c2, m3] = r3.descriptor.lij;
        this._tilingScheme.ensureMaxLod(h3);
        const p$12 = this._tilingScheme.getExtentGeometry(h3, c2, m3), y2 = [new c$5({ geometry: p$12, symbol: s3.symbols[h3 % s3.symbols.length] }), new c$5({ geometry: p$12.center, symbol: new w$1({ verticalOffset: new p({ screenLength: 40 / 0.75 }), callout: new d$4({ color: "white", border: { color: "black" } }), symbolLayers: new V$2([new z$1({ text: `${h3}/${c2}/${m3}`, halo: { color: "white", size: 1 / 0.75 }, material: { color: "black" }, size: 16 })]) }) })];
        i2.set(r3.id, y2), this._view.graphics.addMany(y2);
      }
    });
  }
}
let T$1 = class T extends n$2(S$1) {
  get dataUpdating() {
    return this._tileFetcher?.dataUpdating ?? false;
  }
  set extent(e2) {
    if (null != e2 && !e2.spatialReference.equals(this.layerView.view.spatialReference))
      return void s$2.getLogger(this).error("#extent=", "extent needs to be in the same spatial reference as the view");
    const t3 = this._get("extent");
    if (t3 === e2)
      return;
    if (null != t3 && e2 && t3.equals(e2))
      return;
    const i2 = null != e2 ? e2.clone() : null;
    this._set("extent", i2);
  }
  get updating() {
    return !!(null != this._tileFetcher && this._tileFetcher.updating || null != this._fetchDataInfoPromise || "tiles" === this.mode && this.layerView.view.featureTiles && this.layerView.view.featureTiles.updating || this._updatingHandles && this._updatingHandles.updating);
  }
  get updatingTotal() {
    return this.updating && null != this._tileFetcher ? this._tileFetcher.updatingTotal : 0;
  }
  get updatingRemaining() {
    return this.updating && null != this._tileFetcher ? this._tileFetcher.updatingRemaining : 0;
  }
  get expectedFeatureDiff() {
    return this.updating && null != this._tileFetcher ? this._tileFetcher.expectedFeatureDiff : 0;
  }
  get memoryForUnusedFeatures() {
    return null != this._tileFetcher ? this._tileFetcher.memoryForUnusedFeatures : 0;
  }
  get maximumNumberOfFeaturesExceeded() {
    return !(null == this._tileFetcher || !this._tileFetcher.maximumNumberOfFeaturesExceeded);
  }
  get maximumNumberOfFeatures() {
    return this.displayFeatureLimit?.maximumNumberOfFeatures ?? 0;
  }
  set maximumNumberOfFeatures(e2) {
    e2 !== this.maximumNumberOfFeatures && this._overrideIfSome("maximumNumberOfFeatures", e2);
  }
  get hasMaximumNumberOfFeaturesOverride() {
    return this._isOverridden("maximumNumberOfFeatures");
  }
  get hasAllFeatures() {
    return this.serviceDataCount === q$1.noServiceDataCount && "snapshot" === this.mode && this.hasAllFeaturesInView || this.serviceDataCount === this.graphics.length;
  }
  get hasAllFeaturesInView() {
    return this._tileFetcher?.hasAllFeatures ?? false;
  }
  get hasFullGeometries() {
    return this._tileFetcher?.hasFullGeometries ?? false;
  }
  get mode() {
    const e2 = this.layerView.layer;
    if ("feature" === e2.type && null != e2.infoFor3D)
      return "snapshot";
    if (this._forceTilesMode)
      return "tiles";
    const t3 = this.layerView.view;
    if (false === t3.qualitySettings?.graphics3D?.snapshotAvailable || this.serviceDataCount === q$1.noServiceDataCount || this._snapshotLimitExceeded || this.maximumNumberOfFeaturesExceeded || t3.quality < 1)
      return "tiles";
    const i2 = t3 && t3.featureTiles, r2 = i2 && i2.tilingScheme;
    if (e2 && e2.minScale && this.serviceDataExtent && r2) {
      const t4 = this._approximateExtentSizeAtScale(e2.minScale, r2);
      if ((this.serviceDataExtent.width / t4 + this.serviceDataExtent.height / t4) / 2 > q$1.maxSnapshotMinScaleFactor)
        return "tiles";
    }
    return !this.maximumNumberOfFeatures || this.serviceDataCount <= this.maximumNumberOfFeatures ? "snapshot" : "tiles";
  }
  get maxTotalSnapshotVertices() {
    const e2 = this._get("maxTotalSnapshotVertices") || 0, t3 = "snapshot" === this.mode && this._tileFetcher?.totalVertices || 0;
    return Math.max(e2, t3);
  }
  _approximateExtentSizeAtScale(e2, t3) {
    const i2 = this.layerView.view, r2 = Math.ceil((i2.width / t3.pixelSize + i2.height / t3.pixelSize) / 2), s3 = t3.levels[0];
    return r2 * ((s3.tileSize[0] / (s3.scale / e2) + s3.tileSize[1] / (s3.scale / e2)) / 2);
  }
  get tileDescriptors() {
    const e2 = this.layerView.view.featureTiles;
    return "snapshot" === this.mode ? new V$2([{ id: "dummy-tile-full-extent", lij: [0, 0, 0] }]) : e2 ? e2.tiles : new V$2();
  }
  get test() {
    return { fetchDataInfoPromise: this._fetchDataInfoPromise, tileFetcher: this._tileFetcher };
  }
  constructor(e2) {
    super(e2), this.type = "feature-tile-3d", this._updatingHandles = new h$5(), this.serviceDataExtent = null, this.serviceDataCount = q$1.noServiceDataCount, this._snapshotLimitExceeded = false, this.displayFeatureLimit = null, this._forceTilesMode = false, this._suspended = false, this._tileFetcher = null, this._fetchDataInfoPromise = null, this._fetchDataInfoAbortController = null, this._lifeCycleAbortController = new AbortController();
  }
  initialize() {
    this._updatingHandles.add(() => this.displayFeatureLimit, (e2) => this._updatingHandles.addPromise(this._updateSnapshotLimit(e2, null, this._lifeCycleAbortController.signal))), this._updatingHandles.add(() => this.mode, () => this._modeChanged(), P$2), this._updatingHandles.add(() => this.mode, (e2, t3) => {
      "tiles" === e2 && "snapshot" === t3 && (this._forceTilesMode = true);
    }, P$2), this.addResolvingPromise(Promise.resolve().then(() => this._verifyCapabilities()).then(() => this._updatingHandles.addPromise(this._fetchServiceDataInfo())).then(() => this._initializeTileFetcher()));
  }
  _verifyCapabilities() {
    const e2 = this.layerView.layer;
    if ("ogc-feature" !== e2.type && !O$3(e2)?.operations.supportsQuery)
      throw new s$5("graphicscontroller:query-capability-required", "Service requires query capabilities to be used as a feature layer", { layer: e2 });
  }
  destroy() {
    this._cancelFetchServiceDataInfo(), this._tileFetcher = u$2(this._tileFetcher), this._tilesHandle = l$2(this._tilesHandle), this._lifeCycleAbortController = e$2(this._lifeCycleAbortController), this._updatingHandles.destroy(), this._set("_updatingHandles", null);
  }
  suspend() {
    this._suspended || (this._suspended = true, null != this._tileFetcher && this._tileFetcher.suspend());
  }
  resume() {
    this._suspended && (this._suspended = false, null != this._tileFetcher && this._tileFetcher.resume());
  }
  restart() {
    const e2 = () => {
      null != this._tileFetcher && this._tileFetcher.restart();
    };
    this._updatingHandles.addPromise(this._fetchServiceDataInfo().then(e2, e2));
  }
  refetch() {
    this._refetch({ resetForceTilesMode: false });
  }
  getMissingAttributesForFeature(e2) {
    return this._tileFetcher?.getMissingAttributesForFeature(e2);
  }
  _refetch(e2) {
    const t3 = () => {
      null != this._tileFetcher && (e2.resetForceTilesMode && (this._forceTilesMode = false), this._tileFetcher.refetch());
    };
    this._updatingHandles.addPromise(this._fetchServiceDataInfo().then(t3, t3));
  }
  _initializeTileFetcher() {
    const e2 = this.layerView.view;
    if (!e2)
      return;
    const t3 = w$2(() => e2.featureTiles?.tilingScheme, this._lifeCycleAbortController.signal);
    this._updatingHandles.addPromise(t3), t3.then(() => {
      const { layerView: e3, tileDescriptors: t4 } = this, i2 = e3.layer, r2 = new j({ context: this.context, filterExtent: this.extent, tileDescriptors: t4, features: this.graphics });
      this._tileFetcher = r2, this._suspended ? r2.suspend() : r2.resume();
      const s3 = this.layerView.view;
      s3 && this.addHandles(d$5(() => s3.quality, (e4) => r2.memoryFactor = e4, A$3));
      const a2 = "polygon" === this.context.geometryType ? "polygonLodFactor" : "polyline" === this.context.geometryType ? "polylineLodFactor" : null;
      a2 && this.addHandles(d$5(() => this.layerView.view?.qualitySettings?.graphics3D?.[a2], (e4) => r2.lodFactor = e4 || 1, P$2));
      const o2 = (e4) => {
        r2.maximumNumberOfFeatures = e4, r2.useTileCount = this.serviceDataCount > e4;
      }, l2 = (e4) => {
        r2.useTileCount = e4 > this.maximumNumberOfFeatures;
      };
      "ogc-feature" !== i2.type && this._updatingHandles.add(() => i2.createQueryVersion, () => this._dataFilterChanged()), this._updatingHandles.add(() => e3.availableFields, (e4, t5) => this._availableFieldsChanged(t5, e4)), this._updatingHandles.add(() => e3.requiredFields, (e4, t5) => this._requiredFieldsChanged(t5, e4)), "customParameters" in i2 && this._updatingHandles.add(() => i2.customParameters, () => this.restart()), this.addHandles([i2.on("apply-edits", (e4) => this._applyEdits(e4)), d$5(() => this.extent, (e4) => r2.filterExtent = e4, C), d$5(() => this.tileDescriptors, (e4) => r2.tileDescriptors = e4, C), d$5(() => this.maximumNumberOfFeatures, o2, A$3), d$5(() => this.serviceDataCount, l2, A$3), d$5(() => t$3.FEATURE_TILE_FETCH_SHOW_TILES, (e4) => {
        e4 && r2 && !r2.debugger ? (r2.debugger = new m2(r2, s3.featureTiles.tilingScheme.toTileInfo(), s3), r2.debugger.update()) : !e4 && this._tileFetcher && r2.debugger && (r2.debugger.destroy(), r2.debugger = null);
      }, A$3)]), this._supportsExceedsLimitQuery || this._updatingHandles.add(() => this.maxTotalSnapshotVertices, () => this._updatingHandles.addPromise(this._updateSnapshotLimit(this.displayFeatureLimit, null, this._lifeCycleAbortController.signal)));
    }).catch(() => {
    });
  }
  _modeChanged() {
    switch (this.mode) {
      case "tiles":
        this._tilesHandle || (this._tilesHandle = this.layerView.view.featureTiles.addClient());
        break;
      default:
        s$2.getLogger(this).warn("Unhandled feature layer mode " + this.mode);
      case "snapshot":
        null != this._tilesHandle && (this._tilesHandle.remove(), this._tilesHandle = null);
    }
  }
  _dataFilterChanged() {
    this._set("maxTotalSnapshotVertices", 0), this.notifyChange("maxTotalSnapshotVertices"), this._refetch({ resetForceTilesMode: true });
  }
  _applyEdits(e2) {
    null != this._tileFetcher && this._tileFetcher.applyEdits(e2).then((e3) => {
      if (e3) {
        if (!this._lifeCycleAbortController)
          throw u();
        e3.exceededTransferLimit ? this.layerView.layer.refresh() : (e3.deletedFeatures.length || e3.updatedFeatures.length || e3.addedFeatures.length) && this._updatingHandles.addPromise(this._updateServiceDataExtent(this._lifeCycleAbortController.signal));
      }
    }).catch((e3) => {
      if (!b$3(e3))
        throw e3;
    });
  }
  _availableFieldsChanged(e2, t3) {
    null != this._tileFetcher && A$1(this._tileFetcher.availableFields, t3) && this._refetch({ resetForceTilesMode: false });
  }
  _requiredFieldsChanged(e2, t3) {
    null != this._tileFetcher && A$1(this._tileFetcher.availableFields, t3) && this.restart();
  }
  _createVertexLimitExceededQuery(e2) {
    const t3 = this.layerView.layer, i2 = t3.createQuery();
    return i2.returnGeometry = false, i2.outStatistics = [new m$3({ statisticType: "exceedslimit", maxVertexCount: e2, outStatisticFieldName: "exceedslimit", maxPointCount: 1e8, maxRecordCount: 1e8 })], t3.capabilities?.query.supportsCacheHint && (i2.cacheHint = true), i2;
  }
  _createDataInfoQuery() {
    const e2 = this.layerView.layer, t3 = e2.createQuery();
    return t3.returnGeometry = false, t3.outSpatialReference = this.layerView.view.spatialReference, e2.capabilities?.query.supportsCacheHint && (t3.cacheHint = true), t3;
  }
  _fullExtentIsAccurate() {
    const e2 = this.layerView.layer;
    if ("definitionExpression" in e2 && e2.definitionExpression)
      return false;
    switch (e2.type) {
      case "feature":
      case "oriented-imagery":
        return w(e2.url);
      case "csv":
      case "geojson":
      case "ogc-feature":
      case "wfs":
        return true;
      default:
        return;
    }
  }
  async _updateServiceDataExtent(e2) {
    try {
      await this._tryUpdateServiceDataExtent(e2);
    } catch (t3) {
      b$3(t3) || this._set("serviceDataExtent", a$2(this.layerView.fullExtentInLocalViewSpatialReference));
    }
  }
  async _tryUpdateServiceDataExtent(e2) {
    const t3 = this.layerView, i2 = t3.layer, r2 = i2.capabilities?.query.supportsExtent ?? false, s3 = a$2(t3.fullExtentInLocalViewSpatialReference), o2 = i2.fullExtent, l2 = this._fullExtentIsAccurate(), n2 = this.serviceDataCount;
    if (r2 && n2 <= q$1.maxFeatureCountForExtent && (!s3 || !l2) && "queryExtent" in i2) {
      const t4 = this._createDataInfoQuery(), r3 = await i2.queryExtent(t4, { timeout: q$1.queryExtentTimeout, signal: e2 });
      this._set("serviceDataExtent", r3.extent);
    } else if (s3)
      this._set("serviceDataExtent", s3);
    else if (null != o2) {
      const r3 = "portalItem" in i2 ? i2.portalItem : null, s4 = await a$3(o2, t3.view.spatialReference, r3, e2);
      this._set("serviceDataExtent", s4);
    } else
      this._set("serviceDataExtent", null);
  }
  async _updateServiceDataCount(e2) {
    const t3 = this.layerView.layer;
    if (!("queryFeatureCount" in t3) || !has("featurelayer-snapshot-enabled"))
      return void this._set("serviceDataCount", q$1.noServiceDataCount);
    const r2 = await _$1(t3.queryFeatureCount(this._createDataInfoQuery(), { timeout: q$1.queryStatisticsTimeout, signal: e2 }));
    if (true === r2.ok)
      this._set("serviceDataCount", r2.value);
    else {
      if (b$3(r2.error))
        throw r2.error;
      this._set("serviceDataCount", q$1.noServiceDataCount);
    }
  }
  get _supportsExceedsLimitQuery() {
    const e2 = this.layerView.layer;
    return null != e2.capabilities && e2.capabilities.operations && e2.capabilities.operations.supportsExceedsLimitStatistics;
  }
  get _minimumNumberOfVerticesForGeometry() {
    switch (this.layerView.layer.geometryType) {
      case "point":
      case "multipoint":
        return 1;
      case "polygon":
        return 4;
      case "polyline":
        return 2;
      case "multipatch":
      case "mesh":
        return 3;
      default:
        return 0;
    }
  }
  async _updateSnapshotLimit(e2, t3, r2) {
    if (null == e2?.averageSymbolComplexity)
      return void (this._snapshotLimitExceeded = false);
    const { maximumTotalNumberOfVertices: s3, averageSymbolComplexity: a2 } = e2, { verticesPerFeature: o2, verticesPerCoordinate: l2 } = a2, n2 = o2 <= 0, u2 = this._minimumNumberOfVerticesForGeometry > 1;
    if (!n2 && !u2)
      return void (this._snapshotLimitExceeded = false);
    0 !== o2 && null != t3 && await t3;
    const h3 = Math.min(s3, I$1), c2 = this.serviceDataCount, p2 = c2 !== q$1.noServiceDataCount;
    let m3 = p2 ? Math.ceil((h3 - c2 * o2) / (l2 || 1)) : Math.ceil(h3 / (l2 || 1));
    if (u2 && (m3 = Math.min(m3, L)), p2 && this._minimumNumberOfVerticesForGeometry * c2 > m3)
      return void (this._snapshotLimitExceeded = true);
    if (!this._supportsExceedsLimitQuery || !has("featurelayer-snapshot-enabled"))
      return void (this._snapshotLimitExceeded = this.maxTotalSnapshotVertices > m3);
    const f4 = await _$1(this.layerView.layer.queryFeatures(this._createVertexLimitExceededQuery(m3), { timeout: q$1.queryStatisticsTimeout, signal: r2 }));
    if (false === f4.ok) {
      if (b$3(f4.error))
        throw f4.error;
      return void (this._snapshotLimitExceeded = false);
    }
    const y2 = f4.value.features[0];
    this._snapshotLimitExceeded = !!y2?.attributes && !!y2.attributes.exceedslimit;
  }
  async _fetchServiceDataInfo() {
    this._cancelFetchServiceDataInfo();
    let e2 = new AbortController();
    const t3 = e2.signal, i2 = this._updateServiceDataCount(t3), r2 = Promise.allSettled([i2, this._updateSnapshotLimit(this.displayFeatureLimit, i2, t3)]), s3 = r2.then(() => this._updateServiceDataExtent(t3)).catch((e3) => {
      b$3(e3) || s$2.getLogger(this).error("#fetchServiceDataInfo()", e3);
    }).then(() => {
      s3 === this._fetchDataInfoPromise && (this._fetchDataInfoPromise = null, this._fetchDataInfoAbortController = null), e2 = null;
    });
    return e2 && (this._fetchDataInfoPromise = s3), this._fetchDataInfoAbortController = e2, r2.then(() => {
    }, () => {
    });
  }
  _cancelFetchServiceDataInfo() {
    const e2 = this._fetchDataInfoAbortController;
    e2 && (this._fetchDataInfoAbortController = null, this._fetchDataInfoPromise = null, e2.abort());
  }
  get performanceInfo() {
    return { storedFeatures: this._tileFetcher?.storedFeatures ?? 0, totalFeatures: this._tileFetcher?.totalFeatures ?? 0, totalVertices: this._tileFetcher?.totalVertices ?? 0, missingTiles: this._tileFetcher?.missingTiles ?? 0 };
  }
};
e$1([y({ readOnly: true })], T$1.prototype, "type", void 0), e$1([y({ constructOnly: true })], T$1.prototype, "graphics", void 0), e$1([y({ constructOnly: true })], T$1.prototype, "layerView", void 0), e$1([y({ constructOnly: true })], T$1.prototype, "context", void 0), e$1([y({ readOnly: true })], T$1.prototype, "dataUpdating", null), e$1([y()], T$1.prototype, "extent", null), e$1([y()], T$1.prototype, "updating", null), e$1([y({ readOnly: true })], T$1.prototype, "_updatingHandles", void 0), e$1([y()], T$1.prototype, "updatingTotal", null), e$1([y()], T$1.prototype, "updatingRemaining", null), e$1([y()], T$1.prototype, "expectedFeatureDiff", null), e$1([y()], T$1.prototype, "memoryForUnusedFeatures", null), e$1([y()], T$1.prototype, "maximumNumberOfFeaturesExceeded", null), e$1([y({ readOnly: true })], T$1.prototype, "serviceDataExtent", void 0), e$1([y({ readOnly: true })], T$1.prototype, "serviceDataCount", void 0), e$1([y()], T$1.prototype, "_snapshotLimitExceeded", void 0), e$1([y()], T$1.prototype, "displayFeatureLimit", void 0), e$1([y({ type: Number })], T$1.prototype, "maximumNumberOfFeatures", null), e$1([y({ readOnly: true })], T$1.prototype, "hasAllFeatures", null), e$1([y({ readOnly: true })], T$1.prototype, "hasAllFeaturesInView", null), e$1([y({ readOnly: true })], T$1.prototype, "hasFullGeometries", null), e$1([y()], T$1.prototype, "_forceTilesMode", void 0), e$1([y({ readOnly: true })], T$1.prototype, "mode", null), e$1([y({ readOnly: true })], T$1.prototype, "maxTotalSnapshotVertices", null), e$1([y({ readOnly: true })], T$1.prototype, "tileDescriptors", null), e$1([y()], T$1.prototype, "_tileFetcher", void 0), e$1([y()], T$1.prototype, "_fetchDataInfoPromise", void 0), T$1 = e$1([c$3("esri.layers.graphics.controllers.FeatureTileController3D")], T$1);
const V = 1e4, I$1 = 1e6, H$1 = 12e3, O$1 = 1e4, L = 5e6;
function A$1(e2, t3) {
  if (!t3)
    return false;
  for (const i2 of t3)
    if (!e2.has(i2))
      return true;
  return false;
}
var q$1;
!function(e2) {
  function t3() {
    e2.maxFeatureCountForExtent = V, e2.queryStatisticsTimeout = H$1, e2.queryExtentTimeout = O$1;
  }
  e2.noServiceDataCount = 1 / 0, e2.maxSnapshotMinScaleFactor = 5, e2.reset = t3;
}(q$1 || (q$1 = {})), q$1.reset();
function n(n2, t3, e2) {
  if (!e2 || null == t3)
    return null;
  if (!n2)
    return r(t3, e2);
  const o2 = n2.get(e2);
  return o2 ? t3[o2.name] : null;
}
function r(n2, r2) {
  const t3 = r2.toLowerCase();
  for (const e2 in n2)
    if (e2.toLowerCase() === t3)
      return n2[e2];
  return null;
}
const c = $$1;
let l = class extends S$1 {
  get layer() {
    return this.context.layer;
  }
  get spatialReference() {
    return this.context.spatialReference;
  }
  get _queryGeometryType() {
    switch (this.layer.geometryType) {
      case "multipoint":
      case "point":
      case "polygon":
      case "polyline":
        return this.layer.geometryType;
      case "mesh":
        return "polygon";
      default:
        return;
    }
  }
  get defaultQueryJSON() {
    return new b$4({ outSpatialReference: this.spatialReference }).toJSON();
  }
  get _dataQueryEngine() {
    return this._ensureDataQueryEngine();
  }
  constructor(e2) {
    super(e2), this._dataQueryEngineInstance = null;
  }
  destroy() {
    this.clear();
  }
  clear() {
    return !!this._dataQueryEngineInstance && (this._dataQueryEngineInstance.destroy(), this._dataQueryEngineInstance = null, true);
  }
  async executeQueryForIdSet(e2, t3, r2) {
    return this._dataQueryEngine.executeQueryForIdSet(this._ensureQueryJSON(e2, t3), r2);
  }
  async executeQueryForCount(e2, t3) {
    return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e2), t3);
  }
  async executeQueryForExtent(e2, t3) {
    const { count: r2, extent: s3 } = await this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e2), t3);
    return { count: r2, extent: M$1.fromJSON(s3) };
  }
  async executeQueryForIds(e2, t3) {
    return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e2), t3);
  }
  async executeQueryForLatestObservations(e2, t3) {
    const r2 = await this._dataQueryEngine.executeQueryForLatestObservations(this._ensureQueryJSON(e2), t3), s3 = d$6.fromJSON(r2);
    return s3.features.forEach((e3) => {
      e3.layer = this.layer, e3.sourceLayer = this.layer;
    }), s3;
  }
  async executeQuery(e2, t3) {
    const r2 = await this._dataQueryEngine.executeQuery(this._ensureQueryJSON(e2), t3), s3 = d$6.fromJSON(r2);
    return s3.features.forEach((e3) => {
      e3.layer = this.layer, e3.sourceLayer = this.layer;
    }), s3;
  }
  _ensureQueryJSON(e2, t3) {
    let r2 = this.defaultQueryJSON;
    if (null != e2 && ("outSpatialReference" in e2 && !e2.outSpatialReference && (e2.outSpatialReference = this.spatialReference), r2 = e2.toJSON()), null != t3) {
      const e3 = t3.geometries.map((e4) => e4.toJSON()).reduce((e4, t4) => (e4.rings = e4.rings.concat(t4.rings), e4));
      r2 = { ...r2, sceneFilter: { ...t3, geometry: e3 } };
    }
    return r2;
  }
  _ensureDataQueryEngine() {
    if (this._dataQueryEngineInstance)
      return this._dataQueryEngineInstance;
    const e2 = "timeInfo" in this.layer && this.layer.timeInfo?.toJSON() || null, t3 = this.layer.objectIdField, r2 = o$2.toJSON(this._queryGeometryType), s3 = this.layer.fieldsIndex?.toJSON() || new Z$1([]), n2 = this.priority, o2 = this.spatialReference.toJSON(), { hasZ: u2, hasM: i2, featureStore: l2, scheduler: p2 } = this.context;
    return this._dataQueryEngineInstance = new c({ hasZ: u2, hasM: i2, geometryType: r2, fieldsIndex: s3, timeInfo: e2, spatialReference: o2, objectIdField: t3, featureStore: l2, scheduler: p2, priority: n2 }), this._dataQueryEngineInstance;
  }
};
e$1([y({ constructOnly: true })], l.prototype, "context", void 0), e$1([y({ constructOnly: true })], l.prototype, "priority", void 0), e$1([y()], l.prototype, "layer", null), e$1([y()], l.prototype, "spatialReference", null), e$1([y()], l.prototype, "_queryGeometryType", null), e$1([y()], l.prototype, "defaultQueryJSON", null), l = e$1([c$3("esri.views.3d.layers.graphics.QueryEngine")], l);
let f$2 = class f extends S$1 {
  constructor(e2) {
    super(e2), this._updateTask = null, this._frameTask = null, this._queryEngine = null, this._updateRequested = true, this._updatingHandles = new h$5(), this._updateVisibility = async (e3) => {
      if (null == this._compositedFeatureFilter && null == this._sceneFilter || 0 === this.context.getFeatureCount())
        return this._frameTask.schedule(() => this.clear(), e3);
      try {
        const t3 = await this._queryEngine.executeQueryForIdSet(this._compositedFeatureFilter, this._sceneFilter, e3);
        return this._frameTask.schedule(() => {
          this.context.updateFeatureVisibilities((e4) => t3.has(e4));
        }, e3);
      } catch (t3) {
        return a$4(t3), s$2.getLogger(this).warn(`FeatureFilter query failed: ${t3}`, { error: t3 }), this._frameTask.schedule(() => {
          this.context.setAllFeaturesVisibility(true);
        }, e3);
      }
    };
  }
  initialize() {
    const e2 = I$4.FILTER_VISIBILITY, { layer: t3, view: r2 } = this._layerView, { featureStore: i2 } = this.context, s3 = "hasZ" in this._layerView && this._layerView.hasZ, l$12 = "hasM" in this._layerView && this._layerView.hasM;
    this._queryEngine = new l({ context: { spatialReference: r2.spatialReference, layer: t3, scheduler: r2.resourceController.scheduler, featureStore: i2, hasM: l$12, hasZ: s3 }, priority: e2 }), this._frameTask = this._layerView.view.resourceController.scheduler.registerTask(e2, this), this._updatingHandles.add(() => [this._compositedFeatureFilter, this._sceneFilter], () => this.reapply(), P$2);
  }
  destroy() {
    this._updateRequested = false, this._updatingHandles.destroy(), this.clear(), this._updateTask = e$2(this._updateTask), this._frameTask = l$2(this._frameTask), this._queryEngine = u$2(this._queryEngine), this._set("context", null);
  }
  get updating() {
    return this.running || this._updatingHandles.updating || null != this._updateTask && !this._updateTask.finished;
  }
  get running() {
    return this._updateRequested || this._frameTask.updating;
  }
  get defaultVisibility() {
    return null == this._compositedFeatureFilter && null == this._sceneFilter;
  }
  get _featureFilter() {
    return "filter" in this._layerView ? this._layerView.filter : null;
  }
  get _sceneFilter() {
    return "layerFilter" in this._layerView ? this._layerView.layerFilter : null;
  }
  get _floorFilter() {
    return o$3(this._layerView);
  }
  get _timeExtent() {
    return "timeExtent" in this._layerView ? this._layerView.timeExtent : null;
  }
  get _compositedFeatureFilter() {
    const { _featureFilter: e2, _timeExtent: t3, _floorFilter: r2 } = this;
    if (null == t3 && null == r2)
      return e2;
    const i2 = null != e2 ? e2.clone() : new d$7();
    if (null != t3 && (i2.timeExtent = null != i2.timeExtent ? i2.timeExtent.intersection(t3) : t3), null != r2) {
      const e3 = null == i2.where || "" === i2.where;
      i2.where = e3 ? r2 : `(${i2.where}) AND (${r2})`;
    }
    return i2;
  }
  get _layerView() {
    return this.context.layerView;
  }
  reapply() {
    this._updateRequested = true;
  }
  clear() {
    this._queryEngine.clear(), this.context.clearFeaturesVisibility();
  }
  runTask(e2) {
    if (this._updateRequested && (this._updateTask = e$2(this._updateTask), this._updateTask = d$8(this._updateVisibility), this._updateRequested = false, e2.madeProgress()), this._frameTask.processQueue(e2), !e2.hasProgressed)
      return o$4;
  }
};
e$1([y({ constructOnly: true })], f$2.prototype, "context", void 0), e$1([y()], f$2.prototype, "updating", null), e$1([y()], f$2.prototype, "running", null), e$1([y()], f$2.prototype, "defaultVisibility", null), e$1([y()], f$2.prototype, "_featureFilter", null), e$1([y()], f$2.prototype, "_sceneFilter", null), e$1([y()], f$2.prototype, "_floorFilter", null), e$1([y()], f$2.prototype, "_timeExtent", null), e$1([y()], f$2.prototype, "_compositedFeatureFilter", null), e$1([y()], f$2.prototype, "_layerView", null), e$1([y()], f$2.prototype, "_updateTask", void 0), e$1([y()], f$2.prototype, "_updateRequested", void 0), f$2 = e$1([c$3("esri.views.3d.layers.support.FeatureVisibilityFilter")], f$2);
let P = class extends S$1 {
  constructor(e2) {
    super(e2), this.type = "graphics-3d", this._randomRotationRenderers = null, this._updatingHandles = new h$5(), this.elevationFeatureExpressionEnabled = false, this.scaleVisibilityEnabled = false, this.filterVisibilityEnabled = false, this.frustumVisibilityEnabled = false, this.elevationAlignmentEnabled = false, this.timeExtentEnabled = false, this.setUidToIdOnAdd = true, this.dataExtent = null, this.drapeSourceType = e$3.Features, this.preferredUpdatePolicy = C$1.ASYNC, this._suspendResumeExtent = null;
  }
  initialize() {
    const e2 = this.owner, t3 = (this.filterVisibilityEnabled || this.timeExtentEnabled) && "multipatch" !== e2.layer.geometryType, i2 = new ke({ owner: this, layer: this.layer, preferredUpdatePolicy: this.preferredUpdatePolicy, elevationFeatureExpressionEnabled: this.elevationFeatureExpressionEnabled, graphicSymbolSupported: false, hasZ: e2.hasZ, hasM: e2.hasM, setUidToIdOnAdd: this.setUidToIdOnAdd, componentFactories: { deconflictor: (t4) => e2.view.deconflictor.addGraphicsOwner(t4), labeler: (t4, i3) => e2.view.labeler.addGraphicsOwner(t4, i3), elevationAlignment: this.elevationAlignmentEnabled ? (t4, i3) => new p$1({ graphicsCoreOwner: this, graphicsCore: t4, queryGraphicUIDsInExtent: i3, elevationProvider: e2.view.elevationProvider }) : null, scaleVisibility: this.scaleVisibilityEnabled ? (t4, i3) => new u$3({ graphicsCoreOwner: this, layer: this.layer, queryGraphicUIDsInExtent: i3, graphicsCore: t4, basemapTerrain: e2.view.basemapTerrain }) : null, filterVisibility: t3 ? (t4) => new f$2({ context: { layerView: e2, ...t4 } }) : null, objectStates: (e3) => new s$6(e3) } });
    this._set("graphicsCore", i2), this.frustumVisibilityEnabled && this._set("frustumVisibility", new u$4({ graphicsCoreOwner: this })), this.elevationAlignment && this._updatingHandles.add(() => this.layer.elevationInfo, (e3, t4) => {
      m$4(e3, t4) && this._updatingHandles.addPromise(this.graphicsCore.elevationInfoChange());
    }), this._updatingHandles.add(() => this.layer.labelsVisible, () => this.graphicsCore.updateVisibilityInfo()), this._updatingHandles.add(() => this.layer.labelingInfo, (e3, t4) => {
      m$4(e3, t4) && this.graphicsCore.updateLabelingInfo();
    }), this._updatingHandles.add(() => this.preferredUpdatePolicy, (e3) => this.graphicsCore.preferredUpdatePolicy = e3), this._set("initializePromise", this._initializeAsync()), this._updatingHandles.addPromise(this.initializePromise);
  }
  async _initializeAsync() {
    await y$1(this.graphicsCore.initializePromise);
    const e2 = this.owner;
    this._updatingHandles.add(() => this.renderer, (e3) => this._updatingHandles.addPromise(this.graphicsCore.rendererChange(e3))), this._updatingHandles.add(() => e2.fullOpacity, () => this.graphicsCore.opacityChange()), this._setupSuspendResumeExtent(), this.updateClippingExtent && (this._updatingHandles.add(() => e2.view.clippingArea, () => this._updateClippingExtent()), this._updateClippingExtent()), this.graphicsCore.startCreateGraphics(), this.graphicsCore.labelsEnabled && await y$1(this.graphicsCore.updateLabelingInfo());
  }
  destroy() {
    this._updatingHandles.destroy(), this._set("frustumVisibility", u$2(this.frustumVisibility)), this._set("graphicsCore", u$2(this.graphicsCore)), this._set("owner", null);
  }
  get layer() {
    return this.owner.layer;
  }
  get dataUpdating() {
    return this.graphicsCore?.dataUpdating ?? false;
  }
  get renderer() {
    const { renderer: e2, objectIdField: t3 } = this.layer;
    if (!e2 || !t3 || "heatmap" === e2.type || !e2.visualVariables)
      return e2;
    const i2 = e2.visualVariables.findIndex((e3) => "rotation" === e3.type && null != e3.valueExpression && e$4(e3.valueExpression) === t3 && (null == e3.axis || "heading" === e3.axis) && "geographic" === e3.rotationType);
    if (i2 < 0)
      return e2;
    const s3 = e2.clone();
    return s3.visualVariables.splice(i2, 1), this._randomRotationRenderers || (this._randomRotationRenderers = /* @__PURE__ */ new WeakMap()), this._randomRotationRenderers.set(s3, t3), s3;
  }
  get scaleVisibility() {
    return this.graphicsCore?.scaleVisibility;
  }
  get filterVisibility() {
    return this.graphicsCore?.filterVisibility;
  }
  get elevationAlignment() {
    return this.graphicsCore?.elevationAlignment;
  }
  get objectStates() {
    return this.graphicsCore?.objectStates;
  }
  get suspendResumeExtentMode() {
    return "suspendResumeExtentMode" in this.owner ? this.owner.suspendResumeExtentMode : "computed";
  }
  get scaleVisibilitySuspended() {
    return null != this.scaleVisibility && this.scaleVisibility.suspended;
  }
  get suspended() {
    return this.owner.suspended;
  }
  get legendEnabled() {
    return null == this.frustumVisibility || !this.frustumVisibility.suspended;
  }
  get suspendInfo() {
    const e2 = {};
    return this.scaleVisibilitySuspended && (e2.outsideScaleRange = true), null != this.frustumVisibility && this.frustumVisibility.suspended && (e2.outsideOfView = true), e2;
  }
  get updating() {
    return !!(this.graphicsCore?.updating || this.frustumVisibility?.updating || this._updatingHandles.updating);
  }
  get updatingRemaining() {
    return this.graphicsCore?.updatingRemaining ?? 0;
  }
  get featureStore() {
    return this.graphicsCore?.featureStore;
  }
  get view() {
    return this.owner.view;
  }
  get loadedGraphics() {
    return this.owner.loadedGraphics;
  }
  get fullOpacity() {
    return this.owner?.fullOpacity;
  }
  get filter() {
    return "filter" in this.owner ? this.owner.filter : null;
  }
  get slicePlaneEnabled() {
    return this.owner.slicePlaneEnabled;
  }
  get updatePolicy() {
    return this.owner.updatePolicy;
  }
  get featureSpatialReference() {
    return "featureSpatialReference" in this.owner ? this.owner.featureSpatialReference : this.owner.view.spatialReference;
  }
  get graphics3DGraphics() {
    return this.graphicsCore?.graphics3DGraphics;
  }
  get graphics3DGraphicsByObjectID() {
    return this.graphicsCore?.graphics3DGraphicsByObjectID;
  }
  get symbolUpdateType() {
    return this.graphicsCore?.symbolUpdateType;
  }
  get displayFeatureLimit() {
    const e2 = this.view.quality, t3 = this.graphicsCore?.displayFeatureLimit;
    if (1 === e2)
      return t3;
    const i2 = Math.ceil(t3.maximumNumberOfFeatures * e2);
    return new e$5(t3.maximumTotalNumberOfVertices, i2, t3.averageSymbolComplexity);
  }
  get usedMemory() {
    return this.graphicsCore?.usedMemory ?? 0;
  }
  get loadedFeatures() {
    return this.graphicsCore?.numberOfGraphics ?? 0;
  }
  get usedMemoryPerFeature() {
    return this.graphicsCore?.usedMemoryPerGraphic ?? 0;
  }
  get unprocessedMemoryEstimate() {
    return this.graphicsCore?.unprocessedMemoryEstimate ?? 0;
  }
  get performanceInfo() {
    return this.graphicsCore.performanceInfo;
  }
  maskOccludee(e2) {
    const { set: t3, handle: i2 } = this.objectStates.acquireSet(t$4.MaskOccludee, null);
    return this.objectStates.setUid(t3, e2.uid), i2;
  }
  highlight(e2, i2) {
    if (e2 instanceof b$4) {
      const { set: t3, handle: s3 } = this.objectStates.acquireSet(t$4.Highlight, i2);
      return this.owner.queryObjectIds(e2).then((e3) => this.objectStates.setObjectIds(t3, e3)), s3;
    }
    if ("number" == typeof e2 || "string" == typeof e2)
      return this.highlight([e2], i2);
    if (e2 instanceof c$5)
      return this.highlight([e2], i2);
    if ("toArray" in e2 && (e2 = e2.toArray()), Array.isArray(e2) && e2.length > 0) {
      if (e2[0] instanceof c$5) {
        const t3 = e2;
        if (null == n(this.layer.fieldsIndex, t3[0].attributes, i2)) {
          const e3 = t3.map((e4) => e4.uid), { set: i3, handle: s3 } = this.objectStates.acquireSet(t$4.Highlight, null);
          return this.objectStates.setUids(i3, e3), s3;
        }
        e2 = t3.map((e3) => n(this.layer.fieldsIndex, e3.attributes, i2));
      }
      if (Array.isArray(e2) && ("number" == typeof e2[0] || "string" == typeof e2[0])) {
        const t3 = e2, { set: s3, handle: r2 } = this.objectStates.acquireSet(t$4.Highlight, i2);
        return this.objectStates.setObjectIds(s3, t3), r2;
      }
    }
    return e$6();
  }
  resetObjectStates() {
    this.objectStates.reset();
  }
  whenGraphicBounds(e2, t3) {
    return this.graphicsCore?.whenGraphicBounds(e2, t3);
  }
  computeAttachmentOrigin(e2, t3) {
    return this.graphicsCore?.computeAttachmentOrigin(e2, t3);
  }
  notifyGraphicGeometryChanged(e2) {
    this.graphicsCore.notifyGraphicGeometryChanged(e2);
  }
  notifyGraphicVisibilityChanged(e2) {
    this.graphicsCore.notifyGraphicVisibilityChanged(e2);
  }
  getRenderingInfo(e2, t3, s3) {
    const r2 = i$2(e2, { renderer: t3, arcade: s3 });
    if (r2?.color) {
      const e3 = r2.color;
      e3[0] = e3[0] / 255, e3[1] = e3[1] / 255, e3[2] = e3[2] / 255;
    }
    if (null != r2 && null != t3 && this._randomRotationRenderers?.has(t3)) {
      const s4 = this._randomRotationRenderers.get(t3), n2 = e2.attributes[s4], a2 = new i$3(0);
      a2.updateFloatArray([n2]), a2.updateUint8Array([173]), r2.heading = 8381e-11 * a2.digest();
    }
    return r2;
  }
  getRenderingInfoAsync(e2, t3, i2, s3) {
    return l$3(e2, { renderer: t3, arcade: i2, ...s3 });
  }
  getSymbolLayerSize(e2, t3) {
    return this.graphicsCore?.getSymbolLayerSize(e2, t3);
  }
  setObjectIdVisibility(e2, t3) {
    this.graphicsCore?.setObjectIdVisibility(e2, t3);
  }
  refreshFilter() {
    null != this.filterVisibility && this.filterVisibility.reapply();
  }
  getGraphics3DGraphicByObjectId(e2) {
    return this.graphicsCore?.getGraphics3DGraphicByObjectId(e2);
  }
  _updateClippingExtent() {
    const e2 = this.owner.view.clippingArea;
    this.graphicsCore.setClippingExtent(e2, this.owner.view.spatialReference) && (this.updateClippingExtent(e2) || this.graphicsCore.recreateAllGraphics());
  }
  _setupSuspendResumeExtent() {
    (this.frustumVisibility || this.scaleVisibility) && this.addHandles(d$5(() => this.suspendResumeExtentMode, () => {
      switch (this.removeHandles(H), this.suspendResumeExtentMode) {
        case "computed":
          this.addHandles([d$5(() => this.graphicsCore.computedExtent, (e2) => this._updateSuspendResumeExtent(e2), P$2), d$5(() => this.graphicsCore.extentPadding, () => this._updateSuspendResumeExtent(this.graphicsCore.computedExtent))], H);
          break;
        case "data":
          this.addHandles([p$2(() => this.dataExtent, (e2) => this._updateSuspendResumeExtent(e2), P$2), d$5(() => this.graphicsCore.extentPadding, () => this._updateSuspendResumeExtent(this.dataExtent))], H);
          break;
        default:
          n$3(this.suspendResumeExtentMode);
      }
    }, P$2));
  }
  _updateSuspendResumeExtent(e2) {
    e2 ? this._suspendResumeExtentChanged(this._extentToSuspendResumeRect(e2, this._suspendResumeExtent)) : this._suspendResumeExtentChanged(null);
  }
  _extentToSuspendResumeRect(e2, t3) {
    const i2 = this.owner.view.spatialReference;
    if (!e2.spatialReference.equals(i2)) {
      if (!x$2(e2, i2))
        return;
      e2 = g$2(e2, i2);
    }
    return P$3(e2, t3, r$3, this.graphicsCore.extentPadding);
  }
  _suspendResumeExtentChanged(e2) {
    null != this.frustumVisibility && this.frustumVisibility.setExtent(e2), null != this.scaleVisibility && this.scaleVisibility.setExtent(e2);
  }
};
e$1([y()], P.prototype, "type", void 0), e$1([y({ constructOnly: true })], P.prototype, "owner", void 0), e$1([y()], P.prototype, "layer", null), e$1([y({ readOnly: true })], P.prototype, "dataUpdating", null), e$1([y()], P.prototype, "renderer", null), e$1([y({ constructOnly: true })], P.prototype, "updateClippingExtent", void 0), e$1([y({ constructOnly: true })], P.prototype, "elevationFeatureExpressionEnabled", void 0), e$1([y({ constructOnly: true })], P.prototype, "graphicsCore", void 0), e$1([y({ constructOnly: true })], P.prototype, "scaleVisibilityEnabled", void 0), e$1([y({ constructOnly: true })], P.prototype, "filterVisibilityEnabled", void 0), e$1([y({ constructOnly: true })], P.prototype, "frustumVisibilityEnabled", void 0), e$1([y({ constructOnly: true })], P.prototype, "elevationAlignmentEnabled", void 0), e$1([y({ constructOnly: true })], P.prototype, "timeExtentEnabled", void 0), e$1([y({ constructOnly: true })], P.prototype, "setUidToIdOnAdd", void 0), e$1([y()], P.prototype, "scaleVisibility", null), e$1([y()], P.prototype, "filterVisibility", null), e$1([y()], P.prototype, "elevationAlignment", null), e$1([y({ constructOnly: true })], P.prototype, "frustumVisibility", void 0), e$1([y()], P.prototype, "objectStates", null), e$1([y()], P.prototype, "initializePromise", void 0), e$1([y()], P.prototype, "suspendResumeExtentMode", null), e$1([y()], P.prototype, "dataExtent", void 0), e$1([y()], P.prototype, "scaleVisibilitySuspended", null), e$1([y()], P.prototype, "suspended", null), e$1([y()], P.prototype, "legendEnabled", null), e$1([y()], P.prototype, "suspendInfo", null), e$1([y()], P.prototype, "updating", null), e$1([y()], P.prototype, "updatingRemaining", null), e$1([y()], P.prototype, "featureStore", null), e$1([y()], P.prototype, "view", null), e$1([y()], P.prototype, "loadedGraphics", null), e$1([y()], P.prototype, "fullOpacity", null), e$1([y()], P.prototype, "filter", null), e$1([y()], P.prototype, "slicePlaneEnabled", null), e$1([y()], P.prototype, "drapeSourceType", void 0), e$1([y()], P.prototype, "updatePolicy", null), e$1([y()], P.prototype, "preferredUpdatePolicy", void 0), e$1([y({ readOnly: true })], P.prototype, "displayFeatureLimit", null), P = e$1([c$3("esri.views.3d.layers.graphics.Graphics3DFeatureProcessor")], P);
const H = "suspendResumeExtentMode";
function t$1(t3) {
  const a2 = new o$5();
  a2.include(o$6), a2.include(d$9);
  const { usesHalfFloat: d4 } = t3;
  return a2.fragment.uniforms.add(new s$7("densityMap", (e2) => e2.densityMap), new s$7("tex", (e2) => e2.colorRamp), new o$7("densityNormalizer", (e2) => 1 / (e2.maxDensity - e2.minDensity)), new o$7("minDensity", (e2) => e2.minDensity), new o$7("densityMultiplier", (e2) => 3 / (e2.searchRadius * e2.searchRadius * Math.PI))), d4 && a2.constants.add("compressionFactor", "float", 4), a2.fragment.code.add(o$8`
    void main() {
      float density = texture(densityMap, uv).r * densityMultiplier${d4 ? o$8` * compressionFactor` : ""};
      float densityRatio = (density - minDensity) * densityNormalizer;

      vec4 color = texture(tex, vec2(clamp(densityRatio, 0.0, 1.0), 0.5));

      discardOrAdjustAlpha(color);
      fragColor = color;
    }
  `), a2;
}
const a = Object.freeze(Object.defineProperty({ __proto__: null, build: t$1 }, Symbol.toStringTag, { value: "Module" }));
let h$1 = class h extends n$4 {
  constructor() {
    super(...arguments), this.colorRamp = null, this.densityMap = null, this.searchRadius = 1, this.fieldTotal = 0, this.minDensity = 0, this.maxDensity = 100;
  }
};
let d$2 = class d extends r$5 {
  constructor(e2, r2) {
    super(e2, r2, () => this.destroy());
  }
  initializeProgram(e2) {
    return new r$6(e2.rctx, d.shader.get().build(this.configuration), O$4);
  }
  initializePipeline() {
    return S$2({ blending: c$6, colorWrite: _$2, depthTest: null, depthWrite: null });
  }
  get primitiveType() {
    return E$3.TRIANGLE_STRIP;
  }
};
d$2.shader = new t$5(a, () => import("./chunk-nFBeChz3.js"));
let f$1 = class f2 extends t$6 {
  constructor() {
    super(...arguments), this.usesHalfFloat = false;
  }
};
e$1([r$4()], f$1.prototype, "usesHalfFloat", void 0);
let x = class extends R {
  constructor(t3) {
    super(t3), this.pixelRatio = 1, this._colorRampData = new Uint8ClampedArray(4), this.type = "draped-heatmap", this._heatmapParameters = new h$1();
    const e2 = new e$7();
    e2.pixelFormat = t3.pixelFormat, e2.internalFormat = t3.internalFormat, e2.dataType = t3.dataType, e2.samplingMode = t3.samplingMode, e2.wrapMode = D$1.CLAMP_TO_EDGE;
    const r2 = t3.rendererContext.rctx;
    this._densityMap = new x$3(r2, e2), this._quad = i$4(r2);
    const a2 = new f$1();
    a2.usesHalfFloat = t3.dataType !== U$2.FLOAT, this._technique = new d$2({ rctx: r2, viewingMode: l$1.Local }, a2);
  }
  initialize() {
    const t3 = this._colorRampData, e2 = new e$7(t3.length / 4, 1);
    e2.wrapMode = D$1.CLAMP_TO_EDGE, this._colorRamp = new m$5(this.rctx, e2, t3), this._heatmapParameters.densityMap = this._densityMap.colorTexture, this.addHandles(d$5(() => [this.colorRampData, this.minDensity, this.maxDensity, this.fieldTotal, this.pixelRatio, this.searchRadius], () => this.rendererContext.notifyContentChanged()));
  }
  destroy() {
    this._technique = t$7(this._technique), this._densityMap = r$7(this._densityMap), this._quad = r$7(this._quad), this._colorRamp = r$7(this._colorRamp);
  }
  get searchRadius() {
    return this._heatmapParameters.searchRadius;
  }
  set searchRadius(t3) {
    t3 !== this._heatmapParameters.searchRadius && (this._heatmapParameters.searchRadius = t3, this.notifyChange("searchRadius"));
  }
  get minDensity() {
    return this._heatmapParameters.minDensity;
  }
  set minDensity(t3) {
    t3 !== this._heatmapParameters.minDensity && (this._heatmapParameters.minDensity = t3, this.notifyChange("minDensity"));
  }
  get maxDensity() {
    return this._heatmapParameters.maxDensity;
  }
  set maxDensity(t3) {
    t3 !== this._heatmapParameters.maxDensity && (this._heatmapParameters.maxDensity = t3, this.notifyChange("maxDensity"));
  }
  get fieldTotal() {
    return this._heatmapParameters.fieldTotal;
  }
  set fieldTotal(t3) {
    this._heatmapParameters.fieldTotal = t3, this.notifyChange("fieldTotal");
  }
  get colorRampData() {
    return this._colorRampData;
  }
  set colorRampData(t3) {
    const { colorRamp: e2 } = this._heatmapParameters;
    if (null != e2 && t3 !== this._colorRampData) {
      const r2 = e2.descriptor.width, a2 = t3.length / 4;
      a2 !== r2 && e2.resize(a2, 1), e2.setData(t3);
    }
    this._colorRampData = t3;
  }
  get _colorRamp() {
    return this._heatmapParameters.colorRamp;
  }
  set _colorRamp(t3) {
    this._heatmapParameters.colorRamp = t3;
  }
  get hasHighlights() {
    return false;
  }
  get hasWater() {
    return false;
  }
  get rendersOccludedDraped() {
    return false;
  }
  render(t3) {
    const e2 = this._sortedMaterialRenderers;
    if (0 === e2.length)
      return;
    const r2 = this.rctx.getBoundFramebufferObject(), a2 = this.rctx.getViewport(), { pixelRatio: i2 } = this, s3 = Math.ceil(a2.width * i2), o2 = Math.ceil(a2.height * i2);
    this._densityMap.resize(s3, o2), this.rctx.bindFramebuffer(this._densityMap), this.rctx.setViewport(0, 0, s3, o2), this.rctx.clear(_$3.COLOR_BUFFER_BIT);
    let n2 = false;
    e2.forAll((e3) => {
      const r3 = e3.prepareTechnique(t3);
      null != r3 && (e3.renderNode(t3, r3), n2 = true);
    }), this.rctx.bindFramebuffer(r2), this.rctx.setViewport(a2.x, a2.y, a2.width, a2.height), n2 && (this.rctx.bindVAO(this._quad), this.rctx.bindTechnique(this._technique, t3.bindParameters, this._heatmapParameters), this.rctx.drawArrays(this._technique.primitiveType, 0, i$5(this._quad, "geometry")));
  }
};
e$1([y()], x.prototype, "searchRadius", null), e$1([y()], x.prototype, "minDensity", null), e$1([y()], x.prototype, "maxDensity", null), e$1([y()], x.prototype, "fieldTotal", null), e$1([y()], x.prototype, "pixelRatio", void 0), e$1([y()], x.prototype, "colorRampData", null), e$1([y({ constructOnly: true })], x.prototype, "dataType", void 0), e$1([y({ constructOnly: true })], x.prototype, "samplingMode", void 0), e$1([y({ constructOnly: true })], x.prototype, "pixelFormat", void 0), e$1([y({ constructOnly: true })], x.prototype, "internalFormat", void 0), e$1([y()], x.prototype, "_colorRampData", void 0), x = e$1([c$3("esri.views.3d.webgl-engine.lib.DrapedHeatmapRenderer")], x);
function t2(t3) {
  const s3 = new o$5(), { vertex: d4, fragment: u2, attributes: n2, varyings: l2 } = s3;
  d$a(d4, t3);
  const { isAttributeDriven: c2, usesHalfFloat: f4 } = t3;
  return n2.add(e$8.POSITION, "vec3"), n2.add(e$8.UV0, "vec2"), c2 && (n2.add(e$8.FEATUREATTRIBUTE, "float"), l2.add("attributeValue", "float")), f4 && s3.constants.add("compressionFactor", "float", 0.25), l2.add("unitCirclePos", "vec2"), d4.uniforms.add(new o$7("radius", ({ resolutionForScale: e2, searchRadius: i2 }, { camera: o2, screenToWorldRatio: r2, overlayStretch: a2 }) => 2 * i2 * (0 === e2 ? 1 : e2 / r2) * o2.pixelRatio / o2.fullViewport[2] / a2)), d4.code.add(o$8`
    void main() {
      unitCirclePos = uv0;

      vec4 posProj = proj * (view * vec4(${e$8.POSITION}, 1.0));
      vec4 quadOffset = vec4(unitCirclePos * radius, 0.0, 0.0);

      ${c2 ? o$8`attributeValue = ${e$8.FEATUREATTRIBUTE};` : ""}
      gl_Position = posProj + quadOffset;
    }
  `), u2.code.add(o$8`
    void main() {
      float radiusRatioSquared = dot(unitCirclePos, unitCirclePos);
      if (radiusRatioSquared > 1.0) {
        discard;
      }

      float oneMinusRadiusRatioSquared = 1.0 - radiusRatioSquared;
      float density = oneMinusRadiusRatioSquared * oneMinusRadiusRatioSquared ${c2 ? o$8` * attributeValue` : ""} ${f4 ? o$8` * compressionFactor` : ""};
      fragColor = vec4(density);
    }
  `), s3;
}
const s2 = Object.freeze(Object.defineProperty({ __proto__: null, build: t2 }, Symbol.toStringTag, { value: "Module" }));
let d$1 = class d2 extends u$5 {
  constructor() {
    super(...arguments), this.searchRadius = 128, this.resolutionForScale = 0;
  }
};
class f3 extends r$5 {
  initializeProgram(e2) {
    return new r$6(e2.rctx, f3.shader.get().build(this.configuration), O$4);
  }
  initializePipeline() {
    return S$2({ blending: s$8(R$1.ONE, R$1.ONE, T$2.ADD), colorWrite: _$2, depthTest: null, depthWrite: null });
  }
  destroy() {
    super.destroy();
  }
}
f3.shader = new t$5(s2, () => import("./chunk-VVEWhplM.js"));
let b$2 = class b extends t$6 {
  constructor() {
    super(...arguments), this.isAttributeDriven = false, this.usesHalfFloat = false;
  }
};
e$1([r$4()], b$2.prototype, "isAttributeDriven", void 0), e$1([r$4()], b$2.prototype, "usesHalfFloat", void 0);
const h2 = 2;
let b$1 = class b2 extends d$1 {
  constructor() {
    super(...arguments), this.isAttributeDriven = false, this.usesHalfFloats = false;
  }
};
class T2 extends c$7 {
  constructor(t3) {
    super(t3, new b$1()), this.produces = /* @__PURE__ */ new Map([[A$4.DRAPED_MATERIAL, (t4) => t4 === o$9.Color]]), this._configuration = new b$2();
  }
  getConfiguration() {
    return this._configuration.isAttributeDriven = this.parameters.isAttributeDriven, this._configuration.usesHalfFloat = this.parameters.usesHalfFloats, this._configuration;
  }
  createGLMaterial(t3) {
    return new d3(t3);
  }
  intersect() {
  }
  intersectDraped(r2, s3, i2, a2, o2, n2) {
    const l2 = r2.attributes.get(e$8.POSITION), { parameters: c2 } = this, { searchRadius: f4 } = c2, { screenToWorldRatio: m3 } = r2, p2 = f4 * m3 + h2 * m3, b4 = p2 * p2, T3 = l2.data.length / l2.size;
    for (let u2 = 0; u2 < T3; u2++) {
      const r3 = u2 * l2.size, s4 = o$a(E, l2.data[r3], l2.data[r3 + 1]);
      b$5(s4, a2) < b4 && o2(n2.dist, n2.normal, -1, false);
    }
  }
  createBufferWriter() {
    return new g(this.parameters.isAttributeDriven ? I : A);
  }
}
class d3 extends t$8 {
  beginSlot(t3) {
    return this.ensureTechnique(f3, t3);
  }
}
class g {
  constructor(t3) {
    this.vertexBufferLayout = t3;
  }
  elementCount(t3) {
    return t3.attributes.get(e$8.POSITION).indices.length * v;
  }
  write(t3, e2, r2, s3, i2) {
    b$6(r2.attributes.get(e$8.POSITION), t3, s3.position, i2, v);
    const a2 = r2.attributes.get(e$8.POSITION).indices.length, o2 = s3.uv0;
    let n2 = i2;
    for (let u2 = 0; u2 < a2; ++u2)
      o2.setValues(n2++, -1, -1), o2.setValues(n2++, 1, -1), o2.setValues(n2++, 1, 1), o2.setValues(n2++, 1, 1), o2.setValues(n2++, -1, 1), o2.setValues(n2++, -1, -1);
    const f4 = e$8.FEATUREATTRIBUTE in s3 ? s3.featureAttribute : null;
    f4 && d$b(r2.attributes.get(e$8.FEATUREATTRIBUTE), f4, i2, v);
  }
}
const A = H$3().vec3f(e$8.POSITION).vec2f(e$8.UV0), I = A.clone().f32(e$8.FEATUREATTRIBUTE), v = 6, E = n$5();
const $ = 112;
let q = class extends S$1 {
  constructor(e2) {
    super(e2), this.type = "heatmap", this.preferredUpdatePolicy = C$1.ASYNC, this.dataExtent = null, this.drapeSourceType = e$3.Features, this._renderGeometries = /* @__PURE__ */ new Map(), this._fieldTotal = 0, this._drapeSourceRenderer = null, this._dataType = U$2.HALF_FLOAT, this._pixelFormat = G$1.RGBA, this._updatingHandles = new h$5(), this.initializePromise = Promise.resolve();
  }
  initialize() {
    this._featureStore = new m$6({ geometryType: "esriGeometryPoint", hasZ: this.hasZ, hasM: this.hasM });
    const { dataType: e2, samplingMode: t3, pixelFormat: r2, internalFormat: i2 } = n$6(this._renderView.renderingContext, s$2.getLogger(this));
    this._dataType = e2, this._pixelFormat = r2;
    const a2 = e2 !== U$2.FLOAT;
    this._drapeSourceRenderer = this.view.basemapTerrain.overlayManager.registerDrapeSource(this, x, { ...this._rendererParameters, dataType: e2, samplingMode: t3, pixelFormat: r2, internalFormat: i2 }), this._material = new T2({ usesHalfFloats: a2 }), this._materialWithField = new T2({ usesHalfFloats: a2, isAttributeDriven: true }), this._filterVisibility = new f$2({ context: { layerView: this.owner, featureStore: this.featureStore, getFeatureCount: () => this._loadedPointGraphics.length, setAllFeaturesVisibility: (e3) => this._setAllFeaturesVisibility(e3), clearFeaturesVisibility: () => this._setAllFeaturesVisibility(true), updateFeatureVisibilities: (e3) => this._updateFeatureVisibilities(e3) } }), this._updatingHandles.addOnCollectionChange(() => this._loadedPointGraphics, (e3) => this._onLoadedFeaturesChange(e3), P$2), this._updatingHandles.addWhen(() => this._materialParameters, (e3) => this._forEachMaterial((t4) => t4.setParameters(e3)), P$2), this._updatingHandles.add(() => this._rendererParameters, (e3) => this._drapeSourceRenderer.set(e3)), this._updatingHandles.add(() => this._heatmapRendererField, () => {
      this._recreate();
    }, C), this._updatingHandles.add(() => ({ fieldName: this._heatmapRendererFieldName, numeric: this._heatmapRendererFieldIsNumeric }), ({ fieldName: e3, numeric: t4 }) => {
      if (null != e3 && t4) {
        let t5 = 0;
        this._featureStore.forEach((r3) => t5 += r3.attributes[e3] ?? 0), this._fieldTotal = t5;
      } else
        this._fieldTotal = this._featureStore.numFeatures;
    }, P$2), this.addHandles([d$5(() => ({ fieldName: this._heatmapRendererFieldName, field: this._heatmapRendererField }), ({ fieldName: e3, field: t4 }) => {
      e3 && !t4 && s$2.getLogger(this).warn(`Heatmap renderer field '${e3}' for layer '${this.layer.title ?? this.layer.id}' not found`);
    }), d$5(() => ({ field: this._heatmapRendererField, numeric: this._heatmapRendererFieldIsNumeric }), ({ field: e3, numeric: t4 }) => {
      null == e3 || t4 || s$2.getLogger(this).warn(`Heatmap renderer field '${e3.name}' for layer '${this.layer.title ?? this.layer.id}' does not contain numeric values and cannot be used to drive the heatmap density`);
    }), e$6(() => this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this))]);
  }
  destroy() {
    this._renderGeometries.clear(), this._material = null, this._materialWithField = null, this._featureStore.clear(), this._featureStore = null, this._updatingHandles.destroy();
  }
  get layer() {
    return this.owner.layer;
  }
  get featureStore() {
    return this._featureStore;
  }
  get updating() {
    return this._updatingHandles.updating || this.filterVisibility.updating;
  }
  get updatingRemaining() {
    return 0;
  }
  get suspendInfo() {
    return {};
  }
  get legendEnabled() {
    return true;
  }
  get filterVisibility() {
    return this._filterVisibility;
  }
  get displayFeatureLimit() {
    const e2 = this.owner?.view?.quality ?? 1, t3 = this.owner?.view?.qualitySettings, r2 = t3 ? Math.ceil(t3.heatmap.maxTotalNumberOfFeatures * e2) : 0;
    return new e$5(r2 * 6, r2);
  }
  get hasZ() {
    return "hasZ" in this.layer && this.layer.hasZ;
  }
  get hasM() {
    return "hasM" in this.layer && this.layer.hasM;
  }
  get view() {
    return this.owner.view;
  }
  get fullOpacity() {
    return this.owner.fullOpacity;
  }
  get updatePolicy() {
    return this.owner.updatePolicy;
  }
  get scaleVisibilitySuspended() {
    if (!this._isScaleRangeActive)
      return false;
    const { minScale: e2, maxScale: t3 } = this.layer.effectiveScaleRange, { scale: r2 } = this.view;
    return !t$9(r2, e2 ?? 0, t3 ?? 0);
  }
  get usedMemory() {
    const e2 = this.usedMemoryPerFeature * this._featureStore.numFeatures, t3 = this._pixelFormat === G$1.RED ? 1 : 4, r2 = this._dataType === U$2.FLOAT ? 4 : 2, i2 = Math.ceil((this._overlayRenderer?.overlays[0]?.resolution ?? 0) * this._densityMapPixelRatio) ?? 0;
    return i2 * i2 * t3 * r2 + e2;
  }
  get usedMemoryPerFeature() {
    const e2 = this._loadedPointGraphics.find(() => true);
    if (null == e2)
      return 0;
    const t3 = t$a(e2), r2 = n$7(), o2 = 6;
    return o2 * c$8([0, 0, 0], r2) + o2 * c$8([0, 0], r2) + (this._heatmapRendererFieldIsNumeric ? o2 * r2 : 0) + t3;
  }
  get loadedFeatures() {
    return this._featureStore.numFeatures;
  }
  get unprocessedMemoryEstimate() {
    return 0;
  }
  get performanceInfo() {
    return new s$9(this._visibleFeatures, 0, 0);
  }
  get renderer() {
    return this._heatmapRenderer;
  }
  get _overlayRenderer() {
    return this.view.basemapTerrain.overlayManager.renderer;
  }
  get _overlaySpatialReference() {
    return this._overlayRenderer.spatialReference;
  }
  get _rendererParameters() {
    return { ...this._radiusParameter, ...this._densityParameters, ...this._colorRampParameter, ...this._pixelRatioParameter };
  }
  get _materialParameters() {
    return { ...this._radiusParameter, ...this._resolutionForScaleParameter };
  }
  get _densityParameters() {
    const e2 = this._heatmapRenderer;
    if (null == e2)
      return null;
    const { minDensity: t3, maxDensity: r2 } = e2;
    return { minDensity: t3, maxDensity: r2, fieldTotal: this._fieldTotal };
  }
  get _radiusParameter() {
    const e2 = this._heatmapRenderer;
    return e2 ? { searchRadius: u$6(this._clampSearchRadius(e2.radius)) } : null;
  }
  get _resolutionForScaleParameter() {
    const e2 = this._heatmapRenderer;
    if (!e2)
      return null;
    const { referenceScale: t3 } = e2;
    return { resolutionForScale: 0 === t3 ? 0 : o$b(t3, this.view.spatialReference) };
  }
  get _colorRampParameter() {
    const e2 = this._heatmapRenderer;
    return e2 ? { colorRampData: f$3(e2.colorStops) } : null;
  }
  get _pixelRatioParameter() {
    return { pixelRatio: this._densityMapPixelRatio };
  }
  get _densityMapPixelRatio() {
    return this.owner?.view?.qualitySettings.heatmap.pixelRatio ?? 1;
  }
  get _renderView() {
    return this.view._stage.renderView;
  }
  get _featuresArePoints() {
    return "point" === this.layer.geometryType;
  }
  get _loadedPointGraphics() {
    return this.owner.loadedGraphics;
  }
  get _heatmapRenderer() {
    const e2 = this.layer.renderer;
    return "heatmap" === e2?.type ? e2 : null;
  }
  get _heatmapRendererFieldName() {
    return this._heatmapRenderer?.field;
  }
  get _heatmapRendererField() {
    const e2 = this._heatmapRendererFieldName;
    return null != e2 ? this.layer.fieldsIndex.get(e2) : null;
  }
  get _heatmapRendererFieldIsNumeric() {
    const e2 = this._heatmapRendererField;
    return null != e2 && pe(e2);
  }
  get _isScaleRangeActive() {
    const { layer: e2 } = this;
    if (!("effectiveScaleRange" in e2))
      return false;
    const { minScale: t3, maxScale: r2 } = e2.effectiveScaleRange;
    return u$7(t3, r2);
  }
  get _visibleFeatures() {
    let e2 = 0;
    return this._renderGeometries.forEach((t3) => {
      t3.visible && ++e2;
    }), e2;
  }
  async whenGraphicBounds() {
    return null;
  }
  computeAttachmentOrigin() {
    return null;
  }
  highlight() {
    return e$6();
  }
  maskOccludee() {
    return e$6();
  }
  setObjectIdVisibility() {
  }
  refreshFilter() {
    this.filterVisibility.reapply();
  }
  _onLoadedFeaturesChange(e2) {
    if (!this._featuresArePoints)
      return;
    const { objectIdField: t3 } = this.layer;
    this._featureStore.removeManyById(e2.removed.map((e3) => I$3(e3, t3))), this._featureStore.addMany(e2.added.map((e3) => {
      const { attributes: r2, centroid: i3, geometry: a3 } = e3, s4 = new t$b(O$5(new e$a(), a3), r2, i3 ? O$5(new e$a(), i3) : null, I$3(e3, t3));
      return s4.displayId = e3.uid, s4;
    }));
    const i2 = e2.added, a2 = e2.removed;
    this._fieldTotal += this._computeFieldTotalChange(i2, a2);
    const s3 = a2.map(({ uid: e3 }) => {
      const t4 = this._renderGeometries.get(e3);
      return this._renderGeometries.delete(e3), t4;
    }).filter(q$3), o2 = i2.map((e3) => {
      const t4 = this._pointGraphicToRenderGeometry(e3);
      return this._renderGeometries.set(e3.uid, t4), t4;
    });
    s3.length > 0 && this._drapeSourceRenderer.removeGeometries(s3, E$4.REMOVE), o2.length > 0 && this._drapeSourceRenderer.addGeometries(o2, E$4.ADD), (o2.length > 0 || s3.length > 0) && (this.filterVisibility.reapply(), this._renderView.requestRender());
  }
  _recreate() {
    if (!this._loadedPointGraphics)
      return;
    const e2 = this._loadedPointGraphics.toArray();
    this._onLoadedFeaturesChange({ added: e2, removed: e2 });
  }
  _pointGraphicToRenderGeometry(e2) {
    const t3 = this._heatmapRendererFieldName, r2 = null != t3 ? this._materialWithField : this._material, i2 = n$8();
    c$9(e2.geometry, i2, this._overlaySpatialReference), i2[2] = te;
    const a2 = l$4(1), s3 = [[e$8.POSITION, new t$c(i2, a2, i2.length)]], o2 = this._heatmapRendererFieldIsNumeric;
    null != t3 && s3.push([e$8.FEATUREATTRIBUTE, new t$c([o2 ? e2.attributes[t3] ?? 0 : 0], a2, 1)]);
    const n2 = new m$7(new I$6(r2, s3, null, e$9.Point), { layerUid: this.layer.uid, graphicUid: e2.uid });
    return n2.visible = this.filterVisibility.defaultVisibility, n2;
  }
  _forEachMaterial(e2) {
    e2(this._material), e2(this._materialWithField);
  }
  _computeFieldTotalChange(e2, t3) {
    if (null == this._heatmapRendererFieldName || !this._heatmapRendererFieldIsNumeric)
      return e2.length - t3.length;
    const r2 = this._heatmapRendererFieldName, i2 = (e3, t4) => e3 + (t4.attributes[r2] ?? 0);
    return e2.reduce(i2, 0) - t3.reduce(i2, 0);
  }
  _clampSearchRadius(e2) {
    return e2 > $ && s$2.getLogger(this).warnOnce(`SceneView supports a maximum radius of ${$} pt for HeatmapRenderer.`), Math.min(e2, $);
  }
  _updateFeatureVisibilities(e2) {
    const t3 = [];
    this._featureStore.forEach(({ objectId: r2, displayId: i2 }) => {
      const a2 = e2(r2), s3 = this._renderGeometries.get(i2);
      s3 && s3.visible !== a2 && (t3.push(s3), s3.visible = a2);
    }), this._drapeSourceRenderer.modifyGeometries(t3, I$7.VISIBILITY);
  }
  _setAllFeaturesVisibility(e2) {
    const t3 = [];
    for (const r2 of this._renderGeometries.values())
      r2.visible !== e2 && (t3.push(r2), r2.visible = e2);
    this._drapeSourceRenderer.modifyGeometries(t3, I$7.VISIBILITY);
  }
  get test() {
    return { visibleFeatureCount: this._visibleFeatures };
  }
};
e$1([y()], q.prototype, "type", void 0), e$1([y({ constructOnly: true })], q.prototype, "owner", void 0), e$1([y()], q.prototype, "layer", null), e$1([y()], q.prototype, "featureStore", null), e$1([y()], q.prototype, "updating", null), e$1([y()], q.prototype, "updatingRemaining", null), e$1([y()], q.prototype, "suspendInfo", null), e$1([y()], q.prototype, "legendEnabled", null), e$1([y()], q.prototype, "filterVisibility", null), e$1([y()], q.prototype, "displayFeatureLimit", null), e$1([y()], q.prototype, "preferredUpdatePolicy", void 0), e$1([y()], q.prototype, "hasZ", null), e$1([y()], q.prototype, "hasM", null), e$1([y()], q.prototype, "dataExtent", void 0), e$1([y()], q.prototype, "view", null), e$1([y()], q.prototype, "fullOpacity", null), e$1([y()], q.prototype, "updatePolicy", null), e$1([y()], q.prototype, "drapeSourceType", void 0), e$1([y()], q.prototype, "scaleVisibilitySuspended", null), e$1([y()], q.prototype, "renderer", null), e$1([y()], q.prototype, "_featureStore", void 0), e$1([y()], q.prototype, "_filterVisibility", void 0), e$1([y()], q.prototype, "_overlayRenderer", null), e$1([y()], q.prototype, "_overlaySpatialReference", null), e$1([y()], q.prototype, "_rendererParameters", null), e$1([y()], q.prototype, "_materialParameters", null), e$1([y()], q.prototype, "_densityParameters", null), e$1([y()], q.prototype, "_radiusParameter", null), e$1([y()], q.prototype, "_resolutionForScaleParameter", null), e$1([y()], q.prototype, "_colorRampParameter", null), e$1([y()], q.prototype, "_pixelRatioParameter", null), e$1([y()], q.prototype, "_densityMapPixelRatio", null), e$1([y()], q.prototype, "_renderGeometries", void 0), e$1([y()], q.prototype, "_material", void 0), e$1([y()], q.prototype, "_materialWithField", void 0), e$1([y()], q.prototype, "_renderView", null), e$1([y()], q.prototype, "_featuresArePoints", null), e$1([y()], q.prototype, "_loadedPointGraphics", null), e$1([y()], q.prototype, "_heatmapRenderer", null), e$1([y()], q.prototype, "_heatmapRendererFieldName", null), e$1([y()], q.prototype, "_heatmapRendererField", null), e$1([y()], q.prototype, "_heatmapRendererFieldIsNumeric", null), e$1([y()], q.prototype, "_fieldTotal", void 0), e$1([y()], q.prototype, "_drapeSourceRenderer", void 0), e$1([y()], q.prototype, "_isScaleRangeActive", null), q = e$1([c$3("esri.views.3d.layers.support.HeatmapFeatureProcessor")], q);
const b3 = (b4) => {
  let v2 = class extends b4 {
    constructor() {
      super(...arguments), this._dataUpdatingState = O.NONE, this.controller = null, this.updatePolicy = C$1.SYNC, this.suspendResumeExtentMode = "computed", this.slicePlaneEnabled = false, this.fullExtentInLocalViewSpatialReference = null, this.suspendResumeExtent = null, this._controllerCreated = false, this.supportsHeightUnitConversion = true, this._pendingController = null, this.queryEngine = null;
    }
    initialize() {
      const e2 = this.layer;
      if ("isTable" in e2 && e2.isTable)
        return void this.addResolvingPromise(Promise.reject(new s$5("featurelayerview:table-not-supported", "table feature layer can't be displayed", { layer: e2 })));
      this.addResolvingPromise(this._validateGeometryType()), this._updatingHandles.add(() => this.layer.renderer, (e3) => this._recreateProcessor(e3), P$2), this.addResolvingPromise((async () => {
        const e3 = await l$5(this);
        this.fullExtentInLocalViewSpatialReference = e3, await this._initializeController();
      })()), this._updatingHandles.add(() => this.updatePolicy, (e3) => this.processor.preferredUpdatePolicy = e3);
      const r2 = () => this.processor.featureStore;
      this.queryEngine = new l({ context: { spatialReference: this.view.spatialReference, layer: this.layer, scheduler: this.view.resourceController.scheduler, get featureStore() {
        return r2();
      }, hasZ: this.hasZ, hasM: this.hasM }, priority: I$4.FEATURE_QUERY_ENGINE }), this.notifyChange("updating");
    }
    destroy() {
      this._destroyPendingController(), this.controller = u$2(this.controller), this._set("processor", u$2(this.processor)), this.queryEngine = u$2(this.queryEngine), this.loadedGraphics = null;
    }
    _destroyPendingController() {
      this._pendingController = u$2(this._pendingController);
    }
    get dataUpdating() {
      return this._dataUpdatingState !== O.NONE;
    }
    get legendEnabled() {
      return this.canResume() && this.processor?.legendEnabled;
    }
    get graphics3DProcessor() {
      return "graphics-3d" === this.processor?.type ? this.processor : null;
    }
    get heatmapProcessor() {
      return "heatmap" === this.processor?.type ? this.processor : null;
    }
    get symbologySnappingSupported() {
      const e2 = this.layer?.renderer?.getSymbols();
      return e2?.some(J$1) ?? false;
    }
    get hasAllFeatures() {
      return !(!this.controller || !("hasAllFeatures" in this.controller)) && this.controller.hasAllFeatures;
    }
    get hasAllFeaturesInView() {
      return !(!this.controller || !("hasAllFeaturesInView" in this.controller)) && this.controller.hasAllFeaturesInView;
    }
    get hasFullGeometries() {
      return !(!this.controller || !("hasFullGeometries" in this.controller)) && this.controller.hasFullGeometries;
    }
    getHit(e2) {
      let t3;
      return this.loadedGraphics?.forEach((r2) => {
        r2.uid === e2 && (t3 = c$a(r2, this.layer));
      }), t3 ? { type: "graphic", graphic: t3, layer: t3.layer } : null;
    }
    whenGraphicBounds(e2, t3) {
      return this.processor?.whenGraphicBounds(e2, t3);
    }
    computeAttachmentOrigin(e2, t3) {
      return this.processor?.computeAttachmentOrigin(e2, t3);
    }
    async elevationAlignPointsInFeatures(e2, r2) {
      const s3 = this.graphics3DProcessor;
      if (null == s3)
        throw new s$5("featurelayerview3d:missing-processor", "A Graphics3D processor is needed to resolve graphics elevation.");
      return m$8(this.view, this.layer, (e3) => s3.getGraphics3DGraphicByObjectId(e3), e2, r2);
    }
    async queryForSymbologySnapping(e2, t3) {
      return this.symbologySnappingSupported ? r$8(this.graphics3DProcessor, e2, t3) : { candidates: [], sourceCandidateIndices: [] };
    }
    queryFeatures(e2, t3) {
      return this.queryEngine.executeQuery(this._ensureQuery(e2), t3?.signal);
    }
    queryObjectIds(e2, t3) {
      return this.queryEngine.executeQueryForIds(this._ensureQuery(e2), t3?.signal);
    }
    queryFeatureCount(e2, t3) {
      return this.queryEngine.executeQueryForCount(this._ensureQuery(e2), t3?.signal);
    }
    queryExtent(e2, t3) {
      return this.queryEngine.executeQueryForExtent(this._ensureQuery(e2), t3?.signal);
    }
    _ensureQuery(e2) {
      return null == e2 ? this.createQuery() : b$4.from(e2);
    }
    highlight(e2) {
      return this.processor.highlight(e2, this.layer.objectIdField);
    }
    maskOccludee(e2) {
      return this.processor.maskOccludee(e2);
    }
    canResume() {
      return super.canResume() && !this.processor?.scaleVisibilitySuspended;
    }
    getSuspendInfo() {
      const e2 = super.getSuspendInfo();
      return this.processor ? { ...e2, ...this.processor.suspendInfo } : e2;
    }
    isUpdating() {
      return !(!this.processor || this.processor.destroyed) && !(this._controllerCreated && !this.controller?.updating && this.view?.basemapTerrain?.ready && !this.processor.updating);
    }
    async _initializeController() {
      const e2 = this.createController();
      this._pendingController = e2, this._setupDataUpdating(e2), await e2.when(), this._setControllerWhenInitialized(e2);
    }
    _setupDataUpdating(e2) {
      "dataUpdating" in e2 && this.addHandles([d$5(() => e2.dataUpdating, (e3) => {
        e3 && this._dataUpdatingState === O.NONE ? this._dataUpdatingState = O.CONTROLLER : e3 || this._dataUpdatingState !== O.CONTROLLER || (this._dataUpdatingState = O.NONE);
      }, C), d$5(() => !!this.graphics3DProcessor?.dataUpdating, (t3) => {
        t3 && this._dataUpdatingState === O.CONTROLLER ? this._dataUpdatingState = O.CORE : t3 || this._dataUpdatingState !== O.CORE || (this._dataUpdatingState = e2.dataUpdating ? O.CONTROLLER : O.NONE);
      }, C)]);
    }
    async _setControllerWhenInitialized(e2) {
      try {
        await this.when();
      } catch (t3) {
      }
      this._controllerCreated = true, this.notifyChange("updating"), this.isResolved() && !this.destroyed ? (await w$2(() => this.view?.basemapTerrain?.ready), this.beforeSetController(e2), this._pendingController = null, this.controller = e2, this.loadedGraphics = e2.graphics, this.notifyChange("updating")) : this._destroyPendingController();
    }
    _updateClippingExtent(e2) {
      if (this.clippingExtent = e2, !this.controller)
        return false;
      switch (this.controller.type) {
        case "stream":
          return false;
        case "feature-tile-3d":
          return this.controller.extent = e2, true;
      }
    }
    async _validateGeometryType() {
      switch (this.layer.geometryType) {
        case "multipatch":
        case "multipoint":
          throw new s$5("featurelayerview3d:unsupported-geometry-type", "Unsupported geometry type ${geometryType}", { geometryType: this.layer.geometryType });
      }
    }
    _recreateProcessor(e2) {
      const t3 = "heatmap" === e2?.type, r2 = "heatmap" === this.processor?.type, s3 = this.processor;
      if (s3 && t3 === r2)
        return;
      const i2 = t3 ? new q({ owner: this }) : new P({ owner: this, frustumVisibilityEnabled: true, scaleVisibilityEnabled: true, filterVisibilityEnabled: true, timeExtentEnabled: true, elevationAlignmentEnabled: true, elevationFeatureExpressionEnabled: true, preferredUpdatePolicy: this.updatePolicy, updateClippingExtent: (e3) => this._updateClippingExtent(e3) });
      this._set("processor", i2), s3?.destroy(), this.queryEngine?.clear(), this.addResolvingPromise(i2.initializePromise);
    }
    get performanceInfo() {
      const e2 = this.controller instanceof T$1 ? this.controller : null;
      return new t$d(this.processor.usedMemory, this.loadedGraphics?.length, e2?.serviceDataCount ?? -1, e2?.maximumNumberOfFeatures ?? -1, 0, this.processor.performanceInfo);
    }
  };
  return e$1([y()], v2.prototype, "loadedGraphics", void 0), e$1([y()], v2.prototype, "_dataUpdatingState", void 0), e$1([y({ readOnly: true })], v2.prototype, "dataUpdating", null), e$1([y()], v2.prototype, "suspended", void 0), e$1([y({ readOnly: true })], v2.prototype, "legendEnabled", null), e$1([y()], v2.prototype, "updating", void 0), e$1([y()], v2.prototype, "controller", void 0), e$1([y()], v2.prototype, "processor", void 0), e$1([y({ readOnly: true })], v2.prototype, "updatePolicy", void 0), e$1([y({ readOnly: true })], v2.prototype, "suspendResumeExtentMode", void 0), e$1([y({ type: Boolean })], v2.prototype, "slicePlaneEnabled", void 0), e$1([y({ readOnly: true })], v2.prototype, "suspendInfo", void 0), e$1([y()], v2.prototype, "graphics3DProcessor", null), e$1([y()], v2.prototype, "heatmapProcessor", null), e$1([y()], v2.prototype, "symbologySnappingSupported", null), e$1([y({ readOnly: true })], v2.prototype, "hasAllFeatures", null), e$1([y({ readOnly: true })], v2.prototype, "hasAllFeaturesInView", null), e$1([y({ readOnly: true })], v2.prototype, "hasFullGeometries", null), v2 = e$1([c$3("esri.views.3d.layers.FeatureLikeLayerView3D")], v2), v2;
};
var O;
!function(e2) {
  e2[e2.NONE = 0] = "NONE", e2[e2.CONTROLLER = 1] = "CONTROLLER", e2[e2.CORE = 2] = "CORE";
}(O || (O = {}));
export {
  P,
  T$1 as T,
  t2 as a,
  b3 as b,
  P$1 as c,
  l,
  n,
  t$1 as t
};
