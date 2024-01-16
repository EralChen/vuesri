import { I, b } from "./chunk-zgTa325Q.js";
import { a } from "./chunk-9JEQPlhY.js";
import { hn as u$1, cA as s, aU as i$1, aV as f$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const i = "Group Layer", u = "group-layer-save", c = "group-layer-save-as", l = f$1.GROUP_LAYER_MAP;
function p(e) {
  return { isValid: "group" === e.type, errorMessage: "Layer.type should be 'group'" };
}
function m(e) {
  return { isValid: s(e, l), errorMessage: `Layer.portalItem.typeKeywords should have '${l}'` };
}
function y(e) {
  const r = e.layerJSON;
  return Promise.resolve(r && Object.keys(r).length ? r : null);
}
async function f(e, r) {
  r.title ||= e.title, i$1(r, l);
}
async function v(r, s2) {
  return I({ layer: r, itemType: i, validateLayer: p, validateItem: m, createJSONContext: (e) => a(e, r), createItemData: y, errorNamePrefix: u, saveResources: async (e, t) => (r.sourceIsPortalItem || await e.removeAllResources().catch(() => {
  }), u$1(r.resourceReferences, t)) }, s2);
}
async function d(e, s2, a$1) {
  return b({ layer: e, itemType: i, validateLayer: p, createJSONContext: (r) => a(r, e), createItemData: y, errorNamePrefix: c, newItem: s2, setItemProperties: f, saveResources: (r, t) => u$1(e.resourceReferences, t) }, a$1);
}
export {
  v as save,
  d as saveAs
};
