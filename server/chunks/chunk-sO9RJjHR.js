import { i } from "./chunk-KXkDk_IW.js";
import { c4 as d$1, fg as te, fh as se, eL as t, fi as x$1, eP as o$1, eQ as n$1 } from "./chunk-KFNcxJaF.js";
import { i as i$1 } from "./chunk-z9Tnkksn.js";
var a;
function s(n) {
  return p(n, a.Direct);
}
function f(n) {
  return p(n, a.Horizontal);
}
function p(r, e) {
  const { hasZ: i$2, spatialReference: l } = r, o = i$1(l);
  let c = 0;
  const s2 = se(o);
  if (null == s2)
    return null;
  const f2 = e === a.Direct ? x : Z;
  for (const n of r.paths) {
    if (n.length < 2)
      continue;
    const t2 = n.length - 1;
    for (let r2 = 0; r2 < t2; ++r2) {
      const t3 = n[r2];
      D[0] = t3[0], D[1] = t3[1], D[2] = i$2 ? t3[2] : 0;
      const e2 = n[r2 + 1];
      H[0] = e2[0], H[1] = e2[1], H[2] = i$2 ? e2[2] : 0;
      const o2 = f2(D, H, l);
      if (null == o2)
        return null;
      c += o2.value;
    }
  }
  return i(c, s2);
}
function z(n, t2) {
  const { spatialReference: r } = n;
  return d$1(r, t2.spatialReference) ? (D[0] = n.x, D[1] = n.y, D[2] = n.hasZ ? n.z : 0, H[0] = t2.x, H[1] = t2.y, H[2] = t2.hasZ ? t2.z : 0, x(D, H, r)) : null;
}
function m(n, t2) {
  const { spatialReference: r } = n;
  return d$1(r, t2.spatialReference) ? (D[0] = n.x, D[1] = n.y, D[2] = n.hasZ ? n.z : 0, H[0] = t2.x, H[1] = t2.y, H[2] = t2.hasZ ? t2.z : 0, Z(D, H, r)) : null;
}
function y(n, t2) {
  const { spatialReference: r } = n;
  return d$1(r, t2.spatialReference) ? (D[0] = n.x, D[1] = n.y, D[2] = n.hasZ ? n.z : 0, H[0] = t2.x, H[1] = t2.y, H[2] = t2.hasZ ? t2.z : 0, d(D, H, r)) : null;
}
function R(n) {
  return D[0] = n.x, D[1] = n.y, D[2] = n.hasZ ? n.z : 0, g(D, n.spatialReference);
}
function x(t2, r, e) {
  const i$12 = V(t2, r, e, a.Direct);
  return null != i$12 ? i(i$12.direct, i$12.unit) : null;
}
function Z(t2, r, e) {
  const i$12 = V(t2, r, e, a.Horizontal);
  return null != i$12 ? i(i$12.horizontal, i$12.unit) : null;
}
function d(t2, r, e) {
  const i$12 = V(t2, r, e, a.Vertical);
  return null != i$12 ? i(i$12.verticalSigned, i$12.unit) : null;
}
function g(t2, e) {
  const i$12 = te(e);
  return null != i$12 ? i(t2[2], i$12) : null;
}
function V(n, r, l, c) {
  const s2 = i$1(l), f2 = se(s2);
  if (null == f2)
    return null;
  const p2 = r[2] - n[2];
  if (c === a.Vertical)
    return { verticalSigned: p2, unit: f2 };
  if (!t(n, l, U, s2) || !t(r, l, S, s2))
    return null;
  if (c === a.Direct) {
    return { direct: x$1(S, U), unit: f2 };
  }
  if (o$1(b, n[0], n[1], r[2]), !t(b, l, b, s2))
    return null;
  const h = x$1(b, S);
  if (c === a.Horizontal)
    return { horizontal: h, unit: f2 };
  return { direct: x$1(S, U), horizontal: h, vertical: Math.abs(p2), unit: f2 };
}
!function(n) {
  n[n.Direct = 0] = "Direct", n[n.Horizontal = 1] = "Horizontal", n[n.Vertical = 2] = "Vertical";
}(a || (a = {}));
const D = n$1(), H = n$1(), U = n$1(), S = n$1(), b = n$1();
export {
  R,
  Z,
  d,
  f,
  m,
  s,
  x,
  y,
  z
};
