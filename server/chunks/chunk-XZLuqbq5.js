import { nQ as q, nR as a$1, bJ as d$1, hy as e$1, nS as n, nT as a$2, bG as C, nU as V, nV as x$1, nW as r$1, nX as d$2, eP as o$1, lk as q$1, nY as f$1, hx as O$1, eQ as n$1, nZ as t$2, n_ as R, n$ as b } from "./chunk-KFNcxJaF.js";
function r(r2, t3, i, n2 = false) {
  const l = q(r2, t3);
  return null == l ? null : (l.hasZ && !n2 || null == i || (l.z = a$1(i, l) ?? 0), l);
}
function t(o, e, r2) {
  r2.warnOnce(`Failed to project analysis geometry (id: '${o.id}'), projection from spatial reference (wkid: '${e.wkid}') to view spatial reference is not supported. Projection may be possible after calling projection.load().`);
}
let t$1 = class t2 {
  get isDecoration() {
    return this._isDecoration;
  }
  set isDecoration(e) {
    this._isDecoration = e;
  }
  constructor(t3) {
    this._isDecoration = false, this._attached = false, this._resourcesCreated = false, this._visible = true, this.view = t3.view, this._handle = d$1(() => t3.view.ready, (e) => {
      this._resourcesCreated && (e ? this._createResources() : this._destroyResources());
    });
  }
  applyProperties(e) {
    let t3 = false;
    for (const s in e)
      s in this ? "attached" === s ? t3 = e[s] : this[s] = e[s] : console.error("Cannot set unknown property", s);
    this.attached = t3;
  }
  destroy() {
    this.attached = false, this._handle.remove();
  }
  get attached() {
    return this._attached;
  }
  set attached(e) {
    e !== this._attached && this.view._stage && (this._attached = e, this._attached && !this._resourcesCreated ? this._createResources() : !this._attached && this._resourcesCreated && this._destroyResources(), this.onAttachedChange(e));
  }
  onAttachedChange(e) {
  }
  get visible() {
    return this._visible;
  }
  set visible(e) {
    e !== this._visible && (this._visible = e, this.attached && this.updateVisibility(e));
  }
  _createResources() {
    this.createResources(), this._resourcesCreated = true, this.updateVisibility(this.visible);
  }
  _destroyResources() {
    this.destroyResources(), this._resourcesCreated = false;
  }
};
class a extends t$1 {
  constructor(e) {
    super(e), this._resources = null, this._transform = e$1();
  }
  get object() {
    return null != this._resources ? this._resources.object : null;
  }
  get transform() {
    return this._transform;
  }
  set transform(s) {
    n(this._transform, s), null != this._resources && (this._resources.object.transformation = this._transform);
  }
  recreate() {
    this.attached && this.createResources();
  }
  recreateGeometry() {
    if (null == this._resources)
      return;
    const e = this._resources.object, s = this.view._stage;
    s.removeMany(e.geometries), e.removeAllGeometries(), this.createGeometries(e), e.visible = this.visible, s.addMany(e.geometries);
  }
  createResources() {
    this.destroyResources();
    const e = this.view._stage;
    if (!e)
      return;
    const s = new a$2(e, { pickable: false, updatePolicy: C.SYNC }), r2 = new V({ castShadow: false });
    r2.transformation = this._transform, this.createExternalResources(), this.createGeometries(r2), e.addMany(r2.geometries), this.forEachExternalMaterial((s2) => e.add(s2)), e.add(r2), s.add(r2), r2.visible = this.visible, this._resources = { layer: s, object: r2 };
  }
  destroyResources() {
    const e = this.view._stage;
    null != this._resources && e && (e.remove(this._resources.object), this._resources.layer.destroy(), this.forEachExternalMaterial((s) => {
      e.remove(s);
    }), e.removeMany(this._resources.object.geometries), this._resources.object.dispose(), this.destroyExternalResources(), this._resources = null);
  }
  updateVisibility(e) {
    null != this._resources && (this._resources.object.visible = e);
  }
}
class u extends a {
  constructor(e, t3) {
    super(e), this._hasExternalMaterial = false, this._hasExternalMaterial = null != t3, this._material = null != t3 ? t3 : new x$1({ width: 1, color: r$1(1, 0, 1, 1), stippleOffColor: null, stipplePattern: null, stipplePreferContinuous: true, isClosed: false, falloff: 0, innerColor: null, innerWidth: 1, hasPolygonOffset: false, renderOccluded: d$2.OccludeAndTransparent, isDecoration: !!e.isDecoration, writeDepth: true }), this.applyProperties(e);
  }
  setGeometryFromRenderSpacePoint(e, t3 = 1e3) {
    this.geometry = [[[e[0] - t3, e[1], e[2]], [e[0] + t3, e[1], e[2]]], [[e[0], e[1] - t3, e[2]], [e[0], e[1] + t3, e[2]]], [[e[0], e[1], e[2] - t3], [e[0], e[1], e[2] + t3]]];
  }
  setGeometryFromExtent(e) {
    const t3 = this.view.spatialReference, s = n$1(), o = n$1(), a2 = 100, n2 = [];
    o$1(s, e[0], e[1], a2), this.view.renderCoordsHelper.toRenderCoords(s, t3, o), n2.push([o[0], o[1], o[2]]), o$1(s, e[2], e[1], a2), this.view.renderCoordsHelper.toRenderCoords(s, t3, o), n2.push([o[0], o[1], o[2]]), o$1(s, e[2], e[3], a2), this.view.renderCoordsHelper.toRenderCoords(s, t3, o), n2.push([o[0], o[1], o[2]]), o$1(s, e[0], e[3], a2), this.view.renderCoordsHelper.toRenderCoords(s, t3, o), n2.push([o[0], o[1], o[2]]), o$1(s, e[0], e[1], a2), this.view.renderCoordsHelper.toRenderCoords(s, t3, o), n2.push([o[0], o[1], o[2]]), o$1(s, e[0], e[1], a2), this.view.renderCoordsHelper.toRenderCoords(s, t3, o), n2.push([o[0], o[1], o[2]]), this.geometry = [n2];
  }
  setGeometryFromFrustum(e) {
    const t3 = [];
    e.lines.forEach((e2) => {
      t3.push([e2.origin[0], e2.origin[1], e2.origin[2]]), t3.push([e2.endpoint[0], e2.endpoint[1], e2.endpoint[2]]);
    }), this.geometry = [t3];
  }
  setGeometryFromBoundedPlane(e) {
    const t3 = [], r2 = e.origin, s = e.basis1, o = e.basis2, a2 = 0.5, n2 = n$1(), l = n$1(), m = n$1(), p = n$1();
    n2[0] = r2[0] - s[0] * a2 - o[0] * a2, n2[1] = r2[1] - s[1] * a2 - o[1] * a2, n2[2] = r2[2] - s[2] * a2 - o[2] * a2, l[0] = r2[0] - s[0] * a2 + o[0] * a2, l[1] = r2[1] - s[1] * a2 + o[1] * a2, l[2] = r2[2] - s[2] * a2 + o[2] * a2, m[0] = r2[0] + s[0] * a2 + o[0] * a2, m[1] = r2[1] + s[1] * a2 + o[1] * a2, m[2] = r2[2] + s[2] * a2 + o[2] * a2, p[0] = r2[0] + s[0] * a2 - o[0] * a2, p[1] = r2[1] + s[1] * a2 - o[1] * a2, p[2] = r2[2] + s[2] * a2 - o[2] * a2, t3.push([n2[0], n2[1], n2[2]]), t3.push([l[0], l[1], l[2]]), t3.push([m[0], m[1], m[2]]), t3.push([p[0], p[1], p[2]]), t3.push([n2[0], n2[1], n2[2]]), this.geometry = [t3];
  }
  setGeometryFromSegment(t3) {
    const r2 = t3.endRenderSpace;
    this.transform = q$1(f, r2);
    const { points: s } = t3.createRenderGeometry(r2, this.view.renderCoordsHelper);
    this.geometry = [s];
  }
  setGeometryFromSegments(t3, r2 = f$1) {
    this.transform = q$1(f, r2), this.geometry = t3.map((e) => e.createRenderGeometry(r2, this.view.renderCoordsHelper).points);
  }
  getTransformedGeometry() {
    return null == this._geometry ? null : this._geometry.map((e) => e.map((e2) => O$1(n$1(), e2, this.transform)));
  }
  get renderOccluded() {
    return this._material.parameters.renderOccluded;
  }
  set renderOccluded(e) {
    this._material.setParameters({ renderOccluded: e });
  }
  get geometry() {
    return this._geometry;
  }
  set geometry(e) {
    this._geometry = e, this.recreateGeometry();
  }
  get width() {
    return this._material.parameters.width;
  }
  set width(e) {
    this._material.setParameters({ width: e });
  }
  get color() {
    return this._material.parameters.color;
  }
  set color(e) {
    const t3 = 1 === e[3];
    this._material.setParameters({ color: t$2(e), writeDepth: t3 });
  }
  get innerWidth() {
    return this._material.parameters.innerWidth;
  }
  set innerWidth(e) {
    this._material.setParameters({ innerWidth: e });
  }
  get innerColor() {
    return this._material.parameters.innerColor;
  }
  set innerColor(e) {
    this._material.setParameters({ innerColor: null != e ? t$2(e) : null });
  }
  get stipplePattern() {
    return this._material.parameters.stipplePattern;
  }
  set stipplePattern(e) {
    null != this._material && this._material.setParameters({ stipplePattern: e });
  }
  get stippleOffColor() {
    return this._material.parameters.stippleOffColor;
  }
  set stippleOffColor(e) {
    this._material.setParameters({ stippleOffColor: null != e ? t$2(e) : null });
  }
  get stipplePreferContinuous() {
    return this._material.parameters.stipplePreferContinuous;
  }
  set stipplePreferContinuous(e) {
    this._material.setParameters({ stipplePreferContinuous: e });
  }
  get falloff() {
    return this._material.parameters.falloff;
  }
  set falloff(e) {
    this._material.setParameters({ falloff: e });
  }
  get polygonOffset() {
    return this._material.parameters.hasPolygonOffset;
  }
  set polygonOffset(e) {
    this._material.setParameters({ hasPolygonOffset: e });
  }
  createExternalResources() {
  }
  destroyExternalResources() {
  }
  createGeometries(e) {
    for (const t3 of R(this.geometry)) {
      const r2 = b(this._material, t3);
      e.addGeometry(r2);
    }
  }
  forEachExternalMaterial(e) {
    this._hasExternalMaterial || e(this._material);
  }
}
const f = e$1();
export {
  a,
  t as b,
  r,
  t$1 as t,
  u
};
