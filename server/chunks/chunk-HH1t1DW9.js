import { fZ as e$1, n3 as W, n1 as r$3, b1 as s$1, n4 as r$4, b8 as a$3, n5 as c$3 } from "./chunk-KFNcxJaF.js";
function i$2(e2 = false, t2) {
  if (e2) {
    const { elevationInfo: e3, alignPointsInFeatures: s2 } = t2;
    return new c$2(e3, s2);
  }
  return new a$2();
}
let a$2 = class a {
  async alignCandidates(e2, t2, s2) {
    return e2;
  }
  notifyElevationSourceChange() {
  }
};
const r$2 = 1024;
let c$2 = class c {
  constructor(t2, s2) {
    this._elevationInfo = t2, this._alignPointsInFeatures = s2, this._alignmentsCache = new e$1(r$2), this._cacheVersion = 0;
  }
  async alignCandidates(e2, t2, s2) {
    const n3 = this._elevationInfo;
    return null == n3 || "absolute-height" !== n3.mode || n3.featureExpressionInfo ? this._alignComputedElevationCandidates(e2, t2, s2) : (this._alignAbsoluteElevationCandidates(e2, t2, n3), e2);
  }
  notifyElevationSourceChange() {
    this._alignmentsCache.clear(), this._cacheVersion++;
  }
  _alignAbsoluteElevationCandidates(e2, t2, s2) {
    const { offset: i2, unit: a3 } = s2;
    if (null == i2)
      return;
    const r2 = W(t2), c3 = i2 * (r$4(a3 ?? "meters") / r2);
    for (const n3 of e2)
      switch (n3.type) {
        case "edge":
          n3.start.z += c3, n3.end.z += c3;
          continue;
        case "vertex":
          n3.target.z += c3;
          continue;
      }
  }
  async _alignComputedElevationCandidates(e2, n3, o2) {
    const i2 = /* @__PURE__ */ new Map();
    for (const s2 of e2)
      r$3(i2, s2.objectId, d).push(s2);
    const [a3, r2, c3] = this._prepareQuery(i2, n3), l2 = await this._alignPointsInFeatures(a3, o2);
    s$1(o2);
    if (c3 !== this._cacheVersion)
      return this._alignComputedElevationCandidates(e2, n3, o2);
    this._applyCacheAndResponse(a3, l2, r2);
    const { drapedObjectIds: h2, failedObjectIds: u } = l2, p = [];
    for (const t2 of e2) {
      const { objectId: e3 } = t2;
      h2.has(e3) && "edge" === t2.type && (t2.draped = true), u.has(e3) || p.push(t2);
    }
    return p;
  }
  _prepareQuery(e2, t2) {
    const s2 = [], n3 = [];
    for (const [o2, i2] of e2) {
      const e3 = [];
      for (const t3 of i2)
        this._addToQueriesOrCachedResult(o2, t3.target, e3, n3), "edge" === t3.type && (this._addToQueriesOrCachedResult(o2, t3.start, e3, n3), this._addToQueriesOrCachedResult(o2, t3.end, e3, n3));
      0 !== e3.length && s2.push({ objectId: o2, points: e3 });
    }
    return [{ spatialReference: t2.toJSON(), pointsInFeatures: s2 }, n3, this._cacheVersion];
  }
  _addToQueriesOrCachedResult(e2, t2, s2, n3) {
    const o2 = h(e2, t2), i2 = this._alignmentsCache.get(o2);
    null == i2 ? s2.push(t2) : n3.push(new l(t2, i2));
  }
  _applyCacheAndResponse(e2, { elevations: t2, drapedObjectIds: s2, failedObjectIds: n3 }, o2) {
    for (const r2 of o2)
      r2.apply();
    let i2 = 0;
    const a3 = this._alignmentsCache;
    for (const { objectId: r2, points: c3 } of e2.pointsInFeatures) {
      if (n3.has(r2)) {
        i2 += c3.length;
        continue;
      }
      const e3 = !s2.has(r2);
      for (const s3 of c3) {
        const n4 = h(r2, s3), o3 = t2[i2++];
        s3.z = o3, e3 && a3.put(n4, o3, 1);
      }
    }
  }
};
class l {
  constructor(e2, t2) {
    this.point = e2, this.z = t2;
  }
  apply() {
    this.point.z = this.z;
  }
}
function h(e2, { x: t2, y: s2, z: n3, spatialReference: o2 }) {
  return `${e2}-${t2}-${s2}-${n3 ?? 0}}-wkid:${o2?.wkid}`;
}
function d() {
  return [];
}
class t {
  filter(t2, n3) {
    return n3;
  }
  notifyElevationSourceChange() {
  }
}
let n$1 = class n {
  filter(t2, n3) {
    const { point: r2, distance: c3 } = t2, { z: i2 } = r2;
    if (!(null != i2))
      return n3;
    if (0 === n3.length)
      return n3;
    const o2 = s(c3), u = this._updateCandidatesTo3D(n3, r2, o2).filter(e);
    return u.sort(a$1), u;
  }
  _updateCandidatesTo3D(t2, n3, e2) {
    for (const r2 of t2)
      switch (r2.type) {
        case "edge":
          c$1(r2, n3, e2);
          continue;
        case "vertex":
          o(r2, n3, e2);
          continue;
      }
    return t2;
  }
};
function e(t2) {
  return t2.distance <= 1;
}
function r$1(e2 = false) {
  return e2 ? new n$1() : new t();
}
function c$1(t2, n3, { x: e2, y: r2, z: c3 }) {
  const { start: o2, end: s2, target: a3 } = t2;
  t2.draped || i$1(a3, n3, o2, s2);
  const u = (n3.x - a3.x) / e2, d2 = (n3.y - a3.y) / r2, f = (n3.z - a3.z) / c3;
  t2.distance = Math.sqrt(u * u + d2 * d2 + f * f);
}
function i$1(t2, n3, e2, r2) {
  const c3 = r2.x - e2.x, i2 = r2.y - e2.y, o2 = r2.z - e2.z, s2 = c3 * c3 + i2 * i2 + o2 * o2, a3 = (n3.x - e2.x) * c3 + (n3.y - e2.y) * i2 + o2 * (n3.z - e2.z), u = Math.min(1, Math.max(0, a3 / s2)), d2 = e2.x + c3 * u, f = e2.y + i2 * u, x = e2.z + o2 * u;
  t2.x = d2, t2.y = f, t2.z = x;
}
function o(t2, n3, { x: e2, y: r2, z: c3 }) {
  const { target: i2 } = t2, o2 = (n3.x - i2.x) / e2, s2 = (n3.y - i2.y) / r2, a3 = (n3.z - i2.z) / c3, u = Math.sqrt(o2 * o2 + s2 * s2 + a3 * a3);
  t2.distance = u;
}
function s(t2) {
  return "number" == typeof t2 ? { x: t2, y: t2, z: t2 } : t2;
}
function a$1(t2, n3) {
  return t2.distance - n3.distance;
}
function n2(t2 = false, e2) {
  return t2 ? new i(e2) : new c2();
}
class c2 {
  async fetch() {
    return [];
  }
  notifySymbologyChange() {
  }
}
const r = 1024;
class i {
  constructor(t2) {
    this._getSymbologyCandidates = t2, this._candidatesCache = new e$1(r), this._cacheVersion = 0;
  }
  async fetch(e2, o2) {
    if (0 === e2.length)
      return [];
    const n3 = [], c3 = [], r2 = this._candidatesCache;
    for (const s2 of e2) {
      const e3 = a2(s2), o3 = r2.get(e3);
      if (o3)
        for (const s3 of o3)
          c3.push(a$3(s3));
      else
        n3.push(s2), r2.put(e3, [], 1);
    }
    if (0 === n3.length)
      return c3;
    const i2 = this._cacheVersion, { candidates: h2, sourceCandidateIndices: d2 } = await this._getSymbologyCandidates(n3, o2);
    s$1(o2);
    if (i2 !== this._cacheVersion)
      return this.fetch(e2, o2);
    const f = [], { length: g } = h2;
    for (let s2 = 0; s2 < g; ++s2) {
      const e3 = h2[s2], o3 = a2(n3[d2[s2]]), c4 = r2.get(o3);
      c4.push(e3), r2.put(o3, c4, c4.length), f.push(a$3(e3));
    }
    return c3.concat(f);
  }
  notifySymbologyChange() {
    this._candidatesCache.clear(), this._cacheVersion++;
  }
}
function a2(t2) {
  switch (t2.type) {
    case "vertex": {
      const { objectId: e2, target: s2 } = t2, n3 = `${e2}-vertex-${s2.x}-${s2.y}-${s2.z ?? 0}`;
      return c$3(n3).toString();
    }
    case "edge": {
      const { objectId: e2, start: s2, end: n3 } = t2, c3 = `${e2}-edge-${s2.x}-${s2.y}-${s2.z ?? 0}-to-${n3.x}-${n3.y}-${n3.z ?? 0}`;
      return c$3(c3).toString();
    }
    default:
      return "";
  }
}
export {
  i$2 as i,
  n2 as n,
  r$1 as r
};
