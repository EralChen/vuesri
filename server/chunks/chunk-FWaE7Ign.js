import { aO as h, aP as g$1, aQ as a, aR as p$1, aS as l, aT as a$1, aU as i, aV as f } from "./chunk-KFNcxJaF.js";
import { I, b } from "./chunk-zgTa325Q.js";
import { t } from "./chunk-_vnu0ofh.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-9JEQPlhY.js";
import "./chunk-rOxUIHGZ.js";
const L = "Feature Service", P = "feature-layer-utils", E = `${P}-save`, $ = `${P}-save-as`;
function g(e) {
  return { isValid: h(e) && ("feature" !== e.type || !e.dynamicDataSource), errorMessage: "Feature layer should be a layer or table in a map or feature service" };
}
function x(e) {
  const a2 = [], r = [];
  for (const { layer: t2, layerJSON: o } of e)
    t2.isTable ? r.push(o) : a2.push(o);
  return { layers: a2, tables: r };
}
function j(e) {
  return x([e]);
}
async function O(e, a2) {
  return /\/\d+\/?$/.test(e.url) ? j(a2[0]) : U(a2, e);
}
async function U(e, a2) {
  if (!a2)
    return e.reverse(), x(e);
  const { layer: { url: r, customParameters: t2, apiKey: o } } = e[0];
  let s = await a2.fetchData("json");
  null != s?.layers && null != s?.tables || (s = await F(s, { url: r ?? "", customParameters: t2, apiKey: o }, e.map((e2) => e2.layer.layerId)));
  for (const n of e)
    K(n.layer, n.layerJSON, s);
  return s;
}
async function F(e, a2, r) {
  e ||= {}, e.layers ||= [], e.tables ||= [];
  const { url: t$1, customParameters: o, apiKey: s } = a2, { serviceJSON: n, layersJSON: l2 } = await t(t$1, { customParameters: o, apiKey: s }), i2 = J(e.layers, n.layers, r), c = J(e.tables, n.tables, r);
  e.layers = i2.itemResources, e.tables = c.itemResources;
  const u = [...i2.added, ...c.added], p = l2 ? [...l2.layers, ...l2.tables] : [];
  return await M(e, u, t$1, p), e;
}
function J(a2, r, t2) {
  const o = g$1(a2, r, (e, a3) => e.id === a3.id);
  a2 = a2.filter((e) => !o.removed.some((a3) => a3.id === e.id));
  const s = o.added;
  return s.forEach(({ id: e }) => {
    a2.push({ id: e });
  }), { itemResources: a2, added: s.filter(({ id: e }) => !t2.includes(e)) };
}
async function M(e, a2, r, t2) {
  const o = await R(a2), s = a2.map(({ id: e2, type: a3 }) => new (o.get(a3))({ url: r, layerId: e2, sourceJSON: t2.find(({ id: a4 }) => a4 === e2) }));
  await Promise.allSettled(s.map((e2) => e2.load())), s.forEach((a3) => {
    const { layerId: r2, loaded: t3, defaultPopupTemplate: o2 } = a3;
    if (!t3 || null == o2)
      return;
    const s2 = { id: r2, popupInfo: o2.toJSON() };
    "ArcGISFeatureLayer" !== a3.operationalLayerType && (s2.layerType = a3.operationalLayerType), K(a3, s2, e);
  });
}
async function R(e) {
  const a$12 = [];
  e.forEach(({ type: e2 }) => {
    const r2 = D(e2), t3 = a[r2];
    a$12.push(t3());
  });
  const r = await Promise.all(a$12), t2 = /* @__PURE__ */ new Map();
  return e.forEach(({ type: e2 }, a2) => {
    t2.set(e2, r[a2]);
  }), t2;
}
function D(e) {
  let a2;
  switch (e) {
    case "Feature Layer":
    case "Table":
      a2 = "FeatureLayer";
      break;
    case "Oriented Imagery Layer":
      a2 = "OrientedImageryLayer";
  }
  return a2;
}
function K(e, a2, r) {
  e.isTable ? Y(r.tables, a2) : Y(r.layers, a2);
}
function Y(e, a2) {
  const r = e.findIndex(({ id: e2 }) => e2 === a2.id);
  -1 === r ? e.push(a2) : e[r] = a2;
}
async function k(e, a2) {
  const { url: r, layerId: t2, title: o, fullExtent: s, isTable: n } = e, l$1 = p$1(r);
  a2.url = "FeatureServer" === l$1?.serverType ? r : `${r}/${t2}`, a2.title ||= o, a2.extent = null, n || null == s || (a2.extent = await l(s)), a$1(a2, f.METADATA), a$1(a2, f.MULTI_LAYER), i(a2, f.SINGLE_LAYER), n && i(a2, f.TABLE);
}
async function H(e, a2) {
  return I({ layer: e, itemType: L, validateLayer: g, createItemData: (e2, a3) => O(a3, [e2]), errorNamePrefix: E }, a2);
}
async function W(e, a2, r) {
  return b({ layer: e, itemType: L, validateLayer: g, createItemData: (e2, a3) => Promise.resolve(j(e2)), errorNamePrefix: $, newItem: a2, setItemProperties: k }, r);
}
export {
  H as save,
  W as saveAs
};
