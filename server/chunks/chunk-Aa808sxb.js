import { bU as s$1, bv as S$1, aO as s$2, bo as a$1, bV as g$1, d0 as s$3 } from "./chunk-ejFG4zJ0.js";
import { t as t$1 } from "./chunk-Ll6uvSxj.js";
class e {
  constructor() {
    this._serviceMetadatas = /* @__PURE__ */ new Map(), this._itemDatas = /* @__PURE__ */ new Map();
  }
  async fetchServiceMetadata(e2, a2) {
    const s2 = this._serviceMetadatas.get(e2);
    if (s2)
      return s2;
    const r2 = await t$1(e2, a2);
    return this._serviceMetadatas.set(e2, r2), r2;
  }
  async fetchItemData(t2) {
    const { id: e2 } = t2;
    if (!e2)
      return null;
    const { _itemDatas: a2 } = this;
    if (a2.has(e2))
      return a2.get(e2);
    const s2 = await t2.fetchData();
    return a2.set(e2, s2), s2;
  }
  async fetchCustomParameters(t2, e2) {
    const a2 = await this.fetchItemData(t2);
    return a2 && "object" == typeof a2 && (e2 ? e2(a2) : a2.customParameters) || null;
  }
}
function t(e2) {
  const t2 = { id: e2.id, name: e2.name };
  return "Oriented Imagery Layer" === e2.type && (t2.layerType = "OrientedImageryLayer"), t2;
}
async function a(e2, a2, r2) {
  if (null == e2?.layers || null == e2?.tables) {
    const s2 = await r2.fetchServiceMetadata(a2, { customParameters: l(e2)?.customParameters });
    (e2 = e2 || {}).layers = e2.layers || s2?.layers?.map(t), e2.tables = e2.tables || s2?.tables?.map(t);
  }
  return e2;
}
function r(e2) {
  const { layers: t2, tables: a2 } = e2;
  return t2?.length ? t2[0].id : a2?.length ? a2[0].id : null;
}
function l(e2) {
  if (!e2)
    return null;
  const { layers: t2, tables: a2 } = e2;
  return t2?.length ? t2[0] : a2?.length ? a2[0] : null;
}
function s(e2) {
  return (e2?.layers?.length ?? 0) + (e2?.tables?.length ?? 0);
}
function n(e2) {
  const t2 = [];
  return e2?.layers?.forEach((e3) => {
    "SubtypeGroupLayer" === e3.layerType && t2.push(e3.id);
  }), t2;
}
function u(e2) {
  return e2?.layers?.filter(({ layerType: e3 }) => "OrientedImageryLayer" === e3).map(({ id: e3 }) => e3);
}
function i(e2) {
  return e2?.layers?.filter(({ layerType: e3 }) => "CatalogLayer" === e3).map(({ id: e3 }) => e3);
}
async function c(a2, r2, s2) {
  if (!a2?.url)
    return r2 ?? {};
  if (r2 ??= {}, !r2.layers) {
    const e2 = await s2.fetchServiceMetadata(a2.url);
    r2.layers = e2.layers?.map(t);
  }
  const { serverUrl: n2, portalItem: u2 } = await s$1(a2.url, { sceneLayerItem: a2, customParameters: l(r2)?.customParameters }).catch(() => ({ serverUrl: null, portalItem: null }));
  if (null == n2)
    return r2.tables = [], r2;
  if (!r2.tables && u2) {
    const e2 = await u2.fetchData();
    if (e2?.tables)
      r2.tables = e2.tables.map(t);
    else {
      const a3 = await s2.fetchServiceMetadata(n2, { customParameters: l(e2)?.customParameters });
      r2.tables = a3?.tables?.map(t);
    }
  }
  if (r2.tables)
    for (const e2 of r2.tables)
      e2.url = `${n2}/${e2.id}`;
  return r2;
}
async function d(e2) {
  !e2.portalItem || e2.portalItem instanceof S$1 || (e2 = { ...e2, portalItem: new S$1(e2.portalItem) });
  const a2 = await L(e2.portalItem);
  return new a2.constructor({ portalItem: e2.portalItem, ...a2.properties });
}
async function L(e$1) {
  await e$1.load();
  const a2 = new e();
  return N(await w(e$1, a2));
}
async function w(a2, r2) {
  switch (a2.type) {
    case "3DTiles Service":
      return C();
    case "CSV":
      return P();
    case "Feature Collection":
      return M(a2);
    case "Feature Service":
      return I(a2, r2);
    case "Feed":
      return U();
    case "GeoJson":
      return j();
    case "Group Layer":
      return V();
    case "Image Service":
      return h(a2, r2);
    case "KML":
      return F();
    case "Map Service":
      return S(a2, r2);
    case "Media Layer":
      return W();
    case "Scene Service":
      return v(a2, r2);
    case "Stream Service":
      return g();
    case "Vector Tile Service":
      return T();
    case "WFS":
      return G();
    case "WMS":
      return b();
    case "WMTS":
      return O();
    default:
      throw new s$2("portal:unknown-item-type", "Unknown item type '${type}'", { type: a2.type });
  }
}
async function N(e2) {
  const a2 = e2.className, r2 = a$1[a2];
  return { constructor: await r2(), properties: e2.properties };
}
async function S(e2, a2) {
  return await D(e2, a2) ? { className: "TileLayer" } : { className: "MapImageLayer" };
}
async function I(e2, a2) {
  const r2 = await J(e2, a2);
  if ("object" == typeof r2) {
    const { sourceJSON: e3, className: a3 } = r2, t2 = { sourceJSON: e3 };
    return null != r2.id && (t2.layerId = r2.id), { className: a3 || "FeatureLayer", properties: t2 };
  }
  return { className: "GroupLayer" };
}
async function v(e2, r2) {
  const s2 = await J(e2, r2, async () => {
    try {
      if (!e2.url)
        return [];
      const { serverUrl: t2 } = await s$1(e2.url, { sceneLayerItem: e2 }), s3 = await r2.fetchServiceMetadata(t2);
      return s3?.tables ?? [];
    } catch {
      return [];
    }
  });
  if ("object" == typeof s2) {
    const a2 = {};
    let c2;
    if (null != s2.id ? (a2.layerId = s2.id, c2 = `${e2.url}/layers/${s2.id}`) : c2 = e2.url, e2.typeKeywords?.length) {
      for (const r3 of Object.keys(g$1))
        if (e2.typeKeywords.includes(r3))
          return { className: g$1[r3] };
    }
    const i2 = await r2.fetchServiceMetadata(c2, { customParameters: await r2.fetchCustomParameters(e2, (e3) => l(e3)?.customParameters) });
    return { className: g$1[i2?.layerType] || "SceneLayer", properties: a2 };
  }
  if (false === s2) {
    const a2 = await r2.fetchServiceMetadata(e2.url);
    if ("Voxel" === a2?.layerType)
      return { className: "VoxelLayer" };
  }
  return { className: "GroupLayer" };
}
async function M(e2) {
  await e2.load();
  const a2 = s$3(e2, "Map Notes"), r2 = s$3(e2, "Markup");
  if (a2 || r2)
    return { className: "MapNotesLayer" };
  if (s$3(e2, "Route Layer"))
    return { className: "RouteLayer" };
  const t2 = await e2.fetchData();
  return 1 === s(t2) ? { className: "FeatureLayer" } : { className: "GroupLayer" };
}
async function h(e2, a2) {
  await e2.load();
  const r2 = e2.typeKeywords?.map((e3) => e3.toLowerCase()) ?? [];
  if (r2.includes("elevation 3d layer"))
    return { className: "ElevationLayer" };
  if (r2.includes("tiled imagery"))
    return { className: "ImageryTileLayer" };
  const t2 = await a2.fetchItemData(e2), s2 = t2?.layerType;
  if ("ArcGISTiledImageServiceLayer" === s2)
    return { className: "ImageryTileLayer" };
  if ("ArcGISImageServiceLayer" === s2)
    return { className: "ImageryLayer" };
  const c2 = await a2.fetchServiceMetadata(e2.url, { customParameters: await a2.fetchCustomParameters(e2) }), n2 = c2.cacheType?.toLowerCase(), i2 = c2.capabilities?.toLowerCase().includes("tilesonly");
  return "map" === n2 || i2 ? { className: "ImageryTileLayer" } : { className: "ImageryLayer" };
}
function g() {
  return { className: "StreamLayer" };
}
function T() {
  return { className: "VectorTileLayer" };
}
function j() {
  return { className: "GeoJSONLayer" };
}
function C() {
  return { className: "IntegratedMesh3DTilesLayer" };
}
function P() {
  return { className: "CSVLayer" };
}
function F() {
  return { className: "KMLLayer" };
}
function G() {
  return { className: "WFSLayer" };
}
function b() {
  return { className: "WMSLayer" };
}
function O() {
  return { className: "WMTSLayer" };
}
function U() {
  return { className: "StreamLayer" };
}
function V() {
  return { className: "GroupLayer" };
}
function W() {
  return { className: "MediaLayer" };
}
async function D(e2, a2) {
  const { tileInfo: r2 } = await a2.fetchServiceMetadata(e2.url, { customParameters: await a2.fetchCustomParameters(e2) });
  return r2;
}
async function J(e2, a$12, r2) {
  const { url: t2, type: s$12 } = e2, c$1 = "Feature Service" === s$12;
  if (!t2)
    return {};
  if (/\/\d+$/.test(t2)) {
    if (c$1) {
      const r3 = await a$12.fetchServiceMetadata(t2, { customParameters: await a$12.fetchCustomParameters(e2, (e3) => l(e3)?.customParameters) });
      if ("Oriented Imagery Layer" === r3.type)
        return { id: r3.id, className: "OrientedImageryLayer", sourceJSON: r3 };
    }
    return {};
  }
  await e2.load();
  let f = await a$12.fetchItemData(e2);
  if (c$1) {
    const e3 = await a(f, t2, a$12), r3 = K(e3);
    if ("object" == typeof r3) {
      const a2 = n(e3), t3 = u(e3), s2 = i(e3);
      r3.className = null != r3.id && a2.includes(r3.id) ? "SubtypeGroupLayer" : null != r3.id && t3?.includes(r3.id) ? "OrientedImageryLayer" : null != r3.id && s2?.includes(r3.id) ? "CatalogLayer" : "FeatureLayer";
    }
    return r3;
  }
  "Scene Service" === s$12 && (f = await c(e2, f, a$12));
  if (s(f) > 0)
    return K(f);
  const p = await a$12.fetchServiceMetadata(t2);
  return r2 && (p.tables = await r2()), K(p);
}
function K(e2) {
  return 1 === s(e2) && { id: r(e2) };
}
const portalLayers = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fromItem: d,
  selectLayerClassPath: w
}, Symbol.toStringTag, { value: "Module" }));
export {
  a,
  c,
  e,
  i,
  l,
  n,
  portalLayers as p,
  r,
  s,
  t,
  u,
  w
};
