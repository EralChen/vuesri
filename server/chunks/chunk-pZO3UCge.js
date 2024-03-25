import { sb as ht, sc as at, sp as It, ct as e$2, sq as x$2, sr as $, ss as H, st as U$1, lP as M$1, su as y$2, bO as G$2, bC as L$1, sv as x$3, b9 as w$1, lQ as W, cr as q$1, hX as I$1, e0 as N, iJ as s$1, rC as l$2, bI as R$2, cX as y$3, bd as m$1, be as f$3, bf as s$2, dc as H$1, p7 as X, bN as A, dT as g$3, sw as o$1, sx as Z, dq as K, sy as t$3, sz as r$1, aO as s$3, gH as p$1 } from "./chunk-ejFG4zJ0.js";
import { t as t$2 } from "./chunk-H58sM9yM.js";
const u$1 = new e$2(), f$2 = new e$2(), m = new e$2(), c$1 = { esriGeometryPoint: x$2, esriGeometryPolyline: $, esriGeometryPolygon: H, esriGeometryMultipoint: U$1 };
function y$1(r2, t2, o2, i = r2.hasZ, s2 = r2.hasM) {
  if (null == t2)
    return null;
  const l2 = r2.hasZ && i, u2 = r2.hasM && s2;
  if (o2) {
    const f2 = at(m, t2, r2.hasZ, r2.hasM, "esriGeometryPoint", o2, i, s2);
    return x$2(f2, l2, u2);
  }
  return x$2(t2, l2, u2);
}
function a(e2, o2, i, s2, l2, y2, a2 = o2, h2 = i) {
  const p2 = o2 && a2, G2 = i && h2, g2 = null != s2 ? "coords" in s2 ? s2 : s2.geometry : null;
  if (null == g2)
    return null;
  if (l2) {
    let t2 = ht(f$2, g2, o2, i, e2, l2, a2, h2);
    return y2 && (t2 = at(m, t2, p2, G2, e2, y2)), c$1[e2]?.(t2, p2, G2) ?? null;
  }
  if (y2) {
    const r2 = at(m, g2, o2, i, e2, y2, a2, h2);
    return c$1[e2]?.(r2, p2, G2) ?? null;
  }
  return It(u$1, g2, o2, i, a2, h2), c$1[e2]?.(u$1, p2, G2) ?? null;
}
function h$2(n2) {
  return n2 && p in n2 ? JSON.parse(JSON.stringify(n2, G$1)) : n2;
}
const p = "_geVersion", G$1 = (n2, e2) => n2 !== p ? e2 : void 0;
const c = [0, 0];
function h$1(s2, t2) {
  if (!t2)
    return null;
  if ("x" in t2) {
    const e2 = { x: 0, y: 0 };
    return [e2.x, e2.y] = s2(t2.x, t2.y, c), null != t2.z && (e2.z = t2.z), null != t2.m && (e2.m = t2.m), e2;
  }
  if ("xmin" in t2) {
    const e2 = { xmin: 0, ymin: 0, xmax: 0, ymax: 0 };
    return [e2.xmin, e2.ymin] = s2(t2.xmin, t2.ymin, c), [e2.xmax, e2.ymax] = s2(t2.xmax, t2.ymax, c), t2.hasZ && (e2.zmin = t2.zmin, e2.zmax = t2.zmax, e2.hasZ = true), t2.hasM && (e2.mmin = t2.mmin, e2.mmax = t2.mmax, e2.hasM = true), e2;
  }
  return "rings" in t2 ? { rings: l$1(t2.rings, s2), hasM: t2.hasM, hasZ: t2.hasZ } : "paths" in t2 ? { paths: l$1(t2.paths, s2), hasM: t2.hasM, hasZ: t2.hasZ } : "points" in t2 ? { points: f$1(t2.points, s2), hasM: t2.hasM, hasZ: t2.hasZ } : null;
}
function l$1(s2, t2) {
  const e2 = [];
  for (const n2 of s2)
    e2.push(f$1(n2, t2));
  return e2;
}
function f$1(s2, t2) {
  const e2 = [];
  for (const n2 of s2) {
    const s3 = t2(n2[0], n2[1], [0, 0]);
    e2.push(s3), n2.length > 2 && s3.push(n2[2]), n2.length > 3 && s3.push(n2[3]);
  }
  return e2;
}
async function x$1(t2, n2) {
  if (!t2 || !n2)
    return;
  const r2 = Array.isArray(t2) ? t2.map((s2) => null != s2.geometry ? s2.geometry.spatialReference : null).filter(q$1) : [t2];
  await I$1(r2.map((s2) => ({ source: s2, dest: n2 })));
}
const y = h$1.bind(null, M$1), g$2 = h$1.bind(null, y$2);
function j$2(s2, t2, e2, m2) {
  if (!s2)
    return s2;
  if (e2 || (e2 = t2, t2 = s2.spatialReference), !N(t2) || !N(e2) || G$2(t2, e2))
    return s2;
  if (x$3(t2, e2)) {
    const t3 = w$1(e2) ? y(s2) : g$2(s2);
    return t3.spatialReference = e2, t3;
  }
  return W(t$2, [s2], t2, e2, null, m2)[0];
}
class _ {
  constructor() {
    this._jobs = [], this._timer = null, this._process = this._process.bind(this);
  }
  async push(s2, e2, n2, r2) {
    if (!s2?.length || !e2 || !n2 || G$2(e2, n2))
      return s2;
    const i = { geometries: s2, inSpatialReference: e2, outSpatialReference: n2, geographicTransformation: r2, resolve: L$1() };
    return this._jobs.push(i), this._timer ??= setTimeout(this._process, 10), i.resolve.promise;
  }
  _process() {
    this._timer = null;
    const s2 = this._jobs.shift();
    if (!s2)
      return;
    const { geometries: t2, inSpatialReference: e2, outSpatialReference: i, resolve: o2, geographicTransformation: m2 } = s2;
    x$3(e2, i) ? w$1(i) ? o2(t2.map(y)) : o2(t2.map(g$2)) : o2(W(t$2, t2, e2, i, m2, null)), this._jobs.length > 0 && (this._timer = setTimeout(this._process, 10));
  }
}
const M = new _();
function b(s2, t2, e2, n2) {
  return M.push(s2, t2, e2, n2);
}
const R$1 = new s$1({ esriSRUnit_Meter: "meters", esriSRUnit_Kilometer: "kilometers", esriSRUnit_Foot: "feet", esriSRUnit_StatuteMile: "miles", esriSRUnit_NauticalMile: "nautical-miles", esriSRUnit_USNauticalMile: "us-nautical-miles" }), g$1 = Object.freeze({});
async function S$1(e2, t2, i) {
  const { outFields: r2, orderByFields: n2, groupByFieldsForStatistics: o2, outStatistics: s2 } = e2;
  if (r2)
    for (let a2 = 0; a2 < r2.length; a2++)
      r2[a2] = r2[a2].trim();
  if (n2)
    for (let a2 = 0; a2 < n2.length; a2++)
      n2[a2] = n2[a2].trim();
  if (o2)
    for (let a2 = 0; a2 < o2.length; a2++)
      o2[a2] = o2[a2].trim();
  if (s2)
    for (let a2 = 0; a2 < s2.length; a2++)
      s2[a2].onStatisticField && (s2[a2].onStatisticField = s2[a2].onStatisticField.trim());
  return e2.geometry && !e2.outSR && (e2.outSR = e2.geometry.spatialReference), j$1(e2, t2, i);
}
async function j$1(e2, t2, i) {
  if (!e2)
    return null;
  let { where: o2 } = e2;
  if (e2.where = o2 = o2?.trim(), (!o2 || /^1 *= *1$/.test(o2) || t2 && t2 === o2) && (e2.where = null), !e2.geometry)
    return e2;
  let s2 = await d(e2);
  if (e2.distance = 0, e2.units = null, "esriSpatialRelEnvelopeIntersects" === e2.spatialRel) {
    const { spatialReference: t3 } = e2.geometry;
    s2 = l$2(s2), s2.spatialReference = t3;
  }
  if (s2) {
    await x$1(s2.spatialReference, i), s2 = x(s2, i);
    const t3 = (await R$2(y$3(s2)))[0];
    if (null == t3)
      throw g$1;
    const r2 = "quantizationParameters" in e2 && e2.quantizationParameters?.tolerance || "maxAllowableOffset" in e2 && e2.maxAllowableOffset || 0, o3 = r2 && w(s2, i) ? { densificationStep: 8 * r2 } : void 0, a2 = t3.toJSON(), m2 = j$2(a2, a2.spatialReference, i, o3);
    if (!m2)
      throw g$1;
    m2.spatialReference = i, e2.geometry = m2;
  }
  return e2;
}
function w(e2, t2) {
  if (!e2)
    return false;
  const r2 = e2.spatialReference;
  return (m$1(e2) || f$3(e2) || s$2(e2)) && !G$2(r2, t2) && !H$1(r2, t2);
}
function x(e2, t2) {
  const i = e2.spatialReference;
  return w(e2, t2) && m$1(e2) ? { spatialReference: i, rings: [[[e2.xmin, e2.ymin], [e2.xmin, e2.ymax], [e2.xmax, e2.ymax], [e2.xmax, e2.ymin], [e2.xmin, e2.ymin]]] } : e2;
}
async function d(e2) {
  const { distance: i, units: r2 } = e2, n2 = e2.geometry;
  if (null == i || "vertexAttributes" in n2)
    return n2;
  const o2 = n2.spatialReference, s2 = r2 ? R$1.fromJSON(r2) : X(o2), a2 = o2 && (A(o2) || w$1(o2)) ? n2 : await x$1(o2, g$3).then(() => j$2(n2, g$3));
  return (await U())(a2.spatialReference, a2, i, s2);
}
async function U() {
  return (await import("./chunk-7UKjY7OO.js")).geodesicBuffer;
}
function s(s2) {
  return "mesh" === s2 ? o$1 : Z(s2);
}
function n$1(n2, t2) {
  return n2 ? t2 ? 4 : 3 : t2 ? 3 : 2;
}
function t$1(n2, t2, r2, e2) {
  return o(n2, t2, r2, e2.coords[0], e2.coords[1]);
}
function r(t2, r2, e2, c2, u2, f2) {
  const s2 = n$1(u2, f2), { coords: i, lengths: l2 } = c2;
  if (!l2)
    return false;
  for (let n2 = 0, d2 = 0; n2 < l2.length; n2++, d2 += s2)
    if (!o(t2, r2, e2, i[d2], i[d2 + 1]))
      return false;
  return true;
}
function o(t2, r2, o2, c2, u2) {
  if (!t2)
    return false;
  const f2 = n$1(r2, o2), { coords: s2, lengths: i } = t2;
  let l2 = false, d2 = 0;
  for (const n2 of i)
    l2 = e$1(l2, s2, f2, d2, n2, c2, u2), d2 += n2 * f2;
  return l2;
}
function e$1(n2, t2, r2, o2, e2, c2, u2) {
  let f2 = n2, s2 = o2;
  for (let i = o2, l2 = o2 + e2 * r2; i < l2; i += r2) {
    s2 = i + r2, s2 === l2 && (s2 = o2);
    const n3 = t2[i], e3 = t2[i + 1], d2 = t2[s2], g2 = t2[s2 + 1];
    (e3 < u2 && g2 >= u2 || g2 < u2 && e3 >= u2) && n3 + (u2 - e3) / (g2 - e3) * (d2 - n3) < c2 && (f2 = !f2);
  }
  return f2;
}
const f = "unsupported-query", R = { esriSpatialRelIntersects: "intersects", esriSpatialRelContains: "contains", esriSpatialRelCrosses: "crosses", esriSpatialRelDisjoint: "disjoint", esriSpatialRelEnvelopeIntersects: "intersects", esriSpatialRelIndexIntersects: null, esriSpatialRelOverlaps: "overlaps", esriSpatialRelTouches: "touches", esriSpatialRelWithin: "within", esriSpatialRelRelation: null }, S = { spatialRelationship: { esriSpatialRelIntersects: true, esriSpatialRelContains: true, esriSpatialRelWithin: true, esriSpatialRelCrosses: true, esriSpatialRelDisjoint: true, esriSpatialRelTouches: true, esriSpatialRelOverlaps: true, esriSpatialRelEnvelopeIntersects: true, esriSpatialRelIndexIntersects: false, esriSpatialRelRelation: false }, queryGeometry: { esriGeometryPoint: true, esriGeometryMultipoint: true, esriGeometryPolyline: true, esriGeometryPolygon: true, esriGeometryEnvelope: true }, layerGeometry: { esriGeometryPoint: true, esriGeometryMultipoint: true, esriGeometryPolyline: true, esriGeometryPolygon: true, esriGeometryEnvelope: false } };
function G(e2) {
  return null != e2 && true === S.spatialRelationship[e2];
}
function g(e2) {
  return null != e2 && true === S.queryGeometry[p$1(e2)];
}
function j(e2) {
  return null != e2 && true === S.layerGeometry[e2];
}
function h() {
  return import("./chunk-7UKjY7OO.js");
}
function v(e2, n2, l2, c2, f2) {
  if (f$3(n2) && "esriGeometryPoint" === l2 && ("esriSpatialRelIntersects" === e2 || "esriSpatialRelContains" === e2)) {
    const e3 = K(new e$2(), n2, false, false);
    return Promise.resolve((r2) => t$1(e3, false, false, r2));
  }
  if (f$3(n2) && "esriGeometryMultipoint" === l2) {
    const r$12 = K(new e$2(), n2, false, false);
    if ("esriSpatialRelContains" === e2)
      return Promise.resolve((e3) => r(r$12, false, false, e3, c2, f2));
  }
  if (m$1(n2) && "esriGeometryPoint" === l2 && ("esriSpatialRelIntersects" === e2 || "esriSpatialRelContains" === e2))
    return Promise.resolve((e3) => t$3(n2, a(l2, c2, f2, e3)));
  if (m$1(n2) && "esriGeometryMultipoint" === l2 && "esriSpatialRelContains" === e2)
    return Promise.resolve((e3) => r$1(n2, a(l2, c2, f2, e3)));
  if (m$1(n2) && "esriSpatialRelIntersects" === e2) {
    const e3 = s(l2);
    return Promise.resolve((r2) => e3(n2, a(l2, c2, f2, r2)));
  }
  return h().then((r2) => {
    const t2 = r2[R[e2]].bind(null, n2.spatialReference, n2);
    return (e3) => t2(a(l2, c2, f2, e3));
  });
}
async function P(r2, t2, i) {
  const { spatialRel: s2, geometry: o2 } = r2;
  if (o2) {
    if (!G(s2))
      throw new s$3(f, "Unsupported query spatial relationship", { query: r2 });
    if (N(o2.spatialReference) && N(i)) {
      if (!g(o2))
        throw new s$3(f, "Unsupported query geometry type", { query: r2 });
      if (!j(t2))
        throw new s$3(f, "Unsupported layer geometry type", { query: r2 });
      if (r2.outSR)
        return x$1(r2.geometry?.spatialReference, r2.outSR);
    }
  }
}
function I(e2) {
  if (m$1(e2))
    return true;
  if (f$3(e2)) {
    for (const r2 of e2.rings) {
      if (5 !== r2.length)
        return false;
      if (r2[0][0] !== r2[1][0] || r2[0][0] !== r2[4][0] || r2[2][0] !== r2[3][0] || r2[0][1] !== r2[3][1] || r2[0][1] !== r2[4][1] || r2[1][1] !== r2[2][1])
        return false;
    }
    return true;
  }
  return false;
}
async function n(n2, t2) {
  if (!n2)
    return null;
  const l2 = t2.featureAdapter, { startTimeField: u2, endTimeField: e2 } = n2;
  let r2 = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
  if (u2 && e2)
    await t2.forEach((n3) => {
      const t3 = l2.getAttribute(n3, u2), o2 = l2.getAttribute(n3, e2);
      null == t3 || isNaN(t3) || (r2 = Math.min(r2, t3)), null == o2 || isNaN(o2) || (i = Math.max(i, o2));
    });
  else {
    const n3 = u2 || e2;
    await t2.forEach((t3) => {
      const u3 = l2.getAttribute(t3, n3);
      null == u3 || isNaN(u3) || (r2 = Math.min(r2, u3), i = Math.max(i, u3));
    });
  }
  return { start: r2, end: i };
}
function t(n2, t2, r2) {
  if (!t2 || !n2)
    return null;
  const { startTimeField: i, endTimeField: o2 } = n2;
  if (!i && !o2)
    return null;
  const { start: s2, end: a2 } = t2;
  if (null === s2 && null === a2)
    return null;
  if (void 0 === s2 && void 0 === a2)
    return e();
  const c2 = r2.getAttributeAsTimestamp?.bind(r2) ?? r2.getAttribute.bind(r2);
  return i && o2 ? l(c2, i, o2, s2, a2) : u(c2, i || o2, s2, a2);
}
function l(n2, t2, l2, u2, e2) {
  return null != u2 && null != e2 ? (r2) => {
    const i = n2(r2, t2), o2 = n2(r2, l2);
    return (null == i || i <= e2) && (null == o2 || o2 >= u2);
  } : null != u2 ? (t3) => {
    const e3 = n2(t3, l2);
    return null == e3 || e3 >= u2;
  } : null != e2 ? (l3) => {
    const u3 = n2(l3, t2);
    return null == u3 || u3 <= e2;
  } : void 0;
}
function u(n2, t2, l2, u2) {
  return null != l2 && null != u2 && l2 === u2 ? (u3) => n2(u3, t2) === l2 : null != l2 && null != u2 ? (e2) => {
    const r2 = n2(e2, t2);
    return null != r2 && r2 >= l2 && r2 <= u2;
  } : null != l2 ? (u3) => {
    const e2 = n2(u3, t2);
    return null != e2 && e2 >= l2;
  } : null != u2 ? (l3) => {
    const e2 = n2(l3, t2);
    return null != e2 && e2 <= u2;
  } : void 0;
}
function e() {
  return () => false;
}
export {
  I,
  P,
  S$1 as S,
  a,
  j$1 as b,
  b as c,
  g$1 as g,
  h$2 as h,
  j$2 as j,
  n,
  t,
  v,
  x$1 as x,
  y$1 as y
};
