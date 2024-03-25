import { ei as s, ej as y$1, ek as j$1, eg as u, el as E, e6 as r, em as v, en as F$1, eo as J, ep as T, eq as K, er as A, es as e$1 } from "./chunk-ejFG4zJ0.js";
function b(t, n, i) {
  return t.units[n][i];
}
function g(t, n, i, r2 = 2, o = "abbr") {
  return `${u(n, { minimumFractionDigits: r2, maximumFractionDigits: r2, signDisplay: n > 0 ? "never" : "exceptZero" })} ${b(t, i, o)}`;
}
function p(t, n, i, r2 = 2, o = "abbr") {
  return `${u(n, { minimumFractionDigits: r2, maximumFractionDigits: r2, signDisplay: "exceptZero" })} ${b(t, i, o)}`;
}
function D(t, n, i, r2 = 2, o = "abbr") {
  const s2 = v(n, i);
  return g(t, j$1(n, i, s2), s2, r2, o);
}
function x(t, n, i, r2 = 2, o = "abbr") {
  const s2 = v(n, i);
  return p(t, j$1(n, i, s2), s2, r2, o);
}
function y(t, n, i, r2 = 2, o = "abbr") {
  const e = F$1(n, i);
  return g(t, j$1(n, i, e), e, r2, o);
}
function F(t, n, i, r2 = 2, o = "abbr") {
  const e = F$1(n, i);
  return p(t, j$1(n, i, e), e, r2, o);
}
function d(t, n, i, r2 = 2, o = "abbr") {
  const e = J(n, i);
  return g(t, j$1(n, i, e), e, r2, o);
}
function h(t, n, i, r2 = 2, o = "abbr") {
  const e = J(n, i);
  return p(t, j$1(n, i, e), e, r2, o);
}
function B(t, n, i, r2 = 2, o = "abbr") {
  const e = T(n, i);
  return g(t, j$1(n, i, e), e, r2, o);
}
function M(t, n, i, r2 = 2, o = "abbr") {
  const e = T(n, i);
  return p(t, j$1(n, i, e), e, r2, o);
}
function j(t, n, i, r2 = 2, o = "abbr") {
  const e = K(n, i);
  return g(t, j$1(n, i, e), e, r2, o);
}
function $(t, n, i, r2 = 2, o = "abbr") {
  const e = A(n, i);
  return g(t, j$1(n, i, e), e, r2, o);
}
function U(t, i, o, e, s$1) {
  s$1 = s$1 ?? 2;
  let c = s.normalize(y$1(j$1(t, i, "degrees"), o, e), 0, true);
  const a = { style: "unit", unitDisplay: "narrow", unit: "degree", maximumFractionDigits: s$1, minimumFractionDigits: s$1, signDisplay: c > 0 ? "never" : "exceptZero" };
  return c = z(c, a), u(c, a);
}
function w(t, n, i, r2, o) {
  i !== r2 && (t = -t);
  const e = { style: "unit", unitDisplay: "narrow", unit: "degree", maximumFractionDigits: o = o ?? 2, minimumFractionDigits: o, signDisplay: "exceptZero" };
  let s2 = j$1(t, n, "degrees") % 360;
  return s2 = z(s2, e), u(s2, e);
}
const Z = /* @__PURE__ */ new Map();
function z(t, n) {
  const i = JSON.stringify(n);
  let r2 = Z.get(i);
  return r2 || (r2 = new Intl.NumberFormat("en-US", n), Z.set(i, r2)), /\-?\+?360/.test(r2.format(t)) ? 0 : t;
}
const I = ["B", "kB", "MB", "GB", "TB"];
function O(n, r$1) {
  let e = 0 === (r$1 = Math.round(r$1)) ? 0 : Math.floor(Math.log(r$1) / Math.log(E.KILOBYTES));
  e = e$1(e, 0, I.length - 1);
  const u$1 = u(r$1 / E.KILOBYTES ** e, { maximumFractionDigits: 2 });
  return r(n.units.bytes[I[e]], { fileSize: u$1 });
}
export {
  $,
  B,
  D,
  F,
  M,
  O,
  U,
  b,
  d,
  g,
  h,
  j,
  p,
  w,
  x,
  y
};
