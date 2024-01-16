import { cB as a, cD as t, cC as f, du as j$1, cZ as f$1, ap as M$1, aw as u$1, a$ as j$2, iu as o, aM as s$1, bo as e, bp as y, br as c$1, ir as t$1, bN as b$1, c7 as s, cl as u$2, cn as m$1, cy as x$1, dw as p } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var h$1;
const d = new t$1("0/0/0", 0, 0, 0, void 0);
let g = h$1 = class extends a(t(f(b$1))) {
  constructor() {
    super(...arguments), this.tileInfo = j$1.create({ spatialReference: f$1.WebMercator, size: 256 }), this.type = "base-tile", this.fullExtent = new M$1(-20037508342787e-6, -2003750834278e-5, 2003750834278e-5, 20037508342787e-6, f$1.WebMercator), this.spatialReference = f$1.WebMercator;
  }
  getTileBounds(e2, t2, r, o2) {
    const s2 = o2 || u$1();
    return d.level = e2, d.row = t2, d.col = r, d.extent = s2, this.tileInfo.updateTileInfo(d), d.extent = void 0, s2;
  }
  fetchTile(e2, r, o2, s2 = {}) {
    const { signal: i } = s2, a2 = this.getTileUrl(e2, r, o2), p2 = { responseType: "image", signal: i, query: { ...this.refreshParameters } };
    return j$2(a2 ?? "", p2).then((e3) => e3.data);
  }
  async fetchImageBitmapTile(e2, r, o$1, s2 = {}) {
    const { signal: i } = s2;
    if (this.fetchTile !== h$1.prototype.fetchTile) {
      const t2 = await this.fetchTile(e2, r, o$1, s2);
      return o(t2, e2, r, o$1, i);
    }
    const a2 = this.getTileUrl(e2, r, o$1) ?? "", p2 = { responseType: "blob", signal: i, query: { ...this.refreshParameters } }, { data: l } = await j$2(a2, p2);
    return o(l, e2, r, o$1, i);
  }
  getTileUrl() {
    throw new s$1("basetilelayer:gettileurl-not-implemented", "getTileUrl() is not implemented");
  }
};
e([y({ type: j$1 })], g.prototype, "tileInfo", void 0), e([y({ type: ["show", "hide"] })], g.prototype, "listMode", void 0), e([y({ readOnly: true, value: "base-tile" })], g.prototype, "type", void 0), e([y({ nonNullable: true })], g.prototype, "fullExtent", void 0), e([y()], g.prototype, "spatialReference", void 0), g = h$1 = e([c$1("esri.layers.BaseTileLayer")], g);
const j = g;
const c = new s({ BingMapsAerial: "aerial", BingMapsRoad: "road", BingMapsHybrid: "hybrid" }), m = "https://dev.virtualearth.net";
let h = class extends a(u$2(m$1(j))) {
  constructor(e2) {
    super(e2), this.type = "bing-maps", this.tileInfo = new j$1({ size: [256, 256], dpi: 96, origin: new x$1({ x: -20037508342787e-6, y: 20037508342787e-6, spatialReference: f$1.WebMercator }), spatialReference: f$1.WebMercator, lods: [new p({ level: 1, resolution: 78271.5169639999, scale: 295828763795777e-6 }), new p({ level: 2, resolution: 39135.7584820001, scale: 147914381897889e-6 }), new p({ level: 3, resolution: 19567.8792409999, scale: 73957190948944e-6 }), new p({ level: 4, resolution: 9783.93962049996, scale: 36978595474472e-6 }), new p({ level: 5, resolution: 4891.96981024998, scale: 18489297737236e-6 }), new p({ level: 6, resolution: 2445.98490512499, scale: 9244648868618e-6 }), new p({ level: 7, resolution: 1222.99245256249, scale: 4622324434309e-6 }), new p({ level: 8, resolution: 611.49622628138, scale: 2311162217155e-6 }), new p({ level: 9, resolution: 305.748113140558, scale: 1155581108577e-6 }), new p({ level: 10, resolution: 152.874056570411, scale: 577790.554289 }), new p({ level: 11, resolution: 76.4370282850732, scale: 288895.277144 }), new p({ level: 12, resolution: 38.2185141425366, scale: 144447.638572 }), new p({ level: 13, resolution: 19.1092570712683, scale: 72223.819286 }), new p({ level: 14, resolution: 9.55462853563415, scale: 36111.909643 }), new p({ level: 15, resolution: 4.77731426794937, scale: 18055.954822 }), new p({ level: 16, resolution: 2.38865713397468, scale: 9027.977411 }), new p({ level: 17, resolution: 1.19432856685505, scale: 4513.988705 }), new p({ level: 18, resolution: 0.597164283559817, scale: 2256.994353 }), new p({ level: 19, resolution: 0.298582141647617, scale: 1128.497176 }), new p({ level: 20, resolution: 0.1492910708238085, scale: 564.248588 })] }), this.key = null, this.style = "road", this.culture = "en-US", this.region = null, this.portalUrl = null, this.hasAttributionData = true;
  }
  get bingMetadata() {
    return this._get("bingMetadata");
  }
  set bingMetadata(e2) {
    this._set("bingMetadata", e2);
  }
  get copyright() {
    return null != this.bingMetadata ? this.bingMetadata.copyright : null;
  }
  get operationalLayerType() {
    return c.toJSON(this.style);
  }
  get bingLogo() {
    return null != this.bingMetadata ? this.bingMetadata.brandLogoUri : null;
  }
  load(e2) {
    return this.key ? this.addResolvingPromise(this._getMetadata()) : this.portalUrl ? this.addResolvingPromise(this._getPortalBingKey().then(() => this._getMetadata())) : this.addResolvingPromise(Promise.reject(new s$1("bingmapslayer:load", "Bing layer must have bing key."))), Promise.resolve(this);
  }
  getTileUrl(e2, t2, r) {
    if (!this.loaded || null == this.bingMetadata)
      return null;
    const o2 = this.bingMetadata.resourceSets[0].resources[0], a2 = o2.imageUrlSubdomains[t2 % o2.imageUrlSubdomains.length], s2 = this._getQuadKey(e2, t2, r);
    return o2.imageUrl.replace("{subdomain}", a2).replace("{quadkey}", s2);
  }
  async fetchAttributionData() {
    return this.load().then(() => {
      if (null == this.bingMetadata)
        return null;
      return { contributors: this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e2) => ({ attribution: e2.attribution, coverageAreas: e2.coverageAreas.map((e3) => ({ zoomMin: e3.zoomMin, zoomMax: e3.zoomMax, score: 1, bbox: [e3.bbox[0], e3.bbox[1], e3.bbox[2], e3.bbox[3]] })) })) };
    });
  }
  _getMetadata() {
    const e2 = { road: "roadOnDemand", aerial: "aerial", hybrid: "aerialWithLabelsOnDemand" }[this.style];
    return j$2(`${m}/REST/v1/Imagery/Metadata/${e2}`, { responseType: "json", query: { include: "ImageryProviders", uriScheme: "https", key: this.key, suppressStatus: true, output: "json", culture: this.culture, userRegion: this.region } }).then((e3) => {
      const t2 = e3.data;
      if (200 !== t2.statusCode)
        throw new s$1("bingmapslayer:getmetadata", t2.statusDescription);
      if (this.bingMetadata = t2, 0 === this.bingMetadata.resourceSets.length)
        throw new s$1("bingmapslayer:getmetadata", "no bing resourcesets");
      if (0 === this.bingMetadata.resourceSets[0].resources.length)
        throw new s$1("bingmapslayer:getmetadata", "no bing resources");
    }).catch((e3) => {
      throw new s$1("bingmapslayer:getmetadata", e3.message);
    });
  }
  _getPortalBingKey() {
    return j$2(this.portalUrl ?? "", { responseType: "json", authMode: "no-prompt", query: { f: "json" } }).then((e2) => {
      if (!e2.data.bingKey)
        throw new s$1("bingmapslayer:getportalbingkey", "The referenced Portal does not contain a valid bing key");
      this.key = e2.data.bingKey;
    }).catch((e2) => {
      throw new s$1("bingmapslayer:getportalbingkey", e2.message);
    });
  }
  _getQuadKey(e2, t2, r) {
    let o2 = "";
    for (let a2 = e2; a2 > 0; a2--) {
      let e3 = 0;
      const s2 = 1 << a2 - 1;
      0 != (r & s2) && (e3 += 1), 0 != (t2 & s2) && (e3 += 2), o2 += e3.toString();
    }
    return o2;
  }
};
e([y({ json: { read: false, write: false }, value: null })], h.prototype, "bingMetadata", null), e([y({ json: { read: false, write: false }, value: "bing-maps", readOnly: true })], h.prototype, "type", void 0), e([y({ type: j$1 })], h.prototype, "tileInfo", void 0), e([y({ type: String, readOnly: true, json: { read: false, write: false } })], h.prototype, "copyright", null), e([y({ type: String, json: { write: false, read: false } })], h.prototype, "key", void 0), e([y({ type: c.apiValues, nonNullable: true, json: { read: { source: "layerType", reader: c.read } } })], h.prototype, "style", void 0), e([y({ type: ["BingMapsAerial", "BingMapsHybrid", "BingMapsRoad"] })], h.prototype, "operationalLayerType", null), e([y({ type: String, json: { write: false, read: false } })], h.prototype, "culture", void 0), e([y({ type: String, json: { write: false, read: false } })], h.prototype, "region", void 0), e([y({ type: String, json: { write: true, read: true } })], h.prototype, "portalUrl", void 0), e([y({ type: Boolean, json: { write: false, read: false } })], h.prototype, "hasAttributionData", void 0), e([y({ type: String, readOnly: true })], h.prototype, "bingLogo", null), h = e([c$1("esri.layers.BingMapsLayer")], h);
const b = h;
export {
  b as default
};
