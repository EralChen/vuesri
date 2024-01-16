import { l } from "./chunk-KXkDk_IW.js";
import { f4 as re, eQ as n$1, eP as o$1, eL as t, f5 as q$1, f6 as d$1, f7 as A, f8 as v, f9 as ot$1, fa as Z, fb as S, fc as i$1 } from "./chunk-KFNcxJaF.js";
import { i } from "./chunk-z9Tnkksn.js";
function g(t2, o = k()) {
  return j(t2, o);
}
function h(t2, o = k()) {
  return j(t2, o, false);
}
function j(r, g2, h2 = r.hasZ) {
  const j2 = i(r.spatialReference), k2 = re(j2);
  if (null == k2)
    return null;
  const q2 = (t2, o) => !(o.length < 2) && (o$1(t2, o[0], o[1], h2 && o[2] || 0), true);
  let v$1 = 0;
  for (const t$1 of r.rings) {
    const o = t$1.length;
    if (o < 3)
      continue;
    const { positionsWorldCoords: a } = g2;
    for (; a.length < o; )
      a.push(n$1());
    const h3 = y, k3 = o$1(d, 0, 0, 0), C = 1 / o;
    for (let n = 0; n < o; n++) {
      if (!q2(h3, t$1[n]))
        return null;
      if (!t(h3, r.spatialReference, a[n], j2))
        return null;
      q$1(k3, k3, a[n], C);
    }
    const R = d$1(a[0], a[1], k3, A());
    if (0 === v(ot$1(R)))
      continue;
    for (let t2 = 0; t2 < o; t2++)
      Z(R, k3, a[t2], a[t2]);
    const V = U(a);
    for (let t2 = 0; t2 < V.length; t2 += 3)
      v$1 += S(a[V[t2]], a[V[t2 + 1]], a[V[t2 + 2]]);
  }
  return l(v$1, k2);
}
const y = n$1(), d = n$1();
function k() {
  return { positionsWorldCoords: [] };
}
function U(t2) {
  return i$1(q(t2), [], 2);
}
function q(t2) {
  const o = new Float64Array(2 * t2.length);
  for (let r = 0; r < t2.length; ++r) {
    const n = t2[r], e = 2 * r;
    o[e] = n[0], o[e + 1] = n[1];
  }
  return o;
}
export {
  U,
  g,
  h,
  k
};
