import { cB as a, cC as f, cl as u$1, cm as j, cD as t, cn as m$1, bj as bt, cq as a$1, a$ as j$1, cE as k$1, cF as s$1, bo as e, bp as y, ct as o, ap as M$1, cG as I, cH as c, cv as d, br as c$1, cI as a$2, cJ as m, cK as n, cL as y$1, bt as S, bN as b$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const G = ["atom", "xml"], L = { base: a$2, key: "type", typeMap: { "simple-line": m }, errorContext: "symbol" }, R = { base: a$2, key: "type", typeMap: { "picture-marker": n, "simple-marker": y$1 }, errorContext: "symbol" }, k = { base: a$2, key: "type", typeMap: { "simple-fill": S }, errorContext: "symbol" };
let _ = class extends a(f(u$1(j(t(m$1(b$1)))))) {
  constructor(...e2) {
    super(...e2), this.description = null, this.fullExtent = null, this.legendEnabled = true, this.lineSymbol = null, this.pointSymbol = null, this.polygonSymbol = null, this.operationalLayerType = "GeoRSS", this.url = null, this.type = "geo-rss";
  }
  normalizeCtorArgs(e2, o2) {
    return "string" == typeof e2 ? { url: e2, ...o2 } : e2;
  }
  readFeatureCollections(e2, o2) {
    return o2.featureCollection.layers.forEach((e3) => {
      const o3 = e3.layerDefinition.drawingInfo.renderer.symbol;
      o3 && "esriSFS" === o3.type && o3.outline?.style.includes("esriSFS") && (o3.outline.style = "esriSLSSolid");
    }), o2.featureCollection.layers;
  }
  get hasPoints() {
    return this._hasGeometry("esriGeometryPoint");
  }
  get hasPolylines() {
    return this._hasGeometry("esriGeometryPolyline");
  }
  get hasPolygons() {
    return this._hasGeometry("esriGeometryPolygon");
  }
  get title() {
    const e2 = this._get("title");
    return e2 && "defaults" !== this.originOf("title") ? e2 : this.url ? bt(this.url, G) || "GeoRSS" : e2 || "";
  }
  set title(e2) {
    this._set("title", e2);
  }
  load(e2) {
    const o2 = null != e2 ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Map Service", "Feature Service", "Feature Collection", "Scene Service"] }, e2).catch(a$1).then(() => this._fetchService(o2)).then((e3) => {
      this.read(e3, { origin: "service" });
    })), Promise.resolve(this);
  }
  async hasDataChanged() {
    const e2 = await this._fetchService();
    return this.read(e2, { origin: "service", ignoreDefaults: true }), true;
  }
  async _fetchService(e2) {
    const t2 = this.spatialReference, { data: s } = await j$1(s$1.geoRSSServiceUrl, { query: { url: this.url, refresh: !!this.loaded || void 0, outSR: k$1(t2) ? void 0 : t2.wkid ?? JSON.stringify(t2) }, signal: e2 });
    return s;
  }
  _hasGeometry(e2) {
    return this.featureCollections?.some((o2) => o2.featureSet?.geometryType === e2 && o2.featureSet.features?.length > 0) ?? false;
  }
};
e([y()], _.prototype, "description", void 0), e([y()], _.prototype, "featureCollections", void 0), e([o("service", "featureCollections", ["featureCollection.layers"])], _.prototype, "readFeatureCollections", null), e([y({ type: M$1, json: { name: "lookAtExtent" } })], _.prototype, "fullExtent", void 0), e([y(I)], _.prototype, "id", void 0), e([y(c)], _.prototype, "legendEnabled", void 0), e([y({ types: L, json: { write: true } })], _.prototype, "lineSymbol", void 0), e([y({ type: ["show", "hide"] })], _.prototype, "listMode", void 0), e([y({ types: R, json: { write: true } })], _.prototype, "pointSymbol", void 0), e([y({ types: k, json: { write: true } })], _.prototype, "polygonSymbol", void 0), e([y({ type: ["GeoRSS"] })], _.prototype, "operationalLayerType", void 0), e([y(d)], _.prototype, "url", void 0), e([y({ json: { origins: { service: { read: { source: "name", reader: (e2) => e2 || void 0 } } } } })], _.prototype, "title", null), e([y({ readOnly: true, json: { read: false }, value: "geo-rss" })], _.prototype, "type", void 0), _ = e([c$1("esri.layers.GeoRSSLayer")], _);
const w = _;
export {
  w as default
};
