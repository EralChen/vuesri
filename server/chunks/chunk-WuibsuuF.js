import { G as h$1 } from "./chunk-Z0Yk6-wB.js";
import { hydratedAdapter as r$1 } from "./chunk-8M1zBeVZ.js";
import "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function t(n) {
  return Array.isArray(n) ? n[0].spatialReference : n && n.spatialReference;
}
function r(e) {
  return h$1.extendedSpatialReferenceInfo(e);
}
function u(r2, u2) {
  return h$1.clip(r$1, t(r2), r2, u2);
}
function i(r2, u2) {
  return h$1.cut(r$1, t(r2), r2, u2);
}
function c(r2, u2) {
  return h$1.contains(r$1, t(r2), r2, u2);
}
function o(r2, u2) {
  return h$1.crosses(r$1, t(r2), r2, u2);
}
function f(r2, u2, i2) {
  return h$1.distance(r$1, t(r2), r2, u2, i2);
}
function s(r2, u2) {
  return h$1.equals(r$1, t(r2), r2, u2);
}
function a(r2, u2) {
  return h$1.intersects(r$1, t(r2), r2, u2);
}
function l(r2, u2) {
  return h$1.touches(r$1, t(r2), r2, u2);
}
function p(r2, u2) {
  return h$1.within(r$1, t(r2), r2, u2);
}
function d(r2, u2) {
  return h$1.disjoint(r$1, t(r2), r2, u2);
}
function m(r2, u2) {
  return h$1.overlaps(r$1, t(r2), r2, u2);
}
function g(r2, u2, i2) {
  return h$1.relate(r$1, t(r2), r2, u2, i2);
}
function h(r2) {
  return h$1.isSimple(r$1, t(r2), r2);
}
function w(r2) {
  return h$1.simplify(r$1, t(r2), r2);
}
function R(r2, u2 = false) {
  return h$1.convexHull(r$1, t(r2), r2, u2);
}
function x(r2, u2) {
  return h$1.difference(r$1, t(r2), r2, u2);
}
function y(r2, u2) {
  return h$1.symmetricDifference(r$1, t(r2), r2, u2);
}
function S(r2, u2) {
  return h$1.intersect(r$1, t(r2), r2, u2);
}
function A(r2, u2 = null) {
  return h$1.union(r$1, t(r2), r2, u2);
}
function D(r2, u2, i2, c2, o2, f2) {
  return h$1.offset(r$1, t(r2), r2, u2, i2, c2, o2, f2);
}
function j(r2, u2, i2, c2 = false) {
  return h$1.buffer(r$1, t(r2), r2, u2, i2, c2);
}
function E(r2, u2, i2, c2, o2, f2) {
  return h$1.geodesicBuffer(r$1, t(r2), r2, u2, i2, c2, o2, f2);
}
function J(r2, u2, i2 = true) {
  return h$1.nearestCoordinate(r$1, t(r2), r2, u2, i2);
}
function L(r2, u2) {
  return h$1.nearestVertex(r$1, t(r2), r2, u2);
}
function N(r2, u2, i2, c2) {
  return h$1.nearestVertices(r$1, t(r2), r2, u2, i2, c2);
}
function O(n) {
  return "xmin" in n ? "center" in n ? n.center : null : "x" in n ? n : "extent" in n ? n.extent?.center ?? null : null;
}
function T(e, t2, r2) {
  if (null == e)
    throw new F();
  const u2 = e.spatialReference;
  if (null == (r2 = r2 ?? O(e)))
    throw new F();
  const i2 = e.constructor.fromJSON(h$1.rotate(e, t2, r2));
  return i2.spatialReference = u2, i2;
}
function V(e, t2) {
  if (null == e)
    throw new F();
  const r2 = e.spatialReference;
  if (null == (t2 = t2 ?? O(e)))
    throw new F();
  const u2 = e.constructor.fromJSON(h$1.flipHorizontal(e, t2));
  return u2.spatialReference = r2, u2;
}
function v(e, t2) {
  if (null == e)
    throw new F();
  const r2 = e.spatialReference;
  if (null == (t2 = t2 ?? O(e)))
    throw new F();
  const u2 = e.constructor.fromJSON(h$1.flipVertical(e, t2));
  return u2.spatialReference = r2, u2;
}
function z(r2, u2, i2, c2) {
  return h$1.generalize(r$1, t(r2), r2, u2, i2, c2);
}
function B(r2, u2, i2) {
  return h$1.densify(r$1, t(r2), r2, u2, i2);
}
function H(r2, u2, i2, c2 = 0) {
  return h$1.geodesicDensify(r$1, t(r2), r2, u2, i2, c2);
}
function I(r2, u2) {
  return h$1.planarArea(r$1, t(r2), r2, u2);
}
function b(r2, u2) {
  return h$1.planarLength(r$1, t(r2), r2, u2);
}
function k(r2, u2, i2) {
  return h$1.geodesicArea(r$1, t(r2), r2, u2, i2);
}
function q(r2, u2, i2) {
  return h$1.geodesicLength(r$1, t(r2), r2, u2, i2);
}
function C(r2, u2) {
  return h$1.intersectLinesToPoints(r$1, t(r2), r2, u2);
}
function G(e, t2) {
  h$1.changeDefaultSpatialReferenceTolerance(e, t2);
}
function P(e) {
  h$1.clearDefaultSpatialReferenceTolerance(e);
}
class F extends Error {
  constructor() {
    super("Illegal Argument Exception");
  }
}
export {
  j as buffer,
  G as changeDefaultSpatialReferenceTolerance,
  P as clearDefaultSpatialReferenceTolerance,
  u as clip,
  c as contains,
  R as convexHull,
  o as crosses,
  i as cut,
  B as densify,
  x as difference,
  d as disjoint,
  f as distance,
  s as equals,
  r as extendedSpatialReferenceInfo,
  V as flipHorizontal,
  v as flipVertical,
  z as generalize,
  k as geodesicArea,
  E as geodesicBuffer,
  H as geodesicDensify,
  q as geodesicLength,
  S as intersect,
  C as intersectLinesToPoints,
  a as intersects,
  h as isSimple,
  J as nearestCoordinate,
  L as nearestVertex,
  N as nearestVertices,
  D as offset,
  m as overlaps,
  I as planarArea,
  b as planarLength,
  g as relate,
  T as rotate,
  w as simplify,
  y as symmetricDifference,
  l as touches,
  A as union,
  p as within
};
