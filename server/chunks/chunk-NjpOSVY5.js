import { bC as s, bF as e, bG as C, o0 as a, bo as e$1, bp as y, br as c$1, bs as g$1, ep as E, o1 as e$2, nT as a$1, nU as V, bJ as d$1, bn as P$1, eQ as n$1, nX as d$2, nW as r, o2 as a$2, fi as x$1, eO as z$1, mJ as e$3, hw as r$1, o3 as f, nV as x$2, fn as F, nY as f$1, ew as h, o4 as ft, l6 as u$1, mK as c$2, lk as q$1, o5 as f$2, ey as se, et as I, eu as e$4, ev as t$2, hy as e$5, ki as e$6 } from "./chunk-KFNcxJaF.js";
import { t as t$1 } from "./chunk-XZLuqbq5.js";
class n {
  constructor(e2) {
    this._resourceFactory = e2, this._resources = null, this._visible = true, this._attached = false, this._renderGroup = a.Outline;
  }
  destroy() {
    this._destroyResources();
  }
  get resources() {
    return null != this._resources ? this._resources.external : null;
  }
  get visible() {
    return this._visible;
  }
  set visible(e2) {
    e2 !== this._visible && (this._visible = e2, this._syncGeometriesToRenderer());
  }
  get attached() {
    return this._attached;
  }
  set attached(e2) {
    e2 !== this._attached && (this._attached = e2, this._createOrDestroyResources());
  }
  get renderGroup() {
    return this._renderGroup;
  }
  set renderGroup(e2) {
    this._renderGroup = e2;
    const r2 = this._resources?.layerView;
    r2 && (r2.renderGroup = e2);
  }
  recreate() {
    this.attached && this._createResources();
  }
  recreateGeometry() {
    this._resourceFactory.recreateGeometry ? null != this._resources && (this._ensureRenderGeometriesRemoved(), this._resourceFactory.recreateGeometry(this._resources.external), this._syncGeometriesToRenderer()) : this.recreate();
  }
  _createOrDestroyResources() {
    this._attached ? null == this._resources && this._createResources() : this._destroyResources();
  }
  _createResources() {
    this._destroyResources();
    const e2 = this._resourceFactory.createResources(), r2 = new d({ view: this._resourceFactory.view, renderGroup: this._renderGroup }), s2 = this._resourceFactory.view.basemapTerrain?.overlayManager;
    this._resources = { layerView: new d({ view: this._resourceFactory.view, renderGroup: this._renderGroup }), external: e2, geometriesAdded: false }, s2 && (this._resources.drapeSourceRenderer = s2.registerGeometryDrapeSource(r2)), this._syncGeometriesToRenderer();
  }
  _destroyResources() {
    if (null == this._resources)
      return;
    this._ensureRenderGeometriesRemoved();
    const e2 = this._resourceFactory.view.basemapTerrain?.overlayManager;
    e2 && e2.unregisterDrapeSource(this._resources.layerView), this._resourceFactory.destroyResources(this._resources.external), this._resources = null;
  }
  _syncGeometriesToRenderer() {
    this._visible ? this._ensureRenderGeometriesAdded() : this._ensureRenderGeometriesRemoved();
  }
  _ensureRenderGeometriesRemoved() {
    if (null == this._resources?.drapeSourceRenderer)
      return;
    if (!this._resources.geometriesAdded)
      return;
    this._resources.drapeSourceRenderer.removeGeometries(this._resources.external.geometries, E.UPDATE), this._resources.geometriesAdded = false;
  }
  _ensureRenderGeometriesAdded() {
    if (null == this._resources?.drapeSourceRenderer)
      return;
    if (this._resources.geometriesAdded)
      return;
    this._resources.drapeSourceRenderer.addGeometries(this._resources.external.geometries, E.UPDATE), this._resources.geometriesAdded = true;
  }
}
let d = class extends s(g$1) {
  constructor(e$12) {
    super(e$12), this.drapeSourceType = e.Features, this.updatePolicy = C.SYNC, this.renderGroup = a.Outline;
  }
};
e$1([y({ constructOnly: true })], d.prototype, "view", void 0), e$1([y({ readOnly: true })], d.prototype, "drapeSourceType", void 0), e$1([y()], d.prototype, "renderGroup", void 0), d = e$1([c$1("DrapedVisualElementLayerView")], d);
class c {
  constructor(e2) {
    this._resourceFactory = e2, this._resources = null, this._visible = true, this._attached = false;
  }
  destroy() {
    this._destroyResources();
  }
  get object() {
    return null != this._resources ? this._resources.object : null;
  }
  get resources() {
    return null != this._resources ? this._resources.external : null;
  }
  get visible() {
    return this._visible;
  }
  set visible(e2) {
    e2 !== this._visible && (this._visible = e2, this._syncVisible());
  }
  get attached() {
    return this._attached;
  }
  set attached(e2) {
    e2 !== this._attached && (this._attached = e2, this._createOrDestroyResources());
  }
  recreate() {
    this.attached && this._createResources();
  }
  recreateGeometry() {
    if (!this._resourceFactory.recreateGeometry)
      return void this.recreate();
    const e2 = this._resourceFactory.view._stage;
    if (null == this._resources || !e2)
      return;
    const s2 = this._resources.object;
    this._resources.external.forEach((s3) => {
      s3.type !== e$2.Mesh && s3.type !== e$2.Line && s3.type !== e$2.Point || e2.remove(s3);
    }), s2.removeAllGeometries(), this._resourceFactory.recreateGeometry(this._resources.external, s2, this._resources.layer), this._resources.external.forEach((s3) => {
      s3.type !== e$2.Mesh && s3.type !== e$2.Line && s3.type !== e$2.Point || e2.add(s3);
    });
  }
  _createOrDestroyResources() {
    this._attached ? this._resources || this._createResources() : this._destroyResources();
  }
  _createResources() {
    this._destroyResources();
    const c2 = this._resourceFactory, a2 = c2.view, h2 = a2._stage;
    if (!h2)
      return;
    const u = new a$1(h2, { pickable: false, updatePolicy: C.SYNC }), l = new V({ castShadow: false }), n2 = c2.createResources(l, u);
    n2.forEach((e2) => {
      h2.add(e2), e2.type === e$2.Texture && e2.load(h2.renderView.renderingContext);
    }), h2.add(l), u.add(l);
    const _ = c2.cameraChanged, y2 = _ ? d$1(() => a2.state.camera, (e2) => _(e2), P$1) : null;
    this._resources = { layer: u, object: l, external: n2, cameraHandle: y2 }, this._syncVisible();
  }
  _destroyResources() {
    if (null == this._resources)
      return;
    const e2 = this._resourceFactory.view._stage;
    e2 && (e2.remove(this._resources.object), this._resources.layer.destroy(), this._resources.external.forEach((s2) => {
      e2.remove(s2), s2.type === e$2.Texture && s2.unload();
    })), this._resources.object.dispose(), this._resources.cameraHandle?.remove(), this._resourceFactory.destroyResources(this._resources.external), this._resources = null;
  }
  _syncVisible() {
    null != this._resources && (this._resources.object.visible = this._visible);
  }
}
class t extends t$1 {
  constructor(s2) {
    super(s2), this._isDraped = false, this.object3dResources = new c(this.createObject3DResourceFactory(s2.view)), this.drapedResources = new n(this.createDrapedResourceFactory(s2.view)), this.isDraped = s2.isDraped ?? false;
  }
  get isDraped() {
    return this._isDraped;
  }
  set isDraped(e2) {
    e2 !== this._isDraped && (this._isDraped = e2, this.object3dResources.attached = this.attached && !e2, this.drapedResources.attached = this.attached && e2);
  }
  get renderGroup() {
    return this.drapedResources.renderGroup;
  }
  set renderGroup(e2) {
    this.drapedResources.renderGroup = e2;
  }
  createResources() {
    this.object3dResources.attached = !this._isDraped, this.drapedResources.attached = this._isDraped;
  }
  destroyResources() {
    this.object3dResources.attached = false, this.drapedResources.attached = false;
  }
  recreate() {
    this.object3dResources.recreate(), this.drapedResources.recreate();
  }
  recreateGeometry() {
    this.object3dResources.recreateGeometry(), this.drapedResources.recreateGeometry();
  }
  destroy() {
    this.object3dResources.destroy(), this.drapedResources.destroy(), super.destroy();
  }
  updateVisibility(e2) {
    this.object3dResources.visible = e2, this.drapedResources.visible = e2;
  }
}
class z extends t {
  constructor(e2) {
    super(e2), this._maxSize = 0, this._position = n$1(), this._up = n$1(), this._right = n$1(), this._renderOccluded = d$2.OccludeAndTransparent, this._color = r(1, 0, 0, 1), this._outlineColor = r(0, 0, 0, 1), this._outlineSize = 0, this._size = 32, this._outlineRenderOccluded = d$2.Opaque, this.applyProperties(e2);
  }
  createObject3DResourceFactory(e2) {
    return { view: e2, createResources: (e3) => this._createObject3DResources(e3), destroyResources: () => {
    }, cameraChanged: () => this._updateTransformObject3D() };
  }
  createDrapedResourceFactory(e2) {
    return { view: e2, createResources: () => this._createDrapedResources(), destroyResources: (e3) => this._destroyDrapedResources(e3) };
  }
  get renderOccluded() {
    return this._renderOccluded;
  }
  set renderOccluded(e2) {
    e2 !== this._renderOccluded && (this._renderOccluded = e2, this._updateQuadMaterial());
  }
  get color() {
    return this._color;
  }
  set color(e2) {
    a$2(this._color, e2), this._updateQuadMaterial();
  }
  get outlineColor() {
    return this._outlineColor;
  }
  set outlineColor(e2) {
    a$2(this._outlineColor, e2), this._updateOutlineMaterial();
  }
  get outlineSize() {
    return this._outlineSize;
  }
  set outlineSize(e2) {
    const t2 = 0 === this._outlineSize != (0 === e2);
    this._outlineSize = e2, t2 ? this.recreateGeometry() : this._updateOutlineMaterial();
  }
  get size() {
    return this._size;
  }
  set size(e2) {
    e2 !== this._size && (this._size = e2, this._updateTransform());
  }
  get outlineRenderOccluded() {
    return this._outlineRenderOccluded;
  }
  set outlineRenderOccluded(e2) {
    this._outlineRenderOccluded = e2, this._updateOutlineMaterial();
  }
  set geometry({ previous: e2, center: t2, next: r2 }) {
    this._maxSize = Math.min(x$1(t2, e2), x$1(t2, r2)) / 3, z$1(this._up, e$3(this._up, e2, t2)), z$1(this._right, e$3(this._right, r2, t2)), r$1(this._position, t2), this.recreateGeometry();
  }
  _createObject3DResources(e2) {
    const t2 = new f(this._quadMaterialParameters), r2 = 0 === this._outlineSize ? void 0 : new x$2(this._outlineMaterialParameters);
    return this._createObject3DGeometries(e2, t2, r2), { quadMaterial: t2, outlineMaterial: r2, forEach: (e3) => {
      e3(t2), r2 && e3(r2);
    } };
  }
  _createObject3DGeometries(e2, t2, r2) {
    if (F(this._up, f$1) && F(this._right, f$1))
      return;
    const i = this._createGeometries(t2, r2);
    for (const s2 of i)
      e2.addGeometry(s2);
    this._updateTransformObject3D(e2);
  }
  _createDrapedResources() {
    const t2 = new f(this._quadMaterialParameters), r2 = 0 === this._outlineSize ? void 0 : new x$2(this._outlineMaterialParameters), i = this._createGeometries(t2, r2).map((e2) => new h(e2));
    this._setTransformDraped(i);
    return { quadMaterial: t2, outlineMaterial: r2, geometries: i, pixelRatioHandle: d$1(() => this.view.state.contentPixelRatio, () => {
      this.drapedResources.recreateGeometry();
    }) };
  }
  _destroyDrapedResources(e2) {
    e2.pixelRatioHandle.remove(), e2.geometries = [];
  }
  _createGeometries(e2, t2) {
    const { up: r2, right: i, corner: s2 } = this._getVertices(), a2 = this._quadGeometryData(r2, i, s2, e2);
    if (!t2)
      return [a2];
    return [a2, ft(t2, [r2, s2, i])];
  }
  _getVertices() {
    let e2 = this._up, t2 = this._right;
    const r2 = u$1(c$2.get(), e2, t2);
    return this.isDraped && (e2 = r$1(c$2.get(), e2), t2 = r$1(c$2.get(), t2), e2[2] = 0, t2[2] = 0, r2[2] = 0), { up: e2, right: t2, corner: r2 };
  }
  _updateTransform() {
    this.isDraped ? this.drapedResources.recreateGeometry() : this._updateTransformObject3D();
  }
  _updateTransformObject3D(e2 = this.object3dResources.object) {
    if (!e2)
      return;
    const i = this.view.state.camera, s2 = this._size * i.computeScreenPixelSizeAt(this._position), a2 = Math.min(this._maxSize, s2);
    q$1(P, this._position), f$2(P, P, [a2, a2, a2]), e2.transformation = P;
  }
  _setTransformDraped(e2) {
    if (0 === e2.length)
      return;
    const { view: { basemapTerrain: { overlayManager: i }, state: { contentPixelRatio: s2 } } } = this, { _position: a2, _size: o } = this, c2 = r$1(c$2.get(), a2);
    c2[2] = se;
    const u = v;
    u.spatialReference = i.renderer.spatialReference, u.x = c2[0], u.y = c2[1];
    const l = o * (this.view.overlayPixelSizeInMapUnits(u) * s2), d2 = Math.min(this._maxSize, l);
    q$1(P, c2), f$2(P, P, [d2, d2, 1]);
    for (const t2 of e2)
      t2.transformation = P;
  }
  _quadGeometryData(e2, t2, r2, i) {
    return new I(i, [[e$4.POSITION, new t$2([0, 0, 0, ...t2, ...e2, ...r2], [0, 1, 2, 1, 2, 3], 3, true)]]);
  }
  get _quadMaterialParameters() {
    return { color: this._color, forceTransparentMode: true, writeDepth: false, polygonOffset: true, renderOccluded: this._renderOccluded, isDecoration: this.isDecoration };
  }
  _updateQuadMaterial() {
    this.object3dResources.resources?.quadMaterial.setParameters(this._quadMaterialParameters), this.drapedResources.resources?.quadMaterial.setParameters(this._quadMaterialParameters);
  }
  get _outlineMaterialParameters() {
    return { color: this._outlineColor, width: this._outlineSize, renderOccluded: this._outlineRenderOccluded, isDecoration: this.isDecoration };
  }
  _updateOutlineMaterial() {
    this.object3dResources.resources?.outlineMaterial?.setParameters(this._outlineMaterialParameters), this.drapedResources.resources?.outlineMaterial?.setParameters(this._outlineMaterialParameters);
  }
}
const P = e$5(), v = e$6(0, 0, void 0, null);
export {
  t,
  z
};
