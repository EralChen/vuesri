import { bO as G, l8 as ee, l9 as i, la as Z$1, fB as n, lb as x, fF as o$1, aW as n$1, lc as p$1, ld as l$1, le as u$1 } from "./chunk-ejFG4zJ0.js";
import { i as i$1 } from "./chunk-OKVnMJUL.js";
var a;
function f$1(t) {
  return p(t, a.Horizontal);
}
function p(r, e) {
  const { hasZ: i$2, spatialReference: l2 } = r, o = i$1(l2);
  let c2 = 0;
  const s = Z$1(o);
  if (null == s)
    return null;
  const f2 = e === a.Direct ? Z : j;
  for (const t of r.paths) {
    if (t.length < 2)
      continue;
    const n2 = t.length - 1;
    for (let r2 = 0; r2 < n2; ++r2) {
      const n3 = t[r2];
      D[0] = n3[0], D[1] = n3[1], D[2] = i$2 ? n3[2] : 0;
      const e2 = t[r2 + 1];
      H[0] = e2[0], H[1] = e2[1], H[2] = i$2 ? e2[2] : 0;
      const o2 = f2(D, H, l2);
      if (null == o2)
        return null;
      c2 += o2.value;
    }
  }
  return i(c2, s);
}
function m$1(t, n2) {
  const { spatialReference: r } = t;
  return G(r, n2.spatialReference) ? (D[0] = t.x, D[1] = t.y, D[2] = t.hasZ ? t.z : 0, H[0] = n2.x, H[1] = n2.y, H[2] = n2.hasZ ? n2.z : 0, Z(D, H, r)) : null;
}
function z(t, n2) {
  const { spatialReference: r } = t;
  return G(r, n2.spatialReference) ? (D[0] = t.x, D[1] = t.y, D[2] = t.hasZ ? t.z : 0, H[0] = n2.x, H[1] = n2.y, H[2] = n2.hasZ ? n2.z : 0, j(D, H, r)) : null;
}
function y(t, n2) {
  const { spatialReference: r } = t;
  return G(r, n2.spatialReference) ? (D[0] = t.x, D[1] = t.y, D[2] = t.hasZ ? t.z : 0, H[0] = n2.x, H[1] = n2.y, H[2] = n2.hasZ ? n2.z : 0, g(D, H, r)) : null;
}
function R(t) {
  return null != t ? v(t.hasZ ? t.z : 0, t.spatialReference) : null;
}
function v(n2, e) {
  const i$12 = ee(e);
  return null != i$12 ? i(n2 ?? 0, i$12) : null;
}
function Z(n2, r, e) {
  const i$12 = V(n2, r, e, a.Direct);
  return null != i$12 ? i(i$12.direct, i$12.unit) : null;
}
function j(n2, r, e) {
  const i$12 = V(n2, r, e, a.Horizontal);
  return null != i$12 ? i(i$12.horizontal, i$12.unit) : null;
}
function g(n2, r, e) {
  const i$12 = V(n2, r, e, a.Vertical);
  return null != i$12 ? i(i$12.verticalSigned, i$12.unit) : null;
}
function V(t, r, l2, c2) {
  const s = i$1(l2), f2 = Z$1(s);
  if (null == f2)
    return null;
  const p2 = r[2] - t[2];
  if (c2 === a.Vertical)
    return { verticalSigned: p2, unit: f2 };
  if (!n(t, l2, U, s) || !n(r, l2, b, s))
    return null;
  if (c2 === a.Direct) {
    return { direct: x(b, U), unit: f2 };
  }
  if (o$1(S, t[0], t[1], r[2]), !n(S, l2, S, s))
    return null;
  const h = x(S, b);
  if (c2 === a.Horizontal)
    return { horizontal: h, unit: f2 };
  return { direct: x(b, U), horizontal: h, vertical: Math.abs(p2), unit: f2 };
}
!function(t) {
  t[t.Direct = 0] = "Direct", t[t.Horizontal = 1] = "Horizontal", t[t.Vertical = 2] = "Vertical";
}(a || (a = {}));
const D = n$1(), H = n$1(), U = n$1(), b = n$1(), S = n$1();
function c(e) {
  return p$1(e) ?? f$1(e);
}
function m(e, t) {
  return l$1(e, t) ?? z(e, t);
}
function u(e, t, r) {
  return f[0] = e[0], f[1] = e[1], f[2] = 3 === e.length ? e[2] : 0, l[0] = t[0], l[1] = t[1], l[2] = 3 === t.length ? t[2] : 0, u$1(f, l, r) ?? j(f, l, r);
}
const f = n$1(), l = n$1();
export {
  R,
  Z,
  m$1 as a,
  c,
  g,
  m,
  u,
  v,
  y
};
