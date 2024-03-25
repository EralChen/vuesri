import { u4 as t$3, lG as e$2, cL as G$1, fq as D$1, m as m$1, aQ as U$1, qW as n$3, fc as e$3, dg as Et, cZ as p$1, qi as f$1, aP as a$1, gO as e$4, cd as b$1, lA as v, u5 as i$4, u6 as t$4, u7 as r$2, u8 as n$4, u9 as l$1, ua as r$3, qS as e$5, ub as c, uc as o$2, gL as h$1, as as j$1 } from "./chunk-ejFG4zJ0.js";
import { i as i$3 } from "./chunk-nvycIlGH.js";
let e$1 = class e {
  constructor(e3, t2) {
    this._width = 0, this._height = 0, this._free = [], this._width = e3, this._height = t2, this._free.push(new t$3(0, 0, e3, t2));
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  allocate(e3, t2) {
    if (e3 > this._width || t2 > this._height)
      return new t$3();
    let i2 = null, s2 = -1;
    for (let h2 = 0; h2 < this._free.length; ++h2) {
      const w = this._free[h2];
      e3 <= w.width && t2 <= w.height && (null === i2 || w.y <= i2.y && w.x <= i2.x) && (i2 = w, s2 = h2);
    }
    return null === i2 ? new t$3() : (this._free.splice(s2, 1), i2.width < i2.height ? (i2.width > e3 && this._free.push(new t$3(i2.x + e3, i2.y, i2.width - e3, t2)), i2.height > t2 && this._free.push(new t$3(i2.x, i2.y + t2, i2.width, i2.height - t2))) : (i2.width > e3 && this._free.push(new t$3(i2.x + e3, i2.y, i2.width - e3, i2.height)), i2.height > t2 && this._free.push(new t$3(i2.x, i2.y + t2, e3, i2.height - t2))), new t$3(i2.x, i2.y, e3, t2));
  }
  release(h2) {
    for (let e3 = 0; e3 < this._free.length; ++e3) {
      const t2 = this._free[e3];
      if (t2.y === h2.y && t2.height === h2.height && t2.x + t2.width === h2.x)
        t2.width += h2.width;
      else if (t2.x === h2.x && t2.width === h2.width && t2.y + t2.height === h2.y)
        t2.height += h2.height;
      else if (h2.y === t2.y && h2.height === t2.height && h2.x + h2.width === t2.x)
        t2.x = h2.x, t2.width += h2.width;
      else {
        if (h2.x !== t2.x || h2.width !== t2.width || h2.y + h2.height !== t2.y)
          continue;
        t2.y = h2.y, t2.height += h2.height;
      }
      this._free.splice(e3, 1), this.release(h2);
    }
    this._free.push(h2);
  }
};
let n$2 = class n {
  constructor(e3, s2, i2) {
    this.width = 0, this.height = 0, this._dirties = [], this._glyphData = [], this._currentPage = 0, this._glyphIndex = {}, this._textures = [], this._rangePromises = /* @__PURE__ */ new Map(), this.width = e3, this.height = s2, this._glyphSource = i2, this._binPack = new e$1(e3 - 4, s2 - 4), this._glyphData.push(new Uint8Array(e3 * s2)), this._dirties.push(true), this._textures.push(void 0);
  }
  getGlyphItems(s2, i2) {
    const h2 = [], r3 = this._glyphSource, n4 = /* @__PURE__ */ new Set(), o3 = 1 / 256;
    for (const t2 of i2) {
      const e3 = Math.floor(t2 * o3);
      n4.add(e3);
    }
    const a2 = [];
    return n4.forEach((t2) => {
      const e3 = s2 + t2;
      if (this._rangePromises.has(e3))
        a2.push(this._rangePromises.get(e3));
      else {
        const i3 = r3.getRange(s2, t2).then(() => {
          this._rangePromises.delete(e3);
        }, () => {
          this._rangePromises.delete(e3);
        });
        this._rangePromises.set(e3, i3), a2.push(i3);
      }
    }), Promise.all(a2).then(() => {
      let n5 = this._glyphIndex[s2];
      n5 || (n5 = {}, this._glyphIndex[s2] = n5);
      for (const o4 of i2) {
        const i3 = n5[o4];
        if (i3) {
          h2[o4] = { sdf: true, rect: i3.rect, metrics: i3.metrics, page: i3.page, code: o4 };
          continue;
        }
        const a3 = r3.getGlyph(s2, o4);
        if (!a3?.metrics)
          continue;
        const l2 = a3.metrics;
        let c2;
        if (0 === l2.width)
          c2 = new t$3(0, 0, 0, 0);
        else {
          const e3 = 3, s3 = l2.width + 2 * e3, i4 = l2.height + 2 * e3;
          let h3 = s3 % 4 ? 4 - s3 % 4 : 4, r4 = i4 % 4 ? 4 - i4 % 4 : 4;
          1 === h3 && (h3 = 5), 1 === r4 && (r4 = 5), c2 = this._binPack.allocate(s3 + h3, i4 + r4), c2.isEmpty && (this._dirties[this._currentPage] || (this._glyphData[this._currentPage] = null), this._currentPage = this._glyphData.length, this._glyphData.push(new Uint8Array(this.width * this.height)), this._dirties.push(true), this._textures.push(void 0), this._binPack = new e$1(this.width - 4, this.height - 4), c2 = this._binPack.allocate(s3 + h3, i4 + r4));
          const n6 = this._glyphData[this._currentPage], o5 = a3.bitmap;
          let g, _;
          if (o5)
            for (let t2 = 0; t2 < i4; t2++) {
              g = s3 * t2, _ = this.width * (c2.y + t2 + 1) + c2.x;
              for (let t3 = 0; t3 < s3; t3++)
                n6[_ + t3 + 1] = o5.at(g + t3);
            }
        }
        n5[o4] = { rect: c2, metrics: l2, tileIDs: null, page: this._currentPage }, h2[o4] = { sdf: true, rect: c2, metrics: l2, page: this._currentPage, code: o4 }, this._dirties[this._currentPage] = true;
      }
      return h2;
    });
  }
  removeGlyphs(t2) {
    for (const e3 in this._glyphIndex) {
      const s2 = this._glyphIndex[e3];
      if (!s2)
        continue;
      let i2;
      for (const e4 in s2)
        if (i2 = s2[e4], i2.tileIDs.delete(t2), 0 === i2.tileIDs.size) {
          const t3 = this._glyphData[i2.page], h2 = i2.rect;
          let r3, n4;
          for (let e5 = 0; e5 < h2.height; e5++)
            for (r3 = this.width * (h2.y + e5) + h2.x, n4 = 0; n4 < h2.width; n4++)
              t3[r3 + n4] = 0;
          delete s2[e4], this._dirties[i2.page] = true;
        }
    }
  }
  bind(t2, e3, n4, o3 = 0) {
    if (!this._textures[n4]) {
      const e4 = new e$2();
      e4.pixelFormat = G$1.ALPHA, e4.wrapMode = D$1.CLAMP_TO_EDGE, e4.width = this.width, e4.height = this.height, this._textures[n4] = new m$1(t2, e4, new Uint8Array(this.width * this.height));
    }
    const a2 = this._textures[n4];
    a2.setSamplingMode(e3), this._dirties[n4] && a2.setData(this._glyphData[n4]), t2.bindTexture(a2, o3), this._dirties[n4] = false;
  }
  destroy() {
    this.dispose();
  }
  dispose() {
    this._glyphData.length = 0, this._binPack = null;
    for (const t2 of this._textures)
      t2 && t2.dispose();
    this._textures.length = 0;
  }
};
class s {
  constructor(t2) {
    if (this._metrics = [], !t2)
      return void (this._allBitmaps = null);
    const e3 = /* @__PURE__ */ new Map();
    let s2 = 0;
    for (; t2.next(); )
      switch (t2.tag()) {
        case 1: {
          const a3 = t2.getMessage();
          for (; a3.next(); )
            switch (a3.tag()) {
              case 3: {
                const t3 = a3.getMessage();
                let r4, n4, i2, c2, o3, g, h2;
                for (; t3.next(); )
                  switch (t3.tag()) {
                    case 1:
                      r4 = t3.getUInt32();
                      break;
                    case 2:
                      n4 = t3.getBytes();
                      break;
                    case 3:
                      i2 = t3.getUInt32();
                      break;
                    case 4:
                      c2 = t3.getUInt32();
                      break;
                    case 5:
                      o3 = t3.getSInt32();
                      break;
                    case 6:
                      g = t3.getSInt32();
                      break;
                    case 7:
                      h2 = t3.getUInt32();
                      break;
                    default:
                      t3.skip();
                  }
                if (t3.release(), r4) {
                  const t4 = n4?.length ?? 0;
                  this._metrics[r4] = { width: i2, height: c2, left: o3, top: g, advance: h2, startOffset: s2, length: t4 }, e3.set(r4, n4), s2 += t4;
                }
                break;
              }
              default:
                a3.skip();
            }
          a3.release();
          break;
        }
        default:
          t2.skip();
      }
    const a2 = new Uint8Array(s2), r3 = this._metrics;
    for (const [n4, i2] of e3) {
      const { startOffset: t3, length: e4 } = r3[n4];
      if (i2)
        for (let s3 = 0; s3 < e4; ++s3)
          a2[t3 + s3] = i2[s3];
    }
    this._allBitmaps = a2;
  }
  getMetrics(t2) {
    return this._metrics[t2];
  }
  getBitmap(t2) {
    if (!this._allBitmaps)
      return;
    const e3 = this._metrics[t2];
    if (void 0 === e3)
      return;
    const { startOffset: s2, length: a2 } = e3;
    return 0 !== a2 ? new n$1(this._allBitmaps, s2, a2) : void 0;
  }
}
class a {
  constructor() {
    this._ranges = [];
  }
  get ranges() {
    return this._ranges;
  }
  getRange(t2) {
    return this._ranges[t2];
  }
  addRange(t2, e3) {
    this._ranges[t2] = e3;
  }
}
let r$1 = class r {
  constructor(t2) {
    this._glyphInfo = {}, this._baseURL = t2;
  }
  getRange(a2, r3) {
    const n4 = this._getFontStack(a2);
    if (n4.getRange(r3))
      return Promise.resolve();
    const i2 = 256 * r3, c2 = i2 + 255;
    if (this._baseURL) {
      const o3 = this._baseURL.replace("{fontstack}", a2).replace("{range}", i2 + "-" + c2);
      return U$1(o3, { responseType: "array-buffer" }).then((t2) => {
        n4.addRange(r3, new s(new n$3(new Uint8Array(t2.data), new DataView(t2.data))));
      }).catch(() => {
        n4.addRange(r3, new s());
      });
    }
    return n4.addRange(r3, new s()), Promise.resolve();
  }
  getGlyph(t2, e3) {
    const s2 = this._getFontStack(t2);
    if (!s2)
      return;
    const a2 = Math.floor(e3 / 256), r3 = s2.getRange(a2);
    return r3 ? { metrics: r3.getMetrics(e3), bitmap: r3.getBitmap(e3) } : void 0;
  }
  _getFontStack(t2) {
    let e3 = this._glyphInfo[t2];
    return e3 || (e3 = this._glyphInfo[t2] = new a()), e3;
  }
};
let n$1 = class n2 {
  constructor(t2, e3, s2) {
    this._array = t2, this._start = e3, this.length = s2;
  }
  at(t2) {
    return 0 <= t2 && t2 < this.length ? this._array[this._start + t2] : void 0;
  }
};
const r2 = "dasharray-";
let o$1 = class o {
  constructor(t2, e3, s2 = 0) {
    this._size = [], this._mosaicsData = [], this._textures = [], this._dirties = [], this._maxItemSize = 0, this._currentPage = 0, this._pageWidth = 0, this._pageHeight = 0, this._mosaicRects = {}, this.pixelRatio = 1, (t2 <= 0 || e3 <= 0) && console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"), this._pageWidth = t2, this._pageHeight = e3, s2 > 0 && (this._maxItemSize = s2), this._binPack = new e$1(t2 - 4, e3 - 4);
  }
  destroy() {
    this.dispose();
  }
  dispose() {
    this._binPack = null, this._mosaicsData.length = 0, this._mosaicRects = {};
    for (const t2 of this._textures)
      t2 && t2.dispose();
    this._textures.length = 0;
  }
  getWidth(t2) {
    return t2 >= this._size.length ? -1 : this._size[t2][0];
  }
  getHeight(t2) {
    return t2 >= this._size.length ? -1 : this._size[t2][1];
  }
  getPageSize(t2) {
    return t2 >= this._size.length ? null : this._size[t2];
  }
  setSpriteSource(t2) {
    if (this.dispose(), this.pixelRatio = t2.devicePixelRatio, 0 === this._mosaicsData.length) {
      this._binPack = new e$1(this._pageWidth - 4, this._pageHeight - 4);
      const t3 = Math.floor(this._pageWidth), e3 = Math.floor(this._pageHeight), s2 = new Uint32Array(t3 * e3);
      this._mosaicsData[0] = s2, this._dirties.push(true), this._size.push([this._pageWidth, this._pageHeight]), this._textures.push(void 0);
    }
    this._sprites = t2;
  }
  getSpriteItem(t2, i2 = false) {
    let e3, s2, h2 = this._mosaicRects[t2];
    if (h2)
      return h2;
    if (!this._sprites || "loaded" !== this._sprites.loadStatus)
      return null;
    if (t2 && t2.startsWith(r2) ? ([e3, s2] = this._rasterizeDash(t2), i2 = true) : e3 = this._sprites.getSpriteInfo(t2), !e3?.width || !e3.height || e3.width < 0 || e3.height < 0)
      return null;
    const a2 = e3.width, o3 = e3.height, [n4, _, g] = this._allocateImage(a2, o3);
    return n4.width <= 0 ? null : (this._copy(n4, e3, _, g, i2, s2), h2 = { type: "sprite", rect: n4, width: a2, height: o3, sdf: e3.sdf, simplePattern: false, rasterizationScale: e3.pixelRatio, page: _ }, this._mosaicRects[t2] = h2, h2);
  }
  getSpriteItems(t2) {
    const i2 = {};
    for (const e3 of t2)
      i2[e3.name] = this.getSpriteItem(e3.name, e3.repeat);
    return i2;
  }
  getMosaicItemPosition(t2, i2) {
    const e3 = this.getSpriteItem(t2, i2), s2 = e3 && e3.rect;
    if (!s2)
      return null;
    s2.width = e3.width, s2.height = e3.height;
    const h2 = e3.width, a2 = e3.height, r3 = 2;
    return { tl: [s2.x + r3, s2.y + r3], br: [s2.x + r3 + h2, s2.y + r3 + a2], page: e3.page };
  }
  bind(t2, i2, e3 = 0, r3 = 0) {
    if (e3 >= this._size.length || e3 >= this._mosaicsData.length)
      return;
    if (!this._textures[e3]) {
      const i3 = new e$2();
      i3.wrapMode = D$1.CLAMP_TO_EDGE, i3.width = this._size[e3][0], i3.height = this._size[e3][1], this._textures[e3] = new m$1(t2, i3, new Uint8Array(this._mosaicsData[e3].buffer));
    }
    const o3 = this._textures[e3];
    o3.setSamplingMode(i2), this._dirties[e3] && o3.setData(new Uint8Array(this._mosaicsData[e3].buffer)), t2.bindTexture(o3, r3), this._dirties[e3] = false;
  }
  static _copyBits(t2, i2, e3, s2, h2, a2, r3, o3, n4, _, g) {
    let c2 = s2 * i2 + e3, l2 = o3 * a2 + r3;
    if (g) {
      l2 -= a2;
      for (let r4 = -1; r4 <= _; r4++, c2 = ((r4 + _) % _ + s2) * i2 + e3, l2 += a2)
        for (let i3 = -1; i3 <= n4; i3++)
          h2[l2 + i3] = t2[c2 + (i3 + n4) % n4];
    } else
      for (let p2 = 0; p2 < _; p2++) {
        for (let i3 = 0; i3 < n4; i3++)
          h2[l2 + i3] = t2[c2 + i3];
        c2 += i2, l2 += a2;
      }
  }
  _copy(t2, i2, e3, s2, h2, a2) {
    if (!this._sprites || "loaded" !== this._sprites.loadStatus || e3 >= this._mosaicsData.length)
      return;
    const r3 = new Uint32Array(a2 ? a2.buffer : this._sprites.image.buffer), n4 = this._mosaicsData[e3];
    n4 && r3 || console.error("Source or target images are uninitialized!");
    const _ = 2, g = a2 ? i2.width : this._sprites.width;
    o._copyBits(r3, g, i2.x, i2.y, n4, s2[0], t2.x + _, t2.y + _, i2.width, i2.height, h2), this._dirties[e3] = true;
  }
  _allocateImage(t2, s2) {
    t2 += 2, s2 += 2;
    const h2 = Math.max(t2, s2);
    if (this._maxItemSize && this._maxItemSize < h2) {
      const i2 = new t$3(0, 0, t2, s2);
      return this._mosaicsData.push(new Uint32Array(t2 * s2)), this._dirties.push(true), this._size.push([t2, s2]), this._textures.push(void 0), [i2, this._mosaicsData.length - 1, [t2, s2]];
    }
    let a2 = t2 % 4 ? 4 - t2 % 4 : 4, r3 = s2 % 4 ? 4 - s2 % 4 : 4;
    1 === a2 && (a2 = 5), 1 === r3 && (r3 = 5);
    const o3 = this._binPack.allocate(t2 + a2, s2 + r3);
    return o3.width <= 0 ? (this._dirties[this._currentPage] || (this._mosaicsData[this._currentPage] = null), this._currentPage = this._mosaicsData.length, this._mosaicsData.push(new Uint32Array(this._pageWidth * this._pageHeight)), this._dirties.push(true), this._size.push([this._pageWidth, this._pageHeight]), this._textures.push(void 0), this._binPack = new e$1(this._pageWidth - 4, this._pageHeight - 4), this._allocateImage(t2, s2)) : [o3, this._currentPage, [this._pageWidth, this._pageHeight]];
  }
  _rasterizeDash(i2) {
    const e3 = /\[(.*?)\]/, s2 = i2.match(e3);
    if (!s2)
      return null;
    const h2 = s2[1].split(",").map(Number), a2 = i2.slice(i2.lastIndexOf("-") + 1), [r3, o3, n4] = i$3(h2, a2);
    return [{ x: 0, y: 0, width: o3, height: n4, sdf: true, pixelRatio: 1 }, new Uint8Array(r3.buffer)];
  }
};
class h {
  constructor(t2, e3, s2, r3) {
    this._layer = t2, this._styleRepository = e3, this.devicePixelRatio = s2, this._sourceDataMaxLOD = r3, this._spriteMosaic = null, this._glyphMosaic = null, this._connection = null, this._spriteSourceAbortController = null, this._startOptionsInputSignal = null, this._inputSignalEventListener = null;
  }
  destroy() {
    this._connection?.close(), this._connection = null, this._styleRepository = null, this._layer = null, this._spriteMosaic?.destroy(), this._spriteMosaic = null, this._glyphMosaic = null, this._spriteSourceAbortController = e$3(this._spriteSourceAbortController), this._spriteSourcePromise = null, this._inputSignalEventListener && this._startOptionsInputSignal?.removeEventListener("abort", this._inputSignalEventListener), this._startOptionsInputSignal = null, this._inputSignalEventListener = null;
  }
  get spriteMosaic() {
    return this._spriteSourcePromise.then(() => this._spriteMosaic);
  }
  get glyphMosaic() {
    return this._glyphMosaic;
  }
  async start(t2) {
    this._requestSprite(t2);
    const s2 = this._layer.currentStyleInfo.glyphsUrl, r3 = new r$1(s2 ? Et(s2, { ...this._layer.customParameters, token: this._layer.apiKey }) : null);
    this._glyphMosaic = new n$2(1024, 1024, r3), this._broadcastPromise = p$1("WorkerTileHandler", { client: this, schedule: t2.schedule, signal: t2.signal }).then((s3) => {
      if (this._layer && (this._connection?.close(), this._connection = s3, this._layer && !this._connection.closed)) {
        const r4 = s3.broadcast("setStyle", { style: this._layer.currentStyleInfo.style, sourceDataMaxLOD: this._sourceDataMaxLOD }, t2);
        Promise.all(r4).catch((t3) => f$1(t3));
      }
    });
  }
  _requestSprite(t2) {
    this._spriteSourceAbortController?.abort();
    const e3 = new AbortController();
    this._spriteSourceAbortController = e3;
    const r3 = t2?.signal;
    this._inputSignalEventListener && this._startOptionsInputSignal?.removeEventListener("abort", this._inputSignalEventListener), this._startOptionsInputSignal = null, r3 && (this._inputSignalEventListener = p(e3), r3.addEventListener("abort", this._inputSignalEventListener, { once: true }));
    const { signal: i2 } = e3, o3 = { ...t2, signal: i2 };
    this._spriteSourcePromise = this._layer.loadSpriteSource(this.devicePixelRatio, o3), this._spriteSourcePromise.then((t3) => {
      a$1(i2), this._spriteMosaic = new o$1(1024, 1024, 250), this._spriteMosaic.setSpriteSource(t3);
    });
  }
  async updateStyle(t2) {
    return await this._broadcastPromise, this._broadcastPromise = Promise.all(this._connection.broadcast("updateStyle", t2)), this._broadcastPromise;
  }
  setSpriteSource(t2) {
    const e3 = new o$1(1024, 1024, 250);
    return e3.setSpriteSource(t2), this._spriteMosaic = e3, this._spriteSourcePromise = Promise.resolve(t2), this._spriteSourceAbortController = null, e3;
  }
  async setStyle(t2, e3, s2) {
    await this._broadcastPromise, this._styleRepository = t2, this._sourceDataMaxLOD = s2, this._requestSprite();
    const r3 = new r$1(this._layer.currentStyleInfo.glyphsUrl ? Et(this._layer.currentStyleInfo.glyphsUrl, { ...this._layer.customParameters, token: this._layer.apiKey }) : null);
    return this._glyphMosaic = new n$2(1024, 1024, r3), this._broadcastPromise = Promise.all(this._connection.broadcast("setStyle", { style: e3, sourceDataMaxLOD: this._sourceDataMaxLOD })), this._broadcastPromise;
  }
  async fetchTileData(t2, e3) {
    const s2 = await this._getRefKeys(t2, e3);
    return this._getSourcesData(Object.keys(this._layer.sourceNameToSource), s2, e3);
  }
  async fetchTilePBFs(t2) {
    const e3 = Object.keys(this._layer.sourceNameToSource), s2 = {}, r3 = await this._getRefKeys(t2, s2), i2 = [], o3 = [];
    for (let n4 = 0; n4 < r3.length; n4++)
      if (null == r3[n4].value || null == e3[n4])
        o3.push(null);
      else {
        const t3 = r3[n4].value, a2 = this._getTilePayload(t3, e3[n4], s2);
        a2.then((e4) => {
          i2.push({ ...e4, key: t3 });
        }), o3.push(a2);
      }
    return Promise.all(o3).then(() => i2);
  }
  async parseTileData(t2, e3) {
    const s2 = t2 && t2.data;
    if (!s2)
      return null;
    const { sourceName2DataAndRefKey: r3, transferList: i2 } = s2;
    return 0 === Object.keys(r3).length ? null : this._broadcastPromise.then(() => this._connection.invoke("createTileAndParse", { key: t2.key.id, sourceName2DataAndRefKey: r3, styleLayerUIDs: t2.styleLayerUIDs }, { ...e3, transferList: i2 }));
  }
  async getSprites(t2) {
    return await this._spriteSourcePromise, this._spriteMosaic.getSpriteItems(t2);
  }
  getGlyphs(t2) {
    return this._glyphMosaic.getGlyphItems(t2.font, t2.codePoints);
  }
  async _getTilePayload(t2, e3, s2) {
    const i2 = e$4.pool.acquire(t2.id), o3 = this._layer.sourceNameToSource[e3], { level: n4, row: a2, col: l2 } = i2;
    e$4.pool.release(i2);
    try {
      return { protobuff: await o3.requestTile(n4, a2, l2, s2), sourceName: e3 };
    } catch (c2) {
      if (b$1(c2))
        throw c2;
      return { protobuff: null, sourceName: e3 };
    }
  }
  async _getRefKeys(t2, e3) {
    const s2 = this._layer.sourceNameToSource, r3 = new Array();
    for (const i2 in s2) {
      const o3 = s2[i2].getRefKey(t2, e3);
      r3.push(o3);
    }
    return v(r3);
  }
  _getSourcesData(t2, e3, s2) {
    const r3 = [];
    for (let i2 = 0; i2 < e3.length; i2++)
      if (null == e3[i2].value || null == t2[i2])
        r3.push(null);
      else {
        const o3 = e3[i2].value, n4 = this._getTilePayload(o3, t2[i2], s2);
        r3.push(n4);
      }
    return v(r3).then((t3) => {
      const s3 = {}, r4 = [];
      for (let i2 = 0; i2 < t3.length; i2++) {
        const o3 = t3[i2].value;
        if (o3 && (o3.protobuff && o3.protobuff.byteLength > 0)) {
          const t4 = e3[i2].value.id;
          s3[o3.sourceName] = { refKey: t4, protobuff: o3.protobuff }, r4.push(o3.protobuff);
        }
      }
      return { sourceName2DataAndRefKey: s3, transferList: r4 };
    });
  }
}
function p(t2) {
  return () => t2.abort();
}
function i$2(e3, t2, n4, o3, i2, l2) {
  const { iconRotationAlignment: a2, textRotationAlignment: c2, iconTranslate: h2, iconTranslateAnchor: u, textTranslate: d, textTranslateAnchor: y } = o3;
  let x = 0;
  for (const g of e3.colliders) {
    const [e4, o4] = 0 === g.partIndex ? h2 : d, m = 0 === g.partIndex ? u : y, f = g.minLod <= l2 && l2 <= g.maxLod;
    x += f ? 0 : 1, g.enabled = f, g.xScreen = g.xTile * i2[0] + g.yTile * i2[3] + i2[6], g.yScreen = g.xTile * i2[1] + g.yTile * i2[4] + i2[7], m === r$3.MAP ? (g.xScreen += n4 * e4 - t2 * o4, g.yScreen += t2 * e4 + n4 * o4) : (g.xScreen += e4, g.yScreen += o4), l$1.VIEWPORT === (0 === g.partIndex ? a2 : c2) ? (g.dxScreen = g.dxPixels, g.dyScreen = g.dyPixels) : (g.dxScreen = n4 * (g.dxPixels + g.width / 2) - t2 * (g.dyPixels + g.height / 2) - g.width / 2, g.dyScreen = t2 * (g.dxPixels + g.width / 2) + n4 * (g.dyPixels + g.height / 2) - g.height / 2);
  }
  e3.colliders.length > 0 && x === e3.colliders.length && (e3.unique.show = false);
}
class l {
  constructor(o3, r3, s2, i2, l2, a2) {
    this._symbols = o3, this._styleRepository = i2, this._zoom = l2, this._currentLayerCursor = 0, this._currentSymbolCursor = 0, this._styleProps = /* @__PURE__ */ new Map(), this._allNeededMatrices = /* @__PURE__ */ new Map(), this._gridIndex = new i$4(r3, s2, t$4), this._si = Math.sin(Math.PI * a2 / 180), this._co = Math.cos(Math.PI * a2 / 180);
    for (const t2 of o3)
      for (const n4 of t2.symbols)
        this._allNeededMatrices.has(n4.tile) || this._allNeededMatrices.set(n4.tile, r$2(n4.tile.transforms.tileUnitsToPixels));
  }
  work(e3) {
    const t2 = this._gridIndex;
    function n4(e4) {
      const n5 = e4.xScreen + e4.dxScreen, o4 = e4.yScreen + e4.dyScreen, r3 = n5 + e4.width, s2 = o4 + e4.height, [i2, l2, a2, c2] = t2.getCellSpan(n5, o4, r3, s2);
      for (let h2 = l2; h2 <= c2; h2++)
        for (let e5 = i2; e5 <= a2; e5++) {
          const i3 = t2.cells[h2][e5];
          for (const e6 of i3) {
            const t3 = e6.xScreen + e6.dxScreen, i4 = e6.yScreen + e6.dyScreen, l3 = t3 + e6.width, a3 = i4 + e6.height;
            if (!(r3 < t3 || n5 > l3 || s2 < i4 || o4 > a3))
              return true;
          }
        }
      return false;
    }
    const o3 = performance.now();
    for (; this._currentLayerCursor < this._symbols.length; this._currentLayerCursor++, this._currentSymbolCursor = 0) {
      const t3 = this._symbols[this._currentLayerCursor], r3 = this._getProperties(t3.styleLayerUID);
      for (; this._currentSymbolCursor < t3.symbols.length; this._currentSymbolCursor++) {
        if (this._currentSymbolCursor % 100 == 99 && performance.now() - o3 > e3)
          return false;
        const s2 = t3.symbols[this._currentSymbolCursor];
        if (!s2.unique.show)
          continue;
        i$2(s2, this._si, this._co, r3, this._allNeededMatrices.get(s2.tile), this._zoom);
        const l2 = s2.unique;
        if (!l2.show)
          continue;
        const { iconAllowOverlap: a2, iconIgnorePlacement: c2, textAllowOverlap: h2, textIgnorePlacement: u } = r3;
        for (const e4 of s2.colliders) {
          if (!e4.enabled)
            continue;
          const t4 = l2.parts[e4.partIndex];
          if (!t4.show)
            continue;
          !(e4.partIndex ? h2 : a2) && n4(e4) && (e4.hard ? l2.show = false : t4.show = false);
        }
        if (l2.show)
          for (const e4 of s2.colliders) {
            if (!e4.enabled)
              continue;
            if (e4.partIndex ? u : c2)
              continue;
            if (!l2.parts[e4.partIndex].show)
              continue;
            const t4 = e4.xScreen + e4.dxScreen, n5 = e4.yScreen + e4.dyScreen, o4 = t4 + e4.width, r4 = n5 + e4.height, [s3, i2, a3, h3] = this._gridIndex.getCellSpan(t4, n5, o4, r4);
            for (let l3 = i2; l3 <= h3; l3++)
              for (let t5 = s3; t5 <= a3; t5++) {
                this._gridIndex.cells[l3][t5].push(e4);
              }
          }
      }
    }
    return true;
  }
  _getProperties(e3) {
    const t2 = this._styleProps.get(e3);
    if (t2)
      return t2;
    const n4 = this._zoom, s2 = this._styleRepository.getStyleLayerByUID(e3), i2 = s2.getLayoutValue("symbol-placement", n4) !== n$4.POINT;
    let l2 = s2.getLayoutValue("icon-rotation-alignment", n4);
    l2 === l$1.AUTO && (l2 = i2 ? l$1.MAP : l$1.VIEWPORT);
    let a2 = s2.getLayoutValue("text-rotation-alignment", n4);
    a2 === l$1.AUTO && (a2 = i2 ? l$1.MAP : l$1.VIEWPORT);
    const c2 = s2.getPaintValue("icon-translate", n4), h2 = s2.getPaintValue("icon-translate-anchor", n4), u = s2.getPaintValue("text-translate", n4), d = s2.getPaintValue("text-translate-anchor", n4), y = { iconAllowOverlap: s2.getLayoutValue("icon-allow-overlap", n4), iconIgnorePlacement: s2.getLayoutValue("icon-ignore-placement", n4), textAllowOverlap: s2.getLayoutValue("text-allow-overlap", n4), textIgnorePlacement: s2.getLayoutValue("text-ignore-placement", n4), iconRotationAlignment: l2, textRotationAlignment: a2, iconTranslateAnchor: h2, iconTranslate: c2, textTranslateAnchor: d, textTranslate: u };
    return this._styleProps.set(e3, y), y;
  }
}
function t$2(o3, t2) {
  if (o3.priority - t2.priority)
    return o3.priority - t2.priority;
  const e3 = o3.tile.key, i2 = t2.tile.key;
  return e3.world - i2.world ? e3.world - i2.world : e3.level - i2.level ? e3.level - i2.level : e3.row - i2.row ? e3.row - i2.row : e3.col - i2.col ? e3.col - i2.col : o3.xTile - t2.xTile ? o3.xTile - t2.xTile : o3.yTile - t2.yTile;
}
class e2 {
  get running() {
    return this._running;
  }
  constructor(o3, t2, e3, i2, s2, n4) {
    this._visibleTiles = o3, this._symbolRepository = t2, this._createCollisionJob = e3, this._assignTileSymbolsOpacity = i2, this._symbolLayerSorter = s2, this._isLayerVisible = n4, this._selectionJob = null, this._selectionJobCompleted = false, this._collisionJob = null, this._collisionJobCompleted = false, this._opacityJob = null, this._opacityJobCompleted = false, this._running = true;
  }
  setScreenSize(o3, t2) {
    this._screenWidth === o3 && this._screenHeight === t2 || this.restart(), this._screenWidth = o3, this._screenHeight = t2;
  }
  restart() {
    this._selectionJob = null, this._selectionJobCompleted = false, this._collisionJob = null, this._collisionJobCompleted = false, this._opacityJob = null, this._opacityJobCompleted = false, this._running = true;
  }
  continue(o3) {
    if (this._selectionJob || (this._selectionJob = this._createSelectionJob()), !this._selectionJobCompleted) {
      const t2 = performance.now();
      if (!this._selectionJob.work(o3))
        return false;
      if (this._selectionJobCompleted = true, 0 === (o3 = Math.max(0, o3 - (performance.now() - t2))))
        return false;
    }
    if (this._collisionJob || (this._collisionJob = this._createCollisionJob(this._selectionJob.sortedSymbols, this._screenWidth, this._screenHeight)), !this._collisionJobCompleted) {
      const t2 = performance.now();
      if (!this._collisionJob.work(o3))
        return false;
      if (this._collisionJobCompleted = true, 0 === (o3 = Math.max(0, o3 - (performance.now() - t2))))
        return false;
    }
    if (this._opacityJob || (this._opacityJob = this._createOpacityJob()), !this._opacityJobCompleted) {
      const t2 = performance.now();
      if (!this._opacityJob.work(o3))
        return false;
      if (this._opacityJobCompleted = true, 0 === (o3 = Math.max(0, o3 - (performance.now() - t2))))
        return false;
    }
    return this._running = false, true;
  }
  _createSelectionJob() {
    const o3 = this._symbolRepository.uniqueSymbols;
    for (let t2 = 0; t2 < o3.length; t2++) {
      const e4 = o3[t2];
      for (let o4 = 0; o4 < e4.uniqueSymbols.length; o4++) {
        const t3 = e4.uniqueSymbols[o4];
        for (const o5 of t3.tileSymbols)
          o5.selectedForRendering = false;
      }
    }
    const e3 = [];
    let i2 = 0, s2 = 0;
    const n4 = this._isLayerVisible;
    function r3(r4) {
      let l3;
      const c2 = performance.now();
      for (; s2 < o3.length; s2++, i2 = 0) {
        const t2 = o3[s2], h2 = t2.styleLayerUID;
        if (!n4(h2)) {
          e3[s2] || (e3[s2] = { styleLayerUID: h2, symbols: [] });
          continue;
        }
        e3[s2] = e3[s2] || { styleLayerUID: h2, symbols: [] };
        const a2 = e3[s2];
        for (; i2 < t2.uniqueSymbols.length; i2++) {
          if (l3 = t2.uniqueSymbols[i2], i2 % 100 == 99 && performance.now() - c2 > r4)
            return false;
          let o4 = null, e4 = false, s3 = false;
          for (const t3 of l3.tileSymbols)
            if (!s3 || !e4) {
              const i3 = t3.tile;
              (!o4 || i3.isCoverage || i3.neededForCoverage && !e4) && (o4 = t3, (i3.neededForCoverage || i3.isCoverage) && (s3 = true), i3.isCoverage && (e4 = true));
            }
          if (o4.selectedForRendering = true, s3) {
            a2.symbols.push(o4), l3.show = true;
            for (const o5 of l3.parts)
              o5.show = true;
          } else
            l3.show = false;
        }
      }
      for (const o4 of e3)
        o4.symbols.sort(t$2);
      return true;
    }
    const l2 = this._symbolLayerSorter;
    return { work: r3, get sortedSymbols() {
      return e3.sort(l2);
    } };
  }
  _createOpacityJob() {
    const o3 = this._assignTileSymbolsOpacity, t2 = this._visibleTiles;
    let e3 = 0;
    function s2(t3, e4) {
      const n4 = t3.symbols;
      for (const [o4, s3] of n4)
        i$1(s3, e4);
      o3(t3, e4);
      for (const o4 of t3.childrenTiles)
        s2(o4, e4);
    }
    return { work(o4) {
      const i2 = performance.now();
      for (; e3 < t2.length; e3++) {
        if (performance.now() - i2 > o4)
          return false;
        const n4 = t2[e3];
        if (null != n4.parentTile)
          continue;
        s2(n4, performance.now());
      }
      return true;
    } };
  }
}
function i$1(t2, e3) {
  for (const i2 of t2) {
    const t3 = i2.unique;
    for (const i3 of t3.parts) {
      const s2 = i3.targetOpacity > 0.5 ? 1 : -1;
      i3.startOpacity += s2 * ((e3 - i3.startTime) / e$5), i3.startOpacity = Math.min(Math.max(i3.startOpacity, 0), 1), i3.startTime = e3, i3.targetOpacity = t3.show && i3.show ? 1 : 0;
    }
  }
}
const o2 = 32, t$1 = 8, i = 64;
class n3 {
  constructor(e3, s2, l2) {
    this.tileCoordRange = e3, this._visibleTiles = s2, this._createUnique = l2, this._tiles = /* @__PURE__ */ new Map(), this._uniqueSymbolsReferences = /* @__PURE__ */ new Map();
  }
  get uniqueSymbols() {
    return null == this._uniqueSymbolLayerArray && (this._uniqueSymbolLayerArray = this._createUniqueSymbolLayerArray()), this._uniqueSymbolLayerArray;
  }
  get uniqueSymbolsReferences() {
    return this._uniqueSymbolsReferences;
  }
  add(s2, l2) {
    this._uniqueSymbolLayerArray = null;
    let n4 = this._tiles.get(s2.id);
    n4 || (n4 = { symbols: /* @__PURE__ */ new Map() }, this._tiles.set(s2.id, n4));
    const r3 = /* @__PURE__ */ new Map();
    if (l2)
      for (const e3 of l2)
        n4.symbols.has(e3) && (r3.set(e3, n4.symbols.get(e3)), n4.symbols.delete(e3));
    else
      for (const [e3, o3] of s2.layerData)
        n4.symbols.has(e3) && (r3.set(e3, n4.symbols.get(e3)), n4.symbols.delete(e3));
    this._removeSymbols(r3);
    const y = s2.symbols, a2 = /* @__PURE__ */ new Map();
    for (const [f, u] of y) {
      let s3 = u.length;
      if (s3 >= o2) {
        let l3 = this.tileCoordRange;
        do {
          l3 /= 2, s3 /= 4;
        } while (s3 > t$1 && l3 > i);
        const o3 = new i$4(this.tileCoordRange, this.tileCoordRange, l3);
        a2.set(f, { flat: u, index: o3 }), n4.symbols.set(f, { flat: u, index: o3 });
        for (const e3 of u)
          o3.getCell(e3.xTile, e3.yTile).push(e3);
      } else
        a2.set(f, { flat: u }), n4.symbols.set(f, { flat: u });
    }
    this._addSymbols(s2.key, y);
  }
  deleteStyleLayers(e3) {
    this._uniqueSymbolLayerArray = null;
    for (const [s2, l2] of this._tiles) {
      const o3 = /* @__PURE__ */ new Map();
      for (const s3 of e3)
        l2.symbols.has(s3) && (o3.set(s3, l2.symbols.get(s3)), l2.symbols.delete(s3));
      this._removeSymbols(o3), 0 === l2.symbols.size && this._tiles.delete(s2);
    }
  }
  removeTile(e3) {
    this._uniqueSymbolLayerArray = null;
    const s2 = this._tiles.get(e3.id);
    if (!s2)
      return;
    const l2 = /* @__PURE__ */ new Map();
    for (const [o3, t2] of e3.symbols)
      s2.symbols.has(o3) && (l2.set(o3, s2.symbols.get(o3)), s2.symbols.delete(o3));
    this._removeSymbols(l2), 0 === s2.symbols.size && this._tiles.delete(e3.id);
  }
  querySymbols(e3, l2, o3, t2) {
    const i2 = [], n4 = this.uniqueSymbols;
    for (const r3 of n4) {
      const t3 = r3.styleLayerUID, n5 = r3.uniqueSymbols;
      for (const r4 of n5) {
        const n6 = r4.tileSymbols.find((e4) => e4.selectedForRendering);
        n6 && c(n6, e3, l2 * (window.devicePixelRatio || 1), o3) && i2.push({ vtlSymbol: n6, styleLayerUID: t3, tileKey: n6.tile.key });
      }
    }
    return i2;
  }
  _removeSymbols(e3) {
    for (const [s2, { flat: l2 }] of e3)
      for (const e4 of l2) {
        const l3 = e4.unique, o3 = l3.tileSymbols, t2 = o3.length - 1;
        for (let s3 = 0; s3 < t2; s3++)
          if (o3[s3] === e4) {
            o3[s3] = o3[t2];
            break;
          }
        if (o3.length = t2, 0 === t2) {
          const e5 = this._uniqueSymbolsReferences.get(s2);
          e5.delete(l3), 0 === e5.size && this._uniqueSymbolsReferences.delete(s2);
        }
        e4.unique = null;
      }
  }
  _addSymbols(e3, s2) {
    if (0 === s2.size)
      return;
    const l2 = this._visibleTiles;
    for (const o3 of l2)
      o3.parentTile || o3.key.world !== e3.world || o3.key.level === e3.level && !o3.key.equals(e3) || this._matchSymbols(o3, e3, s2);
    for (const [o3, t2] of s2)
      for (const e4 of t2)
        if (null == e4.unique) {
          const s3 = this._createUnique();
          e4.unique = s3, s3.tileSymbols.push(e4);
          let l3 = this._uniqueSymbolsReferences.get(o3);
          l3 || (l3 = /* @__PURE__ */ new Set(), this._uniqueSymbolsReferences.set(o3, l3)), l3.add(s3);
        }
  }
  _matchSymbols(e3, s2, o3) {
    if (e3.key.level > s2.level) {
      const l2 = e3.key.level - s2.level;
      if (e3.key.row >> l2 !== s2.row || e3.key.col >> l2 !== s2.col)
        return;
    }
    if (s2.level > e3.key.level) {
      const l2 = s2.level - e3.key.level;
      if (s2.row >> l2 !== e3.key.row || s2.col >> l2 !== e3.key.col)
        return;
    }
    if (s2.equals(e3.key)) {
      for (const l2 of e3.childrenTiles)
        this._matchSymbols(l2, s2, o3);
      return;
    }
    const t2 = /* @__PURE__ */ new Map();
    for (const [i2, n4] of o3) {
      const o4 = [];
      for (const t3 of n4) {
        const i3 = o$2(this.tileCoordRange, t3.xTile, s2.level, s2.col, e3.key.level, e3.key.col), n5 = o$2(this.tileCoordRange, t3.yTile, s2.level, s2.row, e3.key.level, e3.key.row);
        i3 >= 0 && i3 < this.tileCoordRange && n5 >= 0 && n5 < this.tileCoordRange && o4.push({ symbol: t3, xTransformed: i3, yTransformed: n5 });
      }
      const r3 = [], y = e3.key.level < s2.level ? 1 : 1 << e3.key.level - s2.level, a2 = this._tiles.get(e3.id).symbols.get(i2);
      if (a2) {
        const e4 = a2.flat;
        for (const s3 of o4) {
          let l2, o5 = false;
          const t3 = s3.xTransformed, i3 = s3.yTransformed;
          l2 = null != a2.index ? a2.index.getCell(t3, i3) : e4;
          const n5 = s3.symbol, f = n5.hash;
          for (const e5 of l2)
            if (f === e5.hash && Math.abs(t3 - e5.xTile) <= y && Math.abs(i3 - e5.yTile) <= y) {
              const s4 = e5.unique;
              n5.unique = s4, s4.tileSymbols.push(n5), o5 = true;
              break;
            }
          o5 || r3.push(n5);
        }
      }
      r3.length > 0 && t2.set(i2, r3);
    }
    for (const l2 of e3.childrenTiles)
      this._matchSymbols(l2, s2, t2);
  }
  _createUniqueSymbolLayerArray() {
    const e3 = this._uniqueSymbolsReferences, s2 = new Array(e3.size);
    let l2, o3 = 0;
    for (const [t2, i2] of e3) {
      const e4 = new Array(i2.size);
      l2 = 0;
      for (const s3 of i2)
        e4[l2++] = s3;
      s2[o3] = { styleLayerUID: t2, uniqueSymbols: e4 }, o3++;
    }
    return s2;
  }
}
class t extends h$1 {
  constructor() {
    super(...arguments), this._fullCacheLodInfos = null, this._levelByScale = {};
  }
  getTileParentId(e3) {
    const l2 = e$4.pool.acquire(e3), t2 = 0 === l2.level ? null : e$4.getId(l2.level - 1, l2.row >> 1, l2.col >> 1, l2.world);
    return e$4.pool.release(l2), t2;
  }
  getTileCoverage(e3, l2, s2 = true, t2) {
    const o3 = super.getTileCoverage(e3, l2, s2, t2);
    if (!o3)
      return o3;
    const i2 = 1 << o3.lodInfo.level;
    return o3.spans = o3.spans.filter((e4) => e4.row >= 0 && e4.row < i2), o3;
  }
  scaleToLevel(e3) {
    if (this._fullCacheLodInfos || this._initializeFullCacheLODs(this._lodInfos), this._levelByScale[e3])
      return this._levelByScale[e3];
    {
      const l2 = this._fullCacheLodInfos;
      if (e3 > l2[0].scale)
        return l2[0].level;
      let s2, t2;
      for (let o3 = 0; o3 < l2.length - 1; o3++)
        if (t2 = l2[o3 + 1], e3 > t2.scale)
          return s2 = l2[o3], s2.level + (s2.scale - e3) / (s2.scale - t2.scale);
      return l2[l2.length - 1].level;
    }
  }
  _initializeFullCacheLODs(l2) {
    let s2;
    if (0 === l2[0].level)
      s2 = l2.map((e3) => ({ level: e3.level, resolution: e3.resolution, scale: e3.scale }));
    else {
      const l3 = this.tileInfo.size[0], t2 = this.tileInfo.spatialReference;
      s2 = j$1.create({ size: l3, spatialReference: t2 }).lods.map((e3) => ({ level: e3.level, resolution: e3.resolution, scale: e3.scale }));
    }
    for (let e3 = 0; e3 < s2.length; e3++)
      this._levelByScale[s2[e3].scale] = s2[e3].level;
    this._fullCacheLodInfos = s2;
  }
}
export {
  e2 as e,
  h,
  l,
  n3 as n,
  t
};
