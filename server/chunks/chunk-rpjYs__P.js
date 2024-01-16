import { py as a, la as v$1, pl as d$1, eQ as n$1, oP as r, pz as r$1, nX as d$2, hw as r$2, mJ as e, pA as h, fn as F, pB as D$1, o2 as a$1, pC as t$1, nV as x$3, ew as h$1, o4 as ft, lb as b, pD as y, pE as j, pF as m$1, pG as p, pH as g, eu as e$1, ey as se, pI as A$2, eO as z$1, bJ as d$3, l6 as u$1, mD as v$2, fp as o$1, pm as l, mB as l$1, hK as r$3, mA as s, fw as n, kG as i$1, ki as e$2, kt as n$2, er as c$1, pJ as p$1, pK as Z, kw as y$1, mI as A$3, ft as p$2, o0 as a$2, pL as f, bu as u, pM as R$1, pN as u$2, pO as E$1, eL as t$2, pP as f$1, k7 as t$3, pQ as u$3, pR as e$3, ko as o$2, eP as o$3, lQ as e$4, pS as nt } from "./chunk-KFNcxJaF.js";
import { t, z } from "./chunk-NjpOSVY5.js";
import { c, x as x$4 } from "./chunk-nQSFOLog.js";
import { r as r$4 } from "./chunk-tNL5i2kK.js";
import { a as a$3 } from "./chunk-XZLuqbq5.js";
import { j as j$1 } from "./chunk-S1k8w-_l.js";
class G extends t {
  constructor(e2) {
    super(e2), this._ray = d$1(), this._isWorldDown = false, this._start = n$1(), this._end = r(1, 0, 0), this._width = 1, this._color = r$1(1, 0, 1, 1), this._polygonOffset = false, this._writeDepthEnabled = true, this._innerWidth = 0, this._innerColor = r$1(1, 1, 1, 1), this._stipplePattern = null, this._stippleOffColor = null, this._stipplePreferContinuous = true, this._falloff = 0, this._extensionType = V$1.LINE, this._laserlineStyle = null, this._laserlineEnabled = false, this._renderOccluded = d$2.OccludeAndTransparent, this._fadedExtensions = T, this._laserline = new c({ view: this.view, isDecoration: e2.isDecoration }), this.applyProperties(e2);
  }
  destroy() {
    this._laserline.destroy(), super.destroy();
  }
  createObject3DResourceFactory(e2) {
    return { view: e2, createResources: (e3) => this._createObject3DResources(e3), destroyResources: (e3) => this._destroyExternalResources(e3), recreateGeometry: (e3, t2) => this._recreateObject3DGeometry(e3, t2), cameraChanged: () => this._updateGeometry() };
  }
  createDrapedResourceFactory(e2) {
    return { view: e2, createResources: () => this._createDrapedResources(), destroyResources: (e3) => this._destroyExternalResources(e3), recreateGeometry: (e3) => this._recreateDrapedGeometry(e3) };
  }
  updateVisibility(e2) {
    super.updateVisibility(e2), this._laserline.visible = e2;
  }
  onAttachedChange() {
    this._laserline.attached = this._laserlineAttached;
  }
  setStartEndFromWorldDownAtLocation(r2) {
    this._isWorldDown = true, r$2(this._start, r2), this.view.renderCoordsHelper.worldUpAtPosition(r2, this._end), e(this._end, r2, this._end), h(this._start, this._end, this._ray), this._updateGeometry();
  }
  get start() {
    return this._start;
  }
  set start(t2) {
    this._isWorldDown = false, F(this._start, t2) || (r$2(this._start, t2), h(this._start, this._end, this._ray), this._updateGeometry());
  }
  get end() {
    return this._end;
  }
  set end(t2) {
    this._isWorldDown = false, F(this._end, t2) || (r$2(this._end, t2), h(this._start, this._end, this._ray), this._updateGeometry());
  }
  get width() {
    return this._width;
  }
  set width(e2) {
    e2 !== this._width && (this._width = e2, this._updateMaterial());
  }
  get color() {
    return this._color;
  }
  set color(e2) {
    D$1(e2, this._color) || (a$1(this._color, e2), this._updateMaterial());
  }
  get polygonOffset() {
    return this._polygonOffset;
  }
  set polygonOffset(e2) {
    e2 !== this._polygonOffset && (this._polygonOffset = e2, this._updateMaterial());
  }
  get writeDepthEnabled() {
    return this._writeDepthEnabled;
  }
  set writeDepthEnabled(e2) {
    this._writeDepthEnabled !== e2 && (this._writeDepthEnabled = e2, this._updateMaterial());
  }
  get innerWidth() {
    return this._innerWidth;
  }
  set innerWidth(e2) {
    e2 !== this._innerWidth && (this._innerWidth = e2, this._updateMaterial());
  }
  get innerColor() {
    return this._innerColor;
  }
  set innerColor(e2) {
    D$1(e2, this._innerColor) || (a$1(this._innerColor, e2), this._updateMaterial());
  }
  get stipplePattern() {
    return this._stipplePattern;
  }
  set stipplePattern(e2) {
    const t2 = null != e2 != (null != this._stipplePattern);
    this._stipplePattern = e2, t2 ? this.recreate() : this._updateMaterial();
  }
  get stippleOffColor() {
    return this._stippleOffColor;
  }
  set stippleOffColor(e2) {
    null != e2 && null != this._stippleOffColor && D$1(e2, this._stippleOffColor) || (this._stippleOffColor = null != e2 ? t$1(e2) : null, this._updateMaterial());
  }
  get stipplePreferContinuous() {
    return this._stipplePreferContinuous;
  }
  set stipplePreferContinuous(e2) {
    e2 !== this._stipplePreferContinuous && (this._stipplePreferContinuous = e2, this._updateMaterial());
  }
  get falloff() {
    return this._falloff;
  }
  set falloff(e2) {
    e2 !== this._falloff && (this._falloff = e2, this._updateMaterial());
  }
  get extensionType() {
    return this._extensionType;
  }
  set extensionType(e2) {
    e2 !== this._extensionType && (this._extensionType = e2, this.recreateGeometry());
  }
  get _laserlineAttached() {
    return this._laserlineEnabled && null != this._laserlineStyle && this.attached && !this.isDraped;
  }
  get laserlineStyle() {
    return this._laserlineStyle;
  }
  set laserlineStyle(e2) {
    this._laserlineStyle = e2, this._laserline.attached = this._laserlineAttached, null != e2 && (this._laserline.style = e2);
  }
  get laserlineEnabled() {
    return this._laserlineEnabled;
  }
  set laserlineEnabled(e2) {
    this._laserlineEnabled !== e2 && (this._laserlineEnabled = e2, this._laserline.attached = this._laserlineAttached);
  }
  get renderOccluded() {
    return this._renderOccluded;
  }
  set renderOccluded(e2) {
    e2 !== this._renderOccluded && (this._renderOccluded = e2, this._updateMaterial());
  }
  get _normalizedRenderOccluded() {
    return this.isDraped && this._renderOccluded === d$2.OccludeAndTransparentStencil ? d$2.OccludeAndTransparent : this._renderOccluded;
  }
  get fadedExtensions() {
    return this._fadedExtensions;
  }
  set fadedExtensions(e2) {
    this._fadedExtensions = e2 ?? T, this.recreateGeometry();
  }
  _updateMaterial() {
    const { materialParameters: e2 } = this;
    this.object3dResources.resources?.material.setParameters(e2), this.drapedResources.resources?.material.setParameters(e2);
  }
  get materialParameters() {
    return { width: this._width, color: this._color, stippleOffColor: this._stippleOffColor, stipplePattern: this._stipplePattern, stipplePreferContinuous: this._stipplePreferContinuous, innerWidth: this._innerWidth, innerColor: this._innerColor, falloff: this._falloff, hasPolygonOffset: this._polygonOffset, renderOccluded: this._normalizedRenderOccluded, isDecoration: this.isDecoration, writeDepth: this._writeDepthEnabled };
  }
  _createObject3DResources(e2) {
    const t2 = new x$3(this.materialParameters), r2 = new Array();
    return this._createObject3DGeometry(t2, e2, r2), { material: t2, geometries: r2, forEach: (e3) => {
      e3(t2), r2.forEach(e3);
    } };
  }
  _destroyExternalResources(e2) {
    e2.geometries = [];
  }
  _recreateObject3DGeometry(e2, t2) {
    e2.geometries.length = 0, this._createObject3DGeometry(e2.material, t2, e2.geometries);
  }
  _createObject3DGeometry(e2, t2, r2) {
    const s2 = this._createGeometry(e2);
    r2.push(s2), t2.addGeometry(s2), this._updateVerticesObject3D(t2);
  }
  _createDrapedResources() {
    const e2 = new x$3(this.materialParameters);
    return { material: e2, geometries: [this._createDrapedGeometry(e2)] };
  }
  _recreateDrapedGeometry(e2) {
    e2.geometries = [this._createDrapedGeometry(e2.material)];
  }
  _createDrapedGeometry(e2) {
    const t2 = this._createGeometry(e2);
    return this._updateVerticesDraped(t2), new h$1(t2);
  }
  _createGeometry(e2) {
    const t2 = this.extensionType === V$1.FADED, r2 = t2 ? [n$1(), n$1(), n$1(), n$1()] : [n$1(), n$1()];
    return ft(e2, r2, null, t2 ? [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0] : null);
  }
  _updateGeometry() {
    if (this.isDraped)
      this.drapedResources.recreateGeometry();
    else {
      const e2 = this.object3dResources.object;
      e2 && this._updateVerticesObject3D(e2);
    }
  }
  _updateVerticesObject3D(e2) {
    const t2 = this._lineSegment;
    this._updateVertexAttributesObject3D(e2, t2), this._laserline.intersectsLine = t2;
  }
  _updateVerticesDraped(e2) {
    this._updateVertexAttributesDraped(e2, this._lineSegment);
  }
  get _lineSegment() {
    return this._extensionType === V$1.FADED ? this._updateLineSegmentFinite(S$1) : this._updateLineSegmentInfinite(this._extensionType, S$1);
  }
  _updateLineSegmentFinite(e2) {
    return b(this._start, this._end, e2);
  }
  _updateLineSegmentInfinite(e2, t2) {
    const r2 = this.view.state.camera;
    switch (y(this._ray, P$1), e2) {
      case V$1.LINE:
        P$1.c0 = -Number.MAX_VALUE;
        break;
      case V$1.RAY:
      case V$1.GROUND_RAY: {
        const e3 = this._ray.origin, t3 = this.view.elevationProvider.getElevation(e3[0], e3[1], e3[2], this.view.renderCoordsHelper.spatialReference, "ground") ?? 0, r3 = this.view.renderCoordsHelper.getAltitude(e3);
        this._isWorldDown && r3 < t3 && j(P$1.ray.direction, P$1.ray.direction), this._extensionType === V$1.GROUND_RAY && null != t3 && (P$1.c1 = Math.abs(r3 - t3));
        break;
      }
    }
    if (!m$1(r2.frustum, P$1))
      return this._updateLineSegmentFinite(t2);
    const i = p(P$1, x$2), n2 = g(P$1, v);
    return b(i, n2, t2);
  }
  _updateVertexAttributesObject3D(e2, t2) {
    const r2 = e2.geometries[0].getMutableAttribute(e$1.POSITION)?.data;
    if (!r2)
      return;
    let s2 = 0;
    for (const i of this._lineVertices(t2))
      r2[s2++] = i[0], r2[s2++] = i[1], r2[s2++] = i[2];
    e2.geometryVertexAttributeUpdated(e2.geometries[0], e$1.POSITION);
  }
  _updateVertexAttributesDraped(e2, t2) {
    const r2 = e2.getMutableAttribute(e$1.POSITION)?.data;
    if (!r2)
      return;
    let s2 = 0;
    for (const i of this._lineVertices(t2))
      r2[s2++] = i[0], r2[s2++] = i[1], r2[s2++] = se;
    e2.invalidateBoundingInfo();
  }
  *_lineVertices(e2) {
    this.extensionType === V$1.FADED ? (yield A$2(e2, -this.fadedExtensions.start, x$2), yield A$2(e2, 0, x$2), yield A$2(e2, 1, x$2), yield A$2(e2, 1 + this.fadedExtensions.end, x$2)) : (yield A$2(e2, 0, x$2), yield A$2(e2, 1, x$2));
  }
}
const P$1 = a(), x$2 = n$1(), v = n$1(), S$1 = v$1();
var V$1;
!function(e2) {
  e2[e2.LINE = 0] = "LINE", e2[e2.RAY = 1] = "RAY", e2[e2.GROUND_RAY = 2] = "GROUND_RAY", e2[e2.FADED = 3] = "FADED";
}(V$1 || (V$1 = {}));
const M$1 = 1 / 3, T = { start: M$1, end: M$1 };
let x$1 = class x extends t {
  constructor(e2) {
    super(e2), this._location = n$1(), this._direction = r(1, 0, 0), this._width = 1, this._offset = 1, this._length = 18, this._color = r$1(1, 0, 1, 1), this._renderOccluded = d$2.OccludeAndTransparent, this.applyProperties(e2);
  }
  createObject3DResourceFactory(e2) {
    return { view: e2, createResources: (e3) => this._createObject3DResources(e3), destroyResources: (e3) => this._destroyObject3DResources(e3), recreateGeometry: (e3, t2) => this._recreateObject3DGeometry(e3, t2), cameraChanged: () => this._updateGeometry() };
  }
  createDrapedResourceFactory(e2) {
    return { view: e2, createResources: () => this._createDrapedResources(), destroyResources: (e3) => this._destroyDrapedResources(e3), recreateGeometry: (e3) => this._recreateDrapedGeometry(e3) };
  }
  get location() {
    return this._location;
  }
  set location(e2) {
    F(this._location, e2) || (r$2(this._location, e2), this._updateGeometry());
  }
  get direction() {
    return this._direction;
  }
  set direction(e2) {
    F(this._direction, e2) || (r$2(this._direction, e2), this._updateGeometry());
  }
  setDirectionFromPoints(e$12, t2) {
    z$1(this._direction, e(this._direction, t2, e$12)), this._updateGeometry();
  }
  get width() {
    return this._width;
  }
  set width(e2) {
    e2 !== this._width && (this._width = e2, this._updateMaterial());
  }
  get offset() {
    return this._offset;
  }
  set offset(e2) {
    e2 !== this._offset && (this._offset = e2, this._updateGeometry());
  }
  get length() {
    return this._length;
  }
  set length(e2) {
    e2 !== this._length && (this._length = e2, this._updateGeometry());
  }
  get color() {
    return this._color;
  }
  set color(e2) {
    D$1(e2, this._color) || (a$1(this._color, e2), this._updateMaterial());
  }
  get renderOccluded() {
    return this._renderOccluded;
  }
  set renderOccluded(e2) {
    e2 !== this._renderOccluded && (this._renderOccluded = e2, this._updateMaterial());
  }
  _createObject3DResources(e2) {
    const t2 = new x$3(this.materialParameters), r2 = new Array();
    return this._createObject3DGeometry(t2, e2, r2), { material: t2, geometries: r2, forEach: (e3) => {
      e3(t2), r2.forEach(e3);
    } };
  }
  _destroyObject3DResources(e2) {
    e2.geometries.length = 0;
  }
  _recreateObject3DGeometry(e2, t2) {
    e2.geometries.length = 0, this._createObject3DGeometry(e2.material, t2, e2.geometries);
  }
  _createObject3DGeometry(e2, t2, r2) {
    const [s2, i] = this._createGeometries(e2);
    t2.addGeometry(s2), t2.addGeometry(i), r2.push(s2), r2.push(i), this._updateVerticesObject3D(t2);
  }
  _createDrapedResources() {
    const t2 = new x$3(this.materialParameters), r2 = d$3(() => this.view.state.contentPixelRatio, () => {
      this.drapedResources.recreateGeometry();
    });
    return { material: t2, geometries: this._createDrapedGeometry(t2), pixelRatioHandle: r2 };
  }
  _destroyDrapedResources(e2) {
    e2.pixelRatioHandle.remove(), e2.geometries = [];
  }
  _recreateDrapedGeometry(e2) {
    e2.geometries = this._createDrapedGeometry(e2.material);
  }
  _createDrapedGeometry(e2) {
    const t2 = this._createGeometries(e2);
    return this._updateVerticesDraped(t2), t2.map((e3) => new h$1(e3));
  }
  _createGeometries(e2) {
    return [ft(e2, [n$1(), n$1()]), ft(e2, [n$1(), n$1()])];
  }
  _updateMaterial() {
    const { materialParameters: e2 } = this;
    this.object3dResources.resources?.material.setParameters(e2), this.drapedResources.resources?.material.setParameters(e2);
  }
  get materialParameters() {
    return { width: this._width, color: this._color, renderOccluded: this._renderOccluded, isDecoration: this.isDecoration };
  }
  _updateGeometry() {
    if (this.isDraped)
      this.drapedResources.recreateGeometry();
    else {
      const e2 = this.object3dResources.object;
      e2 && this._updateVerticesObject3D(e2);
    }
  }
  _updateVerticesObject3D(e2) {
    const t2 = this.view.state.camera;
    t2.projectToScreen(this.location, M), u$1(P, this.location, this.direction), t2.projectToScreen(P, I), v$2(I, o$1(I, I, M)), this._updateVertexAttributesObject3D(t2, e2, 0, M, I, 1), this._updateVertexAttributesObject3D(t2, e2, 1, M, I, -1);
  }
  _updateVertexAttributesObject3D(e2, r2, s2, i, o2, a2) {
    const c2 = r2.geometries[s2], n2 = c2.getMutableAttribute(e$1.POSITION)?.data;
    if (!n2)
      return;
    const { start: d2, end: h2 } = this._computeStartEnd(o2, i, a2, this.offset, this.width, this.length);
    e2.unprojectFromScreen(l(d2), P), n2[0] = P[0], n2[1] = P[1], n2[2] = P[2], e2.unprojectFromScreen(l(h2), P), n2[3] = P[0], n2[4] = P[1], n2[5] = P[2], r2.geometryVertexAttributeUpdated(c2, e$1.POSITION);
  }
  _updateVerticesDraped(e2) {
    const { view: { basemapTerrain: { overlayManager: t2 }, state: { contentPixelRatio: r2 } } } = this, { location: s2, width: i, length: o2, offset: a2 } = this, c2 = E;
    c2.spatialReference = t2.renderer.spatialReference, c2.x = s2[0], c2.y = s2[1];
    const n2 = this.view.overlayPixelSizeInMapUnits(c2) * r2, d2 = i * n2, h2 = o2 * n2, u2 = a2 * n2;
    this._updateVertexAttributesDraped(e2[0], d2, h2, u2, -1), this._updateVertexAttributesDraped(e2[1], d2, h2, u2, 1);
  }
  _updateVertexAttributesDraped(e2, t2, r2, s2, i) {
    const o2 = e2.getMutableAttribute(e$1.POSITION)?.data;
    if (!o2)
      return;
    const { location: a2, direction: c2 } = this, { start: n2, end: d2 } = this._computeStartEnd(c2, a2, i, s2, t2, r2);
    o2[0] = n2[0], o2[1] = n2[1], o2[2] = se, o2[3] = d2[0], o2[4] = d2[1], o2[5] = se, e2.invalidateBoundingInfo();
  }
  _computeStartEnd(e2, t2, r2, s$1, i, n2) {
    const d2 = l$1(V, r$3(V, e2[1] * r2, e2[0] * -r2), s$1 + i / 2), h2 = s(A$1, s(A$1, s(A$1, t2, l$1(A$1, e2, n2 / 2)), d2), d2);
    return { start: h2, end: s(S, h2, l$1(S, e2, -n2)) };
  }
};
const P = n$1(), V = n(), A$1 = n(), S = n(), M = i$1(), I = i$1(), E = e$2(0, 0, void 0, null);
class O extends r$4 {
  sortUniqueHints(e2) {
    return e2.sort((e3, n2) => (n2 instanceof n$2 ? n2.length : 0) - (e3 instanceof n$2 ? e3.length : 0));
  }
  visualizeIntersectionPoint(e2, n2) {
    const { spatialReference: t2, view: r2 } = n2, o2 = D(n2);
    return c$1(new x$4({ view: r2, primitive: "circle", geometry: p$1(e2.intersectionPoint, t2), elevationInfo: e2.isDraped ? Z : y$1, size: 20, outlineSize: 2, color: o2.intersectionPointColor, outlineColor: o2.intersectionPointOutlineColor, pixelSnappingEnabled: false, isDecoration: true, attached: true }));
  }
  visualizePoint(e2, n2) {
    const { view: t2, spatialReference: r2 } = n2, o2 = D(n2), a2 = R(e2.point, e2.domain, n2);
    return c$1(new x$4({ view: t2, primitive: "circle", geometry: p$1(a2, r2), elevationInfo: A(e2, n2), size: 20, outlineSize: 2, color: o2.pointColor, outlineColor: o2.pointOutlineColor, pixelSnappingEnabled: false, isDecoration: true, attached: true }));
  }
  visualizeLine(e2, n2) {
    const { view: t2, spatialReference: r2 } = n2, o2 = D(n2), a2 = R(e2.lineStart, e2.domain, n2), l2 = R(e2.lineEnd, e2.domain, n2);
    return c$1(this._createLineSegmentHint(e2.type, a2, l2, r2, A(e2, n2), t2, o2, e2.isDraped, e2.fadeLeft, e2.fadeRight));
  }
  visualizeParallelSign(e2, n2) {
    const { view: r2, spatialReference: o2 } = n2, a2 = D(n2), { isDraped: l2 } = e2, s2 = A(e2, n2), p2 = R(e2.lineStart, e2.domain, n2), d2 = R(e2.lineEnd, e2.domain, n2), u2 = x2(p2, o2, s2, r2, l2), g2 = x2(d2, o2, s2, r2, l2), v2 = A$3(g2, u2, g2, 0.5), E2 = new x$1({ view: r2, attached: false, offset: p$2.parallelLineHintOffset, length: p$2.parallelLineHintLength, width: p$2.parallelLineHintWidth, color: a2.parallelSignColor, location: v2, renderOccluded: l2 ? d$2.OccludeAndTransparent : d$2.Opaque, isDraped: l2, renderGroup: a$2.SnappingHint, isDecoration: true });
    return E2.setDirectionFromPoints(u2, v2), E2.attached = true, c$1(E2);
  }
  visualizeRightAngleQuad(e2, n2) {
    const { view: t2, spatialReference: r2 } = n2, o2 = D(n2), a2 = A(e2, n2), { isDraped: l2 } = e2, s2 = R(e2.previousVertex, e2.domain, n2), p2 = R(e2.centerVertex, e2.domain, n2), c2 = R(e2.nextVertex, e2.domain, n2), d2 = x2(s2, r2, a2, t2, l2), g2 = x2(p2, r2, a2, t2, l2), v2 = x2(c2, r2, a2, t2, l2);
    return c$1(new z({ view: t2, attached: true, color: l2 ? o2.rightAngleColorDraped : o2.rightAngleColor, renderOccluded: l2 ? d$2.OccludeAndTransparent : d$2.Transparent, outlineRenderOccluded: l2 ? d$2.OccludeAndTransparent : d$2.Opaque, outlineColor: o2.rightAngleOutlineColor, outlineSize: p$2.rightAngleHintOutlineSize, size: p$2.rightAngleHintSize, isDraped: l2, geometry: { previous: d2, center: g2, next: v2 }, renderGroup: a$2.SnappingHint, isDecoration: true }));
  }
  _createLineSegmentHint(e2, n2, i, t2, r2, o2, a2, l2 = false, c2 = true, d2 = true) {
    const u2 = x2(n2, t2, r2, o2, l2), g2 = x2(i, t2, r2, o2, l2), v2 = new G({ view: o2, extensionType: V$1.FADED, start: u2, end: g2, isDraped: l2, color: a2.lineColor, renderOccluded: l2 ? d$2.OccludeAndTransparent : d$2.Opaque, renderGroup: a$2.SnappingHint, isDecoration: true });
    switch (e2) {
      case f.TARGET:
        v2.width = p$2.lineHintWidthTarget, v2.fadedExtensions = { start: 0, end: p$2.lineHintFadedExtensions };
        break;
      case f.REFERENCE_EXTENSION:
        v2.width = p$2.lineHintWidthReference, v2.fadedExtensions = { start: 0, end: 0 };
        break;
      case f.REFERENCE:
        v2.width = p$2.lineHintWidthReference, v2.fadedExtensions = { start: c2 ? p$2.lineHintFadedExtensions : 0, end: d2 ? p$2.lineHintFadedExtensions : 0 };
    }
    return v2.attached = true, v2;
  }
}
function D(i) {
  const { effectiveTheme: t2 } = i.view, r2 = u.toUnitRGBA(t2.accentColor), o2 = [0, 0, 0, 0];
  return { intersectionPointColor: o2, intersectionPointOutlineColor: r2, pointColor: o2, pointOutlineColor: r2, lineColor: r2, lineOutlineColor: void 0, parallelSignColor: r2, rightAngleColor: r2, rightAngleColorDraped: u.toUnitRGBA(R$1(t2.accentColor, 0.5)), rightAngleOutlineColor: r2 };
}
function R(e2, n2, i) {
  const t2 = H(n2, i);
  return null == t2 ? e2 : u$2(e2[0], e2[1], t2);
}
function A(e2, n2) {
  return null != H(e2.domain, n2) ? n2.selfSnappingZ.elevationInfo : e2.isDraped ? Z : y$1;
}
function H(e2, { selfSnappingZ: n2 }) {
  return e2 === E$1.SELF && null != n2 ? n2.value : null;
}
function x2(e2, n2, i, t2, a2, l2 = n$1()) {
  if (a2) {
    const i2 = t2.basemapTerrain.overlayManager.renderer.spatialReference;
    t$2(e2, n2, l2, i2);
  } else
    f$1(e2, n2, i, t2, l2);
  return l2;
}
function o(o2, n2, r2, s2, i) {
  const l2 = t$3(3 * o2.length), p2 = t$3(l2.length);
  o2.forEach((t2, e2) => {
    l2[3 * e2] = t2[0], l2[3 * e2 + 1] = t2[1], l2[3 * e2 + 2] = t2.length > 2 ? t2[2] : 0;
  });
  const c2 = u$3(l2, n2, 0, p2, 0, l2, 0, l2.length / 3, r2, s2, i), m2 = null != c2;
  return { numVertices: o2.length, position: l2, mapPositions: p2, projectionSuccess: m2, sampledElevation: c2 };
}
class d extends a$3 {
  constructor(e2) {
    super(e2), this.view = null, this._renderOccluded = d$2.OccludeAndTransparent, this._vertices = null, this._spatialReference = null, this._color = e$3([1, 127 / 255, 0, 1]), this._size = 11, this._outlineColor = e$3([0, 0, 0, 0.5]), this._outlineSize = 1, this._elevationInfo = null, this.applyProperties(e2);
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
    D$1(e2, this._color) || (a$1(this._color, e2), this._updateMaterial());
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
    D$1(e2, this._outlineColor) || (a$1(this._outlineColor, e2), this._updateOutlineMaterial());
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
    const r2 = 0.5, i = 0.5, s2 = o(t2, this.spatialReference, this.view.elevationProvider, this.view.renderCoordsHelper, o$2.fromElevationInfo(this.elevationInfo)), a2 = [], n2 = s2.numVertices, c2 = s2.position;
    for (let l2 = 0; l2 < n2; ++l2) {
      const t3 = o$3(_, c2[3 * l2], c2[3 * l2 + 1], c2[3 * l2 + 2]), s3 = m(this._vertexMaterial, r2, t3), o2 = m(this._vertexOutlineMaterial, i, t3);
      a2.push({ vertexGeometry: s3, vertexOutlineGeometry: o2 });
    }
    return a2;
  }
  createGeometries(e2) {
    const t2 = this._createRenderGeometries();
    for (const { vertexGeometry: r2, vertexOutlineGeometry: i } of t2)
      e2.addGeometry(r2), e2.addGeometry(i);
  }
  createExternalResources() {
    this._vertexMaterial = new j$1({ ...this._vertexMaterialParameters, writeDepth: true, cullFace: e$4.Back, screenSizeEnabled: true }), this._vertexOutlineMaterial = new j$1({ ...this._vertexOutlineMaterialParameters, forceTransparentMode: true, writeDepth: true, cullFace: e$4.Front, screenSizeEnabled: true, shadingEnabled: false });
  }
  destroyExternalResources() {
    this._vertexMaterial = null, this._vertexOutlineMaterial = null;
  }
  forEachExternalMaterial(e2) {
    e2(this._vertexMaterial), e2(this._vertexOutlineMaterial);
  }
}
const _ = n$1();
function m(e2, t2, r2) {
  return nt(e2, t2, 16, 16, { offset: r2 });
}
export {
  G,
  O,
  V$1 as V,
  d
};
