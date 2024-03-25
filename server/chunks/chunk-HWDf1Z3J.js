import { fF as o$1, iw as S, ix as u$1, iy as o, iz as i, iA as c, iB as r$1, aW as n$1, fr as e$1, aV as e, bZ as S$1, iC as o$2, dy as K, bY as j, aX as y, a_ as c$1 } from "./chunk-ejFG4zJ0.js";
import { p as p$1 } from "./chunk-X6Yd3gQb.js";
const f = n$1(), n = e$1(), l = e$1(), u = e$1();
function p(r, s, i2) {
  return o$1(f, s[0], s[1], 1), S(f, f, u$1(n, i2)), 0 === f[2] ? o(r, f[0], f[1]) : o(r, f[0] / f[2], f[1] / f[2]);
}
function j$1(t, i$1, m2) {
  return x(l, i$1[0], i$1[1], i$1[2], i$1[3], i$1[4], i$1[5], i$1[6], i$1[7]), x(u, m2[0], m2[1], m2[2], m2[3], m2[4], m2[5], m2[6], m2[7]), i(t, c(l, l), u), 0 !== t[8] && (t[0] /= t[8], t[1] /= t[8], t[2] /= t[8], t[3] /= t[8], t[4] /= t[8], t[5] /= t[8], t[6] /= t[8], t[7] /= t[8], t[8] /= t[8]), t;
}
function x(m2, o2, c$12, l2, u2, p2, j2, x2, b) {
  r$1(m2, o2, l2, p2, c$12, u2, j2, 1, 1, 1), o$1(f, x2, b, 1), c(n, m2);
  const [g, h, v] = S(f, f, u$1(n, n));
  return r$1(n, g, 0, 0, 0, h, 0, 0, 0, v), i(m2, n, m2);
}
let m = class extends S$1 {
  constructor(o2) {
    super(o2);
  }
  get bounds() {
    const o2 = this.coords;
    return null == o2?.extent ? null : o$2(o2.extent);
  }
  get coords() {
    const o2 = this.element.georeference?.coords;
    return K(o2, this.spatialReference).geometry;
  }
  get normalizedCoords() {
    return j.fromJSON(p$1(this.coords));
  }
  get normalizedBounds() {
    const o2 = null != this.normalizedCoords ? this.normalizedCoords.extent : null;
    return null != o2 ? o$2(o2) : null;
  }
};
e([y()], m.prototype, "spatialReference", void 0), e([y()], m.prototype, "element", void 0), e([y()], m.prototype, "bounds", null), e([y()], m.prototype, "coords", null), e([y()], m.prototype, "normalizedCoords", null), e([y()], m.prototype, "normalizedBounds", null), m = e([c$1("esri.layers.support.MediaElementView")], m);
export {
  j$1 as j,
  m,
  p
};
