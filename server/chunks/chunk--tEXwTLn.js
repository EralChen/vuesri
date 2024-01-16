import { bk as l$1, aX as S$1, aM as s$1, aQ as a$1, bl as p$1, cA as s$2 } from "./chunk-KFNcxJaF.js";
import { t as t$1 } from "./chunk-rOxUIHGZ.js";
class e {
  constructor() {
    this._serviceMetadatas = /* @__PURE__ */ new Map();
  }
  async fetchServiceMetadata(e2, s2) {
    const a2 = this._serviceMetadatas.get(e2);
    if (a2)
      return a2;
    const r2 = await t$1(e2, s2);
    return this._serviceMetadatas.set(e2, r2), r2;
  }
}
function t(e2) {
  const t2 = { id: e2.id, name: e2.name };
  return "Oriented Imagery Layer" === e2.type && (t2.layerType = "OrientedImageryLayer"), t2;
}
async function a(e2, a2, r2) {
  if (null == e2?.layers || null == e2?.tables) {
    const l2 = await r2.fetchServiceMetadata(a2);
    (e2 = e2 || {}).layers = e2.layers || l2?.layers?.map(t), e2.tables = e2.tables || l2?.tables?.map(t);
  }
  return e2;
}
function r(e2) {
  const t2 = e2.layers;
  if (t2?.length)
    return t2[0].id;
  const a2 = e2.tables;
  return a2?.length ? a2[0].id : null;
}
function l(e2) {
  return (e2?.layers?.length ?? 0) + (e2?.tables?.length ?? 0);
}
function n(e2) {
  const t2 = [];
  return e2?.layers?.forEach((e3) => {
    "SubtypeGroupLayer" === e3.layerType && t2.push(e3.id);
  }), t2;
}
function s(e2) {
  return e2?.layers?.filter(({ layerType: e3 }) => "OrientedImageryLayer" === e3).map(({ id: e3 }) => e3);
}
async function i(a2, r2, l2) {
  if (!a2?.url)
    return r2 ?? {};
  if (r2 ??= {}, !r2.layers) {
    const e2 = await l2.fetchServiceMetadata(a2.url);
    r2.layers = e2.layers?.map(t);
  }
  const { serverUrl: n2, portalItem: s2 } = await l$1(a2.url, { sceneLayerItem: a2 }).catch(() => ({ serverUrl: null, portalItem: null }));
  if (null == n2)
    return r2.tables = [], r2;
  if (!r2.tables && s2) {
    const e2 = await s2.fetchData();
    if (e2?.tables)
      r2.tables = e2.tables.map(t);
    else {
      const e3 = await l2.fetchServiceMetadata(n2);
      r2.tables = e3?.tables?.map(t);
    }
  }
  if (r2.tables)
    for (const e2 of r2.tables)
      e2.url = `${n2}/${e2.id}`;
  return r2;
}
async function p(e2) {
  !e2.portalItem || e2.portalItem instanceof S$1 || (e2 = { ...e2, portalItem: new S$1(e2.portalItem) });
  const a2 = await f(e2.portalItem);
  return new a2.constructor({ portalItem: e2.portalItem, ...a2.properties });
}
async function f(e$1) {
  await e$1.load();
  const a2 = new e();
  return d(await L(e$1, a2));
}
async function L(a2, r2) {
  switch (a2.type) {
    case "Map Service":
      return w(a2, r2);
    case "Feature Service":
      return S(a2, r2);
    case "Feature Collection":
      return I(a2);
    case "Scene Service":
      return N(a2, r2);
    case "Image Service":
      return v(a2, r2);
    case "Stream Service":
      return M();
    case "Vector Tile Service":
      return h();
    case "GeoJson":
      return T();
    case "CSV":
      return g();
    case "KML":
      return j();
    case "WFS":
      return F();
    case "WMTS":
      return b();
    case "WMS":
      return G();
    case "Feed":
      return C();
    case "Group Layer":
      return U();
    default:
      throw new s$1("portal:unknown-item-type", "Unknown item type '${type}'", { type: a2.type });
  }
}
async function d(e2) {
  const a2 = e2.className, r2 = a$1[a2];
  return { constructor: await r2(), properties: e2.properties };
}
async function w(e2, a2) {
  return await V(e2, a2) ? { className: "TileLayer" } : { className: "MapImageLayer" };
}
async function S(e2, a2) {
  const r2 = await W(e2, a2);
  if ("object" == typeof r2) {
    const e3 = {};
    return null != r2.id && (e3.layerId = r2.id), { className: r2.className || "FeatureLayer", properties: e3 };
  }
  return { className: "GroupLayer" };
}
async function N(e2, r2) {
  const n2 = await W(e2, r2, async () => {
    try {
      if (!e2.url)
        return [];
      const { serverUrl: t2 } = await l$1(e2.url, { sceneLayerItem: e2 }), n3 = await r2.fetchServiceMetadata(t2);
      return n3?.tables ?? [];
    } catch {
      return [];
    }
  });
  if ("object" == typeof n2) {
    const a2 = {};
    let s2;
    if (null != n2.id ? (a2.layerId = n2.id, s2 = `${e2.url}/layers/${n2.id}`) : s2 = e2.url, e2.typeKeywords?.length) {
      for (const r3 of Object.keys(p$1))
        if (e2.typeKeywords.includes(r3))
          return { className: p$1[r3] };
    }
    const c = await r2.fetchServiceMetadata(s2);
    return { className: p$1[c?.layerType] || "SceneLayer", properties: a2 };
  }
  if (false === n2) {
    const a2 = await r2.fetchServiceMetadata(e2.url);
    if ("Voxel" === a2?.layerType)
      return { className: "VoxelLayer" };
  }
  return { className: "GroupLayer" };
}
async function I(e2) {
  await e2.load();
  const a2 = s$2(e2, "Map Notes"), r2 = s$2(e2, "Markup");
  if (a2 || r2)
    return { className: "MapNotesLayer" };
  if (s$2(e2, "Route Layer"))
    return { className: "RouteLayer" };
  const t2 = await e2.fetchData();
  return 1 === l(t2) ? { className: "FeatureLayer" } : { className: "GroupLayer" };
}
async function v(e2, a2) {
  await e2.load();
  const r2 = e2.typeKeywords?.map((e3) => e3.toLowerCase()) ?? [];
  if (r2.includes("elevation 3d layer"))
    return { className: "ElevationLayer" };
  if (r2.includes("tiled imagery"))
    return { className: "ImageryTileLayer" };
  const t2 = await e2.fetchData(), n2 = t2?.layerType;
  if ("ArcGISTiledImageServiceLayer" === n2)
    return { className: "ImageryTileLayer" };
  if ("ArcGISImageServiceLayer" === n2)
    return { className: "ImageryLayer" };
  const s2 = await a2.fetchServiceMetadata(e2.url), c = s2.cacheType?.toLowerCase(), o = s2.capabilities?.toLowerCase().includes("tilesonly");
  return "map" === c || o ? { className: "ImageryTileLayer" } : { className: "ImageryLayer" };
}
function M() {
  return { className: "StreamLayer" };
}
function h() {
  return { className: "VectorTileLayer" };
}
function T() {
  return { className: "GeoJSONLayer" };
}
function g() {
  return { className: "CSVLayer" };
}
function j() {
  return { className: "KMLLayer" };
}
function F() {
  return { className: "WFSLayer" };
}
function G() {
  return { className: "WMSLayer" };
}
function b() {
  return { className: "WMTSLayer" };
}
function C() {
  return { className: "StreamLayer" };
}
function U() {
  return { className: "GroupLayer" };
}
async function V(e2, a2) {
  return (await a2.fetchServiceMetadata(e2.url)).tileInfo;
}
async function W(e2, a$12, r2) {
  const t2 = e2.url;
  if (!t2 || /\/\d+$/.test(t2))
    return {};
  await e2.load();
  let n$1 = await e2.fetchData();
  if ("Feature Service" === e2.type) {
    const e3 = await a(n$1, t2, a$12), r3 = K(e3);
    if ("object" == typeof r3) {
      const a2 = n(e3), t3 = s(e3);
      r3.className = null != r3.id && a2.includes(r3.id) ? "SubtypeGroupLayer" : null != r3.id && t3?.includes(r3.id) ? "OrientedImageryLayer" : "FeatureLayer";
    }
    return r3;
  }
  "Scene Service" === e2.type && (n$1 = await i(e2, n$1, a$12));
  if (l(n$1) > 0)
    return K(n$1);
  const s$12 = await a$12.fetchServiceMetadata(t2);
  return r2 && (s$12.tables = await r2()), K(s$12);
}
function K(e2) {
  return 1 === l(e2) && { id: r(e2) };
}
const portalLayers = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fromItem: p,
  selectLayerClassPath: L
}, Symbol.toStringTag, { value: "Module" }));
export {
  L,
  a,
  e,
  i,
  l,
  n,
  portalLayers as p,
  r,
  s,
  t
};
