import { cb as n$5, kR as e$3, kS as G, eA as D$1, T as T$1, aq as has, pk as f$1, a$ as j$1, tb as r$8, ch as o$3, kb as m$2, kc as u$2, AP as ae, aM as s$2, AQ as e$4, bS as e$5, mX as d$6, gR as n$6, bb as s$3, AR as ce, zO as _$3, b1 as s$4, bI as b, cF as s$5, AS as ue, AT as _$4, tC as L, hK as r$9, AU as C, AV as B, AW as f$2, AX as de, AY as le, AZ as ne, A_ as re, A$ as ye, B0 as fe, B1 as se, B2 as me, cc as c$7, B3 as ie, B4 as oe, AO as Pt, B5 as n$7, B6 as Ae, h8 as u$3, hV as r$a, bY as T$2, hW as R, kO as n$8, d1 as o$6, B7 as T$3, eY as i$3, Ak as X, B8 as Y$1, bs as g$4, bo as e$9, bp as y$1, br as c$8, fz as _$5, fF as c$9, B9 as l$5, eQ as n$9, Ba as l$6, cy as x$1, eg as p$3, Bb as At, mL as g$5, kG as i$4, oP as r$b, Bc as a$6, Bd as s$6, Be as et, mA as s$7, Bf as jt, fw as n$a, Bg as Z, Bh as ht, Bi as yt, wa as a$7, bD as u$4, Bj as Gt, b as e$a } from "./chunk-KFNcxJaF.js";
import { o as o$5, h as e$6, i as i$2 } from "./chunk-G90k0bzF.js";
import { c as c$6 } from "./chunk-W2fbhL5l.js";
import { t as t$4 } from "./chunk-Fng9kmUI.js";
import { o as o$4 } from "./chunk-DicJw-UR.js";
import { b as e$7 } from "./chunk-b7K892Yv.js";
import { t as t$5 } from "./chunk-jrhFla2W.js";
import { e as e$8 } from "./chunk-KMgzOHQd.js";
import { t as t$6 } from "./chunk-DnHFm0Vi.js";
const e$2 = { shaders: { vertexShader: n$5("bitBlit/bitBlit.vert"), fragmentShader: n$5("bitBlit/bitBlit.frag") }, attributes: /* @__PURE__ */ new Map([["a_pos", 0], ["a_tex", 1]]) };
let t$3 = class t {
  constructor(t3, e2) {
    this._width = 0, this._height = 0, this._free = [], this._width = t3, this._height = e2, this._free.push(new t$4(0, 0, t3, e2));
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  allocate(t3, e2) {
    if (t3 > this._width || e2 > this._height)
      return new t$4();
    let i2 = null, s3 = -1;
    for (let h2 = 0; h2 < this._free.length; ++h2) {
      const r4 = this._free[h2];
      t3 <= r4.width && e2 <= r4.height && (null === i2 || r4.y <= i2.y && r4.x <= i2.x) && (i2 = r4, s3 = h2);
    }
    return null === i2 ? new t$4() : (this._free.splice(s3, 1), i2.width < i2.height ? (i2.width > t3 && this._free.push(new t$4(i2.x + t3, i2.y, i2.width - t3, e2)), i2.height > e2 && this._free.push(new t$4(i2.x, i2.y + e2, i2.width, i2.height - e2))) : (i2.width > t3 && this._free.push(new t$4(i2.x + t3, i2.y, i2.width - t3, i2.height)), i2.height > e2 && this._free.push(new t$4(i2.x, i2.y + e2, t3, i2.height - e2))), new t$4(i2.x, i2.y, t3, e2));
  }
  release(h2) {
    for (let t3 = 0; t3 < this._free.length; ++t3) {
      const e2 = this._free[t3];
      if (e2.y === h2.y && e2.height === h2.height && e2.x + e2.width === h2.x)
        e2.width += h2.width;
      else if (e2.x === h2.x && e2.width === h2.width && e2.y + e2.height === h2.y)
        e2.height += h2.height;
      else if (h2.y === e2.y && h2.height === e2.height && h2.x + h2.width === e2.x)
        e2.x = h2.x, e2.width += h2.width;
      else {
        if (h2.x !== e2.x || h2.width !== e2.width || h2.y + h2.height !== e2.y)
          continue;
        e2.y = h2.y, e2.height += h2.height;
      }
      this._free.splice(t3, 1), this.release(h2);
    }
    this._free.push(h2);
  }
};
const n$4 = 256, o$2 = (t3) => Math.floor(t3 / 256);
function c$5(t3) {
  const e2 = /* @__PURE__ */ new Set();
  for (const i2 of t3)
    e2.add(o$2(i2));
  return e2;
}
function l$4(e2, i2, h2) {
  return e2.has(i2) || e2.set(i2, h2().then(() => {
    e2.delete(i2);
  }).catch((h3) => {
    e2.delete(i2), f$1(h3);
  })), e2.get(i2);
}
const g$3 = (t3) => ({ rect: new t$4(0, 0, 0, 0), page: 0, metrics: { left: 0, width: 0, height: 0, advance: 0, top: 0 }, code: t3, sdf: true });
let p$2 = class p {
  constructor(t3, e2, h2) {
    this.width = 0, this.height = 0, this._dirties = [], this._glyphData = [], this._currentPage = 0, this._glyphCache = {}, this._textures = [], this._rangePromises = /* @__PURE__ */ new Map(), this._preloadCache = {}, this.width = t3, this.height = e2, this._glyphSource = h2, this._binPack = new t$3(t3 - 4, e2 - 4), this._glyphData.push(new Uint8Array(t3 * e2)), this._dirties.push(true), this._textures.push(null), this._initDecorationGlyphs();
  }
  dispose() {
    this._binPack = null;
    for (const t3 of this._textures)
      t3 && t3.dispose();
    this._textures.length = 0, this._glyphData.length = 0;
  }
  _initDecorationGlyphs() {
    const t3 = [117, 149, 181, 207, 207, 181, 149, 117], e2 = [], i2 = [];
    for (let r4 = 0; r4 < t3.length; r4++) {
      const h3 = t3[r4];
      for (let t4 = 0; t4 < 11; t4++) {
        const s4 = r4 >= 3 && r4 < 5 && t4 >= 3 && t4 < 8 ? 255 : 0;
        e2.push(h3), i2.push(s4);
      }
    }
    const h2 = { metrics: { width: 5, height: 2, left: 0, top: 0, advance: 0 }, bitmap: new Uint8Array(e2) }, s3 = { metrics: { width: 5, height: 2, left: 0, top: 0, advance: 0 }, bitmap: new Uint8Array(i2) };
    this._recordGlyph(h2), this._recordGlyph(s3);
  }
  async getGlyphItems(t3, e2, i2) {
    const h2 = this._getGlyphCache(t3);
    return await this._fetchRanges(t3, e2, i2), e2.map((e3) => this._getMosaicItem(h2, t3, e3));
  }
  bind(t3, e2, i2, h2) {
    const s3 = this._getTexture(t3, i2);
    s3.setSamplingMode(e2), this._dirties[i2] && (s3.setData(this._glyphData[i2]), this._dirties[i2] = false), t3.bindTexture(s3, h2);
  }
  preloadASCIIGlyphCache(t3) {
    const e2 = this._preloadCache[t3];
    if (null != e2)
      return e2;
    const i2 = this._glyphSource.preloadASCIIRange(t3).then(() => {
      const e3 = this._getGlyphCache(t3);
      for (let i3 = 0; i3 < 256; i3++)
        this._getMosaicItem(e3, t3, i3);
    });
    return this._preloadCache[t3] = i2, i2;
  }
  _getGlyphCache(t3) {
    return this._glyphCache[t3] || (this._glyphCache[t3] = {}), this._glyphCache[t3];
  }
  _getTexture(t3, e2) {
    if (!this._textures[e2]) {
      const i2 = new e$3();
      i2.pixelFormat = G.ALPHA, i2.wrapMode = D$1.CLAMP_TO_EDGE, i2.width = this.width, i2.height = this.height, this._textures[e2] = new T$1(t3, i2, new Uint8Array(this.width * this.height));
    }
    return this._textures[e2];
  }
  _invalidate() {
    this._dirties[this._currentPage] = true;
  }
  async _fetchRanges(t3, e2, i2) {
    const h2 = c$5(e2), s3 = [];
    h2.forEach((e3) => {
      s3.push(this._fetchRange(t3, e3, i2));
    }), await Promise.all(s3);
  }
  async _fetchRange(t3, e2, i2) {
    if (e2 > n$4)
      return;
    const h2 = t3 + e2;
    return l$4(this._rangePromises, h2, () => this._glyphSource.getRange(t3, e2, i2));
  }
  _getMosaicItem(t3, e2, i2) {
    if (!t3[i2]) {
      const h2 = this._glyphSource.getGlyph(e2, i2);
      if (!h2?.metrics)
        return g$3(i2);
      const s3 = this._recordGlyph(h2), r4 = this._currentPage, a5 = h2.metrics;
      t3[i2] = { rect: s3, page: r4, metrics: a5, code: i2, sdf: true }, this._invalidate();
    }
    return t3[i2];
  }
  _recordGlyph(t3) {
    const h2 = t3.metrics;
    let s3;
    if (0 === h2.width)
      s3 = new t$4(0, 0, 0, 0);
    else {
      const e2 = 3, r4 = h2.width + 2 * e2, a5 = h2.height + 2 * e2;
      s3 = this._binPack.allocate(r4, a5), s3.isEmpty && (this._dirties[this._currentPage] || (this._glyphData[this._currentPage] = null), this._currentPage = this._glyphData.length, this._glyphData.push(new Uint8Array(this.width * this.height)), this._dirties.push(true), this._textures.push(null), this._initDecorationGlyphs(), this._binPack = new t$3(this.width - 4, this.height - 4), s3 = this._binPack.allocate(r4, a5));
      const n4 = this._glyphData[this._currentPage], o2 = t3.bitmap;
      let c4, l3;
      if (o2)
        for (let t4 = 0; t4 < a5; t4++) {
          c4 = r4 * t4, l3 = this.width * (s3.y + t4) + s3.x;
          for (let t5 = 0; t5 < r4; t5++)
            n4[l3 + t5] = o2[c4 + t5];
        }
      has("esri-glyph-debug") && this._showDebugPage(n4);
    }
    return s3;
  }
  _showDebugPage(t3) {
    const e2 = document.createElement("canvas"), i2 = e2.getContext("2d"), h2 = new ImageData(this.width, this.height), s3 = h2.data;
    e2.width = this.width, e2.height = this.height, e2.style.border = "1px solid black";
    for (let r4 = 0; r4 < t3.length; ++r4)
      s3[4 * r4] = t3[r4], s3[4 * r4 + 1] = 0, s3[4 * r4 + 2] = 0, s3[4 * r4 + 3] = 255;
    i2.putImageData(h2, 0, 0), document.body.appendChild(e2);
  }
};
let a$5 = class a {
  constructor(e2) {
    for (this._metrics = [], this._bitmaps = []; e2.next(); )
      switch (e2.tag()) {
        case 1: {
          const t3 = e2.getMessage();
          for (; t3.next(); )
            switch (t3.tag()) {
              case 3: {
                const e3 = t3.getMessage();
                let a5, s3, r4, n4, i2, c4, g2;
                for (; e3.next(); )
                  switch (e3.tag()) {
                    case 1:
                      a5 = e3.getUInt32();
                      break;
                    case 2:
                      s3 = e3.getBytes();
                      break;
                    case 3:
                      r4 = e3.getUInt32();
                      break;
                    case 4:
                      n4 = e3.getUInt32();
                      break;
                    case 5:
                      i2 = e3.getSInt32();
                      break;
                    case 6:
                      c4 = e3.getSInt32();
                      break;
                    case 7:
                      g2 = e3.getUInt32();
                      break;
                    default:
                      e3.skip();
                  }
                e3.release(), a5 && (this._metrics[a5] = { width: r4, height: n4, left: i2, top: c4, advance: g2 }, this._bitmaps[a5] = s3);
                break;
              }
              default:
                t3.skip();
            }
          t3.release();
          break;
        }
        default:
          e2.skip();
      }
  }
  getMetrics(e2) {
    return this._metrics[e2];
  }
  getBitmap(e2) {
    return this._bitmaps[e2];
  }
};
let s$1 = class s {
  constructor() {
    this._ranges = [];
  }
  getRange(e2) {
    return this._ranges[e2];
  }
  addRange(e2, t3) {
    this._ranges[e2] = t3;
  }
};
let r$7 = class r {
  constructor(e2) {
    this._glyphInfo = {}, this._baseURL = e2;
  }
  getRange(s3, r4, n4) {
    const i2 = this._getFontStack(s3);
    if (i2.getRange(r4))
      return Promise.resolve();
    const c4 = 256 * r4, g2 = c4 + 255, o2 = this._baseURL.replace("{fontstack}", s3).replace("{range}", c4 + "-" + g2);
    return j$1(o2, { responseType: "array-buffer", ...n4 }).then((e2) => {
      i2.addRange(r4, new a$5(new r$8(new Uint8Array(e2.data), new DataView(e2.data))));
    });
  }
  async preloadASCIIRange(s3) {
    const r4 = this._getFontStack(s3), n4 = 0, i2 = 255, c4 = this._baseURL.replace("{fontstack}", s3).replace("{range}", n4 + "-" + i2), g2 = await j$1(c4, { responseType: "array-buffer" }), o2 = new a$5(new r$8(new Uint8Array(g2.data), new DataView(g2.data)));
    for (let e2 = n4; e2 <= i2; e2++)
      r4.getRange(e2) || r4.addRange(e2, o2);
  }
  getGlyph(e2, t3) {
    const a5 = this._getFontStack(e2);
    if (!a5)
      return;
    const s3 = Math.floor(t3 / 256), r4 = a5.getRange(s3);
    return r4 ? { metrics: r4.getMetrics(t3), bitmap: r4.getBitmap(t3) } : void 0;
  }
  _getFontStack(e2) {
    let t3 = this._glyphInfo[e2];
    return t3 || (t3 = this._glyphInfo[e2] = new s$1()), t3;
  }
};
const i$1 = 1e20;
let r$6 = class r2 {
  constructor(t3) {
    this._svg = null, this.size = t3;
    const e2 = document.createElement("canvas");
    e2.width = e2.height = t3, this._context = e2.getContext("2d", { willReadFrequently: false }), this._gridOuter = new Float64Array(t3 * t3), this._gridInner = new Float64Array(t3 * t3), this._f = new Float64Array(t3), this._d = new Float64Array(t3), this._z = new Float64Array(t3 + 1), this._v = new Int16Array(t3);
  }
  dispose() {
    this._context = this._gridOuter = this._gridInner = this._f = this._d = this._z = this._v = null, this._svg && (document.body.removeChild(this._svg), this._svg = null);
  }
  draw(r4, h2, n4, o2 = 31) {
    this._initSVG();
    const d2 = this.createSVGString(r4, h2);
    return new Promise((r5, h3) => {
      const a5 = new Image();
      a5.src = "data:image/svg+xml; charset=utf8, " + encodeURIComponent(d2), a5.onload = () => {
        a5.onload = null, this._context.clearRect(0, 0, this.size, this.size), this._context.drawImage(a5, 0, 0, this.size, this.size);
        const e2 = this._context.getImageData(0, 0, this.size, this.size), s3 = new Uint8Array(this.size * this.size * 4);
        for (let t3 = 0; t3 < this.size * this.size; t3++) {
          const s4 = e2.data[4 * t3 + 3] / 255;
          this._gridOuter[t3] = 1 === s4 ? 0 : 0 === s4 ? i$1 : Math.max(0, 0.5 - s4) ** 2, this._gridInner[t3] = 1 === s4 ? i$1 : 0 === s4 ? 0 : Math.max(0, s4 - 0.5) ** 2;
        }
        this._edt(this._gridOuter, this.size, this.size), this._edt(this._gridInner, this.size, this.size);
        for (let i2 = 0; i2 < this.size * this.size; i2++) {
          const e3 = this._gridOuter[i2] - this._gridInner[i2];
          o$3(0.5 - e3 / (2 * o2), s3, 4 * i2);
        }
        r5(s3);
      };
      const l3 = n4?.signal;
      l3 && m$2(l3, () => h3(u$2()));
    });
  }
  _initSVG() {
    if (!this._svg) {
      const t3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      t3.setAttribute("style", "position: absolute;"), t3.setAttribute("width", "0"), t3.setAttribute("height", "0"), t3.setAttribute("aria-hidden", "true"), t3.setAttribute("role", "presentation"), document.body.appendChild(t3), this._svg = t3;
    }
    return this._svg;
  }
  createSVGString(t3, e2) {
    const s3 = this._initSVG(), i2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    i2.setAttribute("d", t3), s3.appendChild(i2);
    const r4 = i2.getBBox(), h2 = r4.width / r4.height, n4 = this.size / 2;
    let o2, d2, a5;
    if (h2 > 1) {
      o2 = n4 / r4.width;
      const t4 = n4 * (1 / h2);
      d2 = this.size / 4, a5 = n4 - t4 / 2;
    } else {
      o2 = n4 / r4.height;
      d2 = n4 - n4 * h2 / 2, a5 = this.size / 4;
    }
    const l3 = -r4.x * o2 + d2, _3 = -r4.y * o2 + a5;
    i2.setAttribute("style", `transform: matrix(${o2}, 0, 0, ${o2}, ${l3}, ${_3})`), i2.setAttribute("stroke-width", "" + 0.5 / o2);
    const g2 = `<svg style="fill:${e2 ? "red" : "none"}; stroke:${e2 ? "none" : "red"}" height="${this.size}" width="${this.size}" xmlns="http://www.w3.org/2000/svg">${s3.innerHTML}</svg>`;
    return s3.removeChild(i2), g2;
  }
  _edt(t3, e2, s3) {
    const i2 = this._f, r4 = this._d, h2 = this._v, n4 = this._z;
    for (let o2 = 0; o2 < e2; o2++) {
      for (let r5 = 0; r5 < s3; r5++)
        i2[r5] = t3[r5 * e2 + o2];
      this._edt1d(i2, r4, h2, n4, s3);
      for (let i3 = 0; i3 < s3; i3++)
        t3[i3 * e2 + o2] = r4[i3];
    }
    for (let o2 = 0; o2 < s3; o2++) {
      for (let s4 = 0; s4 < e2; s4++)
        i2[s4] = t3[o2 * e2 + s4];
      this._edt1d(i2, r4, h2, n4, e2);
      for (let s4 = 0; s4 < e2; s4++)
        t3[o2 * e2 + s4] = Math.sqrt(r4[s4]);
    }
  }
  _edt1d(t3, e2, s3, r4, h2) {
    s3[0] = 0, r4[0] = -i$1, r4[1] = +i$1;
    for (let n4 = 1, o2 = 0; n4 < h2; n4++) {
      let e3 = (t3[n4] + n4 * n4 - (t3[s3[o2]] + s3[o2] * s3[o2])) / (2 * n4 - 2 * s3[o2]);
      for (; e3 <= r4[o2]; )
        o2--, e3 = (t3[n4] + n4 * n4 - (t3[s3[o2]] + s3[o2] * s3[o2])) / (2 * n4 - 2 * s3[o2]);
      o2++, s3[o2] = n4, r4[o2] = e3, r4[o2 + 1] = +i$1;
    }
    for (let i2 = 0, n4 = 0; i2 < h2; i2++) {
      for (; r4[n4 + 1] < i2; )
        n4++;
      e2[i2] = (i2 - s3[n4]) * (i2 - s3[n4]) + t3[s3[n4]];
    }
  }
};
function c$4(t3) {
  return t3 && "static" === t3.type;
}
let n$3 = class n {
  constructor(t3, e2, i2 = 0) {
    this._mosaicPages = [], this._maxItemSize = 0, this._currentPage = 0, this._pageWidth = 0, this._pageHeight = 0, this._mosaicRects = /* @__PURE__ */ new Map(), this._spriteCopyQueue = [], this.pixelRatio = 1, (t3 <= 0 || e2 <= 0) && console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"), this._pageWidth = t3, this._pageHeight = e2, i2 > 0 && (this._maxItemSize = i2), this.pixelRatio = window.devicePixelRatio || 1, this._binPack = new t$3(this._pageWidth, this._pageHeight);
    const s3 = Math.floor(this._pageWidth), o2 = Math.floor(this._pageHeight);
    this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(s3 * o2) }, size: [this._pageWidth, this._pageHeight], dirty: true, texture: void 0 });
  }
  getWidth(t3) {
    return t3 >= this._mosaicPages.length ? -1 : this._mosaicPages[t3].size[0];
  }
  getHeight(t3) {
    return t3 >= this._mosaicPages.length ? -1 : this._mosaicPages[t3].size[1];
  }
  getPageTexture(t3) {
    return t3 < this._mosaicPages.length ? this._mosaicPages[t3].texture : null;
  }
  has(t3) {
    return this._mosaicRects.has(t3);
  }
  get itemCount() {
    return this._mosaicRects.size;
  }
  getSpriteItem(t3) {
    return this._mosaicRects.get(t3);
  }
  addSpriteItem(t3, i2, a5, o2, r4, h2, n4 = 1) {
    if (this._mosaicRects.has(t3))
      return this._mosaicRects.get(t3);
    let g2, p3, m2;
    if (c$4(a5))
      [g2, p3, m2] = this._allocateImage(i2[0], i2[1]);
    else {
      g2 = new t$4(0, 0, i2[0], i2[1]), p3 = this._mosaicPages.length;
      const t4 = void 0;
      this._mosaicPages.push({ mosaicsData: a5, size: [i2[0] + 2 * ae, i2[1] + 2 * ae], dirty: true, texture: t4 });
    }
    if (g2.width <= 0 || g2.height <= 0)
      return null;
    const d2 = { rect: g2, width: i2[0], height: i2[1], sdf: r4, simplePattern: h2, pixelRatio: n4, page: p3 };
    return this._mosaicRects.set(t3, d2), c$4(a5) && (has("esri-mosaic-debug") && this._showDebugSprite(i2, a5.data), this._copy({ rect: g2, spriteSize: i2, spriteData: a5.data, page: p3, pageSize: m2, repeat: o2, sdf: r4 })), d2;
  }
  hasItemsToProcess() {
    return 0 !== this._spriteCopyQueue.length;
  }
  processNextItem() {
    const t3 = this._spriteCopyQueue.pop();
    t3 && this._copy(t3);
  }
  getSpriteItems(t3) {
    const e2 = {};
    for (const i2 of t3)
      e2[i2] = this.getSpriteItem(i2);
    return e2;
  }
  getMosaicItemPosition(t3) {
    const i2 = this.getSpriteItem(t3), s3 = i2?.rect;
    if (!s3)
      return null;
    s3.width = i2.width, s3.height = i2.height;
    const a5 = i2.width, o2 = i2.height, r4 = ae, h2 = this._mosaicPages[i2.page].size;
    return { size: [i2.width, i2.height], tl: [(s3.x + r4) / h2[0], (s3.y + r4) / h2[1]], br: [(s3.x + r4 + a5) / h2[0], (s3.y + r4 + o2) / h2[1]], page: i2.page };
  }
  bind(t3, e2, i2 = 0, s3 = 0) {
    const a5 = this._mosaicPages[i2], o2 = a5.mosaicsData;
    let r4 = a5.texture;
    if (r4 || (r4 = p$1(t3, a5.size), a5.texture = r4), r4.setSamplingMode(e2), c$4(o2))
      t3.bindTexture(r4, s3), a5.dirty && (r4.setData(new Uint8Array(o2.data.buffer)), r4.generateMipmap(), has("esri-mosaic-debug") && this._showDebugPage(i2));
    else {
      o2.data.bindFrame(t3, r4, s3), r4.generateMipmap();
    }
    a5.dirty = false;
  }
  dispose() {
    this._binPack = null;
    for (const t3 of this._mosaicPages) {
      const e2 = t3.texture;
      e2 && e2.dispose();
      const i2 = t3.mosaicsData;
      if (!c$4(i2)) {
        i2.data.destroy();
      }
    }
    this._mosaicPages = null, this._mosaicRects.clear();
  }
  static _copyBits(t3, e2, i2, s3, a5, o2, r4, h2, c4, n4, g2) {
    let p3 = s3 * e2 + i2, m2 = h2 * o2 + r4;
    if (g2) {
      m2 -= o2;
      for (let r5 = -1; r5 <= n4; r5++, p3 = ((r5 + n4) % n4 + s3) * e2 + i2, m2 += o2)
        for (let e3 = -1; e3 <= c4; e3++)
          a5[m2 + e3] = t3[p3 + (e3 + c4) % c4];
    } else
      for (let d2 = 0; d2 < n4; d2++) {
        for (let e3 = 0; e3 < c4; e3++)
          a5[m2 + e3] = t3[p3 + e3];
        p3 += e2, m2 += o2;
      }
  }
  _copy(i2) {
    if (i2.page >= this._mosaicPages.length)
      return;
    const s3 = this._mosaicPages[i2.page], a5 = s3.mosaicsData;
    if (!c$4(s3.mosaicsData))
      throw new s$2("mapview-invalid-resource", "unsuitable data type!");
    const o2 = i2.spriteData, r4 = a5.data;
    r4 && o2 || console.error("Source or target images are uninitialized!"), n._copyBits(o2, i2.spriteSize[0], 0, 0, r4, i2.pageSize[0], i2.rect.x + ae, i2.rect.y + ae, i2.spriteSize[0], i2.spriteSize[1], i2.repeat), s3.dirty = true;
  }
  _allocateImage(t3, o2) {
    t3 += 2 * ae, o2 += 2 * ae;
    const r4 = Math.max(t3, o2);
    if (this._maxItemSize && this._maxItemSize < r4) {
      const e2 = 2 ** Math.ceil(e$4(t3)), a5 = 2 ** Math.ceil(e$4(o2)), r5 = new t$4(0, 0, t3, o2);
      return this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(e2 * a5) }, size: [e2, a5], dirty: true, texture: void 0 }), [r5, this._mosaicPages.length - 1, [e2, a5]];
    }
    const h2 = this._binPack.allocate(t3, o2);
    if (h2.width <= 0) {
      const e2 = this._mosaicPages[this._currentPage];
      return !e2.dirty && c$4(e2.mosaicsData) && (e2.mosaicsData.data = null), this._currentPage = this._mosaicPages.length, this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(this._pageWidth * this._pageHeight) }, size: [this._pageWidth, this._pageHeight], dirty: true, texture: void 0 }), this._binPack = new t$3(this._pageWidth, this._pageHeight), this._allocateImage(t3, o2);
    }
    return [h2, this._currentPage, [this._pageWidth, this._pageHeight]];
  }
  _showDebugSprite([t3, e2], i2) {
    const s3 = document.createElement("canvas");
    s3.width = t3, s3.height = e2, s3.setAttribute("style", `position: absolute; top: ${4 + 204 * g$2++}px; right: 208px; width: 200px; height: 200px; border: 1px solid black;`);
    const a5 = s3.getContext("2d"), o2 = new ImageData(t3, e2);
    o2.data.set(new Uint8Array(i2.buffer)), a5.putImageData(o2, 0, 0), document.body.appendChild(s3);
  }
  _showDebugPage(t3) {
    const e2 = this._mosaicPages[t3], { size: [i2, s3], mosaicsData: a5 } = e2;
    if (!c$4(a5))
      return void console.error("Could not show sprite mosaic debug for non-static resource");
    const o2 = `mosaicDebugPage${t3}`, r4 = document.getElementById(o2) ?? document.createElement("canvas");
    r4.id = o2, r4.width = i2, r4.height = s3, r4.setAttribute("style", `position: absolute; top: ${4 + 204 * t3}px; right: 4px; width: 200px; height: 200px; border: 1px solid black;`);
    const h2 = r4.getContext("2d"), n4 = new ImageData(i2, s3);
    n4.data.set(new Uint8Array(a5.data.buffer)), h2.putImageData(n4, 0, 0), document.body.appendChild(r4);
  }
};
let g$2 = 0;
function p$1(t3, e2) {
  const i2 = new e$3();
  return i2.width = e2[0], i2.height = e2[1], i2.wrapMode = D$1.CLAMP_TO_EDGE, new T$1(t3, i2, null);
}
function o$1(t3) {
  return n$6(t3.frameDurations.reduce((t4, e2) => t4 + e2, 0));
}
function s2(t3) {
  const { width: e2, height: r4 } = t3, i2 = t3.frameDurations.reverse(), a5 = (e3) => {
    const r5 = t3.frameDurations.length - 1 - e3;
    return t3.getFrame(r5);
  };
  return { frameCount: t3.frameCount, duration: t3.duration, frameDurations: i2, getFrame: a5, width: e2, height: r4 };
}
function m$1(t3, r4) {
  const { width: i2, height: a5, getFrame: n4 } = t3, o2 = r4 / t3.duration, s3 = t3.frameDurations.map((t4) => n$6(t4 * o2));
  return { frameCount: t3.frameCount, duration: t3.duration, frameDurations: s3, getFrame: n4, width: i2, height: a5 };
}
function u$1(t3, r4) {
  const { width: i2, height: a5, getFrame: n4 } = t3, o2 = t3.frameDurations.slice(), s3 = o2.shift();
  return o2.unshift(n$6(s3 + r4)), { frameCount: t3.frameCount, duration: t3.duration + r4, frameDurations: o2, getFrame: n4, width: i2, height: a5 };
}
function h$3(t3, r4) {
  const { width: i2, height: a5, getFrame: n4 } = t3, o2 = t3.frameDurations.slice(), s3 = o2.pop();
  return o2.push(n$6(s3 + r4)), { frameCount: t3.frameCount, duration: t3.duration + r4, frameDurations: o2, getFrame: n4, width: i2, height: a5 };
}
let c$3 = class c {
  constructor(t3, e2, r4, i2) {
    this._animation = t3, this._repeatType = r4, this._onFrameData = i2, this._direction = 1, this._currentFrame = 0, this.timeToFrame = this._animation.frameDurations[this._currentFrame];
    let a5 = 0;
    for (; e2 > a5; )
      a5 += this.timeToFrame, this.nextFrame();
    const n4 = this._animation.getFrame(this._currentFrame);
    this._onFrameData(n4);
  }
  nextFrame() {
    if (this._currentFrame += this._direction, this._direction > 0) {
      if (this._currentFrame === this._animation.frameDurations.length)
        switch (this._repeatType) {
          case d$6.None:
            this._currentFrame -= this._direction;
            break;
          case d$6.Loop:
            this._currentFrame = 0;
            break;
          case d$6.Oscillate:
            this._currentFrame -= this._direction, this._direction = -1;
        }
    } else if (-1 === this._currentFrame)
      switch (this._repeatType) {
        case d$6.None:
          this._currentFrame -= this._direction;
          break;
        case d$6.Loop:
          this._currentFrame = this._animation.frameDurations.length - 1;
          break;
        case d$6.Oscillate:
          this._currentFrame -= this._direction, this._direction = 1;
      }
    this.timeToFrame = this._animation.frameDurations[this._currentFrame];
    const t3 = this._animation.getFrame(this._currentFrame);
    this._onFrameData(t3);
  }
};
function f(t3, r4, f2, l3) {
  let d2, { repeatType: g2 } = r4;
  if (null == g2 && (g2 = d$6.Loop), true === r4.reverseAnimation && (t3 = s2(t3)), null != r4.duration && (t3 = m$1(t3, n$6(1e3 * r4.duration))), null != r4.repeatDelay) {
    const a5 = 1e3 * r4.repeatDelay;
    g2 === d$6.Loop ? t3 = h$3(t3, n$6(a5)) : g2 === d$6.Oscillate && (t3 = u$1(h$3(t3, n$6(a5 / 2)), n$6(a5 / 2)));
  }
  if (null != r4.startTimeOffset)
    d2 = n$6(1e3 * r4.startTimeOffset);
  else if (null != r4.randomizeStartTime) {
    const i2 = o$5(f2), s3 = 82749913, m2 = null != r4.randomizeStartSeed ? r4.randomizeStartSeed : s3, u2 = e$6(i2, m2);
    d2 = n$6(u2 * o$1(t3));
  } else
    d2 = n$6(0);
  return new c$3(t3, d2, g2, l3);
}
function l$3(e2, r4, i2, a5) {
  const n4 = null == r4.playAnimation || r4.playAnimation, o2 = f(e2, r4, i2, a5);
  let s3, m2 = o2.timeToFrame;
  function u2() {
    s3 = n4 ? setTimeout(() => {
      o2.nextFrame(), m2 = o2.timeToFrame, u2();
    }, m2) : void 0;
  }
  return u2(), e$5(() => n4 && clearTimeout(s3));
}
let d$5, g$1;
function F() {
  return d$5 ??= document.createElement("canvas"), g$1 ??= d$5.getContext("2d"), { canvas: d$5, ctx: g$1 };
}
function _$2(t3, e2, i2) {
  const { canvas: a5, ctx: n4 } = F();
  a5.width = e2, a5.height = i2;
  const o2 = [], s3 = t3.frameDurations.length;
  for (let m2 = 0; m2 < s3; m2++) {
    const a6 = t3.getFrame(m2);
    n4.clearRect(0, 0, e2, i2), a6 instanceof ImageData ? n4.drawImage(o$4(a6), 0, 0, e2, i2) : n4.drawImage(a6, 0, 0, e2, i2), o2.push(n4.getImageData(0, 0, e2, i2));
  }
  return { width: e2, height: i2, frameDurations: t3.frameDurations, getFrame: (t4) => o2[t4], frameCount: t3.frameCount, duration: t3.duration };
}
let a$4 = class a2 {
  constructor(t3, a5, e2, n4) {
    this._animation = t3, this._frameData = null;
    const h2 = (t4) => {
      this._frameData = t4, a5.requestRender();
    };
    this.frameCount = this._animation.frameDurations.length, this.width = this._animation.width, this.height = this._animation.height, this._playHandle = l$3(this._animation, e2, n4, h2);
  }
  destroy() {
    this._playHandle.remove();
  }
  bindFrame(i2, a5, e2) {
    i2.bindTexture(a5, e2);
    const n4 = this._frameData;
    if (null == n4)
      return;
    const h2 = "width" in n4 ? n4.width : n4.codedWidth, s3 = "height" in n4 ? n4.height : n4.codedHeight;
    a5.updateData(0, ae, ae, h2, s3, n4), this._frameData = null;
  }
};
function e$1(e2) {
  switch (e2.type) {
    case "esriSMS":
      return `${e2.style}.${e2.path}`;
    case "esriSLS":
      return `${e2.style}.${e2.cap}`;
    case "esriSFS":
      return `${e2.style}`;
    case "esriPFS":
    case "esriPMS":
      return e2.imageData ? `${e2.imageData}${e2.width}${e2.height}` : `${e2.url}${e2.width}${e2.height}`;
    default:
      return "mosaicHash" in e2 ? e2.mosaicHash : JSON.stringify(e2);
  }
}
const $ = n$7(), k = "arial-unicode-ms-regular", H = s$3.getLogger("esri.views.2d.engine.webgl.TextureManager");
function O(t3) {
  const e2 = Math.round(u$3(t3) * window.devicePixelRatio);
  return e2 * (e2 >= 128 ? 2 : 4);
}
function Q(t3, e2) {
  return Math.min(t3, O(e2));
}
function V(t3, e2) {
  if (!t3 || !e2)
    return { width: 0, height: 0 };
  const i2 = t3 / e2;
  if (i2 > 1) {
    const e3 = O(t3);
    return { width: e3, height: e3 / i2 };
  }
  const s3 = O(e2);
  return { width: s3 * i2, height: s3 };
}
const Y = (t3, e2, i2) => H.error(new s$2(t3, e2, i2));
class D {
  static fromMosaic(t3, e2) {
    return new D(t3, e2.page, e2.sdf);
  }
  constructor(t3, e2, i2) {
    this.mosaicType = t3, this.page = e2, this.sdf = i2;
  }
}
class J {
  constructor(i2, r4, o2) {
    this._requestRender = i2, this.resourceManager = r4, this._allowNonPowerOfTwo = o2, this._invalidFontsMap = /* @__PURE__ */ new Map(), this._sdfConverter = new r$6(ce), this._bindingInfos = new Array(), this._hashToBindingIndex = /* @__PURE__ */ new Map(), this._ongoingRasterizations = /* @__PURE__ */ new Map(), this._imageRequestQueue = new _$3({ concurrency: 10, process: async (t3, i3) => {
      s$4(i3);
      try {
        return await j$1(t3, { responseType: "image", signal: i3 });
      } catch (r5) {
        if (!b(r5))
          throw new s$2("mapview-invalid-resource", `Could not fetch requested resource at ${t3}`, r5);
        throw r5;
      }
    } }), this._spriteMosaic = new n$3(2048, 2048, 500), this._glyphSource = new r$7(`${s$5.fontsUrl}/{fontstack}/{range}.pbf`), this._glyphMosaic = new p$2(1024, 1024, this._glyphSource), this._rasterizer = new c$6(r4);
  }
  dispose() {
    this._spriteMosaic.dispose(), this._glyphMosaic.dispose(), this._rasterizer.dispose(), this._sdfConverter.dispose(), this._spriteMosaic = null, this._glyphMosaic = null, this._sdfConverter = null, this._hashToBindingIndex.clear(), this._hashToBindingIndex = null, this._bindingInfos = null, this._ongoingRasterizations.clear(), this._ongoingRasterizations = null, this._imageRequestQueue.clear(), this._imageRequestQueue = null;
  }
  get sprites() {
    return this._spriteMosaic;
  }
  get glyphs() {
    return this._glyphMosaic;
  }
  async rasterizeItem(t3, e2, i2, s3) {
    if (null == t3)
      return Y("mapview-null-resource", "Unable to rasterize null resource"), null;
    switch (t3.type) {
      case "text":
      case "esriTS": {
        const e3 = await this._rasterizeText(t3, i2, s3);
        return e3.forEach((t4) => this._setTextureBinding(_$4.GLYPH, t4)), { glyphMosaicItems: e3 };
      }
      default: {
        if (ue(t3))
          return Y("mapview-invalid-type", `MapView does not support symbol type: ${t3.type}`, t3), null;
        const i3 = await this._rasterizeSpriteSymbol(t3, e2, s3);
        return e$7(i3) && i3 && this._setTextureBinding(_$4.SPRITE, i3), { spriteMosaicItem: i3 };
      }
    }
  }
  bindTextures(t3, e2, i2, s3 = false) {
    if (0 === i2.textureBinding)
      return;
    const r4 = this._bindingInfos[i2.textureBinding - 1], o2 = r4.page, n4 = s3 ? L.LINEAR_MIPMAP_LINEAR : L.LINEAR;
    switch (r4.mosaicType) {
      case _$4.SPRITE: {
        const i3 = this.sprites.getWidth(o2), s4 = this.sprites.getHeight(o2), r5 = r$9($, i3, s4);
        return this._spriteMosaic.bind(t3, n4, o2, B), e2.setUniform1i("u_texture", B), void e2.setUniform2fv("u_mosaicSize", r5);
      }
      case _$4.GLYPH: {
        const i3 = this.glyphs.width, s4 = this.glyphs.height, r5 = r$9($, i3, s4);
        return this._glyphMosaic.bind(t3, n4, o2, C), e2.setUniform1i("u_texture", C), void e2.setUniform2fv("u_mosaicSize", r5);
      }
      default:
        H.error("mapview-texture-manager", `Cannot handle unknown type ${r4.mosaicType}`);
    }
  }
  _hashMosaic(t3, e2) {
    return 1 | t3 << 1 | (e2.sdf ? 1 : 0) << 2 | e2.page << 3;
  }
  _setTextureBinding(t3, e2) {
    const i2 = this._hashMosaic(t3, e2);
    if (!this._hashToBindingIndex.has(i2)) {
      const s3 = D.fromMosaic(t3, e2), r4 = this._bindingInfos.length + 1;
      this._hashToBindingIndex.set(i2, r4), this._bindingInfos.push(s3);
    }
    e2.textureBinding = this._hashToBindingIndex.get(i2);
  }
  async _rasterizeText(t3, e2, s3) {
    let o2, n4;
    if ("cim" in t3) {
      const e3 = t3;
      o2 = e3.fontName, n4 = e3.text;
    } else {
      const e3 = t3;
      o2 = f$2(e3.font), n4 = e3.text;
    }
    const a5 = this._invalidFontsMap.has(o2), h2 = e2 || de(i$2(n4)[0]);
    try {
      const t4 = a5 ? k : o2;
      return has("esri-2d-stabilize-glyphs") && await this._glyphMosaic.preloadASCIIGlyphCache(t4), await this._glyphMosaic.getGlyphItems(t4, h2, s3);
    } catch (c4) {
      return Y("mapview-invalid-resource", `Couldn't find font ${o2}. Falling back to Arial Unicode MS Regular`), this._invalidFontsMap.set(o2, true), this._glyphMosaic.getGlyphItems(k, h2, s3);
    }
  }
  async _rasterizeSpriteSymbol(t3, e2, i2) {
    if (le(t3))
      return;
    const r4 = e$1(t3);
    if (this._spriteMosaic.has(r4))
      return this._spriteMosaic.getSpriteItem(r4);
    if (ne(t3) || re(t3) && !ye(t3))
      return this._handleAsyncResource(r4, t3, i2);
    const o2 = Ae, n4 = this._rasterizer.rasterizeJSONResource(t3, o2);
    if (n4) {
      const { size: e3, image: i3, sdf: s3, simplePattern: o3, rasterizationScale: a5 } = n4;
      return this._addItemToMosaic(r4, e3, { type: "static", data: i3 }, fe(t3), s3, o3, a5);
    }
    return new s$2("TextureManager", "unrecognized or null rasterized image");
  }
  async _handleAsyncResource(t3, e2, i2) {
    if (this._ongoingRasterizations.has(t3))
      return this._ongoingRasterizations.get(t3);
    let s3;
    s3 = ne(e2) ? this._handleSVG(e2, t3, i2) : this._handleImage(e2, t3, i2), this._ongoingRasterizations.set(t3, s3);
    try {
      await s3, this._ongoingRasterizations.delete(t3);
    } catch {
      this._ongoingRasterizations.delete(t3);
    }
    return s3;
  }
  async _handleSVG(t3, e2, i2) {
    const s3 = [ce, ce], r4 = !("cim" in t3) || t3.cim.asFill, o2 = await this._sdfConverter.draw(t3.path, r4, i2);
    return this._addItemToMosaic(e2, s3, { type: "static", data: new Uint32Array(o2.buffer) }, false, true, true);
  }
  async _handleGIFOrPNG(t3, e2, i2) {
    const r4 = se(t3);
    await this.resourceManager.fetchResource(r4, i2);
    let o2 = this.resourceManager.getResource(r4);
    if (null == o2)
      return new s$2("mapview-invalid-resource", `Could not fetch requested resource at ${r4}.`);
    let a5 = o2.width, h2 = o2.height;
    if (o2 instanceof HTMLImageElement) {
      "esriPMS" === t3.type && (a5 = Math.round(Q(o2.width, me(t3))), h2 = Math.round(o2.height * (a5 / o2.width)));
      const i3 = "cim" in t3 ? t3.cim.colorSubstitutions : void 0, { size: s3, sdf: r5, image: n4 } = this._rasterizer.rasterizeImageResource(a5, h2, o2, i3);
      return this._addItemToMosaic(e2, s3, { type: "static", data: n4 }, fe(t3), r5, false);
    }
    this._allowNonPowerOfTwo || (a5 = c$7(o2.width + 2 * ae) - 2 * ae, h2 = c$7(o2.height + 2 * ae) - 2 * ae), a5 === o2.width && h2 === o2.height || (o2 = _$2(o2, a5, h2));
    const c4 = t3.animatedSymbolProperties || {}, u2 = t3.objectId, d2 = new a$4(o2, this._requestRender, c4, u2);
    return this._addItemToMosaic(e2, [d2.width, d2.height], { type: "animated", data: d2 }, fe(t3), false, false);
  }
  async _handleImage(t3, e2, i2) {
    if (ie(t3) || oe(t3))
      return this._handleGIFOrPNG(t3, e2, i2);
    const r4 = se(t3);
    try {
      let s3;
      const o2 = this.resourceManager.getResource(r4);
      if (null != o2 && o2 instanceof HTMLImageElement)
        s3 = o2;
      else {
        const { data: t4 } = await this._imageRequestQueue.push(r4, { ...i2 });
        s3 = t4;
      }
      if (Pt(r4)) {
        if ("width" in t3 && "height" in t3) {
          const { width: e3, height: i3 } = V(t3.width, t3.height);
          s3.width = e3, s3.height = i3;
        } else if ("cim" in t3) {
          const e3 = t3.cim, { width: i3, height: r5 } = V(e3.width ?? e3.scaleX * e3.size, e3.size);
          s3.width = i3, s3.height = r5;
        }
      }
      if (!s3.width || !s3.height)
        return null;
      let n4 = s3.width, a5 = s3.height;
      "esriPMS" === t3.type && (n4 = Math.round(Q(s3.width, me(t3))), a5 = Math.round(s3.height * (n4 / s3.width)));
      const h2 = "cim" in t3 ? t3.cim.colorSubstitutions : void 0, { size: c4, sdf: d2, image: l3 } = this._rasterizer.rasterizeImageResource(n4, a5, s3, h2);
      return this._addItemToMosaic(e2, c4, { type: "static", data: l3 }, fe(t3), d2, false);
    } catch (Y2) {
      if (!b(Y2))
        return new s$2("mapview-invalid-resource", `Could not fetch requested resource at ${r4}. ${Y2.message}`);
    }
  }
  _addItemToMosaic(t3, e2, i2, s3, r4, o2, n4) {
    return this._spriteMosaic.addSpriteItem(t3, e2, i2, s3, r4, o2, n4);
  }
}
const r$5 = { shaders: { vertexShader: n$5("stencil/stencil.vert"), fragmentShader: n$5("stencil/stencil.frag") }, attributes: /* @__PURE__ */ new Map([["a_pos", 0]]) };
const r$4 = (e2) => e2.replace("-", "_").toUpperCase(), t$2 = (e2) => `#define ${r$4(e2)}
`;
function n$2(r4) {
  return { attributes: /* @__PURE__ */ new Map([["a_pos", 0], ["a_tex", 1]]), shaders: { vertexShader: t$2(r4) + n$5("blend/blend.vert"), fragmentShader: t$2(r4) + n$5("blend/blend.frag") } };
}
const c$2 = s$3.getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect");
class m {
  constructor() {
    this._size = [0, 0];
  }
  dispose(e2) {
    this._backBufferTexture = r$a(this._backBufferTexture), this._quad = r$a(this._quad);
  }
  draw(r4, t3, i2, a5, d2) {
    const { context: u2, drawPhase: f2 } = r4;
    if (this._setupShader(u2), a5 && "normal" !== a5 && f2 !== T$2.LABEL)
      return void this._drawBlended(r4, t3, i2, a5, d2);
    const m2 = n$2("normal"), h2 = u2.programCache.acquire(m2.shaders.vertexShader, m2.shaders.fragmentShader, m2.attributes);
    if (!h2)
      return void c$2.error(new s$2("mapview-BlendEffect", 'Error creating shader program for blend mode "normal"'));
    u2.useProgram(h2), t3.setSamplingMode(i2), u2.bindTexture(t3, 0), h2.setUniform1i("u_layerTexture", 0), h2.setUniform1f("u_opacity", d2), u2.setBlendingEnabled(true), u2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA);
    const l3 = this._quad;
    l3.draw(), l3.unbind(), h2.dispose();
  }
  _drawBlended(r4, t3, s3, i2, a5) {
    const { context: d2, state: u2, pixelRatio: f2, inFadeTransition: m2 } = r4, { size: h2 } = u2, l3 = d2.getBoundFramebufferObject();
    let _3, p3;
    null != l3 ? (_3 = l3.width, p3 = l3.height) : (_3 = Math.round(f2 * h2[0]), p3 = Math.round(f2 * h2[1])), this._createOrResizeTexture(r4, _3, p3);
    const b2 = this._backBufferTexture;
    l3.copyToTexture(0, 0, _3, p3, 0, 0, b2), d2.setStencilTestEnabled(false), d2.setStencilWriteMask(0), d2.setBlendingEnabled(true), d2.setDepthTestEnabled(false), d2.setDepthWriteEnabled(false);
    const g2 = n$2(i2), x = d2.programCache.acquire(g2.shaders.vertexShader, g2.shaders.fragmentShader, g2.attributes);
    if (!x)
      return void c$2.error(new s$2("mapview-BlendEffect", `Error creating shader program for blend mode ${i2}`));
    d2.useProgram(x), b2.setSamplingMode(s3), d2.bindTexture(b2, 0), x.setUniform1i("u_backbufferTexture", 0), t3.setSamplingMode(s3), d2.bindTexture(t3, 1), x.setUniform1i("u_layerTexture", 1), x.setUniform1f("u_opacity", a5), x.setUniform1f("u_inFadeOpacity", m2 ? 1 : 0), d2.setBlendFunction(R.ONE, R.ZERO);
    const T2 = this._quad;
    T2.draw(), T2.unbind(), x.dispose(), d2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA);
  }
  _setupShader(e2) {
    this._quad || (this._quad = new n$8(e2, [-1, -1, 1, -1, -1, 1, 1, 1]));
  }
  _createOrResizeTexture(e2, r4, t3) {
    const { context: s3 } = e2;
    if (null === this._backBufferTexture || r4 !== this._size[0] || t3 !== this._size[1]) {
      if (this._backBufferTexture)
        this._backBufferTexture.resize(r4, t3);
      else {
        const e3 = new e$3();
        e3.internalFormat = G.RGBA, e3.wrapMode = D$1.CLAMP_TO_EDGE, e3.width = r4, e3.height = t3, this._backBufferTexture = new T$1(s3, e3);
      }
      this._size[0] = r4, this._size[1] = t3;
    }
  }
}
const t$1 = { shaders: { vertexShader: n$5("highlight/textured.vert"), fragmentShader: n$5("highlight/highlight.frag") }, attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) }, r$3 = { shaders: { vertexShader: n$5("highlight/textured.vert"), fragmentShader: n$5("highlight/blur.frag") }, attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
const r$2 = has("esri-2d-profiler");
let n$1 = class n2 {
  constructor(n4, i2) {
    if (this._events = new o$6(), this._entries = /* @__PURE__ */ new Map(), this._timings = new t$5(10), this._currentContainer = null, this._currentPass = null, this._currentBrush = null, this._currentSummary = null, !r$2)
      return;
    this._ext = T$3(n4.gl, {}), this._debugOutput = i2;
    const o2 = n4.gl;
    if (!this.enableCommandLogging)
      return;
    let a5;
    for (a5 in o2)
      if ("function" == typeof o2[a5]) {
        const e2 = o2[a5], t3 = a5.includes("draw");
        o2[a5] = (...s3) => (this._events.emit("command", { container: this._currentContainer, pass: this._currentPass, brush: this._currentBrush, method: a5, args: s3, isDrawCommand: t3 }), this._currentSummary && (this._currentSummary.commands++, t3 && this._currentSummary.drawCommands++), e2.apply(o2, s3));
      }
  }
  get enableCommandLogging() {
    return !("object" == typeof r$2 && r$2.disableCommands);
  }
  recordContainerStart(e2) {
    r$2 && (this._currentContainer = e2);
  }
  recordContainerEnd() {
    r$2 && (this._currentContainer = null);
  }
  recordPassStart(e2) {
    r$2 && (this._currentPass = e2, this._initSummary());
  }
  recordPassEnd() {
    r$2 && (this._currentPass = null, this._emitSummary());
  }
  recordBrushStart(e2) {
    r$2 && (this._currentBrush = e2);
  }
  recordBrushEnd() {
    r$2 && (this._currentBrush = null);
  }
  recordStart(e2) {
    if (r$2 && null != this._ext) {
      if (this._entries.has(e2)) {
        const t4 = this._entries.get(e2), s3 = this._ext.resultAvailable(t4.query), r4 = this._ext.disjoint();
        if (s3 && !r4) {
          const s4 = this._ext.getResult(t4.query) / 1e6;
          let r5 = 0;
          if (null != this._timings.enqueue(s4)) {
            const e3 = this._timings.entries, t5 = e3.length;
            let s5 = 0;
            for (const r6 of e3)
              s5 += r6;
            r5 = s5 / t5;
          }
          const n4 = s4.toFixed(2), i2 = r5 ? r5.toFixed(2) : "--";
          this.enableCommandLogging ? (console.groupCollapsed(`Frame report for ${e2}, ${n4} ms (${i2} last 10 avg)
${t4.commandsLen} Commands (${t4.drawCommands} draw)`), console.log("RenderPass breakdown: "), console.table(t4.summaries), console.log("Commands: ", t4.commands), console.groupEnd()) : console.log(`Frame report for ${e2}, ${n4} ms (${i2} last 10 avg)`), this._debugOutput.innerHTML = `${n4} (${i2})`;
        }
        for (const e3 of t4.handles)
          e3.remove();
        this._ext.deleteQuery(t4.query), this._entries.delete(e2);
      }
      const t3 = { name: e2, query: this._ext.createQuery(), commands: [], commandsLen: 0, drawCommands: 0, summaries: [], handles: [] };
      this.enableCommandLogging && (t3.handles.push(this._events.on("command", (e3) => {
        t3.commandsLen++, t3.commands.push(e3), e3.isDrawCommand && t3.drawCommands++;
      })), t3.handles.push(this._events.on("summary", (e3) => {
        t3.summaries.push(e3);
      }))), this._ext.beginTimeElapsed(t3.query), this._entries.set(e2, t3);
    }
  }
  recordEnd(e2) {
    r$2 && null != this._ext && this._entries.has(e2) && this._ext.endTimeElapsed();
  }
  _initSummary() {
    this.enableCommandLogging && (this._currentSummary = { container: this._currentContainer, pass: this._currentPass, drawCommands: 0, commands: 0 });
  }
  _emitSummary() {
    this.enableCommandLogging && this._currentSummary && this._events.emit("summary", this._currentSummary);
  }
};
const e = 2, i = 1, o = 0, h$2 = 1, r$1 = 2;
let l$2 = class l {
  constructor(t3, e2, o2) {
    this._debugMap = /* @__PURE__ */ new Map(), this._width = t3 * o2, this._height = e2 * o2, this._pixelRatio = o2;
    const h2 = Math.ceil(this._width / i), r4 = Math.ceil(this._height / i);
    this._cols = h2, this._rows = r4, this._cells = t$6.create(h2 * r4);
  }
  insertMetrics(t3) {
    const s3 = this._hasCollision(t3);
    return s3 === o && this._markMetrics(t3), s3;
  }
  getCellId(t3, s3) {
    return t3 + s3 * this._cols;
  }
  has(t3) {
    return this._cells.has(t3);
  }
  hasRange(t3, s3) {
    return this._cells.hasRange(t3, s3);
  }
  set(t3) {
    this._cells.set(t3);
  }
  setRange(t3, s3) {
    this._cells.setRange(t3, s3);
  }
  _collide(s3, e2, l3, n4) {
    const c4 = s3 - l3 / 2, a5 = e2 - n4 / 2, _3 = c4 + l3, d2 = a5 + n4;
    if (_3 < 0 || d2 < 0 || c4 > this._width || a5 > this._height)
      return h$2;
    const u2 = i$3(Math.floor(c4 / i), 0, this._cols), p3 = i$3(Math.floor(a5 / i), 0, this._rows), M = i$3(Math.ceil(_3 / i), 0, this._cols), f2 = i$3(Math.ceil(d2 / i), 0, this._rows);
    for (let t3 = p3; t3 <= f2; t3++)
      for (let s4 = u2; s4 <= M; s4++) {
        const e3 = this.getCellId(s4, t3);
        if (this.has(e3))
          return r$1;
      }
    return o;
  }
  _mark(s3, e2, o2, h2, r4) {
    const l3 = s3 - o2 / 2, n4 = e2 - h2 / 2, c4 = l3 + o2, a5 = n4 + h2, _3 = i$3(Math.floor(l3 / i), 0, this._cols), d2 = i$3(Math.floor(n4 / i), 0, this._rows), u2 = i$3(Math.ceil(c4 / i), 0, this._cols), p3 = i$3(Math.ceil(a5 / i), 0, this._rows);
    for (let t3 = d2; t3 <= p3; t3++)
      for (let s4 = _3; s4 <= u2; s4++) {
        const e3 = this.getCellId(s4, t3);
        this._debugMap.set(e3, r4), this.set(e3);
      }
    return false;
  }
  _hasCollision(t3) {
    const s3 = t3.id;
    let i2 = 0, l3 = 0;
    t3.save();
    do {
      const s4 = t3.boundsCount;
      i2 += s4;
      for (let i3 = 0; i3 < s4; i3++) {
        const s5 = t3.boundsComputedAnchorX(i3), o2 = t3.boundsComputedAnchorY(i3), n4 = (t3.boundsWidth(i3) + e) * this._pixelRatio, c4 = (t3.boundsHeight(i3) + e) * this._pixelRatio;
        switch (this._collide(s5, o2, n4, c4)) {
          case r$1:
            return r$1;
          case h$2:
            l3++;
        }
      }
    } while (t3.peekId() === s3 && t3.next());
    return t3.restore(), i2 === l3 ? h$2 : o;
  }
  _markMetrics(t3) {
    const s3 = t3.id;
    t3.save();
    do {
      const s4 = t3.boundsCount;
      for (let i2 = 0; i2 < s4; i2++) {
        const s5 = t3.boundsComputedAnchorX(i2), o2 = t3.boundsComputedAnchorY(i2), h2 = (t3.boundsWidth(i2) + e) * this._pixelRatio, r4 = (t3.boundsHeight(i2) + e) * this._pixelRatio;
        this._mark(s5, o2, h2, r4, t3.id);
      }
    } while (t3.peekId() === s3 && t3.next());
    t3.restore();
  }
};
const r3 = 254, l$1 = 255, a$3 = 0;
function d$4(e2, i2) {
  const t3 = [];
  e2.forEachTile((e3) => t3.push(e3)), t3.sort((e3, i3) => e3.instanceId - i3.instanceId), t3.forEach((e3) => {
    null != e3.labelMetrics && e3.isReady && i2(e3, e3.labelMetrics.getCursor());
  });
}
let c$1 = class c2 {
  run(e2, i2, t3) {
    const o2 = [];
    for (let s3 = e2.length - 1; s3 >= 0; s3--) {
      const i3 = e2[s3];
      i3.labelingCollisionInfos && o2.push(...i3.labelingCollisionInfos);
    }
    this._transformMetrics(o2), this._runCollision(o2, i2, t3);
  }
  _runCollision(e2, i2, o2) {
    const [s3, n4] = i2.state.size, r4 = new l$2(s3, n4, i2.pixelRatio);
    for (const { tileRenderer: t3, deconflictionEnabled: c4, visible: f2 } of e2) {
      const e3 = t3.featuresView.attributeView;
      c4 ? f2 ? (this._prepare(t3), this._collideVisible(r4, t3, o2), this._collideInvisible(r4, t3)) : d$4(t3, (i3, t4) => {
        for (; t4.nextId(); )
          e3.setLabelMinZoom(t4.id, l$1);
      }) : d$4(t3, (i3, t4) => {
        for (; t4.nextId(); )
          e3.setLabelMinZoom(t4.id, a$3), f2 && r4.insertMetrics(t4);
      });
    }
  }
  _isFiltered(t3, o2, s3) {
    const n4 = o2.getFilterFlags(t3), r4 = !s3.hasFilter || !!(n4 & X), l3 = null == s3.featureEffect || s3.featureEffect.excludedLabelsVisible || !!(n4 & Y$1);
    return !(r4 && l3);
  }
  _prepare(e2) {
    const i2 = e2.featuresView.attributeView, t3 = /* @__PURE__ */ new Set();
    d$4(e2, (o2, s3) => {
      for (; s3.nextId(); ) {
        if (t3.has(s3.id))
          continue;
        if (t3.add(s3.id), this._isFiltered(s3.id, i2, e2.layerView)) {
          i2.setLabelMinZoom(s3.id, r3);
          continue;
        }
        i2.getLabelMinZoom(s3.id) !== a$3 ? i2.setLabelMinZoom(s3.id, l$1) : i2.setLabelMinZoom(s3.id, a$3);
      }
    });
  }
  _collideVisible(e2, i2, t3) {
    const l3 = i2.featuresView.attributeView, c4 = /* @__PURE__ */ new Set();
    d$4(i2, (i3, d2) => {
      for (; d2.nextId(); )
        if (!c4.has(d2.id))
          if (i3.key.level === t3) {
            if (0 === l3.getLabelMinZoom(d2.id)) {
              switch (e2.insertMetrics(d2)) {
                case h$2:
                  break;
                case r$1:
                  l3.setLabelMinZoom(d2.id, r3), c4.add(d2.id);
                  break;
                case o:
                  l3.setLabelMinZoom(d2.id, a$3), c4.add(d2.id);
              }
            }
          } else
            l3.setLabelMinZoom(d2.id, r3);
    });
  }
  _collideInvisible(e2, i2) {
    const t3 = i2.featuresView.attributeView, r4 = /* @__PURE__ */ new Set();
    d$4(i2, (i3, d2) => {
      for (; d2.nextId(); )
        if (!r4.has(d2.id) && t3.getLabelMinZoom(d2.id) === l$1) {
          switch (e2.insertMetrics(d2)) {
            case h$2:
              break;
            case r$1:
              t3.setLabelMinZoom(d2.id, l$1), r4.add(d2.id);
              break;
            case o:
              t3.setLabelMinZoom(d2.id, a$3), r4.add(d2.id);
          }
        }
    });
  }
  _transformMetrics(e2) {
    for (const { tileRenderer: i2, geometryType: t3, vvEvaluators: o2 } of e2)
      d$4(i2, (e3, s3) => {
        const n4 = i2.featuresView.attributeView, r4 = e3.transforms.labelMat2d;
        r4[4] = Math.round(r4[4]), r4[5] = Math.round(r4[5]);
        const l3 = "polyline" === t3;
        for (; s3.next(); ) {
          const e4 = s3.boundsCount, i3 = s3.anchorX, t4 = s3.anchorY;
          let a5 = s3.size;
          const d2 = o2[0];
          if (null != d2) {
            const e5 = d2(n4.getVVSize(s3.id));
            a5 = isNaN(e5) || null == e5 || e5 === 1 / 0 ? a5 : e5;
          }
          const c4 = s3.directionX * (a5 / 2), f2 = s3.directionY * (a5 / 2);
          for (let o3 = 0; o3 < e4; o3++) {
            let e5 = i3, n5 = s3.anchorY;
            if (l3) {
              let i4 = e5 + s3.boundsX(o3) + c4, t5 = n5 + s3.boundsY(o3) + f2;
              i4 = r4[0] * i4 + r4[2] * t5 + r4[4], t5 = r4[1] * i4 + r4[3] * t5 + r4[5], s3.setBoundsComputedAnchorX(o3, Math.floor(i4)), s3.setBoundsComputedAnchorY(o3, Math.floor(t5));
            } else {
              e5 = r4[0] * i3 + r4[2] * t4 + r4[4], n5 = r4[1] * i3 + r4[3] * t4 + r4[5];
              const l4 = e5 + s3.boundsX(o3) + c4, a6 = n5 + s3.boundsY(o3) + f2;
              s3.setBoundsComputedAnchorX(o3, l4), s3.setBoundsComputedAnchorY(o3, a6);
            }
          }
        }
      });
  }
};
const p2 = 32;
let a$2 = class a3 extends g$4 {
  constructor(e2) {
    super(e2), this.collisionEngine = new c$1(), this.lastUpdateId = -1, this.updateRequested = false, this.view = null, this._applyVisibilityPass = e$8((e3) => {
      const t3 = this.view;
      if (t3)
        try {
          const s3 = t3.featuresTilingScheme.getClosestInfoForScale(e3.state.scale).level;
          this.collisionEngine.run(t3.allLayerViews.items, e3, s3);
        } catch (s3) {
        }
    }, p2, this), this.addHandles(this._applyVisibilityPass);
  }
  get updating() {
    return has("esri-2d-log-updating") && console.log(`Updating LabelManager ${this.updateRequested}:
-> updateRequested: ${this.updateRequested}`), this.updateRequested;
  }
  update(e2) {
    this._applyVisibilityPass(e2);
  }
  viewChange() {
    this.requestUpdate();
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = true, this.view?.requestUpdate());
  }
  processUpdate(e2) {
    this.updateRequested && (this.updateRequested = false, this.update(e2));
  }
};
e$9([y$1()], a$2.prototype, "updateRequested", void 0), e$9([y$1()], a$2.prototype, "updating", null), e$9([y$1()], a$2.prototype, "view", void 0), a$2 = e$9([c$8("esri.views.2d.LabelManager")], a$2);
const a$1 = "esri-zoom-box", n3 = { container: `${a$1}__container`, overlay: `${a$1}__overlay`, background: `${a$1}__overlay-background`, box: `${a$1}__outline` }, h$1 = { zoom: "Shift", counter: "Ctrl" };
let l2 = class extends g$4 {
  constructor(t3) {
    super(t3), this._container = null, this._overlay = null, this._backgroundShape = null, this._boxShape = null, this._box = { x: 0, y: 0, width: 0, height: 0 }, this._rafId = null, this._redraw = this._redraw.bind(this);
  }
  destroy() {
    this.view = null;
  }
  set view(t3) {
    this.removeAllHandles(), this._destroyOverlay(), this._set("view", t3), t3 && this.addHandles([t3.on("drag", [h$1.zoom], (t4) => this._handleDrag(t4, 1), _$5.INTERNAL), t3.on("drag", [h$1.zoom, h$1.counter], (t4) => this._handleDrag(t4, -1), _$5.INTERNAL)]);
  }
  _start() {
    this._createContainer(), this._createOverlay(), this.navigation.begin();
  }
  _update(t3, e2, r4, i2) {
    this._box.x = t3, this._box.y = e2, this._box.width = r4, this._box.height = i2, this._rafId || (this._rafId = requestAnimationFrame(this._redraw));
  }
  _end(t3, e2, i2, s3, o2) {
    const a5 = this.view, n4 = a5.toMap(c$9(t3 + 0.5 * i2, e2 + 0.5 * s3));
    let h2 = Math.max(i2 / a5.width, s3 / a5.height);
    -1 === o2 && (h2 = 1 / h2), this._destroyOverlay(), this.navigation.end(), a5.goTo({ center: n4, scale: a5.scale * h2 });
  }
  _updateBox(t3, e2, r4, i2) {
    const s3 = this._boxShape;
    s3.setAttributeNS(null, "x", "" + t3), s3.setAttributeNS(null, "y", "" + e2), s3.setAttributeNS(null, "width", "" + r4), s3.setAttributeNS(null, "height", "" + i2), s3.setAttributeNS(null, "class", n3.box);
  }
  _updateBackground(t3, e2, r4, i2) {
    this._backgroundShape.setAttributeNS(null, "d", this._toSVGPath(t3, e2, r4, i2, this.view.width, this.view.height));
  }
  _createContainer() {
    const t3 = document.createElement("div");
    t3.className = n3.container, this.view.root.appendChild(t3), this._container = t3;
  }
  _createOverlay() {
    const t3 = this.view.width, e2 = this.view.height, r4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    r4.setAttributeNS(null, "d", "M 0 0 L " + t3 + " 0 L " + t3 + " " + e2 + " L 0 " + e2 + " Z"), r4.setAttributeNS(null, "class", n3.background);
    const i2 = document.createElementNS("http://www.w3.org/2000/svg", "rect"), s3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s3.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), s3.setAttributeNS(null, "class", n3.overlay), s3.appendChild(r4), s3.appendChild(i2), this._container.appendChild(s3), this._backgroundShape = r4, this._boxShape = i2, this._overlay = s3;
  }
  _destroyOverlay() {
    this._container && this._container.parentNode && this._container.parentNode.removeChild(this._container), this._container = this._backgroundShape = this._boxShape = this._overlay = null;
  }
  _toSVGPath(t3, e2, r4, i2, s3, o2) {
    const a5 = t3 + r4, n4 = e2 + i2;
    return "M 0 0 L " + s3 + " 0 L " + s3 + " " + o2 + " L 0 " + o2 + " ZM " + t3 + " " + e2 + " L " + t3 + " " + n4 + " L " + a5 + " " + n4 + " L " + a5 + " " + e2 + " Z";
  }
  _handleDrag(t3, e2) {
    const r4 = t3.x, i2 = t3.y, s3 = t3.origin.x, o2 = t3.origin.y;
    let a5, n4, h2, l3;
    switch (r4 > s3 ? (a5 = s3, h2 = r4 - s3) : (a5 = r4, h2 = s3 - r4), i2 > o2 ? (n4 = o2, l3 = i2 - o2) : (n4 = i2, l3 = o2 - i2), t3.action) {
      case "start":
        this._start();
        break;
      case "update":
        this._update(a5, n4, h2, l3);
        break;
      case "end":
        this._end(a5, n4, h2, l3, e2);
    }
    t3.stopPropagation();
  }
  _redraw() {
    if (!this._rafId)
      return;
    if (this._rafId = null, !this._overlay)
      return;
    const { x: t3, y: e2, width: r4, height: i2 } = this._box;
    this._updateBox(t3, e2, r4, i2), this._updateBackground(t3, e2, r4, i2), this._rafId = requestAnimationFrame(this._redraw);
  }
};
e$9([y$1()], l2.prototype, "navigation", void 0), e$9([y$1()], l2.prototype, "view", null), l2 = e$9([c$8("esri.views.2d.navigation.ZoomBox")], l2);
const c3 = l2;
let v$1 = class v extends g$4 {
  constructor(t3) {
    super(t3), this.animationTime = 0, this.momentumEstimator = new l$5(500, 6, 0.92), this.momentum = null, this.tmpMomentum = n$9(), this.momentumFinished = false, this.viewpoint = new l$6({ targetGeometry: new x$1(), scale: 0, rotation: 0 }), this._previousDrag = null, p$3(() => this.momentumFinished, () => this.navigation.stop());
  }
  begin(t3, i2) {
    this.navigation.begin(), this.momentumEstimator.reset(), this.addToEstimator(i2), this._previousDrag = i2;
  }
  update(t3, i2) {
    this.addToEstimator(i2);
    let o2 = i2.center.x, s3 = i2.center.y;
    const e2 = this._previousDrag;
    o2 = e2 ? e2.center.x - o2 : -o2, s3 = e2 ? s3 - e2.center.y : s3, t3.viewpoint = At(this.viewpoint, t3.viewpoint, [o2 || 0, s3 || 0]), this._previousDrag = i2;
  }
  end(t3, i2) {
    this.addToEstimator(i2);
    const o2 = t3.navigation.momentumEnabled;
    this.momentum = o2 ? this.momentumEstimator.evaluateMomentum() : null, this.animationTime = 0, this.momentum && this.onAnimationUpdate(t3), this._previousDrag = null, this.navigation.end();
  }
  addToEstimator(t3) {
    const i2 = t3.center.x, o2 = t3.center.y, s3 = i$4(-i2, o2), m2 = r$b(-i2, o2, 0);
    this.momentumEstimator.add(s3, m2, 1e-3 * t3.timestamp);
  }
  onAnimationUpdate(t3) {
    this.navigation.animationManager?.animateContinous(t3.viewpoint, (i2, o2) => {
      const { momentum: s3, animationTime: e2, tmpMomentum: m2 } = this, n4 = 1e-3 * o2;
      if (!(this.momentumFinished = !s3 || s3.isFinished(e2))) {
        const o3 = s3.valueDelta(e2, n4);
        g$5(m2, s3.direction, o3), At(i2, i2, m2), t3.constraints.constrainByGeometry(i2);
      }
      this.animationTime += n4;
    });
  }
  stopMomentumNavigation() {
    this.momentum && (this.momentumEstimator.reset(), this.momentum = null, this.navigation.stop());
  }
};
e$9([y$1()], v$1.prototype, "momentumFinished", void 0), e$9([y$1()], v$1.prototype, "viewpoint", void 0), e$9([y$1()], v$1.prototype, "navigation", void 0), v$1 = e$9([c$8("esri.views.2d.navigation.actions.Pan")], v$1);
const d$3 = v$1;
let _$1 = class _ extends g$4 {
  constructor(t3) {
    super(t3), this._animationTime = 0, this._momentumFinished = false, this._previousAngle = 0, this._previousRadius = 0, this._previousCenter = null, this._rotationMomentumEstimator = new a$6(0.6, 0.15, 0.95), this._rotationDirection = 1, this._startAngle = 0, this._startRadius = 0, this._updateTimestamp = null, this._zoomDirection = 1, this._zoomMomentumEstimator = new s$6(), this._zoomOnly = null, this.zoomMomentum = null, this.rotateMomentum = null, this.viewpoint = new l$6({ targetGeometry: new x$1(), scale: 0, rotation: 0 }), this.addHandles(p$3(() => this._momentumFinished, () => this.navigation.stop()));
  }
  begin(t3, o2) {
    this.navigation.begin(), this._rotationMomentumEstimator.reset(), this._zoomMomentumEstimator.reset(), this._zoomOnly = null, this._previousAngle = this._startAngle = o2.angle, this._previousRadius = this._startRadius = o2.radius, this._previousCenter = o2.center, this._updateTimestamp = null, t3.constraints.rotationEnabled && this.addToRotateEstimator(0, o2.timestamp), this.addToZoomEstimator(o2, 1);
  }
  update(t3, o2) {
    null === this._updateTimestamp && (this._updateTimestamp = o2.timestamp);
    const i2 = o2.angle, s3 = o2.radius, e2 = o2.center, n4 = Math.abs(180 * (i2 - this._startAngle) / Math.PI), m2 = Math.abs(s3 - this._startRadius), a5 = this._startRadius / s3;
    if (this._previousRadius && this._previousCenter) {
      const r4 = s3 / this._previousRadius;
      let h2 = 180 * (i2 - this._previousAngle) / Math.PI;
      this._rotationDirection = h2 >= 0 ? 1 : -1, this._zoomDirection = r4 >= 1 ? 1 : -1, t3.constraints.rotationEnabled ? (null === this._zoomOnly && o2.timestamp - this._updateTimestamp > 200 && (this._zoomOnly = m2 - n4 > 0), null === this._zoomOnly || this._zoomOnly ? h2 = 0 : this.addToRotateEstimator(i2 - this._startAngle, o2.timestamp)) : h2 = 0, this.addToZoomEstimator(o2, a5), this.navigation.setViewpoint([e2.x, e2.y], 1 / r4, h2, [this._previousCenter.x - e2.x, e2.y - this._previousCenter.y]);
    }
    this._previousAngle = i2, this._previousRadius = s3, this._previousCenter = e2;
  }
  end(t3) {
    this.rotateMomentum = this._rotationMomentumEstimator.evaluateMomentum(), this.zoomMomentum = this._zoomMomentumEstimator.evaluateMomentum(), this._animationTime = 0, (this.rotateMomentum || this.zoomMomentum) && this.onAnimationUpdate(t3), this.navigation.end();
  }
  addToRotateEstimator(t3, o2) {
    this._rotationMomentumEstimator.add(t3, 1e-3 * o2);
  }
  addToZoomEstimator(t3, o2) {
    this._zoomMomentumEstimator.add(o2, 1e-3 * t3.timestamp);
  }
  canZoomIn(t3) {
    const o2 = t3.scale, i2 = t3.constraints.effectiveMaxScale;
    return 0 === i2 || o2 > i2;
  }
  canZoomOut(t3) {
    const o2 = t3.scale, i2 = t3.constraints.effectiveMinScale;
    return 0 === i2 || o2 < i2;
  }
  onAnimationUpdate(t3) {
    this.navigation.animationManager?.animateContinous(t3.viewpoint, (o2, i2) => {
      const s3 = !this.canZoomIn(t3) && this._zoomDirection > 1 || !this.canZoomOut(t3) && this._zoomDirection < 1, e2 = !this.rotateMomentum || this.rotateMomentum.isFinished(this._animationTime), n4 = s3 || !this.zoomMomentum || this.zoomMomentum.isFinished(this._animationTime), p3 = 1e-3 * i2;
      if (this._momentumFinished = e2 && n4, !this._momentumFinished) {
        const i3 = this.rotateMomentum ? Math.abs(this.rotateMomentum.valueDelta(this._animationTime, p3)) * this._rotationDirection * 180 / Math.PI : 0;
        let s4 = this.zoomMomentum ? Math.abs(this.zoomMomentum.valueDelta(this._animationTime, p3)) : 1;
        const e3 = n$a(), n5 = n$a();
        if (this._previousCenter) {
          r$9(e3, this._previousCenter.x, this._previousCenter.y), et(n5, t3.size, t3.padding), s$7(e3, e3, n5);
          const { constraints: r4, scale: p4 } = t3, l3 = p4 * s4;
          s4 < 1 && !r4.canZoomInTo(l3) ? (s4 = p4 / r4.effectiveMaxScale, this.zoomMomentum = null, this.rotateMomentum = null) : s4 > 1 && !r4.canZoomOutTo(l3) && (s4 = p4 / r4.effectiveMinScale, this.zoomMomentum = null, this.rotateMomentum = null), jt(o2, t3.viewpoint, s4, i3, e3, t3.size), t3.constraints.constrainByGeometry(o2);
        }
      }
      this._animationTime += p3;
    });
  }
  stopMomentumNavigation() {
    (this.rotateMomentum || this.zoomMomentum) && (this.rotateMomentum && (this._rotationMomentumEstimator.reset(), this.rotateMomentum = null), this.zoomMomentum && (this._zoomMomentumEstimator.reset(), this.zoomMomentum = null), this.navigation.stop());
  }
};
e$9([y$1()], _$1.prototype, "_momentumFinished", void 0), e$9([y$1()], _$1.prototype, "viewpoint", void 0), e$9([y$1()], _$1.prototype, "navigation", void 0), _$1 = e$9([c$8("esri.views.2d.navigation.actions.Pinch")], _$1);
const d$2 = _$1;
const u = n$a(), d$1 = n$a();
let j = class extends g$4 {
  constructor(t3) {
    super(t3), this._previousCenter = n$a(), this.viewpoint = new l$6({ targetGeometry: new x$1(), scale: 0, rotation: 0 });
  }
  begin(t3, e2) {
    this.navigation.begin(), r$9(this._previousCenter, e2.center.x, e2.center.y);
  }
  update(t3, e2) {
    const { state: { size: o2, padding: r4 } } = t3;
    r$9(u, e2.center.x, e2.center.y), Z(d$1, o2, r4), t3.viewpoint = ht(this.viewpoint, t3.state.paddedViewState.viewpoint, yt(d$1, this._previousCenter, u)), a$7(this._previousCenter, u);
  }
  end() {
    this.navigation.end();
  }
};
e$9([y$1()], j.prototype, "viewpoint", void 0), e$9([y$1()], j.prototype, "navigation", void 0), j = e$9([c$8("esri.views.2d.actions.Rotate")], j);
const h = j;
const v2 = 10, w = 1, g = new l$6({ targetGeometry: new x$1() }), _2 = [0, 0], d = 250;
let T = class extends g$4 {
  constructor(t3) {
    super(t3), this._endTimer = null, this._lastEventTimestamp = null, this.animationManager = null, this.interacting = false;
  }
  initialize() {
    this.pan = new d$3({ navigation: this }), this.rotate = new h({ navigation: this }), this.pinch = new d$2({ navigation: this }), this.zoomBox = new c3({ view: this.view, navigation: this });
  }
  destroy() {
    this.pan = u$4(this.pan), this.rotate = u$4(this.rotate), this.pinch = u$4(this.pinch), this.zoomBox = u$4(this.zoomBox), this.animationManager = null;
  }
  begin() {
    this._set("interacting", true);
  }
  end() {
    this._lastEventTimestamp = performance.now(), this._startTimer(d);
  }
  async zoom(t3, i2 = this._getDefaultAnchor()) {
    if (this.stop(), this.begin(), this.view.constraints.snapToZoom && this.view.constraints.effectiveLODs)
      return t3 < 1 ? this.zoomIn(i2) : this.zoomOut(i2);
    this.setViewpoint(i2, t3, 0, [0, 0]);
  }
  async zoomIn(t3) {
    const i2 = this.view, o2 = i2.constraints.snapToNextScale(i2.scale);
    return this._zoomToScale(o2, t3);
  }
  async zoomOut(t3) {
    const i2 = this.view, o2 = i2.constraints.snapToPreviousScale(i2.scale);
    return this._zoomToScale(o2, t3);
  }
  setViewpoint(t3, i2, o2, n4) {
    this.begin(), this.view.stateManager.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, t3, i2, o2, n4), this.end();
  }
  setViewpointImmediate(t3, i2 = 0, o2 = [0, 0], n4 = this._getDefaultAnchor()) {
    this.view.stateManager.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, n4, t3, i2, o2);
  }
  continousRotateClockwise() {
    const t3 = this.view.viewpoint;
    this.animationManager?.animateContinous(t3, (t4) => {
      ht(t4, t4, -w);
    });
  }
  continousRotateCounterclockwise() {
    const t3 = this.view.viewpoint;
    this.animationManager?.animateContinous(t3, (t4) => {
      ht(t4, t4, w);
    });
  }
  resetRotation() {
    this.view.constraints.rotationEnabled && (this.view.rotation = 0);
  }
  continousPanLeft() {
    this._continuousPan([-v2, 0]);
  }
  continousPanRight() {
    this._continuousPan([v2, 0]);
  }
  continousPanUp() {
    this._continuousPan([0, v2]);
  }
  continousPanDown() {
    this._continuousPan([0, -v2]);
  }
  continuousPanVector({ x: t3, y: i2 }) {
    this._continuousPan([t3 * v2, i2 * v2]);
  }
  stop() {
    this.pan.stopMomentumNavigation(), this.animationManager?.stop(), this.end(), null !== this._endTimer && (clearTimeout(this._endTimer), this._endTimer = null, this._set("interacting", false));
  }
  _continuousPan(t3) {
    const i2 = this.view.viewpoint;
    this.animationManager?.animateContinous(i2, (i3) => {
      At(i3, i3, t3), this.view.constraints.constrainByGeometry(i3);
    });
  }
  _startTimer(t3) {
    return null !== this._endTimer || (this._endTimer = setTimeout(() => {
      this._endTimer = null;
      const t4 = performance.now() - (this._lastEventTimestamp ?? 0);
      t4 < d ? this._endTimer = this._startTimer(t4) : this._set("interacting", false);
    }, t3)), this._endTimer;
  }
  _getDefaultAnchor() {
    const { size: t3, padding: { left: i2, right: o2, top: n4, bottom: e2 } } = this.view;
    return _2[0] = 0.5 * (t3[0] - o2 + i2), _2[1] = 0.5 * (t3[1] - e2 + n4), _2;
  }
  async _zoomToScale(t3, i2 = this._getDefaultAnchor()) {
    const { view: o2 } = this, { constraints: n4, scale: e2, viewpoint: s3, size: a5, padding: r4 } = o2, c4 = n4.canZoomInTo(t3), m2 = n4.canZoomOutTo(t3);
    if (!(t3 < e2 && !c4 || t3 > e2 && !m2))
      return Gt(g, s3, t3 / e2, 0, i2, a5, r4), n4.constrainByGeometry(g), o2.goTo(g, { animate: true, pickClosestTarget: false });
  }
  _scaleRotateTranslateViewpoint(t3, i2, o2, n4, e2) {
    const { view: s3 } = this, { size: a5, padding: r4, constraints: m2, scale: p3, viewpoint: u2 } = s3, l3 = p3 * o2, v3 = m2.canZoomInTo(l3), w2 = m2.canZoomOutTo(l3);
    return (o2 < 1 && !v3 || o2 > 1 && !w2) && (o2 = 1), At(u2, u2, e2), Gt(t3, u2, o2, n4, i2, a5, r4), m2.constrainByGeometry(t3);
  }
};
e$9([y$1()], T.prototype, "animationManager", void 0), e$9([y$1({ type: Boolean, readOnly: true })], T.prototype, "interacting", void 0), e$9([y$1()], T.prototype, "pan", void 0), e$9([y$1()], T.prototype, "pinch", void 0), e$9([y$1()], T.prototype, "rotate", void 0), e$9([y$1()], T.prototype, "view", void 0), e$9([y$1()], T.prototype, "zoomBox", void 0), T = e$9([c$8("esri.views.2d.navigation.MapViewNavigation")], T);
const y = T;
const a4 = { shaders: { vertexShader: n$5("magnifier/magnifier.vert"), fragmentShader: n$5("magnifier/magnifier.frag") }, attributes: /* @__PURE__ */ new Map([["a_pos", 0]]) };
function t2(r4) {
  return e$a(r4, a4);
}
export {
  J,
  r$3 as a,
  t2 as b,
  a4 as c,
  a$2 as d,
  e$2 as e,
  l$3 as l,
  m,
  n$1 as n,
  r$5 as r,
  t$1 as t,
  y
};
