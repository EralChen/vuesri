import { bb as s$1, aM as s$2, a$ as j$1, dg as E, dh as I$1, di as i, dj as Z, dk as i$1, dl as o, cZ as f$1, dm as ct, dn as N$1, dp as st, dq as rt, dr as g, ds as N$2, dt as e } from "./chunk-KFNcxJaF.js";
const w = s$1.getLogger("esri.layers.graphics.sources.ogcfeature"), b = "http://www.opengis.net/def/crs/", h$1 = `${b}OGC/1.3/CRS84`;
async function j(n, i$2, r = {}, a = 5) {
  const { links: o$1 } = n, s = G(o$1, "items", "application/geo+json") || G(o$1, "http://www.opengis.net/def/rel/ogc/1.0/items", "application/geo+json");
  if (null == s)
    throw new s$2("ogc-feature-layer:missing-items-page", "Missing items url");
  const { data: l } = await j$1(s.href, { signal: r.signal, query: { limit: a, ...r.customParameters, token: r.apiKey }, headers: { accept: "application/geo+json" } });
  E(l);
  const d = I$1(l, { geometryType: i$2.geometryType }), y = i$2.fields || d.fields || [], b2 = null != i$2.hasZ ? i$2.hasZ : d.hasZ, h = d.geometryType, j2 = i$2.objectIdField || d.objectIdFieldName || "OBJECTID";
  let F2 = i$2.timeInfo;
  const I2 = y.find(({ name: e2 }) => e2 === j2);
  if (I2)
    I2.editable = false, I2.nullable = false;
  else {
    if (!d.objectIdFieldType)
      throw new s$2("ogc-feature-layer:missing-feature-id", "Collection geojson require a feature id as a unique identifier");
    y.unshift({ name: j2, alias: j2, type: "number" === d.objectIdFieldType ? "esriFieldTypeOID" : "esriFieldTypeString", editable: false, nullable: false });
  }
  if (j2 !== d.objectIdFieldName) {
    const e2 = y.find(({ name: e3 }) => e3 === d.objectIdFieldName);
    e2 && (e2.type = "esriFieldTypeInteger");
  }
  y === d.fields && d.unknownFields.length > 0 && w.warn({ name: "ogc-feature-layer:unknown-field-types", message: "Some fields types couldn't be inferred from the features and were dropped", details: { unknownFields: d.unknownFields } });
  for (const e2 of y) {
    if (null == e2.name && (e2.name = e2.alias), null == e2.alias && (e2.alias = e2.name), "esriFieldTypeOID" !== e2.type && "esriFieldTypeGlobalID" !== e2.type && (e2.editable = null == e2.editable || !!e2.editable, e2.nullable = null == e2.nullable || !!e2.nullable), !e2.name)
      throw new s$2("ogc-feature-layer:invalid-field-name", "field name is missing", { field: e2 });
    if (!i.jsonValues.includes(e2.type))
      throw new s$2("ogc-feature-layer:invalid-field-type", `invalid type for field "${e2.name}"`, { field: e2 });
  }
  if (F2) {
    const e2 = new Z(y);
    if (F2.startTimeField) {
      const t = e2.get(F2.startTimeField);
      t ? (F2.startTimeField = t.name, t.type = "esriFieldTypeDate") : F2.startTimeField = null;
    }
    if (F2.endTimeField) {
      const t = e2.get(F2.endTimeField);
      t ? (F2.endTimeField = t.name, t.type = "esriFieldTypeDate") : F2.endTimeField = null;
    }
    if (F2.trackIdField) {
      const t = e2.get(F2.trackIdField);
      t ? F2.trackIdField = t.name : (F2.trackIdField = null, w.warn({ name: "ogc-feature-layer:invalid-timeInfo-trackIdField", message: "trackIdField is missing", details: { timeInfo: F2 } }));
    }
    F2.timeReference ||= { timeZoneIANA: i$1 }, F2.startTimeField || F2.endTimeField || (w.warn({ name: "ogc-feature-layer:invalid-timeInfo", message: "startTimeField and endTimeField are missing", details: { timeInfo: F2 } }), F2 = null);
  }
  return { drawingInfo: h ? o(h) : null, extent: $(n), geometryType: h, fields: y, hasZ: !!b2, objectIdField: j2, timeInfo: F2 };
}
async function F(n, i2 = {}) {
  const { links: r } = n, a = G(r, "data", "application/json") || G(r, "http://www.opengis.net/def/rel/ogc/1.0/data", "application/json");
  if (null == a)
    throw new s$2("ogc-feature-layer:missing-collections-page", "Missing collections url");
  const { apiKey: o2, customParameters: s, signal: l } = i2, { data: c } = await j$1(a.href, { signal: l, headers: { accept: "application/json" }, query: { ...s, token: o2 } });
  return c;
}
async function I(n, i2 = {}) {
  const { links: r } = n, a = G(r, "conformance", "application/json") || G(r, "http://www.opengis.net/def/rel/ogc/1.0/conformance", "application/json");
  if (null == a)
    throw new s$2("ogc-feature-layer:missing-conformance-page", "Missing conformance url");
  const { apiKey: o2, customParameters: s, signal: l } = i2, { data: c } = await j$1(a.href, { signal: l, headers: { accept: "application/json" }, query: { ...s, token: o2 } });
  return c;
}
async function T(t, n = {}) {
  const { apiKey: i2, customParameters: r, signal: a } = n, { data: o2 } = await j$1(t, { signal: a, headers: { accept: "application/json" }, query: { ...r, token: i2 } });
  return o2;
}
async function k(t, n = {}) {
  const i2 = "application/vnd.oai.openapi+json;version=3.0", r = G(t.links, "service-desc", i2);
  if (null == r)
    return w.warn("ogc-feature-layer:missing-openapi-page", "The OGC API-Features server does not have an OpenAPI page."), null;
  const { apiKey: a, customParameters: o2, signal: s } = n, { data: l } = await j$1(r.href, { signal: s, headers: { accept: i2 }, query: { ...o2, token: a } });
  return l;
}
function x(e2) {
  const t = /^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e2), n = t?.groups;
  if (!n)
    return null;
  const { authority: i2, code: r } = n;
  switch (i2.toLowerCase()) {
    case "ogc":
      switch (r.toLowerCase()) {
        case "crs27":
          return f$1.GCS_NAD_1927.wkid;
        case "crs83":
          return 4269;
        case "crs84":
        case "crs84h":
          return f$1.WGS84.wkid;
        default:
          return null;
      }
    case "esri":
    case "epsg": {
      const e3 = Number.parseInt(r, 10);
      return Number.isNaN(e3) ? null : e3;
    }
    default:
      return null;
  }
}
async function S(e2, t, n) {
  const i2 = await v(e2, t, n);
  return ct(i2);
}
async function v(n, a, c) {
  const { collection: u, layerDefinition: m, maxRecordCount: p, queryParameters: { apiKey: f, customParameters: g$1 }, spatialReference: w2, supportedCrs: b2 } = n, { links: h } = u, j2 = G(h, "items", "application/geo+json") || G(h, "http://www.opengis.net/def/rel/ogc/1.0/items", "application/geo+json");
  if (null == j2)
    throw new s$2("ogc-feature-layer:missing-items-page", "Missing items url");
  const { geometry: F2, num: I2, start: T2, timeExtent: k2, where: x2 } = a;
  if (a.objectIds)
    throw new s$2("ogc-feature-layer:query-by-objectids-not-supported", "Queries with objectids are not supported");
  const S2 = f$1.fromJSON(w2), v2 = a.outSpatialReference ?? S2, N2 = v2.isWGS84 ? null : R(v2, b2), q2 = M(F2, b2), $2 = O(k2), W = C(x2), D = I2 ?? (null != T2 && void 0 !== T2 ? 10 : p), { data: P } = await j$1(j2.href, { ...c, query: { ...g$1, ...q2, crs: N2, datetime: $2, query: W, limit: D, startindex: T2, token: f }, headers: { accept: "application/geo+json" } });
  let Z2 = false;
  if (P.links) {
    const e2 = P.links.find((e3) => "next" === e3.rel);
    Z2 = !!e2;
  }
  !Z2 && Number.isInteger(P.numberMatched) && Number.isInteger(P.numberReturned) && (Z2 = P.numberReturned < P.numberMatched);
  const { fields: K, geometryType: A, hasZ: L, objectIdField: J } = m, U = N$1(P, { geometryType: A, hasZ: L, objectIdField: J });
  if (!N2 && v2.isWebMercator) {
    for (const e2 of U)
      if (null != e2.geometry && null != A) {
        const t = st(e2.geometry, A, L, false);
        t.spatialReference = f$1.WGS84, e2.geometry = rt(g(t, v2));
      }
  }
  for (const e2 of U)
    e2.objectId = e2.attributes[J];
  const z = N2 || !N2 && v2.isWebMercator ? v2.toJSON() : N$2, E2 = new e();
  return E2.exceededTransferLimit = Z2, E2.features = U, E2.fields = K, E2.geometryType = A, E2.hasZ = L, E2.objectIdFieldName = J, E2.spatialReference = z, E2;
}
function N(e2) {
  return null != e2 && "extent" === e2.type;
}
function R(e2, t) {
  const { isWebMercator: n, wkid: i2 } = e2;
  if (!i2)
    return null;
  const r = n ? t[3857] ?? t[102100] ?? t[102113] ?? t[900913] : t[e2.wkid];
  return r ? `${b}${r}` : null;
}
function q(e2) {
  if (null == e2)
    return "";
  const { xmin: t, ymin: n, xmax: i2, ymax: r } = e2;
  return `${t},${n},${i2},${r}`;
}
function O(e2) {
  if (null == e2)
    return null;
  const { start: t, end: n } = e2;
  return `${null != t ? t.toISOString() : ".."}/${null != n ? n.toISOString() : ".."}`;
}
function C(e2) {
  return null != e2 && e2 && "1=1" !== e2 ? e2 : null;
}
function M(e2, t) {
  if (!N(e2))
    return null;
  const { spatialReference: n } = e2;
  if (!n || n.isWGS84)
    return { bbox: q(e2) };
  const i2 = R(n, t);
  return null != i2 ? { bbox: q(e2), "bbox-crs": i2 } : n.isWebMercator ? { bbox: q(g(e2, f$1.WGS84)) } : null;
}
function $(e2) {
  const t = e2.extent?.spatial;
  if (!t)
    return null;
  const n = t.bbox[0], i2 = 4 === n.length, r = n[0], a = n[1], o2 = i2 ? void 0 : n[2];
  return { xmin: r, ymin: a, xmax: i2 ? n[2] : n[3], ymax: i2 ? n[3] : n[4], zmin: o2, zmax: i2 ? void 0 : n[5], spatialReference: f$1.WGS84.toJSON() };
}
function G(e2, t, n) {
  return e2.find((e3) => e3.rel === t && e3.type === n) || e2.find((e3) => e3.rel === t && !e3.type);
}
export {
  F,
  I,
  S,
  T,
  b,
  h$1 as h,
  j,
  k,
  v,
  x
};
