import { bb as s$1, bo as e, bp as y$1, e1 as d$2, br as c, cU as i, bs as g$1, dS as w$1, mq as e$1, eX as Z$1, nE as ee, dr as g, cZ as f$1, dd as _, de as b$1, nF as a$1, nG as h$1, d6 as m, at as S, nH as R, nI as Q$1, dY as V$1, cE as k, az as s, eY as i$1, nJ as s$2, av as v, hI as S$1, l6 as u$1, eL as t$1, eP as o$1, bQ as b, bD as u$2, ap as M$1, aM as s$3, c_ as d$3, mv as o$2, dj as Z$2, mx as ce, hS as t$2, aw as u$3, d1 as o$3, k6 as E, nK as S$2 } from "./chunk-KFNcxJaF.js";
import { a as t, n as n$1, u } from "./chunk-I90ewfux.js";
import { x as x$1 } from "./chunk-ewxQmXoN.js";
import { a } from "./chunk-ZkCkRDhu.js";
import { W as W$1 } from "./chunk-mk4KSkT-.js";
import { n as n$2 } from "./chunk-MT1PWqgL.js";
import { I } from "./chunk-q8E2ylxA.js";
const O = "esri.views.3d.layers.i3s.I3SMeshViewFilter", B = s$1.getLogger(O);
let L = class extends g$1 {
  constructor(e2) {
    super(e2), this._projectionEngineLoaded = false;
  }
  initialize() {
    w$1(() => this.viewFilter?.geometry || null != this.layerFilter).then(() => this.loadAsyncModule(import("./chunk-WuibsuuF.js").then((e2) => {
      this.destroyed || (this._geometryEngine = e2);
    })));
  }
  get sortedObjectIds() {
    if (null == this.viewFilter?.objectIds)
      return null;
    const e2 = e$1(this.viewFilter.objectIds);
    return e2.sort(), e2;
  }
  get parsedWhereClause() {
    const e2 = null != this.viewFilter ? this.viewFilter.where : null;
    if (null == e2 || !e2)
      return null;
    try {
      return x$1.create(e2, this.layerFieldsIndex);
    } catch (t2) {
      B.error(`Failed to parse filter where clause: ${t2}`);
    }
    return null;
  }
  addFilters(e2, t$12, r, i2) {
    const s2 = this.sortedObjectIds;
    null != s2 && e2.push((e3) => Z$1(s2, true, e3)), this.addSqlFilter(e2, this.parsedWhereClause);
    const n2 = t(this._layerMaskGeometries), a2 = this._geometryEngine;
    if (null != n2 && null != this.layerFilter && null != a2) {
      const s3 = this.layerFilter.spatialRelationship;
      e2.push((e3, o2) => q(a2, e3, o2, i2, t$12, r, n2, s3));
    }
    const l2 = t(this._viewMaskGeometries);
    if (null != l2 && null != this.viewFilter && null != a2) {
      const s3 = this.viewFilter.spatialRelationship;
      e2.push((e3, n3) => q(a2, e3, n3, i2, t$12, r, l2, s3));
    }
  }
  isMBSGeometryVisible(e2, t$12, r) {
    const i2 = t(this._layerMaskGeometries), s2 = this._geometryEngine;
    if (null != i2 && null != this.layerFilter && null != s2) {
      const n3 = this.layerFilter.spatialRelationship, o2 = i2[0].spatialReference || t$12;
      if (!a(e2, r, N, o2))
        return B.warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"), true;
      return V(s2, N, i2, o2, n3);
    }
    const n2 = t(this._viewMaskGeometries);
    if (null != n2 && null != this.viewFilter && null != s2) {
      const i3 = this.viewFilter.spatialRelationship, o2 = n2[0].spatialReference || t$12;
      if (!a(e2, r, N, o2))
        return B.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"), true;
      return V(s2, N, n2, o2, i3);
    }
    return true;
  }
  get parsedGeometry() {
    const e2 = t(this._viewMaskGeometries), t$12 = t(this._layerMaskGeometries);
    return null == e2 || null == t$12 ? e2 || t$12 : t$12.concat(e2);
  }
  get _layerMaskGeometries() {
    const e2 = this.layerFilter;
    return null == e2 ? null : null == this._geometryEngine ? n$1 : "disjoint" === e2.spatialRelationship ? e2.geometries.map((e3) => ({ type: "polygon", rings: e3.rings, spatialReference: e3.spatialReference, cache: {} })) : [e2.geometries.reduce((e3, t2) => (e3.rings = [...e3.rings, ...t2.rings], e3), { type: "polygon", rings: [], spatialReference: e2.geometries[0].spatialReference, cache: {} })];
  }
  get _viewMaskGeometries() {
    if (null == this.viewFilter)
      return null;
    const { geometry: e2 } = this.viewFilter;
    if (null == e2)
      return null;
    if (null == this.viewFilter || null == this._geometryEngine)
      return n$1;
    const { distance: t2, units: r } = this.viewFilter, i2 = this.viewFilter.spatialRelationship, s2 = "mesh" === e2.type ? e2.extent : e2;
    if (null == t2 || 0 === t2)
      return W(this._geometryEngine, s2, i2);
    const n2 = r || ee(s2.spatialReference);
    if (s2.spatialReference.isWGS84) {
      const e3 = this._geometryEngine.geodesicBuffer(s2, t2, n2);
      return W(this._geometryEngine, e3, i2);
    }
    const o2 = g(s2, f$1.WGS84);
    if (null != o2) {
      const e3 = g(this._geometryEngine.geodesicBuffer(o2, t2, n2), s2.spatialReference);
      return W(this._geometryEngine, e3, i2);
    }
    if (!this._projectionEngineLoaded && (this.loadAsyncModule(_().then(() => this._projectionEngineLoaded = true)), !this._projectionEngineLoaded))
      return null;
    let l2 = null;
    try {
      l2 = b$1(s2, f$1.WGS84);
    } catch (c2) {
    }
    if (l2)
      try {
        l2 = b$1(this._geometryEngine.geodesicBuffer(l2, t2, n2), s2.spatialReference);
      } catch (c2) {
        l2 = null;
      }
    return l2 || B.error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${s2.spatialReference.wkid}) to WGS84.`), W(this._geometryEngine, l2, i2);
  }
  get updating() {
    return u(this._layerMaskGeometries) || u(this._viewMaskGeometries);
  }
  static checkSupport(e2) {
    return null != e2 && (e2.timeExtent ? (B.warn("Filters with a timeExtent are not supported for mesh scene layers"), false) : !!U(e2.spatialRelationship) || (B.warn(`Filters with spatialRelationship other than ${P.join(", ")} are not supported for mesh scene layers`), false));
  }
};
e([y$1()], L.prototype, "layerFilter", void 0), e([y$1({ type: d$2 })], L.prototype, "viewFilter", void 0), e([y$1()], L.prototype, "layerFieldsIndex", void 0), e([y$1()], L.prototype, "loadAsyncModule", void 0), e([y$1()], L.prototype, "addSqlFilter", void 0), e([y$1({ readOnly: true })], L.prototype, "sortedObjectIds", null), e([y$1({ readOnly: true })], L.prototype, "parsedWhereClause", null), e([y$1({ readOnly: true })], L.prototype, "parsedGeometry", null), e([y$1({ readOnly: true })], L.prototype, "_layerMaskGeometries", null), e([y$1({ readOnly: true })], L.prototype, "_viewMaskGeometries", null), e([y$1()], L.prototype, "updating", null), e([y$1()], L.prototype, "_projectionEngineLoaded", void 0), e([y$1()], L.prototype, "_geometryEngine", void 0), L = e([c(O)], L);
const P = /* @__PURE__ */ ((e2) => e2)(["contains", "intersects", "disjoint"]);
function U(e2) {
  return null != e2 && P.includes(e2);
}
var K;
function W(e2, t2, s2) {
  if (null == t2)
    return null;
  if ("disjoint" === s2 && "polygon" === t2.type) {
    const s3 = t2.rings.length, n2 = t2.spatialReference, o2 = new Array(s3);
    for (let e3 = 0; e3 < s3; ++e3) {
      const r = a$1(1 / 0, 1 / 0, -1 / 0, -1 / 0);
      h$1(r, t2.rings[e3]), o2[e3] = { type: "polygon", rings: [t2.rings[e3]], spatialReference: n2, cache: {}, aabr: r };
    }
    o2.sort((e3, t3) => e3.aabr[0] - t3.aabr[0]);
    const a2 = /* @__PURE__ */ new Set(), l2 = new v();
    for (let t3 = 0; t3 < o2.length; ++t3) {
      const r = o2[t3], s4 = r.aabr[0];
      a2.forEach((t4) => {
        if (s4 >= t4.aabr[2])
          return void a2.delete(t4);
        if (r.aabr[1] > t4.aabr[3] || r.aabr[3] < t4.aabr[1] || !e2.intersects(r, t4))
          return;
        r.rings = r.rings.concat(t4.rings), m(r.aabr, t4.aabr, r.aabr), r.cache = {}, a2.delete(t4);
        const n3 = S(o2, t4, o2.length, l2);
        o2.splice(n3, 1);
      }), a2.add(r);
    }
    for (const e3 of o2)
      e3.aabr = void 0;
    return o2;
  }
  return [t2];
}
function V(e2, t2, r, i2, s2) {
  if (t2[3] >= 0.5 * (t2[2] + R(i2).radius))
    return true;
  const n2 = z(e2, t2, i2);
  return r.every((t3) => H(e2, t3, n2, s2) !== K.DISCARD);
}
function q(e2, t2, r, i2, s2, n2, o2, a$12) {
  const l2 = o2[0].spatialReference || s2.spatialReference;
  if (!a(r.node.mbs, n2, N, l2))
    return void B.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");
  const c2 = z(e2, N, l2), p = $(a$12, s2, l2, i2, r.objectHandle);
  for (const u2 of o2) {
    if (0 === t2.length)
      return;
    switch (H(e2, u2, c2, a$12)) {
      case K.DISCARD:
        return void (t2.length = 0);
      case K.KEEP:
        continue;
    }
    Q$1(t2, r.featureIds, (t3) => Q(e2, u2, t3, p));
  }
}
!function(e2) {
  e2[e2.KEEP = 0] = "KEEP", e2[e2.DISCARD = 1] = "DISCARD", e2[e2.TEST = 2] = "TEST";
}(K || (K = {}));
const N = V$1(0, 0, 0, 0);
function $(e2, t2, r, i2, s2) {
  const n2 = t2.renderSpatialReference, o2 = /* @__PURE__ */ new Map(), a2 = { type: "polygon", rings: [[[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]], spatialReference: r };
  a2.rings[0][3] = a2.rings[0][0];
  const l2 = { indices: null, data: null, stride: 0, startIndex: 0, endIndex: 0 };
  let c2, p;
  switch (e2) {
    case "intersects":
      c2 = (e3, t3, r2) => e3.intersects(t3, r2) ? K.KEEP : K.TEST, p = Z;
      break;
    case "contains":
      c2 = (e3, t3, r2) => e3.contains(t3, r2) ? K.TEST : K.DISCARD, p = Z;
      break;
    default:
      c2 = (e3, t3, r2) => e3.disjoint(t3, r2) ? K.TEST : K.DISCARD, p = J;
  }
  return { collection: i2, object: s2, type: e2, maskSR: r, renderSR: n2, aabbCache: o2, triangle: a2, positions: l2, triangleTest: c2, geometryTest: p };
}
function z(e2, t2, r) {
  const i2 = { type: "point", x: t2[0], y: t2[1], hasZ: false, hasM: false, spatialReference: r }, s$12 = !k(r) && !s(r), o2 = Number.isNaN(t2[3]) ? 0 : i$1(t2[3], 0, 2 * s$2.radius), a2 = s$12 ? e2.buffer(i2, o2, 1) : e2.geodesicBuffer(i2, o2, 1);
  return a2.type = "polygon", a2;
}
function H(e2, t2, r, i2) {
  switch (i2) {
    case "intersects":
    case "contains":
      return Z(e2, t2, r);
    case "disjoint":
      return J(e2, t2, r);
  }
}
function Z(e2, t2, r) {
  return e2.intersects(t2, r) ? e2.contains(t2, r) ? K.KEEP : K.TEST : K.DISCARD;
}
function J(e2, t2, r) {
  return e2.intersects(t2, r) ? e2.contains(t2, r) ? K.DISCARD : K.TEST : K.KEEP;
}
function Q(e2, t2, r, i2) {
  const { collection: s2, object: n2, renderSR: o2, maskSR: a2, geometryTest: l2, aabbCache: c2 } = i2;
  let p = c2.get(r);
  if (!p) {
    const e3 = s2.getObjectTransform(n2);
    s2.getComponentAabb(n2, r, X);
    const t3 = [[X[0], X[1], 0], [X[0], X[4], 0], [X[3], X[4], 0], [X[3], X[1], 0]];
    for (let r2 = 0; r2 < 4; ++r2)
      S$1(t3[r2], t3[r2], e3.rotationScale), u$1(t3[r2], t3[r2], e3.position), t$1(t3[r2], o2, t3[r2], a2);
    p = { type: "polygon", rings: [t3], spatialReference: a2, cache: {} }, p.rings[0][4] = p.rings[0][0], c2.set(r, p);
  }
  switch (l2(e2, t2, p)) {
    case K.DISCARD:
      return false;
    case K.KEEP:
      return true;
  }
  const { triangle: u2, triangleTest: g2, positions: y2 } = i2, h2 = u2.rings[0][0], j = u2.rings[0][1], S2 = u2.rings[0][2], R2 = s2.getObjectTransform(n2);
  s2.getComponentPositions(n2, r, y2);
  const { indices: w, data: b2, stride: v2, startIndex: F, endIndex: _2 } = y2;
  for (let k2 = F; k2 < _2; k2 += 3) {
    const r2 = v2 * w[k2], i3 = v2 * w[k2 + 1], s3 = v2 * w[k2 + 2];
    switch (o$1(h2, b2[r2], b2[r2 + 1], b2[r2 + 2]), o$1(j, b2[i3], b2[i3 + 1], b2[i3 + 2]), o$1(S2, b2[s3], b2[s3 + 1], b2[s3 + 2]), S$1(h2, h2, R2.rotationScale), S$1(j, j, R2.rotationScale), S$1(S2, S2, R2.rotationScale), u$1(h2, h2, R2.position), u$1(j, j, R2.position), u$1(S2, S2, R2.position), t$1(h2, o2, h2, a2), t$1(j, o2, j, a2), t$1(S2, o2, S2, a2), g2(e2, t2, u2)) {
      case K.DISCARD:
        return false;
      case K.KEEP:
        return true;
    }
  }
  return "intersects" !== i2.type;
}
const X = i();
const l$1 = W$1;
let d$1 = class d extends g$1 {
  get spatialReference() {
    return this.layerView.view.spatialReference;
  }
  get layer() {
    return this.layerView.i3slayer;
  }
  get defaultQueryJSON() {
    return new b({ outSpatialReference: this.spatialReference }).toJSON();
  }
  get _dataQueryEngine() {
    return this._ensureDataQueryEngine();
  }
  constructor(e2) {
    super(e2);
  }
  initialize() {
    this.addHandles(this.layerView.on("visible-geometry-changed", () => this.spatialIndex.events.emit("changed")));
  }
  destroy() {
    this._dataQueryEngineInstance = u$2(this._dataQueryEngineInstance), this._set("layerView", null);
  }
  async executeQueryForCount(e2, r) {
    return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e2), r);
  }
  async executeQueryForExtent(e2, r) {
    const { count: t2, extent: s2 } = await this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e2), r);
    return { count: t2, extent: M$1.fromJSON(s2) };
  }
  async executeQueryForIds(e2, r) {
    return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e2), r);
  }
  async executeQuery(e2, r) {
    const s2 = this._ensureQueryJSON(e2);
    if (s2.returnGeometry)
      throw new s$3("unsupported-query", "returnGeometry is not yet supported for mesh scene layer queries");
    if (s2.returnCentroid)
      throw new s$3("unsupported-query", "returnCentroid is not yet supported for mesh scene layer queries");
    const n2 = await this._dataQueryEngine.executeQuery(s2, r), o2 = d$3.fromJSON(n2);
    return o2.features.forEach((e3) => {
      e3.geometry = null;
    }), o2;
  }
  _ensureQueryJSON(e2) {
    return null == e2 ? this.defaultQueryJSON : e2.toJSON();
  }
  _ensureDataQueryEngine() {
    if (this._dataQueryEngineInstance)
      return this._dataQueryEngineInstance;
    const e2 = this.layer.objectIdField || o$2, r = "esriGeometryPolygon", t2 = this.layer.fieldsIndex?.toJSON() || new Z$2([]), s2 = this.layerView.view.resourceController.scheduler, n2 = this.spatialReference.toJSON(), o2 = this.priority, i2 = this.spatialIndex;
    return this._dataQueryEngineInstance = new l$1({ hasZ: true, hasM: false, geometryType: r, fieldsIndex: t2, timeInfo: null, spatialReference: n2, objectIdField: e2, featureStore: i2, scheduler: s2, priority: o2 }), this._dataQueryEngineInstance;
  }
};
e([y$1({ constructOnly: true })], d$1.prototype, "layerView", void 0), e([y$1({ constructOnly: true })], d$1.prototype, "priority", void 0), e([y$1({ constructOnly: true })], d$1.prototype, "spatialIndex", void 0), e([y$1()], d$1.prototype, "spatialReference", null), e([y$1()], d$1.prototype, "layer", null), e([y$1()], d$1.prototype, "defaultQueryJSON", null), d$1 = e([c("esri.views.3d.layers.i3s.I3SQueryEngine")], d$1);
class o {
  constructor(t2) {
    this._objectIdField = t2.objectIdField, this._getFeatureExtent = t2.getFeatureExtent;
  }
  getObjectId(t2) {
    return t2.id;
  }
  getAttributes(t2) {
    const { meta: e2, index: r } = t2, o2 = {};
    this._objectIdField && (o2[this._objectIdField] = t2.id);
    const n2 = e2.attributeInfo?.attributeData;
    if (null != n2)
      for (const s2 of Object.keys(n2))
        o2[s2] = ce(n2[s2], r);
    return o2;
  }
  getAttribute(t2, e2) {
    if (e2 === this._objectIdField)
      return t2.id;
    const { meta: r, index: o2 } = t2, n2 = r.attributeInfo?.attributeData;
    return null != n2 ? ce(n2[e2], o2) : null;
  }
  getGeometry(t2) {
    if (t2.geometry)
      return t2.geometry;
    const [e2, i2, o2, s2, a2] = this._getFeatureExtent(t2, n);
    return new t$2([5], [e2, i2, o2, s2, i2, o2, s2, a2, o2, e2, a2, o2, e2, i2, o2]);
  }
  getCentroid(t2, i2) {
    if (t2.geometry)
      return n$2(new t$2(), t2.geometry, i2.hasZ, i2.hasM);
    const [o2, s2, a2, u2, d3, c2] = this._getFeatureExtent(t2, n);
    return new t$2([0], [(o2 + u2) / 2, (s2 + d3) / 2, (a2 + c2) / 2]);
  }
  cloneWithGeometry(t2, e2) {
    const { id: r, index: i2, meta: o2 } = t2;
    return { id: r, index: i2, meta: o2, geometry: e2 };
  }
}
const n = i();
const f = i();
let l = class extends g$1 {
  constructor(e2) {
    super(e2), this.events = new o$3();
  }
  forEach(e2) {
    this.forAllFeatures((r) => (e2(r), I.CONTINUE));
  }
  forEachBounds(e2, r) {
    const t2 = this.getFeatureExtent;
    for (const o2 of e2)
      r(t2(o2, f));
  }
  forEachInBounds(e2, r) {
    this.forAllFeatures((t2) => {
      const o2 = this.getFeatureExtent(t2, y);
      return E(e2, S$2(o2, d2)) && r(t2), I.CONTINUE;
    }, (r2) => {
      if (a(r2.node.mbs, this.sourceSpatialReference, h, this.viewSpatialReference), h[0] >= e2[0] && h[2] <= e2[2] && h[1] >= e2[1] && h[3] <= e2[3])
        return I.CONTINUE;
      const t2 = Math.max(e2[0], Math.min(h[0], e2[2])), o2 = Math.max(e2[1], Math.min(h[1], e2[3])), s2 = h[0] - t2, n2 = h[1] - o2;
      return s2 * s2 + n2 * n2 <= h[3] * h[3] ? I.CONTINUE : I.SKIP;
    });
  }
};
e([y$1({ constructOnly: true })], l.prototype, "featureAdapter", void 0), e([y$1({ constructOnly: true })], l.prototype, "forAllFeatures", void 0), e([y$1({ constructOnly: true })], l.prototype, "getFeatureExtent", void 0), e([y$1({ constructOnly: true })], l.prototype, "sourceSpatialReference", void 0), e([y$1({ constructOnly: true })], l.prototype, "viewSpatialReference", void 0), l = e([c("esri.views.3d.layers.i3s.I3SQueryFeatureStore")], l);
const h = V$1(0, 0, 0, 0), y = i(), d2 = u$3();
export {
  L,
  d$1 as d,
  l,
  o
};
