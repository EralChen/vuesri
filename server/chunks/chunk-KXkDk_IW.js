import { jW as D$1, jX as j$1, iB as s$1, dM as u, jY as E, dC as r$1, jZ as v, j_ as F$1, j$ as T, k0 as K, k1 as A, k2 as G, eY as i$1 } from "./chunk-KFNcxJaF.js";
function r(t, u2) {
  return { type: D$1(u2), value: t, unit: u2 };
}
function i(t, u2) {
  return { type: D$1(u2), value: t, unit: u2 };
}
function l(t, u2) {
  return { type: D$1(u2), value: t, unit: u2 };
}
function o(t, u2, e = "arithmetic") {
  return { type: D$1(u2), value: t, unit: u2, rotationType: e };
}
function f(n, t) {
  const u2 = s(n, t);
  return "angle" === n.type ? o(u2, t, n.rotationType) : r(u2, t);
}
function s(n, t) {
  return j$1(n.value, n.unit, t);
}
function p$1(n, t) {
  return null == n ? t : null == t || n.value > j$1(t.value, t.unit, n.unit) ? n : t;
}
function m(n, t) {
  return null == n ? null : { ...n, value: n.value * t };
}
function g$1(n, t, u2) {
  if (t === u2)
    return n;
  switch (u2) {
    case "arithmetic":
    case "geographic":
      return 90 - n;
  }
}
const h$1 = i(0, "meters"), d$1 = l(0, "square-meters");
o(0, "radians");
const U$1 = o(0, "degrees");
function b(t, n, i2) {
  return t.units[n][i2];
}
function g(t, n, i2, r2 = 2, o2 = "abbr") {
  return `${u(n, { minimumFractionDigits: r2, maximumFractionDigits: r2, signDisplay: n > 0 ? "never" : "exceptZero" })} ${b(t, i2, o2)}`;
}
function p(t, n, i2, r2 = 2, o2 = "abbr") {
  return `${u(n, { minimumFractionDigits: r2, maximumFractionDigits: r2, signDisplay: "exceptZero" })} ${b(t, i2, o2)}`;
}
function D(t, n, i2, r2 = 2, o2 = "abbr") {
  const s2 = v(n, i2);
  return g(t, j$1(n, i2, s2), s2, r2, o2);
}
function x(t, n, i2, r2 = 2, o2 = "abbr") {
  const s2 = v(n, i2);
  return p(t, j$1(n, i2, s2), s2, r2, o2);
}
function y(t, n, i2, r2 = 2, o2 = "abbr") {
  const e = F$1(n, i2);
  return g(t, j$1(n, i2, e), e, r2, o2);
}
function F(t, n, i2, r2 = 2, o2 = "abbr") {
  const e = F$1(n, i2);
  return p(t, j$1(n, i2, e), e, r2, o2);
}
function d(t, n, i2, r2 = 2, o2 = "abbr") {
  const e = T(n, i2);
  return g(t, j$1(n, i2, e), e, r2, o2);
}
function h(t, n, i2, r2 = 2, o2 = "abbr") {
  const e = T(n, i2);
  return p(t, j$1(n, i2, e), e, r2, o2);
}
function B(t, n, i2, r2 = 2, o2 = "abbr") {
  const e = K(n, i2);
  return g(t, j$1(n, i2, e), e, r2, o2);
}
function M(t, n, i2, r2 = 2, o2 = "abbr") {
  const e = K(n, i2);
  return p(t, j$1(n, i2, e), e, r2, o2);
}
function j(t, n, i2, r2 = 2, o2 = "abbr") {
  const e = A(n, i2);
  return g(t, j$1(n, i2, e), e, r2, o2);
}
function $(t, n, i2, r2 = 2, o2 = "abbr") {
  const e = G(n, i2);
  return g(t, j$1(n, i2, e), e, r2, o2);
}
function U(t, i2, o2, e, s2) {
  s2 = s2 ?? 2;
  let c = s$1.normalize(g$1(j$1(t, i2, "degrees"), o2, e), 0, true);
  const a = { style: "unit", unitDisplay: "narrow", unit: "degree", maximumFractionDigits: s2, minimumFractionDigits: s2, signDisplay: c > 0 ? "never" : "exceptZero" };
  return c = z(c, a), u(c, a);
}
function w(t, n, i2, r2, o2) {
  i2 !== r2 && (t = -t);
  const e = { style: "unit", unitDisplay: "narrow", unit: "degree", maximumFractionDigits: o2 = o2 ?? 2, minimumFractionDigits: o2, signDisplay: "exceptZero" };
  let s2 = j$1(t, n, "degrees") % 360;
  return s2 = z(s2, e), u(s2, e);
}
const Z = /* @__PURE__ */ new Map();
function z(t, n) {
  const i2 = JSON.stringify(n);
  let r2 = Z.get(i2);
  return r2 || (r2 = new Intl.NumberFormat("en-US", n), Z.set(i2, r2)), /\-?\+?360/.test(r2.format(t)) ? 0 : t;
}
const I = ["B", "kB", "MB", "GB", "TB"];
function O(n, r2) {
  let e = 0 === (r2 = Math.round(r2)) ? 0 : Math.floor(Math.log(r2) / Math.log(E.KILOBYTES));
  e = i$1(e, 0, I.length - 1);
  const u$1 = u(r2 / E.KILOBYTES ** e, { maximumFractionDigits: 2 });
  return r$1(n.units.bytes[I[e]], { fileSize: u$1 });
}
export {
  $,
  B,
  D,
  F,
  M,
  O,
  U,
  h as a,
  g$1 as b,
  U$1 as c,
  d,
  d$1 as e,
  f,
  g,
  h$1 as h,
  i,
  j,
  b as k,
  l,
  m,
  p$1 as n,
  o,
  p,
  r,
  s,
  w,
  x,
  y
};
