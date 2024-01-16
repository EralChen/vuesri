import { dh as I, ds as N, dj as Z, aM as s$1, di as i, gb as H, gc as K, dl as o, dk as i$1, gd as a, ge as i$2, el as d$1, bI as b, bb as s$2, dn as N$1, c4 as d$2, dq as rt, dp as st, a$ as j$1, dg as E, fO as v, gf as et, gg as nt, gh as tt } from "./chunk-KFNcxJaF.js";
import { m } from "./chunk-UzDyJefO.js";
import { x, j } from "./chunk-XCl2NxdK.js";
import { W } from "./chunk-mk4KSkT-.js";
import { I as I$1, p, d, f, w } from "./chunk-m6JrK9fL.js";
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
const D = { hasAttachments: false, capabilities: "query, editing, create, delete, update", useStandardizedQueries: true, supportsCoordinatesQuantization: true, supportsReturningQueryGeometry: true, advancedQueryCapabilities: { supportsQueryAttachments: false, supportsStatistics: true, supportsPercentileStatistics: true, supportsReturningGeometryCentroid: true, supportsQueryWithDistance: true, supportsDistinct: true, supportsReturningQueryExtent: true, supportsReturningGeometryProperties: false, supportsHavingClause: true, supportsOrderBy: true, supportsPagination: true, supportsQueryWithResultType: false, supportsSqlExpression: true, supportsDisjointSpatialRel: true } };
class Q {
  constructor() {
    this._queryEngine = null, this._snapshotFeatures = async (e) => {
      const t = await this._fetch(e);
      return this._createFeatures(t);
    };
  }
  destroy() {
    this._queryEngine?.destroy(), this._queryEngine = this._createDefaultAttributes = null;
  }
  async load(e, t = {}) {
    this._loadOptions = { url: e.url, customParameters: e.customParameters };
    const i$3 = [], [r] = await Promise.all([e.url ? this._fetch(t?.signal) : null, this._checkProjection(e.spatialReference)]), n = I(r, { geometryType: e.geometryType }), o$1 = e.fields || n.fields || [], l = null != e.hasZ ? e.hasZ : n.hasZ, u = n.geometryType;
    let d2 = e.objectIdField || n.objectIdFieldName || "__OBJECTID";
    const p2 = e.spatialReference || N;
    let c = e.timeInfo;
    o$1 === n.fields && n.unknownFields.length > 0 && i$3.push({ name: "geojson-layer:unknown-field-types", message: "Some fields types couldn't be inferred from the features and were dropped", details: { unknownFields: n.unknownFields } });
    const y = new Z(o$1);
    let h = y.get(d2);
    h ? ("esriFieldTypeString" !== h.type && (h.type = "esriFieldTypeOID"), h.editable = false, h.nullable = false, d2 = h.name) : (h = { alias: d2, name: d2, type: "string" === n.objectIdFieldType ? "esriFieldTypeString" : "esriFieldTypeOID", editable: false, nullable: false }, o$1.unshift(h));
    const _ = {};
    for (const a2 of o$1) {
      if (null == a2.name && (a2.name = a2.alias), null == a2.alias && (a2.alias = a2.name), !a2.name)
        throw new s$1("geojson-layer:invalid-field-name", "field name is missing", { field: a2 });
      if (!i.jsonValues.includes(a2.type))
        throw new s$1("geojson-layer:invalid-field-type", `invalid type for field "${a2.name}"`, { field: a2 });
      if (a2.name !== h.name) {
        const e2 = H(a2);
        void 0 !== e2 && (_[a2.name] = e2);
      }
      null == a2.length && (a2.length = K(a2));
    }
    if (c) {
      if (c.startTimeField) {
        const e2 = y.get(c.startTimeField);
        e2 ? (c.startTimeField = e2.name, e2.type = "esriFieldTypeDate") : c.startTimeField = null;
      }
      if (c.endTimeField) {
        const e2 = y.get(c.endTimeField);
        e2 ? (c.endTimeField = e2.name, e2.type = "esriFieldTypeDate") : c.endTimeField = null;
      }
      if (c.trackIdField) {
        const e2 = y.get(c.trackIdField);
        e2 ? c.trackIdField = e2.name : (c.trackIdField = null, i$3.push({ name: "geojson-layer:invalid-timeInfo-trackIdField", message: "trackIdField is missing", details: { timeInfo: c } }));
      }
      c.startTimeField || c.endTimeField || (i$3.push({ name: "geojson-layer:invalid-timeInfo", message: "startTimeField and endTimeField are missing", details: { timeInfo: c } }), c = null);
    }
    const F = u ? o(u) : void 0, b2 = y.dateFields.length ? { timeZoneIANA: i$1 } : null, T = { warnings: i$3, featureErrors: [], layerDefinition: { ...D, drawingInfo: F ?? void 0, templates: a(_), extent: void 0, geometryType: u, objectIdField: d2, fields: o$1, hasZ: !!l, timeInfo: c, dateFieldsTimeReference: b2 } };
    this._queryEngine = new W({ fieldsIndex: Z.fromLayerJSON({ fields: o$1, timeInfo: c, dateFieldsTimeReference: b2 }), geometryType: u, hasM: false, hasZ: l, objectIdField: d2, spatialReference: p2, timeInfo: c, featureStore: new m({ geometryType: u, hasM: false, hasZ: l }), cacheSpatialQueries: true });
    const w2 = this._queryEngine.fieldsIndex.requiredFields.indexOf(h);
    w2 > -1 && this._queryEngine.fieldsIndex.requiredFields.splice(w2, 1), this._createDefaultAttributes = i$2(_, d2);
    const q = await this._createFeatures(r);
    this._objectIdGenerator = this._createObjectIdGenerator(this._queryEngine, q);
    const x2 = this._normalizeFeatures(q, T.featureErrors);
    this._queryEngine.featureStore.addMany(x2);
    const { fullExtent: Q2, timeExtent: v2 } = await this._queryEngine.fetchRecomputedExtents();
    if (T.layerDefinition.extent = Q2, v2) {
      const { start: e2, end: t2 } = v2;
      T.layerDefinition.timeInfo.timeExtent = [e2, t2];
    }
    return T;
  }
  async applyEdits(e) {
    const { spatialReference: t, geometryType: s } = this._queryEngine;
    return await Promise.all([I$1(t, s), x(e.adds, t), x(e.updates, t)]), await this._waitSnapshotComplete(), this._applyEdits(e);
  }
  async queryFeatures(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQuery(e, t.signal);
  }
  async queryFeatureCount(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForCount(e, t.signal);
  }
  async queryObjectIds(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForIds(e, t.signal);
  }
  async queryExtent(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForExtent(e, t.signal);
  }
  async querySnapping(e, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForSnapping(e, t.signal);
  }
  async refresh(e) {
    this._loadOptions.customParameters = e, this._snapshotTask?.abort(), this._snapshotTask = d$1(this._snapshotFeatures), this._snapshotTask.promise.then((e2) => {
      this._queryEngine.featureStore.clear(), this._objectIdGenerator = this._createObjectIdGenerator(this._queryEngine, e2);
      const t = this._normalizeFeatures(e2);
      t && this._queryEngine.featureStore.addMany(t);
    }, (e2) => {
      this._queryEngine.featureStore.clear(), b(e2) || s$2.getLogger("esri.layers.GeoJSONLayer").error(new s$1("geojson-layer:refresh", "An error occurred during refresh", { error: e2 }));
    }), await this._waitSnapshotComplete();
    const { fullExtent: n, timeExtent: a2 } = await this._queryEngine.fetchRecomputedExtents();
    return { extent: n, timeExtent: a2 };
  }
  async _createFeatures(e) {
    if (null == e)
      return [];
    const { geometryType: t, hasZ: s, objectIdField: i2 } = this._queryEngine, r = N$1(e, { geometryType: t, hasZ: s, objectIdField: i2 });
    if (!d$2(this._queryEngine.spatialReference, N))
      for (const n of r)
        null != n.geometry && (n.geometry = rt(j(st(n.geometry, this._queryEngine.geometryType, this._queryEngine.hasZ, false), N, this._queryEngine.spatialReference)));
    return r;
  }
  async _waitSnapshotComplete() {
    if (this._snapshotTask && !this._snapshotTask.finished) {
      try {
        await this._snapshotTask.promise;
      } catch {
      }
      return this._waitSnapshotComplete();
    }
  }
  async _fetch(t) {
    const { url: s, customParameters: i2 } = this._loadOptions, r = (await j$1(s, { responseType: "json", query: { ...i2 }, signal: t })).data;
    return E(r), r;
  }
  _normalizeFeatures(e, t) {
    const { objectIdField: s, fieldsIndex: i2 } = this._queryEngine, r = [];
    for (const n of e) {
      const e2 = this._createDefaultAttributes(), a2 = p(i2, e2, n.attributes, true);
      a2 ? t?.push(a2) : (this._assignObjectId(e2, n.attributes, true), n.attributes = e2, n.objectId = e2[s], r.push(n));
    }
    return r;
  }
  async _applyEdits(e) {
    const { adds: t, updates: s, deletes: i2 } = e, r = { addResults: [], deleteResults: [], updateResults: [], uidToObjectId: {} };
    if (t?.length && this._applyAddEdits(r, t), s?.length && this._applyUpdateEdits(r, s), i2?.length) {
      for (const e2 of i2)
        r.deleteResults.push(d(e2));
      this._queryEngine.featureStore.removeManyById(i2);
    }
    const { fullExtent: n, timeExtent: a2 } = await this._queryEngine.fetchRecomputedExtents();
    return { extent: n, timeExtent: a2, featureEditResults: r };
  }
  _applyAddEdits(e, t) {
    const { addResults: s } = e, { geometryType: i2, hasM: r, hasZ: a2, objectIdField: o2, spatialReference: l, featureStore: u, fieldsIndex: p$1 } = this._queryEngine, c = [];
    for (const d$12 of t) {
      if (d$12.geometry && i2 !== v(d$12.geometry)) {
        s.push(f("Incorrect geometry type."));
        continue;
      }
      const t2 = this._createDefaultAttributes(), r2 = p(p$1, t2, d$12.attributes);
      if (r2)
        s.push(r2);
      else {
        if (this._assignObjectId(t2, d$12.attributes), d$12.attributes = t2, null != d$12.uid) {
          const t3 = d$12.attributes[o2];
          e.uidToObjectId[d$12.uid] = t3;
        }
        if (null != d$12.geometry) {
          const e2 = d$12.geometry.spatialReference ?? l;
          d$12.geometry = j(w(d$12.geometry, e2), e2, l);
        }
        c.push(d$12), s.push(d(d$12.attributes[o2]));
      }
    }
    u.addMany(et([], c, i2, a2, r, o2));
  }
  _applyUpdateEdits({ updateResults: e }, t) {
    const { geometryType: s, hasM: i2, hasZ: r, objectIdField: a2, spatialReference: o2, featureStore: l, fieldsIndex: u } = this._queryEngine;
    for (const d$12 of t) {
      const { attributes: t2, geometry: m2 } = d$12, y = t2?.[a2];
      if (null == y) {
        e.push(f(`Identifier field ${a2} missing`));
        continue;
      }
      if (!l.has(y)) {
        e.push(f(`Feature with object id ${y} missing`));
        continue;
      }
      const f$1 = nt(l.getFeature(y), s, r, i2);
      if (null != m2) {
        if (s !== v(m2)) {
          e.push(f("Incorrect geometry type."));
          continue;
        }
        const t3 = m2.spatialReference ?? o2;
        f$1.geometry = j(w(m2, t3), t3, o2);
      }
      if (t2) {
        const s2 = p(u, f$1.attributes, t2);
        if (s2) {
          e.push(s2);
          continue;
        }
      }
      l.add(tt(f$1, s, r, i2, a2)), e.push(d(y));
    }
  }
  _createObjectIdGenerator(e, t) {
    const s = e.fieldsIndex.get(e.objectIdField);
    if ("esriFieldTypeString" === s.type)
      return () => s.name + "-" + Date.now().toString(16);
    let i2 = Number.NEGATIVE_INFINITY;
    for (const r of t)
      r.objectId && (i2 = Math.max(i2, r.objectId));
    return i2 = Math.max(0, i2) + 1, () => i2++;
  }
  _assignObjectId(e, t, s = false) {
    const i2 = this._queryEngine.objectIdField;
    e[i2] = s && i2 in t ? t[i2] : this._objectIdGenerator();
  }
  async _checkProjection(e) {
    try {
      await x(N, e);
    } catch {
      throw new s$1("geojson-layer", "Projection not supported");
    }
  }
}
export {
  Q as default
};
