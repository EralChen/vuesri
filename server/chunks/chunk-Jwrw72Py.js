import { aY as j$1, kq as ce } from "./chunk-KFNcxJaF.js";
import { U as U$1, w as w$1, g as g$1, f, p, D as D$1, x as x$1, y as y$1, F as F$1, j as j$2, d as d$1, a as h$1, B, M as M$1, $ } from "./chunk-KXkDk_IW.js";
function e(e2) {
  const n = "metric";
  if (null == e2)
    return n;
  const i = e2.map, l = (i && "portalItem" in i ? i.portalItem?.portal : null) ?? j$1.getDefault();
  switch (l.user?.units ?? l.units) {
    case n:
      return n;
    case "english":
      return "imperial";
  }
  return ce(e2.spatialReference) ?? n;
}
function h(e2, a, n, u = 2, i = "abbr") {
  return g$1(e2, f(a, n).value, n, u, i);
}
function g(r, a, n, u = 2, i = "abbr") {
  return p(r, f(a, n).value, n, u, i);
}
function L(t, r, e2 = 2, n = "abbr") {
  return D$1(t, r.value, r.unit, e2, n);
}
function M(t, r, e2 = 2, a = "abbr") {
  return x$1(t, r.value, r.unit, e2, a);
}
function d(t, r, e2 = 2, a = "abbr") {
  return y$1(t, r.value, r.unit, e2, a);
}
function w(t, r, e2 = 2, a = "abbr") {
  return F$1(t, r.value, r.unit, e2, a);
}
function I(t, r, e2 = 2, a = "abbr") {
  return j$2(t, r.value, r.unit, e2, a);
}
function R(t, r, e2 = 2, a = "abbr") {
  return d$1(t, r.value, r.unit, e2, a);
}
function V(t, r, e2 = 2, a = "abbr") {
  return h$1(t, r.value, r.unit, e2, a);
}
function y(t, r, e2 = 2, a = "abbr") {
  return B(t, r.value, r.unit, e2, a);
}
function D(t, r, e2 = 2, a = "abbr") {
  return M$1(t, r.value, r.unit, e2, a);
}
function j(t, r, e2 = 2, a = "abbr") {
  return $(t, r.value, r.unit, e2, a);
}
function T(t, r, e2) {
  return U$1(t.value, t.unit, t.rotationType, r, e2);
}
function U(t, r, e2) {
  return w$1(t.value, t.unit, t.rotationType, r, e2);
}
function q(t, r, e2, a, n = "abbr") {
  switch (a = a ?? 2, e2) {
    case "imperial":
      return R(t, r, a, n);
    case "metric":
      return L(t, r, a, n);
    default:
      return h(t, r, e2, a, n);
  }
}
function x(t, r, e2, a = 2, n = "abbr") {
  switch (e2) {
    case "imperial":
      return V(t, r, a, n);
    case "metric":
      return M(t, r, a, n);
    default:
      return g(t, r, e2, a, n);
  }
}
function F(t, r, e2, a = 2, n = "abbr") {
  switch (e2) {
    case "imperial":
      return y(t, r, a, n);
    case "metric":
      return d(t, r, a, n);
    default:
      return h(t, r, e2, a, n);
  }
}
function S(t, r, e2, a = 2, n = "abbr") {
  switch (e2) {
    case "imperial":
      return D(t, r, a, n);
    case "metric":
      return w(t, r, a, n);
    default:
      return g(t, r, e2, a, n);
  }
}
function k(t, r, e2, a = 2, n = "abbr") {
  switch (e2) {
    case "imperial":
      return j(t, r, a, n);
    case "metric":
      return I(t, r, a, n);
    default:
      return h(t, r, e2, a, n);
  }
}
export {
  F,
  L,
  R,
  S,
  T,
  U,
  d,
  e,
  h,
  k,
  q,
  x,
  y
};
