import { bD as a$3, qg as b$1, qh as r$1, eW as I$1, eX as x, aV as e, a_ as c$3, aX as y, ce as d$1, bX as P$1, bZ as S$1, f9 as k, aT as s$1, eZ as J, e$ as M, eu as u$1, dF as U, cr as q$1, dc as H$1, ex as w$1, aP as a$4, qi as f$2, dD as E, dE as B, fc as e$1 } from "./chunk-ejFG4zJ0.js";
import { a as t, n, b as u$2 } from "./chunk-0yX55L32.js";
const o = { setAttribute() {
}, rollback() {
}, commit() {
} };
var r;
function i$1(e2, n2) {
  const i2 = n2.attributes[e2.objectIdField];
  if (null == i2)
    return o;
  const s2 = e2.sessions.get(i2);
  if (s2)
    return s2;
  const l2 = a$3(n2.attributes), u2 = /* @__PURE__ */ new Set(), a3 = e2.i3sOverrides.createInteractiveEditSession(i2), d2 = /* @__PURE__ */ new Map(), f2 = (e3, t2) => {
    const n3 = d2.get(e3);
    if (null == n3) {
      const n4 = t2.indexOf(i2);
      return d2.set(e3, n4), n4;
    }
    return n3;
  };
  let c2 = r.EDITING;
  const g2 = { setAttribute(t2, o2) {
    if (c2 !== r.EDITING)
      return;
    const i3 = e2.fieldsIndex.get(t2);
    if (!i3)
      return;
    const s3 = e2.attributeStorageInfo.findIndex((e3) => e3.name === i3.name);
    if (s3 < 0)
      return;
    if (!(t2 in l2))
      throw new Error(`Attribute "${t2}" is not an attribute of the edited feature.`);
    a3.setAttribute(s3, o2);
    const d3 = e2.attributeStorageInfo[s3];
    let g3 = false;
    u2.add(t2), e2.forEachNode((t3, r2) => {
      const i4 = f2(t3, r2);
      if (-1 === i4)
        return;
      const s4 = e2.getAttributeData(t3.index);
      if (s4) {
        const r3 = s4[d3.name];
        r3 && (r3[i4] = o2, e2.setAttributeData(t3.index, s4, n2), g3 = true);
      }
    }), g3 && e2.clearMemCache();
  }, rollback() {
    if (c2 === r.EDITING) {
      for (const e3 of u2)
        this.setAttribute(e3, l2[e3]);
      a3.remove(), c2 = r.ROLLED_BACK, e2.sessions.delete(i2);
    }
  }, commit() {
    c2 === r.EDITING && (a3.remove(), c2 = r.COMMITTED, e2.sessions.delete(i2));
  } };
  return e2.sessions.set(i2, g2), g2;
}
function s(e2, t2, n2) {
  const { gidToFeatureInfo: o2, oidToFeatureInfo: r2, fieldsIndex: i2, objectIdField: s2, globalIdField: l2, featureOrIdentifierList: u2 } = n2;
  if (!n2.featuresResolved && null != u2) {
    for (const e3 of u2) {
      const t3 = { feature: null, oid: -1, gid: null };
      if ("attributes" in e3) {
        t3.feature = e3;
        const n3 = e3.attributes;
        if (null != n3)
          for (const e4 in n3) {
            if (-1 !== t3.oid && null != t3.gid)
              break;
            const o3 = i2.normalizeFieldName(e4);
            o3 === s2 && (t3.oid = n3[e4] ?? -1), o3 === l2 && (t3.gid = n3[e4]);
          }
      } else
        t3.oid = e3.objectId ?? -1, t3.gid = e3.globalId;
      null != t3.gid && o2.set(t3.gid, t3), -1 !== t3.oid && r2.set(t3.oid, t3);
    }
    n2.featuresResolved = true;
  }
  return (-1 !== e2 ? r2.get(e2) : null) ?? (null != t2 ? o2.get(t2) : null);
}
function l(e2, t2, n2, o2, r2 = null, i2 = true) {
  const l2 = [], u2 = { gidToFeatureInfo: /* @__PURE__ */ new Map(), oidToFeatureInfo: /* @__PURE__ */ new Map(), featuresResolved: null == n2, fieldsIndex: e2.fieldsIndex, objectIdField: e2.objectIdField, globalIdField: e2.globalIdField, featureOrIdentifierList: n2 };
  for (const a3 of t2) {
    if (null != a3.error)
      continue;
    const e3 = a3.objectId ?? -1, t3 = a3.globalId, n3 = (-1 === e3 || i2 ? s(e3, t3, u2) : null) ?? { feature: null, oid: e3, gid: t3 }, d2 = { oid: -1 === e3 ? n3.oid : e3, gid: t3 ?? n3.gid, feature: n3.feature, result: a3 };
    if (l2.push(d2), -1 === d2.oid && null != d2.gid && null != r2 && (d2.oid = r2.get(d2.gid) ?? -1), -1 === d2.oid && null != d2.gid) {
      let e4 = o2.get(d2.gid);
      null == e4 && (e4 = [], o2.set(d2.gid, e4)), e4.push(d2);
    }
  }
  return l2;
}
async function u(e2, t2) {
  const n2 = /* @__PURE__ */ new Map(), o2 = l(e2, t2.addedFeatures, t2.edits?.addFeatures, n2), r2 = l(e2, t2.updatedFeatures, t2.edits?.updateFeatures, n2), i2 = l(e2, t2.deletedFeatures, t2.edits?.deleteFeatures, n2, t2.globalIdToObjectId, false);
  return n2.size > 0 && await a$2(e2, n2), { adds: o2.filter((e3) => -1 !== e3.oid), updates: r2.filter((e3) => -1 !== e3.oid), deletes: i2.filter((e3) => -1 !== e3.oid) };
}
async function a$2(t2, o2) {
  const r2 = t2.i3sOverrides.layer.associatedLayer;
  if (null == r2?.globalIdField)
    return;
  const i2 = r2.createQuery(), { objectIdField: s2, globalIdField: l2 } = r2;
  i2.where = Array.from(o2.keys()).map((e2) => `${l2}='${e2}'`).join(" OR "), i2.returnGeometry = false, i2.outFields = [s2, l2], i2.cacheHint = false;
  const u2 = await b$1(r$1(r2, i2));
  if (!u2.ok)
    return;
  const a3 = u2.value.features;
  for (const e2 of a3) {
    const t3 = e2.attributes[l2], n2 = e2.attributes[s2];
    if (null == t3 || null == n2 || -1 === n2)
      continue;
    const r3 = o2.get(t3);
    if (null != r3)
      for (const e3 of r3)
        e3.oid = n2;
  }
}
function d(e2, t2) {
  const n2 = /* @__PURE__ */ new Map(), o2 = t2.adds, r2 = t2.updates, i2 = t2.deletes;
  if (o2.length > 0)
    for (const s2 of o2) {
      const e3 = s2.oid, t3 = s2.feature;
      "mesh" === t3?.geometry?.type && n2.set(e3, t3.geometry);
    }
  if (r2.length > 0)
    for (const s2 of r2) {
      const e3 = s2.oid, t3 = s2.feature;
      "mesh" === t3?.geometry?.type && n2.set(e3, t3.geometry);
    }
  if (i2.length > 0)
    for (const s2 of i2)
      n2.set(s2.oid, null);
  for (const [s2, l2] of n2)
    e2.i3sOverrides.updateGeometry(s2, l2);
}
function f$1(e2, t2) {
  const n2 = g(e2, t2), o2 = c$2(e2, t2);
  if (0 === n2.size && 0 === o2.size)
    return;
  const r2 = /* @__PURE__ */ new Map();
  for (let c2 = 0; c2 < e2.attributeStorageInfo.length; c2++)
    r2.set(e2.attributeStorageInfo[c2].name, c2);
  let i2 = false;
  n2.forEach((t3, n3) => {
    const o3 = e2.getAttributeData(n3);
    let s3 = false;
    t3.forEach((t4, n4) => {
      const l3 = null != o3 ? o3[n4] : null, u3 = r2.get(n4);
      for (const { featureIndex: o4, value: r3, featureId: a4 } of t4)
        l3 && (l3[o4] = r3, s3 = true, i2 = true), e2.i3sOverrides.updateAttributeValue(a4, u3, r3);
    }), s3 && e2.setAttributeData(n3, o3, null);
  }), i2 && e2.clearMemCache();
  const { fieldsIndex: s2, i3sOverrides: l2, objectIdField: u2, globalIdField: a3 } = e2, d2 = l2.layer.associatedLayer?.infoFor3D, f2 = new Set(d2 ? [...Object.values(d2.assetMapFieldRoles), ...Object.values(d2.transformFieldRoles)] : []);
  for (const [c2, g2] of o2) {
    l2.featureAdded(c2);
    const { attributes: e3 } = g2;
    for (const t3 in e3) {
      if (t3 !== u2 && t3 !== a3 && f2.has(t3))
        continue;
      const n3 = s2.normalizeFieldName(t3), o3 = null != n3 ? r2.get(n3) : null;
      if (null == o3)
        continue;
      const i3 = e3[t3];
      l2.updateAttributeValue(c2, o3, i3);
    }
  }
}
function c$2(e2, t2) {
  const n2 = /* @__PURE__ */ new Map(), o2 = t2.adds;
  if (!o2 || 0 === o2.length || null == e2.globalIdField)
    return n2;
  for (const r2 of o2) {
    const e3 = r2.oid, t3 = r2.feature;
    "mesh" === t3?.geometry?.type && n2.set(e3, t3);
  }
  return n2;
}
function g(e2, t2) {
  const n2 = t2.updates;
  if (!n2 || 0 === n2.length)
    return new p$1();
  const o2 = new p$1(), r2 = /* @__PURE__ */ new Map();
  for (let i2 = 0; i2 < e2.attributeStorageInfo.length; i2++)
    r2.set(e2.attributeStorageInfo[i2].name, i2);
  return e2.forEachNode((t3, r3) => {
    for (const i2 of n2) {
      if (null == i2.feature)
        continue;
      const n3 = i2.feature, s2 = i2.oid, l2 = r3.indexOf(s2);
      for (const r4 in n3.attributes) {
        const i3 = e2.fieldsIndex.normalizeFieldName(r4), u2 = I(o2, t3.index, i3), a3 = n3.attributes[r4];
        u2.push({ featureIndex: l2, featureId: s2, value: a3 });
      }
    }
  }), o2;
}
function I(e2, t2, n2) {
  const o2 = b(e2, t2), r2 = null != n2 && o2.get(n2);
  if (r2)
    return r2;
  const i2 = new Array();
  return o2.set(n2, i2), i2;
}
function b(e2, t2) {
  const n2 = e2.get(t2);
  if (n2)
    return n2;
  const o2 = new m();
  return e2.set(t2, o2), o2;
}
!function(e2) {
  e2[e2.EDITING = 0] = "EDITING", e2[e2.ROLLED_BACK = 1] = "ROLLED_BACK", e2[e2.COMMITTED = 2] = "COMMITTED";
}(r || (r = {}));
const m = Map, p$1 = Map;
function i() {
  return { requiredFields: { type: [String], readOnly: true }, availableFields: { type: [String], readOnly: true, get: function() {
    const { layer: i2, layer: { fieldsIndex: t2 }, requiredFields: l2 } = this;
    return i2.outFields ? I$1(t2, [...x(t2, i2.outFields), ...l2]) : I$1(t2, l2);
  } } };
}
const c$1 = (s2) => {
  let c2 = class extends s2 {
    constructor() {
      super(...arguments), this._numUpdating = 0;
    }
    get updating() {
      return this._numUpdating > 0;
    }
    autoUpdateAsync(t2, s3) {
      const i2 = k(async (s4) => {
        ++this._numUpdating;
        try {
          const r2 = await s4;
          this.destroyed || this._set(t2, r2);
        } catch (o2) {
          s$1.getLogger(this).warn(`Async update of "${String(t2)}" failed. Async update functions should not throw exceptions.`);
        }
        --this._numUpdating;
      });
      return d$1(s3, i2, P$1);
    }
  };
  return e([y({ readOnly: true })], c2.prototype, "updating", null), e([y()], c2.prototype, "_numUpdating", void 0), c2 = e([c$3("esri.core.AsyncUpdate")], c2), c2;
};
let a$1 = class a extends c$1(S$1) {
};
a$1 = e([c$3("esri.core.AsyncUpdate")], a$1);
const a2 = "esri.views.3d.layers.support.SceneLayerViewRequiredFields";
let c = class extends c$1(S$1) {
  get layer() {
    return this.layerView.layer;
  }
  get requiredFields() {
    const { layerView: { layer: { fieldsIndex: e2 }, definitionExpressionFields: r2 }, rendererFields: s2, labelingFields: t2, viewFilterFields: i2 } = this;
    return I$1(e2, [...r2 ?? [], ...s2 ?? [], ...t2 ?? [], ...i2 ?? []]);
  }
  constructor(e2) {
    super(e2);
  }
  initialize() {
    this.addHandles([this.autoUpdateAsync("rendererFields", async () => {
      const { fieldsIndex: e2, renderer: r2 } = this.layer;
      return r2 ? p((s2) => r2.collectRequiredFields(s2, e2)) : null;
    }), this.autoUpdateAsync("labelingFields", async () => {
      const { layer: e2 } = this;
      return e2.labelsVisible ? p((r2) => J(r2, e2)) : null;
    }), this.autoUpdateAsync("viewFilterFields", () => {
      const { layer: e2, mergedFilter: r2 } = this.layerView;
      return p((s2) => M(s2, e2, r2));
    })]);
  }
};
async function p(e2) {
  const r2 = /* @__PURE__ */ new Set();
  try {
    return await e2(r2), Array.from(r2).sort();
  } catch (s2) {
    return s$1.getLogger(a2).error(s2), null;
  }
}
e([y()], c.prototype, "layerView", void 0), e([y()], c.prototype, "layer", null), e([y()], c.prototype, "requiredFields", null), e([y()], c.prototype, "rendererFields", void 0), e([y()], c.prototype, "labelingFields", void 0), e([y()], c.prototype, "viewFilterFields", void 0), c = e([c$3(a2)], c);
let f = class extends u$1 {
  constructor() {
    super(...arguments), this.layer = null, this.filter = null, this._geometryEngine = null, this._projectionEngineLoaded = false, this._abortController = new AbortController();
  }
  get availableFields() {
    return [];
  }
  get maximumNumberOfFeatures() {
    return 0;
  }
  set maximumNumberOfFeatures(e2) {
    throw new Error("Not implemented");
  }
  get maximumNumberOfFeaturesExceeded() {
    return false;
  }
  get layerFilter() {
    return t(this._layerFilter);
  }
  get _layerFilter() {
    const e2 = this.layer?.filter;
    if (null == e2 || e2.geometries.length < 1)
      return null;
    const o2 = this._geometryEngine;
    if (null == o2 || !this._projectionEngineLoaded && this._filterNeedsProjectionEngine)
      return n;
    const i2 = e2.geometries.at(0).spatialReference, l2 = e2.geometries.toArray().map((e3) => {
      try {
        e3 = o2.simplify(e3);
      } catch (t2) {
        return s$1.getLogger(this).warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."), null;
      }
      if (null == e3)
        return null;
      if (e3.spatialReference.equals(i2))
        return e3;
      try {
        return U(e3, i2);
      } catch (t2) {
        return s$1.getLogger(this).warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."), null;
      }
    }).filter(q$1).sort((e3, t2) => e3.extent.xmin - t2.extent.xmin), s2 = /* @__PURE__ */ new Set(), a3 = new Array(), m2 = new Array();
    for (let t2 of l2) {
      const e3 = t2.extent.xmin;
      if (a3.length = 0, s2.forEach((r2) => {
        if (e3 >= r2.extent.xmax)
          return m2.push(r2), void s2.delete(r2);
        t2.extent.ymin <= r2.extent.ymax && t2.extent.ymax >= r2.extent.ymin && o2.intersects(t2, r2) && a3.push(r2);
      }), a3.length > 0) {
        a3.push(t2);
        try {
          t2 = o2.union(a3);
        } catch (p2) {
          s$1.getLogger(this).warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");
          continue;
        }
        a3.pop(), a3.forEach((e4) => s2.delete(e4));
      }
      s2.add(t2);
    }
    return s2.forEach((e3) => m2.push(e3)), m2.length > 0 ? { spatialRelationship: e2.spatialRelationship, geometries: m2 } : null;
  }
  get _filterNeedsProjectionEngine() {
    const e2 = this.layer.filter;
    if (null == e2 || e2.geometries.length <= 1)
      return false;
    const t2 = e2.geometries.at(0).spatialReference;
    return e2.geometries.some(({ spatialReference: e3 }) => !e3.equals(t2) && !H$1(e3, t2));
  }
  get layerFilterUpdating() {
    return u$2(this._layerFilter);
  }
  initialize() {
    const { signal: e2 } = this._abortController;
    w$1(() => this.destroyed || !this._geometryEngine && this.layer?.filter?.geometries?.length, e2).then(async () => {
      a$4(e2), this._geometryEngine = await import("./chunk-ejFG4zJ0.js").then((n2) => n2.E0);
    }).catch(f$2), this._projectionEngineLoaded = E(), w$1(() => this.destroyed || !this._projectionEngineLoaded && this._filterNeedsProjectionEngine, e2).then(async () => {
      a$4(e2), await B(), this._projectionEngineLoaded = true;
    }).catch(f$2);
  }
  destroy() {
    this._abortController = e$1(this._abortController);
  }
  highlight(e2) {
    throw new Error("Not implemented");
  }
  queryFeatures(e2, t2) {
    throw new Error("Not implemented");
  }
  queryObjectIds(e2, t2) {
    throw new Error("Not implemented");
  }
  queryFeatureCount(e2, t2) {
    throw new Error("Not implemented");
  }
  createQuery() {
    throw new Error("Not implemented");
  }
  queryExtent(e2, t2) {
    throw new Error("Not implemented");
  }
};
e([y()], f.prototype, "layer", void 0), e([y()], f.prototype, "availableFields", null), e([y()], f.prototype, "maximumNumberOfFeatures", null), e([y({ readOnly: true })], f.prototype, "maximumNumberOfFeaturesExceeded", null), e([y()], f.prototype, "filter", void 0), e([y({ readOnly: true })], f.prototype, "layerFilter", null), e([y({ readOnly: true })], f.prototype, "_layerFilter", null), e([y()], f.prototype, "_geometryEngine", void 0), e([y()], f.prototype, "_projectionEngineLoaded", void 0), e([y()], f.prototype, "_filterNeedsProjectionEngine", null), e([y()], f.prototype, "layerFilterUpdating", null), f = e([c$3("esri.views.layers.SceneLayerView")], f);
const w = f;
export {
  i as a,
  c,
  d,
  f$1 as f,
  i$1 as i,
  u,
  w
};
