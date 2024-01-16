import { cj as p, ck as l, cl as u$1, cm as j, cn as m$1, co as s, cp as t$1, aM as s$1, cq as a, a$ as j$1, cr as a$1, cs as v, b1 as s$2, bo as e, bp as y, ct as o, cu as v$1, cv as d, br as c, bN as b$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let S = class extends p(l(u$1(j(m$1(b$1))))) {
  constructor(...e2) {
    super(...e2), this.capabilities = { operations: { supportsTileMap: false } }, this.copyright = null, this.heightModelInfo = null, this.path = null, this.minScale = void 0, this.maxScale = void 0, this.opacity = 1, this.operationalLayerType = "ArcGISTiledElevationServiceLayer", this.sourceJSON = null, this.type = "elevation", this.url = null, this.version = null, this._lercDecoder = s();
  }
  normalizeCtorArgs(e2, r) {
    return "string" == typeof e2 ? { url: e2, ...r } : e2;
  }
  destroy() {
    this._lercDecoder = t$1(this._lercDecoder);
  }
  readCapabilities(e2, r) {
    const t = r.capabilities && r.capabilities.split(",").map((e3) => e3.toLowerCase().trim());
    if (!t)
      return { operations: { supportsTileMap: false } };
    return { operations: { supportsTileMap: t.includes("tilemap") } };
  }
  readVersion(e2, r) {
    let t = r.currentVersion;
    return t || (t = 9.3), t;
  }
  load(e2) {
    const r = null != e2 ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Image Service"], supportsData: false, validateItem: (e3) => {
      for (let r2 = 0; r2 < e3.typeKeywords.length; r2++)
        if ("elevation 3d layer" === e3.typeKeywords[r2].toLowerCase())
          return true;
      throw new s$1("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}' ", { type: "Image Service", expectedType: "Image Service Elevation 3D Layer" });
    } }, e2).catch(a).then(() => this._fetchImageService(r))), Promise.resolve(this);
  }
  fetchTile(e2, t, i, o2) {
    const s2 = null != (o2 = o2 || { signal: null }).signal ? o2.signal : o2.signal = new AbortController().signal, a2 = { responseType: "array-buffer", signal: s2 }, p2 = { noDataValue: o2.noDataValue, returnFileInfo: true };
    return this.load().then(() => this._fetchTileAvailability(e2, t, i, o2)).then(() => j$1(this.getTileUrl(e2, t, i), a2)).then((e3) => this._lercDecoder.decode(e3.data, p2, s2)).then((e3) => new a$1(e3));
  }
  getTileUrl(e2, r, t) {
    const i = !this.capabilities.operations.supportsTileMap && this.supportsBlankTile, o2 = v({ ...this.parsedUrl.query, blankTile: !i && null });
    return `${this.parsedUrl.path}/tile/${e2}/${r}/${t}${o2 ? "?" + o2 : ""}`;
  }
  async queryElevation(e2, r) {
    const { ElevationQuery: t } = await import("./chunk-P5Qv6FmB.js");
    s$2(r);
    return new t().query(this, e2, r);
  }
  async createElevationSampler(e2, r) {
    const { ElevationQuery: t } = await import("./chunk-P5Qv6FmB.js");
    s$2(r);
    return new t().createSampler(this, e2, r);
  }
  _fetchTileAvailability(e2, r, t, i) {
    return this.tilemapCache ? this.tilemapCache.fetchAvailability(e2, r, t, i) : Promise.resolve("unknown");
  }
  async _fetchImageService(e2) {
    if (this.sourceJSON)
      return this.sourceJSON;
    const t = { query: { f: "json", ...this.parsedUrl.query }, responseType: "json", signal: e2 }, i = await j$1(this.parsedUrl.path, t);
    i.ssl && (this.url = this.url?.replace(/^http:/i, "https:")), this.sourceJSON = i.data, this.read(i.data, { origin: "service", url: this.parsedUrl });
  }
  get hasOverriddenFetchTile() {
    return !this.fetchTile[w];
  }
};
e([y({ readOnly: true })], S.prototype, "capabilities", void 0), e([o("service", "capabilities", ["capabilities"])], S.prototype, "readCapabilities", null), e([y({ json: { read: { source: "copyrightText" } } })], S.prototype, "copyright", void 0), e([y({ readOnly: true, type: v$1 })], S.prototype, "heightModelInfo", void 0), e([y({ type: String, json: { origins: { "web-scene": { read: true, write: true } }, read: false } })], S.prototype, "path", void 0), e([y({ type: ["show", "hide"] })], S.prototype, "listMode", void 0), e([y({ json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } }, readOnly: true })], S.prototype, "minScale", void 0), e([y({ json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } }, readOnly: true })], S.prototype, "maxScale", void 0), e([y({ json: { read: false, write: false, origins: { "web-document": { read: false, write: false } } } })], S.prototype, "opacity", void 0), e([y({ type: ["ArcGISTiledElevationServiceLayer"] })], S.prototype, "operationalLayerType", void 0), e([y()], S.prototype, "sourceJSON", void 0), e([y({ json: { read: false }, value: "elevation", readOnly: true })], S.prototype, "type", void 0), e([y(d)], S.prototype, "url", void 0), e([y()], S.prototype, "version", void 0), e([o("version", ["currentVersion"])], S.prototype, "readVersion", null), S = e([c("esri.layers.ElevationLayer")], S);
const w = Symbol("default-fetch-tile");
S.prototype.fetchTile[w] = true;
const T = S;
export {
  T as default
};
