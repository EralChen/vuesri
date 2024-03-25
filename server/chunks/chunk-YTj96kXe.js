import { bl as L, bm as a, bn as d, bo as a$1, bp as p$1, bq as l, br as a$2, bs as i, bt as f } from "./chunk-ejFG4zJ0.js";
import { $, j as j$1 } from "./chunk-2WrohE-u.js";
import { t } from "./chunk-x-z610yQ.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-Ll6uvSxj.js";
const A = "Feature Service", P = "feature-layer-utils", E = `${P}-save`, g = `${P}-save-as`;
function N(e) {
  return { isValid: L(e) && ("feature" !== e.type || !e.dynamicDataSource), errorMessage: "Feature layer should be a layer or table in a map or feature service" };
}
function O(e) {
  const a2 = [], r = [];
  for (const { layer: t2, layerJSON: n } of e)
    t2.isTable ? r.push(n) : a2.push(n);
  return { layers: a2, tables: r };
}
function U(e) {
  return O([e]);
}
async function j(e, a2) {
  return /\/\d+\/?$/.test(e.url) ? U(a2[0]) : F(a2, e);
}
async function F(e, a2) {
  if (e.reverse(), !a2)
    return O(e);
  const r = await J(a2, e);
  for (const t2 of e)
    C(t2.layer, t2.layerJSON, r);
  return D(r, e), r;
}
async function J(e, a2) {
  let r = await e.fetchData("json");
  if (M(r))
    return r;
  r ||= {}, R(r);
  const { layer: { url: t2, customParameters: n, apiKey: o } } = a2[0];
  return await _(r, { url: t2 ?? "", customParameters: n, apiKey: o }, a2.map((e2) => e2.layer.layerId)), r;
}
function M(e) {
  return !!(e && Array.isArray(e.layers) && Array.isArray(e.tables));
}
function R(e) {
  e.layers ||= [], e.tables ||= [];
}
function D(e, a2) {
  const r = [], t2 = [];
  for (const { layer: n } of a2) {
    const { isTable: e2, layerId: a3 } = n;
    e2 ? t2.push(a3) : r.push(a3);
  }
  K(e.layers, r), K(e.tables, t2);
}
function K(a$12, r) {
  if (a$12.length < 2)
    return;
  const t2 = [];
  for (const { id: e } of a$12)
    t2.push(e);
  a(t2.sort(Y), r.slice().sort(Y)) && a$12.sort((e, a2) => {
    const t3 = r.indexOf(e.id), n = r.indexOf(a2.id);
    return t3 < n ? -1 : t3 > n ? 1 : 0;
  });
}
function Y(e, a2) {
  return e < a2 ? -1 : e > a2 ? 1 : 0;
}
async function _(e, a2, r) {
  const { url: t$1, customParameters: n, apiKey: o } = a2, { serviceJSON: s, layersJSON: i2 } = await t(t$1, { customParameters: n, apiKey: o }), l2 = z(e.layers, s.layers, r), c = z(e.tables, s.tables, r);
  e.layers = l2.itemResources, e.tables = c.itemResources;
  const u = [...l2.added, ...c.added], y = i2 ? [...i2.layers, ...i2.tables] : [];
  await G(e, u, t$1, y);
}
function z(e, r, t2) {
  const n = d(e, r, (e2, a2) => e2.id === a2.id);
  e = e.filter((e2) => !n.removed.some((a2) => a2.id === e2.id));
  const o = n.added;
  return o.forEach(({ id: a2 }) => {
    e.push({ id: a2 });
  }), { itemResources: e, added: o.filter(({ id: e2 }) => !t2.includes(e2)) };
}
async function G(e, a2, r, t2) {
  const n = await k(a2), o = a2.map(({ id: e2, type: a3 }) => new (n.get(a3))({ url: r, layerId: e2, sourceJSON: t2.find(({ id: a4 }) => a4 === e2) }));
  await Promise.allSettled(o.map((e2) => e2.load())), o.forEach((a3) => {
    const { layerId: r2, loaded: t3, defaultPopupTemplate: n2 } = a3;
    if (!t3 || null == n2)
      return;
    const o2 = { id: r2, popupInfo: n2.toJSON() };
    "ArcGISFeatureLayer" !== a3.operationalLayerType && (o2.layerType = a3.operationalLayerType), C(a3, o2, e);
  });
}
async function k(e) {
  const a2 = [];
  e.forEach(({ type: e2 }) => {
    const r2 = B(e2), t3 = a$1[r2];
    a2.push(t3());
  });
  const r = await Promise.all(a2), t2 = /* @__PURE__ */ new Map();
  return e.forEach(({ type: e2 }, a3) => {
    t2.set(e2, r[a3]);
  }), t2;
}
function B(e) {
  let a2;
  switch (e) {
    case "Feature Layer":
    case "Table":
      a2 = "FeatureLayer";
      break;
    case "Oriented Imagery Layer":
      a2 = "OrientedImageryLayer";
      break;
    case "Catalog Layer":
      a2 = "CatalogLayer";
  }
  return a2;
}
function C(e, a2, r) {
  e.isTable ? V(r.tables, a2) : V(r.layers, a2);
}
function V(e, a2) {
  const r = e.findIndex(({ id: e2 }) => e2 === a2.id);
  -1 === r ? e.push(a2) : e[r] = a2;
}
async function X(e, a2) {
  const { url: r, layerId: t2, title: n, fullExtent: o, isTable: s } = e, i$1 = p$1(r);
  a2.url = "FeatureServer" === i$1?.serverType ? r : `${r}/${t2}`, a2.title ||= n, a2.extent = null, s || null == o || (a2.extent = await l(o)), a$2(a2, f.METADATA), a$2(a2, f.MULTI_LAYER), i(a2, f.SINGLE_LAYER), s && i(a2, f.TABLE);
}
async function re(e, a2) {
  return $({ layer: e, itemType: A, validateLayer: N, createItemData: (e2, a3) => j(a3, [e2]), errorNamePrefix: E }, a2);
}
async function ne(e, a2, r) {
  return j$1({ layer: e, itemType: A, validateLayer: N, createItemData: (e2, a3) => Promise.resolve(U(e2)), errorNamePrefix: g, newItem: a2, setItemProperties: X }, r);
}
export {
  re as save,
  ne as saveAs
};
