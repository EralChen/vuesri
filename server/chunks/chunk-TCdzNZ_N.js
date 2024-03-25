import { fV as c } from "./chunk-ejFG4zJ0.js";
import { U as U$1, w as w$1, g as g$1, p, D as D$1, x as x$1, y as y$1, F as F$1, j as j$1, d as d$1, h as h$1, B, M as M$1, $ } from "./chunk-V0WGYzWu.js";
function h(e, a, n, u = 2, i = "abbr") {
  return g$1(e, c(a, n).value, n, u, i);
}
function g(r, a, n, u = 2, i = "abbr") {
  return p(r, c(a, n).value, n, u, i);
}
function L(t, r, e = 2, n = "abbr") {
  return D$1(t, r.value, r.unit, e, n);
}
function M(t, r, e = 2, a = "abbr") {
  return x$1(t, r.value, r.unit, e, a);
}
function d(t, r, e = 2, a = "abbr") {
  return y$1(t, r.value, r.unit, e, a);
}
function w(t, r, e = 2, a = "abbr") {
  return F$1(t, r.value, r.unit, e, a);
}
function I(t, r, e = 2, a = "abbr") {
  return j$1(t, r.value, r.unit, e, a);
}
function R(t, r, e = 2, a = "abbr") {
  return d$1(t, r.value, r.unit, e, a);
}
function V(t, r, e = 2, a = "abbr") {
  return h$1(t, r.value, r.unit, e, a);
}
function y(t, r, e = 2, a = "abbr") {
  return B(t, r.value, r.unit, e, a);
}
function D(t, r, e = 2, a = "abbr") {
  return M$1(t, r.value, r.unit, e, a);
}
function j(t, r, e = 2, a = "abbr") {
  return $(t, r.value, r.unit, e, a);
}
function T(t, r, e) {
  return U$1(t.value, t.unit, t.rotationType, r, e);
}
function U(t, r, e) {
  return w$1(t.value, t.unit, t.rotationType, r, e);
}
function q$1(t, r, e, a, n = "abbr") {
  switch (a = a ?? 2, e) {
    case "imperial":
      return R(t, r, a, n);
    case "metric":
      return L(t, r, a, n);
    default:
      return h(t, r, e, a, n);
  }
}
function x(t, r, e, a = 2, n = "abbr") {
  switch (e) {
    case "imperial":
      return V(t, r, a, n);
    case "metric":
      return M(t, r, a, n);
    default:
      return g(t, r, e, a, n);
  }
}
function F(t, r, e, a = 2, n = "abbr") {
  switch (e) {
    case "imperial":
      return y(t, r, a, n);
    case "metric":
      return d(t, r, a, n);
    default:
      return h(t, r, e, a, n);
  }
}
function S(t, r, e, a = 2, n = "abbr") {
  switch (e) {
    case "imperial":
      return D(t, r, a, n);
    case "metric":
      return w(t, r, a, n);
    default:
      return g(t, r, e, a, n);
  }
}
function k(t, r, e, a = 2, n = "abbr") {
  switch (e) {
    case "imperial":
      return j(t, r, a, n);
    case "metric":
      return I(t, r, a, n);
    default:
      return h(t, r, e, a, n);
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
  h,
  k,
  q$1 as q,
  x,
  y
};
