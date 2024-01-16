import { c7 as s } from "./chunk-KFNcxJaF.js";
const o = new s({ esriGeometryPoint: "point", esriGeometryMultipoint: "multipoint", esriGeometryPolyline: "polyline", esriGeometryPolygon: "polygon", esriGeometryMultiPatch: "multipatch", mesh: "mesh" });
function e(t) {
  return o.toJSON(t);
}
function r(t) {
  const { bandCount: o2, attributeTable: e2, colormap: n, pixelType: r2 } = t.raster.rasterInfo;
  return 1 === o2 && (null != e2 || null != n || "u8" === r2 || "s8" === r2);
}
export {
  e,
  r
};
