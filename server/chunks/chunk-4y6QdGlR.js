import { aI as r$1, aG as u$2, fB as n$1, aF as e, fE as z$1, aW as n$2, tr as n$3, lZ as w, g4 as a, dc as H$1, va as sn, l9 as i$1, gk as n$4, lb as x, vb as L, vc as d$1, uO as n$5, vd as w$1, ve as b, fD as _$2, vf as j, iy as o, qu as P$1, nQ as g$2, g2 as a$1, vg as k, vh as p$1, pa as s, vi as m$3, vj as G, vk as t, g1 as S, vl as T, aB as f$1, vm as G$1, vn as S$1, kR as h$1, vo as d$2, vp as W, lr as c$2, tj as t$1, k$ as a$2, aV as e$2, aX as y$1, a_ as c$3, bZ as S$2, ce as d$3, cf as C, g5 as p$2, g6 as w$2, ds as o$1, b1 as D, vq as f$2, cl as A$1, k_ as D$1, aT as s$1, gr as V, v6 as p$3, vr as P, vs as l, cY as x$1, mE as o$2, mF as d$4, fk as e$3, mH as o$3, mJ as o$4, vt as e$4, tm as e$5, mO as e$6, mP as o$5, mS as t$4, uy as l$1, mb as R$1, mU as r$2, mV as r$3, ux as O, mW as S$3, mX as A, mZ as l$2, m_ as o$6, m$ as E, n0 as _$3, mR as r$4, mT as t$5, n5 as e$7, n6 as A$2, n7 as i$2, nc as r$5, na as c$4, tq as t$6, nh as u$3, ug as r$6, eH as r$7, l0 as a$3, l2 as h$2, vu as r$8, lh as E$1, li as a$4, po as I$1, fj as I$2, fl as t$7, tu as E$2, tv as F, tw as G$2, tx as q, ty as R$2, im as e$8, qH as h$3, tA as f$5, bX as P$2, c8 as u$4, tB as c$5, ek as j$1, l3 as q$1, fV as c$6, er as A$3, eq as K, eo as J, em as v, tC as h$5, tD as e$9 } from "./chunk-ejFG4zJ0.js";
import { s as s$2 } from "./chunk-SJe5cJoE.js";
import { e as e$1, t as t$2 } from "./chunk-FR8esUcn.js";
import { k as k$1 } from "./chunk-cRQzjRBY.js";
import { t as t$3, f as f$3 } from "./chunk-feYAbK6R.js";
import { h as h$4 } from "./chunk-TCdzNZ_N.js";
import { f as f$4, _ as _$4, m as m$4 } from "./chunk-4Kw0cdlJ.js";
function f(t2, f2, a2, n2, p2) {
  r$1(i, t2), u$2(m$2, t2, f2), n$1(i, a2, i, p2), n$1(m$2, a2, m$2, p2), e(n2, m$2, i), z$1(n2, n2);
}
const i = n$2(), m$2 = n$2();
class H {
  get numVertices() {
    return this._length;
  }
  get hasStagedVertex() {
    return this._hasCursorPoint;
  }
  constructor(e2, t2) {
    this.validMeasurement = false, this.positionsWorldCoords = [], this.positionsRenderCoords = [], this.positionsProjectedWorldCoords = [], this.positionsFittedRenderCoords = [], this.positionsGeographic = [], this.positionsSpherical = [], this.positionsStereographic = [], this.pathSegmentLengths = [], this.geodesicPathSegmentLengths = [], this.perimeterSegmentLengths = [], this.intersectingSegments = /* @__PURE__ */ new Set(), this.geodesicIntersectingSegments = /* @__PURE__ */ new Set(), this.triangleIndices = null, this.geodesicTriangleIndices = null, this.areaCentroidWorldCoords = n$2(), this.areaCentroidRenderCoords = n$2(), this.geodesicAreaCentroidRenderCoords = n$2(), this.area = null, this.geodesicArea = null, this.pathLength = null, this.geodesicPathLength = null, this.perimeterLength = null, this._length = 0, this._centroidRenderCoords = n$2(), this._planeWorldCoords = n$3(), this._worldUp = n$2(), this._worldTangent = n$2(), this._frame = [n$2(), n$2(), n$2()], this._pathVersion = -1, this._hasCursorPoint = false, this._mode = null, this._tempU = n$2(), this._tempV = n$2(), this._tempVec3 = n$2(), this._tempSphere = w(), this._sceneView = e2, this.unitNormalizer = t2;
  }
  update(e2, t2, s2, i2, o2, r2) {
    const n2 = null != t2, h2 = this._pathVersion === e2.version, a2 = this._hasCursorPoint === n2, d2 = this._mode === o2;
    return !(h2 && !r2 && a2 && d2 && e2.isValidPolygon) && (this._pathVersion = e2.version, this._hasCursorPoint = n2, this._updateCursorSegmentLength(e2, t2), this._update(e2, t2, s2, i2, o2), true);
  }
  _update(e2, s2, i2, o2, r2) {
    const n2 = this.unitNormalizer, h2 = this._sceneView.renderSpatialReference, a$12 = this.unitNormalizer.spatialReference;
    let d2 = e2.numVertices;
    const l2 = !(null == s2 || s2.equals(e2.lastPoint) || d2 > 2 && s2.equals(e2.firstPoint));
    l2 && (d2 += 1);
    const g3 = !e2.polygonIsClosed && d2 > 2, p2 = e2.polygonIsClosed || g3;
    this._resize(d2);
    const c2 = a(i2.spatialReference), u3 = H$1(i2.spatialReference, c2) && sn(i2.spatialReference), { positionsGeographic: _2, positionsWorldCoords: f2, positionsRenderCoords: L2, positionsSpherical: j2 } = this, A2 = (e3, t2) => {
      X(i2.elevationProvider, e3), c$2(e3, f2[t2], a$12), c$2(e3, L2[t2], h2), u3 && (t$1(e3, _2[t2]), c$2(e3, j2[t2], c2), z$1(j2[t2], j2[t2]));
    };
    e2.forEachVertexPosition((e3, t2) => A2(e3, t2)), l2 && A2(s2, d2 - 1);
    const v2 = this._updatePathLengths(p2);
    if (this.pathLength = this._length > 1 ? i$1(n2.normalizeDistance(v2), "meters") : null, u3) {
      const e3 = this._updateGeodesicPathLengths(p2, a$12);
      this.geodesicPathLength = this._length > 1 ? i$1(e3, "meters") : null;
    } else
      this.geodesicPathLength = null;
    if (this._updateMode(r2), !p2)
      return this.area = null, this.geodesicArea = null, this.perimeterLength = null, this.triangleIndices = null, this.geodesicTriangleIndices = null, this.intersectingSegments.clear(), this.geodesicIntersectingSegments.clear(), void (this.validMeasurement = false);
    this._updateAreaAndPerimeterLength(i2, n2, h2, a$12, o2), u3 && this._updateGeodesicArea(i2), this.validMeasurement = true;
  }
  getData() {
    return { validMeasurement: this.validMeasurement, numVertices: this.numVertices, hasStagedVertex: this.hasStagedVertex, positionsWorldCoords: this.positionsWorldCoords, positionsRenderCoords: this.positionsRenderCoords, positionsProjectedWorldCoords: this.positionsProjectedWorldCoords, positionsFittedRenderCoords: this.positionsFittedRenderCoords, positionsGeographic: this.positionsGeographic, positionsSpherical: this.positionsSpherical, positionsStereographic: this.positionsStereographic, pathSegmentLengths: this.pathSegmentLengths, geodesicPathSegmentLengths: this.geodesicPathSegmentLengths, perimeterSegmentLengths: this.perimeterSegmentLengths, intersectingSegments: this.intersectingSegments, geodesicIntersectingSegments: this.geodesicIntersectingSegments, triangleIndices: this.triangleIndices, geodesicTriangleIndices: this.geodesicTriangleIndices, areaCentroidWorldCoords: this.areaCentroidWorldCoords, areaCentroidRenderCoords: this.areaCentroidRenderCoords, geodesicAreaCentroidRenderCoords: this.geodesicAreaCentroidRenderCoords, fittingMode: this.fittingMode, area: this.area, geodesicArea: this.geodesicArea, pathLength: this.pathLength, geodesicPathLength: this.geodesicPathLength, perimeterLength: this.perimeterLength, unitNormalizer: this.unitNormalizer, actualMeasurementMode: this.actualMeasurementMode };
  }
  _resize(e2) {
    for (e2 < this._length && (this.positionsWorldCoords.length = e2, this.positionsRenderCoords.length = e2, this.positionsProjectedWorldCoords.length = e2, this.positionsFittedRenderCoords.length = e2, this.positionsGeographic.length = e2, this.positionsSpherical.length = e2, this.positionsStereographic.length = e2, this.pathSegmentLengths.length = e2, this.geodesicPathSegmentLengths.length = e2, this.perimeterSegmentLengths.length = e2, this._length = e2); this._length < e2; )
      this.positionsWorldCoords.push(n$2()), this.positionsRenderCoords.push(n$2()), this.positionsProjectedWorldCoords.push(n$4()), this.positionsFittedRenderCoords.push(n$2()), this.positionsGeographic.push(n$2()), this.positionsSpherical.push(n$2()), this.positionsStereographic.push(n$4()), this.pathSegmentLengths.push(0), this.geodesicPathSegmentLengths.push(0), this.perimeterSegmentLengths.push(0), ++this._length;
  }
  _updatePathLengths(e2) {
    const t2 = this.positionsWorldCoords, s2 = this.pathSegmentLengths;
    let i2 = 0;
    for (let o2 = 0; o2 < this._length; ++o2) {
      const r2 = s2[o2] = x(t2[o2], t2[(o2 + 1) % this._length]);
      (o2 < this._length - 1 || e2) && (i2 += r2);
    }
    return i2;
  }
  _updateGeodesicPathLengths(e2, t2) {
    const s2 = this.positionsGeographic, i2 = this.geodesicPathSegmentLengths;
    let o2 = 0;
    for (let r2 = 0; r2 < this._length; ++r2) {
      const n2 = i2[r2] = L(s2[r2], s2[(r2 + 1) % this._length], t2 ?? void 0);
      (r2 < this._length - 1 || e2) && (o2 += n2);
    }
    return o2;
  }
  _updateAreaAndPerimeterLength(e$12, o$12, r2, n2, m3) {
    const u3 = e$12.renderCoordsHelper, _2 = this.positionsWorldCoords, f$12 = this.positionsRenderCoords, C2 = this.positionsProjectedWorldCoords, S2 = this.positionsFittedRenderCoords, L2 = this._planeWorldCoords, P2 = this._centroidRenderCoords;
    d$1(f$12, P2), u3.worldUpAtPosition(P2, this._worldUp), u3.worldBasisAtPosition(P2, n$5.X, this._worldTangent), f(P2, this._worldUp, r2, this._worldUp, n2), f(P2, this._worldTangent, r2, this._worldTangent, n2), _2.length > 2 && w$1(_2, L2), this.fittingMode = this._selectFittingMode(L2, _2, this._worldUp, m3);
    let R2 = 0;
    if ("horizontal" === this.fittingMode) {
      let e2 = -1 / 0;
      f$12.forEach((t2, s2) => {
        const i2 = u3.getAltitude(f$12[s2]);
        i2 > e2 && (e2 = i2, R2 = s2);
      });
    }
    const M = _2[R2];
    let V2 = L2, W2 = this._worldTangent;
    "horizontal" === this.fittingMode ? V2 = this._worldUp : "vertical" === this.fittingMode && (V2 = this._tempVec3, W2 = this._worldUp, b(L2, this._worldUp, V2)), r$1(this._frame[2], V2), b(W2, V2, this._frame[0]), _$2(this._frame[1], this._frame[0], this._frame[2]), j(this._frame[1], this._frame[1]);
    const I2 = this._tempVec3, z2 = this._tempU, w2 = this._tempV;
    for (let t2 = 0; t2 < this._length; ++t2) {
      const e$13 = C2[t2], s2 = S2[t2];
      e(I2, _2[t2], M), o(e$13, P$1(this._frame[0], I2), P$1(this._frame[1], I2)), g$2(z2, this._frame[0], e$13[0]), g$2(w2, this._frame[1], e$13[1]), u$2(I2, z2, w2), u$2(I2, I2, M), n$1(I2, n2, s2, r2);
    }
    this.perimeterLength = this._length > 0 ? i$1(o$12.normalizeDistance(this._updatePerimeterLengths()), "meters") : null, d$1(S2, this.areaCentroidRenderCoords), n$1(this.areaCentroidRenderCoords, r2, this.areaCentroidWorldCoords, n2), this._updateIntersectingSegments(), this.area = 0 === this.intersectingSegments.size ? a$1(o$12.normalizeArea(this._computeArea()), "square-meters") : null;
  }
  _updateGeodesicArea(e2) {
    const { renderCoordsHelper: t2, spatialReference: o$12 } = e2, { positionsSpherical: r2, positionsStereographic: n2 } = this, h2 = this._tempVec3, a$22 = k(r2, h2);
    if (!a$22)
      return void (this.geodesicArea = null);
    const d2 = this._tempU, l2 = this._tempV;
    p$1(h2, d2, l2);
    for (let s2 = 0; s2 < this._length; ++s2) {
      const e3 = P$1(r2[s2], d2), t3 = P$1(r2[s2], l2), o$13 = P$1(r2[s2], h2);
      o(n2[s2], e3 / o$13, t3 / o$13);
    }
    g$2(h2, h2, s(o$12).radius), t2.toRenderCoords(h2, a(o$12), this.geodesicAreaCentroidRenderCoords), this._updateGeodesicIntersectingSegments(), this.geodesicArea = a$22 && 0 === this.geodesicIntersectingSegments.size ? a$1(this._computeGeodesicArea(), "square-meters") : null;
  }
  _updatePerimeterLengths() {
    const e2 = this.positionsProjectedWorldCoords, t2 = this.perimeterSegmentLengths;
    let s2 = 0;
    for (let i2 = 0; i2 < this._length; ++i2) {
      s2 += t2[i2] = m$3(e2[i2], e2[(i2 + 1) % this._length]);
    }
    return s2;
  }
  _updateIntersectingSegments() {
    const e2 = this.positionsProjectedWorldCoords, t2 = this.intersectingSegments;
    t2.clear();
    for (let s2 = 0; s2 < this._length; ++s2)
      for (let i2 = s2 + 2; i2 < this._length; ++i2) {
        if ((i2 + 1) % this._length === s2)
          continue;
        const o2 = e2[s2], r2 = e2[(s2 + 1) % this._length], n2 = e2[i2], h2 = e2[(i2 + 1) % this._length];
        G(o2, r2, n2, h2) && (t2.add(s2), t2.add(i2));
      }
  }
  _computeArea() {
    const e2 = this.positionsProjectedWorldCoords, t$12 = this.triangleIndices = t(k$1(e2));
    let s2 = 0;
    for (let i2 = 0; i2 < t$12.length; i2 += 3)
      s2 += S(e2[t$12[i2]], e2[t$12[i2 + 1]], e2[t$12[i2 + 2]]);
    return s2;
  }
  _updateGeodesicIntersectingSegments() {
    const e2 = this.positionsStereographic, t2 = this.geodesicIntersectingSegments;
    t2.clear();
    for (let s2 = 0; s2 < this._length; ++s2)
      for (let i2 = s2 + 2; i2 < this._length; ++i2) {
        if ((i2 + 1) % this._length === s2)
          continue;
        const o2 = e2[s2], r2 = e2[(s2 + 1) % this._length], n2 = e2[i2], h2 = e2[(i2 + 1) % this._length];
        G(o2, r2, n2, h2) && (t2.add(s2), t2.add(i2));
      }
  }
  _computeGeodesicArea() {
    const e2 = this.positionsGeographic, t$12 = this.positionsStereographic, s2 = this.geodesicTriangleIndices = t(k$1(t$12));
    let i2 = 0;
    for (let o2 = 0; o2 < s2.length; o2 += 3)
      i2 += T(e2[s2[o2]], e2[s2[o2 + 1]], e2[s2[o2 + 2]], f$1.WGS84);
    return i2;
  }
  _selectFittingMode(t2, s2, i2, o2) {
    const r2 = s2.map((e2) => Math.abs(G$1(t2, e2))).reduce((e2, t3) => Math.max(e2, t3), 0);
    S$1(s2, this._tempSphere);
    const n2 = r2 / (2 * this._tempSphere[3]), h2 = n2 < o2.maxRelativeErrorCoplanar, a2 = n2 < o2.maxRelativeErrorAlmostCoplanar;
    let d2 = "horizontal";
    if (h2)
      d2 = "oblique";
    else if (a2) {
      d2 = Math.abs(P$1(i2, t2)) > Math.cos(h$1(o2.verticalAngleThreshold)) ? "horizontal" : "vertical";
    }
    return d2;
  }
  _updateCursorSegmentLength(e2, s2) {
    const i2 = e2.lastPoint;
    e2.isValidPolygon || null == i2 || null == s2 ? (this.geodesicStagedSegmentLength = null, this.stagedSegmentLength = null) : (this.geodesicStagedSegmentLength = i$1(d$2(i2, s2), "meters"), this.stagedSegmentLength = i$1(this.unitNormalizer.normalizeDistance(W(i2, s2, this.unitNormalizer.spatialReference)), "meters"));
  }
  _updateMode(e2) {
    if (e2 === e$1.Auto) {
      this.actualMeasurementMode = "euclidean";
      let e3 = 0;
      null != this.geodesicPathLength && (e3 += this.geodesicPathLength.value), e3 > Z && (this.actualMeasurementMode = "geodesic");
    } else
      this.actualMeasurementMode = e2 === e$1.Euclidean ? "euclidean" : "geodesic";
    null == this.geodesicPathLength && (this.actualMeasurementMode = "euclidean"), this._mode = e2;
  }
}
function X(e2, t2) {
  t2.hasZ || (t2.z = a$2(e2, t2, "ground") ?? 0);
}
const Z = 1e5;
let u$1 = class u extends S$2 {
  constructor(e2) {
    super(e2);
  }
  initialize() {
    const e2 = this.view.spatialReference, t2 = a(e2), r2 = t2 === p$2 ? w$2 : t2, o2 = !e2 || H$1(e2, r2) ? r2 : e2, u3 = new t$2(o2);
    this._measurementDataManager = new H(this.view, u3), this.addHandles([this.analysisViewData.path.on("change", () => this._update()), d$3(() => this.analysisViewData.stagedPoint, () => this._update(), C), d$3(() => this.analysisViewData.mode, () => this._update(), C)]), this._update();
  }
  _update(e2 = false) {
    const { analysisViewData: t2, view: a2 } = this, s2 = { maxRelativeErrorCoplanar: 5e-3, maxRelativeErrorAlmostCoplanar: 0.01, verticalAngleThreshold: 80 };
    this._measurementDataManager.update(t2.path, t2.stagedPoint, a2, s2, t2.mode, e2) && (t2.measurementData = this._measurementDataManager.getData());
  }
};
e$2([y$1({ constructOnly: true })], u$1.prototype, "view", void 0), e$2([y$1({ constructOnly: true })], u$1.prototype, "analysis", void 0), e$2([y$1({ constructOnly: true })], u$1.prototype, "analysisViewData", void 0), u$1 = e$2([c$3("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementController")], u$1);
let g$1 = class g extends o$1.EventedAccessor {
  constructor(e2 = {}) {
    super(e2), this._version = 0, this._internalGeometryChange = false, this._extent = D();
  }
  set areaMeasurement(e2) {
    this._set("areaMeasurement", e2), null != e2 && null != this.view && this._initialize(e2, this.view);
  }
  set view(e2) {
    this._set("view", e2), null != e2 && null != this.areaMeasurement && this._initialize(this.areaMeasurement, e2);
  }
  get constructed() {
    return null != this.areaMeasurement && null != this.view;
  }
  get version() {
    return this._version;
  }
  get isEmptyPolygon() {
    return !this.constructed || 0 === this._editGeometry.components.length;
  }
  get isValidPolygon() {
    return this.constructed && this.polygonIsClosed;
  }
  get extent() {
    if (this.constructed && this._editGeometry.components.length > 0 && this._editGeometry.components[0].vertices.length > 0) {
      const e2 = D(this._extent);
      return this.forEachVertex((t2) => {
        f$2(e2, t2.pos);
      }), e2;
    }
    return null;
  }
  get spatialReference() {
    return this.constructed ? this._editGeometry.coordinateHelper.spatialReference : null;
  }
  _initialize(e2, t2) {
    this.removeAllHandles(), this.addHandles(d$3(() => e2.geometry, () => {
      this._updateEditGeometryFromModelGeometry(e2, t2);
    }, A$1)), this._makeDirty(true);
  }
  _makeDirty(e2 = false) {
    this.notifyChange("polygonIsClosed"), this.notifyChange("isValidPolygon"), this.notifyChange("initialized"), this.notifyChange("extent"), e2 && this.notifyChange("numVertices");
  }
  _updateEditGeometryFromModelGeometry(e2, t2) {
    if (this._version++, this._internalGeometryChange)
      return;
    this.removeHandles("EditGeometry");
    let r2 = e2.geometry;
    if (null != r2) {
      const i2 = D$1(r2, t2.spatialReference);
      null == i2 && t$3(e2, r2.spatialReference, s$1.getLogger(this)), r2 = i2;
    }
    this._editGeometryOperations = null != r2 ? V.fromGeometry(r2, t2.state.viewingMode) : new V(new p$3("polygon", P(true, false, t2.spatialReference))), this._makeDirty(true), this.emit("change"), this.addHandles(this._editGeometry.on("change", (t3) => {
      this._makeDirty(null != t3.addedVertices || null != t3.removedVertices), this._internalGeometryChange = true, e2.geometry = this.numVertices > 0 ? this._editGeometry.geometry : null, this._internalGeometryChange = false;
    }), "EditGeometry");
  }
  get _editGeometry() {
    return this._editGeometryOperations.data;
  }
  get vertices() {
    const e2 = [];
    return this.forEachVertex((t2) => {
      e2.push(t2);
    }), e2;
  }
  get numVertices() {
    return this.constructed && this._editGeometry.components.length > 0 ? this._editGeometry.components[0].vertices.length : 0;
  }
  get polygonIsClosed() {
    return this._editGeometry.components.length > 0 && this._editGeometry.components[0].isClosed();
  }
  get firstPoint() {
    if (this.constructed && this._editGeometry.components.length > 0) {
      const e2 = this._editGeometry.components[0].getFirstVertex();
      if (null != e2)
        return this._editGeometry.coordinateHelper.vectorToPoint(e2.pos);
    }
    return null;
  }
  get lastPoint() {
    if (this.constructed && this._editGeometry.components.length > 0) {
      const e2 = this._editGeometry.components[0].getLastVertex();
      if (null != e2)
        return this._editGeometry.coordinateHelper.vectorToPoint(e2.pos);
    }
    return null;
  }
  getVertex(e2) {
    if (!this.constructed || 0 === this._editGeometry.components.length || 0 === this._editGeometry.components[0].vertices.length)
      return null;
    const t2 = this._editGeometry.components[0].vertices[0];
    let o2 = t2;
    do {
      if (o2.index === e2)
        return o2;
      o2 = o2.rightEdge.rightVertex;
    } while (o2 !== t2 && null != o2);
    return null;
  }
  getVertexPositionAsPoint(e2) {
    return this._editGeometry.coordinateHelper.vectorToPoint(e2.pos);
  }
  getVertexPositionAsPointFromIndex(e2) {
    return this._editGeometry.coordinateHelper.vectorToPoint(this.getVertex(e2).pos);
  }
  forEachVertex(e2) {
    this.constructed && this._editGeometry.components.length > 0 && this._editGeometry.components[0].iterateVertices(e2);
  }
  forEachVertexPosition(e2) {
    const t2 = this._editGeometry.coordinateHelper;
    this.forEachVertex((o2, r2) => {
      t2.vectorToPoint(o2.pos, _$1), e2(_$1, r2);
    });
  }
  clear() {
    null != this.areaMeasurement && (this.areaMeasurement.geometry = null);
  }
  add(e2) {
    if (!this.constructed)
      return null;
    if (0 === this._editGeometry.components.length) {
      const e3 = this.view;
      this._editGeometry.components.push(new l(e3.spatialReference, e3.state.viewingMode));
    }
    const t2 = this._editGeometryOperations.appendVertex(this._editGeometry.coordinateHelper.pointToVector(e2));
    return this.emit("change"), t2;
  }
  close() {
    if (!this.constructed || 0 === this._editGeometry.components.length)
      return null;
    const e2 = this._editGeometryOperations.closeComponent(this._editGeometry.components[0]);
    return this.emit("change"), e2;
  }
  ensureContains(e2, t2 = "") {
    let o2 = false;
    if (this._editGeometry.components.forEach((t3) => {
      t3.iterateVertices((t4) => {
        t4 === e2 && (o2 = true);
      });
    }), !o2)
      throw new Error(`vertex doesnt exist ${t2}`);
    return o2;
  }
  setVertexPosition(e2, t2) {
    if (!this.constructed)
      return null;
    const o2 = this._editGeometryOperations.setVertexPosition(e2, this._editGeometry.coordinateHelper.pointToVector(t2));
    return this.emit("change"), o2;
  }
  equals(e2) {
    if (this.numVertices !== e2.numVertices)
      return false;
    let t2 = true;
    return this.forEachVertexPosition((o2, r2) => {
      const i2 = e2.getVertexPositionAsPointFromIndex(r2);
      o2.equals(i2) || (t2 = false);
    }), !!t2;
  }
};
e$2([y$1({ value: null })], g$1.prototype, "areaMeasurement", null), e$2([y$1({ value: null })], g$1.prototype, "view", null), e$2([y$1()], g$1.prototype, "isEmptyPolygon", null), e$2([y$1()], g$1.prototype, "isValidPolygon", null), e$2([y$1()], g$1.prototype, "extent", null), e$2([y$1()], g$1.prototype, "spatialReference", null), e$2([y$1()], g$1.prototype, "numVertices", null), e$2([y$1()], g$1.prototype, "polygonIsClosed", null), g$1 = e$2([c$3("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurement3DPathHelper")], g$1);
const _$1 = new x$1();
function n(n2) {
  const c2 = new o$2(), { vertex: v2, fragment: m3 } = c2;
  return d$4(v2, n2), c2.attributes.add(e$3.POSITION, "vec3"), c2.attributes.add(e$3.UV0, "vec2"), c2.varyings.add("vUV", "vec2"), n2.multipassEnabled && c2.varyings.add("depth", "float"), v2.code.add(o$3`
    void main(void) {
      vUV = uv0;
      ${n2.multipassEnabled ? "depth = (view * vec4(position, 1.0)).z;" : ""}
      gl_Position = proj * view * vec4(position, 1.0);
    }
  `), c2.include(o$4, n2), m3.uniforms.add(new e$4("size", (e2) => e2.size)), m3.uniforms.add(new e$5("color1", (e2) => e2.color1)), m3.uniforms.add(new e$5("color2", (e2) => e2.color2)), m3.include(e$6), m3.code.add(o$3`
    void main() {
      ${n2.multipassEnabled ? "terrainDepthTest(depth);" : ""}
      vec2 uvScaled = vUV / (2.0 * size);

      vec2 uv = fract(uvScaled - 0.25);
      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
      float t = mix(abs(ab.x + ab.y), 0.5, fade);

      fragColor = mix(color2, color1, t);
      ${n2.transparencyPassType === o$5.Color ? "fragColor = premultiplyAlpha(fragColor);" : ""}
    }
  `), c2;
}
const c$1 = Object.freeze(Object.defineProperty({ __proto__: null, build: n }, Symbol.toStringTag, { value: "Module" }));
class d extends r$2 {
  initializeProgram(e2) {
    return new r$3(e2.rctx, d.shader.get().build(this.configuration), O);
  }
  _setPipelineState(e2) {
    const r2 = this.configuration, t2 = e2 === o$5.NONE, s2 = e2 === o$5.FrontFace;
    return S$3({ blending: r2.transparent ? t2 ? g2 : A(e2) : null, depthTest: { func: l$2(e2) }, depthWrite: t2 ? r2.writeDepth ? o$6 : null : E(e2), colorWrite: _$3, polygonOffset: t2 || s2 ? r2.polygonOffset ? h : null : { factor: -1, units: -25 } });
  }
  initializePipeline() {
    return this._setPipelineState(this.configuration.transparencyPassType);
  }
}
d.shader = new t$4(c$1, () => import("./chunk-v1ioN0xi.js"));
const h = { factor: 0, units: -25 }, g2 = l$1(R$1.SRC_ALPHA, R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA, R$1.ONE_MINUS_SRC_ALPHA);
class r extends t$5 {
  constructor() {
    super(...arguments), this.transparencyPassType = o$5.NONE, this.transparent = false, this.writeDepth = true, this.polygonOffset = false, this.multipassEnabled = false, this.cullAboveGround = false;
  }
}
e$2([r$4({ count: o$5.COUNT })], r.prototype, "transparencyPassType", void 0), e$2([r$4()], r.prototype, "transparent", void 0), e$2([r$4()], r.prototype, "writeDepth", void 0), e$2([r$4()], r.prototype, "polygonOffset", void 0), e$2([r$4()], r.prototype, "multipassEnabled", void 0), e$2([r$4()], r.prototype, "cullAboveGround", void 0), e$2([r$4({ constValue: false })], r.prototype, "occlusionPass", void 0);
class u2 extends e$7 {
  constructor(r$12) {
    super(r$12, new m$1()), this.produces = /* @__PURE__ */ new Map([[A$2.OPAQUE_MATERIAL, (r2) => i$2(r2) && !this.parameters.transparent], [A$2.TRANSPARENT_MATERIAL, (r2) => i$2(r2) && this.parameters.transparent && this.parameters.writeDepth], [A$2.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL, (r2) => i$2(r2) && this.parameters.transparent && !this.parameters.writeDepth]]), this._configuration = new r();
  }
  getConfiguration(r2, t2) {
    return this._configuration.transparent = this.parameters.transparent, this._configuration.writeDepth = this.parameters.writeDepth, this._configuration.polygonOffset = this.parameters.polygonOffset, this._configuration.transparencyPassType = t2.transparencyPassType, this._configuration.multipassEnabled = t2.multipassEnabled, this._configuration.cullAboveGround = t2.multipassTerrain.cullAboveGround, this._configuration;
  }
  createGLMaterial(r2) {
    return new c(r2);
  }
  createBufferWriter() {
    return new r$5(c$4);
  }
}
class c extends t$6 {
  beginSlot(r2) {
    return this.ensureTechnique(d, r2);
  }
}
let m$1 = class m extends u$3 {
  constructor() {
    super(...arguments), this.size = r$6(1, 1), this.color1 = r$7(0.75, 0.75, 0.75, 1), this.color2 = r$7(0.5, 0.5, 0.5, 1), this.transparent = false, this.writeDepth = true, this.polygonOffset = false;
  }
};
class _ extends a$3 {
  constructor(e2) {
    super(e2), this._checkerBoardMaterial = null, this._renderOccluded = h$2.OccludeAndTransparent, this._geometry = null, this._size = r$6(1, 1), this._color1 = r$7(1, 0.5, 0, 0.5), this._color2 = r$7(1, 1, 1, 0.5), this.applyProperties(e2);
  }
  get renderOccluded() {
    return this._renderOccluded;
  }
  set renderOccluded(e2) {
    e2 !== this._renderOccluded && (this._renderOccluded = e2, this._updateMaterial());
  }
  get geometry() {
    return this._geometry;
  }
  set geometry(e2) {
    this._geometry = e2, this.recreateGeometry();
  }
  get size() {
    return this._size;
  }
  set size(e2) {
    r$8(this._size, e2), this._updateMaterial();
  }
  get color1() {
    return this._color1;
  }
  set color1(e2) {
    E$1(e2, this._color1) || (a$4(this._color1, e2), this._updateMaterial());
  }
  get color2() {
    return this._color2;
  }
  set color2(e2) {
    E$1(e2, this._color2) || (a$4(this._color2, e2), this._updateMaterial());
  }
  _updateMaterial() {
    null != this._checkerBoardMaterial && this._checkerBoardMaterial.setParameters({ size: this._size, color1: this._color1, color2: this._color2, renderOccluded: this._renderOccluded });
  }
  createExternalResources() {
    this._checkerBoardMaterial = new u2({ size: this._size, color1: this._color1, color2: this._color2, transparent: true, writeDepth: false, polygonOffset: true, renderOccluded: h$2.OccludeAndTransparent, isDecoration: this.isDecoration });
  }
  destroyExternalResources() {
    this._checkerBoardMaterial = null;
  }
  forEachExternalMaterial(e2) {
    null != this._checkerBoardMaterial && e2(this._checkerBoardMaterial);
  }
  createGeometries(r2) {
    if (null == this._geometry || null == this._checkerBoardMaterial)
      return;
    const t2 = p;
    I$1(t2, this.transform);
    const s2 = this._geometry, c2 = [], a2 = n$2();
    s2.position.forEach((e$12) => {
      e(a2, e$12, t2), c2.push(a2[0], a2[1], a2[2]);
    });
    const l2 = [];
    s2.uv.forEach((e2) => {
      l2.push(e2[0], e2[1]);
    });
    const d2 = new I$2(this._checkerBoardMaterial, [[e$3.POSITION, new t$7(c2, s2.triangleIndices, 3, true)], [e$3.UV0, new t$7(l2, s2.triangleIndices, 2, true)]]);
    r2.addGeometry(d2);
  }
}
const p = n$2();
let z = class extends S$2 {
  get _parameters() {
    const { accentColor: e2, textColor: t2 } = this.view.effectiveTheme, o2 = E$2(e2), l2 = F(e2, 0.5), m3 = F(G$2(e2), 0.5), h2 = G$2(t2, q.Low);
    return { accentColor: o2, transparentAccentColor: l2, transparentContrastColor: m3, intersectingLineColor: [1, 0.2, 0, 1], textColor: t2, textBackgroundColor: R$2(h2, 0.6), textCalloutColor: R$2(h2, 0.5), pathLineWidth: 3, perimeterLineWidth: 2, projectionLineWidth: 2, projectionLineStippleSize: 5, labelDistance: 25 };
  }
  get visible() {
    return this.analysisViewData.visible;
  }
  get testData() {
    return { labels: { area: this._areaLabel, perimeterLength: this._perimeterLengthLabel } };
  }
  constructor(e2) {
    super(e2), this._path = null, this._intersectedPath = null, this._perimeter = null, this._intersectedPerimeter = null, this._projectionLines = null, this._measurementArea = null, this._areaLabel = null, this._perimeterLengthLabel = null, this._pathSegments = [], this._perimeterSegments = [], this._origin = n$2(), this._originTransform = e$8(), this.messages = null, this.viewData = R, this.areaLabel = null, this.perimeterLengthLabel = null, this.loadingMessages = true;
  }
  initialize() {
    const { analysisViewData: e2, _parameters: t2, view: i2 } = this;
    this._path = new f$3({ view: i2, attached: true, width: t2.pathLineWidth, polygonOffset: true, renderOccluded: h$2.OccludeAndTransparent, isDecoration: true }), this._intersectedPath = new f$3({ view: i2, attached: true, width: t2.pathLineWidth, polygonOffset: true, renderOccluded: h$2.OccludeAndTransparent, isDecoration: true }), this._perimeter = new f$3({ view: i2, attached: true, width: t2.perimeterLineWidth, polygonOffset: true, renderOccluded: h$2.OccludeAndTransparent, isDecoration: true }), this._intersectedPerimeter = new f$3({ view: i2, attached: true, width: t2.perimeterLineWidth, color: t2.intersectingLineColor, polygonOffset: true, renderOccluded: h$2.OccludeAndTransparent, isDecoration: true }), this._projectionLines = new f$3({ view: i2, attached: true, width: t2.projectionLineWidth, stipplePattern: h$3(t2.projectionLineStippleSize), polygonOffset: true, renderOccluded: h$2.OccludeAndTransparent, isDecoration: true }), this._measurementArea = new _({ view: i2, attached: true, isDecoration: true });
    const r2 = { attached: true, view: i2, isDecoration: true };
    this._areaLabel = new f$4({ ...r2, fontSize: I.Large }), this._perimeterLengthLabel = new f$4({ ...r2, fontSize: I.Small }), this.addHandles([d$3(() => [e2.mode, this.visible, e2.unit, e2.measurementData, e2.stagedPoint], () => this._update(), A$1), d$3(() => i2.state?.camera, () => this._updateLabels(), A$1), f$5(() => this._updateMessageBundle()), d$3(() => this._parameters, ({ accentColor: e3, transparentAccentColor: t3, transparentContrastColor: i3, textColor: r3, textBackgroundColor: s2, textCalloutColor: a2 }) => {
      const { _path: n2, _intersectedPath: o2, _perimeter: l2, _projectionLines: m3, _measurementArea: h2, _areaLabel: c2, _perimeterLengthLabel: d2 } = this;
      n2.color = e3, o2.color = e3, l2.color = e3, m3.color = e3, h2.color1 = t3, h2.color2 = i3, c2.textColor = r3, c2.backgroundColor = s2, c2.calloutColor = a2, d2.textColor = r3, d2.backgroundColor = s2, d2.calloutColor = a2;
    }, P$2)]), this._updateMessageBundle();
  }
  destroy() {
    this._measurementArea = u$4(this._measurementArea), this._path = u$4(this._path), this._intersectedPath = u$4(this._intersectedPath), this._perimeter = u$4(this._perimeter), this._intersectedPerimeter = u$4(this._intersectedPerimeter), this._areaLabel = u$4(this._areaLabel), this._perimeterLengthLabel = u$4(this._perimeterLengthLabel), this._projectionLines = u$4(this._projectionLines), this.set("view", null);
  }
  _update() {
    if (this.destroyed || !this.view.ready || !this.view.renderCoordsHelper)
      return;
    const { analysisViewData: { measurementData: e2 }, analysisViewData: t2 } = this;
    null != e2 && (this._updateViewData(e2, t2.path, t2.stagedPoint), this._updateOrigin(), this._updatePathSegments(), this._updatePerimeterSegments(), this._updateArea(), this._updateProjectionLines(), this._updateLabels());
  }
  _updateViewData(e2, t2, i2) {
    const r2 = e2.validMeasurement, s2 = "geodesic" === e2.actualMeasurementMode, a2 = s2 ? e2.geodesicArea : e2.area;
    let n2 = 1;
    if (a2) {
      const t3 = this._toPreferredAreaUnit(a2, this.analysisViewData.unit);
      n2 = c$5(Math.sqrt(t3.value) / Math.sqrt(300)), n2 *= Math.sqrt(j$1(1, t3.unit, "square-meters")), n2 /= e2.unitNormalizer.normalizeDistance(1);
    }
    const l2 = { validMeasurement: r2, numVertices: e2.numVertices, hasStagedVertex: e2.hasStagedVertex, path: t2, pathVersion: t2.version, stagedPoint: i2, measurementData: e2, mode: e2.actualMeasurementMode, positionsGeographic: e2.positionsGeographic, positionsRenderCoords: e2.positionsRenderCoords, positionsProjected: e2.positionsProjectedWorldCoords, positionsFittedRenderCoords: e2.positionsFittedRenderCoords, intersectingSegments: s2 ? e2.geodesicIntersectingSegments : e2.intersectingSegments, triangleIndices: s2 ? e2.geodesicTriangleIndices : e2.triangleIndices, fittingMode: e2.fittingMode, areaCentroid: s2 ? e2.geodesicAreaCentroidRenderCoords : e2.areaCentroidRenderCoords, pathLengthLabelSegmentIndex: r2 ? 0 : t2.numVertices - 2, perimeterLengthLabelSegmentIndex: 0, checkerSize: n2 };
    this._set("viewData", l2);
  }
  _updateOrigin() {
    const e2 = this.viewData;
    d$1(e2.positionsRenderCoords, this._origin), q$1(this._originTransform, this._origin), this._measurementArea.transform = this._originTransform, this._projectionLines.transform = this._originTransform;
  }
  _createSegments(e2) {
    const t2 = this.viewData, i2 = this.view.renderCoordsHelper.spatialReference, r2 = t2.mode, s2 = [], a2 = [], n2 = [], o2 = t2.numVertices, l2 = t2.validMeasurement ? o2 : o2 - 1;
    for (let h2 = 0; h2 < l2; ++h2) {
      const l3 = t2[e2][h2], m4 = t2[e2][(h2 + 1) % o2];
      let c2 = null;
      switch (r2) {
        case "euclidean":
          c2 = new m$4(l3, m4);
          break;
        case "geodesic":
          c2 = new _$4(l3, m4, i2);
      }
      t2.intersectingSegments.has(h2) ? n2.push(c2) : a2.push(c2), s2.push(c2);
    }
    let m3 = null;
    return t2.validMeasurement && t2.hasStagedVertex && l2 >= 2 ? m3 = s2[s2.length - 2] : t2.hasStagedVertex && l2 >= 1 && (m3 = s2[s2.length - 1]), { all: s2, nonIntersecting: a2, intersecting: n2, stagedSegment: m3 };
  }
  _updatePathSegments() {
    const { visible: e2 } = this, t2 = this._createSegments("positionsRenderCoords");
    this._path.setGeometryFromSegments(t2.nonIntersecting, this._origin), this._path.visible = e2, this._intersectedPath.setGeometryFromSegments(t2.intersecting, this._origin), this._intersectedPath.visible = e2, this._pathSegments = t2.all;
  }
  _updatePerimeterSegments() {
    const e2 = this.visible && "euclidean" === this.viewData.mode, t2 = this._createSegments("positionsFittedRenderCoords");
    this._perimeter.setGeometryFromSegments(t2.nonIntersecting, this._origin), this._perimeter.visible = e2, this._intersectedPerimeter.setGeometryFromSegments(t2.intersecting, this._origin), this._intersectedPerimeter.visible = e2, this._perimeterSegments = t2.all;
  }
  _updateArea() {
    const e2 = this.viewData;
    switch (e2.mode) {
      case "euclidean":
        this._updateAreaEuclidean(e2);
        break;
      case "geodesic":
        this._updateAreaGeodesic();
    }
  }
  _updateAreaEuclidean(e2) {
    const t2 = this.visible;
    e2.validMeasurement && 0 === e2.intersectingSegments.size && e2.triangleIndices ? (this._measurementArea.geometry = { uv: e2.positionsProjected, position: e2.positionsFittedRenderCoords, triangleIndices: e2.triangleIndices }, this._measurementArea.size = [e2.checkerSize, e2.checkerSize], this._measurementArea.visible = t2) : this._measurementArea.visible = false;
  }
  _updateAreaGeodesic() {
    this._measurementArea.visible = false;
  }
  _updateProjectionLines() {
    const e$12 = this.viewData, t2 = this.visible, i2 = e$12.mode, r2 = e$12.numVertices;
    if (r2 > 0 && e$12.validMeasurement && "euclidean" === i2) {
      const i3 = [];
      for (let t3 = 0; t3 < r2; ++t3) {
        const r3 = n$2();
        e(r3, e$12.positionsRenderCoords[t3], this._origin);
        const s2 = n$2();
        e(s2, e$12.positionsFittedRenderCoords[t3], this._origin), i3.push([r3, s2]);
      }
      this._projectionLines.geometry = i3, this._projectionLines.visible = t2;
    } else
      this._projectionLines.geometry = null, this._projectionLines.visible = false;
  }
  _updateLabels() {
    if (this.destroyed)
      return;
    const { viewData: e2 } = this, { measurementData: t2, mode: i2, path: r2 } = e2;
    if (!r2)
      return;
    const s2 = this.visible, a2 = this._formatAreaLabel(this.messages, "geodesic" === i2 ? t2.geodesicArea : t2.area, this.analysisViewData.unit);
    if (null != a2 ? (this._areaLabel.geometry = { type: "point", point: e2.areaCentroid }, this._areaLabel.text = a2, this._areaLabel.visible = e2.validMeasurement && 0 === e2.intersectingSegments.size && s2) : this._areaLabel.visible = false, this._set("areaLabel", a2), e2.validMeasurement && 0 === e2.intersectingSegments.size) {
      const i3 = "geodesic" === e2.mode, r3 = i3 ? t2.geodesicPathLength : t2.validMeasurement ? t2.perimeterLength : t2.pathLength, a3 = this._formatLengthLabel(this.messages, r3, this.analysisViewData.unit);
      this._set("perimeterLengthLabel", a3), this._perimeterLengthLabel.distance = this._parameters.labelDistance, this._perimeterLengthLabel.anchor = "top", this._perimeterLengthLabel.text = a3, this._perimeterLengthLabel.visible = true;
      let n2 = true;
      for (let s3 = 0; s3 < e2.numVertices; ++s3) {
        const r4 = (e2.perimeterLengthLabelSegmentIndex + s3) % e2.numVertices, a4 = i3 || !t2.validMeasurement ? this._pathSegments[r4] : this._perimeterSegments[r4];
        if (n2 = true, this._perimeterLengthLabel.geometry = { type: "segment", segment: a4, sampleLocation: "center" }, !this._perimeterLengthLabel.overlaps(this._areaLabel))
          break;
        n2 = false;
      }
      this._perimeterLengthLabel.visible = n2 && s2;
    } else
      this._perimeterLengthLabel.visible = false;
  }
  _toPreferredAreaUnit(e2, t2) {
    return c$6(e2, this._preferredAreaUnit(e2, t2));
  }
  _preferredAreaUnit(e2, t2) {
    switch (t2) {
      case "metric":
        return K(e2.value, e2.unit);
      case "imperial":
        return A$3(e2.value, e2.unit);
      default:
        return t2;
    }
  }
  _preferredLengthUnit(e2, t2) {
    const i2 = this._deriveLengthUnitFromAreaUnit(t2);
    switch (i2) {
      case "metric":
        return v(e2.value, e2.unit);
      case "imperial":
        return J(e2.value, e2.unit);
      default:
        return i2;
    }
  }
  _deriveLengthUnitFromAreaUnit(e2) {
    switch (e2) {
      case "metric":
      case "ares":
      case "hectares":
        return "metric";
      case "imperial":
      case "acres":
        return "imperial";
      case "square-inches":
        return "inches";
      case "square-feet":
        return "feet";
      case "square-yards":
        return "yards";
      case "square-miles":
        return "miles";
      case "square-us-feet":
        return "us-feet";
      case "square-millimeters":
        return "millimeters";
      case "square-centimeters":
        return "centimeters";
      case "square-decimeters":
        return "decimeters";
      case "square-meters":
        return "meters";
      case "square-kilometers":
        return "kilometers";
    }
    throw new Error("unhandled area unit");
  }
  _formatAreaLabel(e2, t2, i2) {
    return e2 && t2 && h$4(e2, t2, this._preferredAreaUnit(t2, i2));
  }
  _formatLengthLabel(e2, t2, i2) {
    return e2 && t2 && h$4(e2, t2, this._preferredLengthUnit(t2, i2));
  }
  _updateMessageBundle() {
    this.loadingMessages = true, h$5("esri/core/t9n/Units").then((e2) => {
      this.messages = e2, this.view && this._update();
    }).finally(() => {
      this.loadingMessages = false;
    });
  }
};
var I;
e$2([y$1()], z.prototype, "_parameters", null), e$2([y$1()], z.prototype, "view", void 0), e$2([y$1()], z.prototype, "messages", void 0), e$2([y$1()], z.prototype, "analysis", void 0), e$2([y$1()], z.prototype, "viewData", void 0), e$2([y$1()], z.prototype, "analysisViewData", void 0), e$2([y$1({ readOnly: true })], z.prototype, "areaLabel", void 0), e$2([y$1({ readOnly: true })], z.prototype, "perimeterLengthLabel", void 0), e$2([y$1()], z.prototype, "loadingMessages", void 0), e$2([y$1()], z.prototype, "visible", null), z = e$2([c$3("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementVisualization")], z), function(e2) {
  e2[e2.Small = 12] = "Small", e2[e2.Large = 16] = "Large";
}(I || (I = {}));
const R = { validMeasurement: false, numVertices: 0, hasStagedVertex: false, path: null, pathVersion: -1, stagedPoint: null, measurementData: null, mode: null, positionsGeographic: null, positionsRenderCoords: null, positionsProjected: null, positionsFittedRenderCoords: null, intersectingSegments: null, triangleIndices: null, fittingMode: null, areaCentroid: null, pathLengthLabelSegmentIndex: null, perimeterLengthLabelSegmentIndex: null, checkerSize: null };
let m2 = class extends s$2(S$2) {
  constructor(e2) {
    super(e2), this.type = "area-measurement-view-3d", this.analysis = null, this.measurementData = null, this.lastDraggedVertex = null, this.stagedPoint = null, this.mode = e$1.Auto;
  }
  initialize() {
    const { analysis: e2, view: t2 } = this;
    this.path = new g$1({ view: t2, areaMeasurement: e2 }), this.analysisVisualization = new z({ view: t2, analysis: e2, analysisViewData: this }), this.analysisController = new u$1({ view: t2, analysis: e2, analysisViewData: this });
  }
  destroy() {
    this.analysisController = u$4(this.analysisController), this.analysisVisualization = u$4(this.analysisVisualization), this.path.destroy();
  }
  get updating() {
    return !!this.analysisVisualization?.loadingMessages;
  }
  get result() {
    const { measurementData: e2 } = this;
    return null == e2 ? { area: null, mode: null, perimeter: null } : "euclidean" === e2.actualMeasurementMode ? { area: e2.area, perimeter: e2.perimeterLength, mode: "euclidean" } : { area: e2.geodesicArea, perimeter: e2.pathLength, mode: "geodesic" };
  }
  get viewData() {
    return this.analysisVisualization.viewData;
  }
  get validMeasurement() {
    return this.path.isValidPolygon;
  }
  get unit() {
    return this.analysis.unit ?? this._defaultUnit;
  }
  get testData() {
    return { visualization: this.analysisVisualization, controller: this.analysisController };
  }
};
e$2([y$1({ readOnly: true })], m2.prototype, "type", void 0), e$2([y$1({ constructOnly: true, nonNullable: true })], m2.prototype, "analysis", void 0), e$2([y$1()], m2.prototype, "updating", null), e$2([y$1()], m2.prototype, "analysisVisualization", void 0), e$2([y$1()], m2.prototype, "analysisController", void 0), e$2([y$1()], m2.prototype, "result", null), e$2([y$1()], m2.prototype, "measurementData", void 0), e$2([y$1()], m2.prototype, "viewData", null), e$2([y$1()], m2.prototype, "validMeasurement", null), e$2([y$1()], m2.prototype, "path", void 0), e$2([y$1()], m2.prototype, "lastDraggedVertex", void 0), e$2([y$1()], m2.prototype, "stagedPoint", void 0), e$2([y$1()], m2.prototype, "mode", void 0), e$2([y$1()], m2.prototype, "unit", null), e$2([y$1(e$9)], m2.prototype, "_defaultUnit", void 0), m2 = e$2([c$3("esri.views.3d.analysis.AreaMeasurementAnalysisView3D")], m2);
const y = m2;
const AreaMeasurementAnalysisView3D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: y
}, Symbol.toStringTag, { value: "Module" }));
export {
  AreaMeasurementAnalysisView3D as A,
  n
};
