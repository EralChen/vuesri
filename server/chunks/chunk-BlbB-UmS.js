import { bp as p$1, aO as s, bR as d$1, bS as bt, bT as I$1, bU as s$1, bo as a, bV as g } from "./chunk-ejFG4zJ0.js";
import { t as t$1 } from "./chunk-x-z610yQ.js";
import { t } from "./chunk-Ll6uvSxj.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const c = { FeatureLayer: true, SceneLayer: true };
async function y(e) {
  const r = e.properties?.customParameters, a2 = await p(e.url, r), t2 = { ...e.properties, url: e.url };
  if (a2.layers.length + a2.tables.length === 0)
    return null != a2.layerId && (t2.layerId = a2.layerId), null != a2.sourceJSON && (t2.sourceJSON = a2.sourceJSON), new a2.Constructor(t2);
  const s2 = new (await import("./chunk-2JsJEPeu.js")).default({ title: a2.parsedUrl.title });
  return await m(s2, a2, t2), s2;
}
function f(e, r) {
  return e ? e.find((e2) => e2.id === r) : null;
}
async function m(e, r, a2) {
  function t2(e2, r2, t3, s3) {
    const n = { ...a2, layerId: r2, sublayerTitleMode: "service-name" };
    return null != e2 && (n.url = e2), null != t3 && (n.sourceJSON = t3), s3(n);
  }
  const s2 = r.sublayerConstructorProvider;
  for (const { id: n, serverUrl: l } of r.layers) {
    const a3 = f(r.sublayerInfos, n), o = (a3 && s2?.(a3)) ?? r.Constructor, i = t2(l, n, a3, (e2) => new o(e2));
    e.add(i);
  }
  if (r.tables.length) {
    const a3 = await h("FeatureLayer");
    r.tables.forEach(({ id: s3, serverUrl: n }) => {
      const l = t2(n, s3, f(r.tableInfos, s3), (e2) => new a3(e2));
      e.tables.add(l);
    });
  }
}
async function p(r, a2) {
  let s$12 = p$1(r);
  if (null == s$12 && (s$12 = await d(r, a2)), null == s$12)
    throw new s("arcgis-layers:url-mismatch", "The url '${url}' is not a valid arcgis resource", { url: r });
  const { serverType: n, sublayer: l } = s$12;
  let i;
  const y2 = { FeatureServer: "FeatureLayer", StreamServer: "StreamLayer", VectorTileServer: "VectorTileLayer" }, f2 = "FeatureServer" === n, m2 = "SceneServer" === n, p2 = { parsedUrl: s$12, Constructor: null, layerId: f2 || m2 ? l ?? void 0 : void 0, layers: [], tables: [] };
  switch (n) {
    case "MapServer":
      if (null != l)
        i = "FeatureLayer";
      else {
        i = await b(r, a2) ? "TileLayer" : "MapImageLayer";
      }
      break;
    case "ImageServer": {
      const e = await t(r, { customParameters: a2 }), { tileInfo: t$12, cacheType: s2 } = e;
      i = t$12 ? "LERC" !== t$12?.format?.toUpperCase() || s2 && "elevation" !== s2.toLowerCase() ? "ImageryTileLayer" : "ElevationLayer" : "ImageryLayer";
      break;
    }
    case "SceneServer": {
      const e = await t(s$12.url.path, { customParameters: a2 });
      if (i = "SceneLayer", e) {
        const r2 = e?.layers;
        if ("Voxel" === e?.layerType)
          i = "VoxelLayer";
        else if (r2?.length) {
          const e2 = r2[0]?.layerType;
          null != e2 && null != g[e2] && (i = g[e2]);
        }
      }
      break;
    }
    case "3DTilesServer":
      throw new s("arcgis-layers:unsupported", "fromUrl() not supported for 3DTiles layers");
    case "FeatureServer":
      if (i = "FeatureLayer", null != l) {
        const e = await t(r, { customParameters: a2 });
        p2.sourceJSON = e, "Oriented Imagery Layer" === e.type && (i = "OrientedImageryLayer");
      }
      break;
    default:
      i = y2[n];
  }
  if (c[i] && null == l) {
    const e = await S(r, n, a2);
    f2 && (p2.sublayerInfos = e.layerInfos, p2.tableInfos = e.tableInfos);
    if (1 !== e.layers.length + e.tables.length)
      p2.layers = e.layers, p2.tables = e.tables, f2 && e.layerInfos?.length && (p2.sublayerConstructorProvider = await I(e.layerInfos));
    else if (f2 || m2) {
      const r2 = e.layerInfos?.[0] ?? e.tableInfos?.[0];
      p2.layerId = e.layers[0]?.id ?? e.tables[0]?.id, p2.sourceJSON = r2, f2 && "Oriented Imagery Layer" === r2?.type && (i = "OrientedImageryLayer");
    }
  }
  return p2.Constructor = await h(i), p2;
}
async function d(e, t$12) {
  const n = await t(e, { customParameters: t$12 });
  let l = null, o = null;
  const i = n.type;
  if ("Feature Layer" === i || "Table" === i ? (l = "FeatureServer", o = n.id ?? null) : "indexedVector" === i ? l = "VectorTileServer" : n.hasOwnProperty("mapName") ? l = "MapServer" : n.hasOwnProperty("bandCount") && n.hasOwnProperty("pixelSizeX") ? l = "ImageServer" : n.hasOwnProperty("maxRecordCount") && n.hasOwnProperty("allowGeometryUpdates") ? l = "FeatureServer" : n.hasOwnProperty("streamUrls") ? l = "StreamServer" : v(n) ? (l = "SceneServer", o = n.id) : n.hasOwnProperty("layers") && v(n.layers?.[0]) && (l = "SceneServer"), !l)
    return null;
  const c2 = null != o ? d$1(e) : null;
  return { title: null != c2 && n.name || bt(e), serverType: l, sublayer: o, url: { path: null != c2 ? c2.serviceUrl : I$1(e).path } };
}
function v(e) {
  return null != e && e.hasOwnProperty("store") && e.hasOwnProperty("id") && "number" == typeof e.id;
}
async function S(e, r, a2) {
  let t$2, s2, n = false;
  switch (r) {
    case "FeatureServer": {
      const r2 = await t$1(e, { customParameters: a2 });
      n = !!r2.layersJSON, t$2 = r2.layersJSON || r2.serviceJSON;
      break;
    }
    case "SceneServer": {
      const r2 = await w(e, a2);
      t$2 = r2.serviceInfo, s2 = r2.tableServerUrl;
      break;
    }
    default:
      t$2 = await t(e, { customParameters: a2 });
  }
  const o = t$2?.layers, i = t$2?.tables;
  return { layers: o?.map((e2) => ({ id: e2.id })).reverse() || [], tables: i?.map((e2) => ({ serverUrl: s2, id: e2.id })).reverse() || [], layerInfos: n ? o : [], tableInfos: n ? i : [] };
}
async function w(e, r) {
  const a2 = await t(e, { customParameters: r }), t$12 = a2.layers?.[0];
  if (!t$12)
    return { serviceInfo: a2 };
  try {
    const { serverUrl: t$13 } = await s$1(e), s2 = await t(t$13, { customParameters: r }).catch(() => null);
    return s2 && (a2.tables = s2.tables), { serviceInfo: a2, tableServerUrl: t$13 };
  } catch {
    return { serviceInfo: a2 };
  }
}
async function h(e) {
  return (0, a[e])();
}
async function b(e, r) {
  return (await t(e, { customParameters: r })).tileInfo;
}
async function I(e) {
  const r = [], a2 = [];
  if (e.forEach((e2) => {
    const { type: t3 } = e2;
    "Oriented Imagery Layer" === t3 ? (r.push(t3), a2.push(h("OrientedImageryLayer"))) : (r.push(t3), a2.push(h("FeatureLayer")));
  }), !a2.length)
    return;
  const t2 = await Promise.all(a2), s2 = /* @__PURE__ */ new Map();
  return r.forEach((e2, r2) => {
    s2.set(e2, t2[r2]);
  }), (e2) => s2.get(e2.type);
}
export {
  y as fromUrl
};
