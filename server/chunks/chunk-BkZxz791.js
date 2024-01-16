import { bb as s$1, aM as s$2, gq as t, t1 as e, a_ as I, cs as v$1, a$ as j$1, b1 as s$3, fV as e$1, bD as u$1, bI as b, cT as Et, n1 as r$1, kb as m, en as c$1, b8 as a$1, sT as Y, fN as V, du as j$2, t2 as T, ap as M$1, t3 as pt, t4 as qt, rI as K, t5 as Rt, t6 as q, t7 as d$2, ds as N$1, t8 as g$1, cy as x$1, dw as p$1, cB as a$2, cD as t$1, cj as p$2, ck as l$3, cl as u$2, cm as j$3, j3 as o$2, iO as i, cn as m$1, cq as a$3, t9 as a$4, ta as d$3, e$ as n$1, el as d$4, bo as e$3, bp as y, cZ as f$1, cN as r$2, ct as o$3, br as c$2, bN as b$1 } from "./chunk-KFNcxJaF.js";
import { e as e$2 } from "./chunk-9JEQPlhY.js";
import { l as l$4 } from "./chunk-H8y5q1b_.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-ZLxFSCNp.js";
let A$1 = null;
function o$1(o2) {
  if (A$1)
    return A$1;
  const l4 = { lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==", alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==", animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA" };
  return A$1 = new Promise((A2) => {
    const n2 = new Image();
    n2.onload = () => {
      n2.onload = n2.onerror = null, A2(n2.width > 0 && n2.height > 0);
    }, n2.onerror = () => {
      n2.onload = n2.onerror = null, A2(false);
    }, n2.src = "data:image/webp;base64," + l4[o2];
  }), A$1;
}
const h$1 = 1.15;
class n {
  constructor(t2, e2) {
    this._spriteSource = t2, this._maxTextureSize = e2, this.devicePixelRatio = 1, this._spriteImageFormat = "png", this._isRetina = false, this._spritesData = {}, this.image = null, this.width = null, this.height = null, this.loadStatus = "not-loaded", "url" === t2.type && t2.spriteFormat && (this._spriteImageFormat = t2.spriteFormat), t2.pixelRatio && (this.devicePixelRatio = t2.pixelRatio), this.baseURL = t2.spriteUrl;
  }
  get spriteNames() {
    const t2 = [];
    for (const e2 in this._spritesData)
      t2.push(e2);
    return t2.sort(), t2;
  }
  getSpriteInfo(t2) {
    return this._spritesData ? this._spritesData[t2] : null;
  }
  async load(t2) {
    if (this.baseURL) {
      this.loadStatus = "loading";
      try {
        await this._loadSprites(t2), this.loadStatus = "loaded";
      } catch {
        this.loadStatus = "failed";
      }
    } else
      this.loadStatus = "failed";
  }
  async _loadSprites(t2) {
    this._isRetina = this.devicePixelRatio > h$1;
    const { width: s2, height: r2, data: a2, json: o2 } = await this._getSpriteData(this._spriteSource, t2), n2 = Object.keys(o2);
    if (!n2 || 0 === n2.length || !a2)
      return this._spritesData = this.image = null, void (this.width = this.height = 0);
    this._spritesData = o2, this.width = s2, this.height = r2;
    const d2 = Math.max(this._maxTextureSize, 4096);
    if (s2 > d2 || r2 > d2) {
      const t3 = `Sprite resource for style ${this.baseURL} is bigger than the maximum allowed of ${d2} pixels}`;
      throw s$1.getLogger("esri.layers.support.SpriteSource").error(t3), new s$2("SpriteSource", t3);
    }
    let p2;
    for (let e2 = 0; e2 < a2.length; e2 += 4)
      p2 = a2[e2 + 3] / 255, a2[e2] = a2[e2] * p2, a2[e2 + 1] = a2[e2 + 1] * p2, a2[e2 + 2] = a2[e2 + 2] * p2;
    this.image = a2;
  }
  async _getSpriteData(i2, n2) {
    if ("image" === i2.type) {
      let t$12, a2;
      if (this.devicePixelRatio < h$1) {
        if (!i2.spriteSource1x)
          throw new s$2("SpriteSource", "no image data provided for low resolution sprites!");
        t$12 = i2.spriteSource1x.image, a2 = i2.spriteSource1x.json;
      } else {
        if (!i2.spriteSource2x)
          throw new s$2("SpriteSource", "no image data provided for high resolution sprites!");
        t$12 = i2.spriteSource2x.image, a2 = i2.spriteSource2x.json;
      }
      return "width" in t$12 && "height" in t$12 && "data" in t$12 && (t(t$12.data) || e(t$12.data)) ? { width: t$12.width, height: t$12.height, data: new Uint8Array(t$12.data), json: a2 } : { ...d$1(t$12), json: a2 };
    }
    const p2 = I(this.baseURL), l4 = p2.query ? "?" + v$1(p2.query) : "", g2 = this._isRetina ? "@2x" : "", u2 = `${p2.path}${g2}.${this._spriteImageFormat}${l4}`, c2 = `${p2.path}${g2}.json${l4}`, [m2, S2] = await Promise.all([j$1(c2, n2), j$1(u2, { responseType: "image", ...n2 })]);
    return { ...d$1(S2.data), json: m2.data };
  }
}
function d$1(t2) {
  const e2 = document.createElement("canvas"), i2 = e2.getContext("2d");
  e2.width = t2.width, e2.height = t2.height, i2.drawImage(t2, 0, 0, t2.width, t2.height);
  const s2 = i2.getImageData(0, 0, t2.width, t2.height);
  return { width: t2.width, height: t2.height, data: new Uint8Array(s2.data) };
}
let l$2 = class l {
  constructor(e2) {
    this.url = e2;
  }
  destroy() {
    this._tileIndexPromise = null;
  }
  async fetchTileIndex() {
    return this._tileIndexPromise || (this._tileIndexPromise = j$1(this.url).then((e2) => e2.data.index)), this._tileIndexPromise;
  }
  async dataKey(e2, r2) {
    const l4 = await this.fetchTileIndex();
    return s$3(r2), this._getIndexedDataKey(l4, e2);
  }
  _getIndexedDataKey(e2, t2) {
    const l4 = [t2];
    if (t2.level < 0 || t2.row < 0 || t2.col < 0 || t2.row >> t2.level > 0 || t2.col >> t2.level > 0)
      return null;
    let i2 = t2;
    for (; 0 !== i2.level; )
      i2 = new e$1(i2.level - 1, i2.row >> 1, i2.col >> 1, i2.world), l4.push(i2);
    let o2, s2, n2 = e2, a2 = l4.pop();
    if (1 === n2)
      return a2;
    for (; l4.length; )
      if (o2 = l4.pop(), s2 = (1 & o2.col) + ((1 & o2.row) << 1), n2) {
        if (0 === n2[s2]) {
          a2 = null;
          break;
        }
        if (1 === n2[s2]) {
          a2 = o2;
          break;
        }
        a2 = o2, n2 = n2[s2];
      }
    return a2;
  }
};
let l$1 = class l2 {
  constructor(e2, t2) {
    this._tilemap = e2, this._tileIndexUrl = t2;
  }
  destroy() {
    this._tilemap = u$1(this._tilemap), this._tileIndexPromise = null;
  }
  async fetchTileIndex(t2) {
    return this._tileIndexPromise || (this._tileIndexPromise = j$1(this._tileIndexUrl, { query: { ...t2?.query } }).then((e2) => e2.data.index)), this._tileIndexPromise;
  }
  dataKey(e2, t2) {
    const { level: l4, row: s2, col: o2 } = e2, n2 = new e$1(e2);
    return this._tilemap.fetchAvailabilityUpsample(l4, s2, o2, n2, t2).then(() => (n2.world = e2.world, n2)).catch((e3) => {
      if (b(e3))
        throw e3;
      return null;
    });
  }
};
class l3 {
  constructor(t2) {
    this._tileUrl = t2, this._promise = null, this._abortController = null, this._abortOptions = [];
  }
  getData(t2) {
    null === this._promise && (this._abortController = new AbortController(), this._promise = this._makeRequest(this._tileUrl, this._abortController.signal));
    const e2 = this._abortOptions;
    return e2.push(t2), m(t2, () => {
      e2.every((t3) => c$1(t3)) && this._abortController.abort();
    }), this._promise.then((t3) => a$1(t3));
  }
  async _makeRequest(r2, e2) {
    const { data: o2 } = await j$1(r2, { responseType: "array-buffer", signal: e2 });
    return o2;
  }
}
const a = /* @__PURE__ */ new Map();
function c(t2, r2, e2, o2, s2) {
  const l4 = I(t2), a2 = l4.query;
  if (a2)
    for (const [i2, n2] of Object.entries(a2))
      switch (n2) {
        case "{x}":
          a2[i2] = o2.toString();
          break;
        case "{y}":
          a2[i2] = e2.toString();
          break;
        case "{z}":
          a2[i2] = r2.toString();
      }
  const c2 = l4.path;
  return p(Et(c2.replaceAll(/\{z\}/gi, r2.toString()).replaceAll(/\{y\}/gi, e2.toString()).replaceAll(/\{x\}/gi, o2.toString()), { ...l4.query }), s2);
}
function p(t2, r2) {
  return r$1(a, t2, () => new l3(t2)).getData(r2).then((r3) => (a.delete(t2), r3)).catch((r3) => {
    throw a.delete(t2), r3;
  });
}
class u {
  constructor(h2, u2, m2) {
    this.tilemap = null, this.tileInfo = null, this.capabilities = null, this.fullExtent = null, this.initialExtent = null, this.name = h2, this.sourceUrl = u2;
    const f = I(this.sourceUrl), c2 = a$1(m2), x2 = c2.tiles;
    if (f)
      for (let t2 = 0; t2 < x2.length; t2++) {
        const r2 = I(x2[t2]);
        r2 && (Y(r2.path) || (r2.path = V(f.path, r2.path)), x2[t2] = Et(r2.path, { ...f.query, ...r2.query }));
      }
    this.tileServers = x2;
    const d2 = m2.capabilities && m2.capabilities.split(",").map((t2) => t2.toLowerCase().trim()), y2 = true === m2?.exportTilesAllowed, T$1 = true === d2?.includes("tilemap"), I$1 = y2 && m2.hasOwnProperty("maxExportTilesCount") ? m2.maxExportTilesCount : 0;
    this.capabilities = { operations: { supportsExportTiles: y2, supportsTileMap: T$1 }, exportTiles: y2 ? { maxExportTilesCount: +I$1 } : null }, this.tileInfo = j$2.fromJSON(c2.tileInfo);
    const g2 = m2.tileMap ? Et(V(f.path, m2.tileMap), f.query ?? {}) : null;
    T$1 ? (this.type = "vector-tile", this.tilemap = new l$1(new T({ layer: { parsedUrl: f, tileInfo: this.tileInfo }, minLOD: c2.minLOD ?? this.tileInfo.lods[0].level, maxLOD: c2.maxLOD ?? this.tileInfo.lods[this.tileInfo.lods.length - 1].level }), g2)) : g2 && (this.tilemap = new l$2(g2)), this.fullExtent = M$1.fromJSON(m2.fullExtent), this.initialExtent = M$1.fromJSON(m2.initialExtent);
  }
  destroy() {
    this.tilemap?.destroy();
  }
  async getRefKey(t2, e2) {
    return await this.tilemap?.dataKey(t2, e2) ?? t2;
  }
  requestTile(t2, e2, i2, l4) {
    const s2 = this.tileServers[e2 % this.tileServers.length];
    return c(s2, t2, e2, i2, l4);
  }
  isCompatibleWith(t2) {
    const e2 = this.tileInfo, i2 = t2.tileInfo;
    if (!e2.spatialReference.equals(i2.spatialReference))
      return false;
    if (!e2.origin.equals(i2.origin))
      return false;
    if (Math.round(e2.dpi) !== Math.round(i2.dpi))
      return false;
    const l4 = e2.lods, s2 = i2.lods, r2 = Math.min(l4.length, s2.length);
    for (let o2 = 0; o2 < r2; o2++) {
      const t3 = l4[o2], e3 = s2[o2];
      if (t3.level !== e3.level || Math.round(t3.scale) !== Math.round(e3.scale))
        return false;
    }
    return true;
  }
}
async function x(e2, t2) {
  const r2 = { source: null, sourceBase: null, sourceUrl: null, validatedSource: null, style: null, styleBase: null, styleUrl: null, sourceNameToSource: {}, primarySourceName: "", spriteFormat: "png" }, [s2, o2] = "string" == typeof e2 ? [e2, null] : [null, e2.jsonUrl];
  await S(r2, "esri", e2, o2, t2);
  return { layerDefinition: r2.validatedSource, url: s2, serviceUrl: r2.sourceUrl, style: r2.style, styleUrl: r2.styleUrl, spriteUrl: r2.style.sprite && d(r2.styleBase, r2.style.sprite), spriteFormat: r2.spriteFormat, glyphsUrl: r2.style.glyphs && d(r2.styleBase, r2.style.glyphs), sourceNameToSource: r2.sourceNameToSource, primarySourceName: r2.primarySourceName };
}
function d(...e2) {
  let t2;
  for (const r2 of e2)
    if (null != r2)
      if (pt(r2)) {
        if (t2) {
          const e3 = t2.split("://")[0];
          t2 = e3 + ":" + r2.trim();
        }
      } else
        t2 = Y(r2) ? r2 : V(t2, r2);
  return t2 ? qt(t2) : void 0;
}
async function S(t2, s2, o2, l4, n2) {
  let u2, a2, c2;
  if (s$3(n2), "string" == typeof o2) {
    const t3 = K(o2);
    c2 = await j$1(t3, { ...n2, responseType: "json", query: { f: "json", ...n2?.query } }), c2.ssl && (u2 && (u2 = u2.replace(/^http:/i, "https:")), a2 && (a2 = a2.replace(/^http:/i, "https:"))), u2 = t3, a2 = t3;
  } else
    null != o2 && (c2 = { data: o2 }, u2 = o2.jsonUrl || null, a2 = l4);
  const f = c2?.data;
  if (w(f))
    return t2.styleUrl = u2 || null, j(t2, f, a2, n2);
  if (U(f))
    return t2.sourceUrl ? g(t2, f, a2, false, s2, n2) : (t2.sourceUrl = u2 || null, g(t2, f, a2, true, s2, n2));
  throw new Error("You must specify the URL or the JSON for a service or for a style.");
}
function h(e2) {
  return "object" == typeof e2 && !!e2 && "tilejson" in e2 && null != e2.tilejson;
}
function w(e2) {
  return !!e2 && "sources" in e2 && !!e2.sources;
}
function U(e2) {
  return !w(e2);
}
async function j(e2, t2, r2, s2) {
  const o2 = r2 ? Rt(r2) : q();
  e2.styleBase = o2, e2.style = t2, t2["sprite-format"] && "webp" === t2["sprite-format"].toLowerCase() && (e2.spriteFormat = "webp");
  const l4 = [];
  if (t2.sources && t2.sources.esri) {
    const r3 = t2.sources.esri;
    r3.url ? await S(e2, "esri", d(o2, r3.url), void 0, s2) : l4.push(S(e2, "esri", r3, o2, s2));
  }
  for (const n2 of Object.keys(t2.sources))
    "esri" !== n2 && "vector" === t2.sources[n2].type && (t2.sources[n2].url ? l4.push(S(e2, n2, d(o2, t2.sources[n2].url), void 0, s2)) : t2.sources[n2].tiles && l4.push(S(e2, n2, t2.sources[n2], o2, s2)));
  await Promise.all(l4);
}
async function g(e2, t2, r2, s2, o2, l4) {
  const i2 = r2 ? qt(r2) + "/" : q(), u$12 = v(t2), f = new u(o2, Et(i2, l4?.query ?? {}), u$12);
  if (!s2 && e2.primarySourceName in e2.sourceNameToSource) {
    const t3 = e2.sourceNameToSource[e2.primarySourceName];
    if (!t3.isCompatibleWith(f))
      return;
    null != f.fullExtent && (null != t3.fullExtent ? t3.fullExtent.union(f.fullExtent) : t3.fullExtent = f.fullExtent.clone()), t3.tileInfo && f.tileInfo && t3.tileInfo.lods.length < f.tileInfo.lods.length && (t3.tileInfo = f.tileInfo);
  }
  if (s2 && (e2.sourceBase = i2, e2.source = t2, e2.validatedSource = u$12, e2.primarySourceName = o2), e2.sourceNameToSource[o2] = f, !h(e2) && "defaultStyles" in t2 && !e2.style) {
    if (null == t2.defaultStyles)
      throw new Error();
    return "string" == typeof t2.defaultStyles ? S(e2, "", d(i2, t2.defaultStyles, "root.json"), void 0, l4) : S(e2, "", t2.defaultStyles, d(i2, "root.json"), l4);
  }
}
function v(e2) {
  if (e2.hasOwnProperty("tileInfo"))
    return e2;
  const r2 = { xmin: -20037507067161843e-9, ymin: -20037507067161843e-9, xmax: 20037507067161843e-9, ymax: 20037507067161843e-9, spatialReference: { wkid: 102100, latestWkid: 3857 } };
  let s2 = null;
  if (h(e2)) {
    const { bounds: r3 } = e2;
    if (r3) {
      const e3 = d$2({ x: r3[0], y: r3[1], spatialReference: a$1(N$1) }), o3 = d$2({ x: r3[2], y: r3[3], spatialReference: a$1(N$1) });
      s2 = { xmin: e3.x, ymin: e3.y, xmax: o3.x, ymax: o3.y, spatialReference: a$1(g$1) };
    }
  }
  null === s2 && (s2 = r2);
  const o2 = 512;
  let l4 = 78271.51696400007, n2 = 2958287637957775e-7;
  const i2 = [], u2 = e2.hasOwnProperty("maxzoom") && null != e2.maxzoom ? +e2.maxzoom : 22, a2 = 0, c2 = 0;
  for (let t2 = 0; t2 <= u2; t2++)
    i2.push({ level: t2, scale: n2, resolution: l4 }), l4 /= 2, n2 /= 2;
  return { capabilities: "TilesOnly", initialExtent: s2, fullExtent: r2, minScale: a2, maxScale: c2, tiles: e2.tiles, tileInfo: { rows: o2, cols: o2, dpi: 96, format: "pbf", origin: { x: -20037508342787e-6, y: 20037508342787e-6 }, lods: i2, spatialReference: a$1(g$1) } };
}
const s = 1e-6;
function r(l4, e2) {
  if (l4 === e2)
    return true;
  if (null == l4 && null != e2)
    return false;
  if (null != l4 && null == e2)
    return false;
  if (null == l4 || null == e2)
    return false;
  if (!l4.spatialReference.equals(e2.spatialReference) || l4.dpi !== e2.dpi)
    return false;
  const n2 = l4.origin, r2 = e2.origin;
  if (Math.abs(n2.x - r2.x) >= s || Math.abs(n2.y - r2.y) >= s)
    return false;
  let o2, t2;
  l4.lods[0].scale > e2.lods[0].scale ? (o2 = l4, t2 = e2) : (t2 = l4, o2 = e2);
  for (let i2 = o2.lods[0].scale; i2 >= t2.lods[t2.lods.length - 1].scale - s; i2 /= 2)
    if (Math.abs(i2 - t2.lods[0].scale) < s)
      return true;
  return false;
}
function o(s2, r2) {
  if (s2 === r2)
    return s2;
  if (null == s2 && null != r2)
    return r2;
  if (null != s2 && null == r2)
    return s2;
  if (null == s2 || null == r2)
    return null;
  const o2 = s2.size[0], t2 = s2.format, i2 = s2.dpi, u2 = new x$1({ x: s2.origin.x, y: s2.origin.y }), a2 = s2.spatialReference, f = s2.lods[0].scale > r2.lods[0].scale ? s2.lods[0] : r2.lods[0], d2 = s2.lods[s2.lods.length - 1].scale <= r2.lods[r2.lods.length - 1].scale ? s2.lods[s2.lods.length - 1] : r2.lods[r2.lods.length - 1], c2 = f.scale, p2 = f.resolution, g2 = d2.scale, h2 = [];
  let m2 = c2, y2 = p2, x2 = 0;
  for (; m2 > g2; )
    h2.push(new p$1({ level: x2, resolution: y2, scale: m2 })), x2++, m2 /= 2, y2 /= 2;
  return new j$2({ size: [o2, o2], dpi: i2, format: t2 || "pbf", origin: u2, lods: h2, spatialReference: a2 });
}
let N = class extends a$2(t$1(p$2(l$3(u$2(j$3(o$2(i(m$1(b$1))))))))) {
  constructor(...e2) {
    super(...e2), this._spriteSourceMap = /* @__PURE__ */ new Map(), this.currentStyleInfo = null, this.isReference = null, this.operationalLayerType = "VectorTileLayer", this.style = null, this.tilemapCache = null, this.type = "vector-tile", this.url = null, this.path = null;
  }
  normalizeCtorArgs(e2, t2) {
    return "string" == typeof e2 ? { url: e2, ...t2 } : e2;
  }
  destroy() {
    if (this.sourceNameToSource)
      for (const e2 of Object.values(this.sourceNameToSource))
        e2?.destroy();
    this.primarySource?.destroy(), this._spriteSourceMap.clear();
  }
  async prefetchResources(e2) {
    await this.loadSpriteSource(globalThis.devicePixelRatio || 1, e2);
  }
  load(e2) {
    const r2 = this.loadFromPortal({ supportedTypes: ["Vector Tile Service"], supportsData: false }, e2).catch(a$3).then(async () => {
      if (!this.portalItem?.id)
        return;
      const r3 = `${this.portalItem.itemCdnUrl}/resources/styles/root.json`;
      (await j$1(r3, { ...e2, query: { f: "json", ...this.customParameters, token: this.apiKey } })).data && this.read({ url: r3 }, e$2(this.portalItem));
    }).catch(a$3).then(() => this._loadStyle(e2));
    return this.addResolvingPromise(r2), Promise.resolve(this);
  }
  get attributionDataUrl() {
    const e2 = this.currentStyleInfo, t2 = e2?.serviceUrl && I(e2.serviceUrl);
    if (!t2)
      return null;
    const r2 = this._getDefaultAttribution(t2.path);
    return r2 ? Et(r2, { ...this.customParameters, token: this.apiKey }) : null;
  }
  get capabilities() {
    const e2 = this.primarySource;
    return e2 ? e2.capabilities : { operations: { supportsExportTiles: false, supportsTileMap: false }, exportTiles: null };
  }
  get fullExtent() {
    return this.primarySource?.fullExtent || null;
  }
  get initialExtent() {
    return this.primarySource?.initialExtent || null;
  }
  get parsedUrl() {
    return this.serviceUrl ? I(this.serviceUrl) : null;
  }
  get serviceUrl() {
    return this.currentStyleInfo?.serviceUrl || null;
  }
  get spatialReference() {
    return this.tileInfo?.spatialReference ?? null;
  }
  get styleUrl() {
    return this.currentStyleInfo?.styleUrl || null;
  }
  writeStyleUrl(e2, t2) {
    e2 && pt(e2) && (e2 = `https:${e2}`);
    const r2 = a$4(e2);
    t2.styleUrl = d$3(e2, r2);
  }
  get tileInfo() {
    const e2 = [];
    for (const r2 in this.sourceNameToSource)
      e2.push(this.sourceNameToSource[r2]);
    let t2 = this.primarySource?.tileInfo || new j$2();
    if (e2.length > 1)
      for (let r$12 = 0; r$12 < e2.length; r$12++)
        r(t2, e2[r$12].tileInfo) && (t2 = o(t2, e2[r$12].tileInfo));
    return t2;
  }
  readTilemapCache(e2, t2) {
    const r2 = t2.capabilities?.includes("Tilemap");
    return r2 ? new T({ layer: this }) : null;
  }
  readVersion(e2, t2) {
    return t2.version ? parseFloat(t2.version) : parseFloat(t2.currentVersion);
  }
  async loadSpriteSource(e2 = 1, t2) {
    if (!this._spriteSourceMap.has(e2)) {
      const r2 = n$1("2d").maxTextureSize, i2 = this.currentStyleInfo?.spriteUrl ? Et(this.currentStyleInfo.spriteUrl, { ...this.customParameters, token: this.apiKey }) : null, o2 = new n({ type: "url", spriteUrl: i2, pixelRatio: e2, spriteFormat: this.currentStyleInfo?.spriteFormat }, r2);
      await o2.load(t2), this._spriteSourceMap.set(e2, o2);
    }
    return this._spriteSourceMap.get(e2);
  }
  async setSpriteSource(e2, t2) {
    if (!e2)
      return null;
    const r2 = n$1("2d").maxTextureSize, i2 = e2.spriteUrl, o2 = i2 ? Et(i2, { ...this.customParameters, token: this.apiKey }) : null;
    if (!o2 && "url" === e2.type)
      return null;
    const s2 = new n(e2, r2);
    try {
      await s2.load(t2);
      const r3 = e2.pixelRatio || 1;
      return this._spriteSourceMap.clear(), this._spriteSourceMap.set(r3, s2), o2 && this.currentStyleInfo && (this.currentStyleInfo.spriteUrl = o2), this.emit("spriteSource-change", { spriteSource: s2 }), s2;
    } catch (a2) {
      a$3(a2);
    }
    return null;
  }
  async loadStyle(e2, t2) {
    const i2 = e2 || this.style || this.url;
    return this._loadingTask && "string" == typeof i2 && this.url === i2 || (this._loadingTask?.abort(), this._loadingTask = d$4((e3) => (this._spriteSourceMap.clear(), this._getSourceAndStyle(i2, { signal: e3 })), t2)), this._loadingTask.promise;
  }
  getStyleLayerId(e2) {
    return this.styleRepository.getStyleLayerId(e2);
  }
  getStyleLayerIndex(e2) {
    return this.styleRepository.getStyleLayerIndex(e2);
  }
  getPaintProperties(e2) {
    return a$1(this.styleRepository?.getPaintProperties(e2));
  }
  setPaintProperties(e2, t2) {
    const r2 = this.styleRepository.isPainterDataDriven(e2);
    this.styleRepository.setPaintProperties(e2, t2);
    const i2 = this.styleRepository.isPainterDataDriven(e2);
    this.emit("paint-change", { layer: e2, paint: t2, isDataDriven: r2 || i2 });
  }
  getStyleLayer(e2) {
    return a$1(this.styleRepository.getStyleLayer(e2));
  }
  setStyleLayer(e2, t2) {
    this.styleRepository.setStyleLayer(e2, t2), this.emit("style-layer-change", { layer: e2, index: t2 });
  }
  deleteStyleLayer(e2) {
    this.styleRepository.deleteStyleLayer(e2), this.emit("delete-style-layer", { layer: e2 });
  }
  getLayoutProperties(e2) {
    return a$1(this.styleRepository.getLayoutProperties(e2));
  }
  setLayoutProperties(e2, t2) {
    this.styleRepository.setLayoutProperties(e2, t2), this.emit("layout-change", { layer: e2, layout: t2 });
  }
  setStyleLayerVisibility(e2, t2) {
    this.styleRepository.setStyleLayerVisibility(e2, t2), this.emit("style-layer-visibility-change", { layer: e2, visibility: t2 });
  }
  getStyleLayerVisibility(e2) {
    return this.styleRepository.getStyleLayerVisibility(e2);
  }
  write(e2, t2) {
    return t2?.origin && !this.styleUrl ? (t2.messages && t2.messages.push(new s$2("vectortilelayer:unsupported", `VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`, { layer: this })), null) : super.write(e2, t2);
  }
  getTileUrl(e2, t2, r2) {
    return null;
  }
  async _getSourceAndStyle(e2, t2) {
    if (!e2)
      throw new Error("invalid style!");
    const r2 = await x(e2, { ...t2, query: { ...this.customParameters, token: this.apiKey } });
    if ("webp" === r2.spriteFormat) {
      await o$1("lossy") || (r2.spriteFormat = "png");
    }
    this._set("currentStyleInfo", { ...r2 }), "string" == typeof e2 ? (this.url = e2, this.style = null) : (this.url = null, this.style = e2), this._set("sourceNameToSource", r2.sourceNameToSource), this._set("primarySource", r2.sourceNameToSource[r2.primarySourceName]), this._set("styleRepository", new l$4(r2.style)), this.read(r2.layerDefinition, { origin: "service" }), this.emit("load-style");
  }
  _getDefaultAttribution(e2) {
    const t2 = e2.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i), r2 = ["OpenStreetMap_v2", "OpenStreetMap_Daylight_v2", "OpenStreetMap_Export_v2", "OpenStreetMap_FTS_v2", "OpenStreetMap_GCS_v2", "World_Basemap", "World_Basemap_v2", "World_Basemap_Export_v2", "World_Basemap_GCS_v2", "World_Basemap_WGS84", "World_Contours_v2"];
    if (!t2)
      return;
    const i2 = t2[2] && t2[2].toLowerCase();
    if (!i2)
      return;
    const o2 = t2[1] || "";
    for (const s2 of r2)
      if (s2.toLowerCase().includes(i2))
        return K(`//static.arcgis.com/attribution/Vector${o2}/${s2}`);
  }
  async _loadStyle(e2) {
    return this._loadingTask?.promise ?? this.loadStyle(null, e2);
  }
};
e$3([y({ readOnly: true })], N.prototype, "attributionDataUrl", null), e$3([y({ type: ["show", "hide"] })], N.prototype, "listMode", void 0), e$3([y({ json: { read: true, write: true } })], N.prototype, "blendMode", void 0), e$3([y({ readOnly: true, json: { read: false } })], N.prototype, "capabilities", null), e$3([y({ readOnly: true })], N.prototype, "currentStyleInfo", void 0), e$3([y({ json: { read: false }, readOnly: true, type: M$1 })], N.prototype, "fullExtent", null), e$3([y({ json: { read: false }, readOnly: true, type: M$1 })], N.prototype, "initialExtent", null), e$3([y({ type: Boolean, json: { read: false, write: { enabled: true, overridePolicy: () => ({ enabled: false }) } } })], N.prototype, "isReference", void 0), e$3([y({ type: ["VectorTileLayer"] })], N.prototype, "operationalLayerType", void 0), e$3([y({ readOnly: true })], N.prototype, "parsedUrl", null), e$3([y()], N.prototype, "style", void 0), e$3([y({ readOnly: true })], N.prototype, "serviceUrl", null), e$3([y({ type: f$1, readOnly: true })], N.prototype, "spatialReference", null), e$3([y({ readOnly: true })], N.prototype, "styleRepository", void 0), e$3([y({ readOnly: true })], N.prototype, "sourceNameToSource", void 0), e$3([y({ readOnly: true })], N.prototype, "primarySource", void 0), e$3([y({ type: String, readOnly: true, json: { write: { ignoreOrigin: true }, origins: { "web-document": { write: { ignoreOrigin: true, isRequired: true } } } } })], N.prototype, "styleUrl", null), e$3([r$2(["portal-item", "web-document"], "styleUrl")], N.prototype, "writeStyleUrl", null), e$3([y({ json: { read: false, origins: { service: { read: false } } }, readOnly: true, type: j$2 })], N.prototype, "tileInfo", null), e$3([y()], N.prototype, "tilemapCache", void 0), e$3([o$3("service", "tilemapCache", ["capabilities", "tileInfo"])], N.prototype, "readTilemapCache", null), e$3([y({ json: { read: false }, readOnly: true, value: "vector-tile" })], N.prototype, "type", void 0), e$3([y({ json: { origins: { "web-document": { read: { source: "styleUrl" } }, "portal-item": { read: { source: "url" } } }, write: false, read: false } })], N.prototype, "url", void 0), e$3([y({ readOnly: true })], N.prototype, "version", void 0), e$3([o$3("version", ["version", "currentVersion"])], N.prototype, "readVersion", null), e$3([y({ type: String, json: { origins: { "web-scene": { read: true, write: true } }, read: false } })], N.prototype, "path", void 0), N = e$3([c$2("esri.layers.VectorTileLayer")], N);
const A = N;
export {
  A as default
};
