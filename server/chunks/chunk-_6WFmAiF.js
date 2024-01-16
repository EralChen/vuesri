import { eP as o$1, hI as S, hJ as o, hK as r, hL as i$2, hM as c, hN as s, eQ as n$1, eB as e$1, bo as e$2, bs as g$1, hO as o$2, d7 as U, bq as j$1, bp as y, br as c$1 } from "./chunk-KFNcxJaF.js";
import { p as p$1 } from "./chunk-NkuZ7t90.js";
const f = n$1(), i$1 = e$1(), e = e$1(), p = e$1();
function h(t, r$1, n) {
  return o$1(f, r$1[0], r$1[1], 1), S(f, f, o(i$1, n)), 0 === f[2] ? r(t, f[0], f[1]) : r(t, f[0] / f[2], f[1] / f[2]);
}
function j(s2, n, o2) {
  return k(e, n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7]), k(p, o2[0], o2[1], o2[2], o2[3], o2[4], o2[5], o2[6], o2[7]), i$2(s2, c(e, e), p), 0 !== s2[8] && (s2[0] /= s2[8], s2[1] /= s2[8], s2[2] /= s2[8], s2[3] /= s2[8], s2[4] /= s2[8], s2[5] /= s2[8], s2[6] /= s2[8], s2[7] /= s2[8], s2[8] /= s2[8]), s2;
}
function k(o$22, c$12, u, e2, p2, h2, j2, k2, v) {
  s(o$22, c$12, e2, h2, u, p2, j2, 1, 1, 1), o$1(f, k2, v, 1), c(i$1, o$22);
  const [x, b, d] = S(f, f, o(i$1, i$1));
  return s(i$1, x, 0, 0, 0, b, 0, 0, 0, d), i$2(o$22, i$1, o$22);
}
let i = class extends g$1 {
  constructor(o2) {
    super(o2);
  }
  get bounds() {
    const o2 = this.coords;
    return null == o2?.extent ? null : o$2(o2.extent);
  }
  get coords() {
    const o2 = this.element.georeference?.coords;
    return U(o2, this.spatialReference).geometry;
  }
  get normalizedCoords() {
    return j$1.fromJSON(p$1(this.coords));
  }
  get normalizedBounds() {
    const o2 = null != this.normalizedCoords ? this.normalizedCoords.extent : null;
    return null != o2 ? o$2(o2) : null;
  }
};
e$2([y()], i.prototype, "spatialReference", void 0), e$2([y()], i.prototype, "element", void 0), e$2([y()], i.prototype, "bounds", null), e$2([y()], i.prototype, "coords", null), e$2([y()], i.prototype, "normalizedCoords", null), e$2([y()], i.prototype, "normalizedBounds", null), i = e$2([c$1("esri.layers.support.MediaElementView")], i);
export {
  h,
  i,
  j
};
