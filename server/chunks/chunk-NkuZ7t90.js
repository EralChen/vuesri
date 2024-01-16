import { aw as u$1, ax as G, ay as a$1, az as s, aA as r, aB as l, aC as u, aD as m, aE as f$1, aF as s$1, aG as a$2, aH as s$2, aI as g$1, aJ as i } from "./chunk-KFNcxJaF.js";
function p(t) {
  return f(t, true);
}
function a(t) {
  return f(t, false);
}
function f(i$1, n) {
  if (null == i$1)
    return null;
  const p2 = i$1.spatialReference, a2 = G(p2), f2 = a$1(i$1) ? i$1.toJSON() : i$1;
  if (!a2)
    return f2;
  const I2 = s(p2) ? 102100 : 4326, g2 = r[I2].maxX, v2 = r[I2].minX;
  if (l(f2))
    return y(f2, g2, v2);
  if (u(f2))
    return f2.points = f2.points.map((t) => y(t, g2, v2)), f2;
  if (m(f2))
    return d(f2, a2);
  if (f$1(f2) || s$1(f2)) {
    const t = a$2(S, f2), i$12 = { xmin: t[0], ymin: t[1], xmax: t[2], ymax: t[3] }, e = i(i$12.xmin, v2) * (2 * g2), h = 0 === e ? f2 : s$2(f2, e);
    return i$12.xmin += e, i$12.xmax += e, i$12.xmax > g2 ? P(h, g2, n) : i$12.xmin < v2 ? P(h, v2, n) : h;
  }
  return f2;
}
function d(t, i2) {
  if (!i2)
    return t;
  const s2 = I(t, i2).map((t2) => t2.extent);
  return s2.length < 2 ? s2[0] || t : s2.length > 2 ? (t.xmin = i2.valid[0], t.xmax = i2.valid[1], t) : { rings: s2.map((t2) => [[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]]) };
}
function y(t, i$1, s2) {
  if (Array.isArray(t)) {
    const n = t[0];
    if (n > i$1) {
      const s3 = i(n, i$1);
      t[0] = n + s3 * (-2 * i$1);
    } else if (n < s2) {
      const i$12 = i(n, s2);
      t[0] = n + i$12 * (-2 * s2);
    }
  } else {
    const n = t.x;
    if (n > i$1) {
      const s3 = i(n, i$1);
      t.x += s3 * (-2 * i$1);
    } else if (n < s2) {
      const i$12 = i(n, s2);
      t.x += i$12 * (-2 * s2);
    }
  }
  return t;
}
function I(t, i2) {
  const s2 = [], { ymin: n, ymax: e, xmin: h, xmax: o } = t, r2 = t.xmax - t.xmin, [u2, m2] = i2.valid, { x, frameId: _ } = g(t.xmin, i2), { x: l2, frameId: c } = g(t.xmax, i2), p2 = x === l2 && r2 > 0;
  if (r2 > 2 * m2) {
    const t2 = { xmin: h < o ? x : l2, ymin: n, xmax: m2, ymax: e }, i3 = { xmin: u2, ymin: n, xmax: h < o ? l2 : x, ymax: e }, r3 = { xmin: 0, ymin: n, xmax: m2, ymax: e }, p3 = { xmin: u2, ymin: n, xmax: 0, ymax: e }, a2 = [], f2 = [];
    v(t2, r3) && a2.push(_), v(t2, p3) && f2.push(_), v(i3, r3) && a2.push(c), v(i3, p3) && f2.push(c);
    for (let s3 = _ + 1; s3 < c; s3++)
      a2.push(s3), f2.push(s3);
    s2.push(new C(t2, [_]), new C(i3, [c]), new C(r3, a2), new C(p3, f2));
  } else
    x > l2 || p2 ? s2.push(new C({ xmin: x, ymin: n, xmax: m2, ymax: e }, [_]), new C({ xmin: u2, ymin: n, xmax: l2, ymax: e }, [c])) : s2.push(new C({ xmin: x, ymin: n, xmax: l2, ymax: e }, [_]));
  return s2;
}
function g(t, i2) {
  const [s2, n] = i2.valid, e = 2 * n;
  let h, o = 0;
  return t > n ? (h = Math.ceil(Math.abs(t - n) / e), t -= h * e, o = h) : t < s2 && (h = Math.ceil(Math.abs(t - s2) / e), t += h * e, o = -h), { x: t, frameId: o };
}
function v(t, i2) {
  const { xmin: s2, ymin: n, xmax: e, ymax: h } = i2;
  return O(t, s2, n) && O(t, s2, h) && O(t, e, h) && O(t, e, n);
}
function O(t, i2, s2) {
  return i2 >= t.xmin && i2 <= t.xmax && s2 >= t.ymin && s2 <= t.ymax;
}
function P(t, i2, s2 = true) {
  const e = !s$1(t);
  if (e && g$1(t), s2) {
    return new T().cut(t, i2);
  }
  const h = e ? t.rings : t.paths, o = e ? 4 : 2, r2 = h.length, m2 = -2 * i2;
  for (let n = 0; n < r2; n++) {
    const t2 = h[n];
    if (t2 && t2.length >= o) {
      const i3 = [];
      for (const s3 of t2)
        i3.push([s3[0] + m2, s3[1]]);
      h.push(i3);
    }
  }
  return e ? t.rings = h : t.paths = h, t;
}
class C {
  constructor(t, i2) {
    this.extent = t, this.frameIds = i2;
  }
}
const S = u$1();
class T {
  constructor() {
    this._linesIn = [], this._linesOut = [];
  }
  cut(t, i2) {
    let s2;
    if (this._xCut = i2, t.rings)
      this._closed = true, s2 = t.rings, this._minPts = 4;
    else {
      if (!t.paths)
        return null;
      this._closed = false, s2 = t.paths, this._minPts = 2;
    }
    for (const e of s2) {
      if (!e || e.length < this._minPts)
        continue;
      let t2 = true;
      for (const i3 of e)
        t2 ? (this.moveTo(i3), t2 = false) : this.lineTo(i3);
      this._closed && this.close();
    }
    this._pushLineIn(), this._pushLineOut(), s2 = [];
    for (const e of this._linesIn)
      e && e.length >= this._minPts && s2.push(e);
    const n = -2 * this._xCut;
    for (const e of this._linesOut)
      if (e && e.length >= this._minPts) {
        for (const t2 of e)
          t2[0] += n;
        s2.push(e);
      }
    return this._closed ? t.rings = s2 : t.paths = s2, t;
  }
  moveTo(t) {
    this._pushLineIn(), this._pushLineOut(), this._prevSide = this._side(t[0]), this._moveTo(t[0], t[1], this._prevSide), this._prevPt = t, this._firstPt = t;
  }
  lineTo(t) {
    const i2 = this._side(t[0]);
    if (i2 * this._prevSide == -1) {
      const s2 = this._intersect(this._prevPt, t);
      this._lineTo(this._xCut, s2, 0), this._prevSide = 0, this._lineTo(t[0], t[1], i2);
    } else
      this._lineTo(t[0], t[1], i2);
    this._prevSide = i2, this._prevPt = t;
  }
  close() {
    const t = this._firstPt, i2 = this._prevPt;
    t[0] === i2[0] && t[1] === i2[1] || this.lineTo(t), this._checkClosingPt(this._lineIn), this._checkClosingPt(this._lineOut);
  }
  _moveTo(t, i2, s2) {
    this._closed ? (this._lineIn.push([s2 <= 0 ? t : this._xCut, i2]), this._lineOut.push([s2 >= 0 ? t : this._xCut, i2])) : (s2 <= 0 && this._lineIn.push([t, i2]), s2 >= 0 && this._lineOut.push([t, i2]));
  }
  _lineTo(t, i2, s2) {
    this._closed ? (this._addPolyVertex(this._lineIn, s2 <= 0 ? t : this._xCut, i2), this._addPolyVertex(this._lineOut, s2 >= 0 ? t : this._xCut, i2)) : s2 < 0 ? (0 === this._prevSide && this._pushLineOut(), this._lineIn.push([t, i2])) : s2 > 0 ? (0 === this._prevSide && this._pushLineIn(), this._lineOut.push([t, i2])) : this._prevSide < 0 ? (this._lineIn.push([t, i2]), this._lineOut.push([t, i2])) : this._prevSide > 0 && (this._lineOut.push([t, i2]), this._lineIn.push([t, i2]));
  }
  _addPolyVertex(t, i2, s2) {
    const n = t.length;
    n > 1 && t[n - 1][0] === i2 && t[n - 2][0] === i2 ? t[n - 1][1] = s2 : t.push([i2, s2]);
  }
  _checkClosingPt(t) {
    const i2 = t.length;
    i2 > 3 && t[0][0] === this._xCut && t[i2 - 2][0] === this._xCut && t[1][0] === this._xCut && (t[0][1] = t[i2 - 2][1], t.pop());
  }
  _side(t) {
    return t < this._xCut ? -1 : t > this._xCut ? 1 : 0;
  }
  _intersect(t, i2) {
    const s2 = (this._xCut - t[0]) / (i2[0] - t[0]);
    return t[1] + s2 * (i2[1] - t[1]);
  }
  _pushLineIn() {
    this._lineIn && this._lineIn.length >= this._minPts && this._linesIn.push(this._lineIn), this._lineIn = [];
  }
  _pushLineOut() {
    this._lineOut && this._lineOut.length >= this._minPts && this._linesOut.push(this._lineOut), this._lineOut = [];
  }
}
export {
  a,
  p
};
