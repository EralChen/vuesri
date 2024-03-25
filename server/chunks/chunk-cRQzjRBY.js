import { fW as se, aW as n$1, fF as o$1, fB as n, fX as q$1, fY as b, fZ as v$1, f_ as v$2, f$ as F, g0 as K, g1 as S, g2 as a, g3 as i$1 } from "./chunk-ejFG4zJ0.js";
import { i } from "./chunk-OKVnMJUL.js";
function g(t, o = U()) {
  return h(t, o);
}
function j(t, o = U()) {
  return h(t, o, false);
}
function h(r, g2, j2 = r.hasZ) {
  const h2 = i(r.spatialReference), U2 = se(h2);
  if (null == U2)
    return null;
  const v2 = (t, o) => !(o.length < 2) && (o$1(t, o[0], o[1], j2 && o[2] || 0), true);
  let x = 0;
  for (const t of r.rings) {
    const o = t.length;
    if (o < 3)
      continue;
    const { positionsWorldCoords: a2 } = g2;
    for (; a2.length < o; )
      a2.push(n$1());
    const j3 = y, U3 = o$1(d, 0, 0, 0), C = 1 / o;
    for (let n$12 = 0; n$12 < o; n$12++) {
      if (!v2(j3, t[n$12]))
        return null;
      if (!n(j3, r.spatialReference, a2[n$12], h2))
        return null;
      q$1(U3, U3, a2[n$12], C);
    }
    const R = b(a2[0], a2[1], U3, v$1());
    if (0 === v$2(F(R)))
      continue;
    for (let t2 = 0; t2 < o; t2++)
      K(R, U3, a2[t2], a2[t2]);
    const V = k(a2);
    for (let t2 = 0; t2 < V.length; t2 += 3)
      x += S(a2[V[t2]], a2[V[t2 + 1]], a2[V[t2 + 2]]);
  }
  return a(x, U2);
}
const y = n$1(), d = n$1();
function U() {
  return { positionsWorldCoords: [] };
}
function k(t) {
  return i$1(v(t), [], 2);
}
function v(t) {
  const o = new Float64Array(2 * t.length);
  for (let r = 0; r < t.length; ++r) {
    const n2 = t[r], e = 2 * r;
    o[e] = n2[0], o[e + 1] = n2[1];
  }
  return o;
}
export {
  U,
  g,
  j,
  k
};
