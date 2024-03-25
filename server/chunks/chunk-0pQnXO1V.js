import { u4 as t$1, lM as h$2, u9 as l$2, xX as s$3, xY as o$2, xZ as o$3, x_ as m, x$ as r$4, y0 as f$1, y1 as a$2, y2 as e$1, y3 as t$2, qV as E, y4 as t$3, g3 as i$2, y5 as o$4, o4 as c$3, u8 as n$1, y6 as U, y7 as O, j2 as n$2, y8 as p$1, y9 as u$2, ya as i$3, yb as h$3, yc as p$2, yd as C, qY as d$1, qW as n$3, ye as e$2, yf as _, qT as a$4, fd as c$4, cd as b$2, q_ as I$2, qZ as l$3 } from "./chunk-ejFG4zJ0.js";
import { a as a$3, c as c$2, i as i$4 } from "./chunk-iXn63MLq.js";
import { s as s$4, e as e$3 } from "./chunk-FDDBfvr6.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function e(e2) {
  return 746 === e2 || 747 === e2 || !(e2 < 4352) && (e2 >= 12704 && e2 <= 12735 || (e2 >= 12544 && e2 <= 12591 || (e2 >= 65072 && e2 <= 65103 && !(e2 >= 65097 && e2 <= 65103) || (e2 >= 63744 && e2 <= 64255 || (e2 >= 13056 && e2 <= 13311 || (e2 >= 11904 && e2 <= 12031 || (e2 >= 12736 && e2 <= 12783 || (e2 >= 12288 && e2 <= 12351 && !(e2 >= 12296 && e2 <= 12305 || e2 >= 12308 && e2 <= 12319 || 12336 === e2) || (e2 >= 13312 && e2 <= 19903 || (e2 >= 19968 && e2 <= 40959 || (e2 >= 12800 && e2 <= 13055 || (e2 >= 12592 && e2 <= 12687 || (e2 >= 43360 && e2 <= 43391 || (e2 >= 55216 && e2 <= 55295 || (e2 >= 4352 && e2 <= 4607 || (e2 >= 44032 && e2 <= 55215 || (e2 >= 12352 && e2 <= 12447 || (e2 >= 12272 && e2 <= 12287 || (e2 >= 12688 && e2 <= 12703 || (e2 >= 12032 && e2 <= 12255 || (e2 >= 12784 && e2 <= 12799 || (e2 >= 12448 && e2 <= 12543 && 12540 !== e2 || (e2 >= 65280 && e2 <= 65519 && !(65288 === e2 || 65289 === e2 || 65293 === e2 || e2 >= 65306 && e2 <= 65310 || 65339 === e2 || 65341 === e2 || 65343 === e2 || e2 >= 65371 && e2 <= 65503 || 65507 === e2 || e2 >= 65512 && e2 <= 65519) || (e2 >= 65104 && e2 <= 65135 && !(e2 >= 65112 && e2 <= 65118 || e2 >= 65123 && e2 <= 65126) || (e2 >= 5120 && e2 <= 5759 || (e2 >= 6320 && e2 <= 6399 || (e2 >= 65040 && e2 <= 65055 || (e2 >= 19904 && e2 <= 19967 || (e2 >= 40960 && e2 <= 42127 || e2 >= 42128 && e2 <= 42191)))))))))))))))))))))))))))));
}
function c$1(e2) {
  return !(e2 < 11904) && (e2 >= 12704 && e2 <= 12735 || (e2 >= 12544 && e2 <= 12591 || (e2 >= 65072 && e2 <= 65103 || (e2 >= 63744 && e2 <= 64255 || (e2 >= 13056 && e2 <= 13311 || (e2 >= 11904 && e2 <= 12031 || (e2 >= 12736 && e2 <= 12783 || (e2 >= 12288 && e2 <= 12351 || (e2 >= 13312 && e2 <= 19903 || (e2 >= 19968 && e2 <= 40959 || (e2 >= 12800 && e2 <= 13055 || (e2 >= 65280 && e2 <= 65519 || (e2 >= 12352 && e2 <= 12447 || (e2 >= 12272 && e2 <= 12287 || (e2 >= 12032 && e2 <= 12255 || (e2 >= 12784 && e2 <= 12799 || (e2 >= 12448 && e2 <= 12543 || (e2 >= 65040 && e2 <= 65055 || (e2 >= 42128 && e2 <= 42191 || e2 >= 40960 && e2 <= 42127)))))))))))))))))));
}
function s$2(e2) {
  switch (e2) {
    case 10:
    case 32:
    case 38:
    case 40:
    case 41:
    case 43:
    case 45:
    case 47:
    case 173:
    case 183:
    case 8203:
    case 8208:
    case 8211:
    case 8231:
      return true;
  }
  return false;
}
function a$1(e2) {
  switch (e2) {
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 32:
      return true;
  }
  return false;
}
const c = 24, h$1 = 17;
let l$1 = class l {
  constructor(t2, e2, i3, o3, s3, c2, h2) {
    this._glyphItems = t2, this._maxWidth = e2, this._lineHeight = i3, this._letterSpacing = o3, this._hAnchor = s3, this._vAnchor = c2, this._justify = h2;
  }
  getShaping(s3, c2, h2) {
    const l3 = this._letterSpacing, n2 = this._lineHeight, a2 = this._justify, r5 = this._maxWidth, m2 = [];
    let f2 = 0, p2 = 0;
    for (const t2 of s3) {
      const e$12 = t2.codePointAt(0);
      if (null == e$12)
        continue;
      const i3 = h2 && e(e$12);
      let s4;
      for (const t3 of this._glyphItems)
        if (s4 = t3[e$12], s4)
          break;
      m2.push({ codePoint: e$12, x: f2, y: p2, vertical: i3, glyphMosaicItem: s4 }), s4 && (f2 += s4.metrics.advance + l3);
    }
    let g2 = f2;
    if (r5 > 0) {
      g2 = f2 / Math.max(1, Math.ceil(f2 / r5));
    }
    const y2 = s3.includes("​"), d = [], x2 = m2.length;
    for (let e2 = 0; e2 < x2 - 1; e2++) {
      const o3 = m2[e2].codePoint, s4 = c$1(o3);
      if (s$2(o3) || s4) {
        let t2 = 0;
        if (10 === o3)
          t2 -= 1e4;
        else if (s4 && y2)
          t2 += 150;
        else {
          40 !== o3 && 65288 !== o3 || (t2 += 50);
          const i3 = m2[e2 + 1].codePoint;
          41 !== i3 && 65289 !== i3 || (t2 += 50);
        }
        d.push(this._buildBreak(e2 + 1, m2[e2].x, g2, d, t2, false));
      }
    }
    const u3 = this._optimalBreaks(this._buildBreak(x2, f2, g2, d, 0, true));
    let M = 0;
    const _2 = c2 ? -n2 : n2;
    let I3 = 0;
    for (let t2 = 0; t2 < u3.length; t2++) {
      const i3 = u3[t2];
      let o3 = I3;
      for (; o3 < i3 && a$1(m2[o3].codePoint); )
        m2[o3].glyphMosaicItem = null, ++o3;
      let s4 = i3 - 1;
      for (; s4 > o3 && a$1(m2[s4].codePoint); )
        m2[s4].glyphMosaicItem = null, --s4;
      if (o3 <= s4) {
        const t3 = m2[o3].x;
        for (let i4 = o3; i4 <= s4; i4++)
          m2[i4].x -= t3, m2[i4].y = p2;
        let e2 = m2[s4].x;
        m2[s4].glyphMosaicItem && (e2 += m2[s4].glyphMosaicItem.metrics.advance), M = Math.max(e2, M), a2 && this._applyJustification(m2, o3, s4);
      }
      I3 = i3, p2 += _2;
    }
    if (m2.length > 0) {
      const t2 = u3.length - 1, e2 = (a2 - this._hAnchor) * M;
      let i3 = (-this._vAnchor * (t2 + 1) + 0.5) * n2;
      c2 && t2 && (i3 += t2 * n2);
      for (const o3 of m2)
        o3.x += e2, o3.y += i3;
    }
    return m2.filter((t2) => t2.glyphMosaicItem);
  }
  static getTextBox(t2, e2) {
    if (!t2.length)
      return null;
    let i3 = 1 / 0, o3 = 1 / 0, s3 = 0, c2 = 0;
    for (const l3 of t2) {
      const t3 = l3.glyphMosaicItem.metrics.advance, n2 = l3.x, a2 = l3.y - h$1, r5 = n2 + t3, m2 = a2 + e2;
      i3 = Math.min(i3, n2), s3 = Math.max(s3, r5), o3 = Math.min(o3, a2), c2 = Math.max(c2, m2);
    }
    return { x: i3, y: o3, width: s3 - i3, height: c2 - o3 };
  }
  static getBox(t2) {
    if (!t2.length)
      return null;
    let e2 = 1 / 0, i3 = 1 / 0, o3 = 0, s3 = 0;
    for (const c2 of t2) {
      const { height: t3, left: h2, top: l3, width: n2 } = c2.glyphMosaicItem.metrics, a2 = c2.x, r5 = c2.y - (t3 - Math.abs(l3)), m2 = a2 + n2 + h2, f2 = r5 + t3;
      e2 = Math.min(e2, a2), o3 = Math.max(o3, m2), i3 = Math.min(i3, r5), s3 = Math.max(s3, f2);
    }
    return { x: e2, y: i3, width: o3 - e2, height: s3 - i3 };
  }
  static addDecoration(t2, e2) {
    const i3 = t2.length;
    if (0 === i3)
      return;
    const o3 = 3;
    let c2 = t2[0].x + t2[0].glyphMosaicItem.metrics.left, h2 = t2[0].y;
    for (let n2 = 1; n2 < i3; n2++) {
      const i4 = t2[n2];
      if (i4.y !== h2) {
        const l4 = t2[n2 - 1].x + t2[n2 - 1].glyphMosaicItem.metrics.left + t2[n2 - 1].glyphMosaicItem.metrics.width;
        t2.push({ codePoint: 0, x: c2, y: h2 + e2 - o3, vertical: false, glyphMosaicItem: { sdf: true, rect: new t$1(4, 0, 4, 8), metrics: { width: l4 - c2, height: 2 + 2 * o3, left: 0, top: 0, advance: 0 }, page: 0, code: 0 } }), h2 = i4.y, c2 = i4.x + i4.glyphMosaicItem.metrics.left;
      }
    }
    const l3 = t2[i3 - 1].x + t2[i3 - 1].glyphMosaicItem.metrics.left + t2[i3 - 1].glyphMosaicItem.metrics.width;
    t2.push({ codePoint: 0, x: c2, y: h2 + e2 - o3, vertical: false, glyphMosaicItem: { sdf: true, rect: new t$1(4, 0, 4, 8), metrics: { width: l3 - c2, height: 2 + 2 * o3, left: 0, top: 0, advance: 0 }, page: 0, code: 0 } });
  }
  _breakScore(t2, e2, i3, o3) {
    const s3 = (t2 - e2) * (t2 - e2);
    return o3 ? t2 < e2 ? s3 / 2 : 2 * s3 : s3 + Math.abs(i3) * i3;
  }
  _buildBreak(t2, e2, i3, o3, s3, c2) {
    let h2 = null, l3 = this._breakScore(e2, i3, s3, c2);
    for (const n2 of o3) {
      const t3 = e2 - n2.x, o4 = this._breakScore(t3, i3, s3, c2) + n2.score;
      o4 <= l3 && (h2 = n2, l3 = o4);
    }
    return { index: t2, x: e2, score: l3, previousBreak: h2 };
  }
  _optimalBreaks(t2) {
    return t2 ? this._optimalBreaks(t2.previousBreak).concat(t2.index) : [];
  }
  _applyJustification(t2, e2, i3) {
    const o3 = t2[i3], s3 = o3.vertical ? c : o3.glyphMosaicItem ? o3.glyphMosaicItem.metrics.advance : 0, h2 = (o3.x + s3) * this._justify;
    for (let c2 = e2; c2 <= i3; c2++)
      t2[c2].x -= h2;
  }
};
const x = 4096, p = 8, w = 0.5, T = 2;
class y {
  constructor(e2, t2, i3 = 0, n2 = -1, s3 = w) {
    this.x = e2, this.y = t2, this.angle = i3, this.segment = n2, this.minzoom = s3;
  }
}
class f {
  constructor(e2, t2, i3, s3, o3, a2 = w, l3 = r$4) {
    this.anchor = e2, this.labelAngle = t2, this.glyphAngle = i3, this.page = s3, this.alternateVerticalGlyph = o3, this.minzoom = a2, this.maxzoom = l3;
  }
}
let I$1 = class I {
  constructor(e2, t2, i3, n2, s3, o3, a2, l3, h2, r5, c2, g2) {
    this.tl = e2, this.tr = t2, this.bl = i3, this.br = n2, this.mosaicRect = s3, this.labelAngle = o3, this.minAngle = a2, this.maxAngle = l3, this.anchor = h2, this.minzoom = r5, this.maxzoom = c2, this.page = g2;
  }
};
let u$1 = class u {
  constructor(e2) {
    this.shapes = e2;
  }
};
let b$1 = class b {
  getIconPlacement(n2, s3, o3) {
    const a2 = new h$2(n2.x, n2.y), l3 = o3.rotationAlignment === l$2.MAP, h2 = o3.keepUpright;
    let r5 = o3.rotate * s$3;
    l3 && (r5 += n2.angle);
    const m2 = new u$1([]);
    return o3.allowOverlap && o3.ignorePlacement || !o$2 || (m2.iconColliders = []), this._addIconPlacement(m2, a2, s3, o3, r5), l3 && h2 && this._addIconPlacement(m2, a2, s3, o3, r5 + o$3), m2;
  }
  _addIconPlacement(t2, i3, s3, o3, a2) {
    const l3 = s3.rasterizationScale, h2 = s3.width / l3, r5 = s3.height / l3, g2 = o3.offset;
    let x2 = g2[0], d = g2[1];
    switch (o3.anchor) {
      case m.CENTER:
        x2 -= h2 / 2, d -= r5 / 2;
        break;
      case m.LEFT:
        d -= r5 / 2;
        break;
      case m.RIGHT:
        x2 -= h2, d -= r5 / 2;
        break;
      case m.TOP:
        x2 -= h2 / 2;
        break;
      case m.BOTTOM:
        x2 -= h2 / 2, d -= r5;
        break;
      case m.TOP_LEFT:
        break;
      case m.BOTTOM_LEFT:
        d -= r5;
        break;
      case m.TOP_RIGHT:
        x2 -= h2;
        break;
      case m.BOTTOM_RIGHT:
        x2 -= h2, d -= r5;
    }
    const p2 = s3.rect, T2 = 2 / l3, y2 = x2 - T2, f2 = d - T2, u3 = y2 + p2.width / l3, b3 = f2 + p2.height / l3, P = new h$2(y2, f2), O2 = new h$2(u3, b3), _2 = new h$2(y2, b3), k = new h$2(u3, f2);
    if (0 !== a2) {
      const e2 = Math.cos(a2), t3 = Math.sin(a2);
      P.rotate(e2, t3), O2.rotate(e2, t3), _2.rotate(e2, t3), k.rotate(e2, t3);
    }
    const M = new I$1(P, k, _2, O2, p2, a2, 0, 256, i3, w, r$4, 0);
    if (t2.shapes.push(M), (!o3.allowOverlap || !o3.ignorePlacement) && o$2) {
      const e2 = o3.size, s4 = o3.padding, l4 = { xTile: i3.x, yTile: i3.y, dxPixels: x2 * e2 - s4, dyPixels: d * e2 - s4, hard: !o3.optional, partIndex: 0, width: h2 * e2 + 2 * s4, height: r5 * e2 + 2 * s4, angle: a2, minLod: w, maxLod: r$4 };
      t2.iconColliders.push(l4);
    }
  }
  getTextPlacement(s3, o3, a2, c$12) {
    const x2 = new h$2(s3.x, s3.y), d = c$12.rotate * s$3, y2 = c$12.rotationAlignment === l$2.MAP, b3 = c$12.keepUpright, P = c$12.padding;
    let O2 = w;
    const _2 = !y2 ? 0 : s3.angle, k = s3.segment >= 0 && y2, M = c$12.allowOverlap && c$12.ignorePlacement ? null : [], E2 = [], G = 4, N = !k;
    let A2 = Number.POSITIVE_INFINITY, L2 = Number.NEGATIVE_INFINITY, z = A2, F = L2;
    const v = (k || y2) && b3, R = c$12.size / c;
    let B = false;
    for (const e2 of o3)
      if (e2.vertical) {
        B = true;
        break;
      }
    let H, V = 0, j = 0;
    if (!k && B) {
      const e2 = l$1.getTextBox(o3, c$12.lineHeight * c);
      switch (c$12.anchor) {
        case m.LEFT:
          V = e2.height / 2, j = -e2.width / 2;
          break;
        case m.RIGHT:
          V = -e2.height / 2, j = e2.width / 2;
          break;
        case m.TOP:
          V = e2.height / 2, j = e2.width / 2;
          break;
        case m.BOTTOM:
          V = -e2.height / 2, j = -e2.width / 2;
          break;
        case m.TOP_LEFT:
          V = e2.height;
          break;
        case m.BOTTOM_LEFT:
          j = -e2.width;
          break;
        case m.TOP_RIGHT:
          j = e2.width;
          break;
        case m.BOTTOM_RIGHT:
          V = -e2.height;
      }
    }
    V += c$12.offset[0] * c, j += c$12.offset[1] * c;
    for (const t2 of o3) {
      const o4 = t2.glyphMosaicItem;
      if (!o4 || o4.rect.isEmpty)
        continue;
      const l3 = o4.rect, h2 = o4.metrics, g2 = o4.page;
      if (M && N) {
        if (void 0 !== H && H !== t2.y) {
          let e2, t3, i3, o5;
          B ? (e2 = -F + V, t3 = A2 + j, i3 = F - z, o5 = L2 - A2) : (e2 = A2 + V, t3 = z + j, i3 = L2 - A2, o5 = F - z);
          const a3 = { xTile: s3.x, yTile: s3.y, dxPixels: e2 * R - P, dyPixels: t3 * R - P, hard: !c$12.optional, partIndex: 1, width: i3 * R + 2 * P, height: o5 * R + 2 * P, angle: d, minLod: w, maxLod: r$4 };
          M.push(a3), A2 = Number.POSITIVE_INFINITY, L2 = Number.NEGATIVE_INFINITY, z = A2, F = L2;
        }
        H = t2.y;
      }
      const m2 = [];
      if (k) {
        const e2 = 0.5 * o4.metrics.width, i3 = (t2.x + h2.left - G + e2) * R * p;
        if (O2 = this._placeGlyph(s3, O2, i3, a2, s3.segment, 1, t2.vertical, g2, m2), b3 && (O2 = this._placeGlyph(s3, O2, i3, a2, s3.segment, -1, t2.vertical, g2, m2)), O2 >= T)
          break;
      } else
        m2.push(new f(x2, _2, _2, g2, false)), y2 && b3 && m2.push(new f(x2, _2 + o$3, _2 + o$3, g2, false));
      const u3 = t2.x + h2.left, C3 = t2.y - h$1 - h2.top, S = u3 + h2.width, Y = C3 + h2.height;
      let q, U2, D, J, K, Q, W, X;
      if (!k && B)
        if (t2.vertical) {
          const t3 = (u3 + S) / 2 - h2.height / 2, i3 = (C3 + Y) / 2 + h2.width / 2;
          q = new h$2(-i3 - G + V, t3 - G + j), U2 = new h$2(q.x + l3.width, q.y + l3.height), D = new h$2(q.x, U2.y), J = new h$2(U2.x, q.y);
        } else
          q = new h$2(-C3 + G + V, u3 - G + j), U2 = new h$2(q.x - l3.height, q.y + l3.width), D = new h$2(U2.x, q.y), J = new h$2(q.x, U2.y);
      else
        q = new h$2(u3 - G + V, C3 - G + j), U2 = new h$2(q.x + l3.width, q.y + l3.height), D = new h$2(q.x, U2.y), J = new h$2(U2.x, q.y);
      for (const i3 of m2) {
        let n2, o5, a3, r5;
        if (i3.alternateVerticalGlyph) {
          if (!K) {
            const t3 = (C3 + Y) / 2 + j;
            K = new h$2((u3 + S) / 2 + V - h2.height / 2 - G, t3 + h2.width / 2 + G), Q = new h$2(K.x + l3.height, K.y - l3.width), W = new h$2(Q.x, K.y), X = new h$2(K.x, Q.y);
          }
          n2 = K, o5 = W, a3 = X, r5 = Q;
        } else
          n2 = q, o5 = D, a3 = J, r5 = U2;
        const g3 = C3, m3 = Y, x3 = i3.glyphAngle + d;
        if (0 !== x3) {
          const e2 = Math.cos(x3), t3 = Math.sin(x3);
          n2 = n2.clone(), o5 = o5?.clone(), a3 = a3?.clone(), r5 = r5?.clone(), n2.rotate(e2, t3), r5?.rotate(e2, t3), o5?.rotate(e2, t3), a3?.rotate(e2, t3);
        }
        let p2 = 0, w2 = 256;
        if (k && B ? t2.vertical ? i3.alternateVerticalGlyph ? (p2 = 32, w2 = 96) : (p2 = 224, w2 = 32) : (p2 = 224, w2 = 96) : (p2 = 192, w2 = 64), E2.push(new I$1(n2, a3, o5, r5, l3, i3.labelAngle, p2, w2, i3.anchor, i3.minzoom, i3.maxzoom, i3.page)), M && (!v || this._legible(i3.labelAngle))) {
          if (N)
            u3 < A2 && (A2 = u3), g3 < z && (z = g3), S > L2 && (L2 = S), m3 > F && (F = m3);
          else if (i3.minzoom < T) {
            const e2 = { xTile: s3.x, yTile: s3.y, dxPixels: (u3 + V) * R - P, dyPixels: (g3 + V) * R - P, hard: !c$12.optional, partIndex: 1, width: (S - u3) * R + 2 * P, height: (m3 - g3) * R + 2 * P, angle: x3, minLod: i3.minzoom, maxLod: i3.maxzoom };
            M.push(e2);
          }
        }
      }
    }
    if (O2 >= T)
      return null;
    if (M && N) {
      let e2, t2, i3, o4;
      B ? (e2 = -F + V, t2 = A2 + j, i3 = F - z, o4 = L2 - A2) : (e2 = A2 + V, t2 = z + j, i3 = L2 - A2, o4 = F - z);
      const a3 = { xTile: s3.x, yTile: s3.y, dxPixels: e2 * R - P, dyPixels: t2 * R - P, hard: !c$12.optional, partIndex: 1, width: i3 * R + 2 * P, height: o4 * R + 2 * P, angle: d, minLod: w, maxLod: r$4 };
      M.push(a3);
    }
    const C2 = new u$1(E2);
    return M && M.length > 0 && (C2.textColliders = M), C2;
  }
  _legible(e2) {
    const t2 = f$1(e2);
    return t2 < 65 || t2 >= 193;
  }
  _placeGlyph(t2, s3, l3, h2, r5, c2, g2, m2, x2) {
    let d = c2;
    const p2 = d < 0 ? a$2(t2.angle + o$3, e$1) : t2.angle;
    let w2 = 0;
    l3 < 0 && (d *= -1, l3 *= -1, w2 = o$3), d > 0 && ++r5;
    let T2 = new h$2(t2.x, t2.y), y2 = h2[r5], I3 = r$4;
    if (h2.length <= r5)
      return I3;
    for (; ; ) {
      const e2 = y2.x - T2.x, t3 = y2.y - T2.y, i3 = Math.sqrt(e2 * e2 + t3 * t3), n2 = Math.max(l3 / i3, s3), c3 = e2 / i3, u3 = t3 / i3, b3 = a$2(Math.atan2(u3, c3) + w2, e$1);
      if (x2.push(new f(T2, p2, b3, m2, false, n2, I3)), g2 && x2.push(new f(T2, p2, b3, m2, true, n2, I3)), n2 <= s3)
        return n2;
      T2 = y2.clone();
      do {
        if (r5 += d, h2.length <= r5 || r5 < 0)
          return n2;
        y2 = h2[r5];
      } while (T2.isEqual(y2));
      let P = y2.x - T2.x, O2 = y2.y - T2.y;
      const _2 = Math.sqrt(P * P + O2 * O2);
      P *= i3 / _2, O2 *= i3 / _2, T2.x -= P, T2.y -= O2, I3 = n2;
    }
  }
};
let r$3 = class r extends t$2 {
  constructor() {
    super(12);
  }
  add(s3, r5, t2) {
    const e2 = this.array;
    e2.push(s3), e2.push(r5), e2.push(t2);
  }
};
let o$1 = class o extends t$2 {
  constructor(t2) {
    super(t2);
  }
  add(t2, o3, r5, u3, h2, a2, n2, d, e2, p2, i3, c2) {
    const M = this.array;
    let l3 = t$2.i1616to32(t2, o3);
    M.push(l3);
    const m2 = 31;
    l3 = t$2.i8888to32(Math.round(m2 * r5), Math.round(m2 * u3), Math.round(m2 * h2), Math.round(m2 * a2)), M.push(l3), l3 = t$2.i8888to32(Math.round(m2 * n2), Math.round(m2 * d), Math.round(m2 * e2), Math.round(m2 * p2)), M.push(l3), l3 = t$2.i1616to32(i3, 0), M.push(l3), c2 && M.push(...c2);
  }
};
let r$2 = class r2 extends t$2 {
  constructor(t2) {
    super(t2);
  }
  add(t2, o3, r5) {
    const u3 = this.array;
    u3.push(t$2.i1616to32(t2, o3)), r5 && u3.push(...r5);
  }
};
class u2 extends t$2 {
  constructor(t2) {
    super(t2);
  }
  add(t2, o3, r5, u3, h2, a2, n2) {
    const d = this.array, e2 = this.index;
    let p2 = t$2.i1616to32(t2, o3);
    d.push(p2);
    const i3 = 15;
    return p2 = t$2.i8888to32(Math.round(i3 * r5), Math.round(i3 * u3), h2, a2), d.push(p2), n2 && d.push(...n2), e2;
  }
}
class h extends t$2 {
  constructor(t2) {
    super(t2);
  }
  add(o3, r5, u3, h2, a2, n2, d, e2, p2, i3, c2, M) {
    const l3 = this.array;
    let m2 = t$2.i1616to32(o3, r5);
    l3.push(m2), m2 = t$2.i1616to32(Math.round(8 * u3), Math.round(8 * h2)), l3.push(m2), m2 = t$2.i8888to32(a2 / 4, n2 / 4, e2, p2), l3.push(m2), m2 = t$2.i8888to32(0, f$1(d), 10 * i3, Math.min(10 * c2, 255)), l3.push(m2), M && l3.push(...M);
  }
}
class a extends t$2 {
  constructor(t2) {
    super(t2);
  }
  add(t2, o3, r5, u3, h2) {
    const a2 = this.array, n2 = t$2.i1616to32(2 * t2 + r5, 2 * o3 + u3);
    a2.push(n2), h2 && a2.push(...h2);
  }
}
class t {
  constructor(t2, e2, s3) {
    this.layerExtent = 4096, this._features = [], this.layer = t2, this.zoom = e2, this._spriteInfo = s3, this._filter = t2.getFeatureFilter();
  }
  pushFeature(t2) {
    this._filter && !this._filter.filter(t2, this.zoom) || this._features.push(t2);
  }
  hasFeatures() {
    return this._features.length > 0;
  }
  getResources(t2, e2, s3) {
  }
}
let r$1 = class r3 extends t {
  constructor(t2, r5, i3, c2, s3) {
    super(t2, r5, i3), this.type = E.CIRCLE, this._circleVertexBuffer = c2, this._circleIndexBuffer = s3;
  }
  get circleIndexStart() {
    return this._circleIndexStart;
  }
  get circleIndexCount() {
    return this._circleIndexCount;
  }
  processFeatures(e2) {
    const t2 = this._circleVertexBuffer, r5 = this._circleIndexBuffer;
    this._circleIndexStart = 3 * r5.index, this._circleIndexCount = 0;
    const i3 = this.layer, c2 = this.zoom;
    e2 && e2.setExtent(this.layerExtent);
    for (const s3 of this._features) {
      const n2 = s3.getGeometry(e2);
      if (!n2)
        continue;
      const l3 = i3.circleMaterial.encodeAttributes(s3, c2, i3);
      for (const e3 of n2)
        if (e3)
          for (const i4 of e3) {
            const e4 = t2.index;
            t2.add(i4.x, i4.y, 0, 0, l3), t2.add(i4.x, i4.y, 0, 1, l3), t2.add(i4.x, i4.y, 1, 0, l3), t2.add(i4.x, i4.y, 1, 1, l3), r5.add(e4, e4 + 1, e4 + 2), r5.add(e4 + 1, e4 + 2, e4 + 3), this._circleIndexCount += 6;
          }
    }
  }
  serialize() {
    let e2 = 6;
    e2 += this.layerUIDs.length, e2 += this._circleVertexBuffer.array.length, e2 += this._circleIndexBuffer.array.length;
    const t2 = new Uint32Array(e2), r5 = new Int32Array(t2.buffer);
    let i3 = 0;
    t2[i3++] = this.type, t2[i3++] = this.layerUIDs.length;
    for (let c2 = 0; c2 < this.layerUIDs.length; c2++)
      t2[i3++] = this.layerUIDs[c2];
    t2[i3++] = this._circleIndexStart, t2[i3++] = this._circleIndexCount, t2[i3++] = this._circleVertexBuffer.array.length;
    for (let c2 = 0; c2 < this._circleVertexBuffer.array.length; c2++)
      r5[i3++] = this._circleVertexBuffer.array[c2];
    t2[i3++] = this._circleIndexBuffer.array.length;
    for (let c2 = 0; c2 < this._circleIndexBuffer.array.length; c2++)
      t2[i3++] = this._circleIndexBuffer.array[c2];
    return t2.buffer;
  }
};
let s$1 = class s extends t {
  constructor(t2, e2, i3, r5, n2, s3, o3) {
    super(t2, e2, i3), this.type = E.FILL, this._patternMap = /* @__PURE__ */ new Map(), this._fillVertexBuffer = r5, this._fillIndexBuffer = n2, this._outlineVertexBuffer = s3, this._outlineIndexBuffer = o3;
  }
  get fillIndexStart() {
    return this._fillIndexStart;
  }
  get fillIndexCount() {
    return this._fillIndexCount;
  }
  get outlineIndexStart() {
    return this._outlineIndexStart;
  }
  get outlineIndexCount() {
    return this._outlineIndexCount;
  }
  getResources(t2, e2, i3) {
    const r5 = this.layer, l3 = this.zoom, n2 = r5.getPaintProperty("fill-pattern");
    if (n2)
      if (n2.isDataDriven)
        for (const s3 of this._features)
          e2(n2.getValue(l3, s3), true);
      else
        e2(n2.getValue(l3), true);
  }
  processFeatures(t2) {
    this._fillIndexStart = 3 * this._fillIndexBuffer.index, this._fillIndexCount = 0, this._outlineIndexStart = 3 * this._outlineIndexBuffer.index, this._outlineIndexCount = 0;
    const e2 = this.layer, i3 = this.zoom, { fillMaterial: r5, outlineMaterial: l3, hasDataDrivenFill: n2, hasDataDrivenOutline: s3 } = e2;
    t2 && t2.setExtent(this.layerExtent);
    const o3 = e2.getPaintProperty("fill-pattern"), a2 = o3?.isDataDriven;
    let f2 = !o3 && e2.getPaintValue("fill-antialias", i3);
    if (e2.outlineUsesFillColor) {
      if (f2 && !e2.hasDataDrivenOpacity) {
        const t3 = e2.getPaintValue("fill-opacity", i3), r6 = e2.getPaintValue("fill-opacity", i3 + 1);
        t3 < 1 && r6 < 1 && (f2 = false);
      }
      if (f2 && !e2.hasDataDrivenColor) {
        const t3 = e2.getPaintValue("fill-color", i3), r6 = e2.getPaintValue("fill-color", i3 + 1);
        t3[3] < 1 && r6[3] < 1 && (f2 = false);
      }
    }
    const u3 = this._features, d = t2?.validateTessellation;
    if (a2) {
      const n3 = [];
      for (const a3 of u3) {
        const u4 = o3.getValue(i3, a3), h2 = this._spriteInfo[u4];
        if (!h2?.rect)
          continue;
        const x2 = r5.encodeAttributes(a3, i3, e2, h2), c2 = f2 && s3 ? l3.encodeAttributes(a3, i3, e2) : [], _2 = a3.getGeometry(t2);
        n3.push({ ddFillAttributes: x2, ddOutlineAttributes: c2, page: h2.page, geometry: _2 }), n3.sort((t3, e3) => t3.page - e3.page);
        for (const { ddFillAttributes: t3, ddOutlineAttributes: i4, page: r6, geometry: l4 } of n3)
          this._processFeature(l4, f2, e2.outlineUsesFillColor, t3, i4, d, r6);
      }
    } else
      for (const h2 of u3) {
        const o4 = n2 ? r5.encodeAttributes(h2, i3, e2) : null, a3 = f2 && s3 ? l3.encodeAttributes(h2, i3, e2) : null, u4 = h2.getGeometry(t2);
        this._processFeature(u4, f2, e2.outlineUsesFillColor, o4, a3, d);
      }
  }
  serialize() {
    let t2 = 10;
    t2 += this.layerUIDs.length, t2 += this._fillVertexBuffer.array.length, t2 += this._fillIndexBuffer.array.length, t2 += this._outlineVertexBuffer.array.length, t2 += this._outlineIndexBuffer.array.length, t2 += 3 * this._patternMap.size + 1;
    const e2 = new Uint32Array(t2), i3 = new Int32Array(e2.buffer);
    let r5 = 0;
    e2[r5++] = this.type, e2[r5++] = this.layerUIDs.length;
    for (let s3 = 0; s3 < this.layerUIDs.length; s3++)
      e2[r5++] = this.layerUIDs[s3];
    e2[r5++] = this._fillIndexStart, e2[r5++] = this._fillIndexCount, e2[r5++] = this._outlineIndexStart, e2[r5++] = this._outlineIndexCount;
    const l3 = this._patternMap, n2 = l3.size;
    if (e2[r5++] = n2, n2 > 0)
      for (const [s3, [o3, a2]] of l3)
        e2[r5++] = s3, e2[r5++] = o3, e2[r5++] = a2;
    e2[r5++] = this._fillVertexBuffer.array.length;
    for (let s3 = 0; s3 < this._fillVertexBuffer.array.length; s3++)
      i3[r5++] = this._fillVertexBuffer.array[s3];
    e2[r5++] = this._fillIndexBuffer.array.length;
    for (let s3 = 0; s3 < this._fillIndexBuffer.array.length; s3++)
      e2[r5++] = this._fillIndexBuffer.array[s3];
    e2[r5++] = this._outlineVertexBuffer.array.length;
    for (let s3 = 0; s3 < this._outlineVertexBuffer.array.length; s3++)
      i3[r5++] = this._outlineVertexBuffer.array[s3];
    e2[r5++] = this._outlineIndexBuffer.array.length;
    for (let s3 = 0; s3 < this._outlineIndexBuffer.array.length; s3++)
      e2[r5++] = this._outlineIndexBuffer.array[s3];
    return e2.buffer;
  }
  _processFeature(t2, e2, i3, r5, l3, n2, o3) {
    if (!t2)
      return;
    const a2 = t2.length, f2 = !l3 || 0 === l3.length;
    if (e2 && (!i3 || f2))
      for (let s3 = 0; s3 < a2; s3++)
        this._processOutline(t2[s3], l3);
    const u3 = 32;
    let d;
    for (let h2 = 0; h2 < a2; h2++) {
      const e3 = s._area(t2[h2]);
      e3 > u3 ? (void 0 !== d && this._processFill(t2, d, r5, n2, o3), d = [h2]) : e3 < -u3 && void 0 !== d && d.push(h2);
    }
    void 0 !== d && this._processFill(t2, d, r5, n2, o3);
  }
  _processOutline(t2, e2) {
    const i3 = this._outlineVertexBuffer, l3 = this._outlineIndexBuffer, n2 = l3.index;
    let s3, o3, a2;
    const f2 = new h$2(0, 0), u3 = new h$2(0, 0), d = new h$2(0, 0);
    let h2 = -1, x2 = -1, c2 = -1, _2 = -1, y2 = -1, g2 = false;
    const p2 = 0;
    let I3 = t2.length;
    if (I3 < 2)
      return;
    const B = t2[p2];
    let m2 = t2[I3 - 1];
    for (; I3 && m2.isEqual(B); )
      --I3, m2 = t2[I3 - 1];
    if (!(I3 - p2 < 2)) {
      for (let r5 = p2; r5 < I3; ++r5) {
        r5 === p2 ? (s3 = t2[I3 - 1], o3 = t2[p2], a2 = t2[p2 + 1], f2.assignSub(o3, s3), f2.normalize(), f2.rightPerpendicular()) : (s3 = o3, o3 = a2, a2 = r5 !== I3 - 1 ? t2[r5 + 1] : t2[p2], f2.assign(u3));
        const n3 = this._isClipEdge(s3, o3);
        -1 === _2 && (g2 = n3), u3.assignSub(a2, o3), u3.normalize(), u3.rightPerpendicular();
        const B2 = f2.x * u3.y - f2.y * u3.x;
        d.assignAdd(f2, u3), d.normalize();
        const m3 = -d.x * -f2.x + -d.y * -f2.y;
        let V = Math.abs(0 !== m3 ? 1 / m3 : 1);
        V > 8 && (V = 8), B2 >= 0 ? (c2 = i3.add(o3.x, o3.y, f2.x, f2.y, 0, 1, e2), -1 === _2 && (_2 = c2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n3 && l3.add(h2, x2, c2), x2 = i3.add(o3.x, o3.y, V * -d.x, V * -d.y, 0, -1, e2), -1 === y2 && (y2 = x2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n3 && l3.add(h2, x2, c2), h2 = x2, x2 = c2, c2 = i3.add(o3.x, o3.y, d.x, d.y, 0, 1, e2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n3 && l3.add(h2, x2, c2), x2 = i3.add(o3.x, o3.y, u3.x, u3.y, 0, 1, e2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n3 && l3.add(h2, x2, c2)) : (c2 = i3.add(o3.x, o3.y, V * d.x, V * d.y, 0, 1, e2), -1 === _2 && (_2 = c2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n3 && l3.add(h2, x2, c2), x2 = i3.add(o3.x, o3.y, -f2.x, -f2.y, 0, -1, e2), -1 === y2 && (y2 = x2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n3 && l3.add(h2, x2, c2), h2 = x2, x2 = c2, c2 = i3.add(o3.x, o3.y, -d.x, -d.y, 0, -1, e2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n3 && l3.add(h2, x2, c2), h2 = i3.add(o3.x, o3.y, -u3.x, -u3.y, 0, -1, e2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n3 && l3.add(h2, x2, c2));
      }
      h2 >= 0 && x2 >= 0 && _2 >= 0 && !g2 && l3.add(h2, x2, _2), h2 >= 0 && _2 >= 0 && y2 >= 0 && !g2 && l3.add(h2, y2, _2), this._outlineIndexCount += 3 * (l3.index - n2);
    }
  }
  _processFill(r5, l3, n2, s3, o3) {
    s3 = true;
    let a2;
    l3.length > 1 && (a2 = []);
    let f2 = 0;
    for (const t2 of l3)
      0 !== f2 && a2.push(f2), f2 += r5[t2].length;
    const u3 = 2 * f2, d = t$3.acquire();
    for (const t2 of l3) {
      const e2 = r5[t2], i3 = e2.length;
      for (let t3 = 0; t3 < i3; ++t3)
        d.push(e2[t3].x, e2[t3].y);
    }
    const h2 = i$2(d, a2, 2);
    if (s3 && i$2.deviation(d, a2, 2, h2) > 0) {
      const t2 = l3.map((t3) => r5[t3].length), { buffer: e2, vertexCount: s4 } = a$3(d, t2);
      if (s4 > 0) {
        const t3 = this._fillVertexBuffer.index;
        for (let i3 = 0; i3 < s4; i3++)
          this._fillVertexBuffer.add(e2[2 * i3], e2[2 * i3 + 1], n2);
        for (let e3 = 0; e3 < s4; e3 += 3) {
          const i3 = t3 + e3;
          this._fillIndexBuffer.add(i3, i3 + 1, i3 + 2);
        }
        if (void 0 !== o3) {
          const t4 = this._patternMap, e3 = t4.get(o3);
          e3 ? e3[1] += s4 : t4.set(o3, [this._fillIndexStart + this._fillIndexCount, s4]);
        }
        this._fillIndexCount += s4;
      }
    } else {
      const t2 = h2.length;
      if (t2 > 0) {
        const e2 = this._fillVertexBuffer.index;
        let i3 = 0;
        for (; i3 < u3; )
          this._fillVertexBuffer.add(d[i3++], d[i3++], n2);
        let r6 = 0;
        for (; r6 < t2; )
          this._fillIndexBuffer.add(e2 + h2[r6++], e2 + h2[r6++], e2 + h2[r6++]);
        if (void 0 !== o3) {
          const e3 = this._patternMap, i4 = e3.get(o3);
          i4 ? i4[1] += t2 : e3.set(o3, [this._fillIndexStart + this._fillIndexCount, t2]);
        }
        this._fillIndexCount += t2;
      }
    }
    t$3.release(d);
  }
  _isClipEdge(t2, e2) {
    return t2.x === e2.x ? t2.x <= -64 || t2.x >= 4160 : t2.y === e2.y && (t2.y <= -64 || t2.y >= 4160);
  }
  static _area(t2) {
    let e2 = 0;
    const i3 = t2.length - 1;
    for (let r5 = 0; r5 < i3; r5++)
      e2 += (t2[r5].x - t2[r5 + 1].x) * (t2[r5].y + t2[r5 + 1].y);
    return e2 += (t2[i3].x - t2[0].x) * (t2[i3].y + t2[0].y), 0.5 * e2;
  }
};
const s2 = 65535;
class n extends t {
  constructor(t2, s3, n2, a2, o3) {
    super(t2, s3, n2), this.type = E.LINE, this._tessellationOptions = { pixelCoordRatio: 8, halfWidth: 0, offset: 0 }, this._patternMap = /* @__PURE__ */ new Map(), this.tessellationProperties = { _lineVertexBuffer: null, _lineIndexBuffer: null, _ddValues: null }, this.tessellationProperties._lineVertexBuffer = a2, this.tessellationProperties._lineIndexBuffer = o3, this._lineTessellator = new c$2(r4(this.tessellationProperties), l2(this.tessellationProperties), t2.canUseThinTessellation);
  }
  get lineIndexStart() {
    return this._lineIndexStart;
  }
  get lineIndexCount() {
    return this._lineIndexCount;
  }
  getResources(e2, t2, i3) {
    const s3 = this.layer, n2 = this.zoom, r5 = s3.getPaintProperty("line-pattern"), l3 = s3.getPaintProperty("line-dasharray"), a2 = s3.getLayoutProperty("line-cap");
    if (!r5 && !l3)
      return;
    const o3 = a2?.getValue(n2) || 0, u3 = a2?.isDataDriven, f2 = r5?.isDataDriven, h2 = l3?.isDataDriven;
    if (f2 || h2)
      for (const p2 of this._features)
        t2(f2 ? r5.getValue(n2, p2) : this._getDashArrayKey(p2, n2, s3, l3, u3, a2, o3));
    else if (r5)
      t2(r5.getValue(n2));
    else if (l3) {
      const e3 = l3.getValue(n2);
      t2(s3.getDashKey(e3, o3));
    }
  }
  processFeatures(e2) {
    this._lineIndexStart = 3 * this.tessellationProperties._lineIndexBuffer.index, this._lineIndexCount = 0;
    const t2 = this.layer, i3 = this.zoom, s3 = this._features, n2 = this._tessellationOptions, { hasDataDrivenLine: r5, lineMaterial: l3 } = t2;
    e2 && e2.setExtent(this.layerExtent);
    const a2 = t2.getPaintProperty("line-pattern"), o3 = t2.getPaintProperty("line-dasharray"), u3 = a2?.isDataDriven, f2 = o3?.isDataDriven;
    let h2;
    h2 = t2.getLayoutProperty("line-cap");
    const p2 = h2?.isDataDriven ? h2 : null, g2 = p2 ? null : t2.getLayoutValue("line-cap", i3), y2 = g2 || 0, d = !!p2;
    h2 = t2.getLayoutProperty("line-join");
    const c2 = h2?.isDataDriven ? h2 : null, _2 = c2 ? null : t2.getLayoutValue("line-join", i3);
    h2 = t2.getLayoutProperty("line-miter-limit");
    const x2 = h2?.isDataDriven ? h2 : null, V = x2 ? null : t2.getLayoutValue("line-miter-limit", i3);
    h2 = t2.getLayoutProperty("line-round-limit");
    const m2 = h2?.isDataDriven ? h2 : null, D = m2 ? null : t2.getLayoutValue("line-round-limit", i3);
    h2 = t2.getPaintProperty("line-width");
    const P = h2?.isDataDriven ? h2 : null, I3 = P ? null : t2.getPaintValue("line-width", i3);
    h2 = t2.getPaintProperty("line-offset");
    const L2 = h2?.isDataDriven ? h2 : null, B = L2 ? null : t2.getPaintValue("line-offset", i3);
    if (u3 || f2) {
      const r6 = [];
      for (const n3 of s3) {
        const s4 = u3 ? a2.getValue(i3, n3) : this._getDashArrayKey(n3, i3, t2, o3, d, p2, y2), f3 = this._spriteInfo[s4];
        if (!f3?.rect)
          continue;
        const h3 = l3.encodeAttributes(n3, i3, t2, f3), v = n3.getGeometry(e2);
        r6.push({ ddAttributes: h3, page: f3.page, cap: p2 ? p2.getValue(i3, n3) : g2, join: c2 ? c2.getValue(i3, n3) : _2, miterLimit: x2 ? x2.getValue(i3, n3) : V, roundLimit: m2 ? m2.getValue(i3, n3) : D, halfWidth: 0.5 * (P ? P.getValue(i3, n3) : I3), offset: L2 ? L2.getValue(i3, n3) : B, geometry: v });
      }
      r6.sort((e3, t3) => e3.page - t3.page), n2.textured = true;
      for (const { ddAttributes: e3, page: t3, cap: i4, join: s4, miterLimit: l4, roundLimit: a3, halfWidth: o4, offset: u4, geometry: f3 } of r6)
        n2.capType = i4, n2.joinType = s4, n2.miterLimit = l4, n2.roundLimit = a3, n2.halfWidth = o4, n2.offset = u4, this._processFeature(f3, e3, t3);
    } else {
      if (a2) {
        const e3 = a2.getValue(i3), t3 = this._spriteInfo[e3];
        if (!t3?.rect)
          return;
      }
      n2.textured = !(!a2 && !o3), n2.capType = g2, n2.joinType = _2, n2.miterLimit = V, n2.roundLimit = D, n2.halfWidth = 0.5 * I3, n2.offset = B;
      for (const a3 of s3) {
        const s4 = r5 ? l3.encodeAttributes(a3, i3, t2) : null;
        p2 && (n2.capType = p2.getValue(i3, a3)), c2 && (n2.joinType = c2.getValue(i3, a3)), x2 && (n2.miterLimit = x2.getValue(i3, a3)), m2 && (n2.roundLimit = m2.getValue(i3, a3)), P && (n2.halfWidth = 0.5 * P.getValue(i3, a3)), L2 && (n2.offset = L2.getValue(i3, a3));
        const o4 = a3.getGeometry(e2);
        this._processFeature(o4, s4);
      }
    }
  }
  serialize() {
    let e2 = 6;
    e2 += this.layerUIDs.length, e2 += this.tessellationProperties._lineVertexBuffer.array.length, e2 += this.tessellationProperties._lineIndexBuffer.array.length, e2 += 3 * this._patternMap.size + 1;
    const t2 = new Uint32Array(e2), i3 = new Int32Array(t2.buffer);
    let s3 = 0;
    t2[s3++] = this.type, t2[s3++] = this.layerUIDs.length;
    for (let l3 = 0; l3 < this.layerUIDs.length; l3++)
      t2[s3++] = this.layerUIDs[l3];
    t2[s3++] = this._lineIndexStart, t2[s3++] = this._lineIndexCount;
    const n2 = this._patternMap, r5 = n2.size;
    if (t2[s3++] = r5, r5 > 0)
      for (const [l3, [a2, o3]] of n2)
        t2[s3++] = l3, t2[s3++] = a2, t2[s3++] = o3;
    t2[s3++] = this.tessellationProperties._lineVertexBuffer.array.length;
    for (let l3 = 0; l3 < this.tessellationProperties._lineVertexBuffer.array.length; l3++)
      i3[s3++] = this.tessellationProperties._lineVertexBuffer.array[l3];
    t2[s3++] = this.tessellationProperties._lineIndexBuffer.array.length;
    for (let l3 = 0; l3 < this.tessellationProperties._lineIndexBuffer.array.length; l3++)
      t2[s3++] = this.tessellationProperties._lineIndexBuffer.array[l3];
    return t2.buffer;
  }
  _processFeature(e2, t2, i3) {
    if (!e2)
      return;
    const s3 = e2.length;
    for (let n2 = 0; n2 < s3; n2++)
      this._processGeometry(e2[n2], t2, i3);
  }
  _processGeometry(e2, t2, i3) {
    if (e2.length < 2)
      return;
    const n2 = 1e-3;
    let r5, l3, a2 = e2[0], o3 = 1;
    for (; o3 < e2.length; )
      r5 = e2[o3].x - a2.x, l3 = e2[o3].y - a2.y, r5 * r5 + l3 * l3 < n2 * n2 ? e2.splice(o3, 1) : (a2 = e2[o3], ++o3);
    if (e2.length < 2)
      return;
    const u3 = this.tessellationProperties._lineIndexBuffer, f2 = 3 * u3.index;
    this._tessellationOptions.initialDistance = 0, this._tessellationOptions.wrapDistance = s2, this.tessellationProperties._ddValues = t2, this._lineTessellator.tessellate(e2, this._tessellationOptions);
    const h2 = 3 * u3.index - f2;
    if (void 0 !== i3) {
      const e3 = this._patternMap, t3 = e3.get(i3);
      t3 ? t3[1] += h2 : e3.set(i3, [f2 + this._lineIndexCount, h2]);
    }
    this._lineIndexCount += h2;
  }
  _getDashArrayKey(e2, t2, i3, s3, n2, r5, l3) {
    const a2 = n2 ? r5.getValue(t2, e2) : l3, o3 = s3.getValue(t2, e2);
    return i3.getDashKey(o3, a2);
  }
}
const r4 = (e2) => (t2, i3, s3, n2, r5, l3, a2, o3, u3, f2, h2) => (e2._lineVertexBuffer.add(t2, i3, a2, o3, s3, n2, r5, l3, u3, f2, h2, e2._ddValues), e2._lineVertexBuffer.index - 1), l2 = (e2) => (t2, i3, s3) => {
  e2._lineIndexBuffer.add(t2, i3, s3);
};
const b2 = 10;
function A(e2, t2) {
  return e2.iconMosaicItem && t2.iconMosaicItem ? e2.iconMosaicItem.page === t2.iconMosaicItem.page ? 0 : e2.iconMosaicItem.page - t2.iconMosaicItem.page : e2.iconMosaicItem && !t2.iconMosaicItem ? 1 : !e2.iconMosaicItem && t2.iconMosaicItem ? -1 : 0;
}
class L extends t {
  constructor(e2, t2, n2, i3, s3, o3, r5, l3, h2) {
    super(t2, n2, h2.getSpriteItems()), this.type = E.SYMBOL, this._markerMap = /* @__PURE__ */ new Map(), this._glyphMap = /* @__PURE__ */ new Map(), this._glyphBufferDataStorage = /* @__PURE__ */ new Map(), this._isIconSDF = false, this._sourceTileKey = e2, this._iconVertexBuffer = i3, this._iconIndexBuffer = s3, this._textVertexBuffer = o3, this._textIndexBuffer = r5, this._placementEngine = l3, this._workerTileHandler = h2;
  }
  get markerPageMap() {
    return this._markerMap;
  }
  get glyphsPageMap() {
    return this._glyphMap;
  }
  get symbolInstances() {
    return this._symbolInstances;
  }
  getResources(e2, t2, i3) {
    const s3 = this.layer, a2 = this.zoom;
    e2 && e2.setExtent(this.layerExtent);
    const o3 = s3.getLayoutProperty("icon-image"), r5 = s3.getLayoutProperty("text-field");
    let l3 = s3.getLayoutProperty("text-transform"), h2 = s3.getLayoutProperty("text-font");
    const x2 = [];
    let c2, d, f2, g2;
    o3 && !o3.isDataDriven && (c2 = o3.getValue(a2)), r5 && !r5.isDataDriven && (d = r5.getValue(a2)), l3 && l3.isDataDriven || (f2 = s3.getLayoutValue("text-transform", a2), l3 = null), h2 && h2.isDataDriven || (g2 = s3.getLayoutValue("text-font", a2), h2 = null);
    for (const m2 of this._features) {
      const u3 = m2.getGeometry(e2);
      if (!u3 || 0 === u3.length)
        continue;
      let p2, _2;
      o3 && (p2 = o3.isDataDriven ? o3.getValue(a2, m2) : this._replaceKeys(c2, m2.values), p2 && t2(p2));
      let M = false;
      if (r5 && (_2 = r5.isDataDriven ? r5.getValue(a2, m2) : this._replaceKeys(d, m2.values), _2)) {
        switch (_2 = _2.replaceAll("\\n", "\n"), l3 && (f2 = l3.getValue(a2, m2)), f2) {
          case o$4.LOWERCASE:
            _2 = _2.toLowerCase();
            break;
          case o$4.UPPERCASE:
            _2 = _2.toUpperCase();
        }
        if (L._bidiEngine.hasBidiChar(_2)) {
          let e3;
          e3 = "rtl" === L._bidiEngine.checkContextual(_2) ? "IDNNN" : "ICNNN", _2 = L._bidiEngine.bidiTransform(_2, e3, "VLYSN"), M = true;
        }
        if (_2.length > 0) {
          h2 && (g2 = h2.getValue(a2, m2));
          for (const e3 of g2) {
            let t3 = i3[e3];
            t3 || (t3 = i3[e3] = /* @__PURE__ */ new Set());
            for (const e4 of _2) {
              const n2 = e4.codePointAt(0);
              null != n2 && t3.add(n2);
            }
          }
        }
      }
      if (!p2 && !_2)
        continue;
      const P = s3.getLayoutValue("symbol-sort-key", a2, m2), I3 = { feature: m2, sprite: p2, label: _2, rtl: M, geometry: u3, hash: (_2 ? c$3(_2) : 0) ^ (p2 ? c$3(p2) : 0), priority: P, textFont: g2 };
      x2.push(I3);
    }
    this._symbolFeatures = x2;
  }
  processFeatures(e2) {
    e2 && e2.setExtent(this.layerExtent);
    const n2 = this.layer, s3 = this.zoom, a2 = n2.getLayoutValue("symbol-placement", s3), r5 = a2 !== n$1.POINT, l3 = n2.getLayoutValue("symbol-spacing", s3) * p, g2 = n2.getLayoutProperty("icon-image"), y$1 = n2.getLayoutProperty("text-field"), b3 = g2 ? new U(n2, s3, r5) : null, T2 = y$1 ? new O(n2, s3, r5) : null, V = this._workerTileHandler;
    let w2;
    g2 && (w2 = V.getSpriteItems()), this._iconIndexStart = 3 * this._iconIndexBuffer.index, this._textIndexStart = 3 * this._textIndexBuffer.index, this._iconIndexCount = 0, this._textIndexCount = 0, this._markerMap.clear(), this._glyphMap.clear();
    const B = [];
    let C2 = 1;
    T2 && T2.size && (C2 = T2.size / c);
    const R = T2 ? T2.maxAngle * s$3 : 0, D = T2 ? T2.size * p : 0;
    for (const o3 of this._symbolFeatures) {
      let e3;
      b3 && w2 && o3.sprite && (e3 = w2[o3.sprite], e3 && e3.sdf && (this._isIconSDF = true));
      let n3;
      !!e3 && b3.update(s3, o3.feature);
      let g3 = 0;
      const y$12 = o3.label;
      if (y$12) {
        n$2(T2), T2.update(s3, o3.feature);
        const e4 = r5 && T2.rotationAlignment === l$2.MAP ? T2.keepUpright : T2.writingMode && T2.writingMode.includes(p$1.VERTICAL);
        let i3 = 0.5;
        switch (T2.anchor) {
          case m.TOP_LEFT:
          case m.LEFT:
          case m.BOTTOM_LEFT:
            i3 = 0;
            break;
          case m.TOP_RIGHT:
          case m.RIGHT:
          case m.BOTTOM_RIGHT:
            i3 = 1;
        }
        let a3 = 0.5;
        switch (T2.anchor) {
          case m.TOP_LEFT:
          case m.TOP:
          case m.TOP_RIGHT:
            a3 = 0;
            break;
          case m.BOTTOM_LEFT:
          case m.BOTTOM:
          case m.BOTTOM_RIGHT:
            a3 = 1;
        }
        let l4 = 0.5;
        switch (T2.justify) {
          case u$2.AUTO:
            l4 = i3;
            break;
          case u$2.LEFT:
            l4 = 0;
            break;
          case u$2.RIGHT:
            l4 = 1;
        }
        const x2 = T2.letterSpacing * c, c$12 = r5 ? 0 : T2.maxWidth * c, m$1 = T2.lineHeight * c, P = o3.textFont.map((e5) => V.getGlyphItems(e5));
        if (n3 = new l$1(P, c$12, m$1, x2, i3, a3, l4).getShaping(y$12, o3.rtl, e4), n3 && n3.length > 0) {
          let e5 = 1e30, t2 = -1e30;
          for (const i4 of n3)
            e5 = Math.min(e5, i4.x), t2 = Math.max(t2, i4.x);
          g3 = (t2 - e5 + 2 * c) * C2 * p;
        }
      }
      for (let t2 of o3.geometry) {
        const s4 = [];
        if (a2 === n$1.LINE) {
          if (n3?.length && T2?.size) {
            const e4 = T2.size * p * (2 + Math.min(2, 4 * Math.abs(T2.offset[1])));
            t2 = L._smoothVertices(t2, e4);
          }
          L._pushAnchors(s4, t2, l3, g3);
        } else
          a2 === n$1.LINE_CENTER ? L._pushCenterAnchor(s4, t2) : o3.feature.type === i$3.Polygon ? L._pushCentroid(s4, t2) : s4.push(new y(t2[0].x, t2[0].y));
        for (const i3 of s4) {
          if (i3.x < 0 || i3.x > x || i3.y < 0 || i3.y > x)
            continue;
          if (r5 && g3 > 0 && T2?.rotationAlignment === l$2.MAP && !L._honorsTextMaxAngle(t2, i3, g3, R, D))
            continue;
          const s5 = { shaping: n3, line: t2, iconMosaicItem: e3, anchor: i3, symbolFeature: o3, textColliders: [], iconColliders: [], textVertexRanges: [], iconVertexRanges: [] };
          B.push(s5), this._processFeature(s5, b3, T2);
        }
      }
    }
    B.sort(A), this._addPlacedGlyphs(), this._symbolInstances = B;
  }
  serialize() {
    let e2 = 14;
    e2 += this.layerUIDs.length, e2 += 3 * this.markerPageMap.size, e2 += 3 * this.glyphsPageMap.size, e2 += L._symbolsSerializationLength(this._symbolInstances), e2 += this._iconVertexBuffer.array.length, e2 += this._iconIndexBuffer.array.length, e2 += this._textVertexBuffer.array.length, e2 += this._textIndexBuffer.array.length;
    const t2 = new Uint32Array(e2), n2 = new Int32Array(t2.buffer), i3 = new Float32Array(t2.buffer), [s3, a2, o3] = this._sourceTileKey.split("/");
    let r5 = 0;
    t2[r5++] = this.type, t2[r5++] = this.layerUIDs.length;
    for (let l3 = 0; l3 < this.layerUIDs.length; l3++)
      t2[r5++] = this.layerUIDs[l3];
    t2[r5++] = this._isIconSDF ? 1 : 0, t2[r5++] = parseFloat(s3), t2[r5++] = parseFloat(a2), t2[r5++] = parseFloat(o3), t2[r5++] = this.markerPageMap.size;
    for (const [l3, [h2, x2]] of this.markerPageMap)
      t2[r5++] = l3, t2[r5++] = h2, t2[r5++] = x2;
    t2[r5++] = this.glyphsPageMap.size;
    for (const [l3, [h2, x2]] of this.glyphsPageMap)
      t2[r5++] = l3, t2[r5++] = h2, t2[r5++] = x2;
    t2[r5++] = this._iconVertexBuffer.index / 4, t2[r5++] = this._textVertexBuffer.index / 4, r5 = L.serializeSymbols(t2, n2, i3, r5, this._symbolInstances), t2[r5++] = this._iconVertexBuffer.array.length;
    for (let l3 = 0; l3 < this._iconVertexBuffer.array.length; l3++)
      n2[r5++] = this._iconVertexBuffer.array[l3];
    t2[r5++] = this._iconIndexBuffer.array.length;
    for (let l3 = 0; l3 < this._iconIndexBuffer.array.length; l3++)
      t2[r5++] = this._iconIndexBuffer.array[l3];
    t2[r5++] = this._textVertexBuffer.array.length;
    for (let l3 = 0; l3 < this._textVertexBuffer.array.length; l3++)
      n2[r5++] = this._textVertexBuffer.array[l3];
    t2[r5++] = this._textIndexBuffer.array.length;
    for (let l3 = 0; l3 < this._textIndexBuffer.array.length; l3++)
      t2[r5++] = this._textIndexBuffer.array[l3];
    return t2.buffer;
  }
  static _symbolsSerializationLength(e2) {
    let t2 = 0;
    t2 += 1;
    for (const n2 of e2 || []) {
      t2 += 5, t2 += 1;
      for (const e3 of n2.textColliders)
        t2 += b2;
      for (const e3 of n2.iconColliders)
        t2 += b2;
      t2 += 1, t2 += 2 * n2.textVertexRanges.length, t2 += 1, t2 += 2 * n2.iconVertexRanges.length;
    }
    return t2;
  }
  static serializeSymbols(e2, t2, n2, i3, s3) {
    s3 = s3 || [], t2[i3++] = s3.length;
    for (const a2 of s3) {
      t2[i3++] = a2.anchor.x, t2[i3++] = a2.anchor.y, t2[i3++] = a2.symbolFeature.hash, t2[i3++] = a2.symbolFeature.priority, t2[i3++] = a2.symbolFeature.feature.featureIndex, t2[i3++] = a2.textColliders.length + a2.iconColliders.length;
      for (const e3 of a2.textColliders)
        t2[i3++] = e3.xTile, t2[i3++] = e3.yTile, t2[i3++] = e3.dxPixels, t2[i3++] = e3.dyPixels, t2[i3++] = e3.hard ? 1 : 0, t2[i3++] = e3.partIndex, n2[i3++] = e3.minLod, n2[i3++] = e3.maxLod, t2[i3++] = e3.width, t2[i3++] = e3.height;
      for (const e3 of a2.iconColliders)
        t2[i3++] = e3.xTile, t2[i3++] = e3.yTile, t2[i3++] = e3.dxPixels, t2[i3++] = e3.dyPixels, t2[i3++] = e3.hard ? 1 : 0, t2[i3++] = e3.partIndex, n2[i3++] = e3.minLod, n2[i3++] = e3.maxLod, t2[i3++] = e3.width, t2[i3++] = e3.height;
      t2[i3++] = a2.textVertexRanges.length;
      for (const [e3, n3] of a2.textVertexRanges)
        t2[i3++] = e3, t2[i3++] = n3;
      t2[i3++] = a2.iconVertexRanges.length;
      for (const [e3, n3] of a2.iconVertexRanges)
        t2[i3++] = e3, t2[i3++] = n3;
    }
    return i3;
  }
  _replaceKeys(e2, t2) {
    return e2.replaceAll(/{([^{}]+)}/g, (e3, n2) => n2 in t2 ? t2[n2] : "");
  }
  _processFeature(e2, t2, n2) {
    const { line: i3, iconMosaicItem: s3, shaping: a2, anchor: o3 } = e2, l3 = this.zoom, h2 = this.layer, x2 = !!s3;
    let c2 = true;
    x2 && (c2 = t2?.optional || !s3);
    const d = a2 && a2.length > 0, f2 = !d || n2?.optional;
    let g2, y2;
    if (x2 && (g2 = this._placementEngine.getIconPlacement(o3, s3, t2)), (g2 || c2) && (d && (y2 = this._placementEngine.getTextPlacement(o3, a2, i3, n2)), y2 || f2)) {
      if (g2 && y2 || (f2 || c2 ? f2 || y2 ? c2 || g2 || (y2 = null) : g2 = null : (g2 = null, y2 = null)), y2) {
        const t3 = h2.hasDataDrivenText ? h2.textMaterial.encodeAttributes(e2.symbolFeature.feature, l3, h2) : null;
        if (this._storePlacedGlyphs(e2, y2.shapes, l3, n2.rotationAlignment, t3), y2.textColliders) {
          e2.textColliders = y2.textColliders;
          for (const e3 of y2.textColliders) {
            e3.minLod = Math.max(l3 + h$3(e3.minLod), 0), e3.maxLod = Math.min(l3 + h$3(e3.maxLod), 25);
            const t4 = e3.angle;
            if (t4) {
              const n3 = Math.cos(t4), i4 = Math.sin(t4), s4 = e3.dxPixels * n3 - e3.dyPixels * i4, a3 = e3.dxPixels * i4 + e3.dyPixels * n3, o4 = (e3.dxPixels + e3.width) * n3 - e3.dyPixels * i4, r5 = (e3.dxPixels + e3.width) * i4 + e3.dyPixels * n3, l4 = e3.dxPixels * n3 - (e3.dyPixels + e3.height) * i4, h3 = e3.dxPixels * i4 + (e3.dyPixels + e3.height) * n3, x3 = (e3.dxPixels + e3.width) * n3 - (e3.dyPixels + e3.height) * i4, c3 = (e3.dxPixels + e3.width) * i4 + (e3.dyPixels + e3.height) * n3, d2 = Math.min(s4, o4, l4, x3), f3 = Math.max(s4, o4, l4, x3), g3 = Math.min(a3, r5, h3, c3), y3 = Math.max(a3, r5, h3, c3);
              e3.dxPixels = d2, e3.dyPixels = g3, e3.width = f3 - d2, e3.height = y3 - g3;
            }
          }
        }
      }
      if (g2) {
        const n3 = h2.hasDataDrivenIcon ? h2.iconMaterial.encodeAttributes(e2.symbolFeature.feature, l3, h2) : null;
        if (this._addPlacedIcons(e2, g2.shapes, l3, s3.page, t2.rotationAlignment === l$2.VIEWPORT, n3), g2.iconColliders) {
          e2.iconColliders = g2.iconColliders;
          for (const e3 of g2.iconColliders) {
            e3.minLod = Math.max(l3 + h$3(e3.minLod), 0), e3.maxLod = Math.min(l3 + h$3(e3.maxLod), 25);
            const t3 = e3.angle;
            if (t3) {
              const n4 = Math.cos(t3), i4 = Math.sin(t3), s4 = e3.dxPixels * n4 - e3.dyPixels * i4, a3 = e3.dxPixels * i4 + e3.dyPixels * n4, o4 = (e3.dxPixels + e3.width) * n4 - e3.dyPixels * i4, r5 = (e3.dxPixels + e3.width) * i4 + e3.dyPixels * n4, l4 = e3.dxPixels * n4 - (e3.dyPixels + e3.height) * i4, h3 = e3.dxPixels * i4 + (e3.dyPixels + e3.height) * n4, x3 = (e3.dxPixels + e3.width) * n4 - (e3.dyPixels + e3.height) * i4, c3 = (e3.dxPixels + e3.width) * i4 + (e3.dyPixels + e3.height) * n4, d2 = Math.min(s4, o4, l4, x3), f3 = Math.max(s4, o4, l4, x3), g3 = Math.min(a3, r5, h3, c3), y3 = Math.max(a3, r5, h3, c3);
              e3.dxPixels = d2, e3.dyPixels = g3, e3.width = f3 - d2, e3.height = y3 - g3;
            }
          }
        }
      }
    }
  }
  _addPlacedIcons(e2, t2, n2, i3, s3, a2) {
    const o3 = Math.max(n2 - 1, 0), l3 = this._iconVertexBuffer, h2 = this._iconIndexBuffer, x2 = this._markerMap;
    for (const c2 of t2) {
      const t3 = s3 ? 0 : Math.max(n2 + h$3(c2.minzoom), o3), d = s3 ? 25 : Math.min(n2 + h$3(c2.maxzoom), 25);
      if (d <= t3)
        continue;
      const f2 = c2.tl, g2 = c2.tr, y2 = c2.bl, m2 = c2.br, u3 = c2.mosaicRect, p2 = c2.labelAngle, _2 = c2.minAngle, M = c2.maxAngle, P = c2.anchor, I3 = l3.index, b3 = u3.x, A2 = u3.y, L2 = b3 + u3.width, T2 = A2 + u3.height, V = l3.index;
      l3.add(P.x, P.y, f2.x, f2.y, b3, A2, p2, _2, M, t3, d, a2), l3.add(P.x, P.y, g2.x, g2.y, L2, A2, p2, _2, M, t3, d, a2), l3.add(P.x, P.y, y2.x, y2.y, b3, T2, p2, _2, M, t3, d, a2), l3.add(P.x, P.y, m2.x, m2.y, L2, T2, p2, _2, M, t3, d, a2), e2.iconVertexRanges.length > 0 && e2.iconVertexRanges[0][0] + e2.iconVertexRanges[0][1] === V ? e2.iconVertexRanges[0][1] += 4 : e2.iconVertexRanges.push([V, 4]), h2.add(I3, I3 + 1, I3 + 2), h2.add(I3 + 1, I3 + 2, I3 + 3), x2.has(i3) ? x2.get(i3)[1] += 6 : x2.set(i3, [this._iconIndexStart + this._iconIndexCount, 6]), this._iconIndexCount += 6;
    }
  }
  _addPlacedGlyphs() {
    const e2 = this._textVertexBuffer, t2 = this._textIndexBuffer, n2 = this._glyphMap;
    for (const [i3, s3] of this._glyphBufferDataStorage)
      for (const a2 of s3) {
        const s4 = e2.index, o3 = a2.symbolInstance, r5 = a2.ddAttributes, l3 = e2.index;
        e2.add(a2.glyphAnchor[0], a2.glyphAnchor[1], a2.tl[0], a2.tl[1], a2.xmin, a2.ymin, a2.labelAngle, a2.minAngle, a2.maxAngle, a2.minLod, a2.maxLod, r5), e2.add(a2.glyphAnchor[0], a2.glyphAnchor[1], a2.tr[0], a2.tr[1], a2.xmax, a2.ymin, a2.labelAngle, a2.minAngle, a2.maxAngle, a2.minLod, a2.maxLod, r5), e2.add(a2.glyphAnchor[0], a2.glyphAnchor[1], a2.bl[0], a2.bl[1], a2.xmin, a2.ymax, a2.labelAngle, a2.minAngle, a2.maxAngle, a2.minLod, a2.maxLod, r5), e2.add(a2.glyphAnchor[0], a2.glyphAnchor[1], a2.br[0], a2.br[1], a2.xmax, a2.ymax, a2.labelAngle, a2.minAngle, a2.maxAngle, a2.minLod, a2.maxLod, r5), o3.textVertexRanges.length > 0 && o3.textVertexRanges[0][0] + o3.textVertexRanges[0][1] === l3 ? o3.textVertexRanges[0][1] += 4 : o3.textVertexRanges.push([l3, 4]), t2.add(s4, s4 + 1, s4 + 2), t2.add(s4 + 1, s4 + 2, s4 + 3), n2.has(i3) ? n2.get(i3)[1] += 6 : n2.set(i3, [this._textIndexStart + this._textIndexCount, 6]), this._textIndexCount += 6;
      }
    this._glyphBufferDataStorage.clear();
  }
  _storePlacedGlyphs(e2, t2, n2, i3, s3) {
    const a2 = Math.max(n2 - 1, 0), o3 = i3 === l$2.VIEWPORT;
    let l3, h2, x2, c2, d, f2, g2, y2, m2, p2, _2;
    for (const u3 of t2) {
      if (l3 = o3 ? 0 : Math.max(n2 + h$3(u3.minzoom), a2), h2 = o3 ? 25 : Math.min(n2 + h$3(u3.maxzoom), 25), h2 <= l3)
        continue;
      x2 = u3.tl, c2 = u3.tr, d = u3.bl, f2 = u3.br, g2 = u3.labelAngle, y2 = u3.minAngle, m2 = u3.maxAngle, p2 = u3.anchor, _2 = u3.mosaicRect, this._glyphBufferDataStorage.has(u3.page) || this._glyphBufferDataStorage.set(u3.page, []);
      this._glyphBufferDataStorage.get(u3.page).push({ glyphAnchor: [p2.x, p2.y], tl: [x2.x, x2.y], tr: [c2.x, c2.y], bl: [d.x, d.y], br: [f2.x, f2.y], xmin: _2.x, ymin: _2.y, xmax: _2.x + _2.width, ymax: _2.y + _2.height, labelAngle: g2, minAngle: y2, maxAngle: m2, minLod: l3, maxLod: h2, placementLod: a2, symbolInstance: e2, ddAttributes: s3 });
    }
  }
  static _pushAnchors(e2, t2, n2, i3) {
    n2 += i3;
    let a2 = 0;
    const o3 = t2.length - 1;
    for (let l3 = 0; l3 < o3; l3++)
      a2 += h$2.distance(t2[l3], t2[l3 + 1]);
    let r5 = i3 || n2;
    if (r5 *= 0.5, a2 <= r5)
      return;
    const h2 = r5 / a2;
    let c2 = 0, d = -(n2 = a2 / Math.max(Math.round(a2 / n2), 1)) / 2;
    const f2 = t2.length - 1;
    for (let s3 = 0; s3 < f2; s3++) {
      const i4 = t2[s3], a3 = t2[s3 + 1], o4 = a3.x - i4.x, r6 = a3.y - i4.y, f3 = Math.sqrt(o4 * o4 + r6 * r6);
      let g2;
      for (; d + n2 < c2 + f3; ) {
        d += n2;
        const t3 = (d - c2) / f3, y$1 = p$2(i4.x, a3.x, t3), m2 = p$2(i4.y, a3.y, t3);
        void 0 === g2 && (g2 = Math.atan2(r6, o4)), e2.push(new y(y$1, m2, g2, s3, h2));
      }
      c2 += f3;
    }
  }
  static _pushCenterAnchor(e2, t2) {
    let n2 = 0;
    const i3 = t2.length - 1;
    for (let l3 = 0; l3 < i3; l3++)
      n2 += h$2.distance(t2[l3], t2[l3 + 1]);
    const a2 = n2 / 2;
    let o3 = 0;
    const r5 = t2.length - 1;
    for (let s3 = 0; s3 < r5; s3++) {
      const n3 = t2[s3], i4 = t2[s3 + 1], r6 = i4.x - n3.x, h2 = i4.y - n3.y, c2 = Math.sqrt(r6 * r6 + h2 * h2);
      if (a2 < o3 + c2) {
        const t3 = (a2 - o3) / c2, d = p$2(n3.x, i4.x, t3), f2 = p$2(n3.y, i4.y, t3), g2 = Math.atan2(h2, r6);
        return void e2.push(new y(d, f2, g2, s3, 0));
      }
      o3 += c2;
    }
  }
  static _deviation(e2, t2, n2) {
    const i3 = (t2.x - e2.x) * (n2.x - t2.x) + (t2.y - e2.y) * (n2.y - t2.y), s3 = (t2.x - e2.x) * (n2.y - t2.y) - (t2.y - e2.y) * (n2.x - t2.x);
    return Math.atan2(s3, i3);
  }
  static _honorsTextMaxAngle(e2, t2, n2, i3, a2) {
    let o3 = 0;
    const r5 = n2 / 2;
    let l3 = new h$2(t2.x, t2.y), h2 = t2.segment + 1;
    for (; o3 > -r5; ) {
      if (--h2, h2 < 0)
        return false;
      o3 -= h$2.distance(e2[h2], l3), l3 = e2[h2];
    }
    o3 += h$2.distance(e2[h2], e2[h2 + 1]);
    const x2 = [];
    let c2 = 0;
    const d = e2.length;
    for (; o3 < r5; ) {
      const t3 = e2[h2];
      let n3, r6 = h2;
      do {
        if (++r6, r6 === d)
          return false;
        n3 = e2[r6];
      } while (n3.isEqual(t3));
      let l4, f2 = r6;
      do {
        if (++f2, f2 === d)
          return false;
        l4 = e2[f2];
      } while (l4.isEqual(n3));
      const g2 = this._deviation(t3, n3, l4);
      for (x2.push({ deviation: g2, distToAnchor: o3 }), c2 += g2; o3 - x2[0].distToAnchor > a2; )
        c2 -= x2.shift().deviation;
      if (Math.abs(c2) > i3)
        return false;
      o3 += h$2.distance(n3, l4), h2 = r6;
    }
    return true;
  }
  static _smoothVertices(e2, t2) {
    if (t2 <= 0)
      return e2;
    let n2 = e2.length;
    if (n2 < 3)
      return e2;
    const i3 = [];
    let a2 = 0, o3 = 0;
    i3.push(0);
    for (let y2 = 1; y2 < n2; y2++) {
      const t3 = h$2.distance(e2[y2], e2[y2 - 1]);
      t3 > 0 && (a2 += t3, i3.push(a2), o3++, o3 !== y2 && (e2[o3] = e2[y2]));
    }
    if (n2 = o3 + 1, n2 < 3)
      return e2;
    t2 = Math.min(t2, 0.2 * a2);
    const r5 = e2[0].x, l3 = e2[0].y, h2 = e2[n2 - 1].x, x2 = e2[n2 - 1].y, c2 = h$2.sub(e2[0], e2[1]);
    c2.normalize(), e2[0].x += t2 * c2.x, e2[0].y += t2 * c2.y, c2.assignSub(e2[n2 - 1], e2[n2 - 2]), c2.normalize(), e2[n2 - 1].x += t2 * c2.x, e2[n2 - 1].y += t2 * c2.y, i3[0] -= t2, i3[n2 - 1] += t2;
    const d = [];
    d.push(new h$2(r5, l3));
    const f2 = 1e-6, g2 = 0.5 * t2;
    for (let y2 = 1; y2 < n2 - 1; y2++) {
      let a3 = 0, o4 = 0, r6 = 0;
      for (let n3 = y2 - 1; n3 >= 0; n3--) {
        const s3 = g2 + i3[n3 + 1] - i3[y2];
        if (s3 < 0)
          break;
        const l4 = i3[n3 + 1] - i3[n3], h3 = i3[y2] - i3[n3] < g2 ? 1 : s3 / l4;
        if (h3 < f2)
          break;
        const x3 = h3 * h3, c3 = h3 * s3 - 0.5 * x3 * l4, d2 = h3 * l4 / t2, m2 = e2[n3 + 1], u3 = e2[n3].x - m2.x, p2 = e2[n3].y - m2.y;
        a3 += d2 / c3 * (m2.x * h3 * s3 + 0.5 * x3 * (s3 * u3 - l4 * m2.x) - x3 * h3 * l4 * u3 / 3), o4 += d2 / c3 * (m2.y * h3 * s3 + 0.5 * x3 * (s3 * p2 - l4 * m2.y) - x3 * h3 * l4 * p2 / 3), r6 += d2;
      }
      for (let s3 = y2 + 1; s3 < n2; s3++) {
        const n3 = g2 - i3[s3 - 1] + i3[y2];
        if (n3 < 0)
          break;
        const l4 = i3[s3] - i3[s3 - 1], h3 = i3[s3] - i3[y2] < g2 ? 1 : n3 / l4;
        if (h3 < f2)
          break;
        const x3 = h3 * h3, c3 = h3 * n3 - 0.5 * x3 * l4, d2 = h3 * l4 / t2, m2 = e2[s3 - 1], u3 = e2[s3].x - m2.x, p2 = e2[s3].y - m2.y;
        a3 += d2 / c3 * (m2.x * h3 * n3 + 0.5 * x3 * (n3 * u3 - l4 * m2.x) - x3 * h3 * l4 * u3 / 3), o4 += d2 / c3 * (m2.y * h3 * n3 + 0.5 * x3 * (n3 * p2 - l4 * m2.y) - x3 * h3 * l4 * p2 / 3), r6 += d2;
      }
      d.push(new h$2(a3 / r6, o4 / r6));
    }
    return d.push(new h$2(h2, x2)), e2[0].x = r5, e2[0].y = l3, e2[n2 - 1].x = h2, e2[n2 - 1].y = x2, d;
  }
  static _pushCentroid(e2, t2) {
    const n2 = 0, i3 = 0, s3 = 4096, a2 = 4096, o3 = t2.length - 1;
    let r5 = 0, l3 = 0, h2 = 0, c2 = t2[0].x, d = t2[0].y;
    c2 > s3 && (c2 = s3), c2 < n2 && (c2 = n2), d > a2 && (d = a2), d < i3 && (d = i3);
    for (let x2 = 1; x2 < o3; x2++) {
      let e3 = t2[x2].x, o4 = t2[x2].y, f2 = t2[x2 + 1].x, g2 = t2[x2 + 1].y;
      e3 > s3 && (e3 = s3), e3 < n2 && (e3 = n2), o4 > a2 && (o4 = a2), o4 < i3 && (o4 = i3), f2 > s3 && (f2 = s3), f2 < n2 && (f2 = n2), g2 > a2 && (g2 = a2), g2 < i3 && (g2 = i3);
      const y2 = (e3 - c2) * (g2 - d) - (f2 - c2) * (o4 - d);
      r5 += y2 * (c2 + e3 + f2), l3 += y2 * (d + o4 + g2), h2 += y2;
    }
    r5 /= 3 * h2, l3 /= 3 * h2, isNaN(r5) || isNaN(l3) || e2.push(new y(r5, l3));
  }
}
L._bidiEngine = new C();
var I2;
!function(I3) {
  I3[I3.INITIALIZED = 0] = "INITIALIZED", I3[I3.NO_DATA = 1] = "NO_DATA", I3[I3.READY = 2] = "READY", I3[I3.MODIFIED = 3] = "MODIFIED", I3[I3.INVALID = 4] = "INVALID";
}(I2 || (I2 = {}));
class g {
  constructor(t2, r5, o3, n2, l3, a2) {
    if (this._pbfTiles = {}, this._tileClippers = {}, this._client = o3, this._tile = r5, this._sourceDataMaxLOD = n2, a2) {
      this._styleLayerUIDs = /* @__PURE__ */ new Set();
      for (const e2 of a2)
        this._styleLayerUIDs.add(e2);
    }
    this._styleRepository = l3, this._layers = this._styleRepository?.layers ?? [];
    const [u3, f2, p2] = r5.tileKey.split("/").map(parseFloat);
    this._level = u3;
    const h2 = d$1(this._level);
    for (const c2 of Object.keys(t2)) {
      const r6 = t2[c2];
      this._pbfTiles[c2] = new n$3(new Uint8Array(r6.protobuff), new DataView(r6.protobuff));
      if (r6.refKey) {
        const [e2] = r6.refKey.split("/").map(parseFloat), t3 = u3 - e2;
        if (t3 > 0) {
          const e3 = (1 << t3) - 1, r7 = f2 & e3, i3 = p2 & e3;
          this._tileClippers[c2] = new e$2(t3, r7, i3, 8, h2);
        }
      }
      this._tileClippers[c2] || (this._tileClippers[c2] = new _());
    }
  }
  _canParseStyleLayer(e2) {
    return !this._styleLayerUIDs || this._styleLayerUIDs.has(e2);
  }
  async parse(e2) {
    const t2 = i$4(), s3 = this._initialize(e2), { returnedBuckets: i3 } = s3;
    this._processLayers(s3), this._linkReferences(s3), this._filterFeatures(s3);
    const o3 = [], c2 = /* @__PURE__ */ new Set(), n2 = (e3, t3) => {
      c2.has(e3) || (o3.push({ name: e3, repeat: t3 }), c2.add(e3));
    }, l3 = {};
    for (const r5 of i3)
      r5.getResources(r5.tileClipper, n2, l3);
    if (this._tile.status === I2.INVALID)
      return [];
    const a2 = this._fetchResources(o3, l3, e2);
    return Promise.all([...a2, t2]).then(() => this._processFeatures(s3.returnedBuckets));
  }
  _initialize(e2) {
    const t2 = e2?.signal;
    return { signal: t2, sourceNameToTileData: this._parseTileData(this._pbfTiles), layers: this._layers, zoom: this._level, sourceNameToTileClipper: this._tileClippers, sourceNameToUniqueSourceLayerBuckets: {}, sourceNameToUniqueSourceLayers: {}, returnedBuckets: [], layerIdToBucket: {}, referencerUIDToReferencedId: /* @__PURE__ */ new Map() };
  }
  _processLayers(e2) {
    const { sourceNameToTileData: t2, zoom: r5, layers: s3, sourceNameToTileClipper: i3, sourceNameToUniqueSourceLayerBuckets: o3, sourceNameToUniqueSourceLayers: c2, returnedBuckets: n2, layerIdToBucket: l3, referencerUIDToReferencedId: a2 } = e2, u3 = this._sourceDataMaxLOD;
    for (let f2 = s3.length - 1; f2 >= 0; f2--) {
      const e3 = s3[f2];
      if (r5 < u3) {
        if (e3.minzoom && r5 < Math.floor(e3.minzoom) || e3.maxzoom && r5 >= e3.maxzoom)
          continue;
      } else if (e3.maxzoom && r5 >= e3.maxzoom)
        continue;
      if (e3.type === a$4.BACKGROUND || !this._canParseStyleLayer(e3.uid) || !t2[e3.source] || !i3[e3.source])
        continue;
      const p2 = t2[e3.source], h2 = i3[e3.source], m2 = e3.sourceLayer, _2 = p2[m2];
      if (_2) {
        let t3 = c2[e3.source];
        if (t3 || (t3 = c2[e3.source] = /* @__PURE__ */ new Set()), t3.add(e3.sourceLayer), e3.refLayerId)
          a2.set(e3.uid, e3.refLayerId);
        else {
          const t4 = this._createBucket(e3);
          if (t4) {
            t4.layerUIDs = [e3.uid], t4.layerExtent = _2.extent, t4.tileClipper = h2;
            let r6 = o3[e3.source];
            r6 || (r6 = o3[e3.source] = {});
            let s4 = r6[m2];
            s4 || (s4 = r6[m2] = []), s4.push(t4), n2.push(t4), l3[e3.id] = t4;
          }
        }
      }
    }
  }
  _linkReferences(e2) {
    const { layerIdToBucket: t2, referencerUIDToReferencedId: r5 } = e2;
    r5.forEach((e3, r6) => {
      t2[e3] && t2[e3].layerUIDs.push(r6);
    });
  }
  _filterFeatures(e2) {
    const { signal: r5, sourceNameToTileData: s3, sourceNameToUniqueSourceLayerBuckets: i3, sourceNameToUniqueSourceLayers: c2 } = e2, n2 = 10 * this._level, l3 = 10 * (this._level + 1), a2 = [], u3 = [];
    for (const t2 of Object.keys(c2)) {
      c2[t2].forEach((e3) => {
        a2.push(e3), u3.push(t2);
      });
    }
    for (let f2 = 0; f2 < a2.length; f2++) {
      const e3 = u3[f2], c3 = a2[f2];
      if (!s3[e3] || !i3[e3])
        continue;
      const p2 = s3[e3][c3], h2 = i3[e3][c3];
      if (!h2 || 0 === h2.length)
        continue;
      if (c$4(r5))
        return;
      let m2 = 0;
      const _2 = p2.getData();
      for (; _2.nextTag(2); ) {
        const e4 = _2.getMessage(), t2 = new s$4(e4, p2, m2++);
        e4.release();
        const r6 = t2.values;
        if (r6) {
          const e5 = r6._minzoom;
          if (e5 && e5 >= l3)
            continue;
          const t3 = r6._maxzoom;
          if (t3 && t3 <= n2)
            continue;
        }
        for (const s4 of h2)
          s4.pushFeature(t2);
      }
    }
  }
  _fetchResources(e2, t2, r5) {
    const s3 = [], i3 = this._tile.getWorkerTileHandler();
    let o3, c2;
    e2.length > 0 && (o3 = i3.fetchSprites(e2, this._client, r5), s3.push(o3));
    for (const n2 in t2) {
      const e3 = t2[n2];
      e3.size > 0 && (c2 = i3.fetchGlyphs(this._tile.tileKey, n2, e3, this._client, r5), s3.push(c2));
    }
    return s3;
  }
  _processFeatures(e2) {
    const t2 = e2.filter((e3) => e3.hasFeatures() || this._canParseStyleLayer(e3.layer.uid));
    for (const r5 of t2)
      r5.processFeatures(r5.tileClipper);
    return t2;
  }
  _parseTileData(e2) {
    const t2 = {};
    for (const r5 of Object.keys(e2)) {
      const s3 = e2[r5], i3 = {};
      for (; s3.next(); )
        switch (s3.tag()) {
          case 3: {
            const e3 = s3.getMessage(), t3 = new e$3(e3);
            e3.release(), i3[t3.name] = t3;
            break;
          }
          default:
            s3.skip();
        }
      t2[r5] = i3;
    }
    return t2;
  }
  _createBucket(e2) {
    switch (e2.type) {
      case a$4.BACKGROUND:
        return null;
      case a$4.FILL:
        return this._createFillBucket(e2);
      case a$4.LINE:
        return this._createLineBucket(e2);
      case a$4.CIRCLE:
        return this._createCircleBucket(e2);
      case a$4.SYMBOL:
        return this._createSymbolBucket(e2);
    }
  }
  _createFillBucket(e2) {
    return new s$1(e2, this._level, this._tile.getWorkerTileHandler().getSpriteItems(), new r$2(e2.fillMaterial.getStride()), new r$3(), new u2(e2.outlineMaterial.getStride()), new r$3());
  }
  _createLineBucket(e2) {
    return new n(e2, this._level, this._tile.getWorkerTileHandler().getSpriteItems(), new o$1(e2.lineMaterial.getStride()), new r$3());
  }
  _createCircleBucket(e2) {
    return new r$1(e2, this._level, this._tile.getWorkerTileHandler().getSpriteItems(), new a(e2.circleMaterial.getStride()), new r$3());
  }
  _createSymbolBucket(e2) {
    const t2 = this._tile;
    return new L(t2.tileKey, e2, this._level, new h(e2.iconMaterial.getStride()), new r$3(), new h(e2.textMaterial.getStride()), new r$3(), t2.placementEngine, t2.getWorkerTileHandler());
  }
}
let i$1 = class i {
  constructor(t2, s3, i3, a2) {
    this.status = I2.INITIALIZED, this.placementEngine = new b$1(), this.tileKey = t2, this.refKeys = s3, this._workerTileHandler = i3, this._styleRepository = a2;
  }
  release() {
    this.tileKey = "", this.refKeys = null, this.status = I2.INITIALIZED, this._workerTileHandler = null;
  }
  async parse(e2, s3) {
    const i3 = s3?.signal;
    if (null != i3) {
      const t2 = () => {
        i3.removeEventListener("abort", t2), this.status = I2.INVALID;
      };
      i3.addEventListener("abort", t2);
    }
    let a2;
    const n2 = { bucketsWithData: [], emptyBuckets: null };
    try {
      a2 = await this._parse(e2, s3);
    } catch (c2) {
      if (b$2(c2))
        throw c2;
      return { result: n2, transferList: [] };
    }
    this.status = I2.READY;
    const l3 = n2.bucketsWithData, o3 = [];
    for (const t2 of a2)
      if (t2.hasFeatures()) {
        const e3 = t2.serialize();
        l3.push(e3);
      } else
        o3.push(t2.layer.uid);
    const u3 = [...l3];
    let h2 = null;
    return o3.length > 0 && (h2 = Uint32Array.from(o3), u3.push(h2.buffer)), n2.emptyBuckets = h2, { result: n2, transferList: u3 };
  }
  setObsolete() {
    this.status = I2.INVALID;
  }
  getLayers() {
    return this._workerTileHandler.getLayers();
  }
  getWorkerTileHandler() {
    return this._workerTileHandler;
  }
  async _parse(t2, e2) {
    const i3 = t2.sourceName2DataAndRefKey;
    if (0 === Object.keys(i3).length)
      return [];
    this.status = I2.MODIFIED;
    return new g(i3, this, e2.client, t2.sourceDataMaxLOD, this._styleRepository, t2.styleLayerUIDs).parse(e2);
  }
};
const o2 = 25;
class i2 {
  constructor() {
    this._spriteInfo = {}, this._glyphInfo = {}, this._sourceDataMaxLOD = o2;
  }
  reset() {
    return this._spriteInfo = {}, this._glyphInfo = {}, Promise.resolve();
  }
  getLayers() {
    return this._styleRepository?.layers ?? [];
  }
  async createTileAndParse(t2, r5) {
    const { key: o3 } = t2, i3 = {};
    for (const e2 of Object.keys(t2.sourceName2DataAndRefKey)) {
      const s3 = t2.sourceName2DataAndRefKey[e2];
      i3[e2] = s3.refKey;
    }
    const a2 = new i$1(o3, i3, this, this._styleRepository);
    try {
      return await a2.parse({ ...t2, sourceDataMaxLOD: this._sourceDataMaxLOD }, r5);
    } catch (n2) {
      if (a2.setObsolete(), a2.release(), !b$2(n2))
        throw n2;
      return null;
    }
  }
  updateStyle(e2) {
    if (!e2 || 0 === e2.length || !this._styleRepository)
      return;
    const s3 = this._styleRepository;
    for (const r5 of e2) {
      const e3 = r5.type, o3 = r5.data;
      switch (e3) {
        case I$2.PAINTER_CHANGED:
          s3.setPaintProperties(o3.layer, o3.paint);
          break;
        case I$2.LAYOUT_CHANGED:
          s3.setLayoutProperties(o3.layer, o3.layout);
          break;
        case I$2.LAYER_REMOVED:
          s3.deleteStyleLayer(o3.layer);
          break;
        case I$2.LAYER_CHANGED:
          s3.setStyleLayer(o3.layer, o3.index);
          break;
        case I$2.SPRITES_CHANGED:
          this._spriteInfo = {};
      }
    }
  }
  setStyle(e2) {
    const { style: t2, sourceDataMaxLOD: s3 } = e2;
    this._styleRepository = new l$3(t2), this._sourceDataMaxLOD = s3, this._spriteInfo = {}, this._glyphInfo = {};
  }
  fetchSprites(e2, t2, s3) {
    const r5 = [], o3 = this._spriteInfo;
    for (const i3 of e2) {
      void 0 === o3[i3.name] && r5.push(i3);
    }
    return 0 === r5.length ? Promise.resolve() : t2.invoke("getSprites", r5, { signal: s3?.signal }).then((e3) => {
      for (const t3 in e3) {
        const s4 = e3[t3];
        o3[t3] = s4;
      }
    });
  }
  getSpriteItems() {
    return this._spriteInfo;
  }
  fetchGlyphs(e2, t2, s3, r5, o3) {
    const i3 = [];
    let a2 = this._glyphInfo[t2];
    return a2 ? s3.forEach((e3) => {
      a2[e3] || i3.push(e3);
    }) : (a2 = this._glyphInfo[t2] = [], s3.forEach((e3) => i3.push(e3))), 0 === i3.length ? Promise.resolve() : r5.invoke("getGlyphs", { tileID: e2, font: t2, codePoints: i3 }, o3).then((e3) => {
      for (let t3 = 0; t3 < e3.length; t3++)
        e3[t3] && (a2[t3] = e3[t3]);
    });
  }
  getGlyphItems(e2) {
    return this._glyphInfo[e2];
  }
}
export {
  i2 as default
};
