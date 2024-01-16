import { hw as r$1, l6 as u$1, eL as t, mJ as e, eO as z$1, eQ as n$2, bq as j, cZ as f$2, eP as o$1, mL as g$2, rS as p$1, w2 as U, pv as P$1, kF as e$1, fi as x$1, su as t$1, sv as b$1, w3 as o, eN as _$2, sw as R, s4 as n$3, fd as c$2, cP as D, w4 as on, fw as n$4, ua as n$5, w5 as l$1, pE as j$1, hK as r$2, w6 as q$2, nH as R$1, w7 as m$2, io as G$2, w8 as t$3, fb as S$1, rZ as M$1, nR as a, bo as e$3, bp as y$1, br as c$3, bs as g$3, bJ as d$2, bK as C$1, fe as f$3, ff as a$1, bb as s$1, d1 as o$2, ar as D$1, w9 as f$4, bR as A, nQ as q$3, cy as x$2, lC as o$3, lD as d$3, eu as e$4, lF as o$4, lH as o$5, uy as e$5, s0 as e$6, lM as e$7, lN as o$6, lR as t$6, t_ as l$4, hW as R$2, lT as r$3, lU as r$4, sx as E, lV as S$2, lW as A$1, lY as l$5, lZ as o$7, l_ as E$1, l$ as _$3, lP as r$5, lS as t$7, m4 as e$8, lK as o$8, m6 as A$2, m9 as r$6, m7 as c$4, s9 as t$8, me as u$2, sL as r$7, nW as r$8, nX as d$4, wa as a$3, pB as D$2, o2 as a$4, wb as I$1, et as I$2, ev as t$9, sz as E$2, sA as F, sB as G$3, sC as q$4, pM as R$3, hy as e$9, q6 as h$2, sD as f$5, bn as P$2, bD as u$4, sE as f$6, jX as j$2, lk as q$5, k2 as G$4, k1 as A$3, j$ as T$1, jZ as v$1, sF as f$8 } from "./chunk-KFNcxJaF.js";
import { b as t$2, e as e$2, t as t$4, a as e$a } from "./chunk-GOfyfiUn.js";
import { s } from "./chunk-FIgfswJd.js";
import { i, l as l$2, f as f$7 } from "./chunk-KXkDk_IW.js";
import { geodesicArea as k$1 } from "./chunk-WuibsuuF.js";
import { U as U$1 } from "./chunk-J84yWr0C.js";
import { b as t$5, a as a$2, u as u$3 } from "./chunk-XZLuqbq5.js";
import { V, p as p$2, w as w$1, l as l$3 } from "./chunk-ntY6_aOQ.js";
import { h as h$3 } from "./chunk-Jwrw72Py.js";
import { g as g$4, _ as _$4, m as m$3 } from "./chunk-di5vFT30.js";
function f$1(t$12, f2, a2, p2, i2) {
  r$1(m$1, t$12), u$1(n$1, t$12, f2), t(m$1, a2, m$1, i2), t(n$1, a2, n$1, i2), e(p2, n$1, m$1), z$1(p2, p2);
}
const m$1 = n$2(), n$1 = n$2();
function b(n2, i2) {
  const s2 = i2.center;
  o$1(s2, 0, 0, 0);
  for (let t2 = 0; t2 < n2.length; ++t2)
    u$1(s2, s2, n2[t2]);
  g$2(s2, s2, 1 / n2.length);
  let f2 = 0;
  for (let t2 = 0; t2 < n2.length; ++t2)
    f2 = Math.max(f2, p$1(s2, n2[t2]));
  i2.radius = Math.sqrt(f2);
}
function d$1(t2, e2) {
  if (t2.length < 3)
    throw new Error("need at least 3 points to fit a plane");
  U(t2[0], t2[1], t2[2], e2);
}
function w(t2, e2) {
  return P$1(t2, e2) + t2[3];
}
function L(t2, e2, r2) {
  return e$1(t2, k, r2) && e$1(e2, q$1, r2) ? x$1(k, q$1) : 0;
}
function S(t2, e2) {
  if (!t$1(t2, k) || !t$1(e2, q$1))
    return 0;
  const r2 = new R();
  return b$1(r2, [k[0], k[1]], [q$1[0], q$1[1]]), r2.distance;
}
function T(t2, e2, r2) {
  const o2 = new R();
  return b$1(o2, [t2[0], t2[1]], [e2[0], e2[1]], r2), o2.distance;
}
function G$1(t2, e2, r2, o$12) {
  const n2 = x;
  return o(t2, o$12, k) && o(e2, o$12, q$1) && o(r2, o$12, v) ? (n2.setPoint(0, 0, k), n2.setPoint(0, 1, q$1), n2.setPoint(0, 2, v), Math.abs(k$1(n2, "square-meters"))) : 0;
}
function M(r2, o2 = null, i2 = true) {
  const c2 = 1e-6, m2 = (t2, e2) => {
    if (0 === e2[0] && 0 === e2[1] && 0 === e2[2])
      return false;
    for (let r3 = 0; r3 < t2.length; ++r3)
      if (P$1(e2, t2[r3]) < -c2)
        return false;
    return true;
  };
  if (0 === r2.length)
    return false;
  if (1 === r2.length)
    return o2 && r$1(o2, r2[0]), true;
  o$1(C, 0, 0, 0);
  for (let t2 = 0; t2 < r2.length; ++t2)
    u$1(C, C, r2[t2]);
  if (z$1(C, C), m2(r2, C))
    return o2 && r$1(o2, C), true;
  if (!i2)
    return false;
  for (let t2 = 0; t2 < r2.length; ++t2)
    for (let e2 = 0; e2 < r2.length; ++e2)
      if (t2 !== e2 && (_$2(C, r2[t2], r2[e2]), z$1(C, C), m2(r2, C)))
        return o2 && r$1(o2, C), true;
  return false;
}
const k = n$2(), q$1 = n$2(), v = n$2(), x = new j({ rings: [[k, q$1, v]], spatialReference: f$2.WGS84 }), C = n$2();
class B {
  get numVertices() {
    return this._length;
  }
  get hasStagedVertex() {
    return this._hasCursorPoint;
  }
  constructor(e2, t2) {
    this.validMeasurement = false, this.positionsWorldCoords = [], this.positionsRenderCoords = [], this.positionsProjectedWorldCoords = [], this.positionsFittedRenderCoords = [], this.positionsGeographic = [], this.positionsSpherical = [], this.positionsStereographic = [], this.pathSegmentLengths = [], this.geodesicPathSegmentLengths = [], this.perimeterSegmentLengths = [], this.intersectingSegments = /* @__PURE__ */ new Set(), this.geodesicIntersectingSegments = /* @__PURE__ */ new Set(), this.triangleIndices = null, this.geodesicTriangleIndices = null, this.areaCentroidWorldCoords = n$2(), this.areaCentroidRenderCoords = n$2(), this.geodesicAreaCentroidRenderCoords = n$2(), this.area = null, this.geodesicArea = null, this.pathLength = null, this.geodesicPathLength = null, this.perimeterLength = null, this._length = 0, this._centroidRenderCoords = n$2(), this._planeWorldCoords = n$3(), this._worldUp = n$2(), this._worldTangent = n$2(), this._frame = [n$2(), n$2(), n$2()], this._pathVersion = -1, this._hasCursorPoint = false, this._mode = null, this._tempU = n$2(), this._tempV = n$2(), this._tempVec3 = n$2(), this._tempSphere = { center: n$2(), radius: 0 }, this._sceneView = e2, this.unitNormalizer = t2;
  }
  update(e2, t2, s2, i2, o2, r2) {
    const n2 = null != t2, h2 = this._pathVersion === e2.version, a2 = this._hasCursorPoint === n2, d2 = this._mode === o2;
    return !(h2 && !r2 && a2 && d2 && e2.isValidPolygon) && (this._pathVersion = e2.version, this._hasCursorPoint = n2, this._updateCursorSegmentLength(e2, t2), this._update(e2, t2, s2, i2, o2), true);
  }
  _update(e2, s2, i$1, o2, r2) {
    const n2 = this.unitNormalizer, h2 = this._sceneView.renderSpatialReference, a2 = this.unitNormalizer.spatialReference;
    let d2 = e2.numVertices;
    const l2 = !(null == s2 || s2.equals(e2.lastPoint) || d2 > 2 && s2.equals(e2.firstPoint));
    l2 && (d2 += 1);
    const g2 = !e2.polygonIsClosed && d2 > 2, p2 = e2.polygonIsClosed || g2;
    this._resize(d2);
    const c2 = c$2(i$1.spatialReference), u2 = D(i$1.spatialReference, c2) && on(i$1.spatialReference), { positionsGeographic: _2, positionsWorldCoords: f2, positionsRenderCoords: L2, positionsSpherical: j2 } = this, A2 = (e3, t2) => {
      H(i$1.elevationProvider, e3), e$1(e3, f2[t2], a2), e$1(e3, L2[t2], h2), u2 && (t$1(e3, _2[t2]), e$1(e3, j2[t2], c2), z$1(j2[t2], j2[t2]));
    };
    e2.forEachVertexPosition((e3, t2) => A2(e3, t2)), l2 && A2(s2, d2 - 1);
    const v2 = this._updatePathLengths(p2);
    if (this.pathLength = this._length > 1 ? i(n2.normalizeDistance(v2), "meters") : null, u2) {
      const e3 = this._updateGeodesicPathLengths(p2, a2);
      this.geodesicPathLength = this._length > 1 ? i(e3, "meters") : null;
    } else
      this.geodesicPathLength = null;
    if (this._updateMode(r2), !p2)
      return this.area = null, this.geodesicArea = null, this.perimeterLength = null, this.triangleIndices = null, this.geodesicTriangleIndices = null, this.intersectingSegments.clear(), this.geodesicIntersectingSegments.clear(), void (this.validMeasurement = false);
    this._updateAreaAndPerimeterLength(i$1, n2, h2, a2, o2), u2 && this._updateGeodesicArea(i$1), this.validMeasurement = true;
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
      const r2 = s2[o2] = x$1(t2[o2], t2[(o2 + 1) % this._length]);
      (o2 < this._length - 1 || e2) && (i2 += r2);
    }
    return i2;
  }
  _updateGeodesicPathLengths(e2, t2) {
    const s2 = this.positionsGeographic, i2 = this.geodesicPathSegmentLengths;
    let o2 = 0;
    for (let r2 = 0; r2 < this._length; ++r2) {
      const n2 = i2[r2] = T(s2[r2], s2[(r2 + 1) % this._length], t2 ?? void 0);
      (r2 < this._length - 1 || e2) && (o2 += n2);
    }
    return o2;
  }
  _updateAreaAndPerimeterLength(e$12, o2, r2, n2, m2) {
    const u2 = e$12.renderCoordsHelper, _2 = this.positionsWorldCoords, f2 = this.positionsRenderCoords, C2 = this.positionsProjectedWorldCoords, S2 = this.positionsFittedRenderCoords, L2 = this._planeWorldCoords, P = this._centroidRenderCoords;
    t$2(f2, P), u2.worldUpAtPosition(P, this._worldUp), u2.worldBasisAtPosition(P, n$5.X, this._worldTangent), f$1(P, this._worldUp, r2, this._worldUp, n2), f$1(P, this._worldTangent, r2, this._worldTangent, n2), _2.length > 2 && d$1(_2, L2), this.fittingMode = this._selectFittingMode(L2, _2, this._worldUp, m2);
    let R2 = 0;
    if ("horizontal" === this.fittingMode) {
      let e2 = -1 / 0;
      f2.forEach((t2, s2) => {
        const i2 = u2.getAltitude(f2[s2]);
        i2 > e2 && (e2 = i2, R2 = s2);
      });
    }
    const M2 = _2[R2];
    let V2 = L2, W = this._worldTangent;
    "horizontal" === this.fittingMode ? V2 = this._worldUp : "vertical" === this.fittingMode && (V2 = this._tempVec3, W = this._worldUp, l$1(L2, this._worldUp, V2)), r$1(this._frame[2], V2), l$1(W, V2, this._frame[0]), _$2(this._frame[1], this._frame[0], this._frame[2]), j$1(this._frame[1], this._frame[1]);
    const I2 = this._tempVec3, w2 = this._tempU, z2 = this._tempV;
    for (let t$12 = 0; t$12 < this._length; ++t$12) {
      const e$13 = C2[t$12], s2 = S2[t$12];
      e(I2, _2[t$12], M2), r$2(e$13, P$1(this._frame[0], I2), P$1(this._frame[1], I2)), g$2(w2, this._frame[0], e$13[0]), g$2(z2, this._frame[1], e$13[1]), u$1(I2, w2, z2), u$1(I2, I2, M2), t(I2, n2, s2, r2);
    }
    this.perimeterLength = this._length > 0 ? i(o2.normalizeDistance(this._updatePerimeterLengths()), "meters") : null, t$2(S2, this.areaCentroidRenderCoords), t(this.areaCentroidRenderCoords, r2, this.areaCentroidWorldCoords, n2), this._updateIntersectingSegments(), this.area = 0 === this.intersectingSegments.size ? l$2(o2.normalizeArea(this._computeArea()), "square-meters") : null;
  }
  _updateGeodesicArea(e2) {
    const { renderCoordsHelper: t2, spatialReference: o2 } = e2, { positionsSpherical: r2, positionsStereographic: n2 } = this, h2 = this._tempVec3, a2 = M(r2, h2);
    if (!a2)
      return void (this.geodesicArea = null);
    const d2 = this._tempU, l2 = this._tempV;
    q$2(h2, d2, l2);
    for (let s2 = 0; s2 < this._length; ++s2) {
      const e3 = P$1(r2[s2], d2), t3 = P$1(r2[s2], l2), o3 = P$1(r2[s2], h2);
      r$2(n2[s2], e3 / o3, t3 / o3);
    }
    g$2(h2, h2, R$1(o2).radius), t2.toRenderCoords(h2, c$2(o2), this.geodesicAreaCentroidRenderCoords), this._updateGeodesicIntersectingSegments(), this.geodesicArea = a2 && 0 === this.geodesicIntersectingSegments.size ? l$2(this._computeGeodesicArea(), "square-meters") : null;
  }
  _updatePerimeterLengths() {
    const e2 = this.positionsProjectedWorldCoords, t2 = this.perimeterSegmentLengths;
    let s2 = 0;
    for (let i2 = 0; i2 < this._length; ++i2) {
      s2 += t2[i2] = m$2(e2[i2], e2[(i2 + 1) % this._length]);
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
        G$2(o2, r2, n2, h2) && (t2.add(s2), t2.add(i2));
      }
  }
  _computeArea() {
    const e2 = this.positionsProjectedWorldCoords, t2 = this.triangleIndices = t$3(U$1(e2));
    let s2 = 0;
    for (let i2 = 0; i2 < t2.length; i2 += 3)
      s2 += S$1(e2[t2[i2]], e2[t2[i2 + 1]], e2[t2[i2 + 2]]);
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
        G$2(o2, r2, n2, h2) && (t2.add(s2), t2.add(i2));
      }
  }
  _computeGeodesicArea() {
    const e2 = this.positionsGeographic, t2 = this.positionsStereographic, s2 = this.geodesicTriangleIndices = t$3(U$1(t2));
    let i2 = 0;
    for (let o2 = 0; o2 < s2.length; o2 += 3)
      i2 += G$1(e2[s2[o2]], e2[s2[o2 + 1]], e2[s2[o2 + 2]], f$2.WGS84);
    return i2;
  }
  _selectFittingMode(t2, s2, i2, o2) {
    const r2 = s2.map((e2) => Math.abs(w(t2, e2))).reduce((e2, t3) => Math.max(e2, t3), 0);
    b(s2, this._tempSphere);
    const n2 = r2 / (2 * this._tempSphere.radius), h2 = n2 < o2.maxRelativeErrorCoplanar, a2 = n2 < o2.maxRelativeErrorAlmostCoplanar;
    let d2 = "horizontal";
    if (h2)
      d2 = "oblique";
    else if (a2) {
      d2 = Math.abs(P$1(i2, t2)) > Math.cos(M$1(o2.verticalAngleThreshold)) ? "horizontal" : "vertical";
    }
    return d2;
  }
  _updateCursorSegmentLength(e2, s2) {
    const i$1 = e2.lastPoint;
    e2.isValidPolygon || null == i$1 || null == s2 ? (this.geodesicStagedSegmentLength = null, this.stagedSegmentLength = null) : (this.geodesicStagedSegmentLength = i(S(i$1, s2), "meters"), this.stagedSegmentLength = i(this.unitNormalizer.normalizeDistance(L(i$1, s2, this.unitNormalizer.spatialReference)), "meters"));
  }
  _updateMode(e2) {
    if (e2 === e$2.Auto) {
      this.actualMeasurementMode = "euclidean";
      let e3 = 0;
      null != this.geodesicPathLength && (e3 += this.geodesicPathLength.value), e3 > X && (this.actualMeasurementMode = "geodesic");
    } else
      this.actualMeasurementMode = e2 === e$2.Euclidean ? "euclidean" : "geodesic";
    null == this.geodesicPathLength && (this.actualMeasurementMode = "euclidean"), this._mode = e2;
  }
}
function H(e2, t2) {
  t2.hasZ || (t2.z = a(e2, t2, "ground") ?? 0);
}
const X = 1e5;
let u = class extends g$3 {
  constructor(e2) {
    super(e2);
  }
  initialize() {
    const e2 = this.view.spatialReference, t2 = c$2(e2), r2 = t2 === f$3 ? a$1 : t2, o2 = !e2 || D(e2, r2) ? r2 : e2, u2 = new t$4(o2);
    this._measurementDataManager = new B(this.view, u2), this.addHandles([this.analysisViewData.path.on("change", () => this._update()), d$2(() => this.analysisViewData.stagedPoint, () => this._update(), C$1), d$2(() => this.analysisViewData.mode, () => this._update(), C$1)]), this._update();
  }
  _update(e2 = false) {
    const { analysisViewData: t2, view: a2 } = this, s2 = { maxRelativeErrorCoplanar: 5e-3, maxRelativeErrorAlmostCoplanar: 0.01, verticalAngleThreshold: 80 };
    this._measurementDataManager.update(t2.path, t2.stagedPoint, a2, s2, t2.mode, e2) && (t2.measurementData = this._measurementDataManager.getData());
  }
};
e$3([y$1({ constructOnly: true })], u.prototype, "view", void 0), e$3([y$1({ constructOnly: true })], u.prototype, "analysis", void 0), e$3([y$1({ constructOnly: true })], u.prototype, "analysisViewData", void 0), u = e$3([c$3("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementController")], u);
const g$1 = "esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurement3DPathHelper", _$1 = s$1.getLogger(g$1);
let G = class extends o$2.EventedAccessor {
  constructor(e2 = {}) {
    super(e2), this._version = 0, this._internalGeometryChange = false, this._extent = D$1();
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
      const e2 = D$1(this._extent);
      return this.forEachVertex((t2) => {
        f$4(e2, t2.pos);
      }), e2;
    }
    return null;
  }
  get spatialReference() {
    return this.constructed ? this._editGeometry.coordinateHelper.spatialReference : null;
  }
  _initialize(e2, t2) {
    this.removeAllHandles(), this.addHandles(d$2(() => e2.geometry, () => {
      this._updateEditGeometryFromModelGeometry(e2, t2);
    }, A)), this._makeDirty(true);
  }
  _makeDirty(e2 = false) {
    this.notifyChange("polygonIsClosed"), this.notifyChange("isValidPolygon"), this.notifyChange("initialized"), this.notifyChange("extent"), e2 && this.notifyChange("numVertices");
  }
  _updateEditGeometryFromModelGeometry(e2, t2) {
    if (this._version++, this._internalGeometryChange)
      return;
    this.removeHandles("EditGeometry");
    let o2 = e2.geometry;
    if (null != o2) {
      const r2 = q$3(o2, t2.spatialReference);
      null == r2 && t$5(e2, o2.spatialReference, _$1), o2 = r2;
    }
    this._editGeometryOperations = null != o2 ? V.fromGeometry(o2, t2.state.viewingMode) : new V(new p$2("polygon", w$1(true, false, t2.spatialReference))), this._makeDirty(true), this.emit("change"), this.addHandles(this._editGeometry.on("change", (t3) => {
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
      t2.vectorToPoint(o2.pos, f), e2(f, r2);
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
      this._editGeometry.components.push(new l$3(e3.spatialReference, e3.state.viewingMode));
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
e$3([y$1({ value: null })], G.prototype, "areaMeasurement", null), e$3([y$1({ value: null })], G.prototype, "view", null), e$3([y$1()], G.prototype, "isEmptyPolygon", null), e$3([y$1()], G.prototype, "isValidPolygon", null), e$3([y$1()], G.prototype, "extent", null), e$3([y$1()], G.prototype, "spatialReference", null), e$3([y$1()], G.prototype, "numVertices", null), e$3([y$1()], G.prototype, "polygonIsClosed", null), G = e$3([c$3(g$1)], G);
const f = new x$2();
function n(n2) {
  const c2 = new o$3(), { vertex: v2, fragment: m2 } = c2;
  return d$3(v2, n2), c2.attributes.add(e$4.POSITION, "vec3"), c2.attributes.add(e$4.UV0, "vec2"), c2.varyings.add("vUV", "vec2"), n2.multipassEnabled && c2.varyings.add("depth", "float"), v2.code.add(o$4`
    void main(void) {
      vUV = uv0;
      ${n2.multipassEnabled ? "depth = (view * vec4(position, 1.0)).z;" : ""}
      gl_Position = proj * view * vec4(position, 1.0);
    }
  `), c2.include(o$5, n2), m2.uniforms.add(new e$5("size", (e2) => e2.size)), m2.uniforms.add(new e$6("color1", (e2) => e2.color1)), m2.uniforms.add(new e$6("color2", (e2) => e2.color2)), m2.include(e$7), m2.code.add(o$4`
    void main() {
      ${n2.multipassEnabled ? "terrainDepthTest(depth);" : ""}
      vec2 uvScaled = vUV / (2.0 * size);

      vec2 uv = fract(uvScaled - 0.25);
      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
      float t = mix(abs(ab.x + ab.y), 0.5, fade);

      fragColor = mix(color2, color1, t);
      ${n2.transparencyPassType === o$6.Color ? "fragColor = premultiplyAlpha(fragColor);" : ""}
    }
  `), c2;
}
const c$1 = Object.freeze(Object.defineProperty({ __proto__: null, build: n }, Symbol.toStringTag, { value: "Module" }));
class d extends r$3 {
  initializeProgram(e2) {
    return new r$4(e2.rctx, d.shader.get().build(this.configuration), E);
  }
  _setPipelineState(e2) {
    const r2 = this.configuration, t2 = e2 === o$6.NONE, s2 = e2 === o$6.FrontFace;
    return S$2({ blending: r2.transparent ? t2 ? g : A$1(e2) : null, depthTest: { func: l$5(e2) }, depthWrite: t2 ? r2.writeDepth ? o$7 : null : E$1(e2), colorWrite: _$3, polygonOffset: t2 || s2 ? r2.polygonOffset ? h$1 : null : { factor: -1, units: -25 } });
  }
  initializePipeline() {
    return this._setPipelineState(this.configuration.transparencyPassType);
  }
}
d.shader = new t$6(c$1, () => import("./chunk-obfKZUkw.js"));
const h$1 = { factor: 0, units: -25 }, g = l$4(R$2.SRC_ALPHA, R$2.ONE, R$2.ONE_MINUS_SRC_ALPHA, R$2.ONE_MINUS_SRC_ALPHA);
class r extends t$7 {
  constructor() {
    super(...arguments), this.transparencyPassType = o$6.NONE, this.transparent = false, this.writeDepth = true, this.polygonOffset = false, this.multipassEnabled = false, this.cullAboveGround = false;
  }
}
e$3([r$5({ count: o$6.COUNT })], r.prototype, "transparencyPassType", void 0), e$3([r$5()], r.prototype, "transparent", void 0), e$3([r$5()], r.prototype, "writeDepth", void 0), e$3([r$5()], r.prototype, "polygonOffset", void 0), e$3([r$5()], r.prototype, "multipassEnabled", void 0), e$3([r$5()], r.prototype, "cullAboveGround", void 0), e$3([r$5({ constValue: false })], r.prototype, "occlusionPass", void 0);
class h extends e$8 {
  constructor(r$12) {
    super(r$12, new l()), this._configuration = new r();
  }
  getConfiguration(r2, t2) {
    return this._configuration.transparent = this.parameters.transparent, this._configuration.writeDepth = this.parameters.writeDepth, this._configuration.polygonOffset = this.parameters.polygonOffset, this._configuration.transparencyPassType = t2.transparencyPassType, this._configuration.multipassEnabled = t2.multipassEnabled, this._configuration.cullAboveGround = t2.multipassTerrain.cullAboveGround, this._configuration;
  }
  produces(r2, t2) {
    if (t2 === o$8.Color || t2 === o$8.Alpha) {
      return r2 === (this.parameters.transparent ? this.parameters.writeDepth ? A$2.TRANSPARENT_MATERIAL : A$2.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL : A$2.OPAQUE_MATERIAL) || r2 === A$2.DRAPED_MATERIAL;
    }
    return false;
  }
  createGLMaterial(r2) {
    return new c(r2);
  }
  createBufferWriter() {
    return new r$6(c$4);
  }
}
class c extends t$8 {
  beginSlot(r2) {
    return this.ensureTechnique(d, r2);
  }
}
class l extends u$2 {
  constructor() {
    super(...arguments), this.size = r$7(1, 1), this.color1 = r$8(0.75, 0.75, 0.75, 1), this.color2 = r$8(0.5, 0.5, 0.5, 1), this.transparent = false, this.writeDepth = true, this.polygonOffset = false;
  }
}
class _ extends a$2 {
  constructor(e2) {
    super(e2), this._checkerBoardMaterial = null, this._renderOccluded = d$4.OccludeAndTransparent, this._geometry = null, this._size = r$7(1, 1), this._color1 = r$8(1, 0.5, 0, 0.5), this._color2 = r$8(1, 1, 1, 0.5), this.applyProperties(e2);
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
    a$3(this._size, e2), this._updateMaterial();
  }
  get color1() {
    return this._color1;
  }
  set color1(e2) {
    D$2(e2, this._color1) || (a$4(this._color1, e2), this._updateMaterial());
  }
  get color2() {
    return this._color2;
  }
  set color2(e2) {
    D$2(e2, this._color2) || (a$4(this._color2, e2), this._updateMaterial());
  }
  _updateMaterial() {
    null != this._checkerBoardMaterial && this._checkerBoardMaterial.setParameters({ size: this._size, color1: this._color1, color2: this._color2, renderOccluded: this._renderOccluded });
  }
  createExternalResources() {
    this._checkerBoardMaterial = new h({ size: this._size, color1: this._color1, color2: this._color2, transparent: true, writeDepth: false, polygonOffset: true, renderOccluded: d$4.OccludeAndTransparent, isDecoration: this.isDecoration });
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
    const i2 = this._geometry, c2 = [], a2 = n$2();
    i2.position.forEach((e$12) => {
      e(a2, e$12, t2), c2.push(a2[0], a2[1], a2[2]);
    });
    const l2 = [];
    i2.uv.forEach((e2) => {
      l2.push(e2[0], e2[1]);
    });
    const d2 = new I$2(this._checkerBoardMaterial, [[e$4.POSITION, new t$9(c2, i2.triangleIndices, 3, true)], [e$4.UV0, new t$9(l2, i2.triangleIndices, 2, true)]]);
    r2.addGeometry(d2);
  }
}
const p = n$2();
let q = class extends g$3 {
  get _parameters() {
    const { accentColor: e2, textColor: t2 } = this.view.effectiveTheme, o2 = E$2(e2), l2 = F(e2, 0.5), h2 = F(G$3(e2), 0.5), c2 = G$3(t2, q$4.Low);
    return { accentColor: o2, transparentAccentColor: l2, transparentContrastColor: h2, intersectingLineColor: [1, 0.2, 0, 1], textColor: t2, textBackgroundColor: R$3(c2, 0.6), textCalloutColor: R$3(c2, 0.5), pathLineWidth: 3, perimeterLineWidth: 2, projectionLineWidth: 2, projectionLineStippleSize: 5, labelDistance: 25 };
  }
  get visible() {
    return this.analysisViewData.visible;
  }
  get testData() {
    return { labels: { area: this._areaLabel, perimeterLength: this._perimeterLengthLabel } };
  }
  constructor(e2) {
    super(e2), this._path = null, this._intersectedPath = null, this._perimeter = null, this._intersectedPerimeter = null, this._projectionLines = null, this._measurementArea = null, this._areaLabel = null, this._perimeterLengthLabel = null, this._pathSegments = [], this._perimeterSegments = [], this._origin = n$2(), this._originTransform = e$9(), this.messages = null, this.viewData = I, this.areaLabel = null, this.perimeterLengthLabel = null, this.loadingMessages = true;
  }
  initialize() {
    const { analysisViewData: e2, _parameters: t2, view: i2 } = this;
    this._path = new u$3({ view: i2, attached: true, width: t2.pathLineWidth, polygonOffset: true, renderOccluded: d$4.OccludeAndTransparent, isDecoration: true }), this._intersectedPath = new u$3({ view: i2, attached: true, width: t2.pathLineWidth, polygonOffset: true, renderOccluded: d$4.OccludeAndTransparent, isDecoration: true }), this._perimeter = new u$3({ view: i2, attached: true, width: t2.perimeterLineWidth, polygonOffset: true, renderOccluded: d$4.OccludeAndTransparent, isDecoration: true }), this._intersectedPerimeter = new u$3({ view: i2, attached: true, width: t2.perimeterLineWidth, color: t2.intersectingLineColor, polygonOffset: true, renderOccluded: d$4.OccludeAndTransparent, isDecoration: true }), this._projectionLines = new u$3({ view: i2, attached: true, width: t2.projectionLineWidth, stipplePattern: h$2(t2.projectionLineStippleSize), polygonOffset: true, renderOccluded: d$4.OccludeAndTransparent, isDecoration: true }), this._measurementArea = new _({ view: i2, attached: true, isDecoration: true });
    const r2 = { attached: true, view: i2, isDecoration: true };
    this._areaLabel = new g$4({ ...r2, fontSize: z.Large }), this._perimeterLengthLabel = new g$4({ ...r2, fontSize: z.Small }), this.addHandles([d$2(() => [e2.mode, this.visible, e2.unit, e2.measurementData, e2.stagedPoint], () => this._update(), A), d$2(() => i2.state?.camera, () => this._updateLabels(), A), f$5(() => this._updateMessageBundle()), d$2(() => this._parameters, ({ accentColor: e3, transparentAccentColor: t3, transparentContrastColor: i3, textColor: r3, textBackgroundColor: s2, textCalloutColor: a2 }) => {
      const { _path: n2, _intersectedPath: o2, _perimeter: l2, _projectionLines: h2, _measurementArea: c2, _areaLabel: m2, _perimeterLengthLabel: d2 } = this;
      n2.color = e3, o2.color = e3, l2.color = e3, h2.color = e3, c2.color1 = t3, c2.color2 = i3, m2.textColor = r3, m2.backgroundColor = s2, m2.calloutColor = a2, d2.textColor = r3, d2.backgroundColor = s2, d2.calloutColor = a2;
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
      n2 = f$6(Math.sqrt(t3.value) / Math.sqrt(300)), n2 *= Math.sqrt(j$2(1, t3.unit, "square-meters")), n2 /= e2.unitNormalizer.normalizeDistance(1);
    }
    const l2 = { validMeasurement: r2, numVertices: e2.numVertices, hasStagedVertex: e2.hasStagedVertex, path: t2, pathVersion: t2.version, stagedPoint: i2, measurementData: e2, mode: e2.actualMeasurementMode, positionsGeographic: e2.positionsGeographic, positionsRenderCoords: e2.positionsRenderCoords, positionsProjected: e2.positionsProjectedWorldCoords, positionsFittedRenderCoords: e2.positionsFittedRenderCoords, intersectingSegments: s2 ? e2.geodesicIntersectingSegments : e2.intersectingSegments, triangleIndices: s2 ? e2.geodesicTriangleIndices : e2.triangleIndices, fittingMode: e2.fittingMode, areaCentroid: s2 ? e2.geodesicAreaCentroidRenderCoords : e2.areaCentroidRenderCoords, pathLengthLabelSegmentIndex: r2 ? 0 : t2.numVertices - 2, perimeterLengthLabelSegmentIndex: 0, checkerSize: n2 };
    this._set("viewData", l2);
  }
  _updateOrigin() {
    const e2 = this.viewData;
    t$2(e2.positionsRenderCoords, this._origin), q$5(this._originTransform, this._origin), this._measurementArea.transform = this._originTransform, this._projectionLines.transform = this._originTransform;
  }
  _createSegments(e2) {
    const t2 = this.viewData, i2 = this.view.renderCoordsHelper.spatialReference, r2 = t2.mode, s2 = [], a2 = [], n2 = [], o2 = t2.numVertices, l2 = t2.validMeasurement ? o2 : o2 - 1;
    for (let c2 = 0; c2 < l2; ++c2) {
      const l3 = t2[e2][c2], h3 = t2[e2][(c2 + 1) % o2];
      let m2 = null;
      switch (r2) {
        case "euclidean":
          m2 = new m$3(l3, h3);
          break;
        case "geodesic":
          m2 = new _$4(l3, h3, i2);
      }
      t2.intersectingSegments.has(c2) ? n2.push(m2) : a2.push(m2), s2.push(m2);
    }
    let h2 = null;
    return t2.validMeasurement && t2.hasStagedVertex && l2 >= 2 ? h2 = s2[s2.length - 2] : t2.hasStagedVertex && l2 >= 1 && (h2 = s2[s2.length - 1]), { all: s2, nonIntersecting: a2, intersecting: n2, stagedSegment: h2 };
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
    return f$7(e2, this._preferredAreaUnit(e2, t2));
  }
  _preferredAreaUnit(e2, t2) {
    switch (t2) {
      case "metric":
        return A$3(e2.value, e2.unit);
      case "imperial":
        return G$4(e2.value, e2.unit);
      default:
        return t2;
    }
  }
  _preferredLengthUnit(e2, t2) {
    const i2 = this._deriveLengthUnitFromAreaUnit(t2);
    switch (i2) {
      case "metric":
        return v$1(e2.value, e2.unit);
      case "imperial":
        return T$1(e2.value, e2.unit);
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
    return e2 && t2 && h$3(e2, t2, this._preferredAreaUnit(t2, i2));
  }
  _formatLengthLabel(e2, t2, i2) {
    return e2 && t2 && h$3(e2, t2, this._preferredLengthUnit(t2, i2));
  }
  _updateMessageBundle() {
    this.loadingMessages = true, f$8("esri/core/t9n/Units").then((e2) => {
      this.messages = e2, this.view && this._update();
    }).finally(() => {
      this.loadingMessages = false;
    });
  }
};
var z;
e$3([y$1()], q.prototype, "_parameters", null), e$3([y$1()], q.prototype, "view", void 0), e$3([y$1()], q.prototype, "messages", void 0), e$3([y$1()], q.prototype, "analysis", void 0), e$3([y$1()], q.prototype, "viewData", void 0), e$3([y$1()], q.prototype, "analysisViewData", void 0), e$3([y$1({ readOnly: true })], q.prototype, "areaLabel", void 0), e$3([y$1({ readOnly: true })], q.prototype, "perimeterLengthLabel", void 0), e$3([y$1()], q.prototype, "loadingMessages", void 0), e$3([y$1()], q.prototype, "visible", null), q = e$3([c$3("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementVisualization")], q), function(e2) {
  e2[e2.Small = 12] = "Small", e2[e2.Large = 16] = "Large";
}(z || (z = {}));
const I = { validMeasurement: false, numVertices: 0, hasStagedVertex: false, path: null, pathVersion: -1, stagedPoint: null, measurementData: null, mode: null, positionsGeographic: null, positionsRenderCoords: null, positionsProjected: null, positionsFittedRenderCoords: null, intersectingSegments: null, triangleIndices: null, fittingMode: null, areaCentroid: null, pathLengthLabelSegmentIndex: null, perimeterLengthLabelSegmentIndex: null, checkerSize: null };
let m = class extends s(g$3) {
  constructor(e2) {
    super(e2), this.type = "area-measurement-view-3d", this.analysis = null, this.measurementData = null, this.lastDraggedVertex = null, this.stagedPoint = null, this.mode = e$2.Auto;
  }
  initialize() {
    const { analysis: e2, view: t2 } = this;
    this.path = new G({ view: t2, areaMeasurement: e2 }), this.analysisVisualization = new q({ view: t2, analysis: e2, analysisViewData: this }), this.analysisController = new u({ view: t2, analysis: e2, analysisViewData: this });
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
e$3([y$1({ readOnly: true })], m.prototype, "type", void 0), e$3([y$1({ constructOnly: true, nonNullable: true })], m.prototype, "analysis", void 0), e$3([y$1()], m.prototype, "updating", null), e$3([y$1()], m.prototype, "analysisVisualization", void 0), e$3([y$1()], m.prototype, "analysisController", void 0), e$3([y$1()], m.prototype, "result", null), e$3([y$1()], m.prototype, "measurementData", void 0), e$3([y$1()], m.prototype, "viewData", null), e$3([y$1()], m.prototype, "validMeasurement", null), e$3([y$1()], m.prototype, "path", void 0), e$3([y$1()], m.prototype, "lastDraggedVertex", void 0), e$3([y$1()], m.prototype, "stagedPoint", void 0), e$3([y$1()], m.prototype, "mode", void 0), e$3([y$1()], m.prototype, "unit", null), e$3([y$1(e$a)], m.prototype, "_defaultUnit", void 0), m = e$3([c$3("esri.views.3d.analysis.AreaMeasurementAnalysisView3D")], m);
const y = m;
const AreaMeasurementAnalysisView3D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: y
}, Symbol.toStringTag, { value: "Module" }));
export {
  AreaMeasurementAnalysisView3D as A,
  n
};
