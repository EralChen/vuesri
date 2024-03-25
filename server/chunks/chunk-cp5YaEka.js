import { aV as e$1, aX as y$2, a_ as c, bZ as S$1, aW as n$1, g4 as a, dc as H$1, ce as d$1, cl as A$1, aT as s$1, tf as r$1, lr as c$1, lb as x, l9 as i, gb as m, tg as w, th as v$1, ti as q, tj as t$2, tk as j$1, aB as f$1, g5 as p$2, g6 as w$1, tl as z, mE as o$1, mF as d, mL as o$2, fk as e$3, mH as o$3, tm as e$4, mS as t$3, mR as r$2, mP as o$4, mU as r$3, mV as r$4, mW as S$2, tn as c$2, mX as A$2, o7 as O$1, m_ as o$5, n0 as _$1, mc as E$1, mT as t$4, to as H$2, tp as c$3, n6 as A$3, mM as o$6, tq as t$5, nh as u, eH as r$5, fF as o$7, fE as z$1, aF as e$5, fD as _$2, aH as O$2, l0 as a$1, im as e$6, l2 as h, tr as n$2, ts as P, li as a$2, nF as e$7, c8 as u$1, nP as c$4, tt as gt, tu as E$2, tv as F, tw as G, tx as q$1, ty as R, tz as z$2, qH as h$1, tA as f$3, bX as P$1, nQ as g$1, aG as u$2, fV as c$5, eo as J$1, tB as c$6, ek as j$2, tC as h$3, nK as p$3, t3 as j$3, kR as h$4, nN as x$1, nM as s$2, tD as e$8 } from "./chunk-ejFG4zJ0.js";
import { s as s$3 } from "./chunk-SJe5cJoE.js";
import { t, e as e$2 } from "./chunk-FR8esUcn.js";
import { r, t as t$1, f } from "./chunk-feYAbK6R.js";
import { h as h$2, R as R$1, y as y$3, L as L$1, d as d$2 } from "./chunk-TCdzNZ_N.js";
import { f as f$2, _ as _$3, m as m$1, v as v$2 } from "./chunk-4Kw0cdlJ.js";
let b = class extends S$1 {
  constructor(e2) {
    super(e2), this._unitNormalizer = new t(), this._tempStartPosition = n$1(), this._tempEndPosition = n$1(), this._tempCornerPosition = n$1();
  }
  initialize() {
    const e2 = this.view.spatialReference, t2 = a(e2), i2 = t2 === p$2 ? w$1 : t2;
    this._sphericalPCPF = i2;
    const o2 = H$1(e2, i2);
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
    const { spatialReference: t2, elevationProvider: o2 } = this.view, r$12 = r(e2, t2, o2);
    return r$12 ?? (t$1(this.analysis, e2.spatialReference, s$1.getLogger(this)), null);
  }
  get _computedResult() {
    const { elevationAlignedStartPoint: e2, elevationAlignedEndPoint: t2, measurementMode: i2 } = this.viewData;
    if (null == e2 || null == t2)
      return null;
    const o2 = this._euclideanDistances(e2, t2), r2 = this._geodesicDistance(e2, t2);
    let s2, n2;
    switch (i2) {
      case e$2.Auto:
        n2 = null != r2 ? "geodesic" : "euclidean", s2 = r2 ?? o2.horizontal;
        break;
      case e$2.Geodesic:
        if (null == r2)
          return null;
        n2 = "geodesic", s2 = r2;
        break;
      case e$2.Euclidean:
        n2 = "euclidean", s2 = o2.horizontal;
    }
    return { mode: n2, directDistance: o2.direct, horizontalDistance: s2, verticalDistance: o2.vertical, distance: i2 === e$2.Euclidean || o2.horizontal.value <= r$1 ? o2.direct : r2 ?? o2.horizontal };
  }
  _euclideanDistances(e2, t2) {
    const i$1 = e2.clone();
    i$1.z = t2.z;
    const r2 = this._tempStartPosition, s2 = this._tempEndPosition, n2 = this._tempCornerPosition, a2 = this.view.spatialReference, c2 = this._sphericalPCPF, m2 = H$1(a2, c2) ? c2 : a2;
    c$1(e2, r2, m2), c$1(t2, s2, m2), c$1(i$1, n2, m2);
    const p3 = x(r2, s2), d2 = x(n2, s2), h2 = Math.abs(t2.z - e2.z), f2 = (e3) => this._unitNormalizer.normalizeDistance(e3), v2 = f2(p3), g2 = f2(d2), P2 = f2(h2);
    return { direct: i(v2, "meters"), horizontal: i(g2, "meters"), vertical: i(P2, "meters") };
  }
  _geodesicDistance(e2, t2) {
    const { spatialReference: i$1 } = e2, r2 = new m({ spatialReference: i$1 });
    r2.addPath([e2, t2]);
    const s2 = i$1.isGeographic && w(i$1) ? v$1([r2], "meters")[0] : i$1.isWebMercator ? q(r2, "meters") : null, n2 = null != s2 ? s2 : this._fallbackGeodesicDistance(e2, t2);
    return null != n2 ? i(n2, "meters") : null;
  }
  _fallbackGeodesicDistance(e2, t2) {
    if (t$2(e2, S) && t$2(t2, C)) {
      const e3 = new z();
      return j$1(e3, S, C, f$1.WGS84), e3.distance;
    }
    return null;
  }
};
e$1([y$2()], b.prototype, "view", void 0), e$1([y$2()], b.prototype, "analysis", void 0), e$1([y$2()], b.prototype, "viewData", void 0), e$1([y$2()], b.prototype, "_computedResult", null), b = e$1([c("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController")], b);
const S = n$1(), C = n$1();
var e, o;
!function(e2) {
  e2[e2.None = 0] = "None", e2[e2.Direct = 1] = "Direct", e2[e2.Triangle = 2] = "Triangle", e2[e2.ProjectedGeodesic = 3] = "ProjectedGeodesic";
}(e || (e = {})), function(e2) {
  e2[e2.Auto = 0] = "Auto", e2[e2.AboveSegment = 1] = "AboveSegment", e2[e2.BelowSegment = 2] = "BelowSegment";
}(o || (o = {}));
function n(n2) {
  const s2 = new o$1(), { vertex: a2, fragment: l } = s2;
  d(a2, n2), a2.uniforms.add(new o$2("width", (e2) => e2.width)), s2.attributes.add(e$3.POSITION, "vec3"), s2.attributes.add(e$3.NORMAL, "vec3"), s2.attributes.add(e$3.UV0, "vec2"), s2.attributes.add(e$3.LENGTH, "float"), s2.varyings.add("vtc", "vec2"), s2.varyings.add("vlength", "float"), s2.varyings.add("vradius", "float"), a2.code.add(o$3`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = length;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`), l.uniforms.add(new o$2("outlineSize", (e2) => e2.outlineSize), new e$4("outlineColor", (e2) => e2.outlineColor), new o$2("stripeLength", (e2) => e2.stripeLength), new e$4("stripeEvenColor", (e2) => e2.stripeEvenColor), new e$4("stripeOddColor", (e2) => e2.stripeOddColor));
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
    return new r$4(e2.rctx, g.shader.get().build(this.configuration), y$1);
  }
  _setPipelineState(e2) {
    const r2 = e2 === o$4.NONE, t2 = this.configuration;
    return S$2({ blending: t2.transparent ? r2 ? c$2 : A$2(e2) : null, polygonOffset: this.configuration.polygonOffsetEnabled ? { factor: 0, units: -4 } : null, depthTest: { func: O$1.LESS }, depthWrite: o$5, colorWrite: _$1 });
  }
  initializePipeline() {
    return this._setPipelineState(this.configuration.transparencyPassType);
  }
  get primitiveType() {
    return E$1.TRIANGLE_STRIP;
  }
}
g.shader = new t$3(s, () => import("./chunk-8klyQXhq.js"));
let T$1 = class T extends t$4 {
  constructor() {
    super(...arguments), this.polygonOffsetEnabled = false, this.transparent = false, this.transparencyPassType = o$4.NONE;
  }
};
e$1([r$2()], T$1.prototype, "polygonOffsetEnabled", void 0), e$1([r$2()], T$1.prototype, "transparent", void 0), e$1([r$2({ count: o$4.COUNT })], T$1.prototype, "transparencyPassType", void 0);
const y$1 = /* @__PURE__ */ new Map([[e$3.POSITION, 0], [e$3.NORMAL, 1], [e$3.UV0, 2], [e$3.LENGTH, 3]]);
class A extends c$3 {
  constructor(t2) {
    super(t2, new _()), this._vertexAttributeLocations = y$1, this.produces = /* @__PURE__ */ new Map([[A$3.OPAQUE_MATERIAL, (t3) => !this._transparent && (t3 === o$6.Color || t3 === o$6.Alpha)], [A$3.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL, (t3) => this._transparent && (t3 === o$6.Color || t3 === o$6.Alpha)]]), this._configuration = new T$1();
  }
  getConfiguration(t2, e2) {
    return this._configuration.polygonOffsetEnabled = this.parameters.polygonOffset, this._configuration.transparent = this._transparent, this._configuration.transparencyPassType = e2.transparencyPassType, this._configuration;
  }
  intersect() {
  }
  createGLMaterial(t2) {
    return new O(t2);
  }
  createBufferWriter() {
    return new j();
  }
  get _transparent() {
    const { parameters: t2 } = this;
    return t2.outlineColor[3] < 1 || t2.stripeEvenColor[3] < 1 || t2.stripeOddColor[3] < 1;
  }
}
class O extends t$5 {
  beginSlot(t2) {
    return this.ensureTechnique(g, t2);
  }
}
class _ extends u {
  constructor() {
    super(...arguments), this.width = 32, this.outlineSize = 0.2, this.outlineColor = r$5(1, 0.5, 0, 1), this.stripeEvenColor = r$5(1, 1, 1, 1), this.stripeOddColor = r$5(1, 0.5, 0, 1), this.stripeLength = 1, this.polygonOffset = false;
  }
}
const T2 = H$2().vec3f(e$3.POSITION).vec3f(e$3.NORMAL).vec2f(e$3.UV0).f32(e$3.LENGTH), L = n$1(), v = n$1(), E = n$1(), I$1 = n$1(), M = n$1();
class j {
  constructor() {
    this.vertexBufferLayout = T2;
  }
  elementCount(t2) {
    return 2 * (t2.attributes.get(e$3.POSITION).indices.length / 2 + 1);
  }
  write(n2, a2, c2, l, u2) {
    const { data: p3, indices: f2 } = c2.attributes.get(e$3.POSITION), h2 = c2.attributes.get(e$3.NORMAL).data, g2 = p3.length / 3;
    f2 && f2.length !== 2 * (g2 - 1) && console.warn("MeasurementArrowMaterial does not support indices");
    const d2 = L, b2 = v, A2 = E, O2 = I$1, _2 = M, T3 = l.position, j2 = l.normal, w2 = l.uv0;
    let y2 = 0;
    for (let m2 = 0; m2 < g2; ++m2) {
      const c3 = 3 * m2;
      if (o$7(d2, p3[c3], p3[c3 + 1], p3[c3 + 2]), m2 < g2 - 1) {
        const o2 = 3 * (m2 + 1);
        o$7(b2, p3[o2], p3[o2 + 1], p3[o2 + 2]), o$7(_2, h2[o2], h2[o2 + 1], h2[o2 + 2]), z$1(_2, _2), e$5(A2, b2, d2), z$1(A2, A2), _$2(O2, _2, A2), z$1(O2, O2);
      }
      const l2 = x(d2, b2);
      n2 && a2 && (O$2(d2, d2, n2), O$2(b2, b2, n2), O$2(O2, O2, a2));
      const f3 = u2 + 2 * m2, L2 = f3 + 1;
      T3.setVec(f3, d2), T3.setVec(L2, d2), j2.setVec(f3, O2), j2.setVec(L2, O2), w2.set(f3, 0, y2), w2.set(f3, 1, -1), w2.set(L2, 0, y2), w2.set(L2, 1, 1), m2 < g2 - 1 && (y2 += l2);
    }
    const C2 = l.length;
    for (let t2 = 0; t2 < 2 * g2; ++t2)
      C2.set(u2 + t2, y2);
  }
}
let p$1 = class p extends a$1 {
  constructor(e2) {
    super(e2), this._arrowWidth = 16, this._arrowSubdivisions = 128, this._origin = n$1(), this._originTransform = e$6(), this._arrowCenter = n$1(), this._renderOccluded = h.OccludeAndTransparent, this._geometry = null, this._stripeLength = 1, this._stripesEnabled = true, this._color = n$2(), this._contrastColor = n$2(), this.applyProperties(e2);
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
    this._arrowMaterial = new A({ outlineColor: e2, stripeEvenColor: o2, stripeOddColor: e2, renderOccluded: this.renderOccluded, polygonOffset: true, isDecoration: this.isDecoration }), this._handles = new e$7(), this._handles.add(d$1(() => this.view.state.camera, () => {
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
      e$5(s3, e3, r2), a2.push(s3), n2.push(t3);
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
    return gt(this._arrowMaterial, a2, n2);
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
let W = class extends S$1 {
  get _parameters() {
    const e2 = this.view.effectiveTheme, { accentColor: t2, textColor: l } = e2, a2 = E$2(t2), c2 = F(t2, 0.75), h2 = E$2(G(t2)), d2 = G(l, q$1.Low);
    return { accentColor: a2, contrastColor: h2, translucentAccentColor: c2, triangleLineWidth: 3, geodesicProjectionLineWidth: 2, guideLineWidth: 2, guideStippleLengthPixels: 3, directLabelFontSize: 16, horizontalLabelFontSize: 12, verticalLabelFontSize: 12, textColor: l, textBackgroundColor: R(d2, 0.6), textCalloutColor: R(d2, 0.5) };
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
    if ("geodesic" === this.actualVisualizedMeasurement)
      return this._requiresGeodesicGuideAt(this._startPosition) || this._requiresGeodesicGuideAt(this._endPosition) ? e.ProjectedGeodesic : e.Direct;
    const { verticalDistance: s2, horizontalDistance: n2 } = i2, o2 = s2.value, r2 = n2.value;
    return Math.min(o2 / r2, r2 / o2) < this.triangleCollapseRatioThreshold ? e.Direct : e.Triangle;
  }
  get actualVisualizedMeasurement() {
    const { measurementMode: e2, result: t2 } = this.analysisView;
    switch (e2) {
      case e$2.Auto:
        return null != t2 && t2.horizontalDistance.value > r$1 ? "geodesic" : "euclidean";
      case e$2.Euclidean:
        return "euclidean";
      case e$2.Geodesic:
        return "geodesic";
    }
  }
  get allowVisualElementsOrientationChange() {
    return null == this._triangleOrientationOverride;
  }
  set allowVisualElementsOrientationChange(e2) {
    null == this._triangleOrientationOverride !== e2 && (null == this._triangleOrientationOverride ? this._triangleOrientationOverride = this._actualVisualElementsOrientation : this._triangleOrientationOverride = null);
  }
  get labels() {
    return "geodesic" === this.actualVisualizedMeasurement ? { direct: null, horizontal: this._segmentLabel, vertical: this._verticalLabel } : { direct: this._segmentLabel, horizontal: this._horizontalLabel, vertical: this._verticalLabel };
  }
  constructor(e2) {
    super(e2), this._segmentVisualElement = null, this._triangleVisualElement = null, this._rightAngleQuad = null, this._projectedGeodesicLine = null, this._geodesicStartHint = null, this._geodesicEndHint = null, this._segmentLabel = null, this._verticalLabel = null, this._horizontalLabel = null, this._startPosition = n$1(), this._endPosition = n$1(), this._cornerPosition = n$1(), this._startPositionAtSeaLevel = n$1(), this._endPositionAtSeaLevel = n$1(), this._triangleOrientationOverride = null, this.messages = null, this.loadingMessages = true, this.visualElementOrientation = o.Auto, this.triangleCollapseRatioThreshold = 0.03;
  }
  initialize() {
    const e2 = this._parameters, t2 = { attached: true, view: this.view, isDecoration: true }, { guideLineWidth: i2, guideStippleLengthPixels: s2, triangleLineWidth: n2, geodesicProjectionLineWidth: o2, directLabelFontSize: r2, verticalLabelFontSize: l, horizontalLabelFontSize: a2 } = e2;
    this._segmentVisualElement = new p$1({ ...t2, geometry: null, renderOccluded: h.OccludeAndTransparent }), this._triangleVisualElement = new f({ ...t2, width: n2, renderOccluded: h.OccludeAndTransparent }), this._rightAngleQuad = new z$2({ ...t2, renderOccluded: h.OccludeAndTransparent });
    const c2 = { ...t2, polygonOffset: true, renderOccluded: h.OccludeAndTransparent };
    this._projectedGeodesicLine = new f({ ...c2, width: o2, stipplePattern: h$1(s2) }), this._geodesicStartHint = new f({ ...c2, width: i2, stipplePattern: h$1(s2) }), this._geodesicEndHint = new f({ ...c2, width: i2, stipplePattern: h$1(s2) }), this._segmentLabel = new f$2({ ...t2, fontSize: r2 }), this._verticalLabel = new f$2({ ...t2, fontSize: l }), this._horizontalLabel = new f$2({ ...t2, fontSize: a2 }), this.addHandles([d$1(() => {
      const { elevationAlignedStartPoint: e3, elevationAlignedEndPoint: t3 } = this.analysisView, i3 = this.view;
      return { view: i3, camera: i3.state.camera, viewMode: this.viewMode, elevationAlignedStartPoint: e3, elevationAlignedEndPoint: t3, orientation: this._actualVisualElementsOrientation, visualizedMeasurement: this.actualVisualizedMeasurement, stripeLength: this._measurementArrowStripeLength };
    }, (e3) => this._updateGeometryAndViewMode(e3), A$1), d$1(() => ({ visible: this.visible, viewMode: this.viewMode }), (e3) => this._updateVisualElementVisibility(e3), A$1), d$1(() => ({ text: this._labelsText, visualizedMeasurement: this.actualVisualizedMeasurement }), (e3) => this._updateLabelText(e3), A$1), d$1(() => ({ visible: this.visible, viewMode: this.viewMode }), (e3) => this._updateLabelVisibility(e3), A$1), d$1(() => this._measurementArrowStripeLength, (e3) => this._updateSegmentStripeLength(e3), A$1), f$3(async () => this._updateMessageBundle()), d$1(() => this._parameters, ({ textBackgroundColor: e3, textCalloutColor: t3, textColor: i3, translucentAccentColor: s3, accentColor: n3, contrastColor: o3 }) => {
      const { _segmentLabel: r3, _verticalLabel: l2, _horizontalLabel: a3, _triangleVisualElement: c3, _rightAngleQuad: h2, _projectedGeodesicLine: d2, _geodesicStartHint: u2, _geodesicEndHint: m2, _segmentVisualElement: g2 } = this;
      r3.backgroundColor = e3, r3.calloutColor = t3, r3.textColor = i3, l2.backgroundColor = e3, l2.calloutColor = t3, l2.textColor = i3, a3.backgroundColor = e3, a3.calloutColor = t3, a3.textColor = i3, c3.color = s3, h2.color = s3, d2.color = s3, u2.color = s3, m2.color = s3, g2.color = n3, g2.contrastColor = o3;
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
  _updateGeometryAndViewMode({ view: e$12, camera: t2, viewMode: i2, elevationAlignedStartPoint: s2, elevationAlignedEndPoint: n2, orientation: o$12, visualizedMeasurement: r2, stripeLength: l }) {
    const a2 = e$12.renderCoordsHelper;
    if (null == a2 || null == s2 || null == n2 || s2.equals(n2))
      return;
    let c2 = this._startPosition, h2 = this._endPosition;
    a2.toRenderCoords(s2, c2), a2.toRenderCoords(n2, h2);
    const d2 = o$12 === o.AboveSegment ? 1 : -1, u2 = d2 * (a2.getAltitude(h2) - a2.getAltitude(c2));
    u2 < 0 && (c2 = this._endPosition, h2 = this._startPosition);
    const m2 = "geodesic" === r2 ? new _$3(this._startPosition, this._endPosition, a2.spatialReference) : new m$1(this._startPosition, this._endPosition);
    switch (this._segmentVisualElement.geometry = m2, this._updateSegmentStripeLength(l), i2) {
      case e.Direct:
        this._updateSegment(m2, o$12);
        break;
      case e.Triangle:
        this._updateSegmentAndTriangle({ view: e$12, camera: t2, segment: m2, orientation: o$12, startPosition: c2, endPosition: h2, deltaSign: d2, altitudeDelta: u2 });
        break;
      case e.ProjectedGeodesic:
        this._updateSegmentAndProjection({ view: e$12, orientation: o$12, startPosition: c2, endPosition: h2 });
    }
  }
  _updateSegment(e2, t2) {
    this._segmentLabel.anchor = t2 === o.AboveSegment ? "top" : "bottom", this._segmentLabel.geometry = { type: "segment", segment: e2, sampleLocation: "center" };
  }
  _updateSegmentAndTriangle({ view: { renderCoordsHelper: e2 }, camera: t2, segment: i2, orientation: s2, startPosition: n2, endPosition: o2, deltaSign: r2, altitudeDelta: l }) {
    const a2 = this._cornerPosition;
    e2.worldUpAtPosition(n2, a2), g$1(a2, a2, r2 * Math.abs(l)), u$2(a2, a2, n2), this._triangleVisualElement.geometry = [[[n2[0], n2[1], n2[2]], [a2[0], a2[1], a2[2]], [o2[0], o2[1], o2[2]]]], this._rightAngleQuad.geometry = { previous: n2, center: a2, next: o2 };
    const c2 = new m$1(n2, a2), h2 = new m$1(a2, o2), d2 = N(n2, o2, a2, s2, t2);
    this._segmentLabel.anchor = d2.segment, this._segmentLabel.geometry = { type: "segment", segment: i2, sampleLocation: "center" }, this._verticalLabel.geometry = { type: "segment", segment: c2, sampleLocation: "center" }, this._verticalLabel.anchor = d2.vertical, this._horizontalLabel.geometry = { type: "segment", segment: h2, sampleLocation: "center" }, this._horizontalLabel.anchor = d2.horizontal;
  }
  _updateSegmentAndProjection({ view: { renderCoordsHelper: e2 }, orientation: t2, startPosition: i2, endPosition: s2 }) {
    e2.setAltitude(this._startPositionAtSeaLevel, 0, i2), e2.setAltitude(this._endPositionAtSeaLevel, 0, s2);
    const n2 = new _$3(this._startPositionAtSeaLevel, this._endPositionAtSeaLevel, e2.spatialReference);
    this._projectedGeodesicLine.setGeometryFromSegment(n2), this._geodesicStartHint.setGeometryFromSegment(new m$1(this._startPositionAtSeaLevel, i2)), this._geodesicEndHint.setGeometryFromSegment(new m$1(this._endPositionAtSeaLevel, s2)), this._segmentLabel.geometry = { type: "segment", segment: n2, sampleLocation: "center" }, this._segmentLabel.anchor = t2 === o.AboveSegment ? "top" : "bottom";
  }
  _updateLabelText({ text: e2, visualizedMeasurement: t2 }) {
    null != e2 ? (this._segmentLabel.text = "euclidean" === t2 ? e2.directDistance : e2.horizontalDistance, this._horizontalLabel.text = e2.horizontalDistance, this._verticalLabel.text = e2.verticalDistance) : (this._segmentLabel.text = null, this._horizontalLabel.text = null, this._verticalLabel.text = null), this.notifyChange("labels");
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
    const { directDistance: i2, horizontalDistance: s2, verticalDistance: n2 } = t2, o2 = this.analysisView.unit, r2 = (e3) => ({ directDistance: "", horizontalDistance: "", verticalDistance: "", ...e3 });
    switch (o2) {
      case "metric":
        return r2({ directDistance: i2 && L$1(e2, i2), horizontalDistance: s2 && L$1(e2, s2), verticalDistance: n2 && d$2(e2, n2) });
      case "imperial":
        return r2({ directDistance: i2 && R$1(e2, i2), horizontalDistance: s2 && R$1(e2, s2), verticalDistance: n2 && y$3(e2, n2) });
      default:
        return r2({ directDistance: i2 && h$2(e2, i2, o2), horizontalDistance: s2 && h$2(e2, s2, o2), verticalDistance: n2 && h$2(e2, n2, o2) });
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
        i2 = s2 && c$5(s2, "meters");
        break;
      case "imperial":
        i2 = s2 && c$5(s2, J$1(s2.value, s2.unit));
        break;
      default:
        i2 = s2 && c$5(s2, t2);
    }
    if (null == i2)
      return null;
    return c$6(i2.value / 30) * j$2(1, i2.unit, "meters");
  }
  _updateMessageBundle() {
    this.loadingMessages = true, h$3("esri/core/t9n/Units").then((e2) => {
      this.messages = e2;
    }).finally(() => {
      this.loadingMessages = false;
    });
  }
  get testData() {
    return { labels: this.labels, stripeLength: this._segmentVisualElement?.stripeLength };
  }
};
function N(e2, t2, i2, s2, n2) {
  const o$12 = J, r2 = K;
  n2.projectToRenderScreen(i2, o$12), n2.projectToRenderScreen(t2, r2);
  const l = { segment: "bottom", horizontal: "top", vertical: o$12[0] < r2[0] ? "left" : "right" };
  {
    const s3 = X, o2 = Y;
    if (p$3(e2, i2, n2, s3), p$3(e2, t2, n2, o2), j$3(s3, o2) >= I) {
      const e3 = Math.sign(s3[1]) === Math.sign(o2[1]);
      l.segment = e3 ? v$2(l.vertical) : l.vertical;
    } else {
      const e3 = Z;
      p$3(i2, t2, n2, e3), j$3(e3, o2) >= I && (l.segment = Math.sign(e3[0]) === Math.sign(o2[0]) ? v$2(l.horizontal) : l.horizontal);
    }
  }
  if (s2 === o.BelowSegment) {
    const e3 = (e4) => "top" === e4 ? "bottom" : "top";
    l.segment = e3(l.segment), l.horizontal = e3(l.horizontal), l.vertical = e3(l.vertical);
  }
  return l;
}
e$1([y$2()], W.prototype, "_parameters", null), e$1([y$2()], W.prototype, "_triangleOrientationOverride", void 0), e$1([y$2()], W.prototype, "messages", void 0), e$1([y$2()], W.prototype, "view", void 0), e$1([y$2()], W.prototype, "analysis", void 0), e$1([y$2()], W.prototype, "analysisView", void 0), e$1([y$2()], W.prototype, "loadingMessages", void 0), e$1([y$2()], W.prototype, "visible", null), e$1([y$2()], W.prototype, "viewMode", null), e$1([y$2()], W.prototype, "actualVisualizedMeasurement", null), e$1([y$2()], W.prototype, "visualElementOrientation", void 0), e$1([y$2()], W.prototype, "triangleCollapseRatioThreshold", void 0), e$1([y$2()], W.prototype, "allowVisualElementsOrientationChange", null), e$1([y$2()], W.prototype, "labels", null), e$1([y$2()], W.prototype, "_labelsText", null), e$1([y$2()], W.prototype, "_actualVisualElementsOrientation", null), e$1([y$2()], W.prototype, "_measurementArrowStripeLength", null), W = e$1([c("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")], W);
const I = Math.cos(h$4(12)), J = x$1(), K = x$1(), X = s$2(), Y = s$2(), Z = s$2();
let p2 = class extends s$3(S$1) {
  constructor(t2) {
    super(t2), this.type = "direct-line-measurement-view-3d", this.analysis = null, this.result = null, this.measurementMode = e$2.Auto, this.elevationAlignedStartPoint = null, this.elevationAlignedEndPoint = null;
  }
  initialize() {
    const t2 = this.view, i2 = this.analysis;
    this._analysisVisualization = new W({ view: t2, analysis: i2, analysisView: this }), this._analysisController = new b({ view: t2, analysis: i2, viewData: this });
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
e$1([y$2()], p2.prototype, "updating", null), e$1([y$2({ readOnly: true })], p2.prototype, "type", void 0), e$1([y$2({ constructOnly: true, nonNullable: true })], p2.prototype, "analysis", void 0), e$1([y$2()], p2.prototype, "result", void 0), e$1([y$2()], p2.prototype, "measurementMode", void 0), e$1([y$2()], p2.prototype, "elevationAlignedStartPoint", void 0), e$1([y$2()], p2.prototype, "elevationAlignedEndPoint", void 0), e$1([y$2({ readOnly: true })], p2.prototype, "viewMode", null), e$1([y$2({ readOnly: true })], p2.prototype, "actualVisualizedMeasurement", null), e$1([y$2()], p2.prototype, "visualElementOrientation", null), e$1([y$2()], p2.prototype, "allowVisualElementsOrientationChange", null), e$1([y$2()], p2.prototype, "triangleCollapseRatioThreshold", null), e$1([y$2({ readOnly: true })], p2.prototype, "directLabelText", null), e$1([y$2({ readOnly: true })], p2.prototype, "horizontalLabelText", null), e$1([y$2({ readOnly: true })], p2.prototype, "verticalLabelText", null), e$1([y$2()], p2.prototype, "_analysisVisualization", void 0), e$1([y$2()], p2.prototype, "_analysisController", void 0), e$1([y$2()], p2.prototype, "unit", null), e$1([y$2(e$8)], p2.prototype, "_defaultUnit", void 0), p2 = e$1([c("esri.views.3d.analysis.DirectLineMeasurementAnalysisView3D")], p2);
const y = p2;
const DirectLineMeasurementAnalysisView3D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: y
}, Symbol.toStringTag, { value: "Module" }));
export {
  DirectLineMeasurementAnalysisView3D as D,
  n
};
