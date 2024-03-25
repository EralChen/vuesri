import { b0 as has, hG as n$2, iZ as S, i_ as e$1, i$ as n$3 } from "./chunk-ejFG4zJ0.js";
const s$1 = 128e3;
let n$1 = null, e = null;
async function i() {
  return n$1 || (n$1 = r$1()), n$1;
}
async function r$1() {
  const s2 = has("esri-csp-restrictions") ? await import("./chunk-887H7LMn.js").then((t) => t.l) : await import("./chunk-51Ak7dFC.js").then((t) => t.l);
  e = await s2.default({ locateFile: (s3) => n$2(`esri/core/libs/libtess/${s3}`) });
}
function a$1(t, n2) {
  const i2 = Math.max(t.length, s$1);
  return e.triangulate(t, n2, i2);
}
function x(t, e2) {
  return t.x === e2.x && t.y === e2.y;
}
function r(t) {
  if (!t)
    return;
  const e2 = t.length;
  if (e2 <= 1)
    return;
  let i2 = 0;
  for (let r2 = 1; r2 < e2; r2++)
    x(t[r2], t[i2]) || ++i2 === r2 || (t[i2] = t[r2]);
  t.length = i2 + 1;
}
function n(t, e2) {
  return t.x = e2.y, t.y = -e2.x, t;
}
function s(t, e2) {
  return t.x = -e2.y, t.y = e2.x, t;
}
function y(t, e2) {
  return t.x = e2.x, t.y = e2.y, t;
}
function o(t, e2) {
  return t.x = -e2.x, t.y = -e2.y, t;
}
function h(t) {
  return Math.sqrt(t.x * t.x + t.y * t.y);
}
function l(t, e2) {
  return t.x * e2.y - t.y * e2.x;
}
function _(t, e2) {
  return t.x * e2.x + t.y * e2.y;
}
function a(t, e2, i2, x2) {
  return t.x = e2.x * i2 + e2.y * x2, t.y = e2.x * x2 - e2.y * i2, t;
}
class c {
  constructor(t, e2, i2) {
    this._writeVertex = t, this._writeTriangle = e2, this._canUseThinTessellation = i2, this._prevNormal = { x: void 0, y: void 0 }, this._nextNormal = { x: void 0, y: void 0 }, this._textureNormalLeft = { x: 0, y: 1 }, this._textureNormalRight = { x: 0, y: -1 }, this._textureNormal = { x: void 0, y: void 0 }, this._joinNormal = { x: void 0, y: void 0 }, this._inner = { x: void 0, y: void 0 }, this._outer = { x: void 0, y: void 0 }, this._roundStart = { x: void 0, y: void 0 }, this._roundEnd = { x: void 0, y: void 0 }, this._startBreak = { x: void 0, y: void 0 }, this._endBreak = { x: void 0, y: void 0 }, this._innerPrev = { x: void 0, y: void 0 }, this._innerNext = { x: void 0, y: void 0 }, this._bevelStart = { x: void 0, y: void 0 }, this._bevelEnd = { x: void 0, y: void 0 }, this._bevelMiddle = { x: void 0, y: void 0 };
  }
  tessellate(t, e2, x2 = this._canUseThinTessellation) {
    r(t), x2 && e2.halfWidth < S && !e2.offset ? this._tessellateThin(t, e2) : this._tessellate(t, e2);
  }
  _tessellateThin(t, e2) {
    if (t.length < 2)
      return;
    const i2 = e2.wrapDistance || 65535;
    let x2 = e2.initialDistance || 0, r2 = false, n2 = t[0].x, s2 = t[0].y;
    const y2 = t.length;
    for (let o2 = 1; o2 < y2; ++o2) {
      r2 && (r2 = false, x2 = 0);
      let e3 = t[o2].x, y3 = t[o2].y, h2 = e3 - n2, l2 = y3 - s2, _2 = Math.sqrt(h2 * h2 + l2 * l2);
      if (h2 /= _2, l2 /= _2, x2 + _2 > i2) {
        r2 = true;
        const t2 = (i2 - x2) / _2;
        _2 = i2 - x2, e3 = (1 - t2) * n2 + t2 * e3, y3 = (1 - t2) * s2 + t2 * y3, --o2;
      }
      const a2 = this._writeVertex(n2, s2, 0, 0, h2, l2, l2, -h2, 0, -1, x2), c2 = this._writeVertex(n2, s2, 0, 0, h2, l2, -l2, h2, 0, 1, x2);
      x2 += _2;
      const d = this._writeVertex(e3, y3, 0, 0, h2, l2, l2, -h2, 0, -1, x2), u = this._writeVertex(e3, y3, 0, 0, h2, l2, -l2, h2, 0, 1, x2);
      this._writeTriangle(a2, c2, d), this._writeTriangle(c2, d, u), n2 = e3, s2 = y3;
    }
  }
  _tessellate(i2, r2) {
    const c2 = i2[0], d = i2[i2.length - 1], u = x(c2, d), v = u ? 3 : 2;
    if (i2.length < v)
      return;
    const f = r2.pixelCoordRatio, w = null != r2.capType ? r2.capType : e$1.BUTT, T = null != r2.joinType ? r2.joinType : n$3.MITER, g = null != r2.miterLimit ? Math.min(r2.miterLimit, 4) : 2, m = null != r2.roundLimit ? Math.min(r2.roundLimit, 1.05) : 1.05, V = null != r2.halfWidth ? r2.halfWidth : 2, N = !!r2.textured;
    let E, b, R, U = null;
    const k = this._prevNormal, p = this._nextNormal;
    let M = -1, B = -1;
    const L = this._joinNormal;
    let D, S2;
    const j = this._textureNormalLeft, A = this._textureNormalRight, O = this._textureNormal;
    let I = -1, P = -1;
    const W = r2.wrapDistance || 65535;
    let q = r2.initialDistance || 0;
    const Q = this._writeVertex, X = this._writeTriangle, C = (t, e2, i3, x2, r3, n2) => {
      const s2 = Q(b, R, D, S2, i3, x2, t, e2, r3, n2, q);
      return I >= 0 && P >= 0 && s2 >= 0 && X(I, P, s2), I = P, P = s2, s2;
    };
    u && (E = i2[i2.length - 2], p.x = d.x - E.x, p.y = d.y - E.y, B = h(p), p.x /= B, p.y /= B);
    let z = false;
    for (let x2 = 0; x2 < i2.length; ++x2) {
      if (z && (z = false, q = 0), E && (k.x = -p.x, k.y = -p.y, M = B, q + M > W && (z = true)), z) {
        const t = (W - q) / M;
        M = W - q, E = { x: (1 - t) * E.x + t * i2[x2].x, y: (1 - t) * E.y + t * i2[x2].y }, --x2;
      } else
        E = i2[x2];
      b = E.x, R = E.y;
      const r3 = x2 <= 0 && !z, c3 = x2 === i2.length - 1;
      if (r3 || (q += M), U = c3 ? u ? i2[1] : null : i2[x2 + 1], U ? (p.x = U.x - b, p.y = U.y - R, B = h(p), p.x /= B, p.y /= B) : (p.x = void 0, p.y = void 0), !u) {
        if (r3) {
          s(L, p), D = L.x, S2 = L.y, w === e$1.SQUARE && (C(-p.y - p.x, p.x - p.y, p.x, p.y, 0, -1), C(p.y - p.x, -p.x - p.y, p.x, p.y, 0, 1)), w === e$1.ROUND && (C(-p.y - p.x, p.x - p.y, p.x, p.y, -1, -1), C(p.y - p.x, -p.x - p.y, p.x, p.y, -1, 1)), w !== e$1.ROUND && w !== e$1.BUTT || (C(-p.y, p.x, p.x, p.y, 0, -1), C(p.y, -p.x, p.x, p.y, 0, 1));
          continue;
        }
        if (c3) {
          n(L, k), D = L.x, S2 = L.y, w !== e$1.ROUND && w !== e$1.BUTT || (C(k.y, -k.x, -k.x, -k.y, 0, -1), C(-k.y, k.x, -k.x, -k.y, 0, 1)), w === e$1.SQUARE && (C(k.y - k.x, -k.x - k.y, -k.x, -k.y, 0, -1), C(-k.y - k.x, k.x - k.y, -k.x, -k.y, 0, 1)), w === e$1.ROUND && (C(k.y - k.x, -k.x - k.y, -k.x, -k.y, 1, -1), C(-k.y - k.x, k.x - k.y, -k.x, -k.y, 1, 1));
          continue;
        }
      }
      let d2, v2, Q2 = -l(k, p);
      if (Math.abs(Q2) < 0.01)
        _(k, p) > 0 ? (L.x = k.x, L.y = k.y, Q2 = 1, d2 = Number.MAX_VALUE, v2 = true) : (s(L, p), Q2 = 1, d2 = 1, v2 = false);
      else {
        L.x = (k.x + p.x) / Q2, L.y = (k.y + p.y) / Q2, d2 = h(L);
        const t = (d2 - 1) * V * f;
        v2 = d2 > 4 || t > M && t > B;
      }
      D = L.x, S2 = L.y;
      let X2 = T;
      switch (T) {
        case n$3.BEVEL:
          d2 < 1.05 && (X2 = n$3.MITER);
          break;
        case n$3.ROUND:
          d2 < m && (X2 = n$3.MITER);
          break;
        case n$3.MITER:
          d2 > g && (X2 = n$3.BEVEL);
      }
      switch (X2) {
        case n$3.MITER:
          if (C(L.x, L.y, -k.x, -k.y, 0, -1), C(-L.x, -L.y, -k.x, -k.y, 0, 1), c3)
            break;
          if (N) {
            const t = z ? 0 : q;
            I = this._writeVertex(b, R, D, S2, p.x, p.y, L.x, L.y, 0, -1, t), P = this._writeVertex(b, R, D, S2, p.x, p.y, -L.x, -L.y, 0, 1, t);
          }
          break;
        case n$3.BEVEL: {
          const t = Q2 < 0;
          let e2, i3, x3, r4;
          if (t) {
            const t2 = I;
            I = P, P = t2, e2 = j, i3 = A;
          } else
            e2 = A, i3 = j;
          if (v2)
            x3 = t ? s(this._innerPrev, k) : n(this._innerPrev, k), r4 = t ? n(this._innerNext, p) : s(this._innerNext, p);
          else {
            const e3 = t ? o(this._inner, L) : y(this._inner, L);
            x3 = e3, r4 = e3;
          }
          const h2 = t ? n(this._bevelStart, k) : s(this._bevelStart, k);
          C(x3.x, x3.y, -k.x, -k.y, e2.x, e2.y);
          const l2 = C(h2.x, h2.y, -k.x, -k.y, i3.x, i3.y);
          if (c3)
            break;
          const _2 = t ? s(this._bevelEnd, p) : n(this._bevelEnd, p);
          if (v2) {
            const t2 = this._writeVertex(b, R, D, S2, -k.x, -k.y, 0, 0, 0, 0, q);
            I = this._writeVertex(b, R, D, S2, p.x, p.y, r4.x, r4.y, e2.x, e2.y, q), P = this._writeVertex(b, R, D, S2, p.x, p.y, _2.x, _2.y, i3.x, i3.y, q), this._writeTriangle(l2, t2, P);
          } else {
            if (N) {
              const t2 = this._bevelMiddle;
              t2.x = (h2.x + _2.x) / 2, t2.y = (h2.y + _2.y) / 2, a(O, t2, -k.x, -k.y), C(t2.x, t2.y, -k.x, -k.y, O.x, O.y), a(O, t2, p.x, p.y), I = this._writeVertex(b, R, D, S2, p.x, p.y, t2.x, t2.y, O.x, O.y, q), P = this._writeVertex(b, R, D, S2, p.x, p.y, r4.x, r4.y, e2.x, e2.y, q);
            } else {
              const t2 = I;
              I = P, P = t2;
            }
            C(_2.x, _2.y, p.x, p.y, i3.x, i3.y);
          }
          if (t) {
            const t2 = I;
            I = P, P = t2;
          }
          break;
        }
        case n$3.ROUND: {
          const t = Q2 < 0;
          let e2, i3;
          if (t) {
            const t2 = I;
            I = P, P = t2, e2 = j, i3 = A;
          } else
            e2 = A, i3 = j;
          const x3 = t ? o(this._inner, L) : y(this._inner, L);
          let r4, h2;
          v2 ? (r4 = t ? s(this._innerPrev, k) : n(this._innerPrev, k), h2 = t ? n(this._innerNext, p) : s(this._innerNext, p)) : (r4 = x3, h2 = x3);
          const l2 = t ? n(this._roundStart, k) : s(this._roundStart, k), u2 = t ? s(this._roundEnd, p) : n(this._roundEnd, p), f2 = C(r4.x, r4.y, -k.x, -k.y, e2.x, e2.y), w2 = C(l2.x, l2.y, -k.x, -k.y, i3.x, i3.y);
          if (c3)
            break;
          const T2 = this._writeVertex(b, R, D, S2, -k.x, -k.y, 0, 0, 0, 0, q);
          v2 || this._writeTriangle(I, P, T2);
          const g2 = o(this._outer, x3), m2 = this._writeVertex(b, R, D, S2, p.x, p.y, u2.x, u2.y, i3.x, i3.y, q);
          let V2, E2;
          const U2 = d2 > 2;
          if (U2) {
            let e3;
            d2 !== Number.MAX_VALUE ? (g2.x /= d2, g2.y /= d2, e3 = _(k, g2), e3 = (d2 * (e3 * e3 - 1) + 1) / e3) : e3 = -1, V2 = t ? n(this._startBreak, k) : s(this._startBreak, k), V2.x += k.x * e3, V2.y += k.y * e3, E2 = t ? s(this._endBreak, p) : n(this._endBreak, p), E2.x += p.x * e3, E2.y += p.y * e3;
          }
          a(O, g2, -k.x, -k.y);
          const M2 = this._writeVertex(b, R, D, S2, -k.x, -k.y, g2.x, g2.y, O.x, O.y, q);
          a(O, g2, p.x, p.y);
          const B2 = N ? this._writeVertex(b, R, D, S2, p.x, p.y, g2.x, g2.y, O.x, O.y, q) : M2, W2 = T2, X3 = N ? this._writeVertex(b, R, D, S2, p.x, p.y, 0, 0, 0, 0, q) : T2;
          let z2 = -1, F = -1;
          if (U2 && (a(O, V2, -k.x, -k.y), z2 = this._writeVertex(b, R, D, S2, -k.x, -k.y, V2.x, V2.y, O.x, O.y, q), a(O, E2, p.x, p.y), F = this._writeVertex(b, R, D, S2, p.x, p.y, E2.x, E2.y, O.x, O.y, q)), N ? U2 ? (this._writeTriangle(W2, w2, z2), this._writeTriangle(W2, z2, M2), this._writeTriangle(X3, B2, F), this._writeTriangle(X3, F, m2)) : (this._writeTriangle(W2, w2, M2), this._writeTriangle(X3, B2, m2)) : U2 ? (this._writeTriangle(T2, w2, z2), this._writeTriangle(T2, z2, F), this._writeTriangle(T2, F, m2)) : (this._writeTriangle(T2, w2, M2), this._writeTriangle(T2, B2, m2)), v2 ? (I = this._writeVertex(b, R, D, S2, p.x, p.y, h2.x, h2.y, e2.x, e2.y, q), P = m2) : (I = N ? this._writeVertex(b, R, D, S2, p.x, p.y, h2.x, h2.y, e2.x, e2.y, q) : f2, this._writeTriangle(I, X3, m2), P = m2), t) {
            const t2 = I;
            I = P, P = t2;
          }
          break;
        }
      }
    }
  }
}
export {
  a$1 as a,
  c,
  i
};
