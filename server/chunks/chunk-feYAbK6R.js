import { k_ as D, k$ as a, l0 as a$1, l1 as H, eH as r$1, l2 as h, fF as o$1, l3 as q, l4 as l, aH as O$1, aW as n$1, l5 as t$1, l6 as R, l7 as b, im as e } from "./chunk-ejFG4zJ0.js";
function r(r2, t2, i, n = false) {
  const l2 = D(r2, t2);
  return null == l2 ? null : (l2.hasZ && !n || null == i || (l2.z = a(i, l2) ?? 0), l2);
}
function t(o, e2, r2) {
  r2.warnOnce(`Failed to project analysis geometry (id: '${o.id}'), projection from spatial reference (wkid: '${e2.wkid}') to view spatial reference is not supported. Projection may be possible after calling projection.load().`);
}
class f extends a$1 {
  constructor(e2, t2) {
    super(e2), this._hasExternalMaterial = false, this._hasExternalMaterial = null != t2, this._material = null != t2 ? t2 : new H({ width: 1, color: r$1(1, 0, 1, 1), stippleOffColor: null, stipplePattern: null, stipplePreferContinuous: true, isClosed: false, falloff: 0, innerColor: null, innerWidth: 1, hasPolygonOffset: false, renderOccluded: h.OccludeAndTransparent, isDecoration: !!e2.isDecoration, writeDepth: true }), this.applyProperties(e2);
  }
  setGeometryFromRenderSpacePoint(e2, t2 = 1e3) {
    this.geometry = [[[e2[0] - t2, e2[1], e2[2]], [e2[0] + t2, e2[1], e2[2]]], [[e2[0], e2[1] - t2, e2[2]], [e2[0], e2[1] + t2, e2[2]]], [[e2[0], e2[1], e2[2] - t2], [e2[0], e2[1], e2[2] + t2]]];
  }
  setGeometryFromExtent(e2) {
    const t2 = this.view.spatialReference, s = n$1(), o = n$1(), a2 = 100, n = [];
    o$1(s, e2[0], e2[1], a2), this.view.renderCoordsHelper.toRenderCoords(s, t2, o), n.push([o[0], o[1], o[2]]), o$1(s, e2[2], e2[1], a2), this.view.renderCoordsHelper.toRenderCoords(s, t2, o), n.push([o[0], o[1], o[2]]), o$1(s, e2[2], e2[3], a2), this.view.renderCoordsHelper.toRenderCoords(s, t2, o), n.push([o[0], o[1], o[2]]), o$1(s, e2[0], e2[3], a2), this.view.renderCoordsHelper.toRenderCoords(s, t2, o), n.push([o[0], o[1], o[2]]), o$1(s, e2[0], e2[1], a2), this.view.renderCoordsHelper.toRenderCoords(s, t2, o), n.push([o[0], o[1], o[2]]), o$1(s, e2[0], e2[1], a2), this.view.renderCoordsHelper.toRenderCoords(s, t2, o), n.push([o[0], o[1], o[2]]), this.geometry = [n];
  }
  setGeometryFromFrustum(e2) {
    const t2 = [];
    e2.lines.forEach((e3) => {
      t2.push([e3.origin[0], e3.origin[1], e3.origin[2]]), t2.push([e3.endpoint[0], e3.endpoint[1], e3.endpoint[2]]);
    }), this.geometry = [t2];
  }
  setGeometryFromBoundedPlane(e2) {
    const t2 = [], r2 = e2.origin, s = e2.basis1, o = e2.basis2, a2 = 0.5, n = n$1(), l2 = n$1(), m = n$1(), p = n$1();
    n[0] = r2[0] - s[0] * a2 - o[0] * a2, n[1] = r2[1] - s[1] * a2 - o[1] * a2, n[2] = r2[2] - s[2] * a2 - o[2] * a2, l2[0] = r2[0] - s[0] * a2 + o[0] * a2, l2[1] = r2[1] - s[1] * a2 + o[1] * a2, l2[2] = r2[2] - s[2] * a2 + o[2] * a2, m[0] = r2[0] + s[0] * a2 + o[0] * a2, m[1] = r2[1] + s[1] * a2 + o[1] * a2, m[2] = r2[2] + s[2] * a2 + o[2] * a2, p[0] = r2[0] + s[0] * a2 - o[0] * a2, p[1] = r2[1] + s[1] * a2 - o[1] * a2, p[2] = r2[2] + s[2] * a2 - o[2] * a2, t2.push([n[0], n[1], n[2]]), t2.push([l2[0], l2[1], l2[2]]), t2.push([m[0], m[1], m[2]]), t2.push([p[0], p[1], p[2]]), t2.push([n[0], n[1], n[2]]), this.geometry = [t2];
  }
  setGeometryFromSegment(t2) {
    const r2 = t2.endRenderSpace;
    this.transform = q(u, r2);
    const { points: s } = t2.createRenderGeometry(r2, this.view.renderCoordsHelper);
    this.geometry = [s];
  }
  setGeometryFromSegments(t2, r2 = l) {
    this.transform = q(u, r2), this.geometry = t2.map((e2) => e2.createRenderGeometry(r2, this.view.renderCoordsHelper).points);
  }
  getTransformedGeometry() {
    return null == this._geometry ? null : this._geometry.map((e2) => e2.map((e3) => O$1(n$1(), e3, this.transform)));
  }
  get renderOccluded() {
    return this._material.parameters.renderOccluded;
  }
  set renderOccluded(e2) {
    this._material.setParameters({ renderOccluded: e2 });
  }
  get geometry() {
    return this._geometry;
  }
  set geometry(e2) {
    this._geometry = e2, this.recreateGeometry();
  }
  get width() {
    return this._material.parameters.width;
  }
  set width(e2) {
    this._material.setParameters({ width: e2 });
  }
  get color() {
    return this._material.parameters.color;
  }
  set color(e2) {
    const t2 = 1 === e2[3];
    this._material.setParameters({ color: t$1(e2), writeDepth: t2 });
  }
  get innerWidth() {
    return this._material.parameters.innerWidth;
  }
  set innerWidth(e2) {
    this._material.setParameters({ innerWidth: e2 });
  }
  get innerColor() {
    return this._material.parameters.innerColor;
  }
  set innerColor(e2) {
    this._material.setParameters({ innerColor: null != e2 ? t$1(e2) : null });
  }
  get stipplePattern() {
    return this._material.parameters.stipplePattern;
  }
  set stipplePattern(e2) {
    null != this._material && this._material.setParameters({ stipplePattern: e2 });
  }
  get stippleOffColor() {
    return this._material.parameters.stippleOffColor;
  }
  set stippleOffColor(e2) {
    this._material.setParameters({ stippleOffColor: null != e2 ? t$1(e2) : null });
  }
  get stipplePreferContinuous() {
    return this._material.parameters.stipplePreferContinuous;
  }
  set stipplePreferContinuous(e2) {
    this._material.setParameters({ stipplePreferContinuous: e2 });
  }
  get falloff() {
    return this._material.parameters.falloff;
  }
  set falloff(e2) {
    this._material.setParameters({ falloff: e2 });
  }
  get polygonOffset() {
    return this._material.parameters.hasPolygonOffset;
  }
  set polygonOffset(e2) {
    this._material.setParameters({ hasPolygonOffset: e2 });
  }
  createExternalResources() {
  }
  destroyExternalResources() {
  }
  createGeometries(e2) {
    for (const t2 of R(this.geometry)) {
      const r2 = b(this._material, t2);
      e2.addGeometry(r2);
    }
  }
  forEachExternalMaterial(e2) {
    this._hasExternalMaterial || e2(this._material);
  }
}
const u = e();
export {
  f,
  r,
  t
};
