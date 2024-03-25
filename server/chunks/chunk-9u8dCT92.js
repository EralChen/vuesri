import { dm as d$1, aB as f$1, bJ as c$1, aC as M, eI as $, cY as x$1, eJ as d$2, eK as s, eL as r, eM as o, eN as i, aT as s$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const m = () => s$1.getLogger("esri.rest.support.meshFeatureSet");
function p(t, r2, o2) {
  const n = o2.features;
  o2.features = [], delete o2.geometryType;
  const s2 = d$1.fromJSON(o2);
  if (s2.geometryType = "mesh", !o2.assetMaps)
    return s2;
  const i2 = S(r2, o2.assetMaps), u = t.sourceSpatialReference ?? f$1.WGS84, f = o2.globalIdFieldName, { outFields: c } = t, m2 = null != c && c.length > 0 ? g(c.includes("*") ? null : new Set(c)) : () => ({});
  for (const a of n) {
    const t2 = h(a, f, u, r2, i2);
    null != t2 && s2.features.push(new c$1({ geometry: t2, attributes: m2(a) }));
  }
  return s2;
}
function g(e) {
  return ({ attributes: t }) => {
    if (!t)
      return {};
    if (!e)
      return t;
    for (const r2 in t)
      e.has(r2) || delete t[r2];
    return t;
  };
}
function h(e, t, r2, s2, a) {
  const i2 = e.attributes[t], u = a.get(i2);
  if (null == u)
    return m().error("mesh-feature-set:asset-not-found", "Service returned a feature which was not found in the asset map", e), null;
  if (!e.geometry)
    return m().error("mesh-feature-set:no-geometry", "Service returned a feature without geometry", e), null;
  const f = y(e, r2, s2), c = M.fromJSON(e.geometry);
  c.spatialReference = r2;
  const l = E(e.attributes, s2), p2 = r2.isGeographic ? "local" : "georeferenced", g2 = w(u);
  return g2 ? $.createWithExternalSource(f, g2, { extent: c, transform: l, vertexSpace: p2 }) : $.createIncomplete(f, { extent: c, transform: l, vertexSpace: p2 });
}
function y({ attributes: e }, t, { transformFieldRoles: r2 }) {
  const o2 = e[r2.originX], n = e[r2.originY], a = e[r2.originZ];
  return new x$1({ x: o2, y: n, z: a, spatialReference: t });
}
function E(e, { transformFieldRoles: t }) {
  return new d$2({ translation: [e[t.translationX], -e[t.translationZ], e[t.translationY]], rotationAxis: [e[t.rotationX], -e[t.rotationZ], e[t.rotationY]], rotationAngle: e[t.rotationDeg], scale: [e[t.scaleX], e[t.scaleZ], e[t.scaleY]] });
}
var d;
function S(e, t) {
  const o2 = /* @__PURE__ */ new Map();
  for (const n of t) {
    const t2 = n.parentGlobalId;
    if (null == t2)
      continue;
    const s$12 = n.assetName, a = n.assetType, i2 = n.assetHash, u = n.assetURL, f = n.conversionStatus, l = n.seqNo, p2 = s(a, e.supportedFormats);
    if (!p2) {
      m().error("mesh-feature-set:unknown-format", `Service returned an asset of type ${a}, but it does not list it as a supported type`);
      continue;
    }
    const g2 = r(o2, t2, () => ({ files: /* @__PURE__ */ new Map() }));
    r(g2.files, s$12, () => ({ name: s$12, type: a, mimeType: p2, status: D(f), parts: [] })).parts[l] = { hash: i2, url: u };
  }
  return o2;
}
function w(e) {
  const t = Array.from(e.files.values()), r2 = new Array();
  for (const o$1 of t) {
    if (o$1.status !== d.COMPLETED)
      return null;
    const e2 = new Array();
    for (const t2 of o$1.parts) {
      if (!t2)
        return null;
      e2.push(new o(t2.url, t2.hash));
    }
    r2.push(new i(o$1.name, o$1.mimeType, e2));
  }
  return r2;
}
function D(e) {
  switch (e) {
    case "COMPLETED":
    case "SUBMITTED":
      return d.COMPLETED;
    case "INPROGRESS":
      return d.PENDING;
    default:
      return d.FAILED;
  }
}
!function(e) {
  e[e.FAILED = 0] = "FAILED", e[e.PENDING = 1] = "PENDING", e[e.COMPLETED = 2] = "COMPLETED";
}(d || (d = {}));
export {
  S as assetMapFromAssetMapsJSON,
  h as extractMesh,
  p as meshFeatureSetFromJSON
};
