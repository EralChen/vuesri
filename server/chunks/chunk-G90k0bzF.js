import { CP as O$2, CQ as P$1, CR as n$g, ii as t$9, cZ as f$1, CS as R$1, CT as k$1, CU as B$2, aD as m$3, ij as c$2, CV as A$2, CW as X, BK as o$4, CX as Y$1, z$ as t$a, CY as Z$2, CZ as K$1, C_ as f$2, h8 as u$3, hr as s$8, i0 as t$b, B5 as n$h, C$ as t$c, tj as n$i, BC as h$6, tl as o$5, D0 as a$7, Bn as w$1, hK as r$f, BE as z, tI as i$b, tL as e$c, bb as s$9, nF as a$8, aE as f$3, aF as s$a, D1 as b$1, Bo as b$2, Bm as w$2, aC as u$4, D2 as F, fs as e$d, b8 as a$9, fu as U$1, fv as w$3, D3 as e$e, D4 as k$2, D5 as S$1, D6 as t$e, D7 as x$1, D8 as G$1, D9 as P$2, Da as L$1, Db as w$4, Dc as h$7, Dd as g$2, De as e$f, aB as l$6, qO as l$7, aw as u$5, aG as a$a, Df as C$1, Dg as l$8, Dh as a$b, Di as u$6, Dj as y$1, Dk as ne$1, Dl as oe$1, Dm as m$4, Dn as ie$1, Do as m$5, Dp as m$6, aq as has, Dq as d, Dr as I, w9 as f$4, Ds as se$1, Dt as A$3, oh as n$k, C5 as s$b, Du as i$c, Dv as l$9, bu as u$7, ch as o$6, AP as ae$1, n5 as c$3, Bs as i$d, Dw as u$8, Dx as p$2, BV as e$g, Dy as u$9, Dz as s$c, h6 as c$4, h7 as t$f, DA as u$a, i8 as e$h, i9 as n$l } from "./chunk-KFNcxJaF.js";
import { C } from "./chunk-U6xagfDK.js";
import { a as a$6, l as l$5 } from "./chunk-ubi9cRRg.js";
import { t as t$8, c as e$b, n as n$j } from "./chunk-ZLxFSCNp.js";
import { t as t$d } from "./chunk-Fng9kmUI.js";
const n$f = new C();
function i$a(r13) {
  if (null == r13)
    return ["", false];
  if (!n$f.hasBidiChar(r13))
    return [r13, false];
  let i8;
  return i8 = "rtl" === n$f.checkContextual(r13) ? "IDNNN" : "ICNNN", [n$f.bidiTransform(r13, i8, "VLYSN"), true];
}
const r$e = 512;
let n$e;
let s$7 = class s {
  constructor(t8) {
    this._geometry = t8;
  }
  next() {
    const t8 = this._geometry;
    return this._geometry = null, t8;
  }
};
function i$9(s7, i8) {
  n$e || (n$e = new e$b(0, 0, 0, 1));
  const y2 = "esriGeometryPolygon" === s7.geometryType, m4 = y2 ? t$8.Polygon : t$8.LineString, l3 = y2 ? 3 : 2;
  let c2, p3;
  for (n$e.reset(m4), n$e.setPixelMargin(i8 + 1), n$e.setExtent(r$e); s7.nextPath(); )
    if (!(s7.pathSize < l3)) {
      for (s7.nextPoint(), c2 = s7.x, p3 = -s7.y, n$e.moveTo(c2, p3); s7.nextPoint(); )
        c2 = s7.x, p3 = -s7.y, n$e.lineTo(c2, p3);
      y2 && n$e.close();
    }
  const f2 = n$e.result(false);
  if (f2) {
    const e9 = a$6.createEmptyOptimizedCIM(s7.geometryType);
    for (const t8 of f2) {
      e9.startPath();
      for (const o3 of t8)
        e9.pushXY(o3.x, -o3.y);
    }
    return e9.reset(), e9;
  }
  return null;
}
let t$7 = class t {
  applyColorSubstituition(t8, a6) {
    if (!a6)
      return t8;
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas"));
    const { width: e9, height: n8 } = t8, o3 = this._rasterizationCanvas, r13 = o3.getContext("2d", { willReadFrequently: true });
    t8 !== o3 && (o3.width = e9, o3.height = n8, r13.drawImage(t8, 0, 0, e9, n8));
    const i8 = r13.getImageData(0, 0, e9, n8).data;
    if (a6) {
      for (const l3 of a6)
        if (l3 && l3.oldColor && 4 === l3.oldColor.length && l3.newColor && 4 === l3.newColor.length) {
          const [t9, a7, e10, n9] = l3.oldColor, [o4, r14, s8, h5] = l3.newColor;
          if (t9 === o4 && a7 === r14 && e10 === s8 && n9 === h5)
            continue;
          for (let l4 = 0; l4 < i8.length; l4 += 4)
            t9 === i8[l4] && a7 === i8[l4 + 1] && e10 === i8[l4 + 2] && n9 === i8[l4 + 3] && (i8[l4] = o4, i8[l4 + 1] = r14, i8[l4 + 2] = s8, i8[l4 + 3] = h5);
        }
    }
    const s7 = new ImageData(i8, e9, n8);
    return r13.putImageData(s7, 0, 0), o3;
  }
  tintImageData(t8, a6) {
    if (!a6 || a6.length < 4)
      return t8;
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas"));
    const { width: e9, height: n8 } = t8, o3 = this._rasterizationCanvas, r13 = o3.getContext("2d", { willReadFrequently: true });
    t8 !== o3 && (o3.width = e9, o3.height = n8, r13.drawImage(t8, 0, 0, e9, n8));
    const i8 = r13.getImageData(0, 0, e9, n8), s7 = new Uint8Array(i8.data), l3 = [a6[0] / 255, a6[1] / 255, a6[2] / 255, a6[3] / 255];
    for (let g2 = 0; g2 < s7.length; g2 += 4)
      s7[g2] *= l3[0], s7[g2 + 1] *= l3[1], s7[g2 + 2] *= l3[2], s7[g2 + 3] *= l3[3];
    const h5 = new ImageData(new Uint8ClampedArray(s7.buffer), e9, n8);
    return r13.putImageData(h5, 0, 0), o3;
  }
};
let e$a = class e {
  static local() {
    return null === e.instance && (e.instance = new e()), e.instance;
  }
  execute(e9, s7, n8, i8, o3) {
    return new t$6(e9, s7, n8);
  }
};
e$a.instance = null;
let t$6 = class t2 {
  constructor(e9, t8, s7) {
    this._inputGeometries = e9, this._angleTolerance = void 0 !== t8.angleTolerance ? t8.angleTolerance : 120, this._maxCosAngle = Math.cos((1 - Math.abs(this._angleTolerance) / 180) * Math.PI);
  }
  next() {
    let e9 = this._inputGeometries.next();
    for (; e9; ) {
      if ("esriGeometryPolygon" === e9.geometryType)
        this._isClosed = true;
      else if ("esriGeometryPolyline" === e9.geometryType)
        this._isClosed = false;
      else {
        if ("esriGeometryEnvelope" !== e9.geometryType) {
          e9 = this._inputGeometries.next();
          continue;
        }
        if (this._maxCosAngle)
          return e9;
        this._isClosed = true;
      }
      for (; e9.nextPath(); )
        this._processPath(e9);
      return e9.reset(), e9;
    }
    return null;
  }
  _processPath(e9) {
    if (e9.nextPoint()) {
      const t8 = e9.x, s7 = e9.y;
      let n8 = t8, i8 = s7, o3 = e9.pathSize, l3 = 0, r13 = 0, a6 = 0, h5 = 0, c2 = 0, _2 = 0;
      this._isClosed && ++o3;
      for (let u3 = 1; e9.nextPoint() || u3 < o3; ++u3) {
        let x2, m4;
        this._isClosed && u3 === o3 - 1 ? (x2 = t8, m4 = s7) : (x2 = e9.x, m4 = e9.y);
        const y2 = x2 - n8, g2 = m4 - i8, C2 = Math.sqrt(y2 * y2 + g2 * g2);
        if (u3 > 1 && C2 > 0 && a6 > 0) {
          (l3 * y2 + r13 * g2) / C2 / a6 <= this._maxCosAngle && e9.setControlPointAt(u3 - 1);
        }
        1 === u3 && (h5 = y2, c2 = g2, _2 = C2), C2 > 0 && (n8 = x2, i8 = m4, l3 = y2, r13 = g2, a6 = C2);
      }
      if (this._isClosed && a6 > 0 && _2 > 0) {
        (l3 * h5 + r13 * c2) / _2 / a6 <= this._maxCosAngle && e9.setControlPointAt(0);
      }
    }
  }
};
let t$5 = class t3 {
  constructor() {
    this.setIdentity();
  }
  getAngle() {
    return (null == this.rz || 0 === this.rz && 1 !== this.rzCos && 0 !== this.rzSin) && (this.rz = Math.atan2(this.rzSin, this.rzCos)), this.rz;
  }
  setIdentity() {
    this.tx = 0, this.ty = 0, this.tz = 0, this.s = 1, this.rx = 0, this.ry = 0, this.rz = 0, this.rzCos = 1, this.rzSin = 0;
  }
  setTranslate(t8, s7) {
    this.tx = t8, this.ty = s7;
  }
  setTranslateZ(t8) {
    this.tz = t8;
  }
  setRotateCS(t8, s7) {
    this.rz = void 0, this.rzCos = t8, this.rzSin = s7;
  }
  setRotate(t8) {
    this.rz = t8, this.rzCos = void 0, this.rzSin = void 0;
  }
  setRotateY(t8) {
    this.ry = t8;
  }
  setScale(t8) {
    this.s = t8;
  }
  setMeasure(t8) {
    this.m = t8;
  }
};
function r$d(t8, e9) {
  t8[4] = e9;
}
let s$6 = class s2 {
  constructor(e9, r13 = true, s7 = true, i8 = 0) {
    this.isClosed = false, this.geometryCursor = null, this.geometryCursor = !r13 && "esriGeometryPolygon" === e9.geometryType || !s7 && "esriGeometryPolyline" === e9.geometryType ? null : e9, this.geomUnitsPerPoint = i8, this.iteratePath = false, this.internalPlacement = new t$5();
  }
  next() {
    if (!this.geometryCursor)
      return null;
    for (; this.iteratePath || this.geometryCursor.nextPath(); ) {
      this.geometryCursor.seekPathStart();
      const t8 = this.processPath(this.geometryCursor);
      if (t8)
        return t8;
    }
    return this.geometryCursor = null, null;
  }
};
let i$8 = class i {
  constructor(t8, e9, r13, s7 = 0) {
    this.isClosed = false, this.inputGeometries = t8, this.acceptPolygon = e9, this.acceptPolyline = r13, this.geomUnitsPerPoint = s7, this.iteratePath = false, this.multiPathCursor = null;
  }
  next() {
    for (; ; ) {
      if (!this.multiPathCursor) {
        let t8 = this.inputGeometries.next();
        for (; t8 && (this.isClosed = this.acceptPolygon && "esriGeometryPolygon" === t8.geometryType || "esriGeometryEnvelope" === t8.geometryType, this.multiPathCursor = t8, !this.multiPathCursor); )
          t8 = this.inputGeometries.next();
        if (!this.multiPathCursor)
          return null;
      }
      for (; this.iteratePath || this.multiPathCursor.nextPath(); ) {
        this.multiPathCursor.seekPathStart();
        const t8 = this.processPath(this.multiPathCursor);
        if (t8)
          return t8;
      }
      this.multiPathCursor = null;
    }
  }
};
const n$d = 0.03;
let s$5 = class s3 {
  constructor(t8 = 0, e9 = false) {
  }
  isEmpty(t8) {
    if (!t8.nextPoint())
      return true;
    let e9, n8, s7, r13;
    for (e9 = t8.x, n8 = t8.y; t8.nextPoint(); e9 = n8, n8 = r13)
      if (s7 = t8.x, r13 = t8.y, s7 !== e9 || r13 !== n8)
        return t8.seekPathStart(), false;
    return t8.seekPathStart(), true;
  }
  normalize(t8) {
    const e9 = Math.sqrt(t8[0] * t8[0] + t8[1] * t8[1]);
    0 !== e9 && (t8[0] /= e9, t8[1] /= e9);
  }
  getLength(t8, e9, n8, s7) {
    const r13 = n8 - t8, o3 = s7 - e9;
    return Math.sqrt(r13 * r13 + o3 * o3);
  }
  getSegLength(t8) {
    const [[e9, n8], [s7, r13]] = t8;
    return this.getLength(e9, n8, s7, r13);
  }
  getCoord2D(t8, e9, n8, s7, r13) {
    return [t8 + (n8 - t8) * r13, e9 + (s7 - e9) * r13];
  }
  getSegCoord2D(t8, e9) {
    const [[n8, s7], [r13, o3]] = t8;
    return this.getCoord2D(n8, s7, r13, o3, e9);
  }
  getAngle(t8, e9, n8, s7, r13) {
    const o3 = n8 - t8, i8 = s7 - e9;
    return Math.atan2(i8, o3);
  }
  getAngleCS(t8, e9, n8, s7, r13) {
    const o3 = n8 - t8, i8 = s7 - e9, u3 = Math.sqrt(o3 * o3 + i8 * i8);
    return u3 > 0 ? [o3 / u3, i8 / u3] : [1, 0];
  }
  getSegAngleCS(t8, e9) {
    const [[n8, s7], [r13, o3]] = t8;
    return this.getAngleCS(n8, s7, r13, o3, e9);
  }
  cut(t8, e9, n8, s7, r13, o3) {
    return [r13 <= 0 ? [t8, e9] : this.getCoord2D(t8, e9, n8, s7, r13), o3 >= 1 ? [n8, s7] : this.getCoord2D(t8, e9, n8, s7, o3)];
  }
  getSubCurve(e9, n8, s7) {
    const r13 = a$6.createEmptyOptimizedCIM("esriGeometryPolyline");
    return this.appendSubCurve(r13, e9, n8, s7) ? r13 : null;
  }
  appendSubCurve(t8, e9, n8, s7) {
    t8.startPath(), e9.seekPathStart();
    let r13 = 0, o3 = true;
    if (!e9.nextPoint())
      return false;
    let i8 = e9.x, u3 = e9.y;
    for (; e9.nextPoint(); ) {
      const h5 = this.getLength(i8, u3, e9.x, e9.y);
      if (0 !== h5) {
        if (o3) {
          if (r13 + h5 > n8) {
            const l3 = (n8 - r13) / h5;
            let a6 = 1, c2 = false;
            r13 + h5 >= s7 && (a6 = (s7 - r13) / h5, c2 = true);
            const f2 = this.cut(i8, u3, e9.x, e9.y, l3, a6);
            if (f2 && t8.pushPoints(f2), c2)
              break;
            o3 = false;
          }
        } else {
          if (r13 + h5 > s7) {
            const n9 = this.cut(i8, u3, e9.x, e9.y, 0, (s7 - r13) / h5);
            n9 && t8.pushPoint(n9[1]);
            break;
          }
          t8.pushXY(e9.x, e9.y);
        }
        r13 += h5, i8 = e9.x, u3 = e9.y;
      } else
        i8 = e9.x, u3 = e9.y;
    }
    return true;
  }
  getCIMPointAlong(t8, e9) {
    if (!t8.nextPoint())
      return null;
    let n8, s7, r13, o3, i8 = 0;
    for (n8 = t8.x, s7 = t8.y; t8.nextPoint(); n8 = r13, s7 = o3) {
      r13 = t8.x, o3 = t8.y;
      const u3 = this.getLength(n8, s7, r13, o3);
      if (0 !== u3) {
        if (i8 + u3 > e9) {
          const t9 = (e9 - i8) / u3;
          return this.getCoord2D(n8, s7, r13, o3, t9);
        }
        i8 += u3;
      }
    }
    return null;
  }
  offset(t8, n8, s7, r13, o3) {
    if (!t8 || t8.length < 2)
      return null;
    let i8 = 0, u3 = t8[i8++], h5 = i8;
    for (; i8 < t8.length; ) {
      const e9 = t8[i8];
      e9[0] === u3[0] && e9[1] === u3[1] || (i8 !== h5 && (t8[h5] = t8[i8]), u3 = t8[h5++]), i8++;
    }
    const l3 = t8[0][0] === t8[h5 - 1][0] && t8[0][1] === t8[h5 - 1][1];
    if (l3 && --h5, h5 < (l3 ? 3 : 2))
      return null;
    const a6 = [];
    u3 = l3 ? t8[h5 - 1] : null;
    let c2 = t8[0];
    for (let f2 = 0; f2 < h5; f2++) {
      const o4 = f2 === h5 - 1 ? l3 ? t8[0] : null : t8[f2 + 1];
      if (u3)
        if (o4) {
          const t9 = [o4[0] - c2[0], o4[1] - c2[1]];
          this.normalize(t9);
          const i9 = [c2[0] - u3[0], c2[1] - u3[1]];
          this.normalize(i9);
          const h6 = i9[0] * t9[1] - i9[1] * t9[0], l4 = i9[0] * t9[0] + i9[1] * t9[1];
          if (0 === h6 && 1 === l4) {
            c2 = o4;
            continue;
          }
          if (h6 >= 0 == n8 <= 0) {
            if (l4 < 1) {
              const e9 = [t9[0] - i9[0], t9[1] - i9[1]];
              this.normalize(e9);
              const s8 = Math.sqrt((1 + l4) / 2);
              if (s8 > 1 / r13) {
                const t10 = -Math.abs(n8) / s8;
                a6.push([c2[0] - e9[0] * t10, c2[1] - e9[1] * t10]);
              }
            }
          } else
            switch (s7) {
              case O$2.Mitered: {
                const e9 = Math.sqrt((1 + l4) / 2);
                if (e9 > 0 && 1 / e9 < r13) {
                  const s8 = [t9[0] - i9[0], t9[1] - i9[1]];
                  this.normalize(s8);
                  const r14 = Math.abs(n8) / e9;
                  a6.push([c2[0] - s8[0] * r14, c2[1] - s8[1] * r14]);
                  break;
                }
              }
              case O$2.Bevelled:
                a6.push([c2[0] + i9[1] * n8, c2[1] - i9[0] * n8]), a6.push([c2[0] + t9[1] * n8, c2[1] - t9[0] * n8]);
                break;
              case O$2.Rounded:
                if (l4 < 1) {
                  a6.push([c2[0] + i9[1] * n8, c2[1] - i9[0] * n8]);
                  const e9 = Math.floor(2.5 * (1 - l4));
                  if (e9 > 0) {
                    const s8 = 1 / e9;
                    let r14 = s8;
                    for (let o5 = 1; o5 < e9; o5++, r14 += s8) {
                      const e10 = [i9[1] * (1 - r14) + t9[1] * r14, -i9[0] * (1 - r14) - t9[0] * r14];
                      this.normalize(e10), a6.push([c2[0] + e10[0] * n8, c2[1] + e10[1] * n8]);
                    }
                  }
                  a6.push([c2[0] + t9[1] * n8, c2[1] - t9[0] * n8]);
                }
                break;
              case O$2.Square:
              default:
                if (h6 < 0)
                  a6.push([c2[0] + (i9[1] + i9[0]) * n8, c2[1] + (i9[1] - i9[0]) * n8]), a6.push([c2[0] + (t9[1] - t9[0]) * n8, c2[1] - (t9[0] + t9[1]) * n8]);
                else {
                  const e9 = Math.sqrt((1 + Math.abs(l4)) / 2), s8 = [t9[0] - i9[0], t9[1] - i9[1]];
                  this.normalize(s8);
                  const r14 = n8 / e9;
                  a6.push([c2[0] - s8[0] * r14, c2[1] - s8[1] * r14]);
                }
            }
        } else {
          const t9 = [c2[0] - u3[0], c2[1] - u3[1]];
          this.normalize(t9), a6.push([c2[0] + t9[1] * n8, c2[1] - t9[0] * n8]);
        }
      else {
        const t9 = [o4[0] - c2[0], o4[1] - c2[1]];
        this.normalize(t9), a6.push([c2[0] + t9[1] * n8, c2[1] - t9[0] * n8]);
      }
      u3 = c2, c2 = o4;
    }
    return a6.length < (l3 ? 3 : 2) ? null : (l3 && a6.push([a6[0][0], a6[0][1]]), a6);
  }
};
const c$1 = 1.7320508075688772, u$2 = 5, h$5 = P$1.OpenEnded;
let p$1 = class p {
  static local() {
    return null === p.instance && (p.instance = new p()), p.instance;
  }
  execute(t8, e9, r13, n8, o3) {
    return new P(t8, e9, r13);
  }
};
p$1.instance = null;
class P extends i$8 {
  constructor(t8, e9, r13) {
    super(t8, false, true), this._curveHelper = new s$5(), this._width = (void 0 !== e9.width ? e9.width : u$2) * r13, this._arrowType = void 0 !== e9.geometricEffectArrowType ? e9.geometricEffectArrowType : void 0 !== e9.arrowType ? e9.arrowType : h$5, this._offsetFlattenError = n$d * r13;
  }
  processPath(e9) {
    const r13 = a$6.createEmptyOptimizedCIM(e9.geometryType);
    switch (this._arrowType) {
      case P$1.OpenEnded:
      default:
        this._constructSimpleArrow(r13, e9, true);
        break;
      case P$1.Block:
        this._constructSimpleArrow(r13, e9, false);
        break;
      case P$1.Crossed:
        this._constructCrossedArrow(r13, e9);
    }
    return r13;
  }
  _constructSimpleArrow(t8, r13, n8) {
    const o3 = r13.pathLength();
    let s7 = this._width;
    o3 < 2 * s7 && (s7 = o3 / 2);
    const i8 = this._curveHelper.getSubCurve(r13, 0, o3 - s7);
    if (!i8 || !i8.nextPath())
      return;
    i8.seekPathStart();
    const c2 = s7 / 2;
    if (this._curveHelper.isEmpty(i8))
      return;
    const u3 = n$g(i8), h5 = this._constructOffset(u3, -c2);
    if (!h5)
      return;
    const p3 = this._constructOffset(u3, c2);
    if (!p3)
      return;
    const P2 = this._constructArrowBasePoint(h5, -c2 / 2);
    if (!P2)
      return;
    const l3 = this._constructArrowBasePoint(p3, c2 / 2);
    if (!l3)
      return;
    r13.seekInPath(r13.pathSize - 1);
    const f2 = [r13.x, r13.y];
    t8.pushPath(p3), t8.nextPath(), t8.nextPoint(), t8.setControlPoint(), t8.pushPoint(l3), t8.nextPoint(), t8.setControlPoint(), t8.pushPoint(f2), t8.nextPoint(), t8.setControlPoint(), t8.pushPoint(P2), t8.nextPoint(), t8.setControlPoint(), t8.pushPoints(h5.reverse()), t8.setControlPoint(), n8 || (t8.setControlPointAt(0), t8.setControlPointAt(t8.pathSize - 1), t8.pushPoint(p3[0])), t8.reset();
  }
  _constructCrossedArrow(t8, r13) {
    const n8 = r13.pathLength();
    let o3 = this._width;
    n8 < o3 * (1 + c$1 + 1) && (o3 = n8 / (1 + c$1 + 1)), r13.seekPathStart();
    const s7 = this._curveHelper.getSubCurve(r13, 0, n8 - o3 * (1 + c$1));
    if (!s7)
      return;
    s7.nextPath();
    const i8 = o3 / 2;
    if (this._curveHelper.isEmpty(s7))
      return;
    const u3 = n$g(s7), h5 = this._constructOffset(u3, i8);
    if (!h5)
      return;
    const p3 = this._constructOffset(u3, -i8);
    if (!p3)
      return;
    const P2 = this._curveHelper.getSubCurve(r13, 0, n8 - o3);
    if (!P2)
      return;
    if (P2.nextPath(), this._curveHelper.isEmpty(P2))
      return;
    const l3 = n$g(P2), f2 = this._constructOffset(l3, i8);
    if (!f2)
      return;
    const a6 = this._constructOffset(l3, -i8);
    if (!a6)
      return;
    const _2 = f2[f2.length - 1], m4 = this._constructArrowBasePoint(f2, i8 / 2);
    if (!m4)
      return;
    const C2 = a6[a6.length - 1], w2 = this._constructArrowBasePoint(a6, -i8 / 2);
    if (!w2)
      return;
    r13.seekInPath(r13.pathSize - 1);
    const x2 = [r13.x, r13.y];
    t8.pushPath(h5), t8.nextPath(), t8.nextPoint(), t8.setControlPoint(), t8.pushPoint(C2), t8.nextPoint(), t8.setControlPoint(), t8.pushPoint(w2), t8.nextPoint(), t8.setControlPoint(), t8.pushPoint(x2), t8.nextPoint(), t8.setControlPoint(), t8.pushPoint(m4), t8.nextPoint(), t8.setControlPoint(), t8.pushPoint(_2), t8.nextPoint(), t8.setControlPoint(), t8.pushPoints(p3.reverse()), t8.nextPoint(), t8.setControlPoint(), t8.reset();
  }
  _constructOffset(t8, e9) {
    return this._curveHelper.offset(t8, e9, O$2.Rounded, 4, this._offsetFlattenError);
  }
  _constructArrowBasePoint(t8, e9) {
    if (!t8 || t8.length < 2)
      return null;
    const r13 = t8[t8.length - 2], n8 = t8[t8.length - 1], o3 = [n8[0] - r13[0], n8[1] - r13[1]];
    return this._curveHelper.normalize(o3), [n8[0] + o3[1] * e9, n8[1] - o3[0] * e9];
  }
}
let m$2 = class m {
  static local() {
    return null === m.instance && (m.instance = new m()), m.instance;
  }
  execute(e9, t8, i8, s7, r13, n8) {
    return new l$4(e9, t8, i8, s7, r13, n8);
  }
};
m$2.instance = null;
let l$4 = class l {
  constructor(e9, t8, i8, n8, o3, m4) {
    this._inputGeometries = e9, this._tileKey = n8, this._geometryEngine = o3, this._curveHelper = new s$5(), this._size = (void 0 !== t8.size ? t8.size : 1) * i8, this._maxInflateSize = m4 * i8, this._offsetFlattenError = n$d * i8;
  }
  next() {
    let s7;
    for (; s7 = this._inputGeometries.next(); ) {
      if (0 === this._size)
        return s7;
      if ("esriGeometryEnvelope" === s7.geometryType) {
        if (this._size > 0) {
          const i8 = a$6.createEmptyOptimizedCIM(s7.geometryType), r14 = t$9(s7)[0], o3 = this._curveHelper.offset(r14, this._size, O$2.Rounded, 4, this._offsetFlattenError);
          if (o3)
            return i8.pushPath(o3), i8;
        } else if (this._size < 0) {
          const t8 = s7.asJSON();
          if (Math.min(t8.xmax - t8.xmin, t8.ymax - t8.ymin) + 2 * this._size > 0)
            return a$6.fromJSONCIM({ xmin: t8.xmin - this._size, xmax: t8.xmax + this._size, ymin: t8.ymin - this._size, ymax: t8.ymax + this._size });
        }
      }
      const r13 = this._geometryEngine;
      if (null == r13)
        return null;
      const m4 = this._tileKey ? i$9(s7, this._maxInflateSize) : s7;
      if (!m4)
        continue;
      const l3 = r13.buffer(f$1.WebMercator, m4.asJSON(), this._size, 1);
      return l3 ? a$6.fromJSONCIM(l3) : null;
    }
    return null;
  }
};
let e$9 = class e2 {
  static local() {
    return null === e2.instance && (e2.instance = new e2()), e2.instance;
  }
  execute(s7, t8, i8, h5, e9) {
    return new r$c(s7, t8, i8);
  }
};
e$9.instance = null;
let r$c = class r {
  constructor(s7, t8, i8) {
    this._defaultPointSize = 20, this._inputGeometries = s7, this._geomUnitsPerPoint = i8, this._rule = t8.rule ?? R$1.FullGeometry, this._defaultSize = this._defaultPointSize * i8;
  }
  next() {
    let i8;
    for (; i8 = this._inputGeometries.next(); ) {
      const h5 = this._processGeom(t$9(i8));
      if (h5 && h5.length)
        return a$6.fromJSONCIM({ paths: h5 });
    }
    return null;
  }
  _clone(s7) {
    return [s7[0], s7[1]];
  }
  _mid(s7, t8) {
    return [(s7[0] + t8[0]) / 2, (s7[1] + t8[1]) / 2];
  }
  _mix(s7, t8, i8, h5) {
    return [s7[0] * t8 + i8[0] * h5, s7[1] * t8 + i8[1] * h5];
  }
  _add(s7, t8) {
    return [s7[0] + t8[0], s7[1] + t8[1]];
  }
  _add2(s7, t8, i8) {
    return [s7[0] + t8, s7[1] + i8];
  }
  _sub(s7, t8) {
    return [s7[0] - t8[0], s7[1] - t8[1]];
  }
  _dist(s7, t8) {
    return Math.sqrt((s7[0] - t8[0]) * (s7[0] - t8[0]) + (s7[1] - t8[1]) * (s7[1] - t8[1]));
  }
  _norm(s7) {
    return Math.sqrt(s7[0] * s7[0] + s7[1] * s7[1]);
  }
  _normalize(s7, t8 = 1) {
    const i8 = t8 / this._norm(s7);
    s7[0] *= i8, s7[1] *= i8;
  }
  _leftPerpendicular(s7) {
    const t8 = -s7[1], i8 = s7[0];
    s7[0] = t8, s7[1] = i8;
  }
  _leftPerp(s7) {
    return [-s7[1], s7[0]];
  }
  _rightPerpendicular(s7) {
    const t8 = s7[1], i8 = -s7[0];
    s7[0] = t8, s7[1] = i8;
  }
  _rightPerp(s7) {
    return [s7[1], -s7[0]];
  }
  _dotProduct(s7, t8) {
    return s7[0] * t8[0] + s7[1] * t8[1];
  }
  _crossProduct(s7, t8) {
    return s7[0] * t8[1] - s7[1] * t8[0];
  }
  _rotateDirect(s7, t8, i8) {
    const h5 = s7[0] * t8 - s7[1] * i8, e9 = s7[0] * i8 + s7[1] * t8;
    s7[0] = h5, s7[1] = e9;
  }
  _makeCtrlPt(s7) {
    const t8 = [s7[0], s7[1]];
    return r$d(t8, 1), t8;
  }
  _addAngledTicks(s7, t8, i8, h5) {
    const e9 = this._sub(i8, t8);
    this._normalize(e9);
    const r13 = this._crossProduct(e9, this._sub(h5, t8));
    let _2;
    _2 = r13 > 0 ? this._rightPerp(e9) : this._leftPerp(e9);
    const c2 = Math.abs(r13) / 2, u3 = [];
    u3.push([t8[0] + (_2[0] - e9[0]) * c2, t8[1] + (_2[1] - e9[1]) * c2]), u3.push(t8), u3.push(i8), u3.push([i8[0] + (_2[0] + e9[0]) * c2, i8[1] + (_2[1] + e9[1]) * c2]), s7.push(u3);
  }
  _addBezier2(s7, t8, i8, h5, e9) {
    if (0 == e9--)
      return void s7.push(h5);
    const r13 = this._mid(t8, i8), _2 = this._mid(i8, h5), c2 = this._mid(r13, _2);
    this._addBezier2(s7, t8, r13, c2, e9), this._addBezier2(s7, c2, _2, h5, e9);
  }
  _addBezier3(s7, t8, i8, h5, e9, r13) {
    if (0 == r13--)
      return void s7.push(e9);
    const _2 = this._mid(t8, i8), c2 = this._mid(i8, h5), u3 = this._mid(h5, e9), o3 = this._mid(_2, c2), n8 = this._mid(c2, u3), a6 = this._mid(o3, n8);
    this._addBezier3(s7, t8, _2, o3, a6, r13), this._addBezier3(s7, a6, n8, u3, e9, r13);
  }
  _add90DegArc(s7, t8, i8, h5, e9) {
    const r13 = e9 ?? this._crossProduct(this._sub(i8, t8), this._sub(h5, t8)) > 0, _2 = this._mid(t8, i8), c2 = this._sub(_2, t8);
    r13 ? this._leftPerpendicular(c2) : this._rightPerpendicular(c2), _2[0] += c2[0], _2[1] += c2[1], this._addBezier3(s7, t8, this._mix(t8, 0.33333, _2, 0.66667), this._mix(i8, 0.33333, _2, 0.66667), i8, 4);
  }
  _addArrow(s7, t8, i8) {
    const h5 = t8[0], e9 = t8[1], r13 = t8[t8.length - 1], _2 = this._sub(h5, e9);
    this._normalize(_2);
    const c2 = this._crossProduct(_2, this._sub(r13, e9)), u3 = 0.5 * c2, o3 = this._leftPerp(_2), n8 = [r13[0] - o3[0] * c2, r13[1] - o3[1] * c2], a6 = t8.length - 1, p3 = [];
    p3.push(i8 ? [-o3[0], -o3[1]] : o3);
    let l3 = [-_2[0], -_2[1]];
    for (let d2 = 1; d2 < a6 - 1; d2++) {
      const s8 = this._sub(t8[d2 + 1], t8[d2]);
      this._normalize(s8);
      const i9 = this._dotProduct(s8, l3), h6 = this._crossProduct(s8, l3), e10 = Math.sqrt((1 + i9) / 2), r14 = this._sub(s8, l3);
      this._normalize(r14), r14[0] /= e10, r14[1] /= e10, p3.push(h6 < 0 ? [-r14[0], -r14[1]] : r14), l3 = s8;
    }
    p3.push(this._rightPerp(l3));
    for (let d2 = p3.length - 1; d2 > 0; d2--)
      s7.push([t8[d2][0] + p3[d2][0] * u3, t8[d2][1] + p3[d2][1] * u3]);
    s7.push([n8[0] + p3[0][0] * u3, n8[1] + p3[0][1] * u3]), s7.push([n8[0] + p3[0][0] * c2, n8[1] + p3[0][1] * c2]), s7.push(h5), s7.push([n8[0] - p3[0][0] * c2, n8[1] - p3[0][1] * c2]), s7.push([n8[0] - p3[0][0] * u3, n8[1] - p3[0][1] * u3]);
    for (let d2 = 1; d2 < p3.length; d2++)
      s7.push([t8[d2][0] - p3[d2][0] * u3, t8[d2][1] - p3[d2][1] * u3]);
  }
  _cp2(s7, t8, i8) {
    return s7.length >= 2 ? s7[1] : this._add2(s7[0], t8 * this._defaultSize, i8 * this._defaultSize);
  }
  _cp3(s7, t8, i8, h5) {
    if (s7.length >= 3)
      return s7[2];
    const e9 = this._mix(s7[0], 1 - i8, t8, i8), r13 = this._sub(t8, s7[0]);
    return this._normalize(r13), this._rightPerpendicular(r13), [e9[0] + r13[0] * h5 * this._defaultSize, e9[1] + r13[1] * h5 * this._defaultSize];
  }
  _arrowPath(s7) {
    if (s7.length > 2)
      return s7;
    const t8 = s7[0], i8 = this._cp2(s7, -4, 0), h5 = this._sub(t8, i8);
    this._normalize(h5);
    const e9 = this._rightPerp(h5);
    return [t8, i8, [t8[0] + (e9[0] - h5[0]) * this._defaultSize, t8[1] + (e9[1] - h5[1]) * this._defaultSize]];
  }
  _arrowLastSeg(s7) {
    const t8 = s7[0], i8 = this._cp2(s7, -4, 0);
    let h5;
    if (s7.length >= 3)
      h5 = s7[s7.length - 1];
    else {
      const s8 = this._sub(t8, i8);
      this._normalize(s8);
      const e9 = this._rightPerp(s8);
      h5 = [t8[0] + (e9[0] - s8[0]) * this._defaultSize, t8[1] + (e9[1] - s8[1]) * this._defaultSize];
    }
    return [i8, h5];
  }
  _processGeom(s7) {
    if (!s7)
      return null;
    const t8 = [];
    for (const e9 of s7) {
      if (!e9 || 0 === e9.length)
        continue;
      const s8 = e9.length;
      let r13 = e9[0];
      switch (this._rule) {
        case R$1.PerpendicularFromFirstSegment: {
          const s9 = this._cp2(e9, 0, -1), i8 = this._cp3(e9, s9, 0.5, 4), h5 = [];
          h5.push(i8), h5.push(this._mid(r13, s9)), t8.push(h5);
          break;
        }
        case R$1.ReversedFirstSegment: {
          const s9 = this._cp2(e9, 0, -1);
          t8.push([s9, r13]);
          break;
        }
        case R$1.PerpendicularToSecondSegment: {
          const s9 = this._cp2(e9, -4, 1), i8 = this._cp3(e9, s9, 0.882353, -1.94), h5 = [];
          h5.push(this._mid(s9, i8)), h5.push(r13), t8.push(h5);
          break;
        }
        case R$1.SecondSegmentWithTicks: {
          const s9 = this._cp2(e9, -4, 1), i8 = this._cp3(e9, s9, 0.882353, -1.94), h5 = this._sub(i8, s9);
          let _2;
          _2 = this._crossProduct(h5, this._sub(r13, s9)) > 0 ? this._rightPerp(_2) : this._leftPerp(h5);
          const c2 = [];
          c2.push([s9[0] + (_2[0] - h5[0]) / 3, s9[1] + (_2[1] - h5[1]) / 3]), c2.push(s9), c2.push(i8), c2.push([i8[0] + (_2[0] + h5[0]) / 3, i8[1] + (_2[1] + h5[1]) / 3]), t8.push(c2);
          break;
        }
        case R$1.DoublePerpendicular: {
          const s9 = this._cp2(e9, 0, -1), i8 = this._cp3(e9, s9, 0.5, 3), h5 = this._mid(r13, s9), _2 = this._sub(h5, i8);
          this._normalize(_2);
          const c2 = this._crossProduct(_2, this._sub(r13, i8));
          this._leftPerpendicular(_2);
          const u3 = [];
          u3.push(r13), u3.push([i8[0] + _2[0] * c2, i8[1] + _2[1] * c2]), t8.push(u3);
          const o3 = [];
          o3.push([i8[0] - _2[0] * c2, i8[1] - _2[1] * c2]), o3.push(s9), t8.push(o3);
          break;
        }
        case R$1.OppositeToFirstSegment: {
          const s9 = this._cp2(e9, 0, -1), i8 = this._cp3(e9, s9, 0.5, 3), h5 = this._mid(r13, s9), _2 = this._sub(h5, i8);
          this._normalize(_2);
          const c2 = this._crossProduct(_2, this._sub(r13, i8));
          this._leftPerpendicular(_2);
          const u3 = [];
          u3.push([i8[0] + _2[0] * c2, i8[1] + _2[1] * c2]), u3.push([i8[0] - _2[0] * c2, i8[1] - _2[1] * c2]), t8.push(u3);
          break;
        }
        case R$1.TriplePerpendicular: {
          const s9 = this._cp2(e9, 0, -1), i8 = this._cp3(e9, s9, 0.5, 4), h5 = this._mid(r13, s9), _2 = this._sub(h5, i8);
          this._normalize(_2);
          const c2 = this._crossProduct(_2, this._sub(r13, i8));
          this._leftPerpendicular(_2);
          const u3 = [];
          u3.push([i8[0] + _2[0] * c2 * 0.8, i8[1] + _2[1] * c2 * 0.8]), u3.push([h5[0] + 0.8 * (r13[0] - h5[0]), h5[1] + 0.8 * (r13[1] - h5[1])]), t8.push(u3), t8.push([i8, h5]);
          const o3 = [];
          o3.push([i8[0] - _2[0] * c2 * 0.8, i8[1] - _2[1] * c2 * 0.8]), o3.push([h5[0] + 0.8 * (s9[0] - h5[0]), h5[1] + 0.8 * (s9[1] - h5[1])]), t8.push(o3);
          break;
        }
        case R$1.HalfCircleFirstSegment: {
          const s9 = this._cp2(e9, 0, -1), i8 = this._cp3(e9, s9, 0.5, 4), h5 = this._mid(r13, s9);
          let _2 = this._sub(s9, r13);
          const c2 = Math.cos(Math.PI / 18), u3 = Math.sin(Math.PI / 18), o3 = Math.sqrt((1 + c2) / 2), n8 = Math.sqrt((1 - c2) / 2), a6 = [];
          let p3;
          this._crossProduct(_2, this._sub(i8, r13)) > 0 ? (a6.push(r13), _2 = this._sub(r13, h5), p3 = s9) : (a6.push(s9), _2 = this._sub(s9, h5), p3 = r13), this._rotateDirect(_2, o3, n8), _2[0] /= o3, _2[1] /= o3;
          for (let t9 = 1; t9 <= 18; t9++)
            a6.push(this._add(h5, _2)), this._rotateDirect(_2, c2, u3);
          a6.push(p3), t8.push(a6);
          break;
        }
        case R$1.HalfCircleSecondSegment: {
          const s9 = this._cp2(e9, 0, -1), i8 = this._cp3(e9, s9, 1, -1);
          let h5 = this._sub(r13, s9);
          this._normalize(h5);
          const _2 = this._crossProduct(h5, this._sub(i8, s9)) / 2;
          this._leftPerpendicular(h5);
          const c2 = [s9[0] + h5[0] * _2, s9[1] + h5[1] * _2];
          h5 = this._sub(s9, c2);
          const u3 = Math.cos(Math.PI / 18);
          let o3 = Math.sin(Math.PI / 18);
          _2 > 0 && (o3 = -o3);
          const n8 = [s9];
          for (let t9 = 1; t9 <= 18; t9++)
            this._rotateDirect(h5, u3, o3), n8.push(this._add(c2, h5));
          t8.push(n8);
          break;
        }
        case R$1.HalfCircleExtended: {
          const i8 = this._cp2(e9, 0, -2), h5 = this._cp3(e9, i8, 1, -1);
          let _2;
          if (s8 >= 4)
            _2 = e9[3];
          else {
            const s9 = this._sub(r13, i8);
            _2 = this._add(h5, s9);
          }
          const c2 = this._dist(i8, h5) / 2 / 0.75, u3 = this._sub(i8, r13);
          this._normalize(u3, c2);
          const o3 = this._sub(h5, _2);
          this._normalize(o3, c2);
          const n8 = [_2, h5];
          t8.push(n8);
          const a6 = [this._clone(h5)];
          this._addBezier3(a6, h5, this._add(h5, o3), this._add(i8, u3), i8, 4), a6.push(r13), t8.push(a6);
          break;
        }
        case R$1.OpenCircle: {
          const s9 = this._cp2(e9, -2, 0), i8 = this._sub(s9, r13), h5 = Math.cos(Math.PI / 18), _2 = -Math.sin(Math.PI / 18), c2 = [s9];
          for (let t9 = 1; t9 <= 33; t9++)
            this._rotateDirect(i8, h5, _2), c2.push(this._add(r13, i8));
          t8.push(c2);
          break;
        }
        case R$1.CoverageEdgesWithTicks: {
          const i8 = this._cp2(e9, 0, -1);
          let h5, _2;
          if (s8 >= 3)
            h5 = e9[2];
          else {
            const s9 = this._sub(i8, r13), t9 = this._leftPerp(s9);
            h5 = [r13[0] + t9[0] - 0.25 * s9[0], r13[1] + t9[1] - 0.25 * s9[1]];
          }
          if (s8 >= 4)
            _2 = e9[3];
          else {
            const s9 = this._mid(r13, i8), t9 = this._sub(r13, i8);
            this._normalize(t9), this._leftPerpendicular(t9);
            const e10 = this._crossProduct(t9, this._sub(h5, s9));
            this._rightPerpendicular(t9), _2 = [h5[0] + t9[0] * e10 * 2, h5[1] + t9[1] * e10 * 2];
          }
          const c2 = this._sub(i8, r13);
          let u3, o3;
          u3 = this._crossProduct(c2, this._sub(h5, r13)) > 0 ? this._rightPerp(c2) : this._leftPerp(c2), o3 = [], o3.push(h5), o3.push(r13), o3.push([r13[0] + (u3[0] - c2[0]) / 3, r13[1] + (u3[1] - c2[1]) / 3]), t8.push(o3), u3 = this._crossProduct(c2, this._sub(_2, i8)) > 0 ? this._rightPerp(u3) : this._leftPerp(c2), o3 = [], o3.push([i8[0] + (u3[0] + c2[0]) / 3, i8[1] + (u3[1] + c2[1]) / 3]), o3.push(i8), o3.push(_2), t8.push(o3);
          break;
        }
        case R$1.GapExtentWithDoubleTicks: {
          const i8 = this._cp2(e9, 0, 2), h5 = this._cp3(e9, i8, 0, 1);
          let _2;
          if (s8 >= 4)
            _2 = e9[3];
          else {
            const s9 = this._sub(i8, r13);
            _2 = this._add(h5, s9);
          }
          this._addAngledTicks(t8, r13, i8, this._mid(h5, _2)), this._addAngledTicks(t8, h5, _2, this._mid(r13, i8));
          break;
        }
        case R$1.GapExtentMidline: {
          const i8 = this._cp2(e9, 2, 0), h5 = this._cp3(e9, i8, 0, 1);
          let _2;
          if (s8 >= 4)
            _2 = e9[3];
          else {
            const s9 = this._sub(i8, r13);
            _2 = this._add(h5, s9);
          }
          const c2 = [];
          c2.push(this._mid(r13, h5)), c2.push(this._mid(i8, _2)), t8.push(c2);
          break;
        }
        case R$1.Chevron: {
          const i8 = this._cp2(e9, -1, -1);
          let h5;
          if (s8 >= 3)
            h5 = e9[2];
          else {
            const s9 = this._sub(i8, r13);
            this._leftPerpendicular(s9), h5 = this._add(r13, s9);
          }
          t8.push([i8, this._makeCtrlPt(r13), h5]);
          break;
        }
        case R$1.PerpendicularWithArc: {
          const s9 = this._cp2(e9, 0, -2), i8 = this._cp3(e9, s9, 0.5, -1);
          let h5 = this._sub(s9, r13);
          const _2 = this._norm(h5);
          h5[0] /= _2, h5[1] /= _2;
          const c2 = this._crossProduct(h5, this._sub(i8, r13));
          let u3 = this._dotProduct(h5, this._sub(i8, r13));
          u3 < 0.05 * _2 ? u3 = 0.05 * _2 : u3 > 0.95 * _2 && (u3 = 0.95 * _2);
          const o3 = [r13[0] + h5[0] * u3, r13[1] + h5[1] * u3];
          this._leftPerpendicular(h5);
          let n8 = [];
          n8.push([o3[0] - h5[0] * c2, o3[1] - h5[1] * c2]), n8.push([o3[0] + h5[0] * c2, o3[1] + h5[1] * c2]), t8.push(n8);
          const a6 = [s9[0] + h5[0] * c2, s9[1] + h5[1] * c2];
          h5 = this._sub(s9, a6);
          const p3 = Math.cos(Math.PI / 18);
          let l3 = Math.sin(Math.PI / 18);
          c2 < 0 && (l3 = -l3), n8 = [r13, s9];
          for (let t9 = 1; t9 <= 9; t9++)
            this._rotateDirect(h5, p3, l3), n8.push(this._add(a6, h5));
          t8.push(n8);
          break;
        }
        case R$1.ClosedHalfCircle: {
          const s9 = this._cp2(e9, 2, 0), i8 = this._mid(r13, s9), h5 = this._sub(s9, i8), _2 = Math.cos(Math.PI / 18), c2 = Math.sin(Math.PI / 18), u3 = [r13, s9];
          for (let t9 = 1; t9 <= 18; t9++)
            this._rotateDirect(h5, _2, c2), u3.push(this._add(i8, h5));
          t8.push(u3);
          break;
        }
        case R$1.TripleParallelExtended: {
          const s9 = this._cp2(e9, 0, -2), h5 = this._cp3(e9, s9, 1, -2), _2 = this._mid(r13, s9), c2 = this._sub(h5, s9);
          this._normalize(c2);
          const u3 = Math.abs(this._crossProduct(c2, this._sub(_2, s9))) / 2, o3 = this._dist(s9, h5), n8 = [s9, r13];
          n8.push([r13[0] + c2[0] * o3 * 0.5, r13[1] + c2[1] * o3 * 0.5]), t8.push(n8);
          const a6 = [];
          a6.push([_2[0] - c2[0] * u3, _2[1] - c2[1] * u3]), a6.push([_2[0] + c2[0] * o3 * 0.375, _2[1] + c2[1] * o3 * 0.375]), r$d(a6[a6.length - 1], 1), a6.push([_2[0] + c2[0] * o3 * 0.75, _2[1] + c2[1] * o3 * 0.75]), t8.push(a6);
          const p3 = [s9, h5];
          t8.push(p3);
          break;
        }
        case R$1.ParallelWithTicks: {
          const s9 = this._cp2(e9, 3, 0), i8 = this._cp3(e9, s9, 0.5, -1), h5 = this._sub(i8, s9);
          this._normalize(h5);
          const _2 = this._crossProduct(h5, this._sub(i8, r13));
          this._leftPerpendicular(h5), this._addAngledTicks(t8, r13, s9, i8), this._addAngledTicks(t8, this._mix(r13, 1, h5, _2), this._mix(s9, 1, h5, _2), this._mid(r13, s9));
          break;
        }
        case R$1.Parallel: {
          const s9 = this._cp2(e9, 3, 0), i8 = this._cp3(e9, s9, 0.5, -1), h5 = this._sub(s9, r13);
          this._normalize(h5);
          const _2 = this._leftPerp(h5), c2 = this._crossProduct(h5, this._sub(i8, r13));
          let u3 = [r13, s9];
          t8.push(u3), u3 = [], u3.push([r13[0] + _2[0] * c2, r13[1] + _2[1] * c2]), u3.push([s9[0] + _2[0] * c2, s9[1] + _2[1] * c2]), t8.push(u3);
          break;
        }
        case R$1.PerpendicularToFirstSegment: {
          const s9 = this._cp2(e9, 3, 0), i8 = this._cp3(e9, s9, 0.5, -1), h5 = this._mid(r13, s9), _2 = this._sub(s9, r13);
          this._normalize(_2);
          const c2 = this._crossProduct(_2, this._sub(i8, r13));
          this._leftPerpendicular(_2);
          const u3 = [];
          u3.push([h5[0] - _2[0] * c2 * 0.25, h5[1] - _2[1] * c2 * 0.25]), u3.push([h5[0] + _2[0] * c2 * 1.25, h5[1] + _2[1] * c2 * 1.25]), t8.push(u3);
          break;
        }
        case R$1.ParallelOffset: {
          const s9 = this._cp2(e9, 3, 0), i8 = this._cp3(e9, s9, 0.5, -1), h5 = this._sub(s9, r13);
          this._normalize(h5);
          const _2 = this._crossProduct(h5, this._sub(i8, r13));
          this._leftPerpendicular(h5);
          const c2 = [];
          c2.push([r13[0] - h5[0] * _2, r13[1] - h5[1] * _2]), c2.push([s9[0] - h5[0] * _2, s9[1] - h5[1] * _2]), t8.push(c2);
          const u3 = [];
          u3.push([r13[0] + h5[0] * _2, r13[1] + h5[1] * _2]), u3.push([s9[0] + h5[0] * _2, s9[1] + h5[1] * _2]), t8.push(u3);
          break;
        }
        case R$1.OffsetOpposite: {
          const s9 = this._cp2(e9, 3, 0), i8 = this._cp3(e9, s9, 0.5, -1), h5 = this._sub(s9, r13);
          this._normalize(h5);
          const _2 = this._crossProduct(h5, this._sub(i8, r13));
          this._leftPerpendicular(h5);
          const c2 = [];
          c2.push([r13[0] - h5[0] * _2, r13[1] - h5[1] * _2]), c2.push([s9[0] - h5[0] * _2, s9[1] - h5[1] * _2]), t8.push(c2);
          break;
        }
        case R$1.OffsetSame: {
          const s9 = this._cp2(e9, 3, 0), i8 = this._cp3(e9, s9, 0.5, -1), h5 = this._sub(s9, r13);
          this._normalize(h5);
          const _2 = this._crossProduct(h5, this._sub(i8, r13));
          this._leftPerpendicular(h5);
          const c2 = [];
          c2.push([r13[0] + h5[0] * _2, r13[1] + h5[1] * _2]), c2.push([s9[0] + h5[0] * _2, s9[1] + h5[1] * _2]), t8.push(c2);
          break;
        }
        case R$1.CircleWithArc: {
          let h5 = this._cp2(e9, 3, 0);
          const _2 = this._cp3(e9, h5, 0.5, -1);
          let c2, u3;
          if (s8 >= 4)
            c2 = e9[3], u3 = this._crossProduct(this._sub(c2, h5), this._sub(_2, h5)) > 0;
          else {
            c2 = h5, u3 = this._crossProduct(this._sub(c2, r13), this._sub(_2, r13)) > 0;
            const s9 = 24 * this._geomUnitsPerPoint, t9 = this._sub(c2, r13);
            this._normalize(t9, s9);
            const i8 = Math.sqrt(2) / 2;
            this._rotateDirect(t9, i8, u3 ? i8 : -i8), h5 = this._add(r13, t9);
          }
          const o3 = this._sub(h5, r13), n8 = Math.cos(Math.PI / 18), a6 = Math.sin(Math.PI / 18), p3 = [h5];
          for (let s9 = 1; s9 <= 36; s9++)
            this._rotateDirect(o3, n8, a6), p3.push(this._add(r13, o3));
          this._add90DegArc(p3, h5, c2, _2, u3), r$d(p3[p3.length - 8], 1), t8.push(p3);
          break;
        }
        case R$1.DoubleJog: {
          let i8, h5, _2 = this._cp2(e9, -3, 1);
          if (i8 = s8 >= 3 ? e9[2] : this._add(r13, this._sub(r13, _2)), s8 >= 4)
            h5 = e9[3];
          else {
            const s9 = r13;
            r13 = _2, h5 = i8;
            const t9 = this._dist(r13, s9), e10 = this._dist(h5, s9);
            let c3 = 30 * this._geomUnitsPerPoint;
            0.5 * t9 < c3 && (c3 = 0.5 * t9), 0.5 * e10 < c3 && (c3 = 0.5 * e10), _2 = this._mix(r13, c3 / t9, s9, (t9 - c3) / t9), i8 = this._mix(h5, c3 / e10, s9, (e10 - c3) / e10);
          }
          const c2 = this._mid(r13, _2), u3 = this._mid(h5, i8), o3 = this._dist(r13, _2), n8 = this._dist(i8, h5);
          let a6 = Math.min(o3, n8) / 8;
          a6 = Math.min(a6, 24 * this._geomUnitsPerPoint);
          const p3 = Math.cos(Math.PI / 4);
          let l3 = this._sub(r13, _2);
          this._normalize(l3, a6), this._crossProduct(l3, this._sub(h5, _2)) > 0 ? this._rotateDirect(l3, p3, -p3) : this._rotateDirect(l3, p3, p3);
          let d2 = [];
          d2.push(_2), d2.push(this._add(c2, l3)), d2.push(this._sub(c2, l3)), d2.push(r13), t8.push(d2), l3 = this._sub(h5, i8), this._normalize(l3, a6), this._crossProduct(l3, this._sub(r13, i8)) < 0 ? this._rotateDirect(l3, p3, p3) : this._rotateDirect(l3, p3, -p3), d2 = [], d2.push(i8), d2.push(this._add(u3, l3)), d2.push(this._sub(u3, l3)), d2.push(h5), t8.push(d2);
          break;
        }
        case R$1.PerpendicularOffset: {
          const s9 = this._cp2(e9, -4, 1), i8 = this._cp3(e9, s9, 0.882353, -1.94), h5 = this._sub(i8, s9);
          this._crossProduct(h5, this._sub(r13, s9)) > 0 ? this._rightPerpendicular(h5) : this._leftPerpendicular(h5);
          const _2 = [h5[0] / 8, h5[1] / 8], c2 = this._sub(this._mid(s9, i8), _2);
          t8.push([c2, r13]);
          break;
        }
        case R$1.LineExcludingLastSegment: {
          const s9 = this._arrowPath(e9), i8 = [];
          let h5 = s9.length - 2;
          for (; h5--; )
            i8.push(s9[h5]);
          t8.push(i8);
          break;
        }
        case R$1.MultivertexArrow: {
          const s9 = this._arrowPath(e9), i8 = [];
          this._addArrow(i8, s9, false), t8.push(i8);
          break;
        }
        case R$1.CrossedArrow: {
          const s9 = this._arrowPath(e9), i8 = [];
          this._addArrow(i8, s9, true), t8.push(i8);
          break;
        }
        case R$1.ChevronArrow: {
          const [s9, i8] = this._arrowLastSeg(e9), h5 = 10 * this._geomUnitsPerPoint, _2 = this._sub(r13, s9);
          this._normalize(_2);
          const c2 = this._crossProduct(_2, this._sub(i8, s9)), u3 = this._leftPerp(_2), o3 = [i8[0] - u3[0] * c2 * 2, i8[1] - u3[1] * c2 * 2], n8 = [];
          n8.push([i8[0] + _2[0] * h5, i8[1] + _2[1] * h5]), n8.push(r13), n8.push([o3[0] + _2[0] * h5, o3[1] + _2[1] * h5]), t8.push(n8);
          break;
        }
        case R$1.ChevronArrowOffset: {
          const [s9, i8] = this._arrowLastSeg(e9), h5 = this._sub(r13, s9);
          this._normalize(h5);
          const _2 = this._crossProduct(h5, this._sub(i8, s9));
          this._leftPerpendicular(h5);
          const c2 = [i8[0] - h5[0] * _2, i8[1] - h5[1] * _2], u3 = [];
          u3.push([c2[0] + h5[0] * _2 * 0.5, c2[1] + h5[1] * _2 * 0.5]), u3.push(this._mid(c2, r13)), u3.push([c2[0] - h5[0] * _2 * 0.5, c2[1] - h5[1] * _2 * 0.5]), t8.push(u3);
          break;
        }
        case R$1.PartialFirstSegment: {
          const [s9, i8] = this._arrowLastSeg(e9), h5 = this._sub(r13, s9);
          this._normalize(h5);
          const _2 = this._crossProduct(h5, this._sub(i8, s9));
          this._leftPerpendicular(h5);
          const c2 = [i8[0] - h5[0] * _2, i8[1] - h5[1] * _2];
          t8.push([s9, c2]);
          break;
        }
        case R$1.Arch: {
          const s9 = this._cp2(e9, 0, -1), i8 = this._cp3(e9, s9, 0.5, 1), h5 = this._sub(r13, s9), _2 = this._mix(i8, 1, h5, 0.55), c2 = this._mix(i8, 1, h5, -0.55), u3 = [r13];
          this._addBezier2(u3, r13, _2, i8, 4), this._addBezier2(u3, i8, c2, s9, 4), t8.push(u3);
          break;
        }
        case R$1.CurvedParallelTicks: {
          const s9 = this._cp2(e9, -4, 1), i8 = this._cp3(e9, s9, 0.882353, -1.94), h5 = this._sub(i8, s9);
          this._crossProduct(h5, this._sub(r13, s9)) > 0 ? this._rightPerpendicular(h5) : this._leftPerpendicular(h5);
          const _2 = [h5[0] / 8, h5[1] / 8], c2 = this._sub(this._mid(s9, i8), _2), u3 = this._sub(this._mix(s9, 0.75, i8, 0.25), _2), o3 = this._sub(this._mix(s9, 0.25, i8, 0.75), _2), n8 = [s9];
          this._addBezier2(n8, s9, u3, c2, 3), this._addBezier2(n8, c2, o3, i8, 3), t8.push(n8);
          for (let e10 = 0; e10 < 8; e10++) {
            const s10 = n8[2 * e10 + 1], i9 = [this._clone(s10)];
            i9.push(this._add(s10, [h5[0] / 4, h5[1] / 4])), t8.push(i9);
          }
          break;
        }
        case R$1.Arc90Degrees: {
          const s9 = this._cp2(e9, 0, -1), i8 = this._cp3(e9, s9, 0.5, 1), h5 = [s9];
          this._add90DegArc(h5, s9, r13, i8), t8.push(h5);
          break;
        }
        case R$1.FullGeometry:
        default:
          t8.push(e9);
      }
    }
    return t8;
  }
};
let r$b = class r2 {
  static local() {
    return null === r2.instance && (r2.instance = new r2()), r2.instance;
  }
  execute(e9, t8, i8, r13, n8) {
    return new u$1(e9, t8, i8);
  }
};
r$b.instance = null;
let u$1 = class u extends i$8 {
  constructor(e9, t8, r13) {
    super(e9, true, true), this._curveHelper = new s$5(), this._beginCut = (void 0 !== t8.beginCut ? t8.beginCut : 1) * r13, this._endCut = (void 0 !== t8.endCut ? t8.endCut : 1) * r13, this._middleCut = (void 0 !== t8.middleCut ? t8.middleCut : 0) * r13, this._invert = void 0 !== t8.invert && t8.invert, this._beginCut < 0 && (this._beginCut = 0), this._endCut < 0 && (this._endCut = 0), this._middleCut < 0 && (this._middleCut = 0);
  }
  processPath(t8) {
    const { _beginCut: i8, _endCut: r13, _middleCut: u3 } = this, n8 = t8.pathLength(), s7 = a$6.createEmptyOptimizedCIM("esriGeometryPolyline");
    if (this._invert) {
      if (0 !== i8 || 0 !== r13 || 0 !== u3)
        if (i8 + r13 + u3 >= n8)
          for (s7.startPath(); t8.nextPoint(); )
            s7.pushXY(t8.x, t8.y);
        else
          this._curveHelper.appendSubCurve(s7, t8, 0, i8), this._curveHelper.appendSubCurve(s7, t8, 0.5 * (n8 - u3), 0.5 * (n8 + u3)), this._curveHelper.appendSubCurve(s7, t8, n8 - r13, r13);
    } else if (0 === i8 && 0 === r13 && 0 === u3)
      for (s7.startPath(); t8.nextPoint(); )
        s7.pushXY(t8.x, t8.y);
    else
      i8 + r13 + u3 < n8 && (0 === u3 ? this._curveHelper.appendSubCurve(s7, t8, i8, n8 - r13) : (this._curveHelper.appendSubCurve(s7, t8, i8, 0.5 * (n8 - u3)), this._curveHelper.appendSubCurve(s7, t8, 0.5 * (n8 + u3), n8 - r13)));
    return 0 === s7.totalSize ? null : s7;
  }
};
const n$c = 1e-7;
let i$7 = class i2 {
  constructor() {
    this._values = [], this.extPtGap = 0, this.ctrlPtGap = 0, this._length = 0, this._currentValue = 0;
  }
  isEmpty() {
    return 0 === this._values.length;
  }
  size() {
    return this._values.length;
  }
  init(t8, e9, s7 = true) {
    if (this._setEmpty(), !t8 || 0 === t8.length)
      return false;
    for (let i8 = 0; i8 < t8.length; i8++) {
      let e10 = Math.abs(t8[i8]);
      s7 && e10 < n$c && (e10 = n$c), this._values.push(e10), this._length += e10;
    }
    return e9 && 1 & t8.length && (this._length *= 2), 0 !== this._length && (this.ctrlPtGap = this.extPtGap = 0, this._currentValue = -1, true);
  }
  scale(t8) {
    const e9 = this._values ? this._values.length : 0;
    for (let s7 = 0; s7 < e9; ++s7)
      this._values[s7] *= t8;
    this._length *= t8, this.extPtGap *= t8, this.ctrlPtGap *= t8;
  }
  addValue(t8) {
    this._length += t8, this._values.push(t8);
  }
  firstValue() {
    return this._values[0];
  }
  lastValue() {
    return this._values[this._values.length - 1];
  }
  nextValue() {
    return this._currentValue++, this._currentValue === this._values.length && (this._currentValue = 0), this._values[this._currentValue];
  }
  reset() {
    this._currentValue = -1;
  }
  length() {
    return this._length;
  }
  _setEmpty() {
    this.extPtGap = this.ctrlPtGap = this._length = 0, this._currentValue = -1, this._values.length = 0;
  }
};
let h$4 = class h {
  constructor() {
    this.pt = null, this.ca = 0, this.sa = 0;
  }
};
var r$a;
!function(t8) {
  t8[t8.FAIL = 0] = "FAIL", t8[t8.END = 1] = "END", t8[t8.CONTINUE = 2] = "CONTINUE";
}(r$a || (r$a = {}));
let a$5 = class a {
  constructor() {
    this.reset();
  }
  reset() {
    this.segment = null, this.segmentLength = 0, this.abscissa = 0, this.isPathEnd = false, this.isPartEnd = false;
  }
  isValid() {
    return null !== this.segment;
  }
  copyTo(t8) {
    t8.segment = this.segment, t8.segmentLength = this.segmentLength, t8.abscissa = this.abscissa, t8.isPathEnd = this.isPathEnd, t8.isPartEnd = this.isPartEnd;
  }
};
let o$3 = class o extends s$5 {
  constructor(t8 = 0, e9 = false) {
    super(t8, e9), this._tolerance = n$d, this._currentPosition = new a$5();
  }
  updateTolerance(t8) {
    this._tolerance = n$d * t8;
  }
  init(t8, e9, s7 = true) {
    return s7 ? (this._patternLength = e9.length(), this._partExtPtGap = e9.extPtGap, this._partCtrlPtGap = e9.ctrlPtGap) : (this._patternLength = 0, this._partExtPtGap = 0, this._partCtrlPtGap = 0), this._currentPosition.reset(), this._partSegCount = 0, this._pathCursor = t8, this._seg = -1, this._setPosAtNextPart();
  }
  curPositionIsValid() {
    return this._currentPosition.isValid();
  }
  nextPosition(t8, e9 = r$a.FAIL) {
    const s7 = new a$5();
    return !!this._nextPosition(t8, s7, null, e9) && (s7.copyTo(this._currentPosition), true);
  }
  curPointAndAngle(t8) {
    t8.pt = this._getPoint(this._currentPosition);
    const [e9, s7] = this._getAngleCS(this._currentPosition);
    t8.ca = e9, t8.sa = s7;
  }
  nextPointAndAngle(t8, e9, s7 = r$a.FAIL) {
    const n8 = new a$5();
    if (!this._nextPosition(t8, n8, null, s7))
      return false;
    n8.copyTo(this._currentPosition), e9.pt = this._getPoint(n8);
    const [i8, h5] = this._getAngleCS(n8);
    return e9.ca = i8, e9.sa = h5, true;
  }
  nextCurve(e9) {
    if (0 === e9)
      return null;
    const s7 = a$6.createEmptyOptimizedCIM("esriGeometryPolyline");
    s7.startPath(), s7.nextPath();
    const n8 = new a$5();
    return this._nextPosition(e9, n8, s7, r$a.END) ? (n8.copyTo(this._currentPosition), s7) : null;
  }
  isPathEnd() {
    return this._currentPosition.isPathEnd;
  }
  getPathEnd() {
    return this._currentPosition.segment[1];
  }
  getPt(t8) {
    return this._pathCursor.seekInPath(t8), [this._pathCursor.x, this._pathCursor.y];
  }
  getSeg(t8) {
    return [this.getPt(t8), this.getPt(t8 + 1)];
  }
  _nextPosition(t8, e9, s7, n8) {
    if (this._currentPosition.isPathEnd)
      return false;
    let i8 = this._currentPosition.abscissa;
    for (this._currentPosition.segmentLength > 0 && (i8 /= this._currentPosition.segmentLength), this._currentPosition.copyTo(e9); e9.abscissa + t8 * this._partLengthRatio > e9.segmentLength + this._tolerance; ) {
      if (s7) {
        if (0 === s7.pathSize)
          if (0 === i8) {
            const t10 = e9.segment[0];
            s7.pushXY(t10[0], t10[1]);
          } else
            s7.pushPoint(this.getSegCoord2D(e9.segment, i8));
        const t9 = e9.segment[1];
        s7.pushXY(t9[0], t9[1]);
      }
      if (i8 = 0, t8 -= (e9.segmentLength - e9.abscissa) / this._partLengthRatio, this._partSegCount)
        e9.segment = this._nextSegment(), e9.segmentLength = this.getSegLength(e9.segment), e9.abscissa = 0, this._partSegCount--;
      else {
        if (!this._setPosAtNextPart())
          return n8 !== r$a.FAIL && (e9.segmentLength = this.getSegLength(e9.segment), e9.isPartEnd = true, n8 === r$a.END ? (e9.abscissa = e9.segmentLength, e9.isPathEnd = true) : e9.abscissa = e9.segmentLength + t8, true);
        this._currentPosition.copyTo(e9);
      }
    }
    if (e9.abscissa += t8 * this._partLengthRatio, s7) {
      0 === s7.pathSize && (0 === i8 ? s7.pushPoint(e9.segment[0]) : s7.pushPoint(this.getSegCoord2D(e9.segment, i8)));
      const t9 = e9.abscissa / e9.segmentLength;
      1 === t9 ? s7.pushPoint(e9.segment[1]) : s7.pushPoint(this.getSegCoord2D(e9.segment, t9));
    }
    return this._partSegCount || Math.abs(e9.abscissa - e9.segmentLength) < this._tolerance && (e9.isPathEnd = this._partIsLast, e9.isPartEnd = true), true;
  }
  _getPoint(t8) {
    const e9 = t8.segmentLength <= 0 ? 0 : t8.abscissa / t8.segmentLength;
    return this.getSegCoord2D(this._currentPosition.segment, e9);
  }
  _getAngleCS(t8) {
    const e9 = t8.segmentLength <= 0 ? 0 : t8.abscissa / t8.segmentLength;
    return this.getSegAngleCS(this._currentPosition.segment, e9);
  }
  _setPosAtNextPart() {
    for (; this._partSegCount; )
      this._hasNextSegment() && this._nextSegment(), this._partSegCount--;
    if (!this._hasNextSegment())
      return false;
    for (this._partLength = 0, this._partIsLast = true, this._partSegCount = 0; this._hasNextSegment(); )
      if (this._partLength += this.getSegLength(this._nextSegment()), this._partSegCount++, this._pathCursor.getControlPointAt(this._getEndPointIndex())) {
        this._partIsLast = !this._hasNextSegment();
        break;
      }
    let t8 = this._partSegCount;
    for (; t8; )
      this._previousSegment(), --t8;
    this._currentPosition.segment = this._nextSegment(), this._currentPosition.segmentLength = this.getSegLength(this._currentPosition.segment), this._currentPosition.abscissa = 0, this._currentPosition.isPathEnd = this._currentPosition.isPartEnd = false, --this._partSegCount;
    const e9 = this._getStartPointIndex();
    this._ctrlPtBegin = this._pathCursor.getControlPointAt(e9);
    let s7 = e9 + this._partSegCount + 1;
    if (s7 >= this._pathCursor.pathSize && (s7 = 0), this._ctrlPtEnd = this._pathCursor.getControlPointAt(s7), this._patternLength > 0) {
      const t9 = this._ctrlPtBegin ? this._partCtrlPtGap : this._partExtPtGap, e10 = this._ctrlPtEnd ? this._partCtrlPtGap : this._partExtPtGap;
      let s8 = Math.round((this._partLength - (t9 + e10)) / this._patternLength);
      s8 <= 0 && (s8 = t9 + e10 > 0 ? 0 : 1), this._partLengthRatio = this._partLength / (t9 + e10 + s8 * this._patternLength), this._partLengthRatio < 0.01 && (this._partLengthRatio = 1);
    } else
      this._partLengthRatio = 1;
    return true;
  }
  _hasNextSegment() {
    return this._seg < this._pathCursor.pathSize - 2;
  }
  _previousSegment() {
    return this.getSeg(--this._seg);
  }
  _nextSegment() {
    return this.getSeg(++this._seg);
  }
  _getStartPointIndex() {
    return this._seg;
  }
  _getEndPointIndex() {
    return this._seg + 1;
  }
};
let n$b = class n {
  static local() {
    return null === n.instance && (n.instance = new n()), n.instance;
  }
  execute(t8, e9, s7, i8, r13) {
    return new h$3(t8, e9, s7);
  }
};
n$b.instance = null;
let h$3 = class h2 extends i$8 {
  constructor(t8, e9, s7) {
    super(t8, true, true), this._firstCurve = null, this._walker = new o$3(), this._walker.updateTolerance(s7), this._endings = e9.lineDashEnding, this._customDashPos = -(e9.offsetAlongLine ?? 0) * s7, this._offsetAtEnd = (e9.customEndingOffset ?? 0) * s7, this._pattern = new i$7(), this._pattern.init(e9.dashTemplate, true), this._pattern.scale(s7);
  }
  processPath(s7) {
    if (0 === this._pattern.length()) {
      this.iteratePath = false;
      const i8 = n$g(s7);
      return a$6.fromJSONCIM({ paths: [i8] });
    }
    if (!this.iteratePath) {
      let r14 = true;
      switch (this._endings) {
        case k$1.HalfPattern:
        case k$1.HalfGap:
        default:
          this._pattern.extPtGap = 0;
          break;
        case k$1.FullPattern:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._pattern.firstValue());
          break;
        case k$1.FullGap:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._pattern.lastValue());
          break;
        case k$1.NoConstraint:
          this.isClosed || (r14 = false);
          break;
        case k$1.Custom:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._offsetAtEnd);
      }
      const a7 = s7.pathLength();
      if (this._pattern.isEmpty() || a7 < 0.1 * this._pattern.length()) {
        const i8 = n$g(s7);
        return a$6.fromJSONCIM({ paths: [i8] });
      }
      if (!this._walker.init(s7, this._pattern, r14)) {
        const i8 = n$g(s7);
        return a$6.fromJSONCIM({ paths: [i8] });
      }
    }
    let r13;
    if (this.iteratePath)
      r13 = this._pattern.nextValue();
    else {
      let t8;
      switch (this._endings) {
        case k$1.HalfPattern:
        default:
          t8 = 0.5 * this._pattern.firstValue();
          break;
        case k$1.HalfGap:
          t8 = 0.5 * -this._pattern.lastValue();
          break;
        case k$1.FullGap:
          t8 = -this._pattern.lastValue();
          break;
        case k$1.FullPattern:
          t8 = 0;
          break;
        case k$1.NoConstraint:
        case k$1.Custom:
          t8 = -this._customDashPos;
      }
      let e9 = t8 / this._pattern.length();
      e9 -= Math.floor(e9), t8 = e9 * this._pattern.length(), this._pattern.reset(), r13 = this._pattern.nextValue();
      let s8 = false;
      for (; t8 >= r13; )
        t8 -= r13, r13 = this._pattern.nextValue(), s8 = !s8;
      r13 -= t8, s8 ? (this._walker.nextPosition(r13), r13 = this._pattern.nextValue()) : this.isClosed && (this._firstCurve = this._walker.nextCurve(r13), r13 = this._pattern.nextValue(), this._walker.nextPosition(r13), r13 = this._pattern.nextValue());
    }
    let a6 = this._walker.nextCurve(r13);
    if (a6)
      if (this._walker.isPathEnd()) {
        if (this.iteratePath = false, this._firstCurve) {
          for (this._firstCurve.nextPath(); this._firstCurve.nextPoint(); )
            a6.pushXY(this._firstCurve.x, this._firstCurve.y);
          this._firstCurve = null;
        }
      } else
        r13 = this._pattern.nextValue(), !this._walker.nextPosition(r13) || this._walker.isPathEnd() ? (this.iteratePath = false, this._firstCurve && (a6.pushCursor(this._firstCurve), this._firstCurve = null)) : this.iteratePath = true;
    else
      this.iteratePath = false, a6 = this._firstCurve, this._firstCurve = null;
    return a6?.reset(), a6;
  }
};
let s$4 = class s4 {
  static local() {
    return null === s4.instance && (s4.instance = new s4()), s4.instance;
  }
  execute(t8, e9, i8, n8, s7, m4) {
    return new r$9(t8, e9, i8, n8, s7, m4);
  }
};
s$4.instance = null;
let r$9 = class r3 {
  constructor(t8, e9, n8, s7, r13, m4) {
    switch (this._inputGeometries = t8, this._tileKey = s7, this._geometryEngine = r13, this._maxInflateSize = m4 * n8, this._width = (void 0 !== e9.width ? e9.width : 2) * n8, e9.method) {
      case B$2.Mitered:
      case B$2.Bevelled:
      case B$2.Rounded:
      case B$2.TrueBuffer:
      case B$2.Square:
    }
    this._option = e9.option;
  }
  next() {
    let i8;
    for (; i8 = this._inputGeometries.next(); ) {
      if ("esriGeometryEnvelope" === i8.geometryType && this._width > 0) {
        const e9 = i8.asJSON();
        return Math.min(e9.xmax - e9.xmin, e9.ymax - e9.ymin) - 2 * this._width < 0 ? i8 : a$6.fromJSONCIM({ paths: [[[e9.xmin + this._width, e9.ymin + this._width], [e9.xmax - this._width, e9.ymin + this._width], [e9.xmax - this._width, e9.ymax - this._width], [e9.xmin + this._width, e9.ymax - this._width], [e9.xmin + this._width, e9.ymin + this._width]], [[e9.xmin, e9.ymin], [e9.xmin, e9.ymax], [e9.xmax, e9.ymax], [e9.xmax, e9.ymin], [e9.xmin, e9.ymin]]] });
      }
      if ("esriGeometryPolygon" === i8.geometryType) {
        if (0 === this._width)
          return i8.clone();
        const t8 = this._geometryEngine;
        if (null == t8)
          return null;
        const s7 = this._tileKey ? i$9(i8, this._maxInflateSize) : i8.clone();
        if (!s7)
          continue;
        const r13 = t8.buffer(f$1.WebMercator, s7.asJSON(), -this._width, 1);
        if (r13)
          for (const e9 of r13.rings)
            e9 && s7.pushPath(e9.reverse());
        return s7;
      }
    }
    return null;
  }
};
let e$8 = class e3 {
  static local() {
    return null === e3.instance && (e3.instance = new e3()), e3.instance;
  }
  execute(t8, i8, s7, e9, o3) {
    return new n$a(t8, i8, s7);
  }
};
e$8.instance = null;
let n$a = class n2 extends i$8 {
  constructor(t8, i8, e9) {
    super(t8, false, true), this._curveHelper = new s$5(), this._length = (void 0 !== i8.length ? i8.length : 20) * e9, this._angle = void 0 !== i8.angle ? i8.angle : 225, this._position = void 0 !== i8.position ? i8.position : 50, this._length < 0 && (this._length = -this._length), this._position < 20 && (this._position = 20), this._position > 80 && (this._position = 80), this._mirror = false;
  }
  processPath(i8) {
    const s7 = a$6.createEmptyOptimizedCIM("esriGeometryPolyline");
    if (this._curveHelper.isEmpty(i8))
      return null;
    i8.seekInPath(0);
    const e9 = i8.x, n8 = i8.y;
    i8.seekInPath(i8.pathSize - 1);
    const o3 = i8.x, r13 = i8.y, h5 = [o3 - e9, r13 - n8];
    this._curveHelper.normalize(h5);
    const l3 = e9 + (o3 - e9) * this._position / 100, _2 = n8 + (r13 - n8) * this._position / 100, a6 = Math.cos((90 - this._angle) / 180 * Math.PI);
    let p3 = Math.sin((90 - this._angle) / 180 * Math.PI);
    this._mirror && (p3 = -p3), this._mirror = !this._mirror;
    const c2 = [l3 - this._length / 2 * a6, _2 - this._length / 2 * p3], m4 = [l3 + this._length / 2 * a6, _2 + this._length / 2 * p3];
    return s7.pushPath([[e9, n8], c2, m4, [o3, r13]]), s7;
  }
};
let t$4 = class t4 {
  static local() {
    return null === t4.instance && (t4.instance = new t4()), t4.instance;
  }
  execute(t8, s7, n8, o3, i8) {
    return new e$7(t8, s7, n8);
  }
};
t$4.instance = null;
let e$7 = class e4 {
  constructor(t8, e9, s7) {
    this._inputGeometries = t8, this._offsetX = void 0 !== e9.offsetX ? e9.offsetX * s7 : 0, this._offsetY = void 0 !== e9.offsetY ? e9.offsetY * s7 : 0;
  }
  next() {
    let t8 = this._inputGeometries.next();
    for (; t8; ) {
      if (t8.totalSize > 0)
        return this._move(t8.clone(), this._offsetX, this._offsetY);
      t8 = this._inputGeometries.next();
    }
    return null;
  }
  _move(t8, e9, s7) {
    for (; t8.nextPath(); )
      for (; t8.nextPoint(); )
        t8.x = t8.x + e9, t8.y = t8.y + s7;
    return t8.reset(), t8;
  }
};
let m$1 = class m2 {
  static local() {
    return null === m2.instance && (m2.instance = new m2()), m2.instance;
  }
  execute(t8, e9, o3, s7, r13, i8) {
    return new h$2(t8, e9, o3, s7, r13, i8);
  }
};
m$1.instance = null;
let h$2 = class h3 {
  constructor(t8, e9, o3, s7, n8, f2) {
    this._inputGeometries = t8, this._tileKey = s7, this._geometryEngine = n8, this._curveHelper = new s$5(), this._offset = (e9.offset ?? 1) * o3, this._method = e9.method, this._maxInflateSize = f2 * o3, this._option = e9.option, this._offsetFlattenError = n$d * o3;
  }
  next() {
    let r13;
    for (; r13 = this._inputGeometries.next(); ) {
      if (0 === this._offset)
        return r13.clone();
      if ("esriGeometryEnvelope" === r13.geometryType) {
        if (this._method === O$2.Rounded && this._offset > 0) {
          const o3 = n$g(r13), s8 = this._curveHelper.offset(o3, -this._offset, this._method, 4, this._offsetFlattenError);
          if (s8) {
            const e9 = a$6.createEmptyOptimizedCIM(r13.geometryType);
            return e9.pushPath(s8), e9;
          }
          return null;
        }
        const s7 = r13.asJSON();
        if (m$3(s7) && Math.min(s7.xmax - s7.xmin, s7.ymax - s7.ymin) + 2 * this._offset > 0)
          return a$6.fromJSONCIM({ xmin: s7.xmin - this._offset, xmax: s7.xmax + this._offset, ymin: s7.ymin - this._offset, ymax: s7.ymax + this._offset });
      }
      const i8 = this._geometryEngine;
      if (null == i8)
        continue;
      const m4 = this._tileKey ? i$9(r13, this._maxInflateSize) : r13.clone();
      if (!m4)
        continue;
      const h5 = i8.offset(f$1.WebMercator, m4.asJSON(), -this._offset, 1, this._method, 4, this._offsetFlattenError);
      return h5 ? a$6.fromJSONCIM(h5) : null;
    }
    return null;
  }
};
let e$6 = class e5 {
  static local() {
    return null === e5.instance && (e5.instance = new e5()), e5.instance;
  }
  execute(e9, n8, r13, s7, i8) {
    return new t$3(e9, n8, r13);
  }
};
e$6.instance = null;
let t$3 = class t5 {
  constructor(e9, t8, n8) {
    this._inputGeometries = e9, this._reverse = void 0 === t8.reverse || t8.reverse;
  }
  next() {
    let e9 = this._inputGeometries.next();
    for (; e9; ) {
      if (!this._reverse)
        return e9;
      if ("esriGeometryPolyline" === e9.geometryType)
        return n$9(e9.clone());
      e9 = this._inputGeometries.next();
    }
    return null;
  }
};
function n$9(e9) {
  for (; e9.nextPath(); )
    for (let t8 = 0; t8 < e9.pathSize / 2; t8++) {
      e9.seekInPath(t8);
      const n8 = e9.x, r13 = e9.y;
      e9.seekInPath(e9.pathSize - t8 - 1);
      const s7 = e9.x, i8 = e9.y;
      e9.x = n8, e9.y = r13, e9.seekInPath(t8), e9.x = s7, e9.y = i8;
    }
  return e9.reset(), e9;
}
let e$5 = class e6 {
  static local() {
    return null === e6.instance && (e6.instance = new e6()), e6.instance;
  }
  execute(t8, e9, r13, s7, o3) {
    return new n$8(t8, e9, r13);
  }
};
e$5.instance = null;
let n$8 = class n3 {
  constructor(t8, e9, n8) {
    this._inputGeometries = t8, this._rotateAngle = void 0 !== e9.angle ? e9.angle * Math.PI / 180 : 0;
  }
  next() {
    let e9 = this._inputGeometries.next();
    for (; e9; ) {
      if (0 === this._rotateAngle || "esriGeometryPoint" === e9.geometryType)
        return e9;
      if (e9.totalSize > 0) {
        const n8 = c$2(e9), r13 = (n8[2] + n8[0]) / 2, s7 = (n8[3] + n8[1]) / 2;
        return e9.reset(), this._rotate(e9.clone(), r13, s7);
      }
      e9 = this._inputGeometries.next();
    }
    return null;
  }
  _rotate(t8, e9, n8) {
    const r13 = Math.cos(this._rotateAngle), s7 = Math.sin(this._rotateAngle);
    for (; t8.nextPath(); )
      for (; t8.nextPoint(); ) {
        const o3 = t8.x - e9, i8 = t8.y - n8;
        t8.x = e9 + o3 * r13 - i8 * s7, t8.y = n8 + o3 * s7 + i8 * r13;
      }
    return t8.reset(), t8;
  }
};
let e$4 = class e7 {
  static local() {
    return null === e7.instance && (e7.instance = new e7()), e7.instance;
  }
  execute(t8, e9, o3, s7, n8) {
    return new r$8(t8, e9, o3);
  }
};
e$4.instance = null;
let r$8 = class r4 {
  constructor(t8, e9, r13) {
    this._inputGeometries = t8, this._xFactor = void 0 !== e9.XScaleFactor ? e9.XScaleFactor : 1.15, this._yFactor = void 0 !== e9.YScaleFactor ? e9.YScaleFactor : 1.15;
  }
  next() {
    const e9 = this._inputGeometries.next();
    if (e9) {
      if (1 === this._xFactor && 1 === this._yFactor)
        return e9;
      if ("esriGeometryPoint" === e9.geometryType)
        return e9;
      if (e9.totalSize > 0) {
        const r13 = c$2(e9), o3 = (r13[2] + r13[0]) / 2, s7 = (r13[3] + r13[1]) / 2;
        return e9.reset(), this._scaleCursor(e9.clone(), o3, s7);
      }
    }
    return null;
  }
  _scaleCursor(t8, e9, r13) {
    for (; t8.nextPath(); )
      for (; t8.nextPoint(); )
        t8.x = e9 + (t8.x - e9) * this._xFactor, t8.y = r13 + (t8.y - r13) * this._yFactor;
    return t8.reset(), t8;
  }
};
let n$7 = class n4 {
  static local() {
    return null === n4.instance && (n4.instance = new n4()), n4.instance;
  }
  execute(t8, e9, i8, s7, h5) {
    return new r$7(t8, e9, i8);
  }
};
n$7.instance = null;
let r$7 = class r5 {
  constructor(t8, e9, h5) {
    this._inputGeometries = t8, this._height = (void 0 !== e9.amplitude ? e9.amplitude : 2) * h5, this._period = (void 0 !== e9.period ? e9.period : 3) * h5, this._style = e9.waveform, this._height <= 0 && (this._height = Math.abs(this._height)), this._period <= 0 && (this._period = Math.abs(this._period)), this._pattern = new i$7(), this._pattern.addValue(this._period), this._pattern.addValue(this._period), this._walker = new o$3(), this._walker.updateTolerance(h5);
  }
  next() {
    let t8 = this._inputGeometries.next();
    for (; t8; ) {
      if (0 === this._height || 0 === this._period)
        return t8;
      const e9 = this._processGeom(t8);
      if (e9)
        return e9;
      t8 = this._inputGeometries.next();
    }
    return null;
  }
  _processGeom(i8) {
    const s7 = a$6.createEmptyOptimizedCIM(i8.geometryType);
    for (; i8.nextPath(); ) {
      s7.startPath();
      const t8 = i8.pathLength();
      if (this._walker.init(i8, this._pattern))
        switch (this._style) {
          case A$2.Sinus:
          default:
            this._constructCurve(s7, t8, false);
            break;
          case A$2.Square:
            this._constructSquare(s7, t8);
            break;
          case A$2.Triangle:
            this._constructTriangle(s7, t8);
            break;
          case A$2.Random:
            this._constructCurve(s7, t8, true);
        }
      else
        for (; i8.nextPoint(); )
          s7.pushXY(i8.x, i8.y);
    }
    return s7;
  }
  _constructCurve(t8, e9, i8) {
    let s7 = Math.round(e9 / this._period);
    0 === s7 && (s7 = 1);
    const n8 = s7 * 16 + 1, r13 = e9 / s7, a6 = this._period / 16, o3 = 1 / n8, p3 = 2 * Math.PI * e9 / r13, _2 = 2 * Math.PI * Math.random(), u3 = 2 * Math.PI * Math.random(), l3 = 2 * Math.PI * Math.random(), c2 = 0.75 - Math.random() / 2, d2 = 0.75 - Math.random() / 2, g2 = new h$4();
    this._walker.curPointAndAngle(g2), t8.pushPoint(g2.pt);
    let w2 = 0;
    for (; ; ) {
      if (!this._walker.nextPointAndAngle(a6, g2)) {
        t8.pushPoint(this._walker.getPathEnd());
        break;
      }
      {
        const e10 = w2;
        let s8;
        if (w2 += o3, i8) {
          const t9 = this._height / 2 * (1 + 0.3 * Math.sin(c2 * p3 * e10 + _2));
          s8 = t9 * Math.sin(p3 * e10 + u3), s8 += t9 * Math.sin(d2 * p3 * e10 + l3), s8 /= 2;
        } else
          s8 = 0.5 * this._height * Math.sin(0.5 * p3 * e10);
        t8.pushXY(g2.pt[0] - s8 * g2.sa, g2.pt[1] + s8 * g2.ca);
      }
    }
  }
  _constructSquare(t8, e9) {
    Math.round(e9 / this._period);
    let i8 = true;
    for (; ; ) {
      let e10 = false;
      if (this._walker.curPositionIsValid()) {
        const s7 = new h$4();
        this._walker.curPointAndAngle(s7);
        const n8 = new h$4();
        if (this._walker.nextPointAndAngle(this._period, n8)) {
          const r13 = new h$4();
          this._walker.nextPointAndAngle(this._period, r13) && (i8 ? (t8.pushPoint(s7.pt), i8 = false) : t8.pushPoint(s7.pt), t8.pushXY(s7.pt[0] - this._height / 2 * s7.sa, s7.pt[1] + this._height / 2 * s7.ca), t8.pushXY(n8.pt[0] - this._height / 2 * n8.sa, n8.pt[1] + this._height / 2 * n8.ca), t8.pushXY(n8.pt[0] + this._height / 2 * n8.sa, n8.pt[1] - this._height / 2 * n8.ca), t8.pushXY(r13.pt[0] + this._height / 2 * r13.sa, r13.pt[1] - this._height / 2 * r13.ca), e10 = true);
        }
      }
      if (!e10) {
        t8.pushPoint(this._walker.getPathEnd());
        break;
      }
    }
  }
  _constructTriangle(t8, e9) {
    Math.round(e9 / this._period);
    let i8 = true;
    for (; ; ) {
      let e10 = false;
      if (this._walker.curPositionIsValid()) {
        const s7 = new h$4();
        this._walker.curPointAndAngle(s7);
        const n8 = new h$4();
        if (this._walker.nextPointAndAngle(this._period / 2, n8)) {
          const r13 = new h$4();
          this._walker.nextPointAndAngle(this._period, r13) && (this._walker.nextPosition(this._period / 2) && (i8 ? (t8.pushPoint(s7.pt), i8 = false) : t8.pushPoint(s7.pt), t8.pushXY(n8.pt[0] - this._height / 2 * n8.sa, n8.pt[1] + this._height / 2 * n8.ca), t8.pushXY(r13.pt[0] + this._height / 2 * r13.sa, r13.pt[1] - this._height / 2 * r13.ca)), e10 = true);
        }
      }
      if (!e10) {
        t8.pushPoint(this._walker.getPathEnd());
        break;
      }
    }
  }
};
let a$4 = class a2 {
  static local() {
    return null === a2.instance && (a2.instance = new a2()), a2.instance;
  }
  execute(t8, e9, s7, i8, n8) {
    return new r$6(t8, e9, s7);
  }
};
a$4.instance = null;
let r$6 = class r6 extends s$6 {
  constructor(t8, e9, n8) {
    super(t8), this._geometryWalker = new o$3(), this._geometryWalker.updateTolerance(n8), this._angleToLine = e9.angleToLine ?? true, this._offset = (e9.offset ? e9.offset : 0) * n8, this._originalEndings = e9.endings, this._offsetAtEnd = (e9.customEndingOffset ? e9.customEndingOffset : 0) * n8, this._position = -(e9.offsetAlongLine ? e9.offsetAlongLine : 0) * n8, this._pattern = new i$7(), this._pattern.init(e9.placementTemplate, false), this._pattern.scale(n8), this._endings = this._originalEndings;
  }
  processPath(t8) {
    if (this._pattern.isEmpty())
      return null;
    let s7;
    if (this.iteratePath)
      s7 = this._pattern.nextValue();
    else {
      this._originalEndings === X.WithFullGap && this.isClosed ? this._endings = X.WithMarkers : this._endings = this._originalEndings, this._pattern.extPtGap = 0;
      let i9, n8 = true;
      switch (this._endings) {
        case X.NoConstraint:
          i9 = -this._position, i9 = this._adjustPosition(i9), n8 = false;
          break;
        case X.WithHalfGap:
        default:
          i9 = -this._pattern.lastValue() / 2;
          break;
        case X.WithFullGap:
          i9 = -this._pattern.lastValue(), this._pattern.extPtGap = this._pattern.lastValue();
          break;
        case X.WithMarkers:
          i9 = 0;
          break;
        case X.Custom:
          i9 = -this._position, i9 = this._adjustPosition(i9), this._pattern.extPtGap = 0.5 * this._offsetAtEnd;
      }
      if (!this._geometryWalker.init(t8, this._pattern, n8))
        return null;
      this._pattern.reset();
      let a6 = 0;
      for (; i9 > a6; )
        i9 -= a6, a6 = this._pattern.nextValue();
      a6 -= i9, s7 = a6, this.iteratePath = true;
    }
    const i8 = new h$4();
    return this._geometryWalker.nextPointAndAngle(s7, i8) ? this._endings === X.WithFullGap && this._geometryWalker.isPathEnd() ? (this.iteratePath = false, null) : this._endings === X.WithMarkers && this._geometryWalker.isPathEnd() && (this.iteratePath = false, this.isClosed) ? null : (this.internalPlacement.setTranslate(i8.pt[0] - this._offset * i8.sa, i8.pt[1] + this._offset * i8.ca), this._angleToLine && this.internalPlacement.setRotateCS(i8.ca, i8.sa), this.internalPlacement) : (this.iteratePath = false, null);
  }
  _adjustPosition(t8) {
    let e9 = t8 / this._pattern.length();
    return e9 -= Math.floor(e9), e9 * this._pattern.length();
  }
};
let i$6 = class i3 {
  static local() {
    return null === i3.instance && (i3.instance = new i3()), i3.instance;
  }
  execute(e9, t8, s7, i8, r13) {
    return new n$6(e9, t8, s7);
  }
};
i$6.instance = null;
let n$6 = class n5 extends s$6 {
  constructor(e9, s7, i8) {
    super(e9, false, true), this._curveHelper = new s$5(), this._angleToLine = void 0 === s7.angleToLine || s7.angleToLine, this._offset = void 0 !== s7.offset ? s7.offset * i8 : 0, this._type = s7.extremityPlacement, this._position = void 0 !== s7.offsetAlongLine ? s7.offsetAlongLine * i8 : 0, this._beginProcessed = false;
  }
  processPath(e9) {
    let t8;
    switch (this._type) {
      case o$4.Both:
      default:
        this._beginProcessed ? (t8 = this._atExtremities(e9, this._position, false), this._beginProcessed = false, this.iteratePath = false) : (t8 = this._atExtremities(e9, this._position, true), this._beginProcessed = true, this.iteratePath = true);
        break;
      case o$4.JustBegin:
        t8 = this._atExtremities(e9, this._position, true);
        break;
      case o$4.JustEnd:
        t8 = this._atExtremities(e9, this._position, false);
      case o$4.None:
    }
    return t8;
  }
  _atExtremities(e9, t8, s7) {
    if (s7 || e9.seekPathEnd(), s7 ? e9.nextPoint() : e9.prevPoint()) {
      let i8 = 0, [n8, r13] = [0, 0], [o3, a6] = [e9.x, e9.y];
      for (; s7 ? e9.nextPoint() : e9.prevPoint(); ) {
        n8 = o3, r13 = a6, o3 = e9.x, a6 = e9.y;
        const s8 = this._curveHelper.getLength(n8, r13, o3, a6);
        if (i8 + s8 > t8) {
          const e10 = (t8 - i8) / s8, [h5, l3] = this._curveHelper.getAngleCS(n8, r13, o3, a6, e10), c2 = this._curveHelper.getCoord2D(n8, r13, o3, a6, e10);
          return this.internalPlacement.setTranslate(c2[0] - this._offset * l3, c2[1] + this._offset * h5), this._angleToLine && this.internalPlacement.setRotateCS(-h5, -l3), this.internalPlacement;
        }
        i8 += s8;
      }
    }
    return null;
  }
};
let a$3 = class a3 {
  static local() {
    return null === a3.instance && (a3.instance = new a3()), a3.instance;
  }
  execute(t8, i8, s7, e9, n8) {
    return new r$5(t8, i8, s7);
  }
};
a$3.instance = null;
let r$5 = class r7 extends s$6 {
  constructor(t8, e9, n8) {
    super(t8), this._walker = new o$3(), this._walker.updateTolerance(n8), this._angleToLine = void 0 === e9.angleToLine || e9.angleToLine, this._offset = void 0 !== e9.offset ? e9.offset * n8 : 0, this._beginGap = void 0 !== e9.beginPosition ? e9.beginPosition * n8 : 0, this._endGap = void 0 !== e9.endPosition ? e9.endPosition * n8 : 0, this._flipFirst = void 0 === e9.flipFirst || e9.flipFirst, this._pattern = new i$7(), this._pattern.init(e9.positionArray, false, false), this._subPathLen = 0, this._posCount = this._pattern.size(), this._isFirst = true, this._prevPos = 0;
  }
  processPath(t8) {
    if (this._pattern.isEmpty())
      return null;
    let i8;
    if (this.iteratePath) {
      const t9 = this._pattern.nextValue() * this._subPathLen, s8 = this._beginGap + t9;
      i8 = s8 - this._prevPos, this._prevPos = s8;
    } else {
      if (this._posCount = this._pattern.size(), this._isFirst = true, this._prevPos = 0, this._subPathLen = t8.pathLength() - this._beginGap - this._endGap, this._subPathLen < 0)
        return this.iteratePath = false, null;
      if (!this._walker.init(t8, this._pattern, false))
        return null;
      this._pattern.reset();
      const s8 = this._pattern.nextValue() * this._subPathLen, e9 = this._beginGap + s8;
      i8 = e9 - this._prevPos, this._prevPos = e9, this.iteratePath = true;
    }
    const s7 = new h$4();
    if (!this._walker.nextPointAndAngle(i8, s7, r$a.END))
      return this.iteratePath = false, null;
    this.internalPlacement.setTranslate(s7.pt[0] - this._offset * s7.sa, s7.pt[1] + this._offset * s7.ca);
    const a6 = this._isFirst && this._flipFirst;
    let r13, h5;
    return this._angleToLine ? (r13 = s7.ca, h5 = s7.sa) : (r13 = 1, h5 = 0), a6 && (r13 = -r13, h5 = -h5), this.internalPlacement.setRotateCS(r13, h5), this._isFirst = false, this._posCount--, 0 === this._posCount && (this.iteratePath = false), this.internalPlacement;
  }
};
const e$3 = 512, h$1 = 10, n$5 = 24, _$1 = 1e-6;
let r$4 = class r8 {
  static local() {
    return null === r8.instance && (r8.instance = new r8()), r8.instance;
  }
  execute(t8, s7, i8, e9, h5) {
    return new a$2(t8, s7, i8, e9, h5);
  }
};
r$4.instance = null;
let a$2 = class a4 {
  constructor(h5, n8, _2, r13, a6) {
    if (this._xMin = 0, this._xMax = 0, this._yMin = 0, this._yMax = 0, this._currentX = 0, this._currentY = 0, this._accelerationMap = null, this._testInsidePolygon = false, this._verticalSubdivision = true, this._stepX = Math.abs(n8.stepX ?? 16) * _2, this._stepY = Math.abs(n8.stepY ?? 16) * _2, this._stepX = Math.round(128 * this._stepX) / 128, this._stepY = Math.round(128 * this._stepY) / 128, 0 !== this._stepX && 0 !== this._stepY) {
      if (this._gridType = n8.gridType ?? Y$1.Fixed, this._gridType === Y$1.Random) {
        const s7 = n8.seed ?? 13, i8 = 1;
        this._randomLCG = new t$a(s7 * i8), this._randomness = (n8.randomness ?? 100) / 100, this._gridAngle = 0, this._shiftOddRows = false, this._cosAngle = 1, this._sinAngle = 0, this._offsetX = 0, this._offsetY = 0, this._buildRandomValues();
      } else {
        if (this._randomness = 0, this._gridAngle = n8.gridAngle ?? 0, this._shiftOddRows = n8.shiftOddRows ?? false, this._offsetX = (n8.offsetX ?? 0) * _2, this._offsetY = (n8.offsetY ?? 0) * _2, this._cosAngle = Math.cos(this._gridAngle / 180 * Math.PI), this._sinAngle = -Math.sin(this._gridAngle / 180 * Math.PI), this._stepX)
          if (this._offsetX < 0)
            for (; this._offsetX < -0.5 * this._stepX; )
              this._offsetX += this._stepX;
          else
            for (; this._offsetX >= 0.5 * this._stepX; )
              this._offsetX -= this._stepX;
        if (this._stepY)
          if (this._offsetY < 0)
            for (; this._offsetY < -0.5 * this._stepY; )
              this._offsetY += this._stepY;
          else
            for (; this._offsetY >= 0.5 * this._stepY; )
              this._offsetY -= this._stepY;
      }
      if (this._graphicOriginX = 0, this._graphicOriginY = 0, null != r13) {
        const [t8, s7, i8, h6] = r13.split("/"), n9 = parseFloat(t8), _3 = parseFloat(s7), a7 = parseFloat(i8), o3 = parseFloat(h6);
        this._graphicOriginX = -(o3 * 2 ** n9 + a7) * e$3, this._graphicOriginY = _3 * e$3, this._testInsidePolygon = true;
      }
      this._internalPlacement = new t$5(), this._calculateMinMax(h5), this._geometryCursor = h5;
    }
  }
  next() {
    return this._geometryCursor ? this._nextInside() : null;
  }
  _buildRandomValues() {
    if (!a4._randValues) {
      a4._randValues = [];
      for (let t8 = 0; t8 < n$5; t8++)
        for (let s7 = 0; s7 < n$5; s7++)
          a4._randValues.push(this._randomLCG.getFloat()), a4._randValues.push(this._randomLCG.getFloat());
    }
  }
  _calculateMinMax(t8) {
    let s7, i8, h5, n8, _2, r13, a6, o3, l3, f2, c2, u3, p3, M2;
    this._xMin = 0, this._xMax = 0, this._yMin = 0, this._yMax = 0, a6 = o3 = p3 = c2 = Number.MAX_VALUE, l3 = f2 = M2 = u3 = -Number.MAX_VALUE;
    const g2 = 1 !== this._cosAngle;
    for (t8.reset(); t8.nextPath(); )
      for (; t8.nextPoint(); )
        r13 = t8.x, _2 = t8.y, s7 = r13 - this._graphicOriginX - this._offsetX, i8 = _2 - this._graphicOriginY - this._offsetY, g2 ? (h5 = this._cosAngle * s7 - this._sinAngle * i8, n8 = this._sinAngle * s7 + this._cosAngle * i8) : (h5 = s7, n8 = i8), a6 = Math.min(a6, h5), l3 = Math.max(l3, h5), o3 = Math.min(o3, n8), f2 = Math.max(f2, n8), c2 = Math.min(c2, _2), u3 = Math.max(u3, _2), p3 = Math.min(p3, r13), M2 = Math.max(M2, r13);
    c2 = c2 !== Number.MAX_VALUE ? c2 : -e$3 - this._stepY, u3 = u3 !== -Number.MAX_VALUE ? u3 : this._stepY, p3 = p3 !== Number.MAX_VALUE ? p3 : -this._stepX, M2 = M2 !== -Number.MAX_VALUE ? M2 : e$3 + this._stepX;
    const d2 = u3 - c2, X2 = M2 - p3;
    if (this._verticalSubdivision = d2 >= X2, this._polygonMin = this._verticalSubdivision ? c2 : p3, this._testInsidePolygon) {
      let t9 = 0 - this._graphicOriginX - this._offsetX - this._stepX, s8 = e$3 - this._graphicOriginX - this._offsetX + this._stepX, i9 = -e$3 - this._graphicOriginY - this._offsetY - this._stepY, h6 = 0 - this._graphicOriginY - this._offsetY + this._stepY;
      if (g2) {
        const e9 = [[t9, i9], [t9, h6], [s8, i9], [s8, h6]];
        t9 = i9 = Number.MAX_VALUE, s8 = h6 = -Number.MAX_VALUE;
        for (const n9 of e9) {
          const e10 = this._cosAngle * n9[0] - this._sinAngle * n9[1], _3 = this._sinAngle * n9[0] + this._cosAngle * n9[1];
          t9 = Math.min(t9, e10), s8 = Math.max(s8, e10), i9 = Math.min(i9, _3), h6 = Math.max(h6, _3);
        }
      }
      a6 = a6 !== Number.MAX_VALUE ? Math.max(a6, t9) : t9, o3 = o3 !== Number.MAX_VALUE ? Math.max(o3, i9) : i9, l3 = l3 !== -Number.MAX_VALUE ? Math.min(l3, s8) : s8, f2 = f2 !== -Number.MAX_VALUE ? Math.min(f2, h6) : h6;
    }
    this._xMin = Math.round(a6 / this._stepX), this._xMax = Math.round(l3 / this._stepX), this._yMin = Math.round(o3 / this._stepY), this._yMax = Math.round(f2 / this._stepY), this._currentX = this._xMax + 1, this._currentY = this._yMin - 1, this._buildAccelerationMap(t8, p3, M2, c2, u3);
  }
  _buildAccelerationMap(t8, s7, i8, n8, _2) {
    t8.reset();
    const r13 = /* @__PURE__ */ new Map(), a6 = this._verticalSubdivision, o3 = a6 ? _2 - n8 : i8 - s7;
    let f2 = Math.ceil(o3 / h$1);
    if (f2 <= 1)
      return;
    const c2 = Math.floor(o3 / f2);
    let u3, p3, M2, g2, d2, X2, m4, x2, A2, Y2, y2;
    for (f2++, this._delta = c2, a6 ? (A2 = -e$3 - this._stepY, Y2 = this._stepY, y2 = n8) : (A2 = -this._stepX, Y2 = e$3 + this._stepX, y2 = s7); t8.nextPath(); )
      if (!(t8.pathSize < 2) && t8.nextPoint())
        for (u3 = t8.x, p3 = t8.y; t8.nextPoint(); u3 = M2, p3 = g2) {
          if (M2 = t8.x, g2 = t8.y, a6) {
            if (p3 === g2 || p3 < A2 && g2 < A2 || p3 > Y2 && g2 > Y2)
              continue;
            d2 = Math.min(p3, g2), X2 = Math.max(p3, g2);
          } else {
            if (u3 === M2 || u3 < A2 && M2 < A2 || u3 > Y2 && M2 > Y2)
              continue;
            d2 = Math.min(u3, M2), X2 = Math.max(u3, M2);
          }
          for (; d2 < X2; )
            m4 = Math.floor((d2 - y2) / c2), l$3(m4, u3, p3, M2, g2, r13), d2 += c2;
          x2 = Math.floor((X2 - y2) / c2), x2 > m4 && l$3(x2, u3, p3, M2, g2, r13);
        }
    this._accelerationMap = r13;
  }
  _nextInside() {
    for (; ; ) {
      if (this._currentX > this._xMax) {
        if (this._currentY++, this._currentY > this._yMax)
          return null;
        this._currentX = this._xMin, this._shiftOddRows && this._currentY % 2 && this._currentX--;
      }
      let t8 = this._currentX * this._stepX + this._offsetX;
      this._shiftOddRows && this._currentY % 2 && (t8 += 0.5 * this._stepX);
      const s7 = this._currentY * this._stepY + this._offsetY;
      let e9, h5;
      if (this._currentX++, this._gridType === Y$1.Random) {
        const i8 = (this._currentX % n$5 + n$5) % n$5, _2 = (this._currentY % n$5 + n$5) % n$5;
        e9 = this._graphicOriginX + t8 + this._stepX * this._randomness * (0.5 - a4._randValues[_2 * n$5 + i8]) * 2 / 3, h5 = this._graphicOriginY + s7 + this._stepY * this._randomness * (0.5 - a4._randValues[_2 * n$5 + i8 + 1]) * 2 / 3;
      } else
        e9 = this._graphicOriginX + this._cosAngle * t8 + this._sinAngle * s7, h5 = this._graphicOriginY - this._sinAngle * t8 + this._cosAngle * s7;
      if (!this._testInsidePolygon || this._isInsidePolygon(e9, h5, this._geometryCursor))
        return this._internalPlacement.setTranslate(e9, h5), this._internalPlacement;
    }
  }
  _isInsidePolygon(t8, s7, i8) {
    if (null == this._accelerationMap)
      return o$2(t8, s7, i8);
    t8 += _$1, s7 += _$1;
    const e9 = this._verticalSubdivision, h5 = e9 ? s7 : t8, n8 = Math.floor((h5 - this._polygonMin) / this._delta), r13 = this._accelerationMap.get(n8);
    if (!r13)
      return false;
    let a6, l3, f2, c2 = 0;
    for (const _2 of r13) {
      if (a6 = _2[0], l3 = _2[1], e9) {
        if (a6[1] > s7 == l3[1] > s7)
          continue;
        f2 = (l3[0] - a6[0]) * (s7 - a6[1]) - (l3[1] - a6[1]) * (t8 - a6[0]);
      } else {
        if (a6[0] > t8 == l3[0] > t8)
          continue;
        f2 = (l3[1] - a6[1]) * (t8 - a6[0]) - (l3[0] - a6[0]) * (s7 - a6[1]);
      }
      f2 > 0 ? c2++ : c2--;
    }
    return 0 !== c2;
  }
};
function o$2(t8, s7, i8) {
  let e9, h5, n8, r13, a6 = 0;
  for (t8 += _$1, s7 += _$1, i8.reset(); i8.nextPath(); )
    if (i8.nextPoint())
      for (e9 = i8.x, h5 = i8.y; i8.nextPoint(); e9 = n8, h5 = r13) {
        if (n8 = i8.x, r13 = i8.y, h5 > s7 == r13 > s7)
          continue;
        (n8 - e9) * (s7 - h5) - (r13 - h5) * (t8 - e9) > 0 ? a6++ : a6--;
      }
  return 0 !== a6;
}
function l$3(t8, s7, i8, e9, h5, n8) {
  let _2 = n8.get(t8);
  _2 || (_2 = [], n8.set(t8, _2)), _2.push([[s7, i8], [e9, h5]]);
}
const i$5 = 1e-3;
let s$3 = class s5 {
  static local() {
    return null === s5.instance && (s5.instance = new s5()), s5.instance;
  }
  execute(e9, t8, n8, i8, s7) {
    return new r$3(e9, t8, n8);
  }
};
s$3.instance = null;
let r$3 = class r9 extends s$6 {
  constructor(e9, n8, s7) {
    super(e9), this._curveHelper = new s$5(), this._angleToLine = void 0 === n8.angleToLine || n8.angleToLine, this._offset = void 0 !== n8.offset ? n8.offset * s7 : 0, this._relativeTo = n8.relativeTo, this._position = void 0 !== n8.startPointOffset ? n8.startPointOffset * s7 : 0, this._epsilon = i$5 * s7;
  }
  processPath(e9) {
    const t8 = this._position;
    if (this._relativeTo === Z$2.SegmentMidpoint) {
      if (this.iteratePath || (this.iteratePath = true), e9.nextPoint()) {
        let [t9, n8] = [e9.x, e9.y], [i9, s7] = [0, 0];
        for (; e9.nextPoint(); ) {
          i9 = e9.x, s7 = e9.y;
          const r13 = this._curveHelper.getLength(t9, n8, i9, s7);
          if (r13 < this._epsilon) {
            t9 = i9, n8 = s7;
            continue;
          }
          const o3 = 0.5 + this._position / r13, [a6, l3] = this._curveHelper.getAngleCS(t9, n8, i9, s7, o3), h5 = this._curveHelper.getCoord2D(t9, n8, i9, s7, o3);
          return this.internalPlacement.setTranslate(h5[0] - this._offset * l3, h5[1] + this._offset * a6), this._angleToLine && this.internalPlacement.setRotateCS(a6, l3), this.internalPlacement;
        }
      }
      return this.iteratePath = false, null;
    }
    const i8 = this._relativeTo === Z$2.LineEnd;
    return this.onLine(e9, t8, i8);
  }
  onLine(e9, t8, i8) {
    let s7, r13 = false;
    switch (this._relativeTo) {
      case Z$2.LineMiddle:
      default:
        e9.seekPathStart(), s7 = e9.pathLength() / 2 + t8;
        break;
      case Z$2.LineBeginning:
        s7 = t8;
        break;
      case Z$2.LineEnd:
        s7 = t8, r13 = true;
    }
    i8 ? e9.seekPathEnd() : e9.seekPathStart();
    let o3 = 0;
    if (i8 ? e9.prevPoint() : e9.nextPoint()) {
      let [t9, n8] = [e9.x, e9.y], [a6, l3] = [0, 0];
      for (; i8 ? e9.prevPoint() : e9.nextPoint(); ) {
        a6 = e9.x, l3 = e9.y;
        const i9 = this._curveHelper.getLength(t9, n8, a6, l3);
        if (o3 + i9 > s7) {
          const e10 = (s7 - o3) / i9, [h5, c2] = this._curveHelper.getAngleCS(t9, n8, a6, l3, e10), f2 = this._curveHelper.getCoord2D(t9, n8, a6, l3, e10), u3 = r13 ? -this._offset : this._offset;
          return this.internalPlacement.setTranslate(f2[0] - u3 * c2, f2[1] + u3 * h5), this._angleToLine && (r13 ? this.internalPlacement.setRotateCS(-h5, -c2) : this.internalPlacement.setRotateCS(h5, c2)), this.internalPlacement;
        }
        t9 = a6, n8 = l3, o3 += i9;
      }
    }
    return null;
  }
};
const s$2 = 1e-15;
let i$4 = class i4 {
  static local() {
    return null === i4.instance && (i4.instance = new i4()), i4.instance;
  }
  execute(t8, e9, s7, i8, o3) {
    return new n$4(t8, e9, s7);
  }
};
i$4.instance = null;
let n$4 = class n6 extends s$6 {
  constructor(t8, s7, i8) {
    super(t8), this._curveHelper = new s$5(), this._angleToLine = void 0 === s7.angleToLine || s7.angleToLine, this._offset = void 0 !== s7.offset ? s7.offset * i8 : 0, this._endPoints = void 0 === s7.placeOnEndPoints || s7.placeOnEndPoints, this._controlPoints = void 0 === s7.placeOnControlPoints || s7.placeOnControlPoints, this._regularVertices = void 0 === s7.placeOnRegularVertices || s7.placeOnRegularVertices, this._tags = [], this._tagIterator = 0;
  }
  processPath(t8) {
    if (this.iteratePath || (this._preparePath(t8), this.iteratePath = true), this._tagIterator >= this._tags.length)
      return this._tags.length = 0, this._tagIterator = 0, this.iteratePath = false, null;
    const e9 = this._tags[this._tagIterator];
    this._angleToLine && this.internalPlacement.setRotate(e9[2]);
    let s7 = e9[0], i8 = e9[1];
    if (0 !== this._offset) {
      const t9 = Math.cos(e9[2]), n8 = Math.sin(e9[2]);
      s7 -= this._offset * n8, i8 += this._offset * t9;
    }
    return this.internalPlacement.setTranslate(s7, i8), this._tagIterator++, this.internalPlacement;
  }
  _preparePath(t8) {
    this._tags.length = 0, this._tagIterator = 0, t8.seekPathStart();
    const e9 = t8.isClosed();
    let s7 = 0, i8 = false, n8 = 0, r13 = 0;
    if (t8.seekPathStart(), t8.nextPoint()) {
      let a6 = t8.x, h5 = t8.y, l3 = t8.getControlPoint(), _2 = true, c2 = t8.nextPoint();
      for (; c2; ) {
        const g2 = t8.x, P2 = t8.y, u3 = t8.getControlPoint();
        (this._angleToLine || 0 !== this._offset) && (n8 = this._curveHelper.getAngle(a6, h5, g2, P2, 0)), _2 ? (_2 = false, e9 ? (s7 = n8, i8 = l3) : (this._endPoints || this._controlPoints && l3) && this._tags.push([a6, h5, n8])) : l3 ? this._controlPoints && this._tags.push([a6, h5, o$1(r13, n8)]) : this._regularVertices && this._tags.push([a6, h5, o$1(r13, n8)]), (this._angleToLine || 0 !== this._offset) && (r13 = this._curveHelper.getAngle(a6, h5, g2, P2, 1)), c2 = t8.nextPoint(), c2 || (e9 ? u3 || i8 ? this._controlPoints && this._tags.push([g2, P2, o$1(r13, s7)]) : this._regularVertices && this._tags.push([g2, P2, o$1(r13, s7)]) : (this._endPoints || this._controlPoints && u3) && this._tags.push([g2, P2, r13])), a6 = g2, h5 = P2, l3 = u3;
      }
    }
    this._tagIterator = 0;
  }
};
function o$1(t8, e9) {
  const i8 = Math.PI;
  for (; Math.abs(e9 - t8) > i8 + 2 * s$2; )
    e9 - t8 > i8 ? e9 -= 2 * i8 : e9 += 2 * i8;
  return (t8 + e9) / 2;
}
let r$2 = class r10 {
  static local() {
    return null === r10.instance && (r10.instance = new r10()), r10.instance;
  }
  execute(t8, e9, s7, n8, o3) {
    return new i$3(t8, e9, s7);
  }
};
r$2.instance = null;
let i$3 = class i5 {
  constructor(t8, e9, s7) {
    this._geometryCursor = t8, this._offsetX = void 0 !== e9.offsetX ? e9.offsetX * s7 : 0, this._offsetY = void 0 !== e9.offsetY ? e9.offsetY * s7 : 0, this._method = void 0 !== e9.method ? e9.method : K$1.OnPolygon, this._internalPlacement = new t$5();
  }
  next() {
    const t8 = this._geometryCursor;
    return this._geometryCursor = null, t8 ? this._polygonCenter(t8) : null;
  }
  _polygonCenter(n8) {
    let r13 = false;
    switch (this._method) {
      case K$1.CenterOfMass:
        {
          const t8 = f$2(n8);
          t8 && (this._internalPlacement.setTranslate(t8[0] + this._offsetX, t8[1] + this._offsetY), r13 = true);
        }
        break;
      case K$1.BoundingBoxCenter:
        {
          const e9 = c$2(n8);
          e9 && (this._internalPlacement.setTranslate((e9[2] + e9[0]) / 2 + this._offsetX, (e9[3] + e9[1]) / 2 + this._offsetY), r13 = true);
        }
        break;
      case K$1.OnPolygon:
      default: {
        const t8 = l$5(n8);
        null !== t8 && (this._internalPlacement.setTranslate(t8[0] + this._offsetX, t8[1] + this._offsetY), r13 = true);
      }
    }
    return r13 ? this._internalPlacement : null;
  }
};
function A$1(p3) {
  if (!p3)
    return null;
  switch (p3.type) {
    case "CIMGeometricEffectAddControlPoints":
      return e$a.local();
    case "CIMGeometricEffectArrow":
      return p$1.local();
    case "CIMGeometricEffectBuffer":
      return m$2.local();
    case "CIMGeometricEffectControlMeasureLine":
      return e$9.local();
    case "CIMGeometricEffectCut":
      return r$b.local();
    case "CIMGeometricEffectDashes":
      return n$b.local();
    case "CIMGeometricEffectDonut":
      return s$4.local();
    case "CIMGeometricEffectJog":
      return e$8.local();
    case "CIMGeometricEffectMove":
      return t$4.local();
    case "CIMGeometricEffectOffset":
      return m$1.local();
    case "CIMGeometricEffectReverse":
      return e$6.local();
    case "CIMGeometricEffectRotate":
      return e$5.local();
    case "CIMGeometricEffectScale":
      return e$4.local();
    case "CIMGeometricEffectWave":
      return n$7.local();
  }
  return null;
}
function g$1(e9) {
  if (!e9)
    return null;
  switch (e9.type) {
    case "CIMMarkerPlacementAlongLineSameSize":
      return a$4.local();
    case "CIMMarkerPlacementAtExtremities":
      return i$6.local();
    case "CIMMarkerPlacementAtRatioPositions":
      return a$3.local();
    case "CIMMarkerPlacementInsidePolygon":
      return r$4.local();
    case "CIMMarkerPlacementOnLine":
      return s$3.local();
    case "CIMMarkerPlacementOnVertices":
      return i$4.local();
    case "CIMMarkerPlacementPolygonCenter":
      return r$2.local();
  }
  return null;
}
function t$2(t8) {
  const e9 = t8.getFrame(0);
  if (e9 instanceof HTMLImageElement || e9 instanceof HTMLCanvasElement)
    return e9;
  const n8 = document.createElement("canvas");
  n8.width = t8.width, n8.height = t8.height;
  const a6 = n8.getContext("2d");
  return e9 instanceof ImageData ? a6.putImageData(e9, 0, 0) : a6.drawImage(e9, 0, 0), n8;
}
let t$1 = class t6 {
  constructor(t8 = 0, h5 = 0, i8 = 0, s7 = 0) {
    this.x = t8, this.y = h5, this.width = i8, this.height = s7;
  }
  get isEmpty() {
    return this.width <= 0 || this.height <= 0;
  }
  union(t8) {
    this.x = Math.min(this.x, t8.x), this.y = Math.min(this.y, t8.y), this.width = Math.max(this.width, t8.width), this.height = Math.max(this.height, t8.height);
  }
};
function i$2(t8) {
  return `rgb(${t8.slice(0, 3).toString()})`;
}
function s$1(t8) {
  return `rgba(${t8.slice(0, 3).toString()},${t8[3]})`;
}
let r$1 = class r11 {
  constructor(t8) {
    t8 && (this._textRasterizationCanvas = t8);
  }
  rasterizeText(r13, o3) {
    this._textRasterizationCanvas || (this._textRasterizationCanvas = document.createElement("canvas"));
    const h5 = this._textRasterizationCanvas, a6 = h5.getContext("2d");
    this._setFontProperties(a6, o3), this._parameters = o3, this._textLines = r13.split(/\r?\n/), this._lineHeight = this._computeLineHeight();
    const { decoration: l3, weight: d2 } = o3.font;
    this._lineThroughWidthOffset = l3 && "line-through" === l3 ? 0.1 * this._lineHeight : 0;
    const c2 = null != o3.backgroundColor || null != o3.borderLine, _2 = c2 ? s$8 : 0, g2 = this._computeTextWidth(a6, o3) + 2 * _2, f2 = this._lineHeight * this._textLines.length + 2 * _2;
    if (h5.width = g2 + 2 * this._lineThroughWidthOffset, h5.height = f2, 0 === h5.width || 0 === h5.height)
      return h5.width = h5.height = 1, { size: [0, 0], image: new Uint32Array(0), sdf: false, simplePattern: false, anchorX: 0, anchorY: 0, canvas: h5 };
    this._renderedLineHeight = Math.round(this._lineHeight * o3.pixelRatio), this._renderedHaloSize = u$3(o3.halo.size) * o3.pixelRatio, this._renderedWidth = g2 * o3.pixelRatio, this._renderedHeight = f2 * o3.pixelRatio, this._lineThroughWidthOffset *= o3.pixelRatio;
    const u3 = o3.color ?? [0, 0, 0, 0], p3 = o3.halo && o3.halo.color ? o3.halo.color : [0, 0, 0, 0];
    this._fillStyle = s$1(u3), this._haloStyle = i$2(p3);
    const x2 = this._renderedLineHeight, m4 = this._renderedHaloSize;
    a6.save(), a6.clearRect(0, 0, h5.width, h5.height), this._setFontProperties(a6, o3);
    const b2 = _2 * o3.pixelRatio, w2 = n$3(a6.textAlign, this._renderedWidth - 2 * b2) + m4 + b2, z2 = m4 + b2, v2 = m4 > 0;
    let y2 = this._lineThroughWidthOffset, R2 = 0;
    if (c2) {
      a6.save();
      const e9 = o3.backgroundColor ?? [0, 0, 0, 0], i8 = o3.borderLine?.color ?? [0, 0, 0, 0], r14 = 2 * u$3(o3.borderLine?.size ?? 0);
      a6.fillStyle = s$1(e9), a6.strokeStyle = s$1(i8), a6.lineWidth = r14, a6.fillRect(0, 0, h5.width, h5.height), a6.strokeRect(0, 0, h5.width, h5.height), a6.restore();
    }
    v2 && this._renderHalo(a6, w2, z2, y2, R2, o3), R2 += z2, y2 += w2;
    for (const t8 of this._textLines)
      v2 ? (a6.globalCompositeOperation = "destination-out", a6.fillStyle = "rgb(0, 0, 0)", a6.fillText(t8, y2, R2), a6.globalCompositeOperation = "source-over", a6.fillStyle = this._fillStyle, a6.fillText(t8, y2, R2)) : (a6.fillStyle = this._fillStyle, a6.fillText(t8, y2, R2)), l3 && "none" !== l3 && this._renderDecoration(a6, y2, R2, l3, d2), R2 += x2;
    a6.restore();
    const H = this._renderedWidth + 2 * this._lineThroughWidthOffset, S2 = this._renderedHeight, C2 = a6.getImageData(0, 0, H, S2), T3 = new Uint8Array(C2.data);
    if (o3.premultiplyColors) {
      let t8;
      for (let e9 = 0; e9 < T3.length; e9 += 4)
        t8 = T3[e9 + 3] / 255, T3[e9] = T3[e9] * t8, T3[e9 + 1] = T3[e9 + 1] * t8, T3[e9 + 2] = T3[e9 + 2] * t8;
    }
    let W2, k2;
    switch (o3.horizontalAlignment) {
      case "left":
        W2 = -0.5;
        break;
      case "right":
        W2 = 0.5;
        break;
      default:
        W2 = 0;
    }
    switch (o3.verticalAlignment) {
      case "bottom":
        k2 = -0.5;
        break;
      case "top":
        k2 = 0.5;
        break;
      default:
        k2 = 0;
    }
    return { size: [H, S2], image: new Uint32Array(T3.buffer), sdf: false, simplePattern: false, anchorX: W2, anchorY: k2, canvas: h5 };
  }
  _renderHalo(t8, e9, i8, s7, r13, n8) {
    const o3 = this._renderedWidth, h5 = this._renderedHeight;
    this._haloRasterizationCanvas || (this._haloRasterizationCanvas = document.createElement("canvas")), this._haloRasterizationCanvas.width = o3, this._haloRasterizationCanvas.height = h5;
    const a6 = this._haloRasterizationCanvas, l3 = a6.getContext("2d");
    l3.clearRect(0, 0, o3, h5), this._setFontProperties(l3, n8);
    const { decoration: d2, weight: c2 } = n8.font;
    l3.fillStyle = this._haloStyle, l3.strokeStyle = this._haloStyle, l3.lineJoin = "round", this._renderHaloNative(l3, e9, i8, d2, c2), t8.globalAlpha = this._parameters.halo.color[3], t8.drawImage(a6, 0, 0, o3, h5, s7, r13, o3, h5), t8.globalAlpha = 1;
  }
  _renderHaloNative(t8, e9, i8, s7, r13) {
    const n8 = this._renderedLineHeight, o3 = this._renderedHaloSize;
    for (const h5 of this._textLines) {
      const a6 = 2 * o3, l3 = 5, d2 = 0.1;
      for (let n9 = 0; n9 < l3; n9++) {
        const o4 = (1 - (l3 - 1) * d2 + n9 * d2) * a6;
        t8.lineWidth = o4, t8.strokeText(h5, e9, i8), s7 && "none" !== s7 && this._renderDecoration(t8, e9, i8, s7, r13, o4);
      }
      i8 += n8;
    }
  }
  _setFontProperties(e9, i8) {
    const s7 = Math.max(i8.size, 0.5), r13 = i8.font, n8 = `${r13.style} ${r13.weight} ${u$3(s7 * i8.pixelRatio).toFixed(1)}px ${r13.family}, sans-serif`;
    let o3;
    switch (e9.font = n8, e9.textBaseline = "top", i8.horizontalAlignment) {
      case "left":
      default:
        o3 = "left";
        break;
      case "right":
        o3 = "right";
        break;
      case "center":
        o3 = "center";
    }
    e9.textAlign = o3;
  }
  computeTextSize(t8, e9) {
    this._textRasterizationCanvas || (this._textRasterizationCanvas = document.createElement("canvas"));
    const i8 = this._textRasterizationCanvas, s7 = i8.getContext("2d");
    this._setFontProperties(s7, e9), this._parameters = e9, this._textLines = t8.split(/\r?\n/), this._lineHeight = this._computeLineHeight();
    const r13 = this._computeTextWidth(s7, e9), n8 = this._lineHeight * this._textLines.length;
    return i8.width = r13, i8.height = n8, [r13 * e9.pixelRatio, n8 * e9.pixelRatio];
  }
  _computeTextWidth(e9, i8) {
    let s7 = 0;
    for (const t8 of this._textLines)
      s7 = Math.max(s7, e9.measureText(t8).width);
    const r13 = i8.font;
    return ("italic" === r13.style || "oblique" === r13.style || "string" == typeof r13.weight && ("bold" === r13.weight || "bolder" === r13.weight) || "number" == typeof r13.weight && r13.weight > 600) && (s7 += 0.3 * e9.measureText("w").width), s7 += 2 * u$3(this._parameters.halo.size), Math.round(s7);
  }
  _computeLineHeight() {
    let e9 = 1.275 * this._parameters.size;
    const i8 = this._parameters.font.decoration;
    return i8 && "underline" === i8 && (e9 *= 1.3), Math.round(e9 + 2 * u$3(this._parameters.halo.size));
  }
  _renderDecoration(t8, e9, i8, s7, r13, n8) {
    const o3 = 0.9 * this._lineHeight, h5 = "bold" === r13 ? 0.06 : "bolder" === r13 ? 0.09 : 0.04;
    switch (t8.textAlign) {
      case "center":
        e9 -= this._renderedWidth / 2;
        break;
      case "right":
        e9 -= this._renderedWidth;
    }
    const a6 = t8.textBaseline;
    if ("underline" === s7)
      switch (a6) {
        case "top":
          i8 += o3;
          break;
        case "middle":
          i8 += o3 / 2;
      }
    else if ("line-through" === s7)
      switch (a6) {
        case "top":
          i8 += o3 / 1.5;
          break;
        case "middle":
          i8 += o3 / 3;
      }
    const l3 = n8 ? 1.5 * n8 : Math.ceil(o3 * h5);
    t8.save(), t8.beginPath(), t8.strokeStyle = t8.fillStyle, t8.lineWidth = l3, t8.moveTo(e9 - this._lineThroughWidthOffset, i8), t8.lineTo(e9 + this._renderedWidth + 2 * this._lineThroughWidthOffset, i8), t8.stroke(), t8.restore();
  }
};
function n$3(t8, e9) {
  return "center" === t8 ? 0.5 * e9 : "right" === t8 ? e9 : 0;
}
let i$1 = class i6 {
  constructor(i8, e9, s7, r13) {
    this.center = t$b(i8, e9), this.centerT = n$h(), this.halfWidth = s7 / 2, this.halfHeight = r13 / 2, this.width = s7, this.height = r13;
  }
  get x() {
    return this.center[0];
  }
  get y() {
    return this.center[1];
  }
  get blX() {
    return this.center[0] + this.halfWidth;
  }
  get blY() {
    return this.center[1] + this.halfHeight;
  }
  get trX() {
    return this.center[0] - this.halfWidth;
  }
  get trY() {
    return this.center[1] - this.halfHeight;
  }
  get xmin() {
    return this.x - this.halfWidth;
  }
  get xmax() {
    return this.x + this.halfWidth;
  }
  get ymin() {
    return this.y - this.halfHeight;
  }
  get ymax() {
    return this.y + this.halfHeight;
  }
  set x(t8) {
    this.center[0] = t8;
  }
  set y(t8) {
    this.center[1] = t8;
  }
  clone() {
    return new i6(this.x, this.y, this.width, this.height);
  }
  serialize(t8) {
    return t8.writeF32(this.center[0]), t8.writeF32(this.center[1]), t8.push(this.width), t8.push(this.height), t8;
  }
  findCollisionDelta(t8, h5 = 4) {
    const i8 = Math.abs(t8.centerT[0] - this.centerT[0]), e9 = Math.abs(t8.centerT[1] - this.centerT[1]), s7 = (t8.halfWidth + this.halfWidth + h5) / i8, r13 = (t8.halfHeight + this.halfHeight + h5) / e9, n8 = Math.min(s7, r13);
    return Math.log2(n8);
  }
  extend(t8) {
    const h5 = Math.min(this.xmin, t8.xmin), i8 = Math.min(this.ymin, t8.ymin), e9 = Math.max(this.xmax, t8.xmax) - h5, s7 = Math.max(this.ymax, t8.ymax) - i8, r13 = h5 + e9 / 2, n8 = i8 + s7 / 2;
    this.width = e9, this.height = s7, this.halfWidth = e9 / 2, this.halfHeight = s7 / 2, this.x = r13, this.y = n8;
  }
  static deserialize(t8) {
    const h5 = t8.readF32(), e9 = t8.readF32(), s7 = t8.readInt32(), r13 = t8.readInt32();
    return new i6(h5, e9, s7, r13);
  }
};
const l$2 = 26, g = 4, _ = l$2 + g, p2 = l$2 - 6, x = 3, w = 8, y = Math.PI / 180, M = 8, b = 1.5;
let B$1 = class B {
  constructor(t8, s7, e9, i8) {
    this._rotationT = n$i(), this._xBounds = 0, this._yBounds = 0, this.minZoom = 0, this.maxZoom = 255, this._bounds = null;
    const n8 = e9.rect, h5 = new Float32Array(8);
    t8 *= i8, s7 *= i8;
    const r13 = e9.code ? n8.width * i8 : e9.metrics.width, a6 = e9.code ? n8.height * i8 : e9.metrics.height;
    this.width = r13, this.height = a6, h5[0] = t8, h5[1] = s7, h5[2] = t8 + r13, h5[3] = s7, h5[4] = t8, h5[5] = s7 + a6, h5[6] = t8 + r13, h5[7] = s7 + a6, this._data = h5, this._setTextureCoords(n8), this._scale = i8, this._mosaic = e9, this.x = t8, this.y = s7, this.maxOffset = Math.max(t8 + r13, s7 + a6);
  }
  get mosaic() {
    return this._mosaic;
  }
  set angle(t8) {
    this._angle = t8, h$6(this._rotationT, -t8), this._setOffsets(this._data);
  }
  get angle() {
    return this._angle;
  }
  get xTopLeft() {
    return this._data[0];
  }
  get yTopLeft() {
    return this._data[1];
  }
  get xBottomRight() {
    return this._data[6];
  }
  get yBottomRight() {
    return this._data[7];
  }
  get texcoords() {
    return this._texcoords;
  }
  get textureBinding() {
    return this._mosaic.textureBinding;
  }
  get offsets() {
    return this._offsets || this._setOffsets(this._data), this._offsets;
  }
  get char() {
    return String.fromCharCode(this._mosaic.code);
  }
  get code() {
    return this._mosaic.code;
  }
  get bounds() {
    if (!this._bounds) {
      const { height: t8, width: s7 } = this._mosaic.metrics, i8 = s7 * this._scale, n8 = Math.abs(t8) * this._scale, r13 = new Float32Array(8);
      r13[0] = this.x, r13[1] = this.y, r13[2] = this.x + i8, r13[3] = this.y, r13[4] = this.x, r13[5] = this.y + n8, r13[6] = this.x + i8, r13[7] = this.y + n8;
      const a6 = o$5(n$i(), this._rotationT, this._transform);
      a$7(r13, r13, a6);
      let c2 = 1 / 0, d2 = 1 / 0, f2 = 0, m4 = 0;
      for (let e9 = 0; e9 < 4; e9++) {
        const t9 = r13[2 * e9], s8 = r13[2 * e9 + 1];
        c2 = Math.min(c2, t9), d2 = Math.min(d2, s8), f2 = Math.max(f2, t9), m4 = Math.max(m4, s8);
      }
      const l3 = f2 - c2, g2 = m4 - d2, _2 = c2 + l3 / 2, p3 = d2 + g2 / 2;
      this._bounds = new i$1(_2, p3, l3, g2);
    }
    return this._bounds;
  }
  setTransform(t8) {
    this._transform = t8, this._offsets = null;
  }
  _setOffsets(t8) {
    this._offsets || (this._offsets = { upperLeft: 0, upperRight: 0, lowerLeft: 0, lowerRight: 0 });
    const s7 = this._offsets, i8 = new Float32Array(8), n8 = o$5(n$i(), this._rotationT, this._transform);
    a$7(i8, t8, n8), s7.upperLeft = w$1(i8[0] * w, i8[1] * w), s7.upperRight = w$1(i8[2] * w, i8[3] * w), s7.lowerLeft = w$1(i8[4] * w, i8[5] * w), s7.lowerRight = w$1(i8[6] * w, i8[7] * w);
  }
  _setTextureCoords({ x: t8, y: s7, width: e9, height: i8 }) {
    this._texcoords = { upperLeft: w$1(t8, s7), upperRight: w$1(t8 + e9, s7), lowerLeft: w$1(t8, s7 + i8), lowerRight: w$1(t8 + e9, s7 + i8) };
  }
};
const L = (t8, s7) => ({ code: 0, page: 0, sdf: true, rect: new t$d(0, 0, 11, 8), textureBinding: s7, metrics: { advance: 0, height: 4, width: t8, left: 0, top: 0 } });
function R(t8, s7) {
  return t8.forEach((t9) => z(t9, t9, s7)), { upperLeft: w$1(w * t8[0][0], w * t8[0][1]), upperRight: w$1(w * t8[1][0], w * t8[1][1]), lowerLeft: w$1(w * t8[2][0], w * t8[2][1]), lowerRight: w$1(w * t8[3][0], w * t8[3][1]) };
}
let T$1 = class T {
  constructor(t8, s7, e9) {
    this._rotation = 0, this._decorate(t8, s7, e9), this.glyphs = t8, this.bounds = this._createBounds(t8), this.isMultiline = s7.length > 1, this._hasRotation = 0 !== e9.angle, this._transform = this._createGlyphTransform(this.bounds, e9), this._borderLineSize = e9.borderLineSize, (e9.borderLineSize || e9.hasBackground) && ([this.bounds, this.background] = this.shapeBackground(this._transform));
    for (const i8 of t8)
      i8.setTransform(this._transform);
  }
  setRotation(t8) {
    if (0 === t8 && 0 === this._rotation)
      return;
    this._rotation = t8;
    const i8 = this._transform, n8 = h$6(n$i(), t8);
    o$5(i8, n8, i8);
    for (const s7 of this.glyphs)
      s7.setTransform(this._transform);
  }
  _decorate(t8, s7, e9) {
    if (!e9.decoration || "none" === e9.decoration || !t8.length)
      return;
    const i8 = e9.scale, n8 = "underline" === e9.decoration ? _ : p2, o3 = t8[0].textureBinding;
    for (const h5 of s7) {
      const s8 = h5.startX * i8, e10 = h5.startY * i8, r13 = (h5.width + h5.glyphWidthEnd) * i8;
      t8.push(new B$1(s8, e10 + n8 * i8, L(r13, o3), 1));
    }
  }
  shapeBackground(s7) {
    const e9 = M, { xmin: i8, ymin: n8, xmax: o3, ymax: h5, x: r13, y: a6, width: c2, height: d2 } = this.bounds, f2 = Math.min(c2, d2) + 2 * e9 - b, m4 = Math.min(u$3(this._borderLineSize || 0), f2), l3 = (b + m4) / 2, g2 = this._borderLineSize ? l3 : 0, _2 = [i8 - e9, n8 - e9], p3 = [o3 + e9, n8 - e9], x2 = [i8 - e9, h5 + e9], w2 = [o3 + e9, h5 + e9], y2 = R([[_2[0] - l3, _2[1] - l3], [p3[0] + l3, p3[1] - l3], [_2[0] + g2, _2[1] + g2], [p3[0] - g2, p3[1] + g2]], s7), B3 = R([[x2[0] + g2, x2[1] - g2], [w2[0] - g2, w2[1] - g2], [x2[0] - l3, x2[1] + l3], [w2[0] + l3, w2[1] + l3]], s7), L2 = R([[_2[0] - l3, _2[1] - l3], [_2[0] + g2, _2[1] + g2], [x2[0] - l3, x2[1] + l3], [x2[0] + g2, x2[1] - g2]], s7), T3 = R([[p3[0] - g2, p3[1] + g2], [p3[0] + l3, p3[1] - l3], [w2[0] - g2, w2[1] - g2], [w2[0] + l3, w2[1] + l3]], s7), v2 = { main: R([_2, p3, x2, w2], s7), top: y2, bot: B3, left: L2, right: T3 };
    return [new i$1(r13, a6, c2 + 2 * l3, d2 + 2 * l3), v2];
  }
  get boundsT() {
    const t8 = this.bounds, s7 = r$f(n$h(), t8.x, t8.y);
    if (z(s7, s7, this._transform), this._hasRotation) {
      const e9 = Math.max(t8.width, t8.height);
      return new i$1(s7[0], s7[1], e9, e9);
    }
    return new i$1(s7[0], s7[1], t8.width, t8.height);
  }
  _createBounds(t8) {
    let s7 = 1 / 0, e9 = 1 / 0, i8 = 0, n8 = 0;
    for (const r13 of t8)
      s7 = Math.min(s7, r13.xTopLeft), e9 = Math.min(e9, r13.yTopLeft), i8 = Math.max(i8, r13.xBottomRight), n8 = Math.max(n8, r13.yBottomRight);
    const o3 = i8 - s7, h5 = n8 - e9;
    return new i$1(s7 + o3 / 2, e9 + h5 / 2, o3, h5);
  }
  _createGlyphTransform(t8, s7) {
    const e9 = y * s7.angle, h5 = n$i(), a6 = n$h();
    return i$b(h5, h5, r$f(a6, s7.xOffset, -s7.yOffset)), s7.isCIM ? e$c(h5, h5, e9) : (i$b(h5, h5, r$f(a6, t8.x, t8.y)), e$c(h5, h5, e9), i$b(h5, h5, r$f(a6, -t8.x, -t8.y))), h5;
  }
};
class v {
  constructor(t8, s7, e9, i8, n8, o3) {
    this.glyphWidthEnd = 0, this.startX = 0, this.startY = 0, this.start = Math.max(0, Math.min(s7, e9)), this.end = Math.max(0, Math.max(s7, e9)), this.end < t8.length && (this.glyphWidthEnd = t8[this.end].metrics.width), this.width = i8, this.yMin = n8, this.yMax = o3;
  }
}
const j$1 = (t8) => 10 === t8, k = (t8) => 32 === t8;
function A(t8, s7, e9) {
  const i8 = new Array(), n8 = 1 / e9.scale, o3 = e9.maxLineWidth * n8, h5 = s7 ? t8.length - 1 : 0, r13 = s7 ? -1 : t8.length, a6 = s7 ? -1 : 1;
  let c2 = h5, d2 = 0, f2 = 0, m4 = c2, u3 = m4, l3 = 0, g2 = 1 / 0, _2 = 0;
  for (; c2 !== r13; ) {
    const { code: s8, metrics: e10 } = t8[c2], n9 = Math.abs(e10.top);
    if (j$1(s8) || k(s8) || (g2 = Math.min(g2, n9), _2 = Math.max(_2, n9 + e10.height)), j$1(s8))
      c2 !== h5 && (i8.push(new v(t8, m4, c2 - a6, d2, g2, _2)), g2 = 1 / 0, _2 = 0), d2 = 0, m4 = c2 + a6, u3 = c2 + a6, f2 = 0;
    else if (k(s8))
      u3 = c2 + a6, f2 = 0, l3 = e10.advance, d2 += e10.advance;
    else if (d2 > o3) {
      if (u3 !== m4) {
        const s9 = u3 - 2 * a6;
        d2 -= l3, i8.push(new v(t8, m4, s9, d2 - f2, g2, _2)), g2 = 1 / 0, _2 = 0, m4 = u3, d2 = f2;
      } else
        i8.push(new v(t8, m4, c2 - a6, d2, g2, _2)), g2 = 1 / 0, _2 = 0, m4 = c2, u3 = c2, d2 = 0;
      d2 += e10.advance, f2 += e10.advance;
    } else
      d2 += e10.advance, f2 += e10.advance;
    c2 += a6;
  }
  const p3 = new v(t8, m4, c2 - a6, d2, g2, _2);
  return p3.start >= 0 && p3.end < t8.length && i8.push(p3), i8;
}
function O$1(t8, s7) {
  let e9 = 0;
  for (let o3 = 0; o3 < t8.length; o3++) {
    const { width: s8 } = t8[o3];
    e9 = Math.max(s8, e9);
  }
  const i8 = "underline" === s7.decoration ? g : 0, n8 = t8[0].yMin;
  return { x: 0, y: n8, height: t8[t8.length - 1].yMax + s7.lineHeight * (t8.length - 1) + i8 - n8, width: e9 };
}
function S(t8, s7, e9) {
  const i8 = e9.scale, n8 = new Array(), o3 = A(t8, s7, e9), h5 = O$1(o3, e9), { vAlign: r13, hAlign: a6 } = e9, c2 = r13 === t$c.Baseline ? 1 : 0, f2 = c2 ? 0 : r13 - 1, m4 = (1 - c2) * -h5.y + f2 * (h5.height / 2) + (c2 ? 1 : 0) * -l$2;
  for (let d2 = 0; d2 < o3.length; d2++) {
    const { start: s8, end: h6, width: r14 } = o3[d2];
    let c3 = -1 * (a6 + 1) * (r14 / 2) - x;
    const f3 = d2 * e9.lineHeight + m4 - x;
    o3[d2].startX = c3, o3[d2].startY = f3;
    for (let e10 = s8; e10 <= h6; e10++) {
      const s9 = t8[e10];
      if (j$1(s9.code))
        continue;
      const o4 = new B$1(c3 + s9.metrics.left, f3 - s9.metrics.top, s9, i8);
      c3 += s9.metrics.advance, n8.push(o4);
    }
  }
  return new T$1(n8, o3, e9);
}
const J$1 = Math.PI / 180, N = s$9.getLogger("esri.symbols.cim.CIMSymbolDrawHelper"), O = 4, q$1 = 10, V$1 = 10, Y = 4, W$2 = 10;
let Q$1 = class Q {
  constructor(t8) {
    this._t = t8;
  }
  static createIdentity() {
    return new Q([1, 0, 0, 0, 1, 0]);
  }
  clone() {
    const t8 = this._t;
    return new Q(t8.slice());
  }
  transform(t8) {
    const e9 = this._t;
    return [e9[0] * t8[0] + e9[1] * t8[1] + e9[2], e9[3] * t8[0] + e9[4] * t8[1] + e9[5]];
  }
  static createScale(t8, e9) {
    return new Q([t8, 0, 0, 0, e9, 0]);
  }
  scale(t8, e9) {
    const r13 = this._t;
    return r13[0] *= t8, r13[1] *= t8, r13[2] *= t8, r13[3] *= e9, r13[4] *= e9, r13[5] *= e9, this;
  }
  scaleRatio() {
    return Math.sqrt(this._t[0] * this._t[0] + this._t[1] * this._t[1]);
  }
  static createTranslate(t8, e9) {
    return new Q([0, 0, t8, 0, 0, e9]);
  }
  translate(t8, e9) {
    const r13 = this._t;
    return r13[2] += t8, r13[5] += e9, this;
  }
  static createRotate(t8) {
    const e9 = Math.cos(t8), r13 = Math.sin(t8);
    return new Q([e9, -r13, 0, r13, e9, 0]);
  }
  rotate(t8) {
    return Q.multiply(this, Q.createRotate(t8), this);
  }
  angle() {
    const t8 = this._t[0], e9 = this._t[3], r13 = Math.sqrt(t8 * t8 + e9 * e9);
    return [t8 / r13, e9 / r13];
  }
  static multiply(t8, e9, r13) {
    const i8 = t8._t, s7 = e9._t, o3 = i8[0] * s7[0] + i8[3] * s7[1], n8 = i8[1] * s7[0] + i8[4] * s7[1], a6 = i8[2] * s7[0] + i8[5] * s7[1] + s7[2], l3 = i8[0] * s7[3] + i8[3] * s7[4], h5 = i8[1] * s7[3] + i8[4] * s7[4], c2 = i8[2] * s7[3] + i8[5] * s7[4] + s7[5], m4 = r13._t;
    return m4[0] = o3, m4[1] = n8, m4[2] = a6, m4[3] = l3, m4[4] = h5, m4[5] = c2, r13;
  }
  invert() {
    const t8 = this._t;
    let e9 = t8[0] * t8[4] - t8[1] * t8[3];
    if (0 === e9)
      return new Q([0, 0, 0, 0, 0, 0]);
    e9 = 1 / e9;
    const r13 = (t8[1] * t8[5] - t8[2] * t8[4]) * e9, i8 = (t8[2] * t8[3] - t8[0] * t8[5]) * e9, s7 = t8[4] * e9, o3 = -t8[1] * e9, n8 = -t8[3] * e9, a6 = t8[0] * e9;
    return new Q([s7, o3, r13, n8, a6, i8]);
  }
};
let Z$1 = class Z {
  constructor(t8, e9) {
    this._resourceManager = t8, this._transfos = [], this._sizeTransfos = [], this._geomUnitsPerPoint = 1, this._placementPool = new e$f(t$5, void 0, void 0, 100), this._earlyReturn = false, this._mapRotation = 0, this._transfos.push(e9 || Q$1.createIdentity()), this._sizeTransfos.push(e9 ? e9.scaleRatio() : 1);
  }
  setTransform(t8, e9) {
    this._transfos = [t8 || Q$1.createIdentity()], this._sizeTransfos = [e9 || (t8 ? t8.scaleRatio() : 1)];
  }
  setGeomUnitsPerPoint(t8) {
    this._geomUnitsPerPoint = t8;
  }
  transformPt(t8) {
    return this._transfos[this._transfos.length - 1].transform(t8);
  }
  transformSize(t8) {
    return t8 * this._sizeTransfos[this._sizeTransfos.length - 1];
  }
  reverseTransformPt(t8) {
    return this._transfos[this._transfos.length - 1].invert().transform(t8);
  }
  reverseTransformSize(t8) {
    return t8 / this._sizeTransfos[this._sizeTransfos.length - 1];
  }
  getTransformAngle() {
    return this._transfos[this._transfos.length - 1].angle();
  }
  geomUnitsPerPoint() {
    return this.isEmbedded() ? 1 : this._geomUnitsPerPoint;
  }
  isEmbedded() {
    return this._transfos.length > 1;
  }
  back() {
    return this._transfos[this._transfos.length - 1];
  }
  push(t8, e9) {
    const r13 = e9 ? t8.scaleRatio() : 1;
    Q$1.multiply(t8, this.back(), t8), this._transfos.push(t8), this._sizeTransfos.push(this._sizeTransfos[this._sizeTransfos.length - 1] * r13);
  }
  pop() {
    this._transfos.splice(-1, 1), this._sizeTransfos.splice(-1, 1);
  }
  drawSymbol(t8, e9, r13) {
    if (t8)
      switch (t8.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol":
          this.drawMultiLayerSymbol(t8, e9);
          break;
        case "CIMTextSymbol":
          this.drawTextSymbol(t8, e9, r13);
      }
  }
  drawMultiLayerSymbol(t8, e9) {
    if (!t8 || !e9)
      return;
    const r13 = t8.symbolLayers;
    if (!r13)
      return;
    const i8 = t8.effects;
    if (i8 && i8.length > 0) {
      const t9 = this.executeEffects(i8, e9);
      if (t9) {
        let e10 = t9.next();
        for (; e10; )
          this.drawSymbolLayers(r13, e10.asJSON()), e10 = t9.next();
      }
    } else
      this.drawSymbolLayers(r13, e9);
  }
  executeEffects(t8, e9) {
    const r13 = this._resourceManager.geometryEngine;
    let i8 = new s$7(a$6.fromJSONCIM(e9));
    for (const s7 of t8) {
      const t9 = A$1(s7);
      t9 && (i8 = t9.execute(i8, s7, this.geomUnitsPerPoint(), null, r13));
    }
    return i8;
  }
  drawSymbolLayers(t8, e9) {
    let r13 = t8.length;
    for (; r13--; ) {
      const i8 = t8[r13];
      if (!i8 || false === i8.enable)
        continue;
      const s7 = i8.effects;
      if (s7 && s7.length > 0) {
        const t9 = this.executeEffects(s7, e9);
        if (t9) {
          let e10 = null;
          for (; (e10 = t9.next()) && (this.drawSymbolLayer(i8, e10.asJSON()), !this._earlyReturn); )
            ;
        }
      } else
        this.drawSymbolLayer(i8, e9);
      if (this._earlyReturn)
        return;
    }
  }
  drawSymbolLayer(t8, e9) {
    switch (t8.type) {
      case "CIMSolidFill":
        this.drawSolidFill(e9, t8.color);
        break;
      case "CIMHatchFill":
        this.drawHatchFill(e9, t8);
        break;
      case "CIMPictureFill":
        this.drawPictureFill(e9, t8);
        break;
      case "CIMGradientFill":
        this.drawGradientFill(e9, t8);
        break;
      case "CIMSolidStroke":
        this.drawSolidStroke(e9, t8.color, t8.width, t8.capStyle, t8.joinStyle, t8.miterLimit);
        break;
      case "CIMPictureStroke":
        this.drawPictureStroke(e9, t8);
        break;
      case "CIMGradientStroke":
        this.drawGradientStroke(e9, t8);
        break;
      case "CIMCharacterMarker":
      case "CIMPictureMarker":
      case "CIMVectorMarker":
        this.drawMarkerLayer(t8, e9);
    }
  }
  drawHatchFill(t8, e9) {
    const r13 = this._buildHatchPolyline(e9, t8, this.geomUnitsPerPoint());
    r13 && (this.pushClipPath(t8), this.drawMultiLayerSymbol(e9.lineSymbol, r13), this.popClipPath());
  }
  drawPictureFill(t8, e9) {
  }
  drawGradientFill(t8, e9) {
  }
  drawPictureStroke(t8, e9) {
  }
  drawGradientStroke(t8, e9) {
  }
  drawMarkerLayer(t8, e9) {
    const r13 = t8.markerPlacement;
    if (r13) {
      const i8 = g$1(r13);
      if (i8) {
        const s7 = "CIMMarkerPlacementInsidePolygon" === r13.type || "CIMMarkerPlacementPolygonCenter" === r13.type && r13.clipAtBoundary;
        s7 && this.pushClipPath(e9);
        const o3 = i8.execute(a$6.fromJSONCIM(e9), r13, this.geomUnitsPerPoint(), null, this._resourceManager.geometryEngine);
        if (o3) {
          let e10 = null;
          for (; (e10 = o3.next()) && (this.drawMarker(t8, e10), !this._earlyReturn); )
            ;
        }
        s7 && this.popClipPath();
      }
    } else {
      const r14 = this._placementPool.acquire();
      if (l$6(e9))
        r14.tx = e9.x, r14.ty = e9.y, this.drawMarker(t8, r14);
      else if (f$3(e9)) {
        const i8 = l$7(e9);
        i8 && ([r14.tx, r14.ty] = i8, this.drawMarker(t8, r14));
      } else
        for (const i8 of e9.points)
          if (r14.tx = i8[0], r14.ty = i8[1], this.drawMarker(t8, r14), this._earlyReturn)
            break;
      this._placementPool.release(r14);
    }
  }
  drawMarker(t8, e9) {
    switch (t8.type) {
      case "CIMCharacterMarker":
      case "CIMPictureMarker":
        this.drawPictureMarker(t8, e9);
        break;
      case "CIMVectorMarker":
        this.drawVectorMarker(t8, e9);
    }
  }
  drawPictureMarker(t8, e9) {
    if (!t8)
      return;
    const r13 = this._resourceManager.getResource(t8.url), i8 = b$1(t8.size, q$1);
    if (null == r13 || i8 <= 0)
      return;
    const s7 = r13.width, o3 = r13.height;
    if (!s7 || !o3)
      return;
    const n8 = s7 / o3, a6 = b$1(t8.scaleX, 1), l3 = Q$1.createIdentity(), h5 = t8.anchorPoint;
    if (h5) {
      let e10 = h5.x, r14 = h5.y;
      "Absolute" !== t8.anchorPointUnits && (e10 *= i8 * n8 * a6, r14 *= i8), l3.translate(-e10, -r14);
    }
    let c2 = b$1(t8.rotation);
    t8.rotateClockwise && (c2 = -c2), this._mapRotation && (c2 += this._mapRotation), c2 && l3.rotate(c2 * J$1);
    let m4 = b$1(t8.offsetX), f2 = b$1(t8.offsetY);
    if (m4 || f2) {
      if (this._mapRotation) {
        const t9 = J$1 * this._mapRotation, e10 = Math.cos(t9), r14 = Math.sin(t9), i9 = m4 * r14 + f2 * e10;
        m4 = m4 * e10 - f2 * r14, f2 = i9;
      }
      l3.translate(m4, f2);
    }
    const u3 = this.geomUnitsPerPoint();
    1 !== u3 && l3.scale(u3, u3);
    const d2 = e9.getAngle();
    d2 && l3.rotate(d2), l3.translate(e9.tx, e9.ty), this.push(l3, false), this.drawImage(t8, i8), this.pop();
  }
  drawVectorMarker(t8, e9) {
    if (!t8)
      return;
    const r13 = t8.markerGraphics;
    if (!r13)
      return;
    const i8 = b$1(t8.size, q$1), s7 = t8.frame, o3 = s7 ? s7.ymax - s7.ymin : 0, n8 = i8 && o3 ? i8 / o3 : 1, a6 = Q$1.createIdentity();
    s7 && a6.translate(0.5 * -(s7.xmax + s7.xmin), 0.5 * -(s7.ymax + s7.ymin));
    const l3 = t8.anchorPoint;
    if (l3) {
      let e10 = l3.x, r14 = l3.y;
      "Absolute" !== t8.anchorPointUnits ? s7 && (e10 *= s7.xmax - s7.xmin, r14 *= s7.ymax - s7.ymin) : (e10 /= n8, r14 /= n8), a6.translate(-e10, -r14);
    }
    1 !== n8 && a6.scale(n8, n8);
    let h5 = b$1(t8.rotation);
    t8.rotateClockwise && (h5 = -h5), this._mapRotation && (h5 += this._mapRotation), h5 && a6.rotate(h5 * J$1);
    let c2 = b$1(t8.offsetX), m4 = b$1(t8.offsetY);
    if (c2 || m4) {
      if (this._mapRotation) {
        const t9 = J$1 * this._mapRotation, e10 = Math.cos(t9), r14 = Math.sin(t9), i9 = c2 * r14 + m4 * e10;
        c2 = c2 * e10 - m4 * r14, m4 = i9;
      }
      a6.translate(c2, m4);
    }
    const f2 = this.geomUnitsPerPoint();
    1 !== f2 && a6.scale(f2, f2);
    const u3 = e9.getAngle();
    u3 && a6.rotate(u3), a6.translate(e9.tx, e9.ty), this.push(a6, t8.scaleSymbolsProportionally);
    for (const d2 of r13)
      if (d2?.symbol && d2.geometry || N.error("Invalid marker graphic", d2), this.drawSymbol(d2.symbol, d2.geometry, d2.textString), this._earlyReturn)
        break;
    this.pop();
  }
  drawTextSymbol(t8, e9, r13) {
    if (!t8)
      return;
    if (!l$6(e9))
      return;
    if (b$1(t8.height, W$2) <= 0)
      return;
    const i8 = Q$1.createIdentity();
    let s7 = b$1(t8.angle);
    s7 = -s7, s7 && i8.rotate(s7 * J$1);
    const o3 = b$1(t8.offsetX), n8 = b$1(t8.offsetY);
    (o3 || n8) && i8.translate(o3, n8);
    const a6 = this.geomUnitsPerPoint();
    1 !== a6 && i8.scale(a6, a6), i8.translate(e9.x, e9.y), this.push(i8, false), this.drawText(t8, r13), this.pop();
  }
  _buildHatchPolyline(t8, e9, r13) {
    let i8 = b$1(t8.separation, Y) * r13, s7 = b$1(t8.rotation);
    if (0 === i8)
      return null;
    i8 < 0 && (i8 = -i8);
    let o3 = 0;
    const n8 = 0.5 * i8;
    for (; o3 > n8; )
      o3 -= i8;
    for (; o3 < -n8; )
      o3 += i8;
    const a6 = u$5();
    a$a(a6, e9), a6[0] -= n8, a6[1] -= n8, a6[2] += n8, a6[3] += n8;
    const h5 = [[a6[0], a6[1]], [a6[0], a6[3]], [a6[2], a6[3]], [a6[2], a6[1]]];
    for (; s7 > 180; )
      s7 -= 180;
    for (; s7 < 0; )
      s7 += 180;
    const m4 = Math.cos(s7 * J$1), f2 = Math.sin(s7 * J$1), u3 = -i8 * f2, d2 = i8 * m4;
    let p3, _2, g2, y2;
    o3 = b$1(t8.offsetX) * r13 * f2 - b$1(t8.offsetY) * r13 * m4, p3 = g2 = Number.MAX_VALUE, _2 = y2 = -Number.MAX_VALUE;
    for (const l3 of h5) {
      const t9 = l3[0], e10 = l3[1], r14 = m4 * t9 + f2 * e10, i9 = -f2 * t9 + m4 * e10;
      p3 = Math.min(p3, r14), g2 = Math.min(g2, i9), _2 = Math.max(_2, r14), y2 = Math.max(y2, i9);
    }
    g2 = Math.floor(g2 / i8) * i8;
    let P2 = m4 * p3 - f2 * g2 - u3 * o3 / i8, w2 = f2 * p3 + m4 * g2 - d2 * o3 / i8, x2 = m4 * _2 - f2 * g2 - u3 * o3 / i8, S2 = f2 * _2 + m4 * g2 - d2 * o3 / i8;
    const M2 = 1 + Math.round((y2 - g2) / i8), b2 = [];
    for (let l3 = 0; l3 < M2; l3++)
      P2 += u3, w2 += d2, x2 += u3, S2 += d2, b2.push([[P2, w2], [x2, S2]]);
    return { paths: b2 };
  }
};
let $$1 = class $ extends Z$1 {
  constructor(t8, e9) {
    super(t8, e9), this.reset();
  }
  reset() {
    this._xmin = this._ymin = 1 / 0, this._xmax = this._ymax = -1 / 0, this._clipCount = 0;
  }
  envelope() {
    return new t$1(this._xmin, this._ymin, this._xmax - this._xmin, this._ymax - this._ymin);
  }
  bounds() {
    return a$8(this._xmin, this._ymin, this._xmax, this._ymax);
  }
  drawSolidFill(t8) {
    if (t8 && !(this._clipCount > 0))
      if (f$3(t8))
        this._processPath(t8.rings, 0);
      else if (s$a(t8))
        this._processPath(t8.paths, 0);
      else if (m$3(t8)) {
        const e9 = it(t8);
        e9 && this._processPath(e9.rings, 0);
      } else
        console.error("drawSolidFill Unexpected geometry type!");
  }
  drawSolidStroke(t8, e9, r13) {
    if (!t8 || this._clipCount > 0)
      return;
    const i8 = 0.5 * this.transformSize(b$1(r13, O));
    if (f$3(t8))
      this._processPath(t8.rings, i8);
    else if (s$a(t8))
      this._processPath(t8.paths, i8);
    else if (m$3(t8)) {
      const e10 = it(t8);
      e10 && this._processPath(e10.rings, i8);
    } else
      console.error("drawSolidStroke unexpected geometry type!");
  }
  drawMarkerLayer(t8, e9) {
    f$3(e9) && t8.markerPlacement && ("CIMMarkerPlacementInsidePolygon" === t8.markerPlacement.type || "CIMMarkerPlacementPolygonCenter" === t8.markerPlacement.type && t8.markerPlacement.clipAtBoundary) ? this._processPath(e9.rings, 0) : super.drawMarkerLayer(t8, e9);
  }
  drawHatchFill(t8, e9) {
    this.drawSolidFill(t8);
  }
  drawPictureFill(t8, e9) {
    this.drawSolidFill(t8);
  }
  drawGradientFill(t8, e9) {
    this.drawSolidFill(t8);
  }
  drawPictureStroke(t8, e9) {
    this.drawSolidStroke(t8, null, e9.width);
  }
  drawGradientStroke(t8, e9) {
    this.drawSolidStroke(t8, null, e9.width);
  }
  pushClipPath(t8) {
    this.drawSolidFill(t8), this._clipCount++;
  }
  popClipPath() {
    this._clipCount--;
  }
  drawImage(t8, e9) {
    const { url: r13 } = t8, i8 = b$1(t8.scaleX, 1);
    let s7 = i8 * e9, o3 = e9;
    const n8 = this._resourceManager.getResource(r13);
    e9 || null == n8 || (s7 = i8 * n8.width, o3 = n8.height), this._merge(this.transformPt([-s7 / 2, -o3 / 2]), 0), this._merge(this.transformPt([-s7 / 2, o3 / 2]), 0), this._merge(this.transformPt([s7 / 2, -o3 / 2]), 0), this._merge(this.transformPt([s7 / 2, o3 / 2]), 0);
  }
  drawText(t8, e9) {
    if (!e9 || 0 === e9.length)
      return;
    this._textRasterizer || (this._textRasterizer = new r$1());
    const r13 = at(t8), [i8, s7] = this._textRasterizer.computeTextSize(e9, r13);
    let o3 = 0;
    switch (t8.horizontalAlignment) {
      case "Left":
        o3 = i8 / 2;
        break;
      case "Right":
        o3 = -i8 / 2;
    }
    let n8 = 0;
    switch (t8.verticalAlignment) {
      case "Bottom":
        n8 = s7 / 2;
        break;
      case "Top":
        n8 = -s7 / 2;
        break;
      case "Baseline":
        n8 = s7 / 6;
    }
    this._merge(this.transformPt([-i8 / 2 + o3, -s7 / 2 + n8]), 0), this._merge(this.transformPt([-i8 / 2 + o3, s7 / 2 + n8]), 0), this._merge(this.transformPt([i8 / 2 + o3, -s7 / 2 + n8]), 0), this._merge(this.transformPt([i8 / 2 + o3, s7 / 2 + n8]), 0);
  }
  _processPath(t8, e9) {
    if (t8)
      for (const r13 of t8) {
        const t9 = r13 ? r13.length : 0;
        if (t9 > 1) {
          this._merge(this.transformPt(r13[0]), e9);
          for (let i8 = 1; i8 < t9; i8++)
            this._merge(this.transformPt(r13[i8]), e9);
        }
      }
  }
  _merge(t8, e9) {
    t8[0] - e9 < this._xmin && (this._xmin = t8[0] - e9), t8[0] + e9 > this._xmax && (this._xmax = t8[0] + e9), t8[1] - e9 < this._ymin && (this._ymin = t8[1] - e9), t8[1] + e9 > this._ymax && (this._ymax = t8[1] + e9);
  }
};
class tt extends Z$1 {
  constructor() {
    super(...arguments), this._searchPoint = [0, 0], this._searchDistPoint = 0, this._textInfo = null;
  }
  hitTest(t8, e9, r13, i8, s7, o3) {
    const a6 = o3 * u$3(1);
    this.setTransform(), this.setGeomUnitsPerPoint(a6), this._searchPoint = [(t8[0] + t8[2]) / 2, (t8[1] + t8[3]) / 2], this._searchDistPoint = (t8[2] - t8[0]) / 2 / a6, this._textInfo = i8;
    const l3 = e9 && ("CIMPointSymbol" === e9.type && "Map" !== e9.angleAlignment || "CIMTextSymbol" === e9.type);
    return this._mapRotation = l3 ? s7 : 0, this._earlyReturn = false, this.drawSymbol(e9, r13), this._earlyReturn;
  }
  drawSolidFill(t8, e9) {
    this._hitTestFill(t8);
  }
  drawHatchFill(t8, e9) {
    this._hitTestFill(t8);
  }
  drawPictureFill(t8, e9) {
    this._hitTestFill(t8);
  }
  drawGradientFill(t8, e9) {
    this._hitTestFill(t8);
  }
  drawSolidStroke(t8, e9, r13, i8, s7, o3) {
    this._hitTestStroke(t8, r13);
  }
  drawPictureStroke(t8, e9) {
    this._hitTestStroke(t8, e9.width);
  }
  drawGradientStroke(t8, e9) {
    this._hitTestStroke(t8, e9.width);
  }
  drawMarkerLayer(t8, e9) {
    t8.markerPlacement && ("CIMMarkerPlacementInsidePolygon" === t8.markerPlacement.type || "CIMMarkerPlacementPolygonCenter" === t8.markerPlacement.type && t8.markerPlacement.clipAtBoundary) ? this._hitTestFill(e9) : super.drawMarkerLayer(t8, e9);
  }
  pushClipPath(t8) {
  }
  popClipPath() {
  }
  drawImage(t8, e9) {
    const { url: r13 } = t8, i8 = b$1(t8.scaleX, 1), s7 = this._resourceManager.getResource(r13);
    if (null == s7 || 0 === s7.height || 0 === e9)
      return;
    const o3 = e9 * this.geomUnitsPerPoint(), n8 = o3 * i8 * (s7.width / s7.height), a6 = this.reverseTransformPt(this._searchPoint), l3 = this._searchDistPoint;
    Math.abs(a6[0]) < n8 / 2 + l3 && Math.abs(a6[1]) < o3 / 2 + l3 && (this._earlyReturn = true);
  }
  drawText(e9, r13) {
    const i8 = this._textInfo;
    if (!i8)
      return;
    const s7 = i8.get(e9);
    if (!s7)
      return;
    const { text: o3, mosaicItem: n8 } = s7;
    if (!n8?.glyphMosaicItems?.length)
      return;
    const a6 = b$1(e9.height, W$2), { lineGapType: l3, lineGap: h5 } = e9, c2 = l3 ? nt(l3, b$1(h5), a6) : 0, m4 = i$a(o3)[1], f2 = n8.glyphMosaicItems, u3 = "CIMBackgroundCallout" === e9.callout?.type, d2 = S(f2, m4, { scale: a6 / b$2, angle: 0, xOffset: 0, yOffset: 0, hAlign: st(e9.horizontalAlignment), vAlign: ot(e9.verticalAlignment), maxLineWidth: 512, lineHeight: w$2 * Math.max(0.25, Math.min(c2 || 1, 4)), decoration: e9.font.decoration || "none", isCIM: true, hasBackground: u3 }), p3 = this.reverseTransformPt(this._searchPoint), _2 = p3[0], g2 = p3[1];
    for (const t8 of d2.glyphs)
      if (_2 > t8.xTopLeft && _2 < t8.xBottomRight && g2 > -t8.yBottomRight && g2 < -t8.yTopLeft) {
        this._earlyReturn = true;
        break;
      }
  }
  _hitTestFill(t8) {
    let e9 = null;
    if (m$3(t8)) {
      const r14 = t8;
      e9 = [[[r14.xmin, r14.ymin], [r14.xmin, r14.ymax], [r14.xmax, r14.ymax], [r14.xmax, r14.ymin], [r14.xmin, r14.ymin]]];
    } else if (f$3(t8))
      e9 = t8.rings;
    else {
      if (!s$a(t8))
        return;
      e9 = t8.paths;
    }
    const r13 = this.reverseTransformPt(this._searchPoint);
    if (this._pointInPolygon(r13, e9) && (this._earlyReturn = true), !this._earlyReturn) {
      const t9 = this.reverseTransformSize(this._searchDistPoint) * this.geomUnitsPerPoint();
      this._nearLine(r13, e9, t9) && (this._earlyReturn = true);
    }
  }
  _hitTestStroke(t8, e9) {
    let r13 = null;
    if (m$3(t8)) {
      const e10 = t8;
      r13 = [[[e10.xmin, e10.ymin], [e10.xmin, e10.ymax], [e10.xmax, e10.ymax], [e10.xmax, e10.ymin], [e10.xmin, e10.ymin]]];
    } else if (f$3(t8))
      r13 = t8.rings;
    else {
      if (!s$a(t8))
        return;
      r13 = t8.paths;
    }
    const i8 = this.reverseTransformPt(this._searchPoint), s7 = b$1(e9, O) * this.geomUnitsPerPoint(), o3 = this.reverseTransformSize(this._searchDistPoint) * this.geomUnitsPerPoint();
    this._nearLine(i8, r13, s7 / 2 + o3) && (this._earlyReturn = true);
  }
  _pointInPolygon(t8, e9) {
    let r13 = 0;
    for (const i8 of e9) {
      const e10 = i8.length;
      for (let s7 = 1; s7 < e10; s7++) {
        const e11 = i8[s7 - 1], o3 = i8[s7];
        if (e11[1] > t8[1] == o3[1] > t8[1])
          continue;
        (o3[0] - e11[0]) * (t8[1] - e11[1]) - (o3[1] - e11[1]) * (t8[0] - e11[0]) > 0 ? r13++ : r13--;
      }
    }
    return 0 !== r13;
  }
  _nearLine(t8, e9, r13) {
    for (const i8 of e9) {
      const e10 = i8.length;
      for (let s7 = 1; s7 < e10; s7++) {
        const e11 = i8[s7 - 1], o3 = i8[s7];
        let n8 = (o3[0] - e11[0]) * (o3[0] - e11[0]) + (o3[1] - e11[1]) * (o3[1] - e11[1]);
        if (0 === n8)
          continue;
        n8 = Math.sqrt(n8);
        const a6 = ((o3[0] - e11[0]) * (t8[1] - e11[1]) - (o3[1] - e11[1]) * (t8[0] - e11[0])) / n8;
        if (Math.abs(a6) < r13) {
          const i9 = ((o3[0] - e11[0]) * (t8[0] - e11[0]) + (o3[1] - e11[1]) * (t8[1] - e11[1])) / n8;
          if (i9 > -r13 && i9 < n8 + r13)
            return true;
        }
      }
    }
    return false;
  }
}
class et extends Z$1 {
  constructor(t8, e9, r13, i8) {
    super(e9, r13), this._applyAdditionalRenderProps = i8, this._colorSubstitutionHelper = new t$7(), this._ctx = t8;
  }
  drawSolidFill(t8, e9) {
    if (!t8)
      return;
    if (f$3(t8))
      this._buildPath(t8.rings, true);
    else if (s$a(t8))
      this._buildPath(t8.paths, true);
    else if (m$3(t8))
      this._buildPath(it(t8).rings, true);
    else {
      if (!u$4(t8))
        return;
      console.log("CanvasDrawHelper.drawSolidFill - No implementation!");
    }
    const r13 = this._ctx;
    r13.fillStyle = "string" == typeof e9 ? e9 : "rgba(" + Math.round(e9[0]) + "," + Math.round(e9[1]) + "," + Math.round(e9[2]) + "," + (e9[3] ?? 255) / 255 + ")", r13.fill("evenodd");
  }
  drawSolidStroke(t8, e9, r13, i8, s7, o3) {
    if (!t8 || !e9 || 0 === r13)
      return;
    if (f$3(t8))
      this._buildPath(t8.rings, true);
    else if (s$a(t8))
      this._buildPath(t8.paths, false);
    else {
      if (!m$3(t8))
        return void console.log("CanvasDrawHelper.drawSolidStroke isn't implemented!");
      this._buildPath(it(t8).rings, true);
    }
    const n8 = this._ctx;
    n8.strokeStyle = "string" == typeof e9 ? e9 : "rgba(" + Math.round(e9[0]) + "," + Math.round(e9[1]) + "," + Math.round(e9[2]) + "," + (e9[3] ?? 255) / 255 + ")", n8.lineWidth = Math.max(this.transformSize(r13), 0.5), this._setCapStyle(i8), this._setJoinStyle(s7), n8.miterLimit = o3, n8.stroke();
  }
  pushClipPath(t8) {
    if (this._ctx.save(), f$3(t8))
      this._buildPath(t8.rings, true);
    else if (s$a(t8))
      this._buildPath(t8.paths, true);
    else {
      if (!m$3(t8))
        return;
      this._buildPath(it(t8).rings, true);
    }
    this._ctx.clip("evenodd");
  }
  popClipPath() {
    this._ctx.restore();
  }
  drawImage(t8, e9) {
    const { colorSubstitutions: r13, url: i8, tintColor: s7 } = t8, o3 = b$1(t8.scaleX, 1), n8 = this._resourceManager.getResource(i8);
    if (null == n8)
      return;
    let a6 = e9 * (n8.width / n8.height), l3 = e9;
    e9 || (a6 = n8.width, l3 = n8.height);
    const h5 = F(i8) || "src" in n8 && F(n8.src);
    let c2 = "getFrame" in n8 ? t$2(n8) : n8;
    r13 && (c2 = this._colorSubstitutionHelper.applyColorSubstituition(c2, r13)), this._applyAdditionalRenderProps && !h5 && s7 && (c2 = this._colorSubstitutionHelper.tintImageData(c2, s7));
    const m4 = this.transformPt([0, 0]), [f2, u3] = this.getTransformAngle(), d2 = this.transformSize(1), p3 = this._ctx;
    p3.save(), p3.setTransform({ m11: o3 * d2 * f2, m12: o3 * d2 * u3, m21: -d2 * u3, m22: d2 * f2, m41: m4[0], m42: m4[1] }), p3.drawImage(c2, -a6 / 2, -l3 / 2, a6, l3), p3.restore();
  }
  drawText(t8, e9) {
    if (!e9 || 0 === e9.length)
      return;
    this._textRasterizer || (this._textRasterizer = new r$1());
    const r13 = at(t8);
    r13.size *= this.transformSize(e$d(1));
    const i8 = this._textRasterizer.rasterizeText(e9, r13);
    if (!i8)
      return;
    const { size: s7, anchorX: n8, anchorY: a6, canvas: l3 } = i8, h5 = s7[0] * (n8 + 0.5), c2 = s7[1] * (a6 - 0.5), m4 = this._ctx, f2 = this.transformPt([0, 0]), [u3, d2] = this.getTransformAngle(), p3 = 1;
    m4.save(), m4.setTransform({ m11: p3 * u3, m12: p3 * d2, m21: -p3 * d2, m22: p3 * u3, m41: f2[0] - p3 * h5, m42: f2[1] + p3 * c2 }), m4.drawImage(l3, 0, 0), m4.restore();
  }
  drawPictureFill(t8, e9) {
    if (!t8)
      return;
    let { colorSubstitutions: r13, height: i8, offsetX: s7, offsetY: o3, rotation: n8, scaleX: a6, tintColor: l3, url: h5 } = e9;
    const c2 = this._resourceManager.getResource(h5);
    if (null == c2)
      return;
    if (f$3(t8))
      this._buildPath(t8.rings, true);
    else if (s$a(t8))
      this._buildPath(t8.paths, true);
    else if (m$3(t8))
      this._buildPath(it(t8).rings, true);
    else {
      if (!u$4(t8))
        return;
      console.log("CanvasDrawHelper.drawPictureFill - No implementation!");
    }
    const m4 = this._ctx, f2 = F(h5) || "src" in c2 && F(c2.src);
    let g2, y2 = "getFrame" in c2 ? t$2(c2) : c2;
    if (r13 && (y2 = this._colorSubstitutionHelper.applyColorSubstituition(y2, r13)), this._applyAdditionalRenderProps) {
      f2 || l3 && (y2 = this._colorSubstitutionHelper.tintImageData(y2, l3)), g2 = m4.createPattern(y2, "repeat");
      const t9 = this.transformSize(1);
      n8 || (n8 = 0), s7 ? s7 *= t9 : s7 = 0, o3 ? o3 *= t9 : o3 = 0, i8 && (i8 *= t9);
      const e10 = i8 ? i8 / c2.height : 1, r14 = a6 && i8 ? a6 * i8 / c2.width : 1;
      if (0 !== n8 || 1 !== e10 || 1 !== r14 || 0 !== s7 || 0 !== o3) {
        const t10 = new DOMMatrix();
        t10.rotateSelf(0, 0, -n8).translateSelf(s7, o3).scaleSelf(r14, e10, 1), g2.setTransform(t10);
      }
    } else
      g2 = m4.createPattern(y2, "repeat");
    m4.save(), m4.fillStyle = g2, m4.fill("evenodd"), m4.restore();
  }
  drawPictureStroke(t8, e9) {
    if (!t8)
      return;
    let { colorSubstitutions: i8, capStyle: s7, joinStyle: o3, miterLimit: a6, tintColor: l3, url: h5, width: c2 } = e9;
    const m4 = this._resourceManager.getResource(h5);
    if (null == m4)
      return;
    let f2;
    if (f$3(t8))
      f2 = t8.rings;
    else if (s$a(t8))
      f2 = t8.paths;
    else {
      if (!m$3(t8))
        return u$4(t8) ? void console.log("CanvasDrawHelper.drawPictureStroke - No implementation!") : void 0;
      f2 = it(t8).rings;
    }
    c2 || (c2 = m4.width);
    const g2 = F(h5) || "src" in m4 && F(m4.src);
    let y2 = "getFrame" in m4 ? t$2(m4) : m4;
    i8 && (y2 = this._colorSubstitutionHelper.applyColorSubstituition(y2, i8)), this._applyAdditionalRenderProps && (g2 || l3 && (y2 = this._colorSubstitutionHelper.tintImageData(y2, l3)));
    const P2 = Math.max(this.transformSize(u$3(c2)), 0.5), w2 = P2 / y2.width, x2 = this._ctx, S2 = x2.createPattern(y2, "repeat-y");
    let M2, k2;
    x2.save(), this._setCapStyle(s7), this._setJoinStyle(o3), void 0 !== a6 && (x2.miterLimit = a6), x2.lineWidth = P2;
    for (let n8 of f2)
      if (n8 = a$9(n8), ht(n8), n8 && !(n8.length <= 1)) {
        M2 = this.transformPt(n8[0]);
        for (let t9 = 1; t9 < n8.length; t9++) {
          k2 = this.transformPt(n8[t9]);
          const e10 = rt(M2, k2), r13 = new DOMMatrix();
          r13.translateSelf(0, M2[1] - P2 / 2).scaleSelf(w2, w2, 1).rotateSelf(0, 0, 90 - e10), S2.setTransform(r13), x2.strokeStyle = S2, x2.beginPath(), x2.moveTo(M2[0], M2[1]), x2.lineTo(k2[0], k2[1]), x2.stroke(), M2 = k2;
        }
      }
    x2.restore();
  }
  _buildPath(t8, e9) {
    const r13 = this._ctx;
    if (r13.beginPath(), t8)
      for (const i8 of t8) {
        const t9 = i8 ? i8.length : 0;
        if (t9 > 1) {
          let s7 = this.transformPt(i8[0]);
          r13.moveTo(s7[0], s7[1]);
          for (let e10 = 1; e10 < t9; e10++)
            s7 = this.transformPt(i8[e10]), r13.lineTo(s7[0], s7[1]);
          e9 && r13.closePath();
        }
      }
  }
  _setCapStyle(t8) {
    switch (t8) {
      case U$1.Butt:
        this._ctx.lineCap = "butt";
        break;
      case U$1.Round:
        this._ctx.lineCap = "round";
        break;
      case U$1.Square:
        this._ctx.lineCap = "square";
    }
  }
  _setJoinStyle(t8) {
    switch (t8) {
      case w$3.Bevel:
        this._ctx.lineJoin = "bevel";
        break;
      case w$3.Round:
        this._ctx.lineJoin = "round";
        break;
      case w$3.Miter:
        this._ctx.lineJoin = "miter";
    }
  }
}
function rt(t8, e9) {
  const r13 = e9[0] - t8[0], i8 = e9[1] - t8[1];
  return 180 / Math.PI * Math.atan2(i8, r13);
}
const it = (t8) => t8 ? { spatialReference: t8.spatialReference, rings: [[[t8.xmin, t8.ymin], [t8.xmin, t8.ymax], [t8.xmax, t8.ymax], [t8.xmax, t8.ymin], [t8.xmin, t8.ymin]]] } : null, st = (t8) => {
  switch (t8) {
    case "Left":
      return e$e.Left;
    case "Right":
      return e$e.Right;
    case "Center":
      return e$e.Center;
    case "Justify":
      return N.warnOnce("Horizontal alignment 'justify' is not implemented. Falling back to 'center'."), e$e.Center;
  }
}, ot = (t8) => {
  switch (t8) {
    case "Top":
      return t$c.Top;
    case "Center":
      return t$c.Center;
    case "Bottom":
      return t$c.Bottom;
    case "Baseline":
      return t$c.Baseline;
  }
}, nt = (t8, e9, r13) => {
  switch (t8) {
    case "ExtraLeading":
      return 1 + e9 / r13;
    case "Multiple":
      return e9;
    case "Exact":
      return e9 / r13;
  }
};
function at(t8, r13 = 1) {
  const i8 = k$2(t8), s7 = S$1(t8.fontStyleName), o3 = t8.fontFamilyName ?? t$e, { weight: n8, style: a6 } = s7, l3 = r13 * (t8.height || 5), h5 = x$1(t8.horizontalAlignment), c2 = G$1(t8.verticalAlignment), m4 = P$2(t8), f2 = P$2(t8.haloSymbol), u3 = f2 ? r13 * (0 | t8.haloSize) : 0, d2 = "CIMBackgroundCallout" === t8.callout?.type ? t8.callout.backgroundSymbol : null, p3 = P$2(d2), _2 = L$1(d2), g2 = w$4(d2);
  return { color: m4, size: l3, horizontalAlignment: h5, verticalAlignment: c2, font: { family: o3, style: h$7(a6), weight: g$2(n8), decoration: i8 }, halo: { size: u3 || 0, color: f2, style: a6 }, backgroundColor: p3, borderLine: null != _2 && null != g2 ? { size: _2, color: g2 } : null, pixelRatio: 1, premultiplyColors: true };
}
const lt = 1e-4;
function ht(t8) {
  let e9, r13, i8, s7, o3, n8 = t8[0], a6 = 1;
  for (; a6 < t8.length; )
    e9 = t8[a6][0] - n8[0], r13 = t8[a6][1] - n8[1], s7 = 0 !== e9 ? r13 / e9 : Math.PI / 2, void 0 !== i8 && s7 - i8 <= lt ? (t8.splice(a6 - 1, 1), n8 = o3) : (o3 = n8, n8 = t8[a6], a6++), i8 = s7;
}
const W$1 = Math.PI, J = W$1 / 2, K = Math.PI / 180, Q2 = 96 / 72, Z2 = 4, ee = s$9.getLogger("esri.symbols.cim.CIMSymbolHelper");
function te(e9) {
  if (!e9?.type)
    return null;
  let t8;
  switch (e9.type) {
    case "cim":
      return e9.data;
    case "web-style":
      return e9;
    case "simple-marker": {
      const r13 = ne.fromSimpleMarker(e9);
      if (!r13)
        return null;
      t8 = r13;
      break;
    }
    case "picture-marker":
      t8 = ne.fromPictureMarker(e9);
      break;
    case "simple-line":
      t8 = ne.fromSimpleLineSymbol(e9);
      break;
    case "simple-fill":
      t8 = ne.fromSimpleFillSymbol(e9);
      break;
    case "picture-fill":
      t8 = ne.fromPictureFillSymbol(e9);
      break;
    case "text":
      t8 = ne.fromTextSymbol(e9);
  }
  return { type: "CIMSymbolReference", symbol: t8 };
}
function re(e9, t8, r13) {
  switch (t8.type) {
    case "CIMSymbolReference":
      return re(e9, t8.symbol, r13);
    case "CIMPointSymbol":
      null == r13 && (r13 = { x: 0, y: 0 }), e9.drawSymbol(t8, r13);
      break;
    case "CIMLineSymbol":
      null == r13 && (r13 = { paths: [[[0, 0], [10, 0]]] }), e9.drawSymbol(t8, r13);
      break;
    case "CIMPolygonSymbol":
      null == r13 && (r13 = { rings: [[[0, 0], [0, 10], [10, 10], [10, 0], [0, 0]]] }), e9.drawSymbol(t8, r13);
      break;
    case "CIMTextSymbol": {
      const r14 = { x: 0, y: 0 };
      e9.drawSymbol(t8, r14);
      break;
    }
    case "CIMVectorMarker": {
      const r14 = new t$5();
      e9.drawMarker(t8, r14);
      break;
    }
  }
  return e9.envelope();
}
function oe(e9) {
  if (!e9)
    return 0;
  switch (e9.type) {
    case "CIMMarkerPlacementAlongLineSameSize":
    case "CIMMarkerPlacementAlongLineRandomSize":
    case "CIMMarkerPlacementAtExtremities":
    case "CIMMarkerPlacementAtMeasuredUnits":
    case "CIMMarkerPlacementAtRatioPositions":
    case "CIMMarkerPlacementOnLine":
    case "CIMMarkerPlacementOnVertices":
      return Math.abs(e9.offset);
    default:
      return 0;
  }
}
function ae(e9) {
  if (!e9)
    return 0;
  switch (e9.type) {
    case "CIMGeometricEffectArrow":
      return Math.abs(0.5 * e9.width);
    case "CIMGeometricEffectBuffer":
      return Math.abs(e9.size);
    case "CIMGeometricEffectExtension":
    case "CIMGeometricEffectRadial":
      return Math.abs(e9.length);
    case "CIMGeometricEffectJog":
      return Math.abs(0.5 * e9.length);
    case "CIMGeometricEffectMove":
      return Math.max(Math.abs(b$1(e9.offsetX)), Math.abs(b$1(e9.offsetY)));
    case "CIMGeometricEffectOffset":
    case "CIMGeometricEffectOffsetTangent":
      return Math.abs(e9.offset);
    case "CIMGeometricEffectRegularPolygon":
      return Math.abs(e9.radius);
    case "CIMGeometricEffectRotate":
    case "CIMGeometricEffectScale":
    default:
      return 0;
    case "CIMGeometricEffectTaperedPolygon":
      return 0.5 * Math.max(Math.abs(e9.fromWidth), Math.abs(e9.toWidth));
    case "CIMGeometricEffectWave":
      return Math.abs(e9.amplitude);
    case "CIMGeometricEffectDonut":
      return Math.abs(e9.width);
  }
}
function se(e9) {
  if (!e9)
    return 0;
  let t8 = 0;
  for (const r13 of e9)
    t8 += ae(r13);
  return t8;
}
class ie {
  getSymbolInflateSize(e9, t8, r13, o3, a6) {
    return e9 || (e9 = [0, 0, 0, 0]), t8 ? this._getInflateSize(e9, t8, r13, o3, a6) : e9;
  }
  static safeSize(e9) {
    const t8 = Math.max(Math.abs(e9[0]), Math.abs(e9[2])), r13 = Math.max(Math.abs(e9[1]), Math.abs(e9[3]));
    return Math.sqrt(t8 * t8 + r13 * r13);
  }
  _vectorMarkerBounds(e9, t8, r13, o3) {
    let a6 = true;
    const s7 = u$5();
    if (t8?.markerGraphics)
      for (const i8 of t8.markerGraphics) {
        const t9 = [0, 0, 0, 0];
        i8.geometry && (a$a(s7, i8.geometry), t9[0] = 0, t9[1] = 0, t9[2] = 0, t9[3] = 0, this.getSymbolInflateSize(t9, i8.symbol, r13, 0, o3), s7[0] += t9[0], s7[1] += t9[1], s7[2] += t9[2], s7[3] += t9[3], a6 ? (e9[0] = s7[0], e9[1] = s7[1], e9[2] = s7[2], e9[3] = s7[3], a6 = false) : (e9[0] = Math.min(e9[0], s7[0]), e9[1] = Math.min(e9[1], s7[1]), e9[2] = Math.max(e9[2], s7[2]), e9[3] = Math.max(e9[3], s7[3])));
      }
    return e9;
  }
  _getInflateSize(e9, t8, r13, o3, a6) {
    if (Se(t8)) {
      const s7 = this._getLayersInflateSize(e9, t8.symbolLayers, r13, o3, a6), i8 = se(t8.effects);
      return i8 > 0 && (s7[0] -= i8, s7[1] -= i8, s7[2] += i8, s7[3] += i8), s7;
    }
    return this._getTextInflatedSize(e9, t8, a6);
  }
  _getLayersInflateSize(e9, t8, r13, o3, a6) {
    let s7 = true;
    if (!t8)
      return e9;
    for (const i8 of t8) {
      if (!i8)
        continue;
      let t9 = [0, 0, 0, 0];
      switch (i8.type) {
        case "CIMSolidFill":
        case "CIMPictureFill":
        case "CIMHatchFill":
        case "CIMGradientFill":
          break;
        case "CIMSolidStroke":
        case "CIMPictureStroke":
        case "CIMGradientStroke": {
          const e10 = i8;
          let r14 = e10.width;
          null != r14 && (e10.capStyle === U$1.Square || e10.joinStyle === w$3.Miter ? r14 /= 1.4142135623730951 : r14 /= 2, t9[0] = -r14, t9[1] = -r14, t9[2] = r14, t9[3] = r14);
          break;
        }
        case "CIMCharacterMarker":
        case "CIMVectorMarker":
        case "CIMPictureMarker": {
          const e10 = i8;
          if ("CIMVectorMarker" === i8.type) {
            const e11 = i8;
            if (t9 = this._vectorMarkerBounds(t9, e11, r13, a6), e11.frame) {
              const r14 = (e11.frame.xmin + e11.frame.xmax) / 2, o4 = (e11.frame.ymin + e11.frame.ymax) / 2;
              if (t9[0] -= r14, t9[1] -= o4, t9[2] -= r14, t9[3] -= o4, null != e11.size) {
                const r15 = e11.size / (e11.frame.ymax - e11.frame.ymin);
                t9[0] *= r15, t9[1] *= r15, t9[2] *= r15, t9[3] *= r15;
              }
            }
          } else if ("CIMPictureMarker" === i8.type) {
            const o4 = i8, a7 = r13.getResource(o4.url);
            let s9 = 1;
            if (null != a7 && a7.height && (s9 = a7.width / a7.height), null != e10.size) {
              const r14 = e10.size / 2, a8 = e10.size * s9 * o4.scaleX / 2;
              t9 = [-a8, -r14, a8, r14];
            }
          } else if (null != e10.size) {
            const r14 = e10.size / 2;
            t9 = [-r14, -r14, r14, r14];
          }
          if (e10.anchorPoint) {
            let r14, o4;
            "Absolute" === e10.anchorPointUnits ? (r14 = e10.anchorPoint.x, o4 = e10.anchorPoint.y) : (r14 = e10.anchorPoint.x * (t9[2] - t9[0]), o4 = e10.anchorPoint.y * (t9[3] - t9[1])), t9[0] -= r14, t9[1] -= o4, t9[2] -= r14, t9[3] -= o4;
          }
          let s8 = b$1(e10.rotation);
          if (e10.rotateClockwise && (s8 = -s8), o3 && (s8 -= o3), s8) {
            const e11 = K * s8, r14 = Math.cos(e11), o4 = Math.sin(e11), a7 = u$5([n$j, n$j, -n$j, -n$j]);
            f$4(a7, [t9[0] * r14 - t9[1] * o4, t9[0] * o4 + t9[1] * r14]), f$4(a7, [t9[0] * r14 - t9[3] * o4, t9[0] * o4 + t9[3] * r14]), f$4(a7, [t9[2] * r14 - t9[1] * o4, t9[2] * o4 + t9[1] * r14]), f$4(a7, [t9[2] * r14 - t9[3] * o4, t9[2] * o4 + t9[3] * r14]), t9 = a7;
          }
          let c3 = b$1(e10.offsetX), f2 = b$1(e10.offsetY);
          if (o3) {
            const e11 = K * o3, t10 = Math.cos(e11), r14 = Math.sin(e11), a7 = c3 * r14 + f2 * t10;
            c3 = c3 * t10 - f2 * r14, f2 = a7;
          }
          t9[0] += c3, t9[1] += f2, t9[2] += c3, t9[3] += f2;
          const m4 = oe(e10.markerPlacement);
          m4 > 0 && (t9[0] -= m4, t9[1] -= m4, t9[2] += m4, t9[3] += m4);
          break;
        }
      }
      const c2 = se(i8.effects);
      c2 > 0 && (t9[0] -= c2, t9[1] -= c2, t9[2] += c2, t9[3] += c2), s7 ? (e9[0] = t9[0], e9[1] = t9[1], e9[2] = t9[2], e9[3] = t9[3], s7 = false) : (e9[0] = Math.min(e9[0], t9[0]), e9[1] = Math.min(e9[1], t9[1]), e9[2] = Math.max(e9[2], t9[2]), e9[3] = Math.max(e9[3], t9[3]));
    }
    return e9;
  }
  _getTextInflatedSize(e9, r13, o3) {
    const a6 = r13.height ?? W$2;
    if (e9[0] = -a6 / 2, e9[1] = -a6 / 2, e9[2] = a6 / 2, e9[3] = a6 / 2, !o3)
      return e9;
    const s7 = o3.get(r13);
    if (!s7)
      return e9;
    const { text: i8, mosaicItem: n8 } = s7;
    if (!n8?.glyphMosaicItems?.length)
      return e9;
    const { lineGapType: l3, lineGap: c2 } = r13, f2 = l3 ? nt(l3, c2 ?? 0, a6) : 0, m4 = i$a(i8)[1], y2 = n8.glyphMosaicItems, M2 = "CIMBackgroundCallout" === r13.callout?.type, d2 = S(y2, m4, { scale: a6 / b$2, angle: b$1(r13.angle), xOffset: b$1(r13.offsetX), yOffset: b$1(r13.offsetY), hAlign: st(r13.horizontalAlignment), vAlign: ot(r13.verticalAlignment), maxLineWidth: 512, lineHeight: w$2 * Math.max(0.25, Math.min(f2 || 1, 4)), decoration: r13.font.decoration || "none", isCIM: true, hasBackground: M2 }).boundsT;
    return e9[0] = d2.x - d2.halfWidth, e9[1] = -d2.y - d2.halfHeight, e9[2] = d2.x + d2.halfWidth, e9[3] = -d2.y + d2.halfHeight, e9;
  }
}
class ne {
  static getEnvelope(e9, t8, r13) {
    if (!e9)
      return null;
    const o3 = new $$1(r13);
    if (Array.isArray(e9)) {
      let r14;
      for (const a6 of e9)
        r14 ? r14.union(re(o3, a6, t8)) : r14 = re(o3, a6, t8);
      return r14;
    }
    return re(o3, e9, t8);
  }
  static getTextureAnchor(e9, t8) {
    const r13 = this.getEnvelope(e9, null, t8);
    if (!r13)
      return [0, 0, 0];
    const o3 = (r13.x + 0.5 * r13.width) * Q2, a6 = (r13.y + 0.5 * r13.height) * Q2, s7 = r13.width * Q2 + 2, i8 = r13.height * Q2 + 2;
    return [-o3 / s7, -a6 / i8, i8];
  }
  static rasterize(e9, t8, r13, o3, a6 = true) {
    const s7 = r13 || this.getEnvelope(t8, null, o3);
    if (!s7)
      return [null, 0, 0, 0, 0];
    const i8 = (s7.x + 0.5 * s7.width) * Q2, n8 = (s7.y + 0.5 * s7.height) * Q2;
    e9.width = s7.width * Q2, e9.height = s7.height * Q2, r13 || (e9.width += 2, e9.height += 2);
    const l3 = e9.getContext("2d"), c2 = Q$1.createScale(Q2, -Q2);
    c2.translate(0.5 * e9.width - i8, 0.5 * e9.height + n8);
    const f2 = new et(l3, o3, c2);
    switch (t8.type) {
      case "CIMPointSymbol": {
        const e10 = { type: "point", x: 0, y: 0 };
        f2.drawSymbol(t8, e10);
        break;
      }
      case "CIMVectorMarker": {
        const e10 = new t$5();
        f2.drawMarker(t8, e10);
        break;
      }
    }
    const m4 = l3.getImageData(0, 0, e9.width, e9.height), u3 = new Uint8Array(m4.data);
    if (a6) {
      let e10;
      for (let t9 = 0; t9 < u3.length; t9 += 4)
        e10 = u3[t9 + 3] / 255, u3[t9] = u3[t9] * e10, u3[t9 + 1] = u3[t9 + 1] * e10, u3[t9 + 2] = u3[t9 + 2] * e10;
    }
    return [u3, e9.width, e9.height, -i8 / e9.width, -n8 / e9.height];
  }
  static fromTextSymbol(e9) {
    const { angle: r13, color: o3, font: a6, haloColor: s7, haloSize: i8, horizontalAlignment: n8, kerning: l3, text: c2, verticalAlignment: f2, xoffset: m4, yoffset: y2, backgroundColor: u3, borderLineColor: h5, borderLineSize: p3 } = e9;
    let M2, d2, S2, b2, C2, g2;
    a6 && (M2 = a6.family, d2 = a6.style, S2 = a6.weight, b2 = a6.size, C2 = a6.decoration);
    let I2 = false;
    if (c2) {
      I2 = i$a(c2)[1];
    }
    return (u3 || p3) && (g2 = { type: "CIMBackgroundCallout", margin: null, backgroundSymbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", color: ue(u3) }, { type: "CIMSolidStroke", color: ue(h5), width: p3 }] }, accentBarSymbol: null, gap: null, leaderLineSymbol: null, lineStyle: null }), { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, anchorPointUnits: "Relative", dominantSizeAxis3D: "Y", size: 10, billboardMode3D: "FaceNearPlane", frame: { xmin: -5, ymin: -5, xmax: 5, ymax: 5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { x: 0, y: 0 }, symbol: { type: "CIMTextSymbol", angle: r13, blockProgression: C$1.BTT, depth3D: 1, extrapolateBaselines: true, fontEffects: l$8.Normal, fontEncoding: a$b.Unicode, fontFamilyName: M2 || "Arial", fontStyleName: he(d2, S2), fontType: u$6.Unspecified, haloSize: i8, height: b2, hinting: y$1.Default, horizontalAlignment: me(n8 ?? "center"), kerning: l3, letterWidth: 100, ligatures: true, lineGapType: "Multiple", offsetX: b$1(m4), offsetY: b$1(y2), strikethrough: "line-through" === C2, underline: "underline" === C2, symbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: ue(o3) }] }, haloSymbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: ue(s7) }] }, shadowColor: [0, 0, 0, 255], shadowOffsetX: 1, shadowOffsetY: 1, textCase: "Normal", textDirection: I2 ? ne$1.RTL : ne$1.LTR, verticalAlignment: ye(f2 ?? "baseline"), verticalGlyphOrientation: oe$1.Right, wordSpacing: 100, billboardMode3D: m$4.FaceNearPlane, callout: g2 }, textString: c2 }], scaleSymbolsProportionally: true, respectFrame: true }], scaleX: 1, angleAlignment: "Display" };
  }
  static fromPictureFillSymbol(e9) {
    const { height: t8, outline: r13, width: o3, xoffset: a6, xscale: s7, yoffset: i8, yscale: n8 } = e9, l3 = [], c2 = { type: "CIMPolygonSymbol", symbolLayers: l3 };
    if (r13) {
      const e10 = ke(r13);
      e10 && l3.push(e10);
    }
    let f2 = e9.url;
    "esriPFS" === e9.type && e9.imageData && (f2 = e9.imageData);
    const m4 = "angle" in e9 ? e9.angle ?? 0 : 0, y2 = (o3 ?? 0) * (s7 || 1), u3 = (t8 ?? 0) * (n8 || 1);
    return l3.push({ type: "CIMPictureFill", invertBackfaceTexture: false, scaleX: 1, textureFilter: ie$1.Picture, tintColor: null, url: f2, height: u3, width: y2, offsetX: b$1(a6), offsetY: b$1(i8), rotation: b$1(-m4), colorSubstitutions: null }), c2;
  }
  static fromSimpleFillSymbol(e9) {
    const { color: t8, style: o3, outline: a6 } = e9, s7 = [], n8 = { type: "CIMPolygonSymbol", symbolLayers: s7 };
    if (a6) {
      const e10 = ke(a6);
      e10 && s7.push(e10);
    }
    if (o3 && "solid" !== o3 && "none" !== o3 && "esriSFSSolid" !== o3 && "esriSFSNull" !== o3) {
      const e10 = { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMSolidStroke", color: ue(t8), capStyle: U$1.Butt, joinStyle: w$3.Miter, width: 0.75 }] };
      let a7 = 0;
      const n9 = e$d(Ce(o3) ? 8 : 10);
      switch (o3) {
        case "vertical":
        case "esriSFSVertical":
          a7 = 90;
          break;
        case "forward-diagonal":
        case "esriSFSForwardDiagonal":
        case "diagonal-cross":
        case "esriSFSDiagonalCross":
          a7 = -45;
          break;
        case "backward-diagonal":
        case "esriSFSBackwardDiagonal":
          a7 = 45;
          break;
        case "cross":
        case "esriSFSCross":
          a7 = 0;
      }
      s7.push({ type: "CIMHatchFill", lineSymbol: e10, offsetX: 0, offsetY: 0, rotation: a7, separation: n9 }), "cross" === o3 || "esriSFSCross" === o3 ? s7.push({ type: "CIMHatchFill", lineSymbol: a$9(e10), offsetX: 0, offsetY: 0, rotation: 90, separation: n9 }) : "diagonal-cross" !== o3 && "esriSFSDiagonalCross" !== o3 || s7.push({ type: "CIMHatchFill", lineSymbol: a$9(e10), offsetX: 0, offsetY: 0, rotation: 45, separation: n9 });
    } else
      !o3 || "solid" !== o3 && "esriSFSSolid" !== o3 || s7.push({ type: "CIMSolidFill", enable: true, color: ue(t8) });
    return n8;
  }
  static fromSimpleLineSymbol(e9) {
    const { cap: t8, color: r13, join: o3, marker: a6, miterLimit: s7, style: i8, width: n8 } = e9;
    let l3 = null;
    "solid" !== i8 && "none" !== i8 && "esriSLSSolid" !== i8 && "esriSLSNull" !== i8 && (l3 = [{ type: "CIMGeometricEffectDashes", dashTemplate: de(i8, t8), lineDashEnding: "NoConstraint", scaleDash: true, offsetAlongLine: null }]);
    const c2 = [];
    if (a6) {
      let e10;
      switch (a6.placement) {
        case "begin-end":
          e10 = o$4.Both;
          break;
        case "begin":
          e10 = o$4.JustBegin;
          break;
        case "end":
          e10 = o$4.JustEnd;
          break;
        default:
          e10 = o$4.None;
      }
      const t9 = ne.fromSimpleMarker(a6, n8, r13).symbolLayers[0];
      t9.markerPlacement = { type: "CIMMarkerPlacementAtExtremities", angleToLine: true, offset: 0, extremityPlacement: e10, offsetAlongLine: 0 }, c2.push(t9);
    }
    return c2.push({ type: "CIMSolidStroke", color: "none" !== i8 && "esriSLSNull" !== i8 ? ue(r13) : [0, 0, 0, 0], capStyle: ce(t8), joinStyle: fe(o3), miterLimit: s7, width: n8, effects: l3 }), { type: "CIMLineSymbol", symbolLayers: c2 };
  }
  static fromPictureMarker(e9) {
    const { angle: t8, height: r13, width: o3, xoffset: a6, yoffset: s7 } = e9;
    let i8 = e9.url;
    return "esriPMS" === e9.type && e9.imageData && (i8 = e9.imageData), { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMPictureMarker", invertBackfaceTexture: false, scaleX: 1, textureFilter: ie$1.Picture, tintColor: null, url: i8, size: r13, width: o3, offsetX: b$1(a6), offsetY: b$1(s7), rotation: b$1(-t8) }] };
  }
  static fromSimpleMarker(e9, t8, r13) {
    const { style: o3 } = e9, a6 = e9.color ?? r13;
    if ("path" === o3) {
      const t9 = [];
      if ("outline" in e9 && e9.outline) {
        const r15 = e9.outline;
        t9.push({ type: "CIMSolidStroke", enable: true, width: u$3(Math.round(e$d(r15.width))), color: ue(r15.color), path: e9.path });
      }
      t9.push({ type: "CIMSolidFill", enable: true, color: ue(a6), path: e9.path });
      const [r14, o4] = be("square");
      return { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, rotation: b$1(-e9.angle), size: b$1(e9.size || 6), offsetX: b$1(e9.xoffset), offsetY: b$1(e9.yoffset), frame: r14, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: o4, symbol: { type: "CIMPolygonSymbol", symbolLayers: t9 } }] }] };
    }
    const n8 = [];
    let l3, c2;
    if ("outline" in e9 && e9.outline && "none" !== e9.outline.style && "esriSLSNull" !== e9.outline.style) {
      const t9 = e9.outline, r14 = "solid" !== t9.style && "esriSLSSolid" !== t9.style;
      [l3, c2] = r14 ? be(o3, e9.size) : be(o3);
      const a7 = "cross" !== e9.style && "x" !== e9.style || "dot" === e9?.outline.style || "short-dot" === e9?.outline.style ? k$1.HalfGap : k$1.FullPattern, f3 = r14 ? [{ type: "CIMGeometricEffectAddControlPoints" }, { type: "CIMGeometricEffectDashes", dashTemplate: de(t9.style, null).map((e10) => t9.width && t9.width > 0 ? e10 * t9.width : e10), lineDashEnding: a7, controlPointEnding: k$1.FullPattern }] : void 0;
      n8.push({ type: "CIMSolidStroke", capStyle: r14 ? U$1.Round : U$1.Butt, enable: true, width: null != t9.width && t9.width > 0.667 ? u$3(Math.round(e$d(t9.width))) : t9.width, color: ue(t9.color), effects: f3 });
    } else
      !t8 || "line-marker" !== e9.type || "cross" !== e9.style && "x" !== e9.style ? [l3, c2] = be(o3) : ([l3, c2] = be(o3), n8.push({ type: "CIMSolidStroke", enable: true, width: t8, color: ue(a6) }));
    n8.push({ type: "CIMSolidFill", enable: true, color: ue(a6) });
    const f2 = { type: "CIMPolygonSymbol", symbolLayers: n8 };
    return { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, rotation: b$1(-e9.angle), size: b$1(e9.size || 6 * t8), offsetX: b$1(e9.xoffset), offsetY: b$1(e9.yoffset), frame: l3, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: c2, symbol: f2 }] }] };
  }
  static fromCIMHatchFill(e9, t8) {
    const o3 = t8 * (e9.separation ?? Y), a6 = o3 / 2, s7 = a$9(e9.lineSymbol);
    s7.symbolLayers?.forEach((e10) => {
      switch (e10.type) {
        case "CIMSolidStroke":
          null != e10.width && (e10.width *= t8), e10.effects?.forEach((e11) => {
            "CIMGeometricEffectDashes" === e11.type && (e11.dashTemplate = e11.dashTemplate.map((e12) => e12 * t8));
          });
          break;
        case "CIMVectorMarker": {
          null != e10.size && (e10.size *= t8);
          const r13 = e10.markerPlacement;
          null != r13 && "placementTemplate" in r13 && (r13.placementTemplate = r13.placementTemplate.map((e11) => e11 * t8));
          break;
        }
      }
    });
    let i8 = this._getLineSymbolPeriod(s7) || Z2;
    for (; i8 < Z2; )
      i8 *= 2;
    const n8 = i8 / 2;
    return { type: "CIMVectorMarker", frame: { xmin: -n8, xmax: n8, ymin: -a6, ymax: a6 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { paths: [[[-n8, 0], [n8, 0]]] }, symbol: s7 }], size: o3 };
  }
  static fetchResources(e9, t8, r13) {
    if (e9 && t8)
      switch (e9.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol": {
          const o3 = e9.symbolLayers;
          if (!o3)
            return;
          for (const e10 of o3)
            switch (Ie(e10, t8, r13), e10.type) {
              case "CIMPictureFill":
              case "CIMHatchFill":
              case "CIMGradientFill":
              case "CIMPictureStroke":
              case "CIMGradientStroke":
              case "CIMCharacterMarker":
              case "CIMPictureMarker":
                "url" in e10 && e10.url && r13.push(t8.fetchResource(e10.url, null));
                break;
              case "CIMVectorMarker": {
                const o4 = e10.markerGraphics;
                if (!o4)
                  continue;
                for (const e11 of o4)
                  if (e11) {
                    const o5 = e11.symbol;
                    o5 && ne.fetchResources(o5, t8, r13);
                  }
              }
            }
          break;
        }
      }
  }
  static fetchFonts(e9, t8, r13) {
    if (e9 && t8) {
      if ("symbolLayers" in e9 && e9.symbolLayers) {
        for (const o3 of e9.symbolLayers)
          if ("CIMVectorMarker" === o3.type && o3.markerGraphics)
            for (const e10 of o3.markerGraphics)
              e10?.symbol && ne.fetchFonts(e10.symbol, t8, r13);
      } else if ("CIMTextSymbol" === e9.type) {
        const { fontFamilyName: o3, fontStyleName: a6 } = e9;
        if (!o3 || "calcitewebcoreicons" === o3.toLowerCase())
          return;
        const { style: s7, weight: i8 } = S$1(a6), n8 = k$2(e9), l3 = new m$5({ family: o3, style: s7, weight: i8, decoration: n8 });
        r13.push(t8.loadFont(l3).catch(() => {
          ee.error(`Unsupported font ${o3} in CIM symbol`);
        }));
      }
    }
  }
  static _getLineSymbolPeriod(e9) {
    if (e9) {
      const t8 = this._getEffectsRepeat(e9.effects);
      if (t8)
        return t8;
      if (e9.symbolLayers) {
        for (const r13 of e9.symbolLayers)
          if (r13) {
            const e10 = this._getEffectsRepeat(r13.effects);
            if (e10)
              return e10;
            switch (r13.type) {
              case "CIMCharacterMarker":
              case "CIMPictureMarker":
              case "CIMVectorMarker":
              case "CIMObjectMarker3D":
              case "CIMglTFMarker3D": {
                const e11 = this._getPlacementRepeat(r13.markerPlacement);
                if (e11)
                  return e11;
              }
            }
          }
      }
    }
    return 0;
  }
  static _getEffectsRepeat(e9) {
    if (e9) {
      for (const t8 of e9)
        if (t8)
          switch (t8.type) {
            case "CIMGeometricEffectDashes": {
              const e10 = t8.dashTemplate;
              if (e10 && e10.length) {
                let t9 = 0;
                for (const r13 of e10)
                  t9 += r13;
                return 1 & e10.length && (t9 *= 2), t9;
              }
              break;
            }
            case "CIMGeometricEffectWave":
              return t8.period;
            default:
              ee.error(`unsupported geometric effect type ${t8.type}`);
          }
    }
    return 0;
  }
  static _getPlacementRepeat(e9) {
    if (e9)
      switch (e9.type) {
        case "CIMMarkerPlacementAlongLineSameSize":
        case "CIMMarkerPlacementAlongLineRandomSize":
        case "CIMMarkerPlacementAlongLineVariableSize": {
          const t8 = e9.placementTemplate;
          if (t8 && t8.length) {
            let e10 = 0;
            for (const r13 of t8)
              e10 += +r13;
            return 1 & t8.length && (e10 *= 2), e10;
          }
          break;
        }
      }
    return 0;
  }
  static fromCIMInsidePolygon(e9) {
    const t8 = e9.markerPlacement, r13 = { ...e9 };
    r13.markerPlacement = null, r13.anchorPoint = null;
    const o3 = Math.abs(t8.stepX), s7 = Math.abs(t8.stepY), n8 = (t8.randomness ?? 100) / 100;
    let l3, c2, f2, m4;
    if ("Random" === t8.gridType) {
      const e10 = e$d(se$1), r14 = Math.max(Math.floor(e10 / o3), 1), y2 = Math.max(Math.floor(e10 / s7), 1);
      l3 = r14 * o3 / 2, c2 = y2 * s7 / 2, f2 = 2 * c2;
      const u3 = new t$a(t8.seed), h5 = n8 * o3 / 1.5, p3 = n8 * s7 / 1.5;
      m4 = [];
      for (let t9 = 0; t9 < r14; t9++)
        for (let e11 = 0; e11 < y2; e11++) {
          const r15 = t9 * o3 - l3 + h5 * (0.5 - u3.getFloat()), a6 = e11 * s7 - c2 + p3 * (0.5 - u3.getFloat());
          m4.push({ x: r15, y: a6 }), 0 === t9 && m4.push({ x: r15 + 2 * l3, y: a6 }), 0 === e11 && m4.push({ x: r15, y: a6 + 2 * c2 });
        }
    } else
      true === t8.shiftOddRows ? (l3 = o3 / 2, c2 = s7, f2 = 2 * s7, m4 = [{ x: -l3, y: 0 }, { x: l3, y: 0 }, { x: 0, y: c2 }, { x: 0, y: -c2 }]) : (l3 = o3 / 2, c2 = s7 / 2, f2 = s7, m4 = [{ x: -o3, y: 0 }, { x: 0, y: -s7 }, { x: -o3, y: -s7 }, { x: 0, y: 0 }, { x: o3, y: 0 }, { x: 0, y: s7 }, { x: o3, y: s7 }, { x: -o3, y: s7 }, { x: o3, y: -s7 }]);
    return { type: "CIMVectorMarker", frame: { xmin: -l3, xmax: l3, ymin: -c2, ymax: c2 }, markerGraphics: m4.map((e10) => ({ type: "CIMMarkerGraphic", geometry: e10, symbol: { type: "CIMPointSymbol", symbolLayers: [r13] } })), size: f2 };
  }
  static getSize(e9) {
    if (e9)
      switch (e9.type) {
        case "CIMTextSymbol":
          return e9.height;
        case "CIMPointSymbol": {
          let t8 = 0;
          if (e9.symbolLayers) {
            for (const r13 of e9.symbolLayers)
              if (r13)
                switch (r13.type) {
                  case "CIMCharacterMarker":
                  case "CIMPictureMarker":
                  case "CIMVectorMarker":
                  case "CIMObjectMarker3D":
                  case "CIMglTFMarker3D": {
                    const e10 = r13.size;
                    null != e10 && e10 > t8 && (t8 = e10);
                    break;
                  }
                }
          }
          return t8;
        }
        case "CIMLineSymbol":
        case "CIMPolygonSymbol": {
          let t8 = 0;
          if (e9.symbolLayers) {
            for (const r13 of e9.symbolLayers)
              if (r13)
                switch (r13.type) {
                  case "CIMSolidStroke":
                  case "CIMPictureStroke":
                  case "CIMGradientStroke": {
                    const e10 = r13.width;
                    null != e10 && e10 > t8 && (t8 = e10);
                    break;
                  }
                  case "CIMCharacterMarker":
                  case "CIMPictureMarker":
                  case "CIMVectorMarker":
                  case "CIMObjectMarker3D":
                  case "CIMglTFMarker3D":
                    if (r13.markerPlacement && m$6(r13.markerPlacement)) {
                      const e10 = r13.size;
                      null != e10 && e10 > t8 && (t8 = e10);
                    }
                }
          }
          return t8;
        }
      }
  }
  static getMarkerScaleRatio(e9) {
    if (e9 && "CIMVectorMarker" === e9.type) {
      if (false !== e9.scaleSymbolsProportionally && e9.frame && null != e9.size) {
        const t8 = e9.frame.ymax - e9.frame.ymin;
        return e9.size / t8;
      }
    }
    return 1;
  }
}
class le {
  static findApplicableOverrides(e9, t8, r13) {
    if (e9 && t8) {
      if (e9.primitiveName) {
        let o3 = false;
        for (const t9 of r13)
          if (t9.primitiveName === e9.primitiveName) {
            o3 = true;
            break;
          }
        if (!o3)
          for (const a6 of t8)
            a6.primitiveName === e9.primitiveName && r13.push(a6);
      }
      switch (e9.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol":
          if (e9.effects)
            for (const o3 of e9.effects)
              le.findApplicableOverrides(o3, t8, r13);
          if (e9.symbolLayers)
            for (const o3 of e9.symbolLayers)
              le.findApplicableOverrides(o3, t8, r13);
          break;
        case "CIMTextSymbol":
          break;
        case "CIMSolidStroke":
        case "CIMPictureStroke":
        case "CIMGradientStroke":
        case "CIMSolidFill":
        case "CIMPictureFill":
        case "CIMHatchFill":
        case "CIMGradientFill":
        case "CIMVectorMarker":
        case "CIMCharacterMarker":
        case "CIMPictureMarker":
          if (e9.effects)
            for (const o3 of e9.effects)
              le.findApplicableOverrides(o3, t8, r13);
          if (e9.markerPlacement && le.findApplicableOverrides(e9.markerPlacement, t8, r13), "CIMVectorMarker" === e9.type) {
            if (e9.markerGraphics)
              for (const o3 of e9.markerGraphics)
                le.findApplicableOverrides(o3, t8, r13), le.findApplicableOverrides(o3.symbol, t8, r13);
          } else
            "CIMCharacterMarker" === e9.type ? le.findApplicableOverrides(e9.symbol, t8, r13) : "CIMHatchFill" === e9.type ? le.findApplicableOverrides(e9.lineSymbol, t8, r13) : "CIMPictureMarker" === e9.type && le.findApplicableOverrides(e9.animatedSymbolProperties, t8, r13);
      }
    }
  }
  static findEffectOverrides(e9, t8, r13) {
    if (!t8 || !e9)
      return;
    const o3 = e9.length;
    for (let a6 = 0; a6 < o3; a6++) {
      const o4 = e9[a6], s7 = o4?.primitiveName;
      if (s7) {
        let e10 = false;
        for (const t9 of r13)
          if (t9.primitiveName === s7) {
            e10 = true;
            break;
          }
        if (!e10)
          for (const o5 of t8)
            o5.primitiveName === s7 && r13.push(o5);
      }
    }
  }
  static async resolveSymbolOverrides(e9, t8, o3, a6, s7, i8, n8) {
    if (!e9?.symbol)
      return null;
    let { symbol: l3, primitiveOverrides: c2 } = e9;
    const f2 = !!c2;
    if (!f2 && !a6)
      return l3;
    l3 = a$9(l3);
    let m4 = true;
    if (t8 || (t8 = { attributes: {} }, m4 = false), f2) {
      if (m4 || (c2 = c2.filter((e10) => !e10.valueExpressionInfo?.expression.includes("$feature"))), n8 || (c2 = c2.filter((e10) => !e10.valueExpressionInfo?.expression.includes("$view"))), c2.length > 0) {
        const e10 = A$3(t8.attributes);
        await le.evaluateOverrides(c2, t8, { spatialReference: o3, fields: e10, geometryType: s7 }, i8, n8);
      }
      le.applyOverrides(l3, c2);
    }
    return a6 && le.applyDictionaryTextOverrides(l3, t8, a6), l3;
  }
  static async evaluateOverrides(e9, t8, r13, o3, a6) {
    if (!t8)
      return;
    let s7;
    for (const i8 of e9) {
      const e10 = i8.valueExpressionInfo;
      if (e10 && r13?.geometryType) {
        s7 || (s7 = []), i8.value = void 0;
        const n8 = n$k(e10.expression, r13.spatialReference, r13.fields).then((e11) => {
          i8.value = s$b(e11, t8, { $view: a6 }, r13.geometryType, o3);
        });
        s7.push(n8);
      }
    }
    void 0 !== s7 && s7.length > 0 && await Promise.all(s7);
  }
  static applyDictionaryTextOverrides(e9, t8, r13, o3 = "Normal") {
    if (e9?.type)
      switch (e9.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol":
        case "CIMTextSymbol":
          {
            const a6 = e9.symbolLayers;
            if (!a6)
              return;
            for (const s7 of a6)
              s7 && "CIMVectorMarker" === s7.type && le.applyDictionaryTextOverrides(s7, t8, r13, "CIMTextSymbol" === e9.type ? e9.textCase : o3);
          }
          break;
        case "CIMVectorMarker":
          {
            const o4 = e9.markerGraphics;
            if (!o4)
              return;
            for (const e10 of o4)
              e10 && le.applyDictionaryTextOverrides(e10, t8, r13);
          }
          break;
        case "CIMMarkerGraphic": {
          const a6 = e9.textString;
          if (a6 && a6.includes("[")) {
            const s7 = i$c(a6, r13);
            e9.textString = l$9(t8, s7, o3);
          }
        }
      }
  }
  static applyOverrides(e9, t8, r13, o3) {
    if (e9.primitiveName) {
      for (const a6 of t8)
        if (a6.primitiveName === e9.primitiveName) {
          const t9 = ge(a6.propertyName);
          if (o3 && o3.push({ cim: e9, nocapPropertyName: t9, value: e9[t9] }), a6.expression && (a6.value = le.toValue(a6.propertyName, a6.expression)), r13) {
            let t10 = false;
            for (const o4 of r13)
              o4.primitiveName === e9.primitiveName && (t10 = true);
            t10 || r13.push(a6);
          }
          null != a6.value && (e9[t9] = a6.value);
        }
    }
    switch (e9.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
        if (e9.effects)
          for (const a6 of e9.effects)
            le.applyOverrides(a6, t8, r13, o3);
        if (e9.symbolLayers)
          for (const a6 of e9.symbolLayers)
            le.applyOverrides(a6, t8, r13, o3);
        break;
      case "CIMTextSymbol":
        break;
      case "CIMSolidStroke":
      case "CIMSolidFill":
      case "CIMVectorMarker":
        if (e9.effects)
          for (const a6 of e9.effects)
            le.applyOverrides(a6, t8, r13, o3);
        if ("CIMVectorMarker" === e9.type && e9.markerGraphics)
          for (const a6 of e9.markerGraphics)
            le.applyOverrides(a6, t8, r13, o3), le.applyOverrides(a6.symbol, t8, r13, o3);
    }
  }
  static restoreOverrides(e9) {
    for (const t8 of e9)
      t8.cim[t8.nocapPropertyName] = t8.value;
  }
  static buildOverrideKey(e9) {
    let t8 = "";
    for (const r13 of e9)
      void 0 !== r13.value && (t8 += `${r13.primitiveName}${r13.propertyName}${JSON.stringify(r13.value)}`);
    return t8;
  }
  static toValue(t8, r13) {
    if ("DashTemplate" === t8)
      return r13.split(" ").map((e9) => Number(e9));
    if ("Color" === t8) {
      const t9 = new u$7(r13).toRgba();
      return t9[3] *= 255, t9;
    }
    return r13;
  }
}
const ce = (e9) => {
  if (!e9)
    return U$1.Butt;
  switch (e9) {
    case "butt":
      return U$1.Butt;
    case "square":
      return U$1.Square;
    case "round":
      return U$1.Round;
  }
}, fe = (e9) => {
  if (!e9)
    return w$3.Miter;
  switch (e9) {
    case "miter":
      return w$3.Miter;
    case "round":
      return w$3.Round;
    case "bevel":
      return w$3.Bevel;
  }
}, me = (e9) => {
  if (null == e9)
    return "Center";
  switch (e9) {
    case "left":
      return "Left";
    case "right":
      return "Right";
    case "center":
      return "Center";
  }
}, ye = (e9) => {
  if (null == e9)
    return "Center";
  switch (e9) {
    case "baseline":
      return "Baseline";
    case "top":
      return "Top";
    case "middle":
      return "Center";
    case "bottom":
      return "Bottom";
  }
}, ue = (e9) => {
  if (!e9)
    return [0, 0, 0, 0];
  const { r: t8, g: r13, b: o3, a: a6 } = e9;
  return [t8, r13, o3, 255 * a6];
}, he = (e9, t8) => {
  const r13 = pe(t8), o3 = Me(e9);
  return r13 && o3 ? `${r13}-${o3}` : `${r13}${o3}`;
}, pe = (e9) => {
  if (!e9)
    return "";
  switch (e9.toLowerCase()) {
    case "bold":
    case "bolder":
      return "bold";
  }
  return "";
}, Me = (e9) => {
  if (!e9)
    return "";
  switch (e9.toLowerCase()) {
    case "italic":
    case "oblique":
      return "italic";
  }
  return "";
}, de = (e9, t8) => {
  const r13 = has("safari") ? 1e-3 : 0, o3 = "butt" === t8;
  switch (e9) {
    case "dash":
    case "esriSLSDash":
      return o3 ? [4, 3] : [3, 4];
    case "dash-dot":
    case "esriSLSDashDot":
      return o3 ? [4, 3, 1, 3] : [3, 4, r13, 4];
    case "dot":
    case "esriSLSDot":
      return o3 ? [1, 3] : [r13, 4];
    case "long-dash":
    case "esriSLSLongDash":
      return o3 ? [8, 3] : [7, 4];
    case "long-dash-dot":
    case "esriSLSLongDashDot":
      return o3 ? [8, 3, 1, 3] : [7, 4, r13, 4];
    case "long-dash-dot-dot":
    case "esriSLSDashDotDot":
      return o3 ? [8, 3, 1, 3, 1, 3] : [7, 4, r13, 4, r13, 4];
    case "short-dash":
    case "esriSLSShortDash":
      return o3 ? [4, 1] : [3, 2];
    case "short-dash-dot":
    case "esriSLSShortDashDot":
      return o3 ? [4, 1, 1, 1] : [3, 2, r13, 2];
    case "short-dash-dot-dot":
    case "esriSLSShortDashDotDot":
      return o3 ? [4, 1, 1, 1, 1, 1] : [3, 2, r13, 2, r13, 2];
    case "short-dot":
    case "esriSLSShortDot":
      return o3 ? [1, 1] : [r13, 2];
    case "solid":
    case "esriSLSSolid":
    case "none":
      return ee.error("Unexpected: style does not require rasterization"), [0, 0];
    default:
      return ee.error(`Tried to rasterize SLS, but found an unexpected style: ${e9}!`), [0, 0];
  }
};
function Se(e9) {
  return void 0 !== e9.symbolLayers;
}
const be = (e9, t8 = 100) => {
  const r13 = t8 / 2;
  let o3, a6;
  const s7 = e9;
  if ("circle" === s7 || "esriSMSCircle" === s7) {
    const e10 = 0.25;
    let t9 = Math.acos(1 - e10 / r13), s8 = Math.ceil(W$1 / t9 / 4);
    0 === s8 && (s8 = 1), t9 = J / s8, s8 *= 4;
    const i8 = [];
    i8.push([r13, 0]);
    for (let o4 = 1; o4 < s8; o4++)
      i8.push([r13 * Math.cos(o4 * t9), -r13 * Math.sin(o4 * t9)]);
    i8.push([r13, 0]), o3 = { rings: [i8] }, a6 = { xmin: -r13, ymin: -r13, xmax: r13, ymax: r13 };
  } else if ("cross" === s7 || "esriSMSCross" === s7) {
    const e10 = 0;
    o3 = { paths: [[[e10, r13], [e10, -r13]], [[r13, e10], [-r13, e10]]] }, a6 = { xmin: -r13, ymin: -r13, xmax: r13, ymax: r13 };
  } else if ("diamond" === s7 || "esriSMSDiamond" === s7)
    o3 = { rings: [[[-r13, 0], [0, r13], [r13, 0], [0, -r13], [-r13, 0]]] }, a6 = { xmin: -r13, ymin: -r13, xmax: r13, ymax: r13 };
  else if ("square" === s7 || "esriSMSSquare" === s7)
    o3 = { rings: [[[-r13, -r13], [-r13, r13], [r13, r13], [r13, -r13], [-r13, -r13]]] }, a6 = { xmin: -r13, ymin: -r13, xmax: r13, ymax: r13 };
  else if ("x" === s7 || "esriSMSX" === s7)
    o3 = { paths: [[[r13, r13], [-r13, -r13]], [[r13, -r13], [-r13, r13]]] }, a6 = { xmin: -r13, ymin: -r13, xmax: r13, ymax: r13 };
  else if ("triangle" === s7 || "esriSMSTriangle" === s7) {
    const e10 = t8 * 0.5773502691896257, r14 = -e10, s8 = 2 / 3 * t8, i8 = s8 - t8;
    o3 = { rings: [[[r14, i8], [0, s8], [e10, i8], [r14, i8]]] }, a6 = { xmin: r14, ymin: i8, xmax: e10, ymax: s8 };
  } else
    "arrow" === s7 && (o3 = { rings: [[[-50, 50], [50, 0], [-50, -50], [-33, -20], [-33, 20], [-50, 50]]] }, a6 = { xmin: -r13, ymin: -r13, xmax: r13, ymax: r13 });
  return [a6, o3];
}, Ce = (e9) => "vertical" === e9 || "horizontal" === e9 || "cross" === e9 || "esriSFSCross" === e9 || "esriSFSVertical" === e9 || "esriSFSHorizontal" === e9, ge = (e9) => e9 ? e9.charAt(0).toLowerCase() + e9.substr(1) : e9;
function Ie(e9, t8, r13) {
  if (!e9.effects || null != t8.geometryEngine)
    return;
  if (t8.geometryEnginePromise)
    return void r13.push(t8.geometryEnginePromise);
  d(e9.effects) && (t8.geometryEnginePromise = I(), r13.push(t8.geometryEnginePromise), t8.geometryEnginePromise.then((e10) => t8.geometryEngine = e10));
}
function ke(e9) {
  if (!e9)
    return null;
  let t8 = null;
  const { cap: r13, color: o3, join: a6, miterLimit: s7, style: i8, width: n8 } = e9;
  return "solid" !== i8 && "none" !== i8 && "esriSLSSolid" !== i8 && "esriSLSNull" !== i8 && (t8 = [{ type: "CIMGeometricEffectDashes", dashTemplate: de(i8, r13), lineDashEnding: "NoConstraint", scaleDash: true, offsetAlongLine: null }]), { type: "CIMSolidStroke", color: "esriSLSNull" !== i8 && "none" !== i8 ? ue(o3) : [0, 0, 0, 0], capStyle: ce(r13), joinStyle: fe(a6), miterLimit: s7, width: n8, effects: t8 };
}
const t7 = 0.05;
function n$2(n8) {
  return Math.max(Math.round(n8 / t7), 1) * t7;
}
const e$2 = /* @__PURE__ */ new Set(["StartTimeOffset", "Duration", "RepeatDelay"]);
function a$1(t8, a6) {
  return e$2.has(a6) ? n$2(t8) : t8;
}
function l$1(t8) {
  if (!t8)
    return null;
  switch (t8.type) {
    case "CIMPointSymbol": {
      const o3 = t8.symbolLayers;
      return o3 && 1 === o3.length ? l$1(o3[0]) : null;
    }
    case "CIMVectorMarker": {
      const o3 = t8.markerGraphics;
      if (!o3 || 1 !== o3.length)
        return null;
      const n8 = o3[0];
      if (!n8)
        return null;
      const r13 = n8.geometry;
      if (!r13)
        return null;
      const l3 = n8.symbol;
      return !l3 || "CIMPolygonSymbol" !== l3.type && "CIMLineSymbol" !== l3.type || l3.symbolLayers?.some((t9) => !!t9.effects) ? null : { geom: r13, asFill: "CIMPolygonSymbol" === l3.type };
    }
    case "sdf":
      return { geom: t8.geom, asFill: t8.asFill };
  }
  return null;
}
function e$1(t8) {
  return t8 ? t8.rings ? t8.rings : t8.paths ? t8.paths : void 0 !== t8.xmin && void 0 !== t8.ymin && void 0 !== t8.xmax && void 0 !== t8.ymax ? [[[t8.xmin, t8.ymin], [t8.xmin, t8.ymax], [t8.xmax, t8.ymax], [t8.xmax, t8.ymin], [t8.xmin, t8.ymin]]] : null : null;
}
function i7(t8) {
  let o3 = 1 / 0, r13 = -1 / 0, l3 = 1 / 0, e9 = -1 / 0;
  for (const n8 of t8)
    for (const t9 of n8)
      t9[0] < o3 && (o3 = t9[0]), t9[0] > r13 && (r13 = t9[0]), t9[1] < l3 && (l3 = t9[1]), t9[1] > e9 && (e9 = t9[1]);
  return new t$1(o3, l3, r13 - o3, e9 - l3);
}
function s6(t8) {
  let o3 = 1 / 0, n8 = -1 / 0, r13 = 1 / 0, l3 = -1 / 0;
  for (const e9 of t8)
    for (const t9 of e9)
      t9[0] < o3 && (o3 = t9[0]), t9[0] > n8 && (n8 = t9[0]), t9[1] < r13 && (r13 = t9[1]), t9[1] > l3 && (l3 = t9[1]);
  return [o3, r13, n8, l3];
}
function f(t8) {
  return t8 ? t8.rings ? s6(t8.rings) : t8.paths ? s6(t8.paths) : m$3(t8) ? [t8.xmin, t8.ymin, t8.xmax, t8.ymax] : null : null;
}
function m3(t8, o3, n8, l3, e9) {
  const [i8, s7, f2, m4] = t8;
  if (f2 < i8 || m4 < s7)
    return [0, 0, 0];
  const a6 = f2 - i8, u3 = m4 - s7, c2 = 128, h5 = ae$1, y2 = Math.floor(0.5 * (0.5 * c2 - h5)), x2 = (c2 - 2 * (y2 + h5)) / Math.max(a6, u3), M2 = Math.round(a6 * x2) + 2 * y2, g2 = Math.round(u3 * x2) + 2 * y2;
  let p3 = 1;
  if (o3) {
    p3 = g2 / x2 / (o3.ymax - o3.ymin);
  }
  let d2 = 0, b2 = 0, w2 = 1;
  l3 && (e9 ? o3 && n8 && o3.ymax - o3.ymin > 0 && (w2 = (o3.xmax - o3.xmin) / (o3.ymax - o3.ymin), d2 = l3.x / (n8 * w2), b2 = l3.y / n8) : (d2 = l3.x, b2 = l3.y)), o3 && (d2 = 0.5 * (o3.xmax + o3.xmin) + d2 * (o3.xmax - o3.xmin), b2 = 0.5 * (o3.ymax + o3.ymin) + b2 * (o3.ymax - o3.ymin)), d2 -= i8, b2 -= s7, d2 *= x2, b2 *= x2, d2 += y2, b2 += y2;
  let F2 = d2 / M2 - 0.5, j2 = b2 / g2 - 0.5;
  return e9 && n8 && (F2 *= n8 * w2, j2 *= n8), [p3, F2, j2];
}
function a5(t8) {
  const o3 = e$1(t8.geom), n8 = i7(o3), l3 = 128, s7 = ae$1, f2 = Math.floor(0.5 * (0.5 * l3 - s7)), m4 = (l3 - 2 * (f2 + s7)) / Math.max(n8.width, n8.height), a6 = Math.round(n8.width * m4) + 2 * f2, y2 = Math.round(n8.height * m4) + 2 * f2, x2 = [];
  for (const r13 of o3)
    if (r13 && r13.length > 1) {
      const o4 = [];
      for (const l4 of r13) {
        let [r14, e9] = l4;
        r14 -= n8.x, e9 -= n8.y, r14 *= m4, e9 *= m4, r14 += f2 - 0.5, e9 += f2 - 0.5, t8.asFill ? o4.push([r14, e9]) : o4.push([Math.round(r14), Math.round(e9)]);
      }
      if (t8.asFill) {
        const t9 = o4.length - 1;
        o4[0][0] === o4[t9][0] && o4[0][1] === o4[t9][1] || o4.push(o4[0]);
      }
      x2.push(o4);
    }
  const M2 = u2(x2, a6, y2, f2);
  return t8.asFill && c(x2, a6, y2, f2, M2), [h4(M2, f2), a6, y2];
}
function u2(t8, o3, n8, r13) {
  const l3 = o3 * n8, e9 = new Array(l3), i8 = r13 * r13 + 1;
  for (let s7 = 0; s7 < l3; ++s7)
    e9[s7] = i8;
  for (const s7 of t8) {
    const t9 = s7.length;
    for (let l4 = 1; l4 < t9; ++l4) {
      const t10 = s7[l4 - 1], i9 = s7[l4];
      let f2, m4, a6, u3;
      t10[0] < i9[0] ? (f2 = t10[0], m4 = i9[0]) : (f2 = i9[0], m4 = t10[0]), t10[1] < i9[1] ? (a6 = t10[1], u3 = i9[1]) : (a6 = i9[1], u3 = t10[1]);
      let c2 = Math.floor(f2) - r13, h5 = Math.floor(m4) + r13, y2 = Math.floor(a6) - r13, x2 = Math.floor(u3) + r13;
      c2 < 0 && (c2 = 0), h5 > o3 && (h5 = o3), y2 < 0 && (y2 = 0), x2 > n8 && (x2 = n8);
      const M2 = i9[0] - t10[0], g2 = i9[1] - t10[1], p3 = M2 * M2 + g2 * g2;
      for (let r14 = c2; r14 < h5; r14++)
        for (let l5 = y2; l5 < x2; l5++) {
          let s8, f3, m5 = (r14 - t10[0]) * M2 + (l5 - t10[1]) * g2;
          m5 < 0 ? (s8 = t10[0], f3 = t10[1]) : m5 > p3 ? (s8 = i9[0], f3 = i9[1]) : (m5 /= p3, s8 = t10[0] + m5 * M2, f3 = t10[1] + m5 * g2);
          const a7 = (r14 - s8) * (r14 - s8) + (l5 - f3) * (l5 - f3), u4 = (n8 - l5 - 1) * o3 + r14;
          a7 < e9[u4] && (e9[u4] = a7);
        }
    }
  }
  for (let s7 = 0; s7 < l3; ++s7)
    e9[s7] = Math.sqrt(e9[s7]);
  return e9;
}
function c(t8, o3, n8, r13, l3) {
  for (const e9 of t8) {
    const t9 = e9.length;
    for (let i8 = 1; i8 < t9; ++i8) {
      const t10 = e9[i8 - 1], s7 = e9[i8];
      let f2, m4, a6, u3;
      t10[0] < s7[0] ? (f2 = t10[0], m4 = s7[0]) : (f2 = s7[0], m4 = t10[0]), t10[1] < s7[1] ? (a6 = t10[1], u3 = s7[1]) : (a6 = s7[1], u3 = t10[1]);
      let c2 = Math.floor(f2), h5 = Math.floor(m4) + 1, y2 = Math.floor(a6), x2 = Math.floor(u3) + 1;
      c2 < r13 && (c2 = r13), h5 > o3 - r13 && (h5 = o3 - r13), y2 < r13 && (y2 = r13), x2 > n8 - r13 && (x2 = n8 - r13);
      for (let e10 = y2; e10 < x2; ++e10) {
        if (t10[1] > e10 == s7[1] > e10)
          continue;
        const i9 = (n8 - e10 - 1) * o3;
        for (let o4 = c2; o4 < h5; ++o4)
          o4 < (s7[0] - t10[0]) * (e10 - t10[1]) / (s7[1] - t10[1]) + t10[0] && (l3[i9 + o4] = -l3[i9 + o4]);
        for (let t11 = r13; t11 < c2; ++t11)
          l3[i9 + t11] = -l3[i9 + t11];
      }
    }
  }
}
function h4(o3, n8) {
  const r13 = 2 * n8, l3 = o3.length, e9 = new Uint8Array(4 * l3);
  for (let i8 = 0; i8 < l3; ++i8) {
    const n9 = 0.5 - o3[i8] / r13;
    o$6(n9, e9, 4 * i8);
  }
  return e9;
}
const n$1 = 96 / 72;
class l2 {
  static executeEffects(t8, e9, l3, c2) {
    const f2 = n$1, m4 = se(t8);
    let p3 = new s$7(e9);
    for (const o3 of t8) {
      const t9 = A$1(o3);
      t9 && (p3 = t9.execute(p3, o3, f2, l3, c2, m4));
    }
    return p3;
  }
  static applyEffects(n8, l3, c2) {
    if (!n8)
      return l3;
    const f2 = se(n8);
    let m4, p3 = new s$7(a$6.fromJSONCIM(l3));
    for (const t8 of n8) {
      const e9 = A$1(t8);
      e9 && (p3 = e9.execute(p3, t8, 1, null, c2, f2));
    }
    const u3 = [];
    let i8 = null;
    for (; m4 = p3.next(); )
      u3.push(...t$9(m4)), i8 = m4.geometryType;
    return 0 === u3.length || null === i8 ? null : "esriGeometryPolygon" === i8 ? { rings: u3 } : { paths: u3 };
  }
}
function e8(e9, o3) {
  let r13;
  if ("string" == typeof e9)
    r13 = c$3(e9 + `-seed(${o3})`);
  else {
    let t8 = 12;
    r13 = e9 ^ o3;
    do {
      r13 = 107 * (r13 >> 8 ^ r13) + t8 | 0;
    } while (0 != --t8);
  }
  return (1 + r13 / (1 << 31)) / 2;
}
function o2(t8) {
  return Math.floor(e8(t8, r12) * n7);
}
const r12 = 53290320, n7 = 10;
const E = s$9.getLogger("esri.symbols.cim.cimAnalyzer");
function T2(e9) {
  switch (e9) {
    case "Butt":
      return e$h.BUTT;
    case "Square":
      return e$h.SQUARE;
    default:
      return e$h.ROUND;
  }
}
function $2(e9) {
  switch (e9) {
    case "Bevel":
      return n$l.BEVEL;
    case "Miter":
      return n$l.MITER;
    default:
      return n$l.ROUND;
  }
}
function G(e9) {
  const t8 = e9.markerPlacement;
  return t8 && t8.angleToLine ? i$d.MAP : i$d.SCREEN;
}
class j {
  constructor(e9, t8) {
    this._cimLayers = [], this._poMap = {}, this._primitiveOverrides = [], this._resourceManager = e9, this._info = t8;
  }
  async analyzeSymbolReference(e9, t8, i8) {
    if (this._cimLayers = i8 ?? [], !e9)
      return this._cimLayers;
    if (e9.primitiveOverrides) {
      this._primitiveOverrides = e9.primitiveOverrides, this._poMap = {};
      const t9 = [], i9 = this._info;
      for (const e10 of this._primitiveOverrides) {
        const r14 = e10.valueExpressionInfo;
        if (r14 && i9) {
          const o4 = r14.expression, n8 = n$k(o4, i9.spatialReference, i9.fields).then((t10) => {
            null != t10 && this._setPoMap(e10.primitiveName, e10.propertyName, t10);
          });
          t9.push(n8);
        } else
          null != e10.value && this._setPoMap(e10.primitiveName, e10.propertyName, e10.value);
        t9.length > 0 && await Promise.all(t9);
      }
    }
    const r13 = e9.symbol, o3 = [];
    return ne.fetchResources(r13, this._resourceManager, o3), o3.length > 0 && await Promise.all(o3), this._analyzeSymbol(r13, t8), this._cimLayers;
  }
  _analyzeSymbol(e9, t8) {
    switch (e9?.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
        this._analyzeMultiLayerSymbol(e9, t8, 1, 0, 0, 0);
    }
  }
  _analyzeMultiLayerSymbol(e9, t8, i8, r13, o3, n8) {
    const a6 = e9?.symbolLayers;
    if (!a6)
      return;
    const s7 = e9.effects;
    let l3 = i$d.SCREEN;
    const c2 = ne.getSize(e9) ?? 0;
    "CIMPointSymbol" === e9.type && "Map" === e9.angleAlignment && (l3 = i$d.MAP);
    const m4 = "CIMPolygonSymbol" === e9.type;
    let f2 = a6.length;
    for (; f2--; ) {
      const h5 = a6[f2];
      if (!h5 || false === h5.enable)
        continue;
      let u3;
      s7?.length && (u3 = [...s7]);
      const p3 = h5.effects;
      p3?.length && (s7 ? u3.push(...p3) : u3 = [...p3]);
      const d2 = [];
      let v2;
      le.findEffectOverrides(u3, this._primitiveOverrides, d2), v2 = d2.length > 0 ? this._createEffectsOverrideFunction(u3, d2) : u3;
      const _2 = [];
      switch (le.findApplicableOverrides(h5, this._primitiveOverrides, _2), h5.type) {
        case "CIMSolidFill":
          this._analyzeSolidFill(h5, v2);
          break;
        case "CIMPictureFill":
          this._analyzePictureFill(h5, v2);
          break;
        case "CIMHatchFill":
          this._analyzeHatchFill(h5, v2);
          break;
        case "CIMGradientFill":
          this._analyzeGradientFill(h5, v2);
          break;
        case "CIMSolidStroke":
          this._analyzeSolidStroke(h5, v2, m4, c2);
          break;
        case "CIMPictureStroke":
          this._analyzePictureStroke(h5, v2, m4, c2);
          break;
        case "CIMGradientStroke":
          this._analyzeGradientStroke(h5, v2, m4, c2);
          break;
        case "CIMCharacterMarker":
        case "CIMPictureMarker":
        case "CIMVectorMarker": {
          "CIMLineSymbol" === e9.type && (l3 = G(h5));
          const a7 = [], s8 = h5.primitiveName;
          s8 && a7.push(s8), this._analyzeMarker(h5, v2, null, a7, l3, c2, 1, t8, i8, r13, o3, n8);
          break;
        }
        default:
          E.error("Cannot analyze CIM layer", h5.type);
      }
    }
  }
  _analyzeSolidFill(e9, t8) {
    const i8 = e9.primitiveName, r13 = u$8(e9.color), [o3, n8] = this._analyzePrimitiveOverrides(i8, t8, null, null), s7 = c$3(JSON.stringify(e9) + n8).toString();
    this._cimLayers.push({ type: "fill", templateHash: s7, materialHash: o3 ? () => s7 : s7, cim: e9, materialOverrides: null, colorLocked: !!e9.colorLocked, color: this._createOverrideFunction(i8, "Color", r13, U), height: 0, angle: 0, offsetX: 0, offsetY: 0, scaleX: 1, effects: t8, applyRandomOffset: false, sampleAlphaOnly: true });
  }
  _analyzePictureFill(e9, t8) {
    const i8 = e9.primitiveName, r13 = p$2(e9), [o3, n8] = this._analyzePrimitiveOverrides(i8, t8, null, null), s7 = c$3(JSON.stringify(e9) + n8).toString(), l3 = c$3(`${e9.url}${JSON.stringify(e9.colorSubstitutions)}`).toString(), m4 = b$1(e9.height, V$1);
    let f2 = b$1(e9.scaleX, 1);
    if ("width" in e9 && "number" == typeof e9.width) {
      const t9 = e9.width;
      let i9 = 1;
      const r14 = this._resourceManager.getResource(e9.url);
      null != r14 && (i9 = r14.width / r14.height), f2 /= i9 * (m4 / t9);
    }
    this._cimLayers.push({ type: "fill", templateHash: s7, materialHash: o3 ? () => l3 : l3, cim: e9, materialOverrides: null, colorLocked: !!e9.colorLocked, effects: t8, color: this._createOverrideFunction(i8, "TintColor", r13, U), height: this._createOverrideFunction(i8, "Height", m4), scaleX: this._createOverrideFunction(i8, "ScaleX", f2), angle: this._createOverrideFunction(i8, "Rotation", b$1(e9.rotation)), offsetX: this._createOverrideFunction(i8, "OffsetX", b$1(e9.offsetX)), offsetY: this._createOverrideFunction(i8, "OffsetY", b$1(e9.offsetY)), url: e9.url, applyRandomOffset: false, sampleAlphaOnly: false });
  }
  _analyzeHatchFill(e9, t8) {
    const i8 = e9.primitiveName, r13 = this._analyzeMaterialOverrides(i8, ["Rotation", "OffsetX", "OffsetY"]);
    let [o3, n8] = this._analyzePrimitiveOverrides(i8, t8, null, null);
    const s7 = c$3(JSON.stringify(e9) + n8).toString(), l3 = c$3(`${e9.separation}${JSON.stringify(e9.lineSymbol)}`).toString();
    let c2 = { r: 255, g: 255, b: 255, a: 1 }, f2 = false;
    const h5 = e9.lineSymbol?.symbolLayers?.find((e10) => "CIMSolidStroke" === e10.type && null != this._poMap[e10.primitiveName]?.Color);
    if (h5) {
      c2 = u$8(h5.color), c2 = this._createOverrideFunction(h5.primitiveName, "Color", c2, U);
      const e10 = "function" == typeof c2;
      o3 = o3 || e10, f2 = null != h5.color || e10;
    }
    this._cimLayers.push({ type: "fill", templateHash: s7, materialHash: o3 && r13 ? this._createMaterialHashFunction(l3, r13) : l3, cim: e9, materialOverrides: r13, colorLocked: !!e9.colorLocked, effects: t8, color: c2, height: this._createOverrideFunction(i8, "Separation", b$1(e9.separation, Y)), scaleX: 1, angle: this._createOverrideFunction(i8, "Rotation", b$1(e9.rotation)), offsetX: this._createOverrideFunction(i8, "OffsetX", b$1(e9.offsetX)), offsetY: this._createOverrideFunction(i8, "OffsetY", b$1(e9.offsetY)), applyRandomOffset: false, sampleAlphaOnly: true, hasUnresolvedReplacementColor: !f2 });
  }
  _analyzeGradientFill(e9, t8) {
    const i8 = e9.primitiveName, [r13, o3] = this._analyzePrimitiveOverrides(i8, t8, null, null), n8 = c$3(JSON.stringify(e9) + o3).toString();
    this._cimLayers.push({ type: "fill", templateHash: n8, materialHash: r13 ? () => n8 : n8, cim: e9, materialOverrides: null, colorLocked: !!e9.colorLocked, effects: t8, color: { r: 128, g: 128, b: 128, a: 1 }, height: 0, angle: 0, offsetX: 0, offsetY: 0, scaleX: 1, applyRandomOffset: false, sampleAlphaOnly: false });
  }
  _analyzeSolidStroke(e9, t8, i8, r13) {
    const o3 = e9.primitiveName, n8 = u$8(e9.color), s7 = b$1(e9.width, O), l3 = T2(e9.capStyle), c2 = $2(e9.joinStyle), m4 = e9.miterLimit, [h5, u3] = this._analyzePrimitiveOverrides(o3, t8, null, null), p3 = c$3(JSON.stringify(e9) + u3).toString();
    let y2, d2;
    if (t8 && t8 instanceof Array && t8.length > 0) {
      const e10 = t8[t8.length - 1];
      if ("CIMGeometricEffectDashes" === e10.type && "NoConstraint" === e10.lineDashEnding && null === e10.offsetAlongLine) {
        const e11 = (t8 = [...t8]).pop();
        y2 = e11.dashTemplate, d2 = e11.scaleDash;
      }
    }
    this._cimLayers.push({ type: "line", templateHash: p3, materialHash: h5 ? () => p3 : p3, cim: e9, materialOverrides: null, isOutline: i8, colorLocked: !!e9.colorLocked, effects: t8, color: this._createOverrideFunction(o3, "Color", n8, U), width: this._createOverrideFunction(o3, "Width", s7), cap: this._createOverrideFunction(o3, "CapStyle", l3), join: this._createOverrideFunction(o3, "JoinStyle", c2), miterLimit: m4 && this._createOverrideFunction(o3, "MiterLimit", m4), referenceWidth: r13, zOrder: D(e9.name), dashTemplate: y2, scaleDash: d2, sampleAlphaOnly: true });
  }
  _analyzePictureStroke(e9, t8, i8, r13) {
    const o3 = c$3(`${e9.url}${JSON.stringify(e9.colorSubstitutions)}`).toString(), n8 = e9.primitiveName, s7 = p$2(e9), l3 = b$1(e9.width, O), c2 = T2(e9.capStyle), m4 = $2(e9.joinStyle), h5 = e9.miterLimit, [u3, p3] = this._analyzePrimitiveOverrides(n8, t8, null, null), y2 = c$3(JSON.stringify(e9) + p3).toString();
    this._cimLayers.push({ type: "line", templateHash: y2, materialHash: u3 ? () => o3 : o3, cim: e9, materialOverrides: null, isOutline: i8, colorLocked: !!e9.colorLocked, effects: t8, color: this._createOverrideFunction(n8, "TintColor", s7, U), width: this._createOverrideFunction(n8, "Width", l3), cap: this._createOverrideFunction(n8, "CapStyle", c2), join: this._createOverrideFunction(n8, "JoinStyle", m4), miterLimit: h5 && this._createOverrideFunction(n8, "MiterLimit", h5), referenceWidth: r13, zOrder: D(e9.name), dashTemplate: null, scaleDash: false, url: e9.url, sampleAlphaOnly: false });
  }
  _analyzeGradientStroke(e9, t8, i8, r13) {
    const o3 = e9.primitiveName, n8 = b$1(e9.width, O), s7 = T2(e9.capStyle), l3 = $2(e9.joinStyle), c2 = e9.miterLimit, [m4, h5] = this._analyzePrimitiveOverrides(o3, t8, null, null), u3 = c$3(JSON.stringify(e9) + h5).toString();
    this._cimLayers.push({ type: "line", templateHash: u3, materialHash: m4 ? () => u3 : u3, cim: e9, materialOverrides: null, isOutline: i8, colorLocked: !!e9.colorLocked, effects: t8, color: { r: 128, g: 128, b: 128, a: 1 }, width: this._createOverrideFunction(o3, "Width", n8), cap: this._createOverrideFunction(o3, "CapStyle", s7), join: this._createOverrideFunction(o3, "JoinStyle", l3), miterLimit: c2 && this._createOverrideFunction(o3, "MiterLimit", c2), referenceWidth: r13, zOrder: D(e9.name), dashTemplate: null, scaleDash: false, sampleAlphaOnly: false });
  }
  _analyzeMarker(e9, t8, i8, r13, o3, n8, a6, s7, l3, c2, m4, f2, u3 = false) {
    if (this._analyzeMarkerInsidePolygon(e9, t8))
      return;
    const p3 = b$1(e9.size, q$1), y2 = b$1(e9.rotation), d2 = b$1(e9.offsetX), v2 = b$1(e9.offsetY);
    let _2 = this._createOverrideFunction(e9.primitiveName, "Size", p3), O2 = this._createOverrideFunction(e9.primitiveName, "Rotation", y2), S2 = this._createOverrideFunction(e9.primitiveName, "OffsetX", d2), g2 = this._createOverrideFunction(e9.primitiveName, "OffsetY", v2);
    _2 = this._transformSize(_2, a6), O2 = this._transformRotation(O2, !!e9.rotateClockwise, c2);
    const M2 = this._transformOffsetX(S2, g2, c2, a6, m4), k2 = this._transformOffsetY(S2, g2, c2, a6, f2);
    switch (S2 = M2, g2 = k2, e9.type) {
      case "CIMPictureMarker":
        this._analyzePictureMarker(e9, t8, i8, r13, o3, n8, _2, O2, S2, g2, e9.colorLocked || u3);
        break;
      case "CIMVectorMarker":
        this._analyzeVectorMarker(e9, t8, i8, r13, o3, n8, a6, s7, _2, O2, S2, g2, e9.colorLocked || u3);
    }
  }
  _analyzeMarkerInsidePolygon(e9, t8) {
    const { markerPlacement: i8, type: r13 } = e9;
    if (!i8 || "CIMMarkerPlacementInsidePolygon" !== i8.type)
      return false;
    if ("CIMVectorMarker" === r13 || "CIMPictureMarker" === r13) {
      const o4 = e9.primitiveName;
      if (o4) {
        const [e10, i9] = this._analyzePrimitiveOverrides([o4], t8, null, null);
        if (e10)
          return false;
      }
      const n8 = i8.primitiveName;
      if (n8) {
        const [e10, i9] = this._analyzePrimitiveOverrides([n8], t8, null, null);
        if (e10)
          return false;
      }
      if ("CIMVectorMarker" === r13) {
        const { markerGraphics: t9 } = e9;
        if (t9)
          for (const e10 of t9) {
            const { symbol: t10 } = e10;
            if ("CIMPolygonSymbol" === t10?.type && t10.symbolLayers) {
              const { symbolLayers: e11 } = t10;
              for (const t11 of e11)
                if ("CIMSolidStroke" === t11.type)
                  return false;
            }
          }
      } else {
        const { animatedSymbolProperties: t9 } = e9;
        if (t9)
          return false;
      }
    }
    const o3 = i8, s7 = Math.abs(o3.stepX), l3 = Math.abs(o3.stepY);
    if (0 === s7 || 0 === l3)
      return true;
    const c2 = /* @__PURE__ */ new Set(["Rotation", "OffsetX", "OffsetY"]), m4 = this._primitiveOverrides.filter((t9) => t9.primitiveName !== e9.primitiveName || !c2.has(t9.propertyName)), f2 = "url" in e9 && "string" == typeof e9.url ? e9.url : void 0, h5 = c$3(JSON.stringify(e9)).toString();
    let u3, p3, y2 = null;
    if ("Random" === i8.gridType) {
      const e10 = e$d(se$1), t9 = Math.max(Math.floor(e10 / s7), 1), i9 = Math.max(Math.floor(e10 / l3), 1);
      u3 = l3 * i9, y2 = (e11) => e11 ? e11 * i9 : 0;
      p3 = t9 * s7 / u3;
    } else
      i8.shiftOddRows ? (u3 = 2 * l3, y2 = (e10) => e10 ? 2 * e10 : 0, p3 = s7 / l3 * 0.5) : (u3 = l3, y2 = null, p3 = s7 / l3);
    const d2 = p$2(e9);
    return this._cimLayers.push({ type: "fill", templateHash: h5, materialHash: h5, cim: e9, materialOverrides: m4, colorLocked: !!e9.colorLocked, effects: t8, color: d2, height: this._createOverrideFunction(o3.primitiveName, "StepY", u3, y2), scaleX: p3, angle: o3.gridAngle, offsetX: b$1(o3.offsetX), offsetY: b$1(o3.offsetY), url: f2, applyRandomOffset: "Random" === i8.gridType, sampleAlphaOnly: !f2, hasUnresolvedReplacementColor: true }), true;
  }
  _analyzePictureMarker(e9, t8, i8, r13, o$12, n8, s7, l3, c2, m4, f2) {
    let h5 = b$1(e9.scaleX, 1);
    const u3 = p$2(e9), p3 = c$3(`${e9.url}${JSON.stringify(e9.colorSubstitutions)}${JSON.stringify(e9.animatedSymbolProperties)}`).toString();
    i8 || (i8 = this._createMarkerPlacementOverrideFunction(e9.markerPlacement));
    const y2 = this._createAnimatedSymbolPropertiesOverrideFunction(e9.animatedSymbolProperties), [d2, v2] = this._analyzePrimitiveOverrides(r13, t8, i8, y2), _2 = c$3(JSON.stringify(e9) + v2).toString(), O2 = e9.anchorPoint ?? { x: 0, y: 0 };
    if ("width" in e9 && "number" == typeof e9.width) {
      const t9 = e9.width;
      let i9 = 1;
      const r14 = this._resourceManager.getResource(e9.url);
      null != r14 && (i9 = r14.width / r14.height);
      h5 /= i9 * (b$1(e9.size) / t9);
    }
    function S2(e10, t9) {
      return null != y2 ? t$f(y2, e10, t9) : null;
    }
    const g2 = e9.animatedSymbolProperties && true === e9.animatedSymbolProperties.randomizeStartTime ? (e10, t9, i9, r14) => {
      const o$13 = o2(r14 ?? 0), n9 = S2(e10, t9);
      return p3 + `-MATERIALGROUP(${o$13})-ASP(${JSON.stringify(n9)})`;
    } : d2 ? (e10, t9) => {
      const i9 = S2(e10, t9);
      return p3 + `-ASP(${JSON.stringify(i9)})`;
    } : p3;
    this._cimLayers.push({ type: "marker", templateHash: _2, materialHash: g2, cim: e9, materialOverrides: null, colorLocked: !!e9.colorLocked || !!f2, effects: t8, scaleSymbolsProportionally: false, alignment: o$12, size: s7, scaleX: this._createOverrideFunction(e9.primitiveName, "ScaleX", h5), rotation: l3, offsetX: c2, offsetY: m4, color: this._createOverrideFunction(e9.primitiveName, "TintColor", u3, U), anchorPoint: { x: O2.x, y: O2.y }, isAbsoluteAnchorPoint: "Relative" !== e9.anchorPointUnits, outlineColor: { r: 0, g: 0, b: 0, a: 0 }, outlineWidth: 0, frameHeight: 0, rotateClockwise: false, referenceSize: n8, sizeRatio: 1, markerPlacement: i8, url: e9.url, animatedSymbolProperties: y2 });
  }
  _analyzeVectorMarker(e9, t8, i8, r13, o3, n8, a6, s7, l3, c2, m4, f2, h5) {
    const u3 = e9.markerGraphics;
    if (!u3)
      return;
    const p3 = e9.frame;
    let y2 = 0, d2 = 1;
    e9.scaleSymbolsProportionally && p3 && (y2 = p3.ymax - p3.ymin, d2 = this._transformSize(l3, 1 / y2)), d2 = this._transformSize(d2, a6), i8 || (i8 = this._createMarkerPlacementOverrideFunction(e9.markerPlacement));
    for (const v2 of u3)
      if (v2) {
        const a7 = v2.symbol;
        if (!a7)
          continue;
        const u4 = v2.primitiveName;
        u4 && r13.push(u4);
        let _2 = m4, O2 = f2;
        if (("CIMPointSymbol" === a7.type || "CIMTextSymbol" === a7.type) && p3) {
          let t9 = 0, i9 = 0;
          const r14 = v2.geometry;
          "x" in r14 && "y" in r14 && (t9 += r14.x - 0.5 * (p3.xmin + p3.xmax), i9 += r14.y - 0.5 * (p3.ymin + p3.ymax));
          const o4 = e9.anchorPoint;
          o4 && ("Absolute" === e9.anchorPointUnits ? (t9 -= o4.x, i9 -= o4.y) : p3 && (t9 -= (p3.xmax - p3.xmin) * o4.x, i9 -= (p3.ymax - p3.ymin) * o4.y)), _2 = this._transformOffsetX(t9, i9, c2, d2, m4), O2 = this._transformOffsetY(t9, i9, c2, d2, f2);
        }
        switch (a7.type) {
          case "CIMPointSymbol":
          case "CIMLineSymbol":
          case "CIMPolygonSymbol":
            s7 || q(a7) ? this._analyzeMultiLayerGraphicNonSDF(e9, t8, i8, null, v2, r13, o3, n8, y2, !!h5 || !!e9.colorLocked) : this._analyzeMultiLayerGraphic(e9, t8, i8, null, v2, r13, o3, n8, y2, d2, l3, c2, _2, O2, !!h5 || !!e9.colorLocked);
            break;
          case "CIMTextSymbol":
            this._analyzeTextGraphic(e9, t8, i8, v2, r13, o3, n8, y2, d2, l3, c2, _2, O2, !!h5 || !!e9.colorLocked);
        }
        u4 && r13.pop();
      }
  }
  _analyzeMultiLayerGraphic(e9, t8, i8, r13, o3, n8, s7, l$12, c2, m$12, f$12, h5, u3, p3, y2) {
    const d2 = o3.symbol, v2 = d2.symbolLayers;
    if (!v2)
      return;
    let _2 = v2.length;
    if (B2(v2))
      return void this._analyzeCompositeMarkerGraphic(e9, t8, i8, r13, o3, v2, n8, s7, l$12, c2, f$12, h5, u3, p3, !!y2 || !!e9.colorLocked);
    const O2 = this._resourceManager.geometryEngine, k2 = l2.applyEffects(d2.effects, o3.geometry, O2);
    if (k2)
      for (; _2--; ) {
        const d3 = v2[_2];
        if (!d3 || false === d3.enable)
          continue;
        const b2 = d3.primitiveName;
        switch (b2 && n8.push(b2), d3.type) {
          case "CIMSolidFill":
          case "CIMSolidStroke": {
            const m$13 = l2.applyEffects(d3.effects, k2, O2), v3 = f(m$13);
            if (!v3)
              continue;
            const _3 = "Relative" !== e9.anchorPointUnits, [C2, F2, I2] = m3(v3, e9.frame, e9.size, e9.anchorPoint, _3), w2 = "CIMSolidFill" === d3.type, x2 = { type: "sdf", geom: m$13, asFill: w2 }, A2 = d3.path, R2 = w2 ? u$8(P$2(d3)) : null == A2 ? u$8(w$4(d3)) : { r: 0, g: 0, b: 0, a: 0 }, H = w2 ? { r: 0, g: 0, b: 0, a: 0 } : u$8(w$4(d3)), J2 = L$1(d3) ?? 0;
            if (!w2 && !J2)
              break;
            const Y2 = o3.primitiveName;
            let E2 = null;
            w2 && !d3.colorLocked && (E2 = this._createOverrideFunction(Y2, "FillColor", R2, U));
            let T3 = null;
            w2 || d3.colorLocked || (T3 = this._createOverrideFunction(Y2, "StrokeColor", H, U));
            const $3 = this._createOverrideFunction(Y2, "StrokeWidth", J2);
            let G2 = false, j2 = "";
            for (const e10 of this._primitiveOverrides)
              n8.includes(e10.primitiveName) && (null != e10.value ? j2 += `-${e10.primitiveName}-${e10.propertyName}-${JSON.stringify(e10.value)}` : e10.valueExpressionInfo && (G2 = true));
            (null != t8 && "function" == typeof t8 || null != i8 && "function" == typeof i8) && (G2 = true), (e$g(f$12) || e$g(h5) || e$g(u3) || e$g(p3)) && (G2 = true);
            const D2 = JSON.stringify({ ...e9, markerGraphics: null }), W2 = c$3(JSON.stringify(x2) + A2).toString(), V2 = c$3(JSON.stringify(o3) + JSON.stringify(d3) + D2 + j2).toString();
            this._cimLayers.push({ type: "marker", templateHash: V2, materialHash: G2 ? () => W2 : W2, cim: x2, materialOverrides: null, colorLocked: !!d3.colorLocked || !!y2, effects: t8, scaleSymbolsProportionally: !!e9.scaleSymbolsProportionally, alignment: s7, anchorPoint: { x: F2, y: I2 }, isAbsoluteAnchorPoint: _3, size: f$12, rotation: h5, offsetX: u3, offsetY: p3, scaleX: 1, frameHeight: c2, rotateClockwise: false, referenceSize: l$12, sizeRatio: C2, color: e$g(E2) ? E2 : this._createOverrideFunction(b2, "Color", R2, U), outlineColor: e$g(T3) ? T3 : this._createOverrideFunction(b2, "Color", H, U), outlineWidth: e$g($3) ? $3 : this._createOverrideFunction(b2, "Width", J2), markerPlacement: i8, animatedSymbolProperties: r13, path: A2 });
            break;
          }
          case "CIMVectorMarker":
            d3.markerPlacement ? this._analyzeMultiLayerGraphicNonSDF(e9, t8, i8, r13, o3, n8, s7, l$12, c2, !!y2 || !!d3.colorLocked) : this._analyzeMarker(d3, t8, i8, n8, s7, l$12, m$12, false, f$12, h5, u3, p3, !!y2 || !!e9.colorLocked);
            break;
          default:
            this._analyzeMultiLayerGraphicNonSDF(e9, t8, i8, r13, o3, n8, s7, l$12, c2, !!y2 || !!e9.colorLocked);
        }
        b2 && n8.pop();
      }
  }
  _analyzeTextGraphic(e9, i8, r13, o3, n8, s7, l3, c2, m4, h5, p3, d2, v2, _2) {
    const O$12 = [];
    le.findApplicableOverrides(o3, this._primitiveOverrides, O$12);
    const S2 = o3.geometry;
    if (!("x" in S2) || !("y" in S2))
      return;
    const g2 = o3.symbol, k2 = k$2(g2), X2 = S$1(g2.fontStyleName), H = u$9(g2.fontFamilyName);
    g2.font = { family: H, decoration: k2, ...X2 };
    let J2 = b$1(g2.height, W$2), Y2 = b$1(g2.angle), E2 = b$1(g2.offsetX), T3 = b$1(g2.offsetY);
    J2 = this._transformSize(J2, m4), Y2 = this._transformRotation(Y2, false, p3);
    const $3 = this._transformOffsetX(E2, T3, p3, m4, d2), G2 = this._transformOffsetY(E2, T3, p3, m4, v2);
    E2 = $3, T3 = G2;
    const j2 = u$8(P$2(g2));
    let D2 = u$8(w$4(g2)), W2 = L$1(g2) ?? 0;
    W2 || (D2 = u$8(P$2(g2.haloSymbol)), W2 = b$1(g2.haloSize)), W2 = this._transformSize(W2, m4);
    let V2 = false;
    if (g2.symbol?.symbolLayers)
      for (const t8 of g2.symbol.symbolLayers) {
        null != P$2(t8) && (V2 = !!t8.colorLocked);
      }
    const B3 = o3.primitiveName;
    let q2 = null;
    V2 || (q2 = this._createOverrideFunction(B3, "Color", j2, U));
    let K2 = null, Q3 = null, Z3 = 0;
    if (g2.callout && "CIMBackgroundCallout" === g2.callout.type) {
      const e10 = g2.callout;
      if (e10.backgroundSymbol) {
        const t8 = e10.backgroundSymbol.symbolLayers;
        if (t8)
          for (const e11 of t8)
            "CIMSolidFill" === e11.type ? K2 = u$8(e11.color) : "CIMSolidStroke" === e11.type && (Q3 = u$8(e11.color), Z3 = b$1(e11.width, O));
      }
    }
    const [ee2, te2] = this._analyzePrimitiveOverrides(n8, i8, r13, null), ie2 = JSON.stringify(e9.effects) + Number(e9.colorLocked || _2).toString() + JSON.stringify(e9.anchorPoint) + e9.anchorPointUnits + JSON.stringify(e9.markerPlacement) + e9.size.toString(), re2 = c$3(JSON.stringify(o3) + ie2 + te2).toString();
    let oe2 = this._createOverrideFunction(o3.primitiveName, "TextString", o3.textString ?? "", s$c, g2.textCase);
    if (null == oe2)
      return;
    const { fontStyleName: ne2 } = g2, ae2 = H + (ne2 ? "-" + ne2.toLowerCase() : "-regular"), se2 = ae2;
    "string" == typeof oe2 && oe2.includes("[") && g2.fieldMap && (oe2 = c$4(g2.fieldMap, oe2, g2.textCase)), this._cimLayers.push({ type: "text", templateHash: re2, materialHash: ee2 || "function" == typeof oe2 || /\[(.*?)\]/.test(oe2) ? (e10, t8, i9) => se2 + "-" + t$f(oe2, e10, t8, i9) : se2 + "-" + c$3(oe2), cim: g2, materialOverrides: null, colorLocked: !!_2 || !!V2, effects: i8, alignment: s7, anchorPoint: { x: 0, y: 0 }, isAbsoluteAnchorPoint: "Relative" !== e9.anchorPointUnits, fontName: ae2, decoration: k2, weight: X2.weight, style: X2.style, size: J2, angle: Y2, offsetX: E2, offsetY: T3, horizontalAlignment: x$1(g2.horizontalAlignment), verticalAlignment: G$1(g2.verticalAlignment), text: oe2, color: e$g(q2) ? q2 : j2, outlineColor: D2, outlineSize: W2, backgroundColor: K2, borderLineColor: Q3, borderLineWidth: Z3, lineWidth: null, referenceSize: l3, sizeRatio: 1, markerPlacement: r13 });
  }
  _analyzeMultiLayerGraphicNonSDF(e9, t8, i8, r13, n8, s7, l3, c2, m4, f2) {
    const u3 = this._buildSimpleMarker(e9, n8), y2 = e9.primitiveName, d2 = this._analyzeMaterialOverrides(y2, ["Rotation", "OffsetX", "OffsetY"]), [v2, _2] = this._analyzePrimitiveOverrides(s7, null, null, null), [O2, S2, g2] = ne.getTextureAnchor(u3, this._resourceManager), M2 = b$1(e9.rotation), k2 = b$1(e9.offsetX), N2 = b$1(e9.offsetY), P2 = c$3(JSON.stringify(u3) + _2).toString(), z2 = d2 && d2.length > 0 || null != t8 && "function" == typeof t8;
    this._cimLayers.push({ type: "marker", templateHash: P2, materialHash: z2 && d2 ? this._createMaterialHashFunction(P2, d2) : P2, cim: u3, materialOverrides: d2, colorLocked: !!e9.colorLocked || !!f2, effects: t8, scaleSymbolsProportionally: !!e9.scaleSymbolsProportionally, alignment: l3, anchorPoint: { x: O2, y: S2 }, isAbsoluteAnchorPoint: false, size: b$1(e9.size, q$1), rotation: this._createOverrideFunction(y2, "Rotation", M2), offsetX: this._createOverrideFunction(y2, "OffsetX", k2), offsetY: this._createOverrideFunction(y2, "OffsetY", N2), color: { r: 255, g: 255, b: 255, a: 1 }, outlineColor: { r: 0, g: 0, b: 0, a: 0 }, outlineWidth: 0, scaleX: 1, frameHeight: m4, rotateClockwise: !!e9.rotateClockwise, referenceSize: c2, sizeRatio: g2 / u$3(e9.size), markerPlacement: i8, animatedSymbolProperties: r13, avoidSDFRasterization: true });
  }
  _buildSimpleMarker(e9, t8) {
    return { type: e9.type, enable: true, name: e9.name, colorLocked: e9.colorLocked, primitiveName: e9.primitiveName, anchorPoint: e9.anchorPoint, anchorPointUnits: e9.anchorPointUnits, offsetX: 0, offsetY: 0, rotateClockwise: e9.rotateClockwise, rotation: 0, size: e9.size, billboardMode3D: e9.billboardMode3D, depth3D: e9.depth3D, frame: e9.frame, markerGraphics: [t8], scaleSymbolsProportionally: e9.scaleSymbolsProportionally, respectFrame: e9.respectFrame, clippingPath: e9.clippingPath };
  }
  _analyzeCompositeMarkerGraphic(e9, t8, i8, r13, o3, n8, s7, l3, c2, m$12, h5, u3, p3, y2, d2) {
    const v2 = o3.geometry, _2 = n8[0], O$12 = n8[1], k2 = f(v2);
    if (!k2)
      return;
    const N2 = "Relative" !== e9.anchorPointUnits, [P2, z2, C2] = m3(k2, e9.frame, e9.size, e9.anchorPoint, N2), F2 = { type: "sdf", geom: v2, asFill: true }, I2 = O$12.path, w2 = O$12.primitiveName, x2 = _2.primitiveName, A2 = u$8(O$12.color), R2 = u$8(_2.color), X2 = b$1(_2.width, O), H = o3.primitiveName;
    let J2 = null;
    O$12.colorLocked || d2 || (J2 = this._createOverrideFunction(H, "FillColor", A2, U));
    let Y2 = null;
    _2.colorLocked || d2 || (Y2 = this._createOverrideFunction(H, "StrokeColor", R2, U));
    const E2 = this._createOverrideFunction(H, "StrokeWidth", X2);
    let T3 = false, $3 = "";
    for (const a6 of this._primitiveOverrides)
      (a6.primitiveName === w2 || a6.primitiveName === x2 || s7.includes(a6.primitiveName)) && (null != a6.value ? $3 += `-${a6.primitiveName}-${a6.propertyName}-${JSON.stringify(a6.value)}` : a6.valueExpressionInfo && (T3 = true));
    null != i8 && "function" == typeof i8 && (T3 = true), (e$g(h5) || e$g(u3) || e$g(p3) || e$g(y2)) && (T3 = true);
    const G2 = JSON.stringify({ ...e9, markerGraphics: null }), j2 = c$3(JSON.stringify(F2) + I2).toString(), D2 = c$3(JSON.stringify(o3) + JSON.stringify(O$12) + JSON.stringify(_2) + G2 + $3).toString();
    this._cimLayers.push({ type: "marker", templateHash: D2, materialHash: T3 ? () => j2 : j2, cim: F2, materialOverrides: null, colorLocked: !!d2, effects: t8, scaleSymbolsProportionally: !!e9.scaleSymbolsProportionally, alignment: l3, anchorPoint: { x: z2, y: C2 }, isAbsoluteAnchorPoint: N2, size: h5, rotation: u3, offsetX: p3, offsetY: y2, scaleX: 1, frameHeight: m$12, rotateClockwise: false, referenceSize: c2, sizeRatio: P2, color: e$g(J2) ? J2 : this._createOverrideFunction(w2, "Color", A2, U), outlineColor: e$g(Y2) ? Y2 : this._createOverrideFunction(x2, "Color", R2, U), outlineWidth: e$g(E2) ? E2 : this._createOverrideFunction(x2, "Width", X2), markerPlacement: i8, path: I2, animatedSymbolProperties: r13 });
  }
  _createMaterialHashFunction(e9, t8) {
    const i8 = this._info?.geometryType;
    if (i8) {
      const e10 = this._poMap;
      for (const r13 of t8) {
        if (r13.valueExpressionInfo) {
          const t9 = e10[r13.primitiveName] && e10[r13.primitiveName][r13.propertyName];
          t9 instanceof u$a && (r13.fn = (e11, r14, o3) => s$b(t9, e11, { $view: o3 }, i8, r14));
        }
      }
    }
    return (i9, r13, o3) => {
      for (const e10 of t8)
        e10.fn && (e10.value = e10.fn(i9, r13, o3));
      return c$3(e9 + le.buildOverrideKey(t8)).toString();
    };
  }
  _setPoMap(e9, t8, i8) {
    let r13;
    this._poMap[e9] ? r13 = this._poMap[e9] : (r13 = {}, this._poMap[e9] = r13), r13[t8] = i8;
  }
  _createOverrideFunction(e9, t8, i8, r13, o3) {
    if (null == e9)
      return i8;
    const n8 = this._poMap[e9];
    if (null == n8)
      return i8;
    const a6 = n8[t8];
    if ("string" == typeof a6 || "number" == typeof a6 || a6 instanceof Array)
      return r13 ? r13.call(null, a6, o3) : a6;
    const s7 = this._info?.geometryType;
    return null != a6 && a6 instanceof u$a && null != s7 ? (e10, t9, n9) => {
      let l3 = s$b(a6, e10, { $view: n9 }, s7, t9);
      return null !== l3 && r13 && (l3 = r13.call(null, l3, o3)), null !== l3 ? l3 : i8;
    } : i8;
  }
  _createEffectsOverrideFunction(e9, t8) {
    const r13 = this._poMap, o3 = this._info?.geometryType;
    for (const i8 of t8) {
      if (i8.valueExpressionInfo && o3) {
        const e10 = r13[i8.primitiveName] && r13[i8.primitiveName][i8.propertyName];
        e10 instanceof u$a && (i8.fn = (t9, i9, r14) => s$b(e10, t9, { $view: r14 }, o3, i9));
      }
    }
    return (r14, o4, n8) => {
      for (const e10 of t8)
        e10.fn && (e10.value = e10.fn(r14, o4, n8));
      const a6 = [];
      for (let s7 of e9) {
        const e10 = s7?.primitiveName;
        if (e10) {
          let r15 = false;
          for (const o5 of t8)
            if (o5.primitiveName === e10) {
              const e11 = W(o5.propertyName);
              null != o5.value && o5.value !== s7[e11] && (r15 || (s7 = a$9(s7), r15 = true), s7[e11] = o5.value);
            }
        }
        a6.push(s7);
      }
      return a6;
    };
  }
  _createMarkerPlacementOverrideFunction(e9) {
    const t8 = [];
    if (le.findApplicableOverrides(e9, this._primitiveOverrides, t8), null == e9 || 0 === t8.length)
      return e9;
    const r13 = this._poMap, o3 = this._info?.geometryType;
    for (const i8 of t8) {
      if (i8.valueExpressionInfo && o3) {
        const e10 = r13[i8.primitiveName] && r13[i8.primitiveName][i8.propertyName];
        e10 instanceof u$a && (i8.fn = (t9, i9, r14) => s$b(e10, t9, { $view: r14 }, o3, i9));
      }
    }
    return (r14, o4, n8) => {
      for (const e10 of t8)
        e10.fn && (e10.value = e10.fn(r14, o4, n8));
      const a6 = a$9(e9), s7 = e9.primitiveName;
      for (const e10 of t8)
        if (e10.primitiveName === s7) {
          const t9 = W(e10.propertyName);
          null != e10.value && e10.value !== a6[t9] && (a6[t9] = e10.value);
        }
      return a6;
    };
  }
  _createAnimatedSymbolPropertiesOverrideFunction(e9) {
    const t8 = [];
    if (le.findApplicableOverrides(e9, this._primitiveOverrides, t8), null == e9 || 0 === t8.length)
      return e9;
    const r13 = this._info?.geometryType;
    if (r13) {
      const e10 = this._poMap;
      for (const i8 of t8) {
        if (i8.valueExpressionInfo) {
          const t9 = e10[i8.primitiveName] && e10[i8.primitiveName][i8.propertyName];
          t9 instanceof u$a && (i8.fn = (e11, i9, o3) => s$b(t9, e11, { $view: o3 }, r13, i9));
        }
      }
    }
    return (r14, o3, n8) => {
      for (const e10 of t8)
        e10.fn && (e10.value = e10.fn(r14, o3, n8));
      const a6 = a$9(e9), s7 = e9.primitiveName;
      for (const e10 of t8)
        if (e10.primitiveName === s7) {
          const t9 = W(e10.propertyName);
          if (null != e10.value) {
            const i8 = a$1(e10.value, e10.propertyName);
            i8 !== a6[t9] && (a6[t9] = i8);
          }
        }
      return a6;
    };
  }
  _analyzePrimitiveOverrides(e9, t8, i8, r13) {
    let o3 = false, n8 = "";
    "string" == typeof e9 && (e9 = [e9]);
    for (const a6 of this._primitiveOverrides)
      e9?.includes(a6.primitiveName) && (null != a6.value ? n8 += `-${a6.primitiveName}-${a6.propertyName}-${JSON.stringify(a6.value)}` : a6.valueExpressionInfo && (o3 = true));
    return null != t8 && "function" == typeof t8 && (o3 = true), null != i8 && "function" == typeof i8 && (o3 = true), null != r13 && "function" == typeof r13 && (o3 = true), [o3, n8];
  }
  _analyzeMaterialOverrides(e9, t8) {
    return this._primitiveOverrides.filter((i8) => i8.primitiveName !== e9 || !t8.includes(i8.propertyName));
  }
  _transformSize(e9, t8) {
    return e$g(e9) || e$g(t8) ? (i8, r13, o3) => (e$g(e9) ? e9(i8, r13, o3) : e9) * (e$g(t8) ? t8(i8, r13, o3) : t8) : e9 * t8;
  }
  _transformRotation(e9, t8, i8) {
    return e$g(e9) || e$g(i8) ? (r13, o3, n8) => {
      const a6 = e$g(e9) ? e9(r13, o3, n8) : e9, s7 = e$g(i8) ? i8(r13, o3, n8) : i8;
      return t8 ? s7 - a6 : s7 + a6;
    } : t8 ? i8 - e9 : i8 + e9;
  }
  _transformOffsetX(e9, t8, i8, r13, o3) {
    if (!(e$g(e9) || e$g(t8) || e$g(i8) || e$g(r13) || e$g(o3))) {
      const n8 = i8 * Math.PI / 180;
      if (n8) {
        const i9 = Math.cos(n8), a6 = Math.sin(n8);
        return (i9 * e9 - a6 * t8) * r13 + o3;
      }
      return e9 * r13 + o3;
    }
    return (n8, a6, s7) => {
      let l3 = e$g(i8) ? i8(n8, a6, s7) : i8;
      const c2 = e$g(r13) ? r13(n8, a6, s7) : r13, m4 = e$g(e9) ? e9(n8, a6, s7) : e9, f2 = e$g(o3) ? o3(n8, a6, s7) : o3;
      if (l3) {
        l3 *= Math.PI / 180;
        return (Math.cos(l3) * m4 - Math.sin(l3) * (e$g(t8) ? t8(n8, a6, s7) : t8)) * c2 + f2;
      }
      return m4 * c2 + f2;
    };
  }
  _transformOffsetY(e9, t8, i8, r13, o3) {
    if (!(e$g(e9) || e$g(t8) || e$g(i8) || e$g(r13) || e$g(o3))) {
      const n8 = i8 * Math.PI / 180;
      if (n8) {
        const i9 = Math.cos(n8);
        return (Math.sin(n8) * e9 + i9 * t8) * r13 + o3;
      }
      return t8 * r13 + o3;
    }
    return (n8, a6, s7) => {
      let l3 = e$g(i8) ? i8(n8, a6, s7) : i8;
      const c2 = e$g(r13) ? r13(n8, a6, s7) : r13, m4 = e$g(t8) ? t8(n8, a6, s7) : t8, f2 = e$g(o3) ? o3(n8, a6, s7) : o3;
      if (l3) {
        l3 *= Math.PI / 180;
        const t9 = Math.cos(l3);
        return (Math.sin(l3) * (e$g(e9) ? e9(n8, a6, s7) : e9) + t9 * m4) * c2 + f2;
      }
      return m4 * c2 + f2;
    };
  }
}
function D(e9) {
  if (e9 && 0 === e9.indexOf("Level_")) {
    const t8 = parseInt(e9.substr(6), 10);
    if (!isNaN(t8))
      return t8;
  }
  return 0;
}
function U(t8) {
  if (!t8 || 0 === t8.length)
    return null;
  const i8 = new u$7(t8).toRgba();
  return { r: i8[0], g: i8[1], b: i8[2], a: i8[3] };
}
function W(e9) {
  return e9 ? e9.charAt(0).toLowerCase() + e9.substr(1) : e9;
}
function V(e9, t8) {
  if (!t8 || 0 === t8.length)
    return e9;
  const r13 = a$9(e9);
  return le.applyOverrides(r13, t8), r13;
}
const B2 = (e9) => e9 && 2 === e9.length && e9[0].enable && e9[1].enable && "CIMSolidStroke" === e9[0].type && "CIMSolidFill" === e9[1].type && null == e9[0].path && null == e9[1].path && !e9[0].effects && !e9[1].effects;
function q(e9) {
  const t8 = e9.symbolLayers;
  if (!t8 || 2 !== t8.length)
    return false;
  const i8 = t8.find((e10) => e10.effects?.find((e11) => "CIMGeometricEffectDashes" === e11.type)), r13 = t8.find((e10) => e10.effects?.find((e11) => "CIMGeometricEffectAddControlPoints" === e11.type));
  return !!i8 && !!r13;
}
export {
  Q$1 as Q,
  S,
  V,
  a5 as a,
  le as b,
  ie as c,
  de as d,
  et as e,
  tt as f,
  te as g,
  e8 as h,
  i$a as i,
  j,
  g$1 as k,
  l$1 as l,
  l2 as m,
  ne as n,
  o2 as o,
  r$1 as r,
  t$1 as t
};
