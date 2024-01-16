import { h, g, k as k$1 } from "./chunk-J84yWr0C.js";
import { mS as G, eP as o$1, eQ as n$1, mT as w, cZ as f$1 } from "./chunk-KFNcxJaF.js";
import { l } from "./chunk-KXkDk_IW.js";
import { geodesicArea as k } from "./chunk-WuibsuuF.js";
import { r } from "./chunk-GM3bx0Bh.js";
function n({ hasZ: s, spatialReference: n2, rings: c }, f, e = 0) {
  const p = G(n2);
  if (null == p)
    return false;
  const u2 = s ? (o2) => o2 : (s2) => o$1(t, s2[0], s2[1], e);
  for (const o2 of c) {
    const s2 = [];
    for (const r2 of o2) {
      const o3 = [0, 0, e];
      p(u2(r2), 0, o3, 0), s2.push(o3);
    }
    f.push(s2);
  }
  return true;
}
const t = n$1();
function m(e) {
  const { spatialReference: r$1 } = e;
  return r(r$1, a, i, u$1, e);
}
function a(r2) {
  return l(Math.abs(w([r2], "square-meters")[0]), "square-meters");
}
function i(t2) {
  try {
    return l(Math.abs(k(t2, "square-meters")), "square-meters");
  } catch (o2) {
    return null;
  }
}
function u$1(r2) {
  const s = [];
  return n(r2, s) ? l(Math.abs(w([{ type: "polygon", rings: s, spatialReference: f$1.WGS84 }], "square-meters")[0]), "square-meters") : null;
}
function o(o2, u2, i2 = k$1()) {
  if ("on-the-ground" === u2) {
    const r2 = m(o2);
    return null != r2 ? r2 : h(o2, i2);
  }
  return g(o2, i2);
}
function u(e, r2 = k$1()) {
  return o(e, "on-the-ground", r2);
}
export {
  o,
  u
};
