import { bY as j$1, aC as M$1, aB as f$1, dq as K, ct as e, aD as M$2, dr as s } from "./chunk-ejFG4zJ0.js";
import { j as j$2 } from "./chunk-pZO3UCge.js";
const m = new Float64Array(2), p = new Float64Array(2), M = "0123456789bcdefghjkmnpqrstuvwxyz", j = 64;
function S(t, e$1, f, l) {
  const a = [t.xmin, t.ymin, t.xmax, t.ymax], u = j$1.fromExtent(M$1.fromBounds(a, l)), h = j$2(u, l, f$1.WGS84, { densificationStep: e$1 * j });
  if (!h)
    return null;
  const m2 = K(new e(), h, false, false), p2 = m2.coords.filter((t2, o) => !(o % 2)), g = m2.coords.filter((t2, o) => o % 2), y = Math.min(...p2), d = Math.min(...g), x = Math.max(...p2), M2 = Math.max(...g), S2 = A(y, d, f, f$1.WGS84), G = A(x, M2, f, f$1.WGS84);
  return S2 && G ? { bounds: a, geohashBounds: { xLL: S2[0], yLL: S2[1], xTR: G[0], yTR: G[1] }, level: f } : null;
}
function A(o, r, s$1, i) {
  if (i.isWebMercator) {
    const n = M$2(o / s.radius), i2 = n - 360 * Math.floor((n + 180) / 360), c = [0, 0];
    return Y(c, 0, M$2(Math.PI / 2 - 2 * Math.atan(Math.exp(-r / s.radius))), i2, s$1), c;
  }
  const f = j$2({ x: o, y: r }, i, f$1.WGS84);
  if (!f)
    return null;
  const l = [0, 0];
  return Y(l, 0, f.y, f.x, s$1), l;
}
function W(t) {
  return M[t];
}
function b(t) {
  return (t[0] + t[1]) / 2;
}
function w(t, o, r) {
  return t[0] = o, t[1] = r, t;
}
function C(t, o) {
  const r = b(t), n = o, e2 = !o;
  t[0] = e2 * t[0] + n * r, t[1] = e2 * r + n * t[1];
}
function L(t, o) {
  const r = o > b(t);
  return C(t, r), r;
}
function R(t, o) {
  let r = -90, n = 90, e2 = -180, s2 = 180;
  for (let i = 0; i < o; i++) {
    const o2 = Math.ceil((i + 1) / 2), c = Math.floor((i + 1) / 2), f = 1 - i % 2, l = 30 - (3 * o2 + 2 * c), a = 30 - (2 * o2 + 3 * c), u = 3 * f + 2 * (1 - f), h = 2 * f + 3 * (1 - f), m2 = 3 * f + 7 * (1 - f) << a, p2 = (7 * f + 3 * (1 - f) << l & t.geohashX) >> l, g = (m2 & t.geohashY) >> a;
    for (let t2 = u - 1; t2 >= 0; t2--) {
      const o3 = (e2 + s2) / 2, r2 = p2 & 1 << t2 ? 1 : 0;
      e2 = (1 - r2) * e2 + r2 * o3, s2 = (1 - r2) * o3 + r2 * s2;
    }
    for (let t2 = h - 1; t2 >= 0; t2--) {
      const o3 = (r + n) / 2, e3 = g & 1 << t2 ? 1 : 0;
      r = (1 - e3) * r + e3 * o3, n = (1 - e3) * o3 + e3 * n;
    }
  }
  return [e2, r, s2, n];
}
function Y(t, o, r, n, e2) {
  e2 % 2 && (e2 += 1);
  let s2 = 0, i = 0, c = -90, f = 90, l = -180, a = 180;
  for (let u = 0; u < e2 / 2; u++) {
    for (let t2 = 0; t2 < 5; t2++) {
      const o2 = (l + a) / 2, r2 = n > o2 ? 1 : 0;
      s2 |= r2 << 29 - (t2 + 5 * u), l = (1 - r2) * l + r2 * o2, a = (1 - r2) * o2 + r2 * a;
    }
    for (let t2 = 0; t2 < 5; t2++) {
      const o2 = (c + f) / 2, n2 = r > o2 ? 1 : 0;
      i |= n2 << 29 - (t2 + 5 * u), c = (1 - n2) * c + n2 * o2, f = (1 - n2) * o2 + n2 * f;
    }
  }
  t[2 * o] = s2, t[2 * o + 1] = i;
}
function z$1(t, o, r) {
  let n = "";
  const e2 = w(m, -90, 90), s2 = w(p, -180, 180);
  for (let i = 0; i < r; i++) {
    let r2 = 0;
    !(i % 2) ? (r2 |= L(s2, o) << 4, r2 |= L(e2, t) << 3, r2 |= L(s2, o) << 2, r2 |= L(e2, t) << 1, r2 |= L(s2, o) << 0) : (r2 |= L(e2, t) << 4, r2 |= L(s2, o) << 3, r2 |= L(e2, t) << 2, r2 |= L(s2, o) << 1, r2 |= L(e2, t) << 0), n += W(r2);
  }
  return n;
}
export {
  A,
  R,
  S,
  z$1 as z
};
