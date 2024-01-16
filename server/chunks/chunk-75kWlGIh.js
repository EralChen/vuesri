import { b8 as a$1, pg as b$1, ph as r$1, e4 as I$1, e5 as x, bo as e, br as c$3, bp as y, bb as s$1, pi as t, bs as g$1, pj as f$2, e7 as J, e9 as M, dP as u$1, de as b$2, bX as k$1, cP as D, dS as w$1, cq as a$2, pk as f$3, dc as E$1, dd as _, em as e$1 } from "./chunk-KFNcxJaF.js";
import { a as t$1, n, u as u$2 } from "./chunk-I90ewfux.js";
const o = { setAttribute() {
}, rollback() {
}, commit() {
} };
var r;
function i$2(e2, n2) {
  const i2 = n2.attributes[e2.objectIdField];
  if (null == i2)
    return o;
  const s2 = e2.sessions.get(i2);
  if (s2)
    return s2;
  const l2 = a$1(n2.attributes), u2 = /* @__PURE__ */ new Set(), a2 = e2.i3sOverrides.createInteractiveEditSession(i2), d3 = /* @__PURE__ */ new Map(), f2 = (e3, t2) => {
    const n3 = d3.get(e3);
    if (null == n3) {
      const n4 = t2.indexOf(i2);
      return d3.set(e3, n4), n4;
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
    a2.setAttribute(s3, o2);
    const d4 = e2.attributeStorageInfo[s3];
    let g3 = false;
    u2.add(t2), e2.forEachNode((t3, r2) => {
      const i4 = f2(t3, r2);
      if (-1 === i4)
        return;
      const s4 = e2.getAttributeData(t3.index);
      if (s4) {
        const r3 = s4[d4.name];
        r3 && (r3[i4] = o2, e2.setAttributeData(t3.index, s4, n2), g3 = true);
      }
    }), g3 && e2.clearMemCache();
  }, rollback() {
    if (c2 === r.EDITING) {
      for (const e3 of u2)
        this.setAttribute(e3, l2[e3]);
      a2.remove(), c2 = r.ROLLED_BACK, e2.sessions.delete(i2);
    }
  }, commit() {
    c2 === r.EDITING && (a2.remove(), c2 = r.COMMITTED, e2.sessions.delete(i2));
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
  for (const a2 of t2) {
    if (null != a2.error)
      continue;
    const e3 = a2.objectId ?? -1, t3 = a2.globalId, n3 = (-1 === e3 || i2 ? s(e3, t3, u2) : null) ?? { feature: null, oid: e3, gid: t3 }, d3 = { oid: -1 === e3 ? n3.oid : e3, gid: t3 ?? n3.gid, feature: n3.feature, result: a2 };
    if (l2.push(d3), -1 === d3.oid && null != d3.gid && null != r2 && (d3.oid = r2.get(d3.gid) ?? -1), -1 === d3.oid && null != d3.gid) {
      let e4 = o2.get(d3.gid);
      null == e4 && (e4 = [], o2.set(d3.gid, e4)), e4.push(d3);
    }
  }
  return l2;
}
async function u(e2, t2) {
  const n2 = /* @__PURE__ */ new Map(), o2 = l(e2, t2.addedFeatures, t2.edits?.addFeatures, n2), r2 = l(e2, t2.updatedFeatures, t2.edits?.updateFeatures, n2), i2 = l(e2, t2.deletedFeatures, t2.edits?.deleteFeatures, n2, t2.globalIdToObjectId, false);
  return n2.size > 0 && await a(e2, n2), { adds: o2.filter((e3) => -1 !== e3.oid), updates: r2.filter((e3) => -1 !== e3.oid), deletes: i2.filter((e3) => -1 !== e3.oid) };
}
async function a(t2, o2) {
  const r2 = t2.i3sOverrides.layer.associatedLayer;
  if (null == r2?.globalIdField)
    return;
  const i2 = r2.createQuery(), { objectIdField: s2, globalIdField: l2 } = r2;
  i2.where = Array.from(o2.keys()).map((e2) => `${l2}='${e2}'`).join(" OR "), i2.returnGeometry = false, i2.outFields = [s2, l2], i2.cacheHint = false;
  const u2 = await b$1(r$1(r2, i2));
  if (!u2.ok)
    return;
  const a2 = u2.value.features;
  for (const e2 of a2) {
    const t3 = e2.attributes[l2], n2 = e2.attributes[s2];
    if (null == t3 || null == n2 || -1 === n2)
      continue;
    const r3 = o2.get(t3);
    if (null != r3)
      for (const e3 of r3)
        e3.oid = n2;
  }
}
function d$2(e2, t2) {
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
      for (const { featureIndex: o4, value: r3, featureId: a3 } of t4)
        l3 && (l3[o4] = r3, s3 = true, i2 = true), e2.i3sOverrides.updateAttributeValue(a3, u3, r3);
    }), s3 && e2.setAttributeData(n3, o3, null);
  }), i2 && e2.clearMemCache();
  const { fieldsIndex: s2, i3sOverrides: l2, objectIdField: u2, globalIdField: a2 } = e2, d3 = l2.layer.associatedLayer?.infoFor3D, f2 = new Set(d3 ? [...Object.values(d3.assetMapFieldRoles), ...Object.values(d3.transformFieldRoles)] : []);
  for (const [c2, g2] of o2) {
    l2.featureAdded(c2);
    const { attributes: e3 } = g2;
    for (const t3 in e3) {
      if (t3 !== u2 && t3 !== a2 && f2.has(t3))
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
    return new p$2();
  const o2 = new p$2(), r2 = /* @__PURE__ */ new Map();
  for (let i2 = 0; i2 < e2.attributeStorageInfo.length; i2++)
    r2.set(e2.attributeStorageInfo[i2].name, i2);
  return e2.forEachNode((t3, r3) => {
    for (const i2 of n2) {
      if (null == i2.feature)
        continue;
      const n3 = i2.feature, s2 = i2.oid, l2 = r3.indexOf(s2);
      for (const r4 in n3.attributes) {
        const i3 = e2.fieldsIndex.normalizeFieldName(r4), u2 = I(o2, t3.index, i3), a2 = n3.attributes[r4];
        u2.push({ featureIndex: l2, featureId: s2, value: a2 });
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
const m = Map, p$2 = Map;
function i$1() {
  return { requiredFields: { type: [String], readOnly: true }, availableFields: { type: [String], readOnly: true, get: function() {
    const { layer: i2, layer: { fieldsIndex: t2 }, requiredFields: l2 } = this;
    return i2.outFields ? I$1(t2, [...x(t2, i2.outFields), ...l2]) : I$1(t2, l2);
  } } };
}
const i = (e$12) => {
  let n2 = class extends e$12 {
    constructor() {
      super(...arguments), this._numUpdating = 0, this._asyncUpdateState = /* @__PURE__ */ new Map();
    }
    get updating() {
      return this._numUpdating > 0;
    }
    autoUpdateAsync(t2, e2) {
      return c$1((e3) => this._updateAsync(t2, e3), e2);
    }
    async _updateAsync(t2, e2) {
      if (!this._startAsyncUpdate(t2)) {
        try {
          const s2 = await e2();
          this._set(t2, s2);
        } catch (n3) {
          s$1.getLogger(this).warn(`Async update of "${String(t2)}" failed. Async update functions should not throw exceptions.`);
        }
        this._endAsyncUpdate(t2) && this._updateAsync(t2, e2);
      }
    }
    _startAsyncUpdate(t2) {
      const e2 = this._asyncUpdateState.get(t2) ?? p$1.None;
      return e2 & p$1.Updating ? (this._asyncUpdateState.set(t2, e2 | p$1.Invalidated), true) : (++this._numUpdating, this._asyncUpdateState.set(t2, e2 | p$1.Updating), false);
    }
    _endAsyncUpdate(t2) {
      --this._numUpdating;
      const e2 = (this._asyncUpdateState.get(t2) ?? p$1.None) & ~p$1.Updating;
      return e2 & p$1.Invalidated ? (this._asyncUpdateState.set(t2, e2 & ~p$1.Invalidated), true) : (this._asyncUpdateState.set(t2, e2), false);
    }
  };
  return e([y({ readOnly: true })], n2.prototype, "updating", null), e([y()], n2.prototype, "_numUpdating", void 0), n2 = e([c$3("esri.core.AsyncUpdate")], n2), n2;
};
var p$1;
function c$1(t$12, e2) {
  const s2 = () => {
    i2 && !p2 && t$12(a2);
  }, a2 = () => {
    if (!i2 || p2)
      return e2();
    i2.clear(), p2 = true;
    const t2 = f$2(i2, e2);
    return p2 = false, t2;
  }, r2 = () => {
    i2 && (i2.destroy(), i2 = null);
  };
  let i2 = new t(s2), p2 = false;
  return t$12(a2), { remove: r2 };
}
!function(t2) {
  t2[t2.None = 0] = "None", t2[t2.Updating = 1] = "Updating", t2[t2.Invalidated = 2] = "Invalidated";
}(p$1 || (p$1 = {}));
let d$1 = class d extends i(g$1) {
};
d$1 = e([c$3("esri.core.AsyncUpdate")], d$1);
const d2 = "esri.views.3d.layers.support.SceneLayerViewRequiredFields";
let c = class extends i(g$1) {
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
      const { layer: e2, filter: r2 } = this.layerView;
      return p((s2) => M(s2, e2, r2));
    })]);
  }
};
async function p(e2) {
  const r2 = /* @__PURE__ */ new Set();
  try {
    return await e2(r2), Array.from(r2).sort();
  } catch (s2) {
    return s$1.getLogger(d2).error(s2), null;
  }
}
e([y()], c.prototype, "layerView", void 0), e([y()], c.prototype, "layer", null), e([y()], c.prototype, "requiredFields", null), e([y()], c.prototype, "rendererFields", void 0), e([y()], c.prototype, "labelingFields", void 0), e([y()], c.prototype, "viewFilterFields", void 0), c = e([c$3(d2)], c);
const f = "esri.views.layers.SceneLayerView", w = s$1.getLogger(f);
let E = class extends u$1 {
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
    return t$1(this._layerFilter);
  }
  get _layerFilter() {
    const e2 = this.layer?.filter;
    if (null == e2 || e2.geometries.length < 1)
      return null;
    const r2 = this._geometryEngine;
    if (null == r2 || !this._projectionEngineLoaded && this._filterNeedsProjectionEngine)
      return n;
    const o2 = e2.geometries.at(0).spatialReference, i2 = e2.geometries.toArray().map((e3) => {
      try {
        e3 = r2.simplify(e3);
      } catch (t2) {
        return w.warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."), null;
      }
      if (null == e3)
        return null;
      if (e3.spatialReference.equals(o2))
        return e3;
      try {
        return b$2(e3, o2);
      } catch (t2) {
        return w.warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."), null;
      }
    }).filter(k$1).sort((e3, t2) => e3.extent.xmin - t2.extent.xmin), l2 = /* @__PURE__ */ new Set(), s2 = new Array(), a2 = new Array();
    for (let t2 of i2) {
      const e3 = t2.extent.xmin;
      if (s2.length = 0, l2.forEach((o3) => {
        if (e3 >= o3.extent.xmax)
          return a2.push(o3), void l2.delete(o3);
        t2.extent.ymin <= o3.extent.ymax && t2.extent.ymax >= o3.extent.ymin && r2.intersects(t2, o3) && s2.push(o3);
      }), s2.length > 0) {
        s2.push(t2);
        try {
          t2 = r2.union(s2);
        } catch (m2) {
          w.warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");
          continue;
        }
        s2.pop(), s2.forEach((e4) => l2.delete(e4));
      }
      l2.add(t2);
    }
    return l2.forEach((e3) => a2.push(e3)), a2.length > 0 ? { spatialRelationship: e2.spatialRelationship, geometries: a2 } : null;
  }
  get _filterNeedsProjectionEngine() {
    const e2 = this.layer.filter;
    if (null == e2 || e2.geometries.length <= 1)
      return false;
    const t2 = e2.geometries.at(0).spatialReference;
    return e2.geometries.some(({ spatialReference: e3 }) => !e3.equals(t2) && !D(e3, t2));
  }
  get layerFilterUpdating() {
    return u$2(this._layerFilter);
  }
  initialize() {
    const { signal: e2 } = this._abortController;
    w$1(() => this.destroyed || !this._geometryEngine && this.layer?.filter?.geometries?.length, e2).then(async () => {
      a$2(e2), this._geometryEngine = await import("./chunk-WuibsuuF.js");
    }).catch(f$3), this._projectionEngineLoaded = E$1(), w$1(() => this.destroyed || !this._projectionEngineLoaded && this._filterNeedsProjectionEngine, e2).then(async () => {
      a$2(e2), await _(), this._projectionEngineLoaded = true;
    }).catch(f$3);
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
e([y()], E.prototype, "layer", void 0), e([y()], E.prototype, "availableFields", null), e([y()], E.prototype, "maximumNumberOfFeatures", null), e([y({ readOnly: true })], E.prototype, "maximumNumberOfFeaturesExceeded", null), e([y()], E.prototype, "filter", void 0), e([y({ readOnly: true })], E.prototype, "layerFilter", null), e([y({ readOnly: true })], E.prototype, "_layerFilter", null), e([y()], E.prototype, "_geometryEngine", void 0), e([y()], E.prototype, "_projectionEngineLoaded", void 0), e([y()], E.prototype, "_filterNeedsProjectionEngine", null), e([y()], E.prototype, "layerFilterUpdating", null), E = e([c$3(f)], E);
const j = E;
export {
  i$1 as a,
  c,
  d$2 as d,
  f$1 as f,
  i$2 as i,
  j,
  u
};
