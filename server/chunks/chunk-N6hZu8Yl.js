import { cw as p$1, cx as p$2, cy as x$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function r(n) {
  return Array.isArray(n) ? n[0]?.spatialReference : n?.spatialReference;
}
function a(n) {
  return n ? Array.isArray(n) ? n.map(a) : n.toJSON ? n.toJSON() : n : n;
}
function i(n) {
  return Array.isArray(n) ? n.map((n2) => p$1(n2)) : p$1(n);
}
function o(n, t) {
  let e;
  return Array.isArray(n) ? e = n : (e = [], e.push(n), null != t && e.push(t)), e;
}
let c;
async function u() {
  return c || (c = p$2("geometryEngineWorker", { strategy: "distributed" })), c;
}
async function s(n, t) {
  return (await u()).invoke("executeGEOperation", { operation: n, parameters: a(t) });
}
async function y(n, t) {
  return i(await s("clip", [r(n), n, t]));
}
async function w(n, t) {
  return i(await s("cut", [r(n), n, t]));
}
function p(n, t) {
  return s("contains", [r(n), n, t]);
}
function m(n, t) {
  return s("crosses", [r(n), n, t]);
}
function d(n, t, e) {
  return s("distance", [r(n), n, t, e]);
}
function g(n, t) {
  return s("equals", [r(n), n, t]);
}
function h(n, t) {
  return s("intersects", [r(n), n, t]);
}
function S(n, t) {
  return s("touches", [r(n), n, t]);
}
function x(n, t) {
  return s("within", [r(n), n, t]);
}
function A(n, t) {
  return s("disjoint", [r(n), n, t]);
}
function O(n, t) {
  return s("overlaps", [r(n), n, t]);
}
function R(n, t, e) {
  return s("relate", [r(n), n, t, e]);
}
function J(n) {
  return s("isSimple", [r(n), n]);
}
async function N(n) {
  return i(await s("simplify", [r(n), n]));
}
async function j(n, t = false) {
  return i(await s("convexHull", [r(n), n, t]));
}
async function E(n, t) {
  return i(await s("difference", [r(n), n, t]));
}
async function k(n, t) {
  return i(await s("symmetricDifference", [r(n), n, t]));
}
async function D(n, t) {
  return i(await s("intersect", [r(n), n, t]));
}
async function b(n, t = null) {
  const e = o(n, t);
  return i(await s("union", [r(e), e]));
}
async function v(n, t, e, a2, o2, c2) {
  return i(await s("offset", [r(n), n, t, e, a2, o2, c2]));
}
async function L(n, t, e, a2 = false) {
  const o2 = [r(n), n, t, e, a2];
  return i(await s("buffer", o2));
}
async function P(n, t, e, a2, o2, c2) {
  const u2 = [r(n), n, t, e, a2, o2, c2];
  return i(await s("geodesicBuffer", u2));
}
async function T(n, e, a2 = true) {
  const i2 = await s("nearestCoordinate", [r(n), n, e, a2]);
  return { ...i2, coordinate: x$1.fromJSON(i2.coordinate) };
}
async function V(n, e) {
  const a2 = await s("nearestVertex", [r(n), n, e]);
  return { ...a2, coordinate: x$1.fromJSON(a2.coordinate) };
}
function G(n) {
  return "xmin" in n ? n.center : "x" in n ? n : n.extent?.center;
}
async function H(n, t, e) {
  if (null == n)
    throw new Z();
  const r2 = n.spatialReference;
  if (null == (e = e ?? G(n)))
    throw new Z();
  const a2 = n.constructor.fromJSON(await s("rotate", [r2, n, t, e]));
  return a2.spatialReference = r2, a2;
}
async function B(n, t, e, a2) {
  return i(await s("generalize", [r(n), n, t, e, a2]));
}
async function C(n, t, e) {
  return i(await s("densify", [r(n), n, t, e]));
}
async function U(n, t, e, a2 = 0) {
  return i(await s("geodesicDensify", [r(n), n, t, e, a2]));
}
function W(n, t) {
  return s("planarArea", [r(n), n, t]);
}
function F(n, t) {
  return s("planarLength", [r(n), n, t]);
}
function K(n, t, e) {
  return s("geodesicArea", [r(n), n, t, e]);
}
function M(n, t, e) {
  return s("geodesicLength", [r(n), n, t, e]);
}
class Z extends Error {
  constructor() {
    super("Illegal Argument Exception");
  }
}
export {
  L as buffer,
  y as clip,
  p as contains,
  j as convexHull,
  m as crosses,
  w as cut,
  C as densify,
  E as difference,
  A as disjoint,
  d as distance,
  g as equals,
  B as generalize,
  K as geodesicArea,
  P as geodesicBuffer,
  U as geodesicDensify,
  M as geodesicLength,
  D as intersect,
  h as intersects,
  J as isSimple,
  T as nearestCoordinate,
  V as nearestVertex,
  v as offset,
  O as overlaps,
  W as planarArea,
  F as planarLength,
  R as relate,
  H as rotate,
  N as simplify,
  k as symmetricDifference,
  S as touches,
  b as union,
  x as within
};
