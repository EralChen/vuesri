import { ku as t, lf as u, l0 as a, l2 as h, lg as e, lh as E, li as a$1, kY as o$1, fF as o$2, lj as j, lk as e$1, aW as n$1, ll as st } from "./chunk-ejFG4zJ0.js";
function o(o2, n, r, s, i) {
  const l = t(3 * o2.length), p = t(l.length);
  o2.forEach((t2, e2) => {
    l[3 * e2] = t2[0], l[3 * e2 + 1] = t2[1], l[3 * e2 + 2] = t2.length > 2 ? t2[2] : 0;
  });
  const c = u(l, n, 0, p, 0, l, 0, l.length / 3, r, s, i), m2 = null != c;
  return { numVertices: o2.length, position: l, mapPositions: p, projectionSuccess: m2, sampledElevation: c };
}
class d extends a {
  constructor(e$12) {
    super(e$12), this.view = null, this._renderOccluded = h.OccludeAndTransparent, this._vertices = null, this._spatialReference = null, this._color = e([1, 127 / 255, 0, 1]), this._size = 11, this._outlineColor = e([0, 0, 0, 0.5]), this._outlineSize = 1, this._elevationInfo = null, this.applyProperties(e$12);
  }
  get renderOccluded() {
    return this._renderOccluded;
  }
  set renderOccluded(e2) {
    e2 !== this._renderOccluded && (this._renderOccluded = e2, this._updateMaterial(), this._updateOutlineMaterial());
  }
  get vertices() {
    return this._vertices;
  }
  set vertices(e2) {
    this._vertices = e2, this.recreateGeometry();
  }
  get spatialReference() {
    return this._spatialReference;
  }
  set spatialReference(e2) {
    this._spatialReference = e2, this.recreateGeometry();
  }
  get color() {
    return this._color;
  }
  set color(e2) {
    E(e2, this._color) || (a$1(this._color, e2), this._updateMaterial());
  }
  get size() {
    return this._size;
  }
  set size(e2) {
    e2 !== this._size && (this._size = e2, this._updateMaterial());
  }
  get outlineColor() {
    return this._outlineColor;
  }
  set outlineColor(e2) {
    E(e2, this._outlineColor) || (a$1(this._outlineColor, e2), this._updateOutlineMaterial());
  }
  get outlineSize() {
    return this._outlineSize;
  }
  set outlineSize(e2) {
    e2 !== this._outlineSize && (this._outlineSize = e2, this._updateOutlineMaterial());
  }
  get elevationInfo() {
    return this._elevationInfo;
  }
  set elevationInfo(e2) {
    this._elevationInfo = e2, this.recreateGeometry();
  }
  get _vertexMaterialParameters() {
    return { color: this._color, screenSizeScale: this.size, renderOccluded: this._renderOccluded, isDecoration: this.isDecoration };
  }
  get _vertexOutlineMaterialParameters() {
    return { color: this._outlineColor, screenSizeScale: this.size + 2 * this.outlineSize, renderOccluded: this._renderOccluded, isDecoration: this.isDecoration };
  }
  _updateMaterial() {
    this.attached && this._vertexMaterial.setParameters(this._vertexMaterialParameters);
  }
  _updateOutlineMaterial() {
    this.attached && this._vertexOutlineMaterial.setParameters(this._vertexOutlineMaterialParameters);
  }
  _createRenderGeometries() {
    const t2 = this.vertices;
    if (null == t2 || 0 === t2.length)
      return [];
    const r = 0.5, i = 0.5, s = o(t2, this.spatialReference, this.view.elevationProvider, this.view.renderCoordsHelper, o$1.fromElevationInfo(this.elevationInfo)), a2 = [], n = s.numVertices, c = s.position;
    for (let l = 0; l < n; ++l) {
      const t3 = o$2(_, c[3 * l], c[3 * l + 1], c[3 * l + 2]), s2 = m(this._vertexMaterial, r, t3), o2 = m(this._vertexOutlineMaterial, i, t3);
      a2.push({ vertexGeometry: s2, vertexOutlineGeometry: o2 });
    }
    return a2;
  }
  createGeometries(e2) {
    const t2 = this._createRenderGeometries();
    for (const { vertexGeometry: r, vertexOutlineGeometry: i } of t2)
      e2.addGeometry(r), e2.addGeometry(i);
  }
  createExternalResources() {
    this._vertexMaterial = new j({ ...this._vertexMaterialParameters, writeDepth: true, cullFace: e$1.Back, screenSizeEnabled: true }), this._vertexOutlineMaterial = new j({ ...this._vertexOutlineMaterialParameters, forceTransparentMode: true, writeDepth: true, cullFace: e$1.Front, screenSizeEnabled: true, shadingEnabled: false });
  }
  destroyExternalResources() {
    this._vertexMaterial = null, this._vertexOutlineMaterial = null;
  }
  forEachExternalMaterial(e2) {
    e2(this._vertexMaterial), e2(this._vertexOutlineMaterial);
  }
}
const _ = n$1();
function m(e2, t2, r) {
  return st(e2, t2, 16, 16, { offset: r });
}
export {
  d
};
