import { kD as F, kE as En, kF as en, kG as o, bO as G, kH as s, dr as s$1, kI as Pn, ds as o$1, bZ as S$1, kJ as e, kK as T, kL as t, fF as o$2, aT as s$2, eE as e$1, b1 as D, il as _$1, aH as O$1, dx as m, aV as e$2, aX as y$1, a_ as c, im as e$3, eF as B, aW as n$1 } from "./chunk-ejFG4zJ0.js";
import { a } from "./chunk-tcpOk1v2.js";
function f(f2, p, E, c2) {
  if (null == p || null == c2)
    return false;
  const l = F(p, En), C = F(c2, en);
  if (l === C && l !== o.UNKNOWN || G(p, c2))
    return E[0] = 1, E[1] = 1, E[2] = 1, true;
  if (l === o.SPHERICAL_ECEF) {
    const t2 = s(f2), s$22 = t2 / Math.sqrt(f2[0] * f2[0] + f2[1] * f2[1]), o$12 = t2 / s$1.radius;
    if (C === o.WEB_MERCATOR)
      return E[0] = s$22 * o$12, E[1] = s$22 * o$12, E[2] = 1, true;
    if (C === o.WGS84 || C === o.CGCS2000) {
      const r = Pn;
      return E[0] = r * s$22 * o$12, E[1] = r * o$12, E[2] = 1, true;
    }
  } else if (l === o.PLATE_CARREE) {
    if (C === o.WGS84 || C === o.CGCS2000)
      return E[0] = Pn, E[1] = Pn, E[2] = 1, true;
    if (C === o.WEB_MERCATOR) {
      const r = f2[1] / s$1.radius;
      return E[0] = 1, E[1] = 1 / Math.cos(r), E[2] = 1, true;
    }
  }
  return false;
}
let x = class extends o$1.EventedMixin(S$1) {
  constructor(e$12) {
    super(e$12), this._tmpEvent = new e(), this._renderCoordsHelper = e$12.view.renderCoordsHelper, this._renderSR = this._renderCoordsHelper.spatialReference, this._layerElevationSource = e$12.layerElevationSource;
  }
  initialize() {
    this._intersector = T(this.view.state.viewingMode), this._intersector.options.store = t.MIN, this._tmpEvent.context = this.intersectionHandler.isGround ? "ground" : "scene";
  }
  get spatialReference() {
    return this.view?.elevationProvider?.spatialReference;
  }
  getElevation(e2, t2, r, n) {
    const i = this._renderCoordsHelper, s2 = o$2(R, e2, t2, r);
    if (!i.toRenderCoords(s2, n, s2))
      return s$2.getLogger(this).error("could not project point to compute elevation"), null;
    const { layerElevationSource: a2, _intersector: c2, intersectionHandler: p } = this, m2 = a2.fullExtent, u = null != m2 && Number.isFinite(m2.xmin) && Number.isFinite(m2.xmax) && Number.isFinite(m2.ymin) && Number.isFinite(m2.ymax) && Number.isFinite(m2.zmin) && Number.isFinite(m2.zmax) ? new e$1(m2.zmin, m2.zmax) : a2.elevationRange;
    if (null == u)
      return null;
    const h = a2.elevationOffset, d = u.elevationRangeMin + h, v = u.elevationRangeMax + h, g = i.setAltitude(y, v, s2), E = i.setAltitude(b, d, s2);
    return c2.reset(g, E, null), p.intersect(c2, null, g, E, null, true), c2.results.min.getIntersectionPoint(s2) ? i.getAltitude(s2) : null;
  }
  getSphereElevationBounds(e2, t2) {
    return a(e2, t2, j, this._renderSR), this._layerElevationSource.getElevationRange(j);
  }
  getRootElevationBounds() {
    const e2 = this.layerElevationSource.fullExtent;
    return e2?.hasZ ? new e$1(e2.zmin, e2.zmax) : null;
  }
  objectsChanged(e2) {
    this.spatialReference && (this._computeLayerExtent(e2, this._tmpEvent.extent), this._tmpEvent.spatialReference = this.spatialReference, this.emit("elevation-change", this._tmpEvent));
  }
  objectChanged(e2) {
    this.spatialReference && (this._computeObjectExtent(e2, this._tmpEvent.extent), this._tmpEvent.spatialReference = this.spatialReference, this.emit("elevation-change", this._tmpEvent));
  }
  _computeObjectExtent(e2, t2) {
    D(t2), this._expandExtent(e2, t2);
  }
  _computeLayerExtent(e2, t2) {
    D(t2);
    for (const r of e2)
      this._expandExtent(r, t2);
  }
  _expandExtent(e2, t2) {
    const r = this.spatialReference;
    if (null == r)
      return;
    if (null == e2)
      return;
    _$1(_, e2.quaternion), _[12] = e2.center[0], _[13] = e2.center[1], _[14] = e2.center[2];
    const o2 = e2.halfSize;
    for (let n = 0; n < 8; ++n)
      R[0] = 1 & n ? o2[0] : -o2[0], R[1] = 2 & n ? o2[1] : -o2[1], R[2] = 4 & n ? o2[2] : -o2[2], O$1(R, R, _), this._renderCoordsHelper.fromRenderCoords(R, R, r), m(t2, R, t2);
  }
};
e$2([y$1({ constructOnly: true })], x.prototype, "layerElevationSource", void 0), e$2([y$1({ constructOnly: true })], x.prototype, "intersectionHandler", void 0), e$2([y$1({ constructOnly: true })], x.prototype, "view", void 0), e$2([y$1()], x.prototype, "spatialReference", null), x = e$2([c("esri.views.3d.layers.i3s.LayerElevationProvider")], x);
const _ = e$3(), j = B(0, 0, 0, 0), R = n$1(), y = n$1(), b = n$1();
export {
  f,
  x
};
