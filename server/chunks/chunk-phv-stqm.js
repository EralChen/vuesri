import { $, j } from "./chunk-2WrohE-u.js";
import { i5 as p$1, bx as o, bq as l$1, br as a, bt as f$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const i = "Media Layer", p = "media-layer-save", u = "media-layer-save-as", l = ["media-layer:unsupported-source"];
function m(e) {
  return { isValid: "media" === e.type, errorMessage: "Layer.type should be 'media'" };
}
function c(e) {
  return o(e, "portal-item", true);
}
function y(e) {
  return e.layerJSON;
}
async function f(e, r) {
  const { title: t, fullExtent: n } = e;
  r.title ||= t, r.extent = n ? await l$1(n) : null, a(r, f$1.METADATA);
}
async function d(r, t) {
  return $({ layer: r, itemType: i, validateLayer: m, createJSONContext: (e) => c(e), createItemData: y, errorNamePrefix: p, supplementalUnsupportedErrors: l, saveResources: (e, t2) => p$1(r.resourceReferences, t2) }, t);
}
async function v(e, t, a2) {
  return j({ layer: e, itemType: i, validateLayer: m, createJSONContext: (e2) => c(e2), createItemData: y, errorNamePrefix: u, supplementalUnsupportedErrors: l, newItem: t, setItemProperties: f, saveResources: (r, t2) => p$1(e.resourceReferences, t2) }, a2);
}
export {
  d as save,
  v as saveAs
};
