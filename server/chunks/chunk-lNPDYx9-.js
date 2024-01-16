import { I, b } from "./chunk-zgTa325Q.js";
import { aS as l$1, aU as i, aV as f } from "./chunk-KFNcxJaF.js";
import "./chunk-9JEQPlhY.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const s = "Image Service", l = "imagery-layer-save", y = "imagery-layer-save-as", n = "imagery-tile-layer-save", o = "imagery-tile-layer-save-as";
function m(e) {
  if ("imagery" === e.type)
    return { isValid: true };
  const { raster: t } = e, r = "Function" === t?.datasetFormat ? t.primaryRasters?.rasters[0] : t;
  return { isValid: "RasterTileServer" === r?.datasetFormat && ("Raster" === r.tileType || "Map" === r.tileType), errorMessage: "imagery tile layer should be created from a tiled image service." };
}
function c(e) {
  const t = e.layerJSON;
  return Promise.resolve(t && Object.keys(t).length ? t : null);
}
async function p(e, t) {
  const { parsedUrl: s2, title: l2, fullExtent: y2 } = e;
  t.url = s2.path, t.title ||= l2, t.extent = await l$1(y2), "imagery-tile" === e.type && i(t, f.TILED_IMAGERY);
}
async function u(t, r) {
  const a = "imagery" === t.type ? l : n;
  return I({ layer: t, itemType: s, validateLayer: m, createItemData: c, errorNamePrefix: a }, r);
}
async function g(e, r, a) {
  const i2 = "imagery" === e.type ? y : o;
  return b({ layer: e, itemType: s, validateLayer: m, createItemData: c, errorNamePrefix: i2, newItem: r, setItemProperties: p }, a);
}
export {
  u as save,
  g as saveAs
};
