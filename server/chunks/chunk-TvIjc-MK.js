import { tg as l$2, zm as o$2, zn as m, zo as E, zp as t$5, fc as i$2, zq as o$3, n5 as c$3, tf as n$2, b$ as n$3, zr as p$1, zs as u$2, tb as r$6, od as a$2, en as c$4, bI as b$2, of as I$2 } from "./chunk-KFNcxJaF.js";
import { a as h$2, e as e$2, b as t$3, n as n$1, f as f$1, i as i$1, r as r$4, t as t$6, N, h as h$3, c as e$3, _ } from "./chunk-ZLxFSCNp.js";
import { t as t$2 } from "./chunk-Fng9kmUI.js";
import { r as r$5, c as c$2, i as i$3 } from "./chunk-6KbR9szJ.js";
import { t as t$4, T as T$2, m as m$1, l as l$3 } from "./chunk-H8y5q1b_.js";
import { C } from "./chunk-U6xagfDK.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function e$1(e2) {
  return 746 === e2 || 747 === e2 || !(e2 < 4352) && (e2 >= 12704 && e2 <= 12735 || (e2 >= 12544 && e2 <= 12591 || (e2 >= 65072 && e2 <= 65103 && !(e2 >= 65097 && e2 <= 65103) || (e2 >= 63744 && e2 <= 64255 || (e2 >= 13056 && e2 <= 13311 || (e2 >= 11904 && e2 <= 12031 || (e2 >= 12736 && e2 <= 12783 || (e2 >= 12288 && e2 <= 12351 && !(e2 >= 12296 && e2 <= 12305 || e2 >= 12308 && e2 <= 12319 || 12336 === e2) || (e2 >= 13312 && e2 <= 19903 || (e2 >= 19968 && e2 <= 40959 || (e2 >= 12800 && e2 <= 13055 || (e2 >= 12592 && e2 <= 12687 || (e2 >= 43360 && e2 <= 43391 || (e2 >= 55216 && e2 <= 55295 || (e2 >= 4352 && e2 <= 4607 || (e2 >= 44032 && e2 <= 55215 || (e2 >= 12352 && e2 <= 12447 || (e2 >= 12272 && e2 <= 12287 || (e2 >= 12688 && e2 <= 12703 || (e2 >= 12032 && e2 <= 12255 || (e2 >= 12784 && e2 <= 12799 || (e2 >= 12448 && e2 <= 12543 && 12540 !== e2 || (e2 >= 65280 && e2 <= 65519 && !(65288 === e2 || 65289 === e2 || 65293 === e2 || e2 >= 65306 && e2 <= 65310 || 65339 === e2 || 65341 === e2 || 65343 === e2 || e2 >= 65371 && e2 <= 65503 || 65507 === e2 || e2 >= 65512 && e2 <= 65519) || (e2 >= 65104 && e2 <= 65135 && !(e2 >= 65112 && e2 <= 65118 || e2 >= 65123 && e2 <= 65126) || (e2 >= 5120 && e2 <= 5759 || (e2 >= 6320 && e2 <= 6399 || (e2 >= 65040 && e2 <= 65055 || (e2 >= 19904 && e2 <= 19967 || (e2 >= 40960 && e2 <= 42127 || e2 >= 42128 && e2 <= 42191)))))))))))))))))))))))))))));
}
function c$1(e2) {
  return !(e2 < 11904) && (e2 >= 12704 && e2 <= 12735 || (e2 >= 12544 && e2 <= 12591 || (e2 >= 65072 && e2 <= 65103 || (e2 >= 63744 && e2 <= 64255 || (e2 >= 13056 && e2 <= 13311 || (e2 >= 11904 && e2 <= 12031 || (e2 >= 12736 && e2 <= 12783 || (e2 >= 12288 && e2 <= 12351 || (e2 >= 13312 && e2 <= 19903 || (e2 >= 19968 && e2 <= 40959 || (e2 >= 12800 && e2 <= 13055 || (e2 >= 65280 && e2 <= 65519 || (e2 >= 12352 && e2 <= 12447 || (e2 >= 12272 && e2 <= 12287 || (e2 >= 12032 && e2 <= 12255 || (e2 >= 12784 && e2 <= 12799 || (e2 >= 12448 && e2 <= 12543 || (e2 >= 65040 && e2 <= 65055 || (e2 >= 42128 && e2 <= 42191 || e2 >= 40960 && e2 <= 42127)))))))))))))))))));
}
function s$3(e2) {
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
  constructor(t2, e2, i2, o3, s4, c2, h2) {
    this._glyphItems = t2, this._maxWidth = e2, this._lineHeight = i2, this._letterSpacing = o3, this._hAnchor = s4, this._vAnchor = c2, this._justify = h2;
  }
  getShaping(s4, c2, h2) {
    const l3 = this._letterSpacing, n2 = this._lineHeight, a2 = this._justify, r5 = this._maxWidth, m2 = [];
    let f2 = 0, p2 = 0;
    for (const t2 of s4) {
      const e2 = t2.codePointAt(0);
      if (null == e2)
        continue;
      const i2 = h2 && e$1(e2);
      let s5;
      for (const t3 of this._glyphItems)
        if (s5 = t3[e2], s5)
          break;
      m2.push({ codePoint: e2, x: f2, y: p2, vertical: i2, glyphMosaicItem: s5 }), s5 && (f2 += s5.metrics.advance + l3);
    }
    let g2 = f2;
    if (r5 > 0) {
      g2 = f2 / Math.max(1, Math.ceil(f2 / r5));
    }
    const y2 = s4.includes("​"), d = [], x2 = m2.length;
    for (let e2 = 0; e2 < x2 - 1; e2++) {
      const o3 = m2[e2].codePoint, s5 = c$1(o3);
      if (s$3(o3) || s5) {
        let t2 = 0;
        if (10 === o3)
          t2 -= 1e4;
        else if (s5 && y2)
          t2 += 150;
        else {
          40 !== o3 && 65288 !== o3 || (t2 += 50);
          const i2 = m2[e2 + 1].codePoint;
          41 !== i2 && 65289 !== i2 || (t2 += 50);
        }
        d.push(this._buildBreak(e2 + 1, m2[e2].x, g2, d, t2, false));
      }
    }
    const u3 = this._optimalBreaks(this._buildBreak(x2, f2, g2, d, 0, true));
    let M = 0;
    const _2 = c2 ? -n2 : n2;
    let I3 = 0;
    for (let t2 = 0; t2 < u3.length; t2++) {
      const i2 = u3[t2];
      let o3 = I3;
      for (; o3 < i2 && a$1(m2[o3].codePoint); )
        m2[o3].glyphMosaicItem = null, ++o3;
      let s5 = i2 - 1;
      for (; s5 > o3 && a$1(m2[s5].codePoint); )
        m2[s5].glyphMosaicItem = null, --s5;
      if (o3 <= s5) {
        const t3 = m2[o3].x;
        for (let i3 = o3; i3 <= s5; i3++)
          m2[i3].x -= t3, m2[i3].y = p2;
        let e2 = m2[s5].x;
        m2[s5].glyphMosaicItem && (e2 += m2[s5].glyphMosaicItem.metrics.advance), M = Math.max(e2, M), a2 && this._applyJustification(m2, o3, s5);
      }
      I3 = i2, p2 += _2;
    }
    if (m2.length > 0) {
      const t2 = u3.length - 1, e2 = (a2 - this._hAnchor) * M;
      let i2 = (-this._vAnchor * (t2 + 1) + 0.5) * n2;
      c2 && t2 && (i2 += t2 * n2);
      for (const o3 of m2)
        o3.x += e2, o3.y += i2;
    }
    return m2.filter((t2) => t2.glyphMosaicItem);
  }
  static getTextBox(t2, e2) {
    if (!t2.length)
      return null;
    let i2 = 1 / 0, o3 = 1 / 0, s4 = 0, c2 = 0;
    for (const l3 of t2) {
      const t3 = l3.glyphMosaicItem.metrics.advance, n2 = l3.x, a2 = l3.y - h$1, r5 = n2 + t3, m2 = a2 + e2;
      i2 = Math.min(i2, n2), s4 = Math.max(s4, r5), o3 = Math.min(o3, a2), c2 = Math.max(c2, m2);
    }
    return { x: i2, y: o3, width: s4 - i2, height: c2 - o3 };
  }
  static getBox(t2) {
    if (!t2.length)
      return null;
    let e2 = 1 / 0, i2 = 1 / 0, o3 = 0, s4 = 0;
    for (const c2 of t2) {
      const { height: t3, left: h2, top: l3, width: n2 } = c2.glyphMosaicItem.metrics, a2 = c2.x, r5 = c2.y - (t3 - Math.abs(l3)), m2 = a2 + n2 + h2, f2 = r5 + t3;
      e2 = Math.min(e2, a2), o3 = Math.max(o3, m2), i2 = Math.min(i2, r5), s4 = Math.max(s4, f2);
    }
    return { x: e2, y: i2, width: o3 - e2, height: s4 - i2 };
  }
  static addDecoration(t2, e2) {
    const i2 = t2.length;
    if (0 === i2)
      return;
    const o3 = 3;
    let c2 = t2[0].x + t2[0].glyphMosaicItem.metrics.left, h2 = t2[0].y;
    for (let n2 = 1; n2 < i2; n2++) {
      const i3 = t2[n2];
      if (i3.y !== h2) {
        const l4 = t2[n2 - 1].x + t2[n2 - 1].glyphMosaicItem.metrics.left + t2[n2 - 1].glyphMosaicItem.metrics.width;
        t2.push({ codePoint: 0, x: c2, y: h2 + e2 - o3, vertical: false, glyphMosaicItem: { sdf: true, rect: new t$2(4, 0, 4, 8), metrics: { width: l4 - c2, height: 2 + 2 * o3, left: 0, top: 0, advance: 0 }, page: 0, code: 0 } }), h2 = i3.y, c2 = i3.x + i3.glyphMosaicItem.metrics.left;
      }
    }
    const l3 = t2[i2 - 1].x + t2[i2 - 1].glyphMosaicItem.metrics.left + t2[i2 - 1].glyphMosaicItem.metrics.width;
    t2.push({ codePoint: 0, x: c2, y: h2 + e2 - o3, vertical: false, glyphMosaicItem: { sdf: true, rect: new t$2(4, 0, 4, 8), metrics: { width: l3 - c2, height: 2 + 2 * o3, left: 0, top: 0, advance: 0 }, page: 0, code: 0 } });
  }
  _breakScore(t2, e2, i2, o3) {
    const s4 = (t2 - e2) * (t2 - e2);
    return o3 ? t2 < e2 ? s4 / 2 : 2 * s4 : s4 + Math.abs(i2) * i2;
  }
  _buildBreak(t2, e2, i2, o3, s4, c2) {
    let h2 = null, l3 = this._breakScore(e2, i2, s4, c2);
    for (const n2 of o3) {
      const t3 = e2 - n2.x, o4 = this._breakScore(t3, i2, s4, c2) + n2.score;
      o4 <= l3 && (h2 = n2, l3 = o4);
    }
    return { index: t2, x: e2, score: l3, previousBreak: h2 };
  }
  _optimalBreaks(t2) {
    return t2 ? this._optimalBreaks(t2.previousBreak).concat(t2.index) : [];
  }
  _applyJustification(t2, e2, i2) {
    const o3 = t2[i2], s4 = o3.vertical ? c : o3.glyphMosaicItem ? o3.glyphMosaicItem.metrics.advance : 0, h2 = (o3.x + s4) * this._justify;
    for (let c2 = e2; c2 <= i2; c2++)
      t2[c2].x -= h2;
  }
};
const x = 4096, p = 8, w$1 = 0.5, T$1 = 2;
class y {
  constructor(e2, t2, i2 = 0, n2 = -1, s4 = w$1) {
    this.x = e2, this.y = t2, this.angle = i2, this.segment = n2, this.minzoom = s4;
  }
}
class f {
  constructor(e2, t2, i2, s4, o3, a2 = w$1, l3 = n$1) {
    this.anchor = e2, this.labelAngle = t2, this.glyphAngle = i2, this.page = s4, this.alternateVerticalGlyph = o3, this.minzoom = a2, this.maxzoom = l3;
  }
}
let I$1 = class I {
  constructor(e2, t2, i2, n2, s4, o3, a2, l3, h2, r5, c2, g2) {
    this.tl = e2, this.tr = t2, this.bl = i2, this.br = n2, this.mosaicRect = s4, this.labelAngle = o3, this.minAngle = a2, this.maxAngle = l3, this.anchor = h2, this.minzoom = r5, this.maxzoom = c2, this.page = g2;
  }
};
let u$1 = class u {
  constructor(e2) {
    this.shapes = e2;
  }
};
let b$1 = class b {
  getIconPlacement(n2, s4, o3) {
    const a2 = new h$2(n2.x, n2.y), l3 = o3.rotationAlignment === l$2.MAP, h2 = o3.keepUpright;
    let r5 = o3.rotate * e$2;
    l3 && (r5 += n2.angle);
    const m2 = new u$1([]);
    return o3.allowOverlap && o3.ignorePlacement || !o$2 || (m2.iconColliders = []), this._addIconPlacement(m2, a2, s4, o3, r5), l3 && h2 && this._addIconPlacement(m2, a2, s4, o3, r5 + t$3), m2;
  }
  _addIconPlacement(t2, i2, s4, o3, a2) {
    const l3 = s4.pixelRatio, h2 = s4.width / l3, r5 = s4.height / l3, g2 = o3.offset;
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
    const p2 = s4.rect, T2 = 2 / l3, y2 = x2 - T2, f2 = d - T2, u3 = y2 + p2.width / l3, b3 = f2 + p2.height / l3, P = new h$2(y2, f2), O = new h$2(u3, b3), _2 = new h$2(y2, b3), k = new h$2(u3, f2);
    if (0 !== a2) {
      const e2 = Math.cos(a2), t3 = Math.sin(a2);
      P.rotate(e2, t3), O.rotate(e2, t3), _2.rotate(e2, t3), k.rotate(e2, t3);
    }
    const M = new I$1(P, k, _2, O, p2, a2, 0, 256, i2, w$1, n$1, 0);
    if (t2.shapes.push(M), (!o3.allowOverlap || !o3.ignorePlacement) && o$2) {
      const e2 = o3.size, s5 = o3.padding, l4 = { xTile: i2.x, yTile: i2.y, dxPixels: x2 * e2 - s5, dyPixels: d * e2 - s5, hard: !o3.optional, partIndex: 0, width: h2 * e2 + 2 * s5, height: r5 * e2 + 2 * s5, angle: a2, minLod: w$1, maxLod: n$1 };
      t2.iconColliders.push(l4);
    }
  }
  getTextPlacement(s4, o3, a2, c$12) {
    const x2 = new h$2(s4.x, s4.y), d = c$12.rotate * e$2, y2 = c$12.rotationAlignment === l$2.MAP, b3 = c$12.keepUpright, P = c$12.padding;
    let O = w$1;
    const _2 = !y2 ? 0 : s4.angle, k = s4.segment >= 0 && y2, M = c$12.allowOverlap && c$12.ignorePlacement ? null : [], E2 = [], G = 4, N2 = !k;
    let A2 = Number.POSITIVE_INFINITY, L2 = Number.NEGATIVE_INFINITY, z = A2, F = L2;
    const v = (k || y2) && b3, R = c$12.size / c;
    let B2 = false;
    for (const e2 of o3)
      if (e2.vertical) {
        B2 = true;
        break;
      }
    let H, V = 0, j = 0;
    if (!k && B2) {
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
      if (M && N2) {
        if (void 0 !== H && H !== t2.y) {
          let e2, t3, i2, o5;
          B2 ? (e2 = -F + V, t3 = A2 + j, i2 = F - z, o5 = L2 - A2) : (e2 = A2 + V, t3 = z + j, i2 = L2 - A2, o5 = F - z);
          const a3 = { xTile: s4.x, yTile: s4.y, dxPixels: e2 * R - P, dyPixels: t3 * R - P, hard: !c$12.optional, partIndex: 1, width: i2 * R + 2 * P, height: o5 * R + 2 * P, angle: d, minLod: w$1, maxLod: n$1 };
          M.push(a3), A2 = Number.POSITIVE_INFINITY, L2 = Number.NEGATIVE_INFINITY, z = A2, F = L2;
        }
        H = t2.y;
      }
      const m2 = [];
      if (k) {
        const e2 = 0.5 * o4.metrics.width, i2 = (t2.x + h2.left - G + e2) * R * p;
        if (O = this._placeGlyph(s4, O, i2, a2, s4.segment, 1, t2.vertical, g2, m2), b3 && (O = this._placeGlyph(s4, O, i2, a2, s4.segment, -1, t2.vertical, g2, m2)), O >= T$1)
          break;
      } else
        m2.push(new f(x2, _2, _2, g2, false)), y2 && b3 && m2.push(new f(x2, _2 + t$3, _2 + t$3, g2, false));
      const u3 = t2.x + h2.left, C3 = t2.y - h$1 - h2.top, S = u3 + h2.width, Y = C3 + h2.height;
      let q, U, D, J, K, Q, W, X;
      if (!k && B2)
        if (t2.vertical) {
          const t3 = (u3 + S) / 2 - h2.height / 2, i2 = (C3 + Y) / 2 + h2.width / 2;
          q = new h$2(-i2 - G + V, t3 - G + j), U = new h$2(q.x + l3.width, q.y + l3.height), D = new h$2(q.x, U.y), J = new h$2(U.x, q.y);
        } else
          q = new h$2(-C3 + G + V, u3 - G + j), U = new h$2(q.x - l3.height, q.y + l3.width), D = new h$2(U.x, q.y), J = new h$2(q.x, U.y);
      else
        q = new h$2(u3 - G + V, C3 - G + j), U = new h$2(q.x + l3.width, q.y + l3.height), D = new h$2(q.x, U.y), J = new h$2(U.x, q.y);
      for (const i2 of m2) {
        let n2, o5, a3, r5;
        if (i2.alternateVerticalGlyph) {
          if (!K) {
            const t3 = (C3 + Y) / 2 + j;
            K = new h$2((u3 + S) / 2 + V - h2.height / 2 - G, t3 + h2.width / 2 + G), Q = new h$2(K.x + l3.height, K.y - l3.width), W = new h$2(Q.x, K.y), X = new h$2(K.x, Q.y);
          }
          n2 = K, o5 = W, a3 = X, r5 = Q;
        } else
          n2 = q, o5 = D, a3 = J, r5 = U;
        const g3 = C3, m3 = Y, x3 = i2.glyphAngle + d;
        if (0 !== x3) {
          const e2 = Math.cos(x3), t3 = Math.sin(x3);
          n2 = n2.clone(), o5 = o5?.clone(), a3 = a3?.clone(), r5 = r5?.clone(), n2.rotate(e2, t3), r5?.rotate(e2, t3), o5?.rotate(e2, t3), a3?.rotate(e2, t3);
        }
        let p2 = 0, w2 = 256;
        if (k && B2 ? t2.vertical ? i2.alternateVerticalGlyph ? (p2 = 32, w2 = 96) : (p2 = 224, w2 = 32) : (p2 = 224, w2 = 96) : (p2 = 192, w2 = 64), E2.push(new I$1(n2, a3, o5, r5, l3, i2.labelAngle, p2, w2, i2.anchor, i2.minzoom, i2.maxzoom, i2.page)), M && (!v || this._legible(i2.labelAngle))) {
          if (N2)
            u3 < A2 && (A2 = u3), g3 < z && (z = g3), S > L2 && (L2 = S), m3 > F && (F = m3);
          else if (i2.minzoom < T$1) {
            const e2 = { xTile: s4.x, yTile: s4.y, dxPixels: (u3 + V) * R - P, dyPixels: (g3 + V) * R - P, hard: !c$12.optional, partIndex: 1, width: (S - u3) * R + 2 * P, height: (m3 - g3) * R + 2 * P, angle: x3, minLod: i2.minzoom, maxLod: i2.maxzoom };
            M.push(e2);
          }
        }
      }
    }
    if (O >= T$1)
      return null;
    if (M && N2) {
      let e2, t2, i2, o4;
      B2 ? (e2 = -F + V, t2 = A2 + j, i2 = F - z, o4 = L2 - A2) : (e2 = A2 + V, t2 = z + j, i2 = L2 - A2, o4 = F - z);
      const a3 = { xTile: s4.x, yTile: s4.y, dxPixels: e2 * R - P, dyPixels: t2 * R - P, hard: !c$12.optional, partIndex: 1, width: i2 * R + 2 * P, height: o4 * R + 2 * P, angle: d, minLod: w$1, maxLod: n$1 };
      M.push(a3);
    }
    const C2 = new u$1(E2);
    return M && M.length > 0 && (C2.textColliders = M), C2;
  }
  _legible(e2) {
    const t2 = i$1(e2);
    return t2 < 65 || t2 >= 193;
  }
  _placeGlyph(t2, s4, l3, h2, r5, c2, g2, m2, x2) {
    let d = c2;
    const p2 = d < 0 ? f$1(t2.angle + t$3, r$4) : t2.angle;
    let w2 = 0;
    l3 < 0 && (d *= -1, l3 *= -1, w2 = t$3), d > 0 && ++r5;
    let T2 = new h$2(t2.x, t2.y), y2 = h2[r5], I3 = n$1;
    if (h2.length <= r5)
      return I3;
    for (; ; ) {
      const e2 = y2.x - T2.x, t3 = y2.y - T2.y, i2 = Math.sqrt(e2 * e2 + t3 * t3), n2 = Math.max(l3 / i2, s4), c3 = e2 / i2, u3 = t3 / i2, b3 = f$1(Math.atan2(u3, c3) + w2, r$4);
      if (x2.push(new f(T2, p2, b3, m2, false, n2, I3)), g2 && x2.push(new f(T2, p2, b3, m2, true, n2, I3)), n2 <= s4)
        return n2;
      T2 = y2.clone();
      do {
        if (r5 += d, h2.length <= r5 || r5 < 0)
          return n2;
        y2 = h2[r5];
      } while (T2.isEqual(y2));
      let P = y2.x - T2.x, O = y2.y - T2.y;
      const _2 = Math.sqrt(P * P + O * O);
      P *= i2 / _2, O *= i2 / _2, T2.x -= P, T2.y -= O, I3 = n2;
    }
  }
};
var t$1;
!function(e2) {
  e2[e2.moveTo = 1] = "moveTo", e2[e2.lineTo = 2] = "lineTo", e2[e2.close = 7] = "close";
}(t$1 || (t$1 = {}));
let s$2 = class s {
  constructor(e2, t2) {
    this.values = {}, this._geometry = void 0, this._pbfGeometry = null;
    const s4 = t2.keys, o3 = t2.values, r5 = e2.asUnsafe();
    for (; r5.next(); )
      switch (r5.tag()) {
        case 1:
          this.id = r5.getUInt64();
          break;
        case 2: {
          const e3 = r5.getMessage().asUnsafe(), t3 = this.values;
          for (; !e3.empty(); ) {
            const r6 = e3.getUInt32(), a2 = e3.getUInt32();
            t3[s4[r6]] = o3[a2];
          }
          e3.release();
          break;
        }
        case 3:
          this.type = r5.getUInt32();
          break;
        case 4:
          this._pbfGeometry = r5.getMessage();
          break;
        default:
          r5.skip();
      }
  }
  getGeometry(s4) {
    if (void 0 !== this._geometry)
      return this._geometry;
    if (!this._pbfGeometry)
      return null;
    const o3 = this._pbfGeometry.asUnsafe();
    let r5, a2;
    this._pbfGeometry = null, s4 ? s4.reset(this.type) : r5 = [];
    let n2, i2 = t$1.moveTo, l3 = 0, c2 = 0, h2 = 0;
    for (; !o3.empty(); ) {
      if (0 === l3) {
        const e2 = o3.getUInt32();
        i2 = 7 & e2, l3 = e2 >> 3;
      }
      switch (l3--, i2) {
        case t$1.moveTo:
          c2 += o3.getSInt32(), h2 += o3.getSInt32(), s4 ? s4.moveTo(c2, h2) : r5 && (a2 && r5.push(a2), a2 = [], a2.push(new h$2(c2, h2)));
          break;
        case t$1.lineTo:
          c2 += o3.getSInt32(), h2 += o3.getSInt32(), s4 ? s4.lineTo(c2, h2) : a2 && a2.push(new h$2(c2, h2));
          break;
        case t$1.close:
          s4 ? s4.close() : a2 && !a2[0].equals(c2, h2) && a2.push(a2[0].clone());
          break;
        default:
          throw o3.release(), new Error("Invalid path operation");
      }
    }
    return s4 ? n2 = s4.result() : r5 && (a2 && r5.push(a2), n2 = r5), o3.release(), this._geometry = n2, n2;
  }
};
let r$3 = class r extends t$4 {
  constructor() {
    super(12);
  }
  add(s4, r5, t2) {
    const e2 = this.array;
    e2.push(s4), e2.push(r5), e2.push(t2);
  }
};
class e {
  constructor(t2) {
    this.extent = 4096, this.keys = [], this.values = [], this._pbfLayer = t2.clone();
    const s4 = t2.asUnsafe();
    for (; s4.next(); )
      switch (s4.tag()) {
        case 1:
          this.name = s4.getString();
          break;
        case 3:
          this.keys.push(s4.getString());
          break;
        case 4:
          this.values.push(s4.processMessage(e._parseValue));
          break;
        case 5:
          this.extent = s4.getUInt32();
          break;
        default:
          s4.skip();
      }
  }
  getData() {
    return this._pbfLayer;
  }
  static _parseValue(e2) {
    for (; e2.next(); )
      switch (e2.tag()) {
        case 1:
          return e2.getString();
        case 2:
          return e2.getFloat();
        case 3:
          return e2.getDouble();
        case 4:
          return e2.getInt64();
        case 5:
          return e2.getUInt64();
        case 6:
          return e2.getSInt64();
        case 7:
          return e2.getBool();
        default:
          e2.skip();
      }
    return null;
  }
}
let o$1 = class o extends t$4 {
  constructor(t2) {
    super(t2);
  }
  add(t2, o3, r5, u3, h2, a2, n2, d, e2, p2, i2, c2) {
    const M = this.array;
    let l3 = t$4.i1616to32(t2, o3);
    M.push(l3);
    const m2 = 31;
    l3 = t$4.i8888to32(Math.round(m2 * r5), Math.round(m2 * u3), Math.round(m2 * h2), Math.round(m2 * a2)), M.push(l3), l3 = t$4.i8888to32(Math.round(m2 * n2), Math.round(m2 * d), Math.round(m2 * e2), Math.round(m2 * p2)), M.push(l3), l3 = t$4.i1616to32(i2, 0), M.push(l3), c2 && M.push(...c2);
  }
};
let r$2 = class r2 extends t$4 {
  constructor(t2) {
    super(t2);
  }
  add(t2, o3, r5) {
    const u3 = this.array;
    u3.push(t$4.i1616to32(t2, o3)), r5 && u3.push(...r5);
  }
};
class u2 extends t$4 {
  constructor(t2) {
    super(t2);
  }
  add(t2, o3, r5, u3, h2, a2, n2) {
    const d = this.array, e2 = this.index;
    let p2 = t$4.i1616to32(t2, o3);
    d.push(p2);
    const i2 = 15;
    return p2 = t$4.i8888to32(Math.round(i2 * r5), Math.round(i2 * u3), h2, a2), d.push(p2), n2 && d.push(...n2), e2;
  }
}
class h extends t$4 {
  constructor(t2) {
    super(t2);
  }
  add(o3, r5, u3, h2, a2, n2, d, e2, p2, i2, c2, M) {
    const l3 = this.array;
    let m2 = t$4.i1616to32(o3, r5);
    l3.push(m2), m2 = t$4.i1616to32(Math.round(8 * u3), Math.round(8 * h2)), l3.push(m2), m2 = t$4.i8888to32(a2 / 4, n2 / 4, e2, p2), l3.push(m2), m2 = t$4.i8888to32(0, i$1(d), 10 * i2, Math.min(10 * c2, 255)), l3.push(m2), M && l3.push(...M);
  }
}
class a extends t$4 {
  constructor(t2) {
    super(t2);
  }
  add(t2, o3, r5, u3, h2) {
    const a2 = this.array, n2 = t$4.i1616to32(2 * t2 + r5, 2 * o3 + u3);
    a2.push(n2), h2 && a2.push(...h2);
  }
}
class t {
  constructor(t2, e2, s4) {
    this.layerExtent = 4096, this._features = [], this.layer = t2, this.zoom = e2, this._spriteInfo = s4, this._filter = t2.getFeatureFilter();
  }
  pushFeature(t2) {
    this._filter && !this._filter.filter(t2, this.zoom) || this._features.push(t2);
  }
  hasFeatures() {
    return this._features.length > 0;
  }
  getResources(t2, e2, s4) {
  }
}
let r$1 = class r3 extends t {
  constructor(t2, r5, i2, c2, s4) {
    super(t2, r5, i2), this.type = E.CIRCLE, this._circleVertexBuffer = c2, this._circleIndexBuffer = s4;
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
    const i2 = this.layer, c2 = this.zoom;
    e2 && e2.setExtent(this.layerExtent);
    for (const s4 of this._features) {
      const n2 = s4.getGeometry(e2);
      if (!n2)
        continue;
      const l3 = i2.circleMaterial.encodeAttributes(s4, c2, i2);
      for (const e3 of n2)
        if (e3)
          for (const i3 of e3) {
            const e4 = t2.index;
            t2.add(i3.x, i3.y, 0, 0, l3), t2.add(i3.x, i3.y, 0, 1, l3), t2.add(i3.x, i3.y, 1, 0, l3), t2.add(i3.x, i3.y, 1, 1, l3), r5.add(e4, e4 + 1, e4 + 2), r5.add(e4 + 1, e4 + 2, e4 + 3), this._circleIndexCount += 6;
          }
    }
  }
  serialize() {
    let e2 = 6;
    e2 += this.layerUIDs.length, e2 += this._circleVertexBuffer.array.length, e2 += this._circleIndexBuffer.array.length;
    const t2 = new Uint32Array(e2), r5 = new Int32Array(t2.buffer);
    let i2 = 0;
    t2[i2++] = this.type, t2[i2++] = this.layerUIDs.length;
    for (let c2 = 0; c2 < this.layerUIDs.length; c2++)
      t2[i2++] = this.layerUIDs[c2];
    t2[i2++] = this._circleIndexStart, t2[i2++] = this._circleIndexCount, t2[i2++] = this._circleVertexBuffer.array.length;
    for (let c2 = 0; c2 < this._circleVertexBuffer.array.length; c2++)
      r5[i2++] = this._circleVertexBuffer.array[c2];
    t2[i2++] = this._circleIndexBuffer.array.length;
    for (let c2 = 0; c2 < this._circleIndexBuffer.array.length; c2++)
      t2[i2++] = this._circleIndexBuffer.array[c2];
    return t2.buffer;
  }
};
let s$1 = class s2 extends t {
  constructor(t2, e2, i2, r5, n2, s4, o3) {
    super(t2, e2, i2), this.type = E.FILL, this._patternMap = /* @__PURE__ */ new Map(), this._fillVertexBuffer = r5, this._fillIndexBuffer = n2, this._outlineVertexBuffer = s4, this._outlineIndexBuffer = o3;
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
  getResources(t2, e2, i2) {
    const r5 = this.layer, l3 = this.zoom, n2 = r5.getPaintProperty("fill-pattern");
    if (n2)
      if (n2.isDataDriven)
        for (const s4 of this._features)
          e2(n2.getValue(l3, s4), true);
      else
        e2(n2.getValue(l3), true);
  }
  processFeatures(t2) {
    this._fillIndexStart = 3 * this._fillIndexBuffer.index, this._fillIndexCount = 0, this._outlineIndexStart = 3 * this._outlineIndexBuffer.index, this._outlineIndexCount = 0;
    const e2 = this.layer, i2 = this.zoom, { fillMaterial: r5, outlineMaterial: l3, hasDataDrivenFill: n2, hasDataDrivenOutline: s4 } = e2;
    t2 && t2.setExtent(this.layerExtent);
    const o3 = e2.getPaintProperty("fill-pattern"), a2 = o3?.isDataDriven;
    let f2 = !o3 && e2.getPaintValue("fill-antialias", i2);
    if (e2.outlineUsesFillColor) {
      if (f2 && !e2.hasDataDrivenOpacity) {
        const t3 = e2.getPaintValue("fill-opacity", i2), r6 = e2.getPaintValue("fill-opacity", i2 + 1);
        t3 < 1 && r6 < 1 && (f2 = false);
      }
      if (f2 && !e2.hasDataDrivenColor) {
        const t3 = e2.getPaintValue("fill-color", i2), r6 = e2.getPaintValue("fill-color", i2 + 1);
        t3[3] < 1 && r6[3] < 1 && (f2 = false);
      }
    }
    const u3 = this._features, d = t2?.validateTessellation;
    if (a2) {
      const n3 = [];
      for (const a3 of u3) {
        const u4 = o3.getValue(i2, a3), h2 = this._spriteInfo[u4];
        if (!h2?.rect)
          continue;
        const x2 = r5.encodeAttributes(a3, i2, e2, h2), c2 = f2 && s4 ? l3.encodeAttributes(a3, i2, e2) : [], _2 = a3.getGeometry(t2);
        n3.push({ ddFillAttributes: x2, ddOutlineAttributes: c2, page: h2.page, geometry: _2 }), n3.sort((t3, e3) => t3.page - e3.page);
        for (const { ddFillAttributes: t3, ddOutlineAttributes: i3, page: r6, geometry: l4 } of n3)
          this._processFeature(l4, f2, e2.outlineUsesFillColor, t3, i3, d, r6);
      }
    } else
      for (const h2 of u3) {
        const o4 = n2 ? r5.encodeAttributes(h2, i2, e2) : null, a3 = f2 && s4 ? l3.encodeAttributes(h2, i2, e2) : null, u4 = h2.getGeometry(t2);
        this._processFeature(u4, f2, e2.outlineUsesFillColor, o4, a3, d);
      }
  }
  serialize() {
    let t2 = 10;
    t2 += this.layerUIDs.length, t2 += this._fillVertexBuffer.array.length, t2 += this._fillIndexBuffer.array.length, t2 += this._outlineVertexBuffer.array.length, t2 += this._outlineIndexBuffer.array.length, t2 += 3 * this._patternMap.size + 1;
    const e2 = new Uint32Array(t2), i2 = new Int32Array(e2.buffer);
    let r5 = 0;
    e2[r5++] = this.type, e2[r5++] = this.layerUIDs.length;
    for (let s4 = 0; s4 < this.layerUIDs.length; s4++)
      e2[r5++] = this.layerUIDs[s4];
    e2[r5++] = this._fillIndexStart, e2[r5++] = this._fillIndexCount, e2[r5++] = this._outlineIndexStart, e2[r5++] = this._outlineIndexCount;
    const l3 = this._patternMap, n2 = l3.size;
    if (e2[r5++] = n2, n2 > 0)
      for (const [s4, [o3, a2]] of l3)
        e2[r5++] = s4, e2[r5++] = o3, e2[r5++] = a2;
    e2[r5++] = this._fillVertexBuffer.array.length;
    for (let s4 = 0; s4 < this._fillVertexBuffer.array.length; s4++)
      i2[r5++] = this._fillVertexBuffer.array[s4];
    e2[r5++] = this._fillIndexBuffer.array.length;
    for (let s4 = 0; s4 < this._fillIndexBuffer.array.length; s4++)
      e2[r5++] = this._fillIndexBuffer.array[s4];
    e2[r5++] = this._outlineVertexBuffer.array.length;
    for (let s4 = 0; s4 < this._outlineVertexBuffer.array.length; s4++)
      i2[r5++] = this._outlineVertexBuffer.array[s4];
    e2[r5++] = this._outlineIndexBuffer.array.length;
    for (let s4 = 0; s4 < this._outlineIndexBuffer.array.length; s4++)
      e2[r5++] = this._outlineIndexBuffer.array[s4];
    return e2.buffer;
  }
  _processFeature(t2, e2, i2, r5, l3, n2, o3) {
    if (!t2)
      return;
    const a2 = t2.length, f2 = !l3 || 0 === l3.length;
    if (e2 && (!i2 || f2))
      for (let s4 = 0; s4 < a2; s4++)
        this._processOutline(t2[s4], l3);
    const u3 = 32;
    let d;
    for (let h2 = 0; h2 < a2; h2++) {
      const e3 = s2._area(t2[h2]);
      e3 > u3 ? (void 0 !== d && this._processFill(t2, d, r5, n2, o3), d = [h2]) : e3 < -u3 && void 0 !== d && d.push(h2);
    }
    void 0 !== d && this._processFill(t2, d, r5, n2, o3);
  }
  _processOutline(t2, e2) {
    const i2 = this._outlineVertexBuffer, l3 = this._outlineIndexBuffer, n2 = l3.index;
    let s4, o3, a2;
    const f2 = new h$2(0, 0), u3 = new h$2(0, 0), d = new h$2(0, 0);
    let h2 = -1, x2 = -1, c2 = -1, _2 = -1, y2 = -1, g2 = false;
    const p2 = 0;
    let I3 = t2.length;
    if (I3 < 2)
      return;
    const B2 = t2[p2];
    let m2 = t2[I3 - 1];
    for (; I3 && m2.isEqual(B2); )
      --I3, m2 = t2[I3 - 1];
    if (!(I3 - p2 < 2)) {
      for (let r5 = p2; r5 < I3; ++r5) {
        r5 === p2 ? (s4 = t2[I3 - 1], o3 = t2[p2], a2 = t2[p2 + 1], f2.assignSub(o3, s4), f2.normalize(), f2.rightPerpendicular()) : (s4 = o3, o3 = a2, a2 = r5 !== I3 - 1 ? t2[r5 + 1] : t2[p2], f2.assign(u3));
        const n3 = this._isClipEdge(s4, o3);
        -1 === _2 && (g2 = n3), u3.assignSub(a2, o3), u3.normalize(), u3.rightPerpendicular();
        const B3 = f2.x * u3.y - f2.y * u3.x;
        d.assignAdd(f2, u3), d.normalize();
        const m3 = -d.x * -f2.x + -d.y * -f2.y;
        let V = Math.abs(0 !== m3 ? 1 / m3 : 1);
        V > 8 && (V = 8), B3 >= 0 ? (c2 = i2.add(o3.x, o3.y, f2.x, f2.y, 0, 1, e2), -1 === _2 && (_2 = c2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n3 && l3.add(h2, x2, c2), x2 = i2.add(o3.x, o3.y, V * -d.x, V * -d.y, 0, -1, e2), -1 === y2 && (y2 = x2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n3 && l3.add(h2, x2, c2), h2 = x2, x2 = c2, c2 = i2.add(o3.x, o3.y, d.x, d.y, 0, 1, e2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n3 && l3.add(h2, x2, c2), x2 = i2.add(o3.x, o3.y, u3.x, u3.y, 0, 1, e2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n3 && l3.add(h2, x2, c2)) : (c2 = i2.add(o3.x, o3.y, V * d.x, V * d.y, 0, 1, e2), -1 === _2 && (_2 = c2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n3 && l3.add(h2, x2, c2), x2 = i2.add(o3.x, o3.y, -f2.x, -f2.y, 0, -1, e2), -1 === y2 && (y2 = x2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n3 && l3.add(h2, x2, c2), h2 = x2, x2 = c2, c2 = i2.add(o3.x, o3.y, -d.x, -d.y, 0, -1, e2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n3 && l3.add(h2, x2, c2), h2 = i2.add(o3.x, o3.y, -u3.x, -u3.y, 0, -1, e2), h2 >= 0 && x2 >= 0 && c2 >= 0 && !n3 && l3.add(h2, x2, c2));
      }
      h2 >= 0 && x2 >= 0 && _2 >= 0 && !g2 && l3.add(h2, x2, _2), h2 >= 0 && _2 >= 0 && y2 >= 0 && !g2 && l3.add(h2, y2, _2), this._outlineIndexCount += 3 * (l3.index - n2);
    }
  }
  _processFill(r5, l3, n2, s4, o3) {
    s4 = true;
    let a2;
    l3.length > 1 && (a2 = []);
    let f2 = 0;
    for (const t2 of l3)
      0 !== f2 && a2.push(f2), f2 += r5[t2].length;
    const u3 = 2 * f2, d = t$5.acquire();
    for (const t2 of l3) {
      const e2 = r5[t2], i2 = e2.length;
      for (let t3 = 0; t3 < i2; ++t3)
        d.push(e2[t3].x, e2[t3].y);
    }
    const h2 = i$2(d, a2, 2);
    if (s4 && i$2.deviation(d, a2, 2, h2) > 0) {
      const t2 = l3.map((t3) => r5[t3].length), { buffer: e2, vertexCount: s5 } = r$5(d, t2);
      if (s5 > 0) {
        const t3 = this._fillVertexBuffer.index;
        for (let i2 = 0; i2 < s5; i2++)
          this._fillVertexBuffer.add(e2[2 * i2], e2[2 * i2 + 1], n2);
        for (let e3 = 0; e3 < s5; e3 += 3) {
          const i2 = t3 + e3;
          this._fillIndexBuffer.add(i2, i2 + 1, i2 + 2);
        }
        if (void 0 !== o3) {
          const t4 = this._patternMap, e3 = t4.get(o3);
          e3 ? e3[1] += s5 : t4.set(o3, [this._fillIndexStart + this._fillIndexCount, s5]);
        }
        this._fillIndexCount += s5;
      }
    } else {
      const t2 = h2.length;
      if (t2 > 0) {
        const e2 = this._fillVertexBuffer.index;
        let i2 = 0;
        for (; i2 < u3; )
          this._fillVertexBuffer.add(d[i2++], d[i2++], n2);
        let r6 = 0;
        for (; r6 < t2; )
          this._fillIndexBuffer.add(e2 + h2[r6++], e2 + h2[r6++], e2 + h2[r6++]);
        if (void 0 !== o3) {
          const e3 = this._patternMap, i3 = e3.get(o3);
          i3 ? i3[1] += t2 : e3.set(o3, [this._fillIndexStart + this._fillIndexCount, t2]);
        }
        this._fillIndexCount += t2;
      }
    }
    t$5.release(d);
  }
  _isClipEdge(t2, e2) {
    return t2.x === e2.x ? t2.x <= -64 || t2.x >= 4160 : t2.y === e2.y && (t2.y <= -64 || t2.y >= 4160);
  }
  static _area(t2) {
    let e2 = 0;
    const i2 = t2.length - 1;
    for (let r5 = 0; r5 < i2; r5++)
      e2 += (t2[r5].x - t2[r5 + 1].x) * (t2[r5].y + t2[r5 + 1].y);
    return e2 += (t2[i2].x - t2[0].x) * (t2[i2].y + t2[0].y), 0.5 * e2;
  }
};
const s3 = 65535;
class n extends t {
  constructor(t2, s4, n2, a2, o3) {
    super(t2, s4, n2), this.type = E.LINE, this._tessellationOptions = { pixelCoordRatio: 8, halfWidth: 0, offset: 0 }, this._patternMap = /* @__PURE__ */ new Map(), this.tessellationProperties = { _lineVertexBuffer: null, _lineIndexBuffer: null, _ddValues: null }, this.tessellationProperties._lineVertexBuffer = a2, this.tessellationProperties._lineIndexBuffer = o3, this._lineTessellator = new c$2(r4(this.tessellationProperties), l2(this.tessellationProperties), t2.canUseThinTessellation);
  }
  get lineIndexStart() {
    return this._lineIndexStart;
  }
  get lineIndexCount() {
    return this._lineIndexCount;
  }
  getResources(e2, t2, i2) {
    const s4 = this.layer, n2 = this.zoom, r5 = s4.getPaintProperty("line-pattern"), l3 = s4.getPaintProperty("line-dasharray"), a2 = s4.getLayoutProperty("line-cap");
    if (!r5 && !l3)
      return;
    const o3 = a2?.getValue(n2) || 0, u3 = a2?.isDataDriven, f2 = r5?.isDataDriven, h2 = l3?.isDataDriven;
    if (f2 || h2)
      for (const p2 of this._features)
        t2(f2 ? r5.getValue(n2, p2) : this._getDashArrayKey(p2, n2, s4, l3, u3, a2, o3));
    else if (r5)
      t2(r5.getValue(n2));
    else if (l3) {
      const e3 = l3.getValue(n2);
      t2(s4.getDashKey(e3, o3));
    }
  }
  processFeatures(e2) {
    this._lineIndexStart = 3 * this.tessellationProperties._lineIndexBuffer.index, this._lineIndexCount = 0;
    const t2 = this.layer, i2 = this.zoom, s4 = this._features, n2 = this._tessellationOptions, { hasDataDrivenLine: r5, lineMaterial: l3 } = t2;
    e2 && e2.setExtent(this.layerExtent);
    const a2 = t2.getPaintProperty("line-pattern"), o3 = t2.getPaintProperty("line-dasharray"), u3 = a2?.isDataDriven, f2 = o3?.isDataDriven;
    let h2;
    h2 = t2.getLayoutProperty("line-cap");
    const p2 = h2?.isDataDriven ? h2 : null, g2 = p2 ? null : t2.getLayoutValue("line-cap", i2), y2 = g2 || 0, d = !!p2;
    h2 = t2.getLayoutProperty("line-join");
    const c2 = h2?.isDataDriven ? h2 : null, _2 = c2 ? null : t2.getLayoutValue("line-join", i2);
    h2 = t2.getLayoutProperty("line-miter-limit");
    const x2 = h2?.isDataDriven ? h2 : null, V = x2 ? null : t2.getLayoutValue("line-miter-limit", i2);
    h2 = t2.getLayoutProperty("line-round-limit");
    const m2 = h2?.isDataDriven ? h2 : null, D = m2 ? null : t2.getLayoutValue("line-round-limit", i2);
    h2 = t2.getPaintProperty("line-width");
    const P = h2?.isDataDriven ? h2 : null, I3 = P ? null : t2.getPaintValue("line-width", i2);
    h2 = t2.getPaintProperty("line-offset");
    const L2 = h2?.isDataDriven ? h2 : null, B2 = L2 ? null : t2.getPaintValue("line-offset", i2);
    if (u3 || f2) {
      const r6 = [];
      for (const n3 of s4) {
        const s5 = u3 ? a2.getValue(i2, n3) : this._getDashArrayKey(n3, i2, t2, o3, d, p2, y2), f3 = this._spriteInfo[s5];
        if (!f3?.rect)
          continue;
        const h3 = l3.encodeAttributes(n3, i2, t2, f3), v = n3.getGeometry(e2);
        r6.push({ ddAttributes: h3, page: f3.page, cap: p2 ? p2.getValue(i2, n3) : g2, join: c2 ? c2.getValue(i2, n3) : _2, miterLimit: x2 ? x2.getValue(i2, n3) : V, roundLimit: m2 ? m2.getValue(i2, n3) : D, halfWidth: 0.5 * (P ? P.getValue(i2, n3) : I3), offset: L2 ? L2.getValue(i2, n3) : B2, geometry: v });
      }
      r6.sort((e3, t3) => e3.page - t3.page), n2.textured = true;
      for (const { ddAttributes: e3, page: t3, cap: i3, join: s5, miterLimit: l4, roundLimit: a3, halfWidth: o4, offset: u4, geometry: f3 } of r6)
        n2.capType = i3, n2.joinType = s5, n2.miterLimit = l4, n2.roundLimit = a3, n2.halfWidth = o4, n2.offset = u4, this._processFeature(f3, e3, t3);
    } else {
      if (a2) {
        const e3 = a2.getValue(i2), t3 = this._spriteInfo[e3];
        if (!t3?.rect)
          return;
      }
      n2.textured = !(!a2 && !o3), n2.capType = g2, n2.joinType = _2, n2.miterLimit = V, n2.roundLimit = D, n2.halfWidth = 0.5 * I3, n2.offset = B2;
      for (const a3 of s4) {
        const s5 = r5 ? l3.encodeAttributes(a3, i2, t2) : null;
        p2 && (n2.capType = p2.getValue(i2, a3)), c2 && (n2.joinType = c2.getValue(i2, a3)), x2 && (n2.miterLimit = x2.getValue(i2, a3)), m2 && (n2.roundLimit = m2.getValue(i2, a3)), P && (n2.halfWidth = 0.5 * P.getValue(i2, a3)), L2 && (n2.offset = L2.getValue(i2, a3));
        const o4 = a3.getGeometry(e2);
        this._processFeature(o4, s5);
      }
    }
  }
  serialize() {
    let e2 = 6;
    e2 += this.layerUIDs.length, e2 += this.tessellationProperties._lineVertexBuffer.array.length, e2 += this.tessellationProperties._lineIndexBuffer.array.length, e2 += 3 * this._patternMap.size + 1;
    const t2 = new Uint32Array(e2), i2 = new Int32Array(t2.buffer);
    let s4 = 0;
    t2[s4++] = this.type, t2[s4++] = this.layerUIDs.length;
    for (let l3 = 0; l3 < this.layerUIDs.length; l3++)
      t2[s4++] = this.layerUIDs[l3];
    t2[s4++] = this._lineIndexStart, t2[s4++] = this._lineIndexCount;
    const n2 = this._patternMap, r5 = n2.size;
    if (t2[s4++] = r5, r5 > 0)
      for (const [l3, [a2, o3]] of n2)
        t2[s4++] = l3, t2[s4++] = a2, t2[s4++] = o3;
    t2[s4++] = this.tessellationProperties._lineVertexBuffer.array.length;
    for (let l3 = 0; l3 < this.tessellationProperties._lineVertexBuffer.array.length; l3++)
      i2[s4++] = this.tessellationProperties._lineVertexBuffer.array[l3];
    t2[s4++] = this.tessellationProperties._lineIndexBuffer.array.length;
    for (let l3 = 0; l3 < this.tessellationProperties._lineIndexBuffer.array.length; l3++)
      t2[s4++] = this.tessellationProperties._lineIndexBuffer.array[l3];
    return t2.buffer;
  }
  _processFeature(e2, t2, i2) {
    if (!e2)
      return;
    const s4 = e2.length;
    for (let n2 = 0; n2 < s4; n2++)
      this._processGeometry(e2[n2], t2, i2);
  }
  _processGeometry(e2, t2, i2) {
    if (e2.length < 2)
      return;
    const n2 = 1e-3;
    let r5, l3, a2 = e2[0], o3 = 1;
    for (; o3 < e2.length; )
      r5 = e2[o3].x - a2.x, l3 = e2[o3].y - a2.y, r5 * r5 + l3 * l3 < n2 * n2 ? e2.splice(o3, 1) : (a2 = e2[o3], ++o3);
    if (e2.length < 2)
      return;
    const u3 = this.tessellationProperties._lineIndexBuffer, f2 = 3 * u3.index;
    this._tessellationOptions.initialDistance = 0, this._tessellationOptions.wrapDistance = s3, this.tessellationProperties._ddValues = t2, this._lineTessellator.tessellate(e2, this._tessellationOptions);
    const h2 = 3 * u3.index - f2;
    if (void 0 !== i2) {
      const e3 = this._patternMap, t3 = e3.get(i2);
      t3 ? t3[1] += h2 : e3.set(i2, [f2 + this._lineIndexCount, h2]);
    }
    this._lineIndexCount += h2;
  }
  _getDashArrayKey(e2, t2, i2, s4, n2, r5, l3) {
    const a2 = n2 ? r5.getValue(t2, e2) : l3, o3 = s4.getValue(t2, e2);
    return i2.getDashKey(o3, a2);
  }
}
const r4 = (e2) => (t2, i2, s4, n2, r5, l3, a2, o3, u3, f2, h2) => (e2._lineVertexBuffer.add(t2, i2, a2, o3, s4, n2, r5, l3, u3, f2, h2, e2._ddValues), e2._lineVertexBuffer.index - 1), l2 = (e2) => (t2, i2, s4) => {
  e2._lineIndexBuffer.add(t2, i2, s4);
};
const b2 = 10;
function A(e2, t2) {
  return e2.iconMosaicItem && t2.iconMosaicItem ? e2.iconMosaicItem.page === t2.iconMosaicItem.page ? 0 : e2.iconMosaicItem.page - t2.iconMosaicItem.page : e2.iconMosaicItem && !t2.iconMosaicItem ? 1 : !e2.iconMosaicItem && t2.iconMosaicItem ? -1 : 0;
}
class L extends t {
  constructor(e2, t2, n2, i2, s4, a2, r5, l3) {
    super(e2, t2, l3.getSpriteItems()), this.type = E.SYMBOL, this._markerMap = /* @__PURE__ */ new Map(), this._glyphMap = /* @__PURE__ */ new Map(), this._glyphBufferDataStorage = /* @__PURE__ */ new Map(), this._isIconSDF = false, this._iconVertexBuffer = n2, this._iconIndexBuffer = i2, this._textVertexBuffer = s4, this._textIndexBuffer = a2, this._placementEngine = r5, this._workerTileHandler = l3;
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
  getResources(e2, t2, i2) {
    const s4 = this.layer, o3 = this.zoom;
    e2 && e2.setExtent(this.layerExtent);
    const a2 = s4.getLayoutProperty("icon-image"), r5 = s4.getLayoutProperty("text-field");
    let l3 = s4.getLayoutProperty("text-transform"), h2 = s4.getLayoutProperty("text-font");
    const x2 = [];
    let c2, d, f2, g2;
    a2 && !a2.isDataDriven && (c2 = a2.getValue(o3)), r5 && !r5.isDataDriven && (d = r5.getValue(o3)), l3 && l3.isDataDriven || (f2 = s4.getLayoutValue("text-transform", o3), l3 = null), h2 && h2.isDataDriven || (g2 = s4.getLayoutValue("text-font", o3), h2 = null);
    for (const m2 of this._features) {
      const u3 = m2.getGeometry(e2);
      if (!u3 || 0 === u3.length)
        continue;
      let p2, _2;
      a2 && (p2 = a2.isDataDriven ? a2.getValue(o3, m2) : this._replaceKeys(c2, m2.values), p2 && t2(p2));
      let M = false;
      if (r5 && (_2 = r5.isDataDriven ? r5.getValue(o3, m2) : this._replaceKeys(d, m2.values), _2)) {
        switch (_2 = _2.replaceAll("\\n", "\n"), l3 && (f2 = l3.getValue(o3, m2)), f2) {
          case o$3.LOWERCASE:
            _2 = _2.toLowerCase();
            break;
          case o$3.UPPERCASE:
            _2 = _2.toUpperCase();
        }
        if (L._bidiEngine.hasBidiChar(_2)) {
          let e3;
          e3 = "rtl" === L._bidiEngine.checkContextual(_2) ? "IDNNN" : "ICNNN", _2 = L._bidiEngine.bidiTransform(_2, e3, "VLYSN"), M = true;
        }
        if (_2.length > 0) {
          h2 && (g2 = h2.getValue(o3, m2));
          for (const e3 of g2) {
            let t3 = i2[e3];
            t3 || (t3 = i2[e3] = /* @__PURE__ */ new Set());
            for (const e4 of _2) {
              const n2 = e4.codePointAt(0);
              null != n2 && t3.add(n2);
            }
          }
        }
      }
      if (!p2 && !_2)
        continue;
      const P = s4.getLayoutValue("symbol-sort-key", o3, m2), I3 = { feature: m2, sprite: p2, label: _2, rtl: M, geometry: u3, hash: (_2 ? c$3(_2) : 0) ^ (p2 ? c$3(p2) : 0), priority: P, textFont: g2 };
      x2.push(I3);
    }
    this._symbolFeatures = x2;
  }
  processFeatures(e2) {
    e2 && e2.setExtent(this.layerExtent);
    const n2 = this.layer, s4 = this.zoom, o3 = n2.getLayoutValue("symbol-placement", s4), r5 = o3 !== n$2.POINT, l3 = n2.getLayoutValue("symbol-spacing", s4) * p, g2 = n2.getLayoutProperty("icon-image"), y$1 = n2.getLayoutProperty("text-field"), b3 = g2 ? new T$2(n2, s4, r5) : null, V = y$1 ? new m$1(n2, s4, r5) : null, T2 = this._workerTileHandler;
    let w2;
    g2 && (w2 = T2.getSpriteItems()), this._iconIndexStart = 3 * this._iconIndexBuffer.index, this._textIndexStart = 3 * this._textIndexBuffer.index, this._iconIndexCount = 0, this._textIndexCount = 0, this._markerMap.clear(), this._glyphMap.clear();
    const B2 = [];
    let C2 = 1;
    V && V.size && (C2 = V.size / c);
    const R = V ? V.maxAngle * e$2 : 0, D = V ? V.size * p : 0;
    for (const a2 of this._symbolFeatures) {
      let e3;
      b3 && w2 && a2.sprite && (e3 = w2[a2.sprite], e3 && e3.sdf && (this._isIconSDF = true));
      let n3;
      !!e3 && b3.update(s4, a2.feature);
      let g3 = 0;
      const y$12 = a2.label;
      if (y$12) {
        n$3(V), V.update(s4, a2.feature);
        const e4 = r5 && V.rotationAlignment === l$2.MAP ? V.keepUpright : V.writingMode && V.writingMode.includes(p$1.VERTICAL);
        let i2 = 0.5;
        switch (V.anchor) {
          case m.TOP_LEFT:
          case m.LEFT:
          case m.BOTTOM_LEFT:
            i2 = 0;
            break;
          case m.TOP_RIGHT:
          case m.RIGHT:
          case m.BOTTOM_RIGHT:
            i2 = 1;
        }
        let o4 = 0.5;
        switch (V.anchor) {
          case m.TOP_LEFT:
          case m.TOP:
          case m.TOP_RIGHT:
            o4 = 0;
            break;
          case m.BOTTOM_LEFT:
          case m.BOTTOM:
          case m.BOTTOM_RIGHT:
            o4 = 1;
        }
        let l4 = 0.5;
        switch (V.justify) {
          case u$2.AUTO:
            l4 = i2;
            break;
          case u$2.LEFT:
            l4 = 0;
            break;
          case u$2.RIGHT:
            l4 = 1;
        }
        const x2 = V.letterSpacing * c, c$12 = r5 ? 0 : V.maxWidth * c, m$12 = V.lineHeight * c, P = a2.textFont.map((e5) => T2.getGlyphItems(e5));
        if (n3 = new l$1(P, c$12, m$12, x2, i2, o4, l4).getShaping(y$12, a2.rtl, e4), n3 && n3.length > 0) {
          let e5 = 1e30, t2 = -1e30;
          for (const i3 of n3)
            e5 = Math.min(e5, i3.x), t2 = Math.max(t2, i3.x);
          g3 = (t2 - e5 + 2 * c) * C2 * p;
        }
      }
      for (let t2 of a2.geometry) {
        const s5 = [];
        if (o3 === n$2.LINE) {
          if (n3?.length && V?.size) {
            const e4 = V.size * p * (2 + Math.min(2, 4 * Math.abs(V.offset[1])));
            t2 = L._smoothVertices(t2, e4);
          }
          L._pushAnchors(s5, t2, l3, g3);
        } else
          o3 === n$2.LINE_CENTER ? L._pushCenterAnchor(s5, t2) : a2.feature.type === t$6.Polygon ? L._pushCentroid(s5, t2) : s5.push(new y(t2[0].x, t2[0].y));
        for (const i2 of s5) {
          if (i2.x < 0 || i2.x > x || i2.y < 0 || i2.y > x)
            continue;
          if (r5 && g3 > 0 && V?.rotationAlignment === l$2.MAP && !L._honorsTextMaxAngle(t2, i2, g3, R, D))
            continue;
          const s6 = { shaping: n3, line: t2, iconMosaicItem: e3, anchor: i2, symbolFeature: a2, textColliders: [], iconColliders: [], textVertexRanges: [], iconVertexRanges: [] };
          B2.push(s6), this._processFeature(s6, b3, V);
        }
      }
    }
    B2.sort(A), this._addPlacedGlyphs(), this._symbolInstances = B2;
  }
  serialize() {
    let e2 = 11;
    e2 += this.layerUIDs.length, e2 += 3 * this.markerPageMap.size, e2 += 3 * this.glyphsPageMap.size, e2 += L._symbolsSerializationLength(this._symbolInstances), e2 += this._iconVertexBuffer.array.length, e2 += this._iconIndexBuffer.array.length, e2 += this._textVertexBuffer.array.length, e2 += this._textIndexBuffer.array.length;
    const t2 = new Uint32Array(e2), n2 = new Int32Array(t2.buffer), i2 = new Float32Array(t2.buffer);
    let s4 = 0;
    t2[s4++] = this.type, t2[s4++] = this.layerUIDs.length;
    for (let o3 = 0; o3 < this.layerUIDs.length; o3++)
      t2[s4++] = this.layerUIDs[o3];
    t2[s4++] = this._isIconSDF ? 1 : 0, t2[s4++] = this.markerPageMap.size;
    for (const [o3, [a2, r5]] of this.markerPageMap)
      t2[s4++] = o3, t2[s4++] = a2, t2[s4++] = r5;
    t2[s4++] = this.glyphsPageMap.size;
    for (const [o3, [a2, r5]] of this.glyphsPageMap)
      t2[s4++] = o3, t2[s4++] = a2, t2[s4++] = r5;
    t2[s4++] = this._iconVertexBuffer.index / 4, t2[s4++] = this._textVertexBuffer.index / 4, s4 = L.serializeSymbols(t2, n2, i2, s4, this._symbolInstances), t2[s4++] = this._iconVertexBuffer.array.length;
    for (let o3 = 0; o3 < this._iconVertexBuffer.array.length; o3++)
      n2[s4++] = this._iconVertexBuffer.array[o3];
    t2[s4++] = this._iconIndexBuffer.array.length;
    for (let o3 = 0; o3 < this._iconIndexBuffer.array.length; o3++)
      t2[s4++] = this._iconIndexBuffer.array[o3];
    t2[s4++] = this._textVertexBuffer.array.length;
    for (let o3 = 0; o3 < this._textVertexBuffer.array.length; o3++)
      n2[s4++] = this._textVertexBuffer.array[o3];
    t2[s4++] = this._textIndexBuffer.array.length;
    for (let o3 = 0; o3 < this._textIndexBuffer.array.length; o3++)
      t2[s4++] = this._textIndexBuffer.array[o3];
    return t2.buffer;
  }
  static _symbolsSerializationLength(e2) {
    let t2 = 0;
    t2 += 1;
    for (const n2 of e2 || []) {
      t2 += 4, t2 += 1;
      for (const e3 of n2.textColliders)
        t2 += b2;
      for (const e3 of n2.iconColliders)
        t2 += b2;
      t2 += 1, t2 += 2 * n2.textVertexRanges.length, t2 += 1, t2 += 2 * n2.iconVertexRanges.length;
    }
    return t2;
  }
  static serializeSymbols(e2, t2, n2, i2, s4) {
    s4 = s4 || [], t2[i2++] = s4.length;
    for (const o3 of s4) {
      t2[i2++] = o3.anchor.x, t2[i2++] = o3.anchor.y, t2[i2++] = o3.symbolFeature.hash, t2[i2++] = o3.symbolFeature.priority, t2[i2++] = o3.textColliders.length + o3.iconColliders.length;
      for (const e3 of o3.textColliders)
        t2[i2++] = e3.xTile, t2[i2++] = e3.yTile, t2[i2++] = e3.dxPixels, t2[i2++] = e3.dyPixels, t2[i2++] = e3.hard ? 1 : 0, t2[i2++] = e3.partIndex, n2[i2++] = e3.minLod, n2[i2++] = e3.maxLod, t2[i2++] = e3.width, t2[i2++] = e3.height;
      for (const e3 of o3.iconColliders)
        t2[i2++] = e3.xTile, t2[i2++] = e3.yTile, t2[i2++] = e3.dxPixels, t2[i2++] = e3.dyPixels, t2[i2++] = e3.hard ? 1 : 0, t2[i2++] = e3.partIndex, n2[i2++] = e3.minLod, n2[i2++] = e3.maxLod, t2[i2++] = e3.width, t2[i2++] = e3.height;
      t2[i2++] = o3.textVertexRanges.length;
      for (const [e3, n3] of o3.textVertexRanges)
        t2[i2++] = e3, t2[i2++] = n3;
      t2[i2++] = o3.iconVertexRanges.length;
      for (const [e3, n3] of o3.iconVertexRanges)
        t2[i2++] = e3, t2[i2++] = n3;
    }
    return i2;
  }
  _replaceKeys(e2, t2) {
    return e2.replaceAll(/{([^{}]+)}/g, (e3, n2) => n2 in t2 ? t2[n2] : "");
  }
  _processFeature(e2, t2, n2) {
    const { line: i2, iconMosaicItem: s4, shaping: o3, anchor: a2 } = e2, l3 = this.zoom, h2 = this.layer, x2 = !!s4;
    let c2 = true;
    x2 && (c2 = t2?.optional || !s4);
    const d = o3 && o3.length > 0, f2 = !d || n2?.optional;
    let g2, y2;
    if (x2 && (g2 = this._placementEngine.getIconPlacement(a2, s4, t2)), (g2 || c2) && (d && (y2 = this._placementEngine.getTextPlacement(a2, o3, i2, n2)), y2 || f2)) {
      if (g2 && y2 || (f2 || c2 ? f2 || y2 ? c2 || g2 || (y2 = null) : g2 = null : (g2 = null, y2 = null)), y2) {
        const t3 = h2.hasDataDrivenText ? h2.textMaterial.encodeAttributes(e2.symbolFeature.feature, l3, h2) : null;
        if (this._storePlacedGlyphs(e2, y2.shapes, l3, n2.rotationAlignment, t3), y2.textColliders) {
          e2.textColliders = y2.textColliders;
          for (const e3 of y2.textColliders) {
            e3.minLod = Math.max(l3 + N(e3.minLod), 0), e3.maxLod = Math.min(l3 + N(e3.maxLod), 25);
            const t4 = e3.angle;
            if (t4) {
              const n3 = Math.cos(t4), i3 = Math.sin(t4), s5 = e3.dxPixels * n3 - e3.dyPixels * i3, o4 = e3.dxPixels * i3 + e3.dyPixels * n3, a3 = (e3.dxPixels + e3.width) * n3 - e3.dyPixels * i3, r5 = (e3.dxPixels + e3.width) * i3 + e3.dyPixels * n3, l4 = e3.dxPixels * n3 - (e3.dyPixels + e3.height) * i3, h3 = e3.dxPixels * i3 + (e3.dyPixels + e3.height) * n3, x3 = (e3.dxPixels + e3.width) * n3 - (e3.dyPixels + e3.height) * i3, c3 = (e3.dxPixels + e3.width) * i3 + (e3.dyPixels + e3.height) * n3, d2 = Math.min(s5, a3, l4, x3), f3 = Math.max(s5, a3, l4, x3), g3 = Math.min(o4, r5, h3, c3), y3 = Math.max(o4, r5, h3, c3);
              e3.dxPixels = d2, e3.dyPixels = g3, e3.width = f3 - d2, e3.height = y3 - g3;
            }
          }
        }
      }
      if (g2) {
        const n3 = h2.hasDataDrivenIcon ? h2.iconMaterial.encodeAttributes(e2.symbolFeature.feature, l3, h2) : null;
        if (this._addPlacedIcons(e2, g2.shapes, l3, s4.page, t2.rotationAlignment === l$2.VIEWPORT, n3), g2.iconColliders) {
          e2.iconColliders = g2.iconColliders;
          for (const e3 of g2.iconColliders) {
            e3.minLod = Math.max(l3 + N(e3.minLod), 0), e3.maxLod = Math.min(l3 + N(e3.maxLod), 25);
            const t3 = e3.angle;
            if (t3) {
              const n4 = Math.cos(t3), i3 = Math.sin(t3), s5 = e3.dxPixels * n4 - e3.dyPixels * i3, o4 = e3.dxPixels * i3 + e3.dyPixels * n4, a3 = (e3.dxPixels + e3.width) * n4 - e3.dyPixels * i3, r5 = (e3.dxPixels + e3.width) * i3 + e3.dyPixels * n4, l4 = e3.dxPixels * n4 - (e3.dyPixels + e3.height) * i3, h3 = e3.dxPixels * i3 + (e3.dyPixels + e3.height) * n4, x3 = (e3.dxPixels + e3.width) * n4 - (e3.dyPixels + e3.height) * i3, c3 = (e3.dxPixels + e3.width) * i3 + (e3.dyPixels + e3.height) * n4, d2 = Math.min(s5, a3, l4, x3), f3 = Math.max(s5, a3, l4, x3), g3 = Math.min(o4, r5, h3, c3), y3 = Math.max(o4, r5, h3, c3);
              e3.dxPixels = d2, e3.dyPixels = g3, e3.width = f3 - d2, e3.height = y3 - g3;
            }
          }
        }
      }
    }
  }
  _addPlacedIcons(e2, t2, n2, i2, s4, o3) {
    const a2 = Math.max(n2 - 1, 0), l3 = this._iconVertexBuffer, h2 = this._iconIndexBuffer, x2 = this._markerMap;
    for (const c2 of t2) {
      const t3 = s4 ? 0 : Math.max(n2 + N(c2.minzoom), a2), d = s4 ? 25 : Math.min(n2 + N(c2.maxzoom), 25);
      if (d <= t3)
        continue;
      const f2 = c2.tl, g2 = c2.tr, y2 = c2.bl, m2 = c2.br, u3 = c2.mosaicRect, p2 = c2.labelAngle, _2 = c2.minAngle, M = c2.maxAngle, P = c2.anchor, I3 = l3.index, b3 = u3.x, A2 = u3.y, L2 = b3 + u3.width, V = A2 + u3.height, T2 = l3.index;
      l3.add(P.x, P.y, f2.x, f2.y, b3, A2, p2, _2, M, t3, d, o3), l3.add(P.x, P.y, g2.x, g2.y, L2, A2, p2, _2, M, t3, d, o3), l3.add(P.x, P.y, y2.x, y2.y, b3, V, p2, _2, M, t3, d, o3), l3.add(P.x, P.y, m2.x, m2.y, L2, V, p2, _2, M, t3, d, o3), e2.iconVertexRanges.length > 0 && e2.iconVertexRanges[0][0] + e2.iconVertexRanges[0][1] === T2 ? e2.iconVertexRanges[0][1] += 4 : e2.iconVertexRanges.push([T2, 4]), h2.add(I3, I3 + 1, I3 + 2), h2.add(I3 + 1, I3 + 2, I3 + 3), x2.has(i2) ? x2.get(i2)[1] += 6 : x2.set(i2, [this._iconIndexStart + this._iconIndexCount, 6]), this._iconIndexCount += 6;
    }
  }
  _addPlacedGlyphs() {
    const e2 = this._textVertexBuffer, t2 = this._textIndexBuffer, n2 = this._glyphMap;
    for (const [i2, s4] of this._glyphBufferDataStorage)
      for (const o3 of s4) {
        const s5 = e2.index, a2 = o3.symbolInstance, r5 = o3.ddAttributes, l3 = e2.index;
        e2.add(o3.glyphAnchor[0], o3.glyphAnchor[1], o3.tl[0], o3.tl[1], o3.xmin, o3.ymin, o3.labelAngle, o3.minAngle, o3.maxAngle, o3.minLod, o3.maxLod, r5), e2.add(o3.glyphAnchor[0], o3.glyphAnchor[1], o3.tr[0], o3.tr[1], o3.xmax, o3.ymin, o3.labelAngle, o3.minAngle, o3.maxAngle, o3.minLod, o3.maxLod, r5), e2.add(o3.glyphAnchor[0], o3.glyphAnchor[1], o3.bl[0], o3.bl[1], o3.xmin, o3.ymax, o3.labelAngle, o3.minAngle, o3.maxAngle, o3.minLod, o3.maxLod, r5), e2.add(o3.glyphAnchor[0], o3.glyphAnchor[1], o3.br[0], o3.br[1], o3.xmax, o3.ymax, o3.labelAngle, o3.minAngle, o3.maxAngle, o3.minLod, o3.maxLod, r5), a2.textVertexRanges.length > 0 && a2.textVertexRanges[0][0] + a2.textVertexRanges[0][1] === l3 ? a2.textVertexRanges[0][1] += 4 : a2.textVertexRanges.push([l3, 4]), t2.add(s5, s5 + 1, s5 + 2), t2.add(s5 + 1, s5 + 2, s5 + 3), n2.has(i2) ? n2.get(i2)[1] += 6 : n2.set(i2, [this._textIndexStart + this._textIndexCount, 6]), this._textIndexCount += 6;
      }
    this._glyphBufferDataStorage.clear();
  }
  _storePlacedGlyphs(e2, t2, n2, i2, s4) {
    const o3 = Math.max(n2 - 1, 0), a2 = i2 === l$2.VIEWPORT;
    let l3, h2, x2, c2, d, f2, g2, y2, m2, p2, _2;
    for (const u3 of t2) {
      if (l3 = a2 ? 0 : Math.max(n2 + N(u3.minzoom), o3), h2 = a2 ? 25 : Math.min(n2 + N(u3.maxzoom), 25), h2 <= l3)
        continue;
      x2 = u3.tl, c2 = u3.tr, d = u3.bl, f2 = u3.br, g2 = u3.labelAngle, y2 = u3.minAngle, m2 = u3.maxAngle, p2 = u3.anchor, _2 = u3.mosaicRect, this._glyphBufferDataStorage.has(u3.page) || this._glyphBufferDataStorage.set(u3.page, []);
      this._glyphBufferDataStorage.get(u3.page).push({ glyphAnchor: [p2.x, p2.y], tl: [x2.x, x2.y], tr: [c2.x, c2.y], bl: [d.x, d.y], br: [f2.x, f2.y], xmin: _2.x, ymin: _2.y, xmax: _2.x + _2.width, ymax: _2.y + _2.height, labelAngle: g2, minAngle: y2, maxAngle: m2, minLod: l3, maxLod: h2, placementLod: o3, symbolInstance: e2, ddAttributes: s4 });
    }
  }
  static _pushAnchors(e2, t2, n2, i2) {
    n2 += i2;
    let o3 = 0;
    const a2 = t2.length - 1;
    for (let l3 = 0; l3 < a2; l3++)
      o3 += h$2.distance(t2[l3], t2[l3 + 1]);
    let r5 = i2 || n2;
    if (r5 *= 0.5, o3 <= r5)
      return;
    const h2 = r5 / o3;
    let c2 = 0, d = -(n2 = o3 / Math.max(Math.round(o3 / n2), 1)) / 2;
    const f2 = t2.length - 1;
    for (let s4 = 0; s4 < f2; s4++) {
      const i3 = t2[s4], o4 = t2[s4 + 1], a3 = o4.x - i3.x, r6 = o4.y - i3.y, f3 = Math.sqrt(a3 * a3 + r6 * r6);
      let g2;
      for (; d + n2 < c2 + f3; ) {
        d += n2;
        const t3 = (d - c2) / f3, y$1 = h$3(i3.x, o4.x, t3), m2 = h$3(i3.y, o4.y, t3);
        void 0 === g2 && (g2 = Math.atan2(r6, a3)), e2.push(new y(y$1, m2, g2, s4, h2));
      }
      c2 += f3;
    }
  }
  static _pushCenterAnchor(e2, t2) {
    let n2 = 0;
    const i2 = t2.length - 1;
    for (let l3 = 0; l3 < i2; l3++)
      n2 += h$2.distance(t2[l3], t2[l3 + 1]);
    const o3 = n2 / 2;
    let a2 = 0;
    const r5 = t2.length - 1;
    for (let s4 = 0; s4 < r5; s4++) {
      const n3 = t2[s4], i3 = t2[s4 + 1], r6 = i3.x - n3.x, h2 = i3.y - n3.y, c2 = Math.sqrt(r6 * r6 + h2 * h2);
      if (o3 < a2 + c2) {
        const t3 = (o3 - a2) / c2, d = h$3(n3.x, i3.x, t3), f2 = h$3(n3.y, i3.y, t3), g2 = Math.atan2(h2, r6);
        return void e2.push(new y(d, f2, g2, s4, 0));
      }
      a2 += c2;
    }
  }
  static _deviation(e2, t2, n2) {
    const i2 = (t2.x - e2.x) * (n2.x - t2.x) + (t2.y - e2.y) * (n2.y - t2.y), s4 = (t2.x - e2.x) * (n2.y - t2.y) - (t2.y - e2.y) * (n2.x - t2.x);
    return Math.atan2(s4, i2);
  }
  static _honorsTextMaxAngle(e2, t2, n2, i2, o3) {
    let a2 = 0;
    const r5 = n2 / 2;
    let l3 = new h$2(t2.x, t2.y), h2 = t2.segment + 1;
    for (; a2 > -r5; ) {
      if (--h2, h2 < 0)
        return false;
      a2 -= h$2.distance(e2[h2], l3), l3 = e2[h2];
    }
    a2 += h$2.distance(e2[h2], e2[h2 + 1]);
    const x2 = [];
    let c2 = 0;
    const d = e2.length;
    for (; a2 < r5; ) {
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
      for (x2.push({ deviation: g2, distToAnchor: a2 }), c2 += g2; a2 - x2[0].distToAnchor > o3; )
        c2 -= x2.shift().deviation;
      if (Math.abs(c2) > i2)
        return false;
      a2 += h$2.distance(n3, l4), h2 = r6;
    }
    return true;
  }
  static _smoothVertices(e2, t2) {
    if (t2 <= 0)
      return e2;
    let n2 = e2.length;
    if (n2 < 3)
      return e2;
    const i2 = [];
    let o3 = 0, a2 = 0;
    i2.push(0);
    for (let y2 = 1; y2 < n2; y2++) {
      const t3 = h$2.distance(e2[y2], e2[y2 - 1]);
      t3 > 0 && (o3 += t3, i2.push(o3), a2++, a2 !== y2 && (e2[a2] = e2[y2]));
    }
    if (n2 = a2 + 1, n2 < 3)
      return e2;
    t2 = Math.min(t2, 0.2 * o3);
    const r5 = e2[0].x, l3 = e2[0].y, h2 = e2[n2 - 1].x, x2 = e2[n2 - 1].y, c2 = h$2.sub(e2[0], e2[1]);
    c2.normalize(), e2[0].x += t2 * c2.x, e2[0].y += t2 * c2.y, c2.assignSub(e2[n2 - 1], e2[n2 - 2]), c2.normalize(), e2[n2 - 1].x += t2 * c2.x, e2[n2 - 1].y += t2 * c2.y, i2[0] -= t2, i2[n2 - 1] += t2;
    const d = [];
    d.push(new h$2(r5, l3));
    const f2 = 1e-6, g2 = 0.5 * t2;
    for (let y2 = 1; y2 < n2 - 1; y2++) {
      let o4 = 0, a3 = 0, r6 = 0;
      for (let n3 = y2 - 1; n3 >= 0; n3--) {
        const s4 = g2 + i2[n3 + 1] - i2[y2];
        if (s4 < 0)
          break;
        const l4 = i2[n3 + 1] - i2[n3], h3 = i2[y2] - i2[n3] < g2 ? 1 : s4 / l4;
        if (h3 < f2)
          break;
        const x3 = h3 * h3, c3 = h3 * s4 - 0.5 * x3 * l4, d2 = h3 * l4 / t2, m2 = e2[n3 + 1], u3 = e2[n3].x - m2.x, p2 = e2[n3].y - m2.y;
        o4 += d2 / c3 * (m2.x * h3 * s4 + 0.5 * x3 * (s4 * u3 - l4 * m2.x) - x3 * h3 * l4 * u3 / 3), a3 += d2 / c3 * (m2.y * h3 * s4 + 0.5 * x3 * (s4 * p2 - l4 * m2.y) - x3 * h3 * l4 * p2 / 3), r6 += d2;
      }
      for (let s4 = y2 + 1; s4 < n2; s4++) {
        const n3 = g2 - i2[s4 - 1] + i2[y2];
        if (n3 < 0)
          break;
        const l4 = i2[s4] - i2[s4 - 1], h3 = i2[s4] - i2[y2] < g2 ? 1 : n3 / l4;
        if (h3 < f2)
          break;
        const x3 = h3 * h3, c3 = h3 * n3 - 0.5 * x3 * l4, d2 = h3 * l4 / t2, m2 = e2[s4 - 1], u3 = e2[s4].x - m2.x, p2 = e2[s4].y - m2.y;
        o4 += d2 / c3 * (m2.x * h3 * n3 + 0.5 * x3 * (n3 * u3 - l4 * m2.x) - x3 * h3 * l4 * u3 / 3), a3 += d2 / c3 * (m2.y * h3 * n3 + 0.5 * x3 * (n3 * p2 - l4 * m2.y) - x3 * h3 * l4 * p2 / 3), r6 += d2;
      }
      d.push(new h$2(o4 / r6, a3 / r6));
    }
    return d.push(new h$2(h2, x2)), e2[0].x = r5, e2[0].y = l3, e2[n2 - 1].x = h2, e2[n2 - 1].y = x2, d;
  }
  static _pushCentroid(e2, t2) {
    const n2 = 0, i2 = 0, s4 = 4096, o3 = 4096, a2 = t2.length - 1;
    let r5 = 0, l3 = 0, h2 = 0, c2 = t2[0].x, d = t2[0].y;
    c2 > s4 && (c2 = s4), c2 < n2 && (c2 = n2), d > o3 && (d = o3), d < i2 && (d = i2);
    for (let x2 = 1; x2 < a2; x2++) {
      let e3 = t2[x2].x, a3 = t2[x2].y, f2 = t2[x2 + 1].x, g2 = t2[x2 + 1].y;
      e3 > s4 && (e3 = s4), e3 < n2 && (e3 = n2), a3 > o3 && (a3 = o3), a3 < i2 && (a3 = i2), f2 > s4 && (f2 = s4), f2 < n2 && (f2 = n2), g2 > o3 && (g2 = o3), g2 < i2 && (g2 = i2);
      const y2 = (e3 - c2) * (g2 - d) - (f2 - c2) * (a3 - d);
      r5 += y2 * (c2 + e3 + f2), l3 += y2 * (d + a3 + g2), h2 += y2;
    }
    r5 /= 3 * h2, l3 /= 3 * h2, isNaN(r5) || isNaN(l3) || e2.push(new y(r5, l3));
  }
}
L._bidiEngine = new C();
var I2;
!function(I3) {
  I3[I3.INITIALIZED = 0] = "INITIALIZED", I3[I3.NO_DATA = 1] = "NO_DATA", I3[I3.READY = 2] = "READY", I3[I3.MODIFIED = 3] = "MODIFIED", I3[I3.INVALID = 4] = "INVALID";
}(I2 || (I2 = {}));
const T = 8, g = 14, w = 16;
class B {
  constructor(t2, r5, o3, n2, c2) {
    if (this._pbfTiles = {}, this._tileClippers = {}, this._client = o3, this._tile = r5, c2) {
      this._styleLayerUIDs = /* @__PURE__ */ new Set();
      for (const e2 of c2)
        this._styleLayerUIDs.add(e2);
    }
    this._styleRepository = n2, this._layers = this._styleRepository?.layers ?? [];
    const [l3, a2, u3] = r5.tileKey.split("/").map(parseFloat);
    this._level = l3;
    const f2 = T + Math.max((this._level - g) * w, 0);
    for (const p2 of Object.keys(t2)) {
      const r6 = t2[p2];
      this._pbfTiles[p2] = new r$6(new Uint8Array(r6.protobuff), new DataView(r6.protobuff));
      if (r6.refKey) {
        const [e2] = r6.refKey.split("/").map(parseFloat), t3 = l3 - e2;
        if (t3 > 0) {
          const e3 = (1 << t3) - 1, r7 = a2 & e3, i2 = u3 & e3;
          this._tileClippers[p2] = new e$3(t3, r7, i2, 8, f2);
        }
      }
      this._tileClippers[p2] || (this._tileClippers[p2] = new _());
    }
  }
  _canParseStyleLayer(e2) {
    return !this._styleLayerUIDs || this._styleLayerUIDs.has(e2);
  }
  async parse(e2) {
    const t2 = i$3(), s4 = this._initialize(e2), { returnedBuckets: i2 } = s4;
    this._processLayers(s4), this._linkReferences(s4), this._filterFeatures(s4);
    const o3 = [], n2 = /* @__PURE__ */ new Set(), c2 = (e3, t3) => {
      n2.has(e3) || (o3.push({ name: e3, repeat: t3 }), n2.add(e3));
    }, l3 = {};
    for (const r5 of i2)
      r5.getResources(r5.tileClipper, c2, l3);
    if (this._tile.status === I2.INVALID)
      return [];
    const a2 = this._fetchResources(o3, l3, e2);
    return Promise.all([...a2, t2]).then(() => this._processFeatures(s4.returnedBuckets));
  }
  _initialize(e2) {
    const t2 = e2?.signal;
    return { signal: t2, sourceNameToTileData: this._parseTileData(this._pbfTiles), layers: this._layers, zoom: this._level, sourceNameToTileClipper: this._tileClippers, sourceNameToUniqueSourceLayerBuckets: {}, sourceNameToUniqueSourceLayers: {}, returnedBuckets: [], layerIdToBucket: {}, referencerUIDToReferencedId: /* @__PURE__ */ new Map() };
  }
  _processLayers(e2) {
    const { sourceNameToTileData: t2, layers: r5, zoom: s4, sourceNameToTileClipper: i2, sourceNameToUniqueSourceLayerBuckets: o3, sourceNameToUniqueSourceLayers: n2, returnedBuckets: c2, layerIdToBucket: l3, referencerUIDToReferencedId: a2 } = e2;
    for (let u3 = r5.length - 1; u3 >= 0; u3--) {
      const e3 = r5[u3];
      if (!this._canParseStyleLayer(e3.uid) || e3.minzoom && s4 < Math.floor(e3.minzoom) || e3.maxzoom && s4 >= e3.maxzoom || e3.type === a$2.BACKGROUND)
        continue;
      if (!t2[e3.source] || !i2[e3.source])
        continue;
      const f2 = t2[e3.source], p2 = i2[e3.source], h2 = e3.sourceLayer, m2 = f2[h2];
      if (m2) {
        let t3 = n2[e3.source];
        if (t3 || (t3 = n2[e3.source] = /* @__PURE__ */ new Set()), t3.add(e3.sourceLayer), e3.refLayerId)
          a2.set(e3.uid, e3.refLayerId);
        else {
          const t4 = this._createBucket(e3);
          if (t4) {
            t4.layerUIDs = [e3.uid], t4.layerExtent = m2.extent, t4.tileClipper = p2;
            let r6 = o3[e3.source];
            r6 || (r6 = o3[e3.source] = {});
            let s5 = r6[h2];
            s5 || (s5 = r6[h2] = []), s5.push(t4), c2.push(t4), l3[e3.id] = t4;
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
    const { signal: r5, sourceNameToTileData: s4, sourceNameToUniqueSourceLayerBuckets: i2, sourceNameToUniqueSourceLayers: n2 } = e2, c2 = 10 * this._level, l3 = 10 * (this._level + 1), a2 = [], u3 = [];
    for (const t2 of Object.keys(n2)) {
      n2[t2].forEach((e3) => {
        a2.push(e3), u3.push(t2);
      });
    }
    for (let f2 = 0; f2 < a2.length; f2++) {
      const e3 = u3[f2], n3 = a2[f2];
      if (!s4[e3] || !i2[e3])
        continue;
      const p2 = s4[e3][n3], h2 = i2[e3][n3];
      if (!h2 || 0 === h2.length)
        continue;
      if (c$4(r5))
        return;
      const m2 = p2.getData();
      for (; m2.nextTag(2); ) {
        const e4 = m2.getMessage(), t2 = new s$2(e4, p2);
        e4.release();
        const r6 = t2.values;
        if (r6) {
          const e5 = r6._minzoom;
          if (e5 && e5 >= l3)
            continue;
          const t3 = r6._maxzoom;
          if (t3 && t3 <= c2)
            continue;
        }
        for (const s5 of h2)
          s5.pushFeature(t2);
      }
    }
  }
  _fetchResources(e2, t2, r5) {
    const s4 = [], i2 = this._tile.getWorkerTileHandler();
    let o3, n2;
    e2.length > 0 && (o3 = i2.fetchSprites(e2, this._client, r5), s4.push(o3));
    for (const c2 in t2) {
      const e3 = t2[c2];
      e3.size > 0 && (n2 = i2.fetchGlyphs(this._tile.tileKey, c2, e3, this._client, r5), s4.push(n2));
    }
    return s4;
  }
  _processFeatures(e2) {
    const t2 = e2.filter((e3) => e3.hasFeatures() || this._canParseStyleLayer(e3.layer.uid));
    for (const r5 of t2)
      r5.processFeatures(r5.tileClipper);
    return t2;
  }
  _parseTileData(e$12) {
    const t2 = {};
    for (const r5 of Object.keys(e$12)) {
      const s4 = e$12[r5], i2 = {};
      for (; s4.next(); )
        switch (s4.tag()) {
          case 3: {
            const e$13 = s4.getMessage(), t3 = new e(e$13);
            e$13.release(), i2[t3.name] = t3;
            break;
          }
          default:
            s4.skip();
        }
      t2[r5] = i2;
    }
    return t2;
  }
  _createBucket(e2) {
    switch (e2.type) {
      case a$2.BACKGROUND:
        return null;
      case a$2.FILL:
        return this._createFillBucket(e2);
      case a$2.LINE:
        return this._createLineBucket(e2);
      case a$2.CIRCLE:
        return this._createCircleBucket(e2);
      case a$2.SYMBOL:
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
    return new L(e2, this._level, new h(e2.iconMaterial.getStride()), new r$3(), new h(e2.textMaterial.getStride()), new r$3(), t2.placementEngine, t2.getWorkerTileHandler());
  }
}
class i {
  constructor(t2, s4, i2, a2) {
    this.status = I2.INITIALIZED, this.placementEngine = new b$1(), this.tileKey = t2, this.refKeys = s4, this._workerTileHandler = i2, this._styleRepository = a2;
  }
  release() {
    this.tileKey = "", this.refKeys = null, this.status = I2.INITIALIZED, this._workerTileHandler = null;
  }
  async parse(e2, s4) {
    const i2 = s4?.signal;
    if (null != i2) {
      const t2 = () => {
        i2.removeEventListener("abort", t2), this.status = I2.INVALID;
      };
      i2.addEventListener("abort", t2);
    }
    let a2;
    const n2 = { bucketsWithData: [], emptyBuckets: null };
    try {
      a2 = await this._parse(e2, s4);
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
    const i2 = t2.sourceName2DataAndRefKey;
    if (0 === Object.keys(i2).length)
      return [];
    this.status = I2.MODIFIED;
    return new B(i2, this, e2.client, this._styleRepository, t2.styleLayerUIDs).parse(e2);
  }
}
class o2 {
  constructor() {
    this._spriteInfo = {}, this._glyphInfo = {};
  }
  reset() {
    return this._spriteInfo = {}, this._glyphInfo = {}, Promise.resolve();
  }
  getLayers() {
    return this._styleRepository?.layers ?? [];
  }
  async createTileAndParse(t2, r5) {
    const { key: o3 } = t2, i$12 = {};
    for (const e2 of Object.keys(t2.sourceName2DataAndRefKey)) {
      const s4 = t2.sourceName2DataAndRefKey[e2];
      i$12[e2] = s4.refKey;
    }
    const n2 = new i(o3, i$12, this, this._styleRepository);
    try {
      return await n2.parse(t2, r5);
    } catch (l3) {
      if (n2.setObsolete(), n2.release(), !b$2(l3))
        throw l3;
      return null;
    }
  }
  updateStyle(e2) {
    if (!e2 || 0 === e2.length || !this._styleRepository)
      return;
    const s4 = this._styleRepository;
    for (const r5 of e2) {
      const e3 = r5.type, o3 = r5.data;
      switch (e3) {
        case I$2.PAINTER_CHANGED:
          s4.setPaintProperties(o3.layer, o3.paint);
          break;
        case I$2.LAYOUT_CHANGED:
          s4.setLayoutProperties(o3.layer, o3.layout);
          break;
        case I$2.LAYER_REMOVED:
          s4.deleteStyleLayer(o3.layer);
          break;
        case I$2.LAYER_CHANGED:
          s4.setStyleLayer(o3.layer, o3.index);
          break;
        case I$2.SPRITES_CHANGED:
          this._spriteInfo = {};
      }
    }
  }
  setStyle(e2) {
    this._styleRepository = new l$3(e2), this._spriteInfo = {}, this._glyphInfo = {};
  }
  fetchSprites(e2, t2, s4) {
    const r5 = [], o3 = this._spriteInfo;
    for (const i2 of e2) {
      void 0 === o3[i2.name] && r5.push(i2);
    }
    return 0 === r5.length ? Promise.resolve() : t2.invoke("getSprites", r5, { signal: s4?.signal }).then((e3) => {
      for (const t3 in e3) {
        const s5 = e3[t3];
        o3[t3] = s5;
      }
    });
  }
  getSpriteItems() {
    return this._spriteInfo;
  }
  fetchGlyphs(e2, t2, s4, r5, o3) {
    const i2 = [];
    let n2 = this._glyphInfo[t2];
    return n2 ? s4.forEach((e3) => {
      n2[e3] || i2.push(e3);
    }) : (n2 = this._glyphInfo[t2] = [], s4.forEach((e3) => i2.push(e3))), 0 === i2.length ? Promise.resolve() : r5.invoke("getGlyphs", { tileID: e2, font: t2, codePoints: i2 }, o3).then((e3) => {
      for (let t3 = 0; t3 < e3.length; t3++)
        e3[t3] && (n2[t3] = e3[t3]);
    });
  }
  getGlyphItems(e2) {
    return this._glyphInfo[e2];
  }
}
export {
  o2 as default
};
