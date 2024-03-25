import { hH as e, aO as s$1, dK as i, rk as Fe, rl as Ie, ec as be, rm as c$3, rn as w, ro as B, ee as i$1, e0 as N$1, bO as G$1, rp as e$1, rq as t$1, dZ as ge, rr as f$2, dY as ye, rs as d$2, rt as p$2, ru as C$1, rv as k, rw as $$1, rx as E, ry as P, rz as U, mz as T$1, rA as m$2, rB as v, rC as l$1, rD as l$2, rE as r$1, rF as v$1, bD as a$2, rG as h$2, rH as t$2, rI as r$2, b8 as a$3, dL as Z, g8 as l$3, c8 as u$2, rJ as l$4, bI as R, cX as y$3, cU as s$2, rK as O, di as C$2, dh as i$2, dk as o$1, j3 as W$1, rL as C$3, b3 as z, r2 as V, dR as ot, bd as m$3, p8 as a$4, be as f$3, bg as a$5, b6 as u$3, b5 as b$1 } from "./chunk-ejFG4zJ0.js";
import { x as x$1 } from "./chunk-KyVc0M84.js";
import { a as a$1, h as h$1, j, y as y$2, P as P$1, x, g as g$1, b as j$1, n as n$1, S, v as v$2, t as t$3, I, c as b } from "./chunk-pZO3UCge.js";
class r {
  constructor(e$12, r2) {
    this._cache = new e(e$12), this._invalidCache = new e(r2);
  }
  get(t2, r2) {
    const i2 = `${r2.uid}:${t2}`, c3 = this._cache.get(i2);
    if (c3)
      return c3;
    if (null != this._invalidCache.get(i2))
      return null;
    try {
      const c4 = x$1.create(t2, r2);
      return this._cache.put(i2, c4), c4;
    } catch (n2) {
      return this._invalidCache.put(i2, n2), null;
    }
  }
  getError(t2, e2) {
    const r2 = `${e2.uid}:${t2}`;
    return this._invalidCache.get(r2) ?? null;
  }
}
const s = new r(50, 500), t = "unsupported-query", n = " as ", o = /* @__PURE__ */ new Set(["esriFieldTypeOID", "esriFieldTypeSmallInteger", "esriFieldTypeBigInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeLong"]), a = /* @__PURE__ */ new Set(["esriFieldTypeDate", "esriFieldTypeDateOnly", "esriFieldTypeTimeOnly", "esriFieldTypeTimestampOffset"]), l = /* @__PURE__ */ new Set(["esriFieldTypeString", "esriFieldTypeGUID", "esriFieldTypeGlobalID", ...o, ...a]);
function d$1(i2, r2, n2 = {}) {
  const o2 = c$2(r2, i2);
  if (!o2) {
    const n3 = s.getError(r2, i2);
    throw new s$1(t, "invalid SQL expression", { expression: r2, error: n3 });
  }
  const a2 = n2.expressionName || "expression";
  if (n2.validateStandardized && !o2.isStandardized)
    throw new s$1(t, `${a2} is not standard`, { expression: r2 });
  if (n2.validateAggregate && !o2.isAggregate)
    throw new s$1(t, `${a2} does not contain a valid aggregate function`, { expression: r2 });
  return o2.fieldNames;
}
function p$1(e2, i2, r2, s2) {
  if (!r2)
    return true;
  const t2 = "where clause";
  return g(e2, i2, d$1(e2, r2, { validateStandardized: true, expressionName: t2 }), { expressionName: t2, query: s2 }), true;
}
function f$1(i2, r2, s2, n2, o2) {
  if (!s2)
    return true;
  const a2 = "having clause", l2 = d$1(i2, s2, { validateAggregate: true, expressionName: a2 });
  g(i2, r2, l2, { expressionName: a2, query: o2 });
  const p2 = c$2(s2, i2), f2 = p2?.getExpressions().every((e2) => {
    const { aggregateType: r3, field: s3 } = e2, t2 = i2.get(s3)?.name;
    return n2.some((e3) => {
      const { onStatisticField: s4, statisticType: n3 } = e3, o3 = i2.get(s4)?.name;
      return o3 === t2 && n3.toLowerCase().trim() === r3;
    });
  });
  if (!f2)
    throw new s$1(t, "expressions in having clause should also exist in outStatistics", { having: s2 });
  return true;
}
function c$2(e2, i2) {
  return e2 ? s.get(e2, i2) : null;
}
function u$1(e2) {
  return /\((.*?)\)/.test(e2) ? e2 : e2.split(n)[0];
}
function y$1(e2) {
  return e2.split(n)[1];
}
function g(i2, r2, s2, n2 = {}) {
  const o2 = /* @__PURE__ */ new Map();
  if (m$1(o2, i2, r2, n2.allowedFieldTypes ?? l, s2), o2.size) {
    const i3 = n2.expressionName ?? "expression";
    throw new s$1(t, `${i3} contains invalid or missing fields`, { errors: Array.from(o2.values()), query: n2.query });
  }
}
function m$1(e2, i2, r2, s2, t2) {
  const n2 = t2.includes("*") ? [...r2, ...t2.filter((e3) => "*" !== e3)] : t2;
  for (const a2 of n2) {
    if (i2.get(a2))
      T(e2, i2, r2, s2, a2);
    else
      try {
        const t3 = d$1(i2, u$1(a2), { validateStandardized: true });
        for (const n3 of t3)
          T(e2, i2, r2, s2, n3);
      } catch (o2) {
        e2.set(a2, { type: "expression-error", expression: a2, error: o2 });
      }
  }
}
function T(e2, i$12, s2, t2, n2) {
  const o2 = i$12.get(n2);
  o2 ? s2.has(o2.name) ? "all" !== t2 && false === t2?.has(o2.type) && e2.set(n2, { type: "invalid-type", fieldName: o2.name, fieldType: i.fromJSON(o2.type), allowedFieldTypes: Array.from(t2, (e3) => i.fromJSON(e3)) }) : e2.set(n2, { type: "missing-field", fieldName: o2.name }) : e2.set(n2, { type: "invalid-field", fieldName: n2 });
}
let c$1 = class c {
  constructor(s2, a2, l2) {
    this._fieldDataCache = /* @__PURE__ */ new Map(), this._returnDistinctMap = /* @__PURE__ */ new Map(), this.returnDistinctValues = s2.returnDistinctValues ?? false, this.fieldsIndex = l2, this.featureAdapter = a2;
    const r2 = s2.outFields;
    if (r2 && !r2.includes("*")) {
      this.outFields = r2;
      let s3 = 0;
      for (const a3 of r2) {
        const r3 = u$1(a3), n2 = this.fieldsIndex.get(r3), u2 = n2 ? null : c$2(r3, l2), o2 = n2 ? n2.name : y$1(a3) || "FIELD_EXP_" + s3++;
        this._fieldDataCache.set(a3, { alias: o2, clause: u2 });
      }
    }
  }
  countDistinctValues(t2) {
    return this.returnDistinctValues ? (t2.forEach((t3) => this.getAttributes(t3)), this._returnDistinctMap.size) : t2.length;
  }
  getAttributes(t2) {
    const e2 = this._processAttributesForOutFields(t2);
    return this._processAttributesForDistinctValues(e2);
  }
  getFieldValue(t2, i2, s2) {
    const a2 = s2 ? s2.name : i2;
    let l2 = null;
    return this._fieldDataCache.has(a2) ? l2 = this._fieldDataCache.get(a2)?.clause : s2 || (l2 = c$2(i2, this.fieldsIndex), this._fieldDataCache.set(a2, { alias: a2, clause: l2 })), s2 ? this.featureAdapter.getAttribute(t2, a2) : l2?.calculateValue(t2, this.featureAdapter);
  }
  getDataValues(t2, e2, i2 = true) {
    const s2 = e2.normalizationType, d2 = e2.normalizationTotal, c3 = this.fieldsIndex.get(e2.field), h2 = Fe(c3) || Ie(c3), f2 = be(c3);
    return t2.map((t3) => {
      let a2 = e2.field && this.getFieldValue(t3, e2.field, this.fieldsIndex.get(e2.field));
      if (e2.field2 ? (a2 = `${c$3(a2)}${e2.fieldDelimiter}${c$3(this.getFieldValue(t3, e2.field2, this.fieldsIndex.get(e2.field2)))}`, e2.field3 && (a2 = `${a2}${e2.fieldDelimiter}${c$3(this.getFieldValue(t3, e2.field3, this.fieldsIndex.get(e2.field3)))}`)) : "string" == typeof a2 && i2 && (h2 ? a2 = a2 ? new Date(a2).getTime() : null : f2 && (a2 = a2 ? w(a2) : null)), s2 && Number.isFinite(a2)) {
        const i3 = "field" === s2 && e2.normalizationField ? this.getFieldValue(t3, e2.normalizationField, this.fieldsIndex.get(e2.normalizationField)) : null;
        a2 = B(a2, s2, i3, d2);
      }
      return a2;
    });
  }
  async getExpressionValues(t2, e2, i2, a2, l2) {
    const { arcadeUtils: r2 } = await i$1(), n2 = r2.hasGeometryOperations(e2);
    n2 && await r2.enableGeometryOperations();
    const u2 = r2.createFunction(e2), o2 = r2.getViewInfo(i2), c3 = { fields: this.fieldsIndex.fields };
    return t2.map((t3) => {
      const e3 = { attributes: this.featureAdapter.getAttributes(t3), layer: c3, geometry: n2 ? { ...a$1(a2.geometryType, a2.hasZ, a2.hasM, this.featureAdapter.getGeometry(t3)), spatialReference: i2?.spatialReference } : null }, d2 = r2.createExecContext(e3, o2, l2);
      return r2.executeFunction(u2, d2);
    });
  }
  validateItem(t2, i2) {
    return this._fieldDataCache.has(i2) || this._fieldDataCache.set(i2, { alias: i2, clause: c$2(i2, this.fieldsIndex) }), this._fieldDataCache.get(i2)?.clause?.testFeature(t2, this.featureAdapter) ?? false;
  }
  validateItems(t2, i2) {
    return this._fieldDataCache.has(i2) || this._fieldDataCache.set(i2, { alias: i2, clause: c$2(i2, this.fieldsIndex) }), this._fieldDataCache.get(i2)?.clause?.testSet(t2, this.featureAdapter) ?? false;
  }
  _processAttributesForOutFields(t2) {
    const e2 = this.outFields;
    if (!e2?.length)
      return this.featureAdapter.getAttributes(t2);
    const i2 = {};
    for (const s2 of e2) {
      const { alias: e3, clause: a2 } = this._fieldDataCache.get(s2);
      i2[e3] = a2 ? a2.calculateValue(t2, this.featureAdapter) : this.featureAdapter.getAttribute(t2, e3);
    }
    return i2;
  }
  _processAttributesForDistinctValues(t2) {
    if (null == t2 || !this.returnDistinctValues)
      return t2;
    const e2 = this.outFields, i2 = [];
    if (e2)
      for (const l2 of e2) {
        const { alias: e3 } = this._fieldDataCache.get(l2);
        i2.push(t2[e3]);
      }
    else
      for (const l2 in t2)
        i2.push(t2[l2]);
    const s2 = `${(e2 || ["*"]).join(",")}=${i2.join(",")}`;
    let a2 = this._returnDistinctMap.get(s2) || 0;
    return this._returnDistinctMap.set(s2, ++a2), a2 > 1 ? null : t2;
  }
};
class q {
  constructor(e2, t2, s2) {
    this.items = e2, this.query = t2, this.geometryType = s2.geometryType, this.hasM = s2.hasM, this.hasZ = s2.hasZ, this.fieldsIndex = s2.fieldsIndex, this.objectIdField = s2.objectIdField, this.spatialReference = s2.spatialReference, this.featureAdapter = s2.featureAdapter;
  }
  get size() {
    return this.items.length;
  }
  createQueryResponseForCount() {
    const e2 = new c$1(this.query, this.featureAdapter, this.fieldsIndex);
    if (!this.query.outStatistics)
      return e2.countDistinctValues(this.items);
    const { groupByFieldsForStatistics: t2, having: s2, outStatistics: i2 } = this.query, a2 = t2?.length;
    if (!!!a2)
      return 1;
    const r2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map(), o2 = /* @__PURE__ */ new Set();
    for (const l2 of i2) {
      const { statisticType: i3 } = l2, a3 = "exceedslimit" !== i3 ? l2.onStatisticField : void 0;
      if (!n2.has(a3)) {
        const s3 = [];
        for (const i4 of t2) {
          const t3 = this._getAttributeValues(e2, i4, r2);
          s3.push(t3);
        }
        n2.set(a3, this._calculateUniqueValues(s3, e2.returnDistinctValues));
      }
      const u2 = n2.get(a3);
      for (const t3 in u2) {
        const { data: i4, items: a4 } = u2[t3], r3 = i4.join(",");
        s2 && !e2.validateItems(a4, s2) || o2.add(r3);
      }
    }
    return o2.size;
  }
  async createQueryResponse() {
    let e2;
    if (this.query.outStatistics) {
      e2 = this.query.outStatistics.some((e3) => "exceedslimit" === e3.statisticType) ? this._createExceedsLimitQueryResponse(this.query) : await this._createStatisticsQueryResponse(this.query);
    } else
      e2 = this._createFeatureQueryResponse(this.query);
    if (this.query.returnQueryGeometry) {
      const t2 = this.query.geometry;
      N$1(this.query.outSR) && !G$1(t2.spatialReference, this.query.outSR) ? e2.queryGeometry = h$1({ spatialReference: this.query.outSR, ...j(t2, t2.spatialReference, this.query.outSR) }) : e2.queryGeometry = h$1({ spatialReference: this.query.outSR, ...t2 });
    }
    return e2;
  }
  createSnappingResponse(e2, t2) {
    const s2 = this.featureAdapter, i2 = C(this.hasZ, this.hasM), { point: a2, mode: r2 } = e2, n2 = "number" == typeof e2.distance ? e2.distance : e2.distance.x, o2 = "number" == typeof e2.distance ? e2.distance : e2.distance.y, l2 = { candidates: [] }, u2 = "esriGeometryPolygon" === this.geometryType, c3 = this._getPointCreator(r2, this.spatialReference, t2), d2 = new G(null, 0), m2 = new G(null, 0), f2 = { x: 0, y: 0, z: 0 };
    for (const p2 of this.items) {
      const t3 = s2.getGeometry(p2);
      if (null == t3)
        continue;
      const { coords: r3, lengths: y2 } = t3;
      if (d2.coords = r3, m2.coords = r3, e2.returnEdge) {
        let e3 = 0;
        for (let t4 = 0; t4 < y2.length; t4++) {
          const r4 = y2[t4];
          for (let t5 = 0; t5 < r4; t5++, e3 += i2) {
            const u3 = d2;
            if (u3.coordsIndex = e3, t5 !== r4 - 1) {
              const t6 = m2;
              t6.coordsIndex = e3 + i2;
              const r5 = f2;
              N(f2, a2, u3, t6);
              const d3 = (a2.x - r5.x) / n2, g2 = (a2.y - r5.y) / o2, y3 = d3 * d3 + g2 * g2;
              y3 <= 1 && l2.candidates.push(e$1(s2.getObjectId(p2), c3(r5), Math.sqrt(y3), c3(u3), c3(t6)));
            }
          }
        }
      }
      if ("none" !== e2.vertexMode) {
        const t4 = u2 ? r3.length - i2 : r3.length;
        if ("all" === e2.vertexMode)
          for (let e3 = 0; e3 < t4; e3 += i2) {
            const t5 = d2;
            t5.coordsIndex = e3;
            const i3 = (a2.x - t5.x) / n2, r4 = (a2.y - t5.y) / o2, u3 = i3 * i3 + r4 * r4;
            u3 <= 1 && l2.candidates.push(t$1(s2.getObjectId(p2), c3(t5), Math.sqrt(u3)));
          }
        else if ("ends" === e2.vertexMode) {
          const e3 = [0];
          u2 || e3.push(r3.length - i2);
          for (const t5 of e3) {
            const e4 = d2;
            e4.coordsIndex = t5;
            const i3 = (a2.x - e4.x) / n2, r4 = (a2.y - e4.y) / o2, u3 = i3 * i3 + r4 * r4;
            u3 <= 1 && l2.candidates.push(t$1(s2.getObjectId(p2), c3(e4), Math.sqrt(u3)));
          }
        }
      }
    }
    return l2.candidates.sort((e3, t3) => e3.distance - t3.distance), l2;
  }
  _getPointCreator(e2, t2, s2) {
    const i2 = null == s2 || G$1(t2, s2) ? (e3) => e3 : (e3) => j(e3, t2, s2), { hasZ: a2 } = this, r2 = 0;
    return "3d" === e2 ? a2 ? ({ x: e3, y: t3, z: s3 }) => i2({ x: e3, y: t3, z: s3 }) : ({ x: e3, y: t3 }) => i2({ x: e3, y: t3, z: r2 }) : ({ x: e3, y: t3 }) => i2({ x: e3, y: t3 });
  }
  async createSummaryStatisticsResponse(e2) {
    const { field: t2, valueExpression: s2, normalizationField: i2, normalizationType: a2, normalizationTotal: r2, minValue: n2, maxValue: o2, scale: l2, timeZone: u2 } = e2, c3 = this.fieldsIndex.get(t2), d2 = ge(c3) || Fe(c3) || Ie(c3), m2 = await this._getDataValues({ field: t2, valueExpression: s2, normalizationField: i2, normalizationType: a2, normalizationTotal: r2, scale: l2, timeZone: u2 }), h2 = f$2({ normalizationType: a2, normalizationField: i2, minValue: n2, maxValue: o2 }), g2 = { value: 0.5, fieldType: c3?.type }, I2 = ye(c3) ? d$2({ values: m2, supportsNullCount: h2, percentileParams: g2 }) : p$2({ values: m2, minValue: n2, maxValue: o2, useSampleStdDev: !a2, supportsNullCount: h2, percentileParams: g2 });
    return C$1(I2, d2);
  }
  async createUniqueValuesResponse(e2) {
    const { field: t2, valueExpression: s2, domains: i2, returnAllCodedValues: a2, scale: r2, timeZone: n2 } = e2, o2 = await this._getDataValues({ field: t2, field2: e2.field2, field3: e2.field3, fieldDelimiter: e2.fieldDelimiter, valueExpression: s2, scale: r2, timeZone: n2 }, false), l2 = k(o2);
    return $$1(l2, i2, a2, e2.fieldDelimiter);
  }
  async createClassBreaksResponse(e2) {
    const { field: t2, valueExpression: s2, normalizationField: i2, normalizationType: a2, normalizationTotal: r2, classificationMethod: n2, standardDeviationInterval: o2, minValue: l2, maxValue: u2, numClasses: c3, scale: d2, timeZone: m2 } = e2, h2 = await this._getDataValues({ field: t2, valueExpression: s2, normalizationField: i2, normalizationType: a2, normalizationTotal: r2, scale: d2, timeZone: m2 }), g2 = E(h2, { field: t2, normalizationField: i2, normalizationType: a2, normalizationTotal: r2, classificationMethod: n2, standardDeviationInterval: o2, minValue: l2, maxValue: u2, numClasses: c3 });
    return P(g2, n2);
  }
  async createHistogramResponse(e2) {
    const { field: t2, valueExpression: s2, normalizationField: i2, normalizationType: a2, normalizationTotal: r2, classificationMethod: n2, standardDeviationInterval: o2, minValue: l2, maxValue: u2, numBins: c3, scale: d2, timeZone: m2 } = e2, h2 = await this._getDataValues({ field: t2, valueExpression: s2, normalizationField: i2, normalizationType: a2, normalizationTotal: r2, scale: d2, timeZone: m2 });
    return U(h2, { field: t2, normalizationField: i2, normalizationType: a2, normalizationTotal: r2, classificationMethod: n2, standardDeviationInterval: o2, minValue: l2, maxValue: u2, numBins: c3 });
  }
  _sortFeatures(e2, t2, s2) {
    if (e2.length > 1 && t2?.length)
      for (const i2 of t2.reverse()) {
        const t3 = i2.split(" "), a2 = t3[0], r2 = this.fieldsIndex.get(a2), n2 = !!t3[1] && "desc" === t3[1].toLowerCase(), o2 = T$1(r2?.type, n2);
        e2.sort((e3, t4) => {
          const i3 = s2(e3, a2, r2), n3 = s2(t4, a2, r2);
          return o2(i3, n3);
        });
      }
  }
  _createFeatureQueryResponse(e2) {
    const t2 = this.items, { geometryType: s2, hasM: i2, hasZ: a2, objectIdField: n2, spatialReference: o2 } = this, { outFields: l2, outSR: c3, quantizationParameters: d2, resultRecordCount: m2, resultOffset: h2, returnZ: g2, returnM: f2 } = e2, p2 = null != m2 && t2.length > (h2 || 0) + m2, y2 = l2 && (l2.includes("*") ? [...this.fieldsIndex.fields] : l2.map((e3) => this.fieldsIndex.get(e3)));
    return { exceededTransferLimit: p2, features: this._createFeatures(e2, t2), fields: y2, geometryType: s2, hasM: i2 && f2, hasZ: a2 && g2, objectIdFieldName: n2, spatialReference: h$1(c3 || o2), transform: d2 && m$2(d2) || null };
  }
  _createFeatures(e2, t2) {
    const s2 = new c$1(e2, this.featureAdapter, this.fieldsIndex), { hasM: i2, hasZ: a2 } = this, { orderByFields: n2, quantizationParameters: o2, returnGeometry: u2, returnCentroid: m2, maxAllowableOffset: h2, resultOffset: g2, resultRecordCount: f2, returnZ: p2 = false, returnM: y2 = false } = e2, x2 = a2 && p2, I2 = i2 && y2;
    let T2 = [], V2 = 0;
    const F = [...t2];
    if (this._sortFeatures(F, n2, (e3, t3, i3) => s2.getFieldValue(e3, t3, i3)), this.geometryType && (u2 || m2)) {
      const e3 = m$2(o2) ?? void 0, t3 = "esriGeometryPolygon" === this.geometryType || "esriGeometryPolyline" === this.geometryType;
      if (u2 && !m2)
        for (const i3 of F) {
          const a3 = this.featureAdapter.getGeometry(i3), r2 = { attributes: s2.getAttributes(i3), geometry: a$1(this.geometryType, this.hasZ, this.hasM, a3, h2, e3, x2, I2) };
          t3 && a3 && !r2.geometry && (r2.centroid = y$2(this, this.featureAdapter.getCentroid(i3, this), e3)), T2[V2++] = r2;
        }
      else if (!u2 && m2)
        for (const i3 of F)
          T2[V2++] = { attributes: s2.getAttributes(i3), centroid: y$2(this, this.featureAdapter.getCentroid(i3, this), e3) };
      else
        for (const i3 of F)
          T2[V2++] = { attributes: s2.getAttributes(i3), centroid: y$2(this, this.featureAdapter.getCentroid(i3, this), e3), geometry: a$1(this.geometryType, this.hasZ, this.hasM, this.featureAdapter.getGeometry(i3), h2, e3, x2, I2) };
    } else
      for (const r2 of F) {
        const e3 = s2.getAttributes(r2);
        e3 && (T2[V2++] = { attributes: e3 });
      }
    const S2 = g2 || 0;
    if (null != f2) {
      const e3 = S2 + f2;
      T2 = T2.slice(S2, Math.min(T2.length, e3));
    }
    return T2;
  }
  _createExceedsLimitQueryResponse(e2) {
    let t2 = false, s2 = Number.POSITIVE_INFINITY, i2 = Number.POSITIVE_INFINITY, a2 = Number.POSITIVE_INFINITY;
    for (const r2 of e2.outStatistics ?? [])
      if ("exceedslimit" === r2.statisticType) {
        s2 = null != r2.maxPointCount ? r2.maxPointCount : Number.POSITIVE_INFINITY, i2 = null != r2.maxRecordCount ? r2.maxRecordCount : Number.POSITIVE_INFINITY, a2 = null != r2.maxVertexCount ? r2.maxVertexCount : Number.POSITIVE_INFINITY;
        break;
      }
    if ("esriGeometryPoint" === this.geometryType)
      t2 = this.items.length > s2;
    else if (this.items.length > i2)
      t2 = true;
    else {
      const e3 = C(this.hasZ, this.hasM), s3 = this.featureAdapter;
      t2 = this.items.reduce((e4, t3) => {
        const i3 = s3.getGeometry(t3);
        return e4 + (null != i3 && i3.coords.length || 0);
      }, 0) / e3 > a2;
    }
    return { fields: [{ name: "exceedslimit", type: "esriFieldTypeInteger", alias: "exceedslimit", sqlType: "sqlTypeInteger", domain: null, defaultValue: null }], features: [{ attributes: { exceedslimit: Number(t2) } }] };
  }
  async _createStatisticsQueryResponse(e2) {
    const t2 = { attributes: {} }, s2 = [], i2 = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Map(), r2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map(), o2 = new c$1(e2, this.featureAdapter, this.fieldsIndex), u2 = e2.outStatistics, { groupByFieldsForStatistics: c3, having: d2, orderByFields: m2, resultRecordCount: h2 } = e2, g2 = c3?.length, f2 = !!g2, p2 = f2 ? c3[0] : null, y2 = f2 && !this.fieldsIndex.get(p2);
    for (const l2 of u2 ?? []) {
      const { outStatisticFieldName: e3, statisticType: u3 } = l2, m3 = l2, h3 = "exceedslimit" !== u3 ? l2.onStatisticField : void 0, I3 = "percentile_disc" === u3 || "percentile_cont" === u3, T2 = "EnvelopeAggregate" === u3 || "CentroidAggregate" === u3 || "ConvexHullAggregate" === u3, V2 = f2 && 1 === g2 && (h3 === p2 || y2) && "count" === u3;
      if (f2) {
        if (!r2.has(h3)) {
          const e4 = [];
          for (const t4 of c3) {
            const s4 = this._getAttributeValues(o2, t4, i2);
            e4.push(s4);
          }
          r2.set(h3, this._calculateUniqueValues(e4, !T2 && o2.returnDistinctValues));
        }
        const t3 = r2.get(h3);
        if (!t3)
          continue;
        const s3 = Object.keys(t3);
        for (const a3 of s3) {
          const { count: s4, data: r3, items: l3, itemPositions: u4 } = t3[a3], g3 = r3.join(",");
          if (!d2 || o2.validateItems(l3, d2)) {
            const t4 = n2.get(g3) || { attributes: {} };
            if (T2) {
              t4.aggregateGeometries || (t4.aggregateGeometries = {});
              const { aggregateGeometries: e4, outStatisticFieldName: s5 } = await this._getAggregateGeometry(m3, l3);
              t4.aggregateGeometries[s5] = e4;
            } else {
              let a5 = null;
              if (V2)
                a5 = s4;
              else {
                const e4 = this._getAttributeValues(o2, h3, i2), t5 = u4.map((t6) => e4[t6]);
                a5 = I3 && "statisticParameters" in m3 ? this._getPercentileValue(m3, t5) : this._getStatisticValue(m3, t5, null, o2.returnDistinctValues);
              }
              t4.attributes[e3] = a5;
            }
            let a4 = 0;
            c3.forEach((e4, s5) => t4.attributes[this.fieldsIndex.get(e4) ? e4 : "EXPR_" + ++a4] = r3[s5]), n2.set(g3, t4);
          }
        }
      } else if (T2) {
        t2.aggregateGeometries || (t2.aggregateGeometries = {});
        const { aggregateGeometries: e4, outStatisticFieldName: s3 } = await this._getAggregateGeometry(m3, this.items);
        t2.aggregateGeometries[s3] = e4;
      } else {
        const s3 = this._getAttributeValues(o2, h3, i2);
        t2.attributes[e3] = I3 && "statisticParameters" in m3 ? this._getPercentileValue(m3, s3) : this._getStatisticValue(m3, s3, a2, o2.returnDistinctValues);
      }
      const F = "min" !== u3 && "max" !== u3 || !ye(this.fieldsIndex.get(h3)) && !this._isAnyDateField(h3) ? null : this.fieldsIndex.get(h3)?.type;
      s2.push({ name: e3, alias: e3, type: F || "esriFieldTypeDouble" });
    }
    const I2 = f2 ? Array.from(n2.values()) : [t2];
    return this._sortFeatures(I2, m2, (e3, t3) => e3.attributes[t3]), h2 && (I2.length = Math.min(h2, I2.length)), { fields: s2, features: I2 };
  }
  _isAnyDateField(e2) {
    const t2 = this.fieldsIndex.get(e2);
    return ge(t2) || Fe(t2) || Ie(t2) || be(t2);
  }
  async _getAggregateGeometry(e2, r2) {
    const { convexHull: n2, union: o2 } = await import("./chunk-7UKjY7OO.js"), { statisticType: l2, outStatisticFieldName: u2 } = e2, { featureAdapter: d2, spatialReference: m2, geometryType: h2, hasZ: g2, hasM: f2 } = this, p2 = r2.map((e3) => a$1(h2, g2, f2, d2.getGeometry(e3))), y2 = n2(m2, p2, true)[0], x2 = { aggregateGeometries: null, outStatisticFieldName: null };
    if ("EnvelopeAggregate" === l2) {
      const e3 = y2 ? v(y2) : l$1(o2(m2, p2));
      x2.aggregateGeometries = { ...e3, spatialReference: m2 }, x2.outStatisticFieldName = u2 || "extent";
    } else if ("CentroidAggregate" === l2) {
      const e3 = y2 ? l$2(y2) : r$1(l$1(o2(m2, p2)));
      x2.aggregateGeometries = { x: e3[0], y: e3[1], spatialReference: m2 }, x2.outStatisticFieldName = u2 || "centroid";
    } else
      "ConvexHullAggregate" === l2 && (x2.aggregateGeometries = y2, x2.outStatisticFieldName = u2 || "convexHull");
    return x2;
  }
  _getStatisticValue(e2, t2, s2, i2) {
    const { onStatisticField: a2, statisticType: r2 } = e2;
    let n2 = null;
    n2 = s2?.has(a2) ? s2.get(a2) : ye(this.fieldsIndex.get(a2)) || this._isAnyDateField(a2) ? d$2({ values: t2, returnDistinct: i2 }) : p$2({ values: i2 ? [...new Set(t2)] : t2, minValue: null, maxValue: null, useSampleStdDev: true }), s2 && s2.set(a2, n2);
    return n2["var" === r2 ? "variance" : r2];
  }
  _getPercentileValue(e2, t2) {
    const { onStatisticField: s2, statisticParameters: i2, statisticType: a2 } = e2, { value: r2, orderBy: n2 } = i2, o2 = this.fieldsIndex.get(s2);
    return v$1(t2, { value: r2, orderBy: n2, fieldType: o2?.type, isDiscrete: "percentile_disc" === a2 });
  }
  _getAttributeValues(e2, t2, s2) {
    if (s2.has(t2))
      return s2.get(t2);
    const i2 = this.fieldsIndex.get(t2), a2 = this.items.map((s3) => e2.getFieldValue(s3, t2, i2));
    return s2.set(t2, a2), a2;
  }
  _calculateUniqueValues(e2, t2) {
    const s2 = {}, i2 = this.items, a2 = i2.length;
    for (let r2 = 0; r2 < a2; r2++) {
      const a3 = i2[r2], n2 = [];
      for (const t3 of e2)
        n2.push(t3[r2]);
      const o2 = n2.join(",");
      null == s2[o2] ? s2[o2] = { count: 1, data: n2, items: [a3], itemPositions: [r2] } : (t2 || s2[o2].count++, s2[o2].items.push(a3), s2[o2].itemPositions.push(r2));
    }
    return s2;
  }
  async _getDataValues(t2, s2 = true) {
    const i2 = new c$1(this.query, this.featureAdapter, this.fieldsIndex), { valueExpression: a2, scale: r2, timeZone: n2 } = t2;
    return a2 ? i2.getExpressionValues(this.items, a2, { viewingMode: "map", scale: r2, spatialReference: this.query.outSR || this.spatialReference }, { geometryType: this.geometryType, hasZ: this.hasZ, hasM: this.hasM }, n2) : i2.getDataValues(this.items, a$2(t2), s2);
  }
}
function N(e2, t2, s2, i2) {
  const a2 = i2.x - s2.x, r2 = i2.y - s2.y, n2 = a2 * a2 + r2 * r2, o2 = (t2.x - s2.x) * a2 + (t2.y - s2.y) * r2, l2 = Math.min(1, Math.max(0, o2 / n2));
  e2.x = s2.x + a2 * l2, e2.y = s2.y + r2 * l2;
}
function C(e2, t2) {
  return e2 ? t2 ? 4 : 3 : t2 ? 3 : 2;
}
class G {
  constructor(e2, t2) {
    this.coords = e2, this.coordsIndex = t2;
  }
  get x() {
    return this.coords[this.coordsIndex];
  }
  get y() {
    return this.coords[this.coordsIndex + 1];
  }
  get z() {
    return this.coords[this.coordsIndex + 2];
  }
}
const u = "unsupported-query";
async function p(t2, { fieldsIndex: i2, geometryType: s2, spatialReference: r2, availableFields: o2 }) {
  if ((t2.distance ?? 0) < 0 || null != t2.geometryPrecision || t2.multipatchOption && "xyFootprint" !== t2.multipatchOption || t2.pixelSize || t2.relationParam || t2.text)
    throw new s$1(u, "Unsupported query options", { query: t2 });
  return c2(i2, o2, t2), f(i2, o2, t2), Promise.all([P$1(t2, s2, r2), x(r2, t2.outSR)]).then(() => t2);
}
function c2(t2, i2, o2) {
  const { outFields: n2, orderByFields: a2, returnDistinctValues: l2, outStatistics: p2 } = o2, c3 = p2 ? p2.map((e2) => e2.outStatisticFieldName && e2.outStatisticFieldName.toLowerCase()).filter(Boolean) : [];
  if (a2 && a2.length > 0) {
    const e2 = " asc", r2 = " desc", n3 = a2.map((t3) => {
      const i3 = t3.toLowerCase();
      return i3.includes(e2) ? i3.split(e2)[0] : i3.includes(r2) ? i3.split(r2)[0] : t3;
    }).filter((e3) => !c3.includes(e3));
    g(t2, i2, n3, { expressionName: "orderByFields", query: o2 });
  }
  if (n2 && n2.length > 0)
    g(t2, i2, n2, { expressionName: "outFields", query: o2, allowedFieldTypes: "all" });
  else if (l2)
    throw new s$1(u, "outFields should be specified for returnDistinctValues", { query: o2 });
  p$1(t2, i2, o2.where, o2);
}
const d = /* @__PURE__ */ new Set([...o, ...a]);
function f(t2, i2, r2) {
  const { outStatistics: n2, groupByFieldsForStatistics: a2, having: l2 } = r2, p2 = a2?.length, c3 = n2?.length;
  if (l2) {
    if (!p2 || !c3)
      throw new s$1(u, "outStatistics and groupByFieldsForStatistics should be specified with having", { query: r2 });
    f$1(t2, i2, l2, n2, r2);
  }
  if (c3) {
    if (!h(n2))
      return;
    const o2 = n2.map((e2) => e2.onStatisticField).filter(Boolean);
    g(t2, i2, o2, { expressionName: "onStatisticFields", query: r2 }), p2 && g(t2, i2, a2, { expressionName: "groupByFieldsForStatistics", query: r2 });
    for (const a3 of n2) {
      const { onStatisticField: o3, statisticType: n3 } = a3;
      if (("percentile_disc" === n3 || "percentile_cont" === n3) && "statisticParameters" in a3) {
        const { statisticParameters: t3 } = a3;
        if (!t3)
          throw new s$1(u, "statisticParameters should be set for percentile type", { definition: a3, query: r2 });
      } else
        t2.get(o3) && "count" !== n3 && "min" !== n3 && "max" !== n3 && g(t2, i2, [o3], { expressionName: `outStatistics with '${n3}' statistic type`, allowedFieldTypes: d, query: r2 });
    }
  }
}
async function m(t2, i2, { fieldsIndex: s2, geometryType: r2, spatialReference: o2, availableFields: l2 }) {
  if ((t2.distance ?? 0) < 0 || null != t2.geometryPrecision || t2.multipatchOption || t2.pixelSize || t2.relationParam || t2.text || t2.outStatistics || t2.groupByFieldsForStatistics || t2.having || t2.orderByFields)
    throw new s$1(u, "Unsupported query options", { query: t2 });
  return c2(s2, l2, t2), Promise.all([y(s2, l2, i2, t2), P$1(t2, r2, o2), x(o2, t2.outSR)]).then(() => t2);
}
async function y(t2, i2, r2, o2) {
  let n2 = [];
  if (r2.valueExpression) {
    const { arcadeUtils: e2 } = await i$1();
    n2 = e2.extractFieldNames(r2.valueExpression);
  }
  if (r2.field && n2.push(r2.field), r2.field2 && n2.push(r2.field2), r2.field3 && n2.push(r2.field3), r2.normalizationField && n2.push(r2.normalizationField), !n2.length && !r2.valueExpression)
    throw new s$1(u, "field or valueExpression is required", { params: r2 });
  g(t2, i2, n2, { expressionName: "statistics", query: o2 });
}
function h(e2) {
  return null != e2 && e2.every((e3) => "exceedslimit" !== e3.statisticType);
}
const L = "unsupported-query";
const D = new h$2(2e6);
let W = 0;
class $ {
  constructor(e2) {
    this._geometryQueryCache = null, this._changeHandle = null, this.capabilities = { query: t$2 }, this.geometryType = e2.geometryType, this.hasM = !!e2.hasM, this.hasZ = !!e2.hasZ, this.objectIdField = e2.objectIdField, this.spatialReference = e2.spatialReference, this.definitionExpression = e2.definitionExpression, this.featureStore = e2.featureStore, this.aggregateAdapter = e2.aggregateAdapter, this._changeHandle = this.featureStore.events.on("changed", () => this.clearCache()), this.timeInfo = e2.timeInfo, e2.cacheSpatialQueries && (this._geometryQueryCache = new r$2(W++ + "$$", D)), this.fieldsIndex = a$3(e2.fieldsIndex) ? e2.fieldsIndex : Z.fromJSON(e2.fieldsIndex), !e2.availableFields || 1 === e2.availableFields.length && "*" === e2.availableFields[0] ? this.availableFields = new Set(this.fieldsIndex.fields.map((e3) => e3.name)) : this.availableFields = new Set(e2.availableFields.map((e3) => this.fieldsIndex.get(e3)?.name).filter((e3) => null != e3)), e2.scheduler && e2.priority && (this._frameTask = e2.scheduler.registerTask(e2.priority));
  }
  destroy() {
    this._frameTask = l$3(this._frameTask), this.clearCache(), u$2(this._geometryQueryCache), this._changeHandle = l$3(this._changeHandle);
  }
  get featureAdapter() {
    return this.featureStore.featureAdapter;
  }
  clearCache() {
    this._geometryQueryCache?.clear(), this._allFeaturesPromise = null, this._timeExtentPromise = null, this._fullExtentPromise = null;
  }
  async executeQuery(e2, t2) {
    const i2 = l$4(t2);
    try {
      return (await this._executeQuery(e2, {}, i2)).createQueryResponse();
    } catch (s2) {
      if (s2 !== g$1)
        throw s2;
      return new q([], e2, this).createQueryResponse();
    }
  }
  async executeQueryForCount(e2 = {}, t2) {
    const i2 = l$4(t2);
    try {
      return (await this._executeQuery(e2, { returnGeometry: false, returnCentroid: false, outSR: null }, i2)).createQueryResponseForCount();
    } catch (s2) {
      if (s2 !== g$1)
        throw s2;
      return 0;
    }
  }
  async executeQueryForExtent(e2, t2) {
    const i2 = l$4(t2), s2 = e2.outSR;
    try {
      const t3 = await this._executeQuery(e2, { returnGeometry: true, returnCentroid: false, outSR: null }, i2), r2 = t3.size;
      if (!r2)
        return { count: 0, extent: null };
      return { count: r2, extent: await this._getBounds(t3.items, t3.spatialReference, s2 || this.spatialReference) };
    } catch (r2) {
      if (r2 === g$1)
        return { count: 0, extent: null };
      throw r2;
    }
  }
  async executeQueryForIds(e2, t2) {
    return this.executeQueryForIdSet(e2, t2).then((e3) => Array.from(e3));
  }
  async executeQueryForIdSet(e2, t2) {
    const i2 = l$4(t2);
    try {
      const t3 = await this._executeQuery(e2, { returnGeometry: true, returnCentroid: false, outSR: null }, i2), s2 = t3.items, r2 = /* @__PURE__ */ new Set();
      return await this._reschedule(() => {
        for (const e3 of s2)
          r2.add(t3.featureAdapter.getObjectId(e3));
      }, i2), r2;
    } catch (s2) {
      if (s2 === g$1)
        return /* @__PURE__ */ new Set();
      throw s2;
    }
  }
  async executeQueryForSnapping(e2, t2) {
    const i2 = l$4(t2), { point: s2, distance: a2, returnEdge: n2, vertexMode: l2 } = e2;
    if (!n2 && "none" === l2)
      return { candidates: [] };
    let u2 = a$2(e2.query);
    u2 = await this._schedule(() => j$1(u2, this.definitionExpression, this.spatialReference), i2), u2 = await this._reschedule(() => p(u2, { availableFields: this.availableFields, fieldsIndex: this.fieldsIndex, geometryType: this.geometryType, spatialReference: this.spatialReference }), i2);
    const h2 = !G$1(s2.spatialReference, this.spatialReference);
    h2 && await x(s2.spatialReference, this.spatialReference);
    const c3 = "number" == typeof a2 ? a2 : a2.x, m2 = "number" == typeof a2 ? a2 : a2.y, y2 = { xmin: s2.x - c3, xmax: s2.x + c3, ymin: s2.y - m2, ymax: s2.y + m2, spatialReference: s2.spatialReference }, f2 = h2 ? j(y2, this.spatialReference) : y2;
    if (!f2)
      return { candidates: [] };
    const p$12 = (await R(y$3(s2), null, { signal: i2 }))[0], d2 = (await R(y$3(f2), null, { signal: i2 }))[0];
    if (null == p$12 || null == d2)
      return { candidates: [] };
    const g2 = new q(await this._reschedule(() => this._searchFeatures(this._getQueryBBoxes(d2.toJSON())), i2), u2, this);
    await this._reschedule(() => this._executeObjectIdsQuery(g2), i2), await this._reschedule(() => this._executeTimeQuery(g2), i2), await this._reschedule(() => this._executeAttributesQuery(g2), i2), await this._reschedule(() => this._executeGeometryQueryForSnapping(g2, i2), i2);
    const x$12 = p$12.toJSON(), _ = h2 ? j(x$12, this.spatialReference) : x$12, F = h2 ? Math.max(f2.xmax - f2.xmin, f2.ymax - f2.ymin) / 2 : a2;
    return g2.createSnappingResponse({ ...e2, point: _, distance: F }, s2.spatialReference);
  }
  async executeQueryForLatestObservations(e2, t2) {
    const s2 = l$4(t2);
    if (!this.timeInfo?.trackIdField)
      throw new s$1(L, "Missing timeInfo or timeInfo.trackIdField", { query: e2, timeInfo: this.timeInfo });
    try {
      const t3 = await this._executeQuery(e2, {}, s2);
      return await this._reschedule(() => this._filterLatest(t3), s2), t3.createQueryResponse();
    } catch (r2) {
      if (r2 !== g$1)
        throw r2;
      return new q([], e2, this).createQueryResponse();
    }
  }
  async executeQueryForSummaryStatistics(e2 = {}, t2, i2) {
    const s2 = l$4(i2), { field: r2, normalizationField: a2, valueExpression: n2 } = t2;
    return (await this._executeQueryForStatistics(e2, { field: r2, normalizationField: a2, valueExpression: n2 }, s2)).createSummaryStatisticsResponse(t2);
  }
  async executeQueryForUniqueValues(e2 = {}, t2, i2) {
    const s2 = l$4(i2), { field: r2, field2: a2, field3: n2, valueExpression: l2 } = t2;
    return (await this._executeQueryForStatistics(e2, { field: r2, field2: a2, field3: n2, valueExpression: l2 }, s2)).createUniqueValuesResponse(t2);
  }
  async executeQueryForClassBreaks(e2 = {}, t2, i2) {
    const s2 = l$4(i2), { field: r2, normalizationField: a2, valueExpression: n2 } = t2;
    return (await this._executeQueryForStatistics(e2, { field: r2, normalizationField: a2, valueExpression: n2 }, s2)).createClassBreaksResponse(t2);
  }
  async executeQueryForHistogram(e2 = {}, t2, i2) {
    const s2 = l$4(i2), { field: r2, normalizationField: a2, valueExpression: n2 } = t2;
    return (await this._executeQueryForStatistics(e2, { field: r2, normalizationField: a2, valueExpression: n2 }, s2)).createHistogramResponse(t2);
  }
  async fetchRecomputedExtents(e2) {
    const t2 = l$4(e2);
    this._timeExtentPromise ||= n$1(this.timeInfo, this.featureStore);
    const [i2, s2] = await Promise.all([this._getFullExtent(), this._timeExtentPromise]);
    return s$2(t2), { fullExtent: i2, timeExtent: s2 };
  }
  async _getBounds(e2, t2, i2) {
    const s2 = O(i$2(), C$2);
    await this.featureStore.forEachBounds(e2, (e3) => o$1(s2, e3));
    const r2 = { xmin: s2[0], ymin: s2[1], xmax: s2[3], ymax: s2[4], spatialReference: h$1(this.spatialReference) };
    this.hasZ && isFinite(s2[2]) && isFinite(s2[5]) && (r2.zmin = s2[2], r2.zmax = s2[5]);
    const a2 = j(r2, t2, i2);
    if (a2.spatialReference = h$1(i2), a2.xmax - a2.xmin == 0) {
      const e3 = W$1(a2.spatialReference);
      a2.xmin -= e3, a2.xmax += e3;
    }
    if (a2.ymax - a2.ymin == 0) {
      const e3 = W$1(a2.spatialReference);
      a2.ymin -= e3, a2.ymax += e3;
    }
    if (this.hasZ && null != a2.zmin && null != a2.zmax && a2.zmax - a2.zmin == 0) {
      const e3 = W$1(a2.spatialReference);
      a2.zmin -= e3, a2.zmax += e3;
    }
    return a2;
  }
  _getFullExtent() {
    return this._fullExtentPromise ||= "getFullExtent" in this.featureStore && this.featureStore.getFullExtent ? Promise.resolve(this.featureStore.getFullExtent(this.spatialReference)) : this._getAllFeatures().then((e2) => this._getBounds(e2, this.spatialReference, this.spatialReference)), this._fullExtentPromise;
  }
  async _schedule(e2, t2) {
    return null != this._frameTask ? this._frameTask.schedule(e2, t2) : e2(C$3);
  }
  async _reschedule(e2, t2) {
    return null != this._frameTask ? this._frameTask.reschedule(e2, t2) : e2(C$3);
  }
  async _getAllFeaturesQueryEngineResult(e2) {
    return new q(await this._getAllFeatures(), e2, this);
  }
  async _getAllFeatures() {
    if (null == this._allFeaturesPromise) {
      const e3 = [];
      this._allFeaturesPromise = (async () => {
        await this.featureStore.forEach((t3) => e3.push(t3));
      })().then(() => e3);
    }
    const e2 = this._allFeaturesPromise, t2 = await e2;
    return e2 === this._allFeaturesPromise ? t2.slice() : this._getAllFeatures();
  }
  async _executeQuery(e2, t2, i2) {
    e2 = a$2(e2), e2 = await this._schedule(() => S(e2, this.definitionExpression, this.spatialReference), i2), e2 = await this._reschedule(() => p(e2, { availableFields: this.availableFields, fieldsIndex: this.fieldsIndex, geometryType: this.geometryType, spatialReference: this.spatialReference }), i2), e2 = { ...e2, ...t2 };
    const s2 = await this._reschedule(() => this._executeSceneFilterQuery(e2, i2), i2), a2 = await this._reschedule(() => this._executeGeometryQuery(e2, s2, i2), i2);
    return await this._reschedule(() => this._executeAggregateIdsQuery(a2), i2), await this._reschedule(() => this._executeObjectIdsQuery(a2), i2), await this._reschedule(() => this._executeTimeQuery(a2), i2), await this._reschedule(() => this._executeAttributesQuery(a2), i2), a2;
  }
  async _executeSceneFilterQuery(e2, t2) {
    if (null == e2.sceneFilter)
      return null;
    const { outSR: i2, returnGeometry: s2, returnCentroid: r2 } = e2, a2 = this.featureStore.featureSpatialReference, n2 = e2.sceneFilter.geometry, l2 = null == a2 || G$1(a2, n2.spatialReference) ? n2 : j(n2, a2);
    if (!l2)
      return null;
    const u2 = s2 || r2, o2 = N$1(i2) && !G$1(this.spatialReference, i2) && u2 ? async (e3) => this._project(e3, i2) : (e3) => e3, h2 = this.featureAdapter, c3 = await this._reschedule(() => this._searchFeatures(this._getQueryBBoxes(l2)), t2);
    if ("disjoint" === e2.sceneFilter.spatialRelationship) {
      if (!c3.length)
        return null;
      const i3 = /* @__PURE__ */ new Set();
      for (const e3 of c3)
        i3.add(h2.getObjectId(e3));
      const s3 = await this._reschedule(() => this._getAllFeatures(), t2), r3 = await this._reschedule(async () => {
        const r4 = await v$2("esriSpatialRelDisjoint", l2, this.geometryType, this.hasZ, this.hasM), a3 = (e3) => !i3.has(h2.getObjectId(e3)) || r4(h2.getGeometry(e3)), n3 = await this._runSpatialFilter(s3, a3, t2);
        return new q(n3, e2, this);
      }, t2);
      return o2(r3);
    }
    if (!c3.length)
      return new q([], e2, this);
    if (this._canExecuteSinglePass(l2, e2))
      return o2(new q(c3, e2, this));
    const m2 = await v$2("esriSpatialRelContains", l2, this.geometryType, this.hasZ, this.hasM), y2 = await this._runSpatialFilter(c3, (e3) => m2(h2.getGeometry(e3)), t2);
    return o2(new q(y2, e2, this));
  }
  async _executeGeometryQuery(i2, s2, r2) {
    if (null != s2 && 0 === s2.items.length)
      return s2;
    i2 = null != s2 ? s2.query : i2;
    const { geometry: a2, outSR: n2, spatialRel: l2, returnGeometry: u2, returnCentroid: o2 } = i2, h2 = this.featureStore.featureSpatialReference, c3 = !a2 || null == h2 || G$1(h2, a2.spatialReference) ? a2 : j(a2, h2), m2 = u2 || o2, y2 = N$1(n2) && !G$1(this.spatialReference, n2), f2 = this._geometryQueryCache && null == s2 ? y2 && m2 ? JSON.stringify({ originalFilterGeometry: a2, spatialRelationship: l2, outSpatialReference: n2 }) : JSON.stringify({ originalFilterGeometry: a2, spatialRelationship: l2 }) : null, p2 = f2 ? this._geometryQueryCache.get(f2) : null;
    if (null != p2)
      return new q(p2, i2, this);
    const d2 = async (e2) => (y2 && m2 && await this._project(e2, n2), f2 && this._geometryQueryCache.put(f2, e2.items, e2.items.length + 1), e2);
    if (!c3)
      return d2(null != s2 ? s2 : await this._getAllFeaturesQueryEngineResult(i2));
    const g2 = this.featureAdapter;
    let x2 = await this._reschedule(() => this._searchFeatures(this._getQueryBBoxes(a2)), r2);
    if ("esriSpatialRelDisjoint" === l2) {
      if (!x2.length)
        return d2(null != s2 ? s2 : await this._getAllFeaturesQueryEngineResult(i2));
      const e2 = /* @__PURE__ */ new Set();
      for (const i3 of x2)
        e2.add(g2.getObjectId(i3));
      const t2 = null != s2 ? s2.items : await this._reschedule(() => this._getAllFeatures(), r2), a3 = await this._reschedule(async () => {
        const s3 = await v$2(l2, c3, this.geometryType, this.hasZ, this.hasM), a4 = (t3) => !e2.has(g2.getObjectId(t3)) || s3(g2.getGeometry(t3)), n3 = await this._runSpatialFilter(t2, a4, r2);
        return new q(n3, i2, this);
      }, r2);
      return d2(a3);
    }
    if (null != s2) {
      const i3 = new b$1();
      x2 = x2.filter((t2) => z(s2.items, t2, s2.items.length, i3) >= 0);
    }
    if (!x2.length) {
      const e2 = new q([], i2, this);
      return f2 && this._geometryQueryCache.put(f2, e2.items, 1), e2;
    }
    if (this._canExecuteSinglePass(c3, i2))
      return d2(new q(x2, i2, this));
    const _ = await v$2(l2, c3, this.geometryType, this.hasZ, this.hasM), w2 = await this._runSpatialFilter(x2, (e2) => _(g2.getGeometry(e2)), r2);
    return d2(new q(w2, i2, this));
  }
  async _executeGeometryQueryForSnapping(e2, t2) {
    const { query: i2 } = e2, { spatialRel: s2 } = i2;
    if (!e2?.items?.length || !i2.geometry || !s2)
      return;
    const r2 = await v$2(s2, i2.geometry, this.geometryType, this.hasZ, this.hasM), a2 = await this._runSpatialFilter(e2.items, (e3) => r2(e3.geometry), t2);
    e2.items = a2;
  }
  _executeAggregateIdsQuery(e2) {
    if (0 === e2.items.length || !e2.query.aggregateIds?.length || null == this.aggregateAdapter)
      return;
    const t2 = /* @__PURE__ */ new Set();
    for (const s2 of e2.query.aggregateIds) {
      this.aggregateAdapter.getFeatureObjectIds(s2).forEach((e3) => t2.add(e3));
    }
    const i2 = this.featureAdapter.getObjectId;
    e2.items = e2.items.filter((e3) => t2.has(i2(e3)));
  }
  _executeObjectIdsQuery(e2) {
    if (0 === e2.items.length || !e2.query.objectIds?.length)
      return;
    const t2 = new Set(e2.query.objectIds), i2 = this.featureAdapter.getObjectId;
    e2.items = e2.items.filter((e3) => t2.has(i2(e3)));
  }
  _executeTimeQuery(e2) {
    if (0 === e2.items.length)
      return;
    const t2 = t$3(this.timeInfo, e2.query.timeExtent, this.featureAdapter);
    null != t2 && (e2.items = e2.items.filter(t2));
  }
  _executeAttributesQuery(e2) {
    if (0 === e2.items.length)
      return;
    const t2 = c$2(e2.query.where, this.fieldsIndex);
    if (t2) {
      if (!t2.isStandardized)
        throw new TypeError("Where clause is not standardized");
      e2.items = e2.items.filter((e3) => t2.testFeature(e3, this.featureAdapter));
    }
  }
  async _runSpatialFilter(e2, t2, i2) {
    if (!t2)
      return e2;
    if (null == this._frameTask)
      return e2.filter((e3) => t2(e3));
    let s2 = 0;
    const r2 = new Array(), a2 = async (n2) => {
      for (; s2 < e2.length; ) {
        const l2 = e2[s2++];
        t2(l2) && (r2.push(l2), n2.madeProgress()), n2.done && await this._reschedule((e3) => a2(e3), i2);
      }
    };
    return this._reschedule((e3) => a2(e3), i2).then(() => r2);
  }
  _filterLatest(e2) {
    const { trackIdField: t2, startTimeField: i2, endTimeField: s2 } = this.timeInfo, r2 = s2 || i2, a2 = /* @__PURE__ */ new Map(), n2 = this.featureAdapter.getAttribute;
    for (const l2 of e2.items) {
      const e3 = n2(l2, t2), i3 = n2(l2, r2), s3 = a2.get(e3);
      (!s3 || i3 > n2(s3, r2)) && a2.set(e3, l2);
    }
    e2.items = Array.from(a2.values());
  }
  _canExecuteSinglePass(e2, t2) {
    const { spatialRel: i2 } = t2;
    return I(e2) && ("esriSpatialRelEnvelopeIntersects" === i2 || "esriGeometryPoint" === this.geometryType && ("esriSpatialRelIntersects" === i2 || "esriSpatialRelContains" === i2));
  }
  async _project(e2, t2) {
    if (!t2 || G$1(this.spatialReference, t2))
      return e2;
    const i2 = this.featureAdapter;
    let s2;
    try {
      const e3 = await this._getFullExtent();
      s2 = V(this.spatialReference, t2, e3);
    } catch {
    }
    const r2 = await b(e2.items.map((e3) => a$1(this.geometryType, this.hasZ, this.hasM, i2.getGeometry(e3))), this.spatialReference, t2, s2);
    return e2.items = r2.map((t3, s3) => i2.cloneWithGeometry(e2.items[s3], ot(t3, this.hasZ, this.hasM))), e2;
  }
  _getQueryBBoxes(e2) {
    if (I(e2)) {
      if (m$3(e2))
        return [a$4(Math.min(e2.xmin, e2.xmax), Math.min(e2.ymin, e2.ymax), Math.max(e2.xmin, e2.xmax), Math.max(e2.ymin, e2.ymax))];
      if (f$3(e2))
        return e2.rings.map((e3) => a$4(Math.min(e3[0][0], e3[2][0]), Math.min(e3[0][1], e3[2][1]), Math.max(e3[0][0], e3[2][0]), Math.max(e3[0][1], e3[2][1])));
    }
    return [a$5(u$3(), e2)];
  }
  async _searchFeatures(e2) {
    const t2 = /* @__PURE__ */ new Set();
    await Promise.all(e2.map((e3) => this.featureStore.forEachInBounds(e3, (e4) => t2.add(e4))));
    const i2 = Array.from(t2.values());
    return t2.clear(), i2;
  }
  async _executeQueryForStatistics(e2, t2, i2) {
    e2 = a$2(e2);
    try {
      e2 = await this._schedule(() => S(e2, this.definitionExpression, this.spatialReference), i2), e2 = await this._reschedule(() => m(e2, t2, { availableFields: this.availableFields, fieldsIndex: this.fieldsIndex, geometryType: this.geometryType, spatialReference: this.spatialReference }), i2);
      const s2 = await this._reschedule(() => this._executeSceneFilterQuery(e2, i2), i2), r2 = await this._reschedule(() => this._executeGeometryQuery(e2, s2, i2), i2);
      return await this._reschedule(() => this._executeAggregateIdsQuery(r2), i2), await this._reschedule(() => this._executeObjectIdsQuery(r2), i2), await this._reschedule(() => this._executeTimeQuery(r2), i2), await this._reschedule(() => this._executeAttributesQuery(r2), i2), r2;
    } catch (s2) {
      if (s2 !== g$1)
        throw s2;
      return new q([], e2, this);
    }
  }
}
export {
  $
};
