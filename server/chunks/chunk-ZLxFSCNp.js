const i$1 = 512;
var t$1, s;
!function(i2) {
  i2[i2.Unknown = 0] = "Unknown", i2[i2.Point = 1] = "Point", i2[i2.LineString = 2] = "LineString", i2[i2.Polygon = 3] = "Polygon";
}(t$1 || (t$1 = {}));
class h {
  constructor(i2, t2) {
    this.x = i2, this.y = t2;
  }
  clone() {
    return new h(this.x, this.y);
  }
  equals(i2, t2) {
    return i2 === this.x && t2 === this.y;
  }
  isEqual(i2) {
    return i2.x === this.x && i2.y === this.y;
  }
  setCoords(i2, t2) {
    this.x = i2, this.y = t2;
  }
  normalize() {
    const i2 = this.x, t2 = this.y, s2 = Math.sqrt(i2 * i2 + t2 * t2);
    this.x /= s2, this.y /= s2;
  }
  rightPerpendicular() {
    const i2 = this.x;
    this.x = this.y, this.y = -i2;
  }
  move(i2, t2) {
    this.x += i2, this.y += t2;
  }
  assign(i2) {
    this.x = i2.x, this.y = i2.y;
  }
  assignAdd(i2, t2) {
    this.x = i2.x + t2.x, this.y = i2.y + t2.y;
  }
  assignSub(i2, t2) {
    this.x = i2.x - t2.x, this.y = i2.y - t2.y;
  }
  rotate(i2, t2) {
    const s2 = this.x, h2 = this.y;
    this.x = s2 * i2 - h2 * t2, this.y = s2 * t2 + h2 * i2;
  }
  scale(i2) {
    this.x *= i2, this.y *= i2;
  }
  length() {
    const i2 = this.x, t2 = this.y;
    return Math.sqrt(i2 * i2 + t2 * t2);
  }
  static distance(i2, t2) {
    const s2 = t2.x - i2.x, h2 = t2.y - i2.y;
    return Math.sqrt(s2 * s2 + h2 * h2);
  }
  static add(i2, t2) {
    return new h(i2.x + t2.x, i2.y + t2.y);
  }
  static sub(i2, t2) {
    return new h(i2.x - t2.x, i2.y - t2.y);
  }
}
let n$1 = class n {
  constructor(i2, t2, s2) {
    this.ratio = i2, this.x = t2, this.y = s2;
  }
};
let e$1 = class e {
  constructor(t2, s2, h2, n3 = 8, e3 = 8) {
    this._lines = [], this._starts = [], this.validateTessellation = true, this._pixelRatio = n3, this._pixelMargin = e3, this._tileSize = i$1 * n3, this._dz = t2, this._yPos = s2, this._xPos = h2;
  }
  setPixelMargin(i2) {
    i2 !== this._pixelMargin && (this._pixelMargin = i2, this.setExtent(this._extent));
  }
  setExtent(i2) {
    this._extent = i2, this._finalRatio = this._tileSize / i2 * (1 << this._dz);
    let t2 = this._pixelRatio * this._pixelMargin;
    t2 /= this._finalRatio;
    const s2 = i2 >> this._dz;
    t2 > s2 && (t2 = s2), this._margin = t2, this._xmin = s2 * this._xPos - t2, this._ymin = s2 * this._yPos - t2, this._xmax = this._xmin + s2 + 2 * t2, this._ymax = this._ymin + s2 + 2 * t2;
  }
  reset(i2) {
    this._type = i2, this._lines = [], this._starts = [], this._line = null, this._start = 0;
  }
  moveTo(i2, t2) {
    this._pushLine(), this._prevIsIn = this._isIn(i2, t2), this._moveTo(i2, t2, this._prevIsIn), this._prevPt = new h(i2, t2), this._firstPt = new h(i2, t2), this._dist = 0;
  }
  lineTo(i2, t2) {
    const s2 = this._isIn(i2, t2), e3 = new h(i2, t2), _2 = h.distance(this._prevPt, e3);
    let l2, x2, a, y, o, r2, m, u2;
    if (s2)
      this._prevIsIn ? this._lineTo(i2, t2, true) : (l2 = this._prevPt, x2 = e3, a = this._intersect(x2, l2), this._start = this._dist + _2 * (1 - this._r), this._lineTo(a.x, a.y, true), this._lineTo(x2.x, x2.y, true));
    else if (this._prevIsIn)
      x2 = this._prevPt, l2 = e3, a = this._intersect(x2, l2), this._lineTo(a.x, a.y, true), this._lineTo(l2.x, l2.y, false);
    else {
      const i3 = this._prevPt, t3 = e3;
      if (i3.x <= this._xmin && t3.x <= this._xmin || i3.x >= this._xmax && t3.x >= this._xmax || i3.y <= this._ymin && t3.y <= this._ymin || i3.y >= this._ymax && t3.y >= this._ymax)
        this._lineTo(t3.x, t3.y, false);
      else {
        const s3 = [];
        if ((i3.x < this._xmin && t3.x > this._xmin || i3.x > this._xmin && t3.x < this._xmin) && (y = (this._xmin - i3.x) / (t3.x - i3.x), u2 = i3.y + y * (t3.y - i3.y), u2 <= this._ymin ? r2 = false : u2 >= this._ymax ? r2 = true : s3.push(new n$1(y, this._xmin, u2))), (i3.x < this._xmax && t3.x > this._xmax || i3.x > this._xmax && t3.x < this._xmax) && (y = (this._xmax - i3.x) / (t3.x - i3.x), u2 = i3.y + y * (t3.y - i3.y), u2 <= this._ymin ? r2 = false : u2 >= this._ymax ? r2 = true : s3.push(new n$1(y, this._xmax, u2))), (i3.y < this._ymin && t3.y > this._ymin || i3.y > this._ymin && t3.y < this._ymin) && (y = (this._ymin - i3.y) / (t3.y - i3.y), m = i3.x + y * (t3.x - i3.x), m <= this._xmin ? o = false : m >= this._xmax ? o = true : s3.push(new n$1(y, m, this._ymin))), (i3.y < this._ymax && t3.y > this._ymax || i3.y > this._ymax && t3.y < this._ymax) && (y = (this._ymax - i3.y) / (t3.y - i3.y), m = i3.x + y * (t3.x - i3.x), m <= this._xmin ? o = false : m >= this._xmax ? o = true : s3.push(new n$1(y, m, this._ymax))), 0 === s3.length)
          o ? r2 ? this._lineTo(this._xmax, this._ymax, true) : this._lineTo(this._xmax, this._ymin, true) : r2 ? this._lineTo(this._xmin, this._ymax, true) : this._lineTo(this._xmin, this._ymin, true);
        else if (s3.length > 1 && s3[0].ratio > s3[1].ratio)
          this._start = this._dist + _2 * s3[1].ratio, this._lineTo(s3[1].x, s3[1].y, true), this._lineTo(s3[0].x, s3[0].y, true);
        else {
          this._start = this._dist + _2 * s3[0].ratio;
          for (let i4 = 0; i4 < s3.length; i4++)
            this._lineTo(s3[i4].x, s3[i4].y, true);
        }
        this._lineTo(t3.x, t3.y, false);
      }
    }
    this._dist += _2, this._prevIsIn = s2, this._prevPt = e3;
  }
  close() {
    if (this._line.length > 2) {
      const i2 = this._firstPt, t2 = this._prevPt;
      i2.x === t2.x && i2.y === t2.y || this.lineTo(i2.x, i2.y);
      const s2 = this._line;
      let h2 = s2.length;
      for (; h2 >= 4 && (s2[0].x === s2[1].x && s2[0].x === s2[h2 - 2].x || s2[0].y === s2[1].y && s2[0].y === s2[h2 - 2].y); )
        s2.pop(), s2[0].x = s2[h2 - 2].x, s2[0].y = s2[h2 - 2].y, --h2;
    }
  }
  result(i2 = true) {
    return this._pushLine(), 0 === this._lines.length ? null : (this._type === t$1.Polygon && i2 && l.simplify(this._tileSize, this._margin * this._finalRatio, this._lines), this._lines);
  }
  resultWithStarts() {
    if (this._type !== t$1.LineString)
      throw new Error("Only valid for lines");
    this._pushLine();
    const i2 = this._lines, s2 = i2.length;
    if (0 === s2)
      return null;
    const h2 = [];
    for (let t2 = 0; t2 < s2; t2++)
      h2.push({ line: i2[t2], start: this._starts[t2] || 0 });
    return h2;
  }
  _isIn(i2, t2) {
    return i2 >= this._xmin && i2 <= this._xmax && t2 >= this._ymin && t2 <= this._ymax;
  }
  _intersect(i2, t2) {
    let s2, n3, e3;
    if (t2.x >= this._xmin && t2.x <= this._xmax)
      n3 = t2.y <= this._ymin ? this._ymin : this._ymax, e3 = (n3 - i2.y) / (t2.y - i2.y), s2 = i2.x + e3 * (t2.x - i2.x);
    else if (t2.y >= this._ymin && t2.y <= this._ymax)
      s2 = t2.x <= this._xmin ? this._xmin : this._xmax, e3 = (s2 - i2.x) / (t2.x - i2.x), n3 = i2.y + e3 * (t2.y - i2.y);
    else {
      n3 = t2.y <= this._ymin ? this._ymin : this._ymax, s2 = t2.x <= this._xmin ? this._xmin : this._xmax;
      const h2 = (s2 - i2.x) / (t2.x - i2.x), _2 = (n3 - i2.y) / (t2.y - i2.y);
      h2 < _2 ? (e3 = h2, n3 = i2.y + h2 * (t2.y - i2.y)) : (e3 = _2, s2 = i2.x + _2 * (t2.x - i2.x));
    }
    return this._r = e3, new h(s2, n3);
  }
  _pushLine() {
    this._line && (this._type === t$1.Point ? this._line.length > 0 && (this._lines.push(this._line), this._starts.push(this._start)) : this._type === t$1.LineString ? this._line.length > 1 && (this._lines.push(this._line), this._starts.push(this._start)) : this._type === t$1.Polygon && this._line.length > 3 && (this._lines.push(this._line), this._starts.push(this._start))), this._line = [], this._start = 0;
  }
  _moveTo(i2, s2, n3) {
    this._type !== t$1.Polygon ? n3 && (i2 = Math.round((i2 - (this._xmin + this._margin)) * this._finalRatio), s2 = Math.round((s2 - (this._ymin + this._margin)) * this._finalRatio), this._line.push(new h(i2, s2))) : (n3 || (i2 < this._xmin && (i2 = this._xmin), i2 > this._xmax && (i2 = this._xmax), s2 < this._ymin && (s2 = this._ymin), s2 > this._ymax && (s2 = this._ymax)), i2 = Math.round((i2 - (this._xmin + this._margin)) * this._finalRatio), s2 = Math.round((s2 - (this._ymin + this._margin)) * this._finalRatio), this._line.push(new h(i2, s2)), this._isH = false, this._isV = false);
  }
  _lineTo(i2, s2, n3) {
    let e3, _2;
    if (this._type !== t$1.Polygon)
      if (n3) {
        if (i2 = Math.round((i2 - (this._xmin + this._margin)) * this._finalRatio), s2 = Math.round((s2 - (this._ymin + this._margin)) * this._finalRatio), this._line.length > 0 && (e3 = this._line[this._line.length - 1], e3.equals(i2, s2)))
          return;
        this._line.push(new h(i2, s2));
      } else
        this._line && this._line.length > 0 && this._pushLine();
    else if (n3 || (i2 < this._xmin && (i2 = this._xmin), i2 > this._xmax && (i2 = this._xmax), s2 < this._ymin && (s2 = this._ymin), s2 > this._ymax && (s2 = this._ymax)), i2 = Math.round((i2 - (this._xmin + this._margin)) * this._finalRatio), s2 = Math.round((s2 - (this._ymin + this._margin)) * this._finalRatio), this._line && this._line.length > 0) {
      e3 = this._line[this._line.length - 1];
      const t2 = e3.x === i2, n4 = e3.y === s2;
      if (t2 && n4)
        return;
      this._isH && t2 || this._isV && n4 ? (e3.x = i2, e3.y = s2, _2 = this._line[this._line.length - 2], _2.x === i2 && _2.y === s2 ? (this._line.pop(), this._line.length <= 1 ? (this._isH = false, this._isV = false) : (_2 = this._line[this._line.length - 2], this._isH = _2.x === i2, this._isV = _2.y === s2)) : (this._isH = _2.x === i2, this._isV = _2.y === s2)) : (this._line.push(new h(i2, s2)), this._isH = t2, this._isV = n4);
    } else
      this._line.push(new h(i2, s2));
  }
};
class _ {
  setExtent(i2) {
    this._ratio = 4096 === i2 ? 1 : 4096 / i2;
  }
  get validateTessellation() {
    return this._ratio < 1;
  }
  reset(i2) {
    this._lines = [], this._line = null;
  }
  moveTo(i2, t2) {
    this._line && this._lines.push(this._line), this._line = [];
    const s2 = this._ratio;
    this._line.push(new h(i2 * s2, t2 * s2));
  }
  lineTo(i2, t2) {
    const s2 = this._ratio;
    this._line.push(new h(i2 * s2, t2 * s2));
  }
  close() {
    const i2 = this._line;
    i2 && !i2[0].isEqual(i2[i2.length - 1]) && i2.push(i2[0]);
  }
  result() {
    return this._line && this._lines.push(this._line), 0 === this._lines.length ? null : this._lines;
  }
}
!function(i2) {
  i2[i2.sideLeft = 0] = "sideLeft", i2[i2.sideRight = 1] = "sideRight", i2[i2.sideTop = 2] = "sideTop", i2[i2.sideBottom = 3] = "sideBottom";
}(s || (s = {}));
class l {
  static simplify(i2, t2, h2) {
    if (!h2)
      return;
    const n3 = -t2, e3 = i2 + t2, _2 = -t2, x2 = i2 + t2, a = [], y = [], o = h2.length;
    for (let l2 = 0; l2 < o; ++l2) {
      const i3 = h2[l2];
      if (!i3 || i3.length < 2)
        continue;
      let t3, o2 = i3[0];
      const r3 = i3.length;
      for (let h3 = 1; h3 < r3; ++h3)
        t3 = i3[h3], o2.x === t3.x && (o2.x <= n3 && (o2.y > t3.y ? (a.push(l2), a.push(h3), a.push(s.sideLeft), a.push(-1)) : (y.push(l2), y.push(h3), y.push(s.sideLeft), y.push(-1))), o2.x >= e3 && (o2.y < t3.y ? (a.push(l2), a.push(h3), a.push(s.sideRight), a.push(-1)) : (y.push(l2), y.push(h3), y.push(s.sideRight), y.push(-1)))), o2.y === t3.y && (o2.y <= _2 && (o2.x < t3.x ? (a.push(l2), a.push(h3), a.push(s.sideTop), a.push(-1)) : (y.push(l2), y.push(h3), y.push(s.sideTop), y.push(-1))), o2.y >= x2 && (o2.x > t3.x ? (a.push(l2), a.push(h3), a.push(s.sideBottom), a.push(-1)) : (y.push(l2), y.push(h3), y.push(s.sideBottom), y.push(-1)))), o2 = t3;
    }
    if (0 === a.length || 0 === y.length)
      return;
    l.fillParent(h2, y, a), l.fillParent(h2, a, y);
    const r2 = [];
    l.calcDeltas(r2, y, a), l.calcDeltas(r2, a, y), l.addDeltas(r2, h2);
  }
  static fillParent(i2, t2, h2) {
    const n3 = h2.length, e3 = t2.length;
    for (let _2 = 0; _2 < e3; _2 += 4) {
      const e4 = t2[_2], l2 = t2[_2 + 1], a = t2[_2 + 2], y = i2[e4][l2 - 1], o = i2[e4][l2];
      let r2 = 8092, m = -1;
      for (let t3 = 0; t3 < n3; t3 += 4) {
        if (h2[t3 + 2] !== a)
          continue;
        const n4 = h2[t3], e5 = h2[t3 + 1], _3 = i2[n4][e5 - 1], l3 = i2[n4][e5];
        switch (a) {
          case s.sideLeft:
          case s.sideRight:
            if (x(y.y, _3.y, l3.y) && x(o.y, _3.y, l3.y)) {
              const i3 = Math.abs(l3.y - _3.y);
              i3 < r2 && (r2 = i3, m = t3);
            }
            break;
          case s.sideTop:
          case s.sideBottom:
            if (x(y.x, _3.x, l3.x) && x(o.x, _3.x, l3.x)) {
              const i3 = Math.abs(l3.x - _3.x);
              i3 < r2 && (r2 = i3, m = t3);
            }
        }
      }
      t2[_2 + 3] = m;
    }
  }
  static calcDeltas(i2, t2, s2) {
    const h2 = t2.length;
    for (let n3 = 0; n3 < h2; n3 += 4) {
      const h3 = [], e3 = l.calcDelta(n3, t2, s2, h3);
      i2.push(t2[n3]), i2.push(t2[n3 + 1]), i2.push(t2[n3 + 2]), i2.push(e3);
    }
  }
  static calcDelta(i2, t2, s2, h2) {
    const n3 = t2[i2 + 3];
    if (-1 === n3)
      return 0;
    const e3 = h2.length;
    return e3 > 1 && h2[e3 - 2] === n3 ? 0 : (h2.push(n3), l.calcDelta(n3, s2, t2, h2) + 1);
  }
  static addDeltas(i2, t2) {
    const h2 = i2.length;
    let n3 = 0;
    for (let s2 = 0; s2 < h2; s2 += 4) {
      const t3 = i2[s2 + 3];
      t3 > n3 && (n3 = t3);
    }
    for (let e3 = 0; e3 < h2; e3 += 4) {
      const h3 = t2[i2[e3]], _2 = i2[e3 + 1], l2 = n3 - i2[e3 + 3];
      switch (i2[e3 + 2]) {
        case s.sideLeft:
          h3[_2 - 1].x -= l2, h3[_2].x -= l2, 1 === _2 && (h3[h3.length - 1].x -= l2), _2 === h3.length - 1 && (h3[0].x -= l2);
          break;
        case s.sideRight:
          h3[_2 - 1].x += l2, h3[_2].x += l2, 1 === _2 && (h3[h3.length - 1].x += l2), _2 === h3.length - 1 && (h3[0].x += l2);
          break;
        case s.sideTop:
          h3[_2 - 1].y -= l2, h3[_2].y -= l2, 1 === _2 && (h3[h3.length - 1].y -= l2), _2 === h3.length - 1 && (h3[0].y -= l2);
          break;
        case s.sideBottom:
          h3[_2 - 1].y += l2, h3[_2].y += l2, 1 === _2 && (h3[h3.length - 1].y += l2), _2 === h3.length - 1 && (h3[0].y += l2);
      }
    }
  }
}
const x = (i2, t2, s2) => i2 >= t2 && i2 <= s2 || i2 >= s2 && i2 <= t2;
const n2 = Number.POSITIVE_INFINITY, t = Math.PI, r = 2 * t, u = 128 / t, e2 = t / 180, c = 1 / Math.LN2;
function f(n3, t2) {
  return (n3 %= t2) >= 0 ? n3 : n3 + t2;
}
function i(n3) {
  return f(n3 * u, 256);
}
function N(n3) {
  return Math.log(n3) * c;
}
function h$1(n3, t2, r2) {
  return n3 * (1 - r2) + t2 * r2;
}
export {
  N,
  _,
  h as a,
  t as b,
  e$1 as c,
  e2 as e,
  f,
  h$1 as h,
  i,
  n2 as n,
  r,
  t$1 as t
};
