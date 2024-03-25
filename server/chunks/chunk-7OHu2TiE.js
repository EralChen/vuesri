import { $, j } from "./chunk-2WrohE-u.js";
import { i5 as p$1, d0 as s, bx as o, br as a, bs as i, bt as f$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const u = "Group Layer", c = "group-layer-save", l = "group-layer-save-as", p = f$1.GROUP_LAYER_MAP;
function m(e) {
  return { isValid: "group" === e.type, errorMessage: "Layer.type should be 'group'" };
}
function y(e) {
  return { isValid: s(e, p), errorMessage: `Layer.portalItem.typeKeywords should have '${p}'` };
}
function f(e, r) {
  return { ...o(e, "web-map", true), initiator: r };
}
function v(e) {
  const r = e.layerJSON;
  return Promise.resolve(r && Object.keys(r).length ? r : null);
}
async function d(e, r) {
  r.title ||= e.title, a(r, f$1.METADATA), i(r, p);
}
async function I(r, t) {
  return $({ layer: r, itemType: u, validateLayer: m, validateItem: y, createJSONContext: (e) => f(e, r), createItemData: v, errorNamePrefix: c, saveResources: async (e, t2) => (r.sourceIsPortalItem || await e.removeAllResources().catch(() => {
  }), p$1(r.resourceReferences, t2)) }, t);
}
async function g(e, t, o2) {
  return j({ layer: e, itemType: u, validateLayer: m, createJSONContext: (r) => f(r, e), createItemData: v, errorNamePrefix: l, newItem: t, setItemProperties: d, saveResources: (r, t2) => p$1(e.resourceReferences, t2) }, o2);
}
export {
  I as save,
  g as saveAs
};
