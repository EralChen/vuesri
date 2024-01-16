import { z8 as x$2, z9 as O$2, eQ as n$1, hw as r$1, mK as c$2, ua as n$2, q0 as g$5, rZ as M$1, hx as O$3, vr as J$1, eN as _$1, pv as P$1, vh as G$1, nY as f$4, eO as z$2, hy as e$1, f5 as q$1, ky as x$3, za as X$1, ki as e$2, f8 as v, bo as e$3, bp as y$1, br as c$3, bs as g$6, zb as g$7, er as c$4, bJ as d$1, bR as A, jX as j$1, bb as s$2, bu as u$1, pM as R, sB as G$2, rO as u$2, pS as nt$1, o4 as ft$1, mL as g$8, rV as t$2, s4 as n$3, bn as P$2, zc as p$3, h8 as u$3, cy as x$4, iB as s$3, pt as k$2, ps as b$4, mJ as e$6, p_ as nt$2, fn as F$3, r_ as r$3, pq as s$4, o5 as f$5, eP as o$1, nX as d$3, nV as x$5, oP as r$4, f9 as ot$1, fl as m$2, et as I$1, eu as e$7, ev as t$3, zd as l$2, ft as p$4, bh as V$1, ze as p$5, zf as P$3, zg as I$2, bS as e$8, zh as t$4, mz as e$9, bm as h$2, q6 as h$3, bK as C$2, x3 as w$4, kz as d$5, bD as u$5, eg as p$8, zi as j$2, pw as b$5, ng as t$6, fE as e$b, zj as c$5, kr as l$4, pW as o$2, pz as r$5, lk as q$2, pC as t$7, zk as A$2, n_ as R$2, n$ as b$6, zl as s$5, q5 as l$5, sD as f$7, sF as f$8, em as e$c } from "./chunk-KFNcxJaF.js";
import { s as s$6 } from "./chunk-FIgfswJd.js";
import { t as t$1, r as r$2, u as u$6 } from "./chunk-D9uRu2V9.js";
import { e as e$4, h as h$4 } from "./chunk-Jwrw72Py.js";
import { f as f$3 } from "./chunk-KXkDk_IW.js";
import { m as m$1, g as g$a } from "./chunk-di5vFT30.js";
import { x as x$1, z as z$3 } from "./chunk-sO9RJjHR.js";
import { $ as $$1, w as w$2, e as e$5, D as D$1, F as F$2, M as M$2, O as O$4 } from "./chunk-S1k8w-_l.js";
import { F as F$1, H as H$1, A as A$1, l as l$3 } from "./chunk-G5EKjELj.js";
import { g as g$9 } from "./chunk-zw9UPZSi.js";
import { d as d$2, R as R$1, U as U$2 } from "./chunk-FKMfLf6u.js";
import { t as t$5 } from "./chunk-Jk46lvUq.js";
import { O as O$5, d as d$4 } from "./chunk-rpjYs__P.js";
import { u as u$4, a as a$4, r as r$6, b as t$8 } from "./chunk-XZLuqbq5.js";
import { V as V$2, p as p$6, w as w$3 } from "./chunk-ntY6_aOQ.js";
import { e as e$a } from "./chunk-tNL5i2kK.js";
import { p as p$7, f as f$6 } from "./chunk-vWiGr0Yr.js";
import { a as a$3, b as a$5, v as v$1, l as l$6 } from "./chunk-ipKbHu6Z.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-vcGzLtIh.js";
import "./chunk-z9Tnkksn.js";
import "./chunk-s_1zK5-o.js";
import "./chunk-NjpOSVY5.js";
import "./chunk-nQSFOLog.js";
import "./chunk-x5arQHJi.js";
import "./chunk-OvdaIYdh.js";
function T(n2, o2, a2) {
  if (null == n2)
    return null;
  const s2 = n2.dimensionSegment.startRenderSpace, d2 = n2.dimensionSegment.endRenderSpace, c2 = x$1(s2, d2, n2.spatialReference);
  if (null == c2)
    return null;
  const l2 = o2 === t$1.Vertical ? x$2(c2.value, c2.unit, a2) : O$2(c2.value, c2.unit, a2);
  return f$3(c2, l2);
}
function C$1(e2) {
  const { elevationAlignedStartPoint: n2, elevationAlignedEndPoint: t2, dimension: { offset: r2, measureType: i2, orientation: o2 } } = e2;
  return { elevationAlignedStartPoint: n2, elevationAlignedEndPoint: t2, offset: r2, measureType: i2, orientation: o2 };
}
function H({ elevationAlignedStartPoint: n2, elevationAlignedEndPoint: t2, offset: r2, measureType: i2, orientation: o2 }, a2, d2 = null) {
  if (null == n2 || null == t2)
    return null;
  const c2 = b$3(null != d2 ? d2.directSegment : new m$1(), { elevationAlignedStartPoint: n2, elevationAlignedEndPoint: t2 }, a2), l2 = null != d2 ? d2.primaryOffsetAxis : n$1();
  I(l2, { measureType: i2, elevationAlignedStartPoint: n2, elevationAlignedEndPoint: t2, directSegment: c2, orientation: o2, renderCoordsHelper: a2 });
  const u2 = null != d2 ? d2.dimensionSegment : new m$1();
  return F({ elevationAlignedStartPoint: n2, elevationAlignedEndPoint: t2 }) && i2 === t$1.Vertical ? (r$1(u2.startRenderSpace, c2.startRenderSpace), r$1(u2.endRenderSpace, c2.endRenderSpace)) : G(u2, { offsetAxis: l2, offset: r2, relativeToSegment: c2, renderCoordsHelper: a2 }), { directSegment: c2, dimensionSegment: u2, primaryOffsetAxis: l2, spatialReference: a2.spatialReference };
}
function w$1(e2, n2, t2, r2) {
  return n2 === k$1.Start ? (r$1(e2.startRenderSpace, t2.startRenderSpace), r$1(e2.endRenderSpace, r2.startRenderSpace)) : (r$1(e2.startRenderSpace, t2.endRenderSpace), r$1(e2.endRenderSpace, r2.endRenderSpace)), e2;
}
var k$1;
function z$1(e2, n2, t2, r2) {
  q$1(e2.startRenderSpace, n2.startRenderSpace, t2, r2), q$1(e2.endRenderSpace, n2.endRenderSpace, t2, r2);
}
function U$1(n2, t2, r2, i2) {
  switch (t2) {
    case t$1.Direct:
      return b$3(n2, r2, i2);
    case t$1.Horizontal:
    case t$1.Vertical: {
      const { elevationAlignedStartPoint: o2, elevationAlignedEndPoint: a2, dimension: s2, geometry: d2 } = r2;
      let c2;
      if (s2.measureType === t$1.Direct) {
        c2 = M(d2, i2) === o2.z > a2.z, t2 === t$1.Horizontal && (c2 = !c2);
      } else
        c2 = !V(d2);
      const [l2, u2] = c2 ? [o2, a2] : [a2, o2], p2 = x$3(u2, D);
      return t2 === t$1.Horizontal ? p2.z = l2.z : (p2.x = l2.x, p2.y = l2.y), i2.toRenderCoords(l2, n2.startRenderSpace), i2.toRenderCoords(p2, n2.endRenderSpace), n2;
    }
  }
}
function b$3(e2, n2, t2) {
  return t2.toRenderCoords(n2.elevationAlignedStartPoint, e2.startRenderSpace), t2.toRenderCoords(n2.elevationAlignedEndPoint, e2.endRenderSpace), e2;
}
function M(e2, n2) {
  const t2 = e2.directSegment.eval(0.5, c$2.get()), r2 = n2.worldUpAtPosition(t2, c$2.get()), i2 = e2.dimensionSegment.eval(0.5, c$2.get()), o2 = J$1(c$2.get(), i2, t2);
  return !G$1(o2, f$4) && P$1(o2, r2) > 0;
}
function V(e2) {
  const { startRenderSpace: n2, endRenderSpace: t2 } = e2.dimensionSegment, { startRenderSpace: r2, endRenderSpace: i2 } = e2.directSegment;
  return X$1(r2, n2) < X$1(i2, t2);
}
!function(e2) {
  e2[e2.Start = 0] = "Start", e2[e2.End = 1] = "End";
}(k$1 || (k$1 = {}));
const D = e$2(0, 0, 0, null);
function O$1(e2, n2, t2, r2) {
  const { directSegment: i2 } = t2, o2 = I(c$2.get(), { measureType: n2, directSegment: i2, renderCoordsHelper: r2 }), a2 = G(q, { offsetAxis: o2, offset: 0, relativeToSegment: i2, renderCoordsHelper: r2 }).eval(0.5, c$2.get()), s2 = J$1(c$2.get(), e2, a2);
  return P$1(s2, o2) * r2.unitInMeters;
}
const q = new m$1();
function I(t2, r2) {
  const { measureType: i2, elevationAlignedStartPoint: a2, elevationAlignedEndPoint: d2, directSegment: { startRenderSpace: p2, endRenderSpace: g3 }, directSegment: v2, renderCoordsHelper: y2 } = r2, j2 = v2.eval(0.5, c$2.get()), E2 = y2.worldUpAtPosition(j2, c$2.get()), h2 = y2.worldBasisAtPosition(j2, n$2.Y, c$2.get());
  switch (i2) {
    case t$1.Horizontal:
      r$1(t2, E2);
      break;
    case t$1.Vertical:
      P$1(p2, E2) < P$1(g3, E2) ? J$1(t2, g3, p2) : J$1(t2, p2, g3), _$1(t2, t2, E2), _$1(t2, t2, E2);
      break;
    case t$1.Direct: {
      const e2 = r2.orientation ?? 0;
      if (F({ elevationAlignedStartPoint: a2, elevationAlignedEndPoint: d2 }))
        g$5(B, -M$1(e2), E2), O$3(t2, h2, B);
      else {
        const r3 = J$1(c$2.get(), g3, p2), i3 = _$1(c$2.get(), r3, E2);
        _$1(i3, i3, r3), g$5(B, M$1(e2), r3), O$3(t2, i3, B);
      }
      break;
    }
  }
  return G$1(t2, f$4) ? r$1(t2, h2) : z$2(t2, t2);
}
const B = e$1();
function F({ elevationAlignedStartPoint: e2, elevationAlignedEndPoint: n2 }) {
  return null != e2 && null != n2 && e2.x === n2.x && e2.y === n2.y;
}
function G(e2, n2) {
  const { offsetAxis: t2, offset: r2, relativeToSegment: { startRenderSpace: i2, endRenderSpace: o2 }, relativeToSegment: a2, renderCoordsHelper: s2 } = n2, c2 = r2 / s2.unitInMeters, [l2, u2] = L(i2, o2, t2, c2);
  return q$1(e2.startRenderSpace, a2.startRenderSpace, t2, l2), q$1(e2.endRenderSpace, a2.endRenderSpace, t2, u2), e2;
}
function L(e2, n2, t2, r2 = 0) {
  const i2 = P$1(n2, t2), o2 = P$1(e2, t2), a2 = Math.abs(i2 - o2) + r2;
  return i2 > o2 ? [a2, r2] : [r2, a2];
}
function Y(e2, n2, t2) {
  const r2 = n2.directSegment.eval(0.5, c$2.get());
  return t2.worldUpAtPosition(r2, e2);
}
function Z(e2, n2) {
  const { startRenderSpace: t2, endRenderSpace: r2 } = n2.directSegment;
  return J$1(e2, r2, t2);
}
function J(e2, n2, t2 = { invert: false }) {
  const { startRenderSpace: r2, endRenderSpace: i2 } = n2.dimensionSegment;
  return t2.invert ? J$1(e2, r2, i2) : J$1(e2, i2, r2);
}
function K(e2, n2) {
  const t2 = e2.directSegment.eval(0.5, c$2.get());
  return n2.headingAtPosition(t2, e2.primaryOffsetAxis);
}
function N(e2, n2) {
  return v(J(Q, e2)) / n2 ** 2;
}
const Q = n$1();
function W(e2) {
  const { elevationAlignedStartPoint: n2, elevationAlignedEndPoint: r2 } = e2;
  if (null == n2 || null == r2)
    return false;
  const i2 = z$3(n2, r2);
  return null != i2 && f$3(i2, "meters").value > X;
}
const X = 1e5;
function $(e2) {
  return null != e2.geometry;
}
let g$4 = class g extends g$6 {
  constructor(t2) {
    super(t2);
  }
  initialize() {
    const t2 = g$7(() => this.analysisViewData.computations, ({ computation: t3 }) => this._watchComputation(t3));
    this.addHandles(c$4(t2));
  }
  get analysis() {
    return this.analysisViewData.analysis;
  }
  get _defaultUnit() {
    return e$4(this.view);
  }
  _watchComputation(t2) {
    return d$1(() => C$1(t2), (s2) => {
      const { measureType: o2 } = s2;
      if (W(s2) && o2 !== t$1.Direct) {
        const e2 = Math.round(j$1(X, "meters", "kilometers"));
        return s$2.getLogger(this).warnOnce(`A ${o2} dimension in the analysis (id: '${this.analysis.id}') will not display, because only direct dimensions can measure lengths greater than ${e2} km. Update the measureType of the affected dimension to "direct" to display it.`), void (t2.geometry = null);
      }
      const i2 = H(s2, this.view.renderCoordsHelper, t2.geometry);
      t2.geometry = i2, t2.result.length = T(i2, o2, this._defaultUnit);
    }, A);
  }
};
e$3([y$1({ constructOnly: true })], g$4.prototype, "analysisViewData", void 0), e$3([y$1({ constructOnly: true })], g$4.prototype, "view", void 0), e$3([y$1()], g$4.prototype, "analysis", null), e$3([y$1()], g$4.prototype, "_defaultUnit", null), g$4 = e$3([c$3("esri.views.3d.analysis.Dimension.support.DimensionController")], g$4);
function n(o2) {
  return R(o2.accentColor, 0.5);
}
function c$1(o2) {
  return G$2(o2.accentColor);
}
const e = 5, i$1 = new u$1([127, 127, 127, 0.5]), l$1 = 0.8, f$2 = 4, m = 6, s$1 = 0.1, u = 0.5, p$2 = 18, C = 2, a$2 = 0.3, j = 2, w = 0.25, x = 20, U = 5, b$2 = 5, d = 10, g$3 = 2500, h$1 = 50, k = 2;
class He {
  constructor(e2) {
    this.start = e2.start, this.end = e2.end, this.offset = e2.offset, this.heading = e2.heading, this.rotation = e2.rotation, this.direct = e2.direct, this.horizontal = e2.horizontal, this.vertical = e2.vertical;
  }
  manipulatorName(e2) {
    return Object.keys(this).find((t2) => this.hasOwnProperty(t2) && e2 === this[t2]);
  }
  values() {
    return [this.start, this.end, this.offset, this.heading, this.rotation, this.direct, this.horizontal, this.vertical];
  }
  forEachMeasureTypeManipulator(e2) {
    for (const n2 of r$2)
      e2(this.manipulatorForMeasureType(n2), n2);
  }
  manipulatorForMeasureType(e2) {
    switch (e2) {
      case t$1.Direct:
        return this.direct;
      case t$1.Horizontal:
        return this.horizontal;
      case t$1.Vertical:
        return this.vertical;
    }
  }
}
class Me extends $$1 {
  constructor(t2, n$12) {
    const r2 = w$2(u$1.toUnitRGBA(n(t2.effectiveTheme))), i2 = [new e$5(nt$1(r2, 1, 32, 32), tt)];
    super({ view: t2, renderObjects: i2, metadata: n$12.metadata, available: false, grabCursor: "crosshair", radius: e, collisionPriority: 1 }), this._themeHandle = d$1(() => ({ color: u$1.toUnitRGBA(n(t2.effectiveTheme)) }), (e2) => r2.setParameters(e2));
  }
  destroy() {
    this._themeHandle.remove(), super.destroy();
  }
}
function Pe(e2, t2) {
  const n2 = [r$4(-0.5, 0, 0), r$4(0.5, 0, 0)], r2 = ft$1(t2.unfocusedMaterial, n2.map((e3) => g$8(n$1(), e3, u))), i2 = r2.instantiate({ material: t2.focusedMaterial });
  return new $$1({ view: e2, renderObjects: [new e$5(r2, t$2.Unfocused | t$2.Selected | tt), new e$5(i2, t$2.Focused | tt)], collisionType: { type: "line", paths: [n2] }, radius: $e(t2.lineSizePt) / 2, metadata: t2.metadata, available: false, ...D$1 });
}
class Ce extends $$1 {
  constructor(t2, { lineSizePt: n$12, material: r2, metadata: i2 }) {
    super({ view: t2, autoScaleRenderObjects: false, collisionPriority: 1, metadata: i2 }), this._options = { calloutColor: n$3(), lineSizePt: n$12, material: r2 }, this._themeHandle = d$1(() => u$1.toUnitRGBA(n(t2.effectiveTheme)), (e2) => {
      this._options.calloutColor = e2, et(this, Te({ ...this._options, metadata: this.metadata }));
    }, P$2);
  }
  update({ lineSizePt: e2, material: t2 }) {
    this._options.lineSizePt = e2, this._options.material = t2, et(this, Te({ ...this._options, metadata: this.metadata }));
  }
  destroy() {
    this._themeHandle.remove(), super.destroy();
  }
}
function Te({ calloutColor: e2, lineSizePt: t2, material: n2, metadata: r2 }) {
  return { calloutLength: 0.25 * p$3 * l$1 * u$3(t2) + p$2, calloutColor: e2, calloutWidth: C, customStateMask: tt, discScale: a$2, focusMultiplier: j, material: n2, metadata: r2 };
}
function Oe(e2, t2) {
  const n2 = [r$4(-0.5, 0, 0), r$4(0.5, 0, 0)], r2 = ft$1(t2.thinOffsetManipulatorMaterial, n2), i2 = ft$1(t2.unfocusedMaterial, n2.map((e3) => g$8(n$1(), e3, u))), o2 = i2.instantiate({ material: t2.focusedMaterial });
  return new $$1({ view: e2, renderObjects: [new e$5(i2, t$2.Unfocused | tt), new e$5(o2, t$2.Focused | tt), new e$5(r2, tt)], collisionType: { type: "line", paths: [n2] }, radius: $e(t2.lineSizePt) / 2, available: false, metadata: t2.metadata, ...D$1 });
}
function Ue(e2, { isStart: t2, createSnappingPipelineStep: n2, dimension: r2, onUpdate: i2, view: o2 }) {
  const a2 = t2 ? "startPoint" : "endPoint", s2 = d$2(e2, (e3, t3, s3, c2) => {
    const m2 = A$1(e3), { snappingStep: l2, cancelSnapping: d2 } = n2(c2);
    s3 = s3.next(m2).next(R$1(r2, [a2, "measureType", "orientation"])).next(d2), t3.next(m2).next(F$1(o2)).next(...l2).next((e4) => {
      const t4 = x$3(e4.mapEnd, new x$4());
      i2("startPoint" === a2 ? { startPoint: t4 } : { endPoint: t4 });
    });
  });
  return [s2];
}
function Re(e2, { computation: t2, view: n2 }) {
  return [d$2(e2, (e3, r2, i2) => {
    if (!$(t2) || !e3.selected)
      return;
    const { geometry: o2, dimension: a2 } = t2, s2 = A$1(e3);
    r2.next(s2).next(Le(n2, a2, o2.dimensionSegment, o2.primaryOffsetAxis)), i2.next(s2).next(R$1(a2, ["offset"]));
  })];
}
function ze(e2, { computation: t2, view: n2 }) {
  return [d$2(e2, (e3, r2, i2) => {
    De({ cancel: i2, computation: t2, settingHeading: true, steps: r2, view: n2 });
  })];
}
function ke(e2, { computation: t2, view: n2 }) {
  return [d$2(e2, (e3, r2, i2) => {
    De({ cancel: i2, computation: t2, settingHeading: false, steps: r2, view: n2 });
  }), e2.events.on("immediate-click", (e3) => {
    Ae(e3, t2, n2);
  })];
}
function Ae(e2, t2, n2) {
  const { dimension: i2, geometry: o2 } = t2;
  if (90 === i2.orientation || 270 === i2.orientation)
    return i2.orientation = 0, void e2.stopPropagation();
  if (null == o2)
    return;
  const { renderCoordsHelper: a2 } = n2, s2 = H({ ...C$1(t2), orientation: 90 }, a2), c2 = H({ ...C$1(t2), orientation: 270 }, a2);
  if (null == s2 || null == c2)
    return;
  const m2 = K(s2, a2), l2 = K(c2, a2), d2 = Ee(o2, n2), u2 = s$3.shortestSignedDiff(d2, m2), p2 = s$3.shortestSignedDiff(d2, l2);
  i2.orientation = Math.abs(u2) < Math.abs(p2) ? 90 : 270, e2.stopPropagation();
}
function De(e2) {
  const { cancel: t2, computation: n2, settingHeading: r2, steps: o2, view: a2 } = e2;
  if (!$(n2))
    return;
  const { renderCoordsHelper: s2 } = a2, { dimension: c2, geometry: m2 } = n2, l2 = n$1(), d2 = Ze(n$1(), m2, m2.directSegment, s2), p2 = Je(c$2.get(), { forHeading: r2, geometry: m2, renderCoordsHelper: s2 }), f2 = k$2(d2, p2, b$4()), g3 = r2 ? c2.orientation ?? K(m2, a2.renderCoordsHelper) : c2.orientation ?? 0;
  o2.next(H$1(a2, f2)).next((e3) => {
    "start" === e3.action && r$1(l2, e3.renderStart);
    const t3 = ot$1(f2), n3 = F$2(l2, e3.renderEnd, d2, t3);
    let o3 = g3 - m$2(n3);
    r2 || (o3 = _e(o3)), c2.orientation = o3;
  }), t2.next(R$1(c2, ["orientation"]));
}
function _e(e2) {
  const t2 = s$3.normalize(e2) % 90;
  return t2 < b$2 ? e2 - t2 : 90 - t2 < b$2 ? e2 + (90 - t2) : e2;
}
function Fe(e2, { computation: t2, manipulatorMeasureType: r2, view: i2 }) {
  let o2 = t$1.Direct, a2 = 0, s2 = 0;
  return [e2.events.on("grab-changed", (n2) => {
    if ("start" !== n2.action || !$(t2))
      return;
    const { dimension: c2, geometry: m2 } = t2;
    o2 = c2.measureType, a2 = c2.offset, s2 = c2.orientation;
    const l2 = r$1(c$2.get(), e2.renderLocation);
    c2.measureType = r2, c2.offset = O$1(l2, r2, m2, i2.renderCoordsHelper), c2.orientation = 0;
  }), d$2(e2, (e3, n2, c2) => {
    if (!$(t2))
      return;
    const { geometry: m2, dimension: l2 } = t2, { renderCoordsHelper: d2 } = i2, u2 = U$1(ot, r2, t2, d2), p2 = I(c$2.get(), { measureType: r2, directSegment: m2.directSegment, renderCoordsHelper: d2 }), f2 = A$1(e3);
    n2.next(f2).next(Le(i2, l2, u2, p2)), c2.next(f2).next((e4) => (l2.measureType = o2, l2.offset = a2, l2.orientation = s2, e4));
  })];
}
function Le(e2, t2, n2, r2) {
  const i2 = e$6(c$2.get(), n2.endRenderSpace, n2.startRenderSpace);
  _$1(i2, i2, r2);
  const o2 = k$2(n2.startRenderSpace, i2, b$4()), a2 = k$2(n2.startRenderSpace, r2, b$4()), s2 = t2.offset;
  let c2, m2 = 0;
  const l2 = new U$2();
  return l2.next(H$1(e2, o2)).next((n3) => {
    "start" === n3.action && (m2 = nt$2(a2, n3.renderStart));
    const r3 = (nt$2(a2, n3.renderEnd) - m2) * e2.renderCoordsHelper.unitInMeters;
    t2.offset = s2 + r3, c2 = n3;
  }), (e3) => (l2.execute(e3), c2);
}
function Ee(e2, t2) {
  const { directSegment: n2 } = e2, { renderCoordsHelper: r2 } = t2, i2 = Y(c$2.get(), e2, r2), o2 = Z(c$2.get(), e2), a2 = _$1(c$2.get(), o2, i2), { viewForward: s2 } = t2.state.camera;
  P$1(a2, s2) > 0 && g$8(a2, a2, -1);
  const c2 = n2.eval(0.5, c$2.get());
  return r2.headingAtPosition(c2, a2);
}
function Ie(e2, t2, n2) {
  const { dimensionSegment: r2, primaryOffsetAxis: i2 } = t2, o2 = J(nt, t2), a2 = F$3(o2, f$4) ? r$3(it) : M$2(o2, i2, f$4, it), s2 = Math.max(s$4(o2), s$1 / n2.unitInMeters);
  f$5(a2, a2, o$1(nt, s2, s2, s2)), e2.modelTransform = a2, e2.renderLocation = r2.eval(0.5, nt);
}
function Ge(e2, t2, n2) {
  Ne(e2, t2, n2, { forHeading: true });
}
function Be(e2, t2, n2) {
  Ne(e2, t2, n2, { forHeading: false });
}
function Ne(e2, t2, n2, { forHeading: r2 }) {
  const { dimension: i2, geometry: o2 } = t2, { primaryOffsetAxis: a2 } = o2, s2 = g$8(Ve, a2, i2.offset >= 0 ? 1 : -1), c2 = Je(We, { forHeading: r2, geometry: o2, renderCoordsHelper: n2 });
  _$1(c2, c2, s2);
  const m2 = M$2(s2, c2, f$4, it);
  e2.modelTransform = m2, e2.renderLocation = Ze(nt, o2, o2.dimensionSegment, n2);
}
const Ve = n$1(), We = n$1();
function qe(e2, t2, n2, r2) {
  const { geometry: i2 } = t2, o2 = U$1(ot, n2, t2, r2), a2 = I(nt, { measureType: n2, directSegment: i2.directSegment, renderCoordsHelper: r2 }), s2 = J$1(rt, o2.endRenderSpace, o2.startRenderSpace), c2 = M$2(s2, a2, f$4, it), l2 = s$4(s2);
  f$5(c2, c2, o$1(rt, l2, l2, l2)), e2.modelTransform = c2, e2.renderLocation = o2.eval(0.5, rt);
}
function Ze(e2, t2, n2, r2) {
  const { startRenderSpace: i2, endRenderSpace: o2 } = n2, a2 = Ke(t2, r2) ? i2 : o2;
  return r$1(e2, a2);
}
function Je(e2, { forHeading: t2, geometry: n2, renderCoordsHelper: r2 }) {
  return t2 ? Y(e2, n2, r2) : J(e2, n2, { invert: true });
}
function Ke(e2, t2) {
  const n2 = Z(Qe, e2), r2 = Y(Xe, e2, t2);
  return P$1(n2, r2) > 0;
}
const Qe = n$1(), Xe = n$1();
function Ye(e2) {
  return u$3(e2) + f$2;
}
function $e(e2) {
  return u$3(e2) + m;
}
function et(e2, t2) {
  const n2 = t2.material ?? new g$9({ transparent: true, writeDepth: false, textureId: t2.texture?.id, renderOccluded: d$3.Opaque, isDecoration: true }), r2 = t2.focusMultiplier ?? O$4.focusMultiplier, i2 = t2.calloutLength ?? O$4.calloutLength, o2 = O$4.discRadius * (t2.discScale ?? 1), a2 = o2 * r2, s2 = (e3, t3) => {
    const n3 = [0, 1, 2, 2, 3, 0];
    return new I$1(t3, [[e$7.POSITION, new t$3([i2 - e3, -e3, 0, i2 + e3, -e3, 0, i2 + e3, e3, 0, i2 - e3, e3, 0], n3, 3, true)], [e$7.UV0, new t$3([0, 0, 1, 0, 1, 1, 0, 1], n3, 2, true)]]);
  }, c2 = t2.calloutWidth ?? O$4.calloutWidth, m2 = new x$5({ width: c2, color: t2.calloutColor, renderOccluded: d$3.OccludeAndTransparent, isDecoration: true }), l2 = ft$1(m2, [[0, 0, 0], [i2 - o2, 0, 0]]), d2 = ft$1(m2, [[0, 0, 0], [i2 - a2, 0, 0]]), u2 = t2.customStateMask ?? u$2.None;
  e2.collisionType = { type: "disc", direction: [0, 0, 1], offset: [i2, 0, 0] }, e2.focusMultiplier = r2, e2.metadata = t2.metadata, e2.radius = o2, e2.renderObjects = [new e$5(s2(o2, n2), t$2.Unfocused | u2), new e$5(l2, t$2.Unfocused | u2), new e$5(s2(a2, n2), t$2.Focused | u2), new e$5(d2, t$2.Focused | u2)];
}
const tt = u$2.Custom1, nt = n$1(), rt = n$1(), it = e$1(), ot = new m$1();
var P;
function p$1(e2, t2) {
  return { enabled: t2.effectiveFeatureEnabled, elevationAlignedStartPoint: e2.elevationAlignedStartPoint, elevationAlignedEndPoint: e2.elevationAlignedEndPoint, geometry: e2.geometry };
}
function f$1(e2, s2) {
  if (W(e2))
    return P.Direct;
  if (!e2.enabled)
    return null;
  const { geometry: u2 } = e2;
  if (null == u2 || F$3(u2.directSegment.startRenderSpace, u2.directSegment.endRenderSpace))
    return null;
  const { camera: p2 } = s2.state, f2 = Y(c$2.get(), u2, s2.renderCoordsHelper), g3 = Z(c$2.get(), u2), S2 = g$8(c$2.get(), f2, P$1(g3, f2)), v$12 = e$6(c$2.get(), g3, S2), y2 = v(v$12), A2 = v(S2), { startRenderSpace: j2, endRenderSpace: z2 } = u2.directSegment, R2 = Math.max(p2.computeScreenPixelSizeAt(j2) * d, p2.computeScreenPixelSizeAt(z2) * d) ** 2;
  return y2 < R2 ? P.Vertical : A2 < R2 ? P.Horizontal : null;
}
function g$2(e2, t2, { constraint: n2, view: i2 }) {
  const { unconstrainedGeometry: o2 } = e2;
  if (null == o2)
    return;
  const { renderCoordsHelper: r2, spatialReference: a2 } = i2, { startRenderSpace: s2, endRenderSpace: l2 } = o2.directSegment, c2 = r2.fromRenderCoords(s2, new x$4(), a2), d2 = r2.fromRenderCoords(l2, new x$4(), a2);
  let m2;
  m2 = "start" === t2 ? { startPoint: c2 } : { endPoint: d2 }, S$1(e2, m2, { constraint: n2, elevationAlignedStartPoint: e2.elevationAlignedStartPoint, elevationAlignedEndPoint: e2.elevationAlignedEndPoint, unconstrainedGeometry: o2, view: i2 });
}
function S$1(t2, n2, i2) {
  const { constraint: o2, elevationAlignedStartPoint: r2, elevationAlignedEndPoint: a2, unconstrainedGeometry: l2, view: c2 } = i2, { dimension: d2, previousConstraint: m2, preConstraintProperties: u2 } = t2;
  if (null == r2 || null == a2)
    return;
  const p2 = () => {
    "startPoint" in n2 ? d2.startPoint = n2.startPoint : "endPoint" in n2 && (d2.endPoint = n2.endPoint);
  };
  if (null == o2)
    p2(), null != m2 && null != u2 && (d2.measureType = u2.measureType, d2.orientation = u2.orientation);
  else
    switch (d2.measureType = t$1.Direct, o2) {
      case P.Horizontal:
        if (o2 !== m2 && (d2.orientation = 0), "startPoint" in n2) {
          const e2 = n2.startPoint;
          null != e2 && (e2.z = a2.z), d2.startPoint = e2;
        } else if ("endPoint" in n2) {
          const e2 = n2.endPoint;
          null != e2 && (e2.z = r2.z), d2.endPoint = e2;
        }
        break;
      case P.Vertical:
        if (o2 !== m2 && (d2.orientation = Ee(l2, c2)), "startPoint" in n2) {
          const e2 = n2.startPoint;
          null != e2 && (e2.x = a2.x, e2.y = a2.y), d2.startPoint = e2;
        } else if ("endPoint" in n2) {
          const e2 = n2.endPoint;
          null != e2 && (e2.x = r2.x, e2.y = r2.y), d2.endPoint = e2;
        }
        break;
      case P.Direct:
        o2 !== m2 && null != u2 && (d2.orientation = u2.orientation), p2();
    }
  t2.previousConstraint = o2, t2.unconstrainedGeometry = l2;
}
!function(e2) {
  e2[e2.Horizontal = 0] = "Horizontal", e2[e2.Vertical = 1] = "Vertical", e2[e2.Direct = 2] = "Direct";
}(P || (P = {}));
function a$1(a2, s2) {
  const l2 = new l$2({ enabled: true, selfEnabled: false, featureEnabled: true, distance: s2?.distance ?? p$4.distance, touchSensitivityMultiplier: s2?.touchSensitivityMultiplier ?? p$4.touchSensitivityMultiplier });
  return { ...d$1(() => a2.map?.allLayers?.toArray() ?? [], (t2) => {
    l2.featureSources = new V$1(t2.map((e2) => new p$5({ layer: e2, enabled: true })));
  }, P$2), options: l2 };
}
const i = /* @__PURE__ */ new Map();
function a(n2) {
  if (!i.has(n2)) {
    const e2 = a$1(n2, { distance: 10 }), o3 = s(n2, e2.options);
    i.set(n2, { referenceCount: 0, snappingManager: o3, remove: () => {
      e2.remove(), o3.destroy();
    } });
  }
  const o2 = i.get(n2);
  o2.referenceCount++;
  const t2 = e$8(() => p(n2, o2));
  return { snappingManager: o2.snappingManager, ...t2 };
}
function p(e2, r2) {
  r2.referenceCount--, r2.referenceCount > 0 || t$4(() => {
    0 === r2.referenceCount && (r2.remove(), i.delete(e2));
  });
}
function s(e2, n2) {
  return new P$3({ view: e2, options: n2, snappingEnginesFactory: (n3, r2) => [new I$2({ view: e2, spatialReference: e2.spatialReference, options: r2 })] });
}
let gt = class extends g$6 {
  constructor(t2) {
    super(t2), this._stagedDimension = null, this._computationManipulators = /* @__PURE__ */ new Map(), this._computationHandles = new e$9(), this._orientationManipulatorTexture = null, this._updatingHandles = new h$2(), this._getSnappingContext = t$5((t3) => new e$a({ elevationInfo: { mode: "absolute-height", offset: 0 }, pointer: t3, editGeometryOperations: new V$2(new p$6("point", w$3(true, false, this.view.spatialReference))), visualizer: new O$5() }));
    const { view: i2 } = t2;
    this._snappingManagerResult = a(i2), this.addHandles(this._snappingManagerResult), this._unfocusedOffsetManipulatorMaterial = this._createOffsetManipulatorMaterial(), this._focusedOffsetManipulatorMaterial = this._createOffsetManipulatorMaterial(), this._thinOffsetManipulatorMaterial = this._createOffsetManipulatorMaterial(), this._thinOffsetManipulatorMaterial.setParameters({ stipplePattern: h$3(2) }), this._constraintSnappingIndicator = new u$4({ view: i2, attached: true, width: 1, renderOccluded: d$3.OccludeAndTransparent, stipplePattern: h$3(5), isDecoration: true });
    const a$12 = u$1.toUnitRGBA(i$1);
    this._stagedStartIndicator = new d$4({ view: i2, attached: false, elevationInfo: { mode: "absolute-height", offset: 0 }, spatialReference: t2.view.renderCoordsHelper.spatialReference, color: a$12, size: 2 * e, outlineSize: 0, renderOccluded: d$3.OccludeAndTransparent, isDecoration: true });
  }
  initialize() {
    const { view: t2 } = this;
    this._snappingOperation = new p$7({ view: t2 });
    const i2 = !t2._stage?.renderView.renderingContext.driverTest.svgPremultipliesAlpha.result;
    this._orientationManipulatorMaterial = new g$9({ transparent: true, writeDepth: false, renderOccluded: d$3.Opaque, isDecoration: true }), this.addHandles(d$1(() => ({ accentColor: n(t2.effectiveTheme), contrastColor: c$1(t2.effectiveTheme) }), ({ accentColor: a3, contrastColor: n2 }) => {
      const s2 = this._orientationManipulatorTexture, o2 = l$3(t2.textures, { accentColor: a3, contrastColor: n2, preMultiplyAlpha: i2 });
      this._orientationManipulatorMaterial.setParameters({ textureId: o2.texture.id }), this._orientationManipulatorTexture = o2, s2?.release();
      const r2 = u$1.toUnitRGBA(a3);
      this._unfocusedOffsetManipulatorMaterial.setParameters({ color: r2 }), this._focusedOffsetManipulatorMaterial.setParameters({ color: r2 }), this._thinOffsetManipulatorMaterial.setParameters({ color: r2 }), this._constraintSnappingIndicator.color = r2;
    }, P$2));
    const a2 = g$7(() => this.analysisViewData.computations, ({ computation: t3 }) => this._createManipulators(t3));
    this.addHandles(c$4(a2)), this.addHandles([d$1(() => ({ stagedPoint: this._snappingOperation.stagedPoint, stagedComputation: this._stagedComputation }), ({ stagedPoint: t3, stagedComputation: e2 }) => {
      if (null == e2 || null == t3)
        return;
      const i3 = x$3(t3, new x$4());
      this._applyPointUpdate(e2, { endPoint: i3 });
    }, C$2), d$1(() => ({ stagedDimension: this._stagedDimension, selectedComputation: this.analysisViewData.selectedComputation, firstGrabbedManipulator: this.firstGrabbedManipulator }), (t3, e2) => {
      const { stagedDimension: i3, selectedComputation: a3, firstGrabbedManipulator: n2 } = t3;
      if (i3 === e2?.stagedDimension && n2 === e2?.firstGrabbedManipulator) {
        for (const s2 of [a3, e2?.selectedComputation])
          if (null != s2) {
            const e3 = this._computationManipulators.get(s2);
            null != e3 && this._updateManipulators(s2, e3, t3);
          }
      } else
        for (const [s2, o2] of this._computationManipulators)
          this._updateManipulators(s2, o2, t3);
    }, A), d$1(() => this.analysis.style.lineSize, (t3) => {
      this._updateManipulatorStyle(t3);
    }, P$2), d$1(() => this.view.state.camera, () => {
      null != this._stagedComputation && this._updateStagedDimensionOffset(this._stagedComputation);
    }), d$1(() => {
      const t3 = this._stagedComputation;
      if (!t3)
        return null;
      const e2 = t3.elevationAlignedStartPoint, i3 = n$1();
      return null != e2 && this.view.renderCoordsHelper.toRenderCoords(e2, i3) ? i3 : null;
    }, (t3) => {
      null != t3 ? (this._stagedStartIndicator.vertices = [t3], this._stagedStartIndicator.attached = true) : this._stagedStartIndicator.attached = false;
    })]), this.addHandles(this._constraintHandles), this.addHandles(this._snappingIndicatorHandles), w$4(this, () => {
      const t3 = this._activeComputation, e2 = this._stagedComputation;
      if (null == t3 || null != e2) {
        const t4 = this.view.inputManager.latestPointerType ?? "mouse", e3 = this._getSnappingContext(t4);
        this._updatingHandles.addPromise(d$5(this._snappingOperation.resnap(this._snappingManager, e3)));
      }
      if (null != t3) {
        const { start: e3, end: i3 } = this._computationManipulators.get(t3);
        if (e3.grabbing || i3.grabbing) {
          const i4 = e3.grabbing ? "start" : "end", a3 = this._computeConstraint(t3);
          g$2(t3, i4, { constraint: a3, view: this.view });
        }
      }
    });
  }
  destroy() {
    this._snappingOperation = u$5(this._snappingOperation), this._computationHandles.destroy(), this._constraintSnappingIndicator.destroy(), this._stagedStartIndicator.destroy(), this._orientationManipulatorTexture?.release();
  }
  get updating() {
    return this._updatingHandles.updating || this._snappingManager.updating;
  }
  get firstGrabbedManipulator() {
    return this.parentTool.firstGrabbedManipulator;
  }
  get hasGrabbedManipulators() {
    return this.parentTool.hasGrabbedManipulators;
  }
  get snappingOptions() {
    return this._snappingManager.options;
  }
  get _snappingManager() {
    return this._snappingManagerResult.snappingManager;
  }
  get _activeComputation() {
    if (null != this._stagedComputation)
      return this._stagedComputation;
    const { selectedComputation: t2 } = this.analysisViewData;
    return this.hasGrabbedManipulators && null != t2 ? t2 : null;
  }
  get _stagedComputation() {
    const t2 = this._stagedDimension, e2 = this.analysisViewData.computations.at(-1)?.computation;
    return null == t2 || null == e2 || e2.dimension !== t2 ? null : e2;
  }
  get _constraintHandles() {
    return [p$8(() => this.analysisViewData.selectedComputation, (t2) => {
      t2.previousConstraint = this._computeConstraint(t2);
    }, { ...A, equals: j$2 }), d$1(() => {
      const t2 = this._activeComputation;
      if (null == t2)
        return null;
      const { measureType: e2, orientation: i2 } = t2.dimension;
      return { measureType: e2, orientation: i2, computation: t2 };
    }, (t2, e2) => {
      if (null != t2 && null == e2) {
        const { measureType: e3, orientation: a2, computation: n2 } = t2;
        switch (n2.previousConstraint) {
          case P.Horizontal:
            n2.preConstraintProperties = { measureType: t$1.Horizontal, orientation: 0 };
            break;
          case P.Vertical:
            n2.preConstraintProperties = { measureType: t$1.Vertical, orientation: 0 };
            break;
          case P.Direct:
            n2.preConstraintProperties = { measureType: t$1.Direct, orientation: a2 };
            break;
          default:
            n2.preConstraintProperties = { measureType: e3, orientation: a2 };
        }
      }
      null == t2 && null != e2 && (e2.computation.preConstraintProperties = null);
    }, C$2)];
  }
  get _snappingIndicatorHandles() {
    const t2 = "snapping-indicator-event-handles";
    return [d$1(() => ({ stagedComputation: this._stagedComputation, activeComputation: this._activeComputation }), ({ stagedComputation: e2, activeComputation: i2 }) => {
      const a2 = this._constraintSnappingIndicator;
      if (this.removeHandles(t2), null != i2)
        if (i2 === e2)
          a2.attached = true;
        else {
          const { start: e3, end: n2 } = this._computationManipulators.get(i2), s2 = () => {
            a2.attached = e3.grabbing || n2.grabbing;
          };
          s2(), this.addHandles([e3.events.on("grab-changed", s2), n2.events.on("grab-changed", s2)], t2);
        }
      else
        a2.attached = false;
    }), d$1(() => {
      const t3 = this._activeComputation;
      return null != t3 ? { geometry: t3.geometry, constraint: t3.previousConstraint } : {};
    }, ({ geometry: t3, constraint: e2 }) => {
      const i2 = this._constraintSnappingIndicator;
      null != t3 && null != e2 && e2 !== P.Direct ? (i2.visible = true, i2.setGeometryFromSegment(t3.directSegment)) : i2.visible = false;
    })];
  }
  removeStaged() {
    return null != this._stagedDimension && (this.analysis.dimensions.remove(this._stagedDimension), this._stagedDimension = null, true);
  }
  onDeactivate() {
    this.removeStaged(), this._resetSnappingState();
  }
  onClick(t2) {
    const { _stagedDimension: e2 } = this;
    if (null == e2) {
      const e3 = this._onUnstagedClick(t2);
      return this.analysis.dimensions.add(e3), null;
    }
    return this._onStagedClick(t2), e2;
  }
  onPointerMove({ mapPoint: t2, pointerType: e2 }) {
    if ("touch" === e2)
      return;
    const i2 = this._getSnappingContext(e2);
    this._updatingHandles.addPromise(d$5(this._snappingOperation.snap({ point: t2 }, this._snappingManager, i2)));
  }
  onManipulatorSelectionChanged() {
    if (null != this.analysisViewData.selectedComputation) {
      this._computationManipulators.get(this.analysisViewData.selectedComputation).offset.selected || (this.analysisViewData.selectedDimension = null);
    }
  }
  _onUnstagedClick({ mapPoint: t2, pointerType: e2 }) {
    let n2 = t2;
    if ("mouse" === e2) {
      const i2 = this._getSnappingContext(e2);
      n2 = this._snappingManager.update({ point: t2, context: i2 });
    }
    const s2 = new u$6({ startPoint: x$3(n2, new x$4()), endPoint: null, measureType: t$1.Horizontal });
    return this._stagedDimension = s2, this._resetSnappingState(), s2;
  }
  _onStagedClick({ mapPoint: t2, pointerType: e2 }) {
    const i2 = this._stagedComputation;
    if (null == i2)
      return;
    let a2 = t2;
    if ("mouse" === e2) {
      const i3 = this._getSnappingContext(e2);
      a2 = this._snappingManager.update({ point: t2, context: i3 });
    }
    const n2 = x$3(a2, new x$4());
    this._applyPointUpdate(i2, { endPoint: n2 }), this._stagedDimension = null, this._resetSnappingState();
  }
  _resetSnappingState() {
    this._snappingManager.doneSnapping(), this._snappingOperation.abort(), this._snappingOperation.stagedPoint = null;
  }
  _createManipulators(t2) {
    const e2 = this._setupPointManipulator(t2, { isStart: true }), a2 = this._setupPointManipulator(t2, { isStart: false }), n2 = this._setupOffsetManipulator(t2), s2 = this._setupHeadingManipulator(t2), o2 = this._setupRotationManipulator(t2), r2 = this._setupMeasureTypeManipulator(t2, t$1.Direct), p2 = this._setupMeasureTypeManipulator(t2, t$1.Horizontal), l2 = this._setupMeasureTypeManipulator(t2, t$1.Vertical), u2 = new He({ start: e2, end: a2, offset: n2, heading: s2, rotation: o2, direct: r2, horizontal: p2, vertical: l2 });
    return this._setupComputationToManipulatorsSync(t2, u2), this._computationManipulators.set(t2, u2), this.manipulators.addMany(u2.values()), { manipulators: u2, remove: () => {
      this._computationHandles.remove(t2), this._computationManipulators.delete(t2);
      for (const t3 of u2.values())
        this.manipulators.remove(t3);
    } };
  }
  _setupComputationToManipulatorsSync(t2, e2) {
    this._computationHandles.add([d$1(() => t2.geometry, () => this._updateManipulators(t2, e2), { ...A, equals: j$2 })], t2);
  }
  _setupPointManipulator(t2, e2) {
    const { view: i2 } = this, { dimension: a2 } = t2, n2 = new Me(i2, { metadata: a2 }), s2 = Ue(n2, { isStart: e2.isStart, createSnappingPipelineStep: (t3) => f$6({ snappingContext: this._getSnappingContext(t3), snappingManager: this._snappingManager, updatingHandles: this._updatingHandles }), dimension: a2, onUpdate: (e3) => this._applyPointUpdate(t2, e3), view: i2 });
    return this._computationHandles.add(s2, t2), n2;
  }
  _setupOffsetManipulator(t2) {
    const { view: e2 } = this, i2 = Pe(e2, { lineSizePt: this.analysis.style.lineSize, unfocusedMaterial: this._unfocusedOffsetManipulatorMaterial, focusedMaterial: this._focusedOffsetManipulatorMaterial, metadata: t2.dimension }), a2 = Re(i2, { computation: t2, view: e2 });
    return this._computationHandles.add(a2, t2), i2;
  }
  _setupHeadingManipulator(t2) {
    const { view: e2 } = this, i2 = new Ce(e2, { lineSizePt: this.analysis.style.lineSize, material: this._orientationManipulatorMaterial, metadata: t2.dimension }), a2 = ze(i2, { computation: t2, view: e2 });
    return this._computationHandles.add(a2, t2), i2;
  }
  _setupRotationManipulator(t2) {
    const { view: e2 } = this, i2 = new Ce(e2, { lineSizePt: this.analysis.style.lineSize, material: this._orientationManipulatorMaterial, metadata: t2.dimension }), a2 = ke(i2, { computation: t2, view: e2 });
    return this._computationHandles.add(a2, t2), i2;
  }
  _setupMeasureTypeManipulator(t2, e2) {
    const { view: i2 } = this, a2 = Oe(i2, { lineSizePt: this.analysis.style.lineSize, unfocusedMaterial: this._unfocusedOffsetManipulatorMaterial, focusedMaterial: this._focusedOffsetManipulatorMaterial, thinOffsetManipulatorMaterial: this._thinOffsetManipulatorMaterial, metadata: t2.dimension }), n2 = Fe(a2, { computation: t2, manipulatorMeasureType: e2, view: i2 });
    return this._computationHandles.add(n2, t2), a2;
  }
  _updateManipulators(t2, e2, a2 = { stagedDimension: this._stagedDimension, selectedComputation: this.analysisViewData.selectedComputation, firstGrabbedManipulator: this.firstGrabbedManipulator }) {
    const { stagedDimension: n2, selectedComputation: s2, firstGrabbedManipulator: o2 } = a2, { start: r2, end: p2, offset: l2, heading: u2, rotation: d2 } = e2, c2 = s2 === t2, m2 = $(t2), { dimension: h2 } = t2;
    for (const i2 of e2.values()) {
      const t3 = m2 && null == n2 && (null == o2 || i2 === o2);
      i2 === l2 ? (i2.available = t3, i2.selected = c2) : i2.available = t3 && c2;
    }
    if (!m2)
      return;
    null != this._computeConstraint(t2) ? e2.forEachMeasureTypeManipulator((t3) => t3.available = false) : e2.manipulatorForMeasureType(h2.measureType).available = false;
    for (const _2 of [u2, d2])
      h2.measureType === t$1.Direct && 0 !== h2.offset || (_2.available = false);
    F(t2) ? d2.available = false : u2.available = false;
    const { geometry: g3 } = t2;
    r2.renderLocation = g3.directSegment.startRenderSpace, p2.renderLocation = g3.directSegment.endRenderSpace;
    const { renderCoordsHelper: f2 } = this.view;
    Ie(l2, g3, f2), u2.available && Ge(u2, t2, f2), d2.available && Be(d2, t2, f2), e2.forEachMeasureTypeManipulator((e3, i2) => {
      e3.available && qe(e3, t2, i2, f2);
    });
  }
  _updateManipulatorStyle(t2) {
    const e2 = Ye(t2), i2 = $e(t2), a2 = { lineSizePt: t2, material: this._orientationManipulatorMaterial };
    for (const { offset: n2, heading: s2, rotation: o2 } of this._computationManipulators.values())
      n2.radius = i2 / 2, s2.update(a2), o2.update(a2);
    this._unfocusedOffsetManipulatorMaterial.setParameters({ width: e2 }), this._focusedOffsetManipulatorMaterial.setParameters({ width: i2 });
  }
  _applyPointUpdate(t2, e2) {
    const { view: i2 } = this, a2 = C$1(t2);
    "startPoint" in e2 && (a2.elevationAlignedStartPoint = e2.startPoint), "endPoint" in e2 && (a2.elevationAlignedEndPoint = e2.endPoint);
    const n2 = H(a2, i2.renderCoordsHelper);
    if (null == n2)
      return;
    const s2 = this._computeConstraint({ ...a2, geometry: n2 });
    S$1(t2, e2, { ...a2, constraint: s2, unconstrainedGeometry: n2, view: i2 }), t2 === this._stagedComputation && this._updateStagedDimensionOffset(t2);
  }
  _updateStagedDimensionOffset(t2) {
    if (null == t2.geometry)
      return;
    t2.geometry.directSegment.eval(0.5, ft);
    const e2 = this.view.state.camera.computeScreenPixelSizeAt(ft);
    t2.dimension.offset = h$1 * e2;
  }
  _computeConstraint(t2) {
    return f$1(p$1(t2, this._snappingManager.options), this.view);
  }
  _createOffsetManipulatorMaterial() {
    return new x$5({ width: 1, renderOccluded: d$3.OccludeAndTransparent, writeDepth: false, hasPolygonOffset: true, isDecoration: true });
  }
  get testInfo() {
    const t2 = (t3) => this.analysisViewData.computations.find(({ computation: e2 }) => e2.dimension === t3)?.computation;
    return { disableManipulatorPartialOcclusion: () => {
      this._stagedStartIndicator.renderOccluded = d$3.Occlude, this.manipulators.forEach(({ manipulator: t3 }) => {
        for (const { geometry: e2 } of t3.renderObjects)
          e2.material.setParameters({ renderOccluded: d$3.Occlude });
      });
    }, getManipulatorsForDimension: (e2) => this._computationManipulators.get(t2(e2)), getComputationForDimension: (e2) => t2(e2), getConstraintForDimension: (e2) => {
      const i2 = t2(e2);
      return null != i2 ? this._computeConstraint(i2) : null;
    }, stagedDimension: this._stagedDimension, stagedStartIndicator: this._stagedStartIndicator, constraintSnappingIndicator: this._constraintSnappingIndicator, snappingManager: this._snappingManager };
  }
};
e$3([y$1({ constructOnly: true })], gt.prototype, "analysis", void 0), e$3([y$1({ constructOnly: true })], gt.prototype, "analysisViewData", void 0), e$3([y$1({ constructOnly: true })], gt.prototype, "manipulators", void 0), e$3([y$1({ constructOnly: true })], gt.prototype, "parentTool", void 0), e$3([y$1({ constructOnly: true, nonNullable: true })], gt.prototype, "view", void 0), e$3([y$1({ readOnly: true })], gt.prototype, "updating", null), e$3([y$1()], gt.prototype, "firstGrabbedManipulator", null), e$3([y$1()], gt.prototype, "hasGrabbedManipulators", null), e$3([y$1()], gt.prototype, "snappingOptions", null), e$3([y$1()], gt.prototype, "_stagedDimension", void 0), e$3([y$1()], gt.prototype, "_activeComputation", null), e$3([y$1()], gt.prototype, "_stagedComputation", null), gt = e$3([c$3("esri.views.3d.analysis.Dimension.LengthDimensionSubTool")], gt);
const ft = n$1();
var g$1;
!function(e2) {
  e2.Ready = "ready", e2.Creating = "creating", e2.Created = "created";
}(g$1 || (g$1 = {}));
let S = class extends a$3 {
  constructor(e2) {
    super(e2), this.automaticManipulatorSelection = false, this.removeIncompleteOnCancel = false, this._pointerMoveTimerMs = g$3, this._prevPointerMoveTimeout = null;
  }
  initialize() {
    this._intersector = b$5(this.view.state.viewingMode), this._intersector.options.store = t$6.MIN, this._lengthDimensionSubTool = new gt({ analysis: this.analysis, analysisViewData: this.analysisViewData, manipulators: this.manipulators, parentTool: this, view: this.view }), this.addHandles([c$4(this._lengthDimensionSubTool), e$8(() => this._clearPointerMoveTimeout()), d$1(() => this.state, (e2) => {
      e2 === g$1.Created && this.finishToolCreation();
    }, A), p$8(() => this.firstGrabbedManipulator, (e2) => {
      this.selectedDimension = e2.metadata;
    }, A), d$1(() => this.selectedDimension, () => this._resetPointerMoveTimeout(), A)]);
  }
  get state() {
    return this.analysis.dimensions.some((e2) => "length" === e2.type) ? null != this._activeSubTool ? g$1.Creating : g$1.Created : g$1.Ready;
  }
  get updating() {
    return this._lengthDimensionSubTool.updating;
  }
  get cursor() {
    return this.active ? "crosshair" : null;
  }
  get selectedDimension() {
    return this.analysisViewData.selectedDimension;
  }
  set selectedDimension(e2) {
    this.analysisViewData.selectedDimension = e2;
  }
  onInputEvent(e2) {
    switch (e2.type) {
      case "immediate-click":
        this._clickHandler(e2);
        break;
      case "immediate-double-click":
        this._doubleClickHandler(e2);
        break;
      case "pointer-move":
        this._pointerMoveHandler(e2);
        break;
      case "key-down":
        if (e$b.cancel === e2.key) {
          if (null != this._activeSubTool && this._activeSubTool.removeStaged())
            return void e2.stopPropagation();
          this.active || (this.selectedDimension = null);
        } else
          e$b.delete.includes(e2.key) && this._deleteKeyHandler();
    }
  }
  onActivate() {
    this._activeSubTool = this._lengthDimensionSubTool;
  }
  onDeactivate() {
    null != this._activeSubTool && (this._activeSubTool.onDeactivate(), this._activeSubTool = null);
  }
  onShow() {
    this._resetPointerMoveTimeout();
  }
  onManipulatorSelectionChanged() {
    this._lengthDimensionSubTool.onManipulatorSelectionChanged();
  }
  onHide() {
    this.selectedDimension = null;
  }
  _clickHandler(e2) {
    if (this.hasFocusedManipulators)
      return void e2.stopPropagation();
    if (null == this._activeSubTool)
      return;
    const t2 = this._intersectScreen(e2);
    null != t2 && (this.selectedDimension = this._activeSubTool.onClick({ mapPoint: t2, pointerType: e2.pointerType }), e2.stopPropagation());
  }
  _doubleClickHandler(e2) {
    this.active && (this.view.activeTool = null, e2.stopPropagation());
  }
  _pointerMoveHandler(e2) {
    if (this._resetPointerMoveTimeout(), null == this._activeSubTool)
      return;
    if (this.hasFocusedManipulators)
      return;
    const t2 = this._intersectScreen(e2);
    null != t2 && this._activeSubTool.onPointerMove({ mapPoint: t2, pointerType: e2.pointerType });
  }
  _deleteKeyHandler() {
    null != this._activeSubTool && this._activeSubTool.removeStaged(), this._removeSelected();
  }
  _intersectScreen(e2) {
    const t2 = c$5(e2);
    this.view.sceneIntersectionHelper.intersectToolIntersectorScreen(t2, this._intersector);
    const i2 = this._intersector.results.min, o2 = c$2.get();
    return i2.getIntersectionPoint(o2) ? this.view.renderCoordsHelper.fromRenderCoords(o2, this.view.spatialReference) : null;
  }
  _removeSelected() {
    null != this.selectedDimension && (this.analysis.dimensions.remove(this.selectedDimension), this.selectedDimension = null);
  }
  _clearPointerMoveTimeout() {
    this._prevPointerMoveTimeout = l$4(this._prevPointerMoveTimeout);
  }
  _resetPointerMoveTimeout() {
    this._clearPointerMoveTimeout(), this.manipulators.forEach((e2) => e2.manipulator.state |= tt), this._prevPointerMoveTimeout = o$2.setTimeout(() => {
      this.manipulators.forEach((e2) => e2.manipulator.state &= ~tt);
    }, this._pointerMoveTimerMs);
  }
  get testInfo() {
    return { ...this._lengthDimensionSubTool.testInfo, setManipulatorAutoHideDelay: (e2) => {
      this._pointerMoveTimerMs = e2, this._resetPointerMoveTimeout();
    } };
  }
};
e$3([y$1({ constructOnly: true })], S.prototype, "view", void 0), e$3([y$1({ constructOnly: true })], S.prototype, "analysis", void 0), e$3([y$1({ readOnly: true })], S.prototype, "state", null), e$3([y$1({ readOnly: true })], S.prototype, "updating", null), e$3([y$1({ readOnly: true })], S.prototype, "cursor", null), e$3([y$1({ constructOnly: true })], S.prototype, "analysisViewData", void 0), e$3([y$1()], S.prototype, "selectedDimension", null), e$3([y$1()], S.prototype, "automaticManipulatorSelection", void 0), e$3([y$1()], S.prototype, "_activeSubTool", void 0), e$3([y$1()], S.prototype, "_lengthDimensionSubTool", void 0), S = e$3([c$3("esri.views.3d.analysis.Dimension.DimensionTool")], S);
class h extends a$4 {
  constructor(e2, t2) {
    super(e2), this._hasExternalMaterial = false, this._renderOccluded = d$3.OccludeAndTransparent, this._width = 1, this._color = r$5(1, 0, 1, 1), this._placement = "end", this._markerPrimitive = "arrow", this._material = t2, this._hasExternalMaterial = null != t2, this.applyProperties(e2);
  }
  setGeometryFromSegment(t2, r2) {
    const i2 = t2.endRenderSpace;
    this.transform = q$2(o, i2), this._normal = r2;
    const { points: a2 } = t2.createRenderGeometry(i2, this.view.renderCoordsHelper);
    this.geometry = [a2];
  }
  get renderOccluded() {
    return null != this._material ? this._material.parameters.renderOccluded : this._renderOccluded;
  }
  set renderOccluded(e2) {
    this._renderOccluded = e2, null != this._material && this._material.setParameters({ renderOccluded: e2 });
  }
  get geometry() {
    return this._geometry;
  }
  set geometry(e2) {
    this._geometry = e2, this.recreateGeometry();
  }
  get normal() {
    return this._normal;
  }
  set normal(e2) {
    this._normal = e2, this.recreateGeometry();
  }
  get width() {
    return null != this._material ? this._material.parameters.width : this._width;
  }
  set width(e2) {
    this._width = e2, null != this._material && this._material.setParameters({ width: e2 });
  }
  get color() {
    return null != this._material ? this._material.parameters.color : this._color;
  }
  set color(e2) {
    this._color = t$7(e2), null != this._material && this._material.setParameters({ color: this._color });
  }
  get placement() {
    return null != this._material ? this._material.parameters.placement : this._placement;
  }
  set placement(e2) {
    this._placement = e2, null != this._material && this._material.setParameters({ placement: this._placement });
  }
  get markerPrimitive() {
    return this._material?.parameters.markerPrimitive ?? this._markerPrimitive;
  }
  set markerPrimitive(e2) {
    this._markerPrimitive = e2, null != this._material && this._material.setParameters({ markerPrimitive: e2 });
  }
  createExternalResources() {
    this._hasExternalMaterial || (this._material = new A$2({ width: this._width, color: this._color, placement: this._placement, renderOccluded: this._renderOccluded, markerPrimitive: this._markerPrimitive, isDecoration: this.isDecoration }));
  }
  destroyExternalResources() {
    this._hasExternalMaterial || (this._material = null);
  }
  createGeometries(e2) {
    for (const t2 of R$2(this.geometry, this.normal)) {
      const r2 = b$6(this._material, t2);
      e2.addGeometry(r2);
    }
  }
  forEachExternalMaterial(e2) {
    this._hasExternalMaterial || e2(this._material);
  }
}
const o = e$1();
let b$1 = class b {
  set visible(e2) {
    for (const t2 of this._visualElements.values())
      t2.attached = e2;
  }
  constructor(s2) {
    this.destroyed = false, this._handles = new e$9(), this._messages = null, this._labelSegment = new m$1();
    const { analysis: i2, computation: o2, view: m2, messages: r2, isDecoration: f2 } = s2;
    this.analysis = i2, this.computation = o2, this.view = m2, this._messages = r2;
    const d2 = s2.visible, h$12 = { view: m2, attached: d2, isDecoration: f2 }, { fontSize: c2, textColor: u2, textBackgroundColor: b3 } = i2.style;
    this._visualElements = new E({ marker: new h(h$12, s2.markerMaterial), dimension: new u$4(h$12, s2.dimensionLineMaterial), startOffset: new u$4(h$12, s2.offsetLineMaterial), endOffset: new u$4(h$12, s2.offsetLineMaterial), dimensionSmall: new u$4(h$12, s2.smallDimensionLineMaterial), startOffsetSmall: new u$4(h$12, s2.smallOffsetLineMaterial), endOffsetSmall: new u$4(h$12, s2.smallOffsetLineMaterial), label: new g$a({ view: m2, attached: d2, distance: 0, geometry: { type: "segment", sampleLocation: "center", segment: this._labelSegment, callout: false }, fontSize: u$3(c2), textColor: u2.clone(), backgroundColor: b3.clone(), isDecoration: f2 }) }), this._handles.add([d$1(() => o2.geometry, (e2) => {
      this.updateCameraDependentElements(m2.state.camera, e2, i2.style), null != o2.geometry && this._updateLines(o2.geometry);
    }, { ...P$2, equals: j$2 }), d$1(() => o2.length, (e2) => this._updateLabelContent(e2), P$2)]);
  }
  destroy() {
    this.destroyed = true, this._handles = u$5(this._handles);
    for (const e2 of this._visualElements.values())
      e2.destroy();
  }
  get testInfo() {
    return { dimensionVisualElement: this._visualElements.dimension, label: this._visualElements.label };
  }
  _updateLines(e2) {
    const t2 = w$1(O, k$1.Start, e2.directSegment, e2.dimensionSegment), s2 = w$1(_, k$1.End, e2.directSegment, e2.dimensionSegment), i2 = this._visualElements;
    i2.marker.setGeometryFromSegment(e2.dimensionSegment, e2.primaryOffsetAxis), i2.dimension.setGeometryFromSegment(e2.dimensionSegment), i2.startOffset.setGeometryFromSegment(t2), i2.endOffset.setGeometryFromSegment(s2), i2.dimensionSmall.setGeometryFromSegment(e2.dimensionSegment), i2.startOffsetSmall.setGeometryFromSegment(t2), i2.endOffsetSmall.setGeometryFromSegment(s2);
  }
  updateCameraDependentElements(e2, t2, s2) {
    const i2 = this._visualElements;
    if (null == t2) {
      for (const e3 of i2.values())
        e3.visible = false;
      return;
    }
    const n2 = e2.computeScreenPixelSizeAt(t2.dimensionSegment.eval(0.5, y)), l2 = N(t2, n2), o2 = l2 < (u$3(s2.lineSize) * k) ** 2, m2 = !o2;
    i2.marker.visible = m2, i2.dimension.visible = m2, i2.startOffset.visible = m2, i2.endOffset.visible = m2, i2.dimensionSmall.visible = o2, i2.startOffsetSmall.visible = o2, i2.endOffsetSmall.visible = o2;
    const r2 = u$3(s2.fontSize) * U, { label: u2 } = i2;
    if (u2.visible = l2 >= r2 ** 2, !u2.visible)
      return;
    const { dimensionSegment: S2, primaryOffsetAxis: g3 } = t2, { offset: v2 } = this.computation.dimension, p2 = (Math.sign(v2) >= 0 ? 1 : -1) * this._labelOffsetPx(s2) * n2;
    z$1(this._labelSegment, S2, g3, p2), u2.updateLabelPosition();
  }
  updateLabelStyle(e2) {
    const { label: t2 } = this._visualElements;
    t2.fontSize = u$3(e2.fontSize), t2.textColor = e2.textColor, t2.backgroundColor = e2.textBackgroundColor;
  }
  updateUnitsMessages(e2) {
    this._messages = e2;
    const { length: t2 } = this.computation;
    this._updateLabelContent(t2);
  }
  _updateLabelContent(e2) {
    const { label: t2 } = this._visualElements;
    null != e2 && null != this._messages ? t2.text = h$4(this._messages, e2, e2.unit) : t2.text = "";
  }
  _labelOffsetPx(e2) {
    return 1.5 * u$3(e2.fontSize) + x + u$3(e2.lineSize / 2);
  }
};
const O = new m$1(), _ = new m$1(), y = n$1();
class E {
  constructor(e2) {
    this.marker = e2.marker, this.dimension = e2.dimension, this.startOffset = e2.startOffset, this.endOffset = e2.endOffset, this.dimensionSmall = e2.dimensionSmall, this.startOffsetSmall = e2.startOffsetSmall, this.endOffsetSmall = e2.endOffsetSmall, this.label = e2.label;
  }
  values() {
    return [this.marker, this.dimension, this.startOffset, this.endOffset, this.dimensionSmall, this.startOffsetSmall, this.endOffsetSmall, this.label];
  }
}
let b2 = class extends g$6 {
  get analysis() {
    return this.analysisViewData.analysis;
  }
  get visible() {
    return this.analysisViewData.visible;
  }
  constructor(e2) {
    super(e2), this.loadingMessages = false, this._messages = null;
  }
  initialize() {
    const e2 = this.isDecoration;
    this._markerMaterial = new A$2({ width: 1, anchor: s$5.Tip, color: l$5, placement: "begin-end", worldSpace: true, hideOnShortSegments: true, hasTip: true, renderOccluded: d$3.OccludeAndTransparent, markerPrimitive: "triangle", isDecoration: e2 }), this._dimensionLineMaterial = new x$5({ width: 1, color: l$5, renderOccluded: d$3.OccludeAndTransparent, markerParameters: this._markerMaterial.parameters, isDecoration: e2 }), this._offsetLineMaterial = new x$5({ width: 1, color: l$5, renderOccluded: d$3.OccludeAndTransparent, stipplePattern: h$3(5), isDecoration: e2 }), this._smallDimensionLineMaterial = new x$5({ width: 1, color: l$5, renderOccluded: d$3.OccludeAndTransparent, isDecoration: e2 }), this._smallOffsetLineMaterial = new x$5({ width: 1, color: l$5, renderOccluded: d$3.OccludeAndTransparent, stipplePattern: h$3(5), isDecoration: e2 });
    for (const i2 of this._lineMaterials())
      this.view._stage.add(i2), this.addHandles(e$8(() => {
        this.view._stage?.remove(i2);
      }));
    const s2 = g$7(() => this.analysisViewData.computations, ({ computation: e3 }) => this._createVisualization(e3));
    this._dimensionVisualizations = s2, this.addHandles([c$4(s2), d$1(() => u$1.toUnitRGBA(this.analysis.style.color), (e3) => {
      for (const i2 of this._lineMaterials())
        i2.setParameters({ color: e3 });
    }, A), d$1(() => this.analysis.style.lineSize, (e3) => {
      const i2 = u$3(e3);
      this._markerMaterial.setParameters({ width: i2 * l$1 }), this._dimensionLineMaterial.setParameters({ width: i2, markerParameters: this._markerMaterial.parameters });
      const s3 = Math.max(i2 * w, 1);
      this._offsetLineMaterial.setParameters({ width: s3 });
    }, A), d$1(() => ({ camera: this.view.state.camera, style: z(this.analysis) }), ({ camera: e3, style: i2 }) => {
      for (const { visualization: s3 } of this._dimensionVisualizations)
        s3.updateCameraDependentElements(e3, s3.computation.geometry, i2), s3.updateLabelStyle(i2);
    }), d$1(() => this.visible, (e3) => {
      for (const { visualization: i2 } of this._dimensionVisualizations)
        i2.visible = e3;
    })]), this.addHandles([f$7(() => this._updateMessageBundle()), p$8(() => !this.loadingMessages, () => {
      for (const { visualization: e3 } of this._dimensionVisualizations)
        e3.updateUnitsMessages(this._messages);
    }, C$2)]), this._updateMessageBundle();
  }
  get testInfo() {
    return { visualizations: this._dimensionVisualizations.items.map(({ visualization: e2 }) => e2), disablePartialOcclusion: () => {
      for (const e2 of this._lineMaterials())
        e2.setParameters({ renderOccluded: d$3.Occlude });
    } };
  }
  _createVisualization(e2) {
    const i2 = new b$1({ analysis: this.analysis, computation: e2, view: this.view, visible: this.visible, markerMaterial: this._markerMaterial, dimensionLineMaterial: this._dimensionLineMaterial, offsetLineMaterial: this._offsetLineMaterial, smallDimensionLineMaterial: this._smallDimensionLineMaterial, smallOffsetLineMaterial: this._smallOffsetLineMaterial, messages: this._messages, isDecoration: this.isDecoration });
    return { visualization: i2, remove: () => i2.destroy() };
  }
  _lineMaterials() {
    return [this._markerMaterial, this._dimensionLineMaterial, this._offsetLineMaterial, this._smallDimensionLineMaterial, this._smallOffsetLineMaterial];
  }
  async _updateMessageBundle() {
    this.loadingMessages = true;
    try {
      this._messages = await f$8("esri/core/t9n/Units");
    } finally {
      this.loadingMessages = false;
    }
  }
};
function z(e2) {
  const { fontSize: i2, lineSize: s2, textColor: t2, textBackgroundColor: a2 } = e2.style;
  return { fontSize: i2, lineSize: s2, textBackgroundColor: a2.clone(), textColor: t2.clone() };
}
e$3([y$1({ constructOnly: true })], b2.prototype, "analysisViewData", void 0), e$3([y$1({ constructOnly: true, nonNullable: true })], b2.prototype, "view", void 0), e$3([y$1({ constructOnly: true })], b2.prototype, "isDecoration", void 0), e$3([y$1()], b2.prototype, "analysis", null), e$3([y$1()], b2.prototype, "visible", null), e$3([y$1()], b2.prototype, "loadingMessages", void 0), b2 = e$3([c$3("esri.views.3d.analysis.Dimension.DimensionVisualization")], b2);
let t = class extends g$6 {
  constructor(s2) {
    super(s2), this.dimension = null, this.length = null;
  }
};
e$3([y$1({ constructOnly: true, nonNullable: true })], t.prototype, "dimension", void 0), e$3([y$1()], t.prototype, "length", void 0), t = e$3([c$3("esri.views.3d.analysis.LengthDimensionResult")], t);
const c = t;
let l = class extends g$6 {
  constructor(t2) {
    super(t2), this.geometry = null, this.unconstrainedGeometry = null, this.elevationAlignedStartPoint = null, this.elevationAlignedEndPoint = null;
  }
  normalizeCtorArgs(t2) {
    const { dimension: o2, ...e2 } = t2;
    return { result: new c({ dimension: o2 }), ...e2 };
  }
  initialize() {
    this.addHandles([d$1(() => this.dimension.startPoint, (t2) => this.elevationAlignedStartPoint = this.projectAndAlignPoint(t2), A), d$1(() => this.dimension.endPoint, (t2) => this.elevationAlignedEndPoint = this.projectAndAlignPoint(t2), A)]);
  }
  get dimension() {
    return this.result.dimension;
  }
  get length() {
    return this.result.length;
  }
};
e$3([y$1({ constructOnly: true, nonNullable: true })], l.prototype, "result", void 0), e$3([y$1({ constructOnly: true, nonNullable: true })], l.prototype, "projectAndAlignPoint", void 0), e$3([y$1()], l.prototype, "dimension", null), e$3([y$1()], l.prototype, "length", null), e$3([y$1()], l.prototype, "geometry", void 0), e$3([y$1()], l.prototype, "unconstrainedGeometry", void 0), e$3([y$1()], l.prototype, "elevationAlignedStartPoint", void 0), e$3([y$1()], l.prototype, "elevationAlignedEndPoint", void 0), e$3([y$1()], l.prototype, "preConstraintProperties", void 0), e$3([y$1()], l.prototype, "previousConstraint", void 0), l = e$3([c$3("esri.views.3d.analysis.LengthDimensionComputation")], l);
const r = (r2) => {
  let i2 = class extends r2 {
    constructor(...o2) {
      super(...o2), this.analysis = null, this.tool = null, this.selectedDimension = null, this.interactive = false, this.visible = null;
    }
    get results() {
      return new V$1();
    }
    createLengthDimensions(o2) {
      throw new Error("Method not implemented.");
    }
  };
  return e$3([y$1({ constructOnly: true })], i2.prototype, "view", void 0), e$3([y$1({ constructOnly: true, nonNullable: true })], i2.prototype, "analysis", void 0), e$3([y$1()], i2.prototype, "tool", void 0), e$3([y$1({ readOnly: true })], i2.prototype, "results", null), e$3([y$1()], i2.prototype, "selectedDimension", void 0), e$3([y$1()], i2.prototype, "interactive", void 0), e$3([y$1()], i2.prototype, "visible", void 0), i2 = e$3([c$3("esri.views.analysis.DimensionAnalysisView")], i2), i2;
};
let f = class extends r(s$6(g$6)) {
  constructor(i2) {
    super(i2), this.type = "dimension-view-3d", this.tool = null, this.selectedDimension = null, this._dimensionsToComputations = /* @__PURE__ */ new Map(), this._placementTask = null, this._projectAndAlignPoint = null;
  }
  initialize() {
    this._projectAndAlignPoint = (i3) => {
      if (null == i3)
        return null;
      const { spatialReference: s2, elevationProvider: t2 } = this.view, e2 = r$6(i3, s2, t2);
      return null == e2 && t$8(this.analysis, i3.spatialReference, s$2.getLogger(this)), e2;
    };
    const i2 = g$7(() => this.analysis.dimensions, (i3) => this._createComputation(i3));
    this.computations = i2, this.addHandles([a$5(this, S), c$4(i2)]), this._analysisVisualization = new b2({ analysisViewData: this, view: this.view, isDecoration: !this.parent }), this._analysisController = new g$4({ analysisViewData: this, view: this.view });
  }
  destroy() {
    this._placementTask = e$c(this._placementTask), this._analysisVisualization = u$5(this._analysisVisualization), v$1(this);
  }
  get updating() {
    return this._analysisVisualization?.loadingMessages ?? false;
  }
  get results() {
    return this.analysis.dimensions.map((i2) => this._dimensionsToComputations.get(i2).result);
  }
  get selectedComputation() {
    const { selectedDimension: i2 } = this;
    return null == i2 ? null : this._dimensionsToComputations.get(i2);
  }
  get testInfo() {
    return { visualization: this._analysisVisualization, controller: this._analysisController };
  }
  async createLengthDimensions(i2) {
    return this.selectedDimension = null, this._placementTask = e$c(this._placementTask), this._placementTask = l$6(this, i2), this._placementTask.promise;
  }
  _createComputation(i2) {
    const { _dimensionsToComputations: s2 } = this, t2 = new l({ dimension: i2, projectAndAlignPoint: this._projectAndAlignPoint });
    return s2.set(i2, t2), { computation: t2, remove: () => this._removeComputation(t2) };
  }
  _removeComputation(i2) {
    const { dimension: s2 } = i2;
    s2 === this.selectedDimension && (this.selectedDimension = null), this._dimensionsToComputations.delete(s2), i2.destroy();
  }
};
e$3([y$1({ readOnly: true })], f.prototype, "type", void 0), e$3([y$1()], f.prototype, "tool", void 0), e$3([y$1()], f.prototype, "updating", null), e$3([y$1({ readOnly: true })], f.prototype, "results", null), e$3([y$1()], f.prototype, "computations", void 0), e$3([y$1()], f.prototype, "selectedDimension", void 0), e$3([y$1()], f.prototype, "selectedComputation", null), e$3([y$1()], f.prototype, "_analysisVisualization", void 0), e$3([y$1()], f.prototype, "_analysisController", void 0), e$3([y$1()], f.prototype, "_dimensionsToComputations", void 0), e$3([y$1()], f.prototype, "_placementTask", void 0), f = e$3([c$3("esri.views.3d.analysis.DimensionAnalysisView3D")], f);
const g2 = f;
export {
  g2 as default
};
