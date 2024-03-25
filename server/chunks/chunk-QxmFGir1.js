import { $, j } from "./chunk-2WrohE-u.js";
import { bq as l$1, br as a, bs as i, bt as f } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const l = "Image Service", y = "imagery-layer-save", n = "imagery-layer-save-as", o = "imagery-tile-layer-save", m = "imagery-tile-layer-save-as";
function c(e) {
  if ("imagery" === e.type)
    return { isValid: true };
  const { raster: t } = e, r = "Function" === t?.datasetFormat ? t.primaryRasters?.rasters[0] : t;
  return { isValid: "RasterTileServer" === r?.datasetFormat && ("Raster" === r.tileType || "Map" === r.tileType), errorMessage: "imagery tile layer should be created from a tiled image service." };
}
function p(e) {
  const t = e.layerJSON;
  return Promise.resolve(t && Object.keys(t).length ? t : null);
}
async function u(e, t) {
  const { parsedUrl: l2, title: y2, fullExtent: n2 } = e;
  t.url = l2.path, t.title ||= y2;
  try {
    t.extent = await l$1(n2);
  } catch {
    t.extent = void 0;
  }
  a(t, f.METADATA), "imagery-tile" === e.type && i(t, f.TILED_IMAGERY);
}
async function g(t, r) {
  const a2 = "imagery" === t.type ? y : o;
  return $({ layer: t, itemType: l, validateLayer: c, createItemData: p, errorNamePrefix: a2 }, r);
}
async function v(e, r, a2) {
  const i2 = "imagery" === e.type ? n : m;
  return j({ layer: e, itemType: l, validateLayer: c, createItemData: p, errorNamePrefix: i2, newItem: r, setItemProperties: u }, a2);
}
export {
  g as save,
  v as saveAs
};
