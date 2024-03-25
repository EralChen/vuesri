import { xx as O$2, xy as N$1, fV as c$2, aW as n$2, aI as r$1, nP as c$3, uO as n$3, qB as p$2, kR as h$2, aH as O$3, aN as K$1, fD as _$2, qu as P$1, vv as H, l4 as l$2, fE as z$2, im as e$1, fX as q$1, tf as r$2, xz as x$1, xf as X$1, kU as e$2, f_ as v, aV as e$3, aX as y$1, a_ as c$4, bZ as S$2, xA as g$5, fh as i$1, xB as e$4, ce as d$1, cl as A$1, ek as j$2, aT as s$1, b$ as u$1, ty as R, tw as G$1, uB as u$2, uP as ee, vN as d$2, uR as e$5, ll as st, tt as gt$1, nQ as g$6, uS as t$2, uQ as j$3, tr as n$4, bX as P$2, xC as p$3, id as u$3, qs as x$2, xD as M$1, xE as z$3, cY as x$3, ei as s$2, uD as j$4, qy as E$1, qt as O$4, qA as b$3, aF as e$6, qw as V$1, vS as G$2, uV as o, uC as w$2, kH as s$3, uF as f$3, fF as o$1, l2 as h$3, uT as h$4, l1 as H$1, aE as r$4, xF as q$2, f$ as F$1, aD as M$2, v4 as Y$1, fj as I$1, fk as e$7, fl as t$3, nF as e$8, bW as h$5, hR as t$4, gt as e$9, gr as V$2, v6 as p$4, vr as P$3, xG as O$5, xH as a$1, qH as h$6, xI as p$5, cf as C$2, xJ as N$2, si as d$4, c8 as u$4, f6 as p$6, xK as j$5, xL as f$5, qn as o$2, qp as t$5, cm as e$a, gx as e$b, xM as c$5, g8 as l$4, qo as o$3, l0 as a$2, xN as r$5, l3 as q$3, xO as t$6, xP as v$1, l6 as R$1, l7 as b$4, xQ as s$4, qG as _$3, tA as f$7, tC as h$8, bQ as V$3, fc as e$c } from "./chunk-ejFG4zJ0.js";
import { s as s$5 } from "./chunk-SJe5cJoE.js";
import { t as t$1, r as r$3, u as u$5 } from "./chunk-keIwoUsu.js";
import { m as m$2, f as f$6 } from "./chunk-4Kw0cdlJ.js";
import { m as m$1, Z as Z$1, a as m$3 } from "./chunk-MIHgBujt.js";
import { T } from "./chunk--_aQKBqP.js";
import { l as l$3 } from "./chunk-dLtbcH7z.js";
import { f as f$4, r as r$6, t as t$7 } from "./chunk-feYAbK6R.js";
import { d as d$3 } from "./chunk-l9MdE61v.js";
import { h as h$7 } from "./chunk-TCdzNZ_N.js";
import { a as a$3, v as v$2, l as l$5 } from "./chunk-GwzlD4zT.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-D8vtbm22.js";
import "./chunk-OKVnMJUL.js";
import "./chunk-V0WGYzWu.js";
function w$1(t2, o2, a2) {
  if (null == t2)
    return null;
  let s2;
  if (o2 === t$1.Horizontal)
    s2 = m$1(t2.elevationAlignedStartPoint, t2.elevationAlignedEndPoint);
  else {
    const { startRenderSpace: e2, endRenderSpace: n2 } = t2.dimensionSegment;
    s2 = Z$1(e2, n2, t2.spatialReference);
  }
  if (null == s2)
    return null;
  const d2 = o2 === t$1.Vertical ? O$2(s2.value, s2.unit, a2) : N$1(s2.value, s2.unit, a2);
  return c$2(s2, d2);
}
function z$1(e2) {
  const { elevationAlignedStartPoint: t2, elevationAlignedEndPoint: n2, dimension: { offset: r2, measureType: i2, orientation: o2 } } = e2;
  return { elevationAlignedStartPoint: t2, elevationAlignedEndPoint: n2, offset: r2, measureType: i2, orientation: o2 };
}
function C$1({ elevationAlignedStartPoint: t2, elevationAlignedEndPoint: n2, offset: r2, measureType: i2, orientation: o2 }, a2, d2 = null) {
  if (null == t2 || null == n2)
    return null;
  const l2 = V(d2?.directSegment ?? new m$2(), { elevationAlignedStartPoint: t2, elevationAlignedEndPoint: n2 }, a2), c2 = d2?.primaryOffsetAxis ?? n$2();
  B(c2, { measureType: i2, elevationAlignedStartPoint: t2, elevationAlignedEndPoint: n2, directSegment: l2, orientation: o2, renderCoordsHelper: a2 });
  const p2 = d2?.dimensionSegment ?? new m$2();
  return G({ elevationAlignedStartPoint: t2, elevationAlignedEndPoint: n2 }) && i2 === t$1.Vertical ? (r$1(p2.startRenderSpace, l2.startRenderSpace), r$1(p2.endRenderSpace, l2.endRenderSpace)) : Y(p2, { offsetAxis: c2, offset: r2, relativeToSegment: l2, renderCoordsHelper: a2 }), { elevationAlignedStartPoint: t2, elevationAlignedEndPoint: n2, directSegment: l2, dimensionSegment: p2, primaryOffsetAxis: c2, spatialReference: a2.spatialReference };
}
function U$1(e2, t2, n2, r2) {
  return t2 === b$2.Start ? (r$1(e2.startRenderSpace, n2.startRenderSpace), r$1(e2.endRenderSpace, r2.startRenderSpace)) : (r$1(e2.startRenderSpace, n2.endRenderSpace), r$1(e2.endRenderSpace, r2.endRenderSpace)), e2;
}
var b$2;
function k$1(e2, t2, n2, r2) {
  q$1(e2.startRenderSpace, t2.startRenderSpace, n2, r2), q$1(e2.endRenderSpace, t2.endRenderSpace, n2, r2);
}
function M(t2, n2, r2, i2) {
  switch (n2) {
    case t$1.Direct:
      return V(t2, r2, i2);
    case t$1.Horizontal:
    case t$1.Vertical: {
      const { elevationAlignedStartPoint: o2, elevationAlignedEndPoint: a2, dimension: s2, geometry: d2 } = r2;
      let l2;
      if (s2.measureType === t$1.Direct) {
        l2 = D(d2, i2) === o2.z > a2.z, n2 === t$1.Horizontal && (l2 = !l2);
      } else
        l2 = !O$1(d2);
      const [c2, p2] = l2 ? [o2, a2] : [a2, o2], u2 = x$1(p2, I);
      return n2 === t$1.Horizontal ? u2.z = c2.z : (u2.x = c2.x, u2.y = c2.y), i2.toRenderCoords(c2, t2.startRenderSpace), i2.toRenderCoords(u2, t2.endRenderSpace), t2;
    }
  }
}
function V(e2, t2, n2) {
  return n2.toRenderCoords(t2.elevationAlignedStartPoint, e2.startRenderSpace), n2.toRenderCoords(t2.elevationAlignedEndPoint, e2.endRenderSpace), e2;
}
function D(e2, t2) {
  const n2 = e2.directSegment.eval(0.5, c$3.get()), r2 = t2.worldUpAtPosition(n2, c$3.get()), i2 = e2.dimensionSegment.eval(0.5, c$3.get()), o2 = K$1(c$3.get(), i2, n2);
  return !H(o2, l$2) && P$1(o2, r2) > 0;
}
function O$1(e2) {
  const { startRenderSpace: t2, endRenderSpace: n2 } = e2.dimensionSegment, { startRenderSpace: r2, endRenderSpace: i2 } = e2.directSegment;
  return X$1(r2, t2) < X$1(i2, n2);
}
!function(e2) {
  e2[e2.Start = 0] = "Start", e2[e2.End = 1] = "End";
}(b$2 || (b$2 = {}));
const I = e$2(0, 0, 0, null);
function L(e2, t2, n2, r2) {
  const { directSegment: i2 } = n2, o2 = B(c$3.get(), { measureType: t2, directSegment: i2, renderCoordsHelper: r2 }), a2 = Y(q, { offsetAxis: o2, offset: 0, relativeToSegment: i2, renderCoordsHelper: r2 }).eval(0.5, c$3.get()), s2 = K$1(c$3.get(), e2, a2);
  return P$1(s2, o2) * r2.unitInMeters;
}
const q = new m$2();
function B(n2, r2) {
  const { measureType: i2, elevationAlignedStartPoint: a2, elevationAlignedEndPoint: d2, directSegment: { startRenderSpace: u2, endRenderSpace: f2 }, directSegment: v2, renderCoordsHelper: y2 } = r2, E2 = v2.eval(0.5, c$3.get()), j2 = y2.worldUpAtPosition(E2, c$3.get()), x2 = y2.worldBasisAtPosition(E2, n$3.Y, c$3.get());
  switch (i2) {
    case t$1.Horizontal:
      r$1(n2, j2);
      break;
    case t$1.Vertical:
      P$1(u2, j2) < P$1(f2, j2) ? K$1(n2, f2, u2) : K$1(n2, u2, f2), _$2(n2, n2, j2), _$2(n2, n2, j2);
      break;
    case t$1.Direct: {
      const e2 = r2.orientation ?? 0;
      if (G({ elevationAlignedStartPoint: a2, elevationAlignedEndPoint: d2 }))
        p$2(F, -h$2(e2), j2), O$3(n2, x2, F);
      else {
        const r3 = K$1(c$3.get(), f2, u2), i3 = _$2(c$3.get(), r3, j2);
        _$2(i3, i3, r3), p$2(F, h$2(e2), r3), O$3(n2, i3, F);
      }
      break;
    }
  }
  return H(n2, l$2) ? r$1(n2, x2) : z$2(n2, n2);
}
const F = e$1();
function G({ elevationAlignedStartPoint: e2, elevationAlignedEndPoint: t2 }) {
  return null != e2 && null != t2 && e2.x === t2.x && e2.y === t2.y;
}
function Y(e2, t2) {
  const { offsetAxis: n2, offset: r2, relativeToSegment: { startRenderSpace: i2, endRenderSpace: o2 }, relativeToSegment: a2, renderCoordsHelper: s2 } = t2, l2 = r2 / s2.unitInMeters, [c2, p2] = J(i2, o2, n2, l2);
  return q$1(e2.startRenderSpace, a2.startRenderSpace, n2, c2), q$1(e2.endRenderSpace, a2.endRenderSpace, n2, p2), e2;
}
function J(e2, t2, n2, r2 = 0) {
  const i2 = P$1(t2, n2), o2 = P$1(e2, n2), a2 = Math.abs(i2 - o2) + r2;
  return i2 > o2 ? [a2, r2] : [r2, a2];
}
function K(e2, t2, n2) {
  const r2 = t2.directSegment.eval(0.5, c$3.get());
  return n2.worldUpAtPosition(r2, e2);
}
function N(e2, t2) {
  const { startRenderSpace: n2, endRenderSpace: r2 } = t2.directSegment;
  return K$1(e2, r2, n2);
}
function Q(e2, t2, n2 = { invert: false }) {
  const { startRenderSpace: r2, endRenderSpace: i2 } = t2.dimensionSegment;
  return n2.invert ? K$1(e2, r2, i2) : K$1(e2, i2, r2);
}
function W(e2, t2) {
  const n2 = e2.directSegment.eval(0.5, c$3.get());
  return t2.headingAtPosition(n2, e2.primaryOffsetAxis);
}
function X(e2, t2) {
  return v(Q(Z, e2)) / t2 ** 2;
}
const Z = n$2();
function $(e2) {
  const { elevationAlignedStartPoint: t2, elevationAlignedEndPoint: r2 } = e2;
  if (null == t2 || null == r2)
    return false;
  const i2 = m$3(t2, r2);
  return null != i2 && c$2(i2, "meters").value > r$2;
}
function _$1(e2) {
  return null != e2.geometry;
}
let g$4 = class g extends S$2 {
  constructor(t2) {
    super(t2);
  }
  initialize() {
    const t2 = g$5(() => this.analysisViewData.computations, ({ computation: t3 }) => this._watchComputation(t3));
    this.addHandles(i$1(t2));
  }
  get analysis() {
    return this.analysisViewData.analysis;
  }
  get _defaultUnit() {
    return e$4(this.view);
  }
  _watchComputation(t2) {
    return d$1(() => z$1(t2), (s2) => {
      const { measureType: o2 } = s2;
      if ($(s2) && o2 !== t$1.Direct) {
        const e2 = Math.round(j$2(r$2, "meters", "kilometers"));
        return s$1.getLogger(this).warnOnce(`A ${o2} dimension in the analysis (id: '${this.analysis.id}') will not display, because only direct dimensions can measure lengths greater than ${e2} km. Update the measureType of the affected dimension to "direct" to display it.`), void (t2.geometry = null);
      }
      const i2 = C$1(s2, this.view.renderCoordsHelper, t2.geometry);
      t2.geometry = i2, t2.result.length = w$1(i2, o2, this._defaultUnit);
    }, A$1);
  }
};
e$3([y$1({ constructOnly: true })], g$4.prototype, "analysisViewData", void 0), e$3([y$1({ constructOnly: true })], g$4.prototype, "view", void 0), e$3([y$1()], g$4.prototype, "analysis", null), e$3([y$1()], g$4.prototype, "_defaultUnit", null), g$4 = e$3([c$4("esri.views.3d.analysis.Dimension.support.DimensionController")], g$4);
function n$1(o2) {
  return R(o2.accentColor, 0.5);
}
function c$1(o2) {
  return G$1(o2.accentColor);
}
const e = 5, i = new u$1([127, 127, 127, 0.5]), l$1 = 0.8, f$2 = 4, m = 6, s = 0.1, u = 0.5, p$1 = 18, C = 2, a = 0.3, j$1 = 2, w = 0.25, x = 20, U = 5, b$1 = 5, d = 10, g$3 = 2500, h$1 = 50, k = 2;
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
    for (const r2 of r$3)
      e2(this.manipulatorForMeasureType(r2), r2);
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
class Me extends ee {
  constructor(t2, r2) {
    const n2 = d$2(u$1.toUnitRGBA(n$1(t2.effectiveTheme))), i2 = [new e$5(st(n2, 1, 32, 32), tt)];
    super({ view: t2, renderObjects: i2, metadata: r2.metadata, available: false, grabCursor: "crosshair", radius: e, collisionPriority: 1 }), this._themeHandle = d$1(() => ({ color: u$1.toUnitRGBA(n$1(t2.effectiveTheme)) }), (e2) => n2.setParameters(e2));
  }
  destroy() {
    this._themeHandle.remove(), super.destroy();
  }
}
function Pe(e2, t2) {
  const r2 = [r$4(-0.5, 0, 0), r$4(0.5, 0, 0)], n2 = gt$1(t2.unfocusedMaterial, r2.map((e3) => g$6(n$2(), e3, u))), i2 = n2.instantiate({ material: t2.focusedMaterial });
  return new ee({ view: e2, renderObjects: [new e$5(n2, t$2.Unfocused | t$2.Selected | tt), new e$5(i2, t$2.Focused | tt)], collisionType: { type: "line", paths: [r2] }, radius: $e(t2.lineSizePt) / 2, metadata: t2.metadata, available: false, ...j$3 });
}
class Ce extends ee {
  constructor(t2, { lineSizePt: r2, material: n2, metadata: i2 }) {
    super({ view: t2, autoScaleRenderObjects: false, collisionPriority: 1, metadata: i2 }), this._options = { calloutColor: n$4(), lineSizePt: r2, material: n2 }, this._themeHandle = d$1(() => u$1.toUnitRGBA(n$1(t2.effectiveTheme)), (e2) => {
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
function Te({ calloutColor: e2, lineSizePt: t2, material: r2, metadata: n2 }) {
  return { calloutLength: 0.25 * p$3 * l$1 * u$3(t2) + p$1, calloutColor: e2, calloutWidth: C, customStateMask: tt, discScale: a, focusMultiplier: j$1, material: r2, metadata: n2 };
}
function Oe(e2, t2) {
  const r2 = [r$4(-0.5, 0, 0), r$4(0.5, 0, 0)], n2 = gt$1(t2.thinOffsetManipulatorMaterial, r2), i2 = gt$1(t2.unfocusedMaterial, r2.map((e3) => g$6(n$2(), e3, u))), o2 = i2.instantiate({ material: t2.focusedMaterial });
  return new ee({ view: e2, renderObjects: [new e$5(i2, t$2.Unfocused | tt), new e$5(o2, t$2.Focused | tt), new e$5(n2, tt)], collisionType: { type: "line", paths: [r2] }, radius: $e(t2.lineSizePt) / 2, available: false, metadata: t2.metadata, ...j$3 });
}
function Ue(e2, { isStart: t2, createSnappingPipelineStep: r2, dimension: n2, onUpdate: i2, view: o2 }) {
  const a2 = t2 ? "startPoint" : "endPoint", s2 = x$2(e2, (e3, t3, s3, c2) => {
    const l2 = q$2(e3), { snappingStep: m2, cancelSnapping: d2 } = r2(c2);
    s3 = s3.next(l2).next(M$1(n2, [a2, "measureType", "orientation"])).next(d2), t3.next(l2).next(z$3(o2)).next(...m2).next((e4) => {
      const t4 = x$1(e4.mapEnd, new x$3());
      i2("startPoint" === a2 ? { startPoint: t4 } : { endPoint: t4 });
    });
  });
  return [s2];
}
function Re(e2, { computation: t2, view: r2 }) {
  return [x$2(e2, (e3, n2, i2) => {
    if (!_$1(t2) || !e3.selected)
      return;
    const { geometry: o2, dimension: a2 } = t2, s2 = q$2(e3);
    n2.next(s2).next(Le(r2, a2, o2.dimensionSegment, o2.primaryOffsetAxis)), i2.next(s2).next(M$1(a2, ["offset"]));
  })];
}
function ze(e2, { computation: t2, view: r2 }) {
  return [x$2(e2, (e3, n2, i2) => {
    _e({ cancel: i2, computation: t2, settingHeading: true, steps: n2, view: r2 });
  })];
}
function Ae(e2, { computation: t2, view: r2 }) {
  return [x$2(e2, (e3, n2, i2) => {
    _e({ cancel: i2, computation: t2, settingHeading: false, steps: n2, view: r2 });
  }), e2.events.on("immediate-click", (e3) => {
    De(e3, t2, r2);
  })];
}
function De(e2, t2, r2) {
  const { dimension: i2, geometry: o2 } = t2;
  if (90 === i2.orientation || 270 === i2.orientation)
    return i2.orientation = 0, void e2.stopPropagation();
  if (null == o2)
    return;
  const { renderCoordsHelper: a2 } = r2, s2 = C$1({ ...z$1(t2), orientation: 90 }, a2), c2 = C$1({ ...z$1(t2), orientation: 270 }, a2);
  if (null == s2 || null == c2)
    return;
  const l2 = W(s2, a2), m2 = W(c2, a2), d2 = Ee(o2, r2), u2 = s$2.shortestSignedDiff(d2, l2), p2 = s$2.shortestSignedDiff(d2, m2);
  i2.orientation = Math.abs(u2) < Math.abs(p2) ? 90 : 270, e2.stopPropagation();
}
function _e(e2) {
  const { cancel: t2, computation: r2, settingHeading: n2, steps: o2, view: a2 } = e2;
  if (!_$1(r2))
    return;
  const { renderCoordsHelper: s2 } = a2, { dimension: c2, geometry: l2 } = r2, m2 = n$2(), d2 = Je(n$2(), l2, l2.directSegment, s2), p2 = Ke(c$3.get(), { forHeading: n2, geometry: l2, renderCoordsHelper: s2 }), f2 = j$4(d2, p2, E$1()), g3 = n2 ? c2.orientation ?? W(l2, a2.renderCoordsHelper) : c2.orientation ?? 0;
  o2.next(O$4(a2, f2)).next((e3) => {
    "start" === e3.action && r$1(m2, e3.renderStart);
    const t3 = F$1(f2), r3 = b$3(m2, e3.renderEnd, d2, t3);
    let o3 = g3 - M$2(r3);
    n2 || (o3 = ke(o3)), c2.orientation = o3;
  }), t2.next(M$1(c2, ["orientation"]));
}
function ke(e2) {
  const t2 = s$2.normalize(e2) % 90;
  return t2 < b$1 ? e2 - t2 : 90 - t2 < b$1 ? e2 + (90 - t2) : e2;
}
function Fe(e2, { computation: t2, manipulatorMeasureType: n2, view: i2 }) {
  let o2 = t$1.Direct, a2 = 0, s2 = 0;
  return [e2.events.on("grab-changed", (r2) => {
    if ("start" !== r2.action || !_$1(t2))
      return;
    const { dimension: c2, geometry: l2 } = t2;
    o2 = c2.measureType, a2 = c2.offset, s2 = c2.orientation;
    const m2 = r$1(c$3.get(), e2.renderLocation);
    c2.measureType = n2, c2.offset = L(m2, n2, l2, i2.renderCoordsHelper), c2.orientation = 0;
  }), x$2(e2, (e3, r2, c2) => {
    if (!_$1(t2))
      return;
    const { geometry: l2, dimension: m2 } = t2, { renderCoordsHelper: d2 } = i2, u2 = M(ot, n2, t2, d2), p2 = B(c$3.get(), { measureType: n2, directSegment: l2.directSegment, renderCoordsHelper: d2 }), f2 = q$2(e3);
    r2.next(f2).next(Le(i2, m2, u2, p2)), c2.next(f2).next((e4) => (m2.measureType = o2, m2.offset = a2, m2.orientation = s2, e4));
  })];
}
function Le(e2, t2, r2, n2) {
  const i2 = e$6(c$3.get(), r2.endRenderSpace, r2.startRenderSpace);
  _$2(i2, i2, n2);
  const o2 = j$4(r2.startRenderSpace, i2, E$1()), a2 = j$4(r2.startRenderSpace, n2, E$1()), s2 = t2.offset;
  let c2, l2 = 0;
  const m2 = new Y$1();
  return m2.next(O$4(e2, o2)).next((r3) => {
    "start" === r3.action && (l2 = V$1(a2, r3.renderStart));
    const n3 = (V$1(a2, r3.renderEnd) - l2) * e2.renderCoordsHelper.unitInMeters;
    t2.offset = s2 + n3, c2 = r3;
  }), (e3) => (m2.execute(e3), c2);
}
function Ee(e2, t2) {
  const { directSegment: r2 } = e2, { renderCoordsHelper: n2 } = t2, i2 = K(c$3.get(), e2, n2), o2 = N(c$3.get(), e2), a2 = _$2(c$3.get(), o2, i2), { viewForward: s2 } = t2.state.camera;
  P$1(a2, s2) > 0 && g$6(a2, a2, -1);
  const c2 = r2.eval(0.5, c$3.get());
  return n2.headingAtPosition(c2, a2);
}
function Ie(e2, t2, r2) {
  const { dimensionSegment: n2, primaryOffsetAxis: i2 } = t2, o$22 = Q(rt, t2), a2 = G$2(o$22, l$2) ? o(it) : w$2(o$22, i2, l$2, it), s$12 = Math.max(s$3(o$22), s / r2.unitInMeters);
  f$3(a2, a2, o$1(rt, s$12, s$12, s$12)), e2.modelTransform = a2, e2.renderLocation = n2.eval(0.5, rt);
}
function Ge(e2, t2, r2) {
  Ne(e2, t2, r2, { forHeading: true });
}
function Be(e2, t2, r2) {
  Ne(e2, t2, r2, { forHeading: false });
}
function Ne(e2, t2, r2, { forHeading: n2 }) {
  const { dimension: i2, geometry: o2 } = t2, { primaryOffsetAxis: a2 } = o2, s2 = g$6(Ve, a2, i2.offset >= 0 ? 1 : -1), c2 = Ke(We, { forHeading: n2, geometry: o2, renderCoordsHelper: r2 });
  _$2(c2, c2, s2);
  const l2 = w$2(s2, c2, l$2, it);
  e2.modelTransform = l2, e2.renderLocation = Je(rt, o2, o2.dimensionSegment, r2);
}
const Ve = n$2(), We = n$2();
function qe(e2, t2, r2, n2) {
  const { geometry: i2 } = t2, o2 = M(ot, r2, t2, n2), a2 = B(rt, { measureType: r2, directSegment: i2.directSegment, renderCoordsHelper: n2 }), s2 = K$1(nt, o2.endRenderSpace, o2.startRenderSpace), c2 = w$2(s2, a2, l$2, it), m2 = s$3(s2);
  f$3(c2, c2, o$1(nt, m2, m2, m2)), e2.modelTransform = c2, e2.renderLocation = o2.eval(0.5, nt);
}
function Je(e2, t2, r2, n2) {
  const { startRenderSpace: i2, endRenderSpace: o2 } = r2, a2 = Qe(t2, n2) ? i2 : o2;
  return r$1(e2, a2);
}
function Ke(e2, { forHeading: t2, geometry: r2, renderCoordsHelper: n2 }) {
  return t2 ? K(e2, r2, n2) : Q(e2, r2, { invert: true });
}
function Qe(e2, t2) {
  const r2 = N(Xe, e2), n2 = K(Ye, e2, t2);
  return P$1(r2, n2) > 0;
}
const Xe = n$2(), Ye = n$2();
function Ze(e2) {
  return u$3(e2) + f$2;
}
function $e(e2) {
  return u$3(e2) + m;
}
function et(e2, t2) {
  const r2 = t2.material ?? new T({ transparent: true, writeDepth: false, textureId: t2.texture?.id, renderOccluded: h$3.Opaque, isDecoration: true }), n2 = t2.focusMultiplier ?? h$4.focusMultiplier, i2 = t2.calloutLength ?? h$4.calloutLength, o2 = h$4.discRadius * (t2.discScale ?? 1), a2 = o2 * n2, s2 = (e3, t3) => {
    const r3 = [0, 1, 2, 2, 3, 0];
    return new I$1(t3, [[e$7.POSITION, new t$3([i2 - e3, -e3, 0, i2 + e3, -e3, 0, i2 + e3, e3, 0, i2 - e3, e3, 0], r3, 3, true)], [e$7.UV0, new t$3([0, 0, 1, 0, 1, 1, 0, 1], r3, 2, true)]]);
  }, c2 = t2.calloutWidth ?? h$4.calloutWidth, l2 = new H$1({ width: c2, color: t2.calloutColor, renderOccluded: h$3.OccludeAndTransparent, isDecoration: true }), m2 = gt$1(l2, [[0, 0, 0], [i2 - o2, 0, 0]]), d2 = gt$1(l2, [[0, 0, 0], [i2 - a2, 0, 0]]), u2 = t2.customStateMask ?? u$2.None;
  e2.collisionType = { type: "disc", direction: [0, 0, 1], offset: [i2, 0, 0] }, e2.focusMultiplier = n2, e2.metadata = t2.metadata, e2.radius = o2, e2.renderObjects = [new e$5(s2(o2, r2), t$2.Unfocused | u2), new e$5(m2, t$2.Unfocused | u2), new e$5(s2(a2, r2), t$2.Focused | u2), new e$5(d2, t$2.Focused | u2)];
}
const tt = u$2.Custom1, rt = n$2(), nt = n$2(), it = e$1(), ot = new m$2();
var p;
function P(e2, t2) {
  return { enabled: t2.effectiveFeatureEnabled, elevationAlignedStartPoint: e2.elevationAlignedStartPoint, elevationAlignedEndPoint: e2.elevationAlignedEndPoint, geometry: e2.geometry };
}
function f$1(e2, s2) {
  if ($(e2))
    return p.Direct;
  if (!e2.enabled)
    return null;
  const { geometry: u2 } = e2;
  if (null == u2 || G$2(u2.directSegment.startRenderSpace, u2.directSegment.endRenderSpace))
    return null;
  const { camera: P2 } = s2.state, f2 = K(c$3.get(), u2, s2.renderCoordsHelper), g3 = N(c$3.get(), u2), S2 = g$6(c$3.get(), f2, P$1(g3, f2)), v$12 = e$6(c$3.get(), g3, S2), y2 = v(v$12), A = v(S2), { startRenderSpace: R2, endRenderSpace: j2 } = u2.directSegment, z2 = Math.max(P2.computeScreenPixelSizeAt(R2) * d, P2.computeScreenPixelSizeAt(j2) * d) ** 2;
  return y2 < z2 ? p.Vertical : A < z2 ? p.Horizontal : null;
}
function g$2(e2, t2, { constraint: n2, view: i2 }) {
  const { unconstrainedGeometry: o2 } = e2;
  if (null == o2)
    return;
  const { renderCoordsHelper: r2, spatialReference: a2 } = i2, { startRenderSpace: s2, endRenderSpace: l2 } = o2.directSegment, c2 = r2.fromRenderCoords(s2, new x$3({ spatialReference: a2 })), d2 = r2.fromRenderCoords(l2, new x$3({ spatialReference: a2 }));
  let m2;
  m2 = "start" === t2 ? { startPoint: c2 } : { endPoint: d2 }, S$1(e2, m2, { constraint: n2, elevationAlignedStartPoint: e2.elevationAlignedStartPoint, elevationAlignedEndPoint: e2.elevationAlignedEndPoint, unconstrainedGeometry: o2, view: i2 });
}
function S$1(t2, n2, i2) {
  const { constraint: o2, elevationAlignedStartPoint: r2, elevationAlignedEndPoint: a2, unconstrainedGeometry: l2, view: c2 } = i2, { dimension: d2, previousConstraint: m2, preConstraintProperties: u2 } = t2;
  if (null == r2 || null == a2)
    return;
  const P2 = () => {
    "startPoint" in n2 ? d2.startPoint = n2.startPoint : "endPoint" in n2 && (d2.endPoint = n2.endPoint);
  };
  if (null == o2)
    P2(), null != m2 && null != u2 && (d2.measureType = u2.measureType, d2.orientation = u2.orientation);
  else
    switch (d2.measureType = t$1.Direct, o2) {
      case p.Horizontal:
        if (o2 !== m2 && (d2.orientation = 0), "startPoint" in n2) {
          const e2 = n2.startPoint;
          null != e2 && (e2.z = a2.z), d2.startPoint = e2;
        } else if ("endPoint" in n2) {
          const e2 = n2.endPoint;
          null != e2 && (e2.z = r2.z), d2.endPoint = e2;
        }
        break;
      case p.Vertical:
        if (o2 !== m2 && (d2.orientation = Ee(l2, c2)), "startPoint" in n2) {
          const e2 = n2.startPoint;
          null != e2 && (e2.x = a2.x, e2.y = a2.y), d2.startPoint = e2;
        } else if ("endPoint" in n2) {
          const e2 = n2.endPoint;
          null != e2 && (e2.x = r2.x, e2.y = r2.y), d2.endPoint = e2;
        }
        break;
      case p.Direct:
        o2 !== m2 && null != u2 && (d2.orientation = u2.orientation), P2();
    }
  t2.previousConstraint = o2, t2.unconstrainedGeometry = l2;
}
!function(e2) {
  e2[e2.Horizontal = 0] = "Horizontal", e2[e2.Vertical = 1] = "Vertical", e2[e2.Direct = 2] = "Direct";
}(p || (p = {}));
let gt = class extends S$2 {
  constructor(t2) {
    super(t2), this._stagedDimension = null, this._computationManipulators = /* @__PURE__ */ new Map(), this._computationHandles = new e$8(), this._orientationManipulatorTexture = null, this._updatingHandles = new h$5(), this._getSnappingContext = t$4((t3) => new e$9({ elevationInfo: { mode: "absolute-height", offset: 0 }, pointer: t3, editGeometryOperations: new V$2(new p$4("point", P$3(true, false, this.view.spatialReference))), visualizer: new O$5() }));
    const { view: i$12 } = t2;
    this._snappingManagerResult = a$1(i$12), this.addHandles(this._snappingManagerResult), this._unfocusedOffsetManipulatorMaterial = this._createOffsetManipulatorMaterial(), this._focusedOffsetManipulatorMaterial = this._createOffsetManipulatorMaterial(), this._thinOffsetManipulatorMaterial = this._createOffsetManipulatorMaterial(), this._thinOffsetManipulatorMaterial.setParameters({ stipplePattern: h$6(2) }), this._constraintSnappingIndicator = new f$4({ view: i$12, attached: true, width: 1, renderOccluded: h$3.OccludeAndTransparent, stipplePattern: h$6(5), isDecoration: true });
    const a2 = u$1.toUnitRGBA(i);
    this._stagedStartIndicator = new d$3({ view: i$12, attached: false, elevationInfo: { mode: "absolute-height", offset: 0 }, spatialReference: t2.view.renderCoordsHelper.spatialReference, color: a2, size: 2 * e, outlineSize: 0, renderOccluded: h$3.OccludeAndTransparent, isDecoration: true });
  }
  initialize() {
    const { view: t2 } = this;
    this._snappingOperation = new p$5({ view: t2 });
    const i2 = !t2._stage?.renderView.renderingContext.driverTest.svgPremultipliesAlpha.result;
    this._orientationManipulatorMaterial = new T({ transparent: true, writeDepth: false, renderOccluded: h$3.Opaque, isDecoration: true }), this.addHandles(d$1(() => ({ accentColor: n$1(t2.effectiveTheme), contrastColor: c$1(t2.effectiveTheme) }), ({ accentColor: a3, contrastColor: n2 }) => {
      const s2 = this._orientationManipulatorTexture, o2 = l$3(t2.textures, { accentColor: a3, contrastColor: n2, preMultiplyAlpha: i2 });
      this._orientationManipulatorMaterial.setParameters({ textureId: o2.texture.id }), this._orientationManipulatorTexture = o2, s2?.release();
      const r2 = u$1.toUnitRGBA(a3);
      this._unfocusedOffsetManipulatorMaterial.setParameters({ color: r2 }), this._focusedOffsetManipulatorMaterial.setParameters({ color: r2 }), this._thinOffsetManipulatorMaterial.setParameters({ color: r2 }), this._constraintSnappingIndicator.color = r2;
    }, P$2));
    const a2 = g$5(() => this.analysisViewData.computations, ({ computation: t3 }) => this._createManipulators(t3));
    this.addHandles(i$1(a2)), this.addHandles([d$1(() => ({ stagedPoint: this._snappingOperation.stagedPoint, stagedComputation: this._stagedComputation }), ({ stagedPoint: t3, stagedComputation: e2 }) => {
      if (null == e2 || null == t3)
        return;
      const i3 = x$1(t3, new x$3());
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
    }, A$1), d$1(() => this.analysis.style.lineSize, (t3) => {
      this._updateManipulatorStyle(t3);
    }, P$2), d$1(() => this.view.state.camera, () => {
      null != this._stagedComputation && this._updateStagedDimensionOffset(this._stagedComputation);
    }), d$1(() => {
      const t3 = this._stagedComputation;
      if (!t3)
        return null;
      const e2 = t3.elevationAlignedStartPoint, i3 = n$2();
      return null != e2 && this.view.renderCoordsHelper.toRenderCoords(e2, i3) ? i3 : null;
    }, (t3) => {
      null != t3 ? (this._stagedStartIndicator.vertices = [t3], this._stagedStartIndicator.attached = true) : this._stagedStartIndicator.attached = false;
    })]), this.addHandles(this._constraintHandles), this.addHandles(this._snappingIndicatorHandles), N$2(this, () => {
      const t3 = this._activeComputation, e2 = this._stagedComputation;
      if (null == t3 || null != e2) {
        const t4 = this.view.inputManager.latestPointerType ?? "mouse", e3 = this._getSnappingContext(t4);
        this._updatingHandles.addPromise(d$4(this._snappingOperation.snapAgainNearPreviousMapPoint(this._snappingManager, e3)));
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
    this._snappingOperation = u$4(this._snappingOperation), this._computationHandles.destroy(), this._constraintSnappingIndicator.destroy(), this._stagedStartIndicator.destroy(), this._orientationManipulatorTexture?.release();
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
    return [p$6(() => this.analysisViewData.selectedComputation, (t2) => {
      t2.previousConstraint = this._computeConstraint(t2);
    }, { ...A$1, equals: j$5 }), d$1(() => {
      const t2 = this._activeComputation;
      if (null == t2)
        return null;
      const { measureType: e2, orientation: i2 } = t2.dimension;
      return { measureType: e2, orientation: i2, computation: t2 };
    }, (t2, e2) => {
      if (null != t2 && null == e2) {
        const { measureType: e3, orientation: a2, computation: n2 } = t2;
        switch (n2.previousConstraint) {
          case p.Horizontal:
            n2.preConstraintProperties = { measureType: t$1.Horizontal, orientation: 0 };
            break;
          case p.Vertical:
            n2.preConstraintProperties = { measureType: t$1.Vertical, orientation: 0 };
            break;
          case p.Direct:
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
      null != t3 && null != e2 && e2 !== p.Direct ? (i2.visible = true, i2.setGeometryFromSegment(t3.directSegment)) : i2.visible = false;
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
    this._updatingHandles.addPromise(d$4(this._snappingOperation.snap({ point: t2 }, this._snappingManager, i2)));
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
    const s2 = new u$5({ startPoint: x$1(n2, new x$3()), endPoint: null, measureType: t$1.Horizontal });
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
    const n2 = x$1(a2, new x$3());
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
    this._computationHandles.add([d$1(() => t2.geometry, () => this._updateManipulators(t2, e2), { ...A$1, equals: j$5 })], t2);
  }
  _setupPointManipulator(t2, e2) {
    const { view: i2 } = this, { dimension: a2 } = t2, n2 = new Me(i2, { metadata: a2 }), s2 = Ue(n2, { isStart: e2.isStart, createSnappingPipelineStep: (t3) => f$5({ snappingContext: this._getSnappingContext(t3), snappingManager: this._snappingManager, updatingHandles: this._updatingHandles }), dimension: a2, onUpdate: (e3) => this._applyPointUpdate(t2, e3), view: i2 });
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
    const { view: e2 } = this, i2 = new Ce(e2, { lineSizePt: this.analysis.style.lineSize, material: this._orientationManipulatorMaterial, metadata: t2.dimension }), a2 = Ae(i2, { computation: t2, view: e2 });
    return this._computationHandles.add(a2, t2), i2;
  }
  _setupMeasureTypeManipulator(t2, e2) {
    const { view: i2 } = this, a2 = Oe(i2, { lineSizePt: this.analysis.style.lineSize, unfocusedMaterial: this._unfocusedOffsetManipulatorMaterial, focusedMaterial: this._focusedOffsetManipulatorMaterial, thinOffsetManipulatorMaterial: this._thinOffsetManipulatorMaterial, metadata: t2.dimension }), n2 = Fe(a2, { computation: t2, manipulatorMeasureType: e2, view: i2 });
    return this._computationHandles.add(n2, t2), a2;
  }
  _updateManipulators(t2, e2, a2 = { stagedDimension: this._stagedDimension, selectedComputation: this.analysisViewData.selectedComputation, firstGrabbedManipulator: this.firstGrabbedManipulator }) {
    const { stagedDimension: n2, selectedComputation: s2, firstGrabbedManipulator: o2 } = a2, { start: r2, end: p2, offset: l2, heading: u2, rotation: d2 } = e2, c2 = s2 === t2, m2 = _$1(t2), { dimension: h2 } = t2;
    for (const i2 of e2.values()) {
      const t3 = m2 && null == n2 && (null == o2 || i2 === o2);
      i2 === l2 ? (i2.available = t3, i2.selected = c2) : i2.available = t3 && c2;
    }
    if (!m2)
      return;
    null != this._computeConstraint(t2) ? e2.forEachMeasureTypeManipulator((t3) => t3.available = false) : e2.manipulatorForMeasureType(h2.measureType).available = false;
    for (const _2 of [u2, d2])
      h2.measureType === t$1.Direct && 0 !== h2.offset || (_2.available = false);
    G(t2) ? d2.available = false : u2.available = false;
    const { geometry: g3 } = t2;
    r2.renderLocation = g3.directSegment.startRenderSpace, p2.renderLocation = g3.directSegment.endRenderSpace;
    const { renderCoordsHelper: f2 } = this.view;
    Ie(l2, g3, f2), u2.available && Ge(u2, t2, f2), d2.available && Be(d2, t2, f2), e2.forEachMeasureTypeManipulator((e3, i2) => {
      e3.available && qe(e3, t2, i2, f2);
    });
  }
  _updateManipulatorStyle(t2) {
    const e2 = Ze(t2), i2 = $e(t2), a2 = { lineSizePt: t2, material: this._orientationManipulatorMaterial };
    for (const { offset: n2, heading: s2, rotation: o2 } of this._computationManipulators.values())
      n2.radius = i2 / 2, s2.update(a2), o2.update(a2);
    this._unfocusedOffsetManipulatorMaterial.setParameters({ width: e2 }), this._focusedOffsetManipulatorMaterial.setParameters({ width: i2 });
  }
  _applyPointUpdate(t2, e2) {
    const { view: i2 } = this, a2 = z$1(t2);
    "startPoint" in e2 && (a2.elevationAlignedStartPoint = e2.startPoint), "endPoint" in e2 && (a2.elevationAlignedEndPoint = e2.endPoint);
    const n2 = C$1(a2, i2.renderCoordsHelper);
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
    return f$1(P(t2, this._snappingManager.options), this.view);
  }
  _createOffsetManipulatorMaterial() {
    return new H$1({ width: 1, renderOccluded: h$3.OccludeAndTransparent, writeDepth: false, hasPolygonOffset: true, isDecoration: true });
  }
  get testInfo() {
    const t2 = (t3) => this.analysisViewData.computations.find(({ computation: e2 }) => e2.dimension === t3)?.computation;
    return { disableManipulatorPartialOcclusion: () => {
      this._stagedStartIndicator.renderOccluded = h$3.Occlude, this.manipulators.forEach(({ manipulator: t3 }) => {
        for (const { geometry: e2 } of t3.renderObjects)
          e2.material.setParameters({ renderOccluded: h$3.Occlude });
      });
    }, getManipulatorsForDimension: (e2) => this._computationManipulators.get(t2(e2)), getComputationForDimension: (e2) => t2(e2), getConstraintForDimension: (e2) => {
      const i2 = t2(e2);
      return null != i2 ? this._computeConstraint(i2) : null;
    }, stagedDimension: this._stagedDimension, stagedStartIndicator: this._stagedStartIndicator, constraintSnappingIndicator: this._constraintSnappingIndicator, snappingManager: this._snappingManager };
  }
};
e$3([y$1({ constructOnly: true })], gt.prototype, "analysis", void 0), e$3([y$1({ constructOnly: true })], gt.prototype, "analysisViewData", void 0), e$3([y$1({ constructOnly: true })], gt.prototype, "manipulators", void 0), e$3([y$1({ constructOnly: true })], gt.prototype, "parentTool", void 0), e$3([y$1({ constructOnly: true, nonNullable: true })], gt.prototype, "view", void 0), e$3([y$1({ readOnly: true })], gt.prototype, "updating", null), e$3([y$1()], gt.prototype, "firstGrabbedManipulator", null), e$3([y$1()], gt.prototype, "hasGrabbedManipulators", null), e$3([y$1()], gt.prototype, "snappingOptions", null), e$3([y$1()], gt.prototype, "_stagedDimension", void 0), e$3([y$1()], gt.prototype, "_activeComputation", null), e$3([y$1()], gt.prototype, "_stagedComputation", null), gt = e$3([c$4("esri.views.3d.analysis.Dimension.LengthDimensionSubTool")], gt);
const ft = n$2();
var g$1;
!function(e2) {
  e2.Ready = "ready", e2.Creating = "creating", e2.Created = "created";
}(g$1 || (g$1 = {}));
let S = class extends o$2 {
  constructor(e2) {
    super(e2), this.automaticManipulatorSelection = false, this.removeIncompleteOnCancel = false, this._pointerMoveTimerMs = g$3, this._prevPointerMoveTimeout = null;
  }
  initialize() {
    this._intersector = t$5(this.view.state.viewingMode), this._lengthDimensionSubTool = new gt({ analysis: this.analysis, analysisViewData: this.analysisViewData, manipulators: this.manipulators, parentTool: this, view: this.view }), this.addHandles([i$1(this._lengthDimensionSubTool), e$a(() => this._clearPointerMoveTimeout()), d$1(() => this.state, (e2) => {
      e2 === g$1.Created && this.finishToolCreation();
    }, A$1), p$6(() => this.firstGrabbedManipulator, (e2) => {
      this.selectedDimension = e2.metadata;
    }, A$1), d$1(() => this.selectedDimension, () => this._resetPointerMoveTimeout(), A$1)]);
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
    const i2 = this._intersector.results.min, o2 = c$3.get();
    return i2.getIntersectionPoint(o2) ? this.view.renderCoordsHelper.fromRenderCoords(o2, new x$3({ spatialReference: this.view.spatialReference })) : null;
  }
  _removeSelected() {
    null != this.selectedDimension && (this.analysis.dimensions.remove(this.selectedDimension), this.selectedDimension = null);
  }
  _clearPointerMoveTimeout() {
    this._prevPointerMoveTimeout = l$4(this._prevPointerMoveTimeout);
  }
  _resetPointerMoveTimeout() {
    this._clearPointerMoveTimeout(), this.manipulators.forEach((e2) => e2.manipulator.state |= tt), this._prevPointerMoveTimeout = o$3.setTimeout(() => {
      this.manipulators.forEach((e2) => e2.manipulator.state &= ~tt);
    }, this._pointerMoveTimerMs);
  }
  get testInfo() {
    return { ...this._lengthDimensionSubTool.testInfo, setManipulatorAutoHideDelay: (e2) => {
      this._pointerMoveTimerMs = e2, this._resetPointerMoveTimeout();
    } };
  }
};
e$3([y$1({ constructOnly: true })], S.prototype, "view", void 0), e$3([y$1({ constructOnly: true })], S.prototype, "analysis", void 0), e$3([y$1({ readOnly: true })], S.prototype, "state", null), e$3([y$1({ readOnly: true })], S.prototype, "updating", null), e$3([y$1({ readOnly: true })], S.prototype, "cursor", null), e$3([y$1({ constructOnly: true })], S.prototype, "analysisViewData", void 0), e$3([y$1()], S.prototype, "selectedDimension", null), e$3([y$1()], S.prototype, "automaticManipulatorSelection", void 0), e$3([y$1()], S.prototype, "_activeSubTool", void 0), e$3([y$1()], S.prototype, "_lengthDimensionSubTool", void 0), S = e$3([c$4("esri.views.3d.analysis.Dimension.DimensionTool")], S);
class n extends a$2 {
  constructor(e2, t2) {
    super(e2), this._hasExternalMaterial = false, this._renderOccluded = h$3.OccludeAndTransparent, this._width = 1, this._color = r$5(1, 0, 1, 1), this._placement = "end", this._markerPrimitive = "arrow", this._material = t2, this._hasExternalMaterial = null != t2, this.applyProperties(e2);
  }
  setGeometryFromSegment(t2, r2) {
    const i2 = t2.endRenderSpace;
    this.transform = q$3(h, i2), this._normal = r2;
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
    this._color = t$6(e2), null != this._material && this._material.setParameters({ color: this._color });
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
    this._hasExternalMaterial || (this._material = new v$1({ width: this._width, color: this._color, placement: this._placement, renderOccluded: this._renderOccluded, markerPrimitive: this._markerPrimitive, isDecoration: this.isDecoration }));
  }
  destroyExternalResources() {
    this._hasExternalMaterial || (this._material = null);
  }
  createGeometries(e2) {
    for (const t2 of R$1(this.geometry, this.normal)) {
      const r2 = b$4(this._material, t2);
      e2.addGeometry(r2);
    }
  }
  forEachExternalMaterial(e2) {
    this._hasExternalMaterial || e2(this._material);
  }
}
const h = e$1();
class b {
  set visible(e2) {
    for (const t2 of this._visualElements.values())
      t2.attached = e2;
  }
  constructor(s2) {
    this.destroyed = false, this._handles = new e$8(), this._messages = null, this._labelSegment = new m$2();
    const { analysis: i2, computation: o2, view: m2, messages: r2, isDecoration: f2 } = s2;
    this.analysis = i2, this.computation = o2, this.view = m2, this._messages = r2;
    const d2 = s2.visible, c2 = { view: m2, attached: d2, isDecoration: f2 }, { fontSize: h2, textColor: u2, textBackgroundColor: b2 } = i2.style;
    this._visualElements = new E({ marker: new n(c2, s2.markerMaterial), dimension: new f$4(c2, s2.dimensionLineMaterial), startOffset: new f$4(c2, s2.offsetLineMaterial), endOffset: new f$4(c2, s2.offsetLineMaterial), dimensionSmall: new f$4(c2, s2.smallDimensionLineMaterial), startOffsetSmall: new f$4(c2, s2.smallOffsetLineMaterial), endOffsetSmall: new f$4(c2, s2.smallOffsetLineMaterial), label: new f$6({ view: m2, attached: d2, distance: 0, geometry: { type: "segment", sampleLocation: "center", segment: this._labelSegment, callout: false }, fontSize: u$3(h2), textColor: u2.clone(), backgroundColor: b2.clone(), isDecoration: f2 }) }), this._handles.add([d$1(() => o2.geometry, (e2) => {
      this.updateCameraDependentElements(m2.state.camera, e2, i2.style), null != o2.geometry && this._updateLines(o2.geometry);
    }, { ...P$2, equals: j$5 }), d$1(() => o2.length, (e2) => this._updateLabelContent(e2), P$2)]);
  }
  destroy() {
    this.destroyed = true, this._handles = u$4(this._handles);
    for (const e2 of this._visualElements.values())
      e2.destroy();
  }
  get testInfo() {
    return { dimensionVisualElement: this._visualElements.dimension, label: this._visualElements.label };
  }
  _updateLines(e2) {
    const t2 = U$1(O, b$2.Start, e2.directSegment, e2.dimensionSegment), s2 = U$1(_, b$2.End, e2.directSegment, e2.dimensionSegment), i2 = this._visualElements;
    i2.marker.setGeometryFromSegment(e2.dimensionSegment, e2.primaryOffsetAxis), i2.dimension.setGeometryFromSegment(e2.dimensionSegment), i2.startOffset.setGeometryFromSegment(t2), i2.endOffset.setGeometryFromSegment(s2), i2.dimensionSmall.setGeometryFromSegment(e2.dimensionSegment), i2.startOffsetSmall.setGeometryFromSegment(t2), i2.endOffsetSmall.setGeometryFromSegment(s2);
  }
  updateCameraDependentElements(e2, t2, s2) {
    const i2 = this._visualElements;
    if (null == t2) {
      for (const e3 of i2.values())
        e3.visible = false;
      return;
    }
    const n2 = e2.computeScreenPixelSizeAt(t2.dimensionSegment.eval(0.5, y)), l2 = X(t2, n2), o2 = l2 < (u$3(s2.lineSize) * k) ** 2, m2 = !o2;
    i2.marker.visible = m2, i2.dimension.visible = m2, i2.startOffset.visible = m2, i2.endOffset.visible = m2, i2.dimensionSmall.visible = o2, i2.startOffsetSmall.visible = o2, i2.endOffsetSmall.visible = o2;
    const r2 = u$3(s2.fontSize) * U, { label: u2 } = i2;
    if (u2.visible = l2 >= r2 ** 2, !u2.visible)
      return;
    const { dimensionSegment: S2, primaryOffsetAxis: g3 } = t2, { offset: v2 } = this.computation.dimension, p2 = (Math.sign(v2) >= 0 ? 1 : -1) * this._labelOffsetPx(s2) * n2;
    k$1(this._labelSegment, S2, g3, p2), u2.updateLabelPosition();
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
    null != e2 && null != this._messages ? t2.text = h$7(this._messages, e2, e2.unit) : t2.text = "";
  }
  _labelOffsetPx(e2) {
    return 1.5 * u$3(e2.fontSize) + x + u$3(e2.lineSize / 2);
  }
}
const O = new m$2(), _ = new m$2(), y = n$2();
class E {
  constructor(e2) {
    this.marker = e2.marker, this.dimension = e2.dimension, this.startOffset = e2.startOffset, this.endOffset = e2.endOffset, this.dimensionSmall = e2.dimensionSmall, this.startOffsetSmall = e2.startOffsetSmall, this.endOffsetSmall = e2.endOffsetSmall, this.label = e2.label;
  }
  values() {
    return [this.marker, this.dimension, this.startOffset, this.endOffset, this.dimensionSmall, this.startOffsetSmall, this.endOffsetSmall, this.label];
  }
}
let j = class extends S$2 {
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
    this._markerMaterial = new v$1({ width: 1, anchor: s$4.Tip, color: _$3, placement: "begin-end", worldSpace: true, hideOnShortSegments: true, hasTip: true, renderOccluded: h$3.OccludeAndTransparent, markerPrimitive: "triangle", isDecoration: e2 }), this._dimensionLineMaterial = new H$1({ width: 1, color: _$3, renderOccluded: h$3.OccludeAndTransparent, markerParameters: this._markerMaterial.parameters, isDecoration: e2 }), this._offsetLineMaterial = new H$1({ width: 1, color: _$3, renderOccluded: h$3.OccludeAndTransparent, stipplePattern: h$6(5), isDecoration: e2 }), this._smallDimensionLineMaterial = new H$1({ width: 1, color: _$3, renderOccluded: h$3.OccludeAndTransparent, isDecoration: e2 }), this._smallOffsetLineMaterial = new H$1({ width: 1, color: _$3, renderOccluded: h$3.OccludeAndTransparent, stipplePattern: h$6(5), isDecoration: e2 });
    for (const i2 of this._lineMaterials())
      this.view._stage.add(i2), this.addHandles(e$a(() => {
        this.view._stage?.remove(i2);
      }));
    const s2 = g$5(() => this.analysisViewData.computations, ({ computation: e3 }) => this._createVisualization(e3));
    this._dimensionVisualizations = s2, this.addHandles([i$1(s2), d$1(() => u$1.toUnitRGBA(this.analysis.style.color), (e3) => {
      for (const i2 of this._lineMaterials())
        i2.setParameters({ color: e3 });
    }, A$1), d$1(() => this.analysis.style.lineSize, (e3) => {
      const i2 = u$3(e3);
      this._markerMaterial.setParameters({ width: i2 * l$1 }), this._dimensionLineMaterial.setParameters({ width: i2, markerParameters: this._markerMaterial.parameters });
      const s3 = Math.max(i2 * w, 1);
      this._offsetLineMaterial.setParameters({ width: s3 });
    }, A$1), d$1(() => ({ camera: this.view.state.camera, style: z(this.analysis) }), ({ camera: e3, style: i2 }) => {
      for (const { visualization: s3 } of this._dimensionVisualizations)
        s3.updateCameraDependentElements(e3, s3.computation.geometry, i2), s3.updateLabelStyle(i2);
    }), d$1(() => this.visible, (e3) => {
      for (const { visualization: i2 } of this._dimensionVisualizations)
        i2.visible = e3;
    })]), this.addHandles([f$7(() => this._updateMessageBundle()), p$6(() => !this.loadingMessages, () => {
      for (const { visualization: e3 } of this._dimensionVisualizations)
        e3.updateUnitsMessages(this._messages);
    }, C$2)]), this._updateMessageBundle();
  }
  get testInfo() {
    return { visualizations: this._dimensionVisualizations.items.map(({ visualization: e2 }) => e2), disablePartialOcclusion: () => {
      for (const e2 of this._lineMaterials())
        e2.setParameters({ renderOccluded: h$3.Occlude });
    } };
  }
  _createVisualization(e2) {
    const i2 = new b({ analysis: this.analysis, computation: e2, view: this.view, visible: this.visible, markerMaterial: this._markerMaterial, dimensionLineMaterial: this._dimensionLineMaterial, offsetLineMaterial: this._offsetLineMaterial, smallDimensionLineMaterial: this._smallDimensionLineMaterial, smallOffsetLineMaterial: this._smallOffsetLineMaterial, messages: this._messages, isDecoration: this.isDecoration });
    return { visualization: i2, remove: () => i2.destroy() };
  }
  _lineMaterials() {
    return [this._markerMaterial, this._dimensionLineMaterial, this._offsetLineMaterial, this._smallDimensionLineMaterial, this._smallOffsetLineMaterial];
  }
  async _updateMessageBundle() {
    this.loadingMessages = true;
    try {
      this._messages = await h$8("esri/core/t9n/Units");
    } finally {
      this.loadingMessages = false;
    }
  }
};
function z(e2) {
  const { fontSize: i2, lineSize: s2, textColor: t2, textBackgroundColor: a2 } = e2.style;
  return { fontSize: i2, lineSize: s2, textBackgroundColor: a2.clone(), textColor: t2.clone() };
}
e$3([y$1({ constructOnly: true })], j.prototype, "analysisViewData", void 0), e$3([y$1({ constructOnly: true, nonNullable: true })], j.prototype, "view", void 0), e$3([y$1({ constructOnly: true })], j.prototype, "isDecoration", void 0), e$3([y$1()], j.prototype, "analysis", null), e$3([y$1()], j.prototype, "visible", null), e$3([y$1()], j.prototype, "loadingMessages", void 0), j = e$3([c$4("esri.views.3d.analysis.Dimension.DimensionVisualization")], j);
let t = class extends S$2 {
  constructor(o2) {
    super(o2), this.dimension = null, this.length = null;
  }
};
e$3([y$1({ constructOnly: true, nonNullable: true })], t.prototype, "dimension", void 0), e$3([y$1()], t.prototype, "length", void 0), t = e$3([c$4("esri.views.3d.analysis.LengthDimensionResult")], t);
const c = t;
let l = class extends S$2 {
  constructor(t2) {
    super(t2), this.geometry = null, this.unconstrainedGeometry = null, this.elevationAlignedStartPoint = null, this.elevationAlignedEndPoint = null;
  }
  normalizeCtorArgs(t2) {
    const { dimension: o2, ...e2 } = t2;
    return { result: new c({ dimension: o2 }), ...e2 };
  }
  initialize() {
    this.addHandles([d$1(() => this.dimension.startPoint, (t2) => this.elevationAlignedStartPoint = this.projectAndAlignPoint(t2), A$1), d$1(() => this.dimension.endPoint, (t2) => this.elevationAlignedEndPoint = this.projectAndAlignPoint(t2), A$1)]);
  }
  get dimension() {
    return this.result.dimension;
  }
  get length() {
    return this.result.length;
  }
};
e$3([y$1({ constructOnly: true, nonNullable: true })], l.prototype, "result", void 0), e$3([y$1({ constructOnly: true, nonNullable: true })], l.prototype, "projectAndAlignPoint", void 0), e$3([y$1()], l.prototype, "dimension", null), e$3([y$1()], l.prototype, "length", null), e$3([y$1()], l.prototype, "geometry", void 0), e$3([y$1()], l.prototype, "unconstrainedGeometry", void 0), e$3([y$1()], l.prototype, "elevationAlignedStartPoint", void 0), e$3([y$1()], l.prototype, "elevationAlignedEndPoint", void 0), e$3([y$1()], l.prototype, "preConstraintProperties", void 0), e$3([y$1()], l.prototype, "previousConstraint", void 0), l = e$3([c$4("esri.views.3d.analysis.LengthDimensionComputation")], l);
const r = (r2) => {
  let i2 = class extends r2 {
    constructor(...o2) {
      super(...o2), this.analysis = null, this.tool = null, this.selectedDimension = null, this.interactive = false, this.visible = null;
    }
    get results() {
      return new V$3();
    }
    createLengthDimensions(o2) {
      throw new Error("Method not implemented.");
    }
  };
  return e$3([y$1({ constructOnly: true })], i2.prototype, "view", void 0), e$3([y$1({ constructOnly: true, nonNullable: true })], i2.prototype, "analysis", void 0), e$3([y$1()], i2.prototype, "tool", void 0), e$3([y$1({ readOnly: true })], i2.prototype, "results", null), e$3([y$1()], i2.prototype, "selectedDimension", void 0), e$3([y$1()], i2.prototype, "interactive", void 0), e$3([y$1()], i2.prototype, "visible", void 0), i2 = e$3([c$4("esri.views.analysis.DimensionAnalysisView")], i2), i2;
};
let f = class extends r(s$5(S$2)) {
  constructor(i2) {
    super(i2), this.type = "dimension-view-3d", this.tool = null, this.selectedDimension = null, this._dimensionsToComputations = /* @__PURE__ */ new Map(), this._placementTask = null, this._projectAndAlignPoint = null;
  }
  initialize() {
    this._projectAndAlignPoint = (i3) => {
      if (null == i3)
        return null;
      const { spatialReference: s2, elevationProvider: t2 } = this.view, e2 = r$6(i3, s2, t2);
      return null == e2 && t$7(this.analysis, i3.spatialReference, s$1.getLogger(this)), e2;
    };
    const i2 = g$5(() => this.analysis.dimensions, (i3) => this._createComputation(i3));
    this.computations = i2, this.addHandles([a$3(this, S), i$1(i2)]), this._analysisVisualization = new j({ analysisViewData: this, view: this.view, isDecoration: !this.parent }), this._analysisController = new g$4({ analysisViewData: this, view: this.view });
  }
  destroy() {
    this._placementTask = e$c(this._placementTask), this._analysisVisualization = u$4(this._analysisVisualization), v$2(this);
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
    return this.selectedDimension = null, this._placementTask = e$c(this._placementTask), this._placementTask = l$5(this, i2), this._placementTask.promise;
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
e$3([y$1({ readOnly: true })], f.prototype, "type", void 0), e$3([y$1()], f.prototype, "tool", void 0), e$3([y$1()], f.prototype, "updating", null), e$3([y$1({ readOnly: true })], f.prototype, "results", null), e$3([y$1()], f.prototype, "computations", void 0), e$3([y$1()], f.prototype, "selectedDimension", void 0), e$3([y$1()], f.prototype, "selectedComputation", null), e$3([y$1()], f.prototype, "_analysisVisualization", void 0), e$3([y$1()], f.prototype, "_analysisController", void 0), e$3([y$1()], f.prototype, "_dimensionsToComputations", void 0), e$3([y$1()], f.prototype, "_placementTask", void 0), f = e$3([c$4("esri.views.3d.analysis.DimensionAnalysisView3D")], f);
const g2 = f;
export {
  g2 as default
};
