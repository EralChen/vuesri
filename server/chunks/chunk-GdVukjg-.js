import { cy as x$2, wK as e$2, wL as r$1, wM as r$2, eQ as n$1, gv as e$3, ua as n$2, mL as g$4, pv as P$1, mJ as e$4, eO as z$1, eN as _, ud as Q$1, wN as L$1, gu as E, bX as k$3, dz as u$1, dy as m$1, wO as x$3, b8 as a$1, b0 as h$3, bq as j$2, kH as a, c3 as W$2, mI as A, wP as M, ie as z$2, wQ as g$5, eP as o$2, fn as F$1, w3 as o$3, wR as O, wS as _$1, sv as b$1, sw as R$2, jX as j$3, eL as t$2, cZ as f$1, wT as z$3, wU as t$3, fh as se, wV as a$2, wW as k$4, wX as S, f5 as q, fi as x$4, wY as qt, wZ as Tt, fg as te, w_ as dt, bo as e$5, bp as y$1, br as c$3, bs as g$7, sV as n$3, iB as s$1, d1 as o$5, w$ as c$4, fx as p$2, df as h$5, bJ as d$6, x0 as i$2, bD as u$2, x1 as n$4, bf as c$5, bS as e$6, vv as c$6, n3 as W$3, bR as A$1, bm as h$6, x2 as o$7, fC as l$3, x3 as w$5, pJ as p$6, fF as c$7, kz as d$9, lB as o$8, bH as a$3, kG as i$3, ki as e$8, ky as x$5, mO as f$4, oP as r$4, l6 as u$4, ub as J$1, x4 as T$1, nY as f$5, x5 as w$6, pU as W$4, hK as r$5, pn as t$7, sG as j$4, x6 as f$6, x7 as M$1, fp as o$9, mA as s$5, mB as l$5 } from "./chunk-KFNcxJaF.js";
import { t as t$4 } from "./chunk-Jk46lvUq.js";
import { o as o$4, b as g$6, s, h as h$4, i as i$1, f as f$2, c as U$2, e as d$5, l as l$1 } from "./chunk-KXkDk_IW.js";
import { simplify as w$3, distance as f } from "./chunk-WuibsuuF.js";
import { l as l$2, d as d$8, C } from "./chunk-FKMfLf6u.js";
import { i } from "./chunk-z9Tnkksn.js";
import { s as s$2, p as p$3, d as d$7, a as s$3, u as u$3 } from "./chunk-GM3bx0Bh.js";
import { o as o$6 } from "./chunk-7pOsGJCN.js";
import { r as r$3 } from "./chunk-OvdaIYdh.js";
import { w as w$4, V as V$1, p as p$4, l as l$4, t as t$5, a as t$6, s as s$4, c as c$8 } from "./chunk-ntY6_aOQ.js";
import { e as e$7 } from "./chunk-tNL5i2kK.js";
import { p as p$5, f as f$3 } from "./chunk-vWiGr0Yr.js";
function w$2(t2, r2, e2 = null) {
  return null != e2 ? [t2, r2, e2] : [t2, r2];
}
function g$3(t2, r2, e2 = null) {
  return null != e2 ? { x: t2, y: r2, z: e2 } : { x: t2, y: r2 };
}
let R$1 = class R {
  constructor(t2) {
    this.spatialReference = t2;
  }
  mapToLocalMultiple(r2) {
    return r2.map((t2) => this.mapToLocal(t2)).filter(k$3);
  }
  get doUnnormalization() {
    return false;
  }
};
let W$1 = class W extends R$1 {
  constructor(t2, a2, o2 = null) {
    super(a2), this._defaultZ = o2, this.transform = e$2(), this.transformInv = e$2(), this.transform = r$1(t2), r$2(this.transformInv, this.transform);
  }
  makeMapPoint(t2, r2) {
    return w$2(t2, r2, this._defaultZ);
  }
  mapToLocal(t2) {
    return g$3(this.transform[0] * t2[0] + this.transform[2] * t2[1] + this.transform[4], this.transform[1] * t2[0] + this.transform[3] * t2[1] + this.transform[5]);
  }
  localToMap(t2) {
    return w$2(this.transformInv[0] * t2.x + this.transformInv[2] * t2.y + this.transformInv[4], this.transformInv[1] * t2.x + this.transformInv[3] * t2.y + this.transformInv[5], this._defaultZ);
  }
};
let v$5 = class v extends R$1 {
  constructor(t2, r2) {
    super(t2.spatialReference), this.view = t2, this.defaultZ = null, this.pWS = n$1(), this.tangentFrameUpWS = n$1(), this.tangentFrameRightWS = n$1(), this.tangentFrameForwardWS = n$1(), this.localFrameRightWS = n$1(), this.localFrameUpWS = n$1(), this.worldToLocalTransform = e$3(), this.localToWorldTransform = e$3(), this.scale = 1, this.scale = t2.resolution, this.referenceMapPoint = r2, this.defaultZ = r2.hasZ ? r2.z : null;
    const e2 = t2.state.camera.viewRight;
    this.view.renderCoordsHelper.toRenderCoords(this.referenceMapPoint, this.pWS), this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS, n$2.X, this.tangentFrameRightWS), this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS, n$2.Y, this.tangentFrameUpWS), this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS, n$2.Z, this.tangentFrameForwardWS);
    const s2 = n$1();
    g$4(s2, this.tangentFrameForwardWS, P$1(e2, this.tangentFrameForwardWS)), e$4(this.localFrameRightWS, e2, s2), z$1(this.localFrameRightWS, this.localFrameRightWS), _(this.localFrameUpWS, this.tangentFrameForwardWS, this.localFrameRightWS), Q$1(this.worldToLocalTransform, this.localFrameRightWS, this.tangentFrameRightWS), L$1(this.localToWorldTransform, this.worldToLocalTransform);
  }
  get doUnnormalization() {
    return "global" === this.view.viewingMode;
  }
  makeMapPoint(t2, r2) {
    return w$2(t2, r2, this.defaultZ);
  }
  mapToLocal(t2) {
    const r2 = n$1();
    this.view.renderCoordsHelper.toRenderCoords(new x$2({ x: t2[0], y: t2[1], spatialReference: this.spatialReference }), r2), E(r2, r2, this.worldToLocalTransform);
    const e2 = this.view.renderCoordsHelper.fromRenderCoords(r2, this.view.spatialReference);
    return null != e2 ? g$3(e2.x / this.scale, e2.y / this.scale) : null;
  }
  localToMap(t2) {
    const r2 = n$1();
    this.view.renderCoordsHelper.toRenderCoords(new x$2({ x: t2.x * this.scale, y: t2.y * this.scale, spatialReference: this.spatialReference }), r2), E(r2, r2, this.localToWorldTransform);
    const e2 = this.view.renderCoordsHelper.fromRenderCoords(r2, this.view.spatialReference);
    return null != e2 ? w$2(e2.x, e2.y, this.defaultZ) : null;
  }
};
function F(t2, r2) {
  if ("2d" === t2.type)
    return new W$1(t2.state.transform, t2.spatialReference, r2.length > 2 ? r2[2] : null);
  if ("3d" === t2.type) {
    const e2 = r2.length > 2 ? new x$2({ x: r2[0], y: r2[1], z: r2[2], spatialReference: t2.spatialReference }) : new x$2({ x: r2[0], y: r2[1], spatialReference: t2.spatialReference });
    return new v$5(t2, e2);
  }
  return null;
}
function g$2(t2, e2) {
  const o2 = new x$2({ x: t2[0], y: t2[1], spatialReference: e2 });
  return t2.length > 2 && (o2.z = t2[2]), o2;
}
function d$4(t2, e2) {
  return new u$1({ points: t2, spatialReference: e2 });
}
function R2(t2, e2, o2) {
  const n2 = new m$1({ paths: t2, spatialReference: e2 });
  return o2 && x$3(n2), n2;
}
function j$1(e2, n2, r2, a$22 = true) {
  const l2 = a$1(e2);
  l2.forEach((e3) => {
    const o2 = e3[0], n3 = e3[e3.length - 1];
    h$3(o2, n3) && 1 !== e3.length || e3.push(e3[0]);
  });
  let i2 = new j$2({ rings: l2, spatialReference: n2 });
  return i2.rings.forEach((t2) => {
    a(t2) || t2.reverse();
  }), r2 && x$3(i2), a$22 && i2.isSelfIntersecting && W$2(n2) && (i2 = w$3(i2)), i2;
}
function T(t2, o2, n2) {
  const r2 = o2.mapToLocalMultiple(t2), a2 = [], l2 = { x: r2[0].x, y: r2[0].y }, s2 = { x: r2[1].x, y: r2[1].y }, i2 = Math.round(s2.x - l2.x), c4 = Math.round(s2.y - l2.y), p3 = Math.max(Math.abs(i2), Math.abs(c4));
  if (n2) {
    const t3 = { x: l2.x + p3, y: l2.y + p3 }, e2 = { x: l2.x - p3, y: l2.y - p3 };
    a2.push(g$3(t3.x, e2.y), g$3(e2.x, e2.y), g$3(e2.x, t3.y), g$3(t3.x, t3.y));
  } else {
    const t3 = { x: i2 > 0 ? l2.x + p3 : l2.x - p3, y: c4 > 0 ? l2.y + p3 : l2.y - p3 };
    a2.push(g$3(l2.x, l2.y), g$3(t3.x, l2.y), g$3(t3.x, t3.y), g$3(l2.x, t3.y));
  }
  return U$1(j$1([a2.map((t3) => o2.localToMap(t3)).filter(k$3)], o2.spatialReference, o2.doUnnormalization, true), a2, o2);
}
function b(t2, o2, n2) {
  let r2 = o2.mapToLocalMultiple(t2);
  if (1 === r2.length) {
    const t3 = 48, e2 = r2[0];
    r2 = [g$3(e2.x - t3, e2.y + t3), g$3(e2.x + t3, e2.y - t3), g$3(e2.x + t3, e2.y - t3), g$3(e2.x - t3, e2.y + t3)];
  }
  const a2 = [], l2 = { x: r2[0].x, y: r2[0].y }, s2 = { x: r2[1].x, y: r2[1].y };
  if (n2) {
    const t3 = Math.round(s2.x - l2.x), e2 = Math.round(s2.y - l2.y);
    a2.push(g$3(l2.x - t3, l2.y - e2), g$3(s2.x, l2.y - e2), g$3(s2.x, s2.y), g$3(l2.x - t3, s2.y));
  } else
    a2.push(g$3(l2.x, l2.y), g$3(s2.x, l2.y), g$3(s2.x, s2.y), g$3(l2.x, s2.y));
  return U$1(j$1([a2.map((t3) => o2.localToMap(t3)).filter(k$3)], o2.spatialReference, o2.doUnnormalization, true), a2, o2);
}
function U$1(t2, e2, o2) {
  const n2 = P(e2[3], e2[2], o2), r2 = P(e2[1], e2[2], o2), a2 = P(e2[0], e2[1], o2), l2 = P(e2[0], e2[3], o2);
  return { geometry: t2, midpoints: null != n2 && null != r2 && null != a2 && null != l2 ? { top: n2, right: r2, bottom: a2, left: l2 } : null };
}
function P(t2, e2, o2) {
  w$1[0] = t2.x, w$1[1] = t2.y, w$1[2] = 0, I[0] = e2.x, I[1] = e2.y, I[2] = 0, A(w$1, w$1, I, 0.5), z.x = w$1[0], z.y = I[1], z.z = I[2];
  const n2 = o2.localToMap(z);
  return null != n2 ? g$2(n2, o2.spatialReference) : null;
}
const z = g$3(0, 0, 0), w$1 = n$1(), I = n$1();
function L(t2, e2, o2, r2) {
  const a2 = e2.mapToLocalMultiple(t2);
  let s2 = null, c4 = null;
  if (o2)
    s2 = a2[0], c4 = a2[1];
  else {
    const t3 = a2[0], e3 = a2[1], o3 = Math.round(e3.x - t3.x), n2 = Math.round(e3.y - t3.y), r3 = Math.max(Math.abs(o3), Math.abs(n2));
    s2 = g$3(o3 > 0 ? t3.x + r3 / 2 : t3.x - r3 / 2, n2 > 0 ? t3.y + r3 / 2 : t3.y - r3 / 2), c4 = g$3(Math.abs(o3) > Math.abs(n2) ? s2.x - r3 / 2 : s2.x, Math.abs(o3) > Math.abs(n2) ? s2.y : s2.y - r3 / 2);
  }
  const p3 = e2.localToMap(s2), f$12 = e2.localToMap(c4);
  if (null == p3 || null == f$12)
    return null;
  e2.doUnnormalization && M([[p3, f$12]], e2.spatialReference);
  const x2 = g$2(p3, e2.spatialReference), h3 = g$2(f$12, e2.spatialReference), M$12 = z$2(e2.spatialReference);
  let d3 = 0;
  if (W$2(e2.spatialReference))
    d3 = M$12 * f(x2, h3, null);
  else {
    const t3 = s2.x - c4.x, e3 = s2.y - c4.y;
    d3 = M$12 * Math.sqrt(t3 * t3 + e3 * e3) * (r2 || 1);
  }
  const R3 = new g$5({ center: x2, radius: d3, radiusUnit: "meters", spatialReference: e2.spatialReference });
  return { geometry: j$1(R3.rings, R3.spatialReference, false), center: x2, edge: h3 };
}
function v$4(t2, o2, n2) {
  const r2 = o2.mapToLocalMultiple(t2), a2 = r2[0], l2 = r2[1], s2 = Math.round(l2.x - a2.x), i2 = Math.round(l2.y - a2.y), c4 = g$3(n2 ? a2.x : a2.x + s2 / 2, n2 ? a2.y : a2.y + i2 / 2), p3 = n2 ? s2 : s2 / 2, y2 = n2 ? i2 : i2 / 2, u2 = 60, f2 = [], x2 = 2 * Math.PI / u2;
  function h3(t3) {
    const e2 = Math.cos(t3), o3 = Math.sin(t3);
    return g$3(p3 * e2 + c4.x, y2 * o3 + c4.y);
  }
  for (let e2 = 0; e2 < u2; e2++)
    f2.push(h3(e2 * x2));
  f2.push(f2[0]);
  const { spatialReference: M2, doUnnormalization: d3 } = o2, R3 = j$1([f2.map((t3) => o2.localToMap(t3)).filter(k$3)], M2, d3, false), T2 = o2.localToMap(h3(Math.PI / 2)), b2 = o2.localToMap(h3(0)), U2 = o2.localToMap(h3(-Math.PI / 2)), P2 = o2.localToMap(h3(Math.PI));
  return { geometry: R3, midpoints: null != T2 && null != b2 && null != U2 && null != P2 ? { top: g$2(T2, M2), right: g$2(b2, M2), bottom: g$2(U2, M2), left: g$2(P2, M2) } : null };
}
function e$1(e2, l2) {
  switch (e2) {
    case "point":
    case "multipoint":
      return n();
    case "polyline":
      return t$1(l2);
    case "polygon":
      return o$1(l2);
    default:
      return;
  }
}
function n(e2) {
  return "point";
}
function t$1(e2) {
  return (null != e2 && "polyline" === e2.type && e2.paths.length ? e2.paths[0].length : 0) < 2 ? "polylineZeroVertices" : "polylineOneVertex";
}
function o$1(e2) {
  const n2 = null != e2 && "polygon" === e2.type && e2.rings.length ? e2.rings[0].length : 0;
  return n2 < 3 ? "polylineZeroVertices" : n2 < 4 ? "polygonOneVertex" : "polygonTwoVertices";
}
const d$3 = (() => {
  const r2 = n$1(), o2 = n$1(), p3 = n$1();
  return (m2, f2) => {
    if (o$2(o2, m2.x, m2.y, m2.z ?? 0), o$2(p3, f2.x, f2.y, f2.z ?? 0), F$1(o2, p3))
      return null;
    if (!o$3(o2, m2.spatialReference, o2) || !o$3(p3, f2.spatialReference, p3)) {
      e$4(r2, p3, o2), r2[2] = 0, z$1(r2, r2);
      let i2 = O(_$1, r2);
      return r2[0] < 0 && (i2 = 2 * Math.PI - i2), o$4(i2, "radians", "geographic");
    }
    const { azimuth: u2 } = b$1(x$1, o2, p3);
    return null != u2 ? o$4(u2, "degrees", "geographic") : void 0;
  };
})(), v$3 = (() => {
  const e2 = n$1(), t2 = n$1();
  return ({ x: s2, y: n2, z: c4, spatialReference: a2 }, m2, j2) => {
    const l2 = c4 ?? 0;
    o$2(e2, s2, n2, l2);
    const y2 = g$6(j$3(j2.value, j2.unit, "degrees"), j2.rotationType, "geographic");
    if (!t$2(e2, a2, e2, f$1.WGS84)) {
      const e3 = g$6(y2, "geographic", "arithmetic"), t3 = j$3(e3, "degrees", "radians");
      return new x$2({ x: s2 + m2 * Math.cos(t3), y: n2 + m2 * Math.sin(t3), z: l2, spatialReference: a2 });
    }
    return z$3(t2, e2, y2, m2), t2[2] = l2, t$3(t2, f$1.WGS84, a2);
  };
})(), x$1 = new R$2();
function d$2(o2, s$12, p3, a2) {
  if (!s$12)
    return;
  const { spatialReference: l2 } = o2;
  if (!se(l2))
    return;
  const d3 = i(l2), g2 = se(d3);
  if (!g2)
    return;
  const h3 = a$2(o2, p3, a2), k3 = v$2;
  if (!t$2(h3, l2, k3, d3))
    return;
  const U2 = s(s$12, g2);
  if ("3d" === p3?.type && "local" === p3.viewingMode)
    k3[0] += U2;
  else {
    const t2 = k$4(d3), r2 = S(t2, k3, n$2.X, w);
    q(k3, k3, r2, U2);
  }
  if (!t$2(k3, d3, k3, l2))
    return;
  const q$1 = x$4(h3, k3);
  return new qt(h3, q$1);
}
function g$1(t2, r2, o2, e2) {
  if (!r2)
    return;
  const n2 = a$2(t2, o2, e2), s2 = v$3(t2, 1, r2);
  if (!s2)
    return;
  const i2 = a$2(s2, o2, e2);
  return new Tt(n2, i2);
}
function h$2(r2, e2, n2, s$12) {
  if (null == r2)
    return;
  const i$12 = i(e2), c4 = te(i$12);
  return c4 ? new dt(s(r2, c4)) : void 0;
}
function k$2(t2) {
  let r2;
  for (const o2 of t2)
    o2 && (r2 = r2?.intersect(o2) ?? o2);
  return r2;
}
const v$2 = n$1(), w = n$1();
let p$1 = class p extends g$7 {
  constructor(t2) {
    super(t2), this.committed = null, this.disabled = false, this.hidden = false, this.id = n$3(), this.inputValue = null, this.readOnly = false;
  }
  get dirty() {
    return null != this.inputValue;
  }
  get locked() {
    return null != this.committed;
  }
  lock(t2) {
    this.inputValue = null, this.committed = t2 ?? this.actual;
  }
  unlock() {
    this.committed = null, this.inputValue = null;
  }
};
e$5([y$1()], p$1.prototype, "actual", void 0), e$5([y$1()], p$1.prototype, "committed", void 0), e$5([y$1()], p$1.prototype, "createQuantity", void 0), e$5([y$1()], p$1.prototype, "disabled", void 0), e$5([y$1()], p$1.prototype, "hidden", void 0), e$5([y$1()], p$1.prototype, "format", void 0), e$5([y$1()], p$1.prototype, "id", void 0), e$5([y$1()], p$1.prototype, "inputValue", void 0), e$5([y$1()], p$1.prototype, "readOnly", void 0), e$5([y$1()], p$1.prototype, "suffix", void 0), e$5([y$1()], p$1.prototype, "title", void 0), e$5([y$1()], p$1.prototype, "toInputUnits", void 0), e$5([y$1()], p$1.prototype, "dirty", null), e$5([y$1()], p$1.prototype, "locked", null), p$1 = e$5([c$3("esri.views.interactive.tooltip.fields.TooltipField")], p$1);
let c$2 = class c extends p$1 {
  constructor(t2) {
    super(t2), this.mode = "absolute-height";
  }
  normalizeCtorArgs(t2) {
    const s2 = (t3) => t3.inputUnitInfos.verticalLength.unit;
    return { actual: h$4, createQuantity: (t3, o2) => i$1(t3, s2(o2)), toInputUnits: (t3, o2) => f$2(t3, s2(o2)), format: (t3, o2) => o2.formatters.verticalLength(t3), suffix: (t3) => t3.inputUnitInfos.verticalLength.abbreviation, title: (t3) => t3.messages.sketch.elevation, ...t2 };
  }
};
e$5([y$1()], c$2.prototype, "mode", void 0), c$2 = e$5([c$3("esri.views.interactive.tooltip.fields.TooltipFieldElevation")], c$2);
const p2 = (o2) => {
  const r2 = (t2) => t2.inputUnitInfos.orientation.unit;
  return new p$1({ actual: U$2, createQuantity: (t2, e2) => o$4(t2, r2(e2), "geographic"), toInputUnits: ({ value: e2, unit: o3, rotationType: a2 }, s2) => {
    const u2 = 0, f2 = true, l2 = g$6(j$3(e2, o3, "degrees"), a2, "geographic"), p3 = s$1.normalize(l2, u2, f2), m2 = r2(s2), g2 = j$3(p3, "degrees", m2);
    return o$4(g2, m2, "geographic");
  }, format: (t2, e2) => e2.formatters.angle(t2), suffix: (t2) => t2.inputUnitInfos.orientation.abbreviation, title: (t2) => t2.messages.sketch.orientation, ...o2 });
}, m = (t2) => {
  const e2 = (t3) => t3.inputUnitInfos.length.unit;
  return new p$1({ actual: h$4, createQuantity: (t3, n2) => i$1(t3, e2(n2)), toInputUnits: (t3, n2) => f$2(t3, e2(n2)), format: (t3, e3) => e3.formatters.length(t3), suffix: (t3) => t3.inputUnitInfos.length.abbreviation, title: (t3) => t3.messages.sketch.distance, ...t2 });
}, g = (t2) => new c$2(t2), U = (t2) => {
  const e2 = (t3) => t3.inputUnitInfos.area.unit;
  return new p$1({ actual: d$5, createQuantity: (t3, n2) => l$1(t3, e2(n2)), toInputUnits: (t3, n2) => f$2(t3, e2(n2)), format: (t3, e3) => e3.formatters.area(t3), suffix: (t3) => t3.inputUnitInfos.area.abbreviation, title: (t3) => t3.messages.sketch.area, ...t2 });
};
let d$1 = class d extends s$2 {
  constructor(t2) {
    super(t2), this.type = "draw-point", this.elevation = g();
  }
  get allFields() {
    return [this.elevation];
  }
};
e$5([y$1()], d$1.prototype, "type", void 0), e$5([y$1()], d$1.prototype, "elevation", void 0), e$5([y$1()], d$1.prototype, "allFields", null), e$5([y$1()], d$1.prototype, "helpMessage", void 0), d$1 = e$5([c$3("esri.views.interactive.tooltip.DrawPointTooltipInfo")], d$1);
let y = class extends s$2 {
  constructor(t2) {
    super(t2), this.type = "draw-polyline", this.orientation = p2(), this.distance = m({ title: (t3) => t3.messages.sketch.distance }), this.elevation = g(), this.totalLength = m({ format: (t3, e2) => e2.formatters.totalLength(t3), title: (t3) => t3.messages.sketch.totalLength, readOnly: true });
  }
  get allFields() {
    return [this.orientation, this.distance, this.elevation, this.totalLength];
  }
};
e$5([y$1()], y.prototype, "type", void 0), e$5([y$1()], y.prototype, "orientation", void 0), e$5([y$1()], y.prototype, "distance", void 0), e$5([y$1()], y.prototype, "elevation", void 0), e$5([y$1()], y.prototype, "totalLength", void 0), e$5([y$1()], y.prototype, "allFields", null), e$5([y$1()], y.prototype, "helpMessage", void 0), y = e$5([c$3("esri.views.interactive.tooltip.DrawPolylineTooltipInfo")], y);
let c$1 = class c2 extends s$2 {
  constructor(t2) {
    super(t2), this.type = "draw-polygon", this.orientation = p2(), this.distance = m({ title: (t3) => t3.messages.sketch.distance }), this.elevation = g(), this.area = U({ readOnly: true });
  }
  get allFields() {
    return [this.orientation, this.distance, this.elevation, this.area];
  }
};
e$5([y$1()], c$1.prototype, "type", void 0), e$5([y$1()], c$1.prototype, "distance", void 0), e$5([y$1()], c$1.prototype, "elevation", void 0), e$5([y$1()], c$1.prototype, "area", void 0), e$5([y$1()], c$1.prototype, "allFields", null), e$5([y$1()], c$1.prototype, "helpMessage", void 0), c$1 = e$5([c$3("esri.views.interactive.tooltip.DrawPolygonTooltipInfo")], c$1);
let v$1 = class v2 extends s$2 {
  constructor(t2) {
    super(t2), this.type = "draw-mesh", this.elevation = g();
  }
  get allFields() {
    return [this.elevation];
  }
};
e$5([y$1()], v$1.prototype, "type", void 0), e$5([y$1()], v$1.prototype, "elevation", void 0), e$5([y$1()], v$1.prototype, "allFields", null), e$5([y$1()], v$1.prototype, "helpMessage", void 0), v$1 = e$5([c$3("esri.views.interactive.tooltip.DrawMeshTooltipInfo")], v$1);
let h$1 = class h extends s$2 {
  constructor(t2) {
    super(t2), this.type = "draw-rectangle", this.xSize = h$4, this.ySize = h$4, this.area = d$5;
  }
  get allFields() {
    return [];
  }
};
e$5([y$1()], h$1.prototype, "type", void 0), e$5([y$1()], h$1.prototype, "xSize", void 0), e$5([y$1()], h$1.prototype, "ySize", void 0), e$5([y$1()], h$1.prototype, "area", void 0), e$5([y$1()], h$1.prototype, "allFields", null), h$1 = e$5([c$3("esri.views.interactive.tooltip.DrawRectangleTooltipInfo")], h$1);
let u = class extends s$2 {
  constructor(t2) {
    super(t2), this.type = "draw-circle", this.radius = null, this.xSize = null, this.ySize = null, this.area = d$5;
  }
  get allFields() {
    return [];
  }
};
e$5([y$1()], u.prototype, "type", void 0), e$5([y$1()], u.prototype, "radius", void 0), e$5([y$1()], u.prototype, "xSize", void 0), e$5([y$1()], u.prototype, "ySize", void 0), e$5([y$1()], u.prototype, "area", void 0), e$5([y$1()], u.prototype, "allFields", null), u = e$5([c$3("esri.views.interactive.tooltip.DrawCircleTooltipInfo")], u);
class J {
  constructor() {
    this.regularVertices = null, this.activeVertex = null, this.full = null, this.outline = null, this.circle = null, this.rectangle = null;
  }
}
let K = class extends o$5.EventedMixin(l$2) {
  constructor(t2) {
    super(t2), this._graphic = null, this._createOperationGeometry = null, this.defaultZ = 0, this.geometryType = null, this.hasZ = true, this.labelOptions = new c$4(), this.geometryToPlace = null, this.mode = null, this.snappingManager = null, this.snapToScene = false, this.tooltip = null, this.tooltipOptions = new p$2(), this._getPointConstraint = t$4((t3) => t3), this._getPolylineOrPolygonConstraint = t$4((t3, e2, o2) => k$2([t3, e2, o2])), this._getDistanceConstraint = t$4(d$2), this._getOrientationConstraint = t$4(g$1), this._getElevationConstraint = t$4(h$2);
  }
  initialize() {
    this.internalGraphicsLayer = new h$5({ listMode: "hide", internal: true }), this.view.map.layers.add(this.internalGraphicsLayer), this.drawOperation = this.makeDrawOperation();
    const t2 = this.tooltipOptions, e2 = this.view.type;
    this.tooltipInfos = { point: new d$1({ tooltipOptions: t2, viewType: e2 }), polyline: new y({ tooltipOptions: t2, viewType: e2 }), polygon: new c$1({ tooltipOptions: t2, viewType: e2 }), mesh: new v$1({ tooltipOptions: t2, viewType: e2 }), rectangle: new h$1({ tooltipOptions: t2 }), circle: new u({ tooltipOptions: t2 }) }, this.addHandles([this.drawOperation.on("vertex-add", (t3) => this.onVertexAdd(t3)), this.drawOperation.on("vertex-remove", (t3) => this.onVertexRemove(t3)), this.drawOperation.on("vertex-update", (t3) => this.onVertexUpdate(t3)), this.drawOperation.on("cursor-update", (t3) => this.onCursorUpdate(t3)), this.drawOperation.on("complete", (t3) => this.onComplete(t3)), d$6(() => this.cursor, (t3) => {
      this.drawOperation.cursor = t3;
    }, A$1), d$6(() => this.tooltipOptions.enabled, (t3) => {
      this.tooltip = t3 ? new u$3({ view: this.view, info: this._tooltipInfo }) : u$2(this.tooltip);
    }, A$1), i$2(() => this._updateTooltipInfo())]), this.finishToolCreation();
  }
  destroy() {
    this.drawOperation = u$2(this.drawOperation), this.tooltip = u$2(this.tooltip), this._destroyAllVisualisations(), this.view.map.remove(this.internalGraphicsLayer), this.internalGraphicsLayer = u$2(this.internalGraphicsLayer), this._set("view", null);
  }
  get _defaultElevation() {
    return i$1(this.defaultZ, "meters");
  }
  get canRedo() {
    return this.drawOperation.canRedo;
  }
  get canUndo() {
    return this.drawOperation.canUndo;
  }
  set centered(t2) {
    this._set("centered", t2), this._updateGraphic();
  }
  get cursor() {
    return this._get("cursor");
  }
  set cursor(t2) {
    this._set("cursor", t2);
  }
  set enabled(t2) {
    this.drawOperation.interactive = t2, this._set("enabled", t2);
  }
  set forceUniformSize(t2) {
    this._set("forceUniformSize", t2), this._updateGraphic();
  }
  get graphic() {
    return this._graphic;
  }
  set graphicSymbol(t2) {
    this._set("graphicSymbol", t2), null != this._graphic && (this._graphic.symbol = t2);
  }
  get updating() {
    return this.drawOperation?.updating ?? false;
  }
  completeCreateOperation() {
    this.drawOperation.complete();
  }
  onInputEvent(t2) {
    const e2 = this._tooltipInfo;
    if ("key-down" === t2.type && t2.key === n$4.enterInputMode && null != e2 && e2.editableFields.length > 0 && this.tooltipOptions.inputEnabled)
      return e2.enterInputMode(), void t2.stopPropagation();
    this.drawOperation.onInputEvent(t2);
  }
  redo() {
    this.drawOperation.redo();
  }
  reset() {
  }
  undo() {
    this.drawOperation.undo();
  }
  _destroyAllVisualisations() {
    this.removeHandles(W2.outline), this.removeHandles(W2.regularVertices), this.removeHandles(W2.activeVertex), this.removeHandles(Q);
  }
  _createOrUpdateGraphic(t2) {
    if (null != this._graphic)
      return this.updateGraphicGeometry(this._graphic, t2), this._graphic;
    const o2 = this._graphic = new c$5({ ...this.graphicProperties, symbol: this.graphicSymbol });
    return this.updateGraphicGeometry(o2, t2), this.internalGraphicsLayer.add(o2), this.addHandles(this.initializeGraphic(o2)), this.notifyChange("graphic"), this.addHandles(e$6(() => {
      this.internalGraphicsLayer.remove(o2), u$2(o2), this._graphic === o2 && (this._graphic = null);
    }), Q), o2;
  }
  updateGraphicGeometry(t2, e2) {
    t2.geometry = e2;
  }
  _getCreateOperationGeometry(t2 = { operationComplete: false }) {
    const { drawOperation: e2 } = this;
    if (null == e2 || 0 === e2.numVertices)
      return null;
    const { coordinateHelper: o2, view: i2 } = e2, r2 = e2.stagedVertex, n2 = e2.committedVertices, l2 = n2.slice(), a2 = null != r2;
    a2 && l2.push(o2.pointToArray(r2));
    const s2 = a2 ? o2.pointToArray(r2) : n2.splice(-1)[0], p3 = l2.length, c4 = i2.spatialReference, h3 = "3d" === i2.type && "global" === i2.viewingMode, u2 = new J();
    switch (this.geometryType) {
      case "point":
      case "mesh":
        u2.regularVertices = n2, u2.activeVertex = s2, u2.full = o2.arrayToPoint(l2[0]);
        break;
      case "multipoint":
        u2.regularVertices = n2, u2.activeVertex = s2, p3 > 0 && (u2.full = d$4(l2, c4));
        break;
      case "polyline":
        u2.regularVertices = n2, u2.activeVertex = s2, p3 > 0 && (u2.full = R2([l2], c4, h3));
        break;
      case "polygon":
        u2.regularVertices = n2, u2.activeVertex = s2, p3 > 0 && (u2.full = j$1([l2], c4, h3, true));
        break;
      case "circle":
        if (p3 > 0) {
          const e3 = F(i2, l2[0]);
          if (1 === p3 && t2.operationComplete) {
            const t3 = l2[0], o3 = e3.makeMapPoint(t3[0] + Y * i2.resolution, t3[1]);
            u2.circle = L([t3, o3], e3, true), u2.full = null != u2.circle ? u2.circle.geometry : null;
          } else
            2 === p3 && (this.forceUniformSize ? (u2.circle = L(l2, e3, this.centered), u2.full = null != u2.circle ? u2.circle.geometry : null) : (u2.rectangle = v$4(l2, e3, this.centered), u2.full = u2.rectangle.geometry));
        }
        break;
      case "rectangle":
        if (p3 > 0) {
          const e3 = F(i2, l2[0]);
          if (1 === p3 && t2.operationComplete) {
            const t3 = l2[0], o3 = e3.makeMapPoint(t3[0] + Y * i2.resolution, t3[1]);
            u2.rectangle = T([t3, o3], e3, true), u2.full = u2.rectangle.geometry;
          } else
            2 === p3 && (u2.rectangle = this.forceUniformSize ? T(l2, e3, this.centered) : b(l2, e3, this.centered), u2.full = u2.rectangle.geometry);
        }
        break;
      default:
        return null;
    }
    switch (this.geometryType) {
      case "point":
      case "multipoint":
        break;
      case "polyline":
        u2.outline = p3 > 1 ? R2([l2], c4, h3) : null;
        break;
      case "polygon":
        u2.outline = p3 > 1 ? j$1([l2], c4, h3) : null;
        break;
      case "circle":
      case "rectangle":
        u2.outline = "polygon" === u2.full?.type ? j$1(u2.full.rings, c4, h3) : null;
    }
    return u2;
  }
  initializeGraphic(t2) {
    return e$6();
  }
  onComplete(t2) {
    this._updateGraphic();
    let e2 = null;
    if (this.drawOperation.isCompleted) {
      const t3 = this._getCreateOperationGeometry({ operationComplete: true });
      null != t3 && (e2 = this._createOrUpdateGraphic(t3.full).clone());
    }
    this._createOperationGeometry = null, this.emit("complete", { graphic: e2, ...t2 });
  }
  onCursorUpdate(t2) {
    this._updateGraphic(), this.emit("cursor-update", t2);
  }
  onDeactivate() {
    this.drawOperation.isCompleted || this.drawOperation.cancel();
  }
  onVertexAdd(t2) {
    this._updateGraphic(), this._clearConstraints(), this.emit("vertex-add", t2);
  }
  onVertexRemove(t2) {
    this._updateGraphic(), this._clearConstraints(), this.emit("vertex-remove", t2);
  }
  onVertexUpdate(t2) {
    this._updateGraphic(), this.emit("vertex-update", t2);
  }
  _updateGraphic() {
    const t2 = this._getCreateOperationGeometry();
    this._createOperationGeometry = t2, null != t2 ? (null != t2.outline ? this.addHandles(this.onOutlineChanged(t2.outline), W2.outline) : this.removeHandles(W2.outline), null != t2.regularVertices ? this.addHandles(this.onRegularVerticesChanged(t2.regularVertices), W2.regularVertices) : this.removeHandles(W2.regularVertices), null != t2.activeVertex ? this.addHandles(this.onActiveVertexChanged(t2.activeVertex), W2.activeVertex) : this.removeHandles(W2.activeVertex), null != t2.full ? this._createOrUpdateGraphic(t2.full) : this.removeHandles(Q)) : this._destroyAllVisualisations();
  }
  get _tooltipInfo() {
    const { drawOperation: t2, graphic: e2, view: o2 } = this;
    if (!t2)
      return null;
    const i2 = this.tooltipInfos, r2 = e2?.geometry?.type;
    switch (this.geometryType) {
      case "point":
        return "2d" === o2.type && 0 === this.defaultZ ? null : "point" === r2 ? i2.point : null;
      case "polyline":
        return "polyline" === r2 ? i2.polyline : null;
      case "polygon":
        return "polygon" === r2 ? i2.polygon : null;
      case "rectangle":
        return "polygon" === r2 ? i2.rectangle : null;
      case "circle":
        return "polygon" === r2 ? i2.circle : null;
      case "mesh":
        return "mesh" === r2 ? i2.mesh : null;
      default:
        return null;
    }
  }
  _updateTooltipInfo() {
    const { _tooltipInfo: t2, tooltip: e2 } = this;
    if (t2 && e2) {
      switch (t2.type) {
        case "draw-point":
          this._updateDrawPointTooltipInfo(t2);
          break;
        case "draw-polyline":
          this._updateDrawPolylineTooltipInfo(t2);
          break;
        case "draw-polygon":
          this._updateDrawPolygonTooltipInfo(t2);
          break;
        case "draw-rectangle":
          this._updateDrawRectangleTooltipInfo(t2);
          break;
        case "draw-circle":
          this._updateDrawCircleTooltipInfo(t2);
          break;
        case "draw-mesh":
          this.updateDrawMeshTooltipInfo(t2);
      }
      e2.info = t2;
    }
  }
  _updateDrawPointTooltipInfo(t2) {
    const { drawOperation: e2, graphic: o2, view: i2, tooltipOptions: r2 } = this, { elevationInfo: n2, stagedVertex: l2 } = e2;
    if (t2.tooltipOptions = r2, t2.viewType = i2.type, t2.helpMessage = e$1("point", o2?.geometry), this.updateElevation(t2.elevation), !l2)
      return void (e2.constraint = void 0);
    const a2 = e2.coordinateHelper.spatialReference;
    e2.constraint = this._getPointConstraint(this._getElevationConstraint(t2.elevation.committed, a2, i2, n2));
  }
  _updateDrawPolylineTooltipInfo(t2) {
    const e2 = this._createOperationGeometry, o2 = null != e2 ? e2.full : null;
    if ("polyline" !== o2?.type)
      return;
    const { drawOperation: i2, tooltipOptions: r2, view: n2 } = this, { lastVertex: l2, stagedVertex: s2 } = i2;
    this._updatePolylineOrPolygonCommon(t2, s2);
    const p3 = p$3(o2, this._elevationMode);
    t2.totalLength.actual = p3 ?? h$4, t2.totalLength.hidden = null == length || !l2, t2.tooltipOptions = r2, t2.viewType = n2.type, t2.helpMessage = e$1("polyline", o2), this.updateElevation(t2.elevation);
  }
  _updateDrawPolygonTooltipInfo(t2) {
    const e2 = this._createOperationGeometry, o2 = null != e2 ? e2.full : null;
    if ("polygon" !== o2?.type)
      return;
    const { drawOperation: i2, tooltipOptions: r2, view: n2 } = this, { lastVertex: l2 } = i2;
    let a2 = i2.stagedVertex;
    "polygon" === o2?.type && l2 && !a2 && (a2 = o2.getPoint(0, o2.rings[0].length - 1)), this._updatePolylineOrPolygonCommon(t2, a2);
    const p3 = o$6(o2, this._elevationMode);
    t2.area.actual = p3 ?? d$5, t2.area.hidden = null == p3 && !l2, t2.tooltipOptions = r2, t2.viewType = n2.type, t2.helpMessage = e$1("polygon", o2), this.updateElevation(t2.elevation);
  }
  _updatePolylineOrPolygonCommon(t2, e2) {
    const { view: o2, drawOperation: i2 } = this, { elevationInfo: r2, lastVertex: n2 } = i2;
    if (!n2 || !e2)
      return t2.distance.hidden = true, t2.orientation.hidden = true, void (i2.constraint = void 0);
    const l2 = d$7(n2, e2, this._elevationMode);
    t2.distance.actual = l2 ?? h$4, t2.distance.hidden = false;
    const s2 = d$3(n2, e2);
    t2.orientation.actual = s2 ?? U$2, t2.orientation.hidden = false;
    const c4 = i2.coordinateHelper.spatialReference;
    i2.constraint = this._getPolylineOrPolygonConstraint(this._getDistanceConstraint(n2, t2.distance.committed, o2, r2), this._getOrientationConstraint(n2, t2.orientation.committed, o2, r2), this._getElevationConstraint(t2.elevation.committed, c4, o2, r2));
  }
  updateDrawMeshTooltipInfo(t2) {
  }
  _updateDrawRectangleTooltipInfo(t2) {
    t2.tooltipOptions = this.tooltipOptions, t2.xSize = this._xSize ?? h$4, t2.ySize = this._ySize ?? h$4, t2.area = this._fullGeometryArea ?? d$5;
  }
  _updateDrawCircleTooltipInfo(t2) {
    const { forceUniformSize: e2 } = this;
    t2.tooltipOptions = this.tooltipOptions, t2.radius = e2 ? this._circleRadius ?? h$4 : null, t2.xSize = e2 ? null : this._xSize ?? h$4, t2.ySize = e2 ? null : this._ySize ?? h$4, t2.area = this._fullGeometryArea ?? d$5;
  }
  get _circleRadius() {
    const t2 = this._createOperationGeometry;
    return null != t2?.circle?.center && null != t2.circle.edge ? s$3(t2.circle.center, t2.circle.edge, this._elevationMode) : null;
  }
  get _xSize() {
    const t2 = this._createOperationGeometry?.rectangle?.midpoints;
    return null != t2 ? s$3(t2.left, t2.right, this._elevationMode) : null;
  }
  get _ySize() {
    const t2 = this._createOperationGeometry?.rectangle?.midpoints;
    return null != t2 ? s$3(t2.top, t2.bottom, this._elevationMode) : null;
  }
  get _fullGeometryArea() {
    const t2 = this._createOperationGeometry?.full;
    return "polygon" !== t2?.type ? null : o$6(t2, this._elevationMode);
  }
  updateElevation(t2) {
    t2.actual = this._vertexTooltipElevation;
  }
  get _vertexTooltipElevation() {
    const { tooltipOptions: t2, view: e2, drawOperation: o2 } = this;
    if (null == o2)
      return this._defaultElevation;
    const i2 = o2.stagedVertex ?? o2.lastVertex;
    if (null == i2 || "2d" === e2.type)
      return this._defaultElevation;
    const r2 = { mode: t2.elevation.mode, offset: 0 }, n2 = (c$6(e2, i2, o2.elevationInfo, r2) ?? 0) * W$3(i2.spatialReference);
    return i$1(n2, "meters");
  }
  get _elevationMode() {
    return this.drawOperation.isDraped ? "on-the-ground" : "absolute-height";
  }
  _clearConstraints() {
    for (const [, t2] of Object.entries(this.tooltipInfos))
      t2.unlockAllFields();
  }
};
e$5([y$1()], K.prototype, "_createOperationGeometry", void 0), e$5([y$1()], K.prototype, "_defaultElevation", null), e$5([y$1({ value: true })], K.prototype, "centered", null), e$5([y$1()], K.prototype, "cursor", null), e$5([y$1({ nonNullable: true })], K.prototype, "defaultZ", void 0), e$5([y$1()], K.prototype, "drawOperation", void 0), e$5([y$1({ value: true })], K.prototype, "enabled", null), e$5([y$1({ value: true })], K.prototype, "forceUniformSize", null), e$5([y$1({ constructOnly: true })], K.prototype, "geometryType", void 0), e$5([y$1()], K.prototype, "graphic", null), e$5([y$1({ constructOnly: true })], K.prototype, "graphicProperties", void 0), e$5([y$1()], K.prototype, "graphicSymbol", null), e$5([y$1({ constructOnly: true })], K.prototype, "hasZ", void 0), e$5([y$1({ constructOnly: true, type: c$4 })], K.prototype, "labelOptions", void 0), e$5([y$1({ constructOnly: true })], K.prototype, "geometryToPlace", void 0), e$5([y$1({ constructOnly: true })], K.prototype, "mode", void 0), e$5([y$1()], K.prototype, "snappingManager", void 0), e$5([y$1()], K.prototype, "snapToScene", void 0), e$5([y$1()], K.prototype, "tooltip", void 0), e$5([y$1()], K.prototype, "tooltipInfos", void 0), e$5([y$1({ constructOnly: true, type: p$2 })], K.prototype, "tooltipOptions", void 0), e$5([y$1({ readOnly: true })], K.prototype, "type", void 0), e$5([y$1({ readOnly: true })], K.prototype, "updating", null), e$5([y$1({ constructOnly: true, nonNullable: true })], K.prototype, "view", void 0), e$5([y$1()], K.prototype, "_tooltipInfo", null), e$5([y$1()], K.prototype, "_circleRadius", null), e$5([y$1()], K.prototype, "_xSize", null), e$5([y$1()], K.prototype, "_ySize", null), e$5([y$1()], K.prototype, "_fullGeometryArea", null), e$5([y$1()], K.prototype, "_vertexTooltipElevation", null), e$5([y$1()], K.prototype, "_elevationMode", null), K = e$5([c$3("esri.views.draw.DrawGraphicTool")], K);
const Q = "create-operation-graphic", W2 = { outline: "outline-visual", regularVertices: "regular-vertices-visual", activeVertex: "active-vertex-visual" };
function X(t2) {
  switch (t2) {
    case "point":
    case "polyline":
    case "polygon":
    case "multipoint":
      return t2;
    case "circle":
    case "rectangle":
      return "segment";
    case "mesh":
      return "point";
  }
}
const Y = 48;
const e = "click";
class t {
  constructor({ grabbableForEvent: t2 }) {
    this.events = new o$5(), this.interactive = true, this.selectable = false, this.cursor = null, this.grabbable = true, this.consumesClicks = true, this.grabbableForEvent = t2;
  }
  destroy() {
  }
  intersectionDistance(e2, t2) {
    return 0;
  }
  attach() {
  }
  detach() {
  }
  onElevationChange() {
  }
  onViewChange() {
  }
}
const H = "crosshair", j = "progress";
let k$1 = class k extends o$5.EventedMixin(g$7) {
  constructor(e2) {
    super(e2), this._createOperationCompleted = false, this._hideDefaultCursor = false, this._pointerDownStates = /* @__PURE__ */ new Set(), this._stagedScreenPoint = null, this._stagedPointerType = null, this._stagedPointerId = null, this._updatingHandles = new h$6(), this.constraint = void 0, this.isDraped = true, this.labelOptions = new c$4(), this.tooltipOptions = new p$2(), this.cursor = null, this.loading = false, this.snapToSceneEnabled = null, this.lastVertex = null, null == e2.elevationInfo && (this.elevationInfo = o$7(!!e2.hasZ));
  }
  initialize() {
    const { geometryType: e2, view: t$12 } = this, i2 = t$12.spatialReference, n2 = "viewingMode" in t$12.state ? t$12.state.viewingMode : l$3.Local, o2 = "segment" === e2 || "multipoint" === e2 ? "polyline" : e2;
    this.coordinateHelper = w$4(this.hasZ, this.hasM, i2), this._editGeometryOperations = new V$1(new p$4(o2, this.coordinateHelper)), this._snappingOperation = new p$5({ view: t$12, constrainResult: (e3) => e3 ? this._getEffectiveDrawSurface()?.constrainZ(e3) : void 0 }), this.addHandles([d$6(() => this.stagedVertex, (e3) => {
      null != e3 && this.emit("cursor-update", { updated: null, vertices: [{ componentIndex: 0, vertexIndex: this._activeComponent.vertices.length, coordinates: this.coordinateHelper.pointToArray(e3) }], operation: "apply", type: "vertex-update" });
    }, { sync: true, equals: (e3, t2) => o$8(e3, t2, r$3) }), d$6(() => this.view.viewpoint, (e3, t2) => {
      e3 && t2 && a$3(e3, t2) && this._onViewpointChange();
    })]), this._activeComponent = new l$4(i2, n2), this._editGeometryOperations.data.components.push(this._activeComponent);
    const c4 = this.segmentLabels;
    null != c4 && (c4.context = { view: t$12, editGeometryOperations: this._editGeometryOperations, elevationInfo: this.elevationInfo, labelOptions: this.labelOptions }, this.addHandles([d$6(() => this.labelOptions.enabled, (e3) => {
      c4.visible = e3;
    }, A$1), this.on("cursor-update", () => {
      const e3 = this.stagedVertex;
      c4.stagedVertex = null != e3 ? this.coordinateHelper.pointToVector(e3) : null;
    })])), this.addHandles(this._editGeometryOperations.on(["vertex-add", "vertex-update", "vertex-remove"], (e3) => {
      const t2 = e3.vertices.map((e4) => ({ componentIndex: 0, vertexIndex: e4.index, coordinates: this.coordinateHelper.vectorToArray(e4.pos) })), i3 = t2.map((e4) => e4.coordinates);
      switch (e3.type) {
        case "vertex-add":
          this.emit(e3.type, { ...e3, added: i3, vertices: t2 });
          break;
        case "vertex-update":
          this.emit(e3.type, { ...e3, updated: i3, vertices: t2 });
          break;
        case "vertex-remove":
          this.emit(e3.type, { ...e3, removed: i3, vertices: t2 });
      }
      const n3 = this._activeComponent.getLastVertex(), o3 = null != n3 ? this.coordinateHelper.vectorToDehydratedPoint(n3.pos) : null;
      null != o3 && null != this.lastVertex && r$3(this.lastVertex, o3) || (this.lastVertex = o3);
    }));
    const l2 = this._manipulator = new t({ grabbableForEvent: (e3) => "click" !== this.drawingMode || "touch" === e3.pointerType && this._snappingEnabled && 1 === this._pointerDownStates.size });
    this.manipulators.add(l2), l2.grabbable = "point" !== e2, this.addHandles([this._createManipulatorDragPipeline(l2), l2.events.on("immediate-click", (e3) => this._onImmediateClick(e3)), l2.events.on("immediate-double-click", (e3) => this._onImmediateDoubleClick(e3)), d$6(() => ({ effectiveCursor: this.effectiveCursor }), ({ effectiveCursor: e3 }) => {
      l2.cursor = e3;
    }, A$1)]), w$5(this, () => {
      const e3 = this.view.inputManager.latestPointerType ?? "mouse", t2 = this._getSnappingContext(e3);
      null != this.snappingManager && this._updatingHandles.addPromise(d$9(this._snappingOperation.resnap(this.snappingManager, t2)));
    });
  }
  destroy() {
    u$2(this.segmentLabels), u$2(this._snappingOperation), this._editGeometryOperations = u$2(this._editGeometryOperations), this._updatingHandles.destroy();
  }
  get _snappingEnabled() {
    return null != this.snappingManager && this.snappingManager.options.effectiveEnabled;
  }
  get _requiresScenePoint() {
    const e2 = this._getEffectiveDrawSurface();
    return "3d" === this.view.type && this.drawSurface !== e2;
  }
  get canRedo() {
    return this._editGeometryOperations.canRedo;
  }
  get canUndo() {
    return this._editGeometryOperations.canUndo;
  }
  get committedVertices() {
    return this._activeComponent.vertices.map((e2) => this.coordinateHelper.vectorToArray(e2.pos));
  }
  set drawingMode(e$12) {
    this._set("drawingMode", e$12 ?? e);
  }
  get effectiveCursor() {
    return this.loading ? j : this._hideDefaultCursor ? null : this.cursor || H;
  }
  get interactive() {
    return this._manipulator.interactive;
  }
  set interactive(e2) {
    this._manipulator.interactive = e2;
  }
  get isCompleted() {
    return this._createOperationCompleted;
  }
  get numCommittedVertices() {
    return this._activeComponent.vertices.length;
  }
  get numVertices() {
    return null != this.stagedVertex ? this._activeComponent.vertices.length + 1 : this._activeComponent.vertices.length;
  }
  get snappingOptions() {
    return null != this.snappingManager ? this.snappingManager.options : null;
  }
  get stagedVertex() {
    const e2 = this._snappingOperation.stagedPoint, { constraint: t2, elevationInfo: i2, view: n2 } = this;
    if (!e2 || !t2)
      return e2;
    const o2 = a$2(e2, n2, i2), r2 = o2 ? t2.closestTo(o2) : void 0;
    return r2 ? p$6(r2, e2.spatialReference) : e2;
  }
  set stagedVertex(e2) {
    this._snappingOperation.stagedPoint = a$1(e2);
  }
  get updating() {
    return this._updatingHandles.updating;
  }
  get vertices() {
    const e2 = this.committedVertices;
    return null != this.stagedVertex && e2.push(this.coordinateHelper.pointToArray(this.stagedVertex)), e2;
  }
  cancel() {
    this.complete({ aborted: true });
  }
  commitStagedVertex() {
    if (this._snappingOperation.abort(), null != this.stagedVertex) {
      const { stagedVertex: e2 } = this;
      this.stagedVertex = null, this._editGeometryOperations.appendVertex(this.coordinateHelper.pointToVector(e2));
    }
  }
  complete(e2) {
    const t2 = e2 && e2.aborted || false;
    this._snappingOperation.abort(), null != this.snappingManager && this.snappingManager.doneSnapping(), "segment" === this.geometryType || "point" === this.geometryType ? this.commitStagedVertex() : this.stagedVertex = null;
    const i2 = "multipoint" === this.geometryType && 0 === this.numVertices || "polyline" === this.geometryType && this.numVertices < 2 || "polygon" === this.geometryType && this.numVertices < 3;
    this._createOperationCompleted = !i2, (this.isCompleted || t2) && this.emit("complete", { vertices: this.vertices.map((e3, t3) => ({ componentIndex: 0, vertexIndex: t3, coordinates: e3 })), aborted: t2, type: "complete" });
  }
  onInputEvent(e2) {
    switch (e2.type) {
      case "pointer-down":
        this._pointerDownStates.add(e2.pointerId);
        break;
      case "pointer-up":
        this._pointerDownStates.delete(e2.pointerId);
    }
    switch (e2.type) {
      case "pointer-move":
        return this._onPointerMove(e2);
      case "hold":
        return this._onHold(e2);
    }
  }
  redo() {
    this._editGeometryOperations.redo();
  }
  undo() {
    null != this.snappingManager && this.snappingManager.doneSnapping(), this._editGeometryOperations.undo();
  }
  _closeOnClickVertexIndex(e2) {
    const t2 = this._activeComponent;
    if ("polygon" === this.geometryType && t2.vertices.length > 2) {
      if (this._vertexWithinPointerDistance(t2.vertices[0].pos, e2))
        return 0;
      if (this._vertexWithinPointerDistance(t2.vertices[t2.vertices.length - 1].pos, e2))
        return t2.vertices.length - 1;
    }
    return null;
  }
  _createManipulatorDragPipeline(e2) {
    switch (this.drawingMode) {
      case "click":
        return this._createManipulatorDragPipelineClick(e2);
      case "freehand":
        return this._createManipulatorDragPipelineFreehand(e2);
      case "hybrid":
        return this._createManipulatorDragPipelineHybrid(e2);
    }
  }
  _createManipulatorDragPipelineClick(e2) {
    return d$8(e2, (e3, t2, i2, n2) => {
      const o2 = "touch" === n2 && this._snappingEnabled;
      if (this.isCompleted || !o2)
        return;
      const { snappingStep: r2, cancelSnapping: s2 } = f$3({ predicate: () => o2, snappingManager: this.snappingManager, snappingContext: new e$7({ editGeometryOperations: this._editGeometryOperations, elevationInfo: this.elevationInfo, feature: this.graphic, pointer: n2, visualizer: this.snappingVisualizer }), updatingHandles: this._updatingHandles, useZ: !this._requiresScenePoint });
      i2 = i2.next((e4) => (o2 && null != this.snappingManager && this.snappingManager.doneSnapping(), e4)).next(s2), t2.next(this._screenToMapDragEventStep()).next((e4) => ("start" === e4.action && (this.stagedVertex = e4.mapStart, ("segment" === this.geometryType || o2 && 0 === this.numVertices) && this.commitStagedVertex()), e4)).next(C(this.view, this.elevationInfo)).next(...r2).next((e4) => (o2 && (this.stagedVertex = e4.mapEnd, "end" === e4.action && this.commitStagedVertex()), e4)).next((e4) => ("end" === e4.action && ("segment" !== this.geometryType && "point" !== this.geometryType || this.complete()), e4));
    });
  }
  _createManipulatorDragPipelineFreehand(e2) {
    return d$8(e2, (e3, t2) => {
      this.isCompleted || t2.next(this._screenToMapDragEventStep()).next((e4) => ("start" === e4.action && (null == this.stagedVertex && (this.stagedVertex = e4.mapStart), "segment" === this.geometryType && this.commitStagedVertex()), e4)).next((e4) => {
        switch (e4.action) {
          case "start":
          case "update":
            this.stagedVertex = e4.mapEnd, "polygon" !== this.geometryType && "polyline" !== this.geometryType || this.commitStagedVertex();
            break;
          case "end":
            this.complete();
        }
        return e4;
      });
    });
  }
  _createManipulatorDragPipelineHybrid(e2) {
    return d$8(e2, (e3, t2) => {
      this.isCompleted || t2.next(this._screenToMapDragEventStep()).next((e4) => ("start" === e4.action && (null == this.stagedVertex && (this.stagedVertex = e4.mapStart), this.commitStagedVertex()), e4)).next((e4) => {
        switch (e4.action) {
          case "start":
          case "update":
            this.stagedVertex = e4.mapEnd, "polygon" !== this.geometryType && "polyline" !== this.geometryType || this.commitStagedVertex();
            break;
          case "end":
            "segment" !== this.geometryType && "point" !== this.geometryType || this.complete();
        }
        return e4;
      });
    });
  }
  get _drawAtFixedElevation() {
    return ("segment" === this.geometryType || "polygon" === this.geometryType) && this.numCommittedVertices > 0;
  }
  _getEffectiveDrawSurface() {
    if (null == this.elevationDrawSurface)
      return this.drawSurface;
    if (!this.coordinateHelper.hasZ())
      return this.elevationDrawSurface.defaultZ = null, this.elevationDrawSurface;
    let e2 = this.defaultZ, t2 = false;
    return null != this.elevationInfo && "absolute-height" === this.elevationInfo.mode && (t2 = true), null != this.snapToSceneEnabled && (t2 = this.snapToSceneEnabled), null != this.elevationInfo && "on-the-ground" === this.elevationInfo.mode && (t2 = false), this._drawAtFixedElevation && (e2 = this.coordinateHelper.getZ(this._activeComponent.vertices[0].pos), t2 = false), t2 ? this.drawSurface : (this.elevationDrawSurface.defaultZ = e2, this.elevationDrawSurface);
  }
  _mapToScreen(e2) {
    return this._getEffectiveDrawSurface()?.mapToScreen(e2);
  }
  _onHold(e2) {
    this._snappingOperation.abort(), "click" === this.drawingMode && "touch" === e2.pointerType && this._snappingEnabled && (this.stagedVertex = e2.mapPoint), e2.stopPropagation();
  }
  _onImmediateClick(e2) {
    if ("mouse" === e2.pointerType && 2 === e2.button || this._manipulator.dragging)
      return;
    const t2 = this._activeComponent;
    if (null != this._closeOnClickVertexIndex(e2.screenPoint))
      return e2.stopPropagation(), void this.complete();
    const i2 = this._screenToMap(e2.screenPoint);
    if (null != i2)
      switch (this.drawingMode) {
        case "freehand":
          "point" === this.geometryType && (null != this.stagedVertex ? this.commitStagedVertex() : this._editGeometryOperations.appendVertex(this.coordinateHelper.pointToVector(i2)), this.complete());
          break;
        case "click":
        case "hybrid":
          this._snappingOperation.abort(), null != this.stagedVertex ? this.commitStagedVertex() : this._editGeometryOperations.appendVertex(this.coordinateHelper.pointToVector(i2)), ("point" === this.geometryType || "segment" === this.geometryType && 2 === t2.vertices.length || "segment" === this.geometryType && "hybrid" === this.drawingMode && 1 === t2.vertices.length) && this.complete();
      }
    e2.stopPropagation();
  }
  _onImmediateDoubleClick(e2) {
    this._manipulator.dragging || "point" === this.geometryType || (this.complete(), e2.stopPropagation());
  }
  _onPointerMove(e2) {
    const t2 = c$7(e2.x, e2.y);
    this._stagedScreenPoint = t2, this._stagedPointerType = e2.pointerType, this._stagedPointerId = e2.pointerId;
    const i2 = this._snappingOperation, n2 = this._manipulator;
    this._pointerDownStates.has(e2.pointerId) || n2.grabbing || !n2.interactive ? i2.abort() : (e2.stopPropagation(), this._updateStagedVertexOnPointerMove(t2, e2.pointerType));
  }
  _onViewpointChange() {
    const e2 = this._manipulator;
    "mouse" === this._stagedPointerType && this._stagedScreenPoint && null != this._stagedPointerId && !this._pointerDownStates.has(this._stagedPointerId) && !e2.grabbing && e2.interactive ? this._updateStagedVertexOnPointerMove(this._stagedScreenPoint, this._stagedPointerType ?? "mouse") : this._snappingOperation.abort();
  }
  _updateStagedVertexOnPointerMove(e2, t2) {
    const i2 = this._snappingOperation, n2 = this._closeOnClickVertexIndex(e2);
    if (null != n2)
      return this._closeOnVertex(n2), void i2.abort();
    const o2 = this._screenToMap(e2), r2 = this._requiresScenePoint ? this.drawSurface?.screenToMap(e2) : null;
    if (null == o2)
      return this._hideDefaultCursor = true, void i2.abort();
    this._hideDefaultCursor = false;
    const a2 = this.snappingManager;
    if (null == a2)
      return this.stagedVertex = o2, void i2.abort();
    const p3 = this._getSnappingContext(t2);
    this._updatingHandles.addPromise(d$9(i2.snap({ point: o2, scenePoint: r2 }, a2, p3)));
  }
  _closeOnVertex(e2) {
    this.stagedVertex = null;
    const t2 = { componentIndex: 0, vertexIndex: e2, coordinates: this.coordinateHelper.vectorToArray(this._activeComponent.vertices[e2].pos) };
    this.emit("cursor-update", { updated: null, vertices: [t2], operation: "apply", type: "vertex-update" });
  }
  _screenToMap(e2) {
    return this._getEffectiveDrawSurface()?.screenToMap(e2);
  }
  _screenToMapDragEventStep() {
    let e2 = null;
    return (t2) => {
      if ("start" === t2.action && (e2 = this._screenToMap(t2.screenStart)), null == e2)
        return null;
      const i2 = this._screenToMap(t2.screenEnd);
      return null != i2 ? { ...t2, mapStart: e2, mapEnd: i2 } : null;
    };
  }
  _vertexWithinPointerDistance(e2, t2) {
    const i2 = 25, n2 = this._mapToScreen(this.coordinateHelper.vectorToDehydratedPoint(e2));
    return null != n2 && G(n2, t2, i2);
  }
  _getSnappingContext(e2) {
    const t2 = this._drawAtFixedElevation ? this.elevationDrawSurface?.defaultZ : null;
    return new e$7({ editGeometryOperations: this._editGeometryOperations, elevationInfo: this.elevationInfo, pointer: e2, feature: this.graphic, visualizer: this.snappingVisualizer, selfSnappingZ: null != t2 ? { value: t2, elevationInfo: this.elevationInfo } : null });
  }
};
function G(e2, t2, i2) {
  const n2 = e2.x - t2.x, o2 = e2.y - t2.y;
  return n2 * n2 + o2 * o2 <= i2;
}
e$5([y$1()], k$1.prototype, "_hideDefaultCursor", void 0), e$5([y$1()], k$1.prototype, "_snappingOperation", void 0), e$5([y$1()], k$1.prototype, "_snappingEnabled", null), e$5([y$1({ constructOnly: true })], k$1.prototype, "graphic", void 0), e$5([y$1()], k$1.prototype, "constraint", void 0), e$5([y$1()], k$1.prototype, "defaultZ", void 0), e$5([y$1()], k$1.prototype, "isDraped", void 0), e$5([y$1({ value: e })], k$1.prototype, "drawingMode", null), e$5([y$1({ constructOnly: true })], k$1.prototype, "elevationDrawSurface", void 0), e$5([y$1({ constructOnly: true })], k$1.prototype, "elevationInfo", void 0), e$5([y$1({ constructOnly: true, type: c$4 })], k$1.prototype, "labelOptions", void 0), e$5([y$1({ constructOnly: true, type: p$2 })], k$1.prototype, "tooltipOptions", void 0), e$5([y$1({ constructOnly: true })], k$1.prototype, "geometryType", void 0), e$5([y$1({ constructOnly: true })], k$1.prototype, "hasM", void 0), e$5([y$1({ constructOnly: true })], k$1.prototype, "hasZ", void 0), e$5([y$1()], k$1.prototype, "cursor", void 0), e$5([y$1()], k$1.prototype, "effectiveCursor", null), e$5([y$1()], k$1.prototype, "loading", void 0), e$5([y$1({ constructOnly: true })], k$1.prototype, "manipulators", void 0), e$5([y$1({ constructOnly: true })], k$1.prototype, "drawSurface", void 0), e$5([y$1({ constructOnly: true })], k$1.prototype, "segmentLabels", void 0), e$5([y$1({ constructOnly: true })], k$1.prototype, "snappingManager", void 0), e$5([y$1({ constructOnly: true })], k$1.prototype, "snappingVisualizer", void 0), e$5([y$1()], k$1.prototype, "snapToSceneEnabled", void 0), e$5([y$1()], k$1.prototype, "stagedVertex", null), e$5([y$1()], k$1.prototype, "lastVertex", void 0), e$5([y$1()], k$1.prototype, "updating", null), e$5([y$1({ constructOnly: true })], k$1.prototype, "view", void 0), k$1 = e$5([c$3("esri.views.draw.DrawOperation")], k$1);
class r {
  constructor(e2, t2, s2, i2 = null) {
    this._elevationInfo = e2, this.defaultZ = t2, this._view = s2, this._excludeGraphics = i2;
  }
  screenToMap(t2) {
    if (null != this.defaultZ)
      return this._view.sceneIntersectionHelper.intersectElevationFromScreen(i$3(t2.x, t2.y), this._elevationInfo, this.defaultZ, this._excludeGraphics);
    const s2 = this._view.sceneIntersectionHelper.intersectElevationFromScreen(i$3(t2.x, t2.y), this._elevationInfo, 0, this._excludeGraphics);
    return null != s2 && (s2.z = void 0), s2;
  }
  mapToScreen(e2) {
    const s2 = e$8(e2.x, e2.y, c$6(this._view, e2, this._elevationInfo), e2.spatialReference);
    return this._view.toScreen(s2);
  }
  constrainZ(e2) {
    const { defaultZ: t2 } = this;
    return null != t2 && e2.z !== t2 && ((e2 = x$5(e2)).z = t2), e2;
  }
}
class o {
  constructor(e2, t2, s2 = []) {
    this.view = e2, this.elevationInfo = t2, this.exclude = s2;
  }
  screenToMap(e2) {
    const t2 = this.view.toMap(e2, { exclude: this.exclude });
    return null != t2 && (t2.z = f$4(t2, this.view, this.elevationInfo)), t2;
  }
  mapToScreen(e2) {
    let s2 = e2;
    return null != this.elevationInfo && (s2 = e$8(e2.x, e2.y, c$6(this.view, e2, this.elevationInfo), e2.spatialReference)), this.view.toScreen(s2);
  }
  constrainZ(e2) {
    return e2;
  }
}
class c3 {
  constructor(e2, t2 = false, s2 = 0) {
    this.view = e2, this.hasZ = t2, this.defaultZ = s2, this.mapToScreen = (t3) => e2.toScreen(t3), this.screenToMap = t2 ? (t3) => {
      const i2 = e2.toMap(t3);
      return i2.z = s2, i2;
    } : (t3) => e2.toMap(t3);
  }
  constrainZ(e2) {
    const { defaultZ: t2 } = this;
    return this.hasZ && e2.z !== t2 && ((e2 = x$5(e2)).z = t2), e2;
  }
}
function V(o2, i2) {
  return d2(o2, i2, false);
}
function x(o2, i2) {
  return d2(o2, i2, true);
}
function d2(o2, i2, s2) {
  if (o2 instanceof t$5) {
    if (o2.operation instanceof t$6)
      return h2(o2.operation, i2, s2), true;
    if (o2.operation instanceof s$4)
      return v3(o2.operation, i2, s2), true;
    if (o2.operation instanceof c$8)
      return k2(o2.operation, i2, s2), true;
  }
  return false;
}
function h2(o2, i2, s2 = false) {
  const r2 = s2 ? -1 : 1, n2 = r$4(r2 * o2.dx, r2 * o2.dy, r2 * o2.dz);
  u$4(i2.origin, i2.origin, n2), J$1(i2);
}
function v3(o2, i2, s2 = false) {
  const r2 = s2 ? -o2.angle : o2.angle;
  T$1(i2.basis1, i2.basis1, f$5, r2), T$1(i2.basis2, i2.basis2, f$5, r2), J$1(i2);
}
function k2(i2, s2, r2 = false) {
  const n2 = r2 ? 1 / i2.factor1 : i2.factor1, t2 = r2 ? 1 / i2.factor2 : i2.factor2;
  g$4(s2.basis1, s2.basis1, n2), g$4(s2.basis2, s2.basis2, t2), w$6(s2.origin, s2.origin, i2.origin, i2.axis1, n2), w$6(s2.origin, s2.origin, i2.origin, i2.axis2, t2), J$1(s2);
}
function l(o2, c4, f2, u2) {
  u2 || (u2 = W$4());
  const p3 = r$5(t$7.get(), o2[1], -o2[0]), m2 = r$5(t$7.get(), Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), N = r$5(t$7.get(), Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY), j2 = t$7.get();
  c4.components.forEach((t2) => t2.vertices.forEach((t3) => {
    const a2 = t3.pos;
    r$5(j2, j$4(o2, a2), j$4(p3, a2)), f$6(m2, m2, j2), M$1(N, N, j2);
  }));
  const E2 = 1e-6, T2 = r$5(t$7.get(), N[0] - m2[0] < E2 ? f2 / 2 : 0, N[1] - m2[1] < E2 ? f2 / 2 : 0);
  return o$9(m2, m2, T2), s$5(N, N, T2), l$5(u2.basis1, o2, (N[0] - m2[0]) / 2), l$5(u2.basis2, p3, (N[1] - m2[1]) / 2), r$5(u2.origin, m2[0] * o2[0] + m2[1] * p3[0], m2[0] * o2[1] + m2[1] * p3[1]), s$5(u2.origin, u2.origin, u2.basis1), s$5(u2.origin, u2.origin, u2.basis2), J$1(u2), u2;
}
export {
  K,
  V,
  X,
  c3 as c,
  g,
  k$1 as k,
  l,
  o,
  r,
  x
};
