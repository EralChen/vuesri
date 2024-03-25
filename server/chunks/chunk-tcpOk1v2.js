import { kM as ln, kN as Cn, kO as f$1, kG as o, kP as i, kQ as d, dr as s$1, aW as n$1, kR as h, fi as S, cR as t$1 } from "./chunk-ejFG4zJ0.js";
function a(e, r, t, a2) {
  if (null == r || null == a2)
    return false;
  const E2 = Cn(r, a2, p);
  if (E2.projector === f$1)
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], true;
  if (null == E2.projector)
    return false;
  const { source: m, dest: R } = E2;
  if (R.spatialReferenceId === o.WEB_MERCATOR) {
    const r2 = i[m.spatialReferenceId][o.WGS84];
    return null != r2 && (r2(e, 0, f, 0), d(f, 0, t, 0), t[3] = u(f[1], e[2], e[3], s$1.radius), true);
  }
  if (m.spatialReferenceId !== o.WGS84 && m.spatialReferenceId !== o.CGCS2000 || R.spatialReferenceId !== o.PLATE_CARREE) {
    E2.projector(e, 0, t, 0);
    const r2 = m.metersPerUnit ?? 1, o2 = R.metersPerUnit ?? 1;
    t[3] = e[3] * r2 / o2;
  } else {
    const r2 = i[m.spatialReferenceId][o.SPHERICAL_ECEF], o$1 = i[o.SPHERICAL_ECEF][o.PLATE_CARREE];
    let n = e[3];
    null != r2 && null != o$1 && (n = u(e[1], e[2], e[3], s$1.radius)), E2.projector(e, 0, t, 0), t[3] = n;
  }
  return true;
}
function u(e, r, t, o2) {
  const n = o2 + r;
  if (n < o2 / 2 || t > n)
    return Number.MAX_VALUE;
  const s2 = Math.abs(E * e) + Math.asin(t / n);
  return s2 >= Math.PI / 2 ? Number.MAX_VALUE : t / Math.cos(s2);
}
const f = n$1(), p = ln(), E = h(1);
class s {
  constructor(s2, r) {
    this._textureRep = s2, this.loadPromise = null, this._disposed = false;
    const i2 = this._textureRep.acquire(r);
    S(i2) ? (i2.then((t) => {
      this._disposed ? t$1(t) : this._textureRef = t;
    }), this.loadPromise = i2) : this._textureRef = i2;
  }
  dispose() {
    this._textureRef = t$1(this._textureRef), this._disposed = true;
  }
  get glTexture() {
    return null != this._textureRef ? this._textureRef.glTexture : null;
  }
}
export {
  a,
  s
};
