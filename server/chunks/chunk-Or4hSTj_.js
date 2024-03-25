import { q9 as U, dh as i$3, ku as t$2, aJ as n$4, rK as O$1, di as C$1, yx as c$3, yy as D$1, iw as S, aG as u$2, aW as n$5, ds as o$4, nq as n$6, aV as e$2, aX as y, a_ as c$4, bZ as S$1, c0 as w$1, cb as C$2, ce as d$1, cc as m, c8 as u$4, lX as e$3, yz as h$3, yA as F$1, yB as x, kU as e$4, eB as t$3, b2 as l$1, m5 as h$4, dc as H$1, aT as s$2, fB as n$7, cm as e$6, h_ as I$1, fL as I$2, g8 as l$3, m6 as A, o6 as i$4, gs as l$4, kL as t$4, yC as L$1, xa as ye, og as G$1, yD as o$5, el as E$1, aO as s$3, g7 as m$1, cU as s$4, b6 as u$5, he as O$2, b$ as u$6, ez as t$5, bW as h$5, bJ as c$5, yE as ue, o3 as L$2, m7 as r$1, b0 as has, yF as oe, yG as ne, bX as P$1, kx as t$6, yH as J, yI as B, cd as b$1, yJ as g, yK as r$3, pq as o$6, nB as o$7, fA as P, nt as A$1, cr as q$1, yL as i$5, fF as o$8, aH as O$3, yM as t$7, yN as he, yO as e$9, yP as T, yQ as e$a, vk as t$8, yR as r$4, im as e$b, qF as c$6, po as I$3, pk as n$9, fr as e$c, pl as s$6, aN as K, eH as r$5, pp as d, l_ as Z, bC as L$3, xn as u$7, nj as D$4, nk as Q, xi as O$4, pb as S$2, kt as E$2, xj as F$2, w_ as de, ee as i$6, wh as s$7, nu as S$3, yS as k, yT as me, eW as I$4, rN as n$a, yU as A$2, yV as p$1, yW as v, yX as A$3, yY as fe, yZ as q, bQ as V, e3 as v$1, eF as B$1, hd as t$9, eE as e$d, nQ as g$1, aF as e$e, xd as Y$1, y_ as V$1 } from "./chunk-ejFG4zJ0.js";
import { x as x$1, f as f$1 } from "./chunk-m3sjKNXT.js";
import { a as a$4 } from "./chunk-tcpOk1v2.js";
import { a as a$3, s as s$5, R, e as e$7, D as D$2, Y, b as D$3, c as b, C as C$3, M } from "./chunk-n_TfoHHo.js";
import { f } from "./chunk-F8GT-pDR.js";
import { k as ke, u as u$3, l as l$2 } from "./chunk-KrpK7L1w.js";
import { e as e$5, j, w as w$2, L as L$4, A as A$4 } from "./chunk-6ji-DoVP.js";
import { r as r$2, c as c$7 } from "./chunk-LITpsmk3.js";
import { n as n$8 } from "./chunk-qr0t-oSA.js";
import { e as e$8 } from "./chunk-ItRUmXQG.js";
function e$1(e2, n3 = false) {
  return e2 <= U ? n3 ? new Array(e2).fill(0) : new Array(e2) : new Uint8Array(e2);
}
function u$1(t2, e2, r2) {
  const n3 = t$2(24);
  return (i4) => {
    let u2 = i4.meta.featureExtents;
    if (null == u2) {
      u2 = new Float64Array(6 * i4.meta.featureIds.length), i4.meta.featureExtents = u2;
      for (let t3 = 0; t3 < u2.length; t3 += 6)
        u2[t3] = Number.POSITIVE_INFINITY;
    }
    const l2 = new Float64Array(u2.buffer, 6 * i4.index * Float64Array.BYTES_PER_ELEMENT, 6);
    return l2[0] === Number.POSITIVE_INFINITY && (c$2(i4.index, r2, i4.meta.objectHandle, n3, 0), n$4(n3, e2, 0, n3, t2, 0, 8) ? (O$1(l2, C$1), c$3(l2, n3, 0, 8)) : O$1(l2, D$1)), l2;
  };
}
function c$2(r2, o4, n3, a3, m2) {
  const s3 = o4.getComponentAabb(n3, r2, p), f2 = o4.getObjectTransform(n3);
  for (let i4 = 0; i4 < 8; ++i4)
    I[0] = 1 & i4 ? s3[0] : s3[3], I[1] = 2 & i4 ? s3[1] : s3[4], I[2] = 4 & i4 ? s3[2] : s3[5], S(I, I, f2.rotationScale), u$2(I, I, f2.position), a3[m2++] = I[0], a3[m2++] = I[1], a3[m2++] = I[2];
  return a3;
}
const l = 24, p = i$3(), I = n$5();
class r extends o$4 {
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
    for (let o4 = 0; o4 < e2.length; o4++) {
      const r3 = e2[o4], s3 = r3.objectId, n3 = this._map.get(s3);
      n3 ? (t2.add(s3), r3 !== n3 && (e2[o4] = n3), n3.refCount || (n3.refCount = 0), ++n3.refCount) : (r3.refCount = 1, this._map.set(s3, r3));
    }
    const r2 = t2.size > 0 ? e2.filter((e3) => !t2.has(e3.objectId)) : e2;
    r2.length > 0 && this.emit("change", { added: r2, removed: [] });
  }
  removeMany(e2) {
    const t2 = [];
    for (const r2 of e2) {
      const e3 = r2.objectId, o4 = this._map.get(e3);
      null != o4 && (!o4.refCount || --o4.refCount <= 0) && (this._map.delete(e3), t2.push(r2));
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
    return n$6(this._map, (t2) => !!e2(t2) && (r2 = t2, true)), r2;
  }
  forEach(e2) {
    this._map.forEach((t2) => e2(t2));
  }
}
let i$2 = class i extends o$4 {
  constructor(e2) {
    super(), this._limit = e2, this._all = new r(), this._active = new a$2(this), this._pending = /* @__PURE__ */ new Map(), this._handle = this._all.on("change", (e3) => this._handleChanges(e3));
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
    let i4 = e2.added;
    if (s3 < e2.added.length) {
      i4 = new Array(), h$2.reset(s3 / e2.added.length);
      for (const t3 of e2.added)
        h$2.sample() ? i4.push(t3) : this._pending.set(t3.objectId, t3);
    }
    const n3 = s3 - i4.length;
    n3 > 0 && this._pending.size > 0 && (h$2.reset(n3 / this._pending.size), this._pending.forEach((e3) => {
      h$2.sample() && (i4.push(e3), this._pending.delete(e3.objectId));
    })), this._active.addAndRemove(i4, t2);
  }
};
let n$3 = class n {
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
const h$2 = new n$3();
let a$2 = class a {
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
    return n$6(this._map, (t2) => !!e2(t2) && (s3 = t2, true)), s3;
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
let w = class extends S$1 {
  get updating() {
    return this._graphicsCore?.updating ?? false;
  }
  constructor(e2) {
    super(e2), this.loadedGraphics = new i$2(5e4), this.slicePlaneEnabled = false, this._renderingInfo = { symbol: new w$1() }, this._featuresMap = /* @__PURE__ */ new Map();
  }
  initialize() {
    const e2 = this.view.basemapTerrain;
    this._graphicsCore = new ke({ owner: this, layer: this.layer, preferredUpdatePolicy: C$2.ASYNC, elevationFeatureExpressionEnabled: false, graphicSymbolSupported: false, getRenderingInfoWithoutRenderer: true, hasZ: true, hasM: false, componentFactories: { deconflictor: (e3) => this.view.deconflictor.addGraphicsOwner(e3), labeler: (e3, t2) => this.view.labeler.addGraphicsOwner(e3, t2, { emptySymbolLabelSupported: true, elevationInfoOverride: { mode: "absolute-height", offset: 0 }, disablePlacement: { logEntityDescription: "3D Object Scene Layer features" } }), scaleVisibility: (t2, r2) => new u$3({ graphicsCoreOwner: this, layer: this.layer, queryGraphicUIDsInExtent: r2, graphicsCore: t2, basemapTerrain: e2, layerScaleEnabled: false }) } }), this._graphicsCore.initializePromise.then(() => this._graphicsCore.startCreateGraphics()).catch(() => {
    }), this.addHandles(d$1(() => this.layer.labelingInfo, (e3, t2) => {
      m(e3, t2) && this._graphicsCore.updateLabelingInfo();
    }));
  }
  destroy() {
    this._graphicsCore = u$4(this._graphicsCore), this.loadedGraphics = u$4(this.loadedGraphics), this.view = null;
  }
  addNodeMeta(e2, t2) {
    let r2 = 0;
    const o4 = e2.filteredIds, s3 = this.view.spatialReference, i4 = [];
    for (let a3 = 0; a3 < e2.featureIds.length; a3++) {
      const p2 = e2.featureIds[a3];
      let c2 = null == o4;
      if (o4 && r2 < o4.length && p2 === o4[r2] && (c2 = true, r2++), !this._enabledForFeatureInNode(e2, a3))
        continue;
      const h3 = this._featuresMap.get(p2);
      if (h3) {
        h3.components.push(new G(e2, a3)), this._updateLabelPosition(p2);
        continue;
      }
      const l2 = t2(a3, e2), d2 = e$4(0, 0, 0, s3), u2 = { objectId: p2, uid: e$3(), attributes: l2, visible: c2, geometry: d2 }, m2 = new D(u2, d2);
      m2.components.push(new G(e2, a3)), this._featuresMap.set(p2, m2), this._updateLabelGeometry(p2), i4.push(u2);
    }
    this.loadedGraphics.addMany(i4);
  }
  updateLabelPositions(e2) {
    const t2 = this.view.renderCoordsHelper;
    this._forEachGraphic(e2, (r2, o4, s3) => {
      const i4 = this._graphicsCore.getGraphics3DGraphicById(o4.uid);
      null != i4 && this._updateLabelGeometry(e2.featureIds[r2]) && i4.alignWithAbsoluteElevation(s3.z ?? 0, t2, false);
    });
  }
  setNodeMetaAttributes(e2, t2) {
    const r2 = new Array();
    this._forEachGraphic(e2, (s3, i4) => {
      const a3 = t2(s3, e2);
      h$3(i4.attributes, a3) || (i4.attributes = a3, r2.push(i4.uid));
    }), this._graphicsCore.updateLabelingInfo(r2);
  }
  applyFilterChange(e2) {
    this._forEachFeature(e2, (t2, r2, o4) => {
      if (!this._enabledForFeatureInNode(e2, t2)) {
        const o5 = e2.featureIds[t2];
        switch (this._removeFeature(r2, e2, t2)) {
          case F.REMOVED:
            this.loadedGraphics.removeManyByObjectId([o5]);
            break;
          case F.MODIFIED:
            this._updateLabelPosition(o5);
        }
        return;
      }
      const s3 = r2.graphic, i4 = s3.visible;
      i4 !== o4 && (s3.visible = o4, C.graphic = s3, C.property = "visible", C.oldValue = i4, C.newValue = o4, this._graphicsCore.graphicUpdateHandler(C));
    });
  }
  removeNodeMeta(e2) {
    const t2 = [];
    this._forEachGraphic(e2, (r2) => {
      const o4 = e2.featureIds[r2], s3 = this._featuresMap.get(o4);
      if (!s3)
        return;
      switch (this._removeFeature(s3, e2, r2)) {
        case F.MODIFIED:
          this._updateLabelPosition(o4);
          break;
        case F.REMOVED:
          t2.push(o4);
      }
    }), this.loadedGraphics.removeManyByObjectId(t2);
  }
  _removeFeature(e2, t2, o4) {
    const s3 = e2.components.length;
    return F$1(e2.components, (e3) => !(e3.meta === t2 && e3.index === o4)), 0 === e2.components.length ? (this._featuresMap.delete(t2.featureIds[o4]), F.REMOVED) : s3 !== e2.components.length ? F.MODIFIED : F.UNMODIFIED;
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
    const r2 = t2.geometry, o4 = this.view.spatialReference, i4 = this.view.renderCoordsHelper, a3 = r2.x, n3 = r2.y, p2 = r2.z ?? 0, c2 = t2.components.length, h3 = t$2(c2 * l);
    let d2 = 0;
    for (const { meta: s3, index: l$12 } of t2.components)
      c$2(l$12, this.collection, s3.objectHandle, h3, d2), d2 += l;
    return n$4(h3, i4.spatialReference, 0, h3, o4, 0, h3.length / 3), O$1(O, C$1), c$3(O, h3), r2.x = (O[0] + O[3]) / 2, r2.y = (O[1] + O[4]) / 2, r2.z = O[5], !x(r2.x, a3) || !x(r2.y, n3) || !x(r2.z, p2);
  }
  _forEachGraphic(e2, t2) {
    this._forEachFeature(e2, (r2, { graphic: o4, geometry: s3 }, i4) => {
      this._enabledForFeatureInNode(e2, r2) && t2(r2, o4, s3, i4);
    });
  }
  _forEachFeature(e2, t2) {
    let r2 = 0;
    for (let o4 = 0; o4 < e2.featureIds.length; o4++) {
      const s3 = this._featuresMap.get(e2.featureIds[o4]);
      let i4 = null == e2.filteredIds;
      e2.filteredIds && e2.filteredIds[r2] === e2.featureIds[o4] && (i4 = true, r2++), s3 && t2(o4, s3, i4);
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
e$2([y()], w.prototype, "view", void 0), e$2([y()], w.prototype, "layer", void 0), e$2([y()], w.prototype, "collection", void 0), e$2([y()], w.prototype, "loadedGraphics", void 0), e$2([y()], w.prototype, "overrides", void 0), e$2([y()], w.prototype, "updating", null), e$2([y()], w.prototype, "slicePlaneEnabled", void 0), e$2([y()], w.prototype, "_graphicsCore", void 0), w = e$2([c$4("esri.views.3d.layers.I3SMeshViewLabeler")], w);
const C = { graphic: null, property: null, oldValue: null, newValue: null };
var F;
!function(e2) {
  e2[e2.UNMODIFIED = 0] = "UNMODIFIED", e2[e2.MODIFIED = 1] = "MODIFIED", e2[e2.REMOVED = 2] = "REMOVED";
}(F || (F = {}));
const O = i$3(), L = w;
class e extends t$3 {
  constructor(t2, e2, r2, s3, o4, i4, p2) {
    super(t2, 0, 0, 0, e2), this.gpuMB = r2, this.geometryMB = s3, this.textureMB = o4, this.unloadedMB = i4, this.idbHitRate = p2;
  }
}
let h$1 = class h extends h$4 {
  constructor(s3) {
    super("SceneLayerWorker", "process", { process: (s4) => [s4.geometryBuffer], project: (s4) => [s4.positions.buffer], transformNormals: (s4) => [s4.normals.buffer] }, s3, { hasInitialize: true });
  }
  setModifications(s3, e2, o4, t2) {
    const r2 = { context: s3, modifications: a$1(e2, o4, t2), isGeodetic: t2.isGeographic };
    this.broadcast(r2, "setModifications");
  }
  setLegacySchema(s3, e2) {
    const o4 = JSON.stringify(e2);
    return this.broadcast({ context: s3, jsonSchema: o4 }, "setLegacySchema");
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
const n$2 = new l$1({ deallocator: null }), u = n$5();
function a$1(e2, o4, t2) {
  n$2.clear();
  let h3 = 1 / 0, a3 = 1 / 0, c2 = -1 / 0, f2 = -1 / 0, l2 = false;
  for (const d2 of o4) {
    const e3 = "clip" === d2.type ? e$5.Inside : "mask" === d2.type ? e$5.Outside : e$5.Replace, o5 = d2.geometry;
    let m3 = (s3) => s3;
    if (o5.spatialReference) {
      if (!H$1(o5.spatialReference, t2)) {
        s$2.getLogger("esri.views.3d.layers.I3SMeshWorkerHandle").warn("Can't project modification polygon into layer spatial reference, ignoring modification");
        continue;
      }
      m3 = (s3) => (n$7(s3, o5.spatialReference, u, t2), u);
    } else
      o5.hasZ || (u[2] = 0, m3 = (s3) => (u[0] = s3[0], u[1] = s3[1], u));
    l2 = l2 || e3 === e$5.Outside, n$2.push(e3), n$2.push(o5.rings.length);
    for (const s3 of o5.rings) {
      n$2.push(s3.length);
      for (const e4 of s3) {
        const s4 = m3(e4);
        n$2.push(s4[0]), n$2.push(s4[1]), n$2.push(s4[2]), h3 = Math.min(h3, s4[0]), a3 = Math.min(a3, s4[1]), c2 = Math.max(c2, s4[0]), f2 = Math.max(f2, s4[1]);
      }
    }
  }
  if (null != e2)
    if (l2) {
      const s3 = 1e-4;
      n$2.push(e$5.Inside), n$2.push(2), n$2.push(4), n$2.push(h3 - s3), n$2.push(a3 - s3), n$2.push(0), n$2.push(c2 + s3), n$2.push(a3 - s3), n$2.push(0), n$2.push(c2 + s3), n$2.push(f2 + s3), n$2.push(0), n$2.push(h3 - s3), n$2.push(f2 + s3), n$2.push(0), n$2.push(4), n$2.push(e2[0]), n$2.push(e2[1]), n$2.push(0), n$2.push(e2[2]), n$2.push(e2[1]), n$2.push(0), n$2.push(e2[2]), n$2.push(e2[3]), n$2.push(0), n$2.push(e2[0]), n$2.push(e2[3]), n$2.push(0);
    } else
      n$2.push(e$5.Outside), n$2.push(1), n$2.push(4), n$2.push(e2[0]), n$2.push(e2[1]), n$2.push(0), n$2.push(e2[2]), n$2.push(e2[1]), n$2.push(0), n$2.push(e2[2]), n$2.push(e2[3]), n$2.push(0), n$2.push(e2[0]), n$2.push(e2[3]), n$2.push(0);
  n$2.push(e$5.Finished);
  const m2 = new Float64Array(n$2.length);
  for (let s3 = 0; s3 < n$2.length; ++s3)
    m2[s3] = n$2.at(s3);
  return m2;
}
var n$1, o$3, E;
!function(n3) {
  n3[n3.VISIBLE_ONLY = 0] = "VISIBLE_ONLY", n3[n3.ALL = 1] = "ALL", n3[n3.QUERYABLE = 2] = "QUERYABLE";
}(n$1 || (n$1 = {})), function(n3) {
  n3[n3.EXIT = 0] = "EXIT", n3[n3.CONTINUE = 1] = "CONTINUE", n3[n3.SKIP = 2] = "SKIP";
}(o$3 || (o$3 = {})), function(n3) {
  n3[n3.Absolute = 0] = "Absolute", n3[n3.RelativeToGround = 1] = "RelativeToGround", n3[n3.OnTheGround = 2] = "OnTheGround";
}(E || (E = {}));
let s$1 = class s {
  constructor() {
    this.ids = /* @__PURE__ */ new Set();
  }
};
class h2 {
  constructor({ collection: t2, forAllFeatures: e2, forAllFeaturesOfNode: i4 }) {
    this._highlights = [], this._collection = t2, this._forAllFeatures = e2, this._forAllFeaturesOfNode = i4;
  }
  destroy() {
    this._highlights.forEach((t2) => this._releaseSet(t2)), this._highlights = null;
  }
  acquireSet() {
    const i4 = new s$1();
    this._highlights.push(i4);
    const h3 = e$6(() => {
      this._highlights && (this._releaseSet(i4), I$1(this._highlights, i4));
    });
    return { set: i4, handle: h3 };
  }
  setFeatureIds(t2, e2) {
    e2.forEach((e3) => t2.ids.add(e3)), this._initializeSet(t2);
  }
  _initializeSet(t2) {
    this._forAllFeatures((e2, s3, h3) => (t2.ids.has(e2) && this._collection.addComponentHighlight(h3.objectHandle, s3), o$3.CONTINUE));
  }
  _releaseSet(t2) {
    this._forAllFeatures((e2, s3, h3) => (t2.ids.has(e2) && this._collection.removeComponentHighlight(h3.objectHandle, s3), o$3.CONTINUE));
  }
  objectCreated(t2) {
    this._highlights.forEach((e2) => {
      this._forAllFeaturesOfNode(t2, (s3, h3) => (e2.ids.has(s3) && this._collection.addComponentHighlight(t2.objectHandle, h3), o$3.CONTINUE));
    });
  }
  objectDeleted(t2) {
    this._collection.clearHighlights(t2.objectHandle);
  }
}
let a2 = class extends S$1 {
  constructor(t2, e2, s3, r2) {
    super({}), this._updateExtent = e2, this._updateNode = s3, this._getElevationMode = r2, this.running = false, this._extentSet = new l$2(), this._nodeSet = /* @__PURE__ */ new Set();
    const i4 = this._taskPriority, n3 = t2.registerTask(this._taskPriority, this);
    this.addHandles(n3), this._task = n3, this._lastTaskPriority = i4;
  }
  get _taskPriority() {
    const t2 = this._getElevationMode();
    return t2 && t2 === E.RelativeToGround ? I$2.ELEVATION_ALIGNMENT_SCENE : I$2.ELEVATION_ALIGNMENT;
  }
  _updateTaskPriority() {
    const t2 = this._taskPriority;
    t2 !== this._lastTaskPriority && (this._task.priority = t2, this._lastTaskPriority = t2);
  }
  normalizeCtorArgs() {
    return {};
  }
  addExtent(t2) {
    this._extentSet.add(t2), this._updateTaskPriority(), this.running = true;
  }
  schedule(t2) {
    this._nodeSet.add(t2), this._updateTaskPriority(), this.running = true;
  }
  remove(t2) {
    this._nodeSet.delete(t2), this._updateRunning();
  }
  runTask(t2) {
    const e2 = this._extentSet;
    for (t2.run(() => e2.merge(t2)); !e2.empty && !t2.done; ) {
      const s4 = this._updateExtent(e2.pop());
      null != s4 && s4.forAll((t3) => this.schedule(t3)), t2.madeProgress();
    }
    if (t2.done)
      return;
    const s3 = this._nodeSet;
    for (const r2 of s3)
      if (s3.delete(r2), this._updateNode(r2), t2.madeProgress(), t2.done)
        break;
    this._updateRunning();
  }
  _updateRunning() {
    this.running = this._nodeSet.size > 0 || this._extentSet.size > 0;
  }
};
e$2([y()], a2.prototype, "running", void 0), a2 = e$2([c$4("esri.views.3d.layers.i3s.I3SAsyncElevationUpdater.ts")], a2);
let o$2 = class o {
  constructor() {
    this.lodCrossfadeSignedDuration = 0;
  }
};
let i$1 = class i2 {
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
  _startNodeFading(e2, d2, o4) {
    0 === this._numFadingNodes && (this._preRenderFrameTaskHandle = A({ preRender: (e3) => this._updateAllNodeFading(e3) }), this._view.notifyLODUpdate()), null == e2.lodCrossfadeProgress && (this._numFadingNodes++, this._view.notifyUpdate()), e2.lodCrossfadeSignedDuration = o4, e2.lodCrossfadeProgress = d2;
  }
  _updateAllNodeFading(e2) {
    const s3 = this._view.nodeCrossfadingEnabled;
    this._view.foreachCrossfadeNode((d2, o4) => {
      if (null != d2?.lodCrossfadeProgress) {
        const i4 = d2.lodCrossfadeSignedDuration, t2 = i4 > 0 ? this._view.fullOpacity : 0, r2 = e2.deltaTime / i4, a3 = d2.lodCrossfadeProgress + Math.abs(r2), n3 = !s3 || a3 >= 1 || 0 === i4, l2 = t2 - (n3 ? 0 : i4 > 0 ? 1 : -1) * (1 - a3);
        n3 ? (this.stopNodeFading(d2), i4 < 0 && this._view.markNodeToRemove(o4)) : d2.lodCrossfadeProgress = a3, this._view.setNodeOpacityByIndex(o4, l2);
      }
    }), this._view.removeMarkedNodes();
  }
  stopAllNodeFading() {
    this._view.foreachCrossfadeNode((e2, s3) => {
      if (null != e2?.lodCrossfadeProgress) {
        this.stopNodeFading(e2);
        const d2 = e2.lodCrossfadeSignedDuration;
        d2 < 0 && this._view.markNodeToRemove(s3);
        const o4 = d2 > 0 ? this._view.fullOpacity : 0;
        this._view.setNodeOpacityByIndex(s3, o4);
      }
    }), this._view.removeMarkedNodes();
  }
  fadeNode(e2, s3, o4, i4) {
    null == this._currentFrameStartTime && (this._currentFrameStartTime = Date.now());
    const r2 = this._view, a3 = r2.nodeCrossfadingEnabled, n3 = o4 === a$3.FadeIn ? r2.fullOpacity : 0, l2 = a3 ? i4 ? o4 === a$3.FadeIn ? r2.lodCrossfadeinDuration : r2.lodCrossfadeoutDuration : r2.lodCrossfadeUncoveredDuration : 0, h3 = this._view.getNodeOpacityByIndex(e2);
    if (a3 && h3 !== n3 && l2 > 0) {
      const e3 = 1 - Math.abs(n3 - h3);
      this._startNodeFading(s3, e3, t$1(o4) * l2);
    } else
      this.stopNodeFading(s3), this._view.setNodeOpacityByIndex(e2, n3), o4 === a$3.FadeOut && this._view.removeNode(e2);
  }
  isNodeFullyFadedIn(e2) {
    const s3 = this._view.getNodeCrossfadeMetaData(e2);
    return null == s3 || null == s3.lodCrossfadeProgress && this._view.getNodeOpacityByIndex(e2) === this._view.fullOpacity;
  }
};
function t$1(e2) {
  return e2 === a$3.FadeIn ? 1 : -1;
}
let o$1 = class o2 {
  constructor(e2) {
    this.type = i$4.I3S, this._needVerticalOffset = false, this.layerUid = e2.layerUid, this.sublayerUid = e2.sublayerUid, this._collection = e2.collection, this._traverseNodeHierarchy = e2.traverseNodeHierarchy, this.slicePlaneEnabled = e2.slicePlaneEnabled, this.isGround = e2.isGround;
  }
  updateElevationAlignState(t2, i4) {
    this._needVerticalOffset = t2 && i4 === l$4.Global;
  }
  intersect(e2, s3, o4, a3, d2, u2) {
    const b2 = u2 ?? false, f2 = e2.results, h3 = e2.options.store === t$4.ALL, m2 = e2.ray.direction, y2 = e2.tolerance;
    let p2 = (e3) => e3, R2 = (e3) => e3;
    const g2 = L$1(e2.verticalOffset ?? (this._needVerticalOffset ? 0 : null));
    null != e2.verticalOffset && null != g2 && (p2 = (e3) => g2.applyToMbs(e3), R2 = (e3) => g2.applyToObb(e3));
    const I2 = (n3, l2) => {
      if (0 === n3.childrenLoaded)
        return false;
      const d3 = n3.serviceObbInRenderSR?.isValid ? n3.serviceObbInRenderSR : null;
      return !(d3 && !R2(d3).intersectRay(o4, m2, y2)) && (!l2 || !d3 && ye(n3.serviceMbsInRenderSR) && !c$1(p2(n3.serviceMbsInRenderSR), o4, m2, y2) || null != n3.geometryObbInRenderSR && !R2(n3.geometryObbInRenderSR).intersectRay(o4, m2, y2) || this._collection.intersect(l2, o4, a3, y2, g2, (t2, l3, c2, d4) => {
        if (l3 < 0 || null != s3 && !s3(o4, a3, l3))
          return;
        const u3 = (e3) => {
          const r2 = new o$5(this.layerUid, this.sublayerUid, n3.index, t2, d4);
          e3.set(this.type, r2, l3, c2);
        };
        if (this.isGround && (null == f2.ground.dist || l3 < f2.ground.dist) && u3(f2.ground), !e2.options.isFiltered && ((null == f2.min.dist || l3 < f2.min.dist) && u3(f2.min), (null == f2.max.dist || l3 > f2.max.dist) && u3(f2.max), h3)) {
          const t3 = G$1(e2.ray);
          u3(t3), e2.results.all.push(t3);
        }
      }, b2), true);
    };
    this._traverseNodeHierarchy(I2);
  }
};
function c$1(e2, t2, i4, r2 = 0) {
  const s3 = e2[3] + r2, n3 = t2[0] - e2[0], l2 = t2[1] - e2[1], o4 = t2[2] - e2[2], c2 = i4[0], a3 = i4[1], d2 = i4[2], u2 = c2 * n3 + a3 * l2 + d2 * o4;
  return u2 * u2 - (c2 * c2 + a3 * a3 + d2 * d2) * (n3 * n3 + l2 * l2 + o4 * o4 - s3 * s3) >= 0;
}
const o3 = 14;
class i3 {
  constructor(t2, s3, r2 = o3) {
    this._version = r2, this._db = null, this._quotaReductionPromise = null, this._gcCounter = 0, this._hit = 0, this._miss = 0, this._destroyed = false, this.gcFrequency = 50, this.maxByteSize = E$1.GIGABYTES, this.quotaReductionFactor = 0.2, this._dbName = t2, this._storeName = s3;
  }
  init() {
    return Promise.resolve().then(() => {
      const e2 = indexedDB.open(this._dbName, this._version);
      return e2.onupgradeneeded = (t2) => {
        const s3 = e2.result, r2 = e2.transaction, o4 = s3.objectStoreNames.contains(this._storeName) ? r2.objectStore(this._storeName) : s3.createObjectStore(this._storeName), i4 = s3.objectStoreNames.contains("last_access") ? r2.objectStore("last_access") : s3.createObjectStore("last_access");
        i4.indexNames.contains("date") || i4.createIndex("date", "date", { unique: false }), i4.indexNames.contains("byteSize") || i4.createIndex("byteSize", "byteSize", { unique: false }), t2.oldVersion < this._version && (o4.clear(), i4.clear());
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
      return Promise.reject(new s$3("indexedb:not-initialized", "IndexedDB Cache is not initialized"));
    return (null != this._quotaReductionPromise ? this._quotaReductionPromise : Promise.resolve()).then(() => this._put(e2, s3)).catch((t2) => {
      if (t2 && "QuotaExceededError" === t2.name)
        return null == this._quotaReductionPromise && (this._quotaReductionPromise = this._getCacheSize().then((e3) => this._removeLeastRecentlyAccessed(s3.byteSize + Math.ceil(e3 * this.quotaReductionFactor))), this._quotaReductionPromise.then(() => this._quotaReductionPromise = null, () => this._quotaReductionPromise = null)), this._quotaReductionPromise.then(() => this._put(e2, s3));
      throw t2;
    }).then(() => {
      this._gcCounter--, this._gcCounter < 0 && null != this._db && (this._gcCounter = this.gcFrequency, this._getCacheSize().then((e3) => this._removeLeastRecentlyAccessed(e3 - this.maxByteSize)));
    });
  }
  get(e2, t2) {
    const o4 = this._db;
    if (null == o4)
      return Promise.resolve(void 0);
    let i4 = null;
    return Promise.resolve().then(() => {
      const r2 = o4.transaction(this._storeName, "readonly");
      i4 = m$1(t2, () => {
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
      return null != i4 && i4.remove(), t3;
    }).catch(() => {
      ++this._miss, s$4(t2), null != i4 && i4.remove();
    });
  }
  remove(e2) {
    const t2 = this._db;
    return null == t2 ? Promise.resolve() : Promise.resolve().then(async () => {
      const s3 = t2.transaction([this._storeName, "last_access"], "readwrite"), r2 = s3.objectStore(this._storeName), o4 = s3.objectStore("last_access"), i4 = r2.delete(e2), a3 = o4.delete(e2);
      await Promise.all([c(i4), c(a3), n2(s3)]);
    });
  }
  _put(e2, t2) {
    const s3 = this._db;
    if (null == s3)
      return Promise.resolve();
    const r2 = s3.transaction([this._storeName, "last_access"], "readwrite"), o4 = r2.objectStore(this._storeName), i4 = r2.objectStore("last_access"), a3 = o4.put(t2, e2), l2 = i4.put({ date: Date.now(), byteSize: t2.byteSize }, e2);
    return Promise.all([c(a3), c(l2), n2(r2)]);
  }
  _removeLeastRecentlyAccessed(e2) {
    if (e2 <= 0 || !this._db)
      return Promise.resolve();
    const t2 = this._db.transaction([this._storeName, "last_access"], "readwrite"), s3 = t2.objectStore(this._storeName), r2 = t2.objectStore("last_access");
    let o4 = 0;
    const i4 = r2.index("date").openCursor(null, "next");
    return i4.onsuccess = () => {
      const t3 = i4.result;
      null != t3 && (null != t3.value.byteSize && (o4 += t3.value.byteSize), s3.delete(t3.primaryKey), r2.delete(t3.primaryKey), o4 < e2 && t3.continue());
    }, n2(t2);
  }
  _getCacheSize() {
    const e2 = this._db;
    if (null == e2)
      return Promise.resolve(0);
    const t2 = e2.transaction("last_access"), s3 = t2.objectStore("last_access");
    let r2 = 0;
    const o4 = s3.index("byteSize").openKeyCursor();
    return o4.onsuccess = () => {
      const e3 = o4.result;
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
        const i4 = /* @__PURE__ */ new Map();
        this._data = i4, t.set(s3, i4);
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
const Ct = "esri.views.3d.layers.I3SMeshView3D", xt = () => s$2.getLogger(Ct), Ot = [1, 1, 1, 1];
class Et extends o$2 {
  constructor(e2, t2, i4, s3, r2, o4, n3, a3, l2) {
    super(), this.node = e2, this.featureIds = t2, this.objectHandle = i4, this.cachedRendererVersion = s3, this.attributeInfo = r2, this.material = o4, this.textures = n3, this.anchorIds = a3, this.anchors = l2, this.cachedElevationAnchors = null, this.cachedEdgeMaterials = new Array(), this.edgeMemoryUsage = 0;
  }
}
var jt;
!function(e2) {
  e2[e2.CastShadows = 4] = "CastShadows", e2[e2.Pickable = 5] = "Pickable";
}(jt || (jt = {}));
const Rt = 23, wt = 100 * E$1.MEGABYTES, St = (t2) => {
  let o4 = class extends t2 {
    constructor(...e2) {
      super(e2), this._needsNormals = true, this._updatingHandles = new h$5(), this._nodeId2Meta = /* @__PURE__ */ new Map(), this._nodeId2MetaReloading = /* @__PURE__ */ new Map(), this._i3sWasmLoaded = false, this._snappingSourcesTrackers = [], this._hasLoadedPBRTextures = false, this._asyncModuleLoading = 0, this._addTasks = /* @__PURE__ */ new Map(), this._currentRenderer = null, this._rendererVersion = 0, this._colorVariable = null, this._opacityVariable = null, this._rendererFields = null, this._symbologyFields = null, this._symbologyOverride = null, this._symbologyOverrideFields = null, this._symbolInfos = /* @__PURE__ */ new Map(), this._visibleGeometryChangedSchedulerHandle = null, this._hasComponentData = false, this._hasVertexColors = false, this._nodeColorOverride = null, this.updating = true, this.holeFilling = "auto", this._hasColors = false, this._hasTextures = false, this._hasData = false, this.slicePlaneEnabled = false, this._modifications = new Array(), this.ignoresMemoryFactor = false, this._layerUrl = "", this._cacheKeySuffix = null, this._planetRadiusInGlobalMode = 0, this._elevationTask = null, this._filters = [], this._arcade = null, this._tmpAttributeOnlyGraphic = new c$5(null, null, {}), this._crossfadeHelper = new i$1(this);
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
      return ue(this._currentRenderer) ? this._usePBR || this._hasLoadedPBRTextures ? s$5.AllTexturesPBR : s$5.AllTextures : this._usePBR || this._hasLoadedPBRTextures ? s$5.GeometryTexturesPBR : s$5.GeometryTextures;
    }
    get elevationOffset() {
      const e2 = null != this.i3slayer ? this.i3slayer.elevationInfo : null;
      if (null != e2 && "absolute-height" === e2.mode) {
        const t3 = L$2(this.i3slayer.spatialReference), i4 = r$1(e2.unit);
        return (e2.offset ?? 0) * i4 / t3;
      }
      return 0;
    }
    get elevationInfo() {
      const e2 = null != this.i3slayer ? this.i3slayer.elevationInfo : null;
      if (null == e2)
        return new Kt(E.Absolute, 0);
      const t3 = L$2(this.i3slayer.spatialReference), i4 = r$1(e2.unit), s3 = (e2.offset ?? 0) * i4 / t3;
      switch (e2.mode) {
        case "absolute-height":
          return new Kt(E.Absolute, s3);
        case "relative-to-ground":
          return new Kt(E.RelativeToGround, s3);
        case "on-the-ground":
          return new Kt(E.OnTheGround, 0);
        default:
          return new Kt(E.Absolute, 0);
      }
    }
    get supportedTextureEncodings() {
      return R(this.view._stage.renderView.capabilities);
    }
    get uncompressedTextureDownsamplingEnabled() {
      const e2 = this.view?.qualitySettings.sceneService.uncompressedTextureDownsamplingEnabled, t3 = 0 == (this.supportedTextureEncodings & e$7.DDS_S3TC);
      return e2 && t3;
    }
    get clientGeometry() {
      return this.i3sOverrides.geometryOverrides;
    }
    get elevationRange() {
      const e2 = this._nodeId2Meta, t3 = new e$d();
      for (const i4 of e2.values()) {
        if (null == i4)
          continue;
        const { node: { serviceMbsInIndexSR: e3 } } = i4, [s3, r2, o5, n3] = e3;
        t3.expandElevationRangeValues(o5 - n3, o5 + n3);
      }
      return t3.elevationRangeValid ? t3 : null;
    }
    get fullExtent() {
      return this.i3slayer.fullExtent;
    }
    initialize() {
      const e2 = has("enable-feature:idb-mock-cache");
      this._idbCache = e2 ? new s2(this.view, e2) : new i3("esri-scenelayer-cache", "geometries"), this._preLoadBasis(), this.addResolvingPromise(this.i3slayer.indexInfo);
      const t3 = this.view.resourceController, i$12 = t3.memoryController;
      this.i3sOverrides = new D$2({ view: this.view, layer: this.i3slayer, memoryController: i$12 }), this._worker = new h$1(e$8(t3)), this.addResolvingPromise(this._worker.promise);
      const s$12 = this.i3slayer.store;
      this._worker.setLegacySchema(this.uid, s$12.defaultGeometrySchema), oe(this.i3slayer), ne(this.i3slayer, this.view), this._layerUrl = this.i3slayer.parsedUrl.path, this._controller = new Y({ layerView: this, worker: this._worker }), this._gpuMemoryEstimate = 0, this._texMemoryEstimate = 0, this._geoMemoryEstimate = 0, this._stage = this.view._stage, this._collection = this._stage.renderView.componentObjectCollection, this.resetHighlights();
      const r2 = s$12.defaultGeometrySchema;
      if (this._isIntegratedMesh || !r2)
        this._hasComponentData = false;
      else {
        const e3 = r2.featureAttributes;
        this._hasComponentData = !!(e3 && e3.faceRange && e3.id);
      }
      this._hasVertexColors = null != (r2?.vertexAttributes.color ?? null) && !this.i3slayer.cachedDrawingInfo?.color, this._isIntegratedMesh || (this._edgeView = this._stage.renderer.ensureEdgeView());
      const o5 = this.view.resourceController.memoryController.newCache(`sl-${this.uid}`, (e3) => this._deleteComponentObject(e3));
      this._memCache = o5;
      const n3 = this._controller, a3 = this._nodeId2Meta, l2 = this._nodeId2MetaReloading, d2 = (e3) => {
        const t4 = n3.index;
        if (!t4)
          return;
        const i4 = t4.rootNode;
        if (!i4)
          return;
        const s3 = (t5) => {
          const i5 = t5.index, s4 = a3.get(i5) || l2.get(i5);
          return e3(t5, s4?.objectHandle ?? null);
        };
        t4.traverse(i4, s3);
      };
      this._intersectionHandler = new o$1({ layerUid: this.layerUid, sublayerUid: this.sublayerUid, collection: this._collection, slicePlaneEnabled: this.slicePlaneEnabled, isGround: this._isIntegratedMesh, traverseNodeHierarchy: d2 }), this._updatingHandles.add(() => this.layerUid, (e3) => this._intersectionHandler.layerUid = e3), this._updatingHandles.add(() => this.sublayerUid, (e3) => this._intersectionHandler.sublayerUid = e3), this._elevationProvider = new x$1({ view: this.view, layerElevationSource: this, intersectionHandler: this._intersectionHandler }), this._hasLoadedPBRTextures = this._usePBR, this._updatingHandles.add(() => this.view.clippingArea, () => this._clippingAreaChanged(), P$1), this._updatingHandles.add(() => this.fullOpacity, (e3) => this._opacityChange(e3)), this._updatingHandles.add(() => this.slicePlaneEnabled, (e3) => this._slicePlaneEnabledChange(e3)), this._updatingHandles.add(() => this.elevationOffset, (e3, t4) => {
        this._reloadAll(t4), this._controller.invalidateVisibilityObbs();
      }), this._updatingHandles.add(() => this.elevationInfo, (e3, t4) => this._elevationInfoChanged(e3, t4), P$1), this._updatingHandles.add(() => !this.suspended && this.elevationInfo.mode !== E.Absolute, (e3, t4) => {
        e3 ? this.addHandles(this.view.basemapTerrain.on("elevation-change", ({ extent: e4 }) => this._ensureElevationTask().addExtent(e4)), Xt) : t4 && this.removeHandles(Xt);
      }, P$1), this._updatingHandles.add(() => this._usePBR, (e3) => this._updatePBR(e3));
      const c2 = () => {
        this._reloadAll(), this.clearMemCache();
      };
      this._updatingHandles.add(() => this.rendererTextureUsage, c2), this._updatingHandles.add(() => this.uncompressedTextureDownsamplingEnabled, c2), this._updatingHandles.add(() => this.contentVisible, (e3) => this._contentVisibleChanged(e3), P$1), this._updatingHandles.add(() => this.i3slayer.labelsVisible, () => this._labelingChanged(), P$1), this._updatingHandles.add(() => this.i3slayer.labelingInfo, () => this._labelingChanged(), P$1), this._updatingHandles.add(() => this._modifications, () => this._modificationsChanged(), P$1), this.addHandles([d$1(() => t$6.I3S_TREE_SHOW_TILES, (e3) => {
        if (e3 && !this._treeDebugger) {
          const e4 = this._controller.crsIndex;
          import("./chunk-GN1Bylhy.js").then(({ I3STreeDebugger: t4 }) => {
            !this._treeDebugger && t$6.I3S_TREE_SHOW_TILES && (this._treeDebugger = new t4({ lv: this, view: this.view, nodeSR: e4 }));
          });
        } else
          e3 || t$6.I3S_TREE_SHOW_TILES || (this._treeDebugger = u$4(this._treeDebugger));
      }, P$1), d$1(() => t$6.I3S_SHOW_MODIFICATIONS, () => this._showModifications(), P$1)]), this._cacheKeySuffix = J(this.i3slayer.spatialReference, this.view.renderSpatialReference), this._idbCache.init().catch((e3) => xt().warn(`Failed to initialize IndexedDB cache: ${e3}`));
      const { view: u2 } = this, { viewingMode: _, renderCoordsHelper: g2 } = u2;
      this._planetRadiusInGlobalMode = "local" === _ ? 0 : g2.referenceEllipsoid.radius;
    }
    destroy() {
      this._clearAddTasks(), this._elevationTask = u$4(this._elevationTask), this.i3sOverrides = u$4(this.i3sOverrides), this._elevationProvider && (this._elevationProvider.objectsChanged(this.getVisibleObbs()), this.view.elevationProvider.unregister(this._elevationProvider), this._elevationProvider = null), this._intersectionHandler && (this._stage.view.sceneIntersectionHelper.removeIntersectionHandler(this._intersectionHandler), this._intersectionHandler = null);
      const e2 = this._worker;
      e2 && (e2.destroyContext(this.uid).then(() => e2.destroy()), this._worker = null), this._removeAllNodeDataFromStage(), this._memCache = u$4(this._memCache), this._collection = null, this._stage = null, this._edgeView = null, this._labeler = u$4(this._labeler), this._treeDebugger = u$4(this._treeDebugger), this._controller = u$4(this._controller), this._highlights.destroy(), this._nodeId2Meta.clear(), this._nodeId2MetaReloading.clear(), this._crossfadeHelper = u$4(this._crossfadeHelper), this.emit("visible-geometry-changed"), this._visibleGeometryChangedSchedulerHandle && (this._visibleGeometryChangedSchedulerHandle.remove(), this._visibleGeometryChangedSchedulerHandle = null), this._updatingHandles = u$4(this._updatingHandles);
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
        return this._i3sWasmLoaded = j().then(() => {
          this._i3sWasmLoaded = true, this._modificationsChanged(), this.notifyUpdate();
        }), void this.notifyUpdate();
      if (true !== this._i3sWasmLoaded)
        return;
      const e2 = this.uid, t3 = this.i3slayer.spatialReference;
      this._worker.setModifications(e2, this._layerClippingArea, this._modifications, t3);
      const i4 = a$1(this._layerClippingArea, this._modifications, t3);
      w$2({ context: e2, modifications: i4, isGeodetic: t3.isGeographic }), this._controller.modificationsChanged();
      const s3 = this.hasModifications ? new l$1() : null;
      this._nodeId2Meta.forEach((e3, t4) => {
        null == e3 ? (this._nodeId2Meta.delete(t4), this._controller.updateLoadStatus(t4, false)) : e3.node.hasModifications ? (this._nodeId2Meta.delete(t4), this._nodeId2MetaReloading.set(t4, e3)) : null != s3 && s3.push(e3.node);
      }), this.notifyChange("elevationRange"), null != s3 && this._nodeId2MetaReloading.forEach((e3) => s3.push(e3.node)), null != s3 && s3.length > 0 && (this.updateNodeModificationStatus(s3), s3.forAll((e3) => {
        if (e3.imModificationImpact !== r$2.Culled) {
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
        const o5 = { ...t3, color: e2[s3.type] };
        this._modificationGraphics.push(new c$5({ geometry: r2, symbol: o5 }));
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
      const i4 = this._nodeId2Meta.get(e2);
      null != i4?.attributeInfo && (i4.attributeInfo.attributeData = t3, this._attributeValuesChanged(i4));
    }
    async updateAttributes(e2, t3, i4) {
      const s3 = this._nodeId2Meta.get(e2);
      null != s3 && (await this.i3sOverrides.applyAttributeOverrides(s3.featureIds, t3, i4, this._controller.requiredAttributes), s3.attributeInfo = t3, this._controller.reschedule(() => this._attributeValuesChanged(s3), i4).catch((e3) => {
        b$1(e3) || xt().warn("Error while updating attribute values. Layer might not display correctly.", e3);
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
    getVisibleObbs() {
      const e2 = new Array();
      return this._nodeId2Meta.forEach((t3) => {
        if (null != t3) {
          const i4 = this.getNodeComponentObb(t3.node);
          null != i4 && e2.push(i4);
        }
      }), e2;
    }
    getNodeComponentObb(e2) {
      const t3 = this._nodeId2Meta.get(e2.index) ?? this._nodeId2MetaReloading.get(e2.index);
      return null != t3 ? this._collection.getComponentObb(t3.objectHandle) : null;
    }
    getLoadedNodeIndices(e2) {
      this._nodeId2Meta.forEach((t3, i4) => e2.push(i4)), this._nodeId2MetaReloading.forEach((t3, i4) => e2.push(i4));
    }
    _preLoadBasis() {
      !has("disable-feature:i3s-basis") && 0 != (this.supportedTextureEncodings & e$7.Basis) && this.i3slayer.textureSetDefinitions?.some((e2) => e2.formats.some((e3) => "basis" === e3.format || "ktx2" === e3.format)) && g();
    }
    _getVertexBufferLayout(e2, t3) {
      const i4 = { hasTexture: Gt(e2.params.material), hasNormals: t3.normal, hasRegions: t3.uvRegion };
      return r$3(o$6(this._getGeometryParameters(i4)));
    }
    _getObjectIdField() {
      return this.i3slayer.objectIdField || o$7;
    }
    _getGlobalIdField() {
      return this.i3slayer.associatedLayer?.globalIdField;
    }
    _findGraphicNodeAndIndex(e2) {
      const t3 = n$8(this.i3slayer.fieldsIndex, e2.attributes, this._getObjectIdField());
      let i4 = null;
      return n$6(this._nodeId2Meta, (e3) => {
        if (null == e3)
          return false;
        const s3 = e3.featureIds.indexOf(t3);
        return -1 !== s3 && (i4 = { node: e3.node, index: s3 }, true);
      }), i4;
    }
    _getGraphicIndices(e2, t3) {
      const i4 = this._nodeId2Meta.get(e2.index);
      if (null == i4)
        return [];
      const s3 = [], r2 = this._getObjectIdField(), o5 = this.i3slayer.fieldsIndex;
      for (const n3 of t3) {
        const e3 = n$8(o5, n3.attributes, r2), t4 = i4.featureIds.indexOf(e3);
        -1 !== t4 && s3.push(t4);
      }
      return s3;
    }
    whenGraphicBounds(e2) {
      const t3 = this._findGraphicNodeAndIndex(e2);
      if (!t3)
        return Promise.reject();
      const i4 = this._getAABB(t3.node.index, t3.index);
      return null == i4 ? Promise.reject() : Promise.resolve({ boundingBox: i4, screenSpaceObjects: [] });
    }
    getAABBFromIntersectorTarget(e2) {
      return null == e2.nodeIndex || null == e2.componentIndex ? null : this._getAABB(e2.nodeIndex, e2.componentIndex);
    }
    _getAABB(e2, t3) {
      const i4 = this._nodeId2Meta.get(e2);
      if (null == i4?.featureIds || t3 >= i4.featureIds.length)
        return null;
      const s3 = i4.objectHandle, r2 = c$2(t3, this._collection, s3, t$2(24), 0), o5 = this.view.renderSpatialReference, n3 = this.view.spatialReference;
      if (!n$4(r2, o5, 0, r2, n3, 0, 8))
        return null;
      const a3 = P();
      return c$3(a3, r2, 0, 8), a3;
    }
    whenGraphicAttributes(e2, t3) {
      return A$1(this.i3slayer, e2, this._getObjectIdField(), t3, () => [...this._nodeId2Meta.values()].filter(q$1));
    }
    getGraphicFromIntersectorTarget(e2) {
      if (null == e2.nodeIndex || null == e2.componentIndex)
        return null;
      const t3 = this._nodeId2Meta.get(e2.nodeIndex);
      return null == t3?.featureIds || e2.componentIndex >= t3.featureIds.length ? null : this._createGraphic(e2.componentIndex, t3);
    }
    _getCacheKey(e2) {
      return `${this._layerUrl}/v${Rt}/${e2}${this._cacheKeySuffix}`;
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
      const i4 = this._controller.indexDepth - e2.node.level;
      this._memCache.put(this._getMemCacheKey(e2.node.index, t3), e2, e2.node.memory, i4);
    }
    loadMissingTextures(e2, t3, i4, s3) {
      const r2 = e2?.filter((e3, i5) => {
        if (0 == (e3.usage & this.rendererTextureUsage))
          return false;
        if (null == t3)
          return true;
        const s4 = D$3(e3.encodings, this.supportedTextureEncodings), r3 = t3[i5];
        return !!(null == r3?.data || s4 && r3.encoding !== s4.encoding);
      }) ?? [];
      return 0 === r2.length ? Promise.resolve(false) : i4(r2, s3).then((i5) => {
        let s4 = 0;
        for (let r3 = 0; r3 < e2.length; r3++)
          s4 < i5.length && i5[s4].id === e2[r3].id && (t3[r3] = i5[s4], s4++);
        return true;
      });
    }
    loadCachedNodeData(e2, t3, i4) {
      return this._idbCacheEnabled ? this._idbCache.get(this._getCacheKey(e2.id), t3).then((s3) => null == s3 ? null : s3.nodeVersion !== e2.version ? (this._idbCache.remove(this._getCacheKey(e2.id)), null) : (this.elevationInfo.mode === E.Absolute && (e2.geometryObbInRenderSR = O$2.fromData(s3.geometryObbData)), this.loadMissingTextures(s3.requiredTextures, s3.textureData, i4, t3).then((i5) => (i5 && this._idbCache.initialized && null != s3.textureData && (s3.byteSize = Bt(s3.transformedGeometry, s3.textureData), s3.textureData.every(kt) && qt(e2, s3) && this._idbCache.put(this._getCacheKey(e2.id), s3).catch((t4) => xt().warn(`Failed to update node with textures in IndexedDB cache: ${e2.id}: ${t4}`))), s$4(t3), s3)))) : Promise.resolve(null);
    }
    addNode(e2, t3, i4) {
      return Lt(t3) ? null == t3.geometryBuffer ? (this._addNodeMeta(e2.index, null), Promise.resolve()) : this._addData(e2, t3.attributeDataInfo, () => this._transformNode(e2, t3, i4).then((s3) => this._safeReschedule(() => {
        if (null == s3)
          return e2.hasModifications = false, this._addCachedNodeData(e2, null, i4);
        e2.hasModifications = s3.transformedGeometry.hasModifications;
        const { obb: r2, componentOffsets: o5, featureIds: n3, anchorIds: a3, anchors: l2, transformedGeometry: d2 } = s3, h3 = this._controller.crsIndex, c2 = this.view.renderSpatialReference, u2 = i$5(e2.serviceMbsInIndexSR, this.elevationOffset, h3, c2), _ = o$8($t, r2.center.x, r2.center.y, r2.center.z);
        O$3(_, _, u2);
        const g2 = new O$2(_, [r2.extents.x, r2.extents.y, r2.extents.z], t$7(r2.orientation.x, r2.orientation.y, r2.orientation.z, r2.orientation.w));
        this.elevationInfo.mode === E.Absolute && (e2.geometryObbInRenderSR = g2), t3.geometryData.componentOffsets = o5, n3 && (t3.geometryData.featureIds = Array.from(n3)), t3.geometryData.anchorIds = a3, t3.geometryData.anchors = l2;
        const m2 = { nodeVersion: e2.version, geometryData: t3.geometryData, requiredTextures: t3.requiredTextures, textureData: t3.textureData, transformedGeometry: d2, globalTrafo: u2, geometryObbData: g2.data, byteSize: Bt(d2, t3.textureData) };
        if (this._idbCacheEnabled && this._idbCache.initialized && qt(e2, m2)) {
          const t4 = null != m2.textureData ? m2.textureData.map((e3) => kt(e3) ? e3 : null) : null;
          this._idbCache.put(this._getCacheKey(e2.id), { ...m2, textureData: t4 }).catch((t5) => xt().warn(`Failed to store node in IndexedDB cache: ${e2.id}: ${t5}`));
        }
        return this._addCachedNodeData(e2, m2, i4);
      }, i4))) : Promise.reject();
    }
    getElevationRange(e2) {
      const t3 = new e$d(), i4 = this._controller, { index: s3 } = i4;
      if (!s3)
        return t3;
      const { rootNode: r2 } = s3;
      if (!r2)
        return t3;
      const o5 = this._nodeId2Meta, n3 = e2[3], a3 = i4.viewportQueries, l2 = this._planetRadiusInGlobalMode, { view: d2 } = this, { renderCoordsHelper: h3 } = d2, c2 = h3.referenceEllipsoid.radius, u2 = this._collection, _ = (i5) => {
        const { childrenLoaded: s4 } = i5;
        if (0 === s4)
          return false;
        const r3 = a3.getAndUpdateVisibilityObbInRenderSR(i5);
        let d3 = null, _2 = -1;
        if (r3) {
          if (_2 = r3.radius, !r3.intersectSphereWithMBS(e2, _2))
            return false;
        } else
          d3 = a3.getServiceMbsInRenderSR(i5), d3 && (_2 = d3[3]);
        if (_2 >= 0 && n3 >= 1 * _2)
          return null != r3 ? Zt(t3, r3, l2) : null != d3 && d3[3] >= 0 && ei(t3, d3, l2), false;
        const g2 = Jt;
        if (g2.elevationRangeMin = 1 / 0, g2.elevationRangeMax = -1 / 0, (null != r3 || null != d3) && (null != r3 ? Zt(g2, r3, l2) : null != d3 && ei(g2, d3, l2), g2.elevationRangeMin >= t3.elevationRangeMin && g2.elevationRangeMax <= t3.elevationRangeMax))
          return false;
        const m2 = o5.get(i5.index);
        if (m2) {
          const { geometryObbInRenderSR: s5 } = i5;
          if (!s5 || s5.intersectSphereWithMBS(e2)) {
            if (s5) {
              if (n3 > 0 * s5.radius)
                return Zt(t3, s5, l2), false;
            }
            const { objectHandle: e3 } = m2, i6 = u2.getObjectTransform(e3), r4 = h3.getAltitude(i6.position);
            u2.expandRangeWithComponentObjectElevationRange(e3, r4, c2, t3);
          }
        }
        return s4 - (m2 ? 1 : 0) > 0;
      };
      return s3.traverse(r2, _), t3;
    }
    computeVisibilityObb(e2) {
      return he(e2, this.view.renderSpatialReference, this._controller.crsIndex, this.i3slayer.spatialReference, this.elevationOffset, this._modifications, this.view.renderCoordsHelper.sphericalPCPF);
    }
    _transformNode(e2, t3, i4) {
      const s3 = t3.geometryData.geometries ?? [], r2 = new Array(s3.length);
      for (let f2 = 0; f2 < s3.length; ++f2)
        r2[f2] = this._getVertexBufferLayout(s3[f2], t3.geometryDescriptor);
      const o5 = e2.serviceMbsInIndexSR, n3 = this.elevationOffset, a3 = this._controller.crsIndex, l2 = this._controller.crsVertex, d2 = this.view.renderSpatialReference, h3 = e$9(o5, n3, a3), c2 = i$5(o5, n3, a3, d2), u2 = T(a3, l2), _ = T(l2, d2);
      if (null == u2 || null == _)
        return Promise.resolve(null);
      const g2 = this.i3slayer.normalReferenceFrame, m2 = t3.normalReferenceFrame ?? g2 ?? "none", p2 = { context: this.uid, geometryBuffer: t3.geometryBuffer, geometryData: t3.geometryData, geometryDescriptor: t3.geometryDescriptor, layouts: r2, localOrigin: h3, globalTrafo: c2, mbs: o5, obbData: e2.serviceObbInIndexSR?.data, elevationOffset: n3, needNormals: this._needsNormals && this._controller.isMeshPyramid, normalReferenceFrame: m2, indexToVertexProjector: u2, vertexToRenderProjector: _ };
      return this._worker.invoke(p2, i4);
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
    addCachedGPUData(e2, t3, i4) {
      if (this.elevationInfo.mode === E.Absolute && (e2.geometryObbInRenderSR = this._collection.getComponentObb(t3.objectHandle).clone()), !this._controller.isGeometryVisible(e2))
        return void this._cacheGPUData(t3);
      null != this._labeler && this._addMetaToLabeler(this._labeler, t3);
      const s3 = e2.index;
      this._addNodeMeta(s3, t3), this.updateNodeState(s3, i4), this._collection.setObjectVisibility(t3.objectHandle, true), this._updateMaterial(t3), this._setNewNodeOpacity(t3), this.elevationInfo.mode !== E.Absolute && this._ensureElevationTask().schedule(s3), this._updateEngineObject(t3), this._highlights.objectCreated(t3), null != this._treeDebugger && this._treeDebugger.update();
    }
    addCachedNodeData(e2, t3, i4, s3) {
      return this._addData(e2, i4, () => this._addCachedNodeData(e2, t3, s3));
    }
    async deleteCachedNodeData(e2) {
      if (this._idbCacheEnabled)
        return this._idbCache.remove(this._getCacheKey(e2));
    }
    async _addCachedNodeData(e2, t3, i4) {
      if (!this.contentVisible || !this._controller.isGeometryVisible(e2))
        return void this._removeNodeStageData(e2.index, this.elevationOffset, this._nodeId2MetaReloading);
      if (null == t3)
        return void this._addNodeMeta(e2.index, null);
      const s3 = this._addTasks.get(e2.index), { geometryData: r2, transformedGeometry: o5, globalTrafo: n3 } = t3;
      await this.i3sOverrides.applyAttributeOverrides(r2.featureIds, s3.attributeInfo, i4, this._controller.requiredAttributes);
      const a3 = null != t3.textureData ? t3.textureData.filter((e3) => null != e3 && 0 != (e3.usage & this.rendererTextureUsage)) : [];
      !has("disable-feature:i3s-basis") && a3.some((e3) => null != e3 && (e3.encoding === e$7.Basis || e3.encoding === e$7.KTX2)) && await g(), e2.memory = 0;
      const { componentOffsets: l2, geometries: d$12, featureIds: h3, anchorIds: c2, anchors: u2 } = r2, _ = this._collection, g$12 = d$12[0], { layout: m2, indices: p2, interleavedVertexData: f2, positionData: b2, hasColors: y2 } = o5, { material: v2, geometryParameters: I2 } = this._materialParameters(g$12, m2), w2 = l2 || new Uint32Array([0, p2 ? p2.length : f2.byteLength / m2[0].stride]), S$12 = { vertices: { data: f2, count: f2.byteLength / m2[0].stride, layoutParameters: I2 }, positionData: { positions: e$a(b2.data), indices: t$8(b2.indices) }, indices: p2, componentOffsets: w2 }, A2 = g$12.transformation ? r$4(g$12.transformation) : e$b();
      c$6(A2, n3, A2);
      const N = I$3(n$5(), A2), V2 = n$9(e$c(), A2), F2 = this.view.renderSpatialReference, P2 = this.view.basemapTerrain.spatialReference, U2 = O$2.fromData(t3.geometryObbData).center, L2 = [1, 1, 1];
      f$1(U2, F2, L2, P2) || xt().errorOnce("Unsupported coordinate system for IM overlay");
      const B2 = n$5();
      n$7(U2, F2, B2, P2);
      const q2 = e$c();
      s$6(q2, V2);
      const z = n$5();
      S(z, K(z, U2, N), q2);
      const K$1 = B2[0] - z[0] * L2[0], $ = B2[1] - z[1] * L2[1], Q2 = _.createObject({ toMapSpace: r$5(K$1, $, L2[0], L2[1]), geometry: S$12, obb: O$2.fromData(t3.geometryObbData), transform: { position: N, rotationScale: V2 } }), X = I2.textureCoordinates === d.Atlas, { textures: Y2, texturePromise: J2 } = this._initMaterialAndTextures(Q2, v2, a3, X);
      e2.memory += this._memEstimateGeometryAdded(Q2), e2.memory += Y2.reduce((e3, t4) => e3 + (null != t4 ? this._memEstimateTextureAdded(t4) : 0), 0);
      const Z2 = !!v2.hasParametersFromSource, ie = "blend" !== v2.alphaMode && v2.metallicRoughness.baseColorFactor[3] >= 1, se = new Et(e2, h3, Q2, this._getInvalidRendererVersion(), s3.attributeInfo, { hasParametersFromSource: Z2, isOpaque: ie }, Y2, c2, u2);
      s3.meta = se, !this._hasTextures && t3.requiredTextures?.some(({ usage: e3 }) => 0 != (e3 & s$5.ColorTextures)) && (this._hasTextures = true), this._hasData = true, this._hasColors = this._hasColors || y2, this._hasTextures = this._hasTextures || !!e2.resources.texture, this.notifyChange("hasTexturesOrVertexColors");
      const re = this.slicePlaneEnabled;
      return Promise.all([this._addOrUpdateEdgeRendering(se), J2]).then(([t4, s4]) => (null != t4 && t4.updateObjectVisibility(se.objectHandle, false).catch((e3) => At(e3, this.i3slayer.title)), this._safeReschedule(() => {
        const i5 = this._addTasks.get(e2.index);
        if (!i5)
          return;
        if (this._addNodeMeta(e2.index, se), i5.meta = null, !this.contentVisible)
          return void this._removeNodeStageData(e2.index, this.elevationOffset);
        _.setObjectVisibility(Q2, true), null != t4 && t4.updateObjectVisibility(se.objectHandle, true).catch((e3) => At(e3, this.i3slayer.title)), se.attributeInfo = i5.attributeInfo;
        const s5 = se.cachedRendererVersion !== this._rendererVersion, r3 = re !== this.slicePlaneEnabled;
        this._updateElevationOffsets(se);
        const o6 = se.elevationOffsets;
        this._updateComponentData(se);
        const n4 = this._applyFiltersToNode(se);
        (s5 || null != t4 && (r3 || n4 || o6)) && this._addOrUpdateEdgeRendering(se), null != this._labeler && this._addMetaToLabeler(this._labeler, se), this._visibleGeometryChanged(se, Dt.ADD), this._highlights.objectCreated(se), this._updateMaterial(se), this._setNewNodeOpacity(se), null != this._treeDebugger && this._treeDebugger.update();
      }, i4))).catch((e3) => {
        throw null != s3.meta && (this._cacheGPUData(s3.meta), s3.meta = null), e3;
      });
    }
    _addNodeMeta(e2, t3) {
      if (this._removeNodeStageData(e2, this.elevationOffset, this._nodeId2MetaReloading), this._nodeId2Meta.has(e2)) {
        xt().error("Removing duplicated node");
        const t4 = this._nodeId2Meta.get(e2);
        null != t4 && this._deleteComponentObject(t4);
      } else
        this._controller.updateLoadStatus(e2, true);
      null != t3 && (t3.lodCrossfadeProgress = null, this.nodeCrossfadingEnabled && Wt(t3.cachedEdgeMaterials, 0)), this._nodeId2Meta.set(e2, t3), this.notifyChange("elevationRange");
    }
    _updateElevationOffsets(e2) {
      const t3 = this.view.renderSpatialReference, i4 = this._controller.crsIndex, s3 = this.elevationInfo, r2 = this.view.basemapTerrain, o5 = r2.spatialReference, n3 = s3.mode;
      if (null == t3 || null == o5 || n3 === E.Absolute)
        return void (e2.elevationOffsets = null);
      const a3 = this._collection.getObjectTransform(e2.objectHandle);
      e2.elevationOffsets = e2.elevationOffsets ?? [];
      const l2 = $t, d2 = Qt, h3 = n3 === E.OnTheGround, c2 = this.view.renderCoordsHelper, u2 = e2.featureIds.length, _ = (() => {
        if (e2.cachedElevationAnchors)
          return e2.cachedElevationAnchors;
        const s4 = t$2(3 * u2);
        e2.cachedElevationAnchors = s4;
        for (let r3 = 0; r3 < u2; r3++) {
          const n4 = 3 * r3, h4 = e2.anchorIds?.indexOf(r3) ?? -1;
          e2.anchors && h4 >= 0 ? (o$8(l2, e2.anchors[3 * h4], e2.anchors[3 * h4 + 1], e2.anchors[3 * h4 + 2]), u$2(l2, l2, Z(e2.node.serviceMbsInIndexSR)), n$7(l2, i4, l2, o5), s4[n4] = l2[0], s4[n4 + 1] = l2[1], s4[n4 + 2] = c2.getAltitude(l2)) : (this._collection.getComponentAabb(e2.objectHandle, r3, d2, true), o$8(l2, (d2[0] + d2[3]) / 2, (d2[1] + d2[4]) / 2, d2[2]), S(l2, l2, a3.rotationScale), u$2(l2, l2, a3.position), s4[n4 + 2] = c2.getAltitude(l2), n$7(l2, t3, l2, o5), s4[n4] = l2[0], s4[n4 + 1] = l2[1]);
        }
        return s4;
      })(), g2 = s3.offset, m2 = e2.elevationOffsets, p2 = (e3, t4) => {
        const i5 = h3 ? _[3 * e3 + 2] : 0;
        m2[e3] = g2 + (null != t4 ? t4 - i5 : 0);
      };
      r2.getElevations(_, u2, p2);
    }
    _ensureElevationTask() {
      return null != this._elevationTask || (this._elevationTask = new a2(this.view.resourceController.scheduler, (e2) => {
        const t3 = this._controller.updateElevationChanged(e2, this.view.basemapTerrain.spatialReference);
        return null != t3 ? t3.filterInPlace((e3) => null != this._nodeId2Meta.get(e3)) : null;
      }, (e2) => {
        const t3 = this._nodeId2Meta.get(e2);
        this._nodeElevationAlignmentChanged(t3);
      }, () => this.elevationInfo?.mode)), this._elevationTask;
    }
    _elevationInfoChanged(e2, t3) {
      const i4 = e2.mode !== E.Absolute, s3 = !!t3 && t3 !== e2 && t3.mode !== E.Absolute;
      this._intersectionHandler.updateElevationAlignState(i4, this.view.state.viewingMode), i4 && !s3 && this._controller.removeAllGeometryObbs(), this._nodeId2Meta.forEach((e3) => this._nodeElevationAlignmentChanged(e3));
    }
    _nodeElevationAlignmentChanged(e2) {
      null != e2 && (this._updateElevationOffsets(e2), this._updateComponentData(e2), this._updateEdgeRendering(e2), null != this._labeler && this._labeler.updateLabelPositions(e2), this._updateSnappingSources(e2, Dt.UPDATE));
    }
    _safeReschedule(e2, t3) {
      return s$4(t3), this._controller.reschedule(e2, t3);
    }
    _materialParameters(e2, t3) {
      const i4 = null != e2.params.material ? e2.params.material : b(), s3 = t3.some((e3) => "uvRegion" === e3.name), r2 = t3.some((e3) => "normalCompressed" === e3.name), o5 = Gt(i4);
      return { geometryParameters: this._getGeometryParameters({ hasTexture: o5, hasNormals: r2, hasRegions: s3 }), material: i4 };
    }
    _initMaterialAndTextures(e2, t3, i4, s3) {
      const r2 = this._stage.renderView, o5 = i4.map((e3) => C$3(e3, t3, s3, r2));
      this._stage.addMany(o5);
      let n3 = null;
      return this._collection.updateMaterial(e2, (e3) => {
        n3 = M(e3, t3, o5, i4, this.view._stage.renderView.textureRepository, { rendererTextureUsage: this.rendererTextureUsage, usePBR: this._usePBR, isIntegratedMesh: this._isIntegratedMesh, slicePlaneEnabled: this.slicePlaneEnabled, viewSpatialReference: this.view.spatialReference }), this._updateMaterialOverlay(e3);
      }), { textures: o5, texturePromise: n3 };
    }
    _getGeometryParameters(e2) {
      return { textureCoordinates: e2.hasTexture ? e2.hasRegions ? d.Atlas : d.Default : d.None, colors: this._hasVertexColors, hasNormals: e2.hasNormals && this._needsNormals, needsNormals: this._needsNormals };
    }
    _addData(e2, t3, i4) {
      let s3 = this._addTasks.get(e2.index);
      return s3 ? s3.attributeInfo = t3 : (s3 = { ...L$3(), attributeInfo: t3, meta: null }, this._addTasks.set(e2.index, s3), i4().then(s3.resolve, s3.reject).then(() => this._addTasks.delete(e2.index)).catch((t4) => {
        throw this._addTasks.delete(e2.index), t4;
      })), s3.promise;
    }
    _clearAddTasks() {
      this._addTasks.forEach((e2) => {
        null != e2.meta && (this._cacheGPUData(e2.meta), e2.meta = null);
      }), this._addTasks.clear();
    }
    _clippingAreaChanged() {
      const e2 = this.view.renderSpatialReference, t3 = this.i3slayer.spatialReference, i4 = u$5();
      this._renderClippingArea = u$7(this.view.clippingArea, i4, e2) ? i4 : null;
      const s3 = u$5();
      this._layerClippingArea = u$7(this.view.clippingArea, s3, t3) ? s3 : null, this._filterChange(), this._controller && this._controller.updateClippingArea(this.view.clippingArea), this._isIntegratedMesh && this._modificationsChanged();
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
        null != e3 && this._applyFiltersToNode(e3) && (this._addOrUpdateEdgeRendering(e3), this._visibleGeometryChanged(e3, Dt.UPDATE));
      });
    }
    getFilters() {
      const e2 = [], t3 = this._renderClippingArea;
      return null != t3 && e2.push((e3, i4) => this._boundingRectFilter(e3, i4, t3)), e2;
    }
    addSqlFilter(e2, t3, i4) {
      if (null != t3) {
        const s3 = t3.fieldNames;
        e2.push((e3, r2) => this._sqlFilter(e3, r2, t3, s3, i4));
      }
    }
    _sqlFilter(e2, t3, i4, s3, r2) {
      const o5 = {}, n3 = this._createLayerGraphic(o5), a3 = this.i3slayer.objectIdField, l2 = t3.featureIds, d2 = t3.attributeInfo?.attributeData;
      s3.every((e3) => e3 === a3 || null != d2?.[e3]) && D$4(e2, l2, (e3) => {
        o5[a3] = l2[e3];
        for (const i5 of s3)
          i5 !== a3 && (o5[i5] = d2 ? Q(d2[i5], e3) : null);
        try {
          return i4.testFeature(n3);
        } catch (t4) {
          return r2(t4), false;
        }
      });
    }
    _boundingRectNodeTest(e2, t3) {
      return a$4(e2.node.serviceMbsInIndexSR, this._controller.crsIndex, Ut, this.view.renderSpatialReference), O$4(t3, Ut);
    }
    _boundingRectFeatureTest(e2, t3, i4) {
      return this._collection.getComponentAabb(e2.objectHandle, t3, Tt), S$2(Tt, Nt), E$2(i4, Nt);
    }
    _boundingRectFilter(e2, t3, i4) {
      const s3 = this._collection, r2 = this._boundingRectNodeTest(t3, i4);
      if (r2 === F$2.INSIDE)
        return;
      if (r2 === F$2.OUTSIDE)
        return void (e2.length = 0);
      const o5 = s3.getComponentCount(t3.objectHandle);
      if (o5.invisible + o5.visible !== t3.featureIds.length)
        return;
      const n3 = this._transformClippingArea(Vt, i4, t3.objectHandle);
      D$4(e2, t3.featureIds, (e3) => this._boundingRectFeatureTest(t3, e3, n3));
    }
    _transformClippingArea(e2, t3, i4) {
      const s3 = this._collection.getObjectTransform(i4), r2 = s3.position, o5 = s3.rotationScale;
      return e2[0] = (t3[0] - r2[0]) / o5[0], e2[1] = (t3[1] - r2[1]) / o5[4], e2[2] = (t3[2] - r2[0]) / o5[0], e2[3] = (t3[3] - r2[1]) / o5[4], e2;
    }
    _addOrUpdateEdgeRendering(e2, t3 = true) {
      const i4 = this._edgeView;
      if (null == i4)
        return Promise.resolve(null);
      const s3 = e2.objectHandle, r2 = i4.hasObject(s3), { hasEdges: o5, perFeatureEdgeMaterials: n3 } = this._getFilteredEdgeMaterials(e2), a3 = { hasSlicePlane: this.slicePlaneEnabled };
      if (o5 && r2) {
        if (this.nodeCrossfadingEnabled) {
          Wt(n3, this.getNodeOpacity(e2));
        }
        return i4.updateAllComponentMaterials(s3, n3, a3, t3).catch((e3) => At(e3, this.i3slayer.title)), i4.updateObjectVisibility(s3, true).catch((e3) => At(e3, this.i3slayer.title)), i4.updateAllVerticalOffsets(s3, e2.elevationOffsets).catch((e3) => At(e3, this.i3slayer.title)), Promise.resolve(i4);
      }
      return o5 && !r2 ? this._collection.addEdges(s3, i4, n3, a3).then((t4) => (e2.edgeMemoryUsage = t4, e2.node.memory += t4, i4.updateAllVerticalOffsets(s3, e2.elevationOffsets).catch((e3) => At(e3, this.i3slayer.title)), i4)) : (!o5 && r2 && (e2.node.memory -= e2.edgeMemoryUsage, e2.edgeMemoryUsage = 0, i4.removeObject(s3)), Promise.resolve(null));
    }
    _applyFiltersToNode(e2) {
      return !!this._applyFiltersToNodeComponents(e2) && (null != this._labeler && this._labeler.applyFilterChange(e2), true);
    }
    _applyFiltersToNodeComponents(e2) {
      const t3 = this._collection, i4 = t3.getComponentCount(e2.objectHandle), s3 = null != e2.filteredIds, r2 = 0 === i4.invisible;
      if (t3.setAllComponentVisibilities(e2.objectHandle, "all"), 0 === this._filters.length)
        return e2.filteredIds = null, !r2;
      if (this._updateCachedFilteredIds(e2), s3 && e2.filteredIds === e2.featureIds)
        return !r2;
      const o5 = this._computeFilteredComponentIndices(e2);
      return t3.setAllComponentVisibilities(e2.objectHandle, o5), true;
    }
    _updateCachedFilteredIds(e2) {
      null != e2.filteredIds && e2.appliedFilters === this._filters || (e2.filteredIds = this._computeFilteredIds(e2), e2.appliedFilters = this._filters);
    }
    _computeFilteredIds(e2) {
      const t3 = e2.featureIds.slice();
      for (const i4 of this._filters)
        if (i4(t3, e2), 0 === t3.length)
          break;
      return t3.length === e2.featureIds.length ? e2.featureIds : t3;
    }
    _computeFilteredComponentIndices(e2) {
      const t3 = new Array(), i4 = e2.filteredIds;
      return null != i4 && e2.featureIds.forEach((e3, s3) => {
        i4[t3.length] === e3 && t3.push(s3);
      }), t3;
    }
    _removeAllNodeDataFromStage(e2 = this.elevationOffset) {
      this._nodeId2Meta.forEach((t3, i4) => this._removeNodeStageData(i4, e2)), this._nodeId2MetaReloading.forEach((t3, i4) => this._removeNodeStageData(i4, e2, this._nodeId2MetaReloading)), this._elevationTask = u$4(this._elevationTask);
    }
    removeNode(e2) {
      const t3 = this.elevationOffset;
      this._removeNodeStageData(e2, t3), this._removeNodeStageData(e2, t3, this._nodeId2MetaReloading), null != this._elevationTask && this._elevationTask.remove(e2);
    }
    _removeNodeStageData(e2, t3, i4 = this._nodeId2Meta) {
      i4.has(e2) && this._controller.updateLoadStatus(e2, false);
      const s3 = i4.get(e2);
      null != s3 ? (this._collection.setObjectVisibility(s3.objectHandle, false), null != this._edgeView && this._edgeView.hasObject(s3.objectHandle) && this._edgeView.updateObjectVisibility(s3.objectHandle, false).catch((e3) => At(e3, this.i3slayer.title)), this._visibleGeometryChanged(s3, Dt.REMOVE), null != this._labeler && this._labeler.removeNodeMeta(s3), i4.delete(e2), this._highlights.objectDeleted(s3), i4 === this._nodeId2Meta ? (this._cacheGPUData(s3, t3), this.nodeCrossfadingEnabled && this._crossfadeHelper.stopNodeFading(s3)) : this._deleteComponentObject(s3), null != this._treeDebugger && this._treeDebugger.update()) : i4.delete(e2);
    }
    _deleteComponentObject(e2) {
      if (null != this._edgeView && this._edgeView.removeObject(e2.objectHandle), this._memEstimateGeometryRemoved(e2.objectHandle), this._collection.destroyObject(e2.objectHandle), e2.textures)
        for (const t3 of e2.textures)
          this._memEstimateTextureRemoved(t3), this._stage.remove(t3);
    }
    updateNodeState(e2, t3) {
      const i4 = this._nodeId2Meta.get(e2);
      null != i4 && this._collection.updateMaterial(i4.objectHandle, (e3) => e3.polygonOffsetEnabled = t3 === c$7.Hole);
    }
    updateNodeIndex(e2, t3) {
      if (this._nodeId2Meta.has(e2)) {
        const i5 = this._nodeId2Meta.get(e2);
        this._nodeId2Meta.delete(e2), this._nodeId2Meta.set(t3, i5), this.notifyChange("elevationRange");
      }
      const i4 = this._nodeId2MetaReloading.get(e2);
      i4 && (this._nodeId2MetaReloading.delete(e2), this._nodeId2MetaReloading.set(t3, i4));
    }
    _invalidateAllSymbols() {
      this._rendererVersion = de(this._rendererVersion, 1), this._controller && this._controller.requestUpdate();
    }
    _getInvalidRendererVersion() {
      return de(this._rendererVersion, -1);
    }
    async _rendererChange(e2) {
      if (this._currentRenderer = e2, this.notifyChange("rendererTextureUsage"), this._rendererVersion = de(this._rendererVersion, 1), this._rendererFields = null, this._colorVariable = null, this._opacityVariable = null, this._invalidateAllSymbols(), e2 && (this._rendererFields = await e2.getRequiredFields(this.i3slayer.fieldsIndex)), this._updateSymbologyFields(), !this._arcade && e2 && "arcadeRequired" in e2 && e2.arcadeRequired && (this._arcade = await i$6()), e2 && "visualVariables" in e2 && e2.visualVariables)
        for (const t3 of e2.visualVariables)
          "color" === t3.type ? this._colorVariable = t3 : "opacity" === t3.type ? this._opacityVariable = t3 : xt().warn(`Unsupported visual variable type for 3D Object Scene Services: ${t3.type}`);
      if (e2)
        for (const t3 of e2.getSymbols())
          "mesh-3d" !== t3.type && xt().error(`Symbols of type '${t3.type}' are not supported for 3D Object Scene Services.`);
      this._controller && this._controller.requestUpdate();
    }
    _getCachedEdgeMaterials(e2) {
      return this._hasComponentData && e2.cachedRendererVersion !== this._rendererVersion && this._updateCachedRendererData(e2), e2.cachedEdgeMaterials;
    }
    _getComponentParameters(e2) {
      this._hasComponentData && e2.cachedRendererVersion !== this._rendererVersion && this._updateCachedRendererData(e2);
      const t3 = e2.cachedSymbology;
      return (i4, s3) => {
        const r2 = 5 * i4;
        if (s$7(s3.externalColor, t3[r2] / 255, t3[r2 + 1] / 255, t3[r2 + 2] / 255, t3[r2 + 3] / 255), null != this._stage.renderView.objectAndLayerIdRenderHelper) {
          const t4 = e2.featureIds[i4], r3 = S$3(this.view.map, this.layerUid);
          this._stage.renderView.objectAndLayerIdRenderHelper.setUidToObjectAndLayerId(t4, t4, this.layerId, this.layerUid + "_" + this.sublayerId, this.layerPopupEnabledAndHasTemplate && !r3, e2.node.resources.attributes, i4, this.sublayerId), s3.objectAndLayerIdColor = this._stage.renderView.getObjectAndLayerIdColor({ graphicUid: t4, layerUid: this.layerUid + "_" + this.sublayerId });
        }
        s3.externalColorMixMode = t3[r2 + 4] & (1 << jt.CastShadows) - 1, s3.castShadows = 0 != (t3[r2 + 4] & 1 << jt.CastShadows), s3.pickable = 0 != (t3[r2 + 4] & 1 << jt.Pickable), s3.elevationOffset = e2.elevationOffsets?.[i4] ?? 0;
      };
    }
    _getSymbolInfo(e2, t3) {
      const i4 = e2?.getSymbol(t3, { arcade: this._arcade });
      if (!(i4 instanceof k))
        return null;
      const s3 = i4.id;
      if (this._symbolInfos.has(s3))
        return this._symbolInfos.get(s3);
      const r2 = me(i4);
      return this._symbolInfos.set(s3, r2), r2;
    }
    _setSymbologyOverride(e2, t3) {
      this._symbologyOverride !== e2 && (this._symbologyOverride = e2, this._symbologyOverrideFields = t3, this._invalidateAllSymbols(), this._updateSymbologyFields());
    }
    _updateSymbologyFields() {
      this._symbologyFields = null != this._symbologyOverrideFields && this._symbologyOverrideFields.length > 0 ? null != this._rendererFields && this._rendererFields.length > 0 ? I$4(this.i3slayer.fieldsIndex, [...this._rendererFields, ...this._symbologyOverrideFields]) : this._symbologyOverrideFields : this._rendererFields;
    }
    _updateCachedRendererData(e2) {
      if (e2.cachedRendererVersion = this._rendererVersion, !this._hasComponentData)
        return;
      const t3 = this._tmpAttributeOnlyGraphic, i4 = {};
      t3.attributes = i4;
      const s3 = this._currentRenderer, r2 = e2.attributeInfo?.attributeData, o5 = null != e2.featureIds ? this.i3slayer.objectIdField : null, n3 = null != r2 && null != this._symbologyFields && this._symbologyFields.length > 0;
      let a3 = null, l2 = null;
      if (n3 && null != this._symbologyFields) {
        a3 = [], l2 = [];
        for (const e3 of this._symbologyFields) {
          const t4 = r2[e3];
          t4 && (a3.push(e3), l2.push(t4));
        }
      }
      e2.cachedSymbology || (e2.cachedSymbology = e$1(5 * e2.featureIds.length));
      const d2 = { color: Pt, castShadows: true, pickable: true, colorMixMode: n$a.Multiply, edgeMaterial: null }, h3 = this.fullOpacity, c2 = this.nodeCrossfadingEnabled ? this.getNodeOpacity(e2) : h3;
      let u2 = null, _ = A$2.OPAQUE, g2 = fe, m2 = 0;
      for (let p2 = 0; p2 < e2.featureIds.length; p2++) {
        if (null != o5 && (i4[o5] = e2.featureIds[p2]), n3 && a3)
          for (let e3 = 0; e3 < a3.length; e3++)
            i4[a3[e3]] = Q(l2[e3], p2);
        const r3 = s3 ? this._getSymbolInfo(s3, t3) : null;
        let h4 = null, f2 = null;
        if (s3 && "visualVariables" in s3) {
          if (this._colorVariable) {
            const e3 = p$1(this._colorVariable, t3, { color: Ht, arcade: this._arcade });
            e3 && (h4 = Pt, h4[0] = e3.r / 255, h4[1] = e3.g / 255, h4[2] = e3.b / 255, this._opacityVariable || null === e3.a || (f2 = e3.a));
          }
          this._opacityVariable && (f2 = v(this._opacityVariable, t3, { arcade: this._arcade }));
        }
        if (r3?.material) {
          const e3 = r3.material;
          h4 = null == h4 || null == f2 ? A$3(h4, f2, e3.color, e3.alpha, Ot, Pt) : A$3(h4, f2, null, null, Ot, Pt);
        }
        if (null == h4 && (h4 = Pt, h4[0] = 1, h4[1] = 1, h4[2] = 1, h4[3] = 1), d2.pickable = true, d2.castShadows = !r3 || r3.castShadows, d2.colorMixMode = r3?.material ? r3.material.colorMixMode : n$a.Multiply, d2.edgeMaterial = r3 ? r3.edgeMaterial : null, null != this._symbologyOverride && (d2.color = h4, this._symbologyOverride(t3, d2), h4 = d2.color), null != this._nodeColorOverride && (this._nodeColorOverride(e2.node, h4), d2.colorMixMode = n$a.Replace), null != d2.edgeMaterial) {
          const t4 = h4[3] <= 0 ? A$2.INVISIBLE : h4[3] >= 1 && (e2.material.isOpaque || d2.colorMixMode === n$a.Replace) ? A$2.OPAQUE : A$2.TRANSPARENT;
          d2.edgeMaterial === u2 && t4 === _ || (g2 = { ...d2.edgeMaterial, opacity: c2, objectTransparency: t4 }, u2 = d2.edgeMaterial, _ = t4), e2.cachedEdgeMaterials[p2] = g2;
        } else
          e2.cachedEdgeMaterials[p2] = fe;
        e2.cachedSymbology[m2++] = Math.round(255 * h4[0]), e2.cachedSymbology[m2++] = Math.round(255 * h4[1]), e2.cachedSymbology[m2++] = Math.round(255 * h4[2]), e2.cachedSymbology[m2++] = Math.round(255 * h4[3]), e2.cachedSymbology[m2++] = d2.colorMixMode | +d2.castShadows << jt.CastShadows | +d2.pickable << jt.Pickable;
      }
    }
    _getFilteredEdgeMaterials(e2) {
      const t3 = this._getCachedEdgeMaterials(e2);
      this.nodeCrossfadingEnabled || Wt(t3, this.fullOpacity);
      const i4 = e2.filteredIds;
      if (null == i4) {
        return { hasEdges: t3.some((e3) => e3 !== fe), perFeatureEdgeMaterials: t3 };
      }
      let s3 = 0, r2 = false;
      const o5 = t3.map((t4, o6) => e2.featureIds[o6] !== i4[s3] ? fe : (r2 = r2 || t4 !== fe, s3++, t4));
      return { hasEdges: r2, perFeatureEdgeMaterials: o5 };
    }
    _updateComponentData(e2) {
      if (!this._hasComponentData)
        return;
      const t3 = e2.objectHandle, i4 = this._getComponentParameters(e2);
      this._collection.setComponentData(t3, i4), this._stage.renderView.requestRender();
    }
    _reloadAll(e2 = this.elevationOffset) {
      this._removeAllNodeDataFromStage(e2), null != this._controller && this._controller.restartNodeLoading();
    }
    _opacityChange(e2) {
      this.nodeCrossfadingEnabled && this._crossfadeHelper.stopAllNodeFading(), this._nodeId2Meta.forEach((t3) => {
        null != t3 && (this._collection.updateMaterial(t3.objectHandle, (t4) => t4.objectOpacity = e2), Wt(t3.cachedEdgeMaterials, e2), this._updateEdgeRendering(t3));
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
      this._updateComponentData(e2), this._applyFiltersToNode(e2), this._addOrUpdateEdgeRendering(e2), this._visibleGeometryChanged(e2, Dt.UPDATE);
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
      return this._needsNormals && this.view.qualitySettings.physicallyBasedRenderingEnabled;
    }
    _updateEdgeRendering(e2, t3 = true) {
      null != this._edgeView && this._edgeView.hasObject(e2.objectHandle) && this._addOrUpdateEdgeRendering(e2, t3);
    }
    _forAllNodes(e2) {
      this._nodeId2Meta.forEach(e2);
    }
    _ignoreClientNodeOverriddenFeatures(e2) {
      return this.i3sOverrides.hasGeometryChanges ? (t3, i4, s3) => s3.node.index >= 0 && this.i3sOverrides.featureHasGeometryChanges(t3) ? o$3.CONTINUE : e2(t3, i4, s3) : e2;
    }
    _forAllFeatures(e2, t3, i4) {
      n$6(this._nodeId2Meta, (s3) => {
        if (null == s3)
          return false;
        if (null != t3) {
          switch (t3(s3)) {
            case o$3.EXIT:
              return true;
            case o$3.SKIP:
              return false;
          }
        }
        let r2 = o$3.CONTINUE;
        switch (i4) {
          case n$1.ALL:
            r2 = this._forAllFeaturesOfNode(s3, e2);
            break;
          case n$1.VISIBLE_ONLY:
            r2 = this._forAllVisibleFeaturesOfNode(s3, e2);
            break;
          case n$1.QUERYABLE:
            r2 = this._forAllQueryableFeaturesOfNode(s3, e2);
        }
        return r2 === o$3.EXIT;
      });
    }
    _forAllFeaturesOfNode(e2, t3) {
      let i4 = o$3.CONTINUE;
      const s3 = e2.featureIds;
      for (let r2 = 0; r2 < s3.length; r2++)
        if (i4 = t3(s3[r2], r2, e2), i4 === o$3.EXIT)
          return i4;
      return i4;
    }
    _forAllVisibleFeaturesOfNode(e2, t3) {
      let i4 = o$3.CONTINUE;
      const s3 = e2.featureIds;
      return this._collection.forEachVisibleComponent(e2.objectHandle, (r2) => (i4 = t3(s3[r2], r2, e2), i4 === o$3.CONTINUE)), i4;
    }
    _forAllQueryableFeaturesOfNode(e2, t3) {
      const i4 = this._ignoreClientNodeOverriddenFeatures(t3);
      if (null == this._renderClippingArea)
        return this._forAllFeaturesOfNode(e2, i4);
      const s3 = this._boundingRectNodeTest(e2, this._renderClippingArea);
      if (s3 === F$2.OUTSIDE)
        return o$3.CONTINUE;
      if (s3 === F$2.INSIDE)
        return this._forAllFeaturesOfNode(e2, i4);
      const r2 = o$3.CONTINUE, o5 = e2.featureIds, n3 = e2.objectHandle, a3 = q(this._renderClippingArea, this._collection.getObjectTransform(n3));
      for (let l2 = 0; l2 < o5.length; l2++) {
        if (!this._boundingRectFeatureTest(e2, l2, a3))
          continue;
        const t4 = i4(o5[l2], l2, e2);
        if (t4 === o$3.EXIT)
          return t4;
      }
      return r2;
    }
    _createAttributes(e2, t3) {
      const i4 = {};
      null != t3.featureIds && (i4[this._getObjectIdField()] = t3.featureIds[e2]);
      const s3 = t3.attributeInfo?.attributeData;
      if (null != s3)
        for (const r2 of Object.keys(s3))
          i4[r2] = Q(s3[r2], e2);
      return i4;
    }
    _createGraphic(e2, t3) {
      return this._createLayerGraphic(this._createAttributes(e2, t3));
    }
    highlight(e2) {
      if ("number" == typeof e2 || e2 instanceof c$5 ? e2 = [e2] : e2 instanceof V && (e2 = e2.toArray()), Array.isArray(e2) && e2.length > 0) {
        if (e2[0] instanceof c$5) {
          const t3 = e2, i4 = this.i3slayer.fieldsIndex, s3 = this._getObjectIdField(), r2 = t3.map((e3) => n$8(i4, e3.attributes, s3)), { set: o5, handle: n3 } = this._highlights.acquireSet();
          return this._highlights.setFeatureIds(o5, r2), n3;
        }
        if ("number" == typeof e2[0]) {
          const t3 = e2, { set: i4, handle: s3 } = this._highlights.acquireSet();
          return this._highlights.setFeatureIds(i4, t3), s3;
        }
      }
      return e$6();
    }
    resetHighlights() {
      u$4(this._highlights), this._highlights = new h2({ collection: this._collection, forAllFeatures: (e2) => this._forAllFeatures(e2, null, n$1.ALL), forAllFeaturesOfNode: (e2, t3) => this._forAllFeaturesOfNode(e2, t3) });
    }
    _visibleGeometryChanged(e2, t3) {
      if (!this._elevationProvider)
        return;
      const i4 = this.getNodeComponentObb(e2.node);
      i4 && this._elevationProvider.objectChanged(i4), null == this._visibleGeometryChangedSchedulerHandle && (this._visibleGeometryChangedSchedulerHandle = v$1(() => {
        this.emit("visible-geometry-changed"), this._visibleGeometryChangedSchedulerHandle = null;
      })), this._updateSnappingSources(e2, t3);
    }
    get performanceInfo() {
      return new e(this.usedMemory, this._nodeId2Meta.size, Math.round(this._gpuMemoryEstimate / 1048576), Math.round(this._geoMemoryEstimate / 1048576), Math.round(this._texMemoryEstimate / 1048576), Math.round(this.unloadedMemory / 1048576), this._idbCacheEnabled ? Math.round(100 * this._idbCache.getHitRate()) : 0);
    }
    get test() {
      const e2 = this, t3 = (e3) => {
        this._nodeColorOverride = e3, this._invalidateAllSymbols();
      };
      return { controller: this._controller, labeler: this._labeler, get visibleObjectIds() {
        const t4 = [];
        return e2._forAllFeatures((e3) => (t4.push(e3), o$3.CONTINUE), null, n$1.VISIBLE_ONLY), t4.sort((e3, t5) => e3 - t5), t4;
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
      this._nodeId2Meta.forEach(e2);
    }
    fadeNode(e2, t3, i4) {
      if (!this.nodeCrossfadingEnabled)
        return;
      const s3 = this._nodeId2Meta.get(e2);
      null != s3 && this._crossfadeHelper.fadeNode(e2, s3, t3, i4);
    }
    setNodeOpacityByIndex(e2, t3) {
      const i4 = this._nodeId2Meta.get(e2);
      null != i4 && this._setNodeOpacity(i4, t3);
    }
    _setNodeOpacity(e2, t3) {
      this._collection.updateMaterial(e2.objectHandle, (e3) => e3.objectOpacity = t3), this._setNodeEdgeOpacity(e2, t3);
    }
    _setNodeEdgeOpacity(e2, t3) {
      if (null == this._edgeView || !e2.cachedEdgeMaterials)
        return;
      Wt(e2.cachedEdgeMaterials, t3);
      const i4 = e2.objectHandle;
      this._edgeView.hasObject(i4) && this._edgeView.updateAllComponentOpacities(i4, t3).catch((e3) => At(e3, this.i3slayer.title));
    }
    get hasModifications() {
      return this._isIntegratedMesh && null != this._layerClippingArea || this._modifications && this._modifications.length > 0;
    }
    updateNodeModificationStatus(e2) {
      const t3 = e2.length;
      if (!this.hasModifications || t3 <= 0 || true !== this._i3sWasmLoaded)
        return;
      const i4 = this.uid, s3 = zt(e2);
      if (s3) {
        const t4 = { context: i4, buffer: s3.buffer };
        L$4(t4);
        const r2 = new Float64Array(s3.buffer);
        e2.forAll((e3, t5) => {
          const i5 = r2[t5], s4 = A$4(i5);
          e3.imModificationImpact = s4, s4 !== r$2.Unmodified && this._controller.invalidateGeometryVisibility(e3.index);
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
      const t3 = { events: e2, fetchEdgeLocations: async (e3, t4, i4) => {
        const s3 = this._nodeId2Meta.get(e3);
        if (null == s3)
          throw new Error("invalid-node");
        const { origin: r2, buffer: o5 } = await this._collection.extractEdgeInformation(s3.objectHandle, t4, i4);
        return this._snappingLocationsApplyElevation(s3, o5, r2), { type: "components", objectIds: s3.featureIds, locations: o5, origin: r2 };
      }, remove: () => I$1(this._snappingSourcesTrackers, t3) };
      return this._snappingSourcesTrackers.push(t3), this._nodeId2Meta.forEach((t4, i4) => {
        if (null == t4)
          return;
        const s3 = this._controller.getRenderMbs(t4.node);
        s3 && e2.add(i4, s3);
      }), t3;
    }
    _snappingLocationsApplyElevation(e2, t3, i4) {
      if (!e2.elevationOffsets || this.elevationInfo.mode === E.Absolute)
        return;
      const s3 = t3.position0, r2 = t3.position1, o5 = t3.componentIndex, n3 = n$5(), a3 = n$5(), l2 = (e3, t4) => {
        u$2(e3, e3, i4), this.view.renderCoordsHelper.worldUpAtPosition(e3, a3), u$2(e3, e3, g$1(a3, a3, t4)), e$e(e3, e3, i4);
      };
      for (let d2 = 0; d2 < s3.count; d2++) {
        const t4 = e2.elevationOffsets[o5.get(d2)];
        s3.getVec(d2, n3), l2(n3, t4), s3.setVec(d2, n3), r2.getVec(d2, n3), l2(n3, t4), r2.setVec(d2, n3);
      }
    }
    _updateSnappingSources(e2, t3) {
      const { index: i4 } = e2.node, s3 = this._controller.getRenderMbs(e2.node);
      if (null != s3)
        for (const r2 of this._snappingSourcesTrackers)
          t3 !== Dt.REMOVE && t3 !== Dt.UPDATE || r2.events.remove(i4), t3 !== Dt.ADD && t3 !== Dt.UPDATE || r2.events.add(i4, s3);
    }
  };
  return e$2([y()], o4.prototype, "_hasLoadedPBRTextures", void 0), e$2([y()], o4.prototype, "_asyncModuleLoading", void 0), e$2([y()], o4.prototype, "_visibleGeometryChangedSchedulerHandle", void 0), e$2([y()], o4.prototype, "view", void 0), e$2([y()], o4.prototype, "i3slayer", void 0), e$2([y()], o4.prototype, "_controller", void 0), e$2([y()], o4.prototype, "_labeler", void 0), e$2([y()], o4.prototype, "updating", void 0), e$2([y()], o4.prototype, "suspended", void 0), e$2([y()], o4.prototype, "contentVisible", null), e$2([y({ readOnly: true })], o4.prototype, "legendEnabled", null), e$2([y()], o4.prototype, "holeFilling", void 0), e$2([y(t$5)], o4.prototype, "updatingProgress", void 0), e$2([y()], o4.prototype, "updatingProgressValue", null), e$2([y()], o4.prototype, "hasTexturesOrVertexColors", null), e$2([y()], o4.prototype, "rendererTextureUsage", null), e$2([y()], o4.prototype, "elevationOffset", null), e$2([y()], o4.prototype, "elevationInfo", null), e$2([y({ type: Boolean })], o4.prototype, "slicePlaneEnabled", void 0), e$2([y()], o4.prototype, "supportedTextureEncodings", null), e$2([y()], o4.prototype, "uncompressedTextureDownsamplingEnabled", null), e$2([y({ type: [f] })], o4.prototype, "_modifications", void 0), e$2([y({ readOnly: true })], o4.prototype, "clientGeometry", null), e$2([y()], o4.prototype, "elevationRange", null), e$2([y()], o4.prototype, "fullExtent", null), e$2([y()], o4.prototype, "_elevationTask", void 0), e$2([y({ readOnly: true })], o4.prototype, "_usePBR", null), o4 = e$2([c$4(Ct)], o4), o4;
};
function At(e2, t2) {
  b$1(e2) || xt().warn("Error while processing edges. Edges on this layer might not display correctly", t2, e2);
}
var Dt;
!function(e2) {
  e2[e2.ADD = 0] = "ADD", e2[e2.REMOVE = 1] = "REMOVE", e2[e2.UPDATE = 2] = "UPDATE";
}(Dt || (Dt = {}));
const Tt = i$3(), Nt = u$5(), Vt = u$5(), Ft = new O$2(), Pt = [0, 0, 0, 0], Ht = new u$6([0, 0, 0, 0]), Ut = B$1(0, 0, 0, 0);
function Gt(e2) {
  if (null == e2)
    return false;
  const t2 = e2.metallicRoughness;
  return t2 && t2.baseColorTextureId >= 0 || t2 && t2.metallicRoughnessTextureId >= 0 || e2.normalTextureId >= 0 || e2.emissiveTextureId >= 0 || e2.occlusionTextureId >= 0;
}
function Lt(e2) {
  return "geometryData" in e2;
}
function kt(e2) {
  return null != e2 && t$9(e2.data);
}
function Bt(e2, t2) {
  let i4 = 1024 + e2.interleavedVertexData.byteLength + (e2.indices ? e2.indices.byteLength : 0) + e2.positionData.data.byteLength + e2.positionData.indices.byteLength;
  if (null != t2)
    for (const s3 of t2)
      null != s3 && t$9(s3.data) && (i4 += s3.data.byteLength);
  return i4;
}
function qt(e2, t2) {
  return t2.byteSize > wt ? (xt().warn(`Node is too big to store in IndexedDB cache: ${e2.id} (${t2.byteSize} bytes)`), false) : t2.byteSize > 0;
}
function zt(e2) {
  if (0 === e2.length)
    return;
  const t2 = 10 * e2.length, i4 = new Float64Array(t2);
  let s3 = 0;
  return e2.forAll((e3) => {
    let t3 = e3.serviceObbInIndexSR;
    null == t3 && (t3 = Ft, t3.center = Z(e3.serviceMbsInIndexSR), t3.halfSize = [e3.serviceMbsInIndexSR[3], e3.serviceMbsInIndexSR[3], e3.serviceMbsInIndexSR[3]]);
    const r2 = t3.data;
    i4[s3++] = r2[0], i4[s3++] = r2[1], i4[s3++] = r2[2], i4[s3++] = r2[3], i4[s3++] = r2[4], i4[s3++] = r2[5], i4[s3++] = r2[6], i4[s3++] = r2[7], i4[s3++] = r2[8], i4[s3++] = r2[9];
  }), i4;
}
function Wt(e2, t2) {
  e2.forEach((e3) => e3.opacity = t2);
}
class Kt {
  constructor(e2, t2) {
    this.mode = e2, this.offset = t2;
  }
}
const $t = n$5(), Qt = i$3(), Xt = "elevation-change", Yt = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]], Jt = new e$d();
function Zt(e2, t2, i4) {
  let s3 = e2.elevationRangeMin, r2 = e2.elevationRangeMax;
  const o4 = i4;
  if (o4 > 0) {
    t2.getCorners(Yt);
    for (const e3 of Yt) {
      const t3 = Y$1(e3) - o4;
      s3 = Math.min(s3, t3), r2 = Math.max(r2, t3);
    }
  } else {
    t2.getCorners(Yt);
    for (const e3 of Yt) {
      const t3 = e3[2];
      s3 = Math.min(s3, t3), r2 = Math.max(r2, t3);
    }
  }
  e2.expandElevationRangeValues(s3, r2);
}
function ei(e2, t2, i4) {
  const s3 = Z(t2), r2 = i4 > 0 ? Y$1(s3) - i4 : s3[2], o4 = V$1(t2);
  e2.expandElevationRangeValues(r2 - o4, r2 + o4);
}
export {
  St as S,
  n$1 as n,
  o$3 as o,
  u$1 as u
};
