import { G as h$1 } from "./chunk-Z0Yk6-wB.js";
import { t as t$1 } from "./chunk-H58sM9yM.js";
function t(n) {
  return h$1.extendedSpatialReferenceInfo(n);
}
function r(t2, r2, i2) {
  return h$1.clip(t$1, t2, r2, i2);
}
function i(t2, r2, i2) {
  return h$1.cut(t$1, t2, r2, i2);
}
function a(t2, r2, i2) {
  return h$1.contains(t$1, t2, r2, i2);
}
function o(t2, r2, i2) {
  return h$1.crosses(t$1, t2, r2, i2);
}
function s(t2, r2, i2, a2) {
  return h$1.distance(t$1, t2, r2, i2, a2);
}
function u(t2, r2, i2) {
  return h$1.equals(t$1, t2, r2, i2);
}
function c(t2, r2, i2) {
  return h$1.intersects(t$1, t2, r2, i2);
}
function f(t2, r2, i2) {
  return h$1.touches(t$1, t2, r2, i2);
}
function l(t2, r2, i2) {
  return h$1.within(t$1, t2, r2, i2);
}
function p(t2, r2, i2) {
  return h$1.disjoint(t$1, t2, r2, i2);
}
function g(t2, r2, i2) {
  return h$1.overlaps(t$1, t2, r2, i2);
}
function d(t2, r2, i2, a2) {
  return h$1.relate(t$1, t2, r2, i2, a2);
}
function m(t2, r2) {
  return h$1.isSimple(t$1, t2, r2);
}
function h(t2, r2) {
  return h$1.simplify(t$1, t2, r2);
}
function y(t2, r2, i2 = false) {
  return h$1.convexHull(t$1, t2, r2, i2);
}
function x(t2, r2, i2) {
  return h$1.difference(t$1, t2, r2, i2);
}
function S(t2, r2, i2) {
  return h$1.symmetricDifference(t$1, t2, r2, i2);
}
function w(t2, r2, i2) {
  return h$1.intersect(t$1, t2, r2, i2);
}
function A(t2, r2, i2 = null) {
  return h$1.union(t$1, t2, r2, i2);
}
function D(t2, r2, i2, a2, o2, s2, u2) {
  return h$1.offset(t$1, t2, r2, i2, a2, o2, s2, u2);
}
function R(t2, r2, i2, a2, o2 = false) {
  return h$1.buffer(t$1, t2, r2, i2, a2, o2);
}
function j(t2, r2, i2, a2, o2, s2, u2) {
  return h$1.geodesicBuffer(t$1, t2, r2, i2, a2, o2, s2, u2);
}
function E(t2, r2, i2, a2 = true) {
  return h$1.nearestCoordinate(t$1, t2, r2, i2, a2);
}
function L(t2, r2, i2) {
  return h$1.nearestVertex(t$1, t2, r2, i2);
}
function T(t2, r2, i2, a2, o2) {
  return h$1.nearestVertices(t$1, t2, r2, i2, a2, o2);
}
function b(n, t2, r2, i2) {
  if (null == t2 || null == i2)
    throw new Error("Illegal Argument Exception");
  const a2 = h$1.rotate(t2, r2, i2);
  return a2.spatialReference = n, a2;
}
function v(n, t2, r2) {
  if (null == t2 || null == r2)
    throw new Error("Illegal Argument Exception");
  const i2 = h$1.flipHorizontal(t2, r2);
  return i2.spatialReference = n, i2;
}
function z(n, t2, r2) {
  if (null == t2 || null == r2)
    throw new Error("Illegal Argument Exception");
  const i2 = h$1.flipVertical(t2, r2);
  return i2.spatialReference = n, i2;
}
function I(t2, r2, i2, a2, o2) {
  return h$1.generalize(t$1, t2, r2, i2, a2, o2);
}
function V(t2, r2, i2, a2) {
  return h$1.densify(t$1, t2, r2, i2, a2);
}
function H(t2, r2, i2, a2, o2 = 0) {
  return h$1.geodesicDensify(t$1, t2, r2, i2, a2, o2);
}
function B(t2, r2, i2) {
  return h$1.planarArea(t$1, t2, r2, i2);
}
function _(t2, r2, i2) {
  return h$1.planarLength(t$1, t2, r2, i2);
}
function q(t2, r2, i2, a2) {
  return h$1.geodesicArea(t$1, t2, r2, i2, a2);
}
function C(t2, r2, i2, a2) {
  return h$1.geodesicLength(t$1, t2, r2, i2, a2);
}
function P(t2, r2, i2) {
  return null == r2 || null == i2 ? [] : h$1.intersectLinesToPoints(t$1, t2, r2, i2);
}
function G(n, t2) {
  h$1.changeDefaultSpatialReferenceTolerance(n, t2);
}
function M(n) {
  h$1.clearDefaultSpatialReferenceTolerance(n);
}
const O = Object.freeze(Object.defineProperty({ __proto__: null, buffer: R, changeDefaultSpatialReferenceTolerance: G, clearDefaultSpatialReferenceTolerance: M, clip: r, contains: a, convexHull: y, crosses: o, cut: i, densify: V, difference: x, disjoint: p, distance: s, equals: u, extendedSpatialReferenceInfo: t, flipHorizontal: v, flipVertical: z, generalize: I, geodesicArea: q, geodesicBuffer: j, geodesicDensify: H, geodesicLength: C, intersect: w, intersectLinesToPoints: P, intersects: c, isSimple: m, nearestCoordinate: E, nearestVertex: L, nearestVertices: T, offset: D, overlaps: g, planarArea: B, planarLength: _, relate: d, rotate: b, simplify: h, symmetricDifference: S, touches: f, union: A, within: l }, Symbol.toStringTag, { value: "Module" }));
export {
  A,
  B,
  C,
  D,
  E,
  G,
  H,
  I,
  L,
  M,
  O,
  P,
  R,
  S,
  T,
  V,
  _,
  a,
  b,
  c,
  d,
  f,
  g,
  h,
  i,
  j,
  l,
  m,
  o,
  p,
  q,
  r,
  s,
  t,
  u,
  v,
  w,
  x,
  y,
  z
};
