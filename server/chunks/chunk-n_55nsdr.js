import { aR as p$1, aM as s$1, bi as d$1, bj as bt, a_ as I$1, bk as l, aQ as a, bl as p$2 } from "./chunk-KFNcxJaF.js";
import { t as t$1 } from "./chunk-_vnu0ofh.js";
import { t } from "./chunk-rOxUIHGZ.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const u = { FeatureLayer: true, SceneLayer: true };
async function y(e) {
  const r = e.properties?.customParameters, a2 = await p(e.url, r), t2 = { ...e.properties, url: e.url };
  if (a2.layers.length + a2.tables.length === 0)
    return null != a2.layerId && (t2.layerId = a2.layerId), null != a2.sourceJSON && (t2.sourceJSON = a2.sourceJSON), new a2.Constructor(t2);
  const s = new (await import("./chunk-7VytmB-8.js")).default({ title: a2.parsedUrl.title });
  return await f(s, a2, t2), s;
}
function m(e, r) {
  return e ? e.find((e2) => e2.id === r) : null;
}
async function f(e, r, a2) {
  function t2(e2, r2, t3, s2) {
    const n = { ...a2, layerId: r2, sublayerTitleMode: "service-name" };
    return null != e2 && (n.url = e2), null != t3 && (n.sourceJSON = t3), s2(n);
  }
  const s = r.sublayerConstructorProvider;
  for (const { id: n, serverUrl: l2 } of r.layers) {
    const a3 = m(r.sublayerInfos, n), o = (a3 && s?.(a3)) ?? r.Constructor, i = t2(l2, n, a3, (e2) => new o(e2));
    e.add(i);
  }
  if (r.tables.length) {
    const a3 = await b("FeatureLayer");
    r.tables.forEach(({ id: s2, serverUrl: n }) => {
      const l2 = t2(n, s2, m(r.tableInfos, s2), (e2) => new a3(e2));
      e.tables.add(l2);
    });
  }
}
async function p(r, a2) {
  let s = p$1(r);
  if (null == s && (s = await d(r, a2)), null == s)
    throw new s$1("arcgis-layers:url-mismatch", "The url '${url}' is not a valid arcgis resource", { url: r });
  const { serverType: n, sublayer: l2 } = s;
  let i;
  const y2 = { FeatureServer: "FeatureLayer", StreamServer: "StreamLayer", VectorTileServer: "VectorTileLayer" }, m2 = "FeatureServer" === n, f2 = "SceneServer" === n, p2 = { parsedUrl: s, Constructor: null, layerId: m2 || f2 ? l2 ?? void 0 : void 0, layers: [], tables: [] };
  switch (n) {
    case "MapServer":
      if (null != l2)
        i = "FeatureLayer";
      else {
        i = await h(r, a2) ? "TileLayer" : "MapImageLayer";
      }
      break;
    case "ImageServer": {
      const e = await t(r, { customParameters: a2 }), { tileInfo: t$12, cacheType: s2 } = e;
      i = t$12 ? "LERC" !== t$12?.format?.toUpperCase() || s2 && "elevation" !== s2.toLowerCase() ? "ImageryTileLayer" : "ElevationLayer" : "ImageryLayer";
      break;
    }
    case "SceneServer": {
      const e = await t(s.url.path, { customParameters: a2 });
      if (i = "SceneLayer", e) {
        const r2 = e?.layers;
        if ("Voxel" === e?.layerType)
          i = "VoxelLayer";
        else if (r2?.length) {
          const e2 = r2[0]?.layerType;
          null != e2 && null != p$2[e2] && (i = p$2[e2]);
        }
      }
      break;
    }
    case "FeatureServer":
      if (i = "FeatureLayer", null != l2) {
        const e = await t(r, { customParameters: a2 });
        p2.sourceJSON = e, "Oriented Imagery Layer" === e.type && (i = "OrientedImageryLayer");
      }
      break;
    default:
      i = y2[n];
  }
  if (u[i] && null == l2) {
    const e = await S(r, n, a2);
    m2 && (p2.sublayerInfos = e.layerInfos, p2.tableInfos = e.tableInfos);
    if (1 !== e.layers.length + e.tables.length)
      p2.layers = e.layers, p2.tables = e.tables, m2 && e.layerInfos?.length && (p2.sublayerConstructorProvider = await I(e.layerInfos));
    else if (m2 || f2) {
      const r2 = e.layerInfos?.[0] ?? e.tableInfos?.[0];
      p2.layerId = e.layers[0]?.id ?? e.tables[0]?.id, p2.sourceJSON = r2, m2 && "Oriented Imagery Layer" === r2?.type && (i = "OrientedImageryLayer");
    }
  }
  return p2.Constructor = await b(i), p2;
}
async function d(e, t$12) {
  const n = await t(e, { customParameters: t$12 });
  let l2 = null, o = null;
  const i = n.type;
  if ("Feature Layer" === i || "Table" === i ? (l2 = "FeatureServer", o = n.id ?? null) : "indexedVector" === i ? l2 = "VectorTileServer" : n.hasOwnProperty("mapName") ? l2 = "MapServer" : n.hasOwnProperty("bandCount") && n.hasOwnProperty("pixelSizeX") ? l2 = "ImageServer" : n.hasOwnProperty("maxRecordCount") && n.hasOwnProperty("allowGeometryUpdates") ? l2 = "FeatureServer" : n.hasOwnProperty("streamUrls") ? l2 = "StreamServer" : v(n) ? (l2 = "SceneServer", o = n.id) : n.hasOwnProperty("layers") && v(n.layers?.[0]) && (l2 = "SceneServer"), !l2)
    return null;
  const u2 = null != o ? d$1(e) : null;
  return { title: null != u2 && n.name || bt(e), serverType: l2, sublayer: o, url: { path: null != u2 ? u2.serviceUrl : I$1(e).path } };
}
function v(e) {
  return null != e && e.hasOwnProperty("store") && e.hasOwnProperty("id") && "number" == typeof e.id;
}
async function S(e, r, a2) {
  let t$2, s, n = false;
  switch (r) {
    case "FeatureServer": {
      const r2 = await t$1(e, { customParameters: a2 });
      n = !!r2.layersJSON, t$2 = r2.layersJSON || r2.serviceJSON;
      break;
    }
    case "SceneServer": {
      const r2 = await w(e, a2);
      t$2 = r2.serviceInfo, s = r2.tableServerUrl;
      break;
    }
    default:
      t$2 = await t(e, { customParameters: a2 });
  }
  const o = t$2?.layers, i = t$2?.tables;
  return { layers: o?.map((e2) => ({ id: e2.id })).reverse() || [], tables: i?.map((e2) => ({ serverUrl: s, id: e2.id })).reverse() || [], layerInfos: n ? o : [], tableInfos: n ? i : [] };
}
async function w(e, r) {
  const a2 = await t(e, { customParameters: r }), t$12 = a2.layers?.[0];
  if (!t$12)
    return { serviceInfo: a2 };
  try {
    const { serverUrl: t$13 } = await l(e), s = await t(t$13, { customParameters: r }).catch(() => null);
    return s && (a2.tables = s.tables), { serviceInfo: a2, tableServerUrl: t$13 };
  } catch {
    return { serviceInfo: a2 };
  }
}
async function b(e) {
  return (0, a[e])();
}
async function h(e, r) {
  return (await t(e, { customParameters: r })).tileInfo;
}
async function I(e) {
  const r = [], a2 = [];
  if (e.forEach((e2) => {
    const { type: t3 } = e2;
    "Oriented Imagery Layer" === t3 ? (r.push(t3), a2.push(b("OrientedImageryLayer"))) : (r.push(t3), a2.push(b("FeatureLayer")));
  }), !a2.length)
    return;
  const t2 = await Promise.all(a2), s = /* @__PURE__ */ new Map();
  return r.forEach((e2, r2) => {
    s.set(e2, t2[r2]);
  }), (e2) => s.get(e2.type);
}
export {
  y as fromUrl
};
