import { bb as s$1, bo as e$1, bp as y$3, br as c, bs as g$1, eQ as n$1, fd as c$1, cP as D, bJ as d$1, bR as A$1, kF as e$3, fi as x$1, dy as m, ss as M, st as y$4, su as t$2, sv as b$2, fe as f, ff as a, sw as R$1, lC as o$1, lD as d, lJ as o$2, eu as e$4, lF as o$3, s0 as e$5, lR as t$3, lP as r$2, lN as o$4, lT as r$3, lU as r$4, sx as E$1, lV as S$1, s5 as c$2, lW as A$2, i5 as O$1, lZ as o$5, l$ as _$1, hX as E$2, lS as t$4, sa as H, s7 as c$3, lK as o$6, m6 as A$3, s9 as t$5, me as u, nW as r$5, eP as o$7, eO as z$1, mJ as e$6, eN as _$2, hx as O$2, hy as e$7, nX as d$2, s4 as n$2, sy as P, o2 as a$2, mz as e$8, bD as u$1, mK as c$4, o4 as ft, sz as E$3, sA as F, sB as G, sC as q$1, pM as R$2, q6 as h, sD as f$1, bn as P$1, mL as g$3, l6 as u$3, j$ as T$1, sE as f$3, jX as j$1, sF as f$4, sG as j$2, rZ as M$1, mH as x, mG as s$2 } from "./chunk-KFNcxJaF.js";
import { t, e as e$2, i, a as e$9 } from "./chunk-GOfyfiUn.js";
import { s as s$3 } from "./chunk-FIgfswJd.js";
import { r as r$1, f as f$2 } from "./chunk-KXkDk_IW.js";
import { geodesicLength as q } from "./chunk-WuibsuuF.js";
import { r, b as t$1, a as a$1, u as u$2 } from "./chunk-XZLuqbq5.js";
import { h as h$1, R as R$3, y as y$5, L as L$1, d as d$3 } from "./chunk-Jwrw72Py.js";
import { g as g$2, _ as _$3, m as m$1, C as C$1 } from "./chunk-di5vFT30.js";
import { z } from "./chunk-NjpOSVY5.js";
const R = "esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController", E = s$1.getLogger(R), S = 1e5;
let b$1 = class b extends g$1 {
  constructor(e2) {
    super(e2), this._unitNormalizer = new t(), this._tempStartPosition = n$1(), this._tempEndPosition = n$1(), this._tempCornerPosition = n$1();
  }
  initialize() {
    const e2 = this.view.spatialReference, t2 = c$1(e2), i2 = t2 === f ? a : t2;
    this._sphericalPCPF = i2;
    const o2 = D(e2, i2);
    this._unitNormalizer.spatialReference = o2 ? i2 : e2, this.addHandles([d$1(() => ({ viewData: this.viewData, startPoint: this.analysis.startPoint }), ({ viewData: e3, startPoint: t3 }) => {
      e3.elevationAlignedStartPoint = this._applyProjectionAndElevationAlignment(t3);
    }, A$1), d$1(() => ({ viewData: this.viewData, endPoint: this.analysis.endPoint }), ({ viewData: e3, endPoint: t3 }) => {
      e3.elevationAlignedEndPoint = this._applyProjectionAndElevationAlignment(t3);
    }, A$1), d$1(() => ({ result: this._computedResult, viewData: this.viewData }), ({ result: e3, viewData: t3 }) => {
      t3.result = e3;
    }, A$1)]);
  }
  _applyProjectionAndElevationAlignment(e2) {
    if (null == e2)
      return e2;
    const { spatialReference: t2, elevationProvider: i2 } = this.view, o2 = r(e2, t2, i2);
    return o2 ?? (t$1(this.analysis, e2.spatialReference, E), null);
  }
  get _computedResult() {
    const { elevationAlignedStartPoint: e2, elevationAlignedEndPoint: t2, measurementMode: i2 } = this.viewData;
    if (null == e2 || null == t2)
      return null;
    const o2 = this._euclideanDistances(e2, t2), r2 = this._geodesicDistance(e2, t2, o2.horizontal.value), s2 = i2 === e$2.Geodesic || i2 === e$2.Auto && o2.horizontal.value > S ? "geodesic" : "euclidean";
    return { mode: s2, distance: "euclidean" === s2 ? o2.direct : r2, directDistance: o2.direct, horizontalDistance: o2.horizontal, verticalDistance: o2.vertical, geodesicDistance: r2 };
  }
  _euclideanDistances(e2, t2) {
    const i2 = e2.clone();
    i2.z = t2.z;
    const r2 = this._tempStartPosition, s2 = this._tempEndPosition, n2 = this._tempCornerPosition, a2 = this.view.spatialReference, l = this._sphericalPCPF, p3 = D(a2, l) ? l : a2;
    e$3(e2, r2, p3), e$3(t2, s2, p3), e$3(i2, n2, p3);
    const m2 = x$1(r2, s2), d2 = x$1(n2, s2), h2 = Math.abs(t2.z - e2.z), v2 = (e3) => this._unitNormalizer.normalizeDistance(e3), j2 = v2(m2), g2 = v2(d2), P2 = v2(h2);
    return { direct: r$1(j2, "meters"), horizontal: r$1(g2, "meters"), vertical: r$1(P2, "meters") };
  }
  _geodesicDistance(e2, t2, i2) {
    const r2 = e2.spatialReference, s2 = new m({ spatialReference: r2 });
    s2.addPath([e2, t2]);
    const n2 = r2.isGeographic && M(r2) ? y$4([s2], "meters")[0] : r2.isWebMercator ? q(s2, "meters") : null, a2 = null != n2 ? n2 : this._fallbackGeodesicDistance(e2, t2, i2);
    return r$1(a2, "meters");
  }
  _fallbackGeodesicDistance(e2, t2, i2) {
    if (t$2(e2, U) && t$2(t2, C)) {
      const e3 = new R$1();
      return b$2(e3, U, C), e3.distance;
    }
    return i2;
  }
};
e$1([y$3()], b$1.prototype, "view", void 0), e$1([y$3()], b$1.prototype, "analysis", void 0), e$1([y$3()], b$1.prototype, "viewData", void 0), e$1([y$3()], b$1.prototype, "_computedResult", null), b$1 = e$1([c(R)], b$1);
const U = n$1(), C = n$1();
var e, o;
!function(e2) {
  e2[e2.None = 0] = "None", e2[e2.Direct = 1] = "Direct", e2[e2.Triangle = 2] = "Triangle", e2[e2.ProjectedGeodesic = 3] = "ProjectedGeodesic";
}(e || (e = {})), function(e2) {
  e2[e2.Auto = 0] = "Auto", e2[e2.AboveSegment = 1] = "AboveSegment", e2[e2.BelowSegment = 2] = "BelowSegment";
}(o || (o = {}));
function n(n2) {
  const s2 = new o$1(), { vertex: a2, fragment: l } = s2;
  d(a2, n2), a2.uniforms.add(new o$2("width", (e2) => e2.width)), s2.attributes.add(e$4.POSITION, "vec3"), s2.attributes.add(e$4.NORMAL, "vec3"), s2.attributes.add(e$4.UV0, "vec2"), s2.attributes.add(e$4.AUXPOS1, "float"), s2.varyings.add("vtc", "vec2"), s2.varyings.add("vlength", "float"), s2.varyings.add("vradius", "float"), a2.code.add(o$3`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = auxpos1;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`), l.uniforms.add(new o$2("outlineSize", (e2) => e2.outlineSize), new e$5("outlineColor", (e2) => e2.outlineColor), new o$2("stripeLength", (e2) => e2.stripeLength), new e$5("stripeEvenColor", (e2) => e2.stripeEvenColor), new e$5("stripeOddColor", (e2) => e2.stripeOddColor));
  const v2 = 1 / Math.sqrt(2);
  return l.code.add(o$3`
    const float INV_SQRT2 = ${o$3.float(v2)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      fragColor = color;
    }
  `), s2;
}
const s = Object.freeze(Object.defineProperty({ __proto__: null, build: n }, Symbol.toStringTag, { value: "Module" }));
class g extends r$3 {
  constructor(e2, r2, t2) {
    super(e2, r2, t2);
  }
  initializeProgram(e2) {
    return new r$4(e2.rctx, g.shader.get().build(this.configuration), E$1);
  }
  _setPipelineState(e2) {
    const r2 = e2 === o$4.NONE, t2 = this.configuration;
    return S$1({ blending: t2.transparent ? r2 ? c$2 : A$2(e2) : null, polygonOffset: this.configuration.polygonOffsetEnabled ? { factor: 0, units: -4 } : null, depthTest: { func: O$1.LESS }, depthWrite: o$5, colorWrite: _$1 });
  }
  initializePipeline() {
    return this._setPipelineState(this.configuration.transparencyPassType);
  }
  get primitiveType() {
    return E$2.TRIANGLE_STRIP;
  }
}
g.shader = new t$3(s, () => import("./chunk-PLk9D2io.js"));
let y$2 = class y extends t$4 {
  constructor() {
    super(...arguments), this.polygonOffsetEnabled = false, this.transparent = false, this.transparencyPassType = o$4.NONE;
  }
};
e$1([r$2()], y$2.prototype, "polygonOffsetEnabled", void 0), e$1([r$2()], y$2.prototype, "transparent", void 0), e$1([r$2({ count: o$4.COUNT })], y$2.prototype, "transparencyPassType", void 0);
class O extends c$3 {
  constructor(t2) {
    super(t2, new b2()), this._configuration = new y$2();
  }
  getConfiguration(t2, e2) {
    return this._configuration.polygonOffsetEnabled = this.parameters.polygonOffset, this._configuration.transparent = this._transparent, this._configuration.transparencyPassType = e2.transparencyPassType, this._configuration;
  }
  intersect() {
  }
  produces(t2, e2) {
    if (e2 === o$6.Color || e2 === o$6.Alpha) {
      return t2 === (this._transparent ? A$3.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL : A$3.OPAQUE_MATERIAL);
    }
    return false;
  }
  createGLMaterial(t2) {
    return new A(t2);
  }
  createBufferWriter() {
    return new y$1();
  }
  get _transparent() {
    const { parameters: t2 } = this;
    return t2.outlineColor[3] < 1 || t2.stripeEvenColor[3] < 1 || t2.stripeOddColor[3] < 1;
  }
}
class A extends t$5 {
  beginSlot(t2) {
    return this.ensureTechnique(g, t2);
  }
}
class b2 extends u {
  constructor() {
    super(...arguments), this.width = 32, this.outlineSize = 0.2, this.outlineColor = r$5(1, 0.5, 0, 1), this.stripeEvenColor = r$5(1, 1, 1, 1), this.stripeOddColor = r$5(1, 0.5, 0, 1), this.stripeLength = 1, this.polygonOffset = false;
  }
}
const T = H().vec3f(e$4.POSITION).vec3f(e$4.NORMAL).vec2f(e$4.UV0).f32(e$4.AUXPOS1), _ = n$1(), v = n$1(), I$1 = n$1(), L = n$1(), j = n$1();
let y$1 = class y2 {
  constructor() {
    this.vertexBufferLayout = T;
  }
  elementCount(t2) {
    return 2 * (t2.attributes.get(e$4.POSITION).indices.length / 2 + 1);
  }
  write(i2, a2, c2, u2, f2) {
    const { data: p3, indices: l } = c2.attributes.get(e$4.POSITION), h2 = c2.attributes.get(e$4.NORMAL).data, d2 = p3.length / 3;
    l && l.length !== 2 * (d2 - 1) && console.warn("MeasurementArrowMaterial does not support indices");
    const g2 = _, O2 = v, A2 = I$1, b3 = L, T2 = j, y4 = u2.position, E2 = u2.normal, M2 = u2.uv0;
    let S2 = 0;
    for (let m2 = 0; m2 < d2; ++m2) {
      const c3 = 3 * m2;
      if (o$7(g2, p3[c3], p3[c3 + 1], p3[c3 + 2]), m2 < d2 - 1) {
        const o2 = 3 * (m2 + 1);
        o$7(O2, p3[o2], p3[o2 + 1], p3[o2 + 2]), o$7(T2, h2[o2], h2[o2 + 1], h2[o2 + 2]), z$1(T2, T2), e$6(A2, O2, g2), z$1(A2, A2), _$2(b3, T2, A2), z$1(b3, b3);
      }
      const u3 = x$1(g2, O2);
      i2 && a2 && (O$2(g2, g2, i2), O$2(O2, O2, i2), O$2(b3, b3, a2));
      const l2 = f2 + 2 * m2, _2 = l2 + 1;
      y4.setVec(l2, g2), y4.setVec(_2, g2), E2.setVec(l2, b3), E2.setVec(_2, b3), M2.set(l2, 0, S2), M2.set(l2, 1, -1), M2.set(_2, 0, S2), M2.set(_2, 1, 1), m2 < d2 - 1 && (S2 += u3);
    }
    const w = u2.auxpos1;
    for (let t2 = 0; t2 < 2 * d2; ++t2)
      w.set(f2 + t2, S2);
  }
};
let p$1 = class p extends a$1 {
  constructor(e2) {
    super(e2), this._arrowWidth = 16, this._arrowSubdivisions = 128, this._origin = n$1(), this._originTransform = e$7(), this._arrowCenter = n$1(), this._renderOccluded = d$2.OccludeAndTransparent, this._geometry = null, this._stripeLength = 1, this._stripesEnabled = true, this._color = n$2(), this._contrastColor = n$2(), this.applyProperties(e2);
  }
  get renderOccluded() {
    return this._renderOccluded;
  }
  set renderOccluded(e2) {
    e2 !== this._renderOccluded && (this._renderOccluded = e2, this._arrowMaterial && this._arrowMaterial.setParameters({ renderOccluded: e2 }));
  }
  get geometry() {
    return this._geometry;
  }
  set geometry(e2) {
    this._geometry = e2, this._geometryChanged();
  }
  get stripeLength() {
    return this._stripeLength;
  }
  set stripeLength(e2) {
    this._stripeLength = e2, this.attached && this._arrowMaterial.setParameters({ stripeLength: this._stripeLength });
  }
  get stripesEnabled() {
    return this._stripesEnabled;
  }
  set stripesEnabled(e2) {
    if (this._stripesEnabled = e2, this.attached) {
      const e3 = this._stripesEnabled ? this._contrastColor : this._color;
      this._arrowMaterial.setParameters({ stripeEvenColor: e3 });
    }
  }
  get color() {
    return this._color;
  }
  set color(t2) {
    P(t2, this._color) || (a$2(this._color, t2), this._updateArrowColor());
  }
  get contrastColor() {
    return this._contrastColor;
  }
  set contrastColor(t2) {
    P(t2, this._color) || (a$2(this._contrastColor, t2), this._updateArrowColor());
  }
  createExternalResources() {
    const e2 = this._color, r2 = this._contrastColor, o2 = this._stripesEnabled ? r2 : e2;
    this._arrowMaterial = new O({ outlineColor: e2, stripeEvenColor: o2, stripeOddColor: e2, renderOccluded: this.renderOccluded, polygonOffset: true, isDecoration: this.isDecoration }), this._handles = new e$8(), this._handles.add(d$1(() => this.view.state.camera, () => {
      this._viewChanged();
    }));
  }
  destroyExternalResources() {
    this._arrowMaterial = null, this._handles = u$1(this._handles);
  }
  forEachExternalMaterial(e2) {
    e2(this._arrowMaterial);
  }
  createGeometries(e2) {
    if (null == this._geometry?.startRenderSpace || null == this._geometry.endRenderSpace)
      return;
    const t2 = this._createArrowGeometry(this._geometry.startRenderSpace, this._geometry.endRenderSpace, this._origin, this._geometry);
    t2.transformation = this._originTransform, e2.addGeometry(t2), this._viewChanged();
  }
  _createArrowGeometry(e2, t2, r2, s2) {
    const o2 = this.view.renderCoordsHelper, a2 = [], n2 = [], h2 = (e3, t3) => {
      const s3 = c$4.get();
      e$6(s3, e3, r2), a2.push(s3), n2.push(t3);
    };
    if ("euclidean" === s2.type) {
      s2.eval(0.5, this._arrowCenter);
      const r3 = c$4.get();
      o2.worldUpAtPosition(this._arrowCenter, r3), h2(e2, r3), h2(t2, r3);
    } else {
      s2.eval(0.5, this._arrowCenter);
      const e3 = this._arrowSubdivisions + 1 & -2;
      for (let t3 = 0; t3 < e3; ++t3) {
        const r3 = t3 / (e3 - 1), i2 = c$4.get(), a3 = c$4.get();
        s2.eval(r3, i2), o2.worldUpAtPosition(i2, a3), h2(i2, a3);
      }
    }
    return ft(this._arrowMaterial, a2, n2);
  }
  _geometryChanged() {
    this.recreateGeometry();
  }
  _viewChanged() {
    if (this.view.ready && this.attached && null != this._geometry) {
      const e2 = this.view.state.camera.computeScreenPixelSizeAt(this._arrowCenter);
      this._arrowMaterial.setParameters({ width: this._arrowWidth * e2 });
    }
  }
  _updateArrowColor() {
    if (!this.attached)
      return;
    const e2 = this._color, t2 = this._contrastColor, r2 = this._stripesEnabled ? t2 : e2, s2 = e2, o2 = e2;
    this._arrowMaterial.setParameters({ stripeEvenColor: r2, outlineColor: s2, stripeOddColor: o2 });
  }
};
let B = class extends g$1 {
  get _parameters() {
    const e2 = this.view.effectiveTheme, { accentColor: t2, textColor: a2 } = e2, r2 = E$3(t2), c2 = F(t2, 0.75), d2 = E$3(G(t2)), u2 = G(a2, q$1.Low);
    return { accentColor: r2, contrastColor: d2, translucentAccentColor: c2, triangleLineWidth: 3, geodesicProjectionLineWidth: 2, guideLineWidth: 2, guideStippleLengthPixels: 3, directLabelFontSize: 16, horizontalLabelFontSize: 12, verticalLabelFontSize: 12, textColor: a2, textBackgroundColor: R$2(u2, 0.6), textCalloutColor: R$2(u2, 0.5) };
  }
  get visible() {
    return this.analysisView.visible;
  }
  get viewMode() {
    const { elevationAlignedStartPoint: e$12, elevationAlignedEndPoint: t2 } = this.analysisView;
    if (null == e$12 || null == t2 || e$12.equals(t2))
      return e.None;
    const i2 = this.analysisView.result;
    if (null == i2)
      return e.Direct;
    if ("geodesic" === i2.mode)
      return this._requiresGeodesicGuideAt(this._startPosition) || this._requiresGeodesicGuideAt(this._endPosition) ? e.ProjectedGeodesic : e.Direct;
    const { verticalDistance: s2, horizontalDistance: n2 } = i2, o2 = s2.value, l = n2.value;
    return Math.min(o2 / l, l / o2) < this.triangleCollapseRatioThreshold ? e.Direct : e.Triangle;
  }
  get actualVisualizedMeasurement() {
    if (null == this.analysisView.result)
      switch (this.analysisView.measurementMode) {
        case e$2.Auto:
        case e$2.Euclidean:
        default:
          return "euclidean";
        case e$2.Geodesic:
          return "geodesic";
      }
    return this.analysisView.result.mode;
  }
  get allowVisualElementsOrientationChange() {
    return null == this._triangleOrientationOverride;
  }
  set allowVisualElementsOrientationChange(e2) {
    null == this._triangleOrientationOverride !== e2 && (null == this._triangleOrientationOverride ? this._triangleOrientationOverride = this._actualVisualElementsOrientation : this._triangleOrientationOverride = null);
  }
  get labels() {
    const e2 = "geodesic" === this.actualVisualizedMeasurement;
    return { direct: this._segmentLabel, horizontal: e2 ? this._segmentLabel : this._horizontalLabel, vertical: this._verticalLabel };
  }
  constructor(e2) {
    super(e2), this._segmentVisualElement = null, this._triangleVisualElement = null, this._rightAngleQuad = null, this._projectedGeodesicLine = null, this._geodesicStartHint = null, this._geodesicEndHint = null, this._segmentLabel = null, this._verticalLabel = null, this._horizontalLabel = null, this._startPosition = n$1(), this._endPosition = n$1(), this._cornerPosition = n$1(), this._startPositionAtSeaLevel = n$1(), this._endPositionAtSeaLevel = n$1(), this._triangleOrientationOverride = null, this.messages = null, this.loadingMessages = true, this.visualElementOrientation = o.Auto, this.triangleCollapseRatioThreshold = 0.03;
  }
  initialize() {
    const e2 = this._parameters, t2 = { attached: true, view: this.view, isDecoration: true }, { guideLineWidth: i2, guideStippleLengthPixels: s2, triangleLineWidth: n2, geodesicProjectionLineWidth: o2, directLabelFontSize: l, verticalLabelFontSize: a2, horizontalLabelFontSize: r2 } = e2;
    this._segmentVisualElement = new p$1({ ...t2, geometry: null, renderOccluded: d$2.OccludeAndTransparent }), this._triangleVisualElement = new u$2({ ...t2, width: n2, renderOccluded: d$2.OccludeAndTransparent }), this._rightAngleQuad = new z({ ...t2, renderOccluded: d$2.OccludeAndTransparent });
    const c2 = { ...t2, polygonOffset: true, renderOccluded: d$2.OccludeAndTransparent };
    this._projectedGeodesicLine = new u$2({ ...c2, width: o2, stipplePattern: h(s2) }), this._geodesicStartHint = new u$2({ ...c2, width: i2, stipplePattern: h(s2) }), this._geodesicEndHint = new u$2({ ...c2, width: i2, stipplePattern: h(s2) }), this._segmentLabel = new g$2({ ...t2, fontSize: l }), this._verticalLabel = new g$2({ ...t2, fontSize: a2 }), this._horizontalLabel = new g$2({ ...t2, fontSize: r2 }), this.addHandles([d$1(() => {
      const { elevationAlignedStartPoint: e3, elevationAlignedEndPoint: t3 } = this.analysisView, i3 = this.view;
      return { view: i3, camera: i3.state.camera, viewMode: this.viewMode, elevationAlignedStartPoint: e3, elevationAlignedEndPoint: t3, orientation: this._actualVisualElementsOrientation, visualizedMeasurement: this.actualVisualizedMeasurement, stripeLength: this._measurementArrowStripeLength };
    }, (e3) => this._updateGeometryAndViewMode(e3), A$1), d$1(() => ({ visible: this.visible, viewMode: this.viewMode }), (e3) => this._updateVisualElementVisibility(e3), A$1), d$1(() => ({ text: this._labelsText, visualizedMeasurement: this.actualVisualizedMeasurement }), (e3) => this._updateLabelText(e3), A$1), d$1(() => ({ visible: this.visible, viewMode: this.viewMode }), (e3) => this._updateLabelVisibility(e3), A$1), d$1(() => this._measurementArrowStripeLength, (e3) => this._updateSegmentStripeLength(e3), A$1), f$1(async () => this._updateMessageBundle()), d$1(() => this._parameters, ({ textBackgroundColor: e3, textCalloutColor: t3, textColor: i3, translucentAccentColor: s3, accentColor: n3, contrastColor: o3 }) => {
      const { _segmentLabel: l2, _verticalLabel: a3, _horizontalLabel: r3, _triangleVisualElement: c3, _rightAngleQuad: d2, _projectedGeodesicLine: u2, _geodesicStartHint: h2, _geodesicEndHint: m2, _segmentVisualElement: g2 } = this;
      l2.backgroundColor = e3, l2.calloutColor = t3, l2.textColor = i3, a3.backgroundColor = e3, a3.calloutColor = t3, a3.textColor = i3, r3.backgroundColor = e3, r3.calloutColor = t3, r3.textColor = i3, c3.color = s3, d2.color = s3, u2.color = s3, h2.color = s3, m2.color = s3, g2.color = n3, g2.contrastColor = o3;
    }, P$1)]), this._updateMessageBundle();
  }
  destroy() {
    this._segmentVisualElement = u$1(this._segmentVisualElement), this._triangleVisualElement = u$1(this._triangleVisualElement), this._rightAngleQuad = u$1(this._rightAngleQuad), this._projectedGeodesicLine = u$1(this._projectedGeodesicLine), this._geodesicStartHint = u$1(this._geodesicStartHint), this._geodesicEndHint = u$1(this._geodesicEndHint), this._segmentLabel = u$1(this._segmentLabel), this._verticalLabel = u$1(this._verticalLabel), this._horizontalLabel = u$1(this._horizontalLabel), this.set("view", null);
  }
  _updateVisualElementVisibility({ visible: e$12, viewMode: t2 }) {
    if (this._segmentVisualElement.visible = false, this._triangleVisualElement.visible = false, this._rightAngleQuad.visible = false, this._projectedGeodesicLine.visible = false, this._geodesicStartHint.visible = false, this._geodesicEndHint.visible = false, e$12)
      switch (t2) {
        case e.None:
          break;
        case e.Direct:
          this._segmentVisualElement.visible = true;
          break;
        case e.Triangle:
          this._segmentVisualElement.visible = true, this._triangleVisualElement.visible = true, this._rightAngleQuad.visible = true;
          break;
        case e.ProjectedGeodesic:
          this._segmentVisualElement.visible = true, this._projectedGeodesicLine.visible = true, this._geodesicStartHint.visible = true, this._geodesicEndHint.visible = true;
      }
  }
  _updateGeometryAndViewMode({ view: e$12, camera: t2, viewMode: i2, elevationAlignedStartPoint: s2, elevationAlignedEndPoint: n2, orientation: o$12, visualizedMeasurement: l, stripeLength: a2 }) {
    const r2 = e$12.renderCoordsHelper;
    if (null == r2 || null == s2 || null == n2 || s2.equals(n2))
      return;
    let c2 = this._startPosition, d2 = this._endPosition;
    r2.toRenderCoords(s2, c2), r2.toRenderCoords(n2, d2);
    const u2 = o$12 === o.AboveSegment ? 1 : -1, h2 = u2 * (r2.getAltitude(d2) - r2.getAltitude(c2));
    h2 < 0 && (c2 = this._endPosition, d2 = this._startPosition);
    const m2 = "geodesic" === l ? new _$3(this._startPosition, this._endPosition, r2.spatialReference) : new m$1(this._startPosition, this._endPosition);
    switch (this._segmentVisualElement.geometry = m2, this._updateSegmentStripeLength(a2), i2) {
      case e.Direct:
        this._updateSegment(m2, o$12);
        break;
      case e.Triangle:
        this._updateSegmentAndTriangle({ view: e$12, camera: t2, segment: m2, orientation: o$12, startPosition: c2, endPosition: d2, deltaSign: u2, altitudeDelta: h2 });
        break;
      case e.ProjectedGeodesic:
        this._updateSegmentAndProjection({ view: e$12, orientation: o$12, startPosition: c2, endPosition: d2 });
    }
  }
  _updateSegment(e2, t2) {
    this._segmentLabel.anchor = t2 === o.AboveSegment ? "top" : "bottom", this._segmentLabel.geometry = { type: "segment", segment: e2, sampleLocation: "center" };
  }
  _updateSegmentAndTriangle({ view: { renderCoordsHelper: e2 }, camera: t2, segment: i2, orientation: s2, startPosition: n2, endPosition: o2, deltaSign: l, altitudeDelta: a2 }) {
    const r2 = this._cornerPosition;
    e2.worldUpAtPosition(n2, r2), g$3(r2, r2, l * Math.abs(a2)), u$3(r2, r2, n2), this._triangleVisualElement.geometry = [[[n2[0], n2[1], n2[2]], [r2[0], r2[1], r2[2]], [o2[0], o2[1], o2[2]]]], this._rightAngleQuad.geometry = { previous: n2, center: r2, next: o2 };
    const c2 = new m$1(n2, r2), d2 = new m$1(r2, o2), u2 = W(n2, o2, r2, s2, t2);
    this._segmentLabel.anchor = u2.segment, this._segmentLabel.geometry = { type: "segment", segment: i2, sampleLocation: "center" }, this._verticalLabel.geometry = { type: "segment", segment: c2, sampleLocation: "center" }, this._verticalLabel.anchor = u2.vertical, this._horizontalLabel.geometry = { type: "segment", segment: d2, sampleLocation: "center" }, this._horizontalLabel.anchor = u2.horizontal;
  }
  _updateSegmentAndProjection({ view: { renderCoordsHelper: e2 }, orientation: t2, startPosition: i2, endPosition: s2 }) {
    e2.setAltitude(this._startPositionAtSeaLevel, 0, i2), e2.setAltitude(this._endPositionAtSeaLevel, 0, s2);
    const n2 = new _$3(this._startPositionAtSeaLevel, this._endPositionAtSeaLevel, e2.spatialReference);
    this._projectedGeodesicLine.setGeometryFromSegment(n2), this._geodesicStartHint.setGeometryFromSegment(new m$1(this._startPositionAtSeaLevel, i2)), this._geodesicEndHint.setGeometryFromSegment(new m$1(this._endPositionAtSeaLevel, s2)), this._segmentLabel.geometry = { type: "segment", segment: n2, sampleLocation: "center" }, this._segmentLabel.anchor = t2 === o.AboveSegment ? "top" : "bottom";
  }
  _updateLabelText({ text: e2, visualizedMeasurement: t2 }) {
    null != e2 ? (this._segmentLabel.text = "euclidean" === t2 ? e2.euclideanDistance : e2.geodesicDistance, this._horizontalLabel.text = e2.horizontalDistance, this._verticalLabel.text = e2.verticalDistance) : (this._segmentLabel.text = null, this._horizontalLabel.text = null, this._verticalLabel.text = null), this.notifyChange("labels");
  }
  _updateLabelVisibility({ visible: e$12, viewMode: t2 }) {
    const i2 = this._segmentLabel, s2 = this._horizontalLabel, n2 = this._verticalLabel;
    if (i2.visible = false, s2.visible = false, n2.visible = false, e$12)
      switch (t2) {
        case e.Direct:
          i2.visible = true;
          break;
        case e.Triangle:
          i2.visible = true, s2.visible = true, n2.visible = true;
          break;
        case e.ProjectedGeodesic:
          i2.visible = true;
        case e.None:
      }
  }
  get _labelsText() {
    if (this.destroyed)
      return null;
    const e2 = this.messages, t2 = this.analysisView.result;
    if (null == t2 || null == e2)
      return null;
    const { directDistance: i2, horizontalDistance: s2, verticalDistance: n2, geodesicDistance: o2 } = t2, l = this.analysisView.unit, a2 = (e3) => ({ euclideanDistance: "", geodesicDistance: "", horizontalDistance: "", verticalDistance: "", ...e3 });
    switch (l) {
      case "metric":
        return a2({ euclideanDistance: i2 && L$1(e2, i2), geodesicDistance: o2 && L$1(e2, o2), horizontalDistance: s2 && L$1(e2, s2), verticalDistance: n2 && d$3(e2, n2) });
      case "imperial":
        return a2({ euclideanDistance: i2 && R$3(e2, i2), geodesicDistance: o2 && R$3(e2, o2), horizontalDistance: s2 && R$3(e2, s2), verticalDistance: n2 && y$5(e2, n2) });
      default:
        return a2({ euclideanDistance: i2 && h$1(e2, i2, l), geodesicDistance: o2 && h$1(e2, o2, l), horizontalDistance: s2 && h$1(e2, s2, l), verticalDistance: n2 && h$1(e2, n2, l) });
    }
  }
  _updateSegmentStripeLength(e2) {
    const t2 = this._segmentVisualElement;
    null != e2 ? (t2.stripeLength = e2, t2.stripesEnabled = true) : t2.stripesEnabled = false;
  }
  get _actualVisualElementsOrientation() {
    if (null != this._triangleOrientationOverride)
      return this._triangleOrientationOverride;
    const e2 = this.visualElementOrientation;
    return e2 === o.Auto ? this.view.state.camera.aboveGround ? o.AboveSegment : o.BelowSegment : e2;
  }
  _requiresGeodesicGuideAt(e2) {
    const t2 = this.view;
    if (!t2?.state)
      return false;
    const i2 = t2.state.camera, s2 = t2.renderCoordsHelper;
    if (!s2)
      return false;
    const n2 = i2.computeScreenPixelSizeAt(e2);
    return s2.getAltitude(e2) / n2 >= 10;
  }
  get _measurementArrowStripeLength() {
    const { result: e2, unit: t2 } = this.analysisView;
    if (null == e2)
      return null;
    let i2 = null;
    const s2 = e2.directDistance;
    switch (t2) {
      case "metric":
        i2 = s2 && f$2(s2, "meters");
        break;
      case "imperial":
        i2 = s2 && f$2(s2, T$1(s2.value, s2.unit));
        break;
      default:
        i2 = s2 && f$2(s2, t2);
    }
    if (null == i2)
      return null;
    return f$3(i2.value / 30) * j$1(1, i2.unit, "meters");
  }
  _updateMessageBundle() {
    this.loadingMessages = true, f$4("esri/core/t9n/Units").then((e2) => {
      this.messages = e2;
    }).finally(() => {
      this.loadingMessages = false;
    });
  }
  get testData() {
    return { labels: this.labels, stripeLength: this._segmentVisualElement?.stripeLength };
  }
};
function W(e2, t2, i$1, s2, n2) {
  const o$12 = I, l = J;
  n2.projectToRenderScreen(i$1, o$12), n2.projectToRenderScreen(t2, l);
  const a2 = { segment: "bottom", horizontal: "top", vertical: o$12[0] < l[0] ? "left" : "right" };
  {
    const s3 = K, o2 = X;
    if (i(e2, i$1, s3, n2), i(e2, t2, o2, n2), j$2(s3, o2) >= N) {
      const e3 = Math.sign(s3[1]) === Math.sign(o2[1]);
      a2.segment = e3 ? C$1(a2.vertical) : a2.vertical;
    } else {
      const e3 = Y;
      i(i$1, t2, e3, n2), j$2(e3, o2) >= N && (a2.segment = Math.sign(e3[0]) === Math.sign(o2[0]) ? C$1(a2.horizontal) : a2.horizontal);
    }
  }
  if (s2 === o.BelowSegment) {
    const e3 = (e4) => "top" === e4 ? "bottom" : "top";
    a2.segment = e3(a2.segment), a2.horizontal = e3(a2.horizontal), a2.vertical = e3(a2.vertical);
  }
  return a2;
}
e$1([y$3()], B.prototype, "_parameters", null), e$1([y$3()], B.prototype, "_triangleOrientationOverride", void 0), e$1([y$3()], B.prototype, "messages", void 0), e$1([y$3()], B.prototype, "view", void 0), e$1([y$3()], B.prototype, "analysis", void 0), e$1([y$3()], B.prototype, "analysisView", void 0), e$1([y$3()], B.prototype, "loadingMessages", void 0), e$1([y$3()], B.prototype, "visible", null), e$1([y$3()], B.prototype, "viewMode", null), e$1([y$3()], B.prototype, "actualVisualizedMeasurement", null), e$1([y$3()], B.prototype, "visualElementOrientation", void 0), e$1([y$3()], B.prototype, "triangleCollapseRatioThreshold", void 0), e$1([y$3()], B.prototype, "allowVisualElementsOrientationChange", null), e$1([y$3()], B.prototype, "labels", null), e$1([y$3()], B.prototype, "_labelsText", null), e$1([y$3()], B.prototype, "_actualVisualElementsOrientation", null), e$1([y$3()], B.prototype, "_measurementArrowStripeLength", null), B = e$1([c("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")], B);
const N = Math.cos(M$1(12)), I = x(), J = x(), K = s$2(), X = s$2(), Y = s$2();
let p2 = class extends s$3(g$1) {
  constructor(t2) {
    super(t2), this.type = "direct-line-measurement-view-3d", this.analysis = null, this.result = null, this.measurementMode = e$2.Auto, this.elevationAlignedStartPoint = null, this.elevationAlignedEndPoint = null;
  }
  initialize() {
    const t2 = this.view, i2 = this.analysis;
    this._analysisVisualization = new B({ view: t2, analysis: i2, analysisView: this }), this._analysisController = new b$1({ view: t2, analysis: i2, viewData: this });
  }
  destroy() {
    this._analysisController = u$1(this._analysisController), this._analysisVisualization = u$1(this._analysisVisualization);
  }
  get updating() {
    return !!this._analysisVisualization?.loadingMessages;
  }
  get viewMode() {
    return this._analysisVisualization.viewMode;
  }
  get actualVisualizedMeasurement() {
    return this._analysisVisualization.actualVisualizedMeasurement;
  }
  get visualElementOrientation() {
    return this._analysisVisualization.visualElementOrientation;
  }
  set visualElementOrientation(t2) {
    this._analysisVisualization.visualElementOrientation = t2;
  }
  get allowVisualElementsOrientationChange() {
    return this._analysisVisualization.allowVisualElementsOrientationChange;
  }
  set allowVisualElementsOrientationChange(t2) {
    this._analysisVisualization.allowVisualElementsOrientationChange = t2;
  }
  get triangleCollapseRatioThreshold() {
    return this._analysisVisualization.triangleCollapseRatioThreshold;
  }
  set triangleCollapseRatioThreshold(t2) {
    this._analysisVisualization.triangleCollapseRatioThreshold = t2;
  }
  get directLabelText() {
    return this._analysisVisualization.labels.direct?.text ?? "";
  }
  get horizontalLabelText() {
    return this._analysisVisualization.labels.horizontal?.text ?? "";
  }
  get verticalLabelText() {
    return this._analysisVisualization.labels.vertical?.text ?? "";
  }
  get unit() {
    return this.analysis.unit ?? this._defaultUnit;
  }
  get testData() {
    return this.destroyed ? { labels: null, stripeLength: null, visualization: null, controller: null } : { ...this._analysisVisualization?.testData, visualization: this._analysisVisualization, controller: this._analysisController };
  }
};
e$1([y$3()], p2.prototype, "updating", null), e$1([y$3({ readOnly: true })], p2.prototype, "type", void 0), e$1([y$3({ constructOnly: true, nonNullable: true })], p2.prototype, "analysis", void 0), e$1([y$3()], p2.prototype, "result", void 0), e$1([y$3()], p2.prototype, "measurementMode", void 0), e$1([y$3()], p2.prototype, "elevationAlignedStartPoint", void 0), e$1([y$3()], p2.prototype, "elevationAlignedEndPoint", void 0), e$1([y$3({ readOnly: true })], p2.prototype, "viewMode", null), e$1([y$3({ readOnly: true })], p2.prototype, "actualVisualizedMeasurement", null), e$1([y$3()], p2.prototype, "visualElementOrientation", null), e$1([y$3()], p2.prototype, "allowVisualElementsOrientationChange", null), e$1([y$3()], p2.prototype, "triangleCollapseRatioThreshold", null), e$1([y$3({ readOnly: true })], p2.prototype, "directLabelText", null), e$1([y$3({ readOnly: true })], p2.prototype, "horizontalLabelText", null), e$1([y$3({ readOnly: true })], p2.prototype, "verticalLabelText", null), e$1([y$3()], p2.prototype, "_analysisVisualization", void 0), e$1([y$3()], p2.prototype, "_analysisController", void 0), e$1([y$3()], p2.prototype, "unit", null), e$1([y$3(e$9)], p2.prototype, "_defaultUnit", void 0), p2 = e$1([c("esri.views.3d.analysis.DirectLineMeasurementAnalysisView3D")], p2);
const y3 = p2;
const DirectLineMeasurementAnalysisView3D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: y3
}, Symbol.toStringTag, { value: "Module" }));
export {
  DirectLineMeasurementAnalysisView3D as D,
  n
};
