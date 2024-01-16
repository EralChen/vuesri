import { c0 as M$1, c1 as y$1, bX as k$1, c2 as F, c3 as W$1, c4 as d$1, c5 as x$1, az as s, c6 as B, b7 as C$1 } from "./chunk-KFNcxJaF.js";
import { t } from "./chunk-H58sM9yM.js";
const c = [0, 0];
function h(s2, t2) {
  if (!t2)
    return null;
  if ("x" in t2) {
    const e = { x: 0, y: 0 };
    return [e.x, e.y] = s2(t2.x, t2.y, c), null != t2.z && (e.z = t2.z), null != t2.m && (e.m = t2.m), e;
  }
  if ("xmin" in t2) {
    const e = { xmin: 0, ymin: 0, xmax: 0, ymax: 0 };
    return [e.xmin, e.ymin] = s2(t2.xmin, t2.ymin, c), [e.xmax, e.ymax] = s2(t2.xmax, t2.ymax, c), t2.hasZ && (e.zmin = t2.zmin, e.zmax = t2.zmax, e.hasZ = true), t2.hasM && (e.mmin = t2.mmin, e.mmax = t2.mmax, e.hasM = true), e;
  }
  return "rings" in t2 ? { rings: l(t2.rings, s2), hasM: t2.hasM, hasZ: t2.hasZ } : "paths" in t2 ? { paths: l(t2.paths, s2), hasM: t2.hasM, hasZ: t2.hasZ } : "points" in t2 ? { points: f(t2.points, s2), hasM: t2.hasM, hasZ: t2.hasZ } : null;
}
function l(s2, t2) {
  const e = [];
  for (const n of s2)
    e.push(f(n, t2));
  return e;
}
function f(s2, t2) {
  const e = [];
  for (const n of s2) {
    const s3 = t2(n[0], n[1], [0, 0]);
    e.push(s3), n.length > 2 && s3.push(n[2]), n.length > 3 && s3.push(n[3]);
  }
  return e;
}
async function x(t2, n) {
  if (!t2 || !n)
    return;
  const r = Array.isArray(t2) ? t2.map((s2) => null != s2.geometry ? s2.geometry.spatialReference : null).filter(k$1) : [t2];
  await F(r.map((s2) => ({ source: s2, dest: n })));
}
const y = h.bind(null, M$1), g = h.bind(null, y$1);
function j(s$1, t$1, e, m) {
  if (!s$1)
    return s$1;
  if (e || (e = t$1, t$1 = s$1.spatialReference), !W$1(t$1) || !W$1(e) || d$1(t$1, e))
    return s$1;
  if (x$1(t$1, e)) {
    const t2 = s(e) ? y(s$1) : g(s$1);
    return t2.spatialReference = e, t2;
  }
  return B(t, [s$1], t$1, e, null, m)[0];
}
class _ {
  constructor() {
    this._jobs = [], this._timer = null, this._process = this._process.bind(this);
  }
  async push(s2, e, n, r) {
    if (!s2?.length || !e || !n || d$1(e, n))
      return s2;
    const i = { geometries: s2, inSpatialReference: e, outSpatialReference: n, geographicTransformation: r, resolve: C$1() };
    return this._jobs.push(i), this._timer ??= setTimeout(this._process, 10), i.resolve.promise;
  }
  _process() {
    this._timer = null;
    const s$1 = this._jobs.shift();
    if (!s$1)
      return;
    const { geometries: t$1, inSpatialReference: e, outSpatialReference: i, resolve: o, geographicTransformation: m } = s$1;
    x$1(e, i) ? s(i) ? o(t$1.map(y)) : o(t$1.map(g)) : o(B(t, t$1, e, i, m, null)), this._jobs.length > 0 && (this._timer = setTimeout(this._process, 10));
  }
}
const M = new _();
function b(s2, t2, e, n) {
  return M.push(s2, t2, e, n);
}
export {
  b,
  j,
  x
};
