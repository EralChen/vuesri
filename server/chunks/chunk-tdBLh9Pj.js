import { aO as s, dH as _, dg as Et, aQ as U$1, dI as E, dJ as I$1, dK as i, dL as Z$1, dM as i$1, dN as o, aB as f$1, dO as lt, dP as N$1, dQ as rt, dR as ot, dS as g, dT as g$1, bT as I$2, aT as s$1, dU as e } from "./chunk-ejFG4zJ0.js";
import { p } from "./chunk-bLqiACBi.js";
const F = () => s$1.getLogger("esri.layers.ogc.ogcFeatureUtils"), I = "startindex", T = /* @__PURE__ */ new Set([I, "offset"]), k = "http://www.opengis.net/def/crs/", x = `${k}OGC/1.3/CRS84`;
var S;
async function v(n, o$1, s$12 = {}, a = 5) {
  const { links: l } = n, c = L(l, "items", S.geojson) || L(l, "http://www.opengis.net/def/rel/ogc/1.0/items", S.geojson);
  if (null == c)
    throw new s("ogc-feature-layer:missing-items-page", "Missing items url");
  const { apiKey: u, customParameters: d, signal: p2 } = s$12, y = _(c.href, n.landingPage.url), b = { limit: a, ...d, token: u }, T2 = Et(y, b), k2 = { accept: S.geojson }, { data: x2 } = await U$1(T2, { signal: p2, headers: k2 }), v2 = A(T2, a, x2.links) ?? I;
  E(x2);
  const N2 = I$1(x2, { geometryType: o$1.geometryType }), O2 = o$1.fields || N2.fields || [], P2 = null != o$1.hasZ ? o$1.hasZ : N2.hasZ, q2 = N2.geometryType, C2 = o$1.objectIdField || N2.objectIdFieldName || "OBJECTID";
  let R2 = o$1.timeInfo;
  const $2 = O2.find(({ name: e2 }) => e2 === C2);
  if ($2)
    $2.editable = false, $2.nullable = false;
  else {
    if (!N2.objectIdFieldType)
      throw new s("ogc-feature-layer:missing-feature-id", "Collection geojson require a feature id as a unique identifier");
    O2.unshift({ name: C2, alias: C2, type: "number" === N2.objectIdFieldType ? "esriFieldTypeOID" : "esriFieldTypeString", editable: false, nullable: false });
  }
  if (C2 !== N2.objectIdFieldName) {
    const e2 = O2.find(({ name: e3 }) => e3 === N2.objectIdFieldName);
    e2 && (e2.type = "esriFieldTypeInteger");
  }
  O2 === N2.fields && N2.unknownFields.length > 0 && F().warn({ name: "ogc-feature-layer:unknown-field-types", message: "Some fields types couldn't be inferred from the features and were dropped", details: { unknownFields: N2.unknownFields } });
  for (const e2 of O2) {
    if (null == e2.name && (e2.name = e2.alias), null == e2.alias && (e2.alias = e2.name), "esriFieldTypeOID" !== e2.type && "esriFieldTypeGlobalID" !== e2.type && (e2.editable = null == e2.editable || !!e2.editable, e2.nullable = null == e2.nullable || !!e2.nullable), !e2.name)
      throw new s("ogc-feature-layer:invalid-field-name", "field name is missing", { field: e2 });
    if (!i.jsonValues.includes(e2.type))
      throw new s("ogc-feature-layer:invalid-field-type", `invalid type for field "${e2.name}"`, { field: e2 });
  }
  if (R2) {
    const e2 = new Z$1(O2);
    if (R2.startTimeField) {
      const t = e2.get(R2.startTimeField);
      t ? (R2.startTimeField = t.name, t.type = "esriFieldTypeDate") : R2.startTimeField = null;
    }
    if (R2.endTimeField) {
      const t = e2.get(R2.endTimeField);
      t ? (R2.endTimeField = t.name, t.type = "esriFieldTypeDate") : R2.endTimeField = null;
    }
    if (R2.trackIdField) {
      const t = e2.get(R2.trackIdField);
      t ? R2.trackIdField = t.name : (R2.trackIdField = null, F().warn({ name: "ogc-feature-layer:invalid-timeInfo-trackIdField", message: "trackIdField is missing", details: { timeInfo: R2 } }));
    }
    R2.timeReference ||= { timeZoneIANA: i$1 }, R2.startTimeField || R2.endTimeField || (F().warn({ name: "ogc-feature-layer:invalid-timeInfo", message: "startTimeField and endTimeField are missing", details: { timeInfo: R2 } }), R2 = null);
  }
  return { drawingInfo: q2 ? o(q2) : null, extent: K(n), geometryType: q2, fields: O2, hasZ: !!P2, objectIdField: C2, paginationParameter: v2, timeInfo: R2 };
}
async function N(n, r = {}) {
  const { links: o2, url: s$12 } = n, a = L(o2, "data", S.json) || L(o2, "http://www.opengis.net/def/rel/ogc/1.0/data", S.json);
  if (null == a)
    throw new s("ogc-feature-layer:missing-collections-page", "Missing collections url");
  const { apiKey: l, customParameters: c, signal: u } = r, d = _(a.href, s$12), { data: f } = await U$1(d, { signal: u, headers: { accept: S.json }, query: { ...c, token: l } });
  for (const e2 of f.collections)
    e2.landingPage = n;
  return f;
}
async function O(n, r = {}) {
  const { links: o2, url: s$12 } = n, a = L(o2, "conformance", S.json) || L(o2, "http://www.opengis.net/def/rel/ogc/1.0/conformance", S.json);
  if (null == a)
    throw new s("ogc-feature-layer:missing-conformance-page", "Missing conformance url");
  const { apiKey: l, customParameters: c, signal: u } = r, d = _(a.href, s$12), { data: f } = await U$1(d, { signal: u, headers: { accept: S.json }, query: { ...c, token: l } });
  return f;
}
async function P(t, n = {}) {
  const { apiKey: i2, customParameters: r, signal: o2 } = n, { data: s2 } = await U$1(t, { signal: o2, headers: { accept: S.json }, query: { ...r, token: i2 } });
  return s2.url = t, s2;
}
async function q(t, n = {}) {
  const { links: r, url: o2 } = t, s2 = L(r, "service-desc", S.openapi);
  if (null == s2)
    return F().warn("ogc-feature-layer:missing-openapi-page", "The OGC API-Features server does not have an OpenAPI page."), null;
  const { apiKey: a, customParameters: l, signal: c } = n, u = _(s2.href, o2), { data: d } = await U$1(u, { signal: c, headers: { accept: S.openapi }, query: { ...l, token: a } });
  return d;
}
function C(e2) {
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
async function R(e2, t, n) {
  const i2 = await $(e2, t, n);
  return lt(i2);
}
async function $(n, r, o2) {
  const { collection: { links: l, landingPage: { url: f } }, layerDefinition: m, maxRecordCount: g$2, queryParameters: { apiKey: j, customParameters: h }, spatialReference: F2, supportedCrs: I2 } = n, T2 = L(l, "items", S.geojson) || L(l, "http://www.opengis.net/def/rel/ogc/1.0/items", S.geojson);
  if (null == T2)
    throw new s("ogc-feature-layer:missing-items-page", "Missing items url");
  const { geometry: k2, num: x2, start: v2, timeExtent: N2, where: O2 } = r;
  if (r.objectIds)
    throw new s("ogc-feature-layer:query-by-objectids-not-supported", "Queries with object ids are not supported");
  const P2 = f$1.fromJSON(F2), q2 = r.outSpatialReference ?? P2, C2 = q2.isWGS84 ? null : W(q2, I2), R2 = U(k2, I2), $2 = M(N2), G2 = Z(O2), D2 = x2 ?? (null == v2 ? g$2 : 10), K2 = 0 === v2 ? void 0 : v2, { fields: A2, geometryType: J, hasZ: z, objectIdField: E2, paginationParameter: _$1 } = m, B = _(T2.href, f), { data: Q } = await U$1(B, { ...o2, query: { ...h, ...R2, crs: C2, datetime: $2, query: G2, limit: D2, [_$1]: K2, token: j }, headers: { accept: S.geojson } }), V = N$1(Q, { geometryType: J, hasZ: z, objectIdField: E2 }), H = V.length === D2 && !!L(Q.links ?? [], "next", S.geojson), X = new Z$1(A2);
  for (const e2 of V) {
    const t = {};
    p(X, t, e2.attributes), t[E2] = e2.attributes[E2], e2.attributes = t;
  }
  if (!C2 && q2.isWebMercator) {
    for (const e2 of V)
      if (null != e2.geometry && null != J) {
        const t = rt(e2.geometry, J, z, false);
        t.spatialReference = f$1.WGS84, e2.geometry = ot(g(t, q2));
      }
  }
  for (const e2 of V)
    e2.objectId = e2.attributes[E2];
  const Y = C2 || !C2 && q2.isWebMercator ? q2.toJSON() : g$1, ee = new e();
  return ee.exceededTransferLimit = H, ee.features = V, ee.fields = A2, ee.geometryType = J, ee.hasZ = z, ee.objectIdFieldName = E2, ee.spatialReference = Y, ee;
}
function G(e2) {
  return null != e2 && "extent" === e2.type;
}
function W(e2, t) {
  const { isWebMercator: n, wkid: i2 } = e2;
  if (!i2)
    return null;
  const r = n ? t[3857] ?? t[102100] ?? t[102113] ?? t[900913] : t[e2.wkid];
  return r ? `${k}${r}` : null;
}
function D(e2) {
  if (null == e2)
    return "";
  const { xmin: t, ymin: n, xmax: i2, ymax: r } = e2;
  return `${t},${n},${i2},${r}`;
}
function M(e2) {
  if (null == e2)
    return null;
  const { start: t, end: n } = e2;
  return `${null != t ? t.toISOString() : ".."}/${null != n ? n.toISOString() : ".."}`;
}
function Z(e2) {
  return null != e2 && e2 && "1=1" !== e2 ? e2 : null;
}
function U(e2, t) {
  if (!G(e2))
    return null;
  const { spatialReference: n } = e2;
  if (!n || n.isWGS84)
    return { bbox: D(e2) };
  const i2 = W(n, t);
  return null != i2 ? { bbox: D(e2), "bbox-crs": i2 } : n.isWebMercator ? { bbox: D(g(e2, f$1.WGS84)) } : null;
}
function K(e2) {
  const t = e2.extent?.spatial;
  if (!t)
    return null;
  const n = t.bbox[0], i2 = 4 === n.length, [r, o2] = n, s2 = i2 ? void 0 : n[2];
  return { xmin: r, ymin: o2, xmax: i2 ? n[2] : n[3], ymax: i2 ? n[3] : n[4], zmin: s2, zmax: i2 ? void 0 : n[5], spatialReference: f$1.WGS84.toJSON() };
}
function L(e2, t, n) {
  return e2.find(({ rel: e3, type: i2 }) => e3 === t && i2 === n) ?? e2.find(({ rel: e3, type: n2 }) => e3 === t && !n2);
}
function A(e2, t, n) {
  if (!n)
    return;
  const i2 = L(n, "next", S.geojson), r = I$2(i2?.href)?.query;
  if (!r)
    return;
  const s2 = I$2(e2).query, a = Object.keys(s2 ?? {}), l = Object.entries(r).filter(([e3]) => !a.includes(e3)).find(([e3, n2]) => T.has(e3.toLowerCase()) && Number.parseInt(n2, 10) === t), c = l?.[0];
  return c;
}
!function(e2) {
  e2.json = "application/json", e2.geojson = "application/geo+json", e2.openapi = "application/vnd.oai.openapi+json;version=3.0";
}(S || (S = {}));
export {
  $,
  C,
  N,
  O,
  P,
  R,
  k,
  q,
  v,
  x
};
