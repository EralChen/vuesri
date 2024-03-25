import { bD as a, df as t, dg as Et, at as s$1, aQ as U$1, dh as i$1, di as C, dj as m, dk as o, dl as B, aB as f$1, dm as d$1, dn as t$1, dp as P$1 } from "./chunk-ejFG4zJ0.js";
const c = { esriGeometryPoint: "points", esriGeometryPolyline: "polylines", esriGeometryPolygon: "polygons" };
function d(e) {
  const o2 = e.folders || [], t2 = o2.slice(), r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), a$1 = /* @__PURE__ */ new Map(), l = { esriGeometryPoint: n, esriGeometryPolyline: i, esriGeometryPolygon: f };
  (e.featureCollection?.layers || []).forEach((e2) => {
    const o3 = a(e2);
    o3.featureSet.features = [];
    const t3 = e2.featureSet.geometryType;
    r.set(t3, o3);
    const a$12 = e2.layerDefinition.objectIdField;
    "esriGeometryPoint" === t3 ? h(n, a$12, e2.featureSet.features) : "esriGeometryPolyline" === t3 ? h(i, a$12, e2.featureSet.features) : "esriGeometryPolygon" === t3 && h(f, a$12, e2.featureSet.features);
  }), e.groundOverlays && e.groundOverlays.forEach((e2) => {
    a$1.set(e2.id, e2);
  }), o2.forEach((o3) => {
    o3.networkLinkIds.forEach((r2) => {
      const s = P(r2, o3.id, e.networkLinks);
      s && t2.push(s);
    });
  }), t2.forEach((e2) => {
    if (e2.featureInfos) {
      e2.points = a(r.get("esriGeometryPoint")), e2.polylines = a(r.get("esriGeometryPolyline")), e2.polygons = a(r.get("esriGeometryPolygon")), e2.mapImages = [];
      for (const o3 of e2.featureInfos)
        switch (o3.type) {
          case "esriGeometryPoint":
          case "esriGeometryPolyline":
          case "esriGeometryPolygon": {
            const t3 = l[o3.type].get(o3.id);
            t3 && e2[c[o3.type]]?.featureSet.features.push(t3);
            break;
          }
          case "GroundOverlay": {
            const t3 = a$1.get(o3.id);
            t3 && e2.mapImages.push(t3);
            break;
          }
        }
      e2.fullExtent = j([e2]);
    }
  });
  const u = j(t2);
  return { folders: o2, sublayers: t2, extent: u };
}
function g(t$12, s, i, f) {
  const a2 = t?.findCredential(t$12);
  t$12 = Et(t$12, { token: a2?.token });
  const l = s$1.kmlServiceUrl;
  return U$1(l, { query: { url: t$12, model: "simple", folders: "", refresh: 0 !== i || void 0, outSR: JSON.stringify(s) }, responseType: "json", signal: f });
}
function S(e, o2, t2 = null, r = []) {
  const s = [], n = {}, i = o2.sublayers, f = new Set(o2.folders.map((e2) => e2.id));
  return i.forEach((o3) => {
    const i2 = new e();
    if (t2 ? i2.read(o3, t2) : i2.read(o3), r.length && f.has(i2.id) && (i2.visible = r.includes(i2.id)), n[o3.id] = i2, null != o3.parentFolderId && -1 !== o3.parentFolderId) {
      const e2 = n[o3.parentFolderId];
      e2.sublayers || (e2.sublayers = []), e2.sublayers?.unshift(i2);
    } else
      s.unshift(i2);
  }), s;
}
function h(e, o2, t2) {
  t2.forEach((t3) => {
    e.set(t3.attributes[o2], t3);
  });
}
function G(e, o2) {
  let t2;
  return o2.some((o3) => o3.id === e && (t2 = o3, true)), t2;
}
function P(e, o2, t2) {
  const r = G(e, t2);
  return r && (r.parentFolderId = o2, r.networkLink = r), r;
}
async function b(e) {
  const o2 = d$1.fromJSON(e.featureSet).features, r = e.layerDefinition, s = t$1(r.drawingInfo.renderer), n = P$1.fromJSON(e.popupInfo), i = [];
  for (const t2 of o2) {
    const e2 = await s.getSymbolAsync(t2);
    t2.symbol = e2, t2.popupTemplate = n, t2.visible = true, i.push(t2);
  }
  return i;
}
function j(e) {
  const o$1 = i$1(C), t2 = i$1(C);
  for (const r of e) {
    if (r.polygons?.featureSet?.features)
      for (const e2 of r.polygons.featureSet.features)
        m(o$1, e2.geometry), o(t2, o$1);
    if (r.polylines?.featureSet?.features)
      for (const e2 of r.polylines.featureSet.features)
        m(o$1, e2.geometry), o(t2, o$1);
    if (r.points?.featureSet?.features)
      for (const e2 of r.points.featureSet.features)
        m(o$1, e2.geometry), o(t2, o$1);
    if (r.mapImages)
      for (const e2 of r.mapImages)
        m(o$1, e2.extent), o(t2, o$1);
  }
  return B(t2, C) ? void 0 : { xmin: t2[0], ymin: t2[1], zmin: t2[2], xmax: t2[3], ymax: t2[4], zmax: t2[5], spatialReference: f$1.WGS84 };
}
export {
  S,
  b,
  d,
  g,
  j
};
