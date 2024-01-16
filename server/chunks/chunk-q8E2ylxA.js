import { xD as F$1, xE as Sn, xF as An, xG as i$6, c4 as d$1, pq as s$2, nJ as s$3, xH as U, nL as U$1, cU as i$7, k7 as t$2, gr as n$3, qU as O$1, cV as C$1, vd as c$2, xI as D$1, hI as S, l6 as u$1, eQ as n$4, d1 as o$2, mk as n$5, bo as e$1, bp as y$1, br as c$3, bs as g$1, bv as w$1, bG as C$2, bJ as d$2, bH as a$2, bD as u$2, l4 as e$2, xJ as h$3, xK as C$3, xL as p$1, ki as e$3, as as l$1, mj as h$4, cP as D$2, bb as s$4, eL as t$3, bS as e$5, h4 as z, eV as I$2, kr as l$3, q2 as v$1, ar as D$3, pw as b$1, ng as t$4, hv as A, hx as O$2, d6 as m, hy as e$6, dY as V, n7 as i$8, fC as l$4, xM as w$2, xN as Ge, uL as U$2, xO as Ke, nh as M, xP as o$3, jY as E$2, aM as s$5, kb as m$1, b1 as s$6, aw as u$3, uY as H, bu as u$4, dU as t$5, bm as h$5, bf as c$4, xQ as Me, n3 as W, n4 as r$1, aq as has, xR as be, xS as Se, bn as P$1, ka as t$6, xT as pe, xU as B, bI as b$2, xV as g$2, v2 as r$2, xW as o$4, mv as o$5, eK as P, mn as te$1, bX as k$1, xX as r$3, xY as t$7, nH as R, xZ as O$3, x_ as Le, x$ as c$5, y0 as T, y1 as J, y2 as c$6, y3 as e$8, w8 as t$8, y4 as r$4, q4 as c$7, wb as I$4, rP as a$5, eB as e$9, nW as r$5, y5 as d$3, eP as o$6, b7 as C$4, xB as u$5, nI as Q, mx as ce, y6 as Y, nK as S$3, k6 as E$4, y7 as X, y8 as qe, dK as i$9, uH as r$6, mo as S$4, y9 as k, ya as xe, e4 as I$5, r8 as n$8, yb as A$1, yc as p$2, yd as v$2, ye as U$3, yf as Re, yg as J$1, bh as V$1, dx as k$2, gq as t$9, hw as r$7, mL as g$3, mJ as e$a } from "./chunk-KFNcxJaF.js";
import { b as a$3, a as a$4, s as s$7, M as M$1, c as e$7, S as S$1, e as ee, D as D$4, d as b$3, F as F$2, f as S$2 } from "./chunk-ZkCkRDhu.js";
import { f as f$1 } from "./chunk-Ju_DQ7D7.js";
import { F as Fe, y as y$2, l as l$2 } from "./chunk-rv0-OtqZ.js";
import { e as e$4, I as I$3, E as E$3, L as L$1, A as A$2 } from "./chunk-CenXEh_9.js";
import { n as n$6, s as s$8 } from "./chunk-YQ5VkQy2.js";
import { n as n$7 } from "./chunk-K_eIouts.js";
function f(f2, p2, E2, c2) {
  if (null == p2 || null == c2)
    return false;
  const l2 = F$1(p2, Sn), C2 = F$1(c2, An);
  if (l2 === C2 && l2 !== i$6.UNKNOWN || d$1(p2, c2))
    return E2[0] = 1, E2[1] = 1, E2[2] = 1, true;
  if (l2 === i$6.SPHERICAL_ECEF) {
    const t2 = s$2(f2), s3 = t2 / Math.sqrt(f2[0] * f2[0] + f2[1] * f2[1]), o3 = t2 / s$3.radius;
    if (C2 === i$6.WEB_MERCATOR)
      return E2[0] = s3 * o3, E2[1] = s3 * o3, E2[2] = 1, true;
    if (C2 === i$6.WGS84 || C2 === i$6.CGCS2000) {
      const r2 = U;
      return E2[0] = r2 * s3 * o3, E2[1] = r2 * o3, E2[2] = 1, true;
    }
  } else if (l2 === i$6.PLATE_CARREE) {
    if (C2 === i$6.WGS84 || C2 === i$6.CGCS2000)
      return E2[0] = U, E2[1] = U, E2[2] = 1, true;
    if (C2 === i$6.WEB_MERCATOR) {
      const r2 = f2[1] / s$3.radius;
      return E2[0] = 1, E2[1] = 1 / Math.cos(r2), E2[2] = 1, true;
    }
  }
  return false;
}
function e(e2, n3 = false) {
  return e2 <= U$1 ? n3 ? new Array(e2).fill(0) : new Array(e2) : new Uint8Array(e2);
}
function c$1(t2, e2, r2) {
  const n3 = t$2(24);
  return (u2) => {
    let c2 = u2.meta.featureExtents;
    if (null == c2) {
      c2 = new Float64Array(6 * u2.meta.featureIds.length), u2.meta.featureExtents = c2;
      for (let t3 = 0; t3 < c2.length; t3 += 6)
        c2[t3] = Number.POSITIVE_INFINITY;
    }
    const p2 = new Float64Array(c2.buffer, 6 * u2.index * Float64Array.BYTES_PER_ELEMENT, 6);
    return p2[0] === Number.POSITIVE_INFINITY && (i$5(u2.index, r2, u2.meta.objectHandle, n3, 0), n$3(n3, e2, 0, n3, t2, 0, 8) ? (O$1(p2, C$1), c$2(p2, n3, 0, 8)) : O$1(p2, D$1)), p2;
  };
}
function i$5(r2, o3, n3, a3, m2) {
  const s3 = o3.getComponentAabb(n3, r2, l), f2 = o3.getObjectTransform(n3);
  for (let u2 = 0; u2 < 8; ++u2)
    I$1[0] = 1 & u2 ? s3[0] : s3[3], I$1[1] = 2 & u2 ? s3[1] : s3[4], I$1[2] = 4 & u2 ? s3[2] : s3[5], S(I$1, I$1, f2.rotationScale), u$1(I$1, I$1, f2.position), a3[m2++] = I$1[0], a3[m2++] = I$1[1], a3[m2++] = I$1[2];
  return a3;
}
const p = 24, l = i$7(), I$1 = n$4();
class r extends o$2 {
  constructor() {
    super(...arguments), this._map = /* @__PURE__ */ new Map();
  }
  clear() {
    if (this._map.size > 0) {
      const e2 = this.toArray();
      this._map.clear(), this.emit("change", { added: [], removed: e2 });
    }
  }
  get length() {
    return this._map.size;
  }
  get(e2) {
    return this._map.get(e2);
  }
  addMany(e2) {
    if (0 === e2.length)
      return;
    const t2 = /* @__PURE__ */ new Set();
    for (let o3 = 0; o3 < e2.length; o3++) {
      const r3 = e2[o3], s3 = r3.objectId, n3 = this._map.get(s3);
      n3 ? (t2.add(s3), r3 !== n3 && (e2[o3] = n3), n3.refCount || (n3.refCount = 0), ++n3.refCount) : (r3.refCount = 1, this._map.set(s3, r3));
    }
    const r2 = t2.size > 0 ? e2.filter((e3) => !t2.has(e3.objectId)) : e2;
    r2.length > 0 && this.emit("change", { added: r2, removed: [] });
  }
  removeMany(e2) {
    const t2 = [];
    for (const r2 of e2) {
      const e3 = r2.objectId, o3 = this._map.get(e3);
      null != o3 && (!o3.refCount || --o3.refCount <= 0) && (this._map.delete(e3), t2.push(r2));
    }
    t2.length > 0 && this.emit("change", { added: [], removed: t2 });
  }
  removeManyByObjectId(e2) {
    const t2 = [];
    for (const r2 of e2) {
      const e3 = this._map.get(r2);
      null != e3 && (!e3.refCount || --e3.refCount <= 0) && (this._map.delete(r2), t2.push(e3));
    }
    t2.length > 0 && this.emit("change", { added: [], removed: t2 });
  }
  toArray() {
    return [...this._map.values()];
  }
  find(e2) {
    let r2;
    return n$5(this._map, (t2) => !!e2(t2) && (r2 = t2, true)), r2;
  }
  forEach(e2) {
    this._map.forEach((t2) => e2(t2));
  }
}
let i$4 = class i extends o$2 {
  constructor(e2) {
    super(), this._limit = e2, this._all = new r(), this._active = new a$1(this), this._pending = /* @__PURE__ */ new Map(), this._handle = this._all.on("change", (e3) => this._handleChanges(e3));
  }
  destroy() {
    this._handle.remove();
  }
  get length() {
    return this._active.length;
  }
  toArray() {
    return this._active.toArray();
  }
  find(e2) {
    return this._active.find(e2);
  }
  forEach(e2) {
    this._active.forEach(e2);
  }
  addMany(e2) {
    this._all.addMany(e2);
  }
  removeManyByObjectId(e2) {
    this._all.removeManyByObjectId(e2);
  }
  _handleChanges(e2) {
    let t2 = e2.removed;
    if (this._pending.size > 0) {
      t2 = new Array();
      for (const s4 of e2.removed)
        this._pending.delete(s4.objectId) || t2.push(s4);
    }
    let s3 = this._limit - this._active.length + t2.length;
    s3 < e2.added.length && (this._active.removeMany(t2), t2 = [], h$2.reset(1 - this._limit / (this._active.length + e2.added.length)), this._active.forEach((e3) => {
      h$2.sample() && (t2.push(e3), this._pending.set(e3.objectId, e3));
    }), s3 = this._limit - this._active.length + t2.length);
    let i5 = e2.added;
    if (s3 < e2.added.length) {
      i5 = new Array(), h$2.reset(s3 / e2.added.length);
      for (const t3 of e2.added)
        h$2.sample() ? i5.push(t3) : this._pending.set(t3.objectId, t3);
    }
    const n3 = s3 - i5.length;
    n3 > 0 && this._pending.size > 0 && (h$2.reset(n3 / this._pending.size), this._pending.forEach((e3) => {
      h$2.sample() && (i5.push(e3), this._pending.delete(e3.objectId));
    })), this._active.addAndRemove(i5, t2);
  }
};
let n$2 = class n {
  constructor() {
    this._percentage = 1, this._last = -1, this._index = 0;
  }
  reset(e2) {
    this._percentage = e2, this._last = -1;
  }
  sample() {
    const e2 = Math.floor(this._index * this._percentage);
    return ++this._index, e2 !== this._last && (this._last = e2, true);
  }
};
const h$2 = new n$2();
let a$1 = class a {
  constructor(e2) {
    this._parent = e2, this._map = /* @__PURE__ */ new Map();
  }
  get length() {
    return this._map.size;
  }
  forEach(e2) {
    this._map.forEach((t2) => e2(t2));
  }
  find(e2) {
    let s3;
    return n$5(this._map, (t2) => !!e2(t2) && (s3 = t2, true)), s3;
  }
  toArray() {
    return [...this._map.values()];
  }
  addAndRemove(e2, t2) {
    for (const s3 of e2)
      this._map.set(s3.objectId, s3);
    for (const s3 of t2)
      this._map.delete(s3.objectId);
    (e2.length > 0 || t2.length > 0) && this._parent.emit("change", { added: e2, removed: t2 });
  }
  removeMany(e2) {
    for (const t2 of e2)
      this._map.delete(t2.objectId);
    e2.length > 0 && this._parent.emit("change", { added: [], removed: e2 });
  }
};
class G {
  constructor(e2, t2) {
    this.meta = e2, this.index = t2;
  }
}
class D {
  constructor(e2, t2) {
    this.graphic = e2, this.geometry = t2, this.components = [], this.overridesDirty = false;
  }
}
let w = class extends g$1 {
  get updating() {
    return this._graphicsCore?.updating ?? false;
  }
  constructor(e2) {
    super(e2), this.loadedGraphics = new i$4(5e4), this.slicePlaneEnabled = false, this._renderingInfo = { symbol: new w$1() }, this._featuresMap = /* @__PURE__ */ new Map();
  }
  initialize() {
    const e2 = this.view.basemapTerrain;
    this._graphicsCore = new Fe({ owner: this, layer: this.layer, preferredUpdatePolicy: C$2.ASYNC, elevationFeatureExpressionEnabled: false, graphicSymbolSupported: false, getRenderingInfoWithoutRenderer: true, hasZ: true, hasM: false, componentFactories: { deconflictor: (e3) => this.view.deconflictor.addGraphicsOwner(e3), labeler: (e3, t2) => this.view.labeler.addGraphicsOwner(e3, t2, { emptySymbolLabelSupported: true, elevationInfoOverride: { mode: "absolute-height", offset: 0 }, disablePlacement: { logEntityDescription: "3D Object Scene Layer features" } }), scaleVisibility: (t2, r2) => new y$2({ graphicsCoreOwner: this, layer: this.layer, queryGraphicUIDsInExtent: r2, graphicsCore: t2, basemapTerrain: e2, layerScaleEnabled: false }) } }), this._graphicsCore.initializePromise.then(() => this._graphicsCore.startCreateGraphics()).catch(() => {
    }), this.addHandles(d$2(() => this.layer.labelingInfo, (e3, t2) => {
      a$2(e3, t2) && this._graphicsCore.updateLabelingInfo();
    }));
  }
  destroy() {
    this._graphicsCore = u$2(this._graphicsCore), this.loadedGraphics = u$2(this.loadedGraphics), this.view = null;
  }
  addNodeMeta(e2, t2) {
    let r2 = 0;
    const s3 = e2.filteredIds, o3 = this.view.spatialReference, i5 = [];
    for (let a3 = 0; a3 < e2.featureIds.length; a3++) {
      const p2 = e2.featureIds[a3];
      let c2 = null == s3;
      if (s3 && r2 < s3.length && p2 === s3[r2] && (c2 = true, r2++), !this._enabledForFeatureInNode(e2, a3))
        continue;
      const h3 = this._featuresMap.get(p2);
      if (h3) {
        h3.components.push(new G(e2, a3)), this._updateLabelPosition(p2);
        continue;
      }
      const l2 = t2(a3, e2), d2 = e$3(0, 0, 0, o3), u2 = { objectId: p2, uid: e$2(), attributes: l2, visible: c2, geometry: d2 }, m2 = new D(u2, d2);
      m2.components.push(new G(e2, a3)), this._featuresMap.set(p2, m2), this._updateLabelGeometry(p2), i5.push(u2);
    }
    this.loadedGraphics.addMany(i5);
  }
  updateLabelPositions(e2) {
    const t2 = this.view.renderCoordsHelper;
    this._forEachGraphic(e2, (r2, s3, o3) => {
      const i5 = this._graphicsCore.getGraphics3DGraphicById(s3.uid);
      null != i5 && this._updateLabelGeometry(e2.featureIds[r2]) && i5.alignWithAbsoluteElevation(o3.z ?? 0, t2, false);
    });
  }
  setNodeMetaAttributes(e2, t2) {
    const r2 = new Array();
    this._forEachGraphic(e2, (o3, i5) => {
      const a3 = t2(o3, e2);
      h$3(i5.attributes, a3) || (i5.attributes = a3, r2.push(i5.uid));
    }), this._graphicsCore.updateLabelingInfo(r2);
  }
  applyFilterChange(e2) {
    this._forEachFeature(e2, (t2, r2, s3) => {
      if (!this._enabledForFeatureInNode(e2, t2)) {
        const s4 = e2.featureIds[t2];
        switch (this._removeFeature(r2, e2, t2)) {
          case F.REMOVED:
            this.loadedGraphics.removeManyByObjectId([s4]);
            break;
          case F.MODIFIED:
            this._updateLabelPosition(s4);
        }
        return;
      }
      const o3 = r2.graphic, i5 = o3.visible;
      i5 !== s3 && (o3.visible = s3, C.graphic = o3, C.property = "visible", C.oldValue = i5, C.newValue = s3, this._graphicsCore.graphicUpdateHandler(C));
    });
  }
  removeNodeMeta(e2) {
    const t2 = [];
    this._forEachGraphic(e2, (r2) => {
      const s3 = e2.featureIds[r2], o3 = this._featuresMap.get(s3);
      if (!o3)
        return;
      switch (this._removeFeature(o3, e2, r2)) {
        case F.MODIFIED:
          this._updateLabelPosition(s3);
          break;
        case F.REMOVED:
          t2.push(s3);
      }
    }), this.loadedGraphics.removeManyByObjectId(t2);
  }
  _removeFeature(e2, t2, s3) {
    const o3 = e2.components.length;
    return C$3(e2.components, (e3) => !(e3.meta === t2 && e3.index === s3)), 0 === e2.components.length ? (this._featuresMap.delete(t2.featureIds[s3]), F.REMOVED) : o3 !== e2.components.length ? F.MODIFIED : F.UNMODIFIED;
  }
  getRenderingInfo() {
    return this._renderingInfo;
  }
  notifyGraphicGeometryChanged() {
  }
  notifyGraphicVisibilityChanged() {
  }
  _updateLabelPosition(e2) {
    const t2 = this._featuresMap.get(e2);
    t2 && this._updateLabelGeometry(e2) && (this.loadedGraphics.removeManyByObjectId([e2]), this.loadedGraphics.addMany([t2.graphic]));
  }
  _updateLabelGeometry(e2) {
    const t2 = this._featuresMap.get(e2);
    if (!t2)
      return false;
    const r2 = t2.geometry, s3 = this.view.spatialReference, i5 = this.view.renderCoordsHelper, a3 = r2.x, n3 = r2.y, p$22 = r2.z ?? 0, c2 = t2.components.length, h3 = t$2(c2 * p);
    let d2 = 0;
    for (const { meta: o3, index: l2 } of t2.components)
      i$5(l2, this.collection, o3.objectHandle, h3, d2), d2 += p;
    return n$3(h3, i5.spatialReference, 0, h3, s3, 0, h3.length / 3), O$1(O, C$1), c$2(O, h3), r2.x = (O[0] + O[3]) / 2, r2.y = (O[1] + O[4]) / 2, r2.z = O[5], !p$1(r2.x, a3) || !p$1(r2.y, n3) || !p$1(r2.z, p$22);
  }
  _forEachGraphic(e2, t2) {
    this._forEachFeature(e2, (r2, { graphic: s3, geometry: o3 }, i5) => {
      this._enabledForFeatureInNode(e2, r2) && t2(r2, s3, o3, i5);
    });
  }
  _forEachFeature(e2, t2) {
    let r2 = 0;
    for (let s3 = 0; s3 < e2.featureIds.length; s3++) {
      const o3 = this._featuresMap.get(e2.featureIds[s3]);
      let i5 = null == e2.filteredIds;
      e2.filteredIds && e2.filteredIds[r2] === e2.featureIds[s3] && (i5 = true, r2++), o3 && t2(s3, o3, i5);
    }
  }
  _enabledForFeatureInNode(e2, t2) {
    return e2.node.index < 0 || !this.overrides?.featureHasGeometryChanges(e2.featureIds[t2]);
  }
  get updatePolicy() {
    return this._graphicsCore.effectiveUpdatePolicy;
  }
  get usedMemory() {
    return this._graphicsCore.usedMemory;
  }
  get unloadedMemoryEstimate() {
    return this._graphicsCore.unprocessedMemoryEstimate;
  }
  get test() {
    return { graphicsCore: this._graphicsCore };
  }
};
e$1([y$1()], w.prototype, "view", void 0), e$1([y$1()], w.prototype, "layer", void 0), e$1([y$1()], w.prototype, "collection", void 0), e$1([y$1()], w.prototype, "loadedGraphics", void 0), e$1([y$1()], w.prototype, "overrides", void 0), e$1([y$1()], w.prototype, "updating", null), e$1([y$1()], w.prototype, "slicePlaneEnabled", void 0), e$1([y$1()], w.prototype, "_graphicsCore", void 0), w = e$1([c$3("esri.views.3d.layers.I3SMeshViewLabeler")], w);
const C = { graphic: null, property: null, oldValue: null, newValue: null };
var F;
!function(e2) {
  e2[e2.UNMODIFIED = 0] = "UNMODIFIED", e2[e2.MODIFIED = 1] = "MODIFIED", e2[e2.REMOVED = 2] = "REMOVED";
}(F || (F = {}));
const O = i$7(), L = w;
let h$1 = class h extends h$4 {
  constructor(s3) {
    super("SceneLayerWorker", "process", { process: (s4) => [s4.geometryBuffer], project: (s4) => [s4.positions.buffer], transformNormals: (s4) => [s4.normals.buffer] }, s3, { hasInitialize: true });
  }
  setModifications(s3, e2, o3, t2) {
    const r2 = { context: s3, modifications: u(e2, o3, t2), isGeodetic: t2.isGeographic };
    this.broadcast(r2, "setModifications");
  }
  setLegacySchema(s3, e2) {
    const o3 = JSON.stringify(e2);
    return this.broadcast({ context: s3, jsonSchema: o3 }, "setLegacySchema");
  }
  destroyContext(s3) {
    return this.broadcast(s3, "destroyContext");
  }
  project(s3, e2) {
    return this.invokeMethod("project", s3, e2);
  }
  transformNormals(s3, e2) {
    return this.invokeMethod("transformNormals", s3, e2);
  }
};
const n$1 = new l$1({ deallocator: null }), i$3 = [0, 0, 0];
function u(e2, o3, h3) {
  n$1.clear();
  let u2 = 1 / 0, a3 = 1 / 0, c2 = -1 / 0, f2 = -1 / 0, l2 = false;
  for (const d2 of o3) {
    const e3 = "clip" === d2.type ? e$4.Inside : "mask" === d2.type ? e$4.Outside : e$4.Replace, o4 = d2.geometry;
    let m3 = (s3) => s3;
    if (o4.spatialReference) {
      if (!D$2(o4.spatialReference, h3)) {
        s$4.getLogger("esri.views.3d.layers.I3SMeshWorkerHandle").warn("Can't project modification polygon into layer spatial reference, ignoring modification");
        continue;
      }
      m3 = (s3) => (t$3(s3, o4.spatialReference, i$3, h3), i$3);
    } else
      o4.hasZ || (i$3[2] = 0, m3 = (s3) => (i$3[0] = s3[0], i$3[1] = s3[1], i$3));
    l2 = l2 || e3 === e$4.Outside, n$1.push(e3), n$1.push(o4.rings.length);
    for (const s3 of o4.rings) {
      n$1.push(s3.length);
      for (const e4 of s3) {
        const s4 = m3(e4);
        n$1.push(s4[0]), n$1.push(s4[1]), n$1.push(s4[2]), u2 = Math.min(u2, s4[0]), a3 = Math.min(a3, s4[1]), c2 = Math.max(c2, s4[0]), f2 = Math.max(f2, s4[1]);
      }
    }
  }
  if (null != e2)
    if (l2) {
      const s3 = 1e-4;
      n$1.push(e$4.Inside), n$1.push(2), n$1.push(4), n$1.push(u2 - s3), n$1.push(a3 - s3), n$1.push(0), n$1.push(c2 + s3), n$1.push(a3 - s3), n$1.push(0), n$1.push(c2 + s3), n$1.push(f2 + s3), n$1.push(0), n$1.push(u2 - s3), n$1.push(f2 + s3), n$1.push(0), n$1.push(4), n$1.push(e2[0]), n$1.push(e2[1]), n$1.push(0), n$1.push(e2[2]), n$1.push(e2[1]), n$1.push(0), n$1.push(e2[2]), n$1.push(e2[3]), n$1.push(0), n$1.push(e2[0]), n$1.push(e2[3]), n$1.push(0);
    } else
      n$1.push(e$4.Outside), n$1.push(1), n$1.push(4), n$1.push(e2[0]), n$1.push(e2[1]), n$1.push(0), n$1.push(e2[2]), n$1.push(e2[1]), n$1.push(0), n$1.push(e2[2]), n$1.push(e2[3]), n$1.push(0), n$1.push(e2[0]), n$1.push(e2[3]), n$1.push(0);
  n$1.push(e$4.Finished);
  const m2 = new Float64Array(n$1.length);
  for (let s3 = 0; s3 < n$1.length; ++s3)
    m2[s3] = n$1.at(s3);
  return m2;
}
var E$1, I;
!function(E2) {
  E2[E2.VISIBLE_ONLY = 0] = "VISIBLE_ONLY", E2[E2.ALL = 1] = "ALL", E2[E2.QUERYABLE = 2] = "QUERYABLE";
}(E$1 || (E$1 = {})), function(E2) {
  E2[E2.EXIT = 0] = "EXIT", E2[E2.CONTINUE = 1] = "CONTINUE", E2[E2.SKIP = 2] = "SKIP";
}(I || (I = {}));
let s$1 = class s {
  constructor() {
    this.ids = /* @__PURE__ */ new Set();
  }
};
class h2 {
  constructor({ collection: t2, forAllFeatures: e2, forAllFeaturesOfNode: i5 }) {
    this._highlights = [], this._collection = t2, this._forAllFeatures = e2, this._forAllFeaturesOfNode = i5;
  }
  destroy() {
    this._highlights.forEach((t2) => this._releaseSet(t2)), this._highlights = null;
  }
  acquireSet() {
    const i5 = new s$1();
    this._highlights.push(i5);
    const h3 = e$5(() => {
      this._highlights && (this._releaseSet(i5), z(this._highlights, i5));
    });
    return { set: i5, handle: h3 };
  }
  setFeatureIds(t2, e2) {
    e2.forEach((e3) => t2.ids.add(e3)), this._initializeSet(t2);
  }
  _initializeSet(t2) {
    this._forAllFeatures((e2, s3, h3) => (t2.ids.has(e2) && this._collection.addComponentHighlight(h3.objectHandle, s3), I.CONTINUE));
  }
  _releaseSet(t2) {
    this._forAllFeatures((e2, s3, h3) => (t2.ids.has(e2) && this._collection.removeComponentHighlight(h3.objectHandle, s3), I.CONTINUE));
  }
  objectCreated(t2) {
    this._highlights.forEach((e2) => {
      this._forAllFeaturesOfNode(t2, (s3, h3) => (e2.ids.has(s3) && this._collection.addComponentHighlight(t2.objectHandle, h3), I.CONTINUE));
    });
  }
  objectDeleted(t2) {
    this._collection.clearHighlights(t2.objectHandle);
  }
}
let i$2 = class i2 extends g$1 {
  constructor(e2, t2, s3) {
    super({}), this._updateExtent = t2, this._updateNode = s3, this.running = false, this._extentSet = new l$2(), this._nodeSet = /* @__PURE__ */ new Set(), this.addHandles(e2.registerTask(I$2.ELEVATION_ALIGNMENT, this));
  }
  normalizeCtorArgs() {
    return {};
  }
  addExtent(e2) {
    this._extentSet.add(e2), this.running = true;
  }
  schedule(e2) {
    this._nodeSet.add(e2), this.running = true;
  }
  remove(e2) {
    this._nodeSet.delete(e2), this._updateRunning();
  }
  runTask(e2) {
    const t2 = this._extentSet;
    for (e2.run(() => t2.merge(e2)); !t2.empty && !e2.done; ) {
      const s4 = this._updateExtent(t2.pop());
      null != s4 && s4.forAll((e3) => this.schedule(e3)), e2.madeProgress();
    }
    if (e2.done)
      return;
    const s3 = this._nodeSet;
    for (const r2 of s3)
      if (s3.delete(r2), this._updateNode(r2), e2.madeProgress(), e2.done)
        break;
    this._updateRunning();
  }
  _updateRunning() {
    this.running = this._nodeSet.size > 0 || this._extentSet.size > 0;
  }
};
e$1([y$1()], i$2.prototype, "running", void 0), i$2 = e$1([c$3("esri.views.3d.layers.i3s.I3SAsyncElevationUpdater.ts")], i$2);
let o$1 = class o {
  constructor() {
    this.lodCrossfadeSignedDuration = 0;
  }
};
let i$1 = class i3 {
  constructor(e2) {
    this._view = e2, this._preRenderFrameTaskHandle = null, this._currentFrameStartTime = null, this._numFadingNodes = 0;
  }
  destroy() {
    this._preRenderFrameTaskHandle?.remove(), this._preRenderFrameTaskHandle = null, this._view = null;
  }
  get updating() {
    return this._numFadingNodes > 0;
  }
  stopNodeFading(s3) {
    null != s3.lodCrossfadeProgress && (this._numFadingNodes--, s3.lodCrossfadeProgress = null, 0 === this._numFadingNodes && (null != this._preRenderFrameTaskHandle && (this._preRenderFrameTaskHandle = l$3(this._preRenderFrameTaskHandle)), this._view.notifyLODUpdate(), this._view.notifyUpdate()));
  }
  _startNodeFading(e2, d2, o3) {
    0 === this._numFadingNodes && (this._preRenderFrameTaskHandle = v$1({ preRender: (e3) => this._updateAllNodeFading(e3) }), this._view.notifyLODUpdate()), null == e2.lodCrossfadeProgress && (this._numFadingNodes++, this._view.notifyUpdate()), e2.lodCrossfadeSignedDuration = o3, e2.lodCrossfadeProgress = d2;
  }
  _updateAllNodeFading(e2) {
    const s3 = this._view.nodeCrossfadingEnabled;
    this._view.foreachCrossfadeNode((d2, o3) => {
      if (null != o3?.lodCrossfadeProgress) {
        const i5 = o3.lodCrossfadeSignedDuration, t2 = i5 > 0 ? this._view.fullOpacity : 0, r2 = e2.deltaTime / i5, a3 = o3.lodCrossfadeProgress + Math.abs(r2), n3 = !s3 || a3 >= 1 || 0 === i5, l2 = t2 - (n3 ? 0 : i5 > 0 ? 1 : -1) * (1 - a3);
        n3 ? (this.stopNodeFading(o3), i5 < 0 && this._view.markNodeToRemove(d2)) : o3.lodCrossfadeProgress = a3, this._view.setNodeOpacityByIndex(d2, l2);
      }
    }), this._view.removeMarkedNodes();
  }
  stopAllNodeFading() {
    this._view.foreachCrossfadeNode((e2, s3) => {
      if (null != s3?.lodCrossfadeProgress) {
        this.stopNodeFading(s3);
        const d2 = s3.lodCrossfadeSignedDuration;
        d2 < 0 && this._view.markNodeToRemove(e2);
        const o3 = d2 > 0 ? this._view.fullOpacity : 0;
        this._view.setNodeOpacityByIndex(e2, o3);
      }
    }), this._view.removeMarkedNodes();
  }
  fadeNode(e2, s3, o3, i5) {
    null == this._currentFrameStartTime && (this._currentFrameStartTime = Date.now());
    const r2 = this._view, a3 = r2.nodeCrossfadingEnabled, n3 = o3 === a$3.FadeIn ? r2.fullOpacity : 0, l2 = a3 ? i5 ? o3 === a$3.FadeIn ? r2.lodCrossfadeinDuration : r2.lodCrossfadeoutDuration : r2.lodCrossfadeUncoveredDuration : 0, h3 = this._view.getNodeOpacityByIndex(e2);
    if (a3 && h3 !== n3 && l2 > 0) {
      const e3 = 1 - Math.abs(n3 - h3);
      this._startNodeFading(s3, e3, t$1(o3) * l2);
    } else
      this.stopNodeFading(s3), this._view.setNodeOpacityByIndex(e2, n3), o3 === a$3.FadeOut && this._view.removeNode(e2);
  }
  isNodeFullyFadedIn(e2) {
    const s3 = this._view.getNodeCrossfadeMetaData(e2);
    return null == s3 || null == s3.lodCrossfadeProgress && this._view.getNodeOpacityByIndex(e2) === this._view.fullOpacity;
  }
};
function t$1(e2) {
  return e2 === a$3.FadeIn ? 1 : -1;
}
const v = D$3(), g = e$6(), x = V(0, 0, 0, 0), y = n$4(), j = n$4(), E = n$4();
let _ = class extends o$2.EventedMixin(g$1) {
  get spatialReference() {
    return this.view?.elevationProvider?.spatialReference;
  }
  constructor(e2) {
    super(e2), this._tmpEvent = { spatialReference: null, extent: v, context: "scene" };
  }
  initialize() {
    this.view = this.layerView.view, this._renderCoordsHelper = this.view.renderCoordsHelper, this._intersector = b$1(this.view.state.viewingMode), this._intersector.options.store = t$4.MIN, this._tmpEvent.context = this.intersectionHandler.isGround ? "ground" : "scene";
  }
  getElevation(e2, t2, r2, n3) {
    const s3 = y;
    s3[0] = e2, s3[1] = t2, s3[2] = r2;
    const o3 = this._renderCoordsHelper;
    if (!o3.toRenderCoords(s3, n3, s3))
      return s$4.getLogger(this).error("could not project point to compute elevation"), null;
    const { layerView: a3, _intersector: l2, intersectionHandler: c2 } = this, p2 = a3.i3slayer.fullExtent, m2 = null != p2 && Number.isFinite(p2.xmin) && Number.isFinite(p2.xmax) && Number.isFinite(p2.ymin) && Number.isFinite(p2.ymax) && Number.isFinite(p2.zmin) && Number.isFinite(p2.zmax) ? { min: p2.zmin, max: p2.zmax } : a3.elevationRange;
    if (null == m2)
      return null;
    const u2 = a3.elevationOffset, h3 = m2.min + u2, f2 = m2.max + u2, d2 = j, v2 = E;
    return o3.setAltitude(d2, f2, s3), o3.setAltitude(v2, h3, s3), l2.reset(d2, v2, null), c2.intersect(l2, null, d2, v2), l2.results.min.getIntersectionPoint(s3) ? o3.getAltitude(s3) : null;
  }
  getSphereElevationBounds(e2, t2) {
    return a$4(e2, t2, x, this._renderCoordsHelper.spatialReference), this.layerView.getElevationRange(x);
  }
  getRootElevationBounds() {
    const e2 = this.layerView.i3slayer.fullExtent;
    return e2?.hasZ ? { min: e2.zmin, max: e2.zmax } : null;
  }
  layerChanged() {
    this.spatialReference && (this._tmpEvent.extent = this._computeLayerExtent(), this._tmpEvent.spatialReference = this.spatialReference, this.emit("elevation-change", this._tmpEvent));
  }
  objectChanged(e2) {
    this.spatialReference && (this._tmpEvent.extent = this._computeObjectExtent(e2), this._tmpEvent.spatialReference = this.spatialReference, this.emit("elevation-change", this._tmpEvent));
  }
  _computeObjectExtent(e2) {
    return D$3(v), this._expandExtent(e2, v), v;
  }
  _computeLayerExtent() {
    D$3(v);
    for (const e2 of this.layerView.getVisibleNodes())
      this._expandExtent(e2, v);
    return v;
  }
  _expandExtent(e2, t2) {
    const r2 = this.spatialReference;
    if (null == r2)
      return;
    const i5 = this.layerView.getNodeComponentObb(e2);
    if (null != i5) {
      A(g, i5.quaternion), g[12] = i5.center[0], g[13] = i5.center[1], g[14] = i5.center[2];
      for (let e3 = 0; e3 < 8; ++e3)
        y[0] = 1 & e3 ? i5.halfSize[0] : -i5.halfSize[0], y[1] = 2 & e3 ? i5.halfSize[1] : -i5.halfSize[1], y[2] = 4 & e3 ? i5.halfSize[2] : -i5.halfSize[2], O$2(y, y, g), this._renderCoordsHelper.fromRenderCoords(y, y, r2), m(t2, y, t2);
    }
  }
};
e$1([y$1({ constructOnly: true })], _.prototype, "layerView", void 0), e$1([y$1({ constructOnly: true })], _.prototype, "intersectionHandler", void 0), e$1([y$1()], _.prototype, "view", void 0), e$1([y$1()], _.prototype, "spatialReference", null), _ = e$1([c$3("esri.views.3d.layers.i3s.I3SElevationProvider")], _);
const b = _;
class d {
  constructor(e2) {
    this.type = i$8.I3S, this._needVerticalOffset = false, this.layerUid = e2.layerUid, this.sublayerUid = e2.sublayerUid, this._collection = e2.collection, this._traverseNodeHierarchy = e2.traverseNodeHierarchy, this.slicePlaneEnabled = e2.slicePlaneEnabled, this.isGround = e2.isGround;
  }
  updateElevationAlignState(t2, r2) {
    this._needVerticalOffset = t2 && r2 === l$4.Global;
  }
  intersect(e2, l2, d2, u2) {
    const f2 = e2.results, b2 = e2.options.store === t$4.ALL, m2 = e2.ray.direction, h3 = e2.tolerance;
    let p2 = (e3) => e3, y2 = (e3) => e3;
    const g2 = w$2(null != e2.verticalOffset ? e2.verticalOffset : this._needVerticalOffset ? 0 : null);
    null != e2.verticalOffset && null != g2 && (p2 = (e3) => g2.applyToMbs(e3), y2 = (e3) => g2.applyToObb(e3)), this._traverseNodeHierarchy((o3, c2) => {
      if (0 === o3.childrenLoaded)
        return false;
      const O2 = null != o3.serviceObbInRenderSR && Ge(o3.serviceObbInRenderSR) ? o3.serviceObbInRenderSR : null;
      return !(null != O2 && !U$2(y2(O2), d2, m2, h3)) && (!c2 || null == O2 && Ke(o3.renderMbs) && !a2(p2(o3.renderMbs), d2, m2, h3) || null != o3.geometryObb && !U$2(y2(o3.geometryObb), d2, m2, h3) || this._collection.intersect(c2, d2, u2, h3, g2, (t2, r2, s3, c3) => {
        if (r2 >= 0) {
          if (null != l2 && !l2(d2, u2, r2))
            return;
          const a3 = (e3) => {
            const n3 = new o$3(this.layerUid, this.sublayerUid, o3.index, t2, c3);
            e3.set(this.type, n3, r2, s3);
          };
          if (this.isGround && (null == f2.ground.dist || r2 < f2.ground.dist) && a3(f2.ground), e2.options.isFiltered)
            return;
          if ((null == f2.min.dist || r2 < f2.min.dist) && a3(f2.min), (null == f2.max.dist || r2 > f2.max.dist) && a3(f2.max), b2) {
            const t3 = M(e2.ray);
            a3(t3), e2.results.all.push(t3);
          }
        }
      }), true);
    });
  }
}
function a2(e2, t2, r2, i5 = 0) {
  const s3 = e2[3] + i5, n3 = t2[0] - e2[0], l2 = t2[1] - e2[1], o3 = t2[2] - e2[2], c2 = r2[0], d2 = r2[1], a3 = r2[2], u2 = c2 * n3 + d2 * l2 + a3 * o3;
  return u2 * u2 - (c2 * c2 + d2 * d2 + a3 * a3) * (n3 * n3 + l2 * l2 + o3 * o3 - s3 * s3) >= 0;
}
const o2 = 14;
class i4 {
  constructor(t2, s3, r2 = o2) {
    this._version = r2, this._db = null, this._quotaReductionPromise = null, this._gcCounter = 0, this._hit = 0, this._miss = 0, this._destroyed = false, this.gcFrequency = 50, this.maxByteSize = E$2.GIGABYTES, this.quotaReductionFactor = 0.2, this._dbName = t2, this._storeName = s3;
  }
  init() {
    return Promise.resolve().then(() => {
      const e2 = indexedDB.open(this._dbName, this._version);
      return e2.onupgradeneeded = (t2) => {
        const s3 = e2.result, r2 = e2.transaction, o3 = s3.objectStoreNames.contains(this._storeName) ? r2.objectStore(this._storeName) : s3.createObjectStore(this._storeName), i5 = s3.objectStoreNames.contains("last_access") ? r2.objectStore("last_access") : s3.createObjectStore("last_access");
        i5.indexNames.contains("date") || i5.createIndex("date", "date", { unique: false }), i5.indexNames.contains("byteSize") || i5.createIndex("byteSize", "byteSize", { unique: false }), t2.oldVersion < this._version && (o3.clear(), i5.clear());
      }, c(e2);
    }).then((e2) => {
      this._destroyed ? e2.close() : this._db = e2;
    });
  }
  destroy() {
    this._db && (this._db.close(), this._db = null), this._destroyed = true;
  }
  get initialized() {
    return null != this._db;
  }
  getHitRate() {
    return this._hit / (this._hit + this._miss);
  }
  put(e2, s3) {
    if (null == this._db)
      return Promise.reject(new s$5("indexedb:not-initialized", "IndexedDB Cache is not initialized"));
    return (null != this._quotaReductionPromise ? this._quotaReductionPromise : Promise.resolve()).then(() => this._put(e2, s3)).catch((t2) => {
      if (t2 && "QuotaExceededError" === t2.name)
        return null == this._quotaReductionPromise && (this._quotaReductionPromise = this._getCacheSize().then((e3) => this._removeLeastRecentlyAccessed(s3.byteSize + Math.ceil(e3 * this.quotaReductionFactor))), this._quotaReductionPromise.then(() => this._quotaReductionPromise = null, () => this._quotaReductionPromise = null)), this._quotaReductionPromise.then(() => this._put(e2, s3));
      throw t2;
    }).then(() => {
      this._gcCounter--, this._gcCounter < 0 && null != this._db && (this._gcCounter = this.gcFrequency, this._getCacheSize().then((e3) => this._removeLeastRecentlyAccessed(e3 - this.maxByteSize)));
    });
  }
  get(e2, t2) {
    const o3 = this._db;
    if (null == o3)
      return Promise.resolve(void 0);
    let i5 = null;
    return Promise.resolve().then(() => {
      const r2 = o3.transaction(this._storeName, "readonly");
      i5 = m$1(t2, () => {
        r2.abort();
      });
      return c(r2.objectStore(this._storeName).get(e2));
    }).then((t3) => {
      if (null == t3)
        ++this._miss;
      else if (this._db) {
        ++this._hit;
        this._db.transaction("last_access", "readwrite").objectStore("last_access").put({ date: Date.now(), byteSize: t3.byteSize }, e2);
      }
      return null != i5 && i5.remove(), t3;
    }).catch(() => {
      ++this._miss, s$6(t2), null != i5 && i5.remove();
    });
  }
  remove(e2) {
    const t2 = this._db;
    return null == t2 ? Promise.resolve() : Promise.resolve().then(async () => {
      const s3 = t2.transaction([this._storeName, "last_access"], "readwrite"), r2 = s3.objectStore(this._storeName), o3 = s3.objectStore("last_access"), i5 = r2.delete(e2), a3 = o3.delete(e2);
      await Promise.all([c(i5), c(a3), n2(s3)]);
    });
  }
  _put(e2, t2) {
    const s3 = this._db;
    if (null == s3)
      return Promise.resolve();
    const r2 = s3.transaction([this._storeName, "last_access"], "readwrite"), o3 = r2.objectStore(this._storeName), i5 = r2.objectStore("last_access"), a3 = o3.put(t2, e2), l2 = i5.put({ date: Date.now(), byteSize: t2.byteSize }, e2);
    return Promise.all([c(a3), c(l2), n2(r2)]);
  }
  _removeLeastRecentlyAccessed(e2) {
    if (e2 <= 0 || !this._db)
      return Promise.resolve();
    const t2 = this._db.transaction([this._storeName, "last_access"], "readwrite"), s3 = t2.objectStore(this._storeName), r2 = t2.objectStore("last_access");
    let o3 = 0;
    const i5 = r2.index("date").openCursor(null, "next");
    return i5.onsuccess = () => {
      const t3 = i5.result;
      null != t3 && (null != t3.value.byteSize && (o3 += t3.value.byteSize), s3.delete(t3.primaryKey), r2.delete(t3.primaryKey), o3 < e2 && t3.continue());
    }, n2(t2);
  }
  _getCacheSize() {
    const e2 = this._db;
    if (null == e2)
      return Promise.resolve(0);
    const t2 = e2.transaction("last_access"), s3 = t2.objectStore("last_access");
    let r2 = 0;
    const o3 = s3.index("byteSize").openKeyCursor();
    return o3.onsuccess = () => {
      const e3 = o3.result;
      if (!e3)
        return;
      const t3 = e3.key;
      null != t3 && (r2 += t3), e3.continue();
    }, n2(t2).then(() => r2);
  }
}
function n2(e2) {
  return new Promise((t2, s3) => {
    e2.oncomplete = () => t2(), e2.onerror = () => s3(e2.error), e2.onabort = () => s3(e2.error);
  });
}
function c(e2) {
  return new Promise((t2, s3) => {
    "done" === e2.readyState ? null != e2.error ? s3(e2.error) : t2(e2.result) : (e2.onsuccess = () => t2(e2.result), e2.onerror = () => s3(e2.error));
  });
}
const t = /* @__PURE__ */ new WeakMap();
class s2 {
  constructor(s3, e2) {
    switch (this._miss = 0, this._hit = 0, this.initialized = true, e2) {
      case "layer":
        this._data = /* @__PURE__ */ new Map();
        break;
      case "view": {
        const e3 = t.get(s3);
        if (e3) {
          this._data = e3;
          break;
        }
        const i5 = /* @__PURE__ */ new Map();
        this._data = i5, t.set(s3, i5);
      }
    }
  }
  init() {
    return Promise.resolve();
  }
  async get(t2, s3) {
    if (this._data.has(t2))
      return this._hit++, this._data.get(t2) ?? void 0;
    this._miss++;
  }
  destroy() {
  }
  put(t2, s3) {
    return this._data.set(t2, s3), Promise.resolve();
  }
  remove(t2) {
    return this._data.delete(t2), Promise.resolve();
  }
  getHitRate() {
    return this._hit / (this._hit + this._miss);
  }
}
const yt = "esri.views.3d.layers.I3SMeshView3D", vt = s$4.getLogger(yt), It = [1, 1, 1, 1];
class Mt extends o$1 {
  constructor(e2, t2, i5, s3, r2, o3, a3, n3, l2) {
    super(), this.node = e2, this.featureIds = t2, this.objectHandle = i5, this.cachedRendererVersion = s3, this.attributeInfo = r2, this.material = o3, this.textures = a3, this.anchorIds = n3, this.anchors = l2, this.cachedElevationAnchors = null, this.cachedEdgeMaterials = new Array(), this.edgeMemoryUsage = 0;
  }
}
var Ct;
!function(e2) {
  e2[e2.CastShadows = 4] = "CastShadows", e2[e2.Pickable = 5] = "Pickable";
}(Ct || (Ct = {}));
const Ot = 23, xt = 100 * E$2.MEGABYTES, Et = (t2) => {
  let o3 = class extends t2 {
    constructor(...e2) {
      super(e2), this._updatingHandles = new h$5(), this._nodeId2Meta = /* @__PURE__ */ new Map(), this._nodeId2MetaReloading = /* @__PURE__ */ new Map(), this._i3sWasmLoaded = false, this._snappingSourcesTrackers = [], this._hasLoadedPBRTextures = false, this._asyncModuleLoading = 0, this._addTasks = /* @__PURE__ */ new Map(), this._currentRenderer = null, this._rendererVersion = 0, this._colorVariable = null, this._opacityVariable = null, this._rendererFields = null, this._symbologyFields = null, this._symbologyOverride = null, this._symbologyOverrideFields = null, this._symbolInfos = /* @__PURE__ */ new Map(), this._visibleGeometryChangedSchedulerHandle = null, this._hasComponentData = false, this._hasVertexColors = false, this._nodeColorOverride = null, this.updating = true, this.holeFilling = "auto", this._hasColors = false, this._hasTextures = false, this._hasData = false, this.slicePlaneEnabled = false, this._modifications = new Array(), this.ignoresMemoryFactor = false, this._layerUrl = "", this._cacheKeySuffix = null, this._elevationTask = null, this._filters = [], this._arcade = null, this._tmpAttributeOnlyGraphic = new c$4(null, null, {}), this._crossfadeHelper = new i$1(this);
    }
    get lodCrossfadeoutDuration() {
      return 0;
    }
    get lodCrossfadeinDuration() {
      return 0;
    }
    get lodCrossfadeUncoveredDuration() {
      return 0;
    }
    get layerUid() {
      return this.i3slayer && this.i3slayer.uid;
    }
    get sublayerUid() {
      return null;
    }
    get layerId() {
      return this.i3slayer && this.i3slayer.id;
    }
    get sublayerId() {
      return null;
    }
    get contentVisible() {
      return !this.suspended && this._controller?.rootNodeVisible;
    }
    get legendEnabled() {
      return this.contentVisible && true === this.i3slayer?.legendEnabled;
    }
    get updatingProgressValue() {
      return this._controller?.updatingProgress ?? 0;
    }
    get hasTexturesOrVertexColors() {
      return this._hasData ? this._hasTextures || this._hasColors ? "yes" : "probably-not" : "unknown";
    }
    get rendererTextureUsage() {
      return Me(this._currentRenderer) ? this._usePBR || this._hasLoadedPBRTextures ? s$7.AllTexturesPBR : s$7.AllTextures : this._usePBR || this._hasLoadedPBRTextures ? s$7.GeometryTexturesPBR : s$7.GeometryTextures;
    }
    get elevationOffset() {
      const e2 = null != this.i3slayer ? this.i3slayer.elevationInfo : null;
      if (null != e2 && "absolute-height" === e2.mode) {
        const t3 = W(this.i3slayer.spatialReference), i5 = r$1(e2.unit);
        return (e2.offset ?? 0) * i5 / t3;
      }
      return 0;
    }
    get elevationInfo() {
      const e2 = null != this.i3slayer ? this.i3slayer.elevationInfo : null;
      if (null == e2)
        return { mode: Bt.Absolute, offset: 0 };
      const t3 = W(this.i3slayer.spatialReference), i5 = r$1(e2.unit), s3 = (e2.offset ?? 0) * i5 / t3;
      switch (e2.mode) {
        case "absolute-height":
          return { mode: Bt.Absolute, offset: s3 };
        case "relative-to-ground":
          return { mode: Bt.RelativeToGround, offset: s3 };
        case "on-the-ground":
          return { mode: Bt.OnTheGround, offset: 0 };
        default:
          return { mode: Bt.Absolute, offset: 0 };
      }
    }
    get supportedTextureEncodings() {
      return M$1(this.view._stage.renderView.capabilities);
    }
    get uncompressedTextureDownsamplingEnabled() {
      const e2 = this.view?.qualitySettings.sceneService.uncompressedTextureDownsamplingEnabled, t3 = 0 == (this.supportedTextureEncodings & e$7.DDS_S3TC);
      return e2 && t3;
    }
    get clientGeometry() {
      return this.i3sOverrides.geometryOverrides;
    }
    get elevationRange() {
      const e2 = this._nodeId2Meta;
      let t3 = 1 / 0, i5 = -1 / 0;
      for (const s3 of e2.values()) {
        if (null == s3)
          continue;
        const { node: { mbs: e3 } } = s3, [, r2, o4] = e3;
        t3 = Math.min(t3, r2 - o4), i5 = Math.max(i5, r2 + o4);
      }
      return Number.isFinite(t3) && Number.isFinite(i5) ? { min: t3, max: i5 } : null;
    }
    initialize() {
      const e2 = has("enable-feature:idb-mock-cache");
      this._idbCache = e2 ? new s2(this.view, e2) : new i4("esri-scenelayer-cache", "geometries"), this._preLoadBasis(), this.addResolvingPromise(this.i3slayer.indexInfo);
      const t3 = this.view.resourceController, i$12 = t3.memoryController;
      this.i3sOverrides = new S$1({ view: this.view, layer: this.i3slayer, memoryController: i$12 }), this._worker = new h$1(Wt(t3)), this.addResolvingPromise(this._worker.promise);
      const s$12 = this.i3slayer.store;
      this._worker.setLegacySchema(this.uid, s$12.defaultGeometrySchema), be(this.i3slayer), Se(this.i3slayer, this.view), this._layerUrl = this.i3slayer.parsedUrl.path, this._controller = new ee({ layerView: this, worker: this._worker }), this._gpuMemoryEstimate = 0, this._texMemoryEstimate = 0, this._geoMemoryEstimate = 0, this._stage = this.view._stage, this._collection = this._stage.renderView.componentObjectCollection, this.resetHighlights();
      const r2 = s$12.defaultGeometrySchema;
      if (this._isIntegratedMesh || !r2)
        this._hasComponentData = false;
      else {
        const e3 = r2.featureAttributes;
        this._hasComponentData = !!(e3 && e3.faceRange && e3.id);
      }
      this._hasVertexColors = null != (r2?.vertexAttributes.color ?? null) && !this.i3slayer.cachedDrawingInfo?.color, this._isIntegratedMesh || (this._edgeView = this._stage.renderer.ensureEdgeView());
      const o4 = this.view.resourceController.memoryController.newCache(`sl-${this.uid}`, (e3) => this._deleteComponentObject(e3));
      this._memCache = o4;
      const a3 = (e3) => null != this._controller.index?.rootNode ? this._controller.index.traverse(this._controller.index.rootNode, (t4) => {
        const i5 = t4.index, s3 = this._nodeId2Meta.get(i5) || this._nodeId2MetaReloading.get(i5);
        return e3(t4, null != s3 ? s3.objectHandle : null);
      }) : () => {
      };
      this._intersectionHandler = new d({ layerUid: this.layerUid, sublayerUid: this.sublayerUid, collection: this._collection, slicePlaneEnabled: this.slicePlaneEnabled, isGround: this._isIntegratedMesh, traverseNodeHierarchy: a3 }), this._updatingHandles.add(() => this.layerUid, (e3) => this._intersectionHandler.layerUid = e3), this._updatingHandles.add(() => this.sublayerUid, (e3) => this._intersectionHandler.sublayerUid = e3), this._elevationProvider = new b({ layerView: this, intersectionHandler: this._intersectionHandler }), this._hasLoadedPBRTextures = this._usePBR, this._updatingHandles.add(() => this.view.clippingArea, () => this._clippingAreaChanged(), P$1), this._updatingHandles.add(() => this.fullOpacity, (e3) => this._opacityChange(e3)), this._updatingHandles.add(() => this.slicePlaneEnabled, (e3) => this._slicePlaneEnabledChange(e3)), this._updatingHandles.add(() => this.elevationOffset, (e3, t4) => {
        this._reloadAll(t4), this._controller.invalidateVisibilityObbs();
      }), this._updatingHandles.add(() => this.elevationInfo, (e3, t4) => this._elevationInfoChanged(e3, t4), P$1), this._updatingHandles.add(() => !this.suspended && this.elevationInfo.mode !== Bt.Absolute, (e3, t4) => {
        e3 ? this.addHandles(this.view.basemapTerrain.on("elevation-change", ({ extent: e4 }) => this._ensureElevationTask().addExtent(e4)), Kt) : t4 && this.removeHandles(Kt);
      }, P$1), this._updatingHandles.add(() => this._usePBR, (e3) => this._updatePBR(e3));
      const n3 = () => {
        this._reloadAll(), this.clearMemCache();
      };
      this._updatingHandles.add(() => this.rendererTextureUsage, n3), this._updatingHandles.add(() => this.uncompressedTextureDownsamplingEnabled, n3), this._updatingHandles.add(() => this.contentVisible, (e3) => this._contentVisibleChanged(e3), P$1), this._updatingHandles.add(() => this.i3slayer.labelsVisible, () => this._labelingChanged(), P$1), this._updatingHandles.add(() => this.i3slayer.labelingInfo, () => this._labelingChanged(), P$1), this._updatingHandles.add(() => this._modifications, () => this._modificationsChanged(), P$1), this.addHandles([d$2(() => t$6.I3S_TREE_SHOW_TILES, (e3) => {
        if (e3 && !this._treeDebugger) {
          const e4 = this._controller.crsIndex;
          import("./chunk-t3Hv6pgd.js").then(({ I3STreeDebugger: t4 }) => {
            !this._treeDebugger && t$6.I3S_TREE_SHOW_TILES && (this._treeDebugger = new t4({ lv: this, view: this.view, nodeSR: e4 }));
          });
        } else
          e3 || t$6.I3S_TREE_SHOW_TILES || (this._treeDebugger = u$2(this._treeDebugger));
      }, P$1), d$2(() => t$6.I3S_SHOW_MODIFICATIONS, () => this._showModifications(), P$1)]), this._cacheKeySuffix = pe(this.i3slayer.spatialReference, this.view.renderSpatialReference), this._idbCache.init().catch((e3) => vt.warn(`Failed to initialize IndexedDB cache: ${e3}`));
    }
    destroy() {
      this._clearAddTasks(), this._elevationTask = u$2(this._elevationTask), this.i3sOverrides = u$2(this.i3sOverrides), this._elevationProvider && (this._elevationProvider.layerChanged(), this.view.elevationProvider.unregister(this._elevationProvider), this._elevationProvider = null), this._intersectionHandler && (this._stage.view.sceneIntersectionHelper.removeIntersectionHandler(this._intersectionHandler), this._intersectionHandler = null);
      const e2 = this._worker;
      e2 && (e2.destroyContext(this.uid).then(() => e2.destroy()), this._worker = null), this._removeAllNodeDataFromStage(), this._memCache = u$2(this._memCache), this._collection = null, this._stage = null, this._edgeView = null, this._labeler = u$2(this._labeler), this._treeDebugger = u$2(this._treeDebugger), this._controller = u$2(this._controller), this._highlights.destroy(), this._nodeId2Meta.clear(), this._nodeId2MetaReloading.clear(), this._crossfadeHelper = u$2(this._crossfadeHelper), this.emit("visible-geometry-changed"), this._visibleGeometryChangedSchedulerHandle && (this._visibleGeometryChangedSchedulerHandle.remove(), this._visibleGeometryChangedSchedulerHandle = null), this._updatingHandles = u$2(this._updatingHandles);
    }
    _memEstimateTextureAdded(e2) {
      const t3 = e2.memoryEstimate;
      return this._gpuMemoryEstimate += t3, this._texMemoryEstimate += t3, t3;
    }
    _memEstimateTextureRemoved(e2) {
      if (null != e2) {
        const t3 = e2.memoryEstimate;
        this._gpuMemoryEstimate -= t3, this._texMemoryEstimate -= t3;
      }
    }
    _memEstimateGeometryAdded(e2) {
      const t3 = this._collection.getObjectGPUMemoryUsage(e2);
      return this._gpuMemoryEstimate += t3, this._geoMemoryEstimate += t3, t3;
    }
    _memEstimateGeometryRemoved(e2) {
      const t3 = this._collection.getObjectGPUMemoryUsage(e2);
      this._gpuMemoryEstimate -= t3, this._geoMemoryEstimate -= t3;
    }
    isNodeLoaded(e2) {
      return this._nodeId2Meta.has(e2);
    }
    isNodeReloading(e2) {
      return this._nodeId2MetaReloading.has(e2);
    }
    get usedMemory() {
      let e2 = null != this._labeler ? this._labeler.usedMemory : 0;
      return this._nodeId2Meta.forEach((t3) => e2 += null != t3 ? t3.node.memory : 0), this._nodeId2MetaReloading.forEach((t3) => e2 += null != t3 ? t3.node.memory : 0), e2;
    }
    get unloadedMemory() {
      return (null != this._controller ? this._controller.unloadedMemoryEstimate : 0) + (null != this._labeler ? this._labeler.unloadedMemoryEstimate : 0);
    }
    _labelingChanged() {
      if (!(B(this.i3slayer) && this._supportsLabeling))
        return void (null != this._labeler && (this._labeler.destroy(), this._labeler = null));
      if (null != this._labeler)
        return;
      const e2 = new L({ view: this.view, layer: this.i3slayer, collection: this._collection, overrides: this.i3sOverrides });
      this._nodeId2Meta.forEach((t3) => null != t3 && this._addMetaToLabeler(e2, t3)), this._labeler = e2;
    }
    _loadAsyncModule(e2) {
      return ++this._asyncModuleLoading, e2.then((e3) => (--this._asyncModuleLoading, e3), (e3) => {
        throw --this._asyncModuleLoading, e3;
      });
    }
    _modificationsChanged() {
      if (!this._i3sWasmLoaded && this.hasModifications)
        return this._i3sWasmLoaded = I$3().then(() => {
          this._i3sWasmLoaded = true, this._modificationsChanged(), this.notifyUpdate();
        }), void this.notifyUpdate();
      if (true !== this._i3sWasmLoaded)
        return;
      const e2 = this.uid, t3 = this.i3slayer.spatialReference;
      this._worker.setModifications(e2, this._layerClippingArea, this._modifications, t3);
      const i5 = u(this._layerClippingArea, this._modifications, t3);
      E$3({ context: e2, modifications: i5, isGeodetic: t3.isGeographic }), this._controller.modificationsChanged();
      const s3 = this.hasModifications ? new l$1() : null;
      this._nodeId2Meta.forEach((e3, t4) => {
        null == e3 ? (this._nodeId2Meta.delete(t4), this._controller.updateLoadStatus(t4, false)) : e3.node.hasModifications ? (this._nodeId2Meta.delete(t4), this._nodeId2MetaReloading.set(t4, e3)) : null != s3 && s3.push(e3.node);
      }), this.notifyChange("elevationRange"), null != s3 && this._nodeId2MetaReloading.forEach((e3) => s3.push(e3.node)), null != s3 && s3.length > 0 && (this.updateNodeModificationStatus(s3), s3.forAll((e3) => {
        if (e3.imModificationImpact !== n$6.Culled) {
          const t4 = this._nodeId2Meta.get(e3.index);
          this._controller.invalidateGeometryVisibility(e3.index), null != t4 ? (this._nodeId2Meta.delete(e3.index), this._nodeId2MetaReloading.set(e3.index, t4), this.notifyChange("elevationRange")) : this._nodeId2Meta.has(e3.index) && (this._nodeId2Meta.delete(e3.index), this._controller.updateLoadStatus(e3.index, false));
        }
      })), this.clearMemCache(), this._controller.restartNodeLoading(), this._showModifications();
    }
    _showModifications() {
      if (null != this._modificationGraphics && (this.view.graphics.removeMany(this._modificationGraphics), this._modificationGraphics = null), !t$6.I3S_SHOW_MODIFICATIONS || 0 === this._modifications.length)
        return;
      const e2 = { clip: [227, 227, 79, 0.8], mask: [227, 139, 79, 0.8], replace: [139, 227, 79, 0.8] }, t3 = { type: "simple-fill", outline: { color: [255, 255, 255], width: 1 } };
      this._modificationGraphics = new Array();
      for (const s3 of this._modifications) {
        const r2 = s3.geometry;
        r2.spatialReference = this.i3slayer.spatialReference;
        const o4 = { ...t3, color: e2[s3.type] };
        this._modificationGraphics.push(new c$4({ geometry: r2, symbol: o4 }));
      }
      this.view.graphics.addMany(this._modificationGraphics);
    }
    _addMetaToLabeler(e2, t3) {
      e2.addNodeMeta(t3, (e3, t4) => this._createAttributes(e3, t4));
    }
    _contentVisibleChanged(e2) {
      e2 ? (this.view.elevationProvider.register(this._elevationContext, this._elevationProvider), this._stage.view.sceneIntersectionHelper.addIntersectionHandler(this._intersectionHandler)) : (this._removeAllNodeDataFromStage(), this.view.elevationProvider && this.view.elevationProvider.unregister(this._elevationProvider), this._stage.view.sceneIntersectionHelper.removeIntersectionHandler(this._intersectionHandler));
    }
    getLoadedAttributes(e2) {
      const t3 = this._nodeId2Meta.get(e2);
      if (null != t3?.attributeInfo)
        return t3.attributeInfo.loadedAttributes;
    }
    getAttributeData(e2) {
      const t3 = this._nodeId2Meta.get(e2);
      if (null != t3?.attributeInfo)
        return t3.attributeInfo.attributeData;
    }
    setAttributeData(e2, t3) {
      const i5 = this._nodeId2Meta.get(e2);
      null != i5?.attributeInfo && (i5.attributeInfo.attributeData = t3, this._attributeValuesChanged(i5));
    }
    async updateAttributes(e2, t3, i5) {
      const s3 = this._nodeId2Meta.get(e2);
      null != s3 && (await this.i3sOverrides.applyAttributeOverrides(s3.featureIds, t3, i5, this._controller.requiredAttributes), s3.attributeInfo = t3, this._controller.reschedule(() => this._attributeValuesChanged(s3), i5).catch((e3) => {
        b$2(e3) || vt.warn("Error while updating attribute values. Layer might not display correctly.", e3);
      }));
    }
    _attributeValuesChanged(e2) {
      e2.cachedRendererVersion = this._getInvalidRendererVersion(), e2.filteredIds = null, null != this._labeler && this._labeler.setNodeMetaAttributes(e2, (e3, t3) => this._createAttributes(e3, t3)), this._updateEngineObject(e2);
    }
    clearMemCache() {
      null != this._memCache && this._memCache.clear();
    }
    getVisibleNodes() {
      const e2 = new Array();
      return this._nodeId2Meta.forEach((t3) => null != t3 && e2.push(t3.node)), e2;
    }
    getNodeComponentObb(e2) {
      const t3 = this._nodeId2Meta.get(e2.index) ?? this._nodeId2MetaReloading.get(e2.index);
      return null != t3 ? this._collection.getComponentObb(t3.objectHandle) : null;
    }
    getLoadedNodeIndices(e2) {
      this._nodeId2Meta.forEach((t3, i5) => e2.push(i5)), this._nodeId2MetaReloading.forEach((t3, i5) => e2.push(i5));
    }
    _preLoadBasis() {
      !has("disable-feature:i3s-basis") && 0 != (this.supportedTextureEncodings & e$7.Basis) && this.i3slayer.textureSetDefinitions?.some((e2) => e2.formats.some((e3) => "basis" === e3.format || "ktx2" === e3.format)) && g$2();
    }
    _getVertexBufferLayout(e2, t3) {
      const i5 = { hasTexture: Vt(e2.params.material), hasNormals: t3.normal, hasRegions: t3.uvRegion };
      return r$2(o$4(this._getGeometryParameters(i5)));
    }
    _getObjectIdField() {
      return this.i3slayer.objectIdField || o$5;
    }
    _getGlobalIdField() {
      return this.i3slayer.associatedLayer?.globalIdField;
    }
    _findGraphicNodeAndIndex(e2) {
      const t3 = n$7(this.i3slayer.fieldsIndex, e2.attributes, this._getObjectIdField());
      let i5 = null;
      return n$5(this._nodeId2Meta, (e3) => {
        if (null == e3)
          return false;
        const s3 = e3.featureIds.indexOf(t3);
        return -1 !== s3 && (i5 = { node: e3.node, index: s3 }, true);
      }), i5;
    }
    _getGraphicIndices(e2, t3) {
      const i5 = this._nodeId2Meta.get(e2.index);
      if (null == i5)
        return [];
      const s3 = [], r2 = this._getObjectIdField(), o4 = this.i3slayer.fieldsIndex;
      for (const a3 of t3) {
        const e3 = n$7(o4, a3.attributes, r2), t4 = i5.featureIds.indexOf(e3);
        -1 !== t4 && s3.push(t4);
      }
      return s3;
    }
    whenGraphicBounds(e2) {
      const t3 = this._findGraphicNodeAndIndex(e2);
      if (!t3)
        return Promise.reject();
      const i5 = this._getAABB(t3.node.index, t3.index);
      return null == i5 ? Promise.reject() : Promise.resolve({ boundingBox: i5, screenSpaceObjects: [] });
    }
    getAABBFromIntersectorTarget(e2) {
      return null == e2.nodeIndex || null == e2.componentIndex ? null : this._getAABB(e2.nodeIndex, e2.componentIndex);
    }
    _getAABB(e2, t3) {
      const i5 = this._nodeId2Meta.get(e2);
      if (null == i5?.featureIds || t3 >= i5.featureIds.length)
        return null;
      const s3 = i5.objectHandle, r2 = i$5(t3, this._collection, s3, t$2(24), 0), o4 = this.view.renderSpatialReference, a3 = this.view.spatialReference;
      if (!n$3(r2, o4, 0, r2, a3, 0, 8))
        return null;
      const n3 = P();
      return c$2(n3, r2, 0, 8), n3;
    }
    whenGraphicAttributes(e2, t3) {
      return te$1(this.i3slayer, e2, this._getObjectIdField(), t3, () => [...this._nodeId2Meta.values()].filter(k$1));
    }
    getGraphicFromIntersectorTarget(e2) {
      if (null == e2.nodeIndex || null == e2.componentIndex)
        return null;
      const t3 = this._nodeId2Meta.get(e2.nodeIndex);
      return null == t3?.featureIds || e2.componentIndex >= t3.featureIds.length ? null : this._createGraphic(e2.componentIndex, t3);
    }
    _getCacheKey(e2) {
      return `${this._layerUrl}/v${Ot}/${e2}${this._cacheKeySuffix}`;
    }
    _getMemCacheKey(e2, t3 = this.elevationOffset) {
      return e2 + "#" + t3;
    }
    get _idbCacheEnabled() {
      return !this._controller.disableIDBCache && !this.hasModifications && 0 === this.elevationOffset && null != this._cacheKeySuffix;
    }
    loadCachedGPUData(e2) {
      return null != this._memCache ? this._memCache.pop(this._getMemCacheKey(e2)) : null;
    }
    deleteCachedGPUData(e2) {
      null != e2 && this._deleteComponentObject(e2);
    }
    _cacheGPUData(e2, t3 = this.elevationOffset) {
      if (null == this._memCache)
        return void this._deleteComponentObject(e2);
      const i5 = this._controller.indexDepth - e2.node.level;
      this._memCache.put(this._getMemCacheKey(e2.node.index, t3), e2, e2.node.memory, i5);
    }
    loadMissingTextures(e2, t3, i5, s3) {
      const r2 = e2?.filter((e3, i6) => {
        if (0 == (e3.usage & this.rendererTextureUsage))
          return false;
        if (null == t3)
          return true;
        const s4 = D$4(e3.encodings, this.supportedTextureEncodings), r3 = t3[i6];
        return !!(null == r3?.data || s4 && r3.encoding !== s4.encoding);
      }) ?? [];
      return 0 === r2.length ? Promise.resolve(false) : i5(r2, s3).then((i6) => {
        let s4 = 0;
        for (let r3 = 0; r3 < e2.length; r3++)
          s4 < i6.length && i6[s4].id === e2[r3].id && (t3[r3] = i6[s4], s4++);
        return true;
      });
    }
    loadCachedNodeData(e2, t3, i5) {
      return this._idbCacheEnabled ? this._idbCache.get(this._getCacheKey(e2.id), t3).then((s3) => null == s3 ? null : s3.nodeVersion !== e2.version ? (this._idbCache.remove(this._getCacheKey(e2.id)), null) : (this.elevationInfo.mode === Bt.Absolute && (e2.geometryObb = s3.geometryObb), this.loadMissingTextures(s3.requiredTextures, s3.textureData, i5, t3).then((i6) => (i6 && this._idbCache.initialized && null != s3.textureData && (s3.byteSize = Ut(s3.transformedGeometry, s3.textureData), s3.textureData.every(Ht) && Gt(e2, s3) && this._idbCache.put(this._getCacheKey(e2.id), s3).catch((t4) => vt.warn(`Failed to update node with textures in IndexedDB cache: ${e2.id}: ${t4}`))), s$6(t3), s3)))) : Promise.resolve(null);
    }
    addNode(e2, t3, i5) {
      return Pt(t3) ? null == t3.geometryBuffer ? (this._addNodeMeta(e2.index, null), Promise.resolve()) : this._addData(e2, t3.attributeDataInfo, () => this._transformNode(e2, t3, i5).then((s3) => this._safeReschedule(() => {
        if (null == s3)
          return e2.hasModifications = false, this._addCachedNodeData(e2, null, i5);
        e2.hasModifications = s3.transformedGeometry.hasModifications;
        const { obb: r2, componentOffsets: o4, featureIds: a3, anchorIds: n3, anchors: l2, transformedGeometry: d2 } = s3, h3 = this._controller.crsIndex, c2 = this.view.renderSpatialReference, u2 = r$3(e2.mbs, this.elevationOffset, h3, c2), _2 = H([r2.center.x, r2.center.y, r2.center.z], [r2.extents.x, r2.extents.y, r2.extents.z], t$7(r2.orientation.x, r2.orientation.y, r2.orientation.z, r2.orientation.w));
        O$2(_2.center, _2.center, u2), this.elevationInfo.mode === Bt.Absolute && (e2.geometryObb = _2), t3.geometryData.componentOffsets = o4, a3 && (t3.geometryData.featureIds = Array.from(a3)), t3.geometryData.anchorIds = n3, t3.geometryData.anchors = l2;
        const m2 = { nodeVersion: e2.version, geometryData: t3.geometryData, requiredTextures: t3.requiredTextures, textureData: t3.textureData, transformedGeometry: d2, globalTrafo: u2, geometryObb: _2, byteSize: Ut(d2, t3.textureData) };
        if (this._idbCacheEnabled && this._idbCache.initialized && Gt(e2, m2)) {
          const t4 = null != m2.textureData ? m2.textureData.map((e3) => Ht(e3) ? e3 : null) : null;
          this._idbCache.put(this._getCacheKey(e2.id), { ...m2, textureData: t4 }).catch((t5) => vt.warn(`Failed to store node in IndexedDB cache: ${e2.id}: ${t5}`));
        }
        return this._addCachedNodeData(e2, m2, i5);
      }, i5))) : Promise.reject();
    }
    getElevationRange(e2) {
      let t3 = 1 / 0, i5 = -1 / 0;
      const s3 = R(this.view.renderCoordsHelper.spatialReference);
      return this._nodeId2Meta.forEach((r2) => {
        if (null != r2?.node.geometryObb) {
          const o4 = r2.node.geometryObb;
          if (O$3(o4, e2)) {
            const e3 = this._collection.getObjectTransform(r2.objectHandle), o5 = this.view.renderCoordsHelper.getAltitude(e3.position);
            for (let a3 = 0; a3 < r2.featureIds.length; a3++) {
              const e4 = this._collection.getComponentAabb(r2.objectHandle, a3, zt);
              if ("local" === this.view.viewingMode)
                t3 = Math.min(t3, o5 + e4[2]), i5 = Math.max(i5, o5 + e4[5]);
              else {
                t3 = Math.min(t3, o5 + e4[2]);
                const r3 = Math.max(Math.abs(e4[3]), Math.abs(e4[0])), a4 = Math.max(Math.abs(e4[4]), Math.abs(e4[1])), n3 = o5 + e4[5] + s3.radius;
                i5 = Math.max(i5, Math.sqrt(r3 * r3 + a4 * a4 + n3 * n3) - s3.radius);
              }
            }
          }
        }
      }), { min: t3, max: i5 };
    }
    computeVisibilityObb(e2) {
      return Le(e2, this.view.renderSpatialReference, this._controller.crsIndex, this.i3slayer.spatialReference, this.elevationOffset, this._modifications);
    }
    _transformNode(e2, t3, i5) {
      const s3 = t3.geometryData.geometries ?? [], r2 = new Array(s3.length);
      for (let f2 = 0; f2 < s3.length; ++f2)
        r2[f2] = this._getVertexBufferLayout(s3[f2], t3.geometryDescriptor);
      const o4 = e2.mbs, a3 = this.elevationOffset, n3 = this._controller.crsIndex, l2 = this._controller.crsVertex, d2 = this.view.renderSpatialReference, h3 = c$5(o4, a3, n3), c2 = r$3(o4, a3, n3, d2), u2 = T(n3, l2), _2 = T(l2, d2);
      if (null == u2 || null == _2)
        return Promise.resolve(null);
      const m2 = this.i3slayer.normalReferenceFrame, g2 = t3.normalReferenceFrame ?? m2 ?? "none", p2 = { context: this.uid, geometryBuffer: t3.geometryBuffer, geometryData: t3.geometryData, geometryDescriptor: t3.geometryDescriptor, layouts: r2, localOrigin: h3, globalTrafo: c2, mbs: o4, obb: e2.serviceObb, elevationOffset: a3, needNormals: !this._isIntegratedMesh && this._controller.isMeshPyramid, normalReferenceFrame: g2, indexToVertexProjector: u2, vertexToRenderProjector: _2 };
      return this._worker.invoke(p2, i5);
    }
    get _supportsNodeCrossFading() {
      return !this.view?._stage?.renderer.shadowsEnabled;
    }
    get nodeCrossfadingEnabled() {
      return this._supportsNodeCrossFading && (this.lodCrossfadeinDuration > 0 || this.lodCrossfadeoutDuration > 0 || this.lodCrossfadeUncoveredDuration > 0);
    }
    get nodeFadeoutEnabled() {
      return this._supportsNodeCrossFading && this.lodCrossfadeoutDuration > 0;
    }
    _setNewNodeOpacity(e2) {
      const t3 = this.nodeCrossfadingEnabled ? 0 : this.fullOpacity;
      this._setNodeOpacity(e2, t3);
    }
    addCachedGPUData(e2, t3, i5) {
      if (this.elevationInfo.mode === Bt.Absolute && (e2.geometryObb = J(this._collection.getComponentObb(t3.objectHandle))), !this._controller.isGeometryVisible(e2))
        return void this._cacheGPUData(t3);
      null != this._labeler && this._addMetaToLabeler(this._labeler, t3);
      const s3 = e2.index;
      this._addNodeMeta(s3, t3), this.updateNodeState(s3, i5), this._collection.setObjectVisibility(t3.objectHandle, c$6.Visible), this._updateMaterial(t3), this._setNewNodeOpacity(t3), this.elevationInfo.mode !== Bt.Absolute && this._ensureElevationTask().schedule(s3), this._updateEngineObject(t3), this._highlights.objectCreated(t3), null != this._treeDebugger && this._treeDebugger.update();
    }
    addCachedNodeData(e2, t3, i5, s3) {
      return this._addData(e2, i5, () => this._addCachedNodeData(e2, t3, s3));
    }
    async deleteCachedNodeData(e2) {
      if (this._idbCacheEnabled)
        return this._idbCache.remove(this._getCacheKey(e2));
    }
    async _addCachedNodeData(e2, t3, i5) {
      if (!this.contentVisible || !this._controller.isGeometryVisible(e2))
        return void this._removeNodeStageData(e2.index, this.elevationOffset, this._nodeId2MetaReloading);
      if (null == t3)
        return void this._addNodeMeta(e2.index, null);
      const s3 = this._addTasks.get(e2.index), { geometryData: r2, transformedGeometry: o4, globalTrafo: a3 } = t3;
      await this.i3sOverrides.applyAttributeOverrides(r2.featureIds, s3.attributeInfo, i5, this._controller.requiredAttributes);
      const n3 = null != t3.textureData ? t3.textureData.filter((e3) => null != e3 && 0 != (e3.usage & this.rendererTextureUsage)) : [];
      !has("disable-feature:i3s-basis") && n3.some((e3) => null != e3 && (e3.encoding === e$7.Basis || e3.encoding === e$7.KTX2)) && await g$2(), e2.memory = 0;
      const { componentOffsets: l2, geometries: d2, featureIds: h3, anchorIds: c2, anchors: u2 } = r2, _2 = this._collection, m2 = d2[0], { layout: g2, indices: p2, interleavedVertexData: f$12, positionData: b2, hasColors: y2 } = o4, v2 = this._materialParameters(m2, g2), I2 = l2 || new Uint32Array([0, p2 ? p2.length : f$12.byteLength / g2[0].stride]), w2 = { vertices: { data: f$12, count: f$12.byteLength / g2[0].stride, layoutParameters: v2.geometryParams }, positionData: { positions: e$8(b2.data), indices: t$8(b2.indices) }, indices: p2, componentOffsets: I2 }, S2 = m2.transformation ? r$4(m2.transformation) : e$6();
      c$7(S2, a3, S2);
      const A2 = I$4(n$4(), S2), T2 = a$5(e$9(), S2), D2 = this.view.renderSpatialReference, R2 = this.view.basemapTerrain.spatialReference, N = n$4(), F2 = [1, 1, 1];
      f(A2, D2, F2, R2) || vt.errorOnce("Unsupported coordinate system for IM overlay"), t$3(A2, D2, N, R2);
      const P2 = _2.createObject({ toMapSpace: r$5(N[0], N[1], F2[0], F2[1]), geometry: w2, obb: t3.geometryObb, transform: { position: A2, rotationScale: T2 } }), U2 = v2.geometryParams.textureCoordinates === d$3.Atlas, { textures: G2, texturePromise: k2 } = this._initMaterialAndTextures(P2, v2.material, n3, U2);
      e2.memory += this._memEstimateGeometryAdded(P2), e2.memory += G2.reduce((e3, t4) => e3 + (null != t4 ? this._memEstimateTextureAdded(t4) : 0), 0);
      const B2 = !!v2.material.hasParametersFromSource, q = "blend" !== v2.material.alphaMode && v2.material.metallicRoughness.baseColorFactor[3] >= 1, K = new Mt(e2, h3, P2, this._getInvalidRendererVersion(), s3.attributeInfo, { hasParametersFromSource: B2, isOpaque: q }, G2, c2, u2);
      s3.meta = K, !this._hasTextures && t3.requiredTextures?.some(({ usage: e3 }) => 0 != (e3 & s$7.ColorTextures)) && (this._hasTextures = true), this._hasData = true, this._hasColors = this._hasColors || y2, this._hasTextures = this._hasTextures || !!e2.resources.texture, this.notifyChange("hasTexturesOrVertexColors");
      const W2 = this.slicePlaneEnabled;
      return Promise.all([this._addOrUpdateEdgeRendering(K), k2]).then(([t4, s4]) => (null != t4 && t4.updateObjectVisibility(K.objectHandle, false).catch((e3) => jt(e3, this.i3slayer.title)), this._safeReschedule(() => {
        const i6 = this._addTasks.get(e2.index);
        if (!i6)
          return;
        if (this._addNodeMeta(e2.index, K), i6.meta = null, !this.contentVisible)
          return void this._removeNodeStageData(e2.index, this.elevationOffset);
        _2.setObjectVisibility(P2, c$6.Visible), null != t4 && t4.updateObjectVisibility(K.objectHandle, true).catch((e3) => jt(e3, this.i3slayer.title)), K.attributeInfo = i6.attributeInfo;
        const s5 = K.cachedRendererVersion !== this._rendererVersion, r3 = W2 !== this.slicePlaneEnabled;
        this._updateElevationOffsets(K);
        const o5 = K.elevationOffsets;
        this._updateComponentData(K);
        const a4 = this._applyFiltersToNode(K);
        (s5 || null != t4 && (r3 || a4 || o5)) && this._addOrUpdateEdgeRendering(K), null != this._labeler && this._addMetaToLabeler(this._labeler, K), this._visibleGeometryChanged(K, wt.ADD), this._highlights.objectCreated(K), this._updateMaterial(K), this._setNewNodeOpacity(K), null != this._treeDebugger && this._treeDebugger.update();
      }, i5))).catch((e3) => {
        throw null != s3.meta && (this._cacheGPUData(s3.meta), s3.meta = null), e3;
      });
    }
    _addNodeMeta(e2, t3) {
      if (this._removeNodeStageData(e2, this.elevationOffset, this._nodeId2MetaReloading), this._nodeId2Meta.has(e2)) {
        vt.error("Removing duplicated node");
        const t4 = this._nodeId2Meta.get(e2);
        null != t4 && this._deleteComponentObject(t4);
      } else
        this._controller.updateLoadStatus(e2, true);
      null != t3 && (t3.lodCrossfadeProgress = null, this.nodeCrossfadingEnabled && kt(t3.cachedEdgeMaterials, 0)), this._nodeId2Meta.set(e2, t3), this.notifyChange("elevationRange");
    }
    _updateElevationOffsets(e2) {
      const t3 = this.view.renderSpatialReference, i5 = this._controller.crsIndex, s3 = this.elevationInfo, r2 = this.view.basemapTerrain, o4 = r2.spatialReference, a3 = s3.mode;
      if (null == t3 || null == o4 || a3 === Bt.Absolute)
        return void (e2.elevationOffsets = null);
      const n3 = this._collection.getObjectTransform(e2.objectHandle);
      e2.elevationOffsets = e2.elevationOffsets ?? [];
      const l2 = qt, d2 = zt, h3 = a3 === Bt.OnTheGround, c2 = this.view.renderCoordsHelper, u2 = e2.featureIds.length, _2 = (() => {
        if (e2.cachedElevationAnchors)
          return e2.cachedElevationAnchors;
        const s4 = t$2(3 * u2);
        e2.cachedElevationAnchors = s4;
        for (let r3 = 0; r3 < u2; r3++) {
          const a4 = 3 * r3, h4 = e2.anchorIds?.indexOf(r3) ?? -1;
          e2.anchors && h4 >= 0 ? (o$6(l2, e2.anchors[3 * h4], e2.anchors[3 * h4 + 1], e2.anchors[3 * h4 + 2]), u$1(l2, l2, e2.node.mbs), t$3(l2, i5, l2, o4), s4[a4] = l2[0], s4[a4 + 1] = l2[1], s4[a4 + 2] = c2.getAltitude(l2)) : (this._collection.getComponentAabb(e2.objectHandle, r3, d2, true), o$6(l2, (d2[0] + d2[3]) / 2, (d2[1] + d2[4]) / 2, d2[2]), S(l2, l2, n3.rotationScale), u$1(l2, l2, n3.position), s4[a4 + 2] = c2.getAltitude(l2), t$3(l2, t3, l2, o4), s4[a4] = l2[0], s4[a4 + 1] = l2[1]);
        }
        return s4;
      })(), m2 = s3.offset, g2 = e2.elevationOffsets, p2 = (e3, t4) => {
        const i6 = h3 ? _2[3 * e3 + 2] : 0;
        g2[e3] = m2 + (null != t4 ? t4 - i6 : 0);
      };
      r2.getElevations(_2, u2, p2);
    }
    _ensureElevationTask() {
      return null != this._elevationTask || (this._elevationTask = new i$2(this.view.resourceController.scheduler, (e2) => {
        const t3 = this._controller.updateElevationChanged(e2, this.view.basemapTerrain.spatialReference);
        return null != t3 ? t3.filterInPlace((e3) => null != this._nodeId2Meta.get(e3)) : null;
      }, (e2) => {
        const t3 = this._nodeId2Meta.get(e2);
        this._nodeElevationAlignmentChanged(t3);
      })), this._elevationTask;
    }
    _elevationInfoChanged(e2, t3) {
      const i5 = e2.mode !== Bt.Absolute, s3 = !!t3 && t3 !== e2 && t3.mode !== Bt.Absolute;
      this._intersectionHandler.updateElevationAlignState(i5, this.view.state.viewingMode), i5 && !s3 && this._controller.removeAllGeometryObbs(), this._nodeId2Meta.forEach((e3) => this._nodeElevationAlignmentChanged(e3));
    }
    _nodeElevationAlignmentChanged(e2) {
      null != e2 && (this._updateElevationOffsets(e2), this._updateComponentData(e2), this._updateEdgeRendering(e2), null != this._labeler && this._labeler.updateLabelPositions(e2), this._updateSnappingSources(e2, wt.UPDATE));
    }
    _safeReschedule(e2, t3) {
      return s$6(t3), this._controller.reschedule(e2, t3);
    }
    _materialParameters(e2, t3) {
      const i5 = null != e2.params.material ? e2.params.material : b$3(), s3 = t3.some((e3) => "uvRegion" === e3.name), r2 = t3.some((e3) => "normalCompressed" === e3.name), o4 = Vt(i5);
      return { geometryParams: this._getGeometryParameters({ hasTexture: o4, hasNormals: r2, hasRegions: s3 }), material: i5 };
    }
    _initMaterialAndTextures(e2, t3, i5, s3) {
      const r2 = this._stage.renderView, o4 = i5.map((e3) => F$2(e3, t3, s3, r2));
      this._stage.addMany(o4);
      let a3 = null;
      return this._collection.updateMaterial(e2, (e3) => {
        a3 = S$2(e3, t3, o4, i5, this.view._stage.renderView.textureRepository, { rendererTextureUsage: this.rendererTextureUsage, usePBR: this._usePBR, isIntegratedMesh: this._isIntegratedMesh, slicePlaneEnabled: this.slicePlaneEnabled, viewSpatialReference: this.view.spatialReference }), this._updateMaterialOverlay(e3);
      }), { textures: o4, texturePromise: a3 };
    }
    _getGeometryParameters(e2) {
      return { textureCoordinates: e2.hasTexture ? e2.hasRegions ? d$3.Atlas : d$3.Default : d$3.None, colors: this._hasVertexColors, normals: e2.hasNormals && !this._isIntegratedMesh };
    }
    _addData(e2, t3, i5) {
      let s3 = this._addTasks.get(e2.index);
      return s3 ? s3.attributeInfo = t3 : (s3 = { ...C$4(), attributeInfo: t3, meta: null }, this._addTasks.set(e2.index, s3), i5().then(s3.resolve, s3.reject).then(() => this._addTasks.delete(e2.index)).catch((t4) => {
        throw this._addTasks.delete(e2.index), t4;
      })), s3.promise;
    }
    _clearAddTasks() {
      this._addTasks.forEach((e2) => {
        null != e2.meta && (this._cacheGPUData(e2.meta), e2.meta = null);
      }), this._addTasks.clear();
    }
    _clippingAreaChanged() {
      const e2 = this.view.renderSpatialReference, t3 = this.i3slayer.spatialReference, i5 = u$3();
      this._renderClippingArea = u$5(this.view.clippingArea, i5, e2) ? i5 : null;
      const s3 = u$3();
      this._layerClippingArea = u$5(this.view.clippingArea, s3, t3) ? s3 : null, this._filterChange(), this._controller && this._controller.updateClippingArea(this.view.clippingArea), this._isIntegratedMesh && this._modificationsChanged();
    }
    get hasGeometryFilter() {
      return false;
    }
    _geometryFilterChange() {
      const e2 = this.hasGeometryFilter;
      this._controller.geometryFilterChanged(e2), this._applyFilters(e2);
    }
    _filterChange() {
      this._applyFilters(this.hasGeometryFilter);
    }
    _applyFilters(e2) {
      this._filters = this.getFilters(), e2 ? this._controller && this._controller.requestUpdate() : this._nodeId2Meta.forEach((e3) => {
        null != e3 && this._applyFiltersToNode(e3) && (this._addOrUpdateEdgeRendering(e3), this._visibleGeometryChanged(e3, wt.UPDATE));
      });
    }
    getFilters() {
      const e2 = [], t3 = this._renderClippingArea;
      return null != t3 && e2.push((e3, i5) => this._boundingRectFilter(e3, i5, t3)), e2;
    }
    addSqlFilter(e2, t3, i5) {
      if (null != t3) {
        const s3 = t3.fieldNames;
        e2.push((e3, r2) => this._sqlFilter(e3, r2, t3, s3, i5));
      }
    }
    _sqlFilter(e2, t3, i5, s3, r2) {
      const o4 = {}, a3 = this._createLayerGraphic(o4), n3 = this.i3slayer.objectIdField, l2 = t3.featureIds, d2 = t3.attributeInfo?.attributeData;
      s3.every((e3) => e3 === n3 || null != d2?.[e3]) && Q(e2, l2, (e3) => {
        o4[n3] = l2[e3];
        for (const i6 of s3)
          i6 !== n3 && (o4[i6] = d2 ? ce(d2[i6], e3) : null);
        try {
          return i5.testFeature(a3);
        } catch (t4) {
          return r2(t4), false;
        }
      });
    }
    _boundingRectNodeTest(e2, t3) {
      return a$4(e2.node.mbs, this._controller.crsIndex, Ft, this.view.renderSpatialReference), Y(t3, Ft);
    }
    _boundingRectFeatureTest(e2, t3, i5) {
      return this._collection.getComponentAabb(e2.objectHandle, t3, St), S$3(St, At), E$4(i5, At);
    }
    _boundingRectFilter(e2, t3, i5) {
      const s3 = this._collection, r2 = this._boundingRectNodeTest(t3, i5);
      if (r2 === X.INSIDE)
        return;
      if (r2 === X.OUTSIDE)
        return void (e2.length = 0);
      const o4 = s3.getComponentCount(t3.objectHandle);
      if (o4.invisible + o4.visible !== t3.featureIds.length)
        return;
      const a3 = this._transformClippingArea(Tt, i5, t3.objectHandle);
      Q(e2, t3.featureIds, (e3) => this._boundingRectFeatureTest(t3, e3, a3));
    }
    _transformClippingArea(e2, t3, i5) {
      const s3 = this._collection.getObjectTransform(i5), r2 = s3.position, o4 = s3.rotationScale;
      return e2[0] = (t3[0] - r2[0]) / o4[0], e2[1] = (t3[1] - r2[1]) / o4[4], e2[2] = (t3[2] - r2[0]) / o4[0], e2[3] = (t3[3] - r2[1]) / o4[4], e2;
    }
    _addOrUpdateEdgeRendering(e2, t3 = true) {
      const i5 = this._edgeView;
      if (null == i5)
        return Promise.resolve(null);
      const s3 = e2.objectHandle, r2 = i5.hasObject(s3), { hasEdges: o4, perFeatureEdgeMaterials: a3 } = this._getFilteredEdgeMaterials(e2), n3 = { hasSlicePlane: this.slicePlaneEnabled };
      if (o4 && r2) {
        if (this.nodeCrossfadingEnabled) {
          kt(a3, this.getNodeOpacity(e2));
        }
        return i5.updateAllComponentMaterials(s3, a3, n3, t3).catch((e3) => jt(e3, this.i3slayer.title)), i5.updateObjectVisibility(s3, true).catch((e3) => jt(e3, this.i3slayer.title)), i5.updateAllVerticalOffsets(s3, e2.elevationOffsets).catch((e3) => jt(e3, this.i3slayer.title)), Promise.resolve(i5);
      }
      return o4 && !r2 ? this._collection.addEdges(s3, i5, a3, n3).then((t4) => (e2.edgeMemoryUsage = t4, e2.node.memory += t4, i5.updateAllVerticalOffsets(s3, e2.elevationOffsets).catch((e3) => jt(e3, this.i3slayer.title)), i5)) : (!o4 && r2 && (e2.node.memory -= e2.edgeMemoryUsage, e2.edgeMemoryUsage = 0, i5.removeObject(s3)), Promise.resolve(null));
    }
    _applyFiltersToNode(e2) {
      return !!this._applyFiltersToNodeComponents(e2) && (null != this._labeler && this._labeler.applyFilterChange(e2), true);
    }
    _applyFiltersToNodeComponents(e2) {
      const t3 = this._collection, i5 = t3.getComponentCount(e2.objectHandle), s3 = null != e2.filteredIds, r2 = 0 === i5.invisible;
      if (t3.setAllComponentVisibilities(e2.objectHandle, "all"), 0 === this._filters.length)
        return e2.filteredIds = null, !r2;
      if (this._updateCachedFilteredIds(e2), s3 && e2.filteredIds === e2.featureIds)
        return !r2;
      const o4 = this._computeFilteredComponentIndices(e2);
      return t3.setAllComponentVisibilities(e2.objectHandle, o4), true;
    }
    _updateCachedFilteredIds(e2) {
      null != e2.filteredIds && e2.appliedFilters === this._filters || (e2.filteredIds = this._computeFilteredIds(e2), e2.appliedFilters = this._filters);
    }
    _computeFilteredIds(e2) {
      const t3 = e2.featureIds.slice();
      for (const i5 of this._filters)
        if (i5(t3, e2), 0 === t3.length)
          break;
      return t3.length === e2.featureIds.length ? e2.featureIds : t3;
    }
    _computeFilteredComponentIndices(e2) {
      const t3 = new Array(), i5 = e2.filteredIds;
      return null != i5 && e2.featureIds.forEach((e3, s3) => {
        i5[t3.length] === e3 && t3.push(s3);
      }), t3;
    }
    _removeAllNodeDataFromStage(e2 = this.elevationOffset) {
      this._nodeId2Meta.forEach((t3, i5) => this._removeNodeStageData(i5, e2)), this._nodeId2MetaReloading.forEach((t3, i5) => this._removeNodeStageData(i5, e2, this._nodeId2MetaReloading)), this._elevationTask = u$2(this._elevationTask);
    }
    removeNode(e2) {
      const t3 = this.elevationOffset;
      this._removeNodeStageData(e2, t3), this._removeNodeStageData(e2, t3, this._nodeId2MetaReloading), null != this._elevationTask && this._elevationTask.remove(e2);
    }
    _removeNodeStageData(e2, t3, i5 = this._nodeId2Meta) {
      i5.has(e2) && this._controller.updateLoadStatus(e2, false);
      const s3 = i5.get(e2);
      null != s3 ? (this._collection.setObjectVisibility(s3.objectHandle, c$6.Hidden), null != this._edgeView && this._edgeView.hasObject(s3.objectHandle) && this._edgeView.updateObjectVisibility(s3.objectHandle, false).catch((e3) => jt(e3, this.i3slayer.title)), this._visibleGeometryChanged(s3, wt.REMOVE), null != this._labeler && this._labeler.removeNodeMeta(s3), i5.delete(e2), this._highlights.objectDeleted(s3), i5 === this._nodeId2Meta ? (this._cacheGPUData(s3, t3), this.nodeCrossfadingEnabled && this._crossfadeHelper.stopNodeFading(s3)) : this._deleteComponentObject(s3), null != this._treeDebugger && this._treeDebugger.update()) : i5.delete(e2);
    }
    _deleteComponentObject(e2) {
      if (null != this._edgeView && this._edgeView.removeObject(e2.objectHandle), this._memEstimateGeometryRemoved(e2.objectHandle), this._collection.destroyObject(e2.objectHandle), e2.textures)
        for (const t3 of e2.textures)
          this._memEstimateTextureRemoved(t3), this._stage.remove(t3);
    }
    updateNodeState(e2, t3) {
      const i5 = this._nodeId2Meta.get(e2);
      null != i5 && this._collection.updateMaterial(i5.objectHandle, (e3) => e3.polygonOffsetEnabled = t3 === s$8.Hole);
    }
    updateNodeIndex(e2, t3) {
      if (this._nodeId2Meta.has(e2)) {
        const i6 = this._nodeId2Meta.get(e2);
        this._nodeId2Meta.delete(e2), this._nodeId2Meta.set(t3, i6), this.notifyChange("elevationRange");
      }
      const i5 = this._nodeId2MetaReloading.get(e2);
      i5 && (this._nodeId2MetaReloading.delete(e2), this._nodeId2MetaReloading.set(t3, i5));
    }
    _invalidateAllSymbols() {
      this._rendererVersion = qe(this._rendererVersion, 1), this._controller && this._controller.requestUpdate();
    }
    _getInvalidRendererVersion() {
      return qe(this._rendererVersion, -1);
    }
    async _rendererChange(e2) {
      if (this._currentRenderer = e2, this.notifyChange("rendererTextureUsage"), this._rendererVersion = qe(this._rendererVersion, 1), this._rendererFields = null, this._colorVariable = null, this._opacityVariable = null, this._invalidateAllSymbols(), e2 && (this._rendererFields = await e2.getRequiredFields(this.i3slayer.fieldsIndex)), this._updateSymbologyFields(), !this._arcade && e2 && "arcadeRequired" in e2 && e2.arcadeRequired && (this._arcade = await i$9()), e2 && "visualVariables" in e2 && e2.visualVariables)
        for (const t3 of e2.visualVariables)
          "color" === t3.type ? this._colorVariable = t3 : "opacity" === t3.type ? this._opacityVariable = t3 : vt.warn(`Unsupported visual variable type for 3D Object Scene Services: ${t3.type}`);
      if (e2)
        for (const t3 of e2.getSymbols())
          "mesh-3d" !== t3.type && vt.error(`Symbols of type '${t3.type}' are not supported for 3D Object Scene Services.`);
      this._controller && this._controller.requestUpdate();
    }
    _getCachedEdgeMaterials(e2) {
      return this._hasComponentData && e2.cachedRendererVersion !== this._rendererVersion && this._updateCachedRendererData(e2), e2.cachedEdgeMaterials;
    }
    _getComponentParameters(e2) {
      this._hasComponentData && e2.cachedRendererVersion !== this._rendererVersion && this._updateCachedRendererData(e2);
      const t3 = e2.cachedSymbology;
      return (i5, s3) => {
        const r2 = 5 * i5;
        if (r$6(s3.externalColor, t3[r2] / 255, t3[r2 + 1] / 255, t3[r2 + 2] / 255, t3[r2 + 3] / 255), null != this._stage.renderView.objectAndLayerIdRenderHelper) {
          const t4 = e2.featureIds[i5], r3 = S$4(this.view.map, this.layerUid);
          this._stage.renderView.objectAndLayerIdRenderHelper.setUidToObjectAndLayerId(t4, t4, this.layerId, this.layerUid + "_" + this.sublayerId, this.layerPopupEnabledAndHasTemplate && !r3, e2.node.resources.attributes, i5, this.sublayerId), s3.objectAndLayerIdColor = this._stage.renderView.getObjectAndLayerIdColor({ graphicUid: t4, layerUid: this.layerUid + "_" + this.sublayerId });
        }
        s3.externalColorMixMode = t3[r2 + 4] & (1 << Ct.CastShadows) - 1, s3.castShadows = 0 != (t3[r2 + 4] & 1 << Ct.CastShadows), s3.pickable = 0 != (t3[r2 + 4] & 1 << Ct.Pickable), s3.elevationOffset = e2.elevationOffsets?.[i5] ?? 0;
      };
    }
    _getSymbolInfo(e2, t3) {
      const i5 = e2?.getSymbol(t3, { arcade: this._arcade });
      if (!(i5 instanceof k))
        return null;
      const s3 = i5.id;
      if (this._symbolInfos.has(s3))
        return this._symbolInfos.get(s3);
      const r2 = xe(i5);
      return this._symbolInfos.set(s3, r2), r2;
    }
    _setSymbologyOverride(e2, t3) {
      this._symbologyOverride !== e2 && (this._symbologyOverride = e2, this._symbologyOverrideFields = t3, this._invalidateAllSymbols(), this._updateSymbologyFields());
    }
    _updateSymbologyFields() {
      this._symbologyFields = null != this._symbologyOverrideFields && this._symbologyOverrideFields.length > 0 ? null != this._rendererFields && this._rendererFields.length > 0 ? I$5(this.i3slayer.fieldsIndex, [...this._rendererFields, ...this._symbologyOverrideFields]) : this._symbologyOverrideFields : this._rendererFields;
    }
    _updateCachedRendererData(e$12) {
      if (e$12.cachedRendererVersion = this._rendererVersion, !this._hasComponentData)
        return;
      const t3 = this._tmpAttributeOnlyGraphic, i5 = {};
      t3.attributes = i5;
      const s3 = this._currentRenderer, r2 = e$12.attributeInfo?.attributeData, o4 = null != e$12.featureIds ? this.i3slayer.objectIdField : null, a3 = null != r2 && null != this._symbologyFields && this._symbologyFields.length > 0;
      let n3 = null, l2 = null;
      if (a3 && null != this._symbologyFields) {
        n3 = [], l2 = [];
        for (const e2 of this._symbologyFields) {
          const t4 = r2[e2];
          t4 && (n3.push(e2), l2.push(t4));
        }
      }
      e$12.cachedSymbology || (e$12.cachedSymbology = e(5 * e$12.featureIds.length));
      const d2 = { color: Rt, castShadows: true, pickable: true, colorMixMode: n$8.Multiply, edgeMaterial: null }, h3 = this.fullOpacity, c2 = this.nodeCrossfadingEnabled ? this.getNodeOpacity(e$12) : h3;
      let u2 = null, _2 = A$1.OPAQUE, m2 = Re, g2 = 0;
      for (let p2 = 0; p2 < e$12.featureIds.length; p2++) {
        if (null != o4 && (i5[o4] = e$12.featureIds[p2]), a3 && n3)
          for (let e2 = 0; e2 < n3.length; e2++)
            i5[n3[e2]] = ce(l2[e2], p2);
        const r3 = s3 ? this._getSymbolInfo(s3, t3) : null;
        let h4 = null, f2 = null;
        if (s3 && "visualVariables" in s3) {
          if (this._colorVariable) {
            const e2 = p$2(this._colorVariable, t3, { color: Nt, arcade: this._arcade });
            e2 && (h4 = Rt, h4[0] = e2.r / 255, h4[1] = e2.g / 255, h4[2] = e2.b / 255, this._opacityVariable || null === e2.a || (f2 = e2.a));
          }
          this._opacityVariable && (f2 = v$2(this._opacityVariable, t3, { arcade: this._arcade }));
        }
        if (r3?.material) {
          const e2 = r3.material;
          h4 = null == h4 || null == f2 ? U$3(h4, f2, e2.color, e2.alpha, It, Rt) : U$3(h4, f2, null, null, It, Rt);
        }
        if (null == h4 && (h4 = Rt, h4[0] = 1, h4[1] = 1, h4[2] = 1, h4[3] = 1), d2.pickable = true, d2.castShadows = !r3 || r3.castShadows, d2.colorMixMode = r3?.material ? r3.material.colorMixMode : n$8.Multiply, d2.edgeMaterial = r3 ? r3.edgeMaterial : null, null != this._symbologyOverride && (d2.color = h4, this._symbologyOverride(t3, d2), h4 = d2.color), null != this._nodeColorOverride && (this._nodeColorOverride(e$12.node, h4), d2.colorMixMode = n$8.Replace), null != d2.edgeMaterial) {
          const t4 = h4[3] <= 0 ? A$1.INVISIBLE : h4[3] >= 1 && (e$12.material.isOpaque || d2.colorMixMode === n$8.Replace) ? A$1.OPAQUE : A$1.TRANSPARENT;
          d2.edgeMaterial === u2 && t4 === _2 || (m2 = { ...d2.edgeMaterial, opacity: c2, objectTransparency: t4 }, u2 = d2.edgeMaterial, _2 = t4), e$12.cachedEdgeMaterials[p2] = m2;
        } else
          e$12.cachedEdgeMaterials[p2] = Re;
        e$12.cachedSymbology[g2++] = Math.round(255 * h4[0]), e$12.cachedSymbology[g2++] = Math.round(255 * h4[1]), e$12.cachedSymbology[g2++] = Math.round(255 * h4[2]), e$12.cachedSymbology[g2++] = Math.round(255 * h4[3]), e$12.cachedSymbology[g2++] = d2.colorMixMode | +d2.castShadows << Ct.CastShadows | +d2.pickable << Ct.Pickable;
      }
    }
    _getFilteredEdgeMaterials(e2) {
      const t3 = this._getCachedEdgeMaterials(e2);
      this.nodeCrossfadingEnabled || kt(t3, this.fullOpacity);
      const i5 = e2.filteredIds;
      if (null == i5) {
        return { hasEdges: t3.some((e3) => e3 !== Re), perFeatureEdgeMaterials: t3 };
      }
      let s3 = 0, r2 = false;
      const o4 = t3.map((t4, o5) => e2.featureIds[o5] !== i5[s3] ? Re : (r2 = r2 || t4 !== Re, s3++, t4));
      return { hasEdges: r2, perFeatureEdgeMaterials: o4 };
    }
    _updateComponentData(e2) {
      if (!this._hasComponentData)
        return;
      const t3 = e2.objectHandle, i5 = this._getComponentParameters(e2);
      this._collection.setComponentData(t3, i5), this._stage.renderView.requestRender();
    }
    _reloadAll(e2 = this.elevationOffset) {
      this._removeAllNodeDataFromStage(e2), null != this._controller && this._controller.restartNodeLoading();
    }
    _opacityChange(e2) {
      this.nodeCrossfadingEnabled && this._crossfadeHelper.stopAllNodeFading(), this._nodeId2Meta.forEach((t3) => {
        null != t3 && (this._collection.updateMaterial(t3.objectHandle, (t4) => t4.objectOpacity = e2), kt(t3.cachedEdgeMaterials, e2), this._updateEdgeRendering(t3));
      });
    }
    _updateMaterial(e2) {
      this._collection.updateMaterial(e2.objectHandle, (e3) => {
        e3.commonMaterialParameters.hasSlicePlane = this.slicePlaneEnabled, e3.usePBR = this._usePBR, this._updateMaterialOverlay(e3);
      });
    }
    _updateMaterialOverlay(e2) {
    }
    _updateEngineObject(e2) {
      this._updateComponentData(e2), this._applyFiltersToNode(e2), this._addOrUpdateEdgeRendering(e2), this._visibleGeometryChanged(e2, wt.UPDATE);
    }
    _slicePlaneEnabledChange(e2) {
      this._intersectionHandler && (this._intersectionHandler.slicePlaneEnabled = e2), null != this._labeler && (this._labeler.slicePlaneEnabled = e2), this._nodeId2Meta.forEach((t3) => {
        null != t3 && (this._collection.updateMaterial(t3.objectHandle, (t4) => t4.commonMaterialParameters.hasSlicePlane = e2), this._updateEdgeRendering(t3, false));
      });
    }
    _updatePBR(e2) {
      this._nodeId2Meta.forEach((t3) => {
        null != t3 && this._collection.updateMaterial(t3.objectHandle, (t4) => t4.usePBR = e2);
      }), this._hasLoadedPBRTextures = true;
    }
    get _usePBR() {
      return !this._isIntegratedMesh && this.view.qualitySettings.physicallyBasedRenderingEnabled;
    }
    _updateEdgeRendering(e2, t3 = true) {
      null != this._edgeView && this._edgeView.hasObject(e2.objectHandle) && this._addOrUpdateEdgeRendering(e2, t3);
    }
    _forAllNodes(e2) {
      this._nodeId2Meta.forEach(e2);
    }
    _ignoreClientNodeOverriddenFeatures(e2) {
      return this.i3sOverrides.hasGeometryChanges ? (t3, i5, s3) => s3.node.index >= 0 && this.i3sOverrides.featureHasGeometryChanges(t3) ? I.CONTINUE : e2(t3, i5, s3) : e2;
    }
    _forAllFeatures(e2, t3, i5) {
      n$5(this._nodeId2Meta, (s3) => {
        if (null == s3)
          return false;
        if (null != t3) {
          switch (t3(s3)) {
            case I.EXIT:
              return true;
            case I.SKIP:
              return false;
          }
        }
        let r2 = I.CONTINUE;
        switch (i5) {
          case E$1.ALL:
            r2 = this._forAllFeaturesOfNode(s3, e2);
            break;
          case E$1.VISIBLE_ONLY:
            r2 = this._forAllVisibleFeaturesOfNode(s3, e2);
            break;
          case E$1.QUERYABLE:
            r2 = this._forAllQueryableFeaturesOfNode(s3, e2);
        }
        return r2 === I.EXIT;
      });
    }
    _forAllFeaturesOfNode(e2, t3) {
      let i5 = I.CONTINUE;
      const s3 = e2.featureIds;
      for (let r2 = 0; r2 < s3.length; r2++)
        if (i5 = t3(s3[r2], r2, e2), i5 === I.EXIT)
          return i5;
      return i5;
    }
    _forAllVisibleFeaturesOfNode(e2, t3) {
      let i5 = I.CONTINUE;
      const s3 = e2.featureIds;
      return this._collection.forEachVisibleComponent(e2.objectHandle, (r2) => (i5 = t3(s3[r2], r2, e2), i5 === I.CONTINUE)), i5;
    }
    _forAllQueryableFeaturesOfNode(e2, t3) {
      const i5 = this._ignoreClientNodeOverriddenFeatures(t3);
      if (null == this._renderClippingArea)
        return this._forAllFeaturesOfNode(e2, i5);
      const s3 = this._boundingRectNodeTest(e2, this._renderClippingArea);
      if (s3 === X.OUTSIDE)
        return I.CONTINUE;
      if (s3 === X.INSIDE)
        return this._forAllFeaturesOfNode(e2, i5);
      const r2 = I.CONTINUE, o4 = e2.featureIds, a3 = e2.objectHandle, n3 = J$1(this._renderClippingArea, this._collection.getObjectTransform(a3));
      for (let l2 = 0; l2 < o4.length; l2++) {
        if (!this._boundingRectFeatureTest(e2, l2, n3))
          continue;
        const t4 = i5(o4[l2], l2, e2);
        if (t4 === I.EXIT)
          return t4;
      }
      return r2;
    }
    _createAttributes(e2, t3) {
      const i5 = {};
      null != t3.featureIds && (i5[this._getObjectIdField()] = t3.featureIds[e2]);
      const s3 = t3.attributeInfo?.attributeData;
      if (null != s3)
        for (const r2 of Object.keys(s3))
          i5[r2] = ce(s3[r2], e2);
      return i5;
    }
    _createGraphic(e2, t3) {
      return this._createLayerGraphic(this._createAttributes(e2, t3));
    }
    highlight(e2) {
      if ("number" == typeof e2 || e2 instanceof c$4 ? e2 = [e2] : e2 instanceof V$1 && (e2 = e2.toArray()), Array.isArray(e2) && e2.length > 0) {
        if (e2[0] instanceof c$4) {
          const t3 = e2, i5 = this.i3slayer.fieldsIndex, s3 = this._getObjectIdField(), r2 = t3.map((e3) => n$7(i5, e3.attributes, s3)), { set: o4, handle: a3 } = this._highlights.acquireSet();
          return this._highlights.setFeatureIds(o4, r2), a3;
        }
        if ("number" == typeof e2[0]) {
          const t3 = e2, { set: i5, handle: s3 } = this._highlights.acquireSet();
          return this._highlights.setFeatureIds(i5, t3), s3;
        }
      }
      return e$5();
    }
    resetHighlights() {
      u$2(this._highlights), this._highlights = new h2({ collection: this._collection, forAllFeatures: (e2) => this._forAllFeatures(e2, null, E$1.ALL), forAllFeaturesOfNode: (e2, t3) => this._forAllFeaturesOfNode(e2, t3) });
    }
    _visibleGeometryChanged(e2, t3) {
      this._elevationProvider && (this._elevationProvider.objectChanged(e2.node), null == this._visibleGeometryChangedSchedulerHandle && (this._visibleGeometryChangedSchedulerHandle = k$2(() => {
        this.emit("visible-geometry-changed"), this._visibleGeometryChangedSchedulerHandle = null;
      })), this._updateSnappingSources(e2, t3));
    }
    get performanceInfo() {
      const e2 = { displayedNumberOfFeatures: 0, maximumNumberOfFeatures: 0, totalNumberOfFeatures: 0, core: null, index: 0, nodes: this._nodeId2Meta.size, "Total GPU Memory Estimate": (this._gpuMemoryEstimate / 1048576).toFixed(1) + "MB", "Geometry Memory Estimate": (this._geoMemoryEstimate / 1048576).toFixed(1) + "MB", "Texture Memory Estimate": (this._texMemoryEstimate / 1048576).toFixed(1) + "MB", "Unloaded Memory Estimate": (this.unloadedMemory / 1048576).toFixed(1) + "MB" };
      return null != this._memCache && (e2.MemCache = Math.round(100 * this._memCache.hitRate) + "% hit"), this._controller && (this._idbCacheEnabled && (e2.IDBCache = Math.round(100 * this._idbCache.getHitRate()) + "% hit"), this._controller.updateStats(e2)), e2;
    }
    get test() {
      const e2 = this, t3 = (e3) => {
        this._nodeColorOverride = e3, this._invalidateAllSymbols();
      };
      return { controller: this._controller, labeler: this._labeler, get visibleObjectIds() {
        const t4 = [];
        return e2._forAllFeatures((e3) => (t4.push(e3), I.CONTINUE), null, E$1.VISIBLE_ONLY), t4.sort((e3, t5) => e3 - t5), t4;
      }, get numNodes() {
        return e2._nodeId2Meta.size;
      }, get loadedNodes() {
        return Array.from(e2._nodeId2Meta.keys()).sort((e3, t4) => e3 - t4);
      }, setNodeColorOverride: t3, setNodeColoring: (e3) => {
        if ("client-nodes" === e3)
          t3((e4, t4) => {
            e4.index < 0 ? (t4[0] = 1, t4[1] = 0, t4[2] = 0) : (t4[0] = 1, t4[1] = 1, t4[2] = 1);
          });
        else
          t3(null);
      } };
    }
    getNodeOpacityByIndex(e2) {
      const t3 = this._nodeId2Meta.get(e2);
      return this.getNodeOpacity(t3);
    }
    getNodeOpacity(e2) {
      return null != e2 ? this._collection.getMaterial(e2.objectHandle).objectOpacity : 0;
    }
    isNodeFullyFadedIn(e2) {
      return this._crossfadeHelper.isNodeFullyFadedIn(e2);
    }
    getNodeCrossfadeMetaData(e2) {
      return this._nodeId2Meta.get(e2);
    }
    markNodeToRemove(e2) {
      this._controller && this._controller.markNodeToRemove(e2);
    }
    removeMarkedNodes() {
      this._controller && this._controller.removeMarkedNodes();
    }
    foreachCrossfadeNode(e2) {
      this._nodeId2Meta.forEach((t3, i5) => e2(i5, t3));
    }
    fadeNode(e2, t3, i5) {
      if (!this.nodeCrossfadingEnabled)
        return;
      const s3 = this._nodeId2Meta.get(e2);
      null != s3 && this._crossfadeHelper.fadeNode(e2, s3, t3, i5);
    }
    setNodeOpacityByIndex(e2, t3) {
      const i5 = this._nodeId2Meta.get(e2);
      null != i5 && this._setNodeOpacity(i5, t3);
    }
    _setNodeOpacity(e2, t3) {
      this._collection.updateMaterial(e2.objectHandle, (e3) => e3.objectOpacity = t3), this._setNodeEdgeOpacity(e2, t3);
    }
    _setNodeEdgeOpacity(e2, t3) {
      if (null == this._edgeView || !e2.cachedEdgeMaterials)
        return;
      kt(e2.cachedEdgeMaterials, t3);
      const i5 = e2.objectHandle;
      this._edgeView.hasObject(i5) && this._edgeView.updateAllComponentOpacities(i5, t3).catch((e3) => jt(e3, this.i3slayer.title));
    }
    get hasModifications() {
      return this._isIntegratedMesh && null != this._layerClippingArea || this._modifications && this._modifications.length > 0;
    }
    updateNodeModificationStatus(e2) {
      const t3 = e2.length;
      if (!this.hasModifications || t3 <= 0 || true !== this._i3sWasmLoaded)
        return;
      const i5 = this.uid, s3 = Lt(e2);
      if (null != s3) {
        const t4 = { context: i5, buffer: s3.buffer };
        L$1(t4);
        const r2 = new Float64Array(s3.buffer);
        e2.forAll((e3, t5) => {
          const i6 = r2[t5], s4 = A$2(i6);
          e3.imModificationImpact = s4, s4 !== n$6.Unmodified && this._controller.invalidateGeometryVisibility(e3.index);
        });
      }
    }
    notifyUpdate() {
      this.notifyChange("updating");
    }
    notifyLODUpdate() {
      this._controller.notifyLODUpdate();
    }
    isUpdating() {
      return !(!this._controller || !this._controller.updating) || !!this._visibleGeometryChangedSchedulerHandle || null != this._labeler && this._labeler.updating || this._crossfadeHelper?.updating || this._i3sWasmLoaded instanceof Promise || this._asyncModuleLoading > 0 || null != this._elevationTask && this._elevationTask.running;
    }
    trackSnappingSources(e2) {
      const t3 = { events: e2, fetchEdgeLocations: async (e3, t4, i5) => {
        const s3 = this._nodeId2Meta.get(e3);
        if (null == s3)
          throw new Error("invalid-node");
        const { origin: r2, buffer: o4 } = await this._collection.extractEdgeInformation(s3.objectHandle, t4, i5);
        return this._snappingLocationsApplyElevation(s3, o4, r2), { type: "components", objectIds: s3.featureIds, locations: o4, origin: r2 };
      }, remove: () => {
        z(this._snappingSourcesTrackers, t3);
      } };
      return this._snappingSourcesTrackers.push(t3), this._nodeId2Meta.forEach((t4, i5) => {
        if (null == t4)
          return;
        const s3 = this._controller.getRenderMbs(t4.node);
        null != s3 && e2.add(i5, s3);
      }), t3;
    }
    _snappingLocationsApplyElevation(e2, t3, i5) {
      if (!e2.elevationOffsets || this.elevationInfo.mode === Bt.Absolute)
        return;
      const s3 = t3.position0, r2 = t3.position1, o4 = t3.componentIndex, a3 = n$4(), n3 = n$4(), l2 = (e3, t4) => {
        u$1(e3, e3, i5), this.view.renderCoordsHelper.worldUpAtPosition(e3, n3), u$1(e3, e3, g$3(n3, n3, t4)), e$a(e3, e3, i5);
      };
      for (let d2 = 0; d2 < s3.count; d2++) {
        const t4 = e2.elevationOffsets[o4.get(d2)];
        s3.getVec(d2, a3), l2(a3, t4), s3.setVec(d2, a3), r2.getVec(d2, a3), l2(a3, t4), r2.setVec(d2, a3);
      }
    }
    _updateSnappingSources(e2, t3) {
      const { index: i5 } = e2.node, s3 = this._controller.getRenderMbs(e2.node);
      if (null != s3)
        for (const r2 of this._snappingSourcesTrackers)
          t3 !== wt.REMOVE && t3 !== wt.UPDATE || r2.events.remove(i5), t3 !== wt.ADD && t3 !== wt.UPDATE || r2.events.add(i5, s3);
    }
  };
  return e$1([y$1()], o3.prototype, "_hasLoadedPBRTextures", void 0), e$1([y$1()], o3.prototype, "_asyncModuleLoading", void 0), e$1([y$1()], o3.prototype, "_visibleGeometryChangedSchedulerHandle", void 0), e$1([y$1()], o3.prototype, "view", void 0), e$1([y$1()], o3.prototype, "i3slayer", void 0), e$1([y$1()], o3.prototype, "_controller", void 0), e$1([y$1()], o3.prototype, "_labeler", void 0), e$1([y$1()], o3.prototype, "updating", void 0), e$1([y$1()], o3.prototype, "suspended", void 0), e$1([y$1()], o3.prototype, "contentVisible", null), e$1([y$1({ readOnly: true })], o3.prototype, "legendEnabled", null), e$1([y$1()], o3.prototype, "holeFilling", void 0), e$1([y$1(t$5)], o3.prototype, "updatingProgress", void 0), e$1([y$1()], o3.prototype, "updatingProgressValue", null), e$1([y$1()], o3.prototype, "hasTexturesOrVertexColors", null), e$1([y$1()], o3.prototype, "rendererTextureUsage", null), e$1([y$1()], o3.prototype, "elevationOffset", null), e$1([y$1()], o3.prototype, "elevationInfo", null), e$1([y$1({ type: Boolean })], o3.prototype, "slicePlaneEnabled", void 0), e$1([y$1()], o3.prototype, "supportedTextureEncodings", null), e$1([y$1()], o3.prototype, "uncompressedTextureDownsamplingEnabled", null), e$1([y$1({ type: [f$1] })], o3.prototype, "_modifications", void 0), e$1([y$1({ readOnly: true })], o3.prototype, "clientGeometry", null), e$1([y$1()], o3.prototype, "elevationRange", null), e$1([y$1()], o3.prototype, "_elevationTask", void 0), e$1([y$1({ readOnly: true })], o3.prototype, "_usePBR", null), o3 = e$1([c$3(yt)], o3), o3;
};
function jt(e2, t2) {
  b$2(e2) || vt.warn("Error while processing edges. Edges on this layer might not display correctly", t2, e2);
}
var wt;
!function(e2) {
  e2[e2.ADD = 0] = "ADD", e2[e2.REMOVE = 1] = "REMOVE", e2[e2.UPDATE = 2] = "UPDATE";
}(wt || (wt = {}));
const St = i$7(), At = u$3(), Tt = u$3(), Dt = H(), Rt = [0, 0, 0, 0], Nt = new u$4([0, 0, 0, 0]), Ft = V(0, 0, 0, 0);
function Vt(e2) {
  if (null == e2)
    return false;
  const t2 = e2.metallicRoughness;
  return t2 && t2.baseColorTextureId >= 0 || t2 && t2.metallicRoughnessTextureId >= 0 || e2.normalTextureId >= 0 || e2.emissiveTextureId >= 0 || e2.occlusionTextureId >= 0;
}
function Pt(e2) {
  return "geometryData" in e2;
}
function Ht(e2) {
  return null != e2 && t$9(e2.data);
}
function Ut(e2, t2) {
  let i5 = 1024 + e2.interleavedVertexData.byteLength + (e2.indices ? e2.indices.byteLength : 0) + e2.positionData.data.byteLength + e2.positionData.indices.byteLength;
  if (null != t2)
    for (const s3 of t2)
      null != s3 && t$9(s3.data) && (i5 += s3.data.byteLength);
  return i5;
}
function Gt(e2, t2) {
  return t2.byteSize > xt ? (vt.warn(`Node is too big to store in IndexedDB cache: ${e2.id} (${t2.byteSize} bytes)`), false) : t2.byteSize > 0;
}
function Lt(e2) {
  if (0 === e2.length)
    return null;
  const t2 = 10 * e2.length, i5 = new Float64Array(t2);
  return e2.forAll((e3, t3) => {
    let s3 = e3.serviceObb;
    null == s3 && (s3 = Dt, r$7(s3.center, e3.mbs), s3.halfSize[0] = s3.halfSize[1] = s3.halfSize[2] = e3.mbs[3]);
    const r2 = 10 * t3;
    i5[r2] = s3.center[0], i5[r2 + 1] = s3.center[1], i5[r2 + 2] = s3.center[2], i5[r2 + 3] = s3.halfSize[0], i5[r2 + 4] = s3.halfSize[1], i5[r2 + 5] = s3.halfSize[2], i5[r2 + 6] = s3.quaternion[0], i5[r2 + 7] = s3.quaternion[1], i5[r2 + 8] = s3.quaternion[2], i5[r2 + 9] = s3.quaternion[3];
  }), i5;
}
function kt(e2, t2) {
  e2.forEach((e3) => e3.opacity = t2);
}
var Bt;
!function(e2) {
  e2[e2.Absolute = 0] = "Absolute", e2[e2.RelativeToGround = 1] = "RelativeToGround", e2[e2.OnTheGround = 2] = "OnTheGround";
}(Bt || (Bt = {}));
const qt = n$4(), zt = i$7(), Kt = "elevation-change";
function Wt(e2) {
  return (t2) => {
    if (e2.immediate)
      return e2.immediate.schedule(t2);
    throw console.error("Error no immediate schudler"), new Error("cant find immediate scheduler");
  };
}
export {
  Et as E,
  I,
  E$1 as a,
  c$1 as c
};
