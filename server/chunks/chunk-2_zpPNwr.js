import { I, b } from "./chunk-zgTa325Q.js";
import { aS as l$1, aU as i$1, aV as f } from "./chunk-KFNcxJaF.js";
import "./chunk-9JEQPlhY.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const l = "Stream Service", n = "stream-layer-save", i = "stream-layer-save-as";
function o(e) {
  return { isValid: "stream" === e.type && !!e.url && !e.webSocketUrl, errorMessage: "Stream layer should be created using a url to a stream service" };
}
function m(e) {
  const t = e.layerJSON;
  return Promise.resolve(t && Object.keys(t).length ? t : null);
}
async function u(e, t) {
  const { parsedUrl: l2, title: n2, fullExtent: i2 } = e;
  t.url = l2.path, t.title ||= n2, t.extent = null, null != i2 && (t.extent = await l$1(i2)), i$1(t, f.SINGLE_LAYER);
}
async function c(t, r) {
  return I({ layer: t, itemType: l, validateLayer: o, createItemData: m, errorNamePrefix: n }, r);
}
async function y(e, r, a) {
  return b({ layer: e, itemType: l, validateLayer: o, createItemData: m, errorNamePrefix: i, newItem: r, setItemProperties: u }, a);
}
export {
  c as save,
  y as saveAs
};
