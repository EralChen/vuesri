import { cy as x$1, bq as j, dy as m$1, dz as u, ap as M$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const r = { convertToGEGeometry: s, exportPoint: a, exportPolygon: c, exportPolyline: h, exportMultipoint: m, exportExtent: x };
function s(e, n) {
  if (null == n)
    return null;
  let t = "cache" in n ? n.cache._geVersion : void 0;
  return null == t && (t = e.convertJSONToGeometry(n), "cache" in n && (n.cache._geVersion = t)), t;
}
function a(e, n, o) {
  const i = e.hasZ(n), r2 = e.hasM(n), s2 = new x$1({ x: e.getPointX(n), y: e.getPointY(n), spatialReference: o });
  return i && (s2.z = e.getPointZ(n)), r2 && (s2.m = e.getPointM(n)), s2.cache._geVersion = n, s2;
}
function c(e, n, t) {
  const i = new j({ rings: e.exportPaths(n), hasZ: e.hasZ(n), hasM: e.hasM(n), spatialReference: t });
  return i.cache._geVersion = n, i;
}
function h(e, n, t) {
  const o = new m$1({ paths: e.exportPaths(n), hasZ: e.hasZ(n), hasM: e.hasM(n), spatialReference: t });
  return o.cache._geVersion = n, o;
}
function m(e, t, o) {
  const i = new u({ hasZ: e.hasZ(t), hasM: e.hasM(t), points: e.exportPoints(t), spatialReference: o });
  return i.cache._geVersion = t, i;
}
function x(n, t, o) {
  const i = n.hasZ(t), r2 = n.hasM(t), s2 = new M$1({ xmin: n.getXMin(t), ymin: n.getYMin(t), xmax: n.getXMax(t), ymax: n.getYMax(t), spatialReference: o });
  if (i) {
    const e = n.getZExtent(t);
    s2.zmin = e.vmin, s2.zmax = e.vmax;
  }
  if (r2) {
    const e = n.getMExtent(t);
    s2.mmin = e.vmin, s2.mmax = e.vmax;
  }
  return s2.cache._geVersion = t, s2;
}
export {
  r as hydratedAdapter
};
