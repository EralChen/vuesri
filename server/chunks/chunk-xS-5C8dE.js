import { $, j } from "./chunk-2WrohE-u.js";
import { bq as l, br as a, bs as i$1, bt as f$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const n = "Stream Service", i = "Feed", o = "stream-layer-save", m = "stream-layer-save-as";
function u(e) {
  return { isValid: "stream" === e.type && !!e.url && !e.webSocketUrl, errorMessage: "Stream layer should be created using a url to a stream service" };
}
function c(e) {
  const t = e.layerJSON;
  return Promise.resolve(t && Object.keys(t).length ? t : null);
}
async function y(e, t) {
  const { parsedUrl: n2, title: i2, fullExtent: o2 } = e;
  t.url = n2.path, t.title ||= i2, t.extent = null, null != o2 && (t.extent = await l(o2)), a(t, f$1.METADATA), i$1(t, f$1.SINGLE_LAYER);
}
async function p(t, r) {
  return $({ layer: t, itemType: n, additionalItemType: i, validateLayer: u, createItemData: c, errorNamePrefix: o }, r);
}
async function f(e, r, a2) {
  return j({ layer: e, itemType: n, validateLayer: u, createItemData: c, errorNamePrefix: m, newItem: r, setItemProperties: y }, a2);
}
export {
  p as save,
  f as saveAs
};
