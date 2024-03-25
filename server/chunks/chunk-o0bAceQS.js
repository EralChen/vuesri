import { aV as e, aX as y$1, eT as d$2, a_ as c, dh as i$1, bZ as S$1, ex as w$1, nw as e$1, fN as W$1, p7 as X$1, dS as g, aB as f$1, dE as B$1, dF as U$1, p8 as a$1, p9 as h$1, dx as m, b3 as z$1, pa as s, nj as D, eF as B$2, bP as C, b9 as w, es as e$2, dr as s$1, aT as s$2, b5 as b, aE as r$1, iw as S, aG as u$1, fB as n$2, fF as o$1, ck as b$1, c8 as u$2, aC as M, aO as s$3, dm as d$3, nB as o$2, dL as Z$1, nk as Q$1, ct as e$3, b6 as u$3, ds as o$3, kt as E, pb as S$2 } from "./chunk-ejFG4zJ0.js";
import { a as t, n as n$1, b as u } from "./chunk-0yX55L32.js";
import { x as x$1 } from "./chunk-KyVc0M84.js";
import { a } from "./chunk-tcpOk1v2.js";
import { $ as $$1 } from "./chunk-P_v7gizd.js";
import { n as n$3 } from "./chunk-stE6bWuO.js";
import { o as o$4 } from "./chunk-Or4hSTj_.js";
const B = "esri.views.3d.layers.i3s.I3SMeshViewFilter", L = () => s$2.getLogger(B);
let P$1 = class P extends S$1 {
  constructor(e2) {
    super(e2), this._projectionEngineLoaded = false;
  }
  initialize() {
    w$1(() => this.viewFilter?.geometry || null != this.layerFilter).then(() => this.loadAsyncModule(import("./chunk-ejFG4zJ0.js").then((n2) => n2.E0).then((e2) => {
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
    const e2 = this.viewFilter?.where;
    if (null == e2 || !e2)
      return null;
    try {
      return x$1.create(e2, this.layerFieldsIndex);
    } catch (t2) {
      L().error(`Failed to parse filter where clause: ${t2}`);
    }
    return null;
  }
  addFilters(e2, t$1, r, i) {
    const s2 = this.sortedObjectIds;
    null != s2 && e2.push((e3) => W$1(s2, true, e3)), this.addSqlFilter(e2, this.parsedWhereClause), this.addTimeFilter(e2, this.viewFilter?.timeExtent);
    const n2 = t(this._layerMaskGeometries), a2 = this._geometryEngine;
    if (null != n2 && null != this.layerFilter && null != a2) {
      const s3 = this.layerFilter.spatialRelationship;
      e2.push((e3, o2) => N(a2, e3, o2, i, t$1, r, n2, s3));
    }
    const l2 = t(this._viewMaskGeometries);
    if (null != l2 && null != this.viewFilter && null != a2) {
      const s3 = this.viewFilter.spatialRelationship;
      e2.push((e3, n3) => N(a2, e3, n3, i, t$1, r, l2, s3));
    }
  }
  isMBSGeometryVisible(e2, t$1, r) {
    const i = t(this._layerMaskGeometries), s2 = this._geometryEngine;
    if (null != i && null != this.layerFilter && null != s2) {
      const n3 = this.layerFilter.spatialRelationship, o2 = i[0].spatialReference || t$1;
      if (!a(e2, r, $, o2))
        return L().warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"), true;
      return q(s2, $, i, o2, n3);
    }
    const n2 = t(this._viewMaskGeometries);
    if (null != n2 && null != this.viewFilter && null != s2) {
      const i2 = this.viewFilter.spatialRelationship, o2 = n2[0].spatialReference || t$1;
      if (!a(e2, r, $, o2))
        return L().warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"), true;
      return q(s2, $, n2, o2, i2);
    }
    return true;
  }
  get parsedGeometry() {
    const e2 = t(this._viewMaskGeometries), t$1 = t(this._layerMaskGeometries);
    return null == e2 || null == t$1 ? e2 || t$1 : t$1.concat(e2);
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
    const { distance: t2, units: r } = this.viewFilter, i = this.viewFilter.spatialRelationship, s2 = "mesh" === e2.type ? e2.extent : e2;
    if (null == t2 || 0 === t2)
      return V(this._geometryEngine, s2, i);
    const n2 = r || X$1(s2.spatialReference);
    if (s2.spatialReference.isWGS84) {
      const e3 = this._geometryEngine.geodesicBuffer(s2, t2, n2);
      return V(this._geometryEngine, e3, i);
    }
    const o2 = g(s2, f$1.WGS84);
    if (null != o2) {
      const e3 = g(this._geometryEngine.geodesicBuffer(o2, t2, n2), s2.spatialReference);
      return V(this._geometryEngine, e3, i);
    }
    if (!this._projectionEngineLoaded && (this.loadAsyncModule(B$1().then(() => this._projectionEngineLoaded = true)), !this._projectionEngineLoaded))
      return null;
    let l2 = null;
    try {
      l2 = U$1(s2, f$1.WGS84);
    } catch (c2) {
    }
    if (l2)
      try {
        l2 = U$1(this._geometryEngine.geodesicBuffer(l2, t2, n2), s2.spatialReference);
      } catch (c2) {
        l2 = null;
      }
    return l2 || L().error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${s2.spatialReference.wkid}) to WGS84.`), V(this._geometryEngine, l2, i);
  }
  get updating() {
    return u(this._layerMaskGeometries) || u(this._viewMaskGeometries);
  }
  static checkSupport(e2) {
    return null != e2 && (!!K(e2.spatialRelationship) || (L().warn(`Filters with spatialRelationship other than ${U.join(", ")} are not supported for mesh scene layers`), false));
  }
};
e([y$1()], P$1.prototype, "layerFilter", void 0), e([y$1({ type: d$2 })], P$1.prototype, "viewFilter", void 0), e([y$1()], P$1.prototype, "layerFieldsIndex", void 0), e([y$1()], P$1.prototype, "loadAsyncModule", void 0), e([y$1()], P$1.prototype, "addSqlFilter", void 0), e([y$1()], P$1.prototype, "addTimeFilter", void 0), e([y$1({ readOnly: true })], P$1.prototype, "sortedObjectIds", null), e([y$1({ readOnly: true })], P$1.prototype, "parsedWhereClause", null), e([y$1({ readOnly: true })], P$1.prototype, "parsedGeometry", null), e([y$1({ readOnly: true })], P$1.prototype, "_layerMaskGeometries", null), e([y$1({ readOnly: true })], P$1.prototype, "_viewMaskGeometries", null), e([y$1()], P$1.prototype, "updating", null), e([y$1()], P$1.prototype, "_projectionEngineLoaded", void 0), e([y$1()], P$1.prototype, "_geometryEngine", void 0), P$1 = e([c(B)], P$1);
const U = /* @__PURE__ */ ((e2) => e2)(["contains", "intersects", "disjoint"]);
function K(e2) {
  return null != e2 && U.includes(e2);
}
var W;
function V(e2, t2, s2) {
  if (null == t2)
    return null;
  if ("disjoint" === s2 && "polygon" === t2.type) {
    const s3 = t2.rings.length, n2 = t2.spatialReference, o2 = new Array(s3);
    for (let e3 = 0; e3 < s3; ++e3) {
      const r = a$1(1 / 0, 1 / 0, -1 / 0, -1 / 0);
      h$1(r, t2.rings[e3]), o2[e3] = { type: "polygon", rings: [t2.rings[e3]], spatialReference: n2, cache: {}, aabr: r };
    }
    o2.sort((e3, t3) => e3.aabr[0] - t3.aabr[0]);
    const a2 = /* @__PURE__ */ new Set(), l2 = new b();
    for (let t3 = 0; t3 < o2.length; ++t3) {
      const i = o2[t3], s4 = i.aabr[0];
      a2.forEach((t4) => {
        if (s4 >= t4.aabr[2])
          return void a2.delete(t4);
        if (i.aabr[1] > t4.aabr[3] || i.aabr[3] < t4.aabr[1] || !e2.intersects(i, t4))
          return;
        i.rings = i.rings.concat(t4.rings), m(i.aabr, t4.aabr, i.aabr), i.cache = {}, a2.delete(t4);
        const n3 = z$1(o2, t4, o2.length, l2);
        o2.splice(n3, 1);
      }), a2.add(i);
    }
    for (const e3 of o2)
      e3.aabr = void 0;
    return o2;
  }
  return [t2];
}
function q(e2, t2, r, i, s$12) {
  if (t2[3] >= 0.5 * (t2[2] + s(i).radius))
    return true;
  const n2 = H(e2, t2, i);
  return r.every((t3) => Z(e2, t3, n2, s$12) !== W.DISCARD);
}
function N(e2, t2, r, i, s2, n2, o2, a$12) {
  const l2 = o2[0].spatialReference || s2.spatialReference;
  if (!a(r.node.serviceMbsInIndexSR, n2, $, l2))
    return void L().warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");
  const c2 = H(e2, $, l2), p2 = z(a$12, s2, l2, i, r.objectHandle);
  for (const u2 of o2) {
    if (0 === t2.length)
      return;
    switch (Z(e2, u2, c2, a$12)) {
      case W.DISCARD:
        return void (t2.length = 0);
      case W.KEEP:
        continue;
    }
    D(t2, r.featureIds, (t3) => X(e2, u2, t3, p2));
  }
}
!function(e2) {
  e2[e2.KEEP = 0] = "KEEP", e2[e2.DISCARD = 1] = "DISCARD", e2[e2.TEST = 2] = "TEST";
}(W || (W = {}));
const $ = B$2(0, 0, 0, 0);
function z(e2, t2, r, i, s2) {
  const n2 = t2.renderSpatialReference, o2 = /* @__PURE__ */ new Map(), a2 = { type: "polygon", rings: [[[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]], spatialReference: r };
  a2.rings[0][3] = a2.rings[0][0];
  const l2 = { indices: null, data: null, stride: 0, startIndex: 0, endIndex: 0 };
  let c2, p2;
  switch (e2) {
    case "intersects":
      c2 = (e3, t3, r2) => e3.intersects(t3, r2) ? W.KEEP : W.TEST, p2 = J;
      break;
    case "contains":
      c2 = (e3, t3, r2) => e3.contains(t3, r2) ? W.TEST : W.DISCARD, p2 = J;
      break;
    default:
      c2 = (e3, t3, r2) => e3.disjoint(t3, r2) ? W.TEST : W.DISCARD, p2 = Q;
  }
  return { collection: i, object: s2, type: e2, maskSR: r, renderSR: n2, aabbCache: o2, triangle: a2, positions: l2, triangleTest: c2, geometryTest: p2 };
}
function H(e2, t2, r) {
  const i = { type: "point", x: t2[0], y: t2[1], hasZ: false, hasM: false, spatialReference: r }, s2 = !C(r) && !w(r), o2 = Number.isNaN(t2[3]) ? 0 : e$2(t2[3], 0, 2 * s$1.radius), a2 = s2 ? e2.buffer(i, o2, 1) : e2.geodesicBuffer(i, o2, 1);
  return a2.type = "polygon", a2;
}
function Z(e2, t2, r, i) {
  switch (i) {
    case "intersects":
    case "contains":
      return J(e2, t2, r);
    case "disjoint":
      return Q(e2, t2, r);
  }
}
function J(e2, t2, r) {
  return e2.intersects(t2, r) ? e2.contains(t2, r) ? W.KEEP : W.TEST : W.DISCARD;
}
function Q(e2, t2, r) {
  return e2.intersects(t2, r) ? e2.contains(t2, r) ? W.DISCARD : W.TEST : W.KEEP;
}
function X(e2, t2, r, i) {
  const { collection: s2, object: n2, renderSR: o2, maskSR: a2, geometryTest: l2, aabbCache: c2 } = i;
  let p2 = c2.get(r);
  if (!p2) {
    const e3 = s2.getObjectTransform(n2);
    s2.getComponentAabb(n2, r, Y);
    const t3 = [r$1(Y[0], Y[1], 0), r$1(Y[0], Y[4], 0), r$1(Y[3], Y[4], 0), r$1(Y[3], Y[1], 0)];
    for (let r2 = 0; r2 < 4; ++r2)
      S(t3[r2], t3[r2], e3.rotationScale), u$1(t3[r2], t3[r2], e3.position), n$2(t3[r2], o2, t3[r2], a2);
    p2 = { type: "polygon", rings: [t3], spatialReference: a2, cache: {} }, p2.rings[0][4] = p2.rings[0][0], c2.set(r, p2);
  }
  switch (l2(e2, t2, p2)) {
    case W.DISCARD:
      return false;
    case W.KEEP:
      return true;
  }
  const { triangle: u2, triangleTest: g2, positions: h2 } = i, j = u2.rings[0][0], S$12 = u2.rings[0][1], R = u2.rings[0][2], E2 = s2.getObjectTransform(n2);
  s2.getComponentPositions(n2, r, h2);
  const { indices: w2, data: v, stride: F, startIndex: _, endIndex: I } = h2;
  for (let y2 = _; y2 < I; y2 += 3) {
    const r2 = F * w2[y2], i2 = F * w2[y2 + 1], s3 = F * w2[y2 + 2];
    switch (o$1(j, v[r2], v[r2 + 1], v[r2 + 2]), o$1(S$12, v[i2], v[i2 + 1], v[i2 + 2]), o$1(R, v[s3], v[s3 + 1], v[s3 + 2]), S(j, j, E2.rotationScale), S(S$12, S$12, E2.rotationScale), S(R, R, E2.rotationScale), u$1(j, j, E2.position), u$1(S$12, S$12, E2.position), u$1(R, R, E2.position), n$2(j, o2, j, a2), n$2(S$12, o2, S$12, a2), n$2(R, o2, R, a2), g2(e2, t2, u2)) {
      case W.DISCARD:
        return false;
      case W.KEEP:
        return true;
    }
  }
  return "intersects" !== i.type;
}
const Y = i$1();
const p = $$1;
let d$1 = class d extends S$1 {
  get spatialReference() {
    return this.layerView.view.spatialReference;
  }
  get layer() {
    return this.layerView.i3slayer;
  }
  get defaultQueryJSON() {
    return new b$1({ outSpatialReference: this.spatialReference }).toJSON();
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
    return { count: t2, extent: M.fromJSON(s2) };
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
    return o2.features.forEach((e3) => e3.geometry = null), o2;
  }
  _ensureQueryJSON(e2) {
    return null == e2 ? this.defaultQueryJSON : e2.toJSON();
  }
  _ensureDataQueryEngine() {
    if (this._dataQueryEngineInstance)
      return this._dataQueryEngineInstance;
    const e2 = this.layer.objectIdField || o$2, r = "esriGeometryPolygon", t2 = this.layer.fieldsIndex?.toJSON() || new Z$1([]), s2 = this.layerView.view.resourceController.scheduler, n2 = this.spatialReference.toJSON(), o2 = this.priority, i = this.spatialIndex;
    return this._dataQueryEngineInstance = new p({ hasZ: true, hasM: false, geometryType: r, fieldsIndex: t2, timeInfo: null, spatialReference: n2, objectIdField: e2, featureStore: i, scheduler: s2, priority: o2 }), this._dataQueryEngineInstance;
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
        o2[s2] = Q$1(n2[s2], r);
    return o2;
  }
  getAttribute(t2, e2) {
    if (e2 === this._objectIdField)
      return t2.id;
    const { meta: r, index: o2 } = t2, n2 = r.attributeInfo?.attributeData;
    return null != n2 ? Q$1(n2[e2], o2) : null;
  }
  getGeometry(t2) {
    if (t2.geometry)
      return t2.geometry;
    const [e2, i, o2, s2, a2] = this._getFeatureExtent(t2, n);
    return new e$3([5], [e2, i, o2, s2, i, o2, s2, a2, o2, e2, a2, o2, e2, i, o2]);
  }
  getCentroid(t2, i) {
    if (t2.geometry)
      return n$3(new e$3(), t2.geometry, i.hasZ, i.hasM);
    const [o2, s2, a2, u2, d3, c2] = this._getFeatureExtent(t2, n);
    return new e$3([0], [(o2 + u2) / 2, (s2 + d3) / 2, (a2 + c2) / 2]);
  }
  cloneWithGeometry(t2, e2) {
    const { id: r, index: i, meta: o2 } = t2;
    return { id: r, index: i, meta: o2, geometry: e2 };
  }
}
const n = i$1();
const f = i$1();
let h = class extends S$1 {
  constructor(e2) {
    super(e2), this.events = new o$3();
  }
  forEach(e2) {
    this.forAllFeatures((r) => (e2(r), o$4.CONTINUE));
  }
  forEachBounds(e2, r) {
    const t2 = this.getFeatureExtent;
    for (const o2 of e2)
      r(t2(o2, f));
  }
  forEachInBounds(e2, r) {
    this.forAllFeatures((t2) => {
      const o2 = this.getFeatureExtent(t2, d2);
      return E(e2, S$2(o2, y)) && r(t2), o$4.CONTINUE;
    }, (r2) => {
      if (a(r2.node.serviceMbsInIndexSR, this.sourceSpatialReference, l, this.viewSpatialReference), l[0] >= e2[0] && l[2] <= e2[2] && l[1] >= e2[1] && l[3] <= e2[3])
        return o$4.CONTINUE;
      const t2 = Math.max(e2[0], Math.min(l[0], e2[2])), o2 = Math.max(e2[1], Math.min(l[1], e2[3])), s2 = l[0] - t2, n2 = l[1] - o2;
      return s2 * s2 + n2 * n2 <= l[3] * l[3] ? o$4.CONTINUE : o$4.SKIP;
    });
  }
};
e([y$1({ constructOnly: true })], h.prototype, "featureAdapter", void 0), e([y$1({ constructOnly: true })], h.prototype, "forAllFeatures", void 0), e([y$1({ constructOnly: true })], h.prototype, "getFeatureExtent", void 0), e([y$1({ constructOnly: true })], h.prototype, "sourceSpatialReference", void 0), e([y$1({ constructOnly: true })], h.prototype, "viewSpatialReference", void 0), h = e([c("esri.views.3d.layers.i3s.I3SQueryFeatureStore")], h);
const l = B$2(0, 0, 0, 0), d2 = i$1(), y = u$3();
export {
  P$1 as P,
  d$1 as d,
  h,
  o
};
