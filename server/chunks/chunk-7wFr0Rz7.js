import { gO as e$6, sd as a$b, Bh as _$3, ds as o$c, dh as i$6, du as gt, h9 as et, s4 as ct, dL as Z, Dh as s$b, Di as Nt, aB as f$4, ha as nt, cs as t$7, lU as pt, Dj as N, Dk as w, ct as e$7, sc as at, j3 as W, Dl as o$e, sg as i$8, dq as K, zl as O, dQ as rt, si as d$3, cc as m$5, b0 as has, q$ as p$5, qi as f$5, c8 as u$4, cU as s$d, ck as b$2, iT as w$1, iS as c$5, aV as e$8, aX as y$5, a_ as c$6, bZ as S$2, ce as d$4, Dm as b$3, Dn as h$3, aO as s$e, j2 as n$9, qW as n$a, aT as s$f, Do as d$5, rA as m$6, qc as c$7, Dp as ft, Dq as c$8, g7 as m$7, fd as c$9, BN as t$8, fg as r$9, Dr as d$7, Ds as s$g, aQ as U$1, s6 as S$3, nF as e$9, bC as L$1, id as u$5, Dt as t$a, Du as n$b, as as j$1, gL as h$4 } from "./chunk-ejFG4zJ0.js";
import { n as n$7, i as i$5, r as r$7, M, p as p$3, d as p$4, f as i$7, g as n$8, a as s$c, b as b$1, h as a$c, j as t$9 } from "./chunk-xHgk_Pqx.js";
import { o as o$b } from "./chunk-pjiN37wa.js";
import { S as S$1, R, A } from "./chunk-Lhv5-gDf.js";
import { x, j } from "./chunk-pZO3UCge.js";
import { o as o$d } from "./chunk-ISSNghJ_.js";
import { $ } from "./chunk-P_v7gizd.js";
import { $ as $$1 } from "./chunk-tdBLh9Pj.js";
import { o as o$f } from "./chunk-qlOX-GZt.js";
import { createConnection as r$8 } from "./chunk-mXYE4zLb.js";
import { d as d$6 } from "./chunk-Mke_bPEP.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-KfB6QvrM.js";
import "./chunk-stE6bWuO.js";
import "./chunk-H58sM9yM.js";
import "./chunk-KyVc0M84.js";
import "./chunk-bLqiACBi.js";
import "./chunk-jrhFla2W.js";
import "./chunk-iXn63MLq.js";
import "./chunk-9fkEo-9z.js";
let e$5 = class e {
  constructor(e7) {
    this._client = e7, this.layerView = this._client.createInvokeProxy("", { ignoreConnectionErrors: true }), this.container = this._client.createInvokeProxy("container", { ignoreConnectionErrors: true }), this.eventLog = this._client.createInvokeProxy("eventLog", { ignoreConnectionErrors: true });
  }
};
const i$4 = 1, n$6 = 2, h$2 = 4, o$a = 8, c$4 = 16, a$a = 32, l$6 = 64, f$3 = 128;
function u$3(e7) {
  switch (e7) {
    case i$4:
    case o$a:
    case a$a:
      return -1;
    case n$6:
    case l$6:
      return 0;
    case h$2:
    case c$4:
    case f$3:
      return 1;
  }
}
function m$4(e7) {
  switch (e7) {
    case i$4:
    case n$6:
    case h$2:
      return -1;
    case o$a:
    case c$4:
      return 0;
    case a$a:
    case l$6:
    case f$3:
      return 1;
  }
}
const _$2 = i$4 | o$a | a$a, d$2 = h$2 | c$4 | f$3, p$2 = i$4 | n$6 | h$2, y$4 = a$a | l$6 | f$3;
let g$2 = class g {
  constructor(e7, s12, r8, i4 = 0) {
    this.tileKey = e7, this._bufferingEnabled = s12, this._sizeHint = i4, this._meshes = { self: new n$7(this.id, this._sizeHint), neighbors: new Array() }, this._currentRecordOverlaps = 0, this._currentEntityOverlaps = 0, this._copyBufferedDataIntoSelf = r8 && this._bufferingEnabled && 0 === e7.level;
  }
  get id() {
    return this.tileKey.id;
  }
  vertexCount() {
    return this._meshes.self.vertexCount();
  }
  indexCount() {
    return this._meshes.self.indexCount();
  }
  indexEnsureSize(e7) {
    this._meshes.self.indexEnsureSize(e7);
  }
  entityStart(e7, s12 = e7) {
    this._currentEntityOverlaps = 0, this._meshes.self.entityStart(e7, s12);
  }
  entityRecordCount() {
    return this._meshes.self.entityRecordCount();
  }
  entityEnd() {
    if (this._meshes.self.entityEnd(), this._bufferingEnabled) {
      if (this._copyBufferedDataIntoSelf)
        return;
      for (let e7 = 0; e7 < 8; e7++) {
        const s12 = 1 << e7;
        !!(this._currentEntityOverlaps & s12) && this._meshes.neighbors[e7].entityEnd();
      }
    }
  }
  recordStart(e7, s12, t8) {
    this._currentRecordOverlaps = 0, this._meshes.self.recordStart(e7, s12, t8);
  }
  recordEnd(e7 = 0) {
    const s12 = this._meshes.self.recordEnd(this._currentRecordOverlaps);
    return s12 && 0 !== this._currentRecordOverlaps ? (this._copyIntoNeighbors(), this._currentEntityOverlaps |= this._currentRecordOverlaps, true) : s12;
  }
  recordBounds(e7, s12, t8, r8) {
    this._bufferingEnabled && this._addOverlap(e7, s12, t8, r8);
  }
  recordCount() {
    return this._meshes.self.recordCount();
  }
  metricStart(e7) {
    this._meshes.self.metricStart(e7);
  }
  metricBoxWrite(e7) {
    this._meshes.self.metricBoxWrite(e7);
  }
  metricEnd() {
    this._meshes.self.metricEnd();
  }
  vertexWrite(e7) {
    this._meshes.self.vertexWrite(e7);
  }
  vertexWriteF32(e7) {
    this._meshes.self.vertexWriteF32(e7);
  }
  vertexWriteRegion(e7) {
    this._meshes.self.vertexWriteRegion(e7);
  }
  indexWrite(e7) {
    this._meshes.self.indexWrite(e7);
  }
  serialize(s12) {
    const t8 = { message: [], transferList: [] }, i4 = this._meshes.self.serialize();
    return t8.message.push({ tileId: this.tileKey.id, ...i4.message }), t8.transferList.push(...i4.transferList), this._meshes.neighbors.forEach((i5, n6) => {
      const h3 = i5.serialize(), o8 = 1 << n6, c3 = u$3(o8), a9 = m$4(o8), l5 = o$b(new e$6(this.tileKey), c3, a9, s12);
      t8.message.push({ tileId: l5.id, ...h3.message }), t8.transferList.push(...h3.transferList);
    }), t8;
  }
  _addOverlap(e7, t8, r8, i4) {
    const n6 = Math.min(a$b / 2, r8), h3 = Math.min(a$b / 2, i4), o8 = 255 ^ ((e7 < 0 + n6 ? d$2 : e7 >= a$b - n6 ? _$2 : d$2 | _$2) | (t8 < 0 + h3 ? y$4 : t8 >= a$b - h3 ? p$2 : y$4 | p$2));
    this._currentRecordOverlaps |= o8;
  }
  _copyIntoNeighbors() {
    for (let e7 = 0; e7 < 8; e7++) {
      const r8 = 1 << e7;
      if (!!(this._currentRecordOverlaps & r8)) {
        if (this._copyBufferedDataIntoSelf) {
          const e8 = -u$3(r8) * a$b, t8 = -m$4(r8) * a$b;
          this._meshes.self.copyLast(e8, t8);
          continue;
        }
        if (!this._meshes.neighbors[e7]) {
          const s12 = Math.floor(this._sizeHint / 16);
          this._meshes.neighbors[e7] = new n$7(r8, s12);
        }
        const i4 = this._meshes.neighbors[e7], n6 = -u$3(r8) * a$b, h3 = -m$4(r8) * a$b;
        i4.copyLastFrom(this._meshes.self, n6, h3);
      }
    }
  }
};
let s$a = class s {
};
let e$4 = class e2 {
  constructor() {
    this._defaultResult = null, this._backgroundFillResult = null;
  }
  static async from(s12, r8, l5, u4) {
    const n6 = new e2();
    return n6.setDefault(await i$5(s12, r8, l5.meshes, u4)), n6;
  }
  size() {
    return 1;
  }
  getDefault() {
    return this._defaultResult;
  }
  setDefault(t8) {
    this._defaultResult = t8;
  }
  getBackgroundFill() {
    return this._backgroundFillResult;
  }
  setBackgroundFill(t8) {
    this._backgroundFillResult = t8;
  }
  match(t8, e7) {
    const s12 = this.doMatch(t8, e7) || this.getDefault();
    if (s12 && s12.length > 0) {
      const t9 = this.getBackgroundFill();
      if (t9)
        return [...t9, ...s12];
    }
    return s12;
  }
  getSortKey(t8, e7) {
    return 0;
  }
  doMatch(t8, e7) {
    return null;
  }
  async fetchResources(t8, e7) {
  }
};
let s$9 = class s2 extends e$4 {
  static async fromDictionaryRenderer(t8, e7, r8) {
    return new s2(t8, e7, r8);
  }
  constructor(t8, e7, s12) {
    super(), this._storage = t8, this._schema = e7, this._viewParams = s12, this._hashToGroup = /* @__PURE__ */ new Map();
  }
  get fieldMap() {
    return this._schema.fieldMap;
  }
  async fetchResources(t8, e7) {
    const s12 = e7.getCursor(), r8 = [];
    for (; s12.next(); )
      r8.push(this._updateMeshWriterGroup(t8, s12));
    await Promise.all(r8);
  }
  match(t8, e7) {
    const s12 = t8.getAttributeHash();
    return this._hashToGroup.get(s12);
  }
  async _updateMeshWriterGroup(e7, s12) {
    const r8 = s12.readLegacyFeatureForDisplay(), a9 = s12.getAttributeHash();
    if (this._hashToGroup.has(a9))
      return;
    this._hashToGroup.set(a9, null);
    const h3 = await e7.fetchDictionaryResourceImmediate({ type: "dictionary-request", feature: r8 });
    if (!h3)
      return;
    const i4 = await i$5(this._storage, e7, h3.meshes, this._viewParams);
    this._hashToGroup.set(a9, i4);
  }
};
let s$8 = class s3 extends e$4 {
  constructor(t8, e7) {
    super(), this._intervals = [], this._isMaxInclusive = e7, this._field = t8;
  }
  static async fromIntervalSchema(e7, i4, a9, r8) {
    const n6 = await e7.createComputedField(a9), l5 = new s3(n6, a9.isMaxInclusive);
    await Promise.all(a9.intervals.map(async (s12) => {
      const a10 = await i$5(e7, i4, s12.meshes, r8);
      l5.add(s12, a10);
    }));
    const c3 = await i$5(e7, i4, a9.defaultSymbol, r8);
    l5.setDefault(c3);
    const u4 = await i$5(e7, i4, a9.backgroundFill, r8);
    return l5.setBackgroundFill(u4), l5;
  }
  add(t8, e7) {
    this._intervals.push({ interval: t8, result: e7 }), this._intervals.sort((t9, e8) => t9.interval.min - e8.interval.min);
  }
  size() {
    return super.size() + this._intervals.length;
  }
  doMatch(t8, e7) {
    const s12 = this._field?.read(t8, e7);
    if (null == s12 || isNaN(s12) || s12 === 1 / 0 || s12 === -1 / 0)
      return null;
    for (let i4 = 0; i4 < this._intervals.length; i4++) {
      const { interval: t9, result: e8 } = this._intervals[i4], a9 = s12 >= t9.min, r8 = this._isMaxInclusive ? s12 <= t9.max : s12 < t9.max;
      if (a9 && r8)
        return e8;
    }
    return null;
  }
};
let s$7 = class s4 extends e$4 {
  static async fromLabelSchema(a9, r8, t8, l5) {
    const c3 = t8.classes.map(async (s12) => {
      const t9 = await i$5(a9, r8, s12.meshes, l5);
      return { minScale: s12.minScale, maxScale: s12.maxScale, meshes: t9, expression: null, where: await a9.createWhereClause(s12.where) };
    }), i4 = await Promise.all(c3);
    return new s4(i4);
  }
  constructor(e7) {
    super(), this._labels = e7;
  }
  match(e7, a9) {
    if (!this._labels.length)
      return null;
    const s12 = this._getLabels(a9.$view.scale), r8 = [];
    for (const t8 of s12)
      t8.where && !t8.where(e7) || r8.push(...t8.meshes);
    return r8;
  }
  _getLabels(e7) {
    return this._labels.filter((a9) => this._validForTileScale(a9, e7));
  }
  _validForTileScale(e7, a9) {
    const s12 = a9 - a9 / 4, r8 = a9 + a9 / 2;
    return (!e7.minScale || e7.minScale >= s12) && (!e7.maxScale || e7.maxScale <= r8);
  }
};
let l$5 = class l extends e$4 {
  constructor(e7, t8) {
    super(), this._defaultSymbolSortKey = 0, this._nullResult = null, this._resultsMap = /* @__PURE__ */ new Map(), this._fields = [], this._fields = e7, this._separator = t8 || "";
  }
  static async fromMatcherSchema(t8, s12, r8, i4) {
    const u4 = r8.expression ? [t8.createComputedField({ expression: r8.expression })] : [r8.field ? t8.createComputedField({ field: r8.field }) : null, r8.field2 ? t8.createComputedField({ field: r8.field2 }) : null, r8.field3 ? t8.createComputedField({ field: r8.field3 }) : null], a9 = (await Promise.all(u4)).filter((e7) => !!e7), o8 = new l(a9, r8.fieldDelimiter), n6 = await i$5(t8, s12, r8.defaultSymbol, i4);
    o8.setDefault(n6);
    const d2 = await i$5(t8, s12, r8.backgroundFill, i4);
    return o8.setBackgroundFill(d2), await Promise.all(r8.map.map(async (l5, r9) => {
      const u5 = await i$5(t8, s12, l5.symbol, i4);
      "<Null>" === l5.value ? o8.setNullResult(u5) : o8.add(l5.value, u5, r9 + 1);
    })), o8;
  }
  setNullResult(e7) {
    this._nullResult = e7;
  }
  getSortKey(e7, t8) {
    const l5 = this._getValueFromFields(e7, t8);
    if (null == l5 || "" === l5 || "<Null>" === l5)
      return 0;
    const s12 = this._resultsMap.get(l5.toString());
    return s12 ? s12.sortKey : this._defaultSymbolSortKey;
  }
  add(e7, t8, l5) {
    this._resultsMap.set(e7.toString(), { meshWriters: t8, sortKey: l5 }), this._defaultSymbolSortKey = Math.max(this._defaultSymbolSortKey, l5 + 1);
  }
  size() {
    return super.size() + this._resultsMap.size;
  }
  doMatch(e7, t8) {
    const l5 = this._getValueFromFields(e7, t8);
    if (null !== this._nullResult && (null == l5 || "" === l5 || "<Null>" === l5))
      return this._nullResult;
    if (null == l5)
      return null;
    const s12 = l5.toString();
    return this._resultsMap.get(s12)?.meshWriters;
  }
  _getValueFromFields(e7, t8) {
    const l5 = [];
    for (const s12 of this._fields) {
      const r8 = s12.read(e7, t8);
      null == r8 || "" === r8 ? l5.push("<Null>") : l5.push(r8);
    }
    return l5.join(this._separator);
  }
};
async function c$3(c3, u4, i4, h3) {
  switch (i4.type) {
    case "simple":
    case "heatmap":
    case "dot-density":
    case "pie-chart":
      return e$4.from(c3, u4, i4, h3);
    case "interval":
      return s$8.fromIntervalSchema(c3, u4, i4, h3);
    case "dictionary":
      return s$9.fromDictionaryRenderer(c3, i4, h3);
    case "label":
      return s$7.fromLabelSchema(c3, u4, i4, h3);
    case "map":
      return l$5.fromMatcherSchema(c3, u4, i4, h3);
    case "subtype":
      return n$5.fromSubtypes(c3, u4, i4, h3);
    case "cluster":
      return o$9.fromClusterSchema(c3, u4, i4, h3);
    default:
      throw new Error("Impl");
  }
}
let n$5 = class n extends e$4 {
  constructor(e7, t8) {
    super(), this._subMatchers = e7, this._subtypeField = t8;
  }
  static async fromSubtypes(e7, t8, r8, s12) {
    const a9 = /* @__PURE__ */ new Map(), o8 = [];
    for (const n6 in r8.renderers) {
      const u4 = parseInt(n6, 10), i4 = c$3(e7, t8, r8.renderers[n6], s12).then((e8) => a9.set(u4, e8));
      o8.push(i4);
    }
    return await Promise.all(o8), new n(a9, r8.subtypeField);
  }
  match(e7, t8) {
    const r8 = e7.readAttribute(this._subtypeField), s12 = this._subMatchers.get(r8);
    return s12 ? s12.match(e7, t8) : null;
  }
};
let o$9 = class o extends e$4 {
  static async fromClusterSchema(e7, t8, r8, s12) {
    const [a9, n6] = await Promise.all([c$3(e7, t8, r8.feature, s12), c$3(e7, t8, r8.cluster, s12)]);
    return new o(a9, n6);
  }
  constructor(e7, t8) {
    super(), this._featureMatcher = e7, this._clusterMatcher = t8;
  }
  match(e7, t8) {
    return 1 === e7.readAttribute("cluster_count") ? this._featureMatcher.match(e7, t8) : this._clusterMatcher.match(e7, t8);
  }
};
let s$6 = class s5 extends s$a {
  static async create(e7, o8, r8, c3) {
    const i4 = await c$3(e7, o8, r8.symbology, c3), a9 = r8.labels ? await c$3(e7, o8, r8.labels, c3) : null;
    return new s5(i4, a9);
  }
  constructor(e7, t8) {
    super(), this._symbology = e7, this._labels = t8;
  }
  destroy() {
  }
  async enqueueMatcherRequests(e7, t8) {
    await Promise.all([this._symbology.fetchResources(e7, t8), this._labels?.fetchResources(e7, t8)]);
  }
  enqueueWriterRequests(e7, t8, s12) {
    const o8 = this._symbology.match(t8, s12);
    if (o8) {
      for (const r8 of o8)
        r8.enqueueRequest(e7, t8, s12);
      if (this._labels) {
        const o9 = this._labels.match(t8, s12);
        if (!o9)
          return;
        for (const r8 of o9)
          r8.enqueueRequest(e7, t8, s12);
      }
    }
  }
  write(e7, t8, s12, o8, r8) {
    const c3 = this._symbology.match(s12, o8);
    if (!c3)
      return;
    for (const i4 of c3)
      i4.write(e7, t8, s12, o8, r8);
    if (e7.entityRecordCount() >= 1 && this._labels) {
      const i4 = this._labels.match(s12, o8);
      if (!i4)
        return;
      for (const a9 of i4)
        a9.setReferences(c3), a9.write(e7, t8, s12, o8, r8);
    }
  }
  getSortKey(e7, t8) {
    return this._symbology.getSortKey(e7, t8);
  }
};
let e$3 = class e3 {
  constructor(e7) {
    this._outstandingMessages = [], this._queue = new _$3({ concurrency: e7.concurrency, process: (s12) => e7.process(s12) });
  }
  async push(s12) {
    if (s12.end)
      return await Promise.all(this._outstandingMessages), await this._queue.push(s12), void (this._outstandingMessages = []);
    const e7 = this._queue.push(s12);
    return this._outstandingMessages.push(e7), e7;
  }
};
let s$5 = class s6 {
  static async create(i4, e7) {
    if ("count" === e7.statisticType) {
      const i5 = new r$7(1);
      return new s6(e7.name, e7.alias, e7.type, e7.statisticType, i5);
    }
    const a9 = await i4.createComputedField({ expression: e7.onStatisticExpression?.expression, field: e7.onStatisticField });
    return new s6(e7.name, e7.alias, e7.type, e7.statisticType, a9);
  }
  constructor(t8, s12, i4, e7, a9) {
    this.name = t8, this.alias = s12, this.type = i4, this.statisticType = e7, this.computed = a9;
  }
};
let t$6 = class t {
  constructor(t8) {
    this.subscription = t8, this.handledChunks = /* @__PURE__ */ new Set();
  }
  destroy() {
  }
};
let e$2 = class e4 {
  constructor(t8, e7) {
    this._source = t8, this._attributeStore = e7, this._sendStates = /* @__PURE__ */ new Map();
  }
  destroy() {
  }
  get enablePixelBuffering() {
    return true;
  }
  onSubscribe(t8) {
    const e7 = this.createState(t8);
    this._sendStates.set(t8.key.id, e7), this.updateChunks();
  }
  onUnsubscribe(t8) {
    this._sendStates.get(t8.key.id)?.destroy(), this._sendStates.delete(t8.key.id);
  }
  invalidate() {
    const t8 = Array.from(this._sendStates.values());
    this._sendStates.clear();
    for (const e7 of t8)
      e7.destroy(), this.onSubscribe(e7.subscription);
  }
  invalidateAttributeData() {
  }
  getFeatureObjectIdsForAggregate(t8) {
    throw new Error("InternalError: AggregateId lookup not supported");
  }
  getDisplayIds(t8) {
    return this.displayMap(t8, (t9) => t9, (t9) => t9);
  }
  getDisplayAndObjectIds(t8) {
    return this.displayMap(t8, (t9) => t9, (t9, e7, s12) => [t9, s12]);
  }
  afterUpdateChunks() {
  }
};
let i$3 = class i extends e$2 {
  constructor(t8, r8, s12, o8) {
    super(t8, r8), this.spatialReference = s12, this.aggregateFields = o8, this.events = new o$c(), this.featureAdapter = o$d;
  }
  get aggregateQueryEngine() {
    return this._aggregateQueryEngine || (this._aggregateQueryEngine = new $({ featureStore: this, fieldsIndex: this._metadata.fieldsIndex, geometryType: this._metadata.geometryType, objectIdField: this._metadata.objectIdField, spatialReference: this.spatialReference })), this._aggregateQueryEngine;
  }
  removeChunks(e7) {
  }
  forEach(e7) {
    return this.forEachAggregateWorldSpace(e7);
  }
  forEachInBounds(e7, t8) {
  }
  forEachBounds(e7, a9) {
    const s12 = i$6();
    for (const t8 of e7) {
      const e8 = gt(s12, t8.geometry, false, false);
      e8 && a9(e8);
    }
  }
};
let e$1 = class e5 {
  constructor(e7, i4, t8, s12, r8) {
    this.subscription = e7, this.reader = i4, this.clear = t8, this.end = s12, this.debugInfo = r8, this.type = "append";
  }
  get id() {
    return this.subscription.tile.id;
  }
  createMessage(e7, i4, t8) {
    return { type: "append", clear: this.clear, id: this.id, append: e7, end: this.end, debugInfo: this.debugInfo, subscriptionVesrion: this.subscription.version, version: i4, attributeEpoch: t8 };
  }
};
let i$2 = class i2 {
  constructor(e7, i4, t8, s12, r8) {
    this.subscription = e7, this.reader = i4, this.remove = t8, this.end = s12, this.debugInfo = r8, this.type = "update";
  }
  get id() {
    return this.subscription.tile.id;
  }
  createMessage(e7, i4, t8) {
    return { type: "update", id: this.id, modify: e7, debugInfo: this.debugInfo, remove: this.remove, version: i4, subscriptionVesrion: this.subscription.version, end: this.end, attributeEpoch: t8 };
  }
};
let u$2 = class u extends M {
  static fromFeatures(t8, r8) {
    const { objectIdField: s12, geometryType: i4 } = r8, n6 = et([], t8, i4, false, false, s12);
    for (let e7 = 0; e7 < n6.length; e7++)
      n6[e7].displayId = t8[e7].displayId;
    return u.fromOptimizedFeatures(n6, r8);
  }
  static fromFeatureSet(e7, r8) {
    const s12 = ct(e7, r8.objectIdField);
    return u.fromOptimizedFeatureSet(s12, r8);
  }
  static fromOptimizedFeatureSet(e7, t8) {
    const r8 = u.fromOptimizedFeatures(e7.features, t8);
    return r8._exceededTransferLimit = e7.exceededTransferLimit, r8._transform = e7.transform, r8._fieldsIndex = new Z(e7.fields), r8;
  }
  static fromOptimizedFeatures(e7, t8, r8) {
    const s12 = new u(e7, t8);
    return s12._fieldsIndex = t8.fieldsIndex, s12._transform = r8, s12;
  }
  static empty(e7) {
    return new u([], e7);
  }
  constructor(e7, t8) {
    super(t8), this._exceededTransferLimit = false, this._featureIndex = -1, this._fieldsIndex = null, this._geometryType = t8.geometryType, this._features = e7;
  }
  get fields() {
    return this._fieldsIndex;
  }
  get geometryType() {
    return this._geometryType;
  }
  get hasFeatures() {
    return !!this._features.length;
  }
  get hasNext() {
    return this._featureIndex + 1 < this._features.length;
  }
  get exceededTransferLimit() {
    return this._exceededTransferLimit;
  }
  get hasZ() {
    return false;
  }
  get hasM() {
    return false;
  }
  get _current() {
    return this._features[this._featureIndex];
  }
  removeIds(e7) {
    const t8 = new Set(e7);
    this._features = this._features.filter((e8) => !(null != e8.objectId && t8.has(e8.objectId)));
  }
  getSize() {
    return this._features.length;
  }
  getCursor() {
    return this.copy();
  }
  getInTransform() {
    return this._transform;
  }
  getAttributeHash() {
    let e7 = "";
    for (const t8 in this._current.attributes)
      e7 += this._current.attributes[t8];
    return e7;
  }
  getIndex() {
    return this._featureIndex;
  }
  setIndex(e7) {
    this._featureIndex = e7;
  }
  getObjectId() {
    return this._current?.objectId;
  }
  getDisplayId() {
    return this._current.displayId;
  }
  setDisplayId(e7) {
    this._current.displayId = e7;
  }
  copy() {
    const e7 = new u(this._features, this.metadata);
    return this.copyInto(e7), e7;
  }
  next() {
    for (; ++this._featureIndex < this._features.length && !this._getExists(); )
      ;
    return this._featureIndex < this._features.length;
  }
  readGeometryArea() {
    return s$b(this._current) ? Nt(this._current.geometry, 2) : 0;
  }
  _readX() {
    return s$b(this._current) ? this._current.geometry.coords[0] : 0;
  }
  _readY() {
    return s$b(this._current) ? this._current.geometry.coords[1] : 0;
  }
  _readGeometry() {
    return s$b(this._current) ? this._current.geometry ?? null : null;
  }
  _readServerCentroid() {
    return this._current.centroid;
  }
  _readAttribute(e7, t8) {
    if (!this._fieldsIndex) {
      const t9 = this._current.attributes[e7];
      if (void 0 !== t9)
        return t9;
      const r9 = e7.toLowerCase();
      for (const e8 in this._current.attributes)
        if (e8.toLowerCase() === r9)
          return this._current.attributes[e8];
      return;
    }
    const r8 = this._fieldsIndex.get(e7);
    if (!r8)
      return;
    let s12 = this._current.attributes[r8.name];
    return null == s12 ? s12 : ("esriFieldTypeTimestampOffset" === this.fields.get(e7)?.type && (s12 = this.parseTimestampOffset(s12)), t8 && this.fields.isDateField(e7) ? new Date(s12) : s12);
  }
  _readAttributes() {
    return this._current.attributes;
  }
  copyInto(e7) {
    super.copyInto(e7), e7._featureIndex = this._featureIndex, e7._transform = this._transform, e7._fieldsIndex = this._fieldsIndex;
  }
};
let g$1 = class g2 extends t$6 {
  constructor(e7, t8) {
    super(e7), this.bins = /* @__PURE__ */ new Map(), this.done = false, this._store = t8;
  }
  reset() {
    this.destroy(), this.bins.clear(), this.done = false, this.handledChunks.clear();
  }
  destroy() {
    const e7 = this.subscription.tile.key.level;
    for (const t8 of this.bins.values()) {
      const s12 = t8.cachedFeature?.objectId;
      null != s12 && this._store.releaseDisplayIdForObjectId(`${s12}.${e7}`);
    }
  }
  *featuresWorldSpace() {
    for (const e7 of this.bins.values()) {
      const s12 = e7.cachedFeature;
      if (s12) {
        const e8 = s12.clone();
        e8.geometry && pt(e8.geometry, e8.geometry, false, false, this.subscription.tile.transform), yield e8;
      }
    }
  }
  getGeohashBounds(t8, s12) {
    const r8 = this.subscription.tile;
    return S$1(r8.extent, r8.resolution, s12, t8);
  }
};
let y$3 = class y extends i$3 {
  static async create(e7, t8, s12, r8, i4) {
    const n6 = new p$3({ spatialReference: t8 }), l5 = e7.fixedBinLevel, d2 = await Promise.all(e7.fields.map(async (e8) => s$5.create(n6, e8))), p2 = e7.featureFilter ? await p$4.create({ geometryType: s12.metadata.geometryType, hasM: false, hasZ: false, timeInfo: s12.metadata.timeInfo, fieldsIndex: s12.metadata.fieldsIndex, spatialReference: t8, filterJSON: e7.featureFilter }) : null;
    return await x(t8, f$4.WGS84), new y({ fields: d2, geohashLevel: l5, spatialReference: t8, featureFilter: p2, timeZone: i4 }, e7.fields, s12, r8);
  }
  constructor(e7, t8, s12, r8) {
    super(s12, r8, e7.spatialReference, e7.fields), this._indexOptions = e7, this._metadata = new i$7({ geometryType: "esriGeometryPolygon", objectIdField: "aggregateId", fields: t8, globalIdField: null, spatialReference: s12.metadata.spatialReference, subtypeField: null, subtypes: null, timeInfo: null, timeReferenceUnknownClient: null, typeIdField: null, types: null });
  }
  createState(e7) {
    return new g$1(e7, this._attributeStore);
  }
  async *applyOverride(e7) {
    for (const t8 of this._sendStates.values()) {
      t8.reset();
      const e8 = new e$1(t8.subscription, u$2.empty(this._source.metadata), true, false, {});
      yield e8;
    }
  }
  displayMap(e7, t8, s12) {
    const r8 = new Map(e7.map((e8) => [t8(e8), e8])), o8 = [];
    for (const a9 of this._sendStates.values())
      for (const e8 of a9.featuresWorldSpace()) {
        const { objectId: t9, displayId: a10 } = e8, i4 = r8.get(t9);
        if (null != i4) {
          const e9 = s12(a10, i4, t9);
          o8.push(e9), r8.delete(t9);
        }
      }
    return o8;
  }
  getDisplayFeatures(e7) {
    const t8 = new Set(e7), r8 = /* @__PURE__ */ new Set(), o8 = [];
    for (const a9 of this._sendStates.values())
      for (const e8 of a9.featuresWorldSpace())
        t8.has(e8.displayId) && !r8.has(e8.objectId) && (e8.geometry && o8.push({ ...nt(e8, this._metadata.geometryType, false, false), displayId: e8.displayId }), r8.add(e8.objectId));
    return { features: [], aggregates: o8 };
  }
  getFeatureObjectIdsForAggregate(e7) {
    for (const t8 of this._sendStates.values())
      for (const s12 of t8.bins.values())
        if (s12.id === e7)
          return Array.from(s12.objectIds);
    return [];
  }
  async *updateChunks() {
    if (this._source.chunks().length)
      for (const e7 of this._sendStates.values())
        yield* this._update(e7, this._source);
  }
  forEachAggregateWorldSpace(e7) {
    for (const t8 of this._sendStates.values())
      for (const s12 of t8.featuresWorldSpace())
        e7(s12);
  }
  async *_update(e7, t8) {
    const { handledChunks: s12, subscription: o8, bins: a9 } = e7, { spatialReference: i4, geohashLevel: n6 } = this._indexOptions, l5 = o8.tile;
    if (e7.done)
      return;
    for (const r8 of t8.chunks()) {
      if (s12.has(r8.chunkId))
        continue;
      s12.add(r8.chunkId);
      const t9 = r8.queryInfo;
      if ("tileId" in t9) {
        const e8 = new e$6(t9.tileId);
        if (e8.level !== l5.level || e8.world !== l5.key.world)
          continue;
      }
      const o9 = r8.getGeohashIndex(this._indexOptions), d2 = e7.getGeohashBounds(i4, n6);
      null != d2 && o9.putBins(a9, d2);
    }
    const c3 = [], u4 = o8.tile.transform, p2 = o8.tile.key.level;
    for (const d2 of a9.values()) {
      if (d2.cachedFeature)
        d2.cachedFeature.attributes = d2.getAttributes();
      else {
        const e8 = d2.getGeometry(this.spatialReference, u4), t9 = new t$7(e8, d2.getAttributes(), null);
        e8 || (t9.centroid = d2.getGeometryCentroid(this.spatialReference, u4)), t9.objectId = d2.id, t9.displayId = this._attributeStore.createDisplayIdForObjectId(`${t9.objectId}.${p2}`), d2.cachedFeature = t9;
      }
      c3.push(d2.cachedFeature);
    }
    this.events.emit("changed"), e7.done = !t8.updateTracking.updating;
    const m4 = u$2.fromOptimizedFeatures(c3, this._metadata, u4), g4 = m4.getCursor(), y4 = e7.subscription.tile.createArcadeEvaluationOptions(this._indexOptions.timeZone);
    for (; g4.next(); )
      this._attributeStore.setAttributeData(g4.getDisplayId(), g4, y4);
    const b2 = new i$2(e7.subscription, m4, [], e7.done, {});
    yield b2;
  }
};
const e6 = Math.PI / 180;
let s$4 = class s7 {
  static create(t8) {
    return new s7(t8.map((t9) => i$1(t9)));
  }
  constructor(t8) {
    this._statistics = t8;
  }
  values() {
    return this._statistics.values();
  }
  insert(t8, e7) {
    for (const s12 of this._statistics)
      s12.insert(t8, e7);
  }
  merge(t8) {
    for (let e7 = 0; e7 < this._statistics.length; e7++) {
      const s12 = this._statistics[e7], i4 = t8._statistics[e7];
      if (s12.field.name !== i4.field.name)
        throw new Error("InternalError: Tried to merge incompatible statistics");
      s12.merge(i4);
    }
  }
  clone() {
    return new s7(this._statistics.map((t8) => t8.clone()));
  }
};
function i$1(t8) {
  switch (t8.statisticType) {
    case "min":
      return new r$6(t8);
    case "max":
      return new u$1(t8);
    case "avg":
      return new c$2(t8);
    case "avg_angle":
      return new h$1(t8);
    case "sum":
    case "count":
      return new a$9(t8);
    case "mode":
      return new o$8(t8);
  }
}
let n$4 = class n2 {
  constructor(t8) {
    this.field = t8;
  }
  insert(e7, s12) {
    if (!this.field.computed)
      return;
    const i4 = this.field.computed.read(e7, s12);
    n$8(i4) || this._insertValue(i4);
  }
};
let r$6 = class r extends n$4 {
  constructor() {
    super(...arguments), this.type = "min", this.value = Number.MAX_VALUE;
  }
  _insertValue(t8) {
    this.value = Math.min(this.value, t8);
  }
  merge(t8) {
    this.value = Math.min(this.value, t8.value);
  }
  clone() {
    const t8 = new r(this.field);
    return t8.value = this.value, t8;
  }
};
let u$1 = class u2 extends n$4 {
  constructor() {
    super(...arguments), this.type = "max", this.value = Number.MIN_VALUE;
  }
  _insertValue(t8) {
    this.value = Math.max(this.value, t8);
  }
  merge(t8) {
    this.value = Math.max(this.value, t8.value);
  }
  clone() {
    const t8 = new u2(this.field);
    return t8.value = this.value, t8;
  }
};
let a$9 = class a extends n$4 {
  constructor() {
    super(...arguments), this.type = "sum", this.value = 0;
  }
  _insertValue(t8) {
    this.value += t8;
  }
  merge(t8) {
    this.value += t8.value;
  }
  clone() {
    const t8 = new a(this.field);
    return t8.value = this.value, t8;
  }
};
let c$2 = class c extends n$4 {
  constructor() {
    super(...arguments), this.type = "avg", this._total = 0, this._count = 0;
  }
  get value() {
    return this._total / this._count;
  }
  _insertValue(t8) {
    this._total += t8, this._count += 1;
  }
  merge(t8) {
    this._total += t8._total, this._count += t8._count;
  }
  clone() {
    const t8 = new c(this.field);
    return t8._total = this._total, t8._count = this._count, t8;
  }
};
let h$1 = class h extends n$4 {
  constructor() {
    super(...arguments), this.type = "avg_angle", this._x = 0, this._y = 0, this._count = 0;
  }
  get value() {
    const t8 = this._x / this._count, e7 = this._y / this._count, s12 = 180 / Math.PI;
    return Math.atan2(e7, t8) * s12;
  }
  _insertValue(t8) {
    this._x = this._x + Math.cos(t8 * e6), this._y = this._y + Math.sin(t8 * e6), this._count += 1;
  }
  merge(t8) {
    this._x += t8._x, this._y += t8._y, this._count += t8._count;
  }
  clone() {
    const t8 = new h(this.field);
    return t8._x = this._x, t8._y = this._y, t8._count = this._count, t8;
  }
};
let o$8 = class o2 extends n$4 {
  constructor() {
    super(...arguments), this._frequencies = /* @__PURE__ */ new Map();
  }
  get value() {
    let t8, e7 = 0;
    for (const [s12, i4] of this._frequencies.entries())
      i4 > e7 && (e7 = i4, t8 = s12);
    return t8;
  }
  _insertValue(t8) {
    const e7 = this._frequencies.get(t8);
    null != e7 ? this._frequencies.set(t8, e7 + 1) : this._frequencies.set(t8, 1);
  }
  merge(t8) {
    for (const [e7, s12] of t8._frequencies.entries()) {
      const t9 = this._frequencies.get(e7);
      null != t9 ? this._frequencies.set(e7, t9 + s12) : this._frequencies.set(e7, s12);
    }
  }
  clone() {
    const t8 = new o2(this.field);
    return t8._frequencies = new Map(this._frequencies), t8;
  }
};
let o$7 = class o3 {
  static createId(t8, r8) {
    return `${t8}.${r8}`;
  }
  static create(t8, r8, e7, s12) {
    return new o3(t8, r8, s$4.create(e7), s12);
  }
  constructor(t8, r8, e7, s12) {
    this.gridX = t8, this.gridY = r8, this._statistics = e7, this._worldUnitsPerCell = s12, this._count = 0, this._xWorldTotal = 0, this._yWorldTotal = 0, this._objectIds = /* @__PURE__ */ new Set();
  }
  get id() {
    return o3.createId(this.gridX, this.gridY);
  }
  get count() {
    return this._count;
  }
  get statistics() {
    return this._statistics;
  }
  get objectIds() {
    return this._objectIds;
  }
  get firstObjectId() {
    return this._objectIds.values().next().value;
  }
  get centroidXWorld() {
    return this._xWorldTotal / this._count;
  }
  get centroidYWorld() {
    return this._yWorldTotal / this._count;
  }
  clone() {
    const t8 = new o3(this.gridX, this.gridY, this._statistics.clone(), this._worldUnitsPerCell);
    return t8._count = this._count, t8._xWorldTotal = this._xWorldTotal, t8._yWorldTotal = this._yWorldTotal, t8._firstFeatureAttributes = this._firstFeatureAttributes, t8._objectIds = new Set(this._objectIds), t8;
  }
  insert(t8, r8, e7, s12) {
    0 === this._count ? this._firstFeatureAttributes = t8.readAttributes() : this._firstFeatureAttributes = null, this._count += 1, this._xWorldTotal += e7, this._yWorldTotal += s12, this._statistics.insert(t8, r8), this._objectIds.add(t8.getObjectId());
  }
  merge(t8) {
    if (0 !== t8._count) {
      this._count += t8._count, this._firstFeatureAttributes = t8._firstFeatureAttributes, this._xWorldTotal += t8._xWorldTotal, this._yWorldTotal += t8._yWorldTotal, this._statistics.merge(t8._statistics);
      for (const r8 of t8._objectIds.values())
        this._objectIds.add(r8);
    }
  }
  getCentroidX(r8) {
    return null == r8 ? this.centroidXWorld : N(r8, this.centroidXWorld);
  }
  getCentroidY(t8) {
    return null == t8 ? this.centroidYWorld : w(t8, this.centroidYWorld);
  }
  getCentroid(t8) {
    const r8 = new e$7([], [this.centroidXWorld, this.centroidYWorld]);
    if (null != t8) {
      const i4 = new e$7();
      return at(i4, r8, false, false, "esriGeometryPoint", t8);
    }
    return r8;
  }
  getGeometricCentroid(t8) {
    const r8 = this.gridX * this._worldUnitsPerCell + 0.5 * this._worldUnitsPerCell, i4 = this.gridY * this._worldUnitsPerCell + 0.5 * this._worldUnitsPerCell, o8 = new e$7([], [r8, i4]);
    if (null != t8) {
      const r9 = new e$7();
      return at(r9, o8, false, false, "esriGeometryPoint", t8);
    }
    return o8;
  }
  getAttributes() {
    const t8 = { aggregateId: this.id };
    for (const r8 of this._statistics.values())
      t8[r8.field.name] = r8.value;
    return null != this._firstFeatureAttributes ? { ...t8, ...this._firstFeatureAttributes } : t8;
  }
};
const o$6 = 96;
function l$4(i4, s12) {
  return W(i4) * o$e * o$6 / s12;
}
let r$5 = class r2 {
  constructor(e7) {
    this._options = e7, this._cells = /* @__PURE__ */ new Map(), this._pixelsPerMapUnit = l$4(e7.spatialReference, e7.scale);
  }
  insert(e7, t8) {
    const i4 = e7.getCursor(), s12 = { $view: { scale: this._options.scale, timeZone: this._options.timeZone } };
    for (; i4.next(); )
      this._insertFeature(i4, s12, t8);
  }
  putCellsInBounds(e7, t8) {
    const [i4, s12, o8, l5] = t8, r8 = Math.floor(i4 * this._pixelsPerMapUnit / this._options.cellSize), n6 = Math.floor(s12 * this._pixelsPerMapUnit / this._options.cellSize), c3 = Math.ceil(o8 * this._pixelsPerMapUnit / this._options.cellSize), p2 = Math.ceil(l5 * this._pixelsPerMapUnit / this._options.cellSize);
    for (let a9 = n6; a9 <= p2; a9++)
      for (let t9 = r8; t9 <= c3; t9++) {
        const i5 = `${t9}.${a9}`, s13 = this._cells.get(i5);
        if (!s13)
          continue;
        const o9 = e7.get(s13.id);
        o9 ? s13 && !e7.has(s13.id) && o9.merge(s13) : e7.set(s13.id, s13.clone());
      }
  }
  putCells(e7) {
    for (const t8 of this._cells.values()) {
      const i4 = e7.get(t8.id);
      i4 ? i4.merge(t8) : e7.set(t8.id, t8.clone());
    }
  }
  _insertFeature(e7, t8, s12) {
    const { featureFilter: o8 } = this._options;
    if (null !== o8 && !o8.check(e7))
      return;
    let l5 = 0, r8 = 0;
    if ("esriGeometryPoint" === e7.geometryType)
      l5 = e7.readXWorldSpace(), r8 = e7.readYWorldSpace();
    else {
      if (s12) {
        const t10 = e7.readCentroidForDisplay();
        if (null == t10)
          return;
        const [s13, o9] = t10.coords;
        if (s13 < 0 || s13 > a$b || o9 < 0 || o9 > a$b)
          return;
      }
      const t9 = e7.readCentroidWorldSpace();
      if (null == t9)
        return;
      l5 = t9.coords[0], r8 = t9.coords[1];
    }
    const n6 = l5 * this._pixelsPerMapUnit, c3 = r8 * this._pixelsPerMapUnit, p2 = Math.floor(n6 / this._options.cellSize), a9 = Math.floor(c3 / this._options.cellSize);
    this._getCellOrCreate(p2, a9).insert(e7, t8, l5, r8);
  }
  _getCellOrCreate(e7, t8) {
    const i4 = o$7.createId(e7, t8);
    let o8 = this._cells.get(i4);
    if (!o8) {
      const l5 = 1 * this._options.cellSize / this._pixelsPerMapUnit;
      o8 = o$7.create(e7, t8, this._options.fields, l5), this._cells.set(i4, o8);
    }
    return o8;
  }
};
let s$3 = class s8 {
  constructor(s12, t8) {
    this.inner = s12, this.displayId = t8;
  }
};
const _$1 = 128;
let m$3 = class m extends t$6 {
  constructor(e7) {
    super(e7), this.didSend = false, this.done = false;
  }
};
let y$2 = class y2 {
  constructor(e7, t8, s12, i4, r8) {
    this._level = e7, this._scale = t8, this._indexOptions = s12, this._clusterRadius = i4, this._store = r8, this._cells = /* @__PURE__ */ new Map(), this._handledChunks = /* @__PURE__ */ new Set(), this._statistics = /* @__PURE__ */ new Map(), this._clusters = /* @__PURE__ */ new Map();
  }
  destroy() {
    this._clearClusters();
  }
  _clearClusters() {
    for (const e7 of this._clusters.values())
      this._store.releaseDisplayIdForObjectId(e7.inner.id);
    this._clusters.clear();
  }
  *aggregatesWorldSpace() {
    for (const e7 of this._clusters.values()) {
      const s12 = e7.inner.getCentroid(null), i4 = new t$7(s12, e7.inner.getAttributes(), null);
      i4.objectId = e7.inner.id, i4.displayId = e7.displayId, yield i4;
    }
  }
  clusters() {
    return this._clusters.values();
  }
  updateChunks(e7, t8) {
    let s12 = false;
    for (const a9 of e7) {
      const e8 = a9.queryInfo;
      if ("tileId" in e8) {
        if (new e$6(e8.tileId).level !== this._level)
          continue;
      }
      if (!this._handledChunks.has(a9.normalizedChunkId)) {
        this._handledChunks.add(a9.normalizedChunkId), s12 = true;
        a9.getGridIndex({ ...this._indexOptions, scale: this._scale }).putCells(this._cells);
      }
    }
    const i4 = { xMin: 1 / 0, yMin: 1 / 0, xMax: -1 / 0, yMax: -1 / 0 }, r8 = l$4(this._indexOptions.spatialReference, this._scale), n6 = this._indexOptions.cellSize;
    for (const { subscription: a9 } of t8) {
      const e8 = a9.tile.bounds, t9 = Math.floor(e8[0] * r8 / n6), s13 = Math.floor(e8[1] * r8 / n6), l5 = Math.ceil(e8[2] * r8 / n6), o8 = Math.ceil(e8[3] * r8 / n6);
      i4.xMin = Math.min(i4.xMin, t9), i4.yMin = Math.min(i4.yMin, s13), i4.xMax = Math.max(i4.xMax, l5), i4.yMax = Math.max(i4.yMax, o8);
    }
    return null != this._lastCellBounds && i4.xMin === this._lastCellBounds.xMin && i4.yMin === this._lastCellBounds.yMin && i4.yMin === this._lastCellBounds.yMin && i4.yMax === this._lastCellBounds.yMax || (s12 = true, this._lastCellBounds = i4), s12 && this._clusterCells(i4), s12;
  }
  async updateStatistics(e7) {
    let t8 = false;
    for (const s12 of this._clusters.values())
      s12.inner.count > 1 && (t8 = this._updateAggregateStatistics(this._statistics, s12.inner) || t8);
    if (t8) {
      const t9 = Array.from(this._statistics.entries()).map(([e8, t10]) => ({ fieldName: e8, minValue: t10.minValue, maxValue: t10.maxValue }));
      await e7.container.updateStatistics(this._level, t9);
    }
  }
  createAggregateFeatures(e7, r8) {
    const n6 = e7.subscription, a9 = [], l5 = n6.tile.transform;
    for (const o8 of this._clusters.values()) {
      let e8 = o8.inner.getCentroidX(l5);
      const r9 = o8.inner.getCentroidY(l5), d2 = n6.tile.lod, c3 = d2.wrap ? d2.worldSize[0] : null, u4 = 1 === o8.inner.count ? o8.inner.firstObjectId : o8.inner.id, h3 = o8.displayId;
      if (null != c3)
        if (1 === c3) {
          const n7 = new e$7([], [e8, r9]), l6 = new t$7(n7, o8.inner.getAttributes(), null);
          l6.geometry.coords[0] -= a$b, l6.objectId = u4, l6.displayId = h3, a9.push(l6);
          const d3 = new e$7([], [e8, r9]), c4 = new t$7(d3, o8.inner.getAttributes(), null);
          c4.geometry.coords[0] += a$b, c4.objectId = u4, c4.displayId = h3, a9.push(c4);
        } else
          e8 > a$b + a$b / 2 ? e8 -= c3 * a$b : e8 < -a$b / 2 && (e8 += c3 * a$b);
      if (e8 < a$b + _$1 && e8 >= -_$1 && r9 < a$b + _$1 && r9 >= -_$1) {
        const i4 = new e$7([], [e8, r9]), n7 = new t$7(i4, o8.inner.getAttributes(), null);
        n7.objectId = u4, n7.displayId = h3, a9.push(n7);
      }
    }
    return u$2.fromOptimizedFeatures(a9, r8, n6.tile.transform);
  }
  _clusterCells(e7) {
    let t8 = Array.from(this._cells.values());
    t8 = t8.sort((e8, t9) => t9.count - e8.count);
    const s12 = [];
    for (const n6 of this._clusters.values())
      s12.push(n6.inner.id);
    this._clusters.clear();
    const i4 = this._clusterRadius * (1 / l$4(this._indexOptions.spatialReference, this._scale)), r8 = 1 + this._clusterRadius / this._indexOptions.cellSize, l5 = /* @__PURE__ */ new Set();
    for (const a9 of t8) {
      if (l5.has(a9.id))
        continue;
      if (a9.gridX < e7.xMin || a9.gridX > e7.xMax || a9.gridY < e7.yMin || a9.gridY > e7.yMax)
        continue;
      const t9 = this._store.createDisplayIdForObjectId(a9.id), s13 = new s$3(a9.clone(), t9);
      l5.add(a9.id), this._clusters.set(a9.id, s13);
      const o8 = a9.centroidXWorld, c3 = a9.centroidYWorld;
      for (let e8 = a9.gridY - r8; e8 <= a9.gridY + r8; e8++)
        for (let t10 = a9.gridX - r8; t10 <= a9.gridX + r8; t10++) {
          if (e8 === a9.gridY && t10 === a9.gridX)
            continue;
          const r9 = this._cells.get(o$7.createId(t10, e8));
          if (!r9 || l5.has(r9.id))
            continue;
          const d2 = Math.abs(r9.centroidXWorld - o8), u4 = Math.abs(r9.centroidYWorld - c3);
          d2 < i4 && u4 < i4 && (s13.inner.merge(r9), l5.add(r9.id));
        }
    }
    for (const n6 of s12)
      this._store.releaseDisplayIdForObjectId(n6);
  }
  _updateAggregateStatistics(e7, t8) {
    let s12 = false;
    for (const i4 of t8.statistics.values()) {
      if ("esriFieldTypeString" === i4.field.type)
        continue;
      const t9 = i4.value, r8 = i4.field, n6 = e7.get(r8.name);
      if (n6) {
        const { minValue: e8, maxValue: i5 } = n6, r9 = Math.min(n6.minValue, t9), a9 = Math.max(n6.maxValue, t9);
        e8 === r9 && i5 === a9 || (n6.minValue = r9, n6.maxValue = a9, s12 = true);
      } else
        e7.set(r8.name, { minValue: t9, maxValue: t9 }), s12 = true;
    }
    return s12;
  }
};
class S extends i$3 {
  static async create(e7, t8, s12, i4, n6, a9) {
    const l5 = new p$3({ spatialReference: s12 }), o8 = { fields: await Promise.all(t8.fields.map(async (e8) => s$5.create(l5, e8))), spatialReference: s12, featureFilter: t8.featureFilter ? await p$4.create({ geometryType: i4.metadata.geometryType, hasM: false, hasZ: false, timeInfo: i4.metadata.timeInfo, fieldsIndex: i4.metadata.fieldsIndex, spatialReference: s12, filterJSON: t8.featureFilter }) : null, cellSize: t8.clusterRadius / 4, timeZone: a9 };
    return new S(e7, t8.clusterRadius, o8, t8.fields, i4, n6);
  }
  constructor(e7, t8, s12, i4, r8, n6) {
    super(r8, n6, s12.spatialReference, s12.fields), this._connection = e7, this._clusterRadius = t8, this._indexOptions = s12, this._cellsPerScale = /* @__PURE__ */ new Map(), this._metadata = new i$7({ geometryType: "esriGeometryPoint", objectIdField: "aggregateId", fields: [...i4, ...this._source.metadata.fieldsIndex.fields, { name: "aggregateId", alias: "aggregateId", type: "esriFieldTypeOID" }], globalIdField: null, spatialReference: r8.metadata.spatialReference, subtypeField: null, subtypes: null, timeInfo: null, timeReferenceUnknownClient: null, typeIdField: null, types: null });
  }
  get enablePixelBuffering() {
    return false;
  }
  invalidate() {
    super.invalidate();
    for (const e7 of this._cellsPerScale.values())
      e7.destroy();
    this._cellsPerScale.clear();
  }
  onSubscribe(e7) {
    super.onSubscribe(e7), this._requiredLevel = e7.tile.level, this._requiredScale = e7.tile.scale;
  }
  createState(e7) {
    return new m$3(e7);
  }
  async *applyOverride(e7) {
    for (const t8 of this._cellsPerScale.values())
      t8.destroy();
    this._cellsPerScale.clear();
    for (const t8 of this._sendStates.values())
      t8.done = false;
  }
  displayMap(e7, t8, s12) {
    const i4 = new Map(e7.map((e8) => [t8(e8), e8])), r8 = [], n6 = this._getClusterState(this._requiredLevel, this._requiredScale);
    for (const a9 of n6.clusters()) {
      const e8 = i4.get(a9.inner.id);
      if (null == e8) {
        if (1 === a9.inner.count) {
          const e9 = i4.get(a9.inner.firstObjectId);
          if (null != e9) {
            const t9 = s12(a9.displayId, e9, a9.inner.firstObjectId);
            r8.push(t9), i4.delete(a9.inner.firstObjectId);
          }
        }
      } else {
        const t9 = s12(a9.displayId, e8, a9.inner.id);
        r8.push(t9), i4.delete(a9.inner.id);
      }
    }
    return r8;
  }
  getDisplayFeatures(t8) {
    const s12 = new Set(t8), i4 = /* @__PURE__ */ new Set(), r8 = [], n6 = [], a9 = this._getClusterState(this._requiredLevel, this._requiredScale);
    for (const l5 of a9.aggregatesWorldSpace())
      if (s12.has(l5.displayId) && !i4.has(l5.displayId)) {
        const t9 = nt(l5, this._metadata.geometryType, false, false);
        if (i4.add(l5.displayId), 1 === t9.attributes.cluster_count) {
          r8.push({ ...t9, displayId: l5.displayId });
          continue;
        }
        n6.push({ ...t9, displayId: l5.displayId });
      }
    return { features: r8, aggregates: n6 };
  }
  getFeatureObjectIdsForAggregate(e7) {
    const t8 = this._getClusterState(this._requiredLevel, this._requiredScale);
    for (const s12 of t8.clusters())
      if (s12.inner.id === e7)
        return Array.from(s12.inner.objectIds);
    return [];
  }
  async *updateChunks() {
    const e7 = this._source.chunks();
    if (!e7.length)
      return;
    const t8 = this._getClusterState(this._requiredLevel, this._requiredScale), s12 = Array.from(this._sendStates.values()).filter((e8) => e8.subscription.tile.level === this._requiredLevel);
    if (t8.updateChunks(e7, s12) || !this._source.updateTracking.updating)
      for (const n6 of s12)
        n6.subscription.tile.level === this._requiredLevel && (n6.didSend = false, n6.done = false);
    const i4 = Array.from(this._sendStates.values()).filter((e8) => e8.done).map((e8) => e8.subscription.tile.key), r8 = new Set(i4);
    for (const n6 of this._sendStates.values()) {
      if (this._source.updateTracking.updating) {
        if (i4.some((e8) => e8.containsChild(n6.subscription.tile.key)))
          continue;
        if (n6.subscription.tile.key.getChildKeys().every((e8) => r8.has(e8)))
          continue;
      }
      n6.didSend || n6.subscription.tile.level !== this._requiredLevel || (n6.didSend = true, yield* this._update(n6, t8, this._source));
    }
    await t8.updateStatistics(this._connection);
  }
  forEachAggregateWorldSpace(e7) {
    if (null == this._requiredLevel || null == this._requiredScale)
      return;
    const t8 = this._getClusterState(this._requiredLevel, this._requiredScale);
    for (const s12 of t8.aggregatesWorldSpace())
      e7(s12);
  }
  _getClusterState(e7, t8) {
    if (null == e7 || null == t8)
      throw new Error("InternalError: Level and scale must be defined");
    let s12 = this._cellsPerScale.get(t8);
    return s12 || (s12 = new y$2(e7, t8, this._indexOptions, this._clusterRadius, this._attributeStore), this._cellsPerScale.set(t8, s12)), s12;
  }
  async *_update(e7, t8, s12) {
    if (e7.done)
      return;
    const i4 = t8.createAggregateFeatures(e7, this._metadata);
    this.events.emit("changed"), e7.done = !s12.updateTracking.updating;
    const r8 = i4.getCursor(), n6 = e7.subscription.tile.createArcadeEvaluationOptions(this._indexOptions.timeZone);
    for (; r8.next(); )
      this._attributeStore.setAttributeData(r8.getDisplayId(), r8, n6);
    const a9 = new e$1(e7.subscription, i4, true, e7.done, {});
    yield a9;
  }
}
let t$5 = class t2 {
  static fromReader(o8) {
    const e7 = [], r8 = o8.copy(), a9 = i$6();
    for (; r8.next(); ) {
      r8.getBounds(a9) && e7.push(r8.getIndex());
    }
    const i4 = i$8(9, (n6) => (r8.setIndex(n6), { minX: r8.getBoundsXMin(), minY: r8.getBoundsYMin(), maxX: r8.getBoundsXMax(), maxY: r8.getBoundsYMax() }));
    return i4.load(e7), new t2(i4);
  }
  constructor(n6) {
    this._index = n6;
  }
  search(n6) {
    const s12 = { minX: n6[0], minY: n6[1], maxX: n6[2], maxY: n6[3] };
    return this._index.search(s12);
  }
};
let a$8 = class a2 {
  static create(t8, e7, s12, o8) {
    const i4 = s$4.create(t8), r8 = new Array(32);
    for (let h3 = 0; h3 < r8.length; h3++)
      r8[h3] = null;
    return new a2(i4, e7, s12, o8, r8);
  }
  constructor(t8, e7, s12, o8, i4) {
    this._statistics = t8, this.xNode = e7, this.yNode = s12, this.depth = o8, this.children = i4, this._objectIds = /* @__PURE__ */ new Set(), this._count = 0, this._xWorldTotal = 0, this._yWorldTotal = 0, this._xGeohashTotal = 0, this._yGeohashTotal = 0, this.next = null;
  }
  get id() {
    return `${this.xNode}.${this.yNode}`;
  }
  get objectIds() {
    return this._objectIds;
  }
  clone() {
    const t8 = new a2(this._statistics.clone(), this.xNode, this.yNode, this.depth, this.children);
    return t8._count = this._count, t8._xWorldTotal = this._xWorldTotal, t8._yWorldTotal = this._yWorldTotal, t8._xGeohashTotal = this._xGeohashTotal, t8._yGeohashTotal = this._yGeohashTotal, t8.next = this.next, t8.cachedFeature = this.cachedFeature, t8._objectIds = new Set(this._objectIds), t8;
  }
  insert(t8, e7, s12, o8, i4, r8) {
    this._count += 1, this._xWorldTotal += e7, this._yWorldTotal += s12, this._xGeohashTotal += o8, this._yGeohashTotal += i4, this._statistics.insert(t8, r8), this._objectIds.add(t8.getObjectId());
  }
  merge(t8) {
    if (0 !== t8._count) {
      this._count += t8._count, this._xWorldTotal += t8._xWorldTotal, this._yWorldTotal += t8._yWorldTotal, this._xGeohashTotal += t8._xWorldTotal, this._yGeohashTotal += t8._yWorldTotal, this._statistics.merge(t8._statistics);
      for (const e7 of t8._objectIds.values())
        this._objectIds.add(e7);
    }
  }
  getGeometry(t8, i4) {
    const n6 = this._getLngLatBounds(), [a9, l5, c3, d2] = n6, _2 = j({ rings: [[[a9, l5], [a9, d2], [c3, d2], [c3, l5], [a9, l5]]] }, f$4.WGS84, t8), u4 = K(new e$7(), _2, false, false);
    if (null != i4) {
      return at(new e$7(), u4, false, false, "esriGeometryPolygon", i4, false, false);
    }
    return u4;
  }
  getGeometryCentroid(t8, s12) {
    const n6 = this._getLngLatBounds(), [a9, l5, c3, d2] = n6, _2 = j({ x: (a9 + c3) / 2, y: (l5 + d2) / 2 }, f$4.WGS84, t8), u4 = O(new e$7(), _2);
    if (null != s12) {
      return at(new e$7(), u4, false, false, "esriGeometryPoint", s12, false, false);
    }
    return u4;
  }
  getAttributes() {
    const t8 = { aggregateId: this.id };
    for (const e7 of this._statistics.values())
      t8[e7.field.name] = e7.value;
    return t8.aggregateCount = this._count, t8;
  }
  _getLngLatBounds() {
    const e7 = this.depth, s12 = Math.ceil(e7 / 2), o8 = Math.floor(e7 / 2), i4 = 30 - (3 * s12 + 2 * o8), r8 = 30 - (2 * s12 + 3 * o8), h3 = this.xNode << i4, n6 = this.yNode << r8;
    return R({ geohashX: h3, geohashY: n6 }, this.depth);
  }
};
let l$3 = class l2 {
  constructor(t8) {
    this._fields = t8, this._root = a$8.create(this._fields, 0, 0, 0);
  }
  destroy() {
  }
  insert(t8, e7, s12, o8, i4, r8, h3) {
    let n6 = this._root, l5 = 0, c3 = 0, d2 = 0;
    for (; null !== n6; ) {
      if (n6.insert(t8, e7, s12, o8, i4, h3), l5 >= r8)
        return;
      const _2 = Math.ceil((l5 + 1) / 2), u4 = Math.floor((l5 + 1) / 2), g4 = 1 - l5 % 2, x2 = 30 - (3 * _2 + 2 * u4), y4 = 30 - (2 * _2 + 3 * u4), f3 = (o8 & 7 * g4 + 3 * (1 - g4) << x2) >> x2, m4 = (i4 & 3 * g4 + 7 * (1 - g4) << y4) >> y4, T = f3 + m4 * (8 * g4 + 4 * (1 - g4));
      c3 = c3 << 3 * g4 + 2 * (1 - g4) | f3, d2 = d2 << 2 * g4 + 3 * (1 - g4) | m4, null == n6.children[T] && (n6.children[T] = a$8.create(this._fields, c3, d2, l5 + 1)), l5 += 1, n6 = n6.children[T];
    }
  }
  putBins(t8, e7) {
    for (const s12 of this.getNodes(e7)) {
      const e8 = t8.get(s12.id);
      e8 ? e8.merge(s12) : t8.set(s12.id, s12.clone());
    }
  }
  getNodes(t8) {
    const e7 = [], { geohashBounds: s12, level: o8 } = t8;
    let i4 = this._root;
    for (; null !== i4; ) {
      const t9 = i4.depth, r8 = i4.xNode, h3 = i4.yNode;
      if (t9 >= o8) {
        e7.push(i4), i4 = i4.next;
        continue;
      }
      const n6 = Math.ceil((t9 + 1) / 2), a9 = Math.floor((t9 + 1) / 2), l5 = 1 - t9 % 2, c3 = 30 - (3 * n6 + 2 * a9), d2 = 30 - (2 * n6 + 3 * a9), _2 = ~((1 << c3) - 1), u4 = ~((1 << d2) - 1), g4 = (s12.xLL & _2) >> c3, x2 = (s12.yLL & u4) >> d2, y4 = (s12.xTR & _2) >> c3, f3 = (s12.yTR & u4) >> d2, m4 = r8 << 3 * l5 + 2 * (1 - l5), T = h3 << 2 * l5 + 3 * (1 - l5), p2 = m4 + 8 * l5 + 4 * (1 - l5), G = T + 4 * l5 + 8 * (1 - l5), j2 = Math.max(m4, g4), W2 = Math.max(T, x2), N2 = Math.min(p2, y4), b2 = Math.min(G, f3);
      let w2 = null, I2 = null;
      for (let e8 = W2; e8 <= b2; e8++)
        for (let t10 = j2; t10 <= N2; t10++) {
          const s13 = t10 - m4 + (e8 - T) * (8 * l5 + 4 * (1 - l5)), o9 = i4.children[s13];
          o9 && (w2 || (w2 = o9, w2.next = i4.next), I2 && (I2.next = o9), I2 = o9, o9.next = i4.next);
        }
      i4 = w2 || i4.next;
    }
    return e7;
  }
};
let o$5 = class o4 {
  constructor(t8) {
    this._options = t8, this._tree = new l$3(t8.fields);
  }
  insert(e7, t8) {
    const r8 = e7.getCursor(), o8 = { $view: { scale: 0, timeZone: this._options.timeZone } };
    for (; r8.next(); )
      this._insertFeature(r8, o8, t8);
  }
  putBins(e7, t8) {
    this._tree.putBins(e7, t8);
  }
  _insertFeature(e7, o8, s12) {
    const { featureFilter: i4, geohashLevel: n6, spatialReference: a9 } = this._options;
    if (null !== i4 && !i4.check(e7))
      return;
    let l5 = 0, c3 = 0;
    if ("esriGeometryPoint" === e7.geometryType)
      l5 = e7.readXWorldSpace(), c3 = e7.readYWorldSpace();
    else {
      if (s12) {
        const t9 = e7.readCentroidForDisplay();
        if (null == t9)
          return;
        const [o9, s13] = t9.coords;
        if (o9 < 0 || o9 > a$b || s13 < 0 || s13 > a$b)
          return;
      }
      const t8 = e7.readCentroidWorldSpace();
      if (null == t8)
        return;
      l5 = t8.coords[0], c3 = t8.coords[1];
    }
    const h3 = A(l5, c3, n6, a9);
    h3 && this._tree.insert(e7, l5, c3, h3[0], h3[1], n6, o8);
  }
};
let a$7 = class a3 extends M {
  static from(e7, r8) {
    return new a3(e7.copy(), r8);
  }
  constructor(e7, r8) {
    super(e7.metadata), this._currentIndex = -1, this._displayTranslationX = 0, this._displayTranslationY = 0, this._displayScaleX = 1, this._displayScaleY = 1, this._reader = e7, this._indices = r8, this._isPoint = "esriGeometryPoint" === e7.geometryType;
  }
  setTransformForDisplay(e7) {
    const r8 = this._reader.getInTransform();
    if (null == r8) {
      const [r9, t9] = e7.scale, [s13, a10] = e7.translate;
      return this._displayTranslationX = -s13 / r9, this._displayScaleX = 1 / r9, this._displayTranslationY = a10 / t9, this._displayScaleY = 1 / -t9, void (this._displayTransform = e7);
    }
    const [t8, s12] = r8.scale, [a9, i4] = r8.translate, [d2, n6] = e7.scale, [o8, l5] = e7.translate;
    if (this._displayScaleX = t8 / d2, this._displayTranslationX = (a9 - o8) / d2, this._displayScaleY = s12 / n6, this._displayTranslationY = (-i4 + l5) / n6, !this._isPoint && r8)
      throw new Error("InternalError: Relative transformations not supported for non-point features");
    this._displayTransform = e7;
  }
  getInTransform() {
    return this._reader.getInTransform();
  }
  get fields() {
    return this._reader.fields;
  }
  get hasNext() {
    return this._currentIndex + 1 < this._indices.length;
  }
  getSize() {
    return this._indices.length;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const e7 = new a3(this._reader.copy(), this._indices);
    return e7._currentIndex = this._currentIndex, e7._displayTransform = this._displayTransform, e7._displayTranslationX = this._displayTranslationX, e7._displayTranslationY = this._displayTranslationY, e7._displayScaleX = this._displayScaleX, e7._displayScaleY = this._displayScaleY, e7;
  }
  get contextTimeZone() {
    return this._reader.contextTimeZone;
  }
  set contextTimeZone(e7) {
    this._reader.contextTimeZone = e7;
  }
  _nextIndex() {
    return ++this._currentIndex < this._indices.length && (this._reader.setIndex(this._indices[this._currentIndex]), true);
  }
  next() {
    for (; this._nextIndex() && !this._reader._getExists(); )
      ;
    return this._currentIndex < this._indices.length;
  }
  readXForDisplay() {
    return this._reader.readXForDisplay() * this._displayScaleX + this._displayTranslationX;
  }
  readYForDisplay() {
    return this._reader.readYForDisplay() * this._displayScaleY + this._displayTranslationY;
  }
  readGeometryForDisplay() {
    const r8 = this._reader.readGeometryForDisplay();
    if (!this._displayTransform)
      return r8;
    const s12 = new e$7();
    return at(s12, r8, this.hasZ, this.hasM, this.geometryType, this._displayTransform), s12.deltaDecode();
  }
  readCentroidForDisplay() {
    const e7 = this._reader.readCentroidForDisplay()?.clone();
    if (e7) {
      const [r8, t8] = e7.coords;
      e7.coords[0] = r8 * this._displayScaleX + this._displayTranslationX, e7.coords[1] = t8 * this._displayScaleY + this._displayTranslationY;
    }
    return e7;
  }
  get geometryType() {
    return this._reader.geometryType;
  }
  get hasFeatures() {
    return this._reader.hasFeatures;
  }
  get exceededTransferLimit() {
    return this._reader.exceededTransferLimit;
  }
  get hasZ() {
    return this._reader.hasZ;
  }
  get hasM() {
    return this._reader.hasM;
  }
  readAttribute(e7, r8 = false) {
    return this._reader.readAttribute(e7, r8);
  }
  readAttributes() {
    return this._reader.readAttributes();
  }
  joinAttributes(e7) {
    return this._reader.joinAttributes(e7);
  }
  getBounds(e7) {
    return this._reader.getBounds(e7);
  }
  getAttributeHash() {
    return this._reader.getAttributeHash();
  }
  getObjectId() {
    return this._reader.getObjectId();
  }
  getDisplayId() {
    return this._reader.getDisplayId();
  }
  setDisplayId(e7) {
    return this._reader.setDisplayId(e7);
  }
  setIndex(e7) {
    return this._reader.setIndex(e7);
  }
  getIndex() {
    return this._reader.getIndex();
  }
  readXWorldSpace() {
    return this._reader.readXWorldSpace();
  }
  readYWorldSpace() {
    return this._reader.readYWorldSpace();
  }
  _readX() {
    return this._reader.readXForDisplay();
  }
  _readY() {
    return this._reader.readYForDisplay();
  }
  _readServerCentroid() {
    return this._reader._readServerCentroid();
  }
  readLegacyFeatureForDisplay() {
    const e7 = this.readCentroidForDisplay();
    return { attributes: this.readAttributes(), geometry: this.readLegacyGeometryForDisplay(), centroid: (e7 && { x: e7.coords[0], y: e7.coords[1] }) ?? null };
  }
  readLegacyGeometryForDisplay() {
    const e7 = this.readGeometryForDisplay();
    return rt(e7, this.geometryType, false, false);
  }
  readGeometryArea() {
    return this._reader.readGeometryArea();
  }
  readGeometryWorldSpace() {
    return this._reader.readGeometryWorldSpace();
  }
  _readGeometry() {
    return this._reader._readGeometry();
  }
  _readAttribute(e7, r8) {
    throw new Error("Error: Should not be called. Underlying _reader should be used instead");
  }
  _readAttributes() {
    throw new Error("Error: Should not be called. Underlying _reader should be used instead");
  }
  readArcadeFeature() {
    return this._reader.readArcadeFeature();
  }
  geometry() {
    return this._reader.geometry();
  }
  field(e7) {
    return this.readAttribute(e7, true);
  }
  hasField(e7) {
    return this._reader.hasField(e7);
  }
  setField(e7, r8) {
    return this._reader.setField(e7, r8);
  }
  keys() {
    return this._reader.keys();
  }
  castToText(e7 = false) {
    return this._reader.castToText(e7);
  }
};
let r$4 = class r3 {
  size() {
    return this.reader.getSize();
  }
  get fields() {
    return this.reader.fields;
  }
  invalidate() {
    this._geohashIndex = null, this._geohashIndexHash = null, this._spatialIndex = null, this._gridIndex = null, this._gridIndexHash = null;
  }
  queryFeaturesInBounds(e7) {
    const t8 = this._getSpatialIndex().search(e7);
    return a$7.from(this.reader, t8);
  }
  getGeohashIndex(e7) {
    const i4 = JSON.stringify(e7);
    return i4 !== this._geohashIndexHash && (this._geohashIndexHash = i4, this._geohashIndex = new o$5(e7), this._geohashIndex.insert(this.reader, this.isTiled)), this._geohashIndex;
  }
  getGridIndex(e7) {
    const t8 = JSON.stringify(e7);
    return t8 !== this._gridIndexHash && (this._gridIndexHash = t8, this._gridIndex = new r$5(e7), this._gridIndex.insert(this.reader, this.isTiled)), this._gridIndex;
  }
  _getSpatialIndex() {
    return this._spatialIndex || (this._spatialIndex = t$5.fromReader(this.reader)), this._spatialIndex;
  }
};
let t$4 = class t3 extends r$4 {
  constructor(e7) {
    super(), this.metadata = e7, this.chunkId = "override", this.normalizedChunkId = "override", this.removed = /* @__PURE__ */ new Set(), this.overridenIds = /* @__PURE__ */ new Set(), this._features = [];
  }
  get reader() {
    return u$2.fromOptimizedFeatures(this._features, this.metadata);
  }
  get queryInfo() {
    return {};
  }
  get first() {
    return false;
  }
  get end() {
    return false;
  }
  get isTiled() {
    return false;
  }
  applyOverrides(e7) {
    super.invalidate();
    const { reader: r8, removed: t8 } = e7, s12 = [], d2 = /* @__PURE__ */ new Set(), o8 = r8.getCursor(), i4 = new Set(t8);
    for (this.overridenIds.clear(); o8.next(); ) {
      const e8 = o8.readOptimizedFeatureWorldSpace(), r9 = e8.objectId;
      s12.push(e8), d2.add(r9), this.overridenIds.add(r9), this.removed.delete(r9);
    }
    for (const n6 of this._features) {
      const e8 = n6.objectId;
      i4.has(e8) || d2.has(e8) || (s12.push(n6), this.overridenIds.add(e8));
    }
    this._features = s12;
    for (const n6 of d2.values())
      this.removed.delete(n6);
    for (const n6 of t8)
      this.removed.add(n6), this.overridenIds.add(n6);
  }
  getTileReader(e7) {
    if (!this._features.length)
      return null;
    const r8 = this.queryFeaturesInBounds(e7.bounds);
    return r8.setTransformForDisplay(e7.transform), r8;
  }
};
let a$6 = class a4 extends t$6 {
};
let o$4 = class o5 extends e$2 {
  constructor(e7, t8, s12) {
    super(e7, t8), this._timeZone = s12, this.handledChunks = /* @__PURE__ */ new Set(), this.handledChunksForIdCreation = /* @__PURE__ */ new Set(), this.handledChunksForAttributeData = /* @__PURE__ */ new Set(), this._streamLayerDeferredObjectIdsToRemove = [];
  }
  destroy() {
    super.destroy();
    for (const e7 of this._source.chunks())
      this._cleanupChunkIds(e7);
  }
  invalidateAttributeData() {
    this.handledChunksForAttributeData.clear();
  }
  onSubscribe(e7) {
    super.onSubscribe(e7), this._evalOptions = e7.tile.createArcadeEvaluationOptions(this._timeZone);
  }
  createState(e7) {
    return new a$6(e7);
  }
  get aggregateQueryEngine() {
    return null;
  }
  displayMap(e7, t8, s12) {
    const r8 = new Map(e7.map((e8) => [t8(e8), e8])), n6 = [];
    for (const a9 of this._source.chunks()) {
      const e8 = a9.reader.getCursor();
      for (; e8.next(); ) {
        const t9 = e8.getObjectId(), a10 = e8.getDisplayId(), o8 = r8.get(t9);
        if (null != o8) {
          const e9 = s12(a10, o8, t9);
          n6.push(e9), r8.delete(t9);
        }
      }
    }
    return n6;
  }
  getDisplayFeatures(e7) {
    const t8 = new Set(e7), s12 = /* @__PURE__ */ new Set(), r8 = [];
    for (const n6 of this._source.chunks()) {
      const e8 = n6.reader.getCursor();
      for (; e8.next(); ) {
        const n7 = e8.getObjectId(), a9 = e8.getDisplayId();
        t8.has(a9) && !s12.has(n7) && (r8.push({ ...e8.readLegacyFeatureWorldSpace(), displayId: a9 }), s12.add(n7));
      }
    }
    return { features: r8, aggregates: [] };
  }
  async *applyOverride(e7) {
    const t8 = [], r8 = e7.reader.getCursor();
    for (; r8.next(); ) {
      const e8 = r8.getObjectId();
      t8.push(e8);
      const s12 = this._attributeStore.createDisplayIdForObjectId(e8);
      r8.setDisplayId(s12), this._attributeStore.setAttributeData(s12, r8, this._evalOptions);
    }
    const a9 = this.getDisplayIds(t8), o8 = this.getDisplayIds(e7.removed), d2 = new t$4(this._source.metadata);
    d2.applyOverrides(e7), this.handledChunks.add(d2.chunkId), this.handledChunksForAttributeData.add(d2.chunkId), this.handledChunksForIdCreation.add(d2.chunkId);
    for (const n6 of this._sendStates.values())
      n6.handledChunks.add(d2.chunkId), yield new i$2(n6.subscription, null, a9, false, d2.queryInfo);
    for (const n6 of this._sendStates.values()) {
      const e8 = d2.getTileReader(n6.subscription.tile);
      yield new i$2(n6.subscription, e8, o8, false, d2.queryInfo);
    }
    for (const s12 of e7.removed)
      this._attributeStore.releaseDisplayIdForObjectId(s12);
  }
  async *updateChunks() {
    if (this._source.chunks().length) {
      await this._updateAttributeData();
      for (const e7 of this._sendStates.values())
        yield* this._update(e7);
    }
  }
  removeChunks(e7) {
    for (const t8 of e7)
      this.handledChunks.delete(t8.chunkId), this.handledChunksForAttributeData.delete(t8.chunkId), this._cleanupChunkIds(t8);
  }
  afterUpdateChunks() {
    for (const e7 of this._streamLayerDeferredObjectIdsToRemove)
      this._attributeStore.releaseDisplayIdForObjectId(e7);
    this._streamLayerDeferredObjectIdsToRemove = [];
  }
  _cleanupChunkIds(e7) {
    if (this.handledChunksForIdCreation.has(e7.chunkId)) {
      const t8 = e7.reader.getCursor();
      for (; t8.next(); ) {
        const e8 = t8.getObjectId();
        this._source.isStream ? this._streamLayerDeferredObjectIdsToRemove.push(e8) : this._attributeStore.releaseDisplayIdForObjectId(e8);
      }
      this.handledChunksForIdCreation.delete(e7.chunkId);
    }
  }
  async _updateAttributeData() {
    for (const e7 of this._source.chunks()) {
      const { chunkId: t8, reader: s12 } = e7;
      if (!this.handledChunksForIdCreation.has(t8)) {
        this.handledChunksForIdCreation.add(t8);
        const e8 = s12.getCursor();
        for (; e8.next(); ) {
          const t9 = this._attributeStore.createDisplayIdForObjectId(e8.getObjectId());
          e8.setDisplayId(t9);
        }
      }
    }
    for (const e7 of this._source.chunks())
      if (!this.handledChunksForAttributeData.has(e7.chunkId)) {
        this.handledChunksForAttributeData.add(e7.chunkId);
        const t8 = e7.reader.getCursor();
        for (; t8.next(); ) {
          const e8 = t8.getDisplayId();
          this._attributeStore.setAttributeData(e8, t8, this._evalOptions);
        }
      }
  }
  *_update(e7) {
    const { subscription: t8, handledChunks: s12 } = e7;
    for (const n6 of this._source.chunks()) {
      const { chunkId: a9 } = n6;
      if (s12.has(a9))
        continue;
      s12.add(a9);
      const o8 = n6.getTileReader(t8.tile);
      o8 && (yield new e$1(e7.subscription, o8, false, n6.end, n6.queryInfo));
    }
  }
};
let l$2 = class l3 {
  constructor(t8, s12) {
    this._connection = t8, this._source = s12, this._version = 1, this._proxy = new s$c({ fetch: (t9, e7) => this._connection.layerView.fetch(t9, e7), fetchDictionary: (t9, e7) => this._connection.layerView.fetchDictionary(t9, e7) }), this._attributeStore = new b$1({ isLocal: false, update: (t9) => d$3(this._connection.container.updateAttributeView(t9)) });
  }
  destroy() {
    this._proxy.destory(), this._strategy?.destroy(), this._attributeStore.destroy();
  }
  get aggregateQueryEngine() {
    return this._strategy?.aggregateQueryEngine;
  }
  getDisplayFeatures(t8) {
    return this._strategy ? this._strategy.getDisplayFeatures(t8) : { features: [], aggregates: [] };
  }
  getFeatureObjectIdsForAggregate(t8) {
    return this._strategy ? this._strategy.getFeatureObjectIdsForAggregate(t8) : [];
  }
  onSubscribe(t8) {
    this._strategy?.onSubscribe(t8);
  }
  onUnsubscribe(t8) {
    this._strategy?.onUnsubscribe(t8);
  }
  async update(t8, e7, s12, r8, n6) {
    const h3 = t8.processor, u4 = m$5(this._schema, h3);
    if (!u4 && !r8)
      return;
    has("esri-2d-update-debug") && console.debug(`Version[${this._version}] SymbolProcessor.update`, { changes: u4, schema: h3 }), this._schema = h3;
    const g4 = f$4.fromJSON(t8.source.mutable.dataFilter.outSpatialReference), d2 = new p$3({ fields: this._source.metadata.fieldsIndex, spatialReference: g4 });
    return await this._attributeStore.update(h3.storage, d2, this._source.metadata, g4, e7), this._strategy?.invalidateAttributeData(), r8 || p$5(u4, "mesh") ? (p$5(u4, "mesh.strategy") && await this._updateStrategy(h3.mesh.strategy, g4, n6, h3.mesh.timeZone), this._updateSortKey(d2, "sortKey" in h3.mesh ? h3.mesh.sortKey : null), (p$5(u4, "mesh.factory") || "dictionary" === h3.mesh.factory.symbology.type) && (this._factory = await s$6.create(d2, this._proxy, h3.mesh.factory, s12)), this._invalidate(), this._version = e7, this._connection.container.updateRenderState(this._version)) : void 0;
  }
  async applyOverride(t8) {
    if (!this._strategy)
      return;
    const e7 = this._strategy.applyOverride(t8);
    for await (const r8 of e7)
      try {
        await this._process(r8);
      } catch (s12) {
      }
    this._source.applyOverride(t8);
  }
  async updateChunks() {
    await this._doUpdateChunks(), this._strategy?.afterUpdateChunks();
  }
  async removeChunks(t8) {
    this._strategy?.removeChunks(t8), this._attributeStore.incrementDisplayIdGeneration();
  }
  updateHighlight({ highlights: t8 }) {
    if (!this._strategy)
      return void this._attributeStore.setHighlight(t8.map(({ objectId: t9, highlightFlags: e8 }) => ({ objectId: t9, highlightFlags: e8, displayId: -1 })), t8);
    const e7 = this._strategy.displayMap(t8, ({ objectId: t9 }) => t9, (t9, { highlightFlags: e8 }, s12) => ({ objectId: s12, displayId: t9, highlightFlags: e8 }));
    this._attributeStore.setHighlight(e7, t8);
  }
  async _doUpdateChunks() {
    if (!this._strategy)
      return;
    const t8 = this._strategy.updateChunks(), e7 = [], r8 = /* @__PURE__ */ new Map();
    for await (const a9 of t8) {
      let t9 = r8.get(a9.id);
      null == t9 && (t9 = new e$3({ concurrency: 16, process: (t10) => this._process(t10) }), r8.set(a9.id, t9));
      const i4 = t9.push(a9).catch((t10) => f$5(t10));
      e7.push(i4);
    }
    try {
      await Promise.all(e7);
    } catch (i4) {
    }
    has("esri-2d-update-debug") && console.log("SendUpdates"), await this._attributeStore.sendUpdates(), has("esri-2d-update-debug") && console.log("SendUpdates.await");
  }
  async _updateStrategy(t8, e7, s12, r8) {
    switch (this._strategy?.destroy(), t8.type) {
      case "feature":
        this._strategy = new o$4(this._source, this._attributeStore, r8);
        break;
      case "binning":
        this._strategy = await y$3.create(t8, e7, this._source, this._attributeStore, r8);
        break;
      case "cluster":
        this._strategy = await S.create(this._connection, t8, e7, this._source, this._attributeStore, r8);
    }
    for (const i4 of s12)
      this._strategy.onSubscribe(i4);
  }
  async _updateSortKey(e7, s12) {
    if (this._sortInfo = u$4(this._sortInfo?.computed), null != s12) {
      const t8 = s12.byRenderer ? null : await e7.createComputedField(s12);
      this._sortInfo = { ...s12, computed: t8 };
    }
  }
  _invalidate() {
    this._strategy && this._strategy.invalidate();
  }
  async _process(t8) {
    const e7 = t8.subscription;
    if (has("esri-2d-update-debug")) {
      const s13 = e7.tile;
      console.debug(`Version[${this._version}] Tile[${s13.key.id}, end=${t8.end}] Processor._process`);
    }
    await this._fetchResources(t8), s$d(e7.signal);
    const s12 = await this._write(t8, e7.tile.createArcadeEvaluationOptions(this._schema.mesh.timeZone)), i4 = e7.tile.tileInfoView.tileInfo.isWrappable, { message: a9, transferList: o8 } = s12.serialize(i4), n6 = t8.createMessage(a9, this._version, this._attributeStore.epoch);
    if (s$d(e7.signal), this._connection.container.onMessage(n6, { signal: e7.signal, transferList: o8 }), this._attributeStore.sendUpdates(), has("esri-2d-update-debug")) {
      const s13 = e7.tile;
      console.debug(`Version[${this._version}] Tile[${s13.key.id}, end=${t8.end}] Processor._process.await`);
    }
  }
  async _fetchResources(t8) {
    await this._fetchMatcherResources(t8), await this._fetchWriterResources(t8);
  }
  async _fetchMatcherResources(t8) {
    if (t8.reader)
      return this._factory.enqueueMatcherRequests(this._proxy, t8.reader);
  }
  async _fetchWriterResources(t8) {
    if (!t8.reader)
      return;
    const e7 = t8.reader.getCursor(), s12 = t8.subscription.tile.createArcadeEvaluationOptions(this._schema.mesh.timeZone);
    for (; e7.next(); )
      this._factory.enqueueWriterRequests(this._proxy, e7, s12);
    await this._proxy.fetchEnqueuedResources();
  }
  async _write(t8, e7) {
    const s12 = t8.subscription.tile, r8 = t8.reader?.getCursor(), i4 = r8?.getSize() ?? 0, a9 = s12.tileInfoView.tileInfo.isWrappable, o8 = new g$2(s12.key, this._strategy.enablePixelBuffering, a9, i4);
    if (!r8)
      return o8;
    const c3 = s12.createArcadeEvaluationOptions(this._schema.mesh.timeZone);
    for (; r8.next(); ) {
      const t9 = this._getSortKeyValue(r8, e7);
      o8.entityStart(r8.getDisplayId(), t9), this._factory.write(o8, this._proxy, r8, c3, s12.level), o8.entityEnd();
    }
    return o8;
  }
  _getSortKeyValue(t8, e7) {
    if (!this._sortInfo)
      return 0;
    const { computed: s12, order: r8, byRenderer: i4 } = this._sortInfo, a9 = i4 ? this._factory.getSortKey(t8, e7) : s12?.read(t8, e7);
    return null == a9 || isNaN(a9) ? 0 : a9 * ("asc" === r8 ? -1 : 1);
  }
};
let t$3 = class t4 {
  static from(e7) {
    let n6 = 0, r8 = 0, o8 = 0;
    return e7.forEach((t8) => {
      const e8 = t8._readGeometry();
      e8 && (r8 += e8.isPoint ? 1 : e8.lengths.reduce((t9, e9) => t9 + e9, 0), o8 += e8.isPoint ? 1 : e8.lengths.length, n6 += 1);
    }), new t4(n6, r8, o8);
  }
  constructor(t8, e7, n6) {
    this.featureCount = t8, this.vertexCount = e7, this.ringCount = n6;
  }
  toJSON() {
    return { featureCount: this.featureCount, ringCount: this.featureCount, vertexCount: this.featureCount };
  }
};
const a$5 = 4;
function o$3(i4, a9) {
  const { service: o8 } = i4, s12 = o8.orderByFields ?? a9.objectIdField + " ASC", n6 = o8.source, u4 = { returnCentroid: !(null !== n6 && "object" == typeof n6 && "path" in n6 && w$1(n6.path)) && "esriGeometryPolygon" === a9.geometryType, returnGeometry: true, timeReferenceUnknownClient: a9.timeReferenceUnknownClient ?? void 0, outSpatialReference: f$4.fromJSON(i4.mutable.dataFilter.outSpatialReference), orderByFields: [s12], where: i4.mutable.dataFilter.definitionExpression ?? "1=1", outFields: i4.mutable.availableFields };
  if ("feature" === i4.type) {
    const { gdbVersion: t8, historicMoment: r8, timeExtent: a10 } = i4.mutable.dataFilter;
    return { ...u4, gdbVersion: t8, historicMoment: r8 ? new Date(r8) : null, timeExtent: a10 ? c$5.fromJSON(a10) : null, outFields: i4.mutable.availableFields };
  }
  return u4;
}
let s$2 = class s9 {
  static fromSchema(e7, t8) {
    return new s9(o$3(e7, t8), e7.mutable.dataFilter.customParameters, t8.geometryType, e7.service.queryMetadata.capabilities);
  }
  constructor(e7, t8, r8, i4) {
    this._queryParams = e7, this._customParameters = t8, this._geometryType = r8, this._capabilities = i4;
  }
  get pageSize() {
    if (null == this._capabilities)
      throw new Error("InternalError: Service does not support paged queries");
    const { query: e7 } = this._capabilities, t8 = e7.supportsMaxRecordCountFactor ? a$5 : null, r8 = (e7.maxRecordCount ?? 8e3) * (t8 ?? 1);
    return Math.min(8e3, r8);
  }
  updateFields(e7) {
    this._queryParams.outFields = e7;
  }
  createPatchFieldsQuery(e7, t8) {
    const r8 = e7.clone();
    if ("*" === this._queryParams.outFields[0]) {
      if ("*" === (r8.outFields ?? [])[0])
        return null;
      r8.outFields = this._queryParams.outFields;
    } else {
      const e8 = new Set(this._queryParams.outFields), i4 = [];
      for (const r9 of e8)
        t8.hasField(r9) || i4.push(r9);
      if (0 === i4.length)
        return null;
      r8.outFields = i4;
    }
    return r8.returnGeometry = false, r8.returnCentroid = false, r8.quantizationParameters = null, r8.cacheHint = true, { inner: r8, customParameters: this._customParameters };
  }
  createQuery(e7 = {}) {
    if (!this._queryParams)
      throw new Error("InternalError: queryInfo should be defined");
    return { inner: new b$2({ ...this._queryParams, ...e7 }), customParameters: this._customParameters };
  }
  createTileQuery(e7, t8) {
    if (null == this._capabilities)
      throw new Error("InternalError: Service does not support tile queries");
    const r8 = this.createQuery(t8), i4 = r8.inner;
    return i4.quantizationParameters = t8.quantizationParameters ?? e7.getQuantizationParameters(), i4.resultType = "tile", i4.geometry = e7.extent, this._capabilities.query.supportsQuantization ? "esriGeometryPolyline" === this._geometryType && (i4.maxAllowableOffset = e7.resolution * has("feature-polyline-generalization-factor")) : "esriGeometryPolyline" !== this._geometryType && "esriGeometryPolygon" !== this._geometryType || (i4.maxAllowableOffset = e7.resolution, "esriGeometryPolyline" === this._geometryType && (i4.maxAllowableOffset *= has("feature-polyline-generalization-factor"))), i4.defaultSpatialReferenceEnabled = this._capabilities.query.supportsDefaultSpatialReference, i4.compactGeometryEnabled = this._capabilities.query.supportsCompactGeometry, this._capabilities.query.supportsMaxRecordCountFactor && (i4.maxRecordCountFactor = a$5), r8;
  }
  createPagedTileQuery(e7, t8) {
    const r8 = this.pageSize;
    return this.createTileQuery(e7, { start: r8 * t8, num: r8, returnExceededLimitFeatures: true });
  }
  createPagedQuery(e7) {
    const t8 = this.pageSize;
    return this.createQuery({ start: t8 * e7, num: t8, returnExceededLimitFeatures: true, maxRecordCountFactor: a$5 });
  }
};
const o$2 = 2500;
let a$4 = class a5 extends S$2 {
  constructor(e7) {
    super(), this._connection = e7, this._enabledEventTypes = /* @__PURE__ */ new Set(), this._updateInfo = { websocket: 0, client: 0 }, this._lastTime = performance.now(), this.addHandles([d$4(() => this._strategy?.connectionStatus ?? "disconnected", (e8) => {
      this._layerView.setProperty({ propertyName: "pipelineConnectionStatus", value: e8 });
    }, { initial: true }), d$4(() => this._strategy?.errorString || null, (e8) => this._layerView.setProperty({ propertyName: "pipelineErrorString", value: e8 }), { initial: true })]);
  }
  destroy() {
    this._strategy = null, this.removeAllHandles();
  }
  get _layerView() {
    return this._connection.layerView;
  }
  set strategy(e7) {
    null == this._strategy && this._resetUpdateInfo(performance.now());
    const t8 = "event-handles";
    this.removeHandles(t8), null != e7 && this.addHandles([e7.events.on("data-received", (e8) => this._onFeature(e8)), e7.events.on("message-received", (e8) => this._onWebSocketMessage(e8)), e7.events.on("features-updated", (e8) => this._onUpdate(e8)), e7.events.on("tick", () => this._onTick())], t8), this._strategy = e7;
  }
  updateCustomParameters(e7) {
    null != e7 && this._strategy?.updateCustomParameters(e7);
  }
  sendMessageToSocket(e7) {
    this._strategy?.sendMessageToSocket(e7);
  }
  sendMessageToClient(e7) {
    this._strategy?.sendMessageToClient(e7);
  }
  enableEvent(e7, t8) {
    t8 ? this._enabledEventTypes.add(e7) : this._enabledEventTypes.delete(e7);
  }
  disconnect() {
    this._strategy?.disconnect();
  }
  connect() {
    this._strategy?.connect();
  }
  clear() {
    this._strategy?.clear();
  }
  _onWebSocketMessage(e7) {
    this._enabledEventTypes.has("message-received") && this._layerView.emitEvent({ name: "message-received", event: e7 });
  }
  _onFeature(e7) {
    this._updateInfo.websocket++, this._enabledEventTypes.has("data-received") && this._layerView.emitEvent({ name: "data-received", event: { attributes: e7.attributes, centroid: e7.centroid, geometry: e7.geometry } });
  }
  _onUpdate(e7) {
    this._updateInfo.client += e7;
  }
  _onTick() {
    const e7 = performance.now(), t8 = e7 - this._lastTime;
    if (t8 > o$2) {
      const s12 = Math.round(this._updateInfo.client / (t8 / 1e3)), n6 = Math.round(this._updateInfo.websocket / (t8 / 1e3));
      this._resetUpdateInfo(e7), this._layerView.emitEvent({ name: "update-rate", event: { client: s12, websocket: n6 } });
    }
  }
  _resetUpdateInfo(e7) {
    this._lastTime = e7, this._updateInfo.client = 0, this._updateInfo.websocket = 0;
  }
};
e$8([y$5()], a$4.prototype, "_strategy", void 0), a$4 = e$8([c$6("esri.views.2d.layers.features.sources.StreamMessenger")], a$4);
let r$3 = class r4 {
  constructor(r8) {
    this._store = r8, this._controller = new AbortController();
  }
  destroy() {
    this._controller.abort();
  }
  get _options() {
    return { signal: this._controller.signal };
  }
  async queryOverride(r8) {
    throw new Error("InternalError: LoadStrategy does not support fetching");
  }
};
const n$3 = 268435455;
let o$1 = class o6 {
  constructor() {
    this.hasFeatures = false, this.exceededTransferLimit = false, this.fieldCount = 0, this.featureCount = 0, this.objectIdFieldIndex = 0, this.vertexCount = 0, this.offsets = { attributes: new Array(), geometry: new Array() }, this.centroid = new Array();
  }
};
function a$3(a9, i4, c3 = false) {
  const f3 = 1, d2 = 3, u4 = 9, g4 = 12, l5 = 13, p2 = 15, h3 = a9.asUnsafe(), b2 = h3.pos(), w2 = new o$1();
  let m4 = 0, y4 = 0;
  const k = 1, x2 = 2, I2 = 4, L = 3;
  let A2 = null, F = null, C = null, S2 = false;
  const j2 = [];
  for (; h3.next(); )
    switch (h3.tag()) {
      case f3:
        A2 = h3.getString();
        break;
      case d2:
        F = h3.getString();
        break;
      case g4:
        C = h3.processMessage(h$3);
        break;
      case u4:
        if (w2.exceededTransferLimit = h3.getBool(), w2.exceededTransferLimit) {
          w2.offsets.geometry = c3 ? new Float64Array(8e3) : new Int32Array(8e3), w2.centroid = c3 ? new Float64Array(16e3) : new Int32Array(16e3);
          for (let e7 = 0; e7 < w2.centroid.length; e7++)
            w2.centroid[e7] = n$3;
        }
        break;
      case l5: {
        const e7 = h3.processMessage(b$3);
        e7.index = m4++, j2.push(e7);
        break;
      }
      case p2: {
        const e7 = h3.getLength(), t8 = h3.pos() + e7;
        if (!w2.exceededTransferLimit) {
          const e8 = w2.offsets.geometry, t9 = w2.centroid;
          e8.push(0), t9.push(n$3), t9.push(n$3);
        }
        !S2 && w2.exceededTransferLimit && (S2 = true, w2.offsets.attributes = c3 ? new Float64Array(8e3 * m4) : new Uint32Array(8e3 * m4));
        let s12 = y4 * m4;
        for (; h3.pos() < t8 && h3.next(); )
          switch (h3.tag()) {
            case k: {
              if (S2)
                w2.offsets.attributes[s12++] = h3.pos();
              else {
                w2.offsets.attributes.push(h3.pos());
              }
              const e8 = h3.getLength();
              h3.skipLen(e8);
              break;
            }
            case x2:
              if (i4) {
                const e8 = h3.getLength(), t9 = h3.pos() + e8;
                for (; h3.pos() < t9 && h3.next(); )
                  switch (h3.tag()) {
                    case L: {
                      h3.getUInt32();
                      const e9 = h3.getSInt64(), t10 = h3.getSInt64();
                      w2.centroid[2 * y4] = e9, w2.centroid[2 * y4 + 1] = t10;
                      break;
                    }
                    default:
                      h3.skip();
                  }
              } else {
                w2.offsets.geometry[y4] = h3.pos();
                const e8 = h3.getLength();
                w2.vertexCount += e8, h3.skipLen(e8);
              }
              break;
            case I2: {
              const e8 = h3.getLength(), t9 = h3.pos() + e8;
              for (; h3.pos() < t9 && h3.next(); )
                switch (h3.tag()) {
                  case L: {
                    h3.getUInt32();
                    const e9 = h3.getSInt64(), t10 = h3.getSInt64();
                    w2.centroid[2 * y4] = e9, w2.centroid[2 * y4 + 1] = t10;
                    break;
                  }
                  default:
                    h3.skip();
                }
              break;
            }
            default:
              h3.skip();
          }
        y4++, w2.hasFeatures = true;
        break;
      }
      default:
        h3.skip();
    }
  const U = A2 || F;
  if (!U)
    throw new s$e("FeatureSet has no objectId or globalId field name");
  return w2.fields = new Z(j2), w2.featureCount = y4, w2.fieldCount = m4, w2.objectIdFieldIndex = w2.fields.get(U)?.index, w2.transform = C, w2.displayIds = new Uint32Array(w2.featureCount), w2.groupIds = new Uint16Array(w2.featureCount), h3.move(b2), w2;
}
const o7 = true, d$1 = 268435455, u3 = 128, c$1 = 128e3, g3 = { small: { delta: new Int32Array(u3), decoded: new Int32Array(u3) }, large: { delta: new Int32Array(c$1), decoded: new Int32Array(c$1) } };
function _(e7) {
  return e7 <= g3.small.delta.length ? g3.small : (e7 <= g3.large.delta.length || (g3.large.delta = new Int32Array(Math.round(1.25 * e7)), g3.large.decoded = new Int32Array(Math.round(1.25 * e7))), g3.large);
}
function f$2(r8) {
  try {
    const e7 = 2, t8 = new n$a(new Uint8Array(r8), new DataView(r8));
    for (; t8.next(); ) {
      if (t8.tag() === e7)
        return l$1(t8.getMessage());
      t8.skip();
    }
  } catch (n6) {
    const r9 = new s$e("query:parsing-pbf", "Error while parsing FeatureSet PBF payload", { error: n6 });
    s$f.getLogger("esri.view.2d.layers.features.support.FeatureSetReaderPBF").error(r9);
  }
  return null;
}
function l$1(e7) {
  const t8 = 1;
  for (; e7.next(); ) {
    if (e7.tag() === t8)
      return e7.getMessage();
    e7.skip();
  }
  return null;
}
function I(e7) {
  const t8 = 1, r8 = 2, s12 = 3, n6 = 4, a9 = 5, i4 = 6, h3 = 7, o8 = 8, d2 = 9, u4 = e7.getLength(), c3 = e7.pos() + u4;
  for (; e7.pos() < c3 && e7.next(); )
    switch (e7.tag()) {
      case t8:
        return e7.getString();
      case r8:
        return e7.getFloat();
      case s12:
        return e7.getDouble();
      case n6:
        return e7.getSInt32();
      case a9:
        return e7.getUInt32();
      case i4:
        return e7.getInt64();
      case h3:
        return e7.getUInt64();
      case o8:
        return e7.getSInt64();
      case d2:
        return e7.getBool();
      default:
        return e7.skip(), null;
    }
  return null;
}
function p$1(e7, t8, r8, s12, n6, a9) {
  return 0.5 * Math.abs(e7 * s12 + r8 * a9 + n6 * t8 - e7 * a9 - r8 * t8 - n6 * s12);
}
function y$1(e7, t8, r8, s12) {
  return 0 === e7 * s12 - r8 * t8 && e7 * r8 + t8 * s12 > 0;
}
let m$2 = class m2 extends M {
  static fromBuffer(e7, t8, r8 = false) {
    const s12 = t8.geometryType, n6 = f$2(e7), a9 = a$3(n6, "esriGeometryPoint" === s12, r8);
    return new m2(n6, a9, t8);
  }
  constructor(e7, t8, r8) {
    super(r8), this._hasNext = false, this._isPoints = false, this._featureIndex = -1, this._featureOffset = 0, this._cache = { area: 0, unquantGeometry: void 0, geometry: void 0, centroid: void 0, legacyFeature: void 0, optFeature: void 0 }, this._parseCaches = new Array(), this._geometryType = r8.geometryType, this._reader = e7, this._header = t8, this._hasNext = t8.hasFeatures, this._isPoints = "esriGeometryPoint" === r8.geometryType;
  }
  get _size() {
    return this._header.featureCount;
  }
  get fields() {
    return this._header.fields;
  }
  get geometryType() {
    return this._geometryType;
  }
  get hasZ() {
    return false;
  }
  get hasM() {
    return false;
  }
  get hasFeatures() {
    return this._header.hasFeatures;
  }
  get hasNext() {
    return this._hasNext;
  }
  get exceededTransferLimit() {
    return this._header.exceededTransferLimit;
  }
  getSize() {
    return this._size;
  }
  getInTransform() {
    return this._header.transform;
  }
  getCursor() {
    return this.copy();
  }
  getIndex() {
    return this._featureIndex;
  }
  setIndex(e7) {
    this._cache.area = 0, this._cache.unquantGeometry = void 0, this._cache.geometry = void 0, this._cache.centroid = void 0, this._cache.legacyFeature = void 0, this._cache.optFeature = void 0, this._featureIndex = e7;
  }
  getAttributeHash() {
    let e7 = "";
    for (const t8 of this._header.fields.fields)
      e7 += this._readAttributeAtIndex(t8.index) + ".";
    return e7;
  }
  getObjectId() {
    return this._readAttributeAtIndex(this._header.objectIdFieldIndex);
  }
  getDisplayId() {
    return this._header.displayIds[this._featureIndex];
  }
  setDisplayId(e7) {
    this._header.displayIds[this._featureIndex] = e7;
  }
  readGeometryArea() {
    return this._cache.area || this._readGeometry(true), this._cache.area;
  }
  copy() {
    const e7 = this._reader.clone(), t8 = new m2(e7, this._header, this.metadata);
    return this.copyInto(t8), t8;
  }
  next() {
    for (this._cache.area = 0, this._cache.unquantGeometry = void 0, this._cache.geometry = void 0, this._cache.centroid = void 0, this._cache.legacyFeature = void 0, this._cache.optFeature = void 0; ++this._featureIndex < this._size && !this._getExists(); )
      ;
    return this._featureIndex < this._size;
  }
  _readX() {
    return this._header.centroid[2 * this._featureIndex];
  }
  _readY() {
    return this._header.centroid[2 * this._featureIndex + 1];
  }
  _readServerCentroid() {
    const e7 = this._header.centroid[2 * this._featureIndex], t8 = this._header.centroid[2 * this._featureIndex + 1];
    return e7 === d$1 ? null : new e$7([], [e7, t8]);
  }
  _readGeometry(e7 = false) {
    if (void 0 === this._cache.geometry) {
      let r8 = null;
      if (this._isPoints) {
        if (this._header.centroid[2 * this._featureIndex] === d$1)
          return null;
        const e8 = this._header.centroid[2 * this._featureIndex], t8 = this._header.centroid[2 * this._featureIndex + 1];
        r8 = new e$7([], [e8, t8]);
      } else {
        const s12 = this._header.offsets.geometry[this._featureIndex], n6 = this._reader;
        if (0 === s12)
          return null;
        n6.move(s12);
        try {
          r8 = e7 ? this._parseGeometryForDisplay(n6) : this._parseGeometry(n6);
        } catch (t8) {
          return console.error("Failed to parse geometry!", t8), null;
        }
      }
      return 0 === r8?.coords.length && (r8 = null), this._cache.geometry = r8, r8;
    }
    return this._cache.geometry;
  }
  _readAttribute(e7, t8) {
    const r8 = this._header.fields.get(e7);
    if (null == r8)
      return;
    let s12 = this._readAttributeAtIndex(r8.index);
    "esriFieldTypeTimestampOffset" === this.fields.get(e7)?.type && (s12 = this.parseTimestampOffset(s12));
    const n6 = this._header.fields.isDateField(r8.name);
    return t8 ? null == s12 ? s12 : n6 ? new Date(s12) : s12 : s12;
  }
  _readAttributes() {
    const e7 = {};
    for (const t8 of this._header.fields.fields)
      e7[t8.name] = this._readAttributeAtIndex(t8.index);
    return e7;
  }
  copyInto(e7) {
    super.copyInto(e7), e7._featureIndex = this._featureIndex, e7._featureOffset = this._featureOffset, e7._hasNext = this._hasNext, e7._parseCaches = this._parseCaches;
  }
  _readAttributeAtIndex(e7) {
    let t8 = this._parseCaches[e7];
    if (t8 || (t8 = new a$c(this.getSize()), this._parseCaches[e7] = t8), t8.has(this._featureIndex))
      return t8.get(this._featureIndex);
    const r8 = this._header.offsets.attributes[this._featureIndex * this._header.fieldCount + e7], s12 = this._reader;
    s12.move(r8);
    const n6 = I(s12);
    return t8.set(this._featureIndex, n6), n6;
  }
  _readGeometryDeltaDecoded(e7 = false) {
    if (void 0 === this._cache.unquantGeometry) {
      const t8 = this._readGeometry(e7);
      if (!t8)
        return this._cache.unquantGeometry = void 0, null;
      if (!this.getInTransform())
        return this._cache.unquantGeometry = t8, t8;
      const r8 = _(t8.coords.length).decoded, s12 = t8.clone(r8), n6 = s12.coords;
      let a9 = 0;
      for (const e8 of s12.lengths) {
        for (let t9 = 1; t9 < e8; t9++) {
          const e9 = 2 * (a9 + t9), r9 = 2 * (a9 + t9 - 1);
          n6[e9] += n6[r9], n6[e9 + 1] += n6[r9 + 1];
        }
        a9 += e8;
      }
      return this._cache.unquantGeometry = s12, s12;
    }
    return this._cache.unquantGeometry;
  }
  _parseGeometry(e7) {
    const t8 = 2, r8 = 3, s12 = e7.asUnsafe(), a9 = s12.getLength(), i4 = s12.pos() + a9, h3 = [], o8 = [];
    for (; s12.pos() < i4 && s12.next(); )
      switch (s12.tag()) {
        case t8: {
          const e8 = s12.getUInt32(), t9 = s12.pos() + e8;
          for (; s12.pos() < t9; )
            o8.push(s12.getUInt32());
          break;
        }
        case r8: {
          const e8 = s12.getUInt32(), t9 = s12.pos() + e8;
          for (h3.push(s12.getSInt64()), h3.push(s12.getSInt64()), this.hasZ && s12.getSInt64(), this.hasM && s12.getSInt64(); s12.pos() < t9; )
            h3.push(s12.getSInt64()), h3.push(s12.getSInt64()), this.hasZ && s12.getSInt64(), this.hasM && s12.getSInt64();
          break;
        }
        default:
          s12.skip();
      }
    return new e$7(o8, h3);
  }
  _parseGeometryForDisplay(e7) {
    const t8 = 2, s12 = 3, a9 = e7.asUnsafe(), i4 = a9.getLength(), h3 = a9.pos() + i4, d2 = [], u4 = [];
    let c3 = 0, g4 = 0, f3 = null, l5 = 0;
    const I2 = "esriGeometryPolygon" === this.geometryType;
    for (; a9.pos() < h3 && a9.next(); )
      switch (a9.tag()) {
        case t8: {
          const e8 = a9.getUInt32(), t9 = a9.pos() + e8;
          for (; a9.pos() < t9; ) {
            const e9 = a9.getUInt32();
            d2.push(e9), c3 += e9;
          }
          f3 = _(2 * c3).delta;
          break;
        }
        case s12: {
          a9.getUInt32();
          const e8 = 2 + (this.hasZ ? 1 : 0) + (this.hasM ? 1 : 0);
          n$9(f3);
          for (const t9 of d2)
            if (g4 + e8 * t9 > f3.length)
              for (let e9 = 0; e9 < t9; e9++)
                a9.getSInt32(), a9.getSInt32(), this.hasZ && a9.getSInt32(), this.hasM && a9.getSInt32();
            else if (I2 && o7) {
              const e9 = this.getAreaSimplificationThreshold(t9, this._header.vertexCount);
              let r8 = 2, s13 = 1;
              const n6 = false;
              let i5 = a9.getSInt32(), h4 = a9.getSInt32();
              f3[g4++] = i5, f3[g4++] = h4, this.hasZ && a9.getSInt32(), this.hasM && a9.getSInt32();
              let o8 = a9.getSInt32(), d3 = a9.getSInt32();
              for (this.hasZ && a9.getSInt32(), this.hasM && a9.getSInt32(); r8 < t9; ) {
                let t10 = a9.getSInt32(), n7 = a9.getSInt32();
                this.hasZ && a9.getSInt32(), this.hasM && a9.getSInt32();
                const u5 = i5 + o8, c4 = h4 + d3;
                p$1(i5, h4, u5, c4, u5 + t10, c4 + n7) >= e9 ? (l5 += -0.5 * (u5 - i5) * (c4 + h4), s13 > 1 && y$1(f3[g4 - 2], f3[g4 - 1], o8, d3) ? (f3[g4 - 2] += o8, f3[g4 - 1] += d3) : (f3[g4++] = o8, f3[g4++] = d3, s13++), i5 = u5, h4 = c4) : (t10 += o8, n7 += d3), o8 = t10, d3 = n7, r8++;
              }
              s13 < 3 || n6 ? g4 -= 2 * s13 : (l5 += -0.5 * (i5 + o8 - i5) * (h4 + d3 + h4), y$1(f3[g4 - 2], f3[g4 - 1], o8, d3) ? (f3[g4 - 2] += o8, f3[g4 - 1] += d3, u4.push(s13)) : (f3[g4++] = o8, f3[g4++] = d3, u4.push(++s13)));
            } else {
              let e9 = 0, r8 = a9.getSInt32(), s13 = a9.getSInt32();
              this.hasZ && a9.getSInt32(), this.hasM && a9.getSInt32(), f3[g4++] = r8, f3[g4++] = s13, e9 += 1;
              for (let n6 = 1; n6 < t9; n6++) {
                const t10 = a9.getSInt32(), i5 = a9.getSInt32(), h4 = r8 + t10, o8 = s13 + i5;
                l5 += -0.5 * (h4 - r8) * (o8 + s13), this.hasZ && a9.getSInt32(), this.hasM && a9.getSInt32(), n6 > 2 && y$1(f3[g4 - 2], f3[g4 - 1], t10, i5) ? (f3[g4 - 2] += t10, f3[g4 - 1] += i5) : (f3[g4++] = t10, f3[g4++] = i5, e9 += 1), r8 = h4, s13 = o8;
              }
              u4.push(e9);
            }
          break;
        }
        default:
          a9.skip();
      }
    return this._cache.area = l5, u4.length ? new e$7(u4, f3) : null;
  }
};
class c2 {
  constructor(e7, t8) {
    this.service = e7, this._metadata = t8;
  }
  destroy() {
  }
}
function m$1(e7, t8) {
  switch (e7.type) {
    case "memory":
      return new l4(e7, t8);
    case "ogc":
      return new f$1(e7, t8);
    case "feature-service":
      return e7.queryMetadata.capabilities.query.supportsFormatPBF && has("featurelayer-pbf") ? new y3(e7, t8) : new d(e7, t8);
  }
}
async function p(t8) {
  const a9 = new c$8();
  return await a9.open(t8, {}), a9;
}
class l4 extends c2 {
  constructor(e7, t8) {
    super(e7, t8), this._portsOpen = p(e7.source).then((e8) => this.client = e8);
  }
  destroy() {
    this.client.close(), this.client = null;
  }
  async executeQuery(e7, t8) {
    await this._portsOpen;
    const a9 = await this.client.invoke("queryFeatures", e7.toJSON(), t8);
    return u$2.fromFeatureSet(a9, this._metadata);
  }
}
class y3 extends c2 {
  async executeQuery(e7, t8) {
    const { data: a9 } = await d$5(this.service.source, e7, t8), r8 = !e7.quantizationParameters;
    return m$2.fromBuffer(a9, this._metadata, r8);
  }
}
class d extends c2 {
  async executeQuery(e7, s12) {
    const { source: i4, queryMetadata: u4 } = this.service, c3 = u4.capabilities;
    if (null != e7.quantizationParameters && !c3.query.supportsQuantization) {
      const u5 = e7.clone(), c4 = m$6(u5.quantizationParameters);
      u5.quantizationParameters = null;
      const { data: m5 } = await c$7(i4, u5, this._metadata.spatialReference, s12), p2 = ct(m5, this._metadata.objectIdField);
      return ft(c4, p2), u$2.fromOptimizedFeatureSet(p2, this._metadata);
    }
    const { data: m4 } = await c$7(i4, e7, this._metadata.spatialReference, s12);
    return "esriGeometryPoint" === this._metadata.geometryType && (m4.features = m4.features?.filter((e8) => {
      if (null != e8.geometry) {
        const t8 = e8.geometry;
        return Number.isFinite(t8.x) && Number.isFinite(t8.y);
      }
      return true;
    })), u$2.fromFeatureSet(m4, this._metadata);
  }
}
let f$1 = class f extends c2 {
  async executeQuery(e7, a9) {
    const { capabilities: i4 } = this.service.queryMetadata;
    if (e7.quantizationParameters && !i4.query.supportsQuantization) {
      const i5 = e7.clone(), o9 = m$6(i5.quantizationParameters);
      i5.quantizationParameters = null;
      const u4 = await $$1(this.service.source, e7, a9);
      return ft(o9, u4), u$2.fromOptimizedFeatureSet(u4, this._metadata);
    }
    const o8 = await $$1(this.service.source, e7, a9);
    return u$2.fromOptimizedFeatureSet(o8, this._metadata);
  }
};
let a$2 = class a6 extends r$3 {
  constructor(e7, t8, r8, o8, a9) {
    super(r8), this._serviceInfo = e7, this._queryInfo = t8, this._metadata = o8, this._eventLog = a9, this._queue = new _$3({ concurrency: 16, process: async (e8) => {
      const t9 = { signal: e8.options?.signal, query: e8.query.customParameters };
      return this._adapter.executeQuery(e8.query.inner, t9);
    } }), this._adapter = m$1(e7, o8);
  }
  async updateFields(r8) {
    this._queryInfo.updateFields(r8);
    const s12 = Array.from(this._store.chunks()).map(async (e7) => {
      const r9 = b$2.fromJSON(e7.queryInfo.queryJSON);
      if (r9)
        try {
          return await this._tryUpdateFields(e7.reader, r9), null;
        } catch (s13) {
          return s13;
        }
    }), o8 = (await Promise.all(s12)).filter((e7) => e7);
    if (o8.length)
      throw new s$e("featurelayer-query", "Encountered errors when downloading fields", { errors: o8 });
  }
  async queryOverride({ edits: e7 }) {
    const t8 = [], r8 = [];
    for (const o8 of e7.removed)
      null != o8.objectId && -1 !== o8.objectId ? t8.push(o8.objectId) : r8.push(o8.globalId);
    r8.length && t8.push(...this._mapGlobalIdsToObjectIds(r8));
    const s12 = e7.addOrModified.map(({ objectId: e8 }) => e8);
    let n6;
    if (s12.length) {
      const e8 = this._queryInfo.createQuery({ objectIds: s12 });
      n6 = await this._fetch(e8);
    } else
      n6 = u$2.empty(this._metadata);
    return { reader: n6, removed: t8 };
  }
  _mapGlobalIdsToObjectIds(e7) {
    const t8 = new Set(e7), r8 = this._metadata.globalIdField;
    if (null == r8)
      throw new Error("InternalError: Recieved an edit with globalIds, but not supported by the service");
    const s12 = [];
    return this._store.forEachUnsafe((e8) => {
      const o8 = e8.readAttribute(r8);
      t8.has(o8) && s12.push(e8.getObjectId());
    }), s12;
  }
  async _fetch(e7, t8) {
    const r8 = await this._enqueue(e7, t8);
    return await this._tryUpdateFields(r8, e7.inner), r8;
  }
  async _tryUpdateFields(e7, t8) {
    const r8 = this._queryInfo.createPatchFieldsQuery(t8, e7);
    if (!r8)
      return;
    const s12 = await this._enqueue(r8, this._options);
    e7.joinAttributes(s12);
  }
  async _enqueue(e7, t8) {
    return this._eventLog.onEvent({ type: "fetchStart" }), this._queue.push({ query: e7, options: t8 }).finally(() => {
      this._eventLog.onEvent({ type: "fetchEnd", done: 0 === this._queue.length });
    });
  }
};
let s$1 = class s10 extends a$2 {
  constructor() {
    super(...arguments), this._chunksById = /* @__PURE__ */ new Map();
  }
  unload(e7) {
    this._removeChunks(e7.tile);
  }
  _addChunk(e7) {
    const s12 = e7.tile.id;
    this._chunksById.has(s12) || this._chunksById.set(s12, []);
    const t8 = e7.size();
    (t8 || e7.first || e7.end) && (has("esri-2d-update-debug") && console.debug(`Chunk[${e7.chunkId}] ATileLoadStrategy.addChunk [count=${t8}]`), this._chunksById.get(s12).push(e7), this._store.insert(e7));
  }
  _removeChunks(e7) {
    const s12 = this._chunksById.get(e7.key.id) ?? [];
    for (const t8 of s12)
      has("esri-2d-update-debug") && console.debug(`Tile[${e7.key.id}] Chunk[${t8.chunkId}] ATileLoadStrategy.removeChunk`), this._store.remove(t8);
    this._chunksById.delete(e7.key.id);
  }
};
class i3 extends r$4 {
  constructor(e7, i4, t8, r8, s12, h3) {
    super(), this._reader = e7, this._queryJSON = i4, this._tile = t8, this._sourceTile = r8, this._sourceTileDepth = s12, this._end = h3, this.chunkId = `${this._tile.key.id}.${this._sourceTile?.key.id}${this._end ? "e" : ""}`, this.normalizedChunkId = `${this._tile.key.normalizedId}.${this._sourceTile?.key.normalizedId}${this._end ? "e" : ""}`;
  }
  get queryInfo() {
    return { type: "drill-down-tile", chunkId: this.chunkId, tileId: this._tile.key.id, queryJSON: this._queryJSON, sourceTileDepth: this._sourceTileDepth, sourceTileId: this._sourceTile?.key.id, size: this.size(), end: this.end };
  }
  get first() {
    return 0 === this._sourceTileDepth;
  }
  get reader() {
    return this._reader;
  }
  get end() {
    return this._end;
  }
  get tile() {
    return this._tile;
  }
  get isTiled() {
    return true;
  }
  getTileReader(e7) {
    return this._tile.key.id === e7.key.id ? this.reader : null;
  }
}
let r$2 = class r5 {
  constructor(t8, s12) {
    this.subscription = t8, this._tileIdToResult = /* @__PURE__ */ new Map(), this._controller = new AbortController(), m$7(t8.options, () => this._controller.abort()), m$7(s12, () => this._controller.abort());
  }
  get(t8) {
    return this._tileIdToResult.get(t8);
  }
  set(t8, e7) {
    this._tileIdToResult.set(t8, e7);
  }
  get options() {
    return { signal: this._controller.signal };
  }
};
let n$2 = class n3 extends s$1 {
  constructor() {
    super(...arguments), this._loadStates = /* @__PURE__ */ new Map();
  }
  get about() {
    return { willQueryAllFeatures: false, willQueryFullResolutionGeometry: false };
  }
  async load(e7) {
    this._loadStates.has(e7.key.id) || this._loadStates.set(e7.key.id, new r$2(e7, this._options));
    const s12 = this._loadStates.get(e7.key.id);
    let n6;
    try {
      for await (const i$12 of this._fetchChunkInfos(s12, e7.tile, 0)) {
        const { queryJSON: s13, reader: r8, sourceTile: n7, sourceTileDepth: l6, tile: a9 } = i$12, u4 = new i3(r8, s13, a9, n7, l6, false);
        s$d(e7.options), this._addChunk(u4);
      }
    } catch (a9) {
      n6 = a9;
    }
    const l5 = new i3(u$2.empty(this._metadata), null, e7.tile, null, -1, true);
    if (this._addChunk(l5), n6)
      throw n6;
  }
  unload(t8) {
    super.unload(t8), this._loadStates.delete(t8.key.id);
  }
  async *_fetchChunkInfos(t8, e7, s12) {
    let o8 = t8.get(e7.id);
    const i4 = !!o8;
    if (o8 || (o8 = await this._fetchChunkInfo(t8, e7, s12), t8.set(e7.id, o8)), o8.reader.exceededTransferLimit && s12 < has("featurelayer-query-max-depth"))
      for (const r8 of e7.createChildTiles())
        yield* this._fetchChunkInfos(t8, r8, s12 + 1);
    else
      i4 || (yield o8);
  }
  async _fetchChunkInfo(t8, e7, s12) {
    const o8 = t8.subscription.tile.getQuantizationParameters(), i4 = this._queryInfo.createTileQuery(e7, { returnExceededLimitFeatures: false, quantizationParameters: o8 });
    return { reader: await this._fetch(i4, t8.subscription.options), queryJSON: i4.inner.toJSON(), tile: t8.subscription.tile, sourceTile: e7, sourceTileDepth: s12 };
  }
};
let t$2 = class t5 extends r$4 {
  constructor(e7, t8, i4, r8, s12) {
    super(), this._reader = e7, this._queryJSON = t8, this._tile = i4, this._page = r8, this._end = s12, this.chunkId = `${this._tile.key.id}.${this._page}${this.end ? "e" : ""}`, this.normalizedChunkId = `${this._tile.key.normalizedId}.${this._page}${this.end ? "e" : ""}`;
  }
  get queryInfo() {
    return { type: "paged-tile", chunkId: this.chunkId, tileId: this._tile.key.id, queryJSON: this._queryJSON, page: this._page, size: this.size(), end: this.end };
  }
  get reader() {
    return this._reader;
  }
  get first() {
    return 0 === this._page;
  }
  get end() {
    return this._end;
  }
  get page() {
    return this._page;
  }
  get tile() {
    return this._tile;
  }
  get isTiled() {
    return true;
  }
  getTileReader(e7) {
    return this._tile.key.id === e7.key.id ? this.reader : null;
  }
};
let n$1 = class n4 {
  constructor(t8, e7) {
    this.subscription = t8, this._pages = /* @__PURE__ */ new Set(), this._controller = new AbortController(), this._done = false, m$7(t8.options, () => this._controller.abort()), m$7(e7, () => this._controller.abort());
  }
  resetAbortController() {
    this._controller = new AbortController();
  }
  get pageStart() {
    let t8 = -1;
    for (const e7 of this._pages.values())
      t8 = Math.max(t8, e7);
    return t8 + 1;
  }
  get done() {
    return this._done;
  }
  get options() {
    return { signal: this._controller.signal };
  }
  add(t8, e7) {
    this._pages.add(t8), this._done = this._done || e7;
  }
};
let a$1 = class a7 extends s$1 {
  constructor() {
    super(...arguments), this._loadStates = /* @__PURE__ */ new Map();
  }
  get about() {
    return { willQueryAllFeatures: false, willQueryFullResolutionGeometry: false };
  }
  async load(e7) {
    this._loadStates.has(e7.key.id) || this._loadStates.set(e7.key.id, new n$1(e7, this._options));
    const o8 = this._loadStates.get(e7.key.id);
    let s12;
    o8.resetAbortController();
    try {
      await this._fetchPages(o8);
    } catch (l5) {
      s12 = l5;
    }
    const a9 = new t$2(u$2.empty(this._metadata), null, e7.tile, -1, true);
    if (c$9(o8.options) || this._addChunk(a9), s12)
      throw s12;
  }
  unload(t8) {
    super.unload(t8), this._loadStates.delete(t8.key.id);
  }
  async _fetchPages(t8) {
    const o8 = 4, s12 = 20;
    let r8 = 0, i4 = t8.pageStart, n6 = 1;
    for (; r8 < s12 && !t8.done; ) {
      const s13 = [];
      for (let e7 = 0; e7 < n6; e7++)
        s13.push(this._fetchChunk(t8, i4++));
      const a9 = await Promise.all(s13);
      for (const o9 of a9)
        (0 !== o9.size() || o9.first) && (t8.add(o9.page, !o9.reader.exceededTransferLimit), s$d(t8.options), this._addChunk(o9));
      r8++, n6 = Math.min(n6 + 1, o8);
    }
  }
  async _fetchChunk(t8, e7) {
    const o8 = t8.subscription.tile, s12 = this._queryInfo.createPagedTileQuery(o8, e7), i4 = await this._fetch(s12, t8.options);
    return new t$2(i4, s12.inner.toJSON(), o8, e7, false);
  }
};
let t$1 = class t6 extends r$4 {
  constructor(e7, t8, r8, s12) {
    super(), this._reader = e7, this._queryJSON = t8, this._page = r8, this._end = s12, this.chunkId = `${this._page}${this.end ? "e" : ""}`, this.normalizedChunkId = this.chunkId;
  }
  get reader() {
    return this._reader;
  }
  get first() {
    return 0 === this._page;
  }
  get end() {
    return this._end;
  }
  get queryInfo() {
    return { type: "snapshot", chunkId: this.chunkId, queryJSON: this._queryJSON, page: this._page, size: this.size(), end: this.end };
  }
  get isTiled() {
    return false;
  }
  getTileReader(e7) {
    const t8 = this.queryFeaturesInBounds(e7.bounds);
    return t8.setTransformForDisplay(e7.transform), t8;
  }
};
class a8 extends a$2 {
  constructor(t8, e7, o8, s12, n6, a9) {
    super(t8, e7, o8, n6, a9), this._random = new t$8(1e3), this._featureCount = s12;
  }
  get about() {
    return { willQueryAllFeatures: true, willQueryFullResolutionGeometry: true };
  }
  load(t8) {
    return null == this._promise && (this._promise = this._downloadPages(this._featureCount)), this._promise;
  }
  unload(t8) {
  }
  async _downloadPages(e7) {
    const r8 = Math.ceil(e7 / this._queryInfo.pageSize), o8 = Array.from({ length: r8 }, (t8, e8) => e8).sort((t8, e8) => this._random.getInt() - this._random.getInt()), a9 = await Promise.all(o8.map((t8) => this._downloadPage(t8))), i4 = new t$1(u$2.empty(this._metadata), null, -1, true);
    this._store.insert(i4);
    const u4 = a9.filter((t8) => t8);
    if (u4.length)
      throw new s$e("featurelayer-query", "Encountered errors when downloading data", { errors: u4 });
  }
  async _downloadPage(t8) {
    try {
      const r8 = this._queryInfo.createPagedQuery(t8), o8 = await this._fetch(r8, this._options), n6 = new t$1(o8, r8.inner.toJSON(), t8, false);
      return s$d(this._options), this._store.insert(n6), null;
    } catch (r8) {
      return r8;
    }
  }
}
let s11 = class extends S$2 {
  constructor(r8) {
    super(r8);
  }
  get connectionStatus() {
    return this.connection?.connectionStatus;
  }
  get errorString() {
    return this.connection?.errorString;
  }
};
e$8([y$5()], s11.prototype, "connection", void 0), e$8([y$5()], s11.prototype, "connectionStatus", null), e$8([y$5()], s11.prototype, "errorString", null), s11 = e$8([c$6("esri.views.2d.layers.features.sources.StreamConnectionState")], s11);
class t7 {
  constructor(e7, t8) {
    this._metadata = e7, this._onUpdate = t8, this._objectIdToFeature = /* @__PURE__ */ new Map();
  }
  get size() {
    return this._objectIdToFeature.size;
  }
  get reader() {
    return u$2.fromFeatures([...this._objectIdToFeature.values()], this._metadata);
  }
  add(e7) {
    this._objectIdToFeature.set(e7.objectId, e7);
  }
  forEach(e7) {
    this._objectIdToFeature.forEach(e7);
  }
  removeById(e7) {
    const t8 = this._objectIdToFeature.get(e7);
    return t8 ? (this._objectIdToFeature.delete(e7), t8) : null;
  }
  clear() {
    this._objectIdToFeature = /* @__PURE__ */ new Map();
  }
  update(e7, t8) {
    this._onUpdate(e7?.length ?? 0);
  }
}
let r$1 = class r6 extends r$4 {
  constructor(e7) {
    super(), this._reader = e7, this.chunkId = "stream-chunk", this.normalizedChunkId = "stream-chunk";
  }
  get reader() {
    return this._reader;
  }
  get first() {
    return true;
  }
  get end() {
    return true;
  }
  get queryInfo() {
    return { type: "stream", chunkId: this.chunkId, size: this.size(), end: this.end };
  }
  get isTiled() {
    return false;
  }
  getTileReader(e7) {
    const r8 = this.queryFeaturesInBounds(e7.bounds);
    return r8.setTransformForDisplay(e7.transform), r8;
  }
};
class h2 extends r$3 {
  constructor(t$12, s$12, o8, a9, c3) {
    super(o8), this._service = t$12, this._dataFilter = s$12, this._streamOptions = a9, this._metadata = c3, this._connectionState = new s11(), this._forceRefresh = false, this.events = new o$c();
    const { objectIdField: h3, timeInfo: m4 } = this._metadata, { purgeOptions: d2 } = s$12;
    this._stagingStore = new t7(this._metadata, (e7) => this.events.emit("features-updated", e7)), this._manager = new o$f(this._stagingStore, h3, m4, d2), this.connect();
  }
  destroy() {
    super.destroy(), this.disconnect();
  }
  get about() {
    return { willQueryAllFeatures: false, willQueryFullResolutionGeometry: false };
  }
  get connectionStatus() {
    return this._connectionState.connectionStatus;
  }
  get errorString() {
    return this._connectionState?.errorString;
  }
  async refresh() {
    const e7 = null != this._chunk;
    this._manager.checkForUpdates() || !e7 || this._forceRefresh ? (this._chunk && this._store.remove(this._chunk), this._forceRefresh = false, this._chunk = new r$1(this._stagingStore.reader), this._store.insert(this._chunk), this.events.emit("tick")) : this.events.emit("tick");
  }
  async updateFields(e7) {
    throw new Error("Updating available fields not supported for StreamLayer");
  }
  async load(e7) {
  }
  unload(e7) {
  }
  disconnect() {
    this._connection = u$4(this._connection), this._connectionState.connection = null, this._handlesGroup?.remove();
  }
  connect() {
    if (null != this._connection)
      return;
    const { geometryType: e7, spatialReference: s12 } = this._metadata, { maxReconnectionAttempts: n6, maxReconnectionInterval: i4, geometryDefinition: r8, definitionExpression: a9, customParameters: c3 } = this._dataFilter;
    this._connection = r$8(this._service.source, s12, this._streamOptions.outSR, e7, a9, r8, n6, i4, c3), this._handlesGroup = r$9([this._connection.on("data-received", (e8) => this._onFeature(e8)), this._connection.on("message-received", (e8) => this._onWebSocketMessage(e8))]), this._connectionState.connection = this._connection;
  }
  clear() {
    this._manager.checkForUpdates(), this._stagingStore.clear(), this._forceRefresh = true;
  }
  updateCustomParameters(e7) {
    this._connection?.updateCustomParameters(e7);
  }
  sendMessageToSocket(e7) {
    this._connection?.sendMessageToSocket(e7);
  }
  sendMessageToClient(e7) {
    this._connection?.sendMessageToClient(e7);
  }
  _onWebSocketMessage(e7) {
    if ("type" in e7)
      switch (e7.type) {
        case "delete":
          if (e7.objectIds)
            for (const t8 of e7.objectIds)
              this._manager.removeById(t8);
          if (e7.trackIds)
            for (const t8 of e7.trackIds)
              this._manager.removeByTrackId(t8);
          break;
        case "clear":
          this.clear();
      }
    this.events.emit("message-received", e7);
  }
  _onFeature(e7) {
    try {
      this._manager.add(e7), this.events.emit("data-received", e7);
    } catch (t8) {
    }
  }
}
class n5 {
  constructor(s12) {
    this._onChange = s12, this._chunks = /* @__PURE__ */ new Map(), this._chunksToRemove = [], this.events = new o$c(), this.featureAdapter = new t$9();
  }
  destroy() {
    this.clear();
  }
  clear() {
    for (const e7 of this._chunks.values())
      this._chunksToRemove.push(e7);
    this._chunks.clear(), null != this._overrideChunk && this._chunksToRemove.push(this._overrideChunk), this._overrideChunk = null;
  }
  *chunks() {
    this._overrideChunk && (yield this._overrideChunk), yield* this._chunks.values();
  }
  insert(e7) {
    has("esri-2d-update-debug") && console.debug(`Chunk[${e7.chunkId}] SourceChunkStore.insert`), this._overrideChunk?.overridenIds.size && e7.reader.removeIds(this._overrideChunk.overridenIds), this._chunks.set(e7.chunkId, e7), this.events.emit("changed"), this._onChange();
  }
  remove(e7) {
    has("esri-2d-update-debug") && console.debug(`Chunk[${e7.chunkId}] SourceChunkStore.remove`), this._chunks.delete(e7.chunkId), this._chunksToRemove.push(e7);
  }
  cleanupRemovedChunks() {
    const e7 = this._chunksToRemove;
    return this._chunksToRemove = [], e7;
  }
  applyOverrides(e7, s12) {
    null == this._overrideChunk && (this._overrideChunk = new t$4(s12)), this._overrideChunk.applyOverrides(e7);
    for (const o8 of this._chunks.values())
      o8.reader.removeIds(this._overrideChunk.overridenIds), o8.invalidate();
  }
  forEach(e7) {
    const s12 = /* @__PURE__ */ new Set();
    for (const o8 of this.chunks()) {
      const r8 = o8.reader.getCursor();
      for (; r8.next(); ) {
        const o9 = r8.getObjectId();
        s12.has(o9) || (e7(r8.copy()), s12.add(o9));
      }
    }
  }
  forEachUnsafe(e7) {
    const s12 = /* @__PURE__ */ new Set();
    for (const o8 of this.chunks()) {
      const r8 = o8.reader.getCursor();
      for (; r8.next(); ) {
        const o9 = r8.getObjectId();
        s12.has(o9) || (e7(r8), s12.add(o9));
      }
    }
  }
  forEachInBounds(e7, s12) {
    const o8 = /* @__PURE__ */ new Set();
    for (const r8 of this.chunks()) {
      const n6 = r8.queryFeaturesInBounds(e7);
      for (; n6.next(); ) {
        const e8 = n6.getObjectId();
        o8.has(e8) || (s12(n6.copy()), o8.add(e8));
      }
    }
  }
  forEachBounds(e7, o8) {
    const r8 = i$6();
    for (const s12 of e7) {
      s12.getBounds(r8) && o8(r8);
    }
  }
}
class v {
  constructor(e7, t8, s12, r8) {
    this._aggregateAdapter = e7, this._subscriptions = t8, this._onChange = s12, this._connection = r8, this._updateTracking = new d$6({ debugName: "FeatureSource" }), this._didInvalidateData = false, this._store = new n5(this._onChange);
  }
  destroy() {
    this._strategy?.destroy(), this._store.destroy(), this._streamMessenger?.destroy();
  }
  get _eventLog() {
    return this._connection.eventLog;
  }
  get metadata() {
    if (!this._metadata)
      throw new Error("InternalError: Metadata not defined. Was update called?");
    return this._metadata;
  }
  get service() {
    return this._schema.service;
  }
  get store() {
    return this._store;
  }
  get streamMessenger() {
    return null == this._streamMessenger && this._initStreamMessenger(), this._streamMessenger;
  }
  get statistics() {
    return t$3.from(this._store);
  }
  get updateTracking() {
    return this._updateTracking;
  }
  get queryEngine() {
    if (!this._queryEngine) {
      if (!this._schema)
        return null;
      const { dataFilter: e7 } = this._schema.mutable, t8 = this._schema.mutable.availableFields, s12 = this._metadata;
      this._queryEngine = new $({ featureStore: this._store, fieldsIndex: s12.fieldsIndex, geometryType: s12.geometryType, objectIdField: s12.objectIdField, hasM: false, hasZ: false, spatialReference: e7.outSpatialReference, cacheSpatialQueries: true, aggregateAdapter: this._aggregateAdapter, timeInfo: s12.timeInfo, definitionExpression: e7.definitionExpression, availableFields: t8 });
    }
    return this._queryEngine;
  }
  get isStream() {
    return "stream" === this._schema.type;
  }
  chunks() {
    return Array.from(this._store.chunks());
  }
  cleanupRemovedChunks() {
    return this._store.cleanupRemovedChunks();
  }
  onSubscribe(e7) {
    this._eventLog.onEvent({ type: "subscribe", tile: e7.tile.id });
    const t8 = this._strategy?.load(e7);
    t8 && (t8.then(() => this._eventLog.onEvent({ type: "loaded", tile: e7.tile.id })).catch((t9) => this._eventLog.onEvent({ type: "error", tile: e7.tile.id, error: t9 })), this._updateTracking.addPromise(t8));
  }
  onResume(e7) {
    this._updateTracking.addPromise(d$3(this._strategy?.load(e7)));
  }
  onUnsubscribe(e7) {
    this._eventLog.onEvent({ type: "unsubscribe", tile: e7.tile.id }), this._strategy?.unload(e7);
  }
  getOverride(e7) {
    return this._updateTracking.addPromise(this._doGetOverride(e7));
  }
  applyOverride(e7) {
    this._didInvalidateData = true, this._store.applyOverrides(e7, this.metadata);
  }
  async update(e7, t8) {
    const s12 = e7.source, n6 = m$5(this._schema?.mutable, s12.mutable);
    if (!n6)
      return false;
    if (has("esri-2d-update-debug") && console.debug(`Version[${t8}] FeatureSource.update`, { changes: n6 }), this._schema = s12, this._metadata = new i$7(this._schema.service.metadata), this._queryEngine?.destroy(), this._queryEngine = null, "feature" === this._schema.type && null != this._schema.service.queryMetadata.lastEditDate && (this._lastEditDate = this._schema.service.queryMetadata.lastEditDate), null == this._streamMessenger && "stream" === this._schema.type && this._initStreamMessenger(), d$7(n6, "sourceRefreshVersion") && this._strategy?.refresh)
      return await this._strategy.refresh(), true;
    if ("feature" === s12.type && d$7(n6, "availableFields")) {
      if (await this._queryLastEditDateChanged() || this._didInvalidateData)
        this._didInvalidateData = false, await this._updateStrategy(t8);
      else {
        this._eventLog.onEvent({ type: "updateFieldsStart" });
        try {
          await this._strategy.updateFields(s12.mutable.availableFields), this._eventLog.onEvent({ type: "updateFieldsEnd" });
        } catch (o8) {
          this._eventLog.onEvent({ type: "updateFieldsError", error: o8 });
        }
      }
      return false;
    }
    return !(!s$g(n6, "dataFilter") && !s$g(n6, "sourceRefreshVersion")) && (await this._updateStrategy(t8), true);
  }
  _initStreamMessenger() {
    null == this._streamMessenger && (this._streamMessenger = new a$4(this._connection));
  }
  async _doGetOverride(e7) {
    return this._strategy.queryOverride(e7);
  }
  async _queryLastEditDateChanged() {
    if (null == this._lastEditDate)
      return false;
    const t8 = this._schema.service.source, s12 = { ...t8.query, f: "json" }, r8 = (await U$1(t8.path, { query: s12, responseType: "json" })).data.editingInfo.lastEditDate;
    return r8 !== this._lastEditDate && (this._lastEditDate = r8, true);
  }
  async _createStrategy() {
    const e7 = this.service, t8 = "isSourceHosted" in e7 && e7.isSourceHosted, s12 = Array.isArray(e7.source), r8 = e7.source && "collection" in e7.source, a$22 = t8 || s12 || r8;
    if ("stream" === this._schema.type) {
      const e8 = new h2(this._schema.service, this._schema.mutable.dataFilter, this._store, { outSR: this._schema.mutable.dataFilter.outSpatialReference }, this.metadata);
      return this._streamMessenger.strategy = e8, e8;
    }
    const i4 = s$2.fromSchema(this._schema, this._metadata), n6 = await this._supportSnapshotMode(this._schema, i4);
    return n6 ? new a8(this._schema.service, i4, this._store, n6.featureCount, this.metadata, this._eventLog) : a$22 ? new a$1(this._schema.service, i4, this._store, this.metadata, this._eventLog) : new n$2(this._schema.service, i4, this._store, this.metadata, this._eventLog);
  }
  async _updateStrategy(e7) {
    const t8 = await this._createStrategy();
    this._eventLog.onEvent({ type: "updateStrategyStart", about: t8.about });
    const r8 = !!this._strategy;
    this._store.clear(), this._strategy?.destroy(), this._strategy = t8, has("esri-2d-update-debug") && console.debug(`Version[${e7}] FeatureSource.updateStrategy`, { strategy: t8 });
    const a9 = Array.from(this._subscriptions.values());
    if (!a9.length)
      return void this._eventLog.onEvent({ type: "updateStrategyEnd" });
    const i4 = Promise.all(a9.map((e8) => this._strategy.load(e8).then(() => this._eventLog.onEvent({ type: "loaded", tile: e8.tile.id })).catch((t9) => this._eventLog.onEvent({ type: "error", tile: e8.tile.id, error: t9 }))));
    this._updateTracking.addPromise(i4);
    try {
      r8 && await i4;
    } catch (n6) {
      f$5(n6);
    }
    this._eventLog.onEvent({ type: "updateStrategyEnd" }), has("esri-2d-update-debug") && console.debug(`Version[${e7}] FeatureSource.updateStrategyEnd`, { strategy: t8 });
  }
  async _supportSnapshotMode(e7, t8) {
    const { queryMetadata: s12 } = e7.service, r8 = s12.snapshotInfo;
    if (!r8 || !r8.supportsSnapshotMinThreshold || !r8.snapshotCountThresholds)
      return null;
    const a9 = e7.service.source, i4 = t8.createQuery();
    i4.inner.orderByFields = [], i4.inner.returnGeometry = false;
    const n6 = (await S$3(a9, i4.inner, { query: i4.customParameters })).data.count, { min: h3, max: d2 } = r8.snapshotCountThresholds;
    return n6 <= h3 || r8.supportsSnapshotMaxThreshold && n6 < d2 ? { featureCount: n6 } : null;
  }
}
class r7 {
  constructor(r8, s12) {
    this._handles = new e$9(), this._abortController = new AbortController(), this._resolver = L$1(), this._isDone = false, this._aborted = false, this.tile = r8, this._version = s12, this._handles.add([]);
  }
  destroy() {
    this.pause(), this._handles.destroy();
  }
  get key() {
    return this.tile.key;
  }
  get version() {
    return this._version;
  }
  set version(t8) {
    this._version = t8;
  }
  get signal() {
    return this._abortController.signal;
  }
  get options() {
    return { signal: this._abortController.signal };
  }
  get done() {
    return this._resolver.promise;
  }
  get isDone() {
    return this._isDone;
  }
  resolve() {
    this._isDone = true, this._resolver.resolve();
  }
  get paused() {
    return this._aborted;
  }
  resume() {
    this._abortController = new AbortController(), this._aborted = false;
  }
  pause() {
    this._aborted || (this._aborted = true, this._abortController.abort());
  }
}
class f2 {
  constructor(e7) {
    this.edit = e7, this.resolver = L$1();
  }
}
class b {
  constructor(e7, t8) {
    this.schema = e7, this.version = t8, this.resolver = L$1();
  }
}
class m3 {
  constructor() {
    this._aggregateAdapter = { getFeatureObjectIds: (e7) => this._processor.getFeatureObjectIdsForAggregate(e7) }, this._subscriptions = /* @__PURE__ */ new Map(), this._updateRequested = false, this._updateSubscriptionRequests = [], this._updateHighlightRequests = [];
  }
  destroy() {
    this._subscriptions.clear(), this._processor.destroy(), this._source.destroy(), this._handles.remove(), this._editState = null, this._tileInfoView = null;
  }
  onDetach() {
    this.destroy(), this._initialize(this._connection);
  }
  _initialize(e7) {
    this._source = new v(this._aggregateAdapter, this._subscriptions, () => this._requestUpdate(), e7), this._processor = new l$2(e7, this._source), this._handles = r$9([d$4(() => this._source.updateTracking.updating, () => {
      this._requestUpdate(), this._connection.layerView.setUpdating({ data: this._source.updateTracking.updating, pipeline: true });
    })]);
  }
  set remoteClient(e7) {
    this._connection = new e$5(e7), this._initialize(this._connection);
  }
  get features() {
    const t8 = this._source.queryEngine;
    if (!t8)
      throw new s$e("no-queryEngine", "No query engine defined");
    return t8;
  }
  get aggregates() {
    const t8 = this._processor.aggregateQueryEngine;
    if (!t8)
      throw new s$e("no-queryEngine", "No aggregate query engine defined");
    return t8;
  }
  get processor() {
    return this._processor;
  }
  get streamMessenger() {
    return this._source.streamMessenger;
  }
  getDisplayFeatures(e7) {
    return this._processor.getDisplayFeatures(e7);
  }
  async updateSchema(e7, t8) {
    return has("esri-2d-update-debug") && this._updateSchemaState && console.error("InternalError: Schema already updating"), this._updateSchemaState = new b(e7, t8), this._requestUpdate(), this._updateSchemaState.resolver.promise;
  }
  updateSubscriptions(e7) {
    this._updateSubscriptionRequests.push(e7), this._requestUpdate();
  }
  updateHighlight(e7) {
    this._updateHighlightRequests.push(e7), this._requestUpdate();
  }
  async onEdits(t8) {
    if (null != this._editState)
      throw new s$e("InternalError - Already processing an edit");
    this._editState = new f2(t8);
    const s12 = this._editState.resolver.promise;
    return this._requestUpdate(), s12;
  }
  queryStatistics() {
    return this._source.statistics.toJSON();
  }
  async queryVisibleFeatures(e7, t8) {
    return this.features.executeQuery(e7, t8);
  }
  async queryHeatmapStatistics(e7) {
    const t8 = Math.round(u$5(e7.radius));
    let s12 = Number.POSITIVE_INFINITY, i4 = Number.NEGATIVE_INFINITY;
    const r8 = "string" == typeof e7.fieldOffset, o8 = e7.fieldOffset ?? 0, n6 = Array.from(this._subscriptions.values()), a9 = this._source.chunks(), d2 = t8 ** 2, p2 = 3 / (Math.PI * d2), h3 = 2 * t8, l5 = Math.ceil(a$b / h3);
    for (const u4 of n6) {
      const t9 = u4.tile, n7 = new Float64Array(l5 * l5);
      for (const s13 of a9) {
        const i5 = s13.getTileReader(t9);
        if (!i5)
          continue;
        const u5 = i5.getCursor();
        for (; u5.next(); ) {
          let t10 = 1;
          if (null != e7.field) {
            const s15 = u5.readAttribute(e7.field);
            t10 = r8 ? -1 * +s15 : +s15 + o8;
          }
          const s14 = u5.readXForDisplay() / h3, i6 = u5.readYForDisplay() / h3, a10 = Math.floor(s14), c3 = Math.floor(i6);
          if (a10 < 0 || c3 < 0 || a10 >= l5 || c3 >= l5)
            continue;
          const g4 = ((0.5 + a10 - s14) * h3) ** 2 + ((0.5 + c3 - i6) * h3) ** 2;
          if (g4 > d2)
            continue;
          const _2 = t10 * (p2 * (1 - g4 / d2) ** 2);
          n7[c3 + a10 * l5] += _2;
        }
      }
      for (let e8 = 0; e8 < n7.length; e8++)
        s12 = Math.min(s12, n7[e8]), i4 = Math.max(i4, n7[e8]);
    }
    return { max: i4, min: s12 };
  }
  async getSampleFeatures(e7) {
    const t8 = this._source.chunks();
    if (t8.reduce((e8, t9) => e8 + t9.size(), 0) <= e7.minFeatureCount) {
      if (!this._source.updateTracking.updating) {
        const e8 = [];
        return this._source.store.forEachUnsafe((t9) => e8.push(t9.readLegacyFeatureWorldSpace())), e8;
      }
      return null;
    }
    const s12 = /* @__PURE__ */ new Set(), i4 = [], r8 = t8.map((e8) => e8.reader.getCursor()), n6 = new t$8(), u4 = 3 * e7.sampleSize;
    for (let o8 = 0; o8 < u4 && i4.length < e7.sampleSize; o8++) {
      const e8 = r8[n6.getIntRange(0, t8.length - 1)];
      if (0 === e8.getSize())
        continue;
      const o9 = n6.getIntRange(0, e8.getSize() - 1);
      e8.setIndex(o9);
      const u5 = e8.getObjectId();
      s12.has(u5) || (s12.add(u5), i4.push(e8.readLegacyFeatureWorldSpace()));
    }
    return i4.length >= e7.sampleSize ? i4 : null;
  }
  _requestUpdate() {
    this._updateRequested || (this._updateRequested = true, t$a(() => this._scheduleNextUpdate()));
  }
  _scheduleNextUpdate() {
    this._updateRequested && (this._ongoingUpdate || (this._ongoingUpdate = this._doUpdate().finally(() => {
      this._ongoingUpdate = null, this._scheduleNextUpdate();
    }), this._updateRequested = false));
  }
  _subscribe(e7) {
    const t8 = e7.tileId;
    if (this._subscriptions.has(t8)) {
      const s13 = this._subscriptions.get(t8);
      return void (s13.paused && (has("esri-2d-update-debug") && console.debug(`Tile[${t8}] Pipeline.resume`), s13.resume(), s13.version = e7.version, this._source.onResume(s13)));
    }
    has("esri-2d-update-debug") && console.debug(`Tile[${t8}] Pipeline.subscribe`);
    const s12 = new n$b(this._tileInfoView, t8), i4 = new r7(s12, e7.version);
    this._subscriptions.set(t8, i4), this._source.onSubscribe(i4), this._processor.onSubscribe(i4);
  }
  _unsubscribe(e7) {
    const t8 = this._subscriptions.get(e7);
    t8 && (has("esri-2d-update-debug") && console.debug(`Tile[${e7}] Pipeline.unsubscribe`), this._source.onUnsubscribe(t8), this._processor.onUnsubscribe(t8), this._subscriptions.delete(t8.key.id), t8.destroy());
  }
  _pauseSubscription(e7) {
    const t8 = this._subscriptions.get(e7);
    t8 && (has("esri-2d-update-debug") && console.debug(`Tile[${e7}] Pipeline.pause`), t8.pause());
  }
  async _doUpdate() {
    if (has("esri-2d-update-debug") && console.debug("Pipeline._doUpdateStart"), await this._connection.layerView.setUpdating({ data: this._source.updateTracking.updating, pipeline: true }), this._updateSubscriptionRequests.length) {
      const e8 = this._updateSubscriptionRequests;
      this._updateSubscriptionRequests = [];
      for (const t9 of e8)
        this._doUpdateSubscriptions(t9);
    }
    const e7 = this._updateSchemaState;
    if (this._updateSchemaState = null, null != e7) {
      const { schema: t9, version: s13 } = e7;
      await this._doUpdateSchema(t9, s13);
    }
    const t8 = this._editState;
    if (this._editState = null, null != t8) {
      has("esri-2d-update-debug") && console.debug("Pipeline.applyEditOverride", t8.edit);
      const e8 = await this._source.getOverride(t8.edit);
      await this._processor.applyOverride(e8), has("esri-2d-update-debug") && console.debug("Pipeline.endEditOverride", t8.edit);
    }
    if (this._updateHighlightRequests.length) {
      const e8 = this._updateHighlightRequests;
      this._updateHighlightRequests = [];
      for (const t9 of e8)
        this._processor.updateHighlight(t9);
    }
    const s12 = this._source.cleanupRemovedChunks();
    this._processor.removeChunks(s12);
    try {
      this._subscriptions.size && (has("esri-2d-update-debug") && console.debug("Pipeline.updateChunksStart"), await this._processor.updateChunks(), has("esri-2d-update-debug") && console.debug("Pipeline.updateChunksEnd"));
    } catch (r8) {
      f$5(r8);
    }
    null != t8 && t8.resolver.resolve(), null != e7 && e7.resolver.resolve(), this._updateRequested ? (has("esri-2d-update-debug") && console.debug("Pipeline._doUpdateEnd [updateRequested=true]"), await this._connection.layerView.setUpdating({ data: this._source.updateTracking.updating, pipeline: true })) : (has("esri-2d-update-debug") && console.debug("Pipeline._doUpdateEnd [updateRequested=false, After flush]"), await this._connection.layerView.setUpdating({ data: this._source.updateTracking.updating, pipeline: this._updateRequested }));
  }
  async _doUpdateSchema(e7, t8) {
    if (has("esri-2d-update-debug") && console.debug(`Version[${t8}] Pipeline.updateStart`, { schema: e7 }), !this._tileInfoView) {
      const t9 = j$1.fromJSON(e7.source.tileInfoJSON);
      this._tileInfoView = new h$4(t9);
    }
    const s12 = { tileInfo: this._tileInfoView?.tileInfo };
    try {
      const i4 = await this._source.update(e7, t8), r8 = Array.from(this._subscriptions.values());
      await this._processor.update(e7, t8, s12, i4, r8);
    } catch (i4) {
      console.error(i4);
    }
    has("esri-2d-update-debug") && console.debug(`Version[${t8}] Pipeline.updateEnd`);
  }
  _doUpdateSubscriptions(e7) {
    if (has("esri-2d-update-debug") && console.debug("Pipeline.updateSubscriptions", e7), !this._tileInfoView) {
      const t8 = j$1.fromJSON(e7.tileInfoJSON);
      this._tileInfoView = new h$4(t8);
    }
    for (const t8 of e7.subscribe)
      this._subscribe(t8);
    for (const t8 of e7.unsubscribe)
      this._unsubscribe(t8);
    if (has("featurelayer-query-pausing-enabled"))
      for (const t8 of e7.pause)
        this._pauseSubscription(t8);
  }
}
export {
  m3 as default
};
