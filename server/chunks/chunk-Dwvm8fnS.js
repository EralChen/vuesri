import { U, j, g } from "./chunk-cRQzjRBY.js";
import { nT as G, fF as o$1, aW as n$1, nU as t$1, g2 as a$1, nV as y, nW as k, aB as f$1 } from "./chunk-ejFG4zJ0.js";
function t({ hasZ: s, spatialReference: t2, rings: n }, e, f = 0) {
  const i2 = G(t2);
  if (null == i2)
    return false;
  const p = s ? (o2) => o2 : (s2) => o$1(c, s2[0], s2[1], f);
  for (const o2 of n) {
    const s2 = [];
    for (const r of o2) {
      const o3 = [0, 0, f];
      i2(p(r), 0, o3, 0), s2.push(o3);
    }
    e.push(s2);
  }
  return true;
}
const c = n$1();
function m(e) {
  const { spatialReference: r } = e;
  return t$1(r, a, i, u$1, e);
}
function a(r) {
  return a$1(Math.abs(y([r], "square-meters")[0]), "square-meters");
}
function i(t2) {
  try {
    return a$1(Math.abs(k(t2, "square-meters")), "square-meters");
  } catch (o2) {
    return null;
  }
}
function u$1(r) {
  const s = [];
  return t(r, s) ? a$1(Math.abs(y([{ type: "polygon", rings: s, spatialReference: f$1.WGS84 }], "square-meters")[0]), "square-meters") : null;
}
function o(o2, u2, i2 = U()) {
  if ("on-the-ground" === u2) {
    const r = m(o2);
    return null != r ? r : j(o2, i2);
  }
  return g(o2, i2);
}
function u(e, r = U()) {
  return o(e, "on-the-ground", r);
}
export {
  u
};
