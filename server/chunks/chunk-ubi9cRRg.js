import { hS as t, ii as t$1, aE as f$1, aF as s, aC as u$2, aD as m$2, aB as l$2, b8 as a$1, ij as c$1, ik as f$2, il as i, aw as u$3, im as f$3, io as G } from "./chunk-KFNcxJaF.js";
class a {
  static fromOptimized(t2, e, s2 = false, i2 = false) {
    return new p$1().initialize(t2, e, s2, i2, 1);
  }
  static fromJSON(t2, e = false, s2 = false) {
    const [i2, h2] = u$1(t2);
    return new d$1().initialize(i2, h2, e, s2, 1);
  }
  static fromOptimizedCIM(t2, e, s2 = false, i2 = false) {
    return new m$1().initialize(t2, e, s2, i2, 1);
  }
  static fromJSONCIM(t2, e = false, s2 = false) {
    const [i2, h2] = u$1(t2);
    return new y$1().initialize(i2, h2, e, s2, 1);
  }
  static fromFeatureSetReader(t2) {
    const e = t2.readGeometryForDisplay(), s2 = t2.geometryType;
    return e && s2 ? this.fromOptimized(e, s2) : null;
  }
  static fromFeatureSetReaderCIM(t2) {
    const e = t2.readGeometryForDisplay(), s2 = t2.geometryType;
    return e && s2 ? this.fromOptimizedCIM(e, s2) : null;
  }
  static createEmptyOptimized(t$12, e = false, s2 = false) {
    return new p$1().initialize(new t(), t$12, e, s2, 1);
  }
  static createEmptyJSON(t2, e = false, s2 = false) {
    return new d$1().initialize([], t2, e, s2, 1);
  }
  static createEmptyOptimizedCIM(t$12, e = false, s2 = false) {
    return new m$1().initialize(new t(), t$12, e, s2, 1);
  }
  static createEmptyJSONCIM(t2, e = false, s2 = false) {
    return new y$1().initialize([], t2, e, s2, 1);
  }
  asJSON() {
    const t2 = t$1(this);
    return "esriGeometryEnvelope" === this.geometryType ? { xmin: t2[0][0][0], ymin: t2[0][0][1], xmax: t2[0][2][0], ymax: t2[0][2][1] } : "esriGeometryMultipoint" === this.geometryType ? { points: t2.flat() } : "esriGeometryPoint" === this.geometryType ? { x: t2[0][0][0], y: t2[0][0][1] } : "esriGeometryPolygon" === this.geometryType ? { rings: t2 } : { paths: t2 };
  }
  getCurrentRingArea() {
    if (!this || this.pathSize < 3)
      return 0;
    let t2, e, s2 = 0;
    if (this.seekPathStart(), !this.nextPoint())
      return 0;
    t2 = this.x, e = this.y;
    const i2 = t2, h2 = e;
    for (; this.nextPoint(); )
      s2 += (t2 - this.x) * (e + this.y), t2 = this.x, e = this.y;
    return s2 += (t2 - i2) * (e + h2), -0.5 * s2;
  }
  invertY() {
    this.yFactor *= -1;
  }
}
let p$1 = class p extends a {
  constructor() {
    super(...arguments), this._end = -1;
  }
  initialize(t2, e, s2, i2, h2) {
    return this.hasZ = s2, this.hasM = i2, this.geometryType = e, this._stride = 2 + Number(s2) + Number(i2), this._geometry = t2, this._pathIndex = -1, this._pathOffset = 0, this._pointOffset = -this._stride, this._end = -1, this.yFactor = h2, this;
  }
  reset() {
    this.initialize(this._geometry, this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  seekPath(t2) {
    if (t2 >= 0 && t2 < this.totalSize) {
      if (this._pathIndex < t2)
        for (; this._pathIndex < t2 && this.nextPath(); )
          ;
      else if (this._pathIndex > t2)
        for (; this._pathIndex > t2 && this.prevPath(); )
          ;
      return true;
    }
    return false;
  }
  seekPathStart() {
    this._pointOffset = this._pathOffset - this._stride;
  }
  seekPathEnd() {
    this._pointOffset = this._end;
  }
  seekInPath(t2) {
    const e = this._pathOffset + t2 * this._stride;
    return e >= 0 && e < this._end && (this._pointOffset = e, true);
  }
  nextPoint() {
    return (this._pointOffset += this._stride) < this._end;
  }
  prevPoint() {
    return (this._pointOffset -= this._stride) >= this._pathOffset;
  }
  nextPath() {
    if (this._pathIndex >= 0) {
      const t3 = this._geometry.isPoint ? 1 : this._geometry.lengths[this._pathIndex];
      this._pathOffset += this._stride * t3;
    }
    this._pointOffset = this._pathOffset - this._stride;
    const t2 = this._geometry.isPoint ? 1 : this._geometry.lengths[this._pathIndex + 1];
    return this._end = this._pointOffset + this._stride + this._stride * t2, ++this._pathIndex < this.totalSize;
  }
  prevPath() {
    this._end = this._pathOffset;
    const t2 = this._geometry.isPoint ? 1 : this._geometry.lengths[this._pathIndex - 1];
    return this._pathOffset -= this._stride * t2, this._pointOffset = this._pathOffset - this._stride, --this._pathIndex >= 0;
  }
  pathLength() {
    const t2 = this._end, e = this._stride, s2 = this._geometry.coords;
    let i2 = 0;
    for (let h2 = this._pathOffset + e; h2 < t2; h2 += e) {
      const t3 = s2[h2 - e], r = s2[h2 - e + 1], n = s2[h2] - t3, o = s2[h2 + 1] - r;
      i2 += Math.sqrt(n * n + o * o);
    }
    return i2;
  }
  startPath() {
    this._geometry.lengths.push(0);
  }
  pushPath(t2) {
    this.startPath(), this.pushPoints(t2);
  }
  pushPoint(t2) {
    for (let e = 0; e < this._stride; ++e)
      this._geometry.coords.push(t2[e]);
    this._geometry.lengths[this.totalSize - 1]++;
  }
  pushXY(t2, e) {
    this._geometry.coords.push(t2, e), this._geometry.lengths[this.totalSize - 1]++;
  }
  pushPoints(t2) {
    for (const e of t2)
      for (let t3 = 0; t3 < this._stride; ++t3)
        this._geometry.coords.push(e[t3]);
    this._geometry.lengths[this.totalSize - 1] += t2.length;
  }
  pushCursor(t2) {
    const e = t2.asOptimized();
    this._geometry.coords.push(...e.coords), this._geometry.lengths.push(...e.lengths);
  }
  asOptimized() {
    const t2 = this._geometry.clone();
    if (1 !== this.yFactor)
      for (let e = 1; e < t2.coords.length; e += this._stride)
        t2.coords[e] *= this.yFactor;
    return "esriGeometryPoint" === this.geometryType && (t2.lengths.length = 0), t2;
  }
  isClosed() {
    const t2 = this._geometry.coords, e = this._pathOffset, s2 = this._end - this._stride;
    for (let i2 = 0; i2 < this._stride; i2++)
      if (t2[e + i2] !== t2[s2 + i2])
        return false;
    return true;
  }
  clone() {
    return new p().initialize(this._geometry.clone(), this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  get totalPoints() {
    return this._geometry.coords.length / this._stride;
  }
  get pathSize() {
    const { lengths: t2 } = this._geometry;
    return this._pathIndex < 0 || this._pathIndex > t2.length - 1 ? 0 : t2[this._pathIndex];
  }
  get totalSize() {
    return this._geometry.lengths.length;
  }
  get x() {
    return this._geometry.coords[this._pointOffset];
  }
  set x(t2) {
    this._geometry.coords[this._pointOffset] = t2;
  }
  get y() {
    return this.yFactor * this._geometry.coords[this._pointOffset + 1];
  }
  set y(t2) {
    this._geometry.coords[this._pointOffset + 1] = this.yFactor * t2;
  }
  get z() {
    return this._geometry.coords[this._pointOffset + 2];
  }
  set z(t2) {
    this._geometry.coords[this._pointOffset + 2] = t2;
  }
  get m() {
    const t2 = this.hasZ ? 3 : 2;
    return this._geometry.coords[this._pointOffset + t2];
  }
  set m(t2) {
    this._geometry.coords[this._pointOffset + 3] = t2;
  }
  get pathIndex() {
    return this._pathIndex;
  }
  get _coordIndex() {
    return this._pointOffset / this._stride;
  }
};
function _(t2) {
  const e = [t2.x, t2.y];
  return t2.z && e.push(t2.z), t2.m && e.push(t2.m), e;
}
function u$1(t2) {
  return f$1(t2) ? [t2.rings, "esriGeometryPolygon"] : s(t2) ? [t2.paths, "esriGeometryPolyline"] : u$2(t2) ? [[t2.points], "esriGeometryMultipoint"] : m$2(t2) ? [[[[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]]], "esriGeometryEnvelope"] : l$2(t2) ? [[[_(t2)]], "esriGeometryPoint"] : [[], "esriGeometryPolyline"];
}
let d$1 = class d extends a {
  initialize(t2, e, s2, i2, h2) {
    return this._paths = t2, this.geometryType = e, this.hasZ = s2, this.hasM = i2, this._pathIndex = this._pointIndex = -1, this.yFactor = h2, this._mIndex = this.hasZ ? 3 : 2, this;
  }
  reset() {
    this._pathIndex = this._pointIndex = -1;
  }
  seekPath(t2) {
    return t2 >= 0 && t2 < this.totalSize && (this._pathIndex = t2, this._pointIndex = -1, this._currentPath = this._paths[t2], true);
  }
  seekPathStart() {
    this._pointIndex = -1;
  }
  seekPathEnd() {
    this._pointIndex = this._currentPath.length;
  }
  seekInPath(t2) {
    return t2 >= 0 && t2 < this._currentPath.length && (this._pointIndex = t2, this._currentPoint = this._currentPath[this._pointIndex], true);
  }
  nextPoint() {
    return this._currentPoint = this._currentPath[++this._pointIndex], this._pointIndex < this._currentPath.length;
  }
  prevPoint() {
    return this._currentPoint = this._currentPath[--this._pointIndex], this._pointIndex >= 0;
  }
  nextPath() {
    return this._pointIndex = -1, this._currentPath = this._paths[++this._pathIndex], this._pathIndex < this.totalSize;
  }
  prevPath() {
    return this._pointIndex = -1, this._currentPath = this._paths[--this._pathIndex], this._pathIndex >= 0;
  }
  pathLength() {
    const t2 = this._currentPath.length, e = this._currentPath;
    let s2 = 0;
    for (let i2 = 1; i2 < t2; i2++) {
      const t3 = e[i2 - 1], h2 = e[i2], r = t3[0], n = t3[1], o = h2[0] - r, a2 = h2[1] - n;
      s2 += Math.sqrt(o * o + a2 * a2);
    }
    return s2;
  }
  startPath() {
    this._paths.push([]);
  }
  pushPath(t2) {
    this._paths.push(t2);
  }
  pushPoint(t2) {
    this._paths[this.totalSize - 1].push(t2);
  }
  pushXY(t2, e) {
    this._paths[this.totalSize - 1].push([t2, e]);
  }
  pushPoints(t2) {
    this._paths[this.totalSize - 1].push(...t2);
  }
  pushCursor(t2) {
    const s2 = t$1(t2);
    for (const e of s2)
      this.pushPath(e);
  }
  asOptimized() {
    const t$12 = new t();
    if ("esriGeometryPoint" === this.geometryType)
      t$12.coords.push(...this._paths[0][0]), t$12.lengths.length = 0;
    else
      for (const e of this._paths) {
        for (const s2 of e)
          t$12.coords.push(s2[0]), t$12.coords.push(s2[1] * this.yFactor), this.hasZ && t$12.coords.push(s2[2]), this.hasM && t$12.coords.push(s2[this._mIndex]);
        t$12.lengths.push(e.length);
      }
    return t$12;
  }
  isClosed() {
    const t2 = this._currentPath[0], e = this._currentPath[this._currentPath.length - 1];
    for (let s2 = 0; s2 < t2.length; s2++)
      if (t2[s2] !== e[s2])
        return false;
    return true;
  }
  clone() {
    return new d().initialize(a$1(this._paths), this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  get totalPoints() {
    return this._paths.map((t2) => t2.length).reduce((t2, e) => t2 + e);
  }
  get pathSize() {
    return this._pathIndex < 0 || this._pathIndex > this.totalSize - 1 ? -1 : this._paths[this._pathIndex].length;
  }
  get totalSize() {
    return this._paths.length;
  }
  get x() {
    return this._currentPoint[0];
  }
  set x(t2) {
    this._currentPoint[0] = t2;
  }
  get y() {
    return this.yFactor * this._currentPoint[1];
  }
  set y(t2) {
    this._currentPoint[1] = this.yFactor * t2;
  }
  get z() {
    return this._currentPoint[2];
  }
  set z(t2) {
    this._currentPoint[2] = t2;
  }
  get m() {
    return this._currentPoint[this._mIndex];
  }
  set m(t2) {
    this._currentPoint[this._mIndex] = t2;
  }
  get pathIndex() {
    return this._pathIndex;
  }
};
const c = 4, l$1 = 1;
let m$1 = class m extends p$1 {
  initialize(t2, e, s2, i2, h2) {
    return super.initialize(t2, e, s2, i2, h2), this._controlPoints || (this._controlPoints = this._controlPoints = new Array(this.totalSize).fill(void 0).map((t3) => /* @__PURE__ */ new Set())), this;
  }
  startPath() {
    super.startPath(), this._controlPoints.push(/* @__PURE__ */ new Set());
  }
  clone() {
    const t2 = new m().initialize(this._geometry.clone(), this.geometryType, this.hasZ, this.hasM, this.yFactor);
    return t2._controlPoints = this._controlPoints, t2;
  }
  setControlPoint() {
    this._controlPoints[this.pathIndex].add(this._coordIndex);
  }
  getControlPoint() {
    return this._controlPoints[this.pathIndex].has(this._coordIndex);
  }
  setControlPointAt(t2) {
    this._controlPoints[this.pathIndex].add(t2);
  }
  getControlPointAt(t2) {
    return this._controlPoints[this.pathIndex].has(t2);
  }
};
let y$1 = class y extends d$1 {
  initialize(t2, e, s2, i2, h2) {
    return super.initialize(t2, e, s2, i2, h2);
  }
  clone() {
    return new y().initialize(a$1(this._paths), this.geometryType, this.hasZ, this.hasM, 1);
  }
  setControlPoint() {
    this._paths[this.pathIndex][this._pointIndex][c] = l$1;
  }
  getControlPoint() {
    return this._paths[this.pathIndex][this._pointIndex][c] === l$1;
  }
  setControlPointAt(t2) {
    this._paths[this.pathIndex][t2][c] = l$1;
  }
  getControlPointAt(t2) {
    return this._paths[this.pathIndex][t2][c] === l$1;
  }
};
const N = 100 * 222045e-21;
function l(t2) {
  if (0 === t2.totalSize)
    return null;
  const a2 = c$1(t2);
  if (!a2)
    return null;
  const o = 4 * (Math.abs(a2[0]) + Math.abs(a2[2]) + Math.abs(a2[1]) + Math.abs(a2[3]) + 1) * N;
  let s2 = 0, c2 = 0;
  t2.reset();
  for (let e = 0; t2.nextPath(); e++) {
    const n = t2.getCurrentRingArea();
    n > c2 && (c2 = n, s2 = e);
  }
  if (t2.seekPath(s2), 0 === t2.pathSize)
    return null;
  t2.seekPathStart();
  const l2 = f$2(t2);
  if (Math.abs(c2) <= 2 * o * o)
    return [(l2[0] + l2[2]) / 2, (l2[1] + l2[3]) / 2];
  t2.seekPathStart();
  const x2 = i(t2, u$3());
  if (null === x2)
    return null;
  if (t2.totalPoints < 4)
    return x2;
  const m3 = [[NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN]], d3 = [NaN, NaN, NaN, NaN], P2 = [NaN, NaN, NaN, NaN];
  let y3 = false, M2 = f(x2, t2, true);
  0 === M2.distance && (y3 = true, m3[0][0] = x2[0], m3[0][1] = x2[1], M2 = f(x2, t2, false)), d3[0] = M2.distance, P2[0] = 0;
  const b2 = [NaN, NaN];
  let S = false, k = 0.25, z = -1, g = NaN;
  do {
    if (g = NaN, m3[1] = h(t2, w(l2[0], l2[2], k), o, a2), isNaN(m3[1][0]) || isNaN(m3[1][1]) || (M2 = f(m3[1], t2, false), g = M2.distance), !isNaN(g) && g > o && u(m3[1], t2))
      S = true, d3[1] = g, P2[1] = p2(m3[1], x2);
    else if (!isNaN(g) && g > z && (z = g, b2[0] = m3[1][0], b2[1] = m3[1][1]), k -= 0.01, k < 0.1) {
      if (!(z >= 0))
        break;
      S = true, d3[1] = z, m3[1][0] = b2[0], m3[1][1] = b2[1], P2[1] = p2(m3[1], x2);
    }
  } while (!S);
  S = false, k = 0.5, z = -1;
  let q = 0.01, j = 1;
  do {
    if (g = NaN, m3[2] = h(t2, w(l2[0], l2[2], k), o, a2), isNaN(m3[2][0]) || isNaN(m3[2][1]) || (M2 = f(m3[2], t2, false), g = M2.distance), !isNaN(g) && g > o && u(m3[2], t2))
      S = true, d3[2] = g, P2[2] = p2(m3[2], x2);
    else if (!isNaN(g) && g > z)
      z = g, b2[0] = m3[2][0], b2[1] = m3[2][1];
    else if (g > z && (z = g, b2[0] = m3[2][0], b2[1] = m3[2][1]), k = 0.5 + q * j, q += 0.01, j *= -1, k < 0.3 || k > 0.7) {
      if (!(z >= 0))
        break;
      S = true, d3[2] = z, m3[2][0] = b2[0], m3[2][1] = b2[1], P2[2] = p2(m3[2], x2);
    }
  } while (!S);
  S = false, k = 0.75, z = -1;
  do {
    if (g = NaN, m3[3] = h(t2, w(l2[0], l2[2], k), o, a2), isNaN(m3[3][0]) || isNaN(m3[3][1]) || (M2 = f(m3[3], t2, false), g = M2.distance), !isNaN(g) && g > o && u(m3[3], t2))
      S = true, d3[3] = g, P2[3] = p2(m3[3], x2);
    else if (g > z && (z = g, b2[0] = m3[3][0], b2[1] = m3[3][1]), k += 0.01, k > 0.9) {
      if (!(z >= 0))
        break;
      S = true, d3[3] = z, m3[3][0] = b2[0], m3[3][1] = b2[1], P2[3] = p2(m3[3], x2);
    }
  } while (!S);
  const T = [0, 1, 2, 3], D = y3 ? 0 : 1;
  let R;
  for (let e = D; e < 4; e++)
    for (let t3 = D; t3 < 3; t3++) {
      const e2 = P2[t3], n = P2[t3 + 1];
      C(e2, n) > 0 && (R = T[t3], T[t3] = T[t3 + 1], T[t3 + 1] = R, P2[t3] = n, P2[t3 + 1] = e2);
    }
  let B = D, Q = 0, U = 0;
  for (let e = D; e < 4; e++) {
    switch (e) {
      case 0:
        U = 2 * d3[T[e]];
        break;
      case 1:
        U = 1.66666666 * d3[T[e]];
        break;
      case 2:
        U = 1.33333333 * d3[T[e]];
        break;
      case 3:
        U = d3[T[e]];
    }
    U > Q && (Q = U, B = T[e]);
  }
  return m3[B];
}
function u(t2, e) {
  let n, i2, r, a2, o = 0;
  for (e.reset(); e.nextPath() && e.nextPoint(); )
    for (n = e.x, i2 = e.y; e.nextPoint(); n = r, i2 = a2) {
      if (r = e.x, a2 = e.y, i2 > t2[1] == a2 > t2[1])
        continue;
      (r - n) * (t2[1] - i2) - (a2 - i2) * (t2[0] - n) > 0 ? o++ : o--;
    }
  return 0 !== o;
}
function f(t2, e, n) {
  if (n && u(t2, e))
    return { coord: t2, distance: 0 };
  let i2 = 1 / 0, r = 0, a2 = 0, s2 = [0, 0], c2 = [0, 0];
  const N2 = [0, 0];
  for (e.reset(); e.nextPath() && e.nextPoint(); )
    if (!(e.pathSize < 2))
      for (s2[0] = e.x, s2[1] = e.y; e.nextPoint(); s2 = c2) {
        c2 = [e.x, e.y], f$3(N2, t2, s2, c2);
        const n2 = p2(t2, N2);
        n2 < i2 && (i2 = n2, r = N2[0], a2 = N2[1]);
      }
  return { coord: [r, a2], distance: Math.sqrt(i2) };
}
function h(t2, n, i2, r) {
  const a2 = [n, 0];
  let o = 1 / 0, s2 = 1 / 0, N2 = false, l2 = false;
  const u2 = [[n, r[1] - 1], [n, r[3] + 1]], f2 = [0, 0], h2 = [0, 0], m3 = [0, 0], d3 = [[0, 0], [0, 0]], P2 = u$3();
  for (t2.reset(); t2.nextPath() && t2.nextPoint(); )
    if (!(t2.pathSize < 2))
      for (d3[0][0] = t2.x, d3[0][1] = t2.y; t2.nextPoint(); d3[0][0] = d3[1][0], d3[0][1] = d3[1][1]) {
        if (d3[1][0] = t2.x, d3[1][1] = t2.y, null === x(P2, d3))
          continue;
        if (h2[0] = u2[0][0], h2[1] = u2[0][1], m3[0] = u2[1][0], m3[1] = u2[1][1], 0 === M(P2, h2, m3))
          continue;
        if (!G(u2[0], u2[1], d3[0], d3[1], f2))
          continue;
        const e = f2[1];
        o > s2 ? e < o && (o = e, N2 = true) : e < s2 && (s2 = e, l2 = true);
      }
  return N2 && l2 ? a2[1] = (o + s2) / 2 : a2[0] = a2[1] = NaN, a2;
}
function x(t2, n) {
  if (n.length < 2)
    return null;
  t2 || (t2 = u$3());
  const [i2, r] = n[0], [a2, o] = n[1];
  return t2[0] = Math.min(i2, a2), t2[1] = Math.min(r, o), t2[2] = Math.max(i2, a2), t2[3] = Math.max(r, o), t2;
}
const m2 = 1, d2 = 4, P = 3, y2 = 12;
function M(t2, e, n) {
  let i2 = b(e, t2), r = b(n, t2);
  const a2 = t2[0], o = t2[1], s2 = t2[2], c2 = t2[3];
  if (i2 & r)
    return 0;
  if (!(i2 | r))
    return 4;
  const N2 = (i2 ? 1 : 0) | (r ? 2 : 0);
  do {
    const N3 = n[0] - e[0], l2 = n[1] - e[1];
    if (N3 > l2)
      i2 & P ? (i2 & m2 ? (e[1] += l2 * (a2 - e[0]) / N3, e[0] = a2) : (e[1] += l2 * (s2 - e[0]) / N3, e[0] = s2), i2 = b(e, t2)) : r & P ? (r & m2 ? (n[1] += l2 * (a2 - n[0]) / N3, n[0] = a2) : (n[1] += l2 * (s2 - n[0]) / N3, n[0] = s2), r = b(n, t2)) : i2 ? (i2 & d2 ? (e[0] += N3 * (o - e[1]) / l2, e[1] = o) : (e[0] += N3 * (c2 - e[1]) / l2, e[1] = c2), i2 = b(e, t2)) : (r & d2 ? (n[0] += N3 * (o - n[1]) / l2, n[1] = o) : (n[0] += N3 * (c2 - n[1]) / l2, n[1] = c2), r = b(n, t2));
    else if (i2 & y2 ? (i2 & d2 ? (e[0] += N3 * (o - e[1]) / l2, e[1] = o) : (e[0] += N3 * (c2 - e[1]) / l2, e[1] = c2), i2 = b(e, t2)) : r & y2 ? (r & d2 ? (n[0] += N3 * (o - n[1]) / l2, n[1] = o) : (n[0] += N3 * (c2 - n[1]) / l2, n[1] = c2), r = b(n, t2)) : i2 ? (i2 & m2 ? (e[1] += l2 * (a2 - e[0]) / N3, e[0] = a2) : (e[1] += l2 * (s2 - e[0]) / N3, e[0] = s2), i2 = b(e, t2)) : (r & m2 ? (n[1] += l2 * (a2 - n[0]) / N3, n[0] = a2) : (n[1] += l2 * (s2 - n[0]) / N3, n[0] = s2), r = b(n, t2)), i2 & r)
      return 0;
  } while (i2 | r);
  return N2;
}
function b(t2, e) {
  return (t2[0] < e[0] ? 1 : 0) | (t2[0] > e[2] ? 1 : 0) << 1 | (t2[1] < e[1] ? 1 : 0) << 2 | (t2[1] > e[3] ? 1 : 0) << 3;
}
function w(t2, e, n) {
  return t2 + (e - t2) * n;
}
function p2(t2, e) {
  return (t2[0] - e[0]) * (t2[0] - e[0]) + (t2[1] - e[1]) * (t2[1] - e[1]);
}
function C(t2, e) {
  if (t2 < e)
    return -1;
  if (t2 > e)
    return 1;
  if (t2 === e)
    return 0;
  const n = isNaN(t2), i2 = isNaN(e);
  return n < i2 ? -1 : n > i2 ? 1 : 0;
}
export {
  a,
  l
};
