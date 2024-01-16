import { dj as Z, aM as s$1, di as i, gc as K, gb as H, dk as i$1, ge as i$2, dl as o, gd as a, fO as v, gf as et, gg as nt, gh as tt, ds as N, aB as l } from "./chunk-KFNcxJaF.js";
import { t, n } from "./chunk-wHNDki6K.js";
import { m } from "./chunk-UzDyJefO.js";
import { x, j } from "./chunk-XCl2NxdK.js";
import { W } from "./chunk-mk4KSkT-.js";
import { I, f, p, d, w as w$1 } from "./chunk-m6JrK9fL.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-vP0bHkve.js";
import "./chunk-tNARKRa3.js";
import "./chunk-I8SN0CZW.js";
import "./chunk-MT1PWqgL.js";
import "./chunk-H58sM9yM.js";
import "./chunk-ewxQmXoN.js";
import "./chunk-Tt9yuqqG.js";
const R = N, q = { xmin: -180, ymin: -90, xmax: 180, ymax: 90, spatialReference: N }, D = { hasAttachments: false, capabilities: "query, editing, create, delete, update", useStandardizedQueries: true, supportsCoordinatesQuantization: true, supportsReturningQueryGeometry: true, advancedQueryCapabilities: { supportsQueryAttachments: false, supportsStatistics: true, supportsPercentileStatistics: true, supportsReturningGeometryCentroid: true, supportsQueryWithDistance: true, supportsDistinct: true, supportsReturningQueryExtent: true, supportsReturningGeometryProperties: false, supportsHavingClause: true, supportsOrderBy: true, supportsPagination: true, supportsQueryWithResultType: false, supportsSqlExpression: true, supportsDisjointSpatialRel: true } };
function O(e) {
  return l(e) ? null != e.z : !!e.hasZ;
}
function w(e) {
  return l(e) ? null != e.m : !!e.hasM;
}
class S {
  constructor() {
    this._queryEngine = null, this._nextObjectId = null;
  }
  destroy() {
    this._queryEngine?.destroy(), this._queryEngine = this._createDefaultAttributes = null;
  }
  async load(t$1) {
    const i$3 = [], { features: s } = t$1, n$1 = this._inferLayerProperties(s, t$1.fields), r = t$1.fields || [], a$1 = null != t$1.hasM ? t$1.hasM : !!n$1.hasM, p2 = null != t$1.hasZ ? t$1.hasZ : !!n$1.hasZ, h = !t$1.spatialReference && !n$1.spatialReference, g = h ? R : t$1.spatialReference || n$1.spatialReference, I2 = h ? q : null, F = t$1.geometryType || n$1.geometryType, b = !F;
    let O2 = t$1.objectIdField || n$1.objectIdField, w2 = t$1.timeInfo;
    const S2 = new Z(r);
    if (!b && (h && i$3.push({ name: "feature-layer:spatial-reference-not-found", message: "Spatial reference not provided or found in features. Defaults to WGS84" }), !F))
      throw new s$1("feature-layer:missing-property", "geometryType not set and couldn't be inferred from the provided features");
    if (!O2)
      throw new s$1("feature-layer:missing-property", "objectIdField not set and couldn't be found in the provided fields");
    if (n$1.objectIdField && O2 !== n$1.objectIdField && (i$3.push({ name: "feature-layer:duplicated-oid-field", message: `Provided objectIdField "${O2}" doesn't match the field name "${n$1.objectIdField}", found in the provided fields` }), O2 = n$1.objectIdField), O2 && !n$1.objectIdField) {
      const e = S2.get(O2);
      e ? (O2 = e.name, e.type = "esriFieldTypeOID", e.editable = false, e.nullable = false) : r.unshift({ alias: O2, name: O2, type: "esriFieldTypeOID", editable: false, nullable: false });
    }
    for (const o2 of r) {
      if (null == o2.name && (o2.name = o2.alias), null == o2.alias && (o2.alias = o2.name), !o2.name)
        throw new s$1("feature-layer:invalid-field-name", "field name is missing", { field: o2 });
      if (o2.name === O2 && (o2.type = "esriFieldTypeOID"), !i.jsonValues.includes(o2.type))
        throw new s$1("feature-layer:invalid-field-type", `invalid type for field "${o2.name}"`, { field: o2 });
      null == o2.length && (o2.length = K(o2));
    }
    const v2 = {};
    for (const e of r)
      if ("esriFieldTypeOID" !== e.type && "esriFieldTypeGlobalID" !== e.type) {
        const t2 = H(e);
        void 0 !== t2 && (v2[e.name] = t2);
      }
    if (w2) {
      if (w2.startTimeField) {
        const e = S2.get(w2.startTimeField);
        e ? (w2.startTimeField = e.name, e.type = "esriFieldTypeDate") : w2.startTimeField = null;
      }
      if (w2.endTimeField) {
        const e = S2.get(w2.endTimeField);
        e ? (w2.endTimeField = e.name, e.type = "esriFieldTypeDate") : w2.endTimeField = null;
      }
      if (w2.trackIdField) {
        const e = S2.get(w2.trackIdField);
        e ? w2.trackIdField = e.name : (w2.trackIdField = null, i$3.push({ name: "feature-layer:invalid-timeInfo-trackIdField", message: "trackIdField is missing", details: { timeInfo: w2 } }));
      }
      w2.startTimeField || w2.endTimeField || (i$3.push({ name: "feature-layer:invalid-timeInfo", message: "startTimeField and endTimeField are missing or invalid", details: { timeInfo: w2 } }), w2 = null);
    }
    const Q = S2.dateFields.length ? { timeZoneIANA: t$1.dateFieldsTimeZone ?? i$1 } : null;
    this._createDefaultAttributes = i$2(v2, O2);
    const M = { warnings: i$3, featureErrors: [], layerDefinition: { ...D, drawingInfo: o(F), templates: a(v2), extent: I2, geometryType: F, objectIdField: O2, fields: r, hasZ: p2, hasM: a$1, timeInfo: w2, dateFieldsTimeReference: Q }, assignedObjectIds: {} };
    if (this._queryEngine = new W({ fieldsIndex: Z.fromLayerJSON({ fields: r, timeInfo: w2, dateFieldsTimeReference: Q }), geometryType: F, hasM: a$1, hasZ: p2, objectIdField: O2, spatialReference: g, featureStore: new m({ geometryType: F, hasM: a$1, hasZ: p2 }), timeInfo: w2, cacheSpatialQueries: true }), !s?.length)
      return this._nextObjectId = t, M;
    const Z$1 = n(O2, s);
    return this._nextObjectId = Z$1 + 1, await x(s, g), this._loadInitialFeatures(M, s);
  }
  async applyEdits(e) {
    const { spatialReference: t2, geometryType: i2 } = this._queryEngine;
    return await Promise.all([I(t2, i2), x(e.adds, t2), x(e.updates, t2)]), this._applyEdits(e);
  }
  queryFeatures(e, t2 = {}) {
    return this._queryEngine.executeQuery(e, t2.signal);
  }
  queryFeatureCount(e, t2 = {}) {
    return this._queryEngine.executeQueryForCount(e, t2.signal);
  }
  queryObjectIds(e, t2 = {}) {
    return this._queryEngine.executeQueryForIds(e, t2.signal);
  }
  queryExtent(e, t2 = {}) {
    return this._queryEngine.executeQueryForExtent(e, t2.signal);
  }
  querySnapping(e, t2 = {}) {
    return this._queryEngine.executeQueryForSnapping(e, t2.signal);
  }
  _inferLayerProperties(e, i2) {
    let s, n2, r = null, a2 = null, o2 = null;
    for (const l2 of e) {
      const e2 = l2.geometry;
      if (null != e2 && (r || (r = v(e2)), a2 || (a2 = e2.spatialReference), null == s && (s = O(e2)), null == n2 && (n2 = w(e2)), r && a2 && null != s && null != n2))
        break;
    }
    if (i2 && i2.length) {
      let e2 = null;
      i2.some((t2) => {
        const i3 = "esriFieldTypeOID" === t2.type, s2 = !t2.type && t2.name && "objectid" === t2.name.toLowerCase();
        return e2 = t2, i3 || s2;
      }) && (o2 = e2.name);
    }
    return { geometryType: r, spatialReference: a2, objectIdField: o2, hasM: n2, hasZ: s };
  }
  async _loadInitialFeatures(e, i2) {
    const { geometryType: s, hasM: r, hasZ: a2, objectIdField: o2, spatialReference: l2, featureStore: u, fieldsIndex: d2 } = this._queryEngine, f$1 = [];
    for (const n2 of i2) {
      if (null != n2.uid && (e.assignedObjectIds[n2.uid] = -1), n2.geometry && s !== v(n2.geometry)) {
        e.featureErrors.push(f("Incorrect geometry type."));
        continue;
      }
      const i3 = this._createDefaultAttributes(), r2 = p(d2, i3, n2.attributes, true);
      r2 ? e.featureErrors.push(r2) : (this._assignObjectId(i3, n2.attributes, true), n2.attributes = i3, null != n2.uid && (e.assignedObjectIds[n2.uid] = n2.attributes[o2]), null != n2.geometry && (n2.geometry = j(n2.geometry, n2.geometry.spatialReference, l2)), f$1.push(n2));
    }
    u.addMany(et([], f$1, s, a2, r, o2));
    const { fullExtent: c, timeExtent: m2 } = await this._queryEngine.fetchRecomputedExtents();
    if (e.layerDefinition.extent = c, m2) {
      const { start: t2, end: i3 } = m2;
      e.layerDefinition.timeInfo.timeExtent = [t2, i3];
    }
    return e;
  }
  async _applyEdits(e) {
    const { adds: t2, updates: i2, deletes: s } = e, n2 = { addResults: [], deleteResults: [], updateResults: [], uidToObjectId: {} };
    if (t2?.length && this._applyAddEdits(n2, t2), i2?.length && this._applyUpdateEdits(n2, i2), s?.length) {
      for (const e2 of s)
        n2.deleteResults.push(d(e2));
      this._queryEngine.featureStore.removeManyById(s);
    }
    const { fullExtent: r, timeExtent: a2 } = await this._queryEngine.fetchRecomputedExtents();
    return { extent: r, timeExtent: a2, featureEditResults: n2 };
  }
  _applyAddEdits(e, i2) {
    const { addResults: s } = e, { geometryType: r, hasM: a2, hasZ: o2, objectIdField: l2, spatialReference: u, featureStore: d$1, fieldsIndex: f$1 } = this._queryEngine, c = [];
    for (const n2 of i2) {
      if (n2.geometry && r !== v(n2.geometry)) {
        s.push(f("Incorrect geometry type."));
        continue;
      }
      const i3 = this._createDefaultAttributes(), a3 = p(f$1, i3, n2.attributes);
      if (a3)
        s.push(a3);
      else {
        if (this._assignObjectId(i3, n2.attributes), n2.attributes = i3, null != n2.uid) {
          const t2 = n2.attributes[l2];
          e.uidToObjectId[n2.uid] = t2;
        }
        if (null != n2.geometry) {
          const e2 = n2.geometry.spatialReference ?? u;
          n2.geometry = j(w$1(n2.geometry, e2), e2, u);
        }
        c.push(n2), s.push(d(n2.attributes[l2]));
      }
    }
    d$1.addMany(et([], c, r, o2, a2, l2));
  }
  _applyUpdateEdits({ updateResults: e }, i2) {
    const { geometryType: s, hasM: n2, hasZ: o2, objectIdField: l2, spatialReference: u, featureStore: d$1, fieldsIndex: f$1 } = this._queryEngine;
    for (const c of i2) {
      const { attributes: i3, geometry: m2 } = c, y = i3?.[l2];
      if (null == y) {
        e.push(f(`Identifier field ${l2} missing`));
        continue;
      }
      if (!d$1.has(y)) {
        e.push(f(`Feature with object id ${y} missing`));
        continue;
      }
      const h = nt(d$1.getFeature(y), s, o2, n2);
      if (null != m2) {
        if (s !== v(m2)) {
          e.push(f("Incorrect geometry type."));
          continue;
        }
        const i4 = m2.spatialReference ?? u;
        h.geometry = j(w$1(m2, i4), i4, u);
      }
      if (i3) {
        const t2 = p(f$1, h.attributes, i3);
        if (t2) {
          e.push(t2);
          continue;
        }
      }
      d$1.add(tt(h, s, o2, n2, l2)), e.push(d(y));
    }
  }
  _assignObjectId(e, t2, i2 = false) {
    const s = this._queryEngine.objectIdField;
    i2 && t2 && isFinite(t2[s]) ? e[s] = t2[s] : e[s] = this._nextObjectId++;
  }
}
export {
  S as default
};
